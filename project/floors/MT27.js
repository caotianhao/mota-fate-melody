main.floors.MT27=
{
    "floorId": "MT27",
    "title": "主塔 27 层",
    "name": "主塔 27 层",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_9_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_9_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "9,2": {
            "0": {
                "condition": "flag:door_MT27_9_2==2",
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
                        "name": "flag:door_MT27_9_2",
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
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1,1276,  1,1283, 33,  1,  0,  1, 33,1341, 33,  1,  1],
    [  1, 21,227,1167,  1,  1, 81,  1,  1, 85,  1,  1,  1],
    [  1,232,  1, 81,  1,1276,227,  1,222,  0,222,  1,  1],
    [  1,  0,342, 34, 22,  1,  0, 83,  0,  0,  0, 33,  1],
    [  1,224,  1,232,  1, 33,224,  1, 86,  1, 86,  1,  1],
    [  1, 81,  1,232,  1,  1,227,  1,1276,  1,1276,1283,  1],
    [  1,1276,1167, 34,227, 82,  0,  1, 21,  1,1276, 34,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1,  1,  1,  1],
    [  1,  4,  4,  1,  1,  1,222,  1,  1,  1,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}