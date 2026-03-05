# TransactionApi

All URIs are relative to _http://localhost:8080_

| Method                                                             | HTTP request                                                                  | Description                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| [**createOneTransaction**](TransactionApi.md#createonetransaction) | **POST** /account/{accountId}/wallet/{walletId}/transaction                   | Create new transaction for the specified account          |
| [**getAllTransactions**](TransactionApi.md#getalltransactions)     | **GET** /account/{accountId}/transaction                                      | Get all disponibles transaction for the specified account |
| [**getOneTransaction**](TransactionApi.md#getonetransaction)       | **GET** /account/{accountId}/wallet/{walletId}/transaction/{transactionId}    | Get get one transaction by id for the specified account   |
| [**removeOneTransaction**](TransactionApi.md#removeonetransaction) | **DELETE** /account/{accountId}/wallet/{walletId}/transaction/{transactionId} | Delete one transaction and update wallet amount           |
| [**updateOneTransaction**](TransactionApi.md#updateonetransaction) | **PUT** /account/{accountId}/wallet/{walletId}/transaction/{transactionId}    | Update one transaction by id for the specified account    |

## createOneTransaction

> Transaction createOneTransaction(accountId, walletId, creationTransaction)

Create new transaction for the specified account

### Example

```ts
import {
  Configuration,
  TransactionApi,
} from '';
import type { CreateOneTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationTransaction (optional)
    creationTransaction: ...,
  } satisfies CreateOneTransactionRequest;

  try {
    const data = await api.createOneTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                    | Type                                          | Description | Notes                     |
| ----------------------- | --------------------------------------------- | ----------- | ------------------------- |
| **accountId**           | `string`                                      |             | [Defaults to `undefined`] |
| **walletId**            | `string`                                      |             | [Defaults to `undefined`] |
| **creationTransaction** | [CreationTransaction](CreationTransaction.md) |             | [Optional]                |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getAllTransactions

> Array&lt;Transaction&gt; getAllTransactions(accountId, walletId, startingDate, endingDate, type, label, minAmount, maxAmount, sortBy, sort)

Get all disponibles transaction for the specified account

### Example

```ts
import {
  Configuration,
  TransactionApi,
} from '';
import type { GetAllTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date (optional)
    startingDate: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    endingDate: 2013-10-20T19:20:30+01:00,
    // 'IN' | 'OUT' (optional)
    type: type_example,
    // Array<string> | list of label ids (optional)
    label: ...,
    // number (optional)
    minAmount: 1.2,
    // number (optional)
    maxAmount: 1.2,
    // 'date' | 'amount' (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' (optional)
    sort: sort_example,
  } satisfies GetAllTransactionsRequest;

  try {
    const data = await api.getAllTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type             | Description       | Notes                                                     |
| ---------------- | ---------------- | ----------------- | --------------------------------------------------------- |
| **accountId**    | `string`         |                   | [Defaults to `undefined`]                                 |
| **walletId**     | `string`         |                   | [Optional] [Defaults to `undefined`]                      |
| **startingDate** | `Date`           |                   | [Optional] [Defaults to `undefined`]                      |
| **endingDate**   | `Date`           |                   | [Optional] [Defaults to `undefined`]                      |
| **type**         | `IN`, `OUT`      |                   | [Optional] [Defaults to `undefined`] [Enum: IN, OUT]      |
| **label**        | `Array<string>`  | list of label ids | [Optional]                                                |
| **minAmount**    | `number`         |                   | [Optional] [Defaults to `undefined`]                      |
| **maxAmount**    | `number`         |                   | [Optional] [Defaults to `undefined`]                      |
| **sortBy**       | `date`, `amount` |                   | [Optional] [Defaults to `undefined`] [Enum: date, amount] |
| **sort**         | `asc`, `desc`    |                   | [Optional] [Defaults to `undefined`] [Enum: asc, desc]    |

### Return type

[**Array&lt;Transaction&gt;**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getOneTransaction

> Transaction getOneTransaction(accountId, walletId, transactionId)

Get get one transaction by id for the specified account

### Example

```ts
import {
  Configuration,
  TransactionApi,
} from '';
import type { GetOneTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneTransactionRequest;

  try {
    const data = await api.getOneTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name              | Type     | Description | Notes                     |
| ----------------- | -------- | ----------- | ------------------------- |
| **accountId**     | `string` |             | [Defaults to `undefined`] |
| **walletId**      | `string` |             | [Defaults to `undefined`] |
| **transactionId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## removeOneTransaction

> Transaction removeOneTransaction(accountId, walletId, transactionId)

Delete one transaction and update wallet amount

### Example

```ts
import {
  Configuration,
  TransactionApi,
} from '';
import type { RemoveOneTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RemoveOneTransactionRequest;

  try {
    const data = await api.removeOneTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name              | Type     | Description | Notes                     |
| ----------------- | -------- | ----------- | ------------------------- |
| **accountId**     | `string` |             | [Defaults to `undefined`] |
| **walletId**      | `string` |             | [Defaults to `undefined`] |
| **transactionId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateOneTransaction

> Transaction updateOneTransaction(accountId, walletId, transactionId, transaction)

Update one transaction by id for the specified account

### Example

```ts
import {
  Configuration,
  TransactionApi,
} from '';
import type { UpdateOneTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Transaction (optional)
    transaction: ...,
  } satisfies UpdateOneTransactionRequest;

  try {
    const data = await api.updateOneTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name              | Type                          | Description | Notes                     |
| ----------------- | ----------------------------- | ----------- | ------------------------- |
| **accountId**     | `string`                      |             | [Defaults to `undefined`] |
| **walletId**      | `string`                      |             | [Defaults to `undefined`] |
| **transactionId** | `string`                      |             | [Defaults to `undefined`] |
| **transaction**   | [Transaction](Transaction.md) |             | [Optional]                |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
