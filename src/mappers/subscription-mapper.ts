import { SubscriptionResult as RestSubscription } from "@clients";
import { Subscription as PrismaSubscription } from "@prisma/client";

export class SubscriptionMapper {
  public static toRest(subscription: PrismaSubscription) {
    return { token: subscription.token, endingDate: subscription.endingDate } as RestSubscription;
  }
}
