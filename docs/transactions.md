---
sidebar_position: 3
---

# Transactions

List transactions carried out on your integration.

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
<td>perpage</td>
<td>Integer</td>
<td>No</td>
<td>Items to get per page</td>
</tr>
<tr>
<td>page</td>
<td>Integer</td>
<td>No</td>
<td>Page to access</td>
</tr>
</tbody>
</table>

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```curl
curl https://api.notchpay.co/transactions
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
  path: "/transactions",
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
  $url = "https://api.notchpay.co/transactions";
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
    "totals": 145,
    "last_page": 5,
    "current_page": 1,
    "selected": 30,
    "items": [
        {
            "amount": 42.24,
            "amount_total": 42.24,
            "sandbox": 0,
            "fee": 0,
            "converted_amount": 4510.6884556800005,
            "business": {
                "country": null,
                "email": null,
                "phone": null,
                "name": "Notch Pay",
                "channels": [
                    "notchpay",
                    "paypal",
                    "mobile",
                    "mtn-momo",
                    "om",
                    "eumm",
                    "yup",
                    "card"
                ]
            },
            "customer": null,
            "description": "Velit veritatis et officia amet.",
            "reference": "9l2g8Wp6xNoLY9bT",
            "status": "pending",
            "currency": "ALL",
            "callback": null,
            "created_at": "2021-12-09T22:30:48.000000Z",
            "updated_at": "2021-12-09T22:30:48.000000Z"
        },
        ...
        {
            "amount": 4.57,
            "amount_total": 4.57,
            "sandbox": 0,
            "fee": 0,
            "converted_amount": 68.55070835000001,
            "business": {
                "country": null,
                "email": null,
                "phone": null,
                "name": "Chapdel's Business",
                "channels": [
                    "notchpay",
                    "paypal",
                    "mobile",
                    "mtn-momo",
                    "om",
                    "eumm",
                    "yup",
                    "card"
                ]
            },
            "customer": null,
            "description": "Accusamus repellendus et sunt non ipsa.",
            "reference": "iMXeETqJgSnIwiEg",
            "status": "pending",
            "currency": "ERN",
            "callback": null,
            "created_at": "2021-12-09T22:30:51.000000Z",
            "updated_at": "2021-12-09T22:30:51.000000Z"
        },
        {
            "amount": 27.96,
            "amount_total": 27.96,
            "sandbox": 0,
            "fee": 0,
            "converted_amount": 177.39222,
            "business": {
                "country": null,
                "email": null,
                "phone": null,
                "name": "Chapdel's Business",
                "channels": [
                    "notchpay",
                    "paypal",
                    "mobile",
                    "mtn-momo",
                    "om",
                    "eumm",
                    "yup",
                    "card"
                ]
            },
            "customer": null,
            "description": "Consequatur distinctio veniam distinctio ducimus amet vero sed omnis.",
            "reference": "KSElzZ0bU3SFVNfg",
            "status": "pending",
            "currency": "CNY",
            "callback": null,
            "created_at": "2021-12-09T22:30:51.000000Z",
            "updated_at": "2021-12-09T22:30:51.000000Z"
        }
    ]
}
```
