---
sidebar_position: 3
---

# Fetch & Verify

Get Transaction details

## Requirements

<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Required?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>reference</td>
<td>String</td>
<td>Yes</td>
<td>Transaction reference</td>
</tr>
</tbody>
</table>

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```curl
curl https://api.notchpay.co/checkout/[REFERENCE]
-H "Authorization: BUSINESS_KEY"
-H "Content-Type: application/json"
-X GET
```

</TabItem>
<TabItem value="node" label="NodeJS">

```node
const https = require("https");
const options = {
  hostname: "api.notchpay.co",
  port: 443,
  path: "/checkout/:reference",
  method: "GET",
  headers: {
    Authorization: "BUSINESS_KEY",
    "Content-Type": "application/json",
  },
};
const req = https
  .request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (error) => {
    console.error(error);
  });
req.write(params);
req.end();
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
  $url = "https://api.notchpay.co/checkout/:reference";
  //open connection
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Authorization: BUSINESS_KEY",
      "Cache-Control: no-cache",
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }
?>
```

</TabItem>
</Tabs>

## Response

```json
{
  "transaction": {
    "amount": 98.90922759935464,
    "sandbox": true,
    "fee": "0.00 F.CFA",
    "converted_amount": "55,000.00 F.CFA",
    "business": {
      "country": "cm",
      "email": "hello@notchpay.co",
      "phone": null,
      "avatar": null,
      "name": "Notch Pay",
      "channels": ["notchpay", "paypal", "mobile", "eumm", "card", "yup"]
    },
    "description": "Account Top Up",
    "customer": {
      "name": null,
      "email": "support@notchpay.co",
      "phone": "662611051",
      "cid": "ncus_X4gZyuKMTfbl"
    },
    "reference": "MFPn36KfqAIC",
    "status": "pending",
    "currency": "XAF",
    "created_at": "2021-08-15T21:32:31.000000Z",
    "updated_at": "2021-08-15T21:32:31.000000Z"
  },
  "authorization_url": "https://pay.notchpay.co/webcheckout/MFPn36KfqAIC"
}
```
