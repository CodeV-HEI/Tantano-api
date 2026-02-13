-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "endingDate" DATETIME NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#00ff00',
    "iconRef" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "amount" INTEGER NOT NULL,
    "accountId" TEXT NOT NULL,
    "walletId" TEXT,
    CONSTRAINT "Goal_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Goal_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
