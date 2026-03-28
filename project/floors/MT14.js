main.floors.MT14=
{
    "floorId": "MT14",
    "title": "主塔 14 层",
    "name": "主塔 14 层",
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
    "events": {
        "8,10": [
            "\t[普通老人,man]银剑对某些魔物有特殊的回血效果，务必好好利用。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,2": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_3>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_3",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,2": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_3>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_3",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_5>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_5",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_5>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_5",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_7>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_7",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_7>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_7",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_10>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_10>=1)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            10
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:MT14_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "6,1": [
            {
                "type": "if",
                "condition": "(flag:MT14_6_3===0)",
                "true": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            3
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT14_6_5===0)",
                "true": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            5
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT14_6_7===0)",
                "true": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT14_6_10===0)",
                "true": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            10
                        ]
                    }
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,208,215, 24,  1, 34, 37, 34,  1, 22, 32, 33,  1],
    [  1, 81,  1,  1,  1,235, 58,235,  1, 27, 28, 27,  1],
    [  1,214,214,214,  1,  1,  0,  1,  1,  1, 81,  1,  1],
    [  1,  1,  1, 81,  1,233,  0,233,  1, 33,234, 58,  1],
    [  1,255,233,208,  1,  1,  0,  1,  1,  1,  1, 11,  1],
    [  1, 81,  1,  1,  1,207,  0,207,  1, 27,233, 58,  1],
    [  1,207,235,207,  1,  1,  0,  1,  1,  1,  1, 11,  1],
    [  1,  1,  1, 81,  1,213,  0,213,  1, 28, 32, 58,  1],
    [  1, 28,233, 34,  1,  1,  0,  1,  1,  1,  1, 86,  1],
    [  1,  1,  1, 86,  1,  1,  0,  1,121,205,209,  0,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}