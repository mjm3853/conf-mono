/**
 * @flow
 * @relayHash 27b21fd1c9e4a298ff3ed6fb245de6a2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateConferenceViewerQueryResponse = {|
  +viewer: {|
    +id: string;
  |};
|};
*/


/*
query CreateConferenceViewerQuery {
  viewer {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateConferenceViewerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateConferenceViewerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CreateConferenceViewerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CreateConferenceViewerQuery {\n  viewer {\n    id\n  }\n}\n"
};

module.exports = batch;
