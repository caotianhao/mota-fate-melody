main.floors.MT32=
{
    "floorId": "MT32",
    "title": "主塔 32 层",
    "name": "主塔 32 层",
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
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,1276,  1,  0,  0,  0,  0,  0,  0,  0,  0, 88,  5],
    [  5,  0,  0,  0,  0,  1,  1,  0,  0,  1, 81,  1,  5],
    [  5,  0, 34,  1,1283,  1,  1,  0,  0, 86, 22,1283,  5],
    [  5, 82,  1,  1,  1,  1,  1,  1, 81,  1,1276,  1,  5],
    [  5,  0, 34,  1,1290,  1,  1,  0,  0,  1,  1, 21,  5],
    [  5,  1,  0,  0,  0,  1,  1,  0,  0, 34, 34,1276,  5],
    [  5,  1,  1,  0,  0,  0,  1,  0,  0,  1, 21,  1,  5],
    [  5,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  5],
    [  5,  4,  4,  1,  1,  1, 81,  1,  1,  1,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "TheIsland.mp3"
}