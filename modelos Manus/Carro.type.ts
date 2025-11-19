import { gql } from 'apollo-server-express';

export const CarroTypeDef = gql`
  type Carro {
    id: ID!
    placa: String!
    marca: String!
    modelo: String!
    cor: String!
    crlv: String!
    vCrlv: Boolean
    chassi: String!
    ano: String!
    agregadoId: ID
    motoristaId: ID
    operadoraId: ID
    operadora: Operadora
    motorista: Motorista
    vouchers: [Voucher!]!
    modeloVoucherFixo: [ModeloVoucherFixo!]!
  }

  input CarroInput {
    placa: String!
    marca: String!
    modelo: String!
    cor: String!
    crlv: String!
    vCrlv: Boolean
    chassi: String!
    ano: String!
    agregadoId: ID
    motoristaId: ID
    operadoraId: ID
  }

  input CarroUpdateInput {
    placa: String
    marca: String
    modelo: String
    cor: String
    crlv: String
    vCrlv: Boolean
    chassi: String
    ano: String
    agregadoId: ID
    motoristaId: ID
    operadoraId: ID
  }

  extend type Query {
    carros: [Carro!]!
    carro(id: ID!): Carro
    carroByPlaca(placa: String!): Carro
    carrosByMotorista(motoristaId: ID!): [Carro!]!
    carrosByOperadora(operadoraId: ID!): [Carro!]!
  }

  extend type Mutation {
    createCarro(input: CarroInput!): Carro!
    updateCarro(id: ID!, input: CarroUpdateInput!): Carro!
    deleteCarro(id: ID!): Boolean!
  }
`;

