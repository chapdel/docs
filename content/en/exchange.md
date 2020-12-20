---
title: Exchange
description: ""
position: 2
category: Guide
endpoints:
  - Currencies
  - Rates
  - Convert
---

Notch Pay usage for Financial services.

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

To get access of those endpoint, you need [Exchange API Key](https://notchpay.xyz/vendors/exchange)

</alert>

## Currencies

Get currencies available on Notch Pay.

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.xyz/v1/exchange/currencies
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
[
  {
    "mame": "Afghan Afghani",
    "code": "AFN"
  },
  {
    "mame": "Albanian Lek",
    "code": "ALL"
  },
  {
    "mame": "Algerian Dinar",
    "code": "DZD"
  },
  {
    "mame": "Angolan Kwanza",
    "code": "AOA"
  },
  ...
]
```

## Rates

Get the latest exchange rates available on Notch Pay.

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.xyz/v1/exchange/rates
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
[

    {
    "name": "Afghanistan, Afghani",
    "code": "AFN",
    "symbol": "؋",
    "format": "؋1,0.000000",
    "exchange_rate": "0",
    "active": 0,
    "created_at": "2020-12-20T00:26:11.000000Z",
    "updated_at": "2020-12-20T00:26:11.000000Z"
  },
  {
    "name": "Albania, Lek",
    "code": "ALL",
    "symbol": "Lek",
    "format": "1,0.00Lek",
    "exchange_rate": "0",
    "active": 0,
    "created_at": "2020-12-20T00:26:12.000000Z",
    "updated_at": "2020-12-20T00:26:12.000000Z"
  },
  {
    "name": "Algerian Dinar",
    "code": "DZD",
    "symbol": "د.ج‏",
    "format": "د.ج‏ 1,0.000000",
    "exchange_rate": "0",
    "active": 0,
    "created_at": "2020-12-20T00:26:12.000000Z",
    "updated_at": "2020-12-20T00:26:12.000000Z"
  },
  ...
]
```

## Convert

Convert any money value from one currency to another at the latest API rates.

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.xyz/v1/exchange/convert?from=USD&to=XAF&value=500
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
267,573.7320000 F.CFA
```
