import gql from 'graphql-tag';

export const voucherTypes = gql`
    type Voucher {
        id: ID
        operadoraId: Int
        modeloVoucherFixoId: Int
        modeloVoucherFixo: ModeloVoucherFixo
    }
`;