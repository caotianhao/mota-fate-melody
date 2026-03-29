main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "主塔 5 层",
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
        "2,3": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [  1,  1,206, 82,210, 86, 32,205, 82,205, 31,  1,  1],
    [  1,  1,  0,  1,210,  1, 27,  1,  1,  1, 82, 32,  1],
    [  1,  1, 87,  1,210,  1,209,  1, 21,  1,  1, 81,  1],
    [  1,  1,  1,  1, 22,209,210,  1, 28,  1,203,202,  1],
    [  1,  1, 27,  1,  1,  1,  1,  1,203,  1,202,  1,  1],
    [  1, 29,219,203,  0,  1, 32,  1,  0, 86,219, 21,  1],
    [  1,  1, 28,  1,  0,  0,206,  0,  0,  1,  1,  1,  1],
    [  1, 28,  1, 31,  0,205,  1,  1,203,  1, 23,  1,  1],
    [  1,210, 81,  0,  0,  0,219,  0,  0,  1,244,  1,  1],
    [  1, 22,  1,206,  1,209,  1, 21, 27, 82, 81,  0,  1],
    [  1,  1, 21, 32,  1, 27,  1, 21,  1,  1,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "fullmoonplan.mp3"
}