/*
  Warnings:

  - You are about to drop the column `reports` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "reports";

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "reports" INTEGER;
