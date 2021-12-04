/*
  Warnings:

  - The values [WORKER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `user` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `worker_service` on the `record` table. All the data in the column will be lost.
  - You are about to drop the `worker_service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `service_id` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `worker_id` to the `record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('USER', 'ADMIN');
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "fk_user_record";

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "fk_worker_service_record";

-- DropForeignKey
ALTER TABLE "worker_service" DROP CONSTRAINT "fk_service_worker_service";

-- DropForeignKey
ALTER TABLE "worker_service" DROP CONSTRAINT "fk_worker_worker_service";

-- AlterTable
ALTER TABLE "record" DROP COLUMN "user",
DROP COLUMN "worker_service",
ADD COLUMN     "service_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD COLUMN     "worker_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "worker_service";

-- CreateTable
CREATE TABLE "_serviceToworker" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_serviceToworker_AB_unique" ON "_serviceToworker"("A", "B");

-- CreateIndex
CREATE INDEX "_serviceToworker_B_index" ON "_serviceToworker"("B");

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_worker_id_fkey" FOREIGN KEY ("worker_id") REFERENCES "worker"("worker_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_serviceToworker" ADD FOREIGN KEY ("A") REFERENCES "service"("service_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_serviceToworker" ADD FOREIGN KEY ("B") REFERENCES "worker"("worker_id") ON DELETE CASCADE ON UPDATE CASCADE;
