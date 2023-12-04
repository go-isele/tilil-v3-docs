---
title: Bulk SMS Documentation
description: Learn how to integrate Bulk SMS functionality into your applications.
---

# Overview

Welcome to the Bulk SMS Documentation! This guide will help you understand how to integrate our Bulk SMS service into your applications.

## How It Works

Our Bulk SMS service allows you to send a large volume of text messages to multiple recipients simultaneously. Here's a brief overview of how it works:

1. **Signup**: Register for an account on our platform to get access to the Bulk SMS API.
2. **Authentication**: Obtain API credentials (API key, secret, etc.) to authenticate your requests.
3. **Sending SMS**: Use our API endpoints to send SMS messages to multiple recipients using a single request.
4. **Monitoring**: Monitor delivery status and track message delivery to ensure successful transmission.

## API Integration

### Authentication

To authenticate your requests, include your API key in the HTTP headers. Here's an example using cURL:

```
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d "recipient=PHONE_NUMBER" \
  -d "message=Your message content" \
  https://api.bulksms.com/send
 ```

### Sample Request
```
POST /send HTTP/1.1
Host: api.bulksms.com
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "recipient": "PHONE_NUMBER",
  "message": "Your message content"
}
```
