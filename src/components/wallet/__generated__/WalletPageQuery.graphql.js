/**
 * @flow
 * @relayHash 4370fe8a8c72130911c7e8c123893876
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Wallet_wallet$ref = any;
export type WalletPageQueryVariables = {|
  username?: ?string
|};
export type WalletPageQueryResponse = {|
  +getWallet: ?{|
    +$fragmentRefs: Wallet_wallet$ref
  |}
|};
export type WalletPageQuery = {|
  variables: WalletPageQueryVariables,
  response: WalletPageQueryResponse,
|};
*/


/*
query WalletPageQuery(
  $username: String
) {
  getWallet(username: $username) {
    ...Wallet_wallet
    id
  }
}

fragment Wallet_wallet on Wallet {
  type
  bankname
  routingnumber
  accountnumber
  zipcode
  creditcard
  cvv
  expmonth
  expyear
  amount
  username
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "WalletPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getWallet",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Wallet",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Wallet_wallet",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "WalletPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getWallet",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Wallet",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cvv",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "routingnumber",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "accountnumber",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "zipcode",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "creditcard",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bankname",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "expmonth",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "expyear",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "amount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "WalletPageQuery",
    "id": null,
    "text": "query WalletPageQuery(\n  $username: String\n) {\n  getWallet(username: $username) {\n    ...Wallet_wallet\n    id\n  }\n}\n\nfragment Wallet_wallet on Wallet {\n  type\n  bankname\n  routingnumber\n  accountnumber\n  zipcode\n  creditcard\n  cvv\n  expmonth\n  expyear\n  amount\n  username\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5e540b2e159fdb7437939636734bd13';
module.exports = node;
