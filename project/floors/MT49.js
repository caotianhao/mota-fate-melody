main.floors.MT49=
{
    "floorId": "MT49",
    "title": "主塔 49 层",
    "name": "主塔 49 层",
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
        "6,0": [
            "\t[普通老人,man]前方就是顶层了。",
            "\t[普通老人,man]我的使命也抵达尽头了。",
            "\t[勇者,hero]......一直以来不厌其烦地给我提示，都谢谢你了，老人家。",
            "\t[普通老人,man]呵呵......这本来就是我的职责。",
            "\t[普通老人,man]愿你不再迷失方向，剑锋永远直至前方。",
            "\t[普通老人,man]这是我对你最后的忠告了，务必牢记于心。",
            "\t[勇者,hero]嗯......",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT50",
            "loc": [
                6,
                10
            ],
            "direction": "up"
        },
        "4,0": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT49_6_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT49_6_5==2",
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
                        "name": "flag:door_MT49_6_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,8": {
            "0": {
                "condition": "flag:door_MT49_6_8==2",
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
                        "name": "flag:door_MT49_6_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,10": {
            "0": {
                "condition": "flag:door_MT49_6_10==2",
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
                        "name": "flag:door_MT49_6_10",
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
    [  4,  4,  4,  1, 88,  0,121, 83,887,  1,  4,  4,  4],
    [  4,  4,  4,  1,  1,  1,  1,  1,246,  1,  4,  4,  4],
    [  4,  4,  4,  1,1268,1268,228,  0,887,  1,  4,  4,  4],
    [  4,  4,  4,  1,  1,  1, 83,  1,  1,  1,  4,  4,  4],
    [  4,  4,  4,  4,  1,223,1268,223,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1, 85,  1,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1, 83,  1,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,223,1268,223,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1, 85,  1,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,223,1268,223,  1,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 83,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "Resphoina.mp3"
}