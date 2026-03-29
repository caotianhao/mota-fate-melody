main.floors.MT43=
{
    "floorId": "MT43",
    "title": "主塔 43 层",
    "name": "主塔 43 层",
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
        "8,1": [
            "\t[普通老人,man]爆攻系怪物很难缠是吗？",
            "\t[普通老人,man]看到那边那个叶子形状的宝物了吗，它能解决你的困扰。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ],
        "6,3": [
            "\t[勇者,hero]\b[down,null]公主大人？！",
            "\t[勇者,hero]\b[down,null]你不是被囚禁在顶层吗？为什么会在这里？？",
            "\t[公主,princess]\b[down,null]不要再继续前进了！",
            "\t[公主,princess]\b[down,null]我以公主的身份命令你马上离开魔塔！",
            "\t[勇者,hero]\b[down,null]什么？！",
            "\t[勇者,hero]\b[down,null]离开魔塔？我们为了救你牺牲了那么多同胞，你跟我说这种话？",
            "\t[公主,princess]\b[down,null]哼，你们有理解过我的一丝一毫吗？",
            "\t[勇者,hero]\b[down,null]只有一个解释了，你根本就不是真正的公主。",
            "\t[公主,princess]\b[down,null]......不可理喻的笨蛋！你倒是好好听人说话啊！",
            {
                "type": "moveHero",
                "steps": [
                    "down:1"
                ]
            },
            "\t[勇者,hero]\b[down,null]你究竟是谁？",
            "\t[公主,princess]\b[down,null]别靠近我！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    7,
                    5
                ]
            },
            {
                "type": "setBlock",
                "number": "redKing",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 500
            },
            "\t[勇者,hero]\b[down,null]你是——魔王？！",
            "\t[魔王,redKing]\b[down,null]姑且算是吧。",
            "\t[魔王,redKing]\b[down,null]不好意思，这姑娘脑子有点不好使，给你添麻烦了。",
            "\t[公主,princess]\b[down,null]喂！你还不清楚自己的身体状况吗！你现在的体质是不能够使用传送魔法的啊！",
            "\t[魔王,redKing]\b[down,null]还不是因为你突然跑出来闹事？",
            "\t[公主,princess]\b[down,null]我那明明是担心你好吧！这个勇者马上就要登上顶层取你性命了，你难道一点都不慌张吗！",
            "\t[魔王,redKing]\b[down,null]宿命是不可阻挡的，我们唯有逆来顺受。",
            "\t[公主,princess]\b[down,null]笨蛋！你能不能不要这么迟钝啊！",
            "\t[公主,princess]\b[down,null]事到如今你还是不明白我的心意吗？？！",
            "\t[魔王,redKing]\b[down,null]你还想无理取闹到什么时候？走，跟我回去。",
            "\t[公主,princess]\b[down,null]别扯我的袖子！我自己会走！",
            "\t[魔王,redKing]\b[down,null]......",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "remove": true
            },
            "\t[勇者,hero]\b[down,null]两人同时消失了，是传送魔法吗？",
            "\t[勇者,hero]\b[down,null]那个魔王的气息，不愧是魔物的首领，果然强的可怕。",
            "\t[勇者,hero]\b[down,null]但我是不会退缩的，给我在顶层洗好脖子等着。",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        4,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E737",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            "\t[勇者,hero]\b[down,null]等等......不好！果然有埋伏！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:OPEN43",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,2": {
            "0": {
                "condition": "flag:OPEN43===6",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:OPEN43",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,1558,1268,1268,1276, 82,  0,553,121,  0,  0, 88,  4],
    [  4,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  4],
    [  4,246, 81,1268,  1,  1,  0,  1,  1, 22,1290, 21,  4],
    [  4,1276,  1,1268,  1,  0,  0,  0,  1, 33,1276, 34,  4],
    [  4,888,1276,  1,  0,  0,132,  0,  0,  1,956,  1,  4],
    [  4,  1,246,1276,  1,  0,  0,  0,  1,888,  0,1141,  4],
    [  4,  1,  1,246,  1,  1,  0,  1,1268,861,  1,1290,  4],
    [  4, 21, 22,  0,228,  1,  0, 81,  0,  1,  1,1268,  4],
    [  4,  1, 86,  1,  0,  1,246,  1,737,1276,  1, 21,  4],
    [  4, 21,737,737,861, 81,  0,228,  0,  1,  1,  1,  4],
    [  4,1276,  1,  1,  1,  1,1268,  1,737, 86,  0, 87,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "Resphoina.mp3"
}