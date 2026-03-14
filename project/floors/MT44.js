main.floors.MT44=
{
    "floorId": "MT44",
    "title": "主塔 44 层",
    "name": "主塔 44 层",
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
        "11,11": {
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
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT44_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT44_6_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MT44_6_9==2",
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
                        "name": "flag:door_MT44_6_9",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4],
    [  4,1276,1276,1276,  1,  1, 23,  1,  1,1276, 21,1276,  4],
    [  4,1268,1268,1268,  1,1276,1268,1283,  1, 34,246,1268,  4],
    [  4,  1, 84,  1,1268, 22,1290, 22,1268,  1, 81,  1,  4],
    [  4,888,888,  1,  1,1276,1290,1283,  1,  1,246,  0,  4],
    [  4,888,  1, 22,  1,  1,246,  1,  1, 21,  1,888,  4],
    [  4,888,888,1268,1283,  1,  0,  1,1276,1268,246,  0,  4],
    [  4,  1, 81,  1,  1,  1, 85,  1,  1, 86,737,  1,  4],
    [  4,  1, 81,  1,  1,887,  0,887,  1,  1, 81,  1,  4],
    [  4, 87,  0,553, 86,  0,  0,  0, 86,553,  0, 88,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}