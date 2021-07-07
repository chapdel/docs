---
title: Exchanges
description: "Notch Pay usage for Financial services."
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

To get access of those endpoint, you need [Exchange API Key](https://exchanges.notchpay.xyz/settings/api)

</alert>

## Currencies

Get currencies available on Notch Pay.

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/exchanges/currencies
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
curl http://api.notchpay.xyz/exchanges/rates
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
    "format": "؋1,0.0000",
    "exchange_rate": "77.243354",
    "updated_at": "2021-01-10T15:30:24.000000Z"
  },
  {
    "name": "Albania, Lek",
    "code": "ALL",
    "symbol": "Lek",
    "format": "1,0.00Lek",
    "exchange_rate": "101.235184",
    "updated_at": "2021-01-10T15:30:24.000000Z"
  },
  {
    "name": "Algerian Dinar",
    "code": "DZD",
    "symbol": "د.ج‏",
    "format": "د.ج‏ 1,0.0000",
    "exchange_rate": "132.206578",
    "updated_at": "2021-01-10T15:30:27.000000Z"
  },
  ...
]
```

## Convert

Convert any money value from one currency to another at the latest API rates.

### Formatted result

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/exchanges/convert?from=USD&to=XAF&value=500
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
{
  "value": "270,648.40 F.CFA",
  "from": {
    "name": "US Dollar",
    "code": "USD",
    "symbol": "$",
    "format": "$1,0.0000",
    "exchange_rate": "1",
    "updated_at": "2021-02-20T08:46:02.000000Z"
  },
  "to": {
    "name": "Franc CFA (XAF)",
    "code": "XAF",
    "symbol": "F.CFA",
    "format": "1,0.0000 F.CFA",
    "exchange_rate": "541.296799",
    "updated_at": "2021-02-20T08:46:03.000000Z"
  }
}
```

### Unformatted result

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/exchanges/convert?from=USD&to=XAF&value=500&format=false
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
{
  "value": 270648.3995,
  "from": {
    "name": "US Dollar",
    "code": "USD",
    "symbol": "$",
    "format": "$1,0.0000",
    "exchange_rate": "1",
    "updated_at": "2021-02-20T08:46:02.000000Z"
  },
  "to": {
    "name": "Franc CFA (XAF)",
    "code": "XAF",
    "symbol": "F.CFA",
    "format": "1,0.0000 F.CFA",
    "exchange_rate": "541.296799",
    "updated_at": "2021-02-20T08:46:03.000000Z"
  }
}
```

### Conversion based on country code

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/exchanges/convert?from=USD&country=cm&value=500
-H "X-Exchange-Key: YOUR_EXCHANGE_KEY"
-H "Content-Type: application/json"
-X GET
```

  </code-block>
</code-group>

Result format

```json
{
  "value": 270648.3995,
  "from": {
    "name": "US Dollar",
    "code": "USD",
    "symbol": "$",
    "format": "$1,0.0000",
    "exchange_rate": "1",
    "updated_at": "2021-02-20T08:46:02.000000Z"
  },
  "to": {
    "name": "Franc CFA (XAF)",
    "code": "XAF",
    "symbol": "F.CFA",
    "format": "1,0.0000 F.CFA",
    "exchange_rate": "541.296799",
    "updated_at": "2021-02-20T08:46:03.000000Z"
  }
}
```
