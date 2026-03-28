main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "主塔 15 层",
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
                "remove": true,
                "time": 500
            }
        ],
        "11,11": [
            {
                "type": "if",
                "condition": "(flag:talkedWith15FShop===0)",
                "true": [
                    "\t[商人,trader]桀桀桀桀......又见面了，实力超群的勇者大人。",
                    "\t[勇者,hero]这不是那个卖宝石的老伯吗？我们可真是有缘分啊。",
                    "\t[商人,trader]多亏你击败了骷髅将军，老夫才有机会来到这个从未涉足过的区域探险。",
                    "\t[商人,trader]只是我没料到这个区域竟会如此凶险，老夫只闲逛了一会儿就被这只魔物察觉到了，之后的状况如你所见。",
                    "\t[勇者,hero]......人们常说在魔塔里闲逛的人不是勇者就是疯子，如今还要加上一个商人。",
                    "\t[商人,trader]不幸的是，我收集的宝石也被刚才那个魔物抢走了。",
                    "\t[商人,trader]抓住我的魔物似乎拥有很高的智慧，它知道宝石能提升我们人类的能力，所以即便它不能吸收其中的魔力，还是执意夺走了宝石。",
                    "\t[勇者,hero]那个魔物是区域头目鬼帝的两大手下之一的分身......",
                    "\t[勇者,hero]意思是，分身也会继承本体的判断力跟智慧？还是说......分身就是他们所操控的眼线？",
                    "\t[勇者,hero]......（那我岂不是一直在被各层潜伏在暗处的分身监视着？）",
                    "\t[勇者,hero]别管那些事情了，总之能脱险就是不幸中的万幸，老伯，接下来的区域一个比一个凶险，您还是早点收拾东西回老家吧。",
                    "\t[商人,trader]回家？还没到时候，老夫还有更重要的事情需要完成。",
                    "\t[商人,trader]虽然宝石一个都不剩了，但老夫一路上收集的钥匙却还留在身上。",
                    "\t[商人,trader]这可都是古董级别的宝贝，本来是想留着收藏的，为了报答勇者大人的救命之恩，老夫就勉为其难，便宜卖你了。",
                    "\t[勇者,hero]嗯！",
                    {
                        "type": "setValue",
                        "name": "flag:talkedWith15FShop",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:buy15Fyellow+flag:buy15Fblue!==7)",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[商人,trader]桀桀桀桀，勇者大人，钥匙要伐？价格公道，童叟无欺！",
                                "choices": [
                                    {
                                        "text": "购买黄钥匙（100金币）",
                                        "condition": "flag:buy15Fyellow<5",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(status:money>=100)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:money",
                                                        "operator": "-=",
                                                        "value": "100"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "item:yellowKey",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:buy15Fyellow",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    "\t[商人,trader]在魔塔里没有钥匙可是寸步难行的啊。"
                                                ],
                                                "false": [
                                                    "\t[商人,trader]你的金币不足！",
                                                    {
                                                        "type": "continue",
                                                        "n": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "购买蓝钥匙（200金币）",
                                        "condition": "flag:buy15Fblue<2",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(status:money>=200)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:money",
                                                        "operator": "-=",
                                                        "value": "200"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "item:blueKey",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:buy15Fblue",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    "\t[商人,trader]在魔塔里没有钥匙可是寸步难行的啊。"
                                                ],
                                                "false": [
                                                    "\t[商人,trader]你的金币不足！",
                                                    {
                                                        "type": "continue",
                                                        "n": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "不了，谢谢老伯",
                                        "action": [
                                            {
                                                "type": "exit"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "false": [
                            "\t[商人,trader]桀桀桀桀......勇者大人，你对钥匙的需求量好像出奇的大啊。",
                            "\t[商人,trader]三步一蓝门，一步一黄门，不多准备点钥匙的话，卡关是迟早的事啊。",
                            "\t[商人,trader]勇者大人真是睿智而勇敢啊。",
                            "\t[商人,trader]老夫这里有一把珍藏多年的大黄门钥匙，使用它能开启这一层所有的黄门，是千金难换的好宝贝。",
                            "\t[勇者,hero]这么厉害的宝物，应该很贵吧？",
                            "\t[商人,trader]桀桀桀桀......不过，老夫可以直接送给你，但是你要答应老夫一件事。",
                            "\t[勇者,hero]还有这等好事？！",
                            "\t[商人,trader]你要做的事情很简单，38楼的宝库里有个名叫圣锤的法宝，你只需要把那件东西拿到老夫面前就可以了。",
                            "\t[商人,trader]这大黄门钥匙就先交给你了，勇者大人。希望你能战胜这个区域的头目，开启通往第三区域的道路。",
                            "\t[勇者,hero]老伯你就不怕我食言吗？",
                            "\t[商人,trader]哈哈哈哈哈！怎么会？老夫自认为看人还是很准的，你可是老夫这几年里见过最像勇者的勇者啊。",
                            "\t[勇者,hero]嘿嘿......怎么说呢，感觉有点惭愧啊。",
                            "\t[商人,trader]那么老夫就先行一步了！我们第三区域再见！",
                            {
                                "type": "setValue",
                                "name": "item:bigKey",
                                "value": "1"
                            },
                            {
                                "type": "hide",
                                "remove": true,
                                "time": 500
                            }
                        ]
                    }
                ]
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
    [  1, 73, 11,  1, 11, 11, 11,  1, 11, 82, 34, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 27, 28,  1],
    [  1, 21,  1, 34,  1,  1,  1, 27,  1,  1, 81,  1,  1],
    [ 89, 58,206,205,206,205, 86,  0,  0, 11,235,  0,  1],
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