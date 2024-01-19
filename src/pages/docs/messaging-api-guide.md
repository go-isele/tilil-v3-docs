---
title: Messaging API Guide
---

## Quick SMS API Guide

### Preamble

This document provides a quick step-by-step guide on how to send bulk and premium messages using an application interface (API). It has been made simple to enable quick integration into our bulk messaging services. A more descriptive guide can be found at [tililtech.com](http://tililtech.com).

To note is that Tilil Technologies is always developing its systems to suit every client’s needs and to achieve the best data integrity possible. We also customize the APIs to every client’s request. So, if you need SOAP, XML, Direct database insertion, or the bulk messaging system installed in your data center or intranet, talk to us.

### SECTION 1: BULK MESSAGING

#### SMS API Endpoints

- (New): [https://api.tililtech.com/sms/v3/sendsms](https://api.tililtech.com/sms/v3/sendsms)

#### Sending a message

Below is a sample `sendsms` JSON data:

```json
{
  "api_key": "{{Test API Key}}",
  "service_id": 0,
  "mobile": "0708400000",
  "response_type": "json",
  "shortcode": "Tilil",
  "message": "This is a message.\n\nRegards\nTilil"
}
```

## Where:

| Variable      | Type   | Description                                                                                                                                            | Example           |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| api_key       | String | The authentication string provided to the customer                                                                                                     | qw566wqtwgqyw65wq |
| shortcode     | String | The origination alphanumeric or numeric code                                                                                                           | Tilil             |
| message       | String | The message our system should send to the end user. The message can be up to 920 characters long. Click on the following link to download your content | ...               |
| mobile        | String | The customer mobile number to receive the message. This can be any format e.g. 708400000, 0708400000, +254 708 400000                                  | 0708400000        |
| service_id    | Int    | An identifier of the service allocated to the customer. This is always 0 for bulk messaging                                                            | 0                 |
| response_type | String | This is either plain or json. This only applies in the old messaging platform                                                                          | json              |

## SMS Response(s):

### 1. Success

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

### 2. Failed

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

### Where

| Variable       | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| status_code    | The numeric status code to help in API integrations. Refer to the next table for status code descriptions. |
| status_desc    | A short description of the status code.                                                                    |
| message_id     | A unique identifier for every successfully accepted message.                                               |
| mobile_number  | Well-formatted recipient mobile number.                                                                    |
| network_id     | Network identifier of the recipient mobile number.                                                         |
| message_cost   | The amount deducted from your account for this particular message.                                         |
| credit_balance | The remaining balance in your account after the request.                                                   |

### API Status codes and descriptions

| status_code | Status                             |     |
| ----------- | ---------------------------------- | --- |
| 0           | Unknown error                      |     |
| 1000        | Success                            |     |
| 1           | Success                            |     |
| 1001        | Invalid sender name {$senderValue} |
| 1002        | Network not allowed                |     |
| 1003        | Invalid mobile number              |     |
| 1004        | Low bulk credits                   |     |
| 1005        | Failed. System error               |     |
| 1006        | Invalid credentials                |     |
| 1007        | Database connection failed         |     |
| 1008        | Database selection failed          |     |
| 1009        | No dlr                             |     |
| 1009        | Unsupported data type              |     |
| 1010        | Unsupported request type           |     |
| 1011        | Invalid user state                 |     |

## Getting Delivery Reports:

### 1. Offline (Pulling – Not recommended)

This is a pull method where a client requests a delivery report from the system by specifying a message ID in the request. The URL below will return a delivery report for message ID 288369252.

###### Table 004: Get Delivery Report Request URL

Where 288369252 is the `message_id` returned in the `sendsms` request.

#### You only expect:

1. `1009;No dlr`
2. `288369252;Success;1;DeliveredToTerminal;2020-05-13 08:47:03;00:00:06`

#### Where:

| Value Name          | Description                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| 288369252           | Message Id used when querying delivery reports                                                              |
| Success             | Request Status, a status description for a successful request                                               |
| 1                   | Delivery Status, can be used by developers for easy indexing of delivery statuses                           |
| DeliveredToTerminal | Delivery Description, full description of the delivery status                                               |
| 2020-05-13 08:47:03 | Delivery Date/Time, when the message was actually delivered to the end user                                 |
| 00:00:06            | TAT, the turn around time from when a message was scheduled up to the time it was delivered to the end user |

## 2. Online (Recommended)

This is the recommended method of getting delivery reports. A partner specifies a delivery
reports callback URL from the portal. All delivery reports sent through an API will be
pushed to the URL automatically. Below is a PHP sample that can be hosted by the client to
receive delivery report notifications. Note that the client has to implement the Business Logic
for example:

- Updating a local sent message
- Storing the delivery report for later processing
- Generating a report or an alert for support monitoring

```json
<?php
$data_json = file_get_contents('php://input');
$data_array = json_decode($data_json);

if (!$data_array) {
    die("0;error;unsupported data type");
}

$messageId = $data_array->messageId;
$dlrTime = $data_array->dlrTime;
$dlrStatus = $data_array->dlrStatus;
$dlrDesc = $data_array->dlrDesc;
$tat = $data_array->tat;
$network = $data_array->network;

// YOUR BUSINESS LOGIC

// END YOUR LOGIC: if all goes well echo 'OK' otherwise echo 'FAILED' for the system to retry
echo "OK;$messageId;$dlrDesc;$network";
?>

```

| Code | Delivery Message                 | General Status Description                                                                                |
| ---- | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1    | DeliveredToTerminal              | Message delivered to the end user's device                                                                |
| 2    | MessageWaiting                   | Queued Message forwarded to the operator but there is no delivery report                                  |
| 3    | DeliveryImpossible               | Failed The mobile operator is not able to deliver the message due to system errors. Rarely occurs         |
| 4    | DeliveryNotificationNotSupported | Delivered Message delivered to the end user's device on the test bed environment                          |
| 5    | DeliveredToNetwork               | NoReport Message forwarded to the operator but there is no delivery report                                |
| 6    | DeliveryUncertain                | NoReport Message forwarded to the operator but there is no delivery report after 24 hours                 |
| 7    | Insufficient_Balance             | Failed Message delivery failed because of insufficient balance                                            |
| 8    | Invalid_Linkid                   | Failed An on-demand message delivery failed because of an expired or invalid link id                      |
| 9    | TeleserviceNotProvisioned        | Failed End user device cannot receive GSM messages                                                        |
| 10   | UserInBlacklist                  | Failed End user has requested the mobile operator to stop all messages from the sender id to their number |
| 11   | UserAbnormalState                | Failed Subscriber mobile number may be blocked                                                            |
| 12   | UserIsSuspended                  | Failed Subscriber mobile number suspended due to fraud, etc.                                              |
| 13   | NotSFCUser                       | Failed End user not subscribed to a service                                                               |
| 14   | UserNotSubscribed                | Failed End user not subscribed to a service                                                               |
| 15   | UserNotExist                     | Failed Subscriber does not belong to the mobile operator                                                  |
| 16   | AbsentSubscriber                 | Failed Subscriber is out of network for over 24 hours since a message was sent                            |
| 17   | NOT_DELIVERED                    | Failed Same as DeliveryImpossible                                                                         |
| 18   | DELIVERED                        | Delivered Message delivered to the end user's device                                                      |
| 19   | ForwardedToNetwork               | NoReport Message forwarded to the operator but there is no delivery report                                |
| 20   | MessagePaused                    | Queued Message paused by system user                                                                      |
| 21   | MessageRejected                  | Failed End user has opted out of the message from a sender id                                             |
| 22   | Queued                           | Queued Message has not been processed                                                                     |
| 23   | InvalidMobile                    | Failed (not set)                                                                                          |
| 24   | ReportNotHandled                 | Failed (not set)                                                                                          |
| 25   | SenderName Blacklisted           | Failed The customer has opted out through *456*20#                                                        |
| 26   | MessagePurged                    | Purged Message Purged by System User simply means the message was deleted.                                |

## Purchasing Credit

### 1. Mobile Money (Online)

You can purchase credits from any mobile number through MPESA Paybill Number 566518; Account Tilil.<YOUR_ACCOUNT_NUMBER> e.g Tilil.B211. Your account will be credited automatically.

### 2. Cheque (Offline)

You can draw a cheque to Tilil Technologies Limited. Credits will be loaded to your account pending cheque processing.

## SECTION 2: SHORT CODE MESSAGING

### 1. Receiving Inbound Messages

The client will provide an endpoint that accepts the following JSON data through a POST request. In cases where a client wants the data pushed over a secure connection such as over SSL, the client will provide the necessary certificates to be configured in our application.

```json
{
  "api_token": "944a73412bed1240b5a2afa381a928a6",
  "message": "Test inbox",
  "shortcode": "70700",
  "mobile": "254726770792",
  "inbox_id": "4448236",
  "service_id": "32",
  "network_name": "Safaricom",
  "timestamp": "20180217065028",
  "link_id": "763723672367236526261"
}
```

## Where:

| Variable     | Type   | Description                                                                                                                                                            | Example                          |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| api_token    | String | The token supplied by a partner for our service request authentication purposes. This can be an encrypted value of their username, server IP, timestamp, and password. | 944a73412bed1240b5a2afa381a928a6 |
| timestamp    | String | Timestamp in the format YmdHis to be used in password decryption.                                                                                                      | 20180217065028                   |
| mobile       | String | The user mobile number that should receive the payment. All mobile numbers are validated before a request is accepted.                                                 | 254726770792                     |
| message      | String | The message as received from the end user. Test inbox                                                                                                                  | Test inbox                       |
| shortcode    | String | The short code associated with the service                                                                                                                             | 70700                            |
| inbox_id     | Int    | A unique identifier of the message                                                                                                                                     | 4448236                          |
| service_id   | Int    | The service identifier for the service                                                                                                                                 | 34                               |
| network_name | String | A network identifier e.g Safaricom, Airtel, Yu, Equitel & Telkom                                                                                                       | Safaricom                        |
| link_id      | String | Received for On-Demand shortcode messages. This should be used when sending out replies.                                                                               | 326372781291728126767            |

On successful reception of an inbound message, the client should reply (echo back) with the
following JSON string:

```json
{
  "result_code": 1,
  "result_desc": "OK",
  "result_message": "Thank you for your message."
}
```

## Where:

| Variable       | Type   | Description                                                                                                                                                  | Example                    |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| request_code   | Int    | This is a status of the pushed message: 1 – Success; 0 – Failed. A message might fail to be received on the client’s side due to internal server errors etc. | 1 or 0                     |
| request_desc   | String | This is a brief description of the request. OK for successful reception; FAILED for a failed request.                                                        | OK or FAILED               |
| result_message | String | This is a message our system should send back to the end user. Leave this empty to process a user request and reply back later through the sendSms API.      | Thank you for your message |

### 2. Sending short code messages

This is the same as sending a bulk message. The only difference is that a service_id will be
added to this request. See example JSON below:

```json
{
  "api_key": "1ts3bK2QVbr7caV9211b28kf0dd3kfIP95eb5bvEjAPScd12of1Pm7C2mGOLQca4",
  "sender_name": "22915",
  "mobile": "0708400000",
  "message": "This is a message from Tilil",
  "service_id": "44",
  "link_id": ""
}
```

## Where:

| Variable    | Type   | Description                                                                                       | Example                                              |
| ----------- | ------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| api_key     | Int    | The authentication string provided to the customer                                                | qw566wqtwgqyw65wq                                    |
| sender_name | String | The origination alphanumeric or numeric code                                                      | 22915                                                |
| message     | String | The message our system should send to the end user. The message can be up to 920 characters long. | Click on the following link to download your content |
| mobile      | String | Mobile number to receive the MT message                                                           | 0708400000                                           |
| service_id  | Int    | An identifier of the service allocated to the customer                                            | 44                                                   |
| link_id     | Long   | Used for On-Demand messages. Leave empty for subscription services                                | 12345678987654321                                    |

The data is posted to the following endpoint:

**sendSms endpoint:**
[https://api.tililsms.com/sms/v3/sendsms](https://api.tililsms.com/sms/v3/sendsms)

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

### Failed response packet:

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

### 3. Receiving (un)Subscription Requests

The client will register an endpoint with us that accepts JSON post requests. See a request
sample below:

```json
{
“api_token”:“23627367236232ghgge23g22gh2gh2”,
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

## \*\*Subscription/Unsubscription Request:

The client will register an endpoint with us that accepts JSON post requests. Below is a sample request:

```json
{
  "api_token": "2tyy23ty43y434hj3h43u4u3u4u",
  "timestamp": "20200528124756",
  "mobile": "254708400000",
  "update_type": "activation",
  "shortcode": "22915",
  "keyword": "GAME",
  "subscriber_ref": 12345,
  "service_id": 44,
  "network_name": "Safaricom"
}
```

## Where

The client will register an endpoint with us that accepts JSON post requests. Below is a sample request:

| Variable       | Type   | Description                                        | Example                     |
| -------------- | ------ | -------------------------------------------------- | --------------------------- |
| api_token      | String | Token for service request authentication           | 2tyy23ty43y434hj3h43u4u3u4u |
| timestamp      | String | Timestamp in the format YmdHis                     | 20200528124756              |
| mobile         | String | User mobile number                                 | 254708400000                |
| update_type    | String | Customer request type (activation/deactivation)    | activation                  |
| shortcode      | String | Short code associated with the service             | 22915                       |
| keyword        | String | Exact keyword used when subscribing to the service | GAME                        |
| subscriber_ref | Int    | Unique identifier of the customer in our services  | 12345                       |
| service_id     | Int    | Service identifier for the service                 | 44                          |
| network_name   | String | Network of the customer (e.g., Safaricom)          | Safaricom                   |

## (Un)Subscription Response:

On successful reception of the (un)subscription request, the client should reply (echo back) with the following JSON string:

```json
{
  "request_code": 1,
  "request_desc": "OK",
  "result_message": "Thank you for subscribing to our service."
}
```

## Where

| Variable         | Type   | Description                                                                                                                                   | Example                                     |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `request_code`   | Int    | Status of the request (1 – Success; 0 – Failed). A failed request will be retried automatically after 3 minutes for up to 3 times.            | 1                                           |
| `request_desc`   | String | Brief description of the request (OK for successful reception; FAILED for a failed request).                                                  | OK                                          |
| `result_message` | String | Message for our system to send back to the customer. Leave this empty to process a user request and reply back later through the sendSms API. | "Thank you for subscribing to our service." |

## (Un)Subscription API

This service is invoked by a client to activate or deactivate a customer on a certain service.

### Endpoint:

- [https://api.tililsms.com/sms/v3/subscribermanage](https://api.tililsms.com/sms/v3/subscribermanage)

### Activation Request Packet:

```json
{
  "api_key": "1ts3bK2QVbr7caV9211b28kf0dd3kfIP95eb5bvEjAPScd12of1Pm7C2mGOLQca4",
  "service_id": "44",
  "mobile": "254708400000",
  "option": "activation"
}
```

### Deactivation request packet:

```json
{
  "api_key": "1ts3bK2QVbr7caV9211b28kf0dd3kfIP95eb5bvEjAPScd12of1Pm7C2mGOLQca4",
  "service_id": "44",
  "mobile": "254708400000",
  "option": "deactivation"
}
```

In both cases, you will receive the following responses:

```json
{
  "status_code": "1",
  "status_desc": "Success",
  "mobile": "254708400000",
  "network_name": "Safaricom"
}
```

## Response Variables

| Variable     | Type   | Description                                       | Example                            |
| ------------ | ------ | ------------------------------------------------- | ---------------------------------- |
| status_code  | Int    | Status of your request: 1 – Success; else Failed. | 1, 0, 1009                         |
| status_desc  | String | Brief description of the request.                 | Success, Failed...                 |
| mobile       | String | Reformatted mobile number of the customer.        | 254708400000                       |
| network_name | String | Detected network of the customer.                 | Safaricom, Airtel, Telkom, Equitel |
