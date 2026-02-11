# WalletApi

All URIs are relative to _http://localhost:8080_

| Method                                                                                                  | HTTP request                                                   | Description                                                  |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| [**accountAccountIdWalletWalletIdArchivePost**](WalletApi.md#accountaccountidwalletwalletidarchivepost) | **POST** /account/{accountId}/wallet/{walletId}/archive        | Archive one wallet by id                                     |
| [**createOneWallet**](WalletApi.md#createonewallet)                                                     | **POST** /account/{accountId}/wallet                           | Create new wallet for the specified account                  |
| [**getAllWallets**](WalletApi.md#getallwallets)                                                         | **GET** /account/{accountId}/wallet                            | Get all disponibles wallet for the specified account         |
| [**getOneWallet**](WalletApi.md#getonewallet)                                                           | **GET** /account/{accountId}/wallet/{walletId}                 | Get get one wallet by id for the specified account           |
| [**updateOneWallet**](WalletApi.md#updateonewallet)                                                     | **PUT** /account/{accountId}/wallet/{walletId}                 | Update one wallet by id for the specified account            |
| [**updateOneWalletAutomaticIncome**](WalletApi.md#updateonewalletautomaticincome)                       | **PUT** /account/{accountId}/wallet/{walletId}/automaticIncome | Update one wallet automatic income by walletId and accountId |

## accountAccountIdWalletWalletIdArchivePost

> Wallet accountAccountIdWalletWalletIdArchivePost(accountId, walletId)

Archive one wallet by id

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { AccountAccountIdWalletWalletIdArchivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AccountAccountIdWalletWalletIdArchivePostRequest;

  try {
    const data = await api.accountAccountIdWalletWalletIdArchivePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type     | Description | Notes                     |
| ------------- | -------- | ----------- | ------------------------- |
| **accountId** | `string` |             | [Defaults to `undefined`] |
| **walletId**  | `string` |             | [Defaults to `undefined`] |

### Return type

[**Wallet**](Wallet.md)

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

## createOneWallet

> Wallet createOneWallet(accountId, creationWallet)

Create new wallet for the specified account

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { CreateOneWalletRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationWallet (optional)
    creationWallet: ...,
  } satisfies CreateOneWalletRequest;

  try {
    const data = await api.createOneWallet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name               | Type                                | Description | Notes                     |
| ------------------ | ----------------------------------- | ----------- | ------------------------- |
| **accountId**      | `string`                            |             | [Defaults to `undefined`] |
| **creationWallet** | [CreationWallet](CreationWallet.md) |             | [Optional]                |

### Return type

[**Wallet**](Wallet.md)

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

## getAllWallets

> GetAllWallets200Response getAllWallets(accountId, name, isActive, walletType)

Get all disponibles wallet for the specified account

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { GetAllWalletsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    name: name_example,
    // boolean (optional)
    isActive: true,
    // 'CASH' | 'MOBILE_MONEY' | 'BANK' | 'DEBT' (optional)
    walletType: walletType_example,
  } satisfies GetAllWalletsRequest;

  try {
    const data = await api.getAllWallets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name           | Type                                   | Description | Notes                                                                       |
| -------------- | -------------------------------------- | ----------- | --------------------------------------------------------------------------- |
| **accountId**  | `string`                               |             | [Defaults to `undefined`]                                                   |
| **name**       | `string`                               |             | [Optional] [Defaults to `undefined`]                                        |
| **isActive**   | `boolean`                              |             | [Optional] [Defaults to `undefined`]                                        |
| **walletType** | `CASH`, `MOBILE_MONEY`, `BANK`, `DEBT` |             | [Optional] [Defaults to `undefined`] [Enum: CASH, MOBILE_MONEY, BANK, DEBT] |

### Return type

[**GetAllWallets200Response**](GetAllWallets200Response.md)

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

## getOneWallet

> Wallet getOneWallet(accountId, walletId)

Get get one wallet by id for the specified account

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { GetOneWalletRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneWalletRequest;

  try {
    const data = await api.getOneWallet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type     | Description | Notes                     |
| ------------- | -------- | ----------- | ------------------------- |
| **accountId** | `string` |             | [Defaults to `undefined`] |
| **walletId**  | `string` |             | [Defaults to `undefined`] |

### Return type

[**Wallet**](Wallet.md)

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

## updateOneWallet

> Wallet updateOneWallet(accountId, walletId, updateWallet)

Update one wallet by id for the specified account

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { UpdateOneWalletRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWallet (optional)
    updateWallet: ...,
  } satisfies UpdateOneWalletRequest;

  try {
    const data = await api.updateOneWallet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type                            | Description | Notes                     |
| ---------------- | ------------------------------- | ----------- | ------------------------- |
| **accountId**    | `string`                        |             | [Defaults to `undefined`] |
| **walletId**     | `string`                        |             | [Defaults to `undefined`] |
| **updateWallet** | [UpdateWallet](UpdateWallet.md) |             | [Optional]                |

### Return type

[**Wallet**](Wallet.md)

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

## updateOneWalletAutomaticIncome

> Wallet updateOneWalletAutomaticIncome(accountId, walletId, walletAutomaticIncome)

Update one wallet automatic income by walletId and accountId

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '';
import type { UpdateOneWalletAutomaticIncomeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WalletApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WalletAutomaticIncome (optional)
    walletAutomaticIncome: ...,
  } satisfies UpdateOneWalletAutomaticIncomeRequest;

  try {
    const data = await api.updateOneWalletAutomaticIncome(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                      | Type                                              | Description | Notes                     |
| ------------------------- | ------------------------------------------------- | ----------- | ------------------------- |
| **accountId**             | `string`                                          |             | [Defaults to `undefined`] |
| **walletId**              | `string`                                          |             | [Defaults to `undefined`] |
| **walletAutomaticIncome** | [WalletAutomaticIncome](WalletAutomaticIncome.md) |             | [Optional]                |

### Return type

[**Wallet**](Wallet.md)

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
