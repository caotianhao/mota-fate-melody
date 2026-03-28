main.floors.MT35=
{
    "floorId": "MT35",
    "title": "主塔 35 层",
    "name": "主塔 35 层",
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
            "time": 600,
            "speed": 10,
            "power": 10
        },
        "\t[勇者,hero]等一下，这不是杰克吗？",
        "\t[盗贼,thief]......啧。",
        {
            "type": "sleep",
            "time": 200,
            "noSkip": true
        },
        {
            "type": "openDoor",
            "loc": [
                3,
                4
            ]
        },
        {
            "type": "sleep",
            "time": 200,
            "noSkip": true
        },
        "\t[勇者,hero]杰克！你知道这个区域发生什么了吗？",
        "\t[盗贼,thief]......",
        {
            "type": "move",
            "loc": [
                4,
                4
            ],
            "time": 200,
            "steps": [
                "right:1",
                "up:3",
                "left:4"
            ]
        },
        "\t[勇者,hero]一言不发地跑掉了......",
        "\t[勇者,hero]你们一个个到底怎么了？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": "MT36",
            "loc": [
                6,
                9
            ],
            "direction": "up"
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
    [  5, 87,  0,  0,  0,  0,  0,  0,  0, 34,1283,1276,  5],
    [  5,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  5],
    [  5,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  5],
    [  5, 55,  0, 85,123,  0,  0,  0,  0, 85,  0,1342,  5],
    [  5,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  5],
    [  5,  1,  1,  1,  1,  0,  0,  5,  1,  1,  1,  1,  5],
    [  5,  5,  5,  5,  1,  0,  0,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5, 81,  5,  5,  5,  5,  5,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4, 88,  4,  4,  4,  4,  4,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "bgmap": [

],
    "fgmap": [

]
}