

# USSD API Documentation

## Introduction


## Endpoint

The USSD API endpoint is:
```
https://yourdomain.com
```

## Parameters

The following parameters are required to make requests to the USSD API:

- `SESSIONID`: The session ID for the USSD session.
- `USSDCODE`: The USSD code associated with your service.
- `NETWORK`: The mobile network associated with the user (e.g., "saf" for Safaricom).
- `MSISDN`: The phone number of the user making the USSD request.
- `INPUT`: The user's input during the USSD session.

## Example Request

### PHP Example

```php
<?php

$url = "https://yourdomain.com";
$params = [
    'SESSIONID' => '123456789',
    'USSDCODE' => '*123#',
    'NETWORK' => 'saf',
    'MSISDN' => '+1234567890',
    'INPUT' => '1',
];

// Build the URL with parameters
$requestUrl = $url . '?' . http_build_query($params);

// Initialize cURL session
$ch = curl_init($requestUrl);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL session and get the response
$response = curl_exec($ch);

// Close cURL session
curl_close($ch);

// Output the response
echo $response;
?>
```

### Python Example using requests library

```python
import requests

url = "https://yourdomain.com"
params = {
    'SESSIONID': '123456789',
    'USSDCODE': '*123#',
    'NETWORK': 'saf',
    'MSISDN': '+1234567890',
    'INPUT': '1',
}

# Make GET request using requests library
response = requests.get(url, params=params)

# Output the response
print(response.text)
```

### Node.js Example using axios library

```javascript
const axios = require('axios');

const url = "https://yourdomain.com";
const params = {
    SESSIONID: '123456789',
    USSDCODE: '*123#',
    NETWORK: 'saf',
    MSISDN: '+1234567890',
    INPUT: '1',
};

// Make GET request using axios library
axios.get(url, { params })
    .then(response => {
        // Output the response
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
```

Make sure to install the required libraries (requests for Python and axios for Node.js) using the respective package managers before running the code.
```

Feel free to use this Markdown code in your documentation.
