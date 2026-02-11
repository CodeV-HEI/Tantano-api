# LabelApi

All URIs are relative to _http://localhost:8080_

| Method                                             | HTTP request                                          | Description                                          |
| -------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| [**archiveOneLabel**](LabelApi.md#archiveonelabel) | **POST** /account/{accountId}/label/{labelId}/archive | Archive one label by id                              |
| [**createOneLabel**](LabelApi.md#createonelabel)   | **POST** /account/{accountId}/label                   | Create new label for the specified account           |
| [**getAllLabels**](LabelApi.md#getalllabels)       | **GET** /account/{accountId}/label                    | Get all disponibles lables for the specified account |
| [**getOneLabel**](LabelApi.md#getonelabel)         | **GET** /account/{accountId}/label/{labelId}          | Get get one label by id for the specified account    |
| [**updateOneLabel**](LabelApi.md#updateonelabel)   | **PUT** /account/{accountId}/label/{labelId}          | Update one label by id for the specified account     |

## archiveOneLabel

> Label archiveOneLabel(accountId, labelId)

Archive one label by id

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { ArchiveOneLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    labelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveOneLabelRequest;

  try {
    const data = await api.archiveOneLabel(body);
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
| **labelId**   | `string` |             | [Defaults to `undefined`] |

### Return type

[**Label**](Label.md)

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

## createOneLabel

> Label createOneLabel(accountId, creationLabel)

Create new label for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { CreateOneLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationLabel (optional)
    creationLabel: ...,
  } satisfies CreateOneLabelRequest;

  try {
    const data = await api.createOneLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name              | Type                              | Description | Notes                     |
| ----------------- | --------------------------------- | ----------- | ------------------------- |
| **accountId**     | `string`                          |             | [Defaults to `undefined`] |
| **creationLabel** | [CreationLabel](CreationLabel.md) |             | [Optional]                |

### Return type

[**Label**](Label.md)

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

## getAllLabels

> GetAllLabels200Response getAllLabels(accountId, page, pageSize, name)

Get all disponibles lables for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { GetAllLabelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    page: 8.14,
    // number (optional)
    pageSize: 8.14,
    // string (optional)
    name: name_example,
  } satisfies GetAllLabelsRequest;

  try {
    const data = await api.getAllLabels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type     | Description | Notes                                |
| ------------- | -------- | ----------- | ------------------------------------ |
| **accountId** | `string` |             | [Defaults to `undefined`]            |
| **page**      | `number` |             | [Optional] [Defaults to `1`]         |
| **pageSize**  | `number` |             | [Optional] [Defaults to `10`]        |
| **name**      | `string` |             | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllLabels200Response**](GetAllLabels200Response.md)

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

## getOneLabel

> Label getOneLabel(accountId, labelId)

Get get one label by id for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { GetOneLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    labelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneLabelRequest;

  try {
    const data = await api.getOneLabel(body);
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
| **labelId**   | `string` |             | [Defaults to `undefined`] |

### Return type

[**Label**](Label.md)

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

## updateOneLabel

> Label updateOneLabel(accountId, labelId, label)

Update one label by id for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { UpdateOneLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    labelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Label (optional)
    label: ...,
  } satisfies UpdateOneLabelRequest;

  try {
    const data = await api.updateOneLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type              | Description | Notes                     |
| ------------- | ----------------- | ----------- | ------------------------- |
| **accountId** | `string`          |             | [Defaults to `undefined`] |
| **labelId**   | `string`          |             | [Defaults to `undefined`] |
| **label**     | [Label](Label.md) |             | [Optional]                |

### Return type

[**Label**](Label.md)

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
