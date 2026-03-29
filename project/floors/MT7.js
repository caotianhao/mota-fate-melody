main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "主塔 7 层",
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
        "8,2": [
            "\t[普通老人,man]不觉得很奇怪吗？",
            "\t[普通老人,man]如此庞大的阵势，只是为了守住一颗小小的红色宝石。",
            "\t[普通老人,man]庞大的魔力波动甚至把最低等级的魔物也吸引了过来。",
            "\t[普通老人,man]记住，普通的事物，其内在绝对非同寻常。",
            "\t[勇者,hero]嗯，就比如你。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "8,0": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1],
    [  1,  5,  5,  5,  5,  5,  5,  1,  0,  0,  0, 88,  1],
    [  1,  5,  5,  5,  5,  5,  5,  1,121,  0,  0,  0,  1],
    [  1,  5,  5,  5,  5,  5,  1,  1,  1, 81,  1,  1,  1],
    [  1,  5,  5,  5,  1,  1, 58,  1,  1,210,  1, 22,  1],
    [  1,  5,  5,  1,  1,  1,220,209,  0,  0, 81, 22,  1],
    [  1,  5,  1, 32,206,  0,  1,  1, 82,  1,  1,  1,  1],
    [  1,  5,  1,206,  1,  0,204,205,  0,203, 31, 27,  1],
    [  1,  5,  1,  0, 81,  0,  1,  1, 86,  1,  1,  1,  1],
    [  1,  5,  1, 86,  1,  0,206,210, 32,203, 31, 28,  1],
    [  5,  5,  1,201,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  5,  5,  1,202,205,209,210,219,203,206,204,1444,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "fullmoonplan.mp3"
}