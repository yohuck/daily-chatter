/*
  Warnings:

  - You are about to drop the column `userSubscribed` on the `Topic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_userId_fkey";

-- DropIndex
DROP INDEX "Topic_userId_key";

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "userSubscribed";

-- CreateTable
CREATE TABLE "_TopicToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TopicToUser_AB_unique" ON "_TopicToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicToUser_B_index" ON "_TopicToUser"("B");

-- AddForeignKey
ALTER TABLE "_TopicToUser" ADD CONSTRAINT "_TopicToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicToUser" ADD CONSTRAINT "_TopicToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
