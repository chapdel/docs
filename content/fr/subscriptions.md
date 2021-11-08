---
title: Subscriptions
description: "Subscriptions allow customers to pay for recurring interval."
position: 4
category: Features
endpoints:
  - Create Plan
  - Initialize subscription
  - Check
---

Les abonnements permettent aux clients de payer pour des intervalles récurrents. Mettez-le en place et nous nous occuperons des renouvellements lorsqu'ils seront dus.

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

Pour obtenir l'accès à ces points d'extrémité, il faut une [Business API Key](https://business.notchpay.co/settings/apis-webhooks)

</alert>

## Créer un plan

Cette fonction vous permet de décider du montant et de l'intervalle auxquels l'abonnement sera payé. Pour effectuer des paiements d'abonnement, vous avez besoin d'un plan.
Vous pouvez créer un plan graphique à l'aide du tableau de bord de l'entreprise.. Visitez [Plan](https://docs.notchpay.co/plans) pour plus d'informations à ce sujet.

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/plans
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

## Format du résultat.

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

## Initialiser l'abonnement

Initialiser le paiement récurrent

<table>
<thead>
<tr>
<th>Parametre</th>
<th>Type</th>
<th>Requis</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plan_id</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>ID du plan à utiliser pour l'abonnement</td>
</tr>
<tr>
<td>quantity</td>
<td>Entier</td>
<td>Non</td>
<td>Période de l'abonnement. La valeur par défaut est `1`.</td>
</tr>
<tr>
<td>email</td>
<td>Chaîne de caractères</td>
<td>Oui si le téléphone est nul</td>
<td>Adresse électronique du client</td>
</tr>
<tr>
<td>phone</td>
<td>Chaîne de caractères</td>
<td>Oui si l'email est nul</td>
<td>Numéro de téléphone du client</td>
</tr>
<tr>
<td>reference</td>
<td>Chaîne de caractères</td>
<td>Non</td>
<td>Référence de l'abonnement. Si vous ne passez pas ce paramètre, Notch Pay va générer une référence unique pour vous.</td>
</tr>
</tbody>
</table>

#### Example

<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/subscriptions/initialize
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-d '{
    "email": "hello@chapdel.co",
    "name": "Chapdel KAMGA",
    "plan_id":"npln_LPAWwSrCo"
}'
-X POST
```

  </code-block>
</code-group>

#### Format du résultat

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
        "email": "innaya@notchpay.co",
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
      "email": "me@chapdel.co",
      "phone": null,
      "cid": "ncus_yluQVtDOWuhG"
    },
    "updated_at": "2021-07-13T13:54:45.000000Z",
    "start_at": null,
    "expires_at": null
  },
  "authorization_url": "https://pay.notchpay.co/subscribe?token=nsub_EURSya75KjyF"
}
```

## Vérifiez

Notch Pay vous permet de vérifier l'état de votre abonnement.

#### Exemple
<code-group>
  <code-block label="cURL" active>

```cURL
curl https://api.notchpay.co/subscriptions/SUBSCRIPTION_TOKEN/check
-H "N-Authorization: BUSINESS_KEY"
-H "Accept: application/json"
-X GET
```

  </code-block>
</code-group>

#### Format du résultat

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
    "email": "me@chapdel.co",
    "phone": null,
    "cid": "ncus_yluQVtDOWuhG"
  },
  "updated_at": "2021-07-13T10:38:01.000000Z",
  "start_at": "2021-07-13 10:38:01",
  "expires_at": "2021-08-13T10:38:01.000000Z"
}
```
