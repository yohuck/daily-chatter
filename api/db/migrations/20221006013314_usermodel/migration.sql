/*
  Warnings:

  - You are about to drop the column `postId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `admin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[topicId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roles` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_postId_topicId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "admin",
DROP COLUMN "password",
DROP COLUMN "userId",
ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "resetTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN     "roles" TEXT NOT NULL,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "hashedPassword" DROP DEFAULT,
ALTER COLUMN "salt" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Post_topicId_key" ON "Post"("topicId");
