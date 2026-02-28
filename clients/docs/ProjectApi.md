# ProjectApi

All URIs are relative to _http://localhost:8080_

| Method                                                                         | HTTP request                                                                    | Description                                              |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [**archiveOneProject**](ProjectApi.md#archiveoneproject)                       | **POST** /account/{accountId}/project/{projectId}/archive                       | Archive one project by id                                |
| [**createOneProject**](ProjectApi.md#createoneproject)                         | **POST** /account/{accountId}/project                                           | Create new project for the specified account             |
| [**createOneProjectTransaction**](ProjectApi.md#createoneprojecttransaction)   | **POST** /account/{accountId}/project/{projectId}/transaction                   | Create new project transaction for the specified account |
| [**deleteOneProject**](ProjectApi.md#deleteoneproject)                         | **DELETE** /account/{accountId}/project/{projectId}                             | Delete one project by id for the specified account       |
| [**deleteOneProjectTransaction**](ProjectApi.md#deleteoneprojecttransaction)   | **DELETE** /account/{accountId}/project/{projectId}/transaction/{transactionId} | Delete one project transaction by id                     |
| [**downloadProjectInvoicePDF**](ProjectApi.md#downloadprojectinvoicepdf)       | **GET** /account/{accountId}/project/{projectId}/pdf/invoice                    | Download project invoice as PDF                          |
| [**downloadProjectStatisticsPDF**](ProjectApi.md#downloadprojectstatisticspdf) | **GET** /account/{accountId}/project/{projectId}/pdf/statistics                 | Download project statistics as PDF                       |
| [**downloadProjectSummaryPDF**](ProjectApi.md#downloadprojectsummarypdf)       | **GET** /account/{accountId}/project/{projectId}/pdf/summary                    | Download project summary as PDF                          |
| [**getAllProjectTransactions**](ProjectApi.md#getallprojecttransactions)       | **GET** /account/{accountId}/project/{projectId}/transaction                    | Get all project transactions for the specified project   |
| [**getAllProjects**](ProjectApi.md#getallprojects)                             | **GET** /account/{accountId}/project                                            | Get all projects for the specified account               |
| [**getOneProject**](ProjectApi.md#getoneproject)                               | **GET** /account/{accountId}/project/{projectId}                                | Get one project by id for the specified account          |
| [**getOneProjectTransaction**](ProjectApi.md#getoneprojecttransaction)         | **GET** /account/{accountId}/project/{projectId}/transaction/{transactionId}    | Get one project transaction by id                        |
| [**getProjectStatistics**](ProjectApi.md#getprojectstatistics)                 | **GET** /account/{accountId}/project/{projectId}/statistics                     | Get statistics for one project                           |
| [**updateOneProject**](ProjectApi.md#updateoneproject)                         | **PUT** /account/{accountId}/project/{projectId}                                | Update one project by id for the specified account       |
| [**updateOneProjectTransaction**](ProjectApi.md#updateoneprojecttransaction)   | **PUT** /account/{accountId}/project/{projectId}/transaction/{transactionId}    | Update one project transaction by id                     |

## archiveOneProject

> Project archiveOneProject(accountId, projectId)

Archive one project by id

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ArchiveOneProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveOneProjectRequest;

  try {
    const data = await api.archiveOneProject(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Project**](Project.md)

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

## createOneProject

> Project createOneProject(accountId, creationProject)

Create new project for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { CreateOneProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationProject (optional)
    creationProject: ...,
  } satisfies CreateOneProjectRequest;

  try {
    const data = await api.createOneProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                | Type                                  | Description | Notes                     |
| ------------------- | ------------------------------------- | ----------- | ------------------------- |
| **accountId**       | `string`                              |             | [Defaults to `undefined`] |
| **creationProject** | [CreationProject](CreationProject.md) |             | [Optional]                |

### Return type

[**Project**](Project.md)

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

## createOneProjectTransaction

> ProjectTransaction createOneProjectTransaction(accountId, projectId, creationProjectTransaction)

Create new project transaction for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { CreateOneProjectTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationProjectTransaction (optional)
    creationProjectTransaction: ...,
  } satisfies CreateOneProjectTransactionRequest;

  try {
    const data = await api.createOneProjectTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                           | Type                                                        | Description | Notes                     |
| ------------------------------ | ----------------------------------------------------------- | ----------- | ------------------------- |
| **accountId**                  | `string`                                                    |             | [Defaults to `undefined`] |
| **projectId**                  | `string`                                                    |             | [Defaults to `undefined`] |
| **creationProjectTransaction** | [CreationProjectTransaction](CreationProjectTransaction.md) |             | [Optional]                |

### Return type

[**ProjectTransaction**](ProjectTransaction.md)

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

## deleteOneProject

> Project deleteOneProject(accountId, projectId)

Delete one project by id for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DeleteOneProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOneProjectRequest;

  try {
    const data = await api.deleteOneProject(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Project**](Project.md)

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

## deleteOneProjectTransaction

> ProjectTransaction deleteOneProjectTransaction(accountId, projectId, transactionId)

Delete one project transaction by id

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DeleteOneProjectTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOneProjectTransactionRequest;

  try {
    const data = await api.deleteOneProjectTransaction(body);
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
| **projectId**     | `string` |             | [Defaults to `undefined`] |
| **transactionId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**ProjectTransaction**](ProjectTransaction.md)

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

## downloadProjectInvoicePDF

> Blob downloadProjectInvoicePDF(accountId, projectId)

Download project invoice as PDF

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DownloadProjectInvoicePDFRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadProjectInvoicePDFRequest;

  try {
    const data = await api.downloadProjectInvoicePDF(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | PDF file    | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## downloadProjectStatisticsPDF

> Blob downloadProjectStatisticsPDF(accountId, projectId)

Download project statistics as PDF

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DownloadProjectStatisticsPDFRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadProjectStatisticsPDFRequest;

  try {
    const data = await api.downloadProjectStatisticsPDF(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | PDF file    | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## downloadProjectSummaryPDF

> Blob downloadProjectSummaryPDF(accountId, projectId)

Download project summary as PDF

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DownloadProjectSummaryPDFRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadProjectSummaryPDFRequest;

  try {
    const data = await api.downloadProjectSummaryPDF(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | PDF file    | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getAllProjectTransactions

> Array&lt;ProjectTransaction&gt; getAllProjectTransactions(accountId, projectId)

Get all project transactions for the specified project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetAllProjectTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAllProjectTransactionsRequest;

  try {
    const data = await api.getAllProjectTransactions(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Array&lt;ProjectTransaction&gt;**](ProjectTransaction.md)

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

## getAllProjects

> Array&lt;Project&gt; getAllProjects(accountId, page, pageSize, name)

Get all projects for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetAllProjectsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    page: 8.14,
    // number (optional)
    pageSize: 8.14,
    // string (optional)
    name: name_example,
  } satisfies GetAllProjectsRequest;

  try {
    const data = await api.getAllProjects(body);
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

[**Array&lt;Project&gt;**](Project.md)

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

## getOneProject

> Project getOneProject(accountId, projectId)

Get one project by id for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetOneProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneProjectRequest;

  try {
    const data = await api.getOneProject(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Project**](Project.md)

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

## getOneProjectTransaction

> ProjectTransaction getOneProjectTransaction(accountId, projectId, transactionId)

Get one project transaction by id

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetOneProjectTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneProjectTransactionRequest;

  try {
    const data = await api.getOneProjectTransaction(body);
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
| **projectId**     | `string` |             | [Defaults to `undefined`] |
| **transactionId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**ProjectTransaction**](ProjectTransaction.md)

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

## getProjectStatistics

> ProjectStatistics getProjectStatistics(accountId, projectId)

Get statistics for one project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetProjectStatisticsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetProjectStatisticsRequest;

  try {
    const data = await api.getProjectStatistics(body);
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
| **projectId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**ProjectStatistics**](ProjectStatistics.md)

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

## updateOneProject

> Project updateOneProject(accountId, projectId, creationProject)

Update one project by id for the specified account

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { UpdateOneProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationProject (optional)
    creationProject: ...,
  } satisfies UpdateOneProjectRequest;

  try {
    const data = await api.updateOneProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                | Type                                  | Description | Notes                     |
| ------------------- | ------------------------------------- | ----------- | ------------------------- |
| **accountId**       | `string`                              |             | [Defaults to `undefined`] |
| **projectId**       | `string`                              |             | [Defaults to `undefined`] |
| **creationProject** | [CreationProject](CreationProject.md) |             | [Optional]                |

### Return type

[**Project**](Project.md)

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

## updateOneProjectTransaction

> ProjectTransaction updateOneProjectTransaction(accountId, projectId, transactionId, creationProjectTransaction)

Update one project transaction by id

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { UpdateOneProjectTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    projectId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    transactionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationProjectTransaction (optional)
    creationProjectTransaction: ...,
  } satisfies UpdateOneProjectTransactionRequest;

  try {
    const data = await api.updateOneProjectTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                           | Type                                                        | Description | Notes                     |
| ------------------------------ | ----------------------------------------------------------- | ----------- | ------------------------- |
| **accountId**                  | `string`                                                    |             | [Defaults to `undefined`] |
| **projectId**                  | `string`                                                    |             | [Defaults to `undefined`] |
| **transactionId**              | `string`                                                    |             | [Defaults to `undefined`] |
| **creationProjectTransaction** | [CreationProjectTransaction](CreationProjectTransaction.md) |             | [Optional]                |

### Return type

[**ProjectTransaction**](ProjectTransaction.md)

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
