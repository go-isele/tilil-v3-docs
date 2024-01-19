---
title: Short Code Messaging
---

## 1. Receiving Inbound Messages

The client will provide an endpoint that accepts the following JSON data through a POST request. In cases where a client wants the data pushed over a secure connection such as over SSL, the client will provide the necessary certificates to be configured in our application.

```json
{
  "api_token": "944a73412bed1240b5a2afa381a928a6",
  "timestamp": "20180217065028",
  "mobile": "254726770792",
  "message": "Test inbox",
  "shortcode": "70700",
  "inbox_id": "4448236",
  "service_id": "32",
  "network_name": "Safaricom",
  "link_id": "763723672367236526261"
}
```

### Where:

| Variable       | Type   | Description                                                                                                                                                            | Example                            |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `api_token`    | String | The token supplied by a partner for our service request authentication purposes. This can be an encrypted value of their username, server IP, timestamp, and password. | `944a73412bed1240b5a2afa381a928a6` |
| `timestamp`    | String | Timestamp in the format YmdHis to be used in password decryption.                                                                                                      | `20180217065028`                   |
| `mobile`       | String | The user mobile number that should receive the payment. All mobile numbers are validated before a request is accepted.                                                 | `254726770792`                     |
| `message`      | String | The message as received from the end user.                                                                                                                             | `Test inbox`                       |
| `shortcode`    | String | The short code associated with the service.                                                                                                                            | `70700`                            |
| `inbox_id`     | Int    | A unique identifier of the message.                                                                                                                                    | `4448236`                          |
| `service_id`   | Int    | The service identifier for the service.                                                                                                                                | `32`                               |
| `network_name` | String | A network identifier e.g Safaricom, Airtel, Yu, Equitel & Telkom.                                                                                                      | `Safaricom`                        |
| `link_id`      | String | Received for On-Demand shortcode messages. This should be used when sending out replies.                                                                               | `763723672367236526261`            |

## 2. Sending Short Code Messages

This is the same as sending a bulk message. The only difference is that a `service_id` will be added to this request. See example JSON below.

- On successful reception of an inbound message, the client should reply (echo back) with the following JSON string:

```json
{
  "result_code": 1,
  "result_desc": "OK",
  "result_message": "Thank you for your message."
}
```

### Where:

| Variable         | Type   | Description                                                                                                                                                  | Example                      |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `request_code`   | Int    | This is a status of the pushed message: 1 – Success; 0 – Failed. A message might fail to be received on the client’s side due to internal server errors etc. | `1` or `0`                   |
| `request_desc`   | String | This is a brief description of the request. OK for successful reception; FAILED for a failed request.                                                        | `OK` or `FAILED`             |
| `result_message` | String | This is a message our system should send back to the end user. Leave this empty to process a user request and reply back later through the sendSms API.      | `Thank you for your message` |

# SMS API

### Where:

| Variable      | Type   | Description                                                                                       | Example                                                |
| ------------- | ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `api_key`     | Int    | The authentication string provided to the customer.                                               | `qw566wqtwgqyw65wq`                                    |
| `sender_name` | String | The origination alphanumeric or numeric code.                                                     | `22915`                                                |
| `message`     | String | The message our system should send to the end user. The message can be up to 920 characters long. | `Click on the following link to download your content` |
| `mobile`      | String | Mobile number to receive the MT message.                                                          | `0708400000`                                           |
| `service_id`  | Int    | An identifier of the service allocated to the customer.                                           | `44`                                                   |
| `link_id`     | Long   | Used for On-Demand messages. Leave empty for subscription services.                               | `12345678987654321`                                    |

---

This data is posted to the following endpoint:

sendSms endpoint: [https://api.tililsms.com/sms/v3/sendsms](https://api.tililsms.com/sms/v3/sendsms)

---

### Success Response Packet:

```json
{
  "status_code": "1000",
  "status_desc": "Success",
  "message_id": "sms.5ed0e9e9619937.17151728",
  "mobile_number": "254708400000",
  "network_name": "Safaricom",
  "message_cost": "1",
  "credit_balance": "-1"
}
```

### Failed Response Packet:

```json
{
  "status_code": "1003",
  "status_desc": "Invalid mobile number 26770792",
  "message_id": "0",
  "mobile_number": "0",
  "network_name": "Not set",
  "message_cost": "0.00",
  "credit_balance": ""
}
```

## 3. Receiving (Un)Subscription Requests

The client will register an endpoint with us that accepts JSON post requests. See a request sample below:

```json
{
  "api_token": "23627367236232ghgge23g22gh2gh2",
  "network_name": "Safaricom",
  "shortcode": "22915",
  "service_id": "44",
  "mobile": "254708400000",
  "update_type": "activation",
  "keyword": "GAME",
  "subscriber_ref": "12345",
  "timestamp": "20200528124756"
}
```

# Subscription Request Variables

### Where:

| Variable         | Type   | Description                                                                                                                                                            | Example                        |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `api_token`      | String | The token supplied by a partner for our service request authentication purposes. This can be an encrypted value of their username, server IP, timestamp, and password. | `2tyy23ty43y434hj3h43u4u3u4u`  |
| `timestamp`      | String | Timestamp in the format YmdHis that shows when the customer subscribed or unsubscribed.                                                                                | `20200528124756`               |
| `mobile`         | String | The user mobile number that should receive the payment. All mobile numbers are validated before a request is accepted.                                                 | `254708400000`                 |
| `update_type`    | String | This indicates the customer request: activation for a customer subscribing and deactivation for a customer unsubscribing.                                              | `activation` or `deactivation` |
| `shortcode`      | String | The short code associated with the service.                                                                                                                            | `22915`                        |
| `keyword`        | String | The exact keyword a user used when subscribing to the service.                                                                                                         | `GAME`                         |
| `subscriber_ref` | Int    | A unique identifier of the customer in our services.                                                                                                                   | `12345`                        |
| `service_id`     | Int    | The service identifier for the service.                                                                                                                                | `44`                           |
| `network_name`   | String | A network of the customer e.g Safaricom, Airtel, Yu, Equitel & Telkom.                                                                                                 | `Safaricom`                    |

# (Un)Subscription Response

On successful reception of the (un)subscription request, the client should reply (echo back) with the following JSON string:

### Where:

| Variable         | Type   | Description                                                                                                                                                            | Example                                    |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `request_code`   | Int    | This is a status of the request to enable our system mark it as done: 1 – Success; 0 – Failed. A Failed request will be retried automatically after 3 minutes 3 times. | `1` or `0`                                 |
| `request_desc`   | String | This is a brief description of the request. OK for successful reception; FAILED for a failed request.                                                                  | `OK` or `FAILED`                           |
| `result_message` | String | This is a message our system should send back to the customer. Leave this empty to process a user request and reply back later through the sendSms API.                | `Thank you for subscribing to our service` |

Example JSON string:

```json
{
  "result_code": 1,
  "result_desc": "OK",
  "result_message": "Thank you for subscribing to our service."
}
```
