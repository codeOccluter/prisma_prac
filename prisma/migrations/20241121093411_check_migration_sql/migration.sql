/*
  Warnings:

  - You are about to drop the column `sex` on the `member` table. All the data in the column will be lost.
  - Added the required column `sex_cd` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" DROP COLUMN "sex",
ADD COLUMN     "sex_cd" VARCHAR NOT NULL;
