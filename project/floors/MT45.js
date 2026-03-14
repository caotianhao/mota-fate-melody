main.floors.MT45=
{
    "floorId": "MT45",
    "title": "主塔 45 层",
    "name": "45",
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
        "6,11": [
            "\t[普通老人,man]能够开启绿色骷髅门的大绿钥匙是魔塔里最稀有的宝物之一，一般一座塔仅有一把。",
            "\t[普通老人,man]不幸的是，这座魔塔里唯一的一把大绿钥匙好像被一只血影幼崽吞掉了。",
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
        "11,11": {
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  1,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1, 43,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  1,  1, 85,  1,  1,  4,  4,  4,  4],
    [  4,  1,  1,  1,1276,  0,  0,  0,1283,  1,  1,  1,  4],
    [  4,  1,1268,  1,1276,  0,  0,  0,1283,  1,  1,  1,  4],
    [  4,1283, 21,1276,  1,  0,257,  0,  1,1276, 21, 21,  4],
    [  4,  1, 82,  1,  1,  1,337,  1,  1,1283, 34, 34,  4],
    [  4,  1,888,228,956, 81,1268, 81,737,  1, 82,  1,  4],
    [  4,1276, 34,  1, 34,  1,1276,  1,  0,246,887,1268,  4],
    [  4,  1,  1,  1,  1,  1, 82,  1,228,  1,  1,  1,  4],
    [  4, 88,  0,  0,  0,  0,121,  0,  0,  0,  0, 87,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}