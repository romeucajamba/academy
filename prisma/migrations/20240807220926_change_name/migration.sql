/*
  Warnings:

  - You are about to drop the column `ceateadAt` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `gyms` DROP COLUMN `ceateadAt`,
    ADD COLUMN `createadAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
