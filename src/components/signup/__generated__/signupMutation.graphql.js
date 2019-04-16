/**
 * @flow
 * @relayHash 85e9ce23e50da328590ee9d00efacf43
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signupMutationVariables = {|
  fname?: ?string,
  lname?: ?string,
  ssn?: ?string,
  email?: ?string,
  username?: ?string,
  password?: ?string,
|};
export type signupMutationResponse = {|
  +createUser: ?{|
    +username: ?string
  |}
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/


/*
mutation signupMutation(
  $fname: String
  $lname: String
  $ssn: String
  $email: String
  $username: String
  $password: String
) {
  createUser(fname: $fname, lname: $lname, ssn: $ssn, email: $email, username: $username, password: $password) {
    username
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "fname",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "lname",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "ssn",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String",
    "defaultValue": null
  },
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
    "name": "email",
    "variableName": "email",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "fname",
    "variableName": "fname",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "lname",
    "variableName": "lname",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "ssn",
    "variableName": "ssn",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "signupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "signupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "signupMutation",
    "id": null,
    "text": "mutation signupMutation(\n  $fname: String\n  $lname: String\n  $ssn: String\n  $email: String\n  $username: String\n  $password: String\n) {\n  createUser(fname: $fname, lname: $lname, ssn: $ssn, email: $email, username: $username, password: $password) {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c28619744ed7ba6e4ad2dfd6c702920e';
module.exports = node;
