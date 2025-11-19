import { gql } from 'apollo-server-express';

export const ModeloVoucherFixoTypeDef = gql`
  enum DiaDaSemana {
    Segunda
    Terca
    Quarta
    Quinta
    Sexta
    Sabado
    Domingo
  }

  type ModeloVoucherFixo {
    id: ID!
    nomeModelo: String!
    ativo: Boolean!
    empresaClienteId: ID!
    motoristaId: ID!
    carroId: ID!
    adminUsuarioId: ID!
    operadoraId: ID!
    tipoCorrida: String!
    origem: String!
    destino: String!
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorPedagio: Float!
    valorPedagioRepasse: Float!
    valorEstacionamento: Float!
    valorEstacionamentoRepasse: Float!
    valorTempoParado: Float!
    valorTempoParadoRepasse: Float!
    dataInicio: String!
    dataFim: String
    diasSemana: [DiaDaSemana!]!
    horario: String!
    empresaCliente: EmpresaCliente!
    motorista: Motorista!
    carro: Carro!
    adminUsuario: AdminUsuario!
    operadora: Operadora!
    vouchersGerados: [Voucher!]!
  }

  input ModeloVoucherFixoInput {
    nomeModelo: String!
    ativo: Boolean
    empresaClienteId: ID!
    motoristaId: ID!
    carroId: ID!
    adminUsuarioId: ID!
    operadoraId: ID!
    tipoCorrida: String!
    origem: String!
    destino: String!
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorPedagio: Float!
    valorPedagioRepasse: Float!
    valorEstacionamento: Float!
    valorEstacionamentoRepasse: Float!
    valorTempoParado: Float!
    valorTempoParadoRepasse: Float!
    dataInicio: String!
    dataFim: String
    diasSemana: [DiaDaSemana!]!
    horario: String!
  }

  input ModeloVoucherFixoUpdateInput {
    nomeModelo: String
    ativo: Boolean
    empresaClienteId: ID
    motoristaId: ID
    carroId: ID
    adminUsuarioId: ID
    operadoraId: ID
    tipoCorrida: String
    origem: String
    destino: String
    valorViagem: Float
    valorViagemRepasse: Float
    valorPedagio: Float
    valorPedagioRepasse: Float
    valorEstacionamento: Float
    valorEstacionamentoRepasse: Float
    valorTempoParado: Float
    valorTempoParadoRepasse: Float
    dataInicio: String
    dataFim: String
    diasSemana: [DiaDaSemana!]
    horario: String
  }

  extend type Query {
    modeloVoucherFixos: [ModeloVoucherFixo!]!
    modeloVoucherFixo(id: ID!): ModeloVoucherFixo
    modeloVoucherFixosByEmpresa(empresaClienteId: ID!): [ModeloVoucherFixo!]!
    modeloVoucherFixosByMotorista(motoristaId: ID!): [ModeloVoucherFixo!]!
    modeloVoucherFixosAtivos: [ModeloVoucherFixo!]!
  }

  extend type Mutation {
    createModeloVoucherFixo(input: ModeloVoucherFixoInput!): ModeloVoucherFixo!
    updateModeloVoucherFixo(id: ID!, input: ModeloVoucherFixoUpdateInput!): ModeloVoucherFixo!
    deleteModeloVoucherFixo(id: ID!): Boolean!
  }
`;

