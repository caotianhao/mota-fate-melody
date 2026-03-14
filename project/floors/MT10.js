main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "主塔 10 层",
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
            "type": "moveHero",
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                6,
                1
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            "\t[骷髅将军,skeletonKnight]你终于来到我面前了，迟到的第28具挑战者。",
            "\t[勇者,hero]28？......就是说其他勇士已经被......？！",
            "\t[骷髅将军,skeletonKnight]没错，就算被冠以勇者的名号，你们人类也终究只是人类而已。",
            "\t[骷髅将军,skeletonKnight]看到这群被关在牢门后的骷髅了吗？",
            "\t[骷髅将军,skeletonKnight]你同伴们的尸体可就混迹在它们之中哦？",
            "\t[勇者,hero]......！",
            "\t[骷髅将军,skeletonKnight]褪去虚张声势的铠甲跟弱小不堪的皮囊，你们这群自命勇士的家伙在我眼里与我们骷髅并无区别。",
            "\t[骷髅将军,skeletonKnight]啊，当然区别还是存在的，那就是你们的骨头里，寄宿着与生俱来的恐惧与怯懦。",
            "\t[骷髅将军,skeletonKnight]人类就是这样可悲而渺小的存在。",
            "\t[勇者,hero]闭嘴！",
            "\t[勇者,hero]你这种连生命都没有可怜虫，有什么资格对人类说三道四！",
            "\t[骷髅将军,skeletonKnight]呵呵呵......你的声音就算再洪亮，也无法掩盖内心深处的恐惧。",
            "\t[骷髅将军,skeletonKnight]你别看我现在这副样子，我生前可是你们公国的首席大将军。",
            "\t[骷髅将军,skeletonKnight]30年前攻打魔塔的那场败仗夺取了我所积累的一切。",
            "\t[骷髅将军,skeletonKnight]我拼死战斗到最后的尸骨被遗弃在荒野里无人清理，被走兽飞禽啃食得只剩一具骷髅。",
            "\t[骷髅将军,skeletonKnight]从那时起我就看透了人类的本质，什么荣华什么富贵，我生前苦苦追寻的东西，现在看来就如同笑话一般。",
            "\t[骷髅将军,skeletonKnight]于是我褪去了自己的血肉与欲望，成为了一具憎恶着世间一切生灵的骷髅。",
            "\t[骷髅将军,skeletonKnight]当骷髅可比当人类轻松多了，不需要对他们阿谀奉承唯唯是诺，牺牲他人或为她牺牲，最后在权力游戏中粉身碎骨。",
            "\t[骷髅将军,skeletonKnight]而骷髅追求的东西只有一个，那就是力量！无止境的力量！",
            "\t[骷髅将军,skeletonKnight]舍弃了人类弱小的身体，我屠杀无数生灵，最终突破了人类力量的极限。现在的我，以一己之力单挑你们一支军队也不在话下！",
            "\t[骷髅将军,skeletonKnight]哈哈哈哈哈！你的双腿已经怕得发抖了！果然人类终究只是人类啊。",
            "\t[骷髅将军,skeletonKnight]不过我看你骨骼蛮硬朗的，天生就是当骷髅的料。",
            "\t[骷髅将军,skeletonKnight]怎样？要不要考虑加入我的势力？如果你现在就答应的话，我可以直接把你提拔成近卫军。",
            "\t[勇者,hero]你给我闭嘴！",
            "\t[勇者,hero]我嘴比较笨，不知道该怎么反驳你那一套一套的歪理。",
            "\t[勇者,hero]这种时候，只需要用剑跟你交流就对了吧。",
            "\t[骷髅将军,skeletonKnight]哦哦...虽然恐惧得发抖，但握剑的姿势却是坚定不移呢...你的气势跟刚才那群不堪一击的喽啰们完全不一样。",
            "\t[骷髅将军,skeletonKnight]但在此之前，先去会会我麾下的骷髅士兵们吧！",
            "\t[骷髅将军,skeletonKnight]如果你能在骷髅的海洋里活下来，我就承认你是个值得一战的对手！",
            {
                "type": "openDoor",
                "loc": [
                    3,
                    6
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[勇者,hero]这似曾相识的行走图，莫非你是......？",
                "\t[败亡勇者,N1582]没错，我是被骷髅将军残杀并炼化成骷髅人的勇者，感谢你解放了我的灵魂。",
                "\t[勇者,hero]那个混账东西......居然干出这种让人反胃的事情。",
                "\t[败亡勇者,N1582]不要过于在意，败者的下场就是这样，我已经坦然接受了。",
                "\t[败亡勇者,N1582]所以趁我的亡魂还没有完全消散，赶快吸收我的力量吧！",
                "\t[勇者,hero]！！......可是这样的话，你就会......",
                "\t[败亡勇者,N1582]没关系的，我现在这副样子什么都无法做到，但你不一样——你是我们最后的希望！",
                "\t[败亡勇者,N1582]就算是为了你自己也好，一定要打败骷髅将军啊！",
                {
                    "type": "animate",
                    "name": "zone"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                "吸收了败亡勇者的力量，血量和能力得到了补充。",
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        6
                    ]
                },
                "\t[勇者,hero]......"
            ]
        },
        "10,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[败亡勇者,N1582]感谢你解放了我的灵魂！",
                "\t[败亡勇者,N1582]无需多言，请马上接受我最后的力量吧！",
                {
                    "type": "animate",
                    "name": "zone"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        3,
                        4
                    ]
                },
                "\t[勇者,hero]......"
            ]
        },
        "3,3": [
            {
                "type": "battle",
                "loc": [
                    1,
                    1
                ]
            },
            {
                "type": "battle",
                "loc": [
                    3,
                    1
                ]
            },
            {
                "type": "battle",
                "loc": [
                    1,
                    3
                ]
            },
            {
                "type": "battle",
                "loc": [
                    2,
                    2
                ]
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            }
        ],
        "2,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[败亡勇者,N1582]感谢你解放了我的灵魂！",
                "\t[败亡勇者,N1582]无需多言，请马上接受我最后的力量吧！",
                {
                    "type": "animate",
                    "name": "zone"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        4
                    ]
                },
                "\t[勇者,hero]......已经没有放弃的理由了。"
            ]
        },
        "9,3": [
            {
                "type": "battle",
                "loc": [
                    9,
                    1
                ]
            },
            {
                "type": "battle",
                "loc": [
                    11,
                    1
                ]
            },
            {
                "type": "battle",
                "loc": [
                    10,
                    2
                ]
            },
            {
                "type": "battle",
                "loc": [
                    11,
                    3
                ]
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            }
        ],
        "10,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[败亡勇者,N1582]感谢你解放了我的灵魂！",
                "\t[败亡勇者,N1582]无需多言，请马上接受我最后的力量吧！",
                {
                    "type": "animate",
                    "name": "zone"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        6
                    ]
                },
                "\t[败亡勇者,N1582]让那家伙见识一下我们人类的骨气吧！",
                {
                    "type": "hide",
                    "remove": true
                },
                "\t[勇者,hero]嗯，我会奋战到最后一刻......连你们的份一起。"
            ]
        },
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[骷髅将军,skeletonKnight]没想到你竟然真的能拼命到这种程度...",
                "\t[勇者,hero]我也没有想到，毕竟我就是个没什么志气的人这种事情，我自己是再清楚不过的了。",
                "\t[勇者,hero]我是踩在无数亡魂肩上才得以与你正面对决的......各种意义上。",
                "\t[骷髅将军,skeletonKnight]恼人至极！为什么你们就是不肯放弃呢？",
                "\t[骷髅将军,skeletonKnight]难道乖乖引颈受戮，然后作为一具骷髅人轻轻松松地活下去有什么不好吗？！",
                "\t[勇者,hero]可笑，我们就是为了活下去才会站在你这种混账东西的面前啊！",
                "\t[骷髅将军,skeletonKnight]不可理喻，简直不可理喻！",
                "\t[勇者,hero]活人跟死人本来就没什么道理可讲，拔剑吧！",
                "\t[骷髅将军,skeletonKnight]呵呵......很好！你果然是个值得一战的对手。",
                {
                    "type": "battle",
                    "id": "skeletonKnight"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[骷髅将军的亡魂,N1583]......我是不是犯下了很多不可挽回的过错。",
                "\t[勇者,hero]......原来你也是受害者吗？",
                "\t[勇者,hero]告诉我，是谁把你变成魔物的？",
                "\t[骷髅将军的亡魂,N1583]可恶......头好痛，我作为骷髅将军经历了很多，同时也忘记了很多身为人类时的事情。",
                "\t[骷髅将军的亡魂,N1583]但是，唯独他的名字我是绝对不会忘记的，把我变成魔物的人是——",
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        9
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "jumpHero",
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": ":right"
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": ":right"
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": ":right"
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": ":right"
                },
                "\t[勇者,hero]是谁？！",
                "\t[勇者,hero]可恶......偏偏挑在如此关键的时候出手，这绝对不是巧合。",
                "\t[勇者,hero]等等，刚才的攻击方式，我好像曾经在哪里见过？",
                {
                    "type": "sleep",
                    "time": 800
                },
                "\t[勇者,hero]......啧，想破头也想不出个结果，只能前往下个区域寻找答案了。",
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        1
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        3,
                        11
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        11
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        9
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        3,
                        7
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        7
                    ],
                    "floorId": "MT9"
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_10_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "0,5": {
            "0": {
                "condition": "flag:10F_EVENT_2_8===8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                2,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:10F_EVENT_2_8",
                        "value": "null"
                    }
                ]
            },
            "1": {
                "condition": "flag:10F_EVENT_10_8===8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                10,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:10F_EVENT_10_8",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1,211,1582,211,  1,  1,  0,  1,  1,389,1582,389,  1],
    [  1,  0,211,  0,  1,  1,  0,  1,  1,  0,389,  0,  1],
    [  1,211,  0,  0,  1,  1,  0,  1,  1,  0,  0,389,  1],
    [  1,  1,  1, 85,  1,  1, 83,  1,  1, 85,  1,  1,  1],
    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
    [  1,  1,  1, 85,  1,  1, 85,  1,  1, 85,  1,  1,  1],
    [  1,210,210,210,  1,  0,  0,  0,  1,212,212,212,  1],
    [  1,210,1582,210,  1,  0,240,  0,  1,212,1582,212,  1],
    [  1,210,210,210,  1,  0,1583,  0,  1,212,212,212,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [ 87,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,1443,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "rain",
        6
    ]
}