/*
  Warnings:

  - The values [ASIA_PACIFIC,CENTRAL_ASIA] on the enum `Seller_region` will be removed. If these variants are still used in the database, this will fail.

*/
-- DropIndex
DROP INDEX `Message_email_idx` ON `message`;

-- DropIndex
DROP INDEX `Phone_sellerId_fkey` ON `phone`;

-- AlterTable
ALTER TABLE `seller` MODIFY `region` ENUM('NORTH_AMERICA', 'SOUTH_AMERICA', 'EUROPE', 'MIDDLE_EAST', 'AFRICA', 'ASIA', 'CARIBBEAN') NOT NULL;

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
