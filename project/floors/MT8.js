main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "8",
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
        "7,1": [
            "\t[普通老人,man]骷髅的锉刀只会斩向贪婪者。",
            "\t[普通老人,man]同样的话我不会说第二遍。",
            "\t[勇者,hero]你这不是已经说了么......",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "bgm": "bgm.mp3",
    "changeFloor": {
        "8,0": {
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
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:MT8_AUTO_FIGHT",
                "value": "-5"
            }
        ]
    },
    "afterGetItem": {
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:MT8_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:MT8_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:MT8_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:MT8_AUTO_FIGHT",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:MT8_AUTO_FIGHT>3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[骷髅士官,skeletonCaptain]贪婪者，受死吧！",
                    {
                        "type": "battle"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1],
    [  1, 27,  1,  0,210,209,  0,121,  0,  0,  1, 32,  1],
    [  1, 31,204,  0,  1,  1,  1,  1,  1,  0,210,203,  1],
    [  1,  1, 81,  1,  1, 32,  0, 27,  1,  1, 81,  1,  1],
    [  1, 27, 32,  0,  1,  0,211,  0,  1,  0,219, 21,  1],
    [  1,  1,  1,  0,204, 22,  0, 28, 82,204,  1, 86,  1],
    [  1,  1,  1,  0,  1,  1,  1,  1,  1,  0,  0,  0,  1],
    [  1, 31,216,  0, 81,  0,  1, 22,  1,  1, 32, 21,  1],
    [  1, 81,  1,  1,  1,205, 81,220,  0,  0,  1,216,  1],
    [  1, 32, 32, 28,204,  0,  1, 81,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1, 82,  1,210,  1,  1, 86,  1,  1],
    [ 87,  0, 83,211,211, 32,212, 31,212, 28,210, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}