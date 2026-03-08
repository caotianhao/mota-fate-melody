main.floors.MT30=
{
    "floorId": "MT30",
    "title": "主塔 30 层",
    "name": "30",
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
                "down:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                6,
                1
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[勇者,hero]你就是这个区域的头目吧。",
            "\t[魔神武者,devilWarrior]吾名为魔神武者，在此恭候多时。",
            "\t[魔神武者,devilWarrior]吾不会设置任何机关与陷阱，也不会让手下插手，通往下个区域的道路就在吾背后。",
            "\t[勇者,hero]真是耿直得都让我以为自己是反派角色了啊......",
            "\t[魔神武者,devilWarrior]吾不会跟汝说多余的话，吾实力不足，吾亡，汝实力不足，吾生——拔剑吧。",
            "\t[勇者,hero]求之不得。",
            "\t[勇者,hero]说起来，如果不是因为站在对立面，我真想跟你们这群武者族的笨蛋交个朋友啊。",
            "\t[魔神武者,devilWarrior]朋友？吾不懂，这个词所代表的意思。",
            "\t[勇者,hero]没什么，刚才那番话就当我没说好了。",
            "\t[勇者,hero]来吧！赌上生死的一对一！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,10": [
            "\t[魔神武者,devilWarrior]汝很强，比吾之前遇到的任何对手都要强。",
            "\t[魔神武者,devilWarrior]如果吾还有一口气的话，真想再次跟汝立即来一次刚才的对决啊。",
            "\t[勇者,hero]呼......你也不赖啊，魔神武者，你也是我遇到的最强的对手。",
            "\t[魔神武者,devilWarrior]能够被汝如此称赞，吾这一片生涯，倒也无悔。",
            "\t[魔神武者,devilWarrior]如果还有来生的话，吾会再次向汝发起挑战的。",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    5
                ],
                "floorId": "MT29"
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    5
                ],
                "floorId": "MT29"
            },
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[勇者,hero]......哈哈哈哈，我很期待，再次与你兵刃相见的那一天。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  1, 88,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,242,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}