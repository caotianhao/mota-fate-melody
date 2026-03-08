main.floors.MU5=
{
    "floorId": "MU5",
    "title": "地下 5 层",
    "name": "地下 5 层",
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
        "6,5": [
            "\t[暗妖精,N1584]那、那个......对不起啊，我刚刚因为害怕而逃走了，现在差不多已经冷静下来了。",
            "\t[暗妖精,N1584]那个......对了！欢欢欢欢迎来到地下层！尊贵的勇者大人。",
            "\t[勇者,hero]......这句问候语你已经说过一次了。",
            "\t[暗妖精,N1584]对哦......嗯，我想说什么来着？",
            "\t[暗妖精,N1584]对了，我跟你讲解一下地下层需要注意的事情吧！",
            "\t[暗妖精,N1584]地下层里会出现会魔法冲击的怪物，这些怪物......嗯，会怎样来着？",
            "\t[勇者,hero]会在战斗开始前给予我固定伤害......",
            "\t[暗妖精,N1584]对对！就是这样......",
            "\t[暗妖精,N1584]能够免疫魔法冲击的圣盾在-7层，与之相对应的圣剑在......在什么地方来着？",
            "\t[勇者,hero]就在上一层啊......",
            "\t[暗妖精,N1584]呜呜......（悄悄地用上目线看着这边）",
            "\t[勇者,hero]怎......怎么了？",
            "\t[暗妖精,N1584]我感觉自己好没用啊......族人也老是嫌我脑子笨反应慢......呜......",
            "\t[勇者,hero]不要消沉啊暗妖精小姐！你提供的信息对我很有帮助哦！",
            "\t[暗妖精,N1584]真的吗？呼......那就好。",
            "\t[暗妖精,N1584]谢谢你，勇者大人！我会振作起来的！呀——！！",
            "\t[勇者,hero]！！......你怎么了？",
            "\t[暗妖精,N1584]呜呜......没事，只是咬到舌头了而已......哭哭",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            },
            "\t[勇者,hero]......",
            "\t[勇者,hero]她又哭着跑开了......"
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "5,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_MU5_2_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,6": {
            "0": {
                "condition": "flag:door_MU5_2_6==6",
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
                        "name": "flag:door_MU5_2_6",
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
    [  3,  3,  3,  3,  3,  3, 24,  3,  3,  3,  3,  3,  3],
    [  3,1276, 21,1283,  0, 86, 33,  3, 22,1283,1133,1276,  3],
    [  3,  3,1133,  3,  3,  3,253,  3,  3, 86,  3, 33,  3],
    [  3, 33,  0,  0, 81,  0,  0,  0,  0,  0,  3,874,  3],
    [  3,  3,  3,  3,  3,  3, 82,  3,  3,558,  0,  0,  3],
    [  3, 34,1438, 34,  3,  0,1584,  0,  3,  3, 81,  3,  3],
    [  3,  3, 85,  3,  3, 87,  0, 34,  3, 28,277, 27,  3],
    [  3,384,384,384,  3,  3,  3,  3,  3,  3,1133,  3,  3],
    [  3,384,384,384, 81,1078,  0,558,218,558,  0, 33,  3],
    [  3,  3,  3,  3,  3,  3,236,  3,  3,  3,250,  3,  3],
    [  3,  0,457,218,  3,  0,256,  0, 86, 27, 34, 27,  3],
    [  3, 88,  3,457, 82,874,  3, 33,  3, 28, 59, 28,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}