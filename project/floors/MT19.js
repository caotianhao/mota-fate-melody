main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "19",
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
        "5,11": [
            "\t[盗贼,thief]嘿！哥们儿！我们可真是有缘分啊！",
            "\t[勇者]啊，好久不见。这个区域的收成如何？",
            "\t[盗贼,thief]嘿嘿嘿嘿~~发达了发达了，不愧是鬼帝镇守的区域啊，好宝贝就是多！",
            "\t[勇者]这么说，你认识鬼帝咯？",
            "\t[盗贼,thief]这......鬼帝的名字，只要对魔塔文化有涉猎的人一般都会知道的吧？不用在意这些细节。",
            "\t[盗贼,thief]你一路战斗到这里，一定很吃力吧？",
            "\t[盗贼,thief]作为我们友谊的证明，我可以帮你打开一扇这层的宝物牢门！这样你的能力就能得到大幅提升了！",
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            "\t[勇者]竟然有这等好事？那可真是谢谢你了啊！",
            "\t[盗贼,thief]嘿嘿嘿。小事小事，比起这个，你赶快战胜那个虚有其表的家伙，前往下一个区域吧！",
            "\t[盗贼,thief]更高层的区域可是有着数不清的珍宝啊！",
            "\t[勇者]啊，我尽力吧......不过对手可是鬼帝这种级别的存在，这或许是我们最后一次见面也说不定哦。",
            "\t[盗贼,thief]没有的事！你一定能赢的！",
            "\t[盗贼,thief]就这样，我去挖密道了！我们第三区域再见！你也赶紧前进吧！",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,8": {
            "0": {
                "condition": "flag:door_MT19_6_8==2",
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
                        "name": "flag:door_MT19_6_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,6": {
            "0": {
                "condition": "flag:door_MT19_6_6==2",
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
                        "name": "flag:door_MT19_6_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,4": {
            "0": {
                "condition": "flag:door_MT19_6_4==2",
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
                        "name": "flag:door_MT19_6_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,2": {
            "0": {
                "condition": "flag:door_MT19_6_2==2",
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
                        "name": "flag:door_MT19_6_2",
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
    [  1,  1,  5,  5,  1,  1, 87,  1,  1,  5,  5,  1,  1],
    [  1,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1, 85,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,208,  0,208,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1, 85,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,248,  0,248,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1, 85,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,384,  0,384,  1,  5,  5,  5,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 34, 28, 27,  1,214,  0,214,  1,1276,1283, 33,  1],
    [  1, 34, 28, 27, 85,  0,  0,  0, 85,1276,1283, 33,  1],
    [  1, 34, 28, 27,  1,123,  0,  0,  1,1276,1283, 33,  1],
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}