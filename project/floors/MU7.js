main.floors.MU7=
{
    "floorId": "MU7",
    "title": "地下 7 层",
    "name": "地下 7 层",
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
    "events": {},
    "changeFloor": {
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MU7_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MU7_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MU7_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MU7_6_5",
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
                "condition": "flag:door_MU7_6_5==4",
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
                        "name": "flag:door_MU7_6_5",
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
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  3,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  3, 42,  3,  5,  5,  5,  5,  3],
    [  3,  3,  3,  3,  3,  3, 85,  3,  3,  3,  3,  3,  3],
    [  3, 88,  3, 22,  3,256,  0,248,  3, 21, 34,1276,  3],
    [  3,  0,  3,218,  3,  0,  0,  0,  3,  3,218,  3,  3],
    [  3,236,  3,218,  3,1078,  0,468,  3, 27,248, 28,  3],
    [  3,  0,1133,  0,  3,  3,1168,  3,  3,  3, 81,  3,  3],
    [  3,  0,  3,1133,1276,  3, 82,  3,1276,  3, 27, 33,  3],
    [  3, 87,  3,  3, 33, 81,  0, 81,  0,1168, 28,  3,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "dixia.mp3"
}