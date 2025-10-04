-- AlterTable
ALTER TABLE `comments` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `posts` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;
