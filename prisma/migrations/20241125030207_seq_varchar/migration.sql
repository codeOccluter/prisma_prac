/*
  Warnings:

  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
ALTER COLUMN "seq" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("seq");
