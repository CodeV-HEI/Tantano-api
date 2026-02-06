# Goal

## Properties

| Name           | Type   |
| -------------- | ------ |
| `name`         | string |
| `amount`       | number |
| `walletId`     | string |
| `startingDate` | string |
| `endingDate`   | string |
| `id`           | string |

## Example

```typescript
import type { Goal } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Frebruary resolution,
  "amount": null,
  "walletId": null,
  "startingDate": null,
  "endingDate": null,
  "id": null,
} satisfies Goal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Goal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
