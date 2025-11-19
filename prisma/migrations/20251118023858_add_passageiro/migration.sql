/*
  Warnings:

  - Added the required column `empresa_cliente_id` to the `passageiro` table without a default value. This is not possible if the table is not empty.
  - Made the column `centro_custo_cliente_id` on table `passageiro` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "passageiro" ADD COLUMN     "empresa_cliente_id" BIGINT NOT NULL,
ALTER COLUMN "centro_custo_cliente_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "passageiro" ADD CONSTRAINT "passageiro_empresa_cliente_id_fkey" FOREIGN KEY ("empresa_cliente_id") REFERENCES "empresa_cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passageiro" ADD CONSTRAINT "passageiro_centro_custo_cliente_id_fkey" FOREIGN KEY ("centro_custo_cliente_id") REFERENCES "centro_custo_cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
