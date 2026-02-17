# GoalApi

All URIs are relative to _http://localhost:8080_

| Method                                                                        | HTTP request                               | Description                                 |
| ----------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| [**accountAccountIdGoalGet**](GoalApi.md#accountaccountidgoalget)             | **GET** /account/{accountId}/goal          | Get all disponibles goal of one account     |
| [**accountAccountIdGoalGoalIdGet**](GoalApi.md#accountaccountidgoalgoalidget) | **GET** /account/{accountId}/goal/{goalId} | Get one goal of one account by it\&#39;s id |
| [**accountAccountIdGoalGoalIdPut**](GoalApi.md#accountaccountidgoalgoalidput) | **PUT** /account/{accountId}/goal/{goalId} | update one goal of one account              |
| [**accountAccountIdGoalPost**](GoalApi.md#accountaccountidgoalpost)           | **POST** /account/{accountId}/goal         | create new goal for one account             |

## accountAccountIdGoalGet

> AccountAccountIdGoalGet200Response accountAccountIdGoalGet(accountId, walletId, name, startingDate, endingDate)

Get all disponibles goal of one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { AccountAccountIdGoalGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    name: name_example,
    // Date (optional)
    startingDate: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    endingDate: 2013-10-20T19:20:30+01:00,
  } satisfies AccountAccountIdGoalGetRequest;

  try {
    const data = await api.accountAccountIdGoalGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type     | Description | Notes                                |
| ---------------- | -------- | ----------- | ------------------------------------ |
| **accountId**    | `string` |             | [Defaults to `undefined`]            |
| **walletId**     | `string` |             | [Optional] [Defaults to `undefined`] |
| **name**         | `string` |             | [Optional] [Defaults to `undefined`] |
| **startingDate** | `Date`   |             | [Optional] [Defaults to `undefined`] |
| **endingDate**   | `Date`   |             | [Optional] [Defaults to `undefined`] |

### Return type

[**AccountAccountIdGoalGet200Response**](AccountAccountIdGoalGet200Response.md)

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

## accountAccountIdGoalGoalIdGet

> Goal accountAccountIdGoalGoalIdGet(accountId)

Get one goal of one account by it\&#39;s id

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { AccountAccountIdGoalGoalIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AccountAccountIdGoalGoalIdGetRequest;

  try {
    const data = await api.accountAccountIdGoalGoalIdGet(body);
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

[**Goal**](Goal.md)

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

## accountAccountIdGoalGoalIdPut

> Goal accountAccountIdGoalGoalIdPut(accountId, goal)

update one goal of one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { AccountAccountIdGoalGoalIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Goal (optional)
    goal: ...,
  } satisfies AccountAccountIdGoalGoalIdPutRequest;

  try {
    const data = await api.accountAccountIdGoalGoalIdPut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type            | Description | Notes                     |
| ------------- | --------------- | ----------- | ------------------------- |
| **accountId** | `string`        |             | [Defaults to `undefined`] |
| **goal**      | [Goal](Goal.md) |             | [Optional]                |

### Return type

[**Goal**](Goal.md)

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

## accountAccountIdGoalPost

> AccountAccountIdGoalGet200Response accountAccountIdGoalPost(accountId, creationGoal)

create new goal for one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { AccountAccountIdGoalPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationGoal (optional)
    creationGoal: ...,
  } satisfies AccountAccountIdGoalPostRequest;

  try {
    const data = await api.accountAccountIdGoalPost(body);
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
| **creationGoal** | [CreationGoal](CreationGoal.md) |             | [Optional]                |

### Return type

[**AccountAccountIdGoalGet200Response**](AccountAccountIdGoalGet200Response.md)

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
