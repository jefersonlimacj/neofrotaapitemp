import { gql } from 'apollo-server-express';

export const RotaTypeDef = gql`
  type Rota {
    id: ID!
    origem: String!
    destino: String!
    operadoraId: ID!
    empresaClienteId: ID
    rotaValor: [RotaValor!]!
    vouchers: [Voucher!]!
    operadora: Operadora
    empresaCliente: EmpresaCliente
  }

  input RotaInput {
    origem: String!
    destino: String!
    operadoraId: ID!
    empresaClienteId: ID
  }

  input RotaUpdateInput {
    origem: String
    destino: String
    operadoraId: ID
    empresaClienteId: ID
  }

  extend type Query {
    rotas: [Rota!]!
    rota(id: ID!): Rota
    rotasByOperadora(operadoraId: ID!): [Rota!]!
    rotasByEmpresa(empresaClienteId: ID!): [Rota!]!
    rotasByOrigemDestino(origem: String!, destino: String!): [Rota!]!
  }

  extend type Mutation {
    createRota(input: RotaInput!): Rota!
    updateRota(id: ID!, input: RotaUpdateInput!): Rota!
    deleteRota(id: ID!): Boolean!
  }
`;

