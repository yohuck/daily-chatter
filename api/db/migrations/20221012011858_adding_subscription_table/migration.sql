/*
  Warnings:

  - You are about to drop the column `userId` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the column `userSubscribed` on the `Topic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_userId_fkey";

-- DropIndex
DROP INDEX "Topic_userId_key";

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "userId",
DROP COLUMN "userSubscribed";

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
