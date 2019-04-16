/**
 * @flow
 * @relayHash 9ac61da00db39da2e0f477c0a687978c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type newTransactionMutationVariables = {|
  f_username?: ?string,
  t_username?: ?string,
  amount?: ?number,
  date?: ?string,
  reason?: ?string,
|};
export type newTransactionMutationResponse = {|
  +addTransaction: ?{|
    +f_username: ?string,
    +t_username: ?string,
    +amount: ?number,
  |}
|};
export type newTransactionMutation = {|
  variables: newTransactionMutationVariables,
  response: newTransactionMutationResponse,
|};
*/


/*
mutation newTransactionMutation(
  $f_username: String
  $t_username: String
  $amount: Float
  $date: String
  $reason: String
) {
  addTransaction(f_username: $f_username, t_username: $t_username, amount: $amount, date: $date, reason: $reason) {
    f_username
    t_username
    amount
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "f_username",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "t_username",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "amount",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "date",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "reason",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "amount",
    "variableName": "amount",
    "type": "Float"
  },
  {
    "kind": "Variable",
    "name": "date",
    "variableName": "date",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "f_username",
    "variableName": "f_username",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "reason",
    "variableName": "reason",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "t_username",
    "variableName": "t_username",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "f_username",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "t_username",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "newTransactionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addTransaction",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newTransactionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addTransaction",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "operationKind": "mutation",
    "name": "newTransactionMutation",
    "id": null,
    "text": "mutation newTransactionMutation(\n  $f_username: String\n  $t_username: String\n  $amount: Float\n  $date: String\n  $reason: String\n) {\n  addTransaction(f_username: $f_username, t_username: $t_username, amount: $amount, date: $date, reason: $reason) {\n    f_username\n    t_username\n    amount\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6b2d23915ef27e78e0b2c8327f7e2db';
module.exports = node;
