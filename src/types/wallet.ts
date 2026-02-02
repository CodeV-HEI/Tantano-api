export interface WalletFilter {
  isActive?: boolean;
  walletType?: "CASH" | "MOBILE_MONEY" | "BANK" | "DEBT";
}
