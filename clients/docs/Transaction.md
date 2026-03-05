# Transaction

## Properties

| Name          | Type                           |
| ------------- | ------------------------------ |
| `date`        | Date                           |
| `labels`      | [Array&lt;Label&gt;](Label.md) |
| `type`        | string                         |
| `description` | string                         |
| `amount`      | number                         |
| `walletId`    | string                         |
| `accountId`   | string                         |
| `goalId`      | string                         |
| `id`          | string                         |

## Example

```typescript
import type { Transaction } from "";

// TODO: Update the object below with actual values
const example = {
  date: null,
  labels: null,
  type: null,
  description: null,
  amount: null,
  walletId: null,
  accountId: null,
  goalId: null,
  id: null,
} satisfies Transaction;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Transaction;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
