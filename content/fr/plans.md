---
title: Plans
description: "The Plans API allows you to create payment options to initiate subscription"
position: 3
category: Features
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
<th>Paramètre</th>
<th>Type</th>
<th>Obligatoire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nom</td>
<td>String</td>
<td>Oui</td>
<td>Nom de votre régime</td>
</tr>
<tr>
<td>intervalle</td>
<td>String</td>
<td>Oui</td>
<td>Intervalle d'abonnement. Valeurs disponibles : <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
<tr>
<td>prix</td>
<td>Flotteur</td>
<td>Oui</td>
<td>Le prix doit être un montant valide pour la devise sélectionnée.</td>
</tr>
<tr>
<td>devise</td>
<td>String</td>
<td>Oui</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies] (https://docs.notchpay.co/resources#currencies) </td>
</tr>
<tr>
<td>Intervalle de test</td>
<td>Entier</td>
<td>Oui</td>
<td>Intervalle de l'essai. Valeurs disponibles: <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
</tr>
<tr>
<td>période d'essai</td>
<td>Entier</td>
<td>Oui</td>
<td>Période de tial.
</td>
</tbody>
</table>

#### Exemple

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
#### Resultat

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

Liste des plans disponibles sur votre compte professionnel.

#### Headers

<table>
<thead>
<tr>
<th>Parametres</th>
<th>Types</th>
<th>Nécessaire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>N-Autorisation</td>
<td>String</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbo</td>
</tr>
<tr>
<td>Accepter</td>
<td>String</td>
<td>Oui</td>
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
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>N-Autorisation</td>
<td>String</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>Accepter</td>
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
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plan_id</td>
<td>String</td>
<td>Oui</td>
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
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>N-Autorisation</td>
<td>String</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbox</td>
</tr>
<tr>
<td>Accepter</td>
<td>String</td>
<td>Oui</td>
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
<th>Oui</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plan_id</td>
<td>String</td>
<td>Oui</td>
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
<th>Obligatoire?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nom</td>
<td>String</td>
<td>Non</td>
<td>Nom de votre régime</td>
</tr>
<tr>
<td>intervalle</td>
<td>String</td>
<td>Oui</td>
<td>Intervalle d'abonnement. Valeurs disponibles: <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
<tr>
<td>prix</td>
<td>Flotteur</td>
<td>Non</td>
<td>Le prix doit être un montant valide pour la devise sélectionnée.</td>
</tr>
<tr>
<td>devise</td>
<td>String</td>
<td>Oui if price</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies](https://docs.notchpay.co/ressources#currencies) </td>
</tr>
<tr>
<td>intervalle d'essai</td>
<td>Entier</td>
<td>Yes</td>
<td>Intervalle de l'essai. Valeurs disponibles : <br>
   quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel "
</td>
</tr>
<tr>
<td>période d'essai</td>
<td>Entier</td>
<td>Oui</td>
<td>Période de tial.
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
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>N-Autorisation</td>
<td>String</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbox</td>
</tr>
<tr>
<td>Accepter</td>
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
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plan_id</td>
<td>String</td>
<td>Oui</td>
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
  "message": "Ressource supprimée"
}
```
