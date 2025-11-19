import gql from "graphql-tag";

export const passageirosTypes = gql`
  type Passageiro {
    id: ID!
    nome: String!
    matricula: String!
    telefone: String
    email: String
    ativo: Boolean!
    fotoPerfilPassageiro: String!
    centroCustoClienteId: CentroCusto
    empresaClienteId: EmpresaCliente
  }

  type Query {
    passageiros: [Passageiro!]!
    passageiro(id: ID!): Passageiro
    passageirosByCentroCustoCliente(centroCustoClienteId: ID!): [Passageiro!]!
    passageirosByEmpresaCliente(empresaClienteId: ID!): [Passageiro!]!

  }

  input PassageiroInput {
    nome: String!
    matricula: String!
    telefone: String
    email: String
    ativo: Boolean!
    fotoPerfilPassageiro: String!
    centroCustoClienteId: Int
    empresaClienteId: Int
  }

  type Mutation {
    createPassageiro(data: PassageiroInput!): Passageiro!
    updatePassageiro(id: ID!, data: PassageiroInput!): Passageiro!
    deletePassageiro(id: ID!): Passageiro!
  }
`;
