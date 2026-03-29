main.floors.MT38=
{
    "floorId": "MT38",
    "title": "主塔 38 层",
    "name": "主塔 38 层",
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
        "4,4": [
            "\t[勇者,hero]\b[down,null]老伯？你怎么会在这里？",
            "\t[商人,trader]\b[down,null]是你啊勇者大人，老夫看这个区域不知为何没有魔物镇守，就小心翼翼地一路摸索上来了。",
            "\t[勇者,hero]\b[down,null]......是吗？那为什么这一路上的钥匙跟宝石你一个都没拿走？",
            "\t[商人,trader]\b[down,null]因为老夫来这座魔塔探险的目的只有一个......那就这扇门背后的宝物。",
            "\t[商人,trader]\b[down,null]只要能拿到这件宝物，老夫就能......咳咳勇者大人，你能想办法打开这扇门吗？",
            "\t[勇者,hero]\b[down,null]这种机关门只要战胜守卫或者这个区域的头目才能打开，用武力是不可能破坏的。",
            "\t[商人,trader]\b[down,null]不可能......如果不拿到这件宝物，就不可能战胜这个区域的头目，这根本就是自相矛盾......",
            "\t[勇者,hero]\b[down,null]对了，我倒是认识一个朋友，他对于撬锁开门这种事情再擅长不过了，或许他可以帮到你。",
            "\t[商人,trader]\b[down,null]真的吗？那人现在在哪里？",
            "\t[勇者,hero]\b[down,null].....这我也不太清楚，我这就去找他。",
            "\t[商人,trader]\b[down,null]嗯，麻烦你了勇者大人。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
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
    [  5, 87,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  5],
    [  5,  1,  1,  1,  1,  0,  1,  1,1276,  1,1283,  1,  5],
    [  5,  0,  0,  1,  1,  0,  0, 82,  0,  0,  0,  1,  5],
    [  5, 65,  0, 85,122,  0,  0,  1,  1, 81,  1,  1,  5],
    [  5,  0,  0,  1,  1,  0,  0,  1,1276,  0, 34,  1,  5],
    [  5,  1,  1,  1,  1,  0,  0,  1,1276, 21, 33,  1,  5],
    [  5,  5,  5,  5,  1,  0,  0,  1,  1,  1,  1,  1,  5],
    [  5,  5,  5,  5,  5,  5, 81,  5,  5,  5,  5,  5,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
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