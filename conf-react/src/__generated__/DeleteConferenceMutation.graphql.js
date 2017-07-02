/**
 * @flow
 * @relayHash fa1dfbcec3060763d885119b75294214
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteConferenceMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};

export type DeleteConferenceMutationResponse = {|
  +deleteConference: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation DeleteConferenceMutation(
  $input: DeleteConferenceInput!
) {
  deleteConference(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteConferenceInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteConferenceMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteConferenceInput!"
          }
        ],
        "concreteType": "DeleteConferencePayload",
        "name": "deleteConference",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeleteConferenceMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteConferenceInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeleteConferenceMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteConferenceInput!"
          }
        ],
        "concreteType": "DeleteConferencePayload",
        "name": "deleteConference",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation DeleteConferenceMutation(\n  $input: DeleteConferenceInput!\n) {\n  deleteConference(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
