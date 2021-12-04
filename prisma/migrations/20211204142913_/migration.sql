/*
  Warnings:

  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'WORKER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "fk_role_user_role";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "fk_user_user_role";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';

-- DropTable
DROP TABLE "role";

-- DropTable
DROP TABLE "user_role";
