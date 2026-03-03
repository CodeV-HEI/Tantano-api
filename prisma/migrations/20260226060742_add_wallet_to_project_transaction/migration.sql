-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "estimatedCost" INTEGER NOT NULL,
    "realCost" INTEGER DEFAULT 0,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "projectId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "walletId" TEXT,
    CONSTRAINT "ProjectTransaction_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectTransaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProjectTransaction" ("accountId", "createdAt", "description", "estimatedCost", "id", "name", "projectId", "realCost", "updatedAt") SELECT "accountId", "createdAt", "description", "estimatedCost", "id", "name", "projectId", "realCost", "updatedAt" FROM "ProjectTransaction";
DROP TABLE "ProjectTransaction";
ALTER TABLE "new_ProjectTransaction" RENAME TO "ProjectTransaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
