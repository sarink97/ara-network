/*
  Warnings:

  - You are about to drop the column `region` on the `partner` table. All the data in the column will be lost.
  - Added the required column `region` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_email_idx` ON `message`;

-- DropIndex
DROP INDEX `Phone_sellerId_fkey` ON `phone`;

-- AlterTable
ALTER TABLE `partner` DROP COLUMN `region`;

-- AlterTable
ALTER TABLE `seller` ADD COLUMN `region` ENUM('NORTH_AMERICA', 'SOUTH_AMERICA', 'EUROPE', 'MIDDLE_EAST', 'AFRICA', 'ASIA_PACIFIC', 'CENTRAL_ASIA', 'CARIBBEAN') NOT NULL;

-- CreateIndex
CREATE INDEX `Message_email_idx` ON `Message`(`email`);

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_technologyId_fkey` FOREIGN KEY (`technologyId`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feature` ADD CONSTRAINT `Feature_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Phone` ADD CONSTRAINT `Phone_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `Seller`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
