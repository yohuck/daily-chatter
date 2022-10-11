/*
  Warnings:

  - You are about to drop the `_TopicToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TopicToUser" DROP CONSTRAINT "_TopicToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TopicToUser" DROP CONSTRAINT "_TopicToUser_B_fkey";

-- DropTable
DROP TABLE "_TopicToUser";

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
