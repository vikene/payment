/**
 * @flow
 * @relayHash 9788c2b88826f273e5165b0a71c25e5f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TransactionItem_item$ref = any;
export type TransactionPageQueryVariables = {|
  username?: ?string
|};
export type TransactionPageQueryResponse = {|
  +getTransaction: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TransactionItem_item$ref
  |}>
|};
export type TransactionPageQuery = {|
  variables: TransactionPageQueryVariables,
  response: TransactionPageQueryResponse,
|};
*/


/*
query TransactionPageQuery(
  $username: String
) {
  getTransaction(username: $username) {
    ...TransactionItem_item
    id
  }
}

fragment TransactionItem_item on Transaction {
  t_username
  f_username
  amount
  date
  reason
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
    "name": "TransactionPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getTransaction",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TransactionItem_item",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TransactionPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getTransaction",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "t_username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "f_username",
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
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reason",
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
    "name": "TransactionPageQuery",
    "id": null,
    "text": "query TransactionPageQuery(\n  $username: String\n) {\n  getTransaction(username: $username) {\n    ...TransactionItem_item\n    id\n  }\n}\n\nfragment TransactionItem_item on Transaction {\n  t_username\n  f_username\n  amount\n  date\n  reason\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3e6e382917b3c2b9afd3bd1365aa2e9';
module.exports = node;
