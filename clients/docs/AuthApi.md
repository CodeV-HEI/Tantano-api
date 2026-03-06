# AuthApi

All URIs are relative to _http://localhost:8080_

| Method                          | HTTP request           | Description                             |
| ------------------------------- | ---------------------- | --------------------------------------- |
| [**signIn**](AuthApi.md#signin) | **POST** /auth/sign-in | Login with and existing account         |
| [**signUp**](AuthApi.md#signup) | **POST** /auth/sign-up | Create new account with basic user role |

## signIn

> SignInResult signIn(signInCredentials)

Login with and existing account

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { SignInRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignInCredentials (optional)
    signInCredentials: ...,
  } satisfies SignInRequest;

  try {
    const data = await api.signIn(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                  | Type                                      | Description | Notes      |
| --------------------- | ----------------------------------------- | ----------- | ---------- |
| **signInCredentials** | [SignInCredentials](SignInCredentials.md) |             | [Optional] |

### Return type

[**SignInResult**](SignInResult.md)

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

## signUp

> SignUpResult signUp(signUpCredentials)

Create new account with basic user role

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { SignUpRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignUpCredentials (optional)
    signUpCredentials: ...,
  } satisfies SignUpRequest;

  try {
    const data = await api.signUp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name                  | Type                                      | Description | Notes      |
| --------------------- | ----------------------------------------- | ----------- | ---------- |
| **signUpCredentials** | [SignUpCredentials](SignUpCredentials.md) |             | [Optional] |

### Return type

[**SignUpResult**](SignUpResult.md)

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
