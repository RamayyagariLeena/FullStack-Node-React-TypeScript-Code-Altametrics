/*
  Warnings:

  - You are about to drop the column `user_id` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `payee` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spent` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_user_id_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "user_id",
ADD COLUMN     "payee" TEXT NOT NULL,
ADD COLUMN     "received" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "spent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
