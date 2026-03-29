main.floors.MT48=
{
    "floorId": "MT48",
    "title": "主塔 48 层",
    "name": "主塔 48 层",
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
        "4,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT48_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT48_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT48_7_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT48_7_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,10": {
            "0": {
                "condition": "flag:door_MT48_5_10==2",
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
                        "name": "flag:door_MT48_5_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,10": {
            "0": {
                "condition": "flag:door_MT48_7_10==2",
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
                        "name": "flag:door_MT48_7_10",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  1,  1,  1, 87,  1,  1,763, 33,1276, 86,1268,  4],
    [  4,1268, 21,  1,  0,  1,  1,956,  1,  1,  1,  1,  4],
    [  4,1268,246, 82,246,  1,1276,246,888,  0,888,  0,  4],
    [  4,  1,  1,  1,887, 24,  1, 22,  1,888,  1,  0,  4],
    [  4,  1,1268,  1,246,  1,1276,  1,1268,  0,  1,888,  4],
    [  4,  1, 22,  1,246,  1,1268,  1,  1,861,  1,  0,  4],
    [  4,1276,246, 81,  0,888,  0, 82, 81,  0,887,  0,  4],
    [  4,  1,  1,  1,  1,  1,  1,  1,  1, 82,  1,737,  4],
    [  4,  0,  0,  1,1276,  1,956,  1,888,1283,  1,  0,  4],
    [  4, 44,  0,763, 34, 85,  0, 85,1268, 21,  1,  0,  4],
    [  4,  0,  0,  1,1290,  1,956,  1,888,1276,  1, 88,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "Resphoina.mp3"
}