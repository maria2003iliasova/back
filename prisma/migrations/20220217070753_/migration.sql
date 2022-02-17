/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CREATIVE', 'HYGIENE', 'CLEANING', 'HAIRCUT');

-- AlterTable
ALTER TABLE "service" ADD COLUMN     "category" "Category" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
