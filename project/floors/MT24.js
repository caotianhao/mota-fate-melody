main.floors.MT24=
{
    "floorId": "MT24",
    "title": "主塔 24 层",
    "name": "主塔 24 层",
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
        "6,2": [
            "\t[普通老人,man]注意到魔物的净化属性了吗？",
            "\t[普通老人,man]你现在持有的圣剑跟圣盾都是增加大量护盾的装备，在与净化怪战斗前可以考虑卸掉装备，降低受到的伤害。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,0": {
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
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1, 33,  1,1276, 34,  1,  0,  1,1276,1167,1167,  1,  1],
    [  1, 21,1283,  1,1167, 82,121,  1,224,  1, 33,1167,  1],
    [  1,  1,224, 81,1167,  1,224,  1,224,  1,  1,224,  1],
    [  1,  0,  0,  1,767,  1, 33,1167, 34,  1,1276, 34,  1],
    [  1,1167, 86,1276, 33,1283,  1, 82,  1, 33,  1,224,  1],
    [  1,1167,  1,  1, 81,  1,  0,  0,1167,254, 21, 21,  1],
    [  1,1276, 21,  1, 22,  1, 82,  1,1283, 86,1283,  1,  1],
    [  1,  1,  1,  1, 21,  1,1290,  1,1276,  1,  1,  1,  1],
    [  1,  4,  4,  1,1276,  1,232,  1,  1,  1,  4,  4,  1],
    [  1,  4,  4,  1,  1,  1,  0,  4,  4,  4,  4,  4,  1],
    [  1,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "05.Innerlink.wav"
}