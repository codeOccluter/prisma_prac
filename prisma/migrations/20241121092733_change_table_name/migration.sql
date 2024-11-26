/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Member";

-- CreateTable
CREATE TABLE "member" (
    "seq" BIGINT NOT NULL,
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "age" INTEGER,
    "sex" VARCHAR NOT NULL,
    "created_date" TIMESTAMP(6) NOT NULL,
    "updated_date" TIMESTAMP(6),

    CONSTRAINT "member_pkey" PRIMARY KEY ("seq")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_id_key" ON "member"("id");
