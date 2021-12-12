---
sidebar_position: 3
---

# Fetch & Show

Get Customer details from your server.

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
<td>customer_id</td>
<td>String</td>
<td>Yes</td>
<td>Customer Id</td>
</tr>
</tbody>
</table>

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```curl
curl https://api.notchpay.co/customers/[CUSTOMER_ID]
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
  path: "/customers/:reference",
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
  $url = "https://api.notchpay.co/customers/:reference";
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
  "name": "Ramiro Kunde Jr.",
  "email": null,
  "phone": null,
  "customer_id": "ncus_9oH4KRdZoV9D"
}
```
