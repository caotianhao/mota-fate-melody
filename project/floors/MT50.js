main.floors.MT50=
{
    "floorId": "MT50",
    "title": "主塔 50 层",
    "name": "主塔 50 层",
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
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                6,
                11
            ]
        },
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 500,
            "speed": 10,
            "power": 10
        },
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[勇者,hero]\b[up,null]做好被干掉的准备了吗，万恶的魔王。",
        "\t[魔王,redKing]\b[up,null]你好，勇敢的挑战者，欢迎你来到这座魔塔的顶层，我将......",
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[公主,princess]\b[up,null]够了！你们都给我闭嘴！",
        "\t[魔王,redKing]\b[up,null]......我好歹也算个魔王，丫头你就不能让我把场面话说完？",
        "\t[勇者,hero]\b[up,null]不要理会这个冒牌公主了，来吧，开始我们之间的决斗吧！",
        "\t[魔王,redKing]\b[up,null]虽然令人难以置信，但这丫头的确是你们敬爱的公主本人不假。",
        "\t[勇者,hero]\b[up,null]......",
        "\t[勇者,hero]\b[up,null]不可能，这种叼蛮任性大嗓门的家伙会是我们拼死拯救的公主？！",
        "\t[魔王,redKing]\b[up,null]嗯，不如说这才是这丫头压抑已久的本性，真难为她在你们国家的人民面前装模作样了十几年。",
        "\t[公主,princess]\b[up,null]你！居然当着我的面说我坏话！可恶！气死我了！",
        "\t[勇者,hero]\b[up,null]无所谓了，反正现在我的目的也不是拯救她。",
        "\t[勇者,hero]\b[up,null]我有更重要的人需要被拯救。",
        "\t[魔王,redKing]\b[up,null]我知道，是这座塔的守护精灵对吧？",
        "\t[魔王,redKing]\b[up,null]能够复活万物的圣水就在我背后。",
        "\t[魔王,redKing]\b[up,null]如果你能杀了我的话，圣水就属于你。",
        "\t[公主,princess]\b[up,null]你在说什么啊？圣水被拿走的话，且不说魔塔会崩塌，你自己的性命也会逐渐凋零的啊！",
        "\t[公主,princess]\b[up,null]你难道还是对自己现在的身体状况不了解吗？",
        "\t[魔王,redKing]\b[up,null]......我自己的身体，我当然再了解不过。",
        "\t[勇者,hero]\b[up,null]你们究竟在说什么？我怎么一句都听不懂？",
        "\t[公主,princess]\b[up,null]你这个局外人又懂得了什么？！",
        "\t[公主,princess]\b[up,null]你跟父王一样......你们全部都是一类人，从来没有考虑过我的感受，我想要什么！！",
        "\t[公主,princess]\b[up,null]我不需要任何人拯救！现在的我只想陪伴我最爱的人走到最后一刻！",
        "\t[公主,princess]\b[up,null]我根本就不是被抓进来的！我是自愿来魔塔的！就是为了逃避父王强行给我定下的婚约！",
        "\t[公主,princess]\b[up,null]懂了吗！！可恶的勇者！！",
        "\t[勇者,hero]\b[up,null]......",
        "\t[魔王,redKing]\b[up,null]你这丫头真是越来越任性了......",
        "\t[魔王,redKing]\b[up,null]不要在意她的感受，来吧，勇者，拔出你的剑。",
        "\t[公主,princess]\b[up,null]笨蛋！你现在这副残破的身体根本就无法战斗啊！",
        "\t[勇者,hero]\b[up,null]......",
        "\t[勇者,hero]\b[up,null]魔王，你的身体究竟怎么了？",
        "\t[公主,princess]\b[up,null]你还有脸问他身体怎么了？还不都是你们人类的过错！",
        "\t[公主,princess]\b[up,null]如果不是因为你们公国这几年四处征战，让这世界生灵涂炭，唤醒了魔塔地下最深处的地脉守护者。",
        "\t[公主,princess]\b[up,null]魔王也就不会因为消耗九成魔力镇压那家伙而变成现在这样了啊！",
        "\t[勇者,hero]\b[up,null]......魔王，她说的都是真的吗？",
        "\t[魔王,redKing]\b[up,null]嗯，没错。由于魔力急剧消耗，我现在只剩下一天寿命了。",
        "\t[魔王,redKing]\b[up,null]明天的黎明来临之前，我就会离开这个世界。",
        "\t[勇者,hero]\b[up,null]......这样吗？",
        "\t[魔王,redKing]\b[up,null]你应该表现得更高兴才对，英勇的战士，你们人类对立势力的首领一死，其他魔物也就翻不起什么风浪了。",
        "\t[魔王,redKing]\b[up,null]把我的首级跟公主一起交还给国王，你也能因此获得一生都享不尽的荣华富贵。",
        "\t[魔王,redKing]\b[up,null]这对于我们每一个人来说，都是最完美的结局。",
        "\t[勇者,hero]\b[up,null]......最完美的结局?",
        "\t[勇者,hero]\b[up,null]我，这一路上经历了很多事情。",
        "\t[勇者,hero]\b[up,null]我遇见了许多的伙伴，也跟无数强大的对手战斗过。",
        "\t[勇者,hero]\b[up,null]我遇到过比魔物还要狡诈的人类，也遇到过很多正直善良乐于助人的魔物。",
        "\t[勇者,hero]\b[up,null]直到我亲眼目睹一个魔物为我而死，她用生命的代价，拯救了迷茫的我。",
        "\t[勇者,hero]\b[up,null]让我终于对这混沌的宿命不再惧怕。",
        "\t[勇者,hero]\b[up,null]这就是我依然忍心对你拔剑的理由，来吧，魔王。",
        "\t[魔王,redKing]\b[up,null]你终于肯拔剑了。",
        "\t[魔王,redKing]\b[up,null]我们两人，命中注定难逃这一战。",
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "right:1",
                "down:2",
                "left:1"
            ]
        },
        "\t[公主,princess]\b[up,null]不要！！！",
        "\t[公主,princess]\b[up,null]就算你不动手！他也已经是将死之人了啊！至少让我陪他到最后一刻......这样残酷的宿命，我才不接受！",
        "\t[勇者,hero]\b[up,null]让开。",
        "\t[公主,princess]\b[up,null]不要！！！！",
        "\t[勇者,hero]\b[up,null]你以为我不会对你挥刀吗？",
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                5
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "animate",
            "name": "jianji",
            "loc": [
                6,
                7
            ]
        },
        "\t[公主,princess]\b[up,null]魔王！！！！",
        "\t[魔王,redKing]\b[up,null]没事，这点小伤......",
        "\t[魔王,redKing]\b[up,null]喂，我说啊......你根本就不是勇者。",
        "\t[魔王,redKing]\b[up,null]勇者是绝对不会对一个弱女子挥刀的。",
        "\t[魔王,redKing]\b[up,null]现在的你......只是一个迷失在杀戮深渊里的恶魔而已。",
        "\t[勇者,hero]\b[up,null]是又如何？你以为我会在乎？",
        "\t[勇者,hero]\b[up,null]为了救她，就算变成恶魔又怎么样？",
        "\t[魔王,redKing]\b[up,null]这样一来，我就更没有不跟你决战的理由了。",
        "\t[魔王,redKing]\b[up,null]我绝对不会让你这样的人成为这座魔塔的下一任魔王！",
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "battle",
            "loc": [
                6,
                7
            ]
        },
        {
            "type": "sleep",
            "time": 1000,
            "noSkip": true
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                2
            ]
        },
        "\t[魔王,redKing]\b[up,null]终于结束了。",
        "\t[魔王,redKing]\b[up,null]这具充溢着罪恶的身躯终于化为了尘土。",
        "\t[魔王,redKing]\b[up,null]这明明是最完美的结局，为什么你们都在流泪？",
        "\t[勇者,hero]\b[up,null]......",
        "\t[魔王,redKing]\b[up,null]快带这丫头回到她的故乡吧......这些天她真是差点把我折腾死。",
        "\t[魔王,redKing]\b[up,null]不过......跟她一起度过的这些日子，倒也是我这不怎么光彩的一生中最快乐的日子。",
        "\t[魔王,redKing]\b[up,null]就这样结束吧......再见了。",
        {
            "type": "sleep",
            "time": 1000,
            "noSkip": true
        },
        "\t[公主,princess]\b[up,null].....不要！不要消失啊！",
        "\t[公主,princess]\b[up,null]求求你......不要丢下我一个人！",
        "\t[公主,princess]\b[up,null]......为什么......为什么啊啊啊啊！",
        "\t[勇者,hero]\b[up,null]......",
        "\t[勇者,hero]\b[up,null]......公主大人，跟我回去吧。",
        "\t[勇者,hero]\b[up,null]大家都很担心你。",
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[公主,princess]\b[up,null]......",
        "\t[勇者,hero]\b[up,null]（她什么话都没有说，只是恶狠狠地瞪了我一眼。）",
        "\t[勇者,hero]\b[up,null]（这是我这辈子见识过的，最凶恶最苦大仇深的一瞪。）",
        "\t[勇者,hero]\b[up,null]（这感觉简直就像我是毁掉她一切的仇人，而不是把她从水深火热中解救出来的恩人一样。）",
        "\t[勇者,hero]\b[up,null]（然而这也是事实。）",
        "\t[勇者,hero]\b[up,null]（到头来，我彻底迷失了自我，失去了最爱的人。）",
        "\t[勇者,hero]\b[up,null]（我什么都没能拯救。）",
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "right:2"
            ]
        },
        "\t[勇者,hero]\b[up,null]公主大人！你想干什么？！",
        {
            "type": "move",
            "loc": [
                8,
                6
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "right:2"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                6
            ],
            "time": 20,
            "steps": [
                "down:6"
            ]
        },
        {
            "type": "playSound",
            "name": "pickaxe.mp3"
        },
        "\t[勇者,hero]\b[up,null]......",
        "\t[勇者,hero]\b[up,null]（竟然抱着魔王的尸体，跳了下去......）",
        "\t[勇者,hero]\b[up,null]（她宁愿死都不想回到那个让她伤心的国家。）",
        "\t[勇者,hero]\b[up,null]（我......究竟在做什么？）",
        "\t[勇者,hero]\b[up,null]......"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[暗妖精,N1584]勇者大人，魔塔马上就要倒塌了！！",
                "\t[勇者,hero]......",
                "\t[暗妖精,N1584]快拉着我的手！我会飞的！",
                "\t[勇者,hero]......嗯......",
                {
                    "type": "hideStatusBar"
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 800,
                    "keep": true
                },
                "魔塔，正如其字面意思，魔塔就是魔物修建的高塔。",
                "这座屹立百年的魔塔，终于在今天倒塌了。",
                "人类长久以来的敌对势力终于彻底灭绝。",
                "即便公主的尸体在魔塔废墟里被发现，举国上下的人民也开始了长达三天三夜的欢庆。",
                "国王为公主消香玉陨一事悲痛不已，不过他究竟是因为女儿的死还是与邻国联姻的取消而悲痛，我们不得而知。",
                "国王顽固地认为公主是被魔物逼死的，于是下令让军队将这个世界上所有残存的魔物屠杀殆尽。",
                "至于勇者，他的尸体没有在废墟里找到，没人知道他是死是活，也没有人知道他的下落。",
                "但也没有人会去刻意在意他这个小角色的死活。",
                "这个老套的故事就这样结束了，真是个皆大欢喜的结局啊。",
                {
                    "type": "sleep",
                    "time": 500,
                    "noSkip": true
                },
                "不是吗？",
                {
                    "type": "changeFloor",
                    "floorId": "END",
                    "loc": [
                        6,
                        11
                    ],
                    "direction": "up"
                },
                {
                    "type": "setCurtain",
                    "time": 800
                }
            ]
        },
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 500,
                    "speed": 10,
                    "power": 10
                },
                "\t[勇者,hero]......",
                "\t[勇者,hero]我绝对会拯救你的。",
                "\t[勇者,hero]哪怕付出这样的代价，我也不会后悔。",
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 500,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ],
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "6,0": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  1, 56,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  0],
    [  0,  0,  0,  1,  1,  1, 85,  1,  1,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,1584,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,132,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,245,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1, 88,  1,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "Resphoina.mp3"
}