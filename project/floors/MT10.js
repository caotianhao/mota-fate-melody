main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "10",
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
        "6,5": [
            "\t[骷髅将军,skeletonKnight]你终于来到我面前了，迟到的第28具挑战者。",
            "\t[勇者,hero]28？......就是说其他勇士已经被......？！",
            "\t[骷髅将军,skeletonKnight]没错，就算被冠以勇者的名号，你们人类也终究只是人类而已。",
            "\t[骷髅将军,skeletonKnight]看到这群被关在牢门后的骷髅了吗？",
            "\t[骷髅将军,skeletonKnight]你同伴们的尸体可就混迹在它们之中哦？",
            "\t[勇者,hero]......！",
            "\t[骷髅将军,skeletonKnight]褪去虚张声势的铠甲跟弱小不堪的皮囊，你们这群自命勇士的家伙在我眼里与我们骷髅并无区别。",
            "\t[骷髅将军,skeletonKnight]啊，当然区别还是存在的，那就是你们的骨头里，寄宿着与生俱来的恐惧与怯懦。",
            "\t[骷髅将军,skeletonKnight]人类就是这样可悲而渺小的存在。",
            "\t[勇者,hero]闭嘴！",
            "\t[勇者,hero]你这种连生命都没有可怜虫，有什么资格对人类说三道四！",
            "\t[骷髅将军,skeletonKnight]呵呵呵......你的声音就算再洪亮，也无法掩盖内心深处的恐惧。",
            "\t[骷髅将军,skeletonKnight]你别看我现在这副样子，我生前可是你们公国的首席大将军。",
            "\t[骷髅将军,skeletonKnight]30年前攻打魔塔的那场败仗夺取了我所积累的一切。",
            "\t[骷髅将军,skeletonKnight]我拼死战斗到最后的尸骨被遗弃在荒野里无人清理，被走兽飞禽啃食得只剩一具骷髅。",
            "\t[骷髅将军,skeletonKnight]从那时起我就看透了人类的本质，什么荣华什么富贵，我生前苦苦追寻的东西，现在看来就如同笑话一般。",
            "\t[骷髅将军,skeletonKnight]于是我褪去了自己的血肉与欲望，成为了一具憎恶着世间一切生灵的骷髅。",
            "\t[骷髅将军,skeletonKnight]当骷髅可比当人类轻松多了，不需要对他们阿谀奉承唯唯是诺，牺牲他人或为她牺牲，最后在权力游戏中粉身碎骨。",
            "\t[骷髅将军,skeletonKnight]而骷髅追求的东西只有一个，那就是力量！无止境的力量！",
            "\t[骷髅将军,skeletonKnight]舍弃了人类弱小的身体，我屠杀无数生灵，最终突破了人类力量的极限。现在的我，以一己之力单挑你们一支军队也不在话下！",
            "\t[骷髅将军,skeletonKnight]哈哈哈哈哈！你的双腿已经怕得发抖了！果然人类终究只是人类啊。",
            "\t[骷髅将军,skeletonKnight]不过我看你骨骼蛮硬朗的，天生就是当骷髅的料。",
            "\t[骷髅将军,skeletonKnight]怎样？要不要考虑加入我的势力？如果你现在就答应的话，我可以直接把你提拔成近卫军。",
            "\t[勇者,hero]你给我闭嘴！",
            "\t[勇者,hero]我嘴比较笨，不知道该怎么反驳你那一套一套的歪理。",
            "\t[勇者,hero]这种时候，只需要用剑跟你交流就对了吧。",
            "\t[骷髅将军,skeletonKnight]哦哦...虽然恐惧得发抖，但握剑的姿势却是坚定不移呢...你的气势跟刚才那群不堪一击的喽啰们完全不一样。",
            "\t[骷髅将军,skeletonKnight]但在此之前，先去会会我麾下的骷髅士兵们吧！",
            "\t[骷髅将军,skeletonKnight]如果你能在骷髅的海洋里活下来，我就承认你是个值得一战的对手！",
            {
                "type": "openDoor",
                "loc": [
                    3,
                    6
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:10F_EVENT_2_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1,211,  0,211,  1,  1,  0,  1,  1,389,  0,389,  1],
    [  1,  0,211,  0,  1,  1,  0,  1,  1,  0,389,  0,  1],
    [  1,211,  0,  0,  1,  1,  0,  1,  1,  0,  0,389,  1],
    [  1,  1,  1, 85,  1,  1, 83,  1,  1, 85,  1,  1,  1],
    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
    [  1,  1,  1, 85,  1,  1, 85,  1,  1, 85,  1,  1,  1],
    [  1,210,210,210,  1,  0,  0,  0,  1,212,212,212,  1],
    [  1,210,  0,210,  1,  0,240,  0,  1,212,  0,212,  1],
    [  1,210,210,210,  1,  0,  0,  0,  1,212,212,212,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [ 87,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "rain",
        6
    ]
}