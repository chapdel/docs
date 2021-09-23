---
title: Plans
description: "L'API Plans vous permet de créer des options de paiement pour lancer un abonnement."
position: 3
category: Features
endpoints:
  - Create Plan
  - List Plans
  - Recuperer un plan
  - Update a Plan
  - Destroy Plan
---

L'API Plans vous permet de créer des options de paiement afin d'initier [Subscriptions](https://docs.notchpay.co/subscriptions)

# Endpoints

<list :items="endpoints"></list>

<alert type="warning">

Pour obtenir l'accès à ces points d'extrémité, il faut une [Business API Key](https://business.notchpay.co/settings/apis-webhooks)

</alert>

## Create Plan

Creating a plan with our API

#### Entetes

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
<td>N-Authorization</td>
<td>chaines de caractères</td>
<td>Oui</td>
<td>Votre clé business ou votre clé Sandboxy</td>
</tr>
<tr>
<td>Accept</td>
<td>chaines de caractères</td>
<td>Yes</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Corps

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
<td>name</td>
<td>chaines de caractères</td>
<td>Oui</td>
<td>Nom du plan</td>
</tr>
<tr>
<td>interval</td>
<td>chaîne de caractères</td>
<td>Oui</td>
<td>Intervalle d'abonnement. Valeurs disponibles : <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
<tr>
<td>price</td>
<td>numerique</td>
<td>Oui</td>
<td>Le prix doit être un montant valide pour la devise sélectionnée.</td>
</tr>
<tr>
<td>currency</td>
<td>chaines de caractères</td>
<td>Oui</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies] (https://docs.notchpay.co/resources#currencies) </td>
</tr>
<tr>
<td>trial_interval</td>
<td>Entier</td>
<td>Oui</td>
<td>Intervalle de l'essai. Valeurs disponibles: <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
</tr>
<tr>
<td>trial period</td>
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

## List of plans

Liste des plans disponibles sur votre compte professionnel.

#### Entetes

<table>
<thead>
<tr>
<th>Parametre</th>
<th>Types</th>
<th>Nécessaire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>N-Autorisation</td>
<td>chaines de caractères</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbo</td>
</tr>
<tr>
<td>Accept</td>
<td>chaines de caractères</td>
<td>Oui</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Exemple

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

## Recuperer un plan

Recuperer un plan de votre compte Business.

#### Entetes

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
<td>Chaîne de caractères</td>
<td>Yes</td>
<td>Your Business Key or Sandbox Key</td>
</tr>
<tr>
<td>accept</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
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
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>ID du plan</td>
</tr>
</tbody>
</table>

#### Exemple

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
  "price": 1.216643045177,
  "price_formated": "$1.22",
  "interval": "monthly",
  "created_at": "2021-07-15T15:25:40.000000Z"
}
```

## Mettre à jour un plan

Mettre à jour un plan avec Notch Pay

#### Entetes

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
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbox</td>
</tr>
<tr>
<td>Accept</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
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
<th>Oui</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plan_id</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>ID de votre plan</td>
</tr>
</tbody>
</table>

#### Body

<table>
<thead>
<tr>
<th>Parametre</th>
<th>Type</th>
<th>Obligatoire?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>Chaîne de caractères</td>
<td>Non</td>
<td>Nom de votre régime</td>
</tr>
<tr>
<td>interval</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>Intervalle d'abonnement. Valeurs disponibles: <br>
    quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel ".
</td>
<tr>
<td>price</td>
<td>numerique</td>
<td>Non</td>
<td>Le prix doit être un montant valide pour la devise sélectionnée.</td>
</tr>
<tr>
<td>currency</td>
<td>Chaîne de caractères</td>
<td>Oui if price</td>
<td>`xaf`, `usd`, `ngn`. Get all available [Currencies](https://docs.notchpay.co/ressources#currencies) </td>
</tr>
<tr>
<td>trial_interval</td>
<td>Entier</td>
<td>Yes</td>
<td>Intervalle de l'essai. Valeurs disponibles : <br>
   quotidien ", " hebdomadaire ", " mensuel ", " trimestriel ", " annuel "
</td>
</tr>
<tr>
<td>trial_period</td>
<td>Entier</td>
<td>Oui</td>
<td>Période d'essai.
</td>
</tbody>
</table>

#### Exemple

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

#### Resultat

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

## Supprimer un plan

Suppression du plan sur votre compte professionnel.

#### Entetes

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
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>Votre clé professionnelle ou votre clé Sandbox</td>
</tr>
<tr>
<td>Accept</td>
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>application/json</td>
</tr>
</tbody>
</table>

#### Parametres

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
<td>Chaîne de caractères</td>
<td>Oui</td>
<td>ID de votre plan</td>
</tr>
</tbody>
</table>

#### Exemple

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

#### Resultat

```json
{
  "status": 201,
  "message": "Resource deleted"
}
```
