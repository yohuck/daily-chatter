/*
  Warnings:

  - You are about to drop the `subscriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_topicId_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_userId_fkey";

-- DropTable
DROP TABLE "subscriptions";

-- CreateTable
CREATE TABLE "Usersub" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Usersub_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usersub" ADD CONSTRAINT "Usersub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usersub" ADD CONSTRAINT "Usersub_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
