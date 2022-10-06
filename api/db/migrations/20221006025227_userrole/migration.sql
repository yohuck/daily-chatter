/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[topicId,userId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDownVotes` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalUpVotes` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_topicId_key";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roles" SET DEFAULT 'user';

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "totalDownVotes" INTEGER NOT NULL,
ADD COLUMN     "totalUpVotes" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Account";

-- CreateIndex
CREATE UNIQUE INDEX "Post_topicId_userId_key" ON "Post"("topicId", "userId");
