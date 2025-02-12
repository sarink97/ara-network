/*
  Warnings:

  - You are about to drop the column `created_at` on the `partner` table. All the data in the column will be lost.
  - You are about to drop the column `productInterests` on the `partner` table. All the data in the column will be lost.
  - You are about to drop the column `referralSource` on the `partner` table. All the data in the column will be lost.
  - You are about to drop the column `stateProvince` on the `partner` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `partner` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `partner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `companyName` on the `partner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `addressLine1` on the `partner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `addressLine2` on the `partner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `website` on the `partner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the `about` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hearAboutUs` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interestedProducts` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_email_idx` ON `message`;

-- DropIndex
DROP INDEX `Partner_companyName_idx` ON `partner`;

-- DropIndex
DROP INDEX `Partner_email_idx` ON `partner`;

-- AlterTable
ALTER TABLE `partner` DROP COLUMN `created_at`,
    DROP COLUMN `productInterests`,
    DROP COLUMN `referralSource`,
    DROP COLUMN `stateProvince`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `hearAboutUs` VARCHAR(191) NOT NULL,
    ADD COLUMN `interestedProducts` JSON NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `companyName` VARCHAR(191) NOT NULL,
    MODIFY `addressLine1` VARCHAR(191) NOT NULL,
    MODIFY `addressLine2` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `postalCode` VARCHAR(191) NOT NULL,
    MODIFY `country` VARCHAR(191) NOT NULL,
    MODIFY `website` VARCHAR(191) NULL,
    MODIFY `message` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- DropTable
DROP TABLE `about`;

-- CreateIndex
CREATE INDEX `Message_email_idx` ON `Message`(`email`);

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_technologyId_fkey` FOREIGN KEY (`technologyId`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feature` ADD CONSTRAINT `Feature_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
