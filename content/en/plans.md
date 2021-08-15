---
title: Plans
description: "The Plans API allows you to create payment options to initiate subscription"
position: 4
category: Guide
endpoints:
  - Create Plan
  - List Plans
  - Fetch Plan
  - Update a Plan
  - Destroy Plan
---

The Plans API allows you to create payment options to initiate [Subscriptions](https://docs.notchpay.co/subscriptions)

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

To get access of those endpoint, you need [Business API Key](https://business.notchpay.co/settings/apis-webhooks)

</alert>

## Create Plan

Creating a plan with our API

#### Headers

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
<td>N-Authorization</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accept</td>
<td>String</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Body

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
<td>name</td>
<td>String</td>
<td>Yes</td>
<td>Name of your Plan</td>
</tr>
<tr>
<td>interval</td>
<td>String</td>
<td>Yes</td>
<td>Interval of subscription. Available values: <br>
    `daily`, `weekly`, `monthly`, `quarterly`, `annually`
</td>
<tr>
<td>price</td>
<td>Float</td>
<td>Yes</td>
<td>Price shold be a valid amount for selected currency</td>
</tr>
<tr>
<td>currency</td>
<td>String</td>
<td>Yes</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies] (https://docs.notchpay.co/resources#currencies) </td>
</tr>
<tr>
<td>trial_interval</td>
<td>Integer</td>
<td>Yes</td>
<td>Interval of trial. Available values: <br>
    `daily`, `weekly`, `monthly`, `quarterly`, `annually`
</td>
</tr>
<tr>
<td>trial_period</td>
<td>Integer</td>
<td>Yes</td>
<td>Period of tial.
</td>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-d '{
    "name": "Monthly subscription",
    "interval": "monthly",
    "price": 500,
    "currency":"NGN"
    }'
-X POST
```

  </code-block>
  
  
</code-group>
#### Result format

```json
{
  "name": "Monthly Subscription",
  "plan_id": "npln_D4zGvEKpJ",
  "business": {
    "country": {
      "name": "Algeria",
      "iso_code": "DZ"
    },
    "email": "innaya@notchpay.co",
    "phone": "+237662611051",
    "avatar": null,
    "name": "Woopi Workspace"
  },
  "trial_interval": null,
  "trial_period": null,
  "subscribers": 0,
  "price": 500,
  "price_formated": "₦500.00",
  "interval": "monthly",
  "created_at": "2021-07-15T15:25:40.000000Z"
}
```

## List Plans

List plans available on your business account.

#### Headers

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
<td>N-Authorization</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accept</td>
<td>String</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-X GET
```

  </code-block>
  
</code-group>

#### Result

```json
[
  {
    "name": "Plan test",
    "plan_id": "npln_LPAWwSrCo",
    "business": {
      "country": {
        "name": "Algeria",
        "iso_code": "DZ"
      },
      "email": "innaya@notchpay.co",
      "phone": "+237662611051",
      "avatar": null,
      "name": "Woopi Workspace"
    },
    "trial_interval": null,
    "trial_period": null,
    "subscribers": 10,
    "price": 1.216643045177,
    "price_formated": "$1.22",
    "interval": "monthly",
    "created_at": "2021-07-13T03:34:41.000000Z"
  },
  {
    "name": "Plan test",
    "plan_id": "npln_fcSxI0s30",
    "business": {
      "country": {
        "name": "Algeria",
        "iso_code": "DZ"
      },
      "email": "innaya@notchpay.co",
      "phone": "+237662611051",
      "avatar": null,
      "name": "Woopi Workspace"
    },
    "trial_interval": null,
    "trial_period": null,
    "subscribers": 0,
    "price": 1.216643045177,
    "price_formated": "$1.22",
    "interval": "monthly",
    "created_at": "2021-07-13T11:04:24.000000Z"
  },
  ...{
    "name": "Monthly Subscription",
    "plan_id": "npln_D4zGvEKpJ",
    "business": {
      "country": {
        "name": "Algeria",
        "iso_code": "DZ"
      },
      "email": "innaya@notchpay.co",
      "phone": "+237662611051",
      "avatar": null,
      "name": "Woopi Workspace"
    },
    "trial_interval": null,
    "trial_period": null,
    "subscribers": 0,
    "price": 1.216643045177,
    "price_formated": "$1.22",
    "interval": "monthly",
    "created_at": "2021-07-15T15:25:40.000000Z"
  }
]
```

## Fetch Plan

Fetch plan on your business account.

#### Headers

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
<td>N-Authorization</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accept</td>
<td>String</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Params

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
<td>plan_id</td>
<td>String</td>
<td>Yes</td>
<td>ID of your plan</td>
</tr>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans/[plan_id]
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-X GET
```

  </code-block>
  
</code-group>

#### Result

```json
{
  "name": "Monthly Subscription",
  "plan_id": "npln_D4zGvEKpJ",
  "business": {
    "country": {
      "name": "Algeria",
      "iso_code": "DZ"
    },
    "email": "innaya@notchpay.co",
    "phone": "+237662611051",
    "avatar": null,
    "name": "Woopi Workspace"
  },
  "trial_interval": null,
  "trial_period": null,
  "subscribers": 0,
  "price": 1.216643045177,
  "price_formated": "$1.22",
  "interval": "monthly",
  "created_at": "2021-07-15T15:25:40.000000Z"
}
```

## Update Plan

Updating a plan with our API

#### Headers

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
<td>N-Authorization</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accept</td>
<td>String</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Params

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
<td>plan_id</td>
<td>String</td>
<td>Yes</td>
<td>ID of your plan</td>
</tr>
</tbody>
</table>

#### Body

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
<td>name</td>
<td>String</td>
<td>No</td>
<td>Name of your Plan</td>
</tr>
<tr>
<td>interval</td>
<td>String</td>
<td>Yes</td>
<td>Interval of subscription. Available values: <br>
    `daily`, `weekly`, `monthly`, `quarterly`, `annually`
</td>
<tr>
<td>price</td>
<td>Float</td>
<td>No</td>
<td>Price shold be a valid amount for selected currency</td>
</tr>
<tr>
<td>currency</td>
<td>String</td>
<td>Yes if price</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies](https://docs.notchpay.co/ressources#currencies) </td>
</tr>
<tr>
<td>trial_interval</td>
<td>Integer</td>
<td>Yes</td>
<td>Interval of trial. Available values: <br>
    `daily`, `weekly`, `monthly`, `quarterly`, `annually`
</td>
</tr>
<tr>
<td>trial_period</td>
<td>Integer</td>
<td>Yes</td>
<td>Period of tial.
</td>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans/[plan_id]
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-d '{
    "name": "Monthly subscription Updated",
    "interval": "monthly",
    "price": 500,
    "currency":"NGN"
    }'
-X POST
```

  </code-block>
  
</code-group>

#### Result format

```json
{
  "name": "Monthly Subscription Updated",
  "plan_id": "npln_D4zGvEKpJ",
  "business": {
    "country": {
      "name": "Algeria",
      "iso_code": "DZ"
    },
    "email": "innaya@notchpay.co",
    "phone": "+237662611051",
    "avatar": null,
    "name": "Woopi Workspace"
  },
  "trial_interval": null,
  "trial_period": null,
  "subscribers": 0,
  "price": 500.0000000000199,
  "price_formated": "₦500.00",
  "interval": "monthly",
  "created_at": "2021-07-15T15:25:40.000000Z"
}
```

## Destroy Plan

Deleting plan on your business account.

#### Headers

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
<td>N-Authorization</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accept</td>
<td>String</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Params

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
<td>plan_id</td>
<td>String</td>
<td>Yes</td>
<td>ID of your plan</td>
</tr>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans/[plan_id]
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-X DELETE
```

  </code-block>
  
</code-group>

#### Result

```json
{
  "status": 201,
  "message": "Resource deleted"
}
```
