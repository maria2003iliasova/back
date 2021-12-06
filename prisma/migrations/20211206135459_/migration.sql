/*
  Warnings:

  - The primary key for the `record` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `record_id` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `service_id` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `worker_id` on the `record` table. All the data in the column will be lost.
  - The primary key for the `service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `service_id` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `service_title` on the `service` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `middle_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `telephone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - The primary key for the `worker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `middle_name` on the `worker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `worker` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `worker` table. All the data in the column will be lost.
  - You are about to drop the column `worker_id` on the `worker` table. All the data in the column will be lost.
  - Added the required column `userId` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workerId` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `worker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_serviceToworker" DROP CONSTRAINT "_serviceToworker_A_fkey";

-- DropForeignKey
ALTER TABLE "_serviceToworker" DROP CONSTRAINT "_serviceToworker_B_fkey";

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "record_service_id_fkey";

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "record_user_id_fkey";

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "record_worker_id_fkey";

-- AlterTable
ALTER TABLE "record" DROP CONSTRAINT "record_pkey",
DROP COLUMN "record_id",
DROP COLUMN "service_id",
DROP COLUMN "user_id",
DROP COLUMN "worker_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "workerId" INTEGER NOT NULL,
ADD CONSTRAINT "record_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "service" DROP CONSTRAINT "service_pkey",
DROP COLUMN "service_id",
DROP COLUMN "service_title",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "title" VARCHAR(100) NOT NULL,
ADD CONSTRAINT "service_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "middle_name",
DROP COLUMN "name",
DROP COLUMN "surname",
DROP COLUMN "telephone",
DROP COLUMN "user_id",
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "lastName" VARCHAR(255) NOT NULL,
ADD COLUMN     "middleName" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" VARCHAR(100) NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "worker" DROP CONSTRAINT "worker_pkey",
DROP COLUMN "middle_name",
DROP COLUMN "name",
DROP COLUMN "surname",
DROP COLUMN "worker_id",
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "lastName" VARCHAR(255) NOT NULL,
ADD COLUMN     "middleName" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "worker_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_recordToservice" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_recordToservice_AB_unique" ON "_recordToservice"("A", "B");

-- CreateIndex
CREATE INDEX "_recordToservice_B_index" ON "_recordToservice"("B");

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recordToservice" ADD FOREIGN KEY ("A") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recordToservice" ADD FOREIGN KEY ("B") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_serviceToworker" ADD FOREIGN KEY ("A") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_serviceToworker" ADD FOREIGN KEY ("B") REFERENCES "worker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
