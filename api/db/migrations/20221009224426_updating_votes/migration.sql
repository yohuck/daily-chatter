/*
  Warnings:

  - Made the column `upvotes` on table `Response` required. This step will fail if there are existing NULL values in that column.
  - Made the column `downvotes` on table `Response` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reports` on table `Response` required. This step will fail if there are existing NULL values in that column.
  - Made the column `supervote` on table `Response` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Response" ALTER COLUMN "upvotes" SET NOT NULL,
ALTER COLUMN "downvotes" SET NOT NULL,
ALTER COLUMN "reports" SET NOT NULL,
ALTER COLUMN "supervote" SET NOT NULL;
