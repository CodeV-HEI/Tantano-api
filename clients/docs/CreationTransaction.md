# CreationTransaction

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

## Example

```typescript
import type { CreationTransaction } from "";

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
} satisfies CreationTransaction;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreationTransaction;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
