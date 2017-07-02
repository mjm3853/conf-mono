/**
 * @flow
 * @relayHash d69534ba90b632ac5e465b748d62b6c0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateConferenceMutationVariables = {|
  input: {
    description: string;
    end: any;
    name: string;
    start: any;
    url?: ?string;
    locationId?: ?string;
    location?: ?{
      address?: ?string;
      city: string;
      country?: ?string;
      name?: ?string;
      postalCode?: ?string;
      state: string;
      url?: ?string;
      conferencesIds?: ?$ReadOnlyArray<string>;
      conferences?: ?$ReadOnlyArray<{
        description: string;
        end: any;
        name: string;
        start: any;
        url?: ?string;
        tagsIds?: ?$ReadOnlyArray<string>;
        tags?: ?$ReadOnlyArray<{
          description?: ?string;
          name: string;
          conferencesIds?: ?$ReadOnlyArray<string>;
        }>;
      }>;
    };
    tagsIds?: ?$ReadOnlyArray<string>;
    tags?: ?$ReadOnlyArray<{
      description?: ?string;
      name: string;
      conferencesIds?: ?$ReadOnlyArray<string>;
      conferences?: ?$ReadOnlyArray<{
        description: string;
        end: any;
        name: string;
        start: any;
        url?: ?string;
        locationId?: ?string;
        location?: ?{
          address?: ?string;
          city: string;
          country?: ?string;
          name?: ?string;
          postalCode?: ?string;
          state: string;
          url?: ?string;
          conferencesIds?: ?$ReadOnlyArray<string>;
        };
        tagsIds?: ?$ReadOnlyArray<string>;
        tags?: ?$ReadOnlyArray<{
          description?: ?string;
          name: string;
          conferencesIds?: ?$ReadOnlyArray<string>;
        }>;
      }>;
    }>;
    clientMutationId: string;
  };
|};

export type CreateConferenceMutationResponse = {|
  +createConference: ?{|
    +conference: ?{|
      +id: string;
      +name: string;
      +description: string;
      +url: ?string;
      +start: any;
      +end: any;
    |};
  |};
|};
*/


/*
mutation CreateConferenceMutation(
  $input: CreateConferenceInput!
) {
  createConference(input: $input) {
    conference {
      id
      name
      description
      url
      start
      end
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateConferenceInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateConferenceMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateConferenceInput!"
          }
        ],
        "concreteType": "CreateConferencePayload",
        "name": "createConference",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Conference",
            "name": "conference",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "url",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "start",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "end",
                "storageKey": null
              }
            ],
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
  "name": "CreateConferenceMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateConferenceInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateConferenceMutation",
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
            "type": "CreateConferenceInput!"
          }
        ],
        "concreteType": "CreateConferencePayload",
        "name": "createConference",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Conference",
            "name": "conference",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "url",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "start",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "end",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateConferenceMutation(\n  $input: CreateConferenceInput!\n) {\n  createConference(input: $input) {\n    conference {\n      id\n      name\n      description\n      url\n      start\n      end\n    }\n  }\n}\n"
};

module.exports = batch;
