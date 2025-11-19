import gql from 'graphql-tag';

export const modeloVoucherFixoTypes = gql`

enum DiaDaSemana {
   Dom
   Seg
   Ter
   Qua
   Qui
   Sex
   Sab
  }

  type ModeloVoucherFixo {
    id: Int!
    nomeModelo: String!
    ativo: Boolean!
    empresaClienteId: EmpresaCliente!
    motoristaId: Motorista
    carroId: Carro
    adminUsuarioId: AdminUsuario!
    operadoraId: Operadora!
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
    # vouchers_gerados: [Voucher!]!
  }

  input CriarModeloVoucherFixoInput {
    nomeModelo: String!
    ativo: Boolean
    empresaClienteId: Int!
    motoristaId: Int
    carroId: Int!
    adminUsuarioId: Int!
    operadoraId: Int!
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

  input EditarModeloVoucherFixoInput {
    nomeModelo: String
    ativo: Boolean
    empresaClienteId: Int
    motoristaId: Int
    carroId: Int
    adminUsuarioId: Int
    operadoraId: Int
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

  type Query {
    ModeloVoucherFixo(id: Int!): ModeloVoucherFixo
    ModelosVoucherFixo: [ModeloVoucherFixo!]!
  }

  type Mutation {
    createModeloVoucherFixo(data: CriarModeloVoucherFixoInput!): ModeloVoucherFixo!
    updateModeloVoucherFixo(id: Int!, data: EditarModeloVoucherFixoInput!): ModeloVoucherFixo!
    deleterModeloVoucherFixo(id: Int!): Boolean!
  }
`;  

