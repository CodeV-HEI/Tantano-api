# CreationProject

## Properties

| Name            | Type   |
| --------------- | ------ |
| `name`          | string |
| `description`   | string |
| `initialBudget` | number |
| `color`         | string |
| `iconRef`       | string |

## Example

```typescript
import type { CreationProject } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Renovation Maison,
  "description": Renovation de la cuisine,
  "initialBudget": 5000000,
  "color": #FF5733,
  "iconRef": null,
} satisfies CreationProject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreationProject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
