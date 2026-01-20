/*
  Warnings:

  - You are about to drop the column `professionalStatement` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `professionalSummary` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "professionalStatement",
DROP COLUMN "professionalSummary",
ADD COLUMN     "professionalStatements" TEXT[],
ADD COLUMN     "professionalSummaries" TEXT[];
