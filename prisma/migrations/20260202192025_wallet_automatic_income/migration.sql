-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN "automaticIncomeAmount" INTEGER DEFAULT 0;
ALTER TABLE "Wallet" ADD COLUMN "haveAutomaticIncome" BOOLEAN DEFAULT false;
ALTER TABLE "Wallet" ADD COLUMN "paymentDat" INTEGER DEFAULT 1;
