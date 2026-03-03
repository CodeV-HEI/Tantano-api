# ProjectTransaction

## Properties

| Name            | Type   |
| --------------- | ------ |
| `name`          | string |
| `description`   | string |
| `estimatedCost` | number |
| `realCost`      | number |
| `walletId`      | string |
| `id`            | string |
| `projectId`     | string |
| `accountId`     | string |
| `createdAt`     | Date   |
| `updatedAt`     | Date   |

## Example

```typescript
import type { ProjectTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Achat Matériaux,
  "description": Ciment, sable, briques,
  "estimatedCost": 500000,
  "realCost": 520000,
  "walletId": null,
  "id": null,
  "projectId": null,
  "accountId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ProjectTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProjectTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
