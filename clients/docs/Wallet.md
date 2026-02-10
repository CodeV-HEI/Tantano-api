# Wallet

## Properties

| Name                    | Type                                              |
| ----------------------- | ------------------------------------------------- |
| `name`                  | string                                            |
| `description`           | string                                            |
| `type`                  | string                                            |
| `color`                 | string                                            |
| `iconRef`               | string                                            |
| `id`                    | string                                            |
| `accountId`             | string                                            |
| `isActive`              | boolean                                           |
| `amount`                | number                                            |
| `walletAutomaticIncome` | [WalletAutomaticIncome](WalletAutomaticIncome.md) |

## Example

```typescript
import type { Wallet } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Personal,
  "description": null,
  "type": null,
  "color": #00ff00,
  "iconRef": null,
  "id": null,
  "accountId": null,
  "isActive": null,
  "amount": null,
  "walletAutomaticIncome": null,
} satisfies Wallet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Wallet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
