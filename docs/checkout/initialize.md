---
sidebar_position: 2
---

# Initialize

Initialize checkout transaction on Notch Pay.

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
<td>email</td>
<td>String</td>
<td>Yes if phone is null</td>
<td>Email address of customer</td>
</tr>
<tr>
<td>phone</td>
<td>String</td>
<td>Yes if email is null</td>
<td>Phone Number of customer</td>
</tr>
<tr>
<td>customer_id</td>
<td>String</td>
<td>Yes if email and phone are null</td>
<td>Id of existing customer</td>
</tr>
<tr>
<td>amount</td>
<td>Numeric</td>
<td>Yes</td>
<td>Amount you are debiting customer.</td>
</tr>
<tr>
<td>reference</td>
<td>String</td>
<td>No</td>
<td>Transaction reference. If you do not pass this parameter, Notch Pay will generate a unique reference for you.</td>
</tr>
<tr>
<td>currency</td>
<td>string</td>
<td>Yes</td>
<td>Currency charge should be performed in</td>
</tr>
</tbody>
</table>

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```curl
curl https://api.notchpay.co/checkout/initialize
-H "Authorization: BUSINESS_KEY"
-H "Content-Type: application/json"
-d '{"phone":"662611051",
    "email":"support@notchpay.co",
    "amount":55000,
    "currency":"XAF",
    "description": "Account Top Up"}'
-X POST
```

</TabItem>
<TabItem value="node" label="NodeJS">

```node
const https = require("https");
const params = JSON.stringify({
  email: "support@notchpay.co",
  amount: "55000",
  currency: "XAF",
  description: "Account Top Up",
  phone: "662611051",
});
const options = {
  hostname: "api.notchpay.co",
  port: 443,
  path: "/checkout/initialize",
  method: "POST",
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
  $url = "https://api.notchpay.co/checkout/initialize";
  $fields = [
    'email' => "support@notchpay.co",
    'amount' => "55000",
    'currency' => "XAF",
    'description' => "Account Top Up",
    'phone' => "662611051",
  ];
  $fields_string = http_build_query($fields);
  //open connection
  $ch = curl_init();

  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: BUSINESS_KEY",
    "Cache-Control: no-cache",
  ));

  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

  //execute post
  $result = curl_exec($ch);
  echo $result;
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
