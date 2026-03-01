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
    "events": {},
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
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
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
    [  1, 25,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}