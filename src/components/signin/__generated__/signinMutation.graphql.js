/**
 * @flow
 * @relayHash 5e42558368e481fe98cf0adfeda0ea2a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signinMutationVariables = {|
  username?: ?string,
  password?: ?string,
|};
export type signinMutationResponse = {|
  +login: ?{|
    +username: ?string,
    +token: ?string,
  |}
|};
export type signinMutation = {|
  variables: signinMutationVariables,
  response: signinMutationResponse,
|};
*/


/*
mutation signinMutation(
  $username: String
  $password: String
) {
  login(username: $username, password: $password) {
    username
    token
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "signinMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "signinMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "name": "signinMutation",
    "id": null,
    "text": "mutation signinMutation(\n  $username: String\n  $password: String\n) {\n  login(username: $username, password: $password) {\n    username\n    token\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '179b082b392c503b82b4a106b50a3626';
module.exports = node;
