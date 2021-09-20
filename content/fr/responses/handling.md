---
title: Traitement des réponses
description: "Utilisation de Notch Pay pour le paiement."
position: 7
category: Responses
---

<p> Après avoir soumis un appel d'API, vous recevez une réponse en retour pour vous informer que votre demande a été reçue et traitée. En fonction du code d'état HTTP de la réponse, vous devez élaborer une logique pour gérer les erreurs que la demande ou le système peut renvoyer..</p>

## Success responses

<table>
    <thead>
        <tr class="header">
            <th>Code</th>
            <th>Status</th>
            <th>Message</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/200" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">200</a>
            </td>
            <td>OK</td>
            <td>Demande traitée normalement</td>
            <td>
                <p>
                    Le message de demande a été traité avec succès et a produit une réponse.
                    <br />
                    Le message de réponse varie en fonction de la méthode de demande et des données demandées.
                </p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/201" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">201</a>
            </td>
            <td> Créer</td>
            <td>La demande a créé une ressource</td>
            <td>
                <p>
                    Le message de demande a réussi et a conduit à la création d'une ressource.
                </p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/202" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">202</a>
            </td>
            <td>Accepter</td>
            <td>La demande a été acceptée</td>
            <td>
                La demande a été acceptée pour traitement, mais le traitement n'est pas terminé ;
                <br>
               En cas de transaction, indiquez que nous attendons actuellement la confirmation de l'utilisateur ou du prestataire bancaire. 
            </td>
        </tr>
    </tbody>
</table>

## Errors responses

<table>
    <thead>
        <tr class="header">
            <th>Code</th>
            <th>Status</th>
            <th>Message</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/401" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">401</a>
            </td>
            <td>Non autorisé</td>
            <td>Authentification requise</td>
            <td>
                <p>Vous devez saisir une "business_key" valide pour accéder à la ressource..</p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/403" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">403</a>
            </td>
            <td>Interdit</td>
            <td>Autorisation insuffisante pour traiter la demande</td>
            <td>
                Vous ne disposez pas des droits d'utilisateur appropriés pour accéder à la demande.
                <br />
               Ne répétez pas la demande.
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/404" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">404</a>
            </td>
            <td> Non trouvé</td>
            <td>Ressource non trouvée</td>
            <td>
               Il n'a pas été possible de récupérer la ressource que vous avez demandée à l'emplacement spécifié.
                <br />
                En général, cela se produit lorsque l'URL ou la référence que vous transmettez avec la demande est incorrecte.
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/422" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">422</a>
            </td>
            <td>
                <a href="https://tools.ietf.org/html/rfc4918#section-11.2" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">Unprocessable Entity</a>
            </td>
            <td>Erreur de validation de la demande</td>
            <td>La demande est formellement valide, mais sémantiquement incorrecte : le serveur récepteur peut la lire, mais il ne peut pas la comprendre.</td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/500" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">500</a>
            </td>
            <td>Erreur de serveur interne</td>
            <td>Le serveur n'a pas pu traiter la demande</td>
            <td>
               Le serveur récepteur a rencontré une condition inattendue qui l'empêche de répondre à la demande.
                <br />
                Nos serveurs peuvent également renvoyer un code d'état 500 lorsque la demande est incorrecte, par exemple en raison d'un champ obligatoire manquant ou non rempli.
            </td> 
        </tr> 
    </tbody>
</table>
