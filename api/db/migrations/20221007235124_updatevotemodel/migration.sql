/*
  Warnings:

  - You are about to drop the column `downvote` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `upvote` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "downvote",
DROP COLUMN "upvote";
