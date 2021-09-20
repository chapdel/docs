---
title: Paiement
description: "Utilisation de Notch Pay pour le paiement."
position: 2
category: Fonctionnalités
endpoints:
  - Initialiser
  - Récuperer
  - Completer
  - Annuler
---

Utilisation de Notch Pay pour le paiement.

# Points d'access

<list :items="endpoints"></list>

<alert type="avertissement">

Pour obtenir l'accès à ces points d'extrémité, il faut [Business ID](https://business.notchpay.co/settings/apis-webhooks)

</alert>

## Initialiser

Initialiser la transaction de paiement sur Notch Pay.

<table>
<thead>
<tr>
<th>Parametre</th>
<th>Type</th>
<th>Nécessaire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>email</td>
<td>String</td>
<td>Oui si le téléphone est nul</td>
<td>Adresse électronique du client</td>
</tr>
<tr>
<td>phone</td>
<td>String</td>
<td>Oui si l'email est nul</td>
<td>Numéro de téléphone du client</td>
</tr>
<tr>
<tr>
<td>amount</td>
<td>Numérique</td>
<td>Oui</td>
<td>Montant que vous débitez au client.</td>
</tr>
<td>reference</td>
<td>String</td>
<td>Non</td>
<td>Référence de la transaction. Si vous ne passez pas ce paramètre, Notch Pay va générer une référence unique pour vous..</td>
</tr>
<tr>
<td>currency</td>
<td>string</td>
<td>Oui</td>
<td>La monnaie en laquelle la transaction doit être effectué</td>
</tr>
</tbody>
</table>

#### Exemple

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

#### Resultat

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

## Récuperer

Get Transaction details

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

Après avoir initialisé votre transaction, vous avez deux options pour terminer votre transaction. Continuer dans la caisse en ligne ou dans RESP API.

### Web Checkout

Terminez votre transaction en ouvrant ou en redirigeant votre client vers `authorization_url` présents dans votre réponse.

### REST API

Vous pouvez également mettre fin à la transaction avec la méthode REST API.

<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Nécessaire ?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>gateway</td>
<td>String</td>
<td>Yes</td>
<td>Passerelle de paiement pour effectuer un paiement. Les passerelles disponibles sont : `mobile (pour le traitement de l'argent mobile), carte, notchpay, paypal.`  </td>
</tr>
<tr>
<td>reference</td>
<td>String</td>
<td>Yes (passé par le chemin de la requête param)</td>
<td>Reference of transaction you want to complete  </td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>Yes</td>
<td>Informations sur le client relatives au mode de paiement choisi.</td>
</tr>
<tr>
</tbody>
</table>

#### Data parameters according to gateway

- `notchpay`
  - `number` : ID du compte client
  - `secret` : Code secret du compte client (SCD)
- `mobile`
  - `phone` : Numéro de téléphone du client
- `card`
  - `name` : Nom de la carte client
  - `number` : Numéro de la carte client
  - `cvv` :Carte client cvv

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

#### Résultat

```json
{
  "message": "Votre transaction a été effectuée",
  "status": 200
}
```

## Cancel

Annuler votre transaction

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

#### Format du résultat

```json
{
  "message": "Votre transaction a été annulée"
}
```
