main.floors.MT39=
{
    "floorId": "MT39",
    "title": "主塔 39 层",
    "name": "主塔 39 层",
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
            "type": "moveHero",
            "steps": [
                "down:1"
            ]
        },
        "\t[勇者,hero]\b[down,null]杰克？你在这种地方做什么？为什么要躲着我？",
        "\t[盗贼,thief]\b[down,null]......",
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                6,
                6
            ]
        },
        "\t[血影幼崽,N1586]\b[down,null]......（怪异的吼叫）",
        {
            "type": "animate",
            "name": "thunder",
            "loc": [
                5,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    7
                ]
            ],
            "remove": true,
            "time": 200
        },
        {
            "type": "animate",
            "name": "thunder",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    7
                ]
            ],
            "remove": true,
            "time": 200
        },
        "\t[勇者,hero]\b[down,null]！！！！！！！",
        "\t[勇者,hero]\b[down,null]这个攻击手段......杰克，你果然不是普通人！",
        "\t[勇者,hero]\b[down,null]莫非在第一区域对骷髅将军的亡魂出手的人也是你吗？！",
        "\t[盗贼,thief]\b[down,null]......",
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 500,
            "steps": [
                "down:5"
            ]
        },
        "\t[勇者,hero]\b[down,null]可恶！又被他逃走了......",
        "\t[勇者,hero]\b[down,null]必须得追上去问清楚才行！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": "MT40",
            "loc": [
                6,
                9
            ],
            "direction": "up"
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
    [  5,  5,  5,  5,  1,  1, 88,  1,  1,  5,  5,  5,  5],
    [  5,  5,  5,  5,  1,  1,  0,  1,  1,  5,  5,  5,  5],
    [  5,  5,  5,  5,  1,  0,  0,  0,  1,  5,  5,  5,  5],
    [  5,  5,  5,  5,  1,  0,  0,  0,  1,  5,  5,  5,  5],
    [  5,  5, 23,  0, 85,  0,  0,  0, 85,  0, 24,  5,  5],
    [  5,  5,  5,  5,  1,  0,123,  0,  1,  5,  5,  5,  5],
    [  5,  5,  5,  5,  1,1586,  0,1586,  1,  5,  5,  5,  5],
    [  5,  5,  5,  5,  1,  1,  0,  1,  1,  5,  5,  5,  5],
    [  5,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,  5],
    [  5,  5,  5,  5,  5,  1,  1,  1,  5,  5,  5,  5,  5]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "TheIsland.mp3"
}