main.floors.MT28=
{
    "floorId": "MT28",
    "title": "主塔 28 层",
    "name": "主塔 28 层",
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
        "6,7": [
            "\t[普通老人,man]魔导神磐堡垒是魔塔里拥有最强防御力的强者之一。",
            "\t[普通老人,man]要想战胜它，你必须得把这个区域里的所有力量一点不漏的吸收才有机会。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,0": {
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
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4,763,  4,  4,  4,  4,  4,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1,  1,  1,  1],
    [  1,1283, 22,227,227,  1, 81,  1, 21,  1,1283,1276,  1],
    [  1,  1,1276,  1, 33, 81,227,  0,227, 82, 21, 33,  1],
    [  1,1276,  1,  1,1167,  1, 82,  1,1276,  1,232,  1,  1],
    [  1, 21, 33, 33,1167, 82,121,227,395, 86,1276,  1,  1],
    [  1,  1,  1,  1,  1,  1,222,  1,  1,  1,  1,  1,  1],
    [  1,  4,  4,  1,  1,  1,  0,  1,  1,  1,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4, 88,  4,  4,  4,  4,  4,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}