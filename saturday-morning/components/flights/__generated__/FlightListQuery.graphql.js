/**
 * @flow
 * @relayHash 9d4aa6cb16dd82c4ffaf069bfdff1ecf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FlightListQueryVariables = {|
  search: {
    from: $ReadOnlyArray<{
      location?: ?string,
      radius?: ?{
        lat: number,
        lng: number,
        radius: number,
      },
    }>,
    to: $ReadOnlyArray<{
      location?: ?string,
      radius?: ?{
        lat: number,
        lng: number,
        radius: number,
      },
    }>,
    date: {
      exact?: ?any,
      from?: ?any,
      to?: ?any,
    },
    returnDate?: ?{
      exact?: ?any,
      from?: ?any,
      to?: ?any,
    },
    passengers?: ?{
      adults: number,
    },
  },
|};
export type FlightListQueryResponse = {|
  +allFlights: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +departure: ?{|
          +localTime: ?any,
          +airport: ?{|
            +locationId: ?string,
            +city: ?{|
              +name: ?string,
            |},
          |},
        |},
        +arrival: ?{|
          +localTime: ?any,
          +airport: ?{|
            +locationId: ?string,
            +city: ?{|
              +name: ?string,
            |},
          |},
        |},
        +duration: ?number,
        +legs: ?$ReadOnlyArray<?{|
          +id: string,
          +airline: ?{|
            +name: ?string,
            +logoUrl: ?string,
          |},
          +arrival: ?{|
            +localTime: ?any,
            +airport: ?{|
              +name: ?string,
              +city: ?{|
                +name: ?string,
              |},
            |},
          |},
          +departure: ?{|
            +localTime: ?any,
            +airport: ?{|
              +name: ?string,
              +city: ?{|
                +name: ?string,
              |},
            |},
          |},
        |}>,
        +price: ?{|
          +amount: ?number,
          +currency: ?string,
        |},
        +bookingUrl: ?string,
      |},
    |}>,
  |},
|};
*/


/*
query FlightListQuery(
  $search: FlightsSearchInput!
) {
  allFlights(search: $search, first: 5) {
    edges {
      cursor
      node {
        id
        departure {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
        arrival {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
        duration
        legs {
          id
          airline {
            name
            logoUrl
          }
          arrival {
            localTime
            airport {
              name
              city {
                name
              }
            }
          }
          departure {
            localTime
            airport {
              name
              city {
                name
              }
            }
          }
        }
        price {
          amount
          currency
        }
        bookingUrl
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "FlightsSearchInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v3
  ]
},
v5 = [
  v2,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      v4
    ]
  }
],
v6 = [
  v2,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v3,
      v4
    ]
  }
],
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allFlights",
    "storageKey": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 5,
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "search",
        "type": "FlightsSearchInput!"
      }
    ],
    "concreteType": "FlightConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "FlightEdge",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Flight",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v5
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "duration",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "legs",
                "storageKey": null,
                "args": null,
                "concreteType": "Leg",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "airline",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Airline",
                    "plural": false,
                    "selections": [
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "logoUrl",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v6
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": [
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
                    "name": "currency",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bookingUrl",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightListQuery",
  "id": null,
  "text": "query FlightListQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        id\n        departure {\n          localTime\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        arrival {\n          localTime\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        duration\n        legs {\n          id\n          airline {\n            name\n            logoUrl\n          }\n          arrival {\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n          departure {\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n        }\n        price {\n          amount\n          currency\n        }\n        bookingUrl\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v7
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightListQuery",
    "argumentDefinitions": v0,
    "selections": v7
  }
};
})();
(node/*: any*/).hash = '8b8ae8ce26b1ce729b17487ed2ed5b41';
module.exports = node;
