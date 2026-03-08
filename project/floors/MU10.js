main.floors.MU10=
{
    "floorId": "MU10",
    "title": "地下 10 层",
    "name": "地下 10 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T1585",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                6,
                11
            ]
        },
        "\t[勇者,hero]好热......地板上覆盖满了凝固的熔岩......可恶......",
        "\t[勇者,hero]你就是鬼帝的手下，追魂的正体吧？",
        "\t[追魂,E679]鬼帝的手下？你是说那个只知道逃避的胆小鬼吗？",
        "\t[追魂,E679]哈哈哈哈哈！真是笑断肋骨了！本大爷怎么可能会是那种人的手下！",
        "\t[勇者,hero]......那你知道鬼帝现在去哪了吗？",
        "\t[追魂,E679]在听见你来第二区域的消息以后，那个胆小鬼就去第三区域避难了，真是可笑至极！",
        "\t[勇者,hero]（很好，套出鬼帝的去向了，接下来的问题就是怎么解决这个追魂......）",
        "\t[追魂,E679]哼！真不知道为什么鬼帝会怕你这种虫豸一般弱小的家伙！也罢，反正本大爷现在已经自立门户，他的事已经不归我操心了！",
        "\t[追魂,E679]鬼奴那个自以为聪明的蠢货也是，鬼帝都怂到这个份上了也仍然坚持对他效忠，甚至战死在你手下，这一切都太可笑了！",
        "\t[勇者,hero]自立门户？这么说你大肆喂养血影的目的就是......！",
        "\t[追魂,E679]嘿嘿嘿嘿嘿......没错，就是为了力量！！！！",
        "\t[追魂,E679]本大爷本来就是为了力量才追随鬼帝，可如今的他已经不值得我追随。",
        "\t[追魂,E679]我已不想再投奔其他区域的头目，正好本大爷身边就有一个现成的力量源泉！那就是血影！！",
        "\t[追魂,E679]只要它吞下更多更多的血肉与怨念，我就能从它身上分到更多更强大的力量！",
        "\t[追魂,E679]只要血影一直吃下去，吃掉所有人类......不，甚至是吃掉所有其他强大的魔物，这样一来本大爷的力量就无人能敌了！！！",
        "\t[勇者,hero]眼里只有力量，为此可以轻易舍弃忠诚跟原则，甚至不惜践踏生命，你们骷髅族果然都是一个德行。",
        "\t[追魂,E679]少啰嗦！本大爷的事情轮不到你插嘴！只要能获得力量就够了！其他的事情本大爷才不在乎！",
        "\t[勇者,hero]你口口声声说要自立门户，到头来为了力量还不是成为了血影的奴仆？",
        "\t[追魂,E679]血影奴仆？......你在胡说什么！本大爷可是那畜生的主人！！",
        "\t[勇者,hero]是吗？你看看自己现在的样子。",
        "\t[勇者,hero]已经越来越像血影的幼崽了啊。",
        "\t[追魂,E679]少啰嗦少啰嗦少啰嗦！！！！",
        "\t[追魂,E679]上吧！本大爷的奴仆们！把这个满嘴胡话的家伙撕成碎片！！！",
        {
            "type": "openDoor",
            "loc": [
                5,
                8
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                7,
                8
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                1,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                2,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                3,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                4,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                1,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                2,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                3,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                4,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                9,
                6
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
            "type": "openDoor",
            "loc": [
                11,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                8,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                9,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                10,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                11,
                10
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "6,4": [
            "\t[追魂,E679]可恶！居然能在那么多血影的攻击下存活下来......你这家伙！",
            "\t[勇者,hero]我跟你这种为了力量而彻底舍弃尊严跟自我的人没什么好说的。",
            "\t[勇者,hero]拔剑吧。",
            "\t[追魂,E679]别太嚣张！有血影力量加护的本大爷可是无敌的！来吧！！！"
        ]
    },
    "afterBattle": {
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_MU10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            "\t[追魂,E679]啊！！本大爷居然，居然会输给你！！",
            "\t[追魂,E679]力量......让血影吃更多......更多的力量......呃......",
            "\t[勇者,hero]到死还满脑子力量，不知该说是可怜还是可恨......",
            "\t[勇者,hero]好热，赶紧离开这里吧......",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    9
                ],
                "floorId": "MU9"
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    9
                ],
                "floorId": "MU9"
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "floorId": "MU9"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        4
                    ]
                ],
                "floorId": "MT20",
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        4,
                        4
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        8
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        9
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        3,
                        11
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        4,
                        11
                    ]
                ],
                "floorId": "MT20"
            },
            {
                "type": "setBlock",
                "number": "T1585",
                "loc": [
                    [
                        5,
                        11
                    ]
                ],
                "floorId": "MT20"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_MU10_6_6==32",
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
                        "name": "flag:door_MU10_6_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,468,468,468,468,  3,679,  3,468,468,468,468,  3],
    [  3,468,468,468,468,  3,  0,  3,468,468,468,468,  3],
    [  3, 85, 85, 85, 85,  3, 85,  3, 85, 85, 85, 85,  3],
    [  3,  0,  0,  0,  0,  3,  0,  3,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0, 85,  0, 85,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  3,  0,  3,  0,  0,  0,  0,  3],
    [  3, 85, 85, 85, 85,  3,  0,  3, 85, 85, 85, 85,  3],
    [  3,468,468,468,468,  3,  0,  3,468,468,468,468,  3],
    [  3,468,468,468,468,  3, 87,  3,468,468,468,468,  3]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}