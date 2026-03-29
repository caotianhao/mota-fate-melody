main.floors.MT31=
{
    "floorId": "MT31",
    "title": "主塔 31 层",
    "name": "主塔 31 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 800,
            "speed": 10,
            "power": 10
        },
        "\t[勇者,hero]好热啊......嗯？",
        "\t[勇者,hero]这里是怎么回事？周围都被流动的熔岩包围着......这个热度，已经快要受不了了......",
        "\t[勇者,hero]嗯？奇怪，怎么一个怪物都没有？",
        "\t[勇者,hero]气氛怪怪的，不管了，走一步算一步了。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
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
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  0,  0,  0,  0,  0, 87,  5],
    [  5,  5,  5,  5,  5,  5,  0,  0,  0,  0,  0,  0,  5],
    [  5,  1, 81,  1,  5,  5,  0,  1,  1,  1, 82,  1,  5],
    [  5, 21,  0,  0,  0, 86,  0,  0, 86,  0,  0,  0,  5],
    [  5,  1,  1,  1, 81,  1,  1, 86,  1, 81,  1, 82,  5],
    [  5, 21, 81,  0,  0, 86,  0,  0,  1, 33,  1,  0,  5],
    [  5,1276,  1,  0,  0,  1,  0,  1,  1,1276,1283, 21,  5],
    [  5,  1,  1,  1, 22,  1,  0, 34,  1,  1,  1,  1,  5],
    [  5,  4,  4,  1,  1,  1,  0,  1,  1,  1,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4, 88,  4,  4,  4,  4,  4,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "TheIsland.mp3"
}