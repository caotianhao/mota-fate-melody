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
            "\t[勇者,hero]啊，好久不见。这个区域的收成如何？",
            "\t[盗贼,thief]嘿嘿嘿嘿~~发达了发达了，不愧是鬼帝镇守的区域啊，好宝贝就是多！",
            "\t[勇者,hero]这么说，你认识鬼帝咯？",
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
            "\t[勇者,hero]竟然有这等好事？那可真是谢谢你了啊！",
            "\t[盗贼,thief]嘿嘿嘿。小事小事，比起这个，你赶快战胜那个虚有其表的家伙，前往下一个区域吧！",
            "\t[盗贼,thief]更高层的区域可是有着数不清的珍宝啊！",
            "\t[勇者,hero]啊，我尽力吧......不过对手可是鬼帝这种级别的存在，这或许是我们最后一次见面也说不定哦。",
            "\t[盗贼,thief]没有的事！你一定能赢的！",
            "\t[盗贼,thief]就这样，我去挖密道了！我们第三区域再见！你也赶紧前进吧！",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ],
        "6,11": {
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
                "\t[勇者,hero]妖精小姐！第一次看到你感觉这么开心！",
                "\t[小妖精,fairy]......引导迷茫的勇者本来就是咱妖精族的职责嘛",
                "\t[小妖精,fairy]通往下个区域的楼梯被无法消除的地形给隔断了。是这样吧？",
                "\t[勇者,hero]没错，我现在已经完全不知道该怎么办才好了。",
                "\t[小妖精,fairy]啧，这其实并不是什么很高等的法术，只不过在崇尚实力的魔塔里，魔物们都不屑于使用而已。",
                "\t[小妖精,fairy]问题在于，为什么鬼帝会对你耍这种小手段，他的目的到底是什么？",
                "\t[勇者,hero]这种事情我怎么知道......从踏进这个区域一开始我就是一头雾水啊。",
                "\t[小妖精,fairy]（盯......）",
                "\t[勇者,hero]都说了鬼帝是不可能忌惮我的实力的，妖精小姐你忘记了吗？",
                "\t[小妖精,fairy]嗯，你在塔前被几个小史莱姆揍得鼻青脸肿的画面咱可是至今记忆犹新呢。",
                "\t[勇者,hero]不对，这种丢脸的画面赶快忘掉啊！",
                "\t[小妖精,fairy]你刚才应该跟鬼帝的手下鬼奴交过手了吧？有从他口里知道些什么吗？",
                "\t[勇者,hero]没有，那家伙从头到尾都在说让我丧失战意的垃圾话。",
                "\t[小妖精,fairy]啧......如果他还活着的话，可以和咱成为志同道合的好朋友也说不定呢......",
                "\t[勇者,hero]......妖精小姐。",
                "\t[小妖精,fairy]当然是玩笑啦，你个笨蛋。",
                "\t[小妖精,fairy]总之，现在前往下个区域肯定是暂时做不到了，由于鬼帝的实力太强，所以他释放的法术以咱的能力无法解除。",
                "\t[勇者,hero]那该怎么办？我难道就这样两手空空地走回去吗？",
                "\t[小妖精,fairy]你现在撤退的话还来得及，不跟鬼帝交手对你来说一点坏处都没有。",
                "\t[小妖精,fairy]实力相差过于悬殊的战斗根本就算不上是战斗，只是单方面凌虐而已。",
                "\t[勇者,hero]......不，我有不能退却的理由，很多。",
                "\t[小妖精,fairy]哎呀哎呀，亏咱好心劝你，真是拿你没办法啊。",
                "\t[小妖精,fairy]这样吧，既然不能上楼，那就下楼吧。",
                "\t[勇者,hero]......哈啊？",
                "\t[小妖精,fairy]咱可以帮你开启通往地下层的通道，前负十层是鬼帝手下之一的追魂镇守的区域。",
                "\t[小妖精,fairy]你应该可以从他嘴里套出点关于鬼帝去向的情报来。",
                "\t[勇者,hero]嗯，似乎现在也只有这一条路可以走了。",
                "\t[小妖精,fairy]好，咱在0层等你。",
                {
                    "type": "hide",
                    "remove": true,
                    "time": 500
                }
            ]
        }
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
            },
            "1": null
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
    [  1, 34, 28, 27,  1,123,124,  0,  1,1276,1283, 33,  1],
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}