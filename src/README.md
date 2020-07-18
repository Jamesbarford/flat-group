# Flat Group

The purpose of this small module is to make an array of json grouped and thus easier to query as a group like structure. Something which is useful for libraries like `D3.js`.

**example 1**

For demonstrative purposes this illustrates nothing particularly exciting with just one key 

```js
const arr = [
    { id: 1, group_1: true, group_2: "red" },
    { id: 2, group_1: true, group_2: "yellow" },
    { id: 3, group_1: false, group_2: "yellow" },
    { id: 4, group_1: true, group_2: "green" },
    { id: 5, group_1: false, group_2: "green" },
    { id: 6, group_1: true, group_2: "red" },
]

const groups = flatGroup(arr, ["group_1"]);
```

returns: 

```json
{
    "group_1": {
        "keys": [
            true,
            false
        ],
        "true": [
            {
                "id": 1,
                "group_1": true,
                "group_2": "red"
            },
            {
                "id": 2,
                "group_1": true,
                "group_2": "yellow"
            },
            {
                "id": 4,
                "group_1": true,
                "group_2": "green"
            },
            {
                "id": 6,
                "group_1": true,
                "group_2": "red"
            }
        ],
        "false": [
            {
                "id": 3,
                "group_1": false,
                "group_2": "yellow"
            },
            {
                "id": 5,
                "group_1": false,
                "group_2": "green"
            }
        ]
    }
}
```

**example 2** 

The second argument keys can support `n` number of keys meaning you can cluster your data into n number of groups:

using the same array from above:

```js
const groups = flatGroup(arr, ["group_1", "group_2"]);

// returns

{
    "group_1": {
        "keys": [
            true,
            false
        ],
        "true": [
            {
                "id": 1,
                "group_1": true,
                "group_2": "red"
            },
            {
                "id": 2,
                "group_1": true,
                "group_2": "yellow"
            },
            {
                "id": 4,
                "group_1": true,
                "group_2": "green"
            },
            {
                "id": 6,
                "group_1": true,
                "group_2": "red"
            }
        ],
        "false": [
            {
                "id": 3,
                "group_1": false,
                "group_2": "yellow"
            },
            {
                "id": 5,
                "group_1": false,
                "group_2": "green"
            }
        ]
    },
    "group_2": {
        "keys": [
            "red",
            "yellow",
            "green"
        ],
        "red": [
            {
                "id": 1,
                "group_1": true,
                "group_2": "red"
            },
            {
                "id": 6,
                "group_1": true,
                "group_2": "red"
            }
        ],
        "yellow": [
            {
                "id": 2,
                "group_1": true,
                "group_2": "yellow"
            },
            {
                "id": 3,
                "group_1": false,
                "group_2": "yellow"
            }
        ],
        "green": [
            {
                "id": 4,
                "group_1": true,
                "group_2": "green"
            },
            {
                "id": 5,
                "group_1": false,
                "group_2": "green"
            }
        ]
    }
}
```
