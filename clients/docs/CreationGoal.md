# CreationGoal

## Properties

| Name           | Type   |
| -------------- | ------ |
| `accountId`    | string |
| `name`         | string |
| `amount`       | number |
| `walletId`     | string |
| `startingDate` | Date   |
| `endingDate`   | Date   |
| `color`        | string |
| `iconRef`      | string |

## Example

```typescript
import type { CreationGoal } from ''

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "name": Frebruary resolution,
  "amount": null,
  "walletId": null,
  "startingDate": null,
  "endingDate": null,
  "color": null,
  "iconRef": null,
} satisfies CreationGoal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreationGoal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
