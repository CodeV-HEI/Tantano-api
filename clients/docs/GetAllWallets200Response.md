# GetAllWallets200Response

## Properties

| Name         | Type                                    |
| ------------ | --------------------------------------- |
| `pagination` | [PaginationResult](PaginationResult.md) |
| `values`     | [Array&lt;Wallet&gt;](Wallet.md)        |

## Example

```typescript
import type { GetAllWallets200Response } from "";

// TODO: Update the object below with actual values
const example = {
  pagination: null,
  values: null,
} satisfies GetAllWallets200Response;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAllWallets200Response;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
