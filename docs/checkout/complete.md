---
sidebar_position: 4
---

# Complete

After initializing your transaction, you have two options to complete your transaction. Continue in web checkout or in RESP API.

## Continue in web checkout

Complete your transaction by open or redirect your customer to **authorization_url** present in your response.

## Complete in RESP API

You can also terminate the transaction with the REST API method.

### Requirements

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
<td>channel</td>
<td>String</td>
<td>Yes</td>
<td>Payment channel to make a payment with. Available channels include; `mobile (for mobile money processing), card, notchpay, paypal, yup`  </td>
</tr>
<tr>
<td>reference</td>
<td>String</td>
<td>Yes (passed by request path param)</td>
<td>Reference of transaction you want to complete  </td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>Yes</td>
<td>Customer information relating to the chosen payment method.</td>
</tr>
</tbody>
</table>

#### Data parameters according to gateway

- `notchpay`
  - `number` : Customer Account ID
  - `secret` : Customer Account Secret Code (SCD)
- `mobile`
  - `phone` : Customer phone number
- `card`

  - `card_number` : Customer card number
  - `cvc` : Customer card cvc
  - `exp_date` : Customer card expiry date (MM/YY)

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```curl
curl https://api.notchpay.co/checkout/:reference
-H "Authorization: BUSINESS_KEY"
-H "Content-Type: application/json"
-d '{"data": {"phone":"662611051"}, "channel":"mobile"}'
-X POST
```

</TabItem>
<TabItem value="node" label="NodeJS">

```node
const https = require("https");
const params = JSON.stringify({
  channel: "mobile",
  data: {
    phone: "+237662611051",
  },
});
const options = {
  hostname: "api.notchpay.co",
  port: 443,
  path: "/checkout/:reference",
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
  $url = "https://api.notchpay.co/checkout/:reference";
  $fields = [
    'channel' => "mobile",
    'data' => [
      'phone' => "+237662611051",
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

### Response

```json
{
  "message": "Your transaction has been done",
  "status": 200
}
```
