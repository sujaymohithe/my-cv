/*
  Warnings:

  - You are about to drop the column `techStack` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "techStack";

-- CreateTable
CREATE TABLE "TechCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "TechCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "TechItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TechCategory_profileId_order_idx" ON "TechCategory"("profileId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "TechCategory_profileId_name_key" ON "TechCategory"("profileId", "name");

-- CreateIndex
CREATE INDEX "TechItem_categoryId_order_idx" ON "TechItem"("categoryId", "order");

-- AddForeignKey
ALTER TABLE "TechCategory" ADD CONSTRAINT "TechCategory_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechItem" ADD CONSTRAINT "TechItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TechCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
