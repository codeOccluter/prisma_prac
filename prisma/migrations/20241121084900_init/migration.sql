-- CreateTable
CREATE TABLE "Member" (
    "seq" BIGINT NOT NULL,
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "age" INTEGER,
    "sex" VARCHAR NOT NULL,
    "created_date" TIMESTAMP(6) NOT NULL,
    "updated_date" TIMESTAMP(6),

    CONSTRAINT "Member_pkey" PRIMARY KEY ("seq")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_id_key" ON "Member"("id");
