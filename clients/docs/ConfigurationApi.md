# ConfigurationApi

All URIs are relative to _http://localhost:8080_

| Method                                                                                   | HTTP request                                           | Description                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [**addSubscription**](ConfigurationApi.md#addsubscription)                               | **POST** /account/{accountId}/subscribe                | Add subscription to the specified account with key                             |
| [**generateSubsciptionToken**](ConfigurationApi.md#generatesubsciptiontoken)             | **POST** /account/{accountId}/subscription/token       | Genearte subscription token for a specified account                            |
| [**getConfiguration**](ConfigurationApi.md#getconfiguration)                             | **GET** /account/{accountId}/configuration             | Get the current configuration                                                  |
| [**updateBasicConfiguration**](ConfigurationApi.md#updatebasicconfiguration)             | **PUT** /account/{accountId}/configuration             | Update currency and loginWithoutPassword configuration for a specified account |
| [**updateTransactionConfiguration**](ConfigurationApi.md#updatetransactionconfiguration) | **PUT** /account/{accountId}/configuration/transaction | Get the current configuration                                                  |

## addSubscription

> ModelConfiguration addSubscription(accountId, subscription)

Add subscription to the specified account with key

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '';
import type { AddSubscriptionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ConfigurationApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Subscription (optional)
    subscription: ...,
  } satisfies AddSubscriptionRequest;

  try {
    const data = await api.addSubscription(body);
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
| **subscription** | [Subscription](Subscription.md) |             | [Optional]                |

### Return type

[**ModelConfiguration**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Configuration | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## generateSubsciptionToken

> SubscriptionResult generateSubsciptionToken(accountId)

Genearte subscription token for a specified account

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '';
import type { GenerateSubsciptionTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ConfigurationApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GenerateSubsciptionTokenRequest;

  try {
    const data = await api.generateSubsciptionToken(body);
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

### Return type

[**SubscriptionResult**](SubscriptionResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Configuration | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getConfiguration

> ModelConfiguration getConfiguration(accountId)

Get the current configuration

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '';
import type { GetConfigurationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ConfigurationApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetConfigurationRequest;

  try {
    const data = await api.getConfiguration(body);
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

### Return type

[**ModelConfiguration**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Configuration | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateBasicConfiguration

> ModelConfiguration updateBasicConfiguration(accountId, basicConfiguration)

Update currency and loginWithoutPassword configuration for a specified account

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '';
import type { UpdateBasicConfigurationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ConfigurationApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BasicConfiguration (optional)
    basicConfiguration: ...,
  } satisfies UpdateBasicConfigurationRequest;

  try {
    const data = await api.updateBasicConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                   | Type                                        | Description | Notes                     |
| ---------------------- | ------------------------------------------- | ----------- | ------------------------- |
| **accountId**          | `string`                                    |             | [Defaults to `undefined`] |
| **basicConfiguration** | [BasicConfiguration](BasicConfiguration.md) |             | [Optional]                |

### Return type

[**ModelConfiguration**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Configuration | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateTransactionConfiguration

> ModelConfiguration updateTransactionConfiguration(accountId, transactionConfiguration)

Get the current configuration

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '';
import type { UpdateTransactionConfigurationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ConfigurationApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TransactionConfiguration (optional)
    transactionConfiguration: ...,
  } satisfies UpdateTransactionConfigurationRequest;

  try {
    const data = await api.updateTransactionConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                         | Type                                                    | Description | Notes                     |
| ---------------------------- | ------------------------------------------------------- | ----------- | ------------------------- |
| **accountId**                | `string`                                                |             | [Defaults to `undefined`] |
| **transactionConfiguration** | [TransactionConfiguration](TransactionConfiguration.md) |             | [Optional]                |

### Return type

[**ModelConfiguration**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Configuration | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
