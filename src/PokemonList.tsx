import React from "react";
import POKEMON_QUERY from "./PokemonQuery";
import { useQuery } from "@apollo/client";
import {
  Pokemons,
  PokemonsVariables,
  Pokemons_pokemons,
  Pokemons_pokemons_attacks_fast
} from "./__generated__/Pokemons";

import { message, PageHeader, Spin, Row, Col, Card, Divider, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const PokemonList: React.FC = () => {
  const POKEMONS_TO_FETCH = 16;
  const PAGE_TITLE = "Pokemon";
  const PAGE_SUBTITLE = "A portmanteau of the Japanese brand Pocket Monsters."
  const RESISTANT_TITLE = "Resistant";
  const WEAKNESSES_TITLE = "Weaknesses";
  const ATTACK_NAME_COLUMN_TITLE = "Fast Attacks";
  const ATTACK_DAMAGE_COLUMN_TITLE = "Damage";

  const { loading, error, data } = useQuery<Pokemons, PokemonsVariables>(
    POKEMON_QUERY,
    {
      variables: {
        first: POKEMONS_TO_FETCH,
      },
    }
  );

  if (error) message.error(`Error: ${error}`);

  const renderAttacks = (pokemon: Pokemons_pokemons) => {

    const fastAttacks = pokemon.attacks?.fast?.filter(notEmpty);

    const columns = [
      {
        title: ATTACK_NAME_COLUMN_TITLE,
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: ATTACK_DAMAGE_COLUMN_TITLE,
        dataIndex: 'damage',
        key: 'damage'
      }
    ]

    return (
      <Table columns={columns} dataSource={fastAttacks} pagination={false} />
    )
  }

  return (
    <div>
      {loading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : (
        <React.Fragment>
          <PageHeader
            title={PAGE_TITLE}
            subTitle={PAGE_SUBTITLE}
          />
          {notEmpty(data) && notEmpty(data.pokemons)
            ? data.pokemons
                .filter(notEmpty)
                .map((pokemon: Pokemons_pokemons) => (
                  <Card>
                    <Card.Meta
                      title={pokemon.name}
                      description={pokemon.classification}
                    />
                    <Row gutter={16} style={{marginTop:16}}>
                    <Col md={24} lg={12}>{<><strong>{RESISTANT_TITLE}:</strong> {pokemon.resistant?.join(", ")}</>}</Col>
                      <Col md={24} lg={12}>{<><strong>{WEAKNESSES_TITLE}:</strong> {pokemon.weaknesses?.join(", ")}</>}</Col>
                    </Row>
                    <Divider/>
                    <Row gutter={16}>
                      <Col sm={24} xs={24} md={24} lg={8}>{<>{renderAttacks(pokemon)}</>}</Col>
                    </Row>
                  </Card>
                ))
            : ""}
        </React.Fragment>
      )}
    </div>
  );
};

export default PokemonList;
