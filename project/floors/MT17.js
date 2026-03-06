main.floors.MT17=
{
    "floorId": "MT17",
    "title": "主塔 17 层",
    "name": "17",
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
    "events": {
        "11,10": [
            "\t[普通老人,man]魔性人在这个区域里虽然是最常见的杂兵，但它们也是绝对不容小觑的存在。",
            "\t[普通老人,man]它们是介于人类跟不死系魔物之间的边缘种族，为了跟其他魔物友好相处压制了自己的本能，实际上每个魔性人都有着极为强悍的实力。",
            "\t[普通老人,man]总之，务必要当心那些魔性人。",
            "\t[勇者,hero]感觉有点瘆人啊......",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,11": {
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
    [  1, 33, 58,  1, 27,  1, 27,  0, 27,  1,  0, 87,  1],
    [  1,384,  1, 21, 32,  1, 21, 28,  0,  1,213,  0,  1],
    [  1,234,  1,  1,235,  1,  1,208,  1,  1,  1,215,  1],
    [  1, 22,207, 81,  0, 11,207,235,  0,233, 81,  0,  1],
    [  1, 27,  1, 82,  1, 32,  1, 28,  0, 27,  1,214,  1],
    [  1,  1, 27,214, 27,  1,  1,  1,214,  1,  1,234,  1],
    [  1, 32,  1, 81,  1, 21,  1, 21,  0, 33,  1,214,  1],
    [  1, 58,235,  0,213, 34,215,  0,  0,  0, 82,  0,  1],
    [  1, 22,  1,  1,  1,  1,  1,  1,  1,  1,  1, 11,  1],
    [  1,  1,  1,213,  1,213,  1,213,  1,213,  1,121,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,214,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}