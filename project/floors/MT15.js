main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "15",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(item:fly===1)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        4,
                        11
                    ],
                    "time": 200,
                    "async": true,
                    "steps": [
                        "left:4",
                        "up:6"
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "animate",
                    "name": "hand",
                    "loc": [
                        1,
                        11
                    ]
                },
                {
                    "type": "setValue",
                    "name": "item:fly",
                    "value": "0"
                },
                {
                    "type": "waitAsync"
                },
                "\t[勇者,hero]可恶！楼层传送器被蝙蝠幼崽抢走了！",
                "\t[勇者,hero]没有那件宝物的话简直寸步难行......",
                "\t[勇者,hero]必须得想办法找回来才行。",
                {
                    "type": "setValue",
                    "name": "flag:15_HAVE_FLY",
                    "value": "1"
                }
            ],
            "false": [
                "\t[蝙蝠幼崽,bat]这勇者真穷，身上连件值钱的宝物都没有！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            11
                        ]
                    ],
                    "remove": true,
                    "time": 1000
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,11": [
            {
                "type": "if",
                "condition": "(flag:15_HAVE_FLY===1)",
                "true": [
                    "\t[普通老人,man]你看见你的楼层传送器被抢到哪去了吗？",
                    "\t[勇者,hero]嗯......在左面那个墙里面的空间。"
                ],
                "false": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                1
                            ]
                        ],
                        "floorId": "EX1",
                        "remove": true
                    },
                    "\t[普通老人,man]厉害了，没有楼层传送器都能打到这里，看来你是个绝世高手！"
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "0,5": {
            "floorId": "EX1",
            "loc": [
                6,
                12
            ],
            "direction": "down"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 11, 11, 11,  1, 11, 11, 11,  1,  0, 87,  1],
    [  1,  0, 11,  1, 11, 11, 11,  1, 11, 82, 34, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 27, 28,  1],
    [  1, 21,  1, 34,  1,  1,  1, 27,  1,  1, 81,  1,  1],
    [ 89, 58,206,205,206,205, 85,  0,  0, 11,235,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,233, 21,  1, 34,213,  1],
    [  1, 34,205, 29,205, 22,  1, 81,  1,  1,  1, 82,  1],
    [  1,205,205,205,205,205,  1,213, 28,  1, 21, 34,  1],
    [  1,205,205,206,205,205,  1,  1, 11, 11, 27, 28,  1],
    [  1,  1,  1, 86,  1,  1,  1,  1, 81,  1,  1,208,  1],
    [  1, 88,  0,  0,205,121, 11,207,235, 33,  1,122,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}