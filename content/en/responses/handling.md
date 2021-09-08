---
title: Response handling
description: "Notch Pay usage for Checkout."
position: 7
category: Responses
---

<p>After submitting an API call, you receive a response back to inform you that your request was received and processed. Depending on the HTTP status code of the response, you should build some logic to handle any errors that a request or the system may return.</p>

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
            <td>Request processed normally</td>
            <td>
                <p>
                    The request message has been successfully processed, and it has produced a response.
                    <br />
                    The response message varies, depending on the request method and the requested data.
                </p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/201" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">201</a>
            </td>
            <td>Created</td>
            <td>Request has created resource</td>
            <td>
                <p>
                    The request message  has succeeded and has led to the creation of a resource.
                </p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/202" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">202</a>
            </td>
            <td>Accepted</td>
            <td>Request has been accepted</td>
            <td>
                The request has been accepted for processing, but the processing has not been completed;
                <br>
                In case on transaction, indicate that we are currently waiting confirmation of user or bank provider. 
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
            <td>Unauthorized</td>
            <td>Authentication required</td>
            <td>
                <p>You need to input valid ``business_key`` to access the resource.</p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/403" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">403</a>
            </td>
            <td>Forbidden</td>
            <td>Insufficient permission to process request</td>
            <td>
                You do not have the appropriate user rights to access the request.
                <br />
                Do not repeat the request.
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/404" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">404</a>
            </td>
            <td>Not Found</td>
            <td>Resource Not Found</td>
            <td>
                It was not possible to retrieve the resource you requested at the specified location.
                <br />
                Usually, this happens when the URL or Reference you pass with the request is incorrect.
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/422" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">422</a>
            </td>
            <td>
                <a href="https://tools.ietf.org/html/rfc4918#section-11.2" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">Unprocessable Entity</a>
            </td>
            <td>Request validation error</td>
            <td>The request is formally valid, but semantically incorrect: the receiving server can read it, but it cannot understand it.</td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a href="https://httpstatuses.com/500" target="_blank" rel="nofollow noopener noreferrer" class="external-link no-image">500</a>
            </td>
            <td>Internal Server Error</td>
            <td>Server could not process request</td>
            <td>
                The receiving server encountered an unexpected condition that prevents it from fulfilling the request.
                <br />
                Our servers may return a 500 status code also when the request is incorrect, for example because of a missing or not filled in mandatory field.
            </td> 
        </tr> 
    </tbody>
</table>
