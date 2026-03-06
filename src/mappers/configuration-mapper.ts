import { ModelConfiguration as RestConfiguration } from "@clients";

export class ConfigurationMapper {
  public static toRest(config: any) {
    let subscription = null;
    if (config.subscription) {
      subscription = { endingDate: config.subscription.endingDate, isActive: new Date().getTime() < new Date(config.subscription.endingDate).getTime() };
    }
    const transaction: RestConfiguration["transaction"] = {
      countDays: config.transactionCountDays,
      reccurency: config.transactionReccurency,
    };

    return { currency: config.currency, loginWithoutPassword: config.loginWithoutPassword, subscription, transaction } as RestConfiguration;
  }
}
