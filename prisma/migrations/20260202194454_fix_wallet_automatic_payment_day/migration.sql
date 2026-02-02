/*
  Warnings:

  - You are about to drop the column `paymentDat` on the `Wallet` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "amount" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "haveAutomaticIncome" BOOLEAN DEFAULT false,
    "automaticIncomeAmount" INTEGER DEFAULT 0,
    "automaticIncomeDay" INTEGER DEFAULT 1,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Wallet_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Wallet" ("accountId", "amount", "automaticIncomeAmount", "createdAt", "description", "haveAutomaticIncome", "id", "isActive", "name", "type") SELECT "accountId", "amount", "automaticIncomeAmount", "createdAt", "description", "haveAutomaticIncome", "id", "isActive", "name", "type" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_name_key" ON "Wallet"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
