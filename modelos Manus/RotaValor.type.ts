import { gql } from 'apollo-server-express';

export const RotaValorTypeDef = gql`
  enum CategoriasCarros {
    Sedan
    MiniVan
    Van
    Micro
    Onibus
    Material
  }

  type RotaValor {
    id: ID!
    rotaId: ID!
    categoria: CategoriasCarros!
    empresaClienteId: ID
    operadoraId: ID
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorHoraParada: Float!
    valorHoraParadaRepasse: Float!
    valorDeslocamento: Float!
    valorDeslocamentoRepasse: Float!
    valorPedagio: Float!
    rota: Rota!
    empresaCliente: EmpresaCliente
    operadora: Operadora
  }

  input RotaValorInput {
    rotaId: ID!
    categoria: CategoriasCarros!
    empresaClienteId: ID
    operadoraId: ID
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorHoraParada: Float!
    valorHoraParadaRepasse: Float!
    valorDeslocamento: Float!
    valorDeslocamentoRepasse: Float!
    valorPedagio: Float!
  }

  input RotaValorUpdateInput {
    rotaId: ID
    categoria: CategoriasCarros
    empresaClienteId: ID
    operadoraId: ID
    valorViagem: Float
    valorViagemRepasse: Float
    valorHoraParada: Float
    valorHoraParadaRepasse: Float
    valorDeslocamento: Float
    valorDeslocamentoRepasse: Float
    valorPedagio: Float
  }

  extend type Query {
    rotaValores: [RotaValor!]!
    rotaValor(id: ID!): RotaValor
    rotaValoresByRota(rotaId: ID!): [RotaValor!]!
    rotaValoresByCategoria(categoria: CategoriasCarros!): [RotaValor!]!
    rotaValoresByEmpresa(empresaClienteId: ID!): [RotaValor!]!
  }

  extend type Mutation {
    createRotaValor(input: RotaValorInput!): RotaValor!
    updateRotaValor(id: ID!, input: RotaValorUpdateInput!): RotaValor!
    deleteRotaValor(id: ID!): Boolean!
  }
`;

