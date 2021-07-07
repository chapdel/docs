---
title: Checkout
description: "Notch Pay usage for Checkout."
position: 2
category: Guide
endpoints:
  - Initialize
  - Complete
  - Verify
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
<td>business_id</td>
<td>String</td>
<td>Yes</td>
<td>Your Notch Pay Business ID</td>
</tr>
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
-H "Content-Type: application/json"
-d '{"business_id":"BUSINESS_ID", "phone":"662611051", "email":"support@notchpay.co", "amount":55000, "currency":"XAF", "description": "Account Top Up"}'
-X POST
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "transaction": {
    "amount": 102.50289041843702,
    "description": "Account Top Up",
    "reference": "fcHVP21FFgqwt3hZ",
    "data": {
      "email": "support@notchpay.co",
      "phone": "662611051"
    },
    "status": "pending",
    "updated_at": "2021-02-20T06:52:04.000000Z",
    "created_at": "2021-02-20T06:52:04.000000Z"
  },
  "redirect_url": "https://pay.notchpay.co/webcheckout?token=fcHVP21FFgqwt3hZ"
}
```

## Complete

After initializing your transaction, you have two options to complete your transaction. Continue in web checkout or in RESP API.

### Web Checkout

Complete your transaction by open or redirect your customer to `redirect_url` present in your response.

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
  - `number` : Customer Account number
  - `secret` : Customer Account Secret Code
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

## Verify

Verify transactions after payments by making a GET request to the endpoint from your server using your transaction reference.

#### Requirements

- `reference`: Your transaction reference passed by path request param

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/verify/TRANSACTION_REFERENCE
-H "Content-Type: application/json"
```

  </code-block>
  
</code-group>

#### Result format

```json
{ "status": "canceled", "reference": "EEqSVlaq4WXz" }
```
