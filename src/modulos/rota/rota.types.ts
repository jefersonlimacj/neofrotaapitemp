import gql from 'graphql-tag';

export const modeloRotaTypes = gql`
  type Rota {
    id: ID!
    origem: String!
    destino: String!
    operadoraId: Operadora!
    empresaClienteId: EmpresaCliente!
    rotaValor: [RotaValor]
    vouchers: [Voucher!]
  }

  type Query {
    rotas: [Rota!]
    rota(id: ID!): Rota
    rotaEmpresaClienteId(id: ID!): [Rota]
  }

  input RotaInput {
    origem: String!
    destino: String!
    operadoraId: ID!
    empresaClienteId: ID!
  }

  type Mutation {
    createRota(input: RotaInput!): Rota
    updateRota(id: ID!, input: RotaInput!): Rota
    deleteRota(id: ID!): Rota
  }
`;
