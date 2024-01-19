---

## title: Subscription API

This service is invoked by a client to activate or deactivate a customer on a certain service.

Endpoint: [https://api.tililsms.com/sms/v3/subscribermanage](https://api.tililsms.com/sms/v3/subscribermanage)

## Activation Request Packet:

```json
{
  "api_key": "1ts3bK2QVbr7caV9211b28kf0dd3kfIP95eb5bvEjAPScd12of1Pm7C2mGOLQca4",
  "service_id": "44",
  "mobile": "254708400000",
  "option": "activation"
}
```

## Deactivation Request Packet:

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

### Where:

| Variable       | Type   | Description                                                                                                                                             | Example                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `status_code`  | Int    | This is a status of your: 1 – Success; anything else is Failed with a short description.                                                                | `1`, `0`, or `1009`                                       |
| `status_desc`  | String | This is a brief description of the request. Success for all successful requests; Failed for a failed request. Failed requests have a brief description. | `Success`, `Failed – user locked`, `Failed – user exists` |
| `mobile`       | String | The reformatted mobile number of the customer.                                                                                                          | `254708400000`                                            |
| `network_name` | String | The detected network of the customer.                                                                                                                   | `Safaricom`, `Airtel`, `Telkom`, `Equitel`                |
