-- CreateTable
CREATE TABLE "RandomWords" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RandomWords_pkey" PRIMARY KEY ("id")
);
