/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId,responseId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `responseId` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superVotes` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vote_postId_userId_key";

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "responseId" INTEGER NOT NULL,
ADD COLUMN     "superVotes" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "responseTitle" TEXT NOT NULL,
    "responseText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_postId_userId_responseId_key" ON "Vote"("postId", "userId", "responseId");

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
