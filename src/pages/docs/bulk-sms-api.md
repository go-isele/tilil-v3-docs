---
title:Bulk SMS API Guide
---

- Tilil Technologies bulk SMS endpoint [https://api.tililtech.com/sms/v3/sendsms](https://api.tililtech.com/sms/v3/sendsms)

## Preamble

This document provides a quick step by step guide on how to send bulk and premium messages
using an application interface (API). It has been made simple to enable a quick integration into
our bulk messaging services. A more descriptive guide can be found at http://tililtech.com.
To note is that Tilil Technologies is always developing its systems to suit every client’s needs
and also to achieve the best data integrity as possible.
We also customize the APIs to every client’s request. So, if you need SOAP, XML, Direct
database insertion or the bulk messaging system installed in your datacenter or in your intranet
talk to us

## Sending a Message

Below is a sample sendsms JSON data:

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

Where:

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
