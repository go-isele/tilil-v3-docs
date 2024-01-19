---
title: Tilil Documentation
description: Tilil Technologies official guide on how to integrate Bulk SMS functionality into your systems and applications.
---
# Tilil Technologies Limited

**Address:** Raphta Heights, Raphta Road - Westlands  
**Phone:** +254 792 777888, +254 708 400000  
**Email:** [support@tililtech.com](mailto:support@tililtech.com)

## Tilil Technologies Team
- Date: 18/01/2023
- Website: [tililtech.com](http://tililtech.com)
- Alternate Website: [tililtechnologies.co.ke](http://tililtechnologies.co.ke)
# Overview

This document provides a quick step-by-step guide on how to send bulk and premium messages
using an application interface (API). It has been made simple to enable a quick integration into
our bulk messaging services.
A more descriptive guide can be found at [https://tililtech.com](https://tililtech.com).
To note is that **Tilil Technologies** is always developing its systems to suit every client’s needs
and also to achieve the best data integrity as possible.
We also customize the APIs to every client’s request. So, if you need SOAP, XML, Direct
database insertion or the bulk messaging system installed in your datacenter or in your intranet,
talk to us.

## How It Works

Our Bulk SMS service allows you to send a large volume of text messages to multiple recipients simultaneously. Here's a brief overview of how it works:

1. **Signup**: Register for an account on our platform to get access to the Bulk SMS API.
2. **Authentication**: Obtain API credentials (API key, secret, etc.) to authenticate your requests.
3. **Sending SMS**: Use our API endpoints to send SMS messages to multiple recipients using a single request.
4. **Monitoring**: Monitor delivery status and track message delivery to ensure successful transmission.

## API Integration

### SMS API Endpoints

To authenticate your requests, include your API key in the HTTP headers. Here's an example using cURL:

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d "recipient=PHONE_NUMBER" \
  -d "message=Your message content" \
  https://api.tililtech.com/sms/v3/sendsms
```

### Sample Request

```http request
POST /send HTTP/1.1
Host: api.bulksms.com
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "recipient": "PHONE_NUMBER",
  "message": "Your message content"
}
```
