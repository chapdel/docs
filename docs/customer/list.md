---
sidebar_position: 2
---

# List

Get a list of all customers.

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
curl https://api.notchpay.co/customers
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
  path: "/customers",
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
  $url = "https://api.notchpay.co/customers";
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
    "totals": 72,
    "last_page": 3,
    "current_page": 1,
    "selected": 30,
    "items": [
        {
            "name": "Bryana Wilderman I",
            "email": null,
            "phone": null,
            "customer_id": "ncus_I6gXXteIgWkD"
        },
        ...
        {
            "name": "Moriah Connelly V",
            "email": null,
            "phone": null,
            "customer_id": "ncus_RzB2fiCeAjCz"
        }
    ]
}
```
