import { gql } from 'apollo-server-express';

export const VoucherPassageiroTypeDef = gql`
  enum StatusPresenca {
    Agendado
    Presente
    Ausente
    Cancelado
  }

  type VoucherPassageiro {
    id: ID!
    voucherId: ID!
    passageiroId: ID!
    statusPresenca: StatusPresenca!
    horarioEmbarqueReal: String
    observacao: String
    voucher: Voucher!
    passageiro: Passageiro!
  }

  input VoucherPassageiroInput {
    voucherId: ID!
    passageiroId: ID!
    statusPresenca: StatusPresenca
    horarioEmbarqueReal: String
    observacao: String
  }

  input VoucherPassageiroUpdateInput {
    voucherId: ID
    passageiroId: ID
    statusPresenca: StatusPresenca
    horarioEmbarqueReal: String
    observacao: String
  }

  extend type Query {
    voucherPassageiros: [VoucherPassageiro!]!
    voucherPassageiro(id: ID!): VoucherPassageiro
    voucherPassageirosByVoucher(voucherId: ID!): [VoucherPassageiro!]!
    voucherPassageirosByPassageiro(passageiroId: ID!): [VoucherPassageiro!]!
    voucherPassageirosByStatus(statusPresenca: StatusPresenca!): [VoucherPassageiro!]!
  }

  extend type Mutation {
    createVoucherPassageiro(input: VoucherPassageiroInput!): VoucherPassageiro!
    updateVoucherPassageiro(id: ID!, input: VoucherPassageiroUpdateInput!): VoucherPassageiro!
    deleteVoucherPassageiro(id: ID!): Boolean!
  }
`;

