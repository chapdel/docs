---
title: Subscriptions
description: "Subscriptions allow customers to pay for recurring interval."
position: 2
category: Guide
endpoints:
  - Create Plan
  - Initialize subscription
  - Check
---

Subscriptions allow customers to pay for recurring interval. Init it and we will handle the renewals when they are due.

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

To get access of those endpoint, you need [Business API Key](https://business.notchpay.xyz/settings/apis-webhooks)

</alert>

## Create Plan

The feature help you to decide the amount and interval in which the subscription will be paid. To make subscription payments you need a plan.
You can graphically create plan vie the Business Dashboard.

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/plans
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-d '{
    "name": "Monthly subscription",
    "interval": "monthly",
    "amount": 500,
    "currency":"NGN"
    }'
-X POST
```

  </code-block>
  
</code-group>

Result format

```json
{
  "name": "Monthly subscription",
  "plan_id": "npln_3zRZ5enuF",
  "business": {
    "country": {
      "name": "Algeria",
      "iso_code": "DZ"
    },
    "email": "support@ngames.notch.africa",
    "phone": "+237661611051",
    "avatar": null,
    "name": "Woopi Workspace"
  },
  "trial_interval": null,
  "subscribers": 0,
  "price": 500,
  "description": null,
  "interval": "monthly",
  "created_at": "2021-07-13T12:15:48.000000Z"
}
```

## Initialize Subscription

Initialize recurring payment

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
<td>ID of plan to use for subscription</td>
</tr>
<tr>
<td>quantity</td>
<td>Integer</td>
<td>No</td>
<td>Period of subscription. Default is `1`</td>
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
<td>reference</td>
<td>String</td>
<td>No</td>
<td>Subscription reference. If you do not pass this parameter, Notch Pay will generate a unique reference for you.</td>
</tr>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/subscriptions/initialize
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-d '{
    "email": "hello@chapdel.xyz",
    "name": "Chapdel KAMGA",
    "plan_id":"npln_LPAWwSrCo"
}'
-X POST
```

  </code-block>
</code-group>

#### Result format

```json
{
  "subscription": {
    "quantity": 1,
    "transaction": null,
    "status": "pending",
    "plan": {
      "name": "Plan test",
      "plan_id": "npln_LPAWwSrCo",
      "business": {
        "country": {
          "name": "Algeria",
          "iso_code": "DZ"
        },
        "email": "innaya@notchpay.xyz",
        "phone": "+237662611051",
        "name": "Innaya Belvidel",
        "avatar": null,
        "name": "Woopi Workspace"
      },
      "trial_interval": null,
      "subscribers": 10,
      "price": 1.216643045177,
      "description": null,
      "interval": "monthly",
      "created_at": "2021-07-13T03:34:41.000000Z"
    },
    "customer": {
      "name": null,
      "email": "me@chapdel.xyz",
      "phone": null,
      "cid": "ncus_yluQVtDOWuhG"
    },
    "updated_at": "2021-07-13T13:54:45.000000Z",
    "start_at": null,
    "expires_at": null
  },
  "authorization_url": "http://pay.notchpay.xyz/subscribe?token=nsub_EURSya75KjyF"
}
```

## Check

Notch Pay allow you to check status of subscription.

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl http://api.notchpay.xyz/subscriptions/SUBSCRIPTION_TOKEN/check
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-X GET
```

  </code-block>
</code-group>

#### Result format

```json
{
  "quantity": 1,
  "token": "nsub_KCKHLCoTvvne",
  "amount": 1.216643045177,
  "converted_amount": "$1.22",
  "transaction": null,
  "status": "active",
  "plan": {
    "name": "Monthly subscription",
    "plan_id": "npln_LPAWwSrCo",
    "business": {
      "country": {
        "name": "Algeria",
        "iso_code": "DZ"
      },
      "email": "innaya@notchpay.test",
      "phone": "+237655728267",

      "name": "Woopi Workspace"
    },
    "trial_interval": null,
    "subscribers": 10,
    "price": 1.216643045177,
    "description": null,
    "interval": "monthly",
    "created_at": "2021-07-13T03:34:41.000000Z"
  },
  "customer": {
    "name": null,
    "email": "me@chapdel.xyz",
    "phone": null,
    "cid": "ncus_yluQVtDOWuhG"
  },
  "updated_at": "2021-07-13T10:38:01.000000Z",
  "start_at": "2021-07-13 10:38:01",
  "expires_at": "2021-08-13T10:38:01.000000Z"
}
```
