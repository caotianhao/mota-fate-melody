main.floors.MT3=
{
    "floorId": "MT3",
    "title": "主塔 3 层",
    "name": "3",
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
        "3,1": [
            "\t[普通老人,man]骷髅的锉刀只会斩向贪婪者。",
            "\t[勇者,hero]啊？......能不能说的浅显易懂一些。",
            "\t[普通老人,man]你先存个档准没错。",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[勇者,hero]这人刚刚是不是作出了什么了不得的发言......",
            {
                "type": "callSave"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:MT3_AUTO_FIGHT",
                "value": "-5"
            }
        ]
    },
    "afterGetItem": {
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:MT3_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:MT3_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:MT3_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:MT3_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "2,6": {
            "0": {
                "condition": "flag:MT3_AUTO_FIGHT>2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[骷髅士兵,skeletonWarrior]贪婪者，受死吧！",
                    {
                        "type": "battle"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,121,201,202,201,202, 22,  1,  0, 87,  1],
    [  1,  1, 82,  1,  1,  1,  1,210,  1,  1, 27, 28,  1],
    [  1, 27,201,  0,  0,209,  0,  0, 31,  1,  1, 82,  1],
    [  1,  1,205,  1,  1,  1, 27,  0,  0, 81,202,203,  1],
    [  1, 31,  0, 27,  1,  1,  1,205,  1,  1,  1,201,  1],
    [  1,  0,210,  0,201,202, 81,  0,209,  0,202,  0,  1],
    [  1, 21,  0, 28, 86,  1,  1,205,  1, 81,  1, 81,  1],
    [  1,  1,  1,  1, 22, 32,  1,205,  1, 27,209, 28,  1],
    [  1,  1, 28,  1, 81,  1,  1, 81,  1,  1,  1,  1,  1],
    [  1,212,209, 81,  0, 28,  1,  0, 82, 27, 21,205,  1],
    [  1, 32,  1,  1, 31, 31,202,  0,  1, 32,205, 22,  1],
    [  1, 24,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": null
}