-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Label" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#00ff00',
    "iconRef" TEXT,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Label_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Label" ("accountId", "createdAt", "id", "name", "updatedAt") SELECT "accountId", "createdAt", "id", "name", "updatedAt" FROM "Label";
DROP TABLE "Label";
ALTER TABLE "new_Label" RENAME TO "Label";
CREATE UNIQUE INDEX "Label_name_key" ON "Label"("name");
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
    "color" TEXT NOT NULL DEFAULT '#00ff00',
    "iconRef" TEXT,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Wallet_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Wallet" ("accountId", "amount", "automaticIncomeAmount", "automaticIncomeDay", "createdAt", "description", "haveAutomaticIncome", "id", "isActive", "name", "type") SELECT "accountId", "amount", "automaticIncomeAmount", "automaticIncomeDay", "createdAt", "description", "haveAutomaticIncome", "id", "isActive", "name", "type" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_name_key" ON "Wallet"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
