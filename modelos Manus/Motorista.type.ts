import { gql } from 'apollo-server-express';

export const MotoristaTypeDef = gql`
  type Motorista {
    id: ID!
    nome: String!
    email: String
    senha: String
    fotoMotorista: String
    cpf: String
    cnh: String
    vCnh: String
    statusMotorista: Boolean
    tipoMotorista: String
    dataCriacao: String
    operadoraId: ID
    statusCnh: Boolean
    operadora: Operadora
    carro: [Carro!]!
    modeloVoucherFixo: [ModeloVoucherFixo!]!
    voucher: [Voucher!]!
    agregadoRelacao: [RelacaoAgrdFunc!]!
    funcionarioRelacao: [RelacaoAgrdFunc!]!
  }

  input MotoristaInput {
    nome: String!
    email: String
    senha: String
    fotoMotorista: String
    cpf: String
    cnh: String
    vCnh: String
    statusMotorista: Boolean
    tipoMotorista: String
    operadoraId: ID
    statusCnh: Boolean
  }

  input MotoristaUpdateInput {
    nome: String
    email: String
    senha: String
    fotoMotorista: String
    cpf: String
    cnh: String
    vCnh: String
    statusMotorista: Boolean
    tipoMotorista: String
    operadoraId: ID
    statusCnh: Boolean
  }

  extend type Query {
    motoristas: [Motorista!]!
    motorista(id: ID!): Motorista
    motoristaByEmail(email: String!): Motorista
    motoristasByOperadora(operadoraId: ID!): [Motorista!]!
    motoristasByCpf(cpf: String!): Motorista
  }

  extend type Mutation {
    createMotorista(input: MotoristaInput!): Motorista!
    updateMotorista(id: ID!, input: MotoristaUpdateInput!): Motorista!
    deleteMotorista(id: ID!): Boolean!
  }
`;

