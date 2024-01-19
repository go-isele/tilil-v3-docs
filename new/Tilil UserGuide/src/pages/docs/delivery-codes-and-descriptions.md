---
title: Delivery Reports
---

## Getting Delivery Reports:

1. **Offline (Pulling – Not recommended)**

   This is a pull method where a client requests a delivery report from the system by specifying a message id in the request. The URL below will return a delivery report for message id 288369252.

   - [https://api.tililtech.com/sms/v3/getdlr?api_key=%3cAPI_KEY%3e&messageId=288369252](https://api.tililtech.com/sms/v3/getdlr?api_key=%3cAPI_KEY%3e&messageId=288369252)

## You Only Expect:

1. `1009;No dlr`
2. `288369252;Success;1;DeliveredToTerminal;2020-05-13 08:47:03;00:00:06`

Where:

| Value                 | Name                 | Description                                                                                              |
| --------------------- | -------------------- | -------------------------------------------------------------------------------------------------------- |
| `288369252`           | Message Id           | Used when querying delivery reports                                                                      |
| `Success`             | Request Status       | A status description for a successful request                                                            |
| `1`                   | Delivery Status      | This can be used by developers for easy indexing of delivery statuses                                    |
| `DeliveredToTerminal` | Delivery Description | Full description of the delivery status                                                                  |
| `2020-05-13 08:47:03` | Delivery Date/Time   | When the message was actually delivered to the end user                                                  |
| `00:00:06`            | TAT                  | The turn around time. From when a message was scheduled up to the time it was delivered to the end user. |

## 2. Online (Recommended)

This is the recommended method of getting delivery reports. A partner specifies a delivery reports callback URL from the portal. All delivery reports sent through an API will be pushed to the URL automatically.

Below is a PHP sample that can be hosted by the client to receive delivery report notifications. Note that the client has to implement the Business Logic for example:

- Updating a local sent message
- Storing the delivery report for later processing
- Generate a report or an alert for support monitoring

```php
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

# Delivery Codes and Descriptions

| Code | Delivery Status                  | Message General Status | Description                                                                                        |
| ---- | -------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| 1    | DeliveredToTerminal              | Delivered              | Message delivered to the end user's device                                                         |
| 2    | MessageWaiting                   | Queued                 | Message forwarded to the operator but there is no delivery report                                  |
| 3    | DeliveryImpossible               | Failed                 | The mobile operator is not able to deliver the message due to system errors. Rarely occurs         |
| 4    | DeliveryNotificationNotSupported | Delivered              | Message delivered to the end user's device on the test bed environment                             |
| 5    | DeliveredToNetwork               | NoReport               | Message forwarded to the operator but there is no delivery report                                  |
| 6    | DeliveryUncertain                | NoReport               | Message forwarded to the operator but there is no delivery report after 24 hours                   |
| 7    | Insufficient_Balance             | Failed                 | Message delivery failed because of insufficient balance                                            |
| 8    | Invalid_Linkid                   | Failed                 | An on-demand message delivery failed because of an expired or invalid link id                      |
| 9    | TeleserviceNotProvisioned        | Failed                 | End user device cannot receive GSM messages                                                        |
| 10   | UserInBlacklist                  | Failed                 | End user has requested the mobile operator to stop all messages from the sender id to their number |
| 11   | UserAbnormalState                | Failed                 | Subscriber mobile number may be blocked                                                            |
| 12   | UserIsSuspended                  | Failed                 | Subscriber mobile number suspended due to fraud, etc.                                              |
| 13   | NotSFCUser                       | Failed                 | End user not subscribed to a service                                                               |
| 14   | UserNotSubscribed                | Failed                 | End user not subscribed to a service                                                               |
| 15   | UserNotExist                     | Failed                 | Subscriber does not belong to the mobile operator                                                  |
| 16   | AbsentSubscriber                 | Failed                 | Subscriber is out of network for over 24 hours since a message was sent                            |
| 17   | NOT_DELIVERED                    | Failed                 | Same as DeliveryImpossible                                                                         |
| 18   | DELIVERED                        | Delivered              | Message delivered to the end user's device                                                         |
| 19   | ForwardedToNetwork               | NoReport               | Message forwarded to the operator but there is no delivery report                                  |
| 20   | MessagePaused                    | Queued                 | Message paused by system user                                                                      |
| 21   | MessageRejected                  | Failed                 | End user has opted out of messages from a sender id                                                |
| 22   | Queued                           | Queued                 | Message has not been processed                                                                     |
| 23   | InvalidMobile                    | Failed                 | (Not set)                                                                                          |
| 24   | ReportNotHandled                 | Failed                 | (Not set)                                                                                          |
