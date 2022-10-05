-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hashedPassword" TEXT NOT NULL DEFAULT 'password',
ADD COLUMN     "salt" TEXT NOT NULL DEFAULT 'salt';
