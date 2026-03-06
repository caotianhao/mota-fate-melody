main.floors.EX1=
{
    "floorId": "EX1",
    "title": "异次元空间",
    "name": "异次元空间",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT15",
            "loc": [
                0,
                5
            ],
            "direction": "down"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_EX1_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_EX1_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_EX1_6_3==2",
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
                        "name": "flag:door_EX1_6_3",
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
    [  4,  4, 46,  4,  4,  4,  4,  4,  4,  4,1338,  4,  4],
    [  4, 34,205, 27,  4, 23, 61, 33,  4, 28,207, 34,  4],
    [  4,  4, 82,  4,  4,  4, 85,  4,  4,  4, 82,  4,  4],
    [  4,  0,  0,  0,  4,384,  0,384,  4,  0,  0,  0,  4],
    [  4,235,  4,207,  4,  4, 82,  4,  4,207,  4,235,  4],
    [  4, 34,  4,  0,235, 34,  0, 34,235,  0,  4, 34,  4],
    [  4,207,  4, 81,  4,  4,235,  4,  4, 81,  4,207,  4],
    [  4,  0,  0,  0,206,235,384,235,206,  0,  0,  0,  4],
    [  4,  4,206,  4,  4,  4, 84,  4,  4,  4,206,  4,  4],
    [  4, 27,207,207,235,  4,235,  4,235,207,207, 28,  4],
    [  4,  4, 58,  4, 33,  4,  0,  4, 33,  4, 58,  4,  4],
    [  4,  4,  4,  4,  4,  4, 89,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}