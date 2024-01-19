---
title: Getting Started
---

# Bulk Messaging

- New bulk SMS endpoint [https://api.tililtech.com/sms/v3/sendsms](https://api.tililtech.com/sms/v3/sendsms)


# Sending a Message

Below is sample send sms JSON data:

```json
{
  "api_key": "{{ Test API Key}}",
  "service": 0,
  "mobile": "0708400000",
  "response_type": "json",
  "shortcode": "Tilil",
  "message": "This is a message.\n\nRegards\nTilil"
}
```

# Where:

| Variable        | Type   | Description                                        | Example Value                          |
| --------------- | ------ | -------------------------------------------------- | -------------------------------------- |
| `api_key`       | String | The authentication string provided to the customer | `{{ Test API Key}}`                    |
| `shortcode`     | String | The origination alphanumeric or numeric code       | `Tilil`                                |
| `message`       | Pre    | Description for message                            | `This is a message.\n\nRegards\nTilil` |
| `mobile`        | String | Description for mobile                             | `0708400000`                           |
| `service_id`    | Int    | Description for service_id                         | `0`                                    |
| `response_type` | String | Description for response_type                      | `json`                                 |

### Success Request Response

```json
[
  {
    "status_code": "1000",
    "status_desc": "Success",
    "message_id": 288369252,
    "mobile_number": "254708400000",
    "network_id": "1",
    "message_cost": 1,
    "credit_balance": 148
  }
]
```

### Failed Request Response

```json
[
  {
    "status_code": "1003",
    "status_desc": "Invalid mobile number",
    "message_id": "0",
    "mobile_number": "123",
    "network_id": "",
    "message_cost": "",
    "credit_balance": ""
  }
]
```

## Where:

| Variable         | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| `status_code`    | The numeric status code to help in API integrations.                  |
|                  | Please refer to the next table for a description of our status codes. |
| `status_desc`    | A short description of the status code                                |
| `message_id`     | A unique identifier of every message that is successfully accepted    |
| `mobile_number`  | A well-formatted recipient mobile number                              |
| `network_id`     | The network identifier of the recipient mobile number                 |
| `message_cost`   | The amount deducted from your account for this particular message     |
| `credit_balance` | The balance remaining in your account after the request               |

## API Status Codes and Descriptions

| status_code | Status Description (status_desc)   |
| ----------- | ---------------------------------- |
| 0           | Unknown error                      |
| 1           | Success                            |
| 1000        | Success                            |
| 1001        | Invalid sender name {$senderValue} |
| 1002        | Network not allowed                |
| 1003        | Invalid mobile number              |
| 1004        | Low bulk credits                   |
| 1005        | Failed. System error               |
| 1006        | Invalid credentials                |
| 1007        | Database connection failed         |
| 1008        | Database selection failed          |
| 1009        | No DLR                             |
| 1009        | Unsupported data type              |
| 1010        | Unsupported request type           |
| 1011        | Invalid user state                 |

## Getting Delivery Reports:

1. **Offline (Pulling – Not recommended)**

   This is a pull method where a client requests a delivery report from the system by specifying a message id in the request. The URL below will return a delivery report for message id 288369252.

- [https://api.tililtech.com/sms/v3/getdlr?api_key=%3cAPI_KEY%3e&messageId=38610706](https://api.tililtech.com/sms/v3/getdlr?api_key=%3cAPI_KEY%3e&messageId=38610706)
- Where 288369252 is the message_id returned in sendsms request.

```

Key changes:

1. Fixed the formatting of the sendsms JSON data.
2. Ensured proper escaping of characters in the URL.
3. Corrected the formatting of the closing triple backticks for the code block.

```
