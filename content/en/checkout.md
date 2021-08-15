---
title: Checkout
description: "Notch Pay usage for Checkout."
position: 3
category: Guide
endpoints:
  - Initialize
  - Fetch
  - Complete
  - Cancel
---

Notch Pay usage for Checkout.

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

To get access of those endpoint, you need [Business ID](https://business.notchpay.co/settings/apis-webhooks)

</alert>

## Initialize

Initialize checkout transaction on Notch Pay.

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
<tr>
<td>amount</td>
<td>Numeric</td>
<td>Yes</td>
<td>Amount you are debiting customer.</td>
</tr>
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

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/checkout/initialize
-H "N-Authorization: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-d '{"phone":"662611051", "email":"support@notchpay.co", "amount":55000, "currency":"XAF", "description": "Account Top Up"}'
-X POST
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "transaction": {
    "amount": 98.90922759935464,
    "sandbox": true,
    "fee": "0.00 F.CFA",
    "converted_amount": "55,000.00 F.CFA",
    "business": {
      "country": {
        "name": "Cambodia",
        "iso_code": "KH"
      },
      "email": "hello@notchpay.co",
      "phone": null,
      "avatar": null,
      "name": "Notch Pay",
      "gateways": ["notchpay", "paypal", "mobile", "eumm", "card"]
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
    "currency": null,
    "created_at": "2021-08-15T21:32:31.000000Z",
    "updated_at": "2021-08-15T21:32:31.000000Z"
  },
  "authorization_url": "https://pay.notchpay.co/webcheckout/MFPn36KfqAIC"
}
```

## Fetch

Get Transaction details

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

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/checkout/[REFERENCE]
-H "N-Authorization: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "transaction": {
    "amount": 98.90922759935464,
    "sandbox": true,
    "fee": "0.00 F.CFA",
    "converted_amount": "55,000.00 F.CFA",
    "business": {
      "country": {
        "name": "Cambodia",
        "iso_code": "KH"
      },
      "email": "hello@notchpay.co",
      "phone": null,
      "avatar": null,
      "name": "Notch Pay",
      "gateways": ["notchpay", "paypal", "mobile", "eumm", "card"]
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
    "currency": null,
    "created_at": "2021-08-15T21:32:31.000000Z",
    "updated_at": "2021-08-15T21:32:31.000000Z"
  },
  "authorization_url": "https://pay.notchpay.co/webcheckout/MFPn36KfqAIC"
}
```

## Complete

After initializing your transaction, you have two options to complete your transaction. Continue in web checkout or in RESP API.

### Web Checkout

Complete your transaction by open or redirect your customer to `authorization_url` present in your response.

### REST API

You can also terminate the transaction with the REST API method.

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
<td>gateway</td>
<td>String</td>
<td>Yes</td>
<td>Payment gateway to make a payment with. Available gateways include; `mobile (for mobile money processing), card, notchpay, paypal`  </td>
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
<tr>
</tbody>
</table>

#### Data parameters according to gateway

- `notchpay`
  - `number` : Customer Account ID
  - `secret` : Customer Account Secret Code (SCD)
- `mobile`
  - `phone` : Customer phone number
- `card`
  - `name` : Customer card name
  - `number` : Customer card number
  - `cvv` : Customer card cvv

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/checkout/TRANSACTION_REFERENCE
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-d '{"gateway":"mobile", "data": {"phone":"662611051"}}'
-X POST
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "message": "Your transaction has been done",
  "status": 200
}
```

## Cancel

Cancel your transaction

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/checkout/TRANSACTION_REFERENCE
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X PUT
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "message": "Your transaction has been canceled"
}
```
