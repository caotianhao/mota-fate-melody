main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 18 层",
    "name": "主塔 18 层",
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
        "6,2": [
            "\t[普通老人,man]在魔塔里，史莱姆的确是最低等级的魔物，但是有一种史莱姆是个例外",
            "\t[普通老人,man]它就是疫病化身，吸收了无数怨念与疫病，身体结构发生了改变，几乎一触碰就会染上各种致命的传染病",
            "\t[普通老人,man]最基础的解毒剂是无法解除跟这种魔物战斗以后的后遗症的",
            "\t[普通老人,man]我听说这个区域的隐藏空间里有这样一种灵药，能够根治百病，或许能够派上用场",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT18_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT18_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT18_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT18_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT18_6_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT18_3_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT18_9_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_MT18_6_4==2",
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
                        "name": "flag:door_MT18_6_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,6": {
            "0": {
                "condition": "flag:door_MT18_6_6==2",
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
                        "name": "flag:door_MT18_6_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,10": {
            "0": {
                "condition": "flag:door_MT18_6_10==1",
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
                        "name": "flag:door_MT18_6_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "3,8": {
            "0": {
                "condition": "flag:door_MT18_3_8==1",
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
                        "name": "flag:door_MT18_3_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "9,8": {
            "0": {
                "condition": "flag:door_MT18_9_8==1",
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
                        "name": "flag:door_MT18_9_8",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,1276,  1,208, 81,  1, 33,  1,  1,208, 82, 88,  1],
    [  1, 34, 82,1276,  0,214,121,214, 81,1283,  0,  0,  1],
    [  1,1283,  1,208,  1,  1,  0,  1,  1,208,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,  5,  5,  5,  1,214,  0,214,  1,  5,  5,  5,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 28,1283,  1,  0,  0,  0,  0,  0,  1,1276, 27,  1],
    [  1, 34, 21, 85,  0,  0,248,  0,  0, 85, 21, 34,  1],
    [  1, 28,1283,  1,  0,  0,  0,  0,  0,  1,1276, 27,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,  5,  5,  5,  5,  1,  0,  1,  5,  5,  5,  5,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "wange.mp3"
}