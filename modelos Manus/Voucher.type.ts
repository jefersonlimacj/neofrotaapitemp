import { gql } from 'apollo-server-express';

export const VoucherTypeDef = gql`
  enum NaturezaVoucher {
    Avulso
    Fixo
  }

  enum TipoCorrida {
    Executiva
    Comum
    Van
    Moto
  }

  enum StatusVoucher {
    Agendado
    EmAndamento
    Concluido
    Cancelado
    Pausado
  }

  type Voucher {
    id: ID!
    natureza: NaturezaVoucher!
    tipoCorrida: TipoCorrida!
    status: StatusVoucher!
    origem: String!
    destino: String!
    dataHoraProgramado: String!
    dataHoraConclusao: String
    dataHoraCriacao: String!
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorPedagio: Float!
    valorPedagioRepasse: Float!
    valorEstacionamento: Float!
    valorEstacionamentoRepasse: Float!
    valorTempoParado: Float!
    valorTempoParadoRepasse: Float!
    valorTotal: Float!
    valorTotalRepasse: Float!
    observacoes: String
    empresaClienteId: ID!
    motoristaId: ID!
    carroId: ID!
    adminUsuarioId: ID!
    operadoraId: ID!
    rotaId: ID
    modeloVoucherFixoId: ID
    empresaCliente: EmpresaCliente!
    motorista: Motorista!
    carro: Carro!
    adminUsuario: AdminUsuario!
    operadora: Operadora!
    rota: Rota
    modeloVoucherFixo: ModeloVoucherFixo
    passageiros: [VoucherPassageiro!]!
  }

  input VoucherInput {
    natureza: NaturezaVoucher!
    tipoCorrida: TipoCorrida!
    status: StatusVoucher
    origem: String!
    destino: String!
    dataHoraProgramado: String!
    dataHoraConclusao: String
    valorViagem: Float!
    valorViagemRepasse: Float!
    valorPedagio: Float!
    valorPedagioRepasse: Float!
    valorEstacionamento: Float!
    valorEstacionamentoRepasse: Float!
    valorTempoParado: Float!
    valorTempoParadoRepasse: Float!
    valorTotal: Float!
    valorTotalRepasse: Float!
    observacoes: String
    empresaClienteId: ID!
    motoristaId: ID!
    carroId: ID!
    adminUsuarioId: ID!
    operadoraId: ID!
    rotaId: ID
    modeloVoucherFixoId: ID
  }

  input VoucherUpdateInput {
    natureza: NaturezaVoucher
    tipoCorrida: TipoCorrida
    status: StatusVoucher
    origem: String
    destino: String
    dataHoraProgramado: String
    dataHoraConclusao: String
    valorViagem: Float
    valorViagemRepasse: Float
    valorPedagio: Float
    valorPedagioRepasse: Float
    valorEstacionamento: Float
    valorEstacionamentoRepasse: Float
    valorTempoParado: Float
    valorTempoParadoRepasse: Float
    valorTotal: Float
    valorTotalRepasse: Float
    observacoes: String
    empresaClienteId: ID
    motoristaId: ID
    carroId: ID
    adminUsuarioId: ID
    operadoraId: ID
    rotaId: ID
    modeloVoucherFixoId: ID
  }

  extend type Query {
    vouchers: [Voucher!]!
    voucher(id: ID!): Voucher
    vouchersByEmpresa(empresaClienteId: ID!): [Voucher!]!
    vouchersByMotorista(motoristaId: ID!): [Voucher!]!
    vouchersByStatus(status: StatusVoucher!): [Voucher!]!
    vouchersByData(dataInicio: String!, dataFim: String!): [Voucher!]!
    vouchersByNatureza(natureza: NaturezaVoucher!): [Voucher!]!
  }

  extend type Mutation {
    createVoucher(input: VoucherInput!): Voucher!
    updateVoucher(id: ID!, input: VoucherUpdateInput!): Voucher!
    deleteVoucher(id: ID!): Boolean!
  }
`;

