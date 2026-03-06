# ModelConfiguration

## Properties

| Name                   | Type                                                                |
| ---------------------- | ------------------------------------------------------------------- |
| `currency`             | string                                                              |
| `loginWithoutPassword` | boolean                                                             |
| `transaction`          | [TransactionConfiguration](TransactionConfiguration.md)             |
| `subscription`         | [ConfigurationAllOfSubscription](ConfigurationAllOfSubscription.md) |

## Example

```typescript
import type { ModelConfiguration } from "";

// TODO: Update the object below with actual values
const example = {
  currency: null,
  loginWithoutPassword: null,
  transaction: null,
  subscription: null,
} satisfies ModelConfiguration;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelConfiguration;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
