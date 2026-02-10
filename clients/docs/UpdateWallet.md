# UpdateWallet

## Properties

| Name          | Type    |
| ------------- | ------- |
| `name`        | string  |
| `description` | string  |
| `type`        | string  |
| `color`       | string  |
| `iconRef`     | string  |
| `id`          | string  |
| `accountId`   | string  |
| `isActive`    | boolean |

## Example

```typescript
import type { UpdateWallet } from ''

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
} satisfies UpdateWallet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWallet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
