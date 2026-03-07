main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "10,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "10,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT4_2_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT4_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT4_2_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT4_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT4_2_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT4_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT4_2_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT4_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:4F_SPECIAL",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:4F_SPECIAL",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:4F_SPECIAL",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:4F_SPECIAL",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "2,10": [
            {
                "type": "setBlock",
                "number": "skeletonCaptain",
                "loc": [
                    [
                        1,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonCaptain",
                "loc": [
                    [
                        3,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonCaptain",
                "loc": [
                    [
                        1,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonCaptain",
                "loc": [
                    [
                        3,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        2,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        10,
                        6
                    ]
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "2,4": {
            "0": {
                "condition": "flag:door_MT4_2_4==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT4_2_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,4": {
            "0": {
                "condition": "flag:door_MT4_6_4==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT4_6_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,8": {
            "0": {
                "condition": "flag:door_MT4_6_8==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT4_6_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "3,11": {
            "1": null
        },
        "2,10": {
            "0": {
                "condition": "flag:4F_SPECIAL===4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                1,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                2,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "bluePotion",
                        "loc": [
                            [
                                2,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "bluePotion",
                        "loc": [
                            [
                                3,
                                10
                            ]
                        ]
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 23, 32, 21,  1, 28, 28, 21, 21,  1, 88,  0,  1],
    [  1, 27, 32, 28,  1, 28, 28, 22, 21,  1,  0,  0,  1],
    [  1, 27,221, 28,  1,  0,  0,  0, 29,  1,  0,  0,  1],
    [  1,  1, 85,  1,  1,  1, 85,  1,  1,  1,209,  0,  1],
    [  1, 32, 32, 27,  1,212,212,  1,  1,  1,  1,  0,  1],
    [  1, 32, 32, 27, 82,  0,  0, 85, 82, 82,  0,  0,  1],
    [  1, 32, 28, 28,  1,212,212,  1,  1,  1,  1,  0,  1],
    [  1,  1,  0,  1,  1,  1, 85,  1,  1,  1,209,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1,  0,1339,  0,  1, 31, 31, 31, 27,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1, 32, 32, 32, 27,  1, 87,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}