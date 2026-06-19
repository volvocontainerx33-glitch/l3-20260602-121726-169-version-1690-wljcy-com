const MOVIE_SEARCH_DATA = [
    {
        "title": "邪恶力量第三季",
        "url": "./movies/movie-1.html",
        "cover": "./1.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖 / 奇幻 / 冒险",
        "category": "最新电视剧",
        "summary": "温彻斯特兄弟发现所有猎魔行动都指向一本失落的《死海古卷》，而抄写者竟是他们的母亲。",
        "tags": [
            "猎魔",
            "兄弟",
            "克苏鲁",
            "恶魔契约",
            "公路片"
        ]
    },
    {
        "title": "海鲜",
        "url": "./movies/movie-2.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "category": "亚洲精选",
        "summary": "一个海归硕士回家卖海鲜，却发现最大的对手是他亲爹。",
        "tags": [
            "小镇",
            "创业",
            "黑色幽默",
            "亲情",
            "方言"
        ]
    },
    {
        "title": "客厅里的松永先生",
        "url": "./movies/movie-3.html",
        "cover": "./3.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧， 爱情",
        "category": "家庭剧情",
        "summary": "毒舌又洁癖的广告精英松永，因故和邋遢的新人女职员开始了在同一屋檐下的职场与生活大战。",
        "tags": [
            "同居",
            "傲娇",
            "职场"
        ]
    },
    {
        "title": "花月佳期1995",
        "url": "./movies/movie-4.html",
        "cover": "./4.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "category": "热播剧集",
        "summary": "一对在婚礼上闹掰的新人，被算命先生一棍子打回前世，成了明朝青楼里被迫合作的花魁与书生。",
        "tags": [
            "穿越",
            "算命先生",
            "前世今生"
        ]
    },
    {
        "title": "魔偶魔影",
        "url": "./movies/movie-5.html",
        "cover": "./5.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "亚洲精选",
        "summary": "一个被人偶师废弃的古董人偶，每到月圆之夜就会自己移动位置，并带走一个观众。",
        "tags": [
            "人偶",
            "诅咒",
            "民俗怪谈"
        ]
    },
    {
        "title": "探监日记",
        "url": "./movies/movie-6.html",
        "cover": "./6.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，家庭",
        "category": "家庭剧情",
        "summary": "大学教授每周探访入狱的女儿，在透明的玻璃隔板两边，母女俩开始了一场迟来的对话。",
        "tags": [
            "监狱",
            "母女",
            "社会议题",
            "女性",
            "救赎"
        ]
    },
    {
        "title": "国民校草是女生·动态漫",
        "url": "./movies/movie-7.html",
        "cover": "./7.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "动态漫",
        "genre": "校园, 青春, 恋爱, 喜剧",
        "category": "家庭剧情",
        "summary": "人气校草的真实身份竟是女生，当秘密被死对头发现，一场啼笑皆非的恋爱博弈开始了。",
        "tags": [
            "女扮男装",
            "偶像",
            "甜宠",
            "反转"
        ]
    },
    {
        "title": "竞技场（一个荒谬的概念）",
        "url": "./movies/movie-8.html",
        "cover": "./8.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "欧美合拍",
        "type": "电影",
        "genre": "科幻 / 动作 / 讽刺喜剧",
        "category": "悬疑犯罪",
        "summary": "在未来，两位CEO为了抢夺流量，被迫穿上机甲在火星竞技场直播肉搏，谁输谁破产。",
        "tags": [
            "虚拟现实",
            "直播",
            "资本",
            "荒诞"
        ]
    },
    {
        "title": "古宝奇缘3之迷踪",
        "url": "./movies/movie-9.html",
        "cover": "./9.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "冒险, 喜剧",
        "category": "环球片库",
        "summary": "三个古董骗子被卷入一场跨国寻宝竞赛，却发现要找的汉代玉璧其实一直在自己背包里。",
        "tags": [
            "古董",
            "寻宝",
            "骗中骗",
            "跨国",
            "反转"
        ]
    },
    {
        "title": "苍穹之昴",
        "url": "./movies/movie-10.html",
        "cover": "./10.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 古装 / 科幻",
        "category": "爱情喜剧",
        "summary": "一群现代天体物理学家，通过量子通讯向风雨飘摇的晚清发送了来自未来的预警。",
        "tags": [
            "晚清",
            "平行时空",
            "历史改写",
            "天象"
        ]
    },
    {
        "title": "时光留声",
        "url": "./movies/movie-11.html",
        "cover": "./11.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "category": "环球片库",
        "summary": "一台老旧收音机让失意的青年能与20年前去世的父亲跨时空对话，却可能改变全家命运。",
        "tags": [
            "时空穿越",
            "老电台",
            "父子和解",
            "怀旧",
            "治愈"
        ]
    },
    {
        "title": "乐队来访",
        "url": "./movies/movie-12.html",
        "cover": "./12.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "以色列 / 法国",
        "type": "电影",
        "genre": "剧情 / 音乐 / 文艺",
        "category": "家庭剧情",
        "summary": "一支埃及警察乐团误入以色列沙漠深处小镇，借宿期间用音乐串起了八段破碎的人生。",
        "tags": [
            "沙漠",
            "误入",
            "文化碰撞",
            "孤独"
        ]
    },
    {
        "title": "男人四十上高中",
        "url": "./movies/movie-13.html",
        "cover": "./13.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国",
        "type": "Movie",
        "genre": "喜剧 / 励志",
        "category": "热播剧集",
        "summary": "四十岁老板破产后重回高中，发现班主任是自己儿子。",
        "tags": [
            "中年学渣",
            "高考重返",
            "父子同校",
            "应试讽刺",
            "热血中年"
        ]
    },
    {
        "title": "假日暖洋洋2",
        "url": "./movies/movie-14.html",
        "cover": "./14.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 家庭, 爱情",
        "category": "动作奇幻",
        "summary": "疫情后的第一个春节，一个东北大家族在筹备年夜饭时，意外揭开了三兄妹各自的秘密：离婚、失业、以及偷偷领养了一个孩子。",
        "tags": [
            "春节档",
            "东北",
            "返乡",
            "群像"
        ]
    },
    {
        "title": "指到谁谁就死",
        "url": "./movies/movie-15.html",
        "cover": "./15.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑、奇幻、校园",
        "category": "热播剧集",
        "summary": "高中女生在直播间玩“点指兵兵”游戏，被点到的人在24小时内必定意外身亡。",
        "tags": [
            "诅咒",
            "手指",
            "直播",
            "死亡游戏",
            "反转"
        ]
    },
    {
        "title": "月媚花娇",
        "url": "./movies/movie-16.html",
        "cover": "./16.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装 / 悬疑",
        "category": "家庭剧情",
        "summary": "她以色侍人，却以色杀人，宫中所有美人的胭脂水粉都出自她的手。",
        "tags": [
            "宫斗",
            "化妆品",
            "制药"
        ]
    },
    {
        "title": "楊八妹招親粤语",
        "url": "./movies/movie-17.html",
        "cover": "./17.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "古装 / 动作 / 喜剧",
        "category": "动作奇幻",
        "summary": "天波府杨八妹设擂招亲，打趴一百个才俊后，爱上了偷学武功的厨子。",
        "tags": [
            "粤语",
            "杨家将",
            "比武招亲",
            "巾帼"
        ]
    },
    {
        "title": "爱我给我一个家",
        "url": "./movies/movie-18.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭，都市，情感",
        "category": "动作奇幻",
        "summary": "一对再婚夫妻与三个性格迥异的孩子，在一栋即将被拆的老屋里被迫同住。",
        "tags": [
            "重组家庭",
            "继父母",
            "青春叛逆",
            "房屋拆迁"
        ]
    },
    {
        "title": "东京女子会",
        "url": "./movies/movie-19.html",
        "cover": "./19.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 女性 / 社会",
        "category": "家庭剧情",
        "summary": "七个来自不同阶层的东京女人每月一次“女子会”，酒醒后总会有一人彻底消失，而所有人都不记得她是谁。",
        "tags": [
            "女子会",
            "阶层",
            "友谊",
            "东京"
        ]
    },
    {
        "title": "女性：七十乘七",
        "url": "./movies/movie-20.html",
        "cover": "./20.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 女性",
        "category": "亚洲精选",
        "summary": "七个七十岁的法国老太太，决定宽恕一个毁掉她们青春的男人，每人宽恕七次。",
        "tags": [
            "群像",
            "宽恕",
            "圣经"
        ]
    },
    {
        "title": "朋友之间国语",
        "url": "./movies/movie-21.html",
        "cover": "./21.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "都市、友情",
        "category": "热播剧集",
        "summary": "五位曾经的大学配音社好友，二十年后因为要给同一部涩情游戏配音，再次聚首。",
        "tags": [
            "配音",
            "广播剧",
            "治愈",
            "职场",
            "中年危机"
        ]
    },
    {
        "title": "魔乳秘剑帖",
        "url": "./movies/movie-22.html",
        "cover": "./22.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作 / 奇幻 / 成人",
        "category": "经典回看",
        "summary": "在乳房被视为力量源泉的江户时代，一位女剑客为了夺回被窃的“秘奶”而踏上复仇之路。",
        "tags": [
            "剑戟片",
            "奇幻设定",
            "女性身材"
        ]
    },
    {
        "title": "镭射青春粤语",
        "url": "./movies/movie-23.html",
        "cover": "./23.jpg",
        "year": "1987",
        "yearNumber": 1987,
        "region": "中国香港",
        "type": "电影",
        "genre": "歌舞 / 剧情",
        "category": "热播剧集",
        "summary": "香港屋邨少年痴迷镭射舞曲，为了参加比赛不得不对抗古板的包租婆和黑社会。",
        "tags": [
            "怀旧",
            "Disco",
            "粤语",
            "励志"
        ]
    },
    {
        "title": "我的哥哥是独生子",
        "url": "./movies/movie-24.html",
        "cover": "./24.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情 / 历史",
        "category": "爱情喜剧",
        "summary": "在墨索里尼统治末期，一个法西斯家庭的弟弟加入共产党，与当法西斯军官的哥哥反目成仇。",
        "tags": [
            "兄弟",
            "法西斯",
            "共产党",
            "意大利",
            "政治分歧"
        ]
    },
    {
        "title": "枕边夺命人",
        "url": "./movies/movie-25.html",
        "cover": "./25.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑惊悚",
        "category": "悬疑犯罪",
        "summary": "新婚丈夫每晚都会梦见自己掐死妻子，第二天醒来，枕边人却安然无恙，直到他发现卧室的墙里埋着尸体。",
        "tags": [
            "精神分裂",
            "蛇蝎美人",
            "奇情",
            "双重人格"
        ]
    },
    {
        "title": "勃沙特的长征",
        "url": "./movies/movie-26.html",
        "cover": "./26.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史、战争",
        "category": "家庭剧情",
        "summary": "一位英国传教士意外跟随红军长征，从敌人变成了红军精神的见证者与传播者。",
        "tags": [
            "真实事件",
            "国际友人",
            "长征",
            "信仰",
            "人性"
        ]
    },
    {
        "title": "良宵血案",
        "url": "./movies/movie-27.html",
        "cover": "./27.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "环球片库",
        "summary": "除夕夜，大宅门里的团圆饭变成了一场无人能解的密室杀人案，凶手就在餐桌旁。",
        "tags": [
            "民国",
            "年夜饭",
            "暴风雪山庄",
            "伦理"
        ]
    },
    {
        "title": "康城恋曲",
        "url": "./movies/movie-28.html",
        "cover": "./28.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "最新电视剧",
        "summary": "两个中国留学生在法国康城的海边写下情书埋进沙里，约定十年后再来拆封，却各自被命运困在了原地。",
        "tags": [
            "异国",
            "错过",
            "文艺",
            "钢琴"
        ]
    },
    {
        "title": "不羁",
        "url": "./movies/movie-29.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春, 犯罪",
        "category": "亚洲精选",
        "summary": "1999年的南方小镇，四个高中生听了一盘崔健的磁带后，决定偷一辆车开去北京看演出。",
        "tags": [
            "90年代",
            "摇滚",
            "小镇青年",
            "出走"
        ]
    },
    {
        "title": "不羁的美女",
        "url": "./movies/movie-30.html",
        "cover": "./30.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "经典回看",
        "summary": "一个过气画家在乡下遇到野性少女，想以她为模特重返巅峰，却发现她才是真正“创作”他的人。",
        "tags": [
            "艺术家与缪斯",
            "自由与占有",
            "女性视角"
        ]
    },
    {
        "title": "全家就是庄家",
        "url": "./movies/movie-31.html",
        "cover": "./31.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、犯罪、家庭",
        "category": "亚洲精选",
        "summary": "退休老千帕特丽夏准备金盆洗手，却发现女儿偷偷把她家地下室改成了全社区最热闹的非法赌场，而第一个上门的客人正是警察局长。",
        "tags": [
            "地下赌场",
            "退休骗子",
            "母女关系",
            "诈欺游戏",
            "社区闹剧"
        ]
    },
    {
        "title": "恐怖分子的孩子",
        "url": "./movies/movie-32.html",
        "cover": "./32.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "叙利亚/美国",
        "type": "电影",
        "genre": "剧情、战争",
        "category": "亚洲精选",
        "summary": "一个8岁的男孩在恐怖组织训练营长大，被要求杀死“异教徒”父亲，直到他在废墟中发现一本童话书。",
        "tags": [
            "儿童",
            "洗脑",
            "反恐",
            "人性",
            "救赎"
        ]
    },
    {
        "title": "异次元杀阵2：超级立方体",
        "url": "./movies/movie-33.html",
        "cover": "./33.jpg",
        "year": "2002",
        "yearNumber": 2002,
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻惊悚",
        "category": "高清电影",
        "summary": "八个陌生人醒来时发现自己被困在一个无限延伸、无视物理法则的超立方体里，每一步都可能踏向死亡。",
        "tags": [
            "密室",
            "多维空间",
            "高概念",
            "心理恐惧"
        ]
    },
    {
        "title": "僵尸王归来",
        "url": "./movies/movie-34.html",
        "cover": "./34.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "香港",
        "type": "电影",
        "genre": "喜剧，恐怖，动作",
        "category": "高清电影",
        "summary": "一名不学无术的茅山弟子，为了还债居然把清朝僵尸王训练成快递员，却引来了一群杀手的围攻。",
        "tags": [
            "僵尸",
            "茅山术",
            "搞笑"
        ]
    },
    {
        "title": "完美伴侣",
        "url": "./movies/movie-35.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "category": "亚洲精选",
        "summary": "当你的AI伴侣开始暗示你配偶的死亡概率为99.9%，你会选择相信代码还是爱情？",
        "tags": [
            "AI伴侣",
            "反转",
            "婚姻心理",
            "黑镜风"
        ]
    },
    {
        "title": "在苍色世界的中心",
        "url": "./movies/movie-36.html",
        "cover": "./36.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作, 奇幻, 冒险",
        "category": "环球片库",
        "summary": "以最快速度穿越战场的少年，用游戏手柄操纵着神罚之力改写败局。",
        "tags": [
            "异世界",
            "少年漫",
            "像素风",
            "战争",
            "速度"
        ]
    },
    {
        "title": "10+10",
        "url": "./movies/movie-37.html",
        "cover": "./37.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，家庭",
        "category": "爱情喜剧",
        "summary": "一个十岁的数学神童，算出了下一期彩票号码，他告诉爱酗酒的爸爸：只能买十块钱的。",
        "tags": [
            "数学天才",
            "单亲爸爸",
            "彩票"
        ]
    },
    {
        "title": "尖端医疗的真相",
        "url": "./movies/movie-38.html",
        "cover": "./38.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电视剧",
        "genre": "医疗悬疑",
        "category": "家庭剧情",
        "summary": "一家宣称能治愈癌症的顶级医院，其昂贵的疗法背后，是在患者体内培育可收割的器官。",
        "tags": [
            "黑科技",
            "伦理",
            "财阀",
            "反转",
            "惊悚"
        ]
    },
    {
        "title": "你是我的毒玫瑰",
        "url": "./movies/movie-39.html",
        "cover": "./39.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 医患",
        "category": "爱情喜剧",
        "summary": "最讨厌过敏病人的皮肤科医生，偏偏遇见了对阳光、水和爱情都过敏的她。",
        "tags": [
            "毒舌医生",
            "过敏体质的病人",
            "冤家同居"
        ]
    },
    {
        "title": "温心港湾",
        "url": "./movies/movie-40.html",
        "cover": "./40.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情，家庭，社会",
        "category": "家庭剧情",
        "summary": "在宁波老外滩的一间24小时饺子馆里，老板娘通过一盘盘家常饺子，串联起深夜都市人的孤独与秘密。",
        "tags": [
            "深夜食堂",
            "治愈",
            "单元剧",
            "人间百态"
        ]
    },
    {
        "title": "恐龙特警",
        "url": "./movies/movie-41.html",
        "cover": "./41.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 科幻, 喜剧",
        "category": "环球片库",
        "summary": "基因复活的迅猛龙被训练成特警，和它的人类搭档一起，追捕一支使用灭绝动物基因作案的恐怖组织。",
        "tags": [
            "恐龙",
            "警匪",
            "克隆",
            "搭档"
        ]
    },
    {
        "title": "猛虎屠龙",
        "url": "./movies/movie-42.html",
        "cover": "./42.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 武侠",
        "category": "环球片库",
        "summary": "警方卧底在黑帮做到二把手，上头却命令他亲手杀掉同样卧底的大哥。",
        "tags": [
            "卧底",
            "帮派",
            "义气"
        ]
    },
    {
        "title": "芳心全蚀",
        "url": "./movies/movie-43.html",
        "cover": "./43.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "每当日食发生，两个不同时空的大学女生会在图书馆的同一张书桌前相遇，她们的通信改变着彼此的命运。",
        "tags": [
            "平行时空",
            "校园",
            "纯爱",
            "唯美"
        ]
    },
    {
        "title": "牛郎之路",
        "url": "./movies/movie-44.html",
        "cover": "./44.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 职业",
        "category": "环球片库",
        "summary": "一个负债累累的乡下青年进入歌舞伎町牛郎店，发现这一行拼的不是脸，是让人心甘情愿为你花钱的“术”。",
        "tags": [
            "牛郎",
            "歌舞伎町",
            "成长",
            "真实改编",
            "社会"
        ]
    },
    {
        "title": "杰赛普拍电影",
        "url": "./movies/movie-45.html",
        "cover": "./45.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，剧情",
        "category": "爱情喜剧",
        "summary": "穷困潦倒的导演杰赛普为了拍电影，把整个小镇的居民都骗进了他编织的谎言里。",
        "tags": [
            "独立电影",
            "小人物梦想",
            "片场风云",
            "讽刺幽默",
            "逆袭"
        ]
    },
    {
        "title": "死亡直播",
        "url": "./movies/movie-46.html",
        "cover": "./46.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑惊悚",
        "category": "动作奇幻",
        "summary": "过气主播为流量闯入废弃病院直播，却发现观众弹幕在指挥他杀人。",
        "tags": [
            "直播",
            "网络犯罪",
            "反转",
            "社会派"
        ]
    },
    {
        "title": "黑帮之境第二季",
        "url": "./movies/movie-47.html",
        "cover": "./47.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "电视剧",
        "genre": "犯罪 / 动作 / 剧情",
        "category": "最新电视剧",
        "summary": "卧底警察在第一季结尾暴露，第二季他必须在自己被追杀的同时保护黑帮老大的女儿。",
        "tags": [
            "黑帮",
            "卧底",
            "家族纷争"
        ]
    },
    {
        "title": "青春之杀人者",
        "url": "./movies/movie-48.html",
        "cover": "./48.jpg",
        "year": "1976",
        "yearNumber": 1976,
        "region": "日本",
        "type": "电影",
        "genre": "犯罪，剧情，伦理",
        "category": "热播剧集",
        "summary": "一个温顺的大学男孩，在一个寻常的下午，用一把刀刺向了正在午睡的父母。",
        "tags": [
            "日影经典",
            "无差别杀人",
            "家庭暴力",
            "社会派",
            "青春残酷物语"
        ]
    },
    {
        "title": "生化战警",
        "url": "./movies/movie-49.html",
        "cover": "./49.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "科幻动作",
        "category": "高清电影",
        "summary": "在病毒肆虐的隔离区，一支由半人半机械的“战警”组成的队伍，要找到解药并救出自己未被感染的战友。",
        "tags": [
            "近未来",
            "生化改造",
            "警察故事",
            "病毒危机",
            "废土美学"
        ]
    },
    {
        "title": "相忘于江湖",
        "url": "./movies/movie-50.html",
        "cover": "./50.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情 / 爱情 / 武侠",
        "category": "热播剧集",
        "summary": "十年前被灭门的刀客，发现仇人竟是自己每天买醉的酒馆里那位温柔寡言的老板娘。",
        "tags": [
            "江湖恩怨",
            "隐姓埋名",
            "酒馆老板娘",
            "复仇",
            "水墨美学"
        ]
    },
    {
        "title": "衣衫褴褛的罗尼",
        "url": "./movies/movie-51.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "印度",
        "type": "电视剧",
        "genre": "剧情 / 社会",
        "category": "悬疑犯罪",
        "summary": "一个从小在垃圾堆长大的男孩，靠捡来的书本自学成了全印度数学竞赛冠军。",
        "tags": [
            "拾荒者",
            "天才",
            "教育",
            "阶级"
        ]
    },
    {
        "title": "圣迹",
        "url": "./movies/movie-52.html",
        "cover": "./52.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "意大利/梵蒂冈",
        "type": "电影",
        "genre": "历史宗教悬疑",
        "category": "最新电视剧",
        "summary": "一座千年教堂地下发现了血骨，梵蒂冈派来的调查员竟是无神论者。",
        "tags": [
            "教会",
            "圣物",
            "考古",
            "信仰危机"
        ]
    },
    {
        "title": "海神号续集",
        "url": "./movies/movie-53.html",
        "cover": "./53.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作，灾难",
        "category": "环球片库",
        "summary": "海神号沉没十年后，一艘深海勘探船在残骸中发现断断续续的摩斯密码，来自船舱最深处。",
        "tags": [
            "沉船",
            "救援",
            "深海"
        ]
    },
    {
        "title": "亡灵故事",
        "url": "./movies/movie-54.html",
        "cover": "./54.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "恐怖, 奇幻, 悬疑",
        "category": "环球片库",
        "summary": "一个午夜电台连续播出“真实亡灵故事”，但每一期的讲述者都会在三日后离奇死亡。",
        "tags": [
            "都市传说",
            "鬼怪",
            "电台",
            "诅咒",
            "单元剧"
        ]
    },
    {
        "title": "我的会长大人",
        "url": "./movies/movie-55.html",
        "cover": "./55.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情, 喜剧, 校园",
        "category": "家庭剧情",
        "summary": "为了接近暗恋的会长，音乐社社长意外开启了全校追爱大作战。",
        "tags": [
            "校园",
            "暗恋",
            "音乐",
            "双向奔赴",
            "轻松"
        ]
    },
    {
        "title": "奔跑的少年",
        "url": "./movies/movie-56.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "运动励志",
        "category": "热播剧集",
        "summary": "孟买贫民窟一个靠偷窃为生的少年，被一位退役田径教练发现他有罕见的步频天赋，从而踏上国家锦标赛之路。",
        "tags": [
            "跑步",
            "贫民窟",
            "教练",
            "真实改编",
            "逆袭"
        ]
    },
    {
        "title": "贵族大盗",
        "url": "./movies/movie-57.html",
        "cover": "./57.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "英国",
        "type": "电影",
        "genre": "动作 / 喜剧 / 冒险",
        "category": "家庭剧情",
        "summary": "自诩贵族的艺术大盗莫里斯，在偷一幅画时意外卷入了一场关乎王室血脉的惊天阴谋。",
        "tags": [
            "怪盗",
            "英伦幽默",
            "文物走私"
        ]
    },
    {
        "title": "残缺格斗士",
        "url": "./movies/movie-58.html",
        "cover": "./58.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 剧情",
        "category": "最新电视剧",
        "summary": "独臂拳手与盲人搭档，在地底黑市打出一段用残缺拼凑完整的冠军之路。",
        "tags": [
            "格斗",
            "励志",
            "身体障碍",
            "逆袭",
            "社会底层"
        ]
    },
    {
        "title": "仙球大战",
        "url": "./movies/movie-59.html",
        "cover": "./59.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 运动",
        "category": "环球片库",
        "summary": "南宋末年，一支由少林寺伙房僧、丐帮叫花子和宫中太监组成的蹴鞠队，要对抗脚法如神的外星人侵略者。",
        "tags": [
            "蹴鞠",
            "外星人",
            "抗蒙",
            "无厘头"
        ]
    },
    {
        "title": "关键战役",
        "url": "./movies/movie-60.html",
        "cover": "./60.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "战争 / 历史",
        "category": "最新电视剧",
        "summary": "伊拉克战场一支被包围的海豹突击队，必须在敌我悬殊的情况下守住一栋摇摇欲坠的民房。",
        "tags": [
            "真实事件",
            "战术",
            "兄弟情"
        ]
    },
    {
        "title": "小捣蛋闹翻天",
        "url": "./movies/movie-61.html",
        "cover": "./61.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "美国",
        "type": "电影 / 儿童",
        "genre": "喜剧 / 家庭",
        "category": "悬疑犯罪",
        "summary": "乐天、路奇和米克因为在学校门口派发“校长假发被风吹走”的P图照片被开除出童子军。他们不服气，决定用一场史无前例的恶作剧来证明“捣蛋也是一种才华”。他们计划在周末的全镇庆典上，让镇长在演讲时“飞”起来——用气球和滑轮系统。…",
        "tags": [
            "童子军",
            "恶作剧",
            "夏令营",
            "两代和解"
        ]
    },
    {
        "title": "关于我们的爱情",
        "url": "./movies/movie-62.html",
        "cover": "./62.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "家庭剧情",
        "summary": "五十岁的安娜翻出三十年前的日记，决定去找那个只陪她走过一星期的男孩。",
        "tags": [
            "回忆录",
            "错过",
            "巴黎",
            "中年之爱"
        ]
    },
    {
        "title": "冒牌总统",
        "url": "./movies/movie-63.html",
        "cover": "./63.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情，喜剧，政治",
        "category": "热播剧集",
        "summary": "一名不得志的演员被CIA选中，成为昏迷总统的替身，却在背台词时发现剧本里藏着刺杀外国元首的秘密。",
        "tags": [
            "替身",
            "白宫",
            "阴谋论",
            "黑色幽默"
        ]
    },
    {
        "title": "血斗淑女",
        "url": "./movies/movie-64.html",
        "cover": "./64.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作、历史、复仇",
        "category": "热播剧集",
        "summary": "大正时代，一位没落贵族千金放下和扇拿起太刀，在社交舞会上向灭门仇人递出决斗书。",
        "tags": [
            "女武士",
            "大正时代",
            "剑斗",
            "家族恩怨",
            "华丽暴力"
        ]
    },
    {
        "title": "凶弹",
        "url": "./movies/movie-65.html",
        "cover": "./65.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "动作, 科幻, 悬疑",
        "category": "环球片库",
        "summary": "一颗能篡改过去的子弹射杀了总统，只有那个被嫁祸的狙击手能看到下一次“修正”。",
        "tags": [
            "时间循环",
            "狙击手",
            "政治阴谋",
            "硬核枪战",
            "烧脑"
        ]
    },
    {
        "title": "街头舞王",
        "url": "./movies/movie-66.html",
        "cover": "./66.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "电影",
        "genre": "歌舞 / 剧情",
        "category": "最新电视剧",
        "summary": "一个残疾少年用轮椅跳出惊人舞步，挑战街头舞王头衔，顺便找回失踪的哥哥。",
        "tags": [
            "街舞",
            "贫民窟",
            "梦想"
        ]
    },
    {
        "title": "金色农家",
        "url": "./movies/movie-67.html",
        "cover": "./67.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 农村",
        "category": "经典回看",
        "summary": "大城市金牌投资人跌回东北老家，发现全村的希望都押在了一头会算数的猪身上。",
        "tags": [
            "乡村振兴",
            "东北喜剧",
            "返乡创业",
            "群像"
        ]
    },
    {
        "title": "臭屁王",
        "url": "./movies/movie-68.html",
        "cover": "./68.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 家庭 / 运动",
        "category": "环球片库",
        "summary": "一个被全校取笑的少年，靠一项“臭到能驱敌”的意外技能，带着杂牌队伍杀进社区联赛决赛。",
        "tags": [
            "校园闹剧",
            "少年成长",
            "社区篮球",
            "离谱发明",
            "反差搞笑"
        ]
    },
    {
        "title": "永生战士2",
        "url": "./movies/movie-69.html",
        "cover": "./69.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 科幻， 超级英雄",
        "category": "悬疑犯罪",
        "summary": "无法死去的雇佣兵凯恩，这次接到的任务是保护一个也能“永生”的小女孩——而追杀她的，是凯恩自己的创造者。",
        "tags": [
            "不死身",
            "雇佣兵",
            "续集",
            "反英雄",
            "暴力美学"
        ]
    },
    {
        "title": "卡维尔护士",
        "url": "./movies/movie-70.html",
        "cover": "./70.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 比利时",
        "type": "电影",
        "genre": "传记 / 战争",
        "category": "热播剧集",
        "summary": "一战期间，一位英国护士在比利时救出200多名盟军士兵，最终死在行刑队枪下。",
        "tags": [
            "一战",
            "女护士",
            "英雄",
            "救援",
            "牺牲"
        ]
    },
    {
        "title": "姐弟恋",
        "url": "./movies/movie-71.html",
        "cover": "./71.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 家庭",
        "category": "家庭剧情",
        "summary": "三十九岁女高管爱上小十一岁的助理，被全家人围剿后，她反而活得比谁都年轻。",
        "tags": [
            "年龄差",
            "催婚",
            "职场",
            "治愈"
        ]
    },
    {
        "title": "史酷比！亲吻乐团收妖记",
        "url": "./movies/movie-72.html",
        "cover": "./72.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "动画电影",
        "genre": "动画 / 喜剧 / 悬疑",
        "category": "爱情喜剧",
        "summary": "神秘公司帮受邀参加摇滚音乐节，却发现每支乐队表演完都会离奇消失。",
        "tags": [
            "跨界",
            "摇滚",
            "冒险",
            "真相反转"
        ]
    },
    {
        "title": "古镇凶灵之巫咒缠身",
        "url": "./movies/movie-73.html",
        "cover": "./73.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "亚洲精选",
        "summary": "一名民俗学者在湘西古镇录到一段神秘咒语，此后同行者开始按照百年前巫书上的顺序逐一惨死。",
        "tags": [
            "民俗恐怖",
            "巫术诅咒",
            "古镇"
        ]
    },
    {
        "title": "衰鬼刑警",
        "url": "./movies/movie-74.html",
        "cover": "./74.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作 / 灵异",
        "category": "高清电影",
        "summary": "全警局最倒霉的刑警，搭档是八百年前被冤枉死的前朝捕快。",
        "tags": [
            "鬼魂搭档",
            "无厘头",
            "破案",
            "港味"
        ]
    },
    {
        "title": "垮掉的一代",
        "url": "./movies/movie-75.html",
        "cover": "./75.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国台湾",
        "type": "电影",
        "genre": "青春 / 剧情 / 文艺",
        "category": "热播剧集",
        "summary": "当一群被学校和家庭同时放弃的年轻人决定组成地下乐队时，他们才发现，真正拖垮自己的不是失败，而是对未来彻底不敢相信。",
        "tags": [
            "边缘青年",
            "朋克文化",
            "城市失速",
            "迷惘成长",
            "代际冲突"
        ]
    },
    {
        "title": "忘不了的脸孔",
        "url": "./movies/movie-76.html",
        "cover": "./76.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑惊悚",
        "category": "爱情喜剧",
        "summary": "一个患有“脸盲症”的画家是连环杀人案的唯一目击者，她记不住凶手的脸，却能画出他灵魂的样子。",
        "tags": [
            "脸盲症",
            "连环杀手",
            "目击",
            "逆转"
        ]
    },
    {
        "title": "危险警告",
        "url": "./movies/movie-77.html",
        "cover": "./77.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国香港",
        "type": "电影",
        "genre": "惊悚 / 灾难 / 社会",
        "category": "动作奇幻",
        "summary": "台风登陆前两小时，社工发现一栋唐楼的裂缝在扩大，但楼上十二户人家没有一户愿意撤离。",
        "tags": [
            "台风夜",
            "旧楼坍塌",
            "预警疏忽",
            "钉子户对峙",
            "实时叙事"
        ]
    },
    {
        "title": "从你的全世界路过",
        "url": "./movies/movie-78.html",
        "cover": "./78.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国内地",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "亚洲精选",
        "summary": "一档深夜电台节目串联起三对男女的爱情故事，DJ 说“如果你从别人的世界路过，就别再回头了”。",
        "tags": [
            "文艺",
            "电台",
            "伤感"
        ]
    },
    {
        "title": "质量效应：迷途楷模",
        "url": "./movies/movie-79.html",
        "cover": "./79.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "美国",
        "type": "电影 / 动画",
        "genre": "科幻 / 动作 / 冒险",
        "category": "环球片库",
        "summary": "赛伯鲁斯组织的一名精英特工在调查失踪事件时，发现实验性武器失控将吞噬整个星系。",
        "tags": [
            "游戏改编",
            "星际战争",
            "幽灵特工",
            "牺牲与背叛",
            "宏大叙事"
        ]
    },
    {
        "title": "烈日之下",
        "url": "./movies/movie-80.html",
        "cover": "./80.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 悬疑",
        "category": "环球片库",
        "summary": "为了抓捕毒枭，他不得不亲手将最好的兄弟送进监狱，直到烈日揭开所有谎言。",
        "tags": [
            "缉毒",
            "卧底",
            "兄弟情",
            "人性拷问"
        ]
    },
    {
        "title": "黑板森林",
        "url": "./movies/movie-81.html",
        "cover": "./81.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "category": "高清电影",
        "summary": "一个乡村小学仅剩的七个学生，发现用老师留下的彩色粉笔画出的东西，第二天会变成真的。",
        "tags": [
            "留守儿童",
            "乡村教育",
            "超现实",
            "粉笔",
            "想象力"
        ]
    },
    {
        "title": "空中监狱",
        "url": "./movies/movie-82.html",
        "cover": "./82.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "动作/惊悚",
        "category": "悬疑犯罪",
        "summary": "一架押送全美最危险囚犯的波音747被劫持，空警发现策划者竟然是驾驶舱里的机长。",
        "tags": [
            "越狱",
            "飞行器",
            "高空劫持"
        ]
    },
    {
        "title": "勇者斗恶龙 你的故事",
        "url": "./movies/movie-83.html",
        "cover": "./83.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻 / 冒险 / 游戏改编",
        "category": "热播剧集",
        "summary": "当经典RPG剧情被彻底颠覆，玩家发现：这个勇者故事其实是父亲留给儿子的加密遗书。",
        "tags": [
            "勇者",
            "怀旧",
            "meta叙事",
            "亲情"
        ]
    },
    {
        "title": "最毒妇人心",
        "url": "./movies/movie-84.html",
        "cover": "./84.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "category": "经典回看",
        "summary": "养老院里四个老太太联手杀了一个护工，警方发现，她们每个人都曾经是被他盯上的“猎物”。",
        "tags": [
            "复仇",
            "女性群像",
            "反转"
        ]
    },
    {
        "title": "终极蜘蛛侠第三季",
        "url": "./movies/movie-85.html",
        "cover": "./85.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "动画剧集",
        "genre": "超级英雄, 动作, 社会隐喻",
        "category": "动作奇幻",
        "summary": "新一季里蜘蛛侠不再只打架，他面对的是“英雄积分制”体系，最终在城市高空上选择公开删号，让人们重写何为英雄、谁有资格被拯救。",
        "tags": [
            "平行蛛网",
            "英雄制度",
            "社区自治",
            "科技伦理",
            "青少年成长"
        ]
    },
    {
        "title": "女超人第一季",
        "url": "./movies/movie-86.html",
        "cover": "./86.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "超级英雄电视剧",
        "genre": "超级英雄, 剧情, 青春",
        "category": "高清电影",
        "summary": "她以快递员身份在洛城送餐时救下受害者，却发现每一次飞跃都在拆解父辈留给她的沉默契约，城市的第一位女超人成了必须在正义与家庭名誉间做抉择的普通女孩。",
        "tags": [
            "女权觉醒",
            "城市阴影",
            "双重身份",
            "代际冲突",
            "社区英雄"
        ]
    },
    {
        "title": "丛林精神",
        "url": "./movies/movie-87.html",
        "cover": "./87.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "巴西 / 美国",
        "type": "电影",
        "genre": "动画、冒险、奇幻",
        "category": "热播剧集",
        "summary": "亚马逊部落最后一个能听见“丛林低语”的女孩，必须唤醒沉睡的图腾巨兽来对抗森林砍伐。",
        "tags": [
            "亚马逊神话",
            "图腾觉醒",
            "环保寓言",
            "少女成长",
            "南美画风"
        ]
    },
    {
        "title": "扫毒风暴2025",
        "url": "./movies/movie-88.html",
        "cover": "./88.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 犯罪 / 警匪",
        "category": "高清电影",
        "summary": "新型合成毒品“快乐水”席卷夜店，卧底警察发现贩毒网络的真正头目竟是三年前的殉职同事。",
        "tags": [
            "硬核缉毒",
            "卧底无间道",
            "新型毒品",
            "东南亚取景",
            "枪战爆破"
        ]
    },
    {
        "title": "莫斯科行动2018",
        "url": "./movies/movie-89.html",
        "cover": "./89.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "俄罗斯, 中国大陆",
        "type": "电影",
        "genre": "动作, 犯罪",
        "category": "爱情喜剧",
        "summary": "为了抓捕在跨国列车上洗劫乘客的悍匪，中国警方首次在莫斯科展开地下追击。",
        "tags": [
            "跨国追捕",
            "倒爷",
            "火车大劫案",
            "硬汉"
        ]
    },
    {
        "title": "警察故事2013粤语",
        "url": "./movies/movie-90.html",
        "cover": "./90.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "category": "爱情喜剧",
        "summary": "退休谈判专家为救叛逆女儿被关入废弃商场，却发现绑匪的目标并非赎金，而是当年冤案的真凶。",
        "tags": [
            "警匪",
            "硬核动作",
            "密室",
            "谈判",
            "成龙风格"
        ]
    },
    {
        "title": "驱魔修女：蛊毒",
        "url": "./movies/movie-91.html",
        "cover": "./91.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "法国 / 美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 灵异",
        "category": "悬疑犯罪",
        "summary": "当一所封闭修道院里接连出现失语、幻听与自残事件时，唯一能解开的，不是祷告，而是一段被蛊毒缠住的旧罪。",
        "tags": [
            "修道院",
            "黑暗仪式",
            "蛊毒",
            "信仰崩塌",
            "密室追凶"
        ]
    },
    {
        "title": "忌廉沟师奶",
        "url": "./movies/movie-92.html",
        "cover": "./92.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "家庭剧情",
        "summary": "屋邨里五个师奶因为一盒被偷吃的忌廉蛋糕，牵扯出二十年前的黄金劫案秘密。",
        "tags": [
            "市井",
            "师奶",
            "甜品",
            "邻里"
        ]
    },
    {
        "title": "奶爸的爱情生活",
        "url": "./movies/movie-93.html",
        "cover": "./93.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国",
        "type": "剧集",
        "genre": "喜剧 / 家庭",
        "category": "亚洲精选",
        "summary": "失业后被逼当全职奶爸的IT男，在小区妈妈群里直播带娃，意外成了网红和三个女人的追求目标。",
        "tags": [
            "全职奶爸",
            "中年危机",
            "邻里关系",
            "轻喜剧"
        ]
    },
    {
        "title": "城市猎人",
        "url": "./movies/movie-94.html",
        "cover": "./94.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电影",
        "genre": "动作、喜剧、犯罪",
        "category": "高清电影",
        "summary": "新宿最色又最强的私家侦探冴羽獠，保护一名女歌手时发现仇家是前搭档。",
        "tags": [
            "私家侦探",
            "新宿",
            "犯罪都市",
            "搭档"
        ]
    },
    {
        "title": "锯（电影）",
        "url": "./movies/movie-95.html",
        "cover": "./95.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "日本",
        "type": "惊悚动作电影",
        "genre": "心理惊悚, 动作, 犯罪",
        "category": "悬疑犯罪",
        "summary": "废弃地下剧场里一档“审判直播”重启了十年前的案件，周瑜与前刑警穿越一间间密室做抉择，越往里走越接近“谁在替谁被判死刑”的核心。",
        "tags": [
            "生存游戏",
            "机械地标",
            "道德审判",
            "直播审讯"
        ]
    },
    {
        "title": "手铐情人",
        "url": "./movies/movie-96.html",
        "cover": "./96.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情, 犯罪, 喜剧",
        "category": "经典回看",
        "summary": "女警为了抓捕盗窃世家独子，假装与他恋爱，结果被他用手铐铐在一起，被迫开始了24小时同居。",
        "tags": [
            "警察与小偷",
            "强制同居",
            "真假感情"
        ]
    },
    {
        "title": "男人不可以穷",
        "url": "./movies/movie-97.html",
        "cover": "./97.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情励志",
        "category": "环球片库",
        "summary": "一名信奉“金钱至上”的金融诈骗犯入狱后，被迫与信奉“清贫是美德”的穷酸父亲同住一间牢房，展开价值观撕扯。",
        "tags": [
            "底层挣扎",
            "父子矛盾",
            "价值观碰撞"
        ]
    },
    {
        "title": "断线",
        "url": "./movies/movie-98.html",
        "cover": "./98.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、科技、惊悚",
        "category": "亚洲精选",
        "summary": "全球社交媒体同时崩溃三天，七位不同国家的年轻人手机断网，却发现自己身边发生了和暗网直播里一模一样的谋杀。",
        "tags": [
            "网络失联",
            "暗网",
            "青少年",
            "直播",
            "群体恐慌"
        ]
    },
    {
        "title": "市集街之旅",
        "url": "./movies/movie-99.html",
        "cover": "./99.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "土耳其",
        "type": "电影",
        "genre": "剧情、家庭、公路",
        "category": "动作奇幻",
        "summary": "叛逆女儿陪固执父亲穿越伊斯坦布尔迷宫般的大巴扎，只为寻找一张只存在于传说中的手工地毯。",
        "tags": [
            "伊斯坦布尔",
            "大巴扎",
            "父女",
            "遗产",
            "地毯商人"
        ]
    },
    {
        "title": "二子开店",
        "url": "./movies/movie-100.html",
        "cover": "./100.jpg",
        "year": "1987",
        "yearNumber": 1987,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "动作奇幻",
        "summary": "待业青年二子和哥们儿开了一家“比家美”小客店，结果来的客人一个比一个奇葩。",
        "tags": [
            "陈佩斯",
            "个体户",
            "创业",
            "北京",
            "父子"
        ]
    },
    {
        "title": "踉跄女孩",
        "url": "./movies/movie-101.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情, 青春",
        "category": "经典回看",
        "summary": "被诊断将失去行走能力的少女，选择用最后三个月站上滑板，完成一个不可能的动作。",
        "tags": [
            "小脑萎缩",
            "滑板",
            "永不放弃"
        ]
    },
    {
        "title": "乐咒",
        "url": "./movies/movie-102.html",
        "cover": "./102.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "惊悚, 悬疑",
        "category": "热播剧集",
        "summary": "一首听完就会自杀的禁曲流传校园，音乐天才却发现这是别人向他发出的求救信号。",
        "tags": [
            "声音诅咒",
            "校园怪谈",
            "反向恐怖"
        ]
    },
    {
        "title": "红磨坊",
        "url": "./movies/movie-103.html",
        "cover": "./103.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国",
        "type": "电影",
        "genre": "歌舞, 爱情, 剧情",
        "category": "环球片库",
        "summary": "红磨坊台柱舞女爱上穷诗人，但夜总会老板逼她嫁给有权有势的公爵。",
        "tags": [
            "康康舞",
            "巴黎",
            "夜总会",
            "悲剧爱情"
        ]
    },
    {
        "title": "谜之夏日祭",
        "url": "./movies/movie-104.html",
        "cover": "./104.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑，奇幻，青春",
        "category": "经典回看",
        "summary": "每年夏日祭都会失踪一人，今年轮到我了，却发现失踪的人正在祭典上笑着对我招手。",
        "tags": [
            "小镇",
            "祭典",
            "时间循环",
            "友情"
        ]
    },
    {
        "title": "鲸鱼马戏团",
        "url": "./movies/movie-105.html",
        "cover": "./105.jpg",
        "year": "2000",
        "yearNumber": 2000,
        "region": "匈牙利 / 法国",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 艺术",
        "category": "动作奇幻",
        "summary": "一座小镇来了一个巨鲸尸体做的马戏团，全镇陷入癫狂，只有一个小女孩想救赎它。",
        "tags": [
            "黑白寓言",
            "末日氛围",
            "贝拉·塔尔"
        ]
    },
    {
        "title": "南提洛的夏日时光",
        "url": "./movies/movie-106.html",
        "cover": "./106.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "最新电视剧",
        "summary": "一个被解雇的华尔街精英搬到意大利南提洛苹果园，与当地一个固执的果农相爱了。",
        "tags": [
            "意大利",
            "夏日",
            "疗愈",
            "文艺",
            "同性"
        ]
    },
    {
        "title": "我，你，他，她",
        "url": "./movies/movie-107.html",
        "cover": "./107.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 伦理 / 文艺",
        "category": "爱情喜剧",
        "summary": "巴黎一间公寓里，四个房客在不同排列组合中相爱，却收到一封写着“你们中有一个是杀手”的匿名信。",
        "tags": [
            "多角关系",
            "性别",
            "身份认同",
            "开放关系",
            "巴黎"
        ]
    },
    {
        "title": "假面骑士亚极陀",
        "url": "./movies/movie-108.html",
        "cover": "./108.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "日本",
        "type": "剧集",
        "genre": "特摄 / 动作 / 悬疑 / 科幻",
        "category": "最新电视剧",
        "summary": "拥有超复原能力的青年因失忆而流浪，他不仅要对抗怪物，还要揭开自己正是“光明之力”选中的弑神者这一真相。",
        "tags": [
            "假面骑士",
            "平成二期",
            "进化",
            "失忆",
            "神之战"
        ]
    },
    {
        "title": "邀请",
        "url": "./movies/movie-109.html",
        "cover": "./109.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国",
        "type": "电影",
        "genre": "恐怖, 悬疑, 哥特",
        "category": "经典回看",
        "summary": "一名落魄女子被卷入英国贵族的奢华婚礼，却发现整个家族都在等待她的“加入”。",
        "tags": [
            "吸血鬼",
            "庄园",
            "婚宴",
            "家族秘密",
            "永生"
        ]
    },
    {
        "title": "班恩回家",
        "url": "./movies/movie-110.html",
        "cover": "./110.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "环球片库",
        "summary": "瘾君子儿子突然回家过圣诞，母亲用二十四小时拼命守护他不再坠入深渊。",
        "tags": [
            "戒毒",
            "母子",
            "回家路",
            "平安夜",
            "催泪"
        ]
    },
    {
        "title": "纽约，我爱你",
        "url": "./movies/movie-111.html",
        "cover": "./111.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "爱情 / 都市 / 单元剧",
        "category": "家庭剧情",
        "summary": "十位互不相识的纽约客在同一天的不同地点说出“我爱你”，但所有人都没得到回应。",
        "tags": [
            "纽约",
            "群像",
            "拼图式叙事",
            "孤独"
        ]
    },
    {
        "title": "伦敦承受的起",
        "url": "./movies/movie-112.html",
        "cover": "./112.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 惊悚 / 政治",
        "category": "环球片库",
        "summary": "为了阻止一场必死的恐袭，政府授权 AI 监控每一个公民，代价是每周错杀一个无辜者。",
        "tags": [
            "反恐",
            "道德困境",
            "监听",
            "高压政治"
        ]
    },
    {
        "title": "机动部队—伙伴",
        "url": "./movies/movie-113.html",
        "cover": "./113.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、犯罪",
        "category": "悬疑犯罪",
        "summary": "卧底警员与黑帮死敌被迫联手，却发现自己效忠的“正义”早已腐朽。",
        "tags": [
            "卧底",
            "兄弟情",
            "枪战"
        ]
    },
    {
        "title": "野草闲花",
        "url": "./movies/movie-114.html",
        "cover": "./114.jpg",
        "year": "1930",
        "yearNumber": 1930,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 爱情, 默片",
        "category": "亚洲精选",
        "summary": "富家少爷与卖花女的爱情，在战火与世俗偏见中如野草般顽强又脆弱。",
        "tags": [
            "阶级差异",
            "悲剧美学",
            "阮玲玉风格",
            "经典重构"
        ]
    },
    {
        "title": "布鲁克斯先生",
        "url": "./movies/movie-115.html",
        "cover": "./115.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚， 犯罪， 剧情",
        "category": "热播剧集",
        "summary": "一个备受尊敬的商界精英，同时也是嗜血成性的连环杀手，当有人开始模仿他时，完美的双面人生开始崩塌。",
        "tags": [
            "双重人格",
            "连环杀手",
            "富商",
            "心理战",
            "优雅犯罪"
        ]
    },
    {
        "title": "不要公开你的秘密",
        "url": "./movies/movie-116.html",
        "cover": "./116.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 惊悚, 剧情",
        "category": "经典回看",
        "summary": "一个匿名App入驻大学，专门曝光师生的匿名爆料，直到有人被“公开处刑”。",
        "tags": [
            "社交媒体",
            "隐私",
            "熟人社会",
            "复仇"
        ]
    },
    {
        "title": "阿齐兹·安萨里：此时此刻",
        "url": "./movies/movie-117.html",
        "cover": "./117.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "脱口秀/单人喜剧",
        "genre": "喜剧",
        "category": "高清电影",
        "summary": "当他站在空荡荡的舞台上，才意识到最该嘲笑的对象其实是镜子里的自己。",
        "tags": [
            "脱口秀",
            "人生哲理",
            "幽默",
            "犀利",
            "现场喜剧"
        ]
    },
    {
        "title": "疯狗强尼",
        "url": "./movies/movie-118.html",
        "cover": "./118.jpg",
        "year": "2008",
        "yearNumber": 2008,
        "region": "法国 / 科特迪瓦",
        "type": "电影",
        "genre": "剧情 / 战争",
        "category": "环球片库",
        "summary": "一个被叛军绑架的15岁男孩，在三个月内变成杀人不眨眼的“疯狗强尼”。",
        "tags": [
            "童兵",
            "非洲",
            "残酷青春",
            "暴力美学"
        ]
    },
    {
        "title": "色欲彩虹岛",
        "url": "./movies/movie-119.html",
        "cover": "./119.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 情色 / 悬疑",
        "category": "最新电视剧",
        "summary": "七个陌生人受邀来到一座与世隔绝的彩虹岛，被告知谁能活到最后就能得到十亿日元，欲望让他们互相残杀。",
        "tags": [
            "粉红电影",
            "孤岛",
            "贪婪",
            "人性实验"
        ]
    },
    {
        "title": "街舞营业中",
        "url": "./movies/movie-120.html",
        "cover": "./120.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺 / 纪录片",
        "genre": "歌舞 / 真人秀",
        "category": "悬疑犯罪",
        "summary": "镜头对准街舞综艺幕后的编舞师、替补和伴舞，舞台上的高光一分钟，台下是十年的地下室和止痛药。",
        "tags": [
            "街舞",
            "幕后",
            "舞者生存",
            "炸裂"
        ]
    },
    {
        "title": "牛仔大战恐龙",
        "url": "./movies/movie-121.html",
        "cover": "./121.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 西部",
        "category": "高清电影",
        "summary": "十九世纪西部小镇遭时空裂缝涌出的恐龙群围攻，赏金猎人不得不与印第安巫师联手布阵。",
        "tags": [
            "穿越",
            "枪战",
            "古生物",
            "B级片"
        ]
    },
    {
        "title": "时尚先锋香奈儿",
        "url": "./movies/movie-122.html",
        "cover": "./122.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "传记 / 剧情",
        "category": "家庭剧情",
        "summary": "在成为传奇之前，她只是一个被修道院遗弃的孤女，用剪刀和针线对抗整个上流社会。",
        "tags": [
            "时尚",
            "女性觉醒",
            "巴黎",
            "设计",
            "逆袭"
        ]
    },
    {
        "title": "闯入者",
        "url": "./movies/movie-123.html",
        "cover": "./123.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚, 剧情",
        "category": "最新电视剧",
        "summary": "独居女主播家中惊现陌生男人的生活痕迹，报警后警察却说：东西是他买的，房子也是他的。",
        "tags": [
            "心理惊悚",
            "入室盗窃",
            "反杀",
            "密闭空间"
        ]
    },
    {
        "title": "主厨的餐桌第七季",
        "url": "./movies/movie-124.html",
        "cover": "./124.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "综艺 / 纪录片",
        "genre": "纪录片 / 美食",
        "category": "亚洲精选",
        "summary": "镜头离开米其林餐厅，对准全球六位路边摊“庶民厨神”，讲述街头美食的尊严与温度。",
        "tags": [
            "美食",
            "街头",
            "人文",
            "治愈"
        ]
    },
    {
        "title": "机动警察剧场版1",
        "url": "./movies/movie-125.html",
        "cover": "./125.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "日本",
        "type": "剧场版动画",
        "genre": "科幻， 警匪， 政治",
        "category": "最新电视剧",
        "summary": "东京湾巨型海蚁肆虐，特车二课发现背后竟牵扯到军方禁忌的人工智能阴谋。",
        "tags": [
            "机甲",
            "反乌托邦",
            "悬疑",
            "社会讽刺"
        ]
    },
    {
        "title": "巴黎爱漫游",
        "url": "./movies/movie-126.html",
        "cover": "./126.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "category": "经典回看",
        "summary": "一名失意插画师在巴黎错拿U盘，循着里面的漫画地图展开一场荒诞寻爱之旅。",
        "tags": [
            "旅行",
            "邂逅",
            "治愈",
            "手绘插画"
        ]
    },
    {
        "title": "刘老根5",
        "url": "./movies/movie-127.html",
        "cover": "./127.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 乡村",
        "category": "最新电视剧",
        "summary": "龙泉沟的旅游业刚有起色，一场“毒蘑菇”风波却让刘老根的“山庄帝国”面临毁灭性打击。",
        "tags": [
            "续作",
            "农村",
            "创业",
            "喜剧元素"
        ]
    },
    {
        "title": "四驱兄弟第二季",
        "url": "./movies/movie-128.html",
        "cover": "./128.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "动画, 竞技",
        "category": "爱情喜剧",
        "summary": "星马兄弟十年后再战世界杯，但这次对手的车上装载了会“咬人”的AI芯片。",
        "tags": [
            "热血",
            "童年回归",
            "迷你四驱",
            "科技升级"
        ]
    },
    {
        "title": "便当店的款待第二季",
        "url": "./movies/movie-129.html",
        "cover": "./129.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 美食 / 治愈",
        "category": "最新电视剧",
        "summary": "北海道小城便当店老板，每晚只做一份“陌生人便当”，用食物缝合失恋、乡愁与告别。",
        "tags": [
            "便当",
            "人情",
            "北海道",
            "单元剧",
            "温暖"
        ]
    },
    {
        "title": "天剑",
        "url": "./movies/movie-130.html",
        "cover": "./130.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装, 武侠",
        "category": "家庭剧情",
        "summary": "天下第一铸剑师被灭门，唯一的女儿背负废铁“天剑”，踏上了一条以血还血的复仇之路。",
        "tags": [
            "铸剑",
            "复仇",
            "江湖",
            "写实打斗"
        ]
    },
    {
        "title": "脱线世界",
        "url": "./movies/movie-131.html",
        "cover": "./131.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 喜剧 / 动画",
        "category": "爱情喜剧",
        "summary": "一个修理平行宇宙电视信号的技术员，每天都要处理各种离谱世界里的“剧情穿帮”故障。",
        "tags": [
            "多元宇宙",
            "脑洞大开",
            "单元剧",
            "成人动画"
        ]
    },
    {
        "title": "人偶师",
        "url": "./movies/movie-132.html",
        "cover": "./132.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "犯罪悬疑电影",
        "genre": "悬疑,惊悚,犯罪,黑色寓言",
        "category": "爱情喜剧",
        "summary": "他把每一具断肢的木偶都修好，却发现自己其实在缝合一场旧案里的真相，越修复越靠近凶手，也越接近失去自我。",
        "tags": [
            "木偶修复",
            "替身证词",
            "失忆记录",
            "旧剧场",
            "双重人格"
        ]
    },
    {
        "title": "炙热游戏：百厨大战",
        "url": "./movies/movie-133.html",
        "cover": "./133.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "综艺/剧集",
        "genre": "真人秀, 竞技",
        "category": "爱情喜剧",
        "summary": "一百名厨师在一座孤岛监狱厨房里，为了“厨神之王”的称号进行残酷淘汰。",
        "tags": [
            "美食",
            "生存战",
            "厨艺",
            "高压力"
        ]
    },
    {
        "title": "谋杀未遂",
        "url": "./movies/movie-134.html",
        "cover": "./134.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 心理",
        "category": "最新电视剧",
        "summary": "一个金牌律师为谋杀亲夫的少妇辩护，却在翻看证据时发现自己才是真正的凶手。",
        "tags": [
            "律师",
            "替罪羊",
            "记忆篡改",
            "法庭反转"
        ]
    },
    {
        "title": "反叛者苏洛",
        "url": "./movies/movie-135.html",
        "cover": "./135.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 西部",
        "category": "亚洲精选",
        "summary": "年轻的迭戈从贵族变成反叛者，在墨西哥独立前夕，戴上黑面具，化名“苏洛”对抗暴政。",
        "tags": [
            "蒙面侠",
            "拉丁英雄",
            "抗暴",
            "剑术",
            "起源故事"
        ]
    },
    {
        "title": "监察",
        "url": "./movies/movie-136.html",
        "cover": "./136.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪 / 悬疑 / 剧情",
        "category": "经典回看",
        "summary": "他是监察厅里最不起眼的档案管理员，却掌握着所有检察官的生死证据。",
        "tags": [
            "权力斗争",
            "检察官",
            "职场黑幕",
            "高智商"
        ]
    },
    {
        "title": "亡者之妻",
        "url": "./movies/movie-137.html",
        "cover": "./137.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 剧情",
        "category": "悬疑犯罪",
        "summary": "丈夫的葬礼上来了一个自称是他私生子的男人，而他手中握着的证据表明，死者可能根本没死。",
        "tags": [
            "反转神剧",
            "冒充身份",
            "西班牙悬疑",
            "骗中骗"
        ]
    },
    {
        "title": "宇宙圆盘大战争",
        "url": "./movies/movie-138.html",
        "cover": "./138.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "日本",
        "type": "电影",
        "genre": "科幻, 动作, 特摄",
        "category": "热播剧集",
        "summary": "七块神秘圆盘降临地球七大城市，自称“和平使者”的外星人却要求人类自相残杀来换取存活。",
        "tags": [
            "外星入侵",
            "巨大圆盘",
            "战队",
            "致敬经典"
        ]
    },
    {
        "title": "侏罗纪公园3",
        "url": "./movies/movie-139.html",
        "cover": "./139.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 科幻， 冒险",
        "category": "高清电影",
        "summary": "一对离异夫妇为寻找失踪儿子闯入恐龙岛，却成了新王者“棘龙”的猎物。",
        "tags": [
            "恐龙",
            "岛屿",
            "生存",
            "经典续集",
            "棘龙"
        ]
    },
    {
        "title": "一路惊心",
        "url": "./movies/movie-140.html",
        "cover": "./140.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "爱情喜剧",
        "summary": "一名笨拙的快递员误将爆炸物当成普通包裹送出，为了阻止灾难不得不与各路人马展开一场生死时速。",
        "tags": [
            "公路",
            "反转",
            "黑色幽默",
            "悬疑"
        ]
    },
    {
        "title": "情陷高达",
        "url": "./movies/movie-141.html",
        "cover": "./141.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 爱情 / 动画",
        "category": "最新电视剧",
        "summary": "她爱上了元宇宙里那台觉醒自我意识的元祖高达，却要帮它去追求现实中的女驾驶员。",
        "tags": [
            "机甲",
            "元宇宙",
            "虚拟现实",
            "跨次元",
            "催泪"
        ]
    },
    {
        "title": "布拉格的大学生",
        "url": "./movies/movie-142.html",
        "cover": "./142.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "捷克",
        "type": "电影",
        "genre": "剧情，青春，文艺",
        "category": "家庭剧情",
        "summary": "中国留学生意外获得卡夫卡当年的手稿，每翻译一页，就会有一个书中人物闯入他的现实。",
        "tags": [
            "留学",
            "文化冲突",
            "自我认同",
            "东欧",
            "古典乐"
        ]
    },
    {
        "title": "他人即是地狱",
        "url": "./movies/movie-143.html",
        "cover": "./143.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电影",
        "genre": "心理惊悚 / 悬疑 / 剧情",
        "category": "环球片库",
        "summary": "搬进廉价公寓的年轻作家以为终于能独处写作，却发现每一扇门后都住着一张正在等他坠落的脸。",
        "tags": [
            "公寓孤立",
            "社交恐惧",
            "监视窥探",
            "群体暴力",
            "人格崩解"
        ]
    },
    {
        "title": "大力杀手波派",
        "url": "./movies/movie-144.html",
        "cover": "./144.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，动作，恐怖",
        "category": "环球片库",
        "summary": "吃了变异菠菜后，懦弱的水手变成力大无穷的疯狂杀手，向污染海洋的黑心企业复仇。",
        "tags": [
            "反英雄",
            "吃菠菜",
            "黑色幽默",
            "血腥"
        ]
    },
    {
        "title": "一代猛龙",
        "url": "./movies/movie-145.html",
        "cover": "./145.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "香港",
        "type": "电影",
        "genre": "动作 / 犯罪 / 剧情",
        "category": "热播剧集",
        "summary": "两个从小在贫民窟长大的兄弟，一个成了警察，一个成了毒枭，最终不得不在天台进行最后的对决。",
        "tags": [
            "黑帮",
            "兄弟情",
            "港片黄金时代",
            "枪战",
            "枭雄"
        ]
    },
    {
        "title": "玻璃之心",
        "url": "./movies/movie-146.html",
        "cover": "./146.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "丹麦 / 瑞典",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 惊悚",
        "category": "悬疑犯罪",
        "summary": "享誉世界的玻璃艺术家突然失忆，他烧制的诡异人像里，封存着五年前的谋杀真相。",
        "tags": [
            "心理",
            "玻璃艺术",
            "童年创伤",
            "北欧"
        ]
    },
    {
        "title": "天若有情3烽火佳人",
        "url": "./movies/movie-147.html",
        "cover": "./147.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 战争, 剧情",
        "category": "经典回看",
        "summary": "抗战末期，一名飞虎队华裔飞行员在执行任务时救下了一位没落千金，在战火连天的逃亡路上相爱。",
        "tags": [
            "经典延续",
            "民国",
            "大时代",
            "虐恋",
            "公路逃亡"
        ]
    },
    {
        "title": "明星志愿2",
        "url": "./movies/movie-148.html",
        "cover": "./148.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情 / 爱情 / 职场",
        "category": "最新电视剧",
        "summary": "第一季的菜鸟经纪人如今成了金牌推手，却要面对更疯狂的资本游戏和更迷失的偶像。",
        "tags": [
            "娱乐圈",
            "成长",
            "续集",
            "群像",
            "励志"
        ]
    },
    {
        "title": "狼人：身边野兽",
        "url": "./movies/movie-149.html",
        "cover": "./149.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚, 科幻",
        "category": "经典回看",
        "summary": "驻守北极圈的研究队遭遇狼人袭击，但军方怀疑狼人不在门外，就在这12名队员之中。",
        "tags": [
            "基因实验",
            "军营狼人",
            "信任危机"
        ]
    },
    {
        "title": "最美丽的夏天",
        "url": "./movies/movie-150.html",
        "cover": "./150.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情, 家庭, 文艺",
        "category": "家庭剧情",
        "summary": "脾气暴躁的祖父被诊断只剩最后一个夏天，孙子决定帮他找到“最美的夏天”。",
        "tags": [
            "北欧",
            "临终关怀",
            "夏季",
            "和解"
        ]
    },
    {
        "title": "幻日奇遇",
        "url": "./movies/movie-151.html",
        "cover": "./1.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 家庭",
        "category": "亚洲精选",
        "summary": "弟弟能看到天上的“第二个太阳”，所有人都说他撒谎，直到有一天那个太阳裂开了一条缝，掉下来一颗发光的蛋。",
        "tags": [
            "平行天空",
            "兄妹冒险",
            "视觉奇观",
            "诗意幻想"
        ]
    },
    {
        "title": "泽西恶魔",
        "url": "./movies/movie-152.html",
        "cover": "./2.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电视剧 (8集)",
        "genre": "悬疑, 恐怖, 犯罪",
        "category": "家庭剧情",
        "summary": "松林泥炭地连续发现被开膛的死者，州警探发现凶手可能在模仿传说中的“泽西恶魔”。",
        "tags": [
            "都市传说",
            "侦探",
            "森林",
            "邪教"
        ]
    },
    {
        "title": "爱情不流泪",
        "url": "./movies/movie-153.html",
        "cover": "./3.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情、家庭、伦理",
        "category": "动作奇幻",
        "summary": "为了替母亲还债，她嫁给了植物人少爷，却意外发现了这个家族隐藏三十年的眼泪秘密。",
        "tags": [
            "虐恋",
            "女性成长",
            "代际和解"
        ]
    },
    {
        "title": "美娇娘探案社",
        "url": "./movies/movie-154.html",
        "cover": "./4.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 喜剧 / 女性",
        "category": "环球片库",
        "summary": "民国时期上海滩三位名媛白天喝咖啡比美，晚上变身侦探破奇案。",
        "tags": [
            "全女性主角",
            "旗袍侦探",
            "民国风情"
        ]
    },
    {
        "title": "揭密最前线",
        "url": "./movies/movie-155.html",
        "cover": "./5.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 剧情",
        "category": "热播剧集",
        "summary": "过气调查记者联合黑客天才，通过直播揭发黑暗，却发现自己成了下一个连环杀人案的目击证人。",
        "tags": [
            "记者",
            "网络犯罪",
            "直播",
            "反转",
            "社会派"
        ]
    },
    {
        "title": "色情狂辣手摧花",
        "url": "./movies/movie-156.html",
        "cover": "./6.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电影",
        "genre": "惊悚、犯罪、情色",
        "category": "最新电视剧",
        "summary": "一位表面优雅的花艺师，专杀玩弄女性的色情狂，并将尸体处理成“人体花艺”艺术品。",
        "tags": [
            "变态杀手",
            "花艺师",
            "病态美学",
            "反杀"
        ]
    },
    {
        "title": "花腰女儿红",
        "url": "./movies/movie-157.html",
        "cover": "./7.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 民俗",
        "category": "环球片库",
        "summary": "逃离家乡的花腰彝女孩，因奶奶病重回乡，被迫接过酿制“女儿红”的家族绝活，却发现酒里藏着秘密。",
        "tags": [
            "非遗传承",
            "母女代沟",
            "花腰彝",
            "返乡",
            "文化自信"
        ]
    },
    {
        "title": "甜蜜",
        "url": "./movies/movie-158.html",
        "cover": "./8.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市 / 爱情 / 职场",
        "category": "家庭剧情",
        "summary": "遭遇职场PUA的30+女白领辞职学做甜品，意外收获小她8岁的天才甜品师男友和一家爆红私房甜品店。",
        "tags": [
            "甜宠",
            "姐弟恋",
            "甜品师",
            "创业",
            "励志"
        ]
    },
    {
        "title": "恶灵空间２",
        "url": "./movies/movie-159.html",
        "cover": "./9.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "高清电影",
        "summary": "女网红为了流量住进“恶灵空间”原址一晚，却发现自己成了另一场直播的猎物。",
        "tags": [
            "密室",
            "鬼屋直播",
            "民俗恐怖"
        ]
    },
    {
        "title": "小猪扑满的愿望",
        "url": "./movies/movie-160.html",
        "cover": "./10.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影 / 定格动画",
        "genre": "家庭 / 奇幻 / 治愈",
        "category": "亚洲精选",
        "summary": "一个被扔进旧货店的小猪扑满，在新年前夜听到一个流浪女孩悄悄对它许下的生日愿望。",
        "tags": [
            "存钱罐",
            "友谊",
            "贫穷",
            "圣诞",
            "愿望成真"
        ]
    },
    {
        "title": "成功的滋味",
        "url": "./movies/movie-161.html",
        "cover": "./11.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 动作",
        "category": "亚洲精选",
        "summary": "过气拳王为救儿子重登擂台，却发现最大的对手是自己的身体。",
        "tags": [
            "拳击",
            "父子关系",
            "底层奋斗",
            "逆袭"
        ]
    },
    {
        "title": "中央公园第二季",
        "url": "./movies/movie-162.html",
        "cover": "./12.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "剧集",
        "genre": "动画，喜剧，歌舞",
        "category": "家庭剧情",
        "summary": "蒂勒曼一家继续守护中央公园，但一位亿万富翁打算在公园地下建私人地铁。",
        "tags": [
            "音乐剧",
            "纽约",
            "公园",
            "家庭",
            "房地产"
        ]
    },
    {
        "title": "天茧回归",
        "url": "./movies/movie-163.html",
        "cover": "./13.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 悬疑",
        "category": "亚洲精选",
        "summary": "一种神秘的“茧”突然包裹全球人类，七年后人们苏醒时，发现世界变了，而自己体内多了不属于自己的记忆。",
        "tags": [
            "虫洞",
            "时间循环",
            "末世",
            "神秘组织"
        ]
    },
    {
        "title": "莎乐美的猜想",
        "url": "./movies/movie-164.html",
        "cover": "./14.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑/心理/惊悚",
        "category": "动作奇幻",
        "summary": "心理医生发现他的病人坚信自己是莎乐美转世，而在七重纱舞落下后，诊室里真的出现了无头尸体。",
        "tags": [
            "戏中戏",
            "歌剧改编",
            "多重人格",
            "心理医生",
            "女性复仇"
        ]
    },
    {
        "title": "爱在咫尺间",
        "url": "./movies/movie-165.html",
        "cover": "./15.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "家庭剧情",
        "summary": "同住一个屋檐下却形同陌路的父子，因一场突如其来的封控被迫开始真正的对话。",
        "tags": [
            "都市情感",
            "代际和解",
            "轻治愈"
        ]
    },
    {
        "title": "杨门虎将",
        "url": "./movies/movie-166.html",
        "cover": "./16.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史, 战争, 古装",
        "category": "热播剧集",
        "summary": "金沙滩一役后，杨家仅存的女眷披甲上阵，用血泪重铸“杨门虎将”的威名。",
        "tags": [
            "杨家将",
            "忠烈",
            "动作",
            "北宋",
            "群像"
        ]
    },
    {
        "title": "维多利亚与阿卜杜勒",
        "url": "./movies/movie-167.html",
        "cover": "./17.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "英国",
        "type": "电影",
        "genre": "剧情， 传记， 历史",
        "category": "悬疑犯罪",
        "summary": "年迈的英国女王被一名从印度押送来的小书记员深深吸引，这段禁忌友谊甚至动摇了王室的根基。",
        "tags": [
            "皇室秘闻",
            "忘年交",
            "殖民反思"
        ]
    },
    {
        "title": "北京人",
        "url": "./movies/movie-168.html",
        "cover": "./18.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "经典回看",
        "summary": "北京二环内一座百年四合院的拆迁前夜，三代人围坐在一起，用一顿火锅烫熟了所有说不出口的爱与怨。",
        "tags": [
            "拆迁",
            "老北京",
            "代际冲突"
        ]
    },
    {
        "title": "网走番外地",
        "url": "./movies/movie-169.html",
        "cover": "./19.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电影",
        "genre": "犯罪, 动作, 剧情",
        "category": "最新电视剧",
        "summary": "被押送至北海道网走监狱的传奇黑道头目，发现这里囚禁着一位知晓二战秘密的老人，于是策划了日本战后最惊心动魄的一次越狱。",
        "tags": [
            "北海道",
            "越狱",
            "极道",
            "翻拍"
        ]
    },
    {
        "title": "金牌特务：金士曼起源",
        "url": "./movies/movie-170.html",
        "cover": "./20.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "动作 / 间谍",
        "category": "环球片库",
        "summary": "1914年，一群被主流情报机构抛弃的英国贵族败类，用最不体面的手段，拯救了最体面的大英帝国。",
        "tags": [
            "前传",
            "一战",
            "贵族特工",
            "绅士"
        ]
    },
    {
        "title": "一将功成万骨枯",
        "url": "./movies/movie-171.html",
        "cover": "./21.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "香港",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "高清电影",
        "summary": "社团中最能打的“疯狗”，在成为坐馆的路上，亲手送走了所有兄弟。",
        "tags": [
            "黑帮",
            "枭雄",
            "悲剧"
        ]
    },
    {
        "title": "父土",
        "url": "./movies/movie-172.html",
        "cover": "./22.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "亚洲精选",
        "summary": "离乡二十年的建筑设计师返乡处理宅基地，却在老屋地窖里发现父亲藏了一辈子的秘密。",
        "tags": [
            "乡土",
            "代际冲突",
            "城镇化",
            "家族秘密",
            "土地情结"
        ]
    },
    {
        "title": "恋爱禁止的世界",
        "url": "./movies/movie-173.html",
        "cover": "./23.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "爱情/科幻",
        "category": "环球片库",
        "summary": "政府通过AI匹配最佳婚恋对象，违法恋爱者将被“情感格式化”。",
        "tags": [
            "反乌托邦",
            "政府配对",
            "三角恋",
            "反抗",
            "伦理"
        ]
    },
    {
        "title": "四非",
        "url": "./movies/movie-174.html",
        "cover": "./24.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "惊悚犯罪",
        "genre": "悬疑, 心理惊悚",
        "category": "热播剧集",
        "summary": "四个互不相干的边缘人，因一场“不可能”的银行劫案被警方锁定，每个人都在说谎。",
        "tags": [
            "烧脑",
            "多重人格",
            "连环杀手",
            "底层挣扎"
        ]
    },
    {
        "title": "风月今宵",
        "url": "./movies/movie-175.html",
        "cover": "./25.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情 / 情色",
        "category": "高清电影",
        "summary": "1930年代的上海，一位当红歌女与军阀姨太的秘密恋情，被一首即将唱响的歌曲推向毁灭。",
        "tags": [
            "民国",
            "禁忌之恋",
            "旗袍美学",
            "悲剧美学"
        ]
    },
    {
        "title": "鲁斯汀：民运推手",
        "url": "./movies/movie-176.html",
        "cover": "./26.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "传记，剧情，历史",
        "category": "高清电影",
        "summary": "1963年华盛顿大游行的总策划师，一位公开的同性恋黑人，他的名字被历史刻意抹去了四十年。",
        "tags": [
            "民权运动",
            "幕后英雄",
            "平权",
            "演讲",
            "政治博弈"
        ]
    },
    {
        "title": "致命行动",
        "url": "./movies/movie-177.html",
        "cover": "./27.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作/犯罪",
        "category": "家庭剧情",
        "summary": "前特种兵的女儿被黑帮绑架作为器官供体，他必须在12小时内攻入一所由黑帮控制的废弃医院，从32名杀手手中救回她。",
        "tags": [
            "限时任务",
            "以暴制暴",
            "医院",
            "复仇"
        ]
    },
    {
        "title": "横冲直撞斗飞车",
        "url": "./movies/movie-178.html",
        "cover": "./28.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，动作",
        "category": "高清电影",
        "summary": "为了还债，两个南方的私酒贩子必须在28小时内从亚特兰大开到得克萨斯，身后是半个美国的警察。",
        "tags": [
            "飙车",
            "经典",
            "伯特·雷诺兹",
            "走私",
            "公路"
        ]
    },
    {
        "title": "倒楣日",
        "url": "./movies/movie-179.html",
        "cover": "./29.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧 / 奇幻",
        "category": "最新电视剧",
        "summary": "全台湾最倒楣的男人在被雷劈了第七次之后，发现自己能看到别人的“厄运倒计时”。",
        "tags": [
            "时间循环",
            "衰神",
            "转运",
            "治愈"
        ]
    },
    {
        "title": "老板不是人",
        "url": "./movies/movie-180.html",
        "cover": "./30.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、犯罪",
        "category": "家庭剧情",
        "summary": "三个被老板压榨到极致的打工人，决定用对付黑帮的手段来对付自己的上司。",
        "tags": [
            "职场",
            "反压迫",
            "黑色幽默",
            "无厘头"
        ]
    },
    {
        "title": "我们都不完美",
        "url": "./movies/movie-181.html",
        "cover": "./31.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、家庭",
        "category": "悬疑犯罪",
        "summary": "高考落榜的哥哥被迫照顾患有重度自闭症的弟弟，在无数次的崩溃与逃离后，他终于读懂弟弟那个无声的世界。",
        "tags": [
            "自闭症",
            "手足之情",
            "亲情和解",
            "催泪"
        ]
    },
    {
        "title": "四叠半时光机",
        "url": "./movies/movie-182.html",
        "cover": "./32.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻 / 青春 / 喜剧",
        "category": "经典回看",
        "summary": "大学宿舍里一台破旧电风扇其实是时光机，每次启动都会让整个房间的时间倒流十分钟。",
        "tags": [
            "穿越",
            "宿舍",
            "汤浅风"
        ]
    },
    {
        "title": "双月之城",
        "url": "./movies/movie-183.html",
        "cover": "./33.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "动画",
        "genre": "科幻, 悬疑, 动作",
        "category": "环球片库",
        "summary": "一座被两个月亮照耀的蒸汽朋克城市里，一名失忆的机械师发现自己能同时看到两个世界的重叠影像。",
        "tags": [
            "科幻动画",
            "蒸汽朋克",
            "平行世界",
            "机甲",
            "国产"
        ]
    },
    {
        "title": "星期五晚餐 第五季",
        "url": "./movies/movie-184.html",
        "cover": "./34.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电视剧",
        "genre": "喜剧",
        "category": "经典回看",
        "summary": "每个周五的犹太家庭晚餐都是一场灾难，这次连殡仪馆都打来了电话。",
        "tags": [
            "家庭聚餐",
            "黑色幽默",
            "犹太人文化"
        ]
    },
    {
        "title": "未婚妻子",
        "url": "./movies/movie-185.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电视剧",
        "genre": "浪漫, 喜剧, 奇幻",
        "category": "悬疑犯罪",
        "summary": "为了继承家族企业，一个花花公子找人假扮未婚妻，没想到对方竟带来一对“龙凤胎”，并声称是他的孩子。",
        "tags": [
            "契约婚姻",
            "身份错位",
            "先婚后爱"
        ]
    },
    {
        "title": "星梦情深",
        "url": "./movies/movie-186.html",
        "cover": "./36.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "电影",
        "genre": "爱情, 音乐",
        "category": "动作奇幻",
        "summary": "一个过气乡村歌手发现了一个天赋惊人的女孩，他帮助她成名，自己却被酒精和嫉妒拖入深渊。",
        "tags": [
            "歌手",
            "成名",
            "悲剧",
            "原创歌曲",
            "翻拍"
        ]
    },
    {
        "title": "紧急呼救：孤星第四季",
        "url": "./movies/movie-187.html",
        "cover": "./37.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "动作/灾难/职业剧",
        "category": "热播剧集",
        "summary": "奥斯汀126号消防局全员经历丧亲之痛后，一场超级冰雹将让他们面临史上最复杂救援。",
        "tags": [
            "急救员",
            "一线救援",
            "团队创伤"
        ]
    },
    {
        "title": "如果历史是一群喵 第三季",
        "url": "./movies/movie-188.html",
        "cover": "./38.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "喜剧 / 历史",
        "category": "经典回看",
        "summary": "一群萌猫继续扮演历史人物，用爆笑方式演绎宋朝到元朝的铁血与风雅。",
        "tags": [
            "猫咪拟人",
            "搞笑科普",
            "宋元风云",
            "少儿向"
        ]
    },
    {
        "title": "代孕关系",
        "url": "./movies/movie-189.html",
        "cover": "./39.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国",
        "type": "电影",
        "genre": "社会议题, 法庭悬疑, 情感剧",
        "category": "高清电影",
        "summary": "一份看似普通的代孕纠纷，把三位女性、两对夫妻和一家基金会绑进同一纸面战场，合法与非法的界线在分娩时刻开始倒塌，谁都不确定自己是否还拥有“选择”。",
        "tags": [
            "代孕合同",
            "生育权",
            "伦理边界",
            "司法程序",
            "医疗资本"
        ]
    },
    {
        "title": "舍妻救国",
        "url": "./movies/movie-190.html",
        "cover": "./40.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "历史, 战争, 剧情",
        "category": "亚洲精选",
        "summary": "为换取军阀撤军，商会会长献上妻子，而妻子却曾是军阀的初恋情人。",
        "tags": [
            "战争人性",
            "牺牲",
            "情感拷问",
            "民国"
        ]
    },
    {
        "title": "洗冤录2粤语",
        "url": "./movies/movie-191.html",
        "cover": "./41.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装, 悬疑, 法医",
        "category": "悬疑犯罪",
        "summary": "南宋提刑官宋慈再遇连环奇案，一张人皮面具牵扯出十年前的血案。",
        "tags": [
            "宋慈",
            "粤语原声",
            "验尸",
            "冤案平反"
        ]
    },
    {
        "title": "太极粤语",
        "url": "./movies/movie-192.html",
        "cover": "./42.jpg",
        "year": "2008",
        "yearNumber": 2008,
        "region": "香港",
        "type": "剧集",
        "genre": "动作， 武侠， 剧情",
        "category": "动作奇幻",
        "summary": "清末，一个资质愚钝的染布坊学徒，为了替父报仇，靠偷学陈家沟的拳谱，悟出了一套“慢三秒”的太极真谛。",
        "tags": [
            "赵文卓",
            "太极拳",
            "民国武行"
        ]
    },
    {
        "title": "美国泡菜",
        "url": "./movies/movie-193.html",
        "cover": "./43.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 奇幻",
        "category": "亚洲精选",
        "summary": "1920年的犹太工人掉进腌黄瓜桶被保存至今，醒来后成了2024年最火的网红。",
        "tags": [
            "穿越",
            "犹太文化",
            "祖孙情",
            "创业"
        ]
    },
    {
        "title": "美眉校探 第三季",
        "url": "./movies/movie-194.html",
        "cover": "./44.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑 / 青春 / 犯罪",
        "category": "亚洲精选",
        "summary": "大学校园里出现AI换脸诽谤组织，美眉校探维罗妮卡伪装成网红卧底追查。",
        "tags": [
            "女性侦探",
            "校园悬疑",
            "科技犯罪",
            "暗黑系",
            "反转"
        ]
    },
    {
        "title": "1917",
        "url": "./movies/movie-195.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "剧情 / 战争",
        "category": "经典回看",
        "summary": "不是翻拍，而是平行故事：一战的另一条战线上，两个传令兵要在8小时内穿越死亡沼泽，送达“停止进攻”的命令。",
        "tags": [
            "一镜到底",
            "战争",
            "黑白色",
            "人性",
            "残酷美学"
        ]
    },
    {
        "title": "近战法师",
        "url": "./movies/movie-196.html",
        "cover": "./46.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国内地",
        "type": "电视剧",
        "genre": "奇幻 / 动作 / 喜剧",
        "category": "家庭剧情",
        "summary": "一个只会火球术的废柴法师，发现近战殴打比施法效率高得多。",
        "tags": [
            "法师",
            "肉搏",
            "反套路"
        ]
    },
    {
        "title": "生日幻境",
        "url": "./movies/movie-197.html",
        "cover": "./47.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "日本",
        "type": "电影",
        "genre": "动画, 奇幻, 冒险",
        "category": "动作奇幻",
        "summary": "在八岁生日的前一晚，害羞的小男孩被一只会说话的时钟兔子带进了墙壁里的奇幻世界，他必须在天亮前找回自己遗失的“勇气之心”。",
        "tags": [
            "宫崎骏风格",
            "内心成长",
            "童话",
            "手绘动画"
        ]
    },
    {
        "title": "亲情变奏曲",
        "url": "./movies/movie-198.html",
        "cover": "./48.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 音乐, 家庭",
        "category": "动作奇幻",
        "summary": "一个钢琴神童被母亲逼着练琴，直到她突然失聪，才发现外公留下的那架旧钢琴可以“听见”心。",
        "tags": [
            "钢琴",
            "祖孙",
            "和解",
            "慢片"
        ]
    },
    {
        "title": "雾柱",
        "url": "./movies/movie-199.html",
        "cover": "./49.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "悬疑, 科幻",
        "category": "环球片库",
        "summary": "西伯利亚森林深处，一座废弃的苏联科学城被不明“雾柱”笼罩，进去的人，开始看见自己最深的罪孽。",
        "tags": [
            "克苏鲁",
            "苏联遗产",
            "心理恐惧"
        ]
    },
    {
        "title": "血色土地第二季",
        "url": "./movies/movie-200.html",
        "cover": "./50.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪，悬疑，剧情",
        "category": "高清电影",
        "summary": "警长玛莎刚平息第一季的血腥屠杀，却发现凶手留下的“遗产”正让整座小镇从内部开始腐烂。",
        "tags": [
            "家族恩怨",
            "警匪对峙",
            "小镇谜团"
        ]
    },
    {
        "title": "尹弟下山",
        "url": "./movies/movie-201.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧，奇幻",
        "category": "家庭剧情",
        "summary": "在山上修行了二十年的呆萌道士尹弟，奉师命下山保护一个职场女强人，却发现现代社会的“鬼”比山上多多了。",
        "tags": [
            "道士",
            "都市",
            "反差萌"
        ]
    },
    {
        "title": "怪杰斗黑帮",
        "url": "./movies/movie-202.html",
        "cover": "./52.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧，动作，悬疑",
        "category": "最新电视剧",
        "summary": "一群老年社区太极队误被当成新崛起的黑帮，被迫与真黑帮展开爆笑火拼。",
        "tags": [
            "废柴英雄",
            "黑帮",
            "邻里温情",
            "反差萌"
        ]
    },
    {
        "title": "勇士斗恺撒",
        "url": "./movies/movie-203.html",
        "cover": "./53.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "历史， 动作， 史诗",
        "category": "动作奇幻",
        "summary": "一个被俘的日耳曼勇士被送进罗马竞技场，却意外被卷入了刺杀恺撒的惊天阴谋。",
        "tags": [
            "古罗马",
            "角斗士",
            "政治阴谋",
            "叛变",
            "冷兵器"
        ]
    },
    {
        "title": "每天都是假日",
        "url": "./movies/movie-204.html",
        "cover": "./54.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧, 奇幻",
        "category": "经典回看",
        "summary": "一个恨透了工作的社畜发现自己被困在了“五一劳动节”这一天，永远无法迎来假期。",
        "tags": [
            "时间循环",
            "打工族",
            "讽刺",
            "治愈"
        ]
    },
    {
        "title": "中华小当家 动画版",
        "url": "./movies/movie-205.html",
        "cover": "./55.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集 / OVA",
        "genre": "动画, 美食, 热血",
        "category": "爱情喜剧",
        "summary": "小当家刘昂星成为史上最年轻的特级厨师后，发现传说中的“厨具”会吞噬使用者的感情。",
        "tags": [
            "重制版",
            "中华料理",
            "特技",
            "cooking",
            "续作"
        ]
    },
    {
        "title": "香港四径大步走",
        "url": "./movies/movie-206.html",
        "cover": "./56.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 运动, 励志",
        "category": "动作奇幻",
        "summary": "四个处于人生低谷的陌生人，组队挑战298公里的香港四大远足径，在极限奔跑中寻找救赎。",
        "tags": [
            "越野跑",
            "香港",
            "极限",
            "人生"
        ]
    },
    {
        "title": "八仙传之吕仙惩贪记",
        "url": "./movies/movie-207.html",
        "cover": "./57.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装奇幻 / 喜剧 / 讽刺",
        "category": "最新电视剧",
        "summary": "吕洞宾化作游方书生潜入贪官治下的小城，一边借民间法术惩治贪腐，一边把一桩牵连百姓命脉的盐案翻了个底朝天。",
        "tags": [
            "八仙传说",
            "吕仙",
            "反贪",
            "民间神怪",
            "轻喜剧"
        ]
    },
    {
        "title": "女高中生结婚记",
        "url": "./movies/movie-208.html",
        "cover": "./58.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧、青春、家庭",
        "category": "家庭剧情",
        "summary": "为了分到拆迁款，两名女高中生协议结婚，却迎来了史上最混乱的“婚后生活”。",
        "tags": [
            "早婚",
            "校园秘密",
            "邻里闹剧"
        ]
    },
    {
        "title": "海军陆战队员",
        "url": "./movies/movie-209.html",
        "cover": "./59.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "美国",
        "type": "电影",
        "genre": "动作",
        "category": "环球片库",
        "summary": "被开除的陆战队员跟踪一伙劫匪穿越半个美国，只为夺回妻子送给他的廉价婚戒。",
        "tags": [
            "硬汉",
            "复仇",
            "劫匪",
            "营救",
            "爆炸"
        ]
    },
    {
        "title": "小意外",
        "url": "./movies/movie-210.html",
        "cover": "./60.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "经典回看",
        "summary": "一场车祸让母亲只记得女儿十七岁前的样子，女儿不得不每天扮演高中时的自己。",
        "tags": [
            "亲情",
            "治愈",
            "日常",
            "反转"
        ]
    },
    {
        "title": "情暖谊长",
        "url": "./movies/movie-211.html",
        "cover": "./61.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "最新电视剧",
        "summary": "伦敦一家养老院和一家幼儿园合并在了一起。",
        "tags": [
            "养老院",
            "友谊",
            "治愈",
            "跨代",
            "轻喜剧"
        ]
    },
    {
        "title": "飞象过河",
        "url": "./movies/movie-212.html",
        "cover": "./62.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧 / 犯罪",
        "category": "高清电影",
        "summary": "一个退役棋王靠“象棋步法”策划劫案，却被一个只会“飞象过河”乱来的新手警察破了局。",
        "tags": [
            "港式无厘头",
            "象棋杀局",
            "跨国追捕",
            "反派洗白",
            "老港片情怀"
        ]
    },
    {
        "title": "诺曼第旅馆",
        "url": "./movies/movie-213.html",
        "cover": "./63.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国",
        "type": "电影",
        "genre": "战争剧情",
        "category": "热播剧集",
        "summary": "D-DAY前夕，诺曼底海边一间小旅馆里，德军军官、法国抵抗组织女仆与犹太逃难者被迫共处一室。",
        "tags": [
            "二战",
            "旅馆",
            "人性"
        ]
    },
    {
        "title": "公司业务",
        "url": "./movies/movie-214.html",
        "cover": "./64.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "职场暗黑剧",
        "category": "亚洲精选",
        "summary": "大型商社的“优化部”专接脏活，这一期的任务：在不给遣散费的前提下，逼走一位老功臣。",
        "tags": [
            "大厂",
            "裁员",
            "黑色幽默",
            "办公室政治"
        ]
    },
    {
        "title": "发现女巫 第一季",
        "url": "./movies/movie-215.html",
        "cover": "./65.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 美国",
        "type": "剧集",
        "genre": "奇幻 / 爱情",
        "category": "经典回看",
        "summary": "历史学者女巫意外唤醒了牛津图书馆内沉睡千年的吸血鬼遗传学家，改变了所有物种的命运。",
        "tags": [
            "吸血鬼",
            "女巫",
            "魔法生物",
            "牛津",
            "禁忌之恋"
        ]
    },
    {
        "title": "神圣的话语",
        "url": "./movies/movie-216.html",
        "cover": "./66.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "意大利 / 梵蒂冈",
        "type": "电影",
        "genre": "悬疑 / 宗教",
        "category": "爱情喜剧",
        "summary": "新任教皇突然暴毙，他的私人秘书在遗物中发现一本密文日记，解开密码的唯一钥匙是耶稣失落的语录。",
        "tags": [
            "教会秘密",
            "符号学",
            "密室解谜",
            "神学辩论"
        ]
    },
    {
        "title": "花系列：一",
        "url": "./movies/movie-217.html",
        "cover": "./67.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情 / 悬疑 / 剧情",
        "category": "经典回看",
        "summary": "每个看似完美的爱情背后，都有一朵代表谎言与真相的花在暗自开放。",
        "tags": [
            "单元剧",
            "花语",
            "女性"
        ]
    },
    {
        "title": "神是中学生",
        "url": "./movies/movie-218.html",
        "cover": "./68.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "TV Series",
        "genre": "动画, 奇幻, 日常",
        "category": "高清电影",
        "summary": "一个普通的中学生某天突然被宇宙选中成为了新一代地球神明，她的第一个神迹是让明天的考试取消。",
        "tags": [
            "日常奇幻",
            "中学生",
            "神明",
            "治愈",
            "搞笑"
        ]
    },
    {
        "title": "黑钱胜地第四季",
        "url": "./movies/movie-219.html",
        "cover": "./69.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情 / 惊悚 / 犯罪",
        "category": "动作奇幻",
        "summary": "为摆脱毒枭与政客的双重绞杀，伯德家族赌上一切，策划了终极逃亡。",
        "tags": [
            "洗钱",
            "家族危机",
            "复仇",
            "最终季"
        ]
    },
    {
        "title": "坚强的小孩",
        "url": "./movies/movie-220.html",
        "cover": "./70.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "经典回看",
        "summary": "九岁的农村留守儿童为了阻止父母离婚，独自骑自行车跋涉三百公里进城。",
        "tags": [
            "留守儿童",
            "抗争",
            "成长"
        ]
    },
    {
        "title": "人工失格",
        "url": "./movies/movie-221.html",
        "cover": "./71.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 惊悚",
        "category": "热播剧集",
        "summary": "一款治疗失忆的AI芯片，开始主动删除人类的“痛苦记忆”。",
        "tags": [
            "AI觉醒",
            "身份认同",
            "反转"
        ]
    },
    {
        "title": "骏马奥斯温",
        "url": "./movies/movie-222.html",
        "cover": "./72.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电影",
        "genre": "家庭 / 剧情 / 冒险",
        "category": "环球片库",
        "summary": "一个无法与人沟通的自闭症女孩，却和一匹同样被世界抛弃的烈马产生了心灵感应。",
        "tags": [
            "马",
            "自闭症",
            "治愈",
            "草原",
            "羁绊"
        ]
    },
    {
        "title": "生活万岁！",
        "url": "./movies/movie-223.html",
        "cover": "./73.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电影",
        "genre": "纪录片/现实",
        "category": "热播剧集",
        "summary": "十五个普通人的真实生活片段：有失恋的、有负债的、有病危的，但他们都在喊“生活万岁”。",
        "tags": [
            "众生相",
            "真实",
            "治愈",
            "催泪"
        ]
    },
    {
        "title": "水星领航员第二季",
        "url": "./movies/movie-224.html",
        "cover": "./74.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "日本",
        "type": "剧集",
        "genre": "科幻 / 治愈 / 日常",
        "category": "环球片库",
        "summary": "在仿威尼斯的水星上，年轻的领航员灯里继续带着游客划船，这一次她遇到了一位能看见“水之精灵”的老人。",
        "tags": [
            "未来幻想",
            "治愈系",
            "慢生活"
        ]
    },
    {
        "title": "逮捕",
        "url": "./movies/movie-225.html",
        "cover": "./75.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国",
        "type": "电视剧",
        "genre": "犯罪 / 刑侦",
        "category": "家庭剧情",
        "summary": "一名禁毒警察被要求逮捕自己最敬爱的师父，却发现师父的真实身份比毒品更复杂。",
        "tags": [
            "反腐",
            "卧底",
            "双面人生"
        ]
    },
    {
        "title": "猫狗大战",
        "url": "./movies/movie-226.html",
        "cover": "./76.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧 / 家庭",
        "category": "爱情喜剧",
        "summary": "猫星和汪星世代为仇，直到外星生物入侵地球，它们不得不放下爪子，联手开战。",
        "tags": [
            "猫狗",
            "冤家",
            "结盟",
            "外星入侵"
        ]
    },
    {
        "title": "边境风暴",
        "url": "./movies/movie-227.html",
        "cover": "./77.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国 / 墨西哥",
        "type": "电影",
        "genre": "动作 / 犯罪 / 惊悚",
        "category": "动作奇幻",
        "summary": "一场百年一遇的暴雨中，一名卧底警察被迫与毒贩合作，对抗更凶残的边境走私集团。",
        "tags": [
            "边境",
            "贩毒",
            "卧底",
            "暴雨",
            "道德困境"
        ]
    },
    {
        "title": "东北一家人3",
        "url": "./movies/movie-228.html",
        "cover": "./78.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 家庭 / 情景",
        "category": "热播剧集",
        "summary": "牛小伟搞起了直播带货，把工厂积压的“大背头”搓澡巾卖到了全世界，却引来了一场跨国官司。",
        "tags": [
            "东北振兴",
            "直播带货",
            "家长里短"
        ]
    },
    {
        "title": "新扎师姐2：不安全地带",
        "url": "./movies/movie-229.html",
        "cover": "./79.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "category": "热播剧集",
        "summary": "女警麦晴假扮学生混入贵族高中调查毒品案，却发现校长才是最大的毒枭。",
        "tags": [
            "女警",
            "卧底",
            "校园黑帮"
        ]
    },
    {
        "title": "心跳源计划",
        "url": "./movies/movie-230.html",
        "cover": "./80.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 悬疑 / 职场",
        "category": "经典回看",
        "summary": "天才女科学家卧底进入制药公司，却与目标对象——公司首席科学家产生了真实的致命吸引。",
        "tags": [
            "科研伦理",
            "商业间谍",
            "双重身份",
            "实验室爱情"
        ]
    },
    {
        "title": "病娇王爷仵作妻",
        "url": "./movies/movie-231.html",
        "cover": "./81.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装，悬疑，爱情",
        "category": "热播剧集",
        "summary": "现代法医学女博士穿越成古代仵作之女，阴差阳错嫁给了人格分裂、喜怒无常的病娇王爷，洞房夜先验尸。",
        "tags": [
            "病娇",
            "仵作",
            "探案",
            "甜宠",
            "权谋"
        ]
    },
    {
        "title": "风流浪子美人心",
        "url": "./movies/movie-232.html",
        "cover": "./82.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 爱情 / 古装",
        "category": "爱情喜剧",
        "summary": "江南第一采花贼遇到了一生之敌：一个武功高强、只想骗他感情的千金小姐，两人在偷心与反偷心中上演爆笑对决。",
        "tags": [
            "港产片",
            "武侠",
            "女权",
            "反套路",
            "怀旧"
        ]
    },
    {
        "title": "小绿和小蓝第四季",
        "url": "./movies/movie-233.html",
        "cover": "./83.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画 / 科幻 / 恋爱",
        "category": "环球片库",
        "summary": "机器人小绿在自我意识觉醒后主动格式化记忆，只为重新以朋友身份爱人类小蓝一次。",
        "tags": [
            "人工智能",
            "哲学思辨",
            "轻科幻"
        ]
    },
    {
        "title": "颠倒",
        "url": "./movies/movie-234.html",
        "cover": "./84.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "德国",
        "type": "电影",
        "genre": "科幻, 爱情, 剧情",
        "category": "悬疑犯罪",
        "summary": "两个引力相反的平行世界即将碰撞，而一对双城恋人必须阻止末日。",
        "tags": [
            "平行世界",
            "引力相反",
            "禁忌之恋",
            "科学伦理",
            "双城记"
        ]
    },
    {
        "title": "乡村豪杰",
        "url": "./movies/movie-235.html",
        "cover": "./85.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国",
        "type": "电视剧",
        "genre": "乡村/喜剧/励志",
        "category": "爱情喜剧",
        "summary": "一个在城市碰壁的退役拳手回到故乡，意外接手一盘散沙的村庄，却把所有人的日子都搅出了新希望。",
        "tags": [
            "返乡创业",
            "村庄治理",
            "兄弟情",
            "土地流转",
            "家长里短"
        ]
    },
    {
        "title": "漫游的家庭",
        "url": "./movies/movie-236.html",
        "cover": "./86.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "中国大陆",
        "type": "电影",
        "genre": "公路 / 家庭 / 治愈",
        "category": "最新电视剧",
        "summary": "一家人开着老旧旅行车穿越半个中国去找失联亲戚，却在漫长路途里找回了彼此说不出口的爱。",
        "tags": [
            "长途旅行",
            "代际和解",
            "失散重聚",
            "风景叙事",
            "家庭修补"
        ]
    },
    {
        "title": "新选组始末录",
        "url": "./movies/movie-237.html",
        "cover": "./87.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "日本",
        "type": "剧集",
        "genre": "历史, 动作",
        "category": "热播剧集",
        "summary": "从“壬生狼”到帝国夕阳，一群乡下武士如何在京都血雨腥风中沦为政权弃子。",
        "tags": [
            "幕末",
            "武士",
            "悲剧",
            "群像"
        ]
    },
    {
        "title": "爱的噩梦",
        "url": "./movies/movie-238.html",
        "cover": "./88.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 奇幻",
        "category": "热播剧集",
        "summary": "她每天醒来都会忘记爱人，却总在梦里被同一个男人追杀——而那个男人，正是现实中的丈夫。",
        "tags": [
            "梦境循环",
            "执念成魔",
            "反转虐心"
        ]
    },
    {
        "title": "粉红豹再度出击",
        "url": "./movies/movie-239.html",
        "cover": "./89.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 犯罪",
        "category": "环球片库",
        "summary": "“粉红豹”钻石再次失窃，乌龙探长克鲁索的克隆人被启用，但他比原版还蠢三倍。",
        "tags": [
            "蠢探",
            "经典重启",
            "珠宝盗窃",
            "乌龙"
        ]
    },
    {
        "title": "铁达尼邮船遇险记",
        "url": "./movies/movie-240.html",
        "cover": "./90.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "电影",
        "genre": "灾难 / 历史 / 剧情",
        "category": "环球片库",
        "summary": "这是一艘不沉之船，直到冰山撕开它的右舷，也撕开了爱德华时代最后的虚伪体面。",
        "tags": [
            "沉船",
            "阶级",
            "真实改编"
        ]
    },
    {
        "title": "未熏黑",
        "url": "./movies/movie-241.html",
        "cover": "./91.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "家庭剧情",
        "summary": "一根未被熏黑的烟管，串起三代人跨越四十年的秘密与救赎。",
        "tags": [
            "烟草",
            "历史变迁",
            "人性",
            "年代戏"
        ]
    },
    {
        "title": "肮脏的英雄",
        "url": "./movies/movie-242.html",
        "cover": "./92.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "category": "爱情喜剧",
        "summary": "一位收废品的老人在黑帮威胁下，用最肮脏的手段保护整条街的穷人。",
        "tags": [
            "底层复仇",
            "黑色幽默",
            "以恶制恶"
        ]
    },
    {
        "title": "猛虎过山",
        "url": "./movies/movie-243.html",
        "cover": "./93.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 冒险, 犯罪",
        "category": "热播剧集",
        "summary": "为了找到失踪的缉毒警兄弟，一名普通护林员独自闯入遍布陷阱的罪恶山林。",
        "tags": [
            "丛林",
            "缉毒",
            "硬汉",
            "肉搏",
            "复仇"
        ]
    },
    {
        "title": "伤心往事",
        "url": "./movies/movie-244.html",
        "cover": "./94.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "一位失忆女子回到东北老家，发现所有亲人都在演一出关于她“死亡”的戏。",
        "tags": [
            "记忆删除",
            "反转",
            "东北"
        ]
    },
    {
        "title": "美容师与野兽",
        "url": "./movies/movie-245.html",
        "cover": "./95.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 奇幻, 喜剧",
        "category": "热播剧集",
        "summary": "野兽在城堡地下发现一位顶级美容师，她承诺六周内将他改造成选美冠军。",
        "tags": [
            "整容",
            "野兽王子",
            "反童话"
        ]
    },
    {
        "title": "纽扣战争",
        "url": "./movies/movie-246.html",
        "cover": "./96.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "法国",
        "type": "动画家庭电影",
        "genre": "动画 / 家庭 / 冒险",
        "category": "爱情喜剧",
        "summary": "两个把“纽扣”当作领地象征的孩子，在一场看似幼稚的争夺战里，意外发现那枚旧纽扣藏着一段跨越两代人的和解契约。",
        "tags": [
            "童年盟约",
            "手作工坊",
            "校园对抗",
            "友情修复",
            "传家纽扣"
        ]
    },
    {
        "title": "黑色郁金香",
        "url": "./movies/movie-247.html",
        "cover": "./97.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "爱情 / 悬疑",
        "category": "经典回看",
        "summary": "花艺师继承了一座濒临破产的郁金香庄园，却在古老花谱中发现了一百年前的谋杀真相。",
        "tags": [
            "遗产",
            "家族秘密",
            "花艺"
        ]
    },
    {
        "title": "叛狱大猎杀",
        "url": "./movies/movie-248.html",
        "cover": "./98.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "电影",
        "genre": "动作, 惊悚",
        "category": "最新电视剧",
        "summary": "黑监狱突然释放所有囚犯并封锁全岛，开始一场72小时的“官狩”。",
        "tags": [
            "监狱",
            "大逃杀",
            "腐败"
        ]
    },
    {
        "title": "半魔法",
        "url": "./movies/movie-249.html",
        "cover": "./99.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "奇幻, 喜剧, 剧情",
        "category": "高清电影",
        "summary": "世界只有半吊子魔法——能让笔漂浮、让硬币变正反面，但没人能靠它发财或救命。",
        "tags": [
            "低魔世界",
            "成人童话",
            "便利店奇遇",
            "治愈系"
        ]
    },
    {
        "title": "丛林杀机",
        "url": "./movies/movie-250.html",
        "cover": "./100.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚，恐怖",
        "category": "亚洲精选",
        "summary": "探险队误入毒枭的“真人猎杀场”，活下来的唯一办法是比敌人更疯狂。",
        "tags": [
            "亚马逊",
            "毒枭",
            "人体改造"
        ]
    },
    {
        "title": "米奇的捕鼠器",
        "url": "./movies/movie-251.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 惊悚, 黑色幽默",
        "category": "高清电影",
        "summary": "一个业余杀手潜入一栋别墅执行任务，却碰上三拨同样来“办事”的各路怪人。",
        "tags": [
            "杀手",
            "家庭",
            "误会",
            "巧合",
            "荒诞"
        ]
    },
    {
        "title": "科尔贝格",
        "url": "./movies/movie-252.html",
        "cover": "./102.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "德国",
        "type": "电影",
        "genre": "战争 / 历史",
        "category": "经典回看",
        "summary": "1813年，拿破仑大军压境普鲁士小城科尔贝格，市长与平民以血肉之躯拖住法军，等待一场可能永远不会到来的援军。",
        "tags": [
            "拿破仑战争",
            "孤城对峙",
            "军民同心"
        ]
    },
    {
        "title": "春天情书",
        "url": "./movies/movie-253.html",
        "cover": "./103.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "爱情喜剧",
        "summary": "在AI取代一切的年代，两个失意者用最古老的手写信互相拯救。",
        "tags": [
            "书信",
            "纯爱",
            "错过",
            "治愈"
        ]
    },
    {
        "title": "爱神 （短片）",
        "url": "./movies/movie-254.html",
        "cover": "./104.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利",
        "type": "短片",
        "genre": "爱情 / 奇幻 / 实验",
        "category": "家庭剧情",
        "summary": "深夜博物馆，一尊古罗马爱神雕塑流下一滴泪，唤醒了旁边被遗弃的破损石像。",
        "tags": [
            "雕塑复活",
            "黑白短片",
            "无对白",
            "20分钟"
        ]
    },
    {
        "title": "辉煌年代",
        "url": "./movies/movie-255.html",
        "cover": "./105.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "剧集",
        "genre": "历史，传记",
        "category": "爱情喜剧",
        "summary": "一位底层女工在维多利亚时代的工厂里，用血泪写下了改变国家的改革提案。",
        "tags": [
            "维多利亚时代",
            "工业革命",
            "女权"
        ]
    },
    {
        "title": "浮城记",
        "url": "./movies/movie-256.html",
        "cover": "./106.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻 / 悬疑",
        "category": "高清电影",
        "summary": "一座漂浮在万米高空的城市里，住在底层的居民突然发现，天空之下并非虚空，而是另一座倒立的世界。",
        "tags": [
            "反重力",
            "阶层固化",
            "天空之城",
            "阴谋"
        ]
    },
    {
        "title": "不死劫",
        "url": "./movies/movie-257.html",
        "cover": "./107.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑 / 惊悚 / 科幻",
        "category": "爱情喜剧",
        "summary": "一场失败的基因实验后，五位陌生人发现自己无法被任何方式杀死。",
        "tags": [
            "永生者",
            "医学实验",
            "身份认同",
            "道德困境"
        ]
    },
    {
        "title": "迷踪：第9鹰团",
        "url": "./movies/movie-258.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "历史悬疑",
        "category": "高清电影",
        "summary": "一对性格迥异的考古兄弟，追寻罗马第9军团消失之谜，却在苏格兰古战场挖出了不属于那个时代的物品。",
        "tags": [
            "古罗马",
            "失落的军团",
            "考古谜案",
            "苏格兰高地"
        ]
    },
    {
        "title": "十月的强风",
        "url": "./movies/movie-259.html",
        "cover": "./109.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "Movie",
        "genre": "灾难 / 家庭",
        "category": "爱情喜剧",
        "summary": "超强台风夜，建筑师父亲与叛逆儿子被困百年老宅，发现祖辈防台风设计。",
        "tags": [
            "台风登陆",
            "孤岛求生",
            "老宅守夜",
            "父子和解",
            "建筑智慧"
        ]
    },
    {
        "title": "邂逅在釜山",
        "url": "./movies/movie-260.html",
        "cover": "./110.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "韩国 / 日本",
        "type": "电影",
        "genre": "爱情 / 剧情 / 旅行",
        "category": "热播剧集",
        "summary": "两个各自来釜山逃避生活的陌生人拼了一间海景房，约定只做七天的情侣。",
        "tags": [
            "釜山",
            "异国",
            "偶遇",
            "成年人恋爱",
            "治愈"
        ]
    },
    {
        "title": "白专家",
        "url": "./movies/movie-261.html",
        "cover": "./111.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情、喜剧",
        "category": "环球片库",
        "summary": "因口吃被贬到偏远小镇的音乐教授，发现镇上唯一的学生是一个患有智力障碍的吉他天才。",
        "tags": [
            "音乐",
            "智障人士",
            "乡村治愈",
            "偏见"
        ]
    },
    {
        "title": "左耳",
        "url": "./movies/movie-262.html",
        "cover": "./112.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 青春",
        "category": "环球片库",
        "summary": "左耳失聪的少女用助听器偷听到暗恋男生的秘密，却因此卷入一场校园风暴。",
        "tags": [
            "疼痛",
            "听障",
            "暗恋",
            "校园"
        ]
    },
    {
        "title": "联邦调查局第一季",
        "url": "./movies/movie-263.html",
        "cover": "./113.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 悬疑",
        "category": "亚洲精选",
        "summary": "一支FBI精英小组追查神秘黑客时，发现泄密者竟藏在高层内部。",
        "tags": [
            "特工",
            "卧底",
            "连环案",
            "组织内鬼"
        ]
    },
    {
        "title": "神童布鲁诺",
        "url": "./movies/movie-264.html",
        "cover": "./114.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 心理",
        "category": "家庭剧情",
        "summary": "一个7岁的钢琴神童看似完美无瑕，但他那双忧郁的眼睛里，藏着如何把继父送进监狱的精密计划。",
        "tags": [
            "钢琴",
            "高智商",
            "操纵",
            "家庭伦理",
            "反社会"
        ]
    },
    {
        "title": "未知生物",
        "url": "./movies/movie-265.html",
        "cover": "./115.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 冒险",
        "category": "最新电视剧",
        "summary": "一艘深海科考船带回了一个神秘生物样本，不久后整座沿海城市的人开始做同一个噩梦。",
        "tags": [
            "深海怪物",
            "生物变异",
            "科研伦理",
            "多线叙事"
        ]
    },
    {
        "title": "长沙里：被遗忘的英雄们",
        "url": "./movies/movie-266.html",
        "cover": "./116.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "战争， 历史， 剧情",
        "category": "最新电视剧",
        "summary": "朝鲜战争期间，一群平均年龄17岁的学生兵被派往死亡之地“长沙里”，只为给主力部队争取一天时间。",
        "tags": [
            "真实事件改编",
            "学生兵",
            "悲壮",
            "人性光辉"
        ]
    },
    {
        "title": "太极旗飘扬",
        "url": "./movies/movie-267.html",
        "cover": "./117.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "战争剧情",
        "category": "经典回看",
        "summary": "朝鲜战争爆发，一对兄弟被迫分属南北两军，在太极旗下成了敌人。",
        "tags": [
            "朝鲜战争",
            "兄弟",
            "意识形态",
            "翻拍",
            "史诗"
        ]
    },
    {
        "title": "妈的碎念日记",
        "url": "./movies/movie-268.html",
        "cover": "./118.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭 / 黑色幽默",
        "category": "亚洲精选",
        "summary": "母亲的碎碎念突然具象化为屏幕上的弹幕，女儿的AI只能通过吐槽来维持系统稳定。",
        "tags": [
            "母亲视角",
            "碎碎念",
            "家庭琐事",
            "更年期",
            "和解"
        ]
    },
    {
        "title": "烽火岁月志",
        "url": "./movies/movie-269.html",
        "cover": "./119.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史, 战争",
        "category": "悬疑犯罪",
        "summary": "1937-1945，南京城一条巷弄里五户人家的八年，是中国最苦难岁月的缩影。",
        "tags": [
            "抗日战争",
            "平民史诗",
            "家族兴衰"
        ]
    },
    {
        "title": "文生去看海",
        "url": "./movies/movie-270.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电影",
        "genre": "剧情， 公路， 喜剧",
        "category": "热播剧集",
        "summary": "患有妥瑞氏症的青年文生，为了完成母亲遗愿，和两个精神科病友偷了一辆车，向海边飞驰而去。",
        "tags": [
            "妥瑞氏症",
            "疗愈",
            "友情",
            "逃亡",
            "成长"
        ]
    },
    {
        "title": "人生切割术第二季",
        "url": "./movies/movie-271.html",
        "cover": "./121.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 惊悚",
        "category": "悬疑犯罪",
        "summary": "记忆分割术被全球禁用三年后，“卢蒙公司”的叛逃员工发现，自己从未真正离开过那层楼。",
        "tags": [
            "记忆分割",
            "职场黑暗",
            "反乌托邦",
            "卢蒙公司",
            "意识革命"
        ]
    },
    {
        "title": "一件小事",
        "url": "./movies/movie-272.html",
        "cover": "./122.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 社会 / 家庭",
        "category": "高清电影",
        "summary": "因为楼上邻居每晚挪动椅子的一声“刺啦”，楼下老人与楼上青年从吵架、报警，逐步升级到砸门、泼粪甚至引爆炸弹。",
        "tags": [
            "邻里纠纷",
            "人性",
            "小事变大",
            "荒诞",
            "现实主义"
        ]
    },
    {
        "title": "触底反弹2024",
        "url": "./movies/movie-273.html",
        "cover": "./123.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动励志 / 现实剧情",
        "category": "环球片库",
        "summary": "当一支濒临解散的业余球队和一位被行业淘汰的教练被迫合作，他们能赢回的，远不止一场比赛的比分。",
        "tags": [
            "逆袭",
            "低谷重生",
            "团队协作",
            "职场压力",
            "家庭责任"
        ]
    },
    {
        "title": "3：戴尔·恩哈特的故事",
        "url": "./movies/movie-274.html",
        "cover": "./124.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "传记 / 运动",
        "category": "亚洲精选",
        "summary": "纳斯卡历史上最伟大的车手，用一个决定改写了赛车的安全规则。",
        "tags": [
            "赛车传奇",
            "纳斯卡",
            "命运宿敌",
            "真实人物"
        ]
    },
    {
        "title": "危险的相见礼2",
        "url": "./movies/movie-275.html",
        "cover": "./125.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚 / 喜剧",
        "category": "亚洲精选",
        "summary": "男友的父母是退休特工，而女主是职业骗子；两顿晚饭后，六方势力闯入别墅。",
        "tags": [
            "见家长",
            "连环误会",
            "黑色喜剧"
        ]
    },
    {
        "title": "吸特乐回来了",
        "url": "./movies/movie-276.html",
        "cover": "./126.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 奇幻",
        "category": "动作奇幻",
        "summary": "2014年苏醒的元首成为网红，却无人发现他从未改变信仰。",
        "tags": [
            "黑色幽默",
            "历史反思",
            "政治讽刺",
            "穿越",
            "社交媒体"
        ]
    },
    {
        "title": "纽约黑帮纪实",
        "url": "./movies/movie-277.html",
        "cover": "./127.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪, 纪录风, 都市",
        "category": "经典回看",
        "summary": "两个人走向纽约法庭的方式不同，一个拿着镜头，一个拿着翻译证，一段关于黑帮的“纪实”最终逼出这座城市最诚实也最荒唐的证词。",
        "tags": [
            "法庭叙事",
            "黑人移民",
            "街区记忆",
            "警政边界",
            "非线叙事"
        ]
    },
    {
        "title": "港督最后一个保镖",
        "url": "./movies/movie-278.html",
        "cover": "./128.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧 / 历史",
        "category": "亚洲精选",
        "summary": "1997年6月30日，港督的废材保镖必须在主权移交前追回被调包的国宾礼物。",
        "tags": [
            "1997",
            "英殖末期",
            "乌龙保镖",
            "文物盗窃"
        ]
    },
    {
        "title": "独角兽之死",
        "url": "./movies/movie-279.html",
        "cover": "./129.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "奇幻、剧情、悬疑",
        "category": "动作奇幻",
        "summary": "一名生物学家在北极圈发现了地球上最后一只独角兽，而一家生物科技公司老板想提取它的角来制作长生不老药。",
        "tags": [
            "暗黑童话",
            "灭绝",
            "资本批判",
            "生态环境"
        ]
    },
    {
        "title": "单身男女2",
        "url": "./movies/movie-280.html",
        "cover": "./130.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "category": "最新电视剧",
        "summary": "三个男人同时向一个女孩求婚，而她真正想要的，是那个从未说过爱她的人。",
        "tags": [
            "都市",
            "职场",
            "多角恋",
            "轻松搞笑"
        ]
    },
    {
        "title": "机甲界",
        "url": "./movies/movie-281.html",
        "cover": "./131.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画",
        "genre": "科幻 / 动作",
        "category": "最新电视剧",
        "summary": "在人类躯体无法适应的禁区，被流放的罪犯驾驶着残破机甲寻找救赎。",
        "tags": [
            "硬核",
            "战争",
            "末世"
        ]
    },
    {
        "title": "伍六七之玄武国篇",
        "url": "./movies/movie-282.html",
        "cover": "./132.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集 (动画)",
        "genre": "热血，搞笑，动作",
        "category": "亚洲精选",
        "summary": "最强发型师阿柒终于踏上玄武国土地，等待他的是昔日战友的追杀与身世之谜。",
        "tags": [
            "刺客",
            "失忆",
            "飞刀",
            "方言",
            "国漫之光"
        ]
    },
    {
        "title": "关于哈利的那些事",
        "url": "./movies/movie-283.html",
        "cover": "./133.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 同性 / 喜剧",
        "category": "热播剧集",
        "summary": "高中时把直男同学打了一拳并出柜，十年后两人成了同一家公司的竞争对手。",
        "tags": [
            "甜宠",
            "出柜",
            "好友变恋人",
            "十年"
        ]
    },
    {
        "title": "超级警探",
        "url": "./movies/movie-284.html",
        "cover": "./134.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 喜剧， 犯罪",
        "category": "亚洲精选",
        "summary": "全城最莽的警探和最宅的AI程序员被迫搭档，用一台会吐槽的无人机追捕天才黑客。",
        "tags": [
            "警匪",
            "搭档",
            "高科技",
            "乌龙",
            "爆炸"
        ]
    },
    {
        "title": "神鞭2001",
        "url": "./movies/movie-285.html",
        "cover": "./135.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "中国",
        "type": "电影",
        "genre": "动作, 奇幻",
        "category": "环球片库",
        "summary": "清末遗臣的“神鞭”传人来到2001年，发现他的辫子能抽死“千年虫”病毒，却被国安盯上了。",
        "tags": [
            "辫子功夫",
            "千年虫",
            "港式武打",
            "都市传说"
        ]
    },
    {
        "title": "不对劲的孩子",
        "url": "./movies/movie-286.html",
        "cover": "./136.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "category": "环球片库",
        "summary": "一对夫妇收养了一对双胞胎，却发现他们每到午夜就会用未知语言进行诡异的对话。",
        "tags": [
            "惊悚",
            "悬疑",
            "心理恐怖",
            "家庭"
        ]
    },
    {
        "title": "侦探故事",
        "url": "./movies/movie-287.html",
        "cover": "./137.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 黑色幽默",
        "category": "经典回看",
        "summary": "一个过气侦探小说作家被卷入真实谋杀案，他开始像写小说一样给嫌疑人分配“人设”。",
        "tags": [
            "元叙事",
            "作家探案",
            "洛杉矶黑色",
            "第四面墙"
        ]
    },
    {
        "title": "早安秀",
        "url": "./movies/movie-288.html",
        "cover": "./138.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 职场 / 悬疑",
        "category": "动作奇幻",
        "summary": "一档收视率垫底的晨间节目，在直播时闯进持枪劫匪，主持人的第一反应是：给镜头特写。",
        "tags": [
            "晨间剧",
            "电视台",
            "人质事件",
            "直播",
            "职业精神"
        ]
    },
    {
        "title": "干柴烈火",
        "url": "./movies/movie-289.html",
        "cover": "./139.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "香港",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 动作",
        "category": "高清电影",
        "summary": "一位是严谨的消防督察，一位是乱来的纵火调查员，这对宿敌竟被强制分配到同一个消防局。",
        "tags": [
            "欢喜冤家",
            "消防员",
            "港式幽默",
            "大团圆"
        ]
    },
    {
        "title": "康定情歌",
        "url": "./movies/movie-290.html",
        "cover": "./140.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 歌舞",
        "category": "亚洲精选",
        "summary": "1950年代，一名汉族音乐教授在康定采风时，与藏族哑女通过一段跑马溜溜的旋律，展开了一场无声的旷世绝恋。",
        "tags": [
            "民歌",
            "藏族",
            "纯爱"
        ]
    },
    {
        "title": "洛杉矶土匪",
        "url": "./movies/movie-291.html",
        "cover": "./141.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "动作/喜剧",
        "category": "经典回看",
        "summary": "两个布鲁克林来的小混混，竟在比弗利山庄掀起了一场“罗宾汉式”的狂欢。",
        "tags": [
            "黑人兄弟",
            "劫富济贫",
            "街头智慧",
            "高速追车"
        ]
    },
    {
        "title": "长途跋涉者",
        "url": "./movies/movie-292.html",
        "cover": "./142.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 公路",
        "category": "动作奇幻",
        "summary": "一位身患绝症的父亲，带着与其关系破裂的儿子，踏上了长达三千公里的赎罪徒步之旅。",
        "tags": [
            "徒步",
            "救赎",
            "无人区",
            "父子"
        ]
    },
    {
        "title": "从前有座灵剑山",
        "url": "./movies/movie-293.html",
        "cover": "./143.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 古装, 仙侠",
        "category": "环球片库",
        "summary": "一个来自现代社会的心理医生穿越到修仙世界，用话疗和吐槽把整个修仙界搅得天翻地覆。",
        "tags": [
            "吐槽",
            "修仙",
            "反套路",
            "沙雕"
        ]
    },
    {
        "title": "湘恋日记",
        "url": "./movies/movie-294.html",
        "cover": "./144.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 剧情 / 年代",
        "category": "家庭剧情",
        "summary": "从1998到2008，湘西小镇青梅竹马的两人，在297封从未寄出的情书里活完了彼此的一生。",
        "tags": [
            "湖南",
            "跨越十年",
            "书信",
            "错过",
            "乡土"
        ]
    },
    {
        "title": "完美娇妻养成班",
        "url": "./movies/movie-295.html",
        "cover": "./145.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "都市爱情喜剧电影",
        "genre": "爱情、喜剧、成长、现实讽刺",
        "category": "最新电视剧",
        "summary": "她报名“十周变成完美娇妻”课程想挽回婚姻时，才发现每一道“完美任务”都在替资本和观众改写她的人生。",
        "tags": [
            "综艺婚恋",
            "女性成长",
            "情感操控",
            "舆论工程",
            "婚姻自救"
        ]
    },
    {
        "title": "法式触摸2",
        "url": "./movies/movie-296.html",
        "cover": "./146.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 喜剧",
        "category": "最新电视剧",
        "summary": "上一集结婚的美国女孩发现，法国老公的浪漫是祖传的技能包。",
        "tags": [
            "浪漫喜剧",
            "异国恋",
            "美食",
            "巴黎"
        ]
    },
    {
        "title": "情杀局中局",
        "url": "./movies/movie-297.html",
        "cover": "./147.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪，悬疑，动作",
        "category": "环球片库",
        "summary": "卧底警察被命令接近老大的女人，却发现自己早已陷进了女人和老大共同编织的终极圈套。",
        "tags": [
            "卧底",
            "双重间谍",
            "蛇蝎美人",
            "黑吃黑",
            "港产片复兴"
        ]
    },
    {
        "title": "汪洋中的一条船1978",
        "url": "./movies/movie-298.html",
        "cover": "./148.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 传记 / 家庭",
        "category": "悬疑犯罪",
        "summary": "先天小腿萎缩的男孩，靠着一双手和一口血泪，在偏见与贫困中爬进了大学校门。",
        "tags": [
            "励志",
            "残障",
            "真实改编"
        ]
    },
    {
        "title": "日落日出",
        "url": "./movies/movie-299.html",
        "cover": "./149.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "法国",
        "type": "电影",
        "genre": "爱情， 剧情",
        "category": "最新电视剧",
        "summary": "她是等待日出的守夜人，他是追逐日落的摄影师，两人的爱情只有在永恒的黄昏中才能存在。",
        "tags": [
            "浪漫",
            "哲学",
            "时空交错"
        ]
    },
    {
        "title": "圣母2021",
        "url": "./movies/movie-300.html",
        "cover": "./150.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "法国",
        "type": "电影",
        "genre": "惊悚 / 同性",
        "category": "经典回看",
        "summary": "十七世纪意大利修道院，一位修女声称看见神迹，但她的狂热似乎与另一位修女有关。",
        "tags": [
            "宗教",
            "修女",
            "悬疑",
            "人性",
            "禁忌"
        ]
    },
    {
        "title": "怒海群雄",
        "url": "./movies/movie-301.html",
        "cover": "./1.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 剧情",
        "category": "悬疑犯罪",
        "summary": "为报杀父之仇，前海军陆战队员潜入现代海盗集团，却发现自己兄弟竟是仇人。",
        "tags": [
            "海盗",
            "复仇",
            "兄弟情",
            "海上激战"
        ]
    },
    {
        "title": "五十公里桃花坞3",
        "url": "./movies/movie-302.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺(真人秀)",
        "genre": "真人秀、生活、社交",
        "category": "家庭剧情",
        "summary": "十五位明星被送到距离城市五十公里的荒野，这次他们不是要建乌托邦，而是要在21天内运营一家真正的民宿。",
        "tags": [
            "群居生活",
            "社交实验",
            "明星",
            "治愈",
            "荒诞搞笑"
        ]
    },
    {
        "title": "牵牛和仙女",
        "url": "./movies/movie-303.html",
        "cover": "./3.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、奇幻、民间传说",
        "category": "爱情喜剧",
        "summary": "当代废柴程序员被裁员后回村养牛，半夜发现牛圈里躺着一个自称是“织女实习工号0721”的昏迷仙女。",
        "tags": [
            "牛郎织女新编",
            "反内卷",
            "乡村治愈",
            "天女下凡",
            "田园生活"
        ]
    },
    {
        "title": "童子也是基",
        "url": "./movies/movie-304.html",
        "cover": "./4.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、同性、青春",
        "category": "亚洲精选",
        "summary": "为了拿到童子军最高荣誉勋章，一个深柜少年被迫与恐同的死对头搭档完成荒野生存任务，却在丛林深处互相出了柜。",
        "tags": [
            "出柜",
            "童子军",
            "公路喜剧",
            "自我认同"
        ]
    },
    {
        "title": "2024爱奇艺尖叫之夜",
        "url": "./movies/movie-305.html",
        "cover": "./5.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国内地",
        "type": "综艺 / 晚会",
        "genre": "真人秀，音乐，颁奖",
        "category": "悬疑犯罪",
        "summary": "年度剧集、综艺、音乐人齐聚一堂，台上台下都是大型“活久见”名场面。",
        "tags": [
            "盛典",
            "明星",
            "舞台",
            "年度回顾",
            "粉丝"
        ]
    },
    {
        "title": "祝君早安国语",
        "url": "./movies/movie-306.html",
        "cover": "./6.jpg",
        "year": "1985",
        "yearNumber": 1985,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "家庭剧情",
        "summary": "为了融入即将回归的香港主流社会，只会说台山话的老伯决定苦学国语，闹出了一连串啼笑皆非的故事。",
        "tags": [
            "移民潮",
            "文化冲突",
            "草根",
            "粤语片",
            "励志"
        ]
    },
    {
        "title": "近蛛者杀",
        "url": "./movies/movie-307.html",
        "cover": "./7.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "category": "环球片库",
        "summary": "基因实验失控，一群拥有集体智慧的超智蜘蛛将整栋大厦变成了狩猎场。",
        "tags": [
            "基因变异",
            "蜘蛛灾难",
            "密闭空间"
        ]
    },
    {
        "title": "人间恐怖2",
        "url": "./movies/movie-308.html",
        "cover": "./8.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖， 悬疑",
        "category": "环球片库",
        "summary": "第二季延续日式心理恐怖，六个新故事聚焦现代人最隐秘的恐惧。",
        "tags": [
            "都市传说",
            "单元剧",
            "心理"
        ]
    },
    {
        "title": "无名之辈",
        "url": "./movies/movie-309.html",
        "cover": "./9.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 犯罪",
        "category": "家庭剧情",
        "summary": "两个笨贼抢劫手机店后躲进一个瘫痪女人的家，三人的命运开始失控。",
        "tags": [
            "多线叙事",
            "小人物",
            "荒诞",
            "方言"
        ]
    },
    {
        "title": "荒野一世情",
        "url": "./movies/movie-310.html",
        "cover": "./10.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国 / 加拿大",
        "type": "电影",
        "genre": "爱情，冒险，剧情",
        "category": "最新电视剧",
        "summary": "一个厌倦了都市的女摄影师独自进入北极圈，在暴风雪中误闯了一个独居猎人的木屋，两人在零下四十度的极夜里相爱了。",
        "tags": [
            "荒野求生",
            "治愈系",
            "极简主义",
            "一见钟情",
            "加拿大"
        ]
    },
    {
        "title": "乱世芳华",
        "url": "./movies/movie-311.html",
        "cover": "./11.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 历史 / 战争",
        "category": "悬疑犯罪",
        "summary": "1937年南京城破，一群不同出身的女性在瓦砾中联手撑起一座孤儿院，守护最后的希望。",
        "tags": [
            "民国女性",
            "家国情怀",
            "战火成长",
            "群像"
        ]
    },
    {
        "title": "祭品",
        "url": "./movies/movie-312.html",
        "cover": "./12.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "泰国 / 韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "亚洲精选",
        "summary": "一个纪录片摄制组深入泰国偏远山村，调查一名自称能通灵“大女神”的灵媒，却发现真正的祭品一直在自己身边。",
        "tags": [
            "东南亚邪术",
            "民俗恐怖",
            "灵媒",
            "血祭",
            "山村怪谈"
        ]
    },
    {
        "title": "华伦天奴传",
        "url": "./movies/movie-313.html",
        "cover": "./13.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利",
        "type": "电影",
        "genre": "传记, 剧情",
        "category": "高清电影",
        "summary": "从裁缝店学徒到定义一个时代的时尚帝国，他用红色征服了全世界。",
        "tags": [
            "时尚",
            "设计师",
            "传奇",
            "艺术"
        ]
    },
    {
        "title": "冒牌天神",
        "url": "./movies/movie-314.html",
        "cover": "./14.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "category": "动作奇幻",
        "summary": "一名满腹牢骚的记者被上帝赐予了“七天全能”，却发现让世界变好远比他想象的困难。",
        "tags": [
            "上帝",
            "神力",
            "责任",
            "金·凯瑞"
        ]
    },
    {
        "title": "西西里知名的熊族入侵事件",
        "url": "./movies/movie-315.html",
        "cover": "./15.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "意大利",
        "type": "电影",
        "genre": "动画 / 奇幻 / 家庭",
        "category": "亚洲精选",
        "summary": "为了寻找失踪的儿子，一头熊王带领熊族大举入侵西西里的人类王国，却引发了意想不到的文化融合。",
        "tags": [
            "手绘",
            "欧洲动画",
            "寓言",
            "合家欢",
            "政治隐喻"
        ]
    },
    {
        "title": "褐衣男子",
        "url": "./movies/movie-316.html",
        "cover": "./16.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑 / 冒险 / 爱情",
        "category": "最新电视剧",
        "summary": "伦敦姑娘在车站目击了一起离奇死亡，随之卷入一场跨越南非大草原的钻石争夺战。",
        "tags": [
            "阿加莎",
            "改编",
            "非洲",
            "火车"
        ]
    },
    {
        "title": "来都来了",
        "url": "./movies/movie-317.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 黑色喜剧",
        "category": "悬疑犯罪",
        "summary": "一句“来都来了”，让五个毫不相干的人被困在一辆开往殡仪馆的灵车上。",
        "tags": [
            "荒诞现实",
            "人情社会",
            "多线叙事"
        ]
    },
    {
        "title": "千万喝彩",
        "url": "./movies/movie-318.html",
        "cover": "./18.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "category": "热播剧集",
        "summary": "一个破产中年大叔用最后的十块钱买中冷门马票，却发现自己被全城追杀。",
        "tags": [
            "赌马",
            "小人物",
            "逆袭",
            "港式幽默",
            "草根精神"
        ]
    },
    {
        "title": "那一场呼啸而过的青春",
        "url": "./movies/movie-319.html",
        "cover": "./19.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 悬疑",
        "category": "亚洲精选",
        "summary": "毕业十年同学会，有人提起当年失踪的校花，每个人的回忆版本都不一样。",
        "tags": [
            "校园霸凌",
            "失踪案",
            "非线性叙事"
        ]
    },
    {
        "title": "食色大陆·动态漫",
        "url": "./movies/movie-320.html",
        "cover": "./20.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "动态漫画",
        "genre": "奇幻 / 美食 / 恋爱",
        "category": "环球片库",
        "summary": "普通厨师穿越到以“美食值”为力量的大陆，每道菜都能引发味觉和战斗力的双重爆炸。",
        "tags": [
            "美食系统",
            "异世界",
            "烹饪",
            "后宫",
            "轻松搞笑"
        ]
    },
    {
        "title": "舞台2023",
        "url": "./movies/movie-321.html",
        "cover": "./21.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 音乐",
        "category": "环球片库",
        "summary": "一名过气歌手和一名AI虚拟偶像争夺年度总冠军，而评委是三十年前的她自己。",
        "tags": [
            "选秀",
            "元宇宙",
            "代际冲突",
            "梦想"
        ]
    },
    {
        "title": "脸谱",
        "url": "./movies/movie-322.html",
        "cover": "./22.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，悬疑，犯罪",
        "category": "家庭剧情",
        "summary": "一位毁容的川剧演员通过换脸技术顶替了仇人的身份，却在镜中逐渐迷失了自我。",
        "tags": [
            "川剧变脸",
            "整容复仇",
            "身份互换",
            "伦理困境"
        ]
    },
    {
        "title": "诈死神将",
        "url": "./movies/movie-323.html",
        "cover": "./23.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "电影",
        "genre": "动作，喜剧，历史",
        "category": "高清电影",
        "summary": "朝鲜王朝时代，一个专门骗吃骗喝的江湖术士，被当做战死的将军拉去充军，只能硬着头皮继续骗。",
        "tags": [
            "古代",
            "骗局",
            "战争",
            "搞笑"
        ]
    },
    {
        "title": "非法警戒",
        "url": "./movies/movie-324.html",
        "cover": "./24.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪， 剧情， 惊悚",
        "category": "经典回看",
        "summary": "缉毒组、内务部、黑帮三方同时向一个被栽赃的警察发起追捕，他只能靠自己洗清冤屈。",
        "tags": [
            "警察",
            "腐败",
            "卧底",
            "道德困境",
            "多线叙事"
        ]
    },
    {
        "title": "凤舞英伦",
        "url": "./movies/movie-325.html",
        "cover": "./25.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧 / 歌舞 / 剧情",
        "category": "最新电视剧",
        "summary": "印度裔小伙偷偷参加伦敦变装皇后大赛，一边瞒着传统父母，一边用宝莱坞元素炸翻全场。",
        "tags": [
            "变装皇后",
            "移民",
            "梦想",
            "文化冲突",
            "友情"
        ]
    },
    {
        "title": "恶之三联画",
        "url": "./movies/movie-326.html",
        "cover": "./26.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "日本",
        "type": "电影",
        "genre": "犯罪惊悚, 黑色悬疑, 结构叙事",
        "category": "经典回看",
        "summary": "三个彼此看似无关的罪案故事，在同一支录音笔被反复播放后逐渐重叠，最终指向一名从未露面的操盘者。",
        "tags": [
            "三段故事",
            "连环凶案",
            "伪证游戏",
            "人性崩塌"
        ]
    },
    {
        "title": "楼",
        "url": "./movies/movie-327.html",
        "cover": "./27.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "category": "悬疑犯罪",
        "summary": "一栋诡异居民楼里，每层住户都做着相同的梦，而新搬来的女孩发现了连接他们的致命规则。",
        "tags": [
            "都市怪谈",
            "垂直空间",
            "邻居"
        ]
    },
    {
        "title": "沙漠迷童",
        "url": "./movies/movie-328.html",
        "cover": "./28.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国 / 摩洛哥",
        "type": "电影",
        "genre": "剧情 / 冒险 / 儿童",
        "category": "悬疑犯罪",
        "summary": "八岁的摩洛哥男孩在撒哈拉沙暴中和商队走散，靠着一头年迈的骆驼和一瓶水独自生存了九天。",
        "tags": [
            "撒哈拉",
            "走失",
            "求生",
            "信仰"
        ]
    },
    {
        "title": "24：逆转时空",
        "url": "./movies/movie-329.html",
        "cover": "./29.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻，悬疑",
        "category": "亚洲精选",
        "summary": "刑警林越发现自己每天醒来都在同一天，为了阻止爆炸案，他必须利用循环在 24 小时内找出真凶。",
        "tags": [
            "时间循环",
            "刑侦",
            "硬科幻"
        ]
    },
    {
        "title": "妹汁",
        "url": "./movies/movie-330.html",
        "cover": "./30.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "日本",
        "type": "电影",
        "genre": "动画/成人",
        "category": "亚洲精选",
        "summary": "高中生主角的家里突然住进了五个没有血缘关系的妹妹，从此他的日常和冰箱里的饮料都变得不对劲了。",
        "tags": [
            "后宫",
            "恋爱",
            "妹系"
        ]
    },
    {
        "title": "托婴风暴",
        "url": "./movies/movie-331.html",
        "cover": "./31.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情 / 黑色喜剧",
        "category": "悬疑犯罪",
        "summary": "一对精英夫妇为新生儿聘请了一位完美保姆，却发现孩子被掉包，而真相远比想象中更荒诞。",
        "tags": [
            "保姆",
            "家庭矛盾",
            "阶级",
            "反转"
        ]
    },
    {
        "title": "千面大盗",
        "url": "./movies/movie-332.html",
        "cover": "./32.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作犯罪",
        "category": "环球片库",
        "summary": "他偷的不是金银，是贪官的身份；他戴上千张脸，只为揪出杀父仇人。",
        "tags": [
            "易容术",
            "侠盗",
            "复仇爽片",
            "港式硬汉"
        ]
    },
    {
        "title": "重生暖婚轻宠妻第二季",
        "url": "./movies/movie-333.html",
        "cover": "./33.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情, 剧情",
        "category": "悬疑犯罪",
        "summary": "重生后的顾七七本以为能安稳享受豪门生活，却在新婚夜发现丈夫藏着前世的惊天秘密。",
        "tags": [
            "重生",
            "豪门",
            "甜宠",
            "复仇"
        ]
    },
    {
        "title": "奇峰第三人",
        "url": "./movies/movie-334.html",
        "cover": "./34.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "经典回看",
        "summary": "暴雪封山的民宿里发现三具尸体，但所有住客都坚称自己才是“活着的那一个”。",
        "tags": [
            "暴雪山庄",
            "连环命案",
            "罗生门",
            "心理反转"
        ]
    },
    {
        "title": "墨西哥万岁",
        "url": "./movies/movie-335.html",
        "cover": "./35.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "墨西哥",
        "type": "电影",
        "genre": "剧情 / 历史",
        "category": "经典回看",
        "summary": "一个梦想去美国当歌手的少年，却被亡灵节的一只骷髅缠上，被迫回乡寻根。",
        "tags": [
            "亡灵节",
            "喜剧",
            "家庭"
        ]
    },
    {
        "title": "浪子降魔",
        "url": "./movies/movie-336.html",
        "cover": "./36.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，奇幻，古装",
        "category": "最新电视剧",
        "summary": "一个吃喝嫖赌的浪子被雷劈后，发现自己前世是降魔宗师，而他的酒肉兄弟全是妖魔。",
        "tags": [
            "降魔",
            "浪子",
            "前世今生",
            "剑侠",
            "宿命"
        ]
    },
    {
        "title": "野兽婆婆",
        "url": "./movies/movie-337.html",
        "cover": "./37.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "印度",
        "type": "电影",
        "genre": "惊悚 / 家庭 / 悬疑",
        "category": "经典回看",
        "summary": "新婚妻子发现完美婆婆的温柔面具背后，藏着一个吞噬了三任儿媳的恐怖秘密。",
        "tags": [
            "婆媳关系",
            "心理操控",
            "豪宅",
            "反转",
            "女性对决"
        ]
    },
    {
        "title": "你怜我爱",
        "url": "./movies/movie-338.html",
        "cover": "./38.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "动作奇幻",
        "summary": "茶餐厅女服务员是听障人士，她暗恋每天来吃饭的上班族；而上班族其实是手语翻译，他暗恋她的原因，恰恰是觉得“她不需要被可怜”。",
        "tags": [
            "双向暗恋",
            "听障",
            "手语",
            "茶餐厅",
            "治愈"
        ]
    },
    {
        "title": "丛林野兽",
        "url": "./movies/movie-339.html",
        "cover": "./39.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "爱情喜剧",
        "summary": "一对男女在一个热带度假村约定：谁先遭遇人生中“那件未知的非凡大事”，就要立刻通知对方。",
        "tags": [
            "存在主义",
            "等待",
            "改编自亨利·詹姆斯",
            "微妙情感"
        ]
    },
    {
        "title": "意大利式结婚",
        "url": "./movies/movie-340.html",
        "cover": "./40.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "category": "爱情喜剧",
        "summary": "两个敌对黑手党家族的子女相爱，决定用一场假婚礼来诈出叛徒，但每个人都信以为真。",
        "tags": [
            "婚礼",
            "家族",
            "闹剧",
            "黑手党"
        ]
    },
    {
        "title": "重症外伤中心",
        "url": "./movies/movie-341.html",
        "cover": "./41.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "医疗 / 职业",
        "category": "亚洲精选",
        "summary": "一位因医疗事故被贬到偏远地区的天才外科医生，在设备老旧、人手不足的外伤中心，创造了一个又一个奇迹。",
        "tags": [
            "急救",
            "修罗场",
            "天才医生",
            "系统腐败",
            "极限手术"
        ]
    },
    {
        "title": "冠军2025",
        "url": "./movies/movie-342.html",
        "cover": "./42.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "体育,励志,剧情",
        "category": "环球片库",
        "summary": "冠军不是站在领奖台上的最后一米，而是教练周峥让一支濒临解散的队伍敢于在舆论风口下重新相信彼此。",
        "tags": [
            "体育竞技",
            "励志",
            "青少年",
            "赛场舆论",
            "教练人生"
        ]
    },
    {
        "title": "火线追凶之绝命狙击",
        "url": "./movies/movie-343.html",
        "cover": "./43.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国",
        "type": "电视电影",
        "genre": "动作， 悬疑， 犯罪",
        "category": "高清电影",
        "summary": "租界巡捕房探长追查一桩狙击手连环杀人案，却发现每次自己比凶手快一步到达现场，是因为凶手一直在用他的无线电频道。",
        "tags": [
            "民国",
            "上海滩",
            "连环杀手",
            "法医",
            "枪战"
        ]
    },
    {
        "title": "珍贵的爱情",
        "url": "./movies/movie-344.html",
        "cover": "./44.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "最新电视剧",
        "summary": "在金价飞涨的年代，患有阿兹海默症的妻子只记得丈夫求婚时的金镯子。",
        "tags": [
            "失智症",
            "守候",
            "金饰",
            "遗忘",
            "催泪"
        ]
    },
    {
        "title": "捉妖奇兵粤语",
        "url": "./movies/movie-345.html",
        "cover": "./45.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "中国香港",
        "type": "电影",
        "genre": "灵异喜剧动作",
        "category": "热播剧集",
        "summary": "一队半吊子捉妖人带着一把会误认妖气的古镜闯进港岛老街，结果把一桩旧宅邪案越查越像人心作怪。",
        "tags": [
            "粤语",
            "捉妖",
            "道士",
            "市井喜剧",
            "霓虹夜景"
        ]
    },
    {
        "title": "123，太阳",
        "url": "./movies/movie-346.html",
        "cover": "./46.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "儿童 / 奇幻 / 家庭",
        "category": "经典回看",
        "summary": "八岁女孩得了怪病，只要数到三太阳就会消失一秒，她以为这是自己超能力。",
        "tags": [
            "童年想象",
            "告别",
            "童话现实"
        ]
    },
    {
        "title": "再见祖国",
        "url": "./movies/movie-347.html",
        "cover": "./47.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 历史",
        "category": "亚洲精选",
        "summary": "一家三代人在移民加拿大的前夜被困在启德机场，每个人都在行李箱里藏了一个无法言说的秘密。",
        "tags": [
            "移民",
            "家庭",
            "离散",
            "1997",
            "身份认同"
        ]
    },
    {
        "title": "人生几度秋凉",
        "url": "./movies/movie-348.html",
        "cover": "./48.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情, 家庭, 年代",
        "category": "高清电影",
        "summary": "北京一座百年四合院里，从1960年到2020年，三代人的悲欢离合映照出整个国家的沧桑巨变。",
        "tags": [
            "四合院",
            "文革",
            "改革开放",
            "养老"
        ]
    },
    {
        "title": "蓝精灵大电影",
        "url": "./movies/movie-349.html",
        "cover": "./49.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动画，奇幻",
        "category": "亚洲精选",
        "summary": "当格格巫决定退休，蓝精灵村失去了唯一的“天敌”，蓝精灵们反而因为缺乏目标而走向内部分裂。",
        "tags": [
            "合家欢",
            "怀旧",
            "冒险",
            "反派洗白"
        ]
    },
    {
        "title": "一代名相陈廷敬",
        "url": "./movies/movie-350.html",
        "cover": "./50.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 传记",
        "category": "爱情喜剧",
        "summary": "康熙重臣陈廷敬在权臣明珠与索额图的夹缝中，凭借“等、忍、狠”三字诀，成为一代完人。",
        "tags": [
            "康熙王朝",
            "反腐",
            "官场智慧",
            "权谋"
        ]
    },
    {
        "title": "魅影大盗",
        "url": "./movies/movie-351.html",
        "cover": "./51.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 犯罪 / 动作",
        "category": "最新电视剧",
        "summary": "一名博物馆夜间保安实际上是国际头号通缉犯“魅影”，她偷艺术品不是为了钱，而是为了用真迹替换掉全球博物馆里的“政治正确赝品”。",
        "tags": [
            "怪盗",
            "博物馆",
            "高科技盗窃",
            "女性主角"
        ]
    },
    {
        "title": "星际迷航：发现号第二季",
        "url": "./movies/movie-352.html",
        "cover": "./52.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/冒险",
        "category": "高清电影",
        "summary": "发现号坠入一个由AI神明统治的平行星系，船员们必须伪装成信徒才能活命。",
        "tags": [
            "星际旅行",
            "平行宇宙",
            "人工智能叛乱"
        ]
    },
    {
        "title": "那不是我们",
        "url": "./movies/movie-353.html",
        "cover": "./53.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "高清电影",
        "summary": "一对夫妇痛失爱子，他们花钱定制了一个完美的克隆人，但每当和他拥抱时，心里都有一个声音在说：那不是我们。",
        "tags": [
            "替身",
            "克隆",
            "伦理",
            "文艺"
        ]
    },
    {
        "title": "西贝尔",
        "url": "./movies/movie-354.html",
        "cover": "./54.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "土耳其 / 法国",
        "type": "电影",
        "genre": "剧情",
        "category": "经典回看",
        "summary": "一名哑女为了逃离家族操控，伪装成黑帮老大的情妇，却意外卷入血亲复仇。",
        "tags": [
            "女性觉醒",
            "黑帮",
            "海边小镇"
        ]
    },
    {
        "title": "烽烟",
        "url": "./movies/movie-355.html",
        "cover": "./55.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争 / 剧情",
        "category": "悬疑犯罪",
        "summary": "1944年湘西，一个只会吹唢呐的农村哑巴，意外被卷入一场关乎十万军队生死的情报战，他唯一的武器就是手中的唢呐。",
        "tags": [
            "抗日战争",
            "情报战",
            "小人物",
            "家国情怀",
            "人性"
        ]
    },
    {
        "title": "长公主不可以",
        "url": "./movies/movie-356.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 喜剧, 爱情",
        "category": "爱情喜剧",
        "summary": "权倾朝野的长公主被迫下嫁一个只会种地的憨厚将军，新婚夜她甩出诏书：“这婚，我不认。”",
        "tags": [
            "女强",
            "权谋",
            "反差萌"
        ]
    },
    {
        "title": "三个玛丽亚",
        "url": "./movies/movie-357.html",
        "cover": "./57.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "巴西",
        "type": "电影",
        "genre": "剧情/女性",
        "category": "环球片库",
        "summary": "在父亲的葬礼上，名为“玛丽亚”的三姐妹发现了父亲留下的一个惊天秘密。",
        "tags": [
            "姐妹",
            "家族秘密",
            "父权",
            "拉丁美洲"
        ]
    },
    {
        "title": "杀手请睁眼",
        "url": "./movies/movie-358.html",
        "cover": "./58.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑, 推理, 游戏",
        "category": "高清电影",
        "summary": "八个陌生人受邀玩真人狼人杀，每夜闭眼后，被“刀”的人真的会死。",
        "tags": [
            "桌游",
            "狼人杀",
            "密室",
            "互杀"
        ]
    },
    {
        "title": "战国钟声",
        "url": "./movies/movie-359.html",
        "cover": "./59.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 战争 / 悬疑",
        "category": "经典回看",
        "summary": "战国末期，秦国灭赵前夕，赵国最后一个乐师携带一口神秘编钟潜入秦宫，用钟声传递军机，逆转了一场必败的战争。",
        "tags": [
            "战国",
            "卧底",
            "谍战",
            "权谋",
            "礼乐"
        ]
    },
    {
        "title": "我在天庭收废品",
        "url": "./movies/movie-360.html",
        "cover": "./60.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国",
        "type": "动画剧集",
        "genre": "喜剧、奇幻",
        "category": "最新电视剧",
        "summary": "一个普通回收站小哥被闪电劈中，醒来后发现自己的三轮车能收神仙的废丹和破损法宝。",
        "tags": [
            "凡人修仙",
            "废品回收",
            "体制内神仙",
            "逆袭爽番"
        ]
    },
    {
        "title": "午后的演出",
        "url": "./movies/movie-361.html",
        "cover": "./61.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 音乐",
        "category": "热播剧集",
        "summary": "养老院几位老人为了圆一个曾经的摇滚梦，偷偷排练准备在院庆上演出，却遭到子女与院方的联合阻挠。",
        "tags": [
            "养老院",
            "摇滚",
            "青春无悔",
            "梦想"
        ]
    },
    {
        "title": "盖西：隔壁的连环杀手",
        "url": "./movies/movie-362.html",
        "cover": "./62.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪， 传记， 惊悚",
        "category": "家庭剧情",
        "summary": "一个在社区里扮演小丑逗孩子们开心的富商，在他家地板下埋着29具年轻男性的尸体。",
        "tags": [
            "真实改编",
            "小丑杀手",
            "郊区恶魔",
            "双重人生",
            "令人不安"
        ]
    },
    {
        "title": "智歼叛国党",
        "url": "./movies/movie-363.html",
        "cover": "./63.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "中国香港",
        "type": "动作片",
        "genre": "谍战 / 动作 / 政治惊悚",
        "category": "亚洲精选",
        "summary": "一名被迫潜入叛国组织的情报员，必须在72小时内拆穿内鬼网络，否则整座港城都会在一场精心策划的政变中沦陷。",
        "tags": [
            "反间谍",
            "港式枪战",
            "密电破译",
            "双面卧底",
            "权力阴谋"
        ]
    },
    {
        "title": "我们永远不死",
        "url": "./movies/movie-364.html",
        "cover": "./64.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "奇幻剧",
        "genre": "科幻 / 爱情 / 哲思",
        "category": "高清电影",
        "summary": "当全城的人都会在凌晨三点重置一天，只有一对陌生恋人记得每次死亡，他们开始怀疑“永恒”本身就是惩罚。",
        "tags": [
            "时间循环",
            "记忆保留",
            "都市夜景",
            "双人搭档",
            "生死辩证"
        ]
    },
    {
        "title": "霸王艳姬",
        "url": "./movies/movie-365.html",
        "cover": "./65.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 同性",
        "category": "悬疑犯罪",
        "summary": "民国戏班里，唱花旦的男儿身与将军夫人的一段孽缘，引发了梨园血案与数十年的守望。",
        "tags": [
            "戏班",
            "民国",
            "虐恋",
            "京剧"
        ]
    },
    {
        "title": "我的爱对你说1997",
        "url": "./movies/movie-366.html",
        "cover": "./66.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "爱情、年代",
        "category": "家庭剧情",
        "summary": "1997年香港回归前夕，一对情侣被迫分离，二十年后他们各自的子女竟成了恋人。",
        "tags": [
            "回归",
            "港风",
            "错位恋",
            "时代变迁"
        ]
    },
    {
        "title": "麦特与麦斯",
        "url": "./movies/movie-367.html",
        "cover": "./67.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "电影",
        "genre": "公路 / 喜剧 / 冒险",
        "category": "经典回看",
        "summary": "两个同名只差一个字母的倒霉男人被卷进一场失窃案，从此被迫以一辆快散架的旧车横穿美国，在追兵和笑话之间一路把麻烦越带越大。",
        "tags": [
            "双人搭档",
            "错位任务",
            "州际公路",
            "逃亡",
            "黑色幽默"
        ]
    },
    {
        "title": "冰血暴第三季",
        "url": "./movies/movie-368.html",
        "cover": "./68.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情, 犯罪",
        "category": "家庭剧情",
        "summary": "2010年，明尼苏达州一对沉迷《星际迷航》的兄弟因为一场审问诈骗，引发了一连串涉及黑帮、警察与替身杀手的血案。",
        "tags": [
            "科恩兄弟",
            "黑色幽默",
            "寒冷",
            "宿命"
        ]
    },
    {
        "title": "师父出马",
        "url": "./movies/movie-369.html",
        "cover": "./69.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，喜剧",
        "category": "悬疑犯罪",
        "summary": "一个过气的咏春师父为了还债，被迫收了一个外卖骑手当徒弟，结果徒弟靠送餐功夫横扫地下拳场。",
        "tags": [
            "功夫",
            "外卖",
            "师徒",
            "现代"
        ]
    },
    {
        "title": "追忆潸然",
        "url": "./movies/movie-370.html",
        "cover": "./70.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情, 生活, 剧情",
        "category": "悬疑犯罪",
        "summary": "因车祸失忆的女子在十年后偶遇初恋，却发现自己正嫁给了当年撞她的司机。",
        "tags": [
            "纯爱",
            "虐心",
            "错过",
            "治愈",
            "慢热"
        ]
    },
    {
        "title": "花这样红",
        "url": "./movies/movie-371.html",
        "cover": "./71.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情家庭",
        "category": "最新电视剧",
        "summary": "甘肃农村，一位患有白癜风的女孩拒绝相亲，独自在废窑里种出了一片花海。",
        "tags": [
            "女性成长",
            "乡村现实",
            "倔强",
            "美感"
        ]
    },
    {
        "title": "不可能的任务：最终清算",
        "url": "./movies/movie-372.html",
        "cover": "./72.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 惊悚",
        "category": "悬疑犯罪",
        "summary": "当 AI 控制全球武器库，伊森·亨特的 AI 复制体带着更先进的肉体追杀本体，真正的清算开始了。",
        "tags": [
            "谍战",
            "高科技",
            "绝地反杀"
        ]
    },
    {
        "title": "薛仁贵征东粤语",
        "url": "./movies/movie-373.html",
        "cover": "./73.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "古装 / 历史 / 战争",
        "category": "环球片库",
        "summary": "薛仁贵率军东征，却发现对面敌将戴着与他当年在火场中救下的男孩一样的玉坠。",
        "tags": [
            "粤语配音",
            "唐初",
            "征东",
            "兄弟情",
            "史诗"
        ]
    },
    {
        "title": "女人的觉醒",
        "url": "./movies/movie-374.html",
        "cover": "./74.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "热播剧集",
        "summary": "当了十五年家庭主妇的她，发现丈夫出轨后，用一本日记重新夺回人生。",
        "tags": [
            "女性成长",
            "婚姻危机",
            "复仇"
        ]
    },
    {
        "title": "我孙子的疯狂割礼",
        "url": "./movies/movie-375.html",
        "cover": "./75.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "黑色喜剧/家庭剧情",
        "category": "环球片库",
        "summary": "一场原本只想体面完成的家族仪式，却在三代人的误解、攀比和旧怨中，演变成全城围观的荒唐闹剧。",
        "tags": [
            "家族仪式",
            "代际冲突",
            "文化误会",
            "离谱婚礼",
            "祖孙博弈"
        ]
    },
    {
        "title": "警察与女兵国语",
        "url": "./movies/movie-376.html",
        "cover": "./76.jpg",
        "year": "1982",
        "yearNumber": 1982,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "category": "环球片库",
        "summary": "圣特罗佩警察局迎来首批女兵实习生，老警长带领一帮大老粗男警，闹出一系列性别战争笑料。",
        "tags": [
            "路易·德·菲奈斯",
            "警察局系列",
            "女兵入伍",
            "鸡飞狗跳"
        ]
    },
    {
        "title": "失魂记",
        "url": "./movies/movie-377.html",
        "cover": "./77.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖, 民俗, 悬疑",
        "category": "最新电视剧",
        "summary": "一个女孩被亡魂附体，每当她入睡，就会变成七十年前惨死在此地的日据时代歌姬。",
        "tags": [
            "民间传说",
            "附身",
            "道术",
            "家庭悲剧"
        ]
    },
    {
        "title": "完全杀手",
        "url": "./movies/movie-378.html",
        "cover": "./78.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚 / 复仇犯罪",
        "category": "悬疑犯罪",
        "summary": "一个被行业称作“完全体”的顶级杀手，在最后一单里发现自己要刺杀的目标竟然是未来的自己。",
        "tags": [
            "职业杀手",
            "组织背叛",
            "双重身份",
            "追踪对决",
            "高速反转"
        ]
    },
    {
        "title": "小委托人",
        "url": "./movies/movie-379.html",
        "cover": "./79.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 犯罪, 家庭",
        "category": "爱情喜剧",
        "summary": "两个浑身是伤的孩子找到一位只想混日子的律师，逼他打赢了韩国第一起“儿童举证虐待”案。",
        "tags": [
            "虐童",
            "法律援助",
            "真实改编感"
        ]
    },
    {
        "title": "夹心人粤语",
        "url": "./movies/movie-380.html",
        "cover": "./80.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 爱情 / 家庭",
        "category": "环球片库",
        "summary": "夹在两个女人和两个家族之间的男人，如何在谎言与温情中寻回真实的自己？",
        "tags": [
            "三角关系",
            "家族恩怨",
            "粤语原声",
            "市井生活"
        ]
    },
    {
        "title": "渔家乐续集",
        "url": "./movies/movie-381.html",
        "cover": "./81.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 剧情, 家庭",
        "category": "最新电视剧",
        "summary": "三十年后的渔村面临拆迁，老渔民为了守住祖宅，竟把直播间变成了“水上战场”。",
        "tags": [
            "乡村振兴",
            "直播带货",
            "代际冲突"
        ]
    },
    {
        "title": "死侍与金刚狼",
        "url": "./movies/movie-382.html",
        "cover": "./82.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 动作, 科幻",
        "category": "亚洲精选",
        "summary": "死侍为了拯救自己的宇宙，强行穿越到《金刚狼3》的悲剧时间线，把一个颓废的金刚狼拖去打多元宇宙战争。",
        "tags": [
            "超级英雄",
            "恶搞",
            "多元宇宙",
            "R级"
        ]
    },
    {
        "title": "耶稣的甜血",
        "url": "./movies/movie-383.html",
        "cover": "./83.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利，法国",
        "type": "电影",
        "genre": "惊悚，宗教",
        "category": "家庭剧情",
        "summary": "一名不信神的品酒师受邀前往托斯卡纳古堡，却发现那里举行的“弥撒”需要圣徒的甜血。",
        "tags": [
            "邪教",
            "红酒",
            "仪式",
            "悬疑",
            "反转"
        ]
    },
    {
        "title": "小石头",
        "url": "./movies/movie-384.html",
        "cover": "./84.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 儿童, 公路",
        "category": "热播剧集",
        "summary": "一个被爷爷奶奶带大的山里孩子，抱着一块“陨石”徒步三百公里去找城市里的妈妈。",
        "tags": [
            "留守儿童",
            "寻亲",
            "治愈",
            "现实主义"
        ]
    },
    {
        "title": "铁马少年",
        "url": "./movies/movie-385.html",
        "cover": "./85.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 运动 / 家庭",
        "category": "热播剧集",
        "summary": "一名叛逆少年为完成母亲遗愿，骑着一辆破旧铁马踏上环岛之旅，却在路上发现了父亲隐瞒的惊天秘密。",
        "tags": [
            "单车环岛",
            "叛逆少年",
            "父子和解",
            "热血成长"
        ]
    },
    {
        "title": "两个伊莲娜",
        "url": "./movies/movie-386.html",
        "cover": "./86.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "爱情喜剧",
        "summary": "两个同名女孩的人生在巴黎地铁的一次偶然对视后，开始诡异重叠。",
        "tags": [
            "身份互换",
            "双生花",
            "记忆骗局"
        ]
    },
    {
        "title": "伯爵夫人格拉茨",
        "url": "./movies/movie-387.html",
        "cover": "./87.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "奥地利 / 德国",
        "type": "电影",
        "genre": "剧情 / 历史 / 悬疑",
        "category": "高清电影",
        "summary": "18世纪的匈牙利，一位伯爵夫人为了永葆青春，是不是真的杀害了数百名少女？",
        "tags": [
            "历史改编",
            "贵族",
            "血疑案",
            "女性复仇"
        ]
    },
    {
        "title": "颤栗空间",
        "url": "./movies/movie-388.html",
        "cover": "./88.jpg",
        "year": "2002",
        "yearNumber": 2002,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚，犯罪",
        "category": "环球片库",
        "summary": "刚搬进豪宅的母女，当晚就遭遇三人入室抢劫，却被困在安保最森严的“颤栗室”里——因为门外就是强盗，门内没水没食物。",
        "tags": [
            "密室",
            "母女",
            "入侵"
        ]
    },
    {
        "title": "灵异人形馆",
        "url": "./movies/movie-389.html",
        "cover": "./89.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖",
        "category": "家庭剧情",
        "summary": "六个年轻人夜闯废弃人形馆挑战胆量，却发现人偶们的排列顺序每晚都在变化。",
        "tags": [
            "人偶诅咒",
            "民俗怪谈",
            "密闭空间"
        ]
    },
    {
        "title": "绝地奶霸3",
        "url": "./movies/movie-390.html",
        "cover": "./90.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 动作",
        "category": "亚洲精选",
        "summary": "FBI探员麦肯再次穿上“大妈妈”的行头，潜入豪华游轮阻止一宗跨国网络犯罪。",
        "tags": [
            "男扮女装",
            "卧底",
            "黑人喜剧",
            "胖装束"
        ]
    },
    {
        "title": "迷魂之密室逃脱",
        "url": "./movies/movie-391.html",
        "cover": "./91.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "category": "家庭剧情",
        "summary": "六个人在一间无法打开的密室里醒来，每个人手腕上都有一个倒计时，房间会按倒计时顺序杀人。",
        "tags": [
            "密室",
            "失忆",
            "心理游戏",
            "凶手在内部"
        ]
    },
    {
        "title": "菩提树",
        "url": "./movies/movie-392.html",
        "cover": "./92.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "剧情, 奇幻, 悬疑",
        "category": "经典回看",
        "summary": "村口的千年菩提树结出了一颗金芒果，吃掉它的家族成员开始轮回复活，但复活后的亲人们性情大变。",
        "tags": [
            "宗教轮回",
            "家族诅咒",
            "前世今生",
            "印度风情"
        ]
    },
    {
        "title": "安东尼娅家族",
        "url": "./movies/movie-393.html",
        "cover": "./93.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "荷兰 / 比利时",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 女性",
        "category": "经典回看",
        "summary": "二战后，安东尼娅带着女儿回到故乡，用一生建立了一个没有男人的母系乌托邦。",
        "tags": [
            "母系家族",
            "田园",
            "生命礼赞"
        ]
    },
    {
        "title": "兄弟之情",
        "url": "./movies/movie-394.html",
        "cover": "./94.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 亲情",
        "category": "经典回看",
        "summary": "90年代东北下岗潮中，一对亲兄弟因为一张假钞反目，二十年后，成为警察的哥哥逮捕了成为悍匪的弟弟。",
        "tags": [
            "东北",
            "下岗潮",
            "兄弟反目",
            "救赎"
        ]
    },
    {
        "title": "运动肥侠",
        "url": "./movies/movie-395.html",
        "cover": "./95.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 运动 / 励志",
        "category": "动作奇幻",
        "summary": "一个被全城嘲笑的外卖胖小子，意外被拉进濒临解散的跑团，靠一身“笨办法”跑出了谁都没想到的冠军路。",
        "tags": [
            "草根逆袭",
            "胖子跑者",
            "社区球队",
            "训练翻盘",
            "热血合拍"
        ]
    },
    {
        "title": "校队风云",
        "url": "./movies/movie-396.html",
        "cover": "./96.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "运动， 青春， 剧情",
        "category": "家庭剧情",
        "summary": "一个数学天才被强行塞进校橄榄球队，他用微积分重新设计了每一套战术，然后开始连胜。",
        "tags": [
            "高中橄榄球",
            "更衣室政治",
            "天赋少年"
        ]
    },
    {
        "title": "夏天，有风吹过",
        "url": "./movies/movie-397.html",
        "cover": "./97.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 同性, 家庭",
        "category": "动作奇幻",
        "summary": "两个留守少年在风车田里度过了一个夏天，他们约定等风车转完第十万圈就一起离开这里。",
        "tags": [
            "乡村",
            "初恋",
            "告别",
            "风能",
            "留守少年"
        ]
    },
    {
        "title": "外甥芭蕾团",
        "url": "./movies/movie-398.html",
        "cover": "./98.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 运动",
        "category": "最新电视剧",
        "summary": "五个码头搬运工为了帮外甥女保住舞蹈学校，决定组团参加国际芭蕾大赛——穿着工装靴跳《天鹅湖》。",
        "tags": [
            "硬汉芭蕾",
            "反差萌",
            "逆袭"
        ]
    },
    {
        "title": "狂赌之渊 双",
        "url": "./movies/movie-399.html",
        "cover": "./99.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 悬疑",
        "category": "最新电视剧",
        "summary": "早乙女芽亚里转入百花王学园，发现这里的一切都由残酷的赌博决定，而她的对手是一群天生的“赌博狂人”。",
        "tags": [
            "校园",
            "赌博",
            "心理战",
            "漫改"
        ]
    },
    {
        "title": "死亡契约",
        "url": "./movies/movie-400.html",
        "cover": "./100.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "经典回看",
        "summary": "他签了一份“死亡契约”：如果他死了，保险公司会赔给仇人一亿。",
        "tags": [
            "法律",
            "复仇",
            "伦理",
            "反转",
            "暗黑"
        ]
    },
    {
        "title": "耐撕侦探",
        "url": "./movies/movie-401.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "喜剧 / 悬疑",
        "category": "经典回看",
        "summary": "一个过气私家侦探被迫与爱直播的网红搭档，边破案边制造全网爆笑名场面。",
        "tags": [
            "侦探",
            "搭档",
            "黑色幽默",
            "网红",
            "直播破案"
        ]
    },
    {
        "title": "康德第一保镖传奇",
        "url": "./movies/movie-402.html",
        "cover": "./102.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作 / 传记 / 历史",
        "category": "亚洲精选",
        "summary": "张作霖麾下第一保镖“康德”的真实事迹改编，以一敌十，誓死守护少帅。",
        "tags": [
            "民国功夫",
            "保镖",
            "东北军阀",
            "硬桥硬马"
        ]
    },
    {
        "title": "大泽之水",
        "url": "./movies/movie-403.html",
        "cover": "./103.jpg",
        "year": "1941",
        "yearNumber": 1941,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 爱情",
        "category": "悬疑犯罪",
        "summary": "一个逃跑的杀人犯躲进沼泽，一对看守灯塔的夫妇在道德与欲望间摇摆。",
        "tags": [
            "黑色电影",
            "沼泽",
            "三角恋",
            "宿命"
        ]
    },
    {
        "title": "双姝艳",
        "url": "./movies/movie-404.html",
        "cover": "./104.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "武侠 / 悬疑",
        "category": "亚洲精选",
        "summary": "一对失散多年的孪生姐妹，一个成为冷面杀手，一个沦为青楼歌女，命运却安排她们互换身份。",
        "tags": [
            "姐妹情深",
            "替身复仇",
            "古装动作",
            "反转结局"
        ]
    },
    {
        "title": "焦裕禄",
        "url": "./movies/movie-405.html",
        "cover": "./105.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记, 剧情",
        "category": "爱情喜剧",
        "summary": "在他生命的最后475天，他用自己的骨头敲响了兰考脱贫的希望之钟。",
        "tags": [
            "主旋律",
            "楷模",
            "治沙",
            "真实改编"
        ]
    },
    {
        "title": "我的早更女友",
        "url": "./movies/movie-406.html",
        "cover": "./106.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 喜剧, 剧情",
        "category": "爱情喜剧",
        "summary": "26岁的精英白领突然进入更年期，暴躁的她遇到了一个比她还“佛系”的咖啡师。",
        "tags": [
            "早发性更年期",
            "治愈系",
            "都市男女"
        ]
    },
    {
        "title": "茧镇奇缘",
        "url": "./movies/movie-407.html",
        "cover": "./107.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑 / 民国 / 爱情",
        "category": "环球片库",
        "summary": "一座被蚕丝工坊与旧宅阴影包裹的古镇里，少女的归来，撬开了连祖辈都不敢说出口的血色秘密。",
        "tags": [
            "古镇秘案",
            "豪门恩怨",
            "身世之谜",
            "机关密室",
            "禁忌情感"
        ]
    },
    {
        "title": "接吻和化妆",
        "url": "./movies/movie-408.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情, 职场, 喜剧",
        "category": "最新电视剧",
        "summary": "口红一哥被迫与禁欲系化妆师契约结婚，为了带货，他们决定假戏真做。",
        "tags": [
            "美妆",
            "契约恋爱",
            "先婚后爱",
            "浪漫"
        ]
    },
    {
        "title": "双凤夺凰",
        "url": "./movies/movie-409.html",
        "cover": "./109.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装 / 权谋 / 爱情",
        "category": "动作奇幻",
        "summary": "两位被命运互换人生的女子，一个要夺回属于自己的凤位，一个要守住别人给她的皇权，却在对抗中一步步看清真相。",
        "tags": [
            "双女主",
            "宫廷权谋",
            "旧案翻盘",
            "身世之谜",
            "命运对照"
        ]
    },
    {
        "title": "牛郎织女粤语",
        "url": "./movies/movie-410.html",
        "cover": "./110.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "古装，神话，爱情",
        "category": "热播剧集",
        "summary": "织女私自下凡嫁给了牛郎，王母娘娘划出银河隔开二人，每年只许七夕相会一次。",
        "tags": [
            "TVB",
            "人神恋",
            "鹊桥",
            "虐心",
            "港剧经典"
        ]
    },
    {
        "title": "白日守门人",
        "url": "./movies/movie-411.html",
        "cover": "./111.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "巴西",
        "type": "电影",
        "genre": "剧情/同性",
        "category": "环球片库",
        "summary": "贫困的大学生为了赚取学费，白天在富人区当门卫，夜里却成为那些富太太丈夫们秘密会所里的“服务生”。",
        "tags": [
            "阶层差异",
            "社会边缘",
            "欲望"
        ]
    },
    {
        "title": "战利品第一季",
        "url": "./movies/movie-412.html",
        "cover": "./112.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧 / 犯罪",
        "category": "家庭剧情",
        "summary": "五个被社会淘汰的失败者组成盗窃团队，目标却是一罐价值三千万美元的过期鲱鱼罐头。",
        "tags": [
            "黑色幽默",
            "盗窃",
            "废物联盟",
            "逆袭"
        ]
    },
    {
        "title": "1997所向无敌",
        "url": "./movies/movie-413.html",
        "cover": "./113.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "传记 / 运动",
        "category": "爱情喜剧",
        "summary": "1997年，一名黑人聋哑拳击手用三场不被看好的比赛，逼得拉斯维加斯所有赌场修改了赔率规则。",
        "tags": [
            "拳击",
            "种族平权",
            "九十年代",
            "真实故事改编"
        ]
    },
    {
        "title": "仁医胡佩兰",
        "url": "./movies/movie-414.html",
        "cover": "./114.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 传记, 医疗",
        "category": "最新电视剧",
        "summary": "97岁仍坐诊的妇科医生胡佩兰，在手术台上用尽最后一丝力气，诠释了何为医者。",
        "tags": [
            "感动",
            "真实事件",
            "医者仁心",
            "老年"
        ]
    },
    {
        "title": "回到小学那1天",
        "url": "./movies/movie-415.html",
        "cover": "./115.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻/剧情",
        "category": "最新电视剧",
        "summary": "35岁的失败者回到小学毕业那天，他要阻止父母离婚，却弄巧成拙。",
        "tags": [
            "穿越",
            "童年",
            "和解",
            "催泪",
            "成长"
        ]
    },
    {
        "title": "无极限之危情速递",
        "url": "./movies/movie-416.html",
        "cover": "./116.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "最新电视剧",
        "summary": "兼职跑腿小哥接了一单“午夜送达一份神秘包裹”，却发现全市黑道都在抢它。",
        "tags": [
            "快递员",
            "限时送达",
            "城市追逐",
            "黑吃黑"
        ]
    },
    {
        "title": "新扎师妹3",
        "url": "./movies/movie-417.html",
        "cover": "./117.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，动作",
        "category": "高清电影",
        "summary": "糊涂女警阿娟再次卧底，这次目标是国际人贩集团，结果发现大佬是她的忠实影迷。",
        "tags": [
            "警匪",
            "乌龙",
            "卧底",
            "港式无厘头",
            "爱情"
        ]
    },
    {
        "title": "达利和土豆汤",
        "url": "./movies/movie-418.html",
        "cover": "./118.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情, 喜剧, 美食",
        "category": "高清电影",
        "summary": "华尔街天才分析师被迫回乡继承破败土豆汤店，却遇见了在这里隐居的抽象派画家，她的人生如她的画一样让人看不懂。",
        "tags": [
            "艺术",
            "投资",
            "反差萌"
        ]
    },
    {
        "title": "假日风情粤语",
        "url": "./movies/movie-419.html",
        "cover": "./119.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 家庭",
        "category": "高清电影",
        "summary": "一群临时拼成的旅客在离岛假期里被迫同住一间民宿，结果把各自藏了多年的心事都晾在了海风里。",
        "tags": [
            "离岛旅行",
            "粤语对白",
            "旧照片",
            "误会和解",
            "夏日海风"
        ]
    },
    {
        "title": "帝国时代 下",
        "url": "./movies/movie-420.html",
        "cover": "./120.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史，战争，史诗",
        "category": "高清电影",
        "summary": "立国百年后，火药将帝国推向生死边缘，最后的将军必须在忠诚于旧主和拯救万民之间做出终极选择。",
        "tags": [
            "王朝末路",
            "冷热兵器交替",
            "人性抉择",
            "大场面"
        ]
    },
    {
        "title": "相煎上海滩",
        "url": "./movies/movie-421.html",
        "cover": "./121.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 历史",
        "category": "环球片库",
        "summary": "1941年，上海滩两兄弟分属重庆和延安，他们互相算计，却发现最大的敌人其实是彼此身后的影子。",
        "tags": [
            "民国",
            "兄弟",
            "谍战",
            "反转"
        ]
    },
    {
        "title": "爱丽丝镜中奇遇",
        "url": "./movies/movie-422.html",
        "cover": "./122.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 家庭",
        "category": "最新电视剧",
        "summary": "长大后的爱丽丝为拯救被诅咒的仙境，必须穿过镜子，进入一个所有规则都与现实相反的世界。",
        "tags": [
            "镜中世界",
            "时间逆转",
            "自我认同",
            "哥特美学"
        ]
    },
    {
        "title": "盾之勇者成名录第四季",
        "url": "./movies/movie-423.html",
        "cover": "./123.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻, 冒险",
        "category": "悬疑犯罪",
        "summary": "被全世界诬陷为强奸犯的盾之勇者，在第四季中终于要向幕后黑手挥出愤怒的一拳。",
        "tags": [
            "异世界",
            "复仇",
            "成长",
            "战斗",
            "轻小说改"
        ]
    },
    {
        "title": "榴火红",
        "url": "./movies/movie-424.html",
        "cover": "./124.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情 / 悬疑",
        "category": "家庭剧情",
        "summary": "马来西亚雨林的榴莲园里，失踪三年的少女突然归来，浑身散发着腐败榴莲的甜臭。",
        "tags": [
            "榴莲",
            "罪案",
            "热带",
            "女性复仇"
        ]
    },
    {
        "title": "汉内克的导演秘密",
        "url": "./movies/movie-425.html",
        "cover": "./125.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "奥地利",
        "type": "纪录片",
        "genre": "纪录片 / 传记",
        "category": "经典回看",
        "summary": "隐藏摄影机拍下了导演哈内克折磨演员的全过程，也拍下了艺术的残忍与伟大。",
        "tags": [
            "冷暴力",
            "方法论",
            "片场揭秘",
            "哈内克"
        ]
    },
    {
        "title": "清除",
        "url": "./movies/movie-426.html",
        "cover": "./126.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 动作 / 惊悚",
        "category": "热播剧集",
        "summary": "他们发明了能定向删除痛苦记忆的技术，却忘了删除“反抗”这个本能。",
        "tags": [
            "反乌托邦",
            "记忆删除",
            "极权"
        ]
    },
    {
        "title": "暗恋99天",
        "url": "./movies/movie-427.html",
        "cover": "./127.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "动作奇幻",
        "summary": "暗恋女神99天的保安，在第100天决定告白时，却发现她是自己失散多年的亲妹妹。",
        "tags": [
            "暗恋",
            "倒计时",
            "青春",
            "遗憾"
        ]
    },
    {
        "title": "非关男孩",
        "url": "./movies/movie-428.html",
        "cover": "./128.jpg",
        "year": "2002",
        "yearNumber": 2002,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 家庭",
        "category": "热播剧集",
        "summary": "一个不靠谱的单身汉为泡单亲妈妈而假装有孩子，结果却与她的自闭症儿子结下不解之缘。",
        "tags": [
            "单亲",
            "成长",
            "忘年交",
            "治愈",
            "谎言"
        ]
    },
    {
        "title": "借脸",
        "url": "./movies/movie-429.html",
        "cover": "./129.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "科幻, 惊悚",
        "category": "爱情喜剧",
        "summary": "在刷脸支付的时代，一个失业男人的“脸”被人盗用，他成了所有罪行的替罪羊。",
        "tags": [
            "人脸识别",
            "身份盗窃",
            "科技伦理",
            "全民监控"
        ]
    },
    {
        "title": "公主与出租车司机",
        "url": "./movies/movie-430.html",
        "cover": "./130.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆 / 泰国",
        "type": "爱情电影",
        "genre": "爱情 / 喜剧 / 公路",
        "category": "爱情喜剧",
        "summary": "一位偷跑出宫的公主和一个只想准时交车的出租车司机，被迫一起穿过整座城市，在追兵与误会之间把彼此的人生都改了。",
        "tags": [
            "身份错位",
            "异国追逃",
            "司机与王室",
            "临时同盟",
            "浪漫逃亡"
        ]
    },
    {
        "title": "月之子",
        "url": "./movies/movie-431.html",
        "cover": "./131.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻, 悬疑, 青春",
        "category": "经典回看",
        "summary": "每个月圆之夜，一所高中里就会有一个人获得“月之能力”，但许愿的代价是失去一段最重要的记忆。",
        "tags": [
            "月亮",
            "异能",
            "学校",
            "神秘事件",
            "群像"
        ]
    },
    {
        "title": "我们这一班",
        "url": "./movies/movie-432.html",
        "cover": "./132.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "校园 / 青春 / 剧情",
        "category": "亚洲精选",
        "summary": "一群高三学生被塞进同一间教室，在倒计时的黑板、不断翻新的排名和各自秘密里，学会如何把“我们”活成真的。",
        "tags": [
            "班级群像",
            "青春烦恼",
            "升学压力",
            "师生关系",
            "友情"
        ]
    },
    {
        "title": "陌生人：第二章",
        "url": "./movies/movie-433.html",
        "cover": "./133.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，惊悚，悬疑",
        "category": "热播剧集",
        "summary": "在第一部那个血腥的夜晚过去一年后，唯一的幸存者发现，那三个戴面具的陌生人，竟然从未离开过她的房子。",
        "tags": [
            "入侵",
            "密室",
            "反转",
            "心理"
        ]
    },
    {
        "title": "员工入口",
        "url": "./movies/movie-434.html",
        "cover": "./134.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑 / 职场",
        "category": "高清电影",
        "summary": "只有底层员工才走的入口，通往的却是这家财阀集团最肮脏的秘密。",
        "tags": [
            "阶级对立",
            "职场霸凌",
            "复仇"
        ]
    },
    {
        "title": "密室大逃脱第四季",
        "url": "./movies/movie-435.html",
        "cover": "./135.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "综艺/剧集",
        "genre": "悬疑， 冒险， 真人秀",
        "category": "高清电影",
        "summary": "这季不再只是节目，六名玩家被困在一个真正的死亡密室中，而摄像头还在直播。",
        "tags": [
            "密室",
            "烧脑",
            "解密",
            "团队"
        ]
    },
    {
        "title": "魔鬼警长地域镇",
        "url": "./movies/movie-436.html",
        "cover": "./136.jpg",
        "year": "1990",
        "yearNumber": 1990,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "category": "热播剧集",
        "summary": "一名虔诚的天主教徒警长卧底进入爱尔兰黑帮，却发现自己比魔鬼更像魔鬼。",
        "tags": [
            "黑帮卧底",
            "爱尔兰裔",
            "宗教隐喻"
        ]
    },
    {
        "title": "石榴花开",
        "url": "./movies/movie-437.html",
        "cover": "./137.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭，历史",
        "category": "爱情喜剧",
        "summary": "奶奶说石榴籽抱团不分离，可1958年那场婚礼后，家里再没人敢提“石榴”二字。",
        "tags": [
            "新疆往事",
            "三代女性",
            "石榴隐喻"
        ]
    },
    {
        "title": "跟哥哥走玛雅：九把钥匙",
        "url": "./movies/movie-438.html",
        "cover": "./138.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国 / 墨西哥",
        "type": "电影",
        "genre": "动作 / 冒险 / 奇幻",
        "category": "高清电影",
        "summary": "沉默寡言的考古学家哥哥带着鬼马妹妹前往玛雅丛林寻找传说中的九把钥匙，试图打开一扇可以预见未来的“太阳之门”。",
        "tags": [
            "丛林探险",
            "考古谜题",
            "图腾",
            "兄妹情"
        ]
    },
    {
        "title": "母女大战",
        "url": "./movies/movie-439.html",
        "cover": "./139.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、动作",
        "category": "经典回看",
        "summary": "一对关系疏离的母女在前往度假胜地的途中，被卷入一场国际间谍阴谋，不得不联手干翻全副武装的杀手。",
        "tags": [
            "公路喜剧",
            "母女关系",
            "误打误撞",
            "特工乌龙"
        ]
    },
    {
        "title": "闯江湖",
        "url": "./movies/movie-440.html",
        "cover": "./140.jpg",
        "year": "1985",
        "yearNumber": 1985,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，犯罪",
        "category": "动作奇幻",
        "summary": "七十年代九龙城寨，两个从大陆偷渡来的青年，用拳头和血泪闯出一片天，却最终兵戎相见。",
        "tags": [
            "港式黑帮",
            "兄弟情",
            "怀旧"
        ]
    },
    {
        "title": "秘不可言",
        "url": "./movies/movie-441.html",
        "cover": "./141.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "category": "热播剧集",
        "summary": "丈夫意外去世后，妻子回到老宅整理遗物，却发现日记里夹着一张“不要住在这里”的纸条。",
        "tags": [
            "心理",
            "家庭",
            "秘密",
            "反转",
            "密室"
        ]
    },
    {
        "title": "一千零一只手",
        "url": "./movies/movie-442.html",
        "cover": "./142.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "印度",
        "type": "电影",
        "genre": "歌舞 / 奇幻 / 冒险",
        "category": "高清电影",
        "summary": "被诅咒只能使用“一只手”的舞者，为了拯救族人，必须找回被诸神封印的“一千零一只手臂”。",
        "tags": [
            "神话改编",
            "视觉奇观",
            "多臂神像",
            "宿命"
        ]
    },
    {
        "title": "鬼红鞋",
        "url": "./movies/movie-443.html",
        "cover": "./143.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "爱情喜剧",
        "summary": "一双在跳蚤市场出现的复古红鞋，每任女主人都离奇消失，她会是下一个吗？",
        "tags": [
            "都市怪谈",
            "诅咒",
            "女性视角",
            "心理惊悚"
        ]
    },
    {
        "title": "第一条规则",
        "url": "./movies/movie-444.html",
        "cover": "./144.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、犯罪",
        "category": "动作奇幻",
        "summary": "地下搏击俱乐部的第一条规则是永远不能提俱乐部，但有人打破后，所有人都开始离奇死亡。",
        "tags": [
            "地下搏击",
            "兄弟复仇",
            "血腥规则"
        ]
    },
    {
        "title": "乌鸦1943",
        "url": "./movies/movie-445.html",
        "cover": "./145.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争, 悬疑, 惊悚",
        "category": "最新电视剧",
        "summary": "1943年的伪满哈尔滨，一只神秘乌鸦反复出现在每个抗日地下党牺牲的现场，日本军官怀疑乌鸦是间谍。",
        "tags": [
            "谍战黑马",
            "动物隐喻",
            "孤城困局"
        ]
    },
    {
        "title": "美丽拳王",
        "url": "./movies/movie-446.html",
        "cover": "./146.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "电影",
        "genre": "剧情、运动、传记",
        "category": "亚洲精选",
        "summary": "一个从小喜欢化妆的男孩，为了赚钱变性，却意外成为了泰拳冠军，震惊了全世界。",
        "tags": [
            "泰拳",
            "变性人",
            "励志",
            "真实改编"
        ]
    },
    {
        "title": "七日的王妃",
        "url": "./movies/movie-447.html",
        "cover": "./147.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "韩国",
        "type": "电视剧",
        "genre": "历史 / 爱情 / 古装",
        "category": "环球片库",
        "summary": "历史上在位时间最短的王妃，用七天时间完成了对暴君丈夫的救赎与复仇。",
        "tags": [
            "朝鲜王朝",
            "悲恋",
            "权力斗争",
            "政治婚姻",
            "逆袭"
        ]
    },
    {
        "title": "炽热情缘粤语",
        "url": "./movies/movie-448.html",
        "cover": "./148.jpg",
        "year": "1996",
        "yearNumber": 1996,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "环球片库",
        "summary": "三个夜晚，一个即将倒闭的茶餐厅，两对男女用粤语俚语互诉着不敢说出口的爱意。",
        "tags": [
            "怀旧",
            "茶餐厅",
            "错过",
            "粤语原声"
        ]
    },
    {
        "title": "无名伟人",
        "url": "./movies/movie-449.html",
        "cover": "./149.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情 / 传记 / 历史",
        "category": "动作奇幻",
        "summary": "他是档案室里被永久封存的代号，家人以为他是叛徒，直到五十年后的一串摩斯密码被破译。",
        "tags": [
            "隐蔽战线",
            "信仰",
            "催泪"
        ]
    },
    {
        "title": "天生爱神",
        "url": "./movies/movie-450.html",
        "cover": "./150.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 奇幻 / 喜剧",
        "category": "悬疑犯罪",
        "summary": "她以为自己只是个替人撮合姻缘的红娘，直到一位落魄“爱神”出现，告诉她天生就会把别人错过的真心看得一清二楚。",
        "tags": [
            "命运红线",
            "都市爱情",
            "误会连环",
            "神秘来客",
            "自我觉醒"
        ]
    },
    {
        "title": "明天的黎明",
        "url": "./movies/movie-451.html",
        "cover": "./1.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "剧集",
        "genre": "科幻, 悬疑, 剧情",
        "category": "热播剧集",
        "summary": "一座法国小镇每天黎明都会重置时间，只有一个人记得昨天发生了什么。",
        "tags": [
            "时间循环",
            "小镇秘密",
            "哲学",
            "烧脑"
        ]
    },
    {
        "title": "准妈妈应采儿的甜蜜生活",
        "url": "./movies/movie-452.html",
        "cover": "./2.jpg",
        "year": "2008",
        "yearNumber": 2008,
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧 / 家庭",
        "category": "热播剧集",
        "summary": "金牌公关女强人意外怀孕，却发现最大的危机不是客户，而是身边那群“猪队友”家人。",
        "tags": [
            "怀孕",
            "职场女性",
            "港式幽默"
        ]
    },
    {
        "title": "有女于归",
        "url": "./movies/movie-453.html",
        "cover": "./3.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 古装",
        "category": "爱情喜剧",
        "summary": "清末民初，江南小镇上四代同堂的顾家，为了五个女儿的婚事，上演了一出出啼笑皆非的人间悲喜剧。",
        "tags": [
            "古代女性",
            "婚嫁习俗",
            "情感细腻",
            "年代变迁"
        ]
    },
    {
        "title": "无声的证言第二十七季",
        "url": "./movies/movie-454.html",
        "cover": "./4.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑，犯罪，法医",
        "category": "动作奇幻",
        "summary": "法医团队接手一批二战时期的无名尸骨，却牵扯出当今皇室的一桩血脉秘密。",
        "tags": [
            "法医",
            "长剧",
            "冷案",
            "真相",
            "女性"
        ]
    },
    {
        "title": "奥尔嘉",
        "url": "./movies/movie-455.html",
        "cover": "./5.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情, 传记, 战争",
        "category": "最新电视剧",
        "summary": "苏联女狙击手奥尔嘉击毙309名德军，但她最大的敌人却是自己内心的鬼魂。",
        "tags": [
            "女狙击手",
            "二战",
            "东线",
            "创伤"
        ]
    },
    {
        "title": "美国印度小姐",
        "url": "./movies/movie-456.html",
        "cover": "./6.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，剧情",
        "category": "悬疑犯罪",
        "summary": "一个德州土生土长的印度裔女孩去参加“美国小姐”选美，却发现她妈妈偷偷给她报名了“印度小姐”比赛。",
        "tags": [
            "选美",
            "移民",
            "文化冲突"
        ]
    },
    {
        "title": "时间与城市",
        "url": "./movies/movie-457.html",
        "cover": "./7.jpg",
        "year": "2008",
        "yearNumber": 2008,
        "region": "英国",
        "type": "电影",
        "genre": "纪录片, 散文电影",
        "category": "最新电视剧",
        "summary": "导演用黑白影像和诗意的旁白，讲述了他的家乡利物浦从工业辉煌到衰败的半个世纪。",
        "tags": [
            "黑白",
            "利物浦",
            "怀旧",
            "诗电影"
        ]
    },
    {
        "title": "鼓楼外",
        "url": "./movies/movie-458.html",
        "cover": "./8.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 年代",
        "category": "最新电视剧",
        "summary": "鼓楼修缮时发现一本六十年前的日记，揭开了围绕一件失窃文物、两个家庭与一次“意外”坠楼的连环谎言。",
        "tags": [
            "钟鼓楼",
            "文物盗窃",
            "父子情"
        ]
    },
    {
        "title": "大雄的月球探测记",
        "url": "./movies/movie-459.html",
        "cover": "./9.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻,冒险,青春成长",
        "category": "动作奇幻",
        "summary": "一群把探险当玩闹的少年意外踏入月球背面实验站后，才发现自己正扛着人类最珍贵的记忆钥匙，任何一处选择都可能让未来变形。",
        "tags": [
            "月球探索",
            "友情",
            "家庭情感",
            "时间伦理",
            "科幻奇想"
        ]
    },
    {
        "title": "惊悚50州第二季",
        "url": "./movies/movie-460.html",
        "cover": "./10.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖 / 惊悚 / 诗选剧",
        "category": "爱情喜剧",
        "summary": "每集一个基于美国各州真实都市传说的恐怖故事，这一季带你深入最黑暗的人性腹地。",
        "tags": [
            "都市传说",
            "血腥",
            "反转",
            "独立单元",
            "人性"
        ]
    },
    {
        "title": "基督山伯爵",
        "url": "./movies/movie-461.html",
        "cover": "./11.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情， 悬疑， 动作",
        "category": "悬疑犯罪",
        "summary": "被诬陷入狱十四年后，他带着宝藏归来——但第一个要惩罚的，是当年的自己。",
        "tags": [
            "经典改编",
            "复仇史诗",
            "华丽转身"
        ]
    },
    {
        "title": "生死路上",
        "url": "./movies/movie-462.html",
        "cover": "./12.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪，剧情",
        "category": "悬疑犯罪",
        "summary": "为救被毒贩绑架的女儿，一名退休卡车司机答应运送一批“货物”穿越三百公里边境公路，而那批“货物”是他做缉毒警的儿子。",
        "tags": [
            "缉毒",
            "卧底",
            "卡车司机",
            "边境公路"
        ]
    },
    {
        "title": "中毒西洋版",
        "url": "./movies/movie-463.html",
        "cover": "./13.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "剧情、悬疑、爱情",
        "category": "悬疑犯罪",
        "summary": "丈夫因车祸变成植物人，小叔子也同时昏迷，醒来的小叔子声称自己的灵魂是丈夫，嫂子将信将疑地和他同居了。",
        "tags": [
            "植物人",
            "灵魂附体",
            "叔嫂畸恋",
            "心理惊悚",
            "开放式结局"
        ]
    },
    {
        "title": "幸福在西方",
        "url": "./movies/movie-464.html",
        "cover": "./14.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电影",
        "genre": "喜剧，公路",
        "category": "高清电影",
        "summary": "两德统一三十年后，一名东德老焊工开着破房车西行，只为找到三十年前抛弃他的西德情人讨一句“为什么”。",
        "tags": [
            "东西德",
            "旧房车",
            "寻父之旅",
            "黑色幽默"
        ]
    },
    {
        "title": "没问题先生",
        "url": "./movies/movie-465.html",
        "cover": "./15.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电视剧",
        "genre": "喜剧 / 剧情 / 职场",
        "category": "动作奇幻",
        "summary": "公司里最会说“没问题”的老好人被AI取代后，不得不学习说“不”，却意外成了反内卷领袖。",
        "tags": [
            "讨好型人格",
            "英式冷幽默",
            "心理疗愈",
            "办公室政治"
        ]
    },
    {
        "title": "不劳动者们",
        "url": "./movies/movie-466.html",
        "cover": "./16.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "职场 / 喜剧 / 社会派",
        "category": "高清电影",
        "summary": "一家黑心企业的七名员工合谋“集体合法旷工”，却意外揭露了公司更大的黑幕。",
        "tags": [
            "社畜",
            "反内卷",
            "黑心企业",
            "躺平",
            "群像"
        ]
    },
    {
        "title": "沉默一瞬",
        "url": "./movies/movie-467.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "经典回看",
        "summary": "一个高中生跳楼自杀，全班三十二个同学都说和他不熟，直到有人开始在匿名论坛上写“我看到了”。",
        "tags": [
            "校园霸凌",
            "沉默",
            "真相",
            "心理"
        ]
    },
    {
        "title": "复生2025",
        "url": "./movies/movie-468.html",
        "cover": "./18.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影 / 网络剧",
        "genre": "科幻 / 悬疑 / 伦理",
        "category": "高清电影",
        "summary": "生物学家将死去女儿的思维上传到人工智能中，却发现“她”正在控制全城复活的人类尸体。",
        "tags": [
            "记忆移植",
            "伦理困境",
            "末日重生"
        ]
    },
    {
        "title": "深海浩劫",
        "url": "./movies/movie-469.html",
        "cover": "./19.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 冒险, 灾难",
        "category": "动作奇幻",
        "summary": "深海采矿潜艇遭遇不明巨型生物袭击，氧气即将耗尽，船员必须徒步穿越海沟逃生。",
        "tags": [
            "潜艇",
            "深海怪兽",
            "环保",
            "救援"
        ]
    },
    {
        "title": "闻香识心",
        "url": "./movies/movie-470.html",
        "cover": "./20.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 悬疑",
        "category": "亚洲精选",
        "summary": "失去嗅觉十年的调香师之女，通过气味意外锁定当年纵火害死母亲的凶手。",
        "tags": [
            "嗅觉天才",
            "双向奔赴",
            "复仇"
        ]
    },
    {
        "title": "轰雷任务",
        "url": "./movies/movie-471.html",
        "cover": "./21.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、犯罪、警匪",
        "category": "热播剧集",
        "summary": "卧底警察被黑帮识破，却接到一个更疯狂的任务：帮黑帮抢回警察局。",
        "tags": [
            "卧底",
            "黑吃黑",
            "街头枪战"
        ]
    },
    {
        "title": "白宫隐秘",
        "url": "./movies/movie-472.html",
        "cover": "./22.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电视剧",
        "genre": "政治 / 惊悚 / 悬疑",
        "category": "最新电视剧",
        "summary": "白宫首席管家深夜撞见总统在椭圆办公室与人形生物交谈，次日管家被诊断为“老年痴呆”，他决定独自揭开真相。",
        "tags": [
            "阴谋",
            "特工",
            "权力"
        ]
    },
    {
        "title": "肆意射杀",
        "url": "./movies/movie-473.html",
        "cover": "./23.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 犯罪",
        "category": "热播剧集",
        "summary": "前特种兵的女儿被卷入黑帮火并，他拿起狙击枪，要在天亮前把整条罪恶街“清空”。",
        "tags": [
            "复仇",
            "枪战",
            "硬汉"
        ]
    },
    {
        "title": "大堡礁之恋",
        "url": "./movies/movie-474.html",
        "cover": "./24.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "爱情/喜剧/冒险",
        "category": "热播剧集",
        "summary": "一个患有深海恐惧症的都市女白领，为了继承遗产被迫前往大堡礁，必须和一名毒舌潜水教练在海底找一颗传说中的珍珠。",
        "tags": [
            "海洋",
            "潜水",
            "冤家",
            "环保",
            "清新"
        ]
    },
    {
        "title": "66号客栈",
        "url": "./movies/movie-475.html",
        "cover": "./25.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "category": "家庭剧情",
        "summary": "四个驴友住进无人客栈，次日醒来发现自己变成了客栈的“老物件”，必须找出内鬼才能解除诅咒。",
        "tags": [
            "暴风雪山庄",
            "轮回",
            "凶宅",
            "国产恐怖",
            "烧脑"
        ]
    },
    {
        "title": "北极",
        "url": "./movies/movie-476.html",
        "cover": "./26.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国 / 冰岛",
        "type": "电影",
        "genre": "冒险 / 生存",
        "category": "爱情喜剧",
        "summary": "一名被困北极的飞行员，在决定徒步求生后才发现，自己最大的敌人不是寒冷，而是听觉。",
        "tags": [
            "极地求生",
            "冰原",
            "少台词",
            "绝望与希望",
            "自救"
        ]
    },
    {
        "title": "神奇森林",
        "url": "./movies/movie-477.html",
        "cover": "./27.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "动画 / 奇幻 / 冒险",
        "category": "热播剧集",
        "summary": "每当小女孩哭泣，她房间墙纸上那些原本静止的树叶和麋鹿就会开始发光，并低语着关于森林枯萎的秘密。",
        "tags": [
            "治愈系",
            "手绘",
            "环保",
            "魔法"
        ]
    },
    {
        "title": "德里女孩第二季",
        "url": "./movies/movie-478.html",
        "cover": "./28.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 爱尔兰",
        "type": "剧集",
        "genre": "喜剧 / 剧情",
        "category": "悬疑犯罪",
        "summary": "1994年北爱尔兰停火前夕，五个德里少女决定在高中最后一年干一票大的：偷走全市最丑的雕像，献给她们最爱的男孩乐队。",
        "tags": [
            "青春",
            "爱尔兰",
            "90年代",
            "少女"
        ]
    },
    {
        "title": "群英会2015",
        "url": "./movies/movie-479.html",
        "cover": "./29.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 历史",
        "category": "动作奇幻",
        "summary": "公元2015年，一群考古学家复活了三国时期的顶级武将，让他们在现代都市里打一场地下格斗联赛。",
        "tags": [
            "三国",
            "虚构",
            "武将",
            "擂台"
        ]
    },
    {
        "title": "大轮回",
        "url": "./movies/movie-480.html",
        "cover": "./30.jpg",
        "year": "1983",
        "yearNumber": 1983,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 爱情, 奇幻",
        "category": "悬疑犯罪",
        "summary": "一把鱼肠剑贯穿三百年轮回，两男一女的爱恨情仇被诅咒生生世世重复。",
        "tags": [
            "轮回",
            "宿命",
            "戏曲",
            "三生三世"
        ]
    },
    {
        "title": "国家之死：帝汶阴谋",
        "url": "./movies/movie-481.html",
        "cover": "./31.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "澳大利亚，印度尼西亚",
        "type": "剧集",
        "genre": "惊悚，政治，历史",
        "category": "悬疑犯罪",
        "summary": "当一个国家的独立被大国交易，小人物只能用自己的命去揭开真相。",
        "tags": [
            "间谍战",
            "地缘政治",
            "真实事件改编",
            "背叛"
        ]
    },
    {
        "title": "赵树理",
        "url": "./movies/movie-482.html",
        "cover": "./32.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国",
        "type": "传记剧情片",
        "genre": "传记,人文,文艺,历史",
        "category": "经典回看",
        "summary": "他不是神话，也不是偶像，唯一能证明“赵树理”仍在世的，是一间旧书房里反复出现的一页未写完的家书。",
        "tags": [
            "文人传记",
            "农村书写",
            "时代波澜",
            "手写稿",
            "名字政治"
        ]
    },
    {
        "title": "13号子弹",
        "url": "./movies/movie-483.html",
        "cover": "./33.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作惊悚",
        "category": "爱情喜剧",
        "summary": "一支手枪里混入了第13颗来自未来的子弹，它会在过去射杀一个尚未出生的人。",
        "tags": [
            "谍战",
            "硬核",
            "阴谋",
            "孤胆英雄"
        ]
    },
    {
        "title": "害怕看不见的人",
        "url": "./movies/movie-484.html",
        "cover": "./34.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚 / 剧情",
        "category": "动作奇幻",
        "summary": "一名严重社交恐惧症的宅男，坚信只要被自己“看见”的人就会从世界上消失。",
        "tags": [
            "社交恐惧",
            "幻觉",
            "都市传说"
        ]
    },
    {
        "title": "万界主宰",
        "url": "./movies/movie-485.html",
        "cover": "./35.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "动漫",
        "genre": "玄幻 / 动作 / 冒险",
        "category": "爱情喜剧",
        "summary": "废物大学生被雷劈后获得“万界模拟器”，能在不同世界继承身份，但他发现所有世界的大反派都是他自己。",
        "tags": [
            "穿越",
            "系统流",
            "爽文",
            "多元宇宙"
        ]
    },
    {
        "title": "两个世界之间",
        "url": "./movies/movie-486.html",
        "cover": "./36.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "科幻、悬疑、爱情",
        "category": "高清电影",
        "summary": "一位物理学家发现每次睡眠都会交换身份，在两种人生中陷入疯狂。",
        "tags": [
            "平行宇宙",
            "抉择",
            "身份认同"
        ]
    },
    {
        "title": "独自一人",
        "url": "./movies/movie-487.html",
        "cover": "./37.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "category": "家庭剧情",
        "summary": "一个刚搬进偏远小镇的女人发现自己并非独居，有人正在墙壁里注视她的一举一动。",
        "tags": [
            "生存",
            "心理战",
            "极简叙事"
        ]
    },
    {
        "title": "认识的妻子",
        "url": "./movies/movie-488.html",
        "cover": "./38.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻 / 爱情 / 家庭",
        "category": "爱情喜剧",
        "summary": "丈夫每次和妻子大吵后都会穿越回求婚那天，但无论怎么改选，第二天醒来的妻子都是一个“全新但更糟糕”的版本。",
        "tags": [
            "婚姻危机",
            "穿越",
            "选择遗憾",
            "治愈"
        ]
    },
    {
        "title": "偶像活动剧场版",
        "url": "./movies/movie-489.html",
        "cover": "./39.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧场版动画",
        "genre": "音乐 / 青春 / 励志",
        "category": "高清电影",
        "summary": "面临解散危机的偶像组合，在最后一场全国巡演中，发现了彼此最初的光芒。",
        "tags": [
            "偶像",
            "成长",
            "演唱会",
            "友情",
            "毕业"
        ]
    },
    {
        "title": "鬣狗式生存",
        "url": "./movies/movie-490.html",
        "cover": "./40.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情, 律政, 职场",
        "category": "热播剧集",
        "summary": "专为上流社会处理肮脏破事的“鬣狗”律师们，在接下一桩天价离婚案后，发现自己正被一只更大的“鬣狗”猎杀。",
        "tags": [
            "精英律师",
            "黑色幽默",
            "以恶制恶"
        ]
    },
    {
        "title": "外出",
        "url": "./movies/movie-491.html",
        "cover": "./41.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情，剧情，伦理",
        "category": "最新电视剧",
        "summary": "一场车祸让两个陌生人的配偶双双昏迷，前来照料的一对男女却在废墟般的婚姻中找到了彼此。",
        "tags": [
            "出轨",
            "悲情",
            "许秦豪",
            "唯美摄影"
        ]
    },
    {
        "title": "幸运的我们",
        "url": "./movies/movie-492.html",
        "cover": "./42.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 治愈",
        "category": "动作奇幻",
        "summary": "一个穷困潦倒的五口之家中了彩票头奖，却在领奖前夜发现彩票被家里的老狗吞了。",
        "tags": [
            "彩票",
            "逆袭",
            "温情"
        ]
    },
    {
        "title": "死亡令我重生",
        "url": "./movies/movie-493.html",
        "cover": "./43.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 悬疑, 惊悚",
        "category": "动作奇幻",
        "summary": "一名自负的极限运动主播在一次直播意外中濒死，醒来后发现自己可以无限重启过去24小时。",
        "tags": [
            "循环",
            "极限运动",
            "改变未来"
        ]
    },
    {
        "title": "新村1949",
        "url": "./movies/movie-494.html",
        "cover": "./44.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史, 剧情, 农村",
        "category": "热播剧集",
        "summary": "1949年，一群大字不识的农村妇女，在新村建设中逼着县长给她们上课。",
        "tags": [
            "土改",
            "合作社",
            "女性",
            "农村",
            "变革"
        ]
    },
    {
        "title": "内心引力",
        "url": "./movies/movie-495.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "科幻， 爱情， 惊悚",
        "category": "悬疑犯罪",
        "summary": "科学家证明“内心引力”存在，但你的真命天子一旦与你对视超过3秒，你们都会瞬间心脏骤停。",
        "tags": [
            "量子纠缠",
            "灵魂伴侣",
            "反套路"
        ]
    },
    {
        "title": "败者复活战",
        "url": "./movies/movie-496.html",
        "cover": "./46.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作、竞技、奇幻",
        "category": "最新电视剧",
        "summary": "在一场只有败者能参加的异次元比武大会中，选手们必须一次次死去，才能解锁更强大的“败北形态”。",
        "tags": [
            "淘汰赛",
            "复活机制",
            "失败者联盟",
            "技能继承",
            "地下竞技场"
        ]
    },
    {
        "title": "蓝与黑续集国语",
        "url": "./movies/movie-497.html",
        "cover": "./47.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国台湾",
        "type": "电影",
        "genre": "犯罪 / 爱情",
        "category": "亚洲精选",
        "summary": "前作十年后，假死的黑帮大佬再度现身，而当年亲手“击毙”他的卧底警探却已成了他的女婿。",
        "tags": [
            "黑帮",
            "卧底",
            "恩怨",
            "国配",
            "宿命"
        ]
    },
    {
        "title": "似而非",
        "url": "./movies/movie-498.html",
        "cover": "./48.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 宗教",
        "category": "动作奇幻",
        "summary": "一个邪教教主自称能治愈百病，一个无神论记者深入调查，却发现所有病人真的痊愈了。",
        "tags": [
            "邪教",
            "反转",
            "人性"
        ]
    },
    {
        "title": "魔种入体",
        "url": "./movies/movie-499.html",
        "cover": "./49.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚 / 恐怖 / 玄幻",
        "category": "经典回看",
        "summary": "当一枚来自祖坟深处的“魔种”钻进体内，活下去的方法竟是让自己先不再像个人。",
        "tags": [
            "诡异寄生",
            "家族禁术",
            "身体异变",
            "山村秘闻",
            "轮回诅咒"
        ]
    },
    {
        "title": "威震八方",
        "url": "./movies/movie-500.html",
        "cover": "./50.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "动作奇幻",
        "summary": "前特种兵的女儿被黑帮误杀，他用了三天让整个地下世界跪下叫爸爸。",
        "tags": [
            "硬核复仇",
            "黑帮火并",
            "孤胆英雄"
        ]
    },
    {
        "title": "你好，树公主",
        "url": "./movies/movie-501.html",
        "cover": "./51.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国内地",
        "type": "电影",
        "genre": "奇幻，喜剧",
        "category": "家庭剧情",
        "summary": "都市女强人触电后能与一棵百年古樟树对话，才发现树一直在默默替人类养孩子。",
        "tags": [
            "都市童话",
            "灵魂互换",
            "环保",
            "治愈"
        ]
    },
    {
        "title": "食骨恶灵",
        "url": "./movies/movie-502.html",
        "cover": "./52.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑 / 民俗",
        "category": "悬疑犯罪",
        "summary": "一个村庄的祖坟接连被刨，死去多年的尸骨上出现规则的齿痕，村民怀疑是传说中“吃骨还债”的恶灵回来了。",
        "tags": [
            "民俗恐怖",
            "诅咒",
            "白骨",
            "家族秘密"
        ]
    },
    {
        "title": "英俊的安东尼奥1960",
        "url": "./movies/movie-503.html",
        "cover": "./53.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情, 同性, 历史",
        "category": "最新电视剧",
        "summary": "1960年罗马夏日，一个英俊的银行职员安东尼奥，爱上了黑手党老大的儿子，也爱上了危险的犯罪生活。",
        "tags": [
            "1960年代",
            "意大利",
            "身份认同",
            "禁恋"
        ]
    },
    {
        "title": "明月香衾",
        "url": "./movies/movie-504.html",
        "cover": "./54.jpg",
        "year": "1959",
        "yearNumber": 1959,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 戏曲",
        "category": "动作奇幻",
        "summary": "一件绣着月亮的香衾，连接了三代女人的痴情与背叛。",
        "tags": [
            "粤语片",
            "芳艳芬",
            "悲情"
        ]
    },
    {
        "title": "武僧传奇之终极一战",
        "url": "./movies/movie-505.html",
        "cover": "./55.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 武侠 / 历史",
        "category": "环球片库",
        "summary": "清末，少林武僧团为保护一批国宝不落入侵者之手，在冰封的黄河上与多国雇佣兵展开终极一战。",
        "tags": [
            "少林",
            "动作片",
            "硬桥硬马",
            "民族大义"
        ]
    },
    {
        "title": "哈拉上路2：啤酒桌球赛",
        "url": "./movies/movie-506.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧",
        "category": "高清电影",
        "summary": "为了参加全美啤酒桌球锦标赛，四个烂兄烂弟开着破房车横穿美国，一路作死。",
        "tags": [
            "公路",
            "派对",
            "兄弟情",
            "恶搞"
        ]
    },
    {
        "title": "米老鼠的黑白动画片生涯",
        "url": "./movies/movie-507.html",
        "cover": "./57.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "电影",
        "genre": "纪录片, 动画",
        "category": "最新电视剧",
        "summary": "一部揭秘米奇诞生之初那些被遗忘的黑白短片的纪录片，探寻初代米奇不为人知的“暗黑”性格。",
        "tags": [
            "幕后",
            "考古",
            "经典",
            "致敬"
        ]
    },
    {
        "title": "心灵翻译官",
        "url": "./movies/movie-508.html",
        "cover": "./58.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国 / 加拿大",
        "type": "电影",
        "genre": "惊悚 / 科幻",
        "category": "热播剧集",
        "summary": "她发明了“心灵翻译机”，能读取植物人的记忆，却发现自己丈夫的脑内住着另一个女人的灵魂。",
        "tags": [
            "脑机接口",
            "读心术",
            "道德困境",
            "高概念"
        ]
    },
    {
        "title": "南来北往",
        "url": "./movies/movie-509.html",
        "cover": "./59.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 年代",
        "category": "爱情喜剧",
        "summary": "一列绿皮火车跨越四十年，串联起南北两个家庭三代人的悲欢离合。",
        "tags": [
            "铁路",
            "时代变迁",
            "群像",
            "治愈"
        ]
    },
    {
        "title": "狂恋时",
        "url": "./movies/movie-510.html",
        "cover": "./60.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 剧情, LGBT",
        "category": "最新电视剧",
        "summary": "那个夏天，音乐系女生爱上了来代课的女钢琴家，而对方正被丈夫家暴。",
        "tags": [
            "夏日",
            "师生",
            "钢琴",
            "禁忌"
        ]
    },
    {
        "title": "智能逆袭",
        "url": "./movies/movie-511.html",
        "cover": "./61.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "科幻动作片",
        "genre": "科幻, 动作, 社会, 成长, 都市现实",
        "category": "经典回看",
        "summary": "外卖员林默从废弃实验仓捡到一枚会重写失败人生的芯片，起初靠它逆风翻盘的他，最终必须放弃“最优人生”才能找回自己仍在的那颗真实头脑。",
        "tags": [
            "算法资本",
            "底层突围",
            "芯片记忆",
            "反乌托邦",
            "机遇与代价"
        ]
    },
    {
        "title": "德洛丽丝",
        "url": "./movies/movie-512.html",
        "cover": "./62.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖",
        "category": "动作奇幻",
        "summary": "一个不孕的妻子得到一个能“怀孕”的智能娃娃，但娃娃的肚子里长出的不是婴儿，而是一根根手指。",
        "tags": [
            "娃娃",
            "寄生",
            "母职",
            "心理恐怖",
            "身体恐怖"
        ]
    },
    {
        "title": "漂流拯救队",
        "url": "./movies/movie-513.html",
        "cover": "./63.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "动画电影",
        "genre": "冒险 / 喜剧",
        "category": "最新电视剧",
        "summary": "四个被困在太平洋垃圾带上的废柴机器人，用一堆电子垃圾造出火箭，只为回到主人身边。",
        "tags": [
            "荒岛求生",
            "废品改造",
            "团队成长"
        ]
    },
    {
        "title": "影之车",
        "url": "./movies/movie-514.html",
        "cover": "./64.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 剧情",
        "category": "爱情喜剧",
        "summary": "社区里出现了一辆凭空出现的黑色轿车，它每晚停在一户孤寡老人家门口，却从没有人见过司机。",
        "tags": [
            "社会派",
            "孤寡老人",
            "社区秘密",
            "反转"
        ]
    },
    {
        "title": "逍遥天堂",
        "url": "./movies/movie-515.html",
        "cover": "./65.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻喜剧",
        "category": "高清电影",
        "summary": "废柴青年误入“躺平天堂”，却发现享乐需要以最痛苦的记忆来支付。",
        "tags": [
            "反转人生",
            "乌托邦",
            "黑色幽默",
            "限时体验"
        ]
    },
    {
        "title": "香城艳史",
        "url": "./movies/movie-516.html",
        "cover": "./66.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "新加坡",
        "type": "电视剧",
        "genre": "历史，爱情",
        "category": "热播剧集",
        "summary": "1940年代新加坡，一个娘惹家族的香料秘方失踪，而偷走它的人正睡在当家祖母的棺材里。",
        "tags": [
            "南洋",
            "香料",
            "土生华人",
            "家族恩怨",
            "娘惹"
        ]
    },
    {
        "title": "今晚开放麦",
        "url": "./movies/movie-517.html",
        "cover": "./67.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀",
        "category": "家庭剧情",
        "summary": "一群素人喜剧爱好者争抢“今晚开放麦”的五分钟登台机会。",
        "tags": [
            "脱口秀",
            "喜剧",
            "素人",
            "开放麦",
            "梦想"
        ]
    },
    {
        "title": "那年夏天的第一次",
        "url": "./movies/movie-518.html",
        "cover": "./68.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 青春, 家庭",
        "category": "动作奇幻",
        "summary": "三个少年偷了一艘船去寻找传说中的鲸鱼骨，却在海上迎来成人世界的第一个暴击。",
        "tags": [
            "暑假",
            "海边小镇",
            "少年友谊",
            "成长伤痛",
            "夏日终曲"
        ]
    },
    {
        "title": "多么简单的故事",
        "url": "./movies/movie-519.html",
        "cover": "./69.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭, 治愈",
        "category": "爱情喜剧",
        "summary": "七十岁的老太太在丈夫去世后，决定按自己最简单的意愿生活，却发现最简单的“想喝味增汤”都变得复杂。",
        "tags": [
            "极简",
            "日常",
            "丧偶",
            "料理",
            "慢生活"
        ]
    },
    {
        "title": "神鹰难擒",
        "url": "./movies/movie-520.html",
        "cover": "./70.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪 / 惊悚 / 悬疑",
        "category": "爱情喜剧",
        "summary": "FBI 追捕“神鹰”大盗十年无果，当他主动自首时，却要求用自己的“藏品”换一个无罪承诺。",
        "tags": [
            "神偷",
            "FBI",
            "猫鼠游戏",
            "反转",
            "智斗"
        ]
    },
    {
        "title": "公猫",
        "url": "./movies/movie-521.html",
        "cover": "./71.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 同性",
        "category": "动作奇幻",
        "summary": "一对相伴二十年的同志情侣因一只流浪公猫的闯入，关系面临终极考验。",
        "tags": [
            "中年危机",
            "领养",
            "巴黎"
        ]
    },
    {
        "title": "六弄咖啡馆",
        "url": "./movies/movie-522.html",
        "cover": "./72.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "最新电视剧",
        "summary": "一间只在雨天营业的咖啡馆，每位客人都能在这里遇见“当年做出错误选择的自己”。",
        "tags": [
            "青春",
            "咖啡馆",
            "遗憾",
            "成长"
        ]
    },
    {
        "title": "快网利剑",
        "url": "./movies/movie-523.html",
        "cover": "./73.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "中国",
        "type": "电视剧",
        "genre": "警匪, 动作, 刑侦",
        "category": "亚洲精选",
        "summary": "中国第一代网络安全警察，在拨号上网的年代对抗来自键盘后的高智商罪犯。",
        "tags": [
            "网络安全",
            "黑客",
            "早期互联网",
            "单元剧"
        ]
    },
    {
        "title": "谍影重重2011",
        "url": "./movies/movie-524.html",
        "cover": "./74.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 悬疑 / 谍战",
        "category": "悬疑犯罪",
        "summary": "2011年，一名失忆男子在柏林醒来，只知道自己被全球最致命的特工组织追杀。",
        "tags": [
            "失忆特工",
            "写实打斗",
            "欧洲追踪"
        ]
    },
    {
        "title": "常乐镇诡事",
        "url": "./movies/movie-525.html",
        "cover": "./75.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "民俗恐怖",
        "category": "热播剧集",
        "summary": "常乐镇每隔二十年就要选出一位“新娘”嫁给河神，但这一任新娘在婚礼前夜看到了上一任新娘的脸。",
        "tags": [
            "乡村",
            "怪谈",
            "反转"
        ]
    },
    {
        "title": "再吻一次",
        "url": "./movies/movie-526.html",
        "cover": "./76.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "category": "热播剧集",
        "summary": "分手五年的情侣在好友婚礼上重逢，约定只做一夜情人，天亮就分手，却一次次“再吻一次”。",
        "tags": [
            "前任",
            "婚礼",
            "重燃旧情",
            "法式浪漫"
        ]
    },
    {
        "title": "东溪突击",
        "url": "./movies/movie-527.html",
        "cover": "./77.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争，历史",
        "category": "亚洲精选",
        "summary": "1950年湘西，七个民兵和一杆半枪，挡住了三千土匪的三天三夜。",
        "tags": [
            "湘西",
            "剿匪",
            "民兵",
            "真实事件"
        ]
    },
    {
        "title": "穿越烽火线",
        "url": "./movies/movie-528.html",
        "cover": "./78.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "战争 / 历史",
        "category": "最新电视剧",
        "summary": "1942年，一群身份各异的平民被迫护送一本加密的日军作战计划书穿越三百里封锁线。",
        "tags": [
            "抗战",
            "小人物",
            "公路剧",
            "群像"
        ]
    },
    {
        "title": "全心交融",
        "url": "./movies/movie-529.html",
        "cover": "./79.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻伦理",
        "category": "爱情喜剧",
        "summary": "为了拯救婚姻，一对夫妻植入了共享感官的芯片，却发现彼此深藏的厌恶。",
        "tags": [
            "意识融合",
            "婚姻危机",
            "科技伦理",
            "亲密关系"
        ]
    },
    {
        "title": "最后的勇士",
        "url": "./movies/movie-530.html",
        "cover": "./80.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "奇幻 / 动作 / 喜剧",
        "category": "家庭剧情",
        "summary": "一个被所有人嘲笑的莫斯科废柴，意外穿越到古代罗斯，必须证明自己就是传说中的最后勇士。",
        "tags": [
            "勇士",
            "穿越",
            "俄罗斯神话",
            "搞笑",
            "特效"
        ]
    },
    {
        "title": "大雨将至",
        "url": "./movies/movie-531.html",
        "cover": "./81.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难 / 剧情 / 家庭",
        "category": "亚洲精选",
        "summary": "一场千年一遇的暴雨，将一百多人困在废弃的公路隧道里，水位每小时上涨一米。",
        "tags": [
            "暴雨",
            "隧道",
            "被困",
            "群像",
            "求生"
        ]
    },
    {
        "title": "1122好夫妇",
        "url": "./movies/movie-532.html",
        "cover": "./82.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "家庭剧情",
        "summary": "结婚七年，妻子提出“分居婚”，同住一个屋檐下却各过各的，还能找回爱情吗？",
        "tags": [
            "婚姻危机",
            "育儿焦虑",
            "治愈"
        ]
    },
    {
        "title": "冲浪少年",
        "url": "./movies/movie-533.html",
        "cover": "./83.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "运动 / 剧情",
        "category": "热播剧集",
        "summary": "一个天赋异禀的冲浪少年，在父亲意外去世后，与患自闭症的哥哥共同追逐一场巨浪。",
        "tags": [
            "冲浪",
            "兄弟情",
            "原生家庭"
        ]
    },
    {
        "title": "龙凤呈祥2009",
        "url": "./movies/movie-534.html",
        "cover": "./84.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "category": "爱情喜剧",
        "summary": "大年二十八，为了应付催婚，女白领租了个男公关回家过年，谁知男方全家都是演员。",
        "tags": [
            "假结婚",
            "过年",
            "欢喜冤家",
            "合家欢",
            "都市"
        ]
    },
    {
        "title": "成长教育",
        "url": "./movies/movie-535.html",
        "cover": "./85.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 青春",
        "category": "最新电视剧",
        "summary": "1980年代保守的英国小镇，16岁天才少女与已婚男教师的禁忌恋情被曝光后，全镇站队，只有她自己拒绝成为受害者。",
        "tags": [
            "少女早熟",
            "师生恋",
            "小镇保守",
            "自我觉醒"
        ]
    },
    {
        "title": "夏日光年",
        "url": "./movies/movie-536.html",
        "cover": "./86.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "加拿大",
        "type": "电影",
        "genre": "青春、冒险、剧情",
        "category": "动作奇幻",
        "summary": "五个问题少年偷了一辆房车，沿着横贯加拿大公路寻找传说中的“世界边缘”。",
        "tags": [
            "公路旅行",
            "成长",
            "夏日"
        ]
    },
    {
        "title": "碧水良缘",
        "url": "./movies/movie-537.html",
        "cover": "./87.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装爱情",
        "category": "高清电影",
        "summary": "为了挽救家族绣坊，泼辣的女掌柜不得不与冤家——船运世家的公子签订“契约婚姻”，共抗外敌。",
        "tags": [
            "水乡",
            "刺绣",
            "商战",
            "甜宠"
        ]
    },
    {
        "title": "怜悯的种类",
        "url": "./movies/movie-538.html",
        "cover": "./88.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国 / 英国",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "环球片库",
        "summary": "三个关于“怜悯”的黑色寓言：施暴者救赎不了自己，被施舍者最终举起屠刀。",
        "tags": [
            "黑色幽默",
            "底层互害",
            "反讽",
            "多线叙事",
            "人性"
        ]
    },
    {
        "title": "伏狮艶后",
        "url": "./movies/movie-539.html",
        "cover": "./89.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "情色 / 剧情",
        "category": "高清电影",
        "summary": "南越王朝最后一位女王，用身体驯服三军将领，却在爱情面前输给了一个戏子。",
        "tags": [
            "邵氏风",
            "古装",
            "权力游戏",
            "女性",
            "香艳"
        ]
    },
    {
        "title": "宇宙追缉令",
        "url": "./movies/movie-540.html",
        "cover": "./90.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 动作 / 悬疑",
        "category": "动作奇幻",
        "summary": "平行宇宙管理局的警探追踪一个能“跳跃”到其他宇宙杀死自己、从而增强力量的罪犯，却发现罪犯是另一个自己。",
        "tags": [
            "星际警探",
            "多重宇宙",
            "罪犯寄生",
            "身份窃取",
            "信仰之跃"
        ]
    },
    {
        "title": "万里追踪",
        "url": "./movies/movie-541.html",
        "cover": "./91.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑 / 刑侦",
        "category": "爱情喜剧",
        "summary": "一张模糊的旅游照片，让退休刑警踏上了横跨八个国家的万里寻凶之路。",
        "tags": [
            "追凶",
            "车臣",
            "边境",
            "暗网"
        ]
    },
    {
        "title": "笼斗士",
        "url": "./movies/movie-542.html",
        "cover": "./92.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "动作 / 都市",
        "category": "经典回看",
        "summary": "深夜的外卖箱里装的不只是餐盒，还有一副沾血的格斗手套。",
        "tags": [
            "MMA",
            "外卖骑手",
            "逆袭",
            "生存压力"
        ]
    },
    {
        "title": "回马亭",
        "url": "./movies/movie-543.html",
        "cover": "./93.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠， 悬疑",
        "category": "高清电影",
        "summary": "大漠深处一座废弃驿站，六个各怀鬼胎的江湖人在暴雪夜被困在一起。",
        "tags": [
            "驿站",
            "江湖恩怨",
            "密室"
        ]
    },
    {
        "title": "相对宇宙第一季",
        "url": "./movies/movie-544.html",
        "cover": "./94.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 惊悚",
        "category": "爱情喜剧",
        "summary": "他发现平行世界的自己正试图杀死他，而两个世界的高层早已秘密合作了三十年。",
        "tags": [
            "平行世界",
            "谍战",
            "身份互换",
            "哲学"
        ]
    },
    {
        "title": "海角乐园",
        "url": "./movies/movie-545.html",
        "cover": "./95.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "动画，冒险，家庭",
        "category": "环球片库",
        "summary": "一只迷路的北极熊和一只话痨企鹅结伴，穿越半个地球回家。",
        "tags": [
            "海洋",
            "动物",
            "友情",
            "环保"
        ]
    },
    {
        "title": "完美设陷",
        "url": "./movies/movie-546.html",
        "cover": "./96.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪 / 悬疑 / 心理惊悚",
        "category": "环球片库",
        "summary": "犯罪侧写师亲手设计的完美陷阱，被凶手指出一处漏洞，而那漏洞正是他自己。",
        "tags": [
            "高智商犯罪",
            "陷阱",
            "反杀",
            "双男主"
        ]
    },
    {
        "title": "八角笼中",
        "url": "./movies/movie-547.html",
        "cover": "./97.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 动作 / 体育",
        "category": "家庭剧情",
        "summary": "一位落魄格斗教练带领一群大山里的孤儿打上国际赛场，却因一场意外被推上舆论断头台。",
        "tags": [
            "格斗",
            "底层逆袭",
            "师徒情",
            "社会现实"
        ]
    },
    {
        "title": "股神3之控庄者",
        "url": "./movies/movie-548.html",
        "cover": "./98.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 商战",
        "category": "环球片库",
        "summary": "曾经的股神退隐后复出，发现股市已被AI操盘手和庄家联手操控，他能对抗的只有自己的脑子和一把手枪。",
        "tags": [
            "金融",
            "暗战",
            "黑吃黑",
            "智商税"
        ]
    },
    {
        "title": "顶级乐队",
        "url": "./movies/movie-549.html",
        "cover": "./99.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "英国",
        "type": "电视剧",
        "genre": "喜剧音乐",
        "category": "经典回看",
        "summary": "一支90年代英伦摇滚天团解散二十年后，为了还房贷被迫重组，成员们第一个要杀死的居然是彼此。",
        "tags": [
            "摇滚",
            "中年危机",
            "重组乐队",
            "英式幽默"
        ]
    },
    {
        "title": "幸福生活万年长",
        "url": "./movies/movie-550.html",
        "cover": "./100.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 家庭 / 乡村",
        "category": "亚洲精选",
        "summary": "一场“厕所革命”，搅动了平静的石头村，也让一对欢喜冤家支书与主任在吵闹中走到了一起。",
        "tags": [
            "扶贫",
            "轻喜剧",
            "乡土人情",
            "家庭伦理",
            "奋斗"
        ]
    },
    {
        "title": "斗阵 60 分",
        "url": "./movies/movie-551.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "动作 / 运动",
        "category": "环球片库",
        "summary": "为了给植物人哥哥凑医药费，一个街头篮球手答应在60分钟内赢下一场横跨全城的生死斗牛赛。",
        "tags": [
            "街头篮球",
            "兄弟情",
            "逆袭"
        ]
    },
    {
        "title": "绕行美国",
        "url": "./movies/movie-552.html",
        "cover": "./102.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "冒险 / 公路",
        "category": "经典回看",
        "summary": "一场车祸导致双腿瘫痪，他却决定用手摇自行车，环游美国所有“无聊”的小镇。",
        "tags": [
            "轮椅背包客",
            "真实事件改编",
            "治愈",
            "小众路线"
        ]
    },
    {
        "title": "易碎人生",
        "url": "./movies/movie-553.html",
        "cover": "./103.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，黑色幽默",
        "category": "悬疑犯罪",
        "summary": "患“玻璃骨”的废柴中年意外发现，自己每一次骨折都能换来巨额保险金，他开始策划完美的“破碎”。",
        "tags": [
            "中年危机",
            "玻璃骨",
            "荒诞",
            "人生重启"
        ]
    },
    {
        "title": "浪漫寡妇",
        "url": "./movies/movie-554.html",
        "cover": "./104.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 剧情",
        "category": "高清电影",
        "summary": "守寡十年的四十岁主妇，被闺蜜拉去牛郎店散心，却爱上了比自己小十五岁的头牌牛郎。",
        "tags": [
            "中年爱情",
            "寡妇",
            "小鲜肉",
            "重启人生",
            "姐弟恋"
        ]
    },
    {
        "title": "黑色童话",
        "url": "./movies/movie-555.html",
        "cover": "./105.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑, 恐怖, 奇幻",
        "category": "最新电视剧",
        "summary": "小红帽、三只小猪和糖果屋的故事在现代纽约重演，三位女主角背后是一个连环杀手。",
        "tags": [
            "黑暗改编",
            "连环杀手",
            "隐喻",
            "多线叙事"
        ]
    },
    {
        "title": "钻石手臂",
        "url": "./movies/movie-556.html",
        "cover": "./106.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "爱情喜剧",
        "summary": "黑帮传奇杀手“钻石手臂”金盆洗手后，发现女儿被炼铜术士伤害，他用钻石刀片重铸断臂，展开最私刑的复仇。",
        "tags": [
            "黑帮",
            "改造人",
            "复仇"
        ]
    },
    {
        "title": "半夜不要照镜子",
        "url": "./movies/movie-557.html",
        "cover": "./107.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 惊悚, 民俗",
        "category": "最新电视剧",
        "summary": "大学女生宿舍流传着一个诅咒：凌晨两点照镜子，你会看到自己死时的样子。",
        "tags": [
            "都市传说",
            "镜中鬼",
            "宿舍怪谈",
            "校园",
            "诅咒转移"
        ]
    },
    {
        "title": "复仇的未亡人",
        "url": "./movies/movie-558.html",
        "cover": "./108.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑 / 复仇 / 婚姻惊悚",
        "category": "家庭剧情",
        "summary": "她在丈夫葬礼上第一次露出笑容，因为那场看似意外的死亡，只是她布局三年的复仇序章。",
        "tags": [
            "双重身份",
            "完美妻子",
            "会社阴谋",
            "亲密关系",
            "黑色复仇"
        ]
    },
    {
        "title": "啦啦队",
        "url": "./movies/movie-559.html",
        "cover": "./109.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电视剧",
        "genre": "青春, 剧情, 运动",
        "category": "经典回看",
        "summary": "一个来自贫民区的黑人女孩挤进了全是白人富家女的顶尖啦啦队，她要撕碎的不仅是偏见。",
        "tags": [
            "竞技啦啦队",
            "女性成长",
            "校园竞争"
        ]
    },
    {
        "title": "圣诞五告赞！",
        "url": "./movies/movie-560.html",
        "cover": "./110.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧, 家庭",
        "category": "经典回看",
        "summary": "五个互不相识的废柴在圣诞夜被同一桩乌龙快递困在一栋老楼里，被迫假扮一家人。",
        "tags": [
            "圣诞",
            "乌龙",
            "邻里",
            "爆笑"
        ]
    },
    {
        "title": "迷失丛林",
        "url": "./movies/movie-561.html",
        "cover": "./111.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚 / 冒险",
        "category": "动作奇幻",
        "summary": "三名网红博主深入亚马逊雨林拍生存视频，却拍下了不该拍到的东西。",
        "tags": [
            "荒野求生",
            "相机",
            "失踪",
            "伪纪录"
        ]
    },
    {
        "title": "色戒",
        "url": "./movies/movie-562.html",
        "cover": "./112.jpg",
        "year": "2027 (翻拍版)",
        "yearNumber": 2027,
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "剧情、爱情",
        "category": "高清电影",
        "summary": "全新视角重述经典，这次不再是女学生诱惑汉奸，而是汉奸设局等待猎物入瓮。",
        "tags": [
            "谍战",
            "牺牲",
            "情欲",
            "民国",
            "改编经典"
        ]
    },
    {
        "title": "天狼星的传说",
        "url": "./movies/movie-563.html",
        "cover": "./113.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻, 悬疑, 冒险",
        "category": "动作奇幻",
        "summary": "一张神秘的星图将考古学家引向昆仑山深处，却发现天狼星人的遗迹竟与人类 DNA 的钥匙紧密相连。",
        "tags": [
            "远古文明",
            "星际穿越",
            "考古",
            "末日拯救"
        ]
    },
    {
        "title": "温内图续集",
        "url": "./movies/movie-564.html",
        "cover": "./114.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "西部 / 冒险",
        "category": "经典回看",
        "summary": "老去的老友温内图去世后，阿帕奇部落面临灭族之灾，一名神秘白人青年自称是温内图的徒弟。",
        "tags": [
            "印第安",
            "复仇",
            "经典重启"
        ]
    },
    {
        "title": "巴勒摩或沃夫斯堡",
        "url": "./movies/movie-565.html",
        "cover": "./115.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国/意大利",
        "type": "电影",
        "genre": "剧情，社会",
        "category": "亚洲精选",
        "summary": "一名突尼斯非法移民在意大利巴勒摩和德国沃夫斯堡之间做出艰难选择，这不是地理选择，而是两种人生的终极对决。",
        "tags": [
            "移民",
            "身份认同",
            "抉择",
            "都市",
            "孤独"
        ]
    },
    {
        "title": "梦游者",
        "url": "./movies/movie-566.html",
        "cover": "./116.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑, 惊悚, 奇幻",
        "category": "爱情喜剧",
        "summary": "一个梦游症患者醒来发现手中握着凶器，而警方监控显示：杀人的是他，但睡觉的也是他。",
        "tags": [
            "梦游杀人",
            "记忆碎片",
            "心理惊悚",
            "梦境入侵"
        ]
    },
    {
        "title": "黑帮（电影）",
        "url": "./movies/movie-567.html",
        "cover": "./117.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "category": "热播剧集",
        "summary": "潜伏十年的卧底即将收网，却发现自己最信任的兄弟才是警方真正要抓的“鬼”。",
        "tags": [
            "卧底",
            "兄弟情",
            "背叛",
            "权力",
            "悲剧"
        ]
    },
    {
        "title": "花心变色龙",
        "url": "./movies/movie-568.html",
        "cover": "./118.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 奇幻 / 喜剧",
        "category": "环球片库",
        "summary": "他能变成任何恋人的理想型，直到遇见了那个只看真心的人。",
        "tags": [
            "变色能力",
            "恋爱循环",
            "成长"
        ]
    },
    {
        "title": "要不完的德才",
        "url": "./movies/movie-569.html",
        "cover": "./119.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭，喜剧，伦理",
        "category": "最新电视剧",
        "summary": "三十五岁还在家啃老的德才，突然被父母送进了一所“成年人改造训练营”。",
        "tags": [
            "啃老现象",
            "小人物喜剧",
            "川渝方言",
            "代际冲突"
        ]
    },
    {
        "title": "弹头奇兵",
        "url": "./movies/movie-570.html",
        "cover": "./120.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 科幻",
        "category": "家庭剧情",
        "summary": "退役特种兵被注入实验性纳米弹头，每发射一颗子弹就会失去一段记忆。",
        "tags": [
            "特种部队",
            "纳米科技",
            "反恐"
        ]
    },
    {
        "title": "吉普赛人与处女",
        "url": "./movies/movie-571.html",
        "cover": "./121.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "法国 / 罗马尼亚",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "最新电视剧",
        "summary": "一位严守传统的吉普赛族长儿子，爱上了被族规视为“不洁之身”的流浪处女，两人踏上了逃亡之路。",
        "tags": [
            "流浪民族",
            "纯爱",
            "身份禁忌",
            "公路电影"
        ]
    },
    {
        "title": "阿拉斯加大淘金第九季",
        "url": "./movies/movie-572.html",
        "cover": "./122.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "综艺 / 纪实",
        "genre": "真人秀，冒险，纪实",
        "category": "经典回看",
        "summary": "金价暴涨，六支业余淘金队深入阿拉斯加无人区，用尽一切手段在冻土融化前挖出价值千万的金矿。",
        "tags": [
            "淘金",
            "阿拉斯加",
            "极端环境",
            "赌命",
            "机械"
        ]
    },
    {
        "title": "茨厂街黑社会",
        "url": "./movies/movie-573.html",
        "cover": "./123.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "马来西亚",
        "type": "电影",
        "genre": "犯罪/动作",
        "category": "爱情喜剧",
        "summary": "吉隆坡茨厂街，四个结拜兄弟在黑帮斗争中反目，最后的晚餐变成了最后的葬礼。",
        "tags": [
            "黑帮",
            "兄弟情",
            "怀旧",
            "南洋"
        ]
    },
    {
        "title": "魂魄唔齐粤语",
        "url": "./movies/movie-574.html",
        "cover": "./124.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 喜剧",
        "category": "经典回看",
        "summary": "沉迷粤剧的废青阿强发现自己能看见鬼，还被一个民国花旦的鬼魂缠上，非要他登台合演一出能打开阴阳路的《帝女花》。",
        "tags": [
            "粤剧",
            "阴阳眼",
            "老广怀旧"
        ]
    },
    {
        "title": "父子攻防战",
        "url": "./movies/movie-575.html",
        "cover": "./125.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电视剧",
        "genre": "家庭 / 喜剧 / 剧情",
        "category": "最新电视剧",
        "summary": "为了逼退学儿子回学校，父亲使出了商业间谍级的手段；而儿子的反击，堪称兵法大全。",
        "tags": [
            "家庭教育",
            "斗智斗勇",
            "亲情和解"
        ]
    },
    {
        "title": "杀出恶人谷",
        "url": "./movies/movie-576.html",
        "cover": "./126.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装动作",
        "category": "环球片库",
        "summary": "全江湖最狠的八个恶人被困同一间客栈，天亮前只能活一个——但他们发现门外还有第九个。",
        "tags": [
            "西部片风格",
            "悬赏",
            "恶棍",
            "宿敌"
        ]
    },
    {
        "title": "人造正义",
        "url": "./movies/movie-577.html",
        "cover": "./127.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "科幻",
        "category": "热播剧集",
        "summary": "为了降低犯罪率，政府推出“预测式AI法官”，一位废除死刑的辩护律师必须证明这个冰冷的算法也会误判。",
        "tags": [
            "伦理",
            "AI",
            "法庭",
            "争议",
            "哲学"
        ]
    },
    {
        "title": "乐队男孩",
        "url": "./movies/movie-578.html",
        "cover": "./128.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/音乐",
        "category": "爱情喜剧",
        "summary": "1995年，四个小城男孩组建一支摇滚乐队，用一台破录音机录下了改变命运的唯一一首歌。",
        "tags": [
            "摇滚",
            "90年代",
            "梦想",
            "友情"
        ]
    },
    {
        "title": "不如跳舞",
        "url": "./movies/movie-579.html",
        "cover": "./129.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "经典回看",
        "summary": "一群为了争夺社区广场而互殴的老街坊，被迫组队参加国际广场舞大赛。",
        "tags": [
            "广场舞",
            "邻里",
            "温情",
            "港味"
        ]
    },
    {
        "title": "义务警员",
        "url": "./movies/movie-580.html",
        "cover": "./130.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作 / 犯罪 / 悬疑",
        "category": "爱情喜剧",
        "summary": "一个蒙面人每晚直播抓捕未被法律制裁的罪犯，全网追捧他，但警察却认定他才是最大的罪犯。",
        "tags": [
            "私刑正义",
            "快手直播",
            "全民侦探",
            "现代侠客"
        ]
    },
    {
        "title": "赞鸟历险记",
        "url": "./movies/movie-581.html",
        "cover": "./131.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "澳大利亚",
        "type": "电影 / 动画",
        "genre": "动画 / 冒险 / 家庭",
        "category": "经典回看",
        "summary": "一只从未飞过的小天堂鸟，为了拯救被困在塑料垃圾岛上的族群，开始了横跨太平洋的迁徙冒险。",
        "tags": [
            "鸟类",
            "迁徙",
            "环保",
            "友情",
            "音乐剧"
        ]
    },
    {
        "title": "绝对权力2003",
        "url": "./movies/movie-582.html",
        "cover": "./132.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、政治、犯罪",
        "category": "动作奇幻",
        "summary": "一名窃贼潜入总统度假屋，撞见总统与一桩命案有关，从此被整个国家追杀。",
        "tags": [
            "总统",
            "谋杀掩盖",
            "特勤局",
            "阴谋论"
        ]
    },
    {
        "title": "现在来点完全不同的",
        "url": "./movies/movie-583.html",
        "cover": "./133.jpg",
        "year": "1971",
        "yearNumber": 1971,
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 歌舞",
        "category": "家庭剧情",
        "summary": "巨蟒剧团的第一部电影，它没有主线剧情，只有一堆关于西班牙宗教法庭、搞笑的钓鱼节目和死鹦鹉的荒诞短剧。",
        "tags": [
            "巨蟒剧团",
            "荒诞",
            "邪典"
        ]
    },
    {
        "title": "谁与争峰",
        "url": "./movies/movie-584.html",
        "cover": "./134.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，犯罪",
        "category": "亚洲精选",
        "summary": "两位顶尖狙击手因一场十年前的任务反目，如今却在同一宗国际军火案的红外瞄准镜中对上了彼此。",
        "tags": [
            "警匪对峙",
            "狙击手",
            "兄弟情"
        ]
    },
    {
        "title": "非常市民",
        "url": "./movies/movie-585.html",
        "cover": "./135.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 黑色幽默",
        "category": "家庭剧情",
        "summary": "为了给死去的宠物鹦鹉办一张“合法埋葬证”，普通市民老赵被迫进入了荒谬的行政迷宫。",
        "tags": [
            "小人物",
            "官僚主义",
            "荒诞现实",
            "城市变迁"
        ]
    },
    {
        "title": "白莲花度假村第二季",
        "url": "./movies/movie-586.html",
        "cover": "./136.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情、悬疑、喜剧",
        "category": "悬疑犯罪",
        "summary": "这次，白莲花度假村搬到了意大利西西里岛，新一批富豪游客带着他们的性与谎言，开启了一轮更血腥的“假期”。",
        "tags": [
            "奢华酒店",
            "人性讽刺",
            "群像戏"
        ]
    },
    {
        "title": "朽木 第二季",
        "url": "./movies/movie-587.html",
        "cover": "./137.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情 / 犯罪 / 西部",
        "category": "经典回看",
        "summary": "朽木镇新来了一个神秘的中国女人，她买下了整个贫民窟，而她的真实身份是旧金山洪门堂口派来的复仇杀手。",
        "tags": [
            "死木镇",
            "暴力",
            "权力斗争",
            "华人角色",
            "粗粝美学"
        ]
    },
    {
        "title": "古墓奇缘",
        "url": "./movies/movie-588.html",
        "cover": "./138.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险 / 动作 / 奇幻",
        "category": "高清电影",
        "summary": "考古队与盗墓贼在一座战国古墓中狭路相逢，却发现墓中机关竟会识别血脉，只认准其中一人的血。",
        "tags": [
            "考古",
            "盗墓",
            "机关",
            "宿命"
        ]
    },
    {
        "title": "真正的正义1",
        "url": "./movies/movie-589.html",
        "cover": "./139.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪， 剧情， 悬疑",
        "category": "高清电影",
        "summary": "一名理想主义陪审员发现，整个法庭审判竟是一场为了掩盖真相而精心设计的真人秀。",
        "tags": [
            "陪审团",
            "黑幕",
            "反转",
            "律师"
        ]
    },
    {
        "title": "公主大对换：反转再反转",
        "url": "./movies/movie-590.html",
        "cover": "./140.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "category": "环球片库",
        "summary": "公主和替身第三次互换，这次连国家都搞混了，两个未婚夫同时出现在同一张晚宴桌上。",
        "tags": [
            "互换身份",
            "圣诞",
            "浪漫",
            "双女主",
            "冒名顶替"
        ]
    },
    {
        "title": "如何进入大学",
        "url": "./movies/movie-591.html",
        "cover": "./141.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧",
        "category": "爱情喜剧",
        "summary": "四个成绩垫底的高中生，为了进入名校，组建了一支假的“国际获奖机器人队”。",
        "tags": [
            "升学",
            "恶搞",
            "作弊",
            "友谊",
            "讽刺"
        ]
    },
    {
        "title": "怪人魂",
        "url": "./movies/movie-592.html",
        "cover": "./142.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "日本",
        "type": "电影",
        "genre": "剧情，奇幻，悬疑",
        "category": "爱情喜剧",
        "summary": "一间老旧公寓的地下室里，住着被世人遗忘的“怪人”，而每一位租客的灵魂深处都藏着无法言说的秘密。",
        "tags": [
            "人格分裂",
            "地下室",
            "都市传说",
            "孤独"
        ]
    },
    {
        "title": "香港仔",
        "url": "./movies/movie-593.html",
        "cover": "./143.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情家庭",
        "category": "环球片库",
        "summary": "一个普通的香港家庭三代同堂，每个人心里都藏着不可告人的秘密，直到一个婴儿的出生打破所有沉默。",
        "tags": [
            "香港市井",
            "三代人",
            "秘密和解",
            "生活流"
        ]
    },
    {
        "title": "暴力效应",
        "url": "./movies/movie-594.html",
        "cover": "./144.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动作 / 惊悚电影",
        "genre": "犯罪动作, 都市阴谋, 心理恐怖",
        "category": "环球片库",
        "summary": "一名退役格斗手接连护送“安全演出”任务，发现自己卷入的是把市民情绪当商品的实验，只有在全市直播时段前让系统熄火才有生路。",
        "tags": [
            "情绪操控",
            "算法交易",
            "反击联盟",
            "公益基金",
            "高压节奏"
        ]
    },
    {
        "title": "圣彼得的伞",
        "url": "./movies/movie-595.html",
        "cover": "./145.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "匈牙利 / 英国",
        "type": "电影",
        "genre": "剧情 / 战争 / 家庭",
        "category": "环球片库",
        "summary": "一个犹太木匠打造了一把能“隐形”的伞，用它庇护了三十名孤儿，直到纳粹军官盯上了他。",
        "tags": [
            "二战",
            "犹太",
            "守护",
            "亲情",
            "寓言"
        ]
    },
    {
        "title": "惊醒者的反叛",
        "url": "./movies/movie-596.html",
        "cover": "./146.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国/加拿大",
        "type": "电视剧/网剧",
        "genre": "科幻, 悬疑, 剧情",
        "category": "动作奇幻",
        "summary": "在一个所有人出生就被植入“平静芯片”的世界，一群觉醒的“惊醒者”为了真实的痛苦而向系统发起反叛。",
        "tags": [
            "意识上传",
            "反抗",
            "虚拟现实",
            "赛博朋克"
        ]
    },
    {
        "title": "狐之歌",
        "url": "./movies/movie-597.html",
        "cover": "./147.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "动画电影",
        "genre": "动画 / 奇幻 / 音乐",
        "category": "爱情喜剧",
        "summary": "一个失声的能乐歌手被狐狸新娘邀请，在另一个世界完成最后一场演出。",
        "tags": [
            "能乐",
            "狐狸嫁女",
            "失声",
            "传统艺术"
        ]
    },
    {
        "title": "小悟空",
        "url": "./movies/movie-598.html",
        "cover": "./148.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国",
        "type": "电影",
        "genre": "动画，奇幻",
        "category": "经典回看",
        "summary": "一只动物园里的金丝猴偶遇现代版唐僧，被迫踏上寻找筋斗云、拯救被囚孙悟空的爆笑之旅。",
        "tags": [
            "孙悟空",
            "神话",
            "冒险",
            "成长",
            "团队合作"
        ]
    },
    {
        "title": "不白之冤",
        "url": "./movies/movie-599.html",
        "cover": "./149.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑，犯罪，社会",
        "category": "爱情喜剧",
        "summary": "一个被冤枉杀死女学生的外卖员，一个失去女儿的退休警察，一场长达十年的无声抵抗。",
        "tags": [
            "替罪羊",
            "阶层压迫",
            "媒体暴力",
            "翻案",
            "群像"
        ]
    },
    {
        "title": "孩童之姿",
        "url": "./movies/movie-600.html",
        "cover": "./150.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "罗马尼亚",
        "type": "电影",
        "genre": "剧情",
        "category": "最新电视剧",
        "summary": "一位母亲试图用权力和人脉为肇事逃逸的儿子脱罪，却在过程中逐渐看清他的真面目。",
        "tags": [
            "亲情",
            "伦理",
            "社会现实",
            "母子关系",
            "戛纳"
        ]
    },
    {
        "title": "袁隆平",
        "url": "./movies/movie-601.html",
        "cover": "./1.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记，剧情，历史",
        "category": "悬疑犯罪",
        "summary": "一株鹤立鸡群的天然杂交稻，开启了他半个世纪与饥饿赛跑的逐梦人生。",
        "tags": [
            "科学家",
            "水稻",
            "奉献",
            "真实改编"
        ]
    },
    {
        "title": "陪她一会儿",
        "url": "./movies/movie-602.html",
        "cover": "./2.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "悬疑犯罪",
        "summary": "患上阿尔茨海默症的母亲只认得女儿小时候的模样，女儿不得不扮演童年的自己。",
        "tags": [
            "阿尔茨海默症",
            "亲情",
            "治愈"
        ]
    },
    {
        "title": "猎与杀",
        "url": "./movies/movie-603.html",
        "cover": "./3.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "动作, 惊悚, 冒险",
        "category": "亚洲精选",
        "summary": "退役女狙击手在阿拉斯加度假，她的狩猎旅行团误入了国际贩毒集团的抛尸地，猎物与猎人的身份瞬间转换。",
        "tags": [
            "孤胆英雄",
            "丛林",
            "复仇",
            "女杀手",
            "暴力美学"
        ]
    },
    {
        "title": "浊流",
        "url": "./movies/movie-604.html",
        "cover": "./4.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 历史",
        "category": "经典回看",
        "summary": "一家三代人的命运，被一条由清变浊的河流串起，他们必须决定是逃离还是战斗。",
        "tags": [
            "环保",
            "抗争",
            "家族",
            "时代变迁"
        ]
    },
    {
        "title": "返老还童记",
        "url": "./movies/movie-605.html",
        "cover": "./5.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "喜剧, 奇幻, 剧情",
        "category": "热播剧集",
        "summary": "七旬老汉吃下神秘保健品后变回20岁，却发现年轻的身体里装着一颗老旧的心。",
        "tags": [
            "老年",
            "再生",
            "代际冲突",
            "人生重启"
        ]
    },
    {
        "title": "兄弟会",
        "url": "./movies/movie-606.html",
        "cover": "./6.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情, 悬疑",
        "category": "家庭剧情",
        "summary": "一个普通大学生为了追寻失踪的哥哥，加入了校园里最神秘、也最危险的精英兄弟会。",
        "tags": [
            "大学社团",
            "神秘仪式",
            "阶级分化",
            "命案调查"
        ]
    },
    {
        "title": "小姨怀春",
        "url": "./movies/movie-607.html",
        "cover": "./7.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情，剧情",
        "category": "亚洲精选",
        "summary": "1987 年解严前夕，在乡下照顾外甥女的年轻小姨，爱上了姐姐从美国回来的未婚夫。",
        "tags": [
            "年代爱情",
            "禁忌暗恋",
            "女性成长",
            "怀旧"
        ]
    },
    {
        "title": "浪漫医生金师傅2",
        "url": "./movies/movie-608.html",
        "cover": "./8.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "韩国",
        "type": "剧集",
        "genre": "医疗/爱情",
        "category": "家庭剧情",
        "summary": "在简陋的石垣医院，天才怪医金师傅带领一群“失败者”医生，继续与生命和偏见战斗。",
        "tags": [
            "热血",
            "理想主义",
            "师徒"
        ]
    },
    {
        "title": "逃亡列车",
        "url": "./movies/movie-609.html",
        "cover": "./9.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "德国",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "category": "环球片库",
        "summary": "一列从柏林开往慕尼黑的夜班火车上，五名陌生人发现自己卷入了一场精心策划的谋杀游戏。",
        "tags": [
            "火车",
            "密闭空间",
            "悬疑",
            "反转"
        ]
    },
    {
        "title": "爱的时差",
        "url": "./movies/movie-610.html",
        "cover": "./10.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "category": "环球片库",
        "summary": "男女主住在同一间公寓，却因为时间流速不同，永远无法同时醒来相见。",
        "tags": [
            "时间差",
            "错过",
            "治愈"
        ]
    },
    {
        "title": "槟城艳粤语",
        "url": "./movies/movie-611.html",
        "cover": "./11.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港/马来西亚",
        "type": "电影",
        "genre": "爱情文艺",
        "category": "经典回看",
        "summary": "1997年，一个香港摄影师在槟城最后一家粤语戏院的拆除前夕，遇见了负责清点旧海报的当地女孩，两人在一张褪色的《帝女花》海报背后发现了一封未寄出的情书。",
        "tags": [
            "南洋旧梦",
            "粤语原声",
            "异乡人"
        ]
    },
    {
        "title": "死亡写真国语",
        "url": "./movies/movie-612.html",
        "cover": "./12.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 悬疑, 惊悚",
        "category": "环球片库",
        "summary": "一个孤僻的少女迷恋拍摄尸体照片，当她发现自己的作品成真时，一场杀戮游戏开始了。",
        "tags": [
            "心理扭曲",
            "胶片杀人",
            "国语配音版"
        ]
    },
    {
        "title": "追心披头四",
        "url": "./movies/movie-613.html",
        "cover": "./13.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 剧情, 音乐",
        "category": "亚洲精选",
        "summary": "四个中年油腻大叔为了找回丢失的一张披头士绝版唱片，开车跨越大半个英国。",
        "tags": [
            "披头士",
            "乐队",
            "追星",
            "公路电影"
        ]
    },
    {
        "title": "古驰家族",
        "url": "./movies/movie-614.html",
        "cover": "./14.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "意大利 / 美国",
        "type": "剧集",
        "genre": "剧情 / 传记 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "从奢华崛起到血腥内斗，古驰家族三代人的恩怨情仇，最终以一桩轰动全球的买凶谋杀案告终。",
        "tags": [
            "时尚",
            "谋杀",
            "家族内斗"
        ]
    },
    {
        "title": "点心饭",
        "url": "./movies/movie-615.html",
        "cover": "./15.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情，家庭，美食",
        "category": "高清电影",
        "summary": "台北一家濒临倒闭的早茶店，店主阿婆去世后留下一个铁盒，里面装着三十张只写了日期和一句话的神秘订单。",
        "tags": [
            "早茶",
            "母女",
            "传承",
            "治愈"
        ]
    },
    {
        "title": "谈情说案国语",
        "url": "./movies/movie-616.html",
        "cover": "./16.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "悬疑, 爱情",
        "category": "家庭剧情",
        "summary": "用物理公式拆解不在场证明，用化学方程式还原杀人动机，这一次，天才教授要用恋爱脑破案。",
        "tags": [
            "物理学",
            "探案",
            "高智商",
            "破案"
        ]
    },
    {
        "title": "四人帮翻转校园",
        "url": "./movies/movie-617.html",
        "cover": "./17.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧， 青春",
        "category": "爱情喜剧",
        "summary": "四个全校倒数第一的“学渣混混”，为了不被退学，被迫成立学习小组，却意外带偏了整个学校的学风。",
        "tags": [
            "混混",
            "学习",
            "逆袭",
            "搞笑"
        ]
    },
    {
        "title": "命运快车粤语",
        "url": "./movies/movie-618.html",
        "cover": "./18.jpg",
        "year": "1990 / 2024重映",
        "yearNumber": 1990,
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 动作",
        "category": "动作奇幻",
        "summary": "一名退役赛车手沦为出租车司机，为救兄弟被迫重操旧业，卷入一场黑帮快车生死局。",
        "tags": [
            "港剧经典",
            "黑帮卧底",
            "出租车司机",
            "兄弟义气",
            "粤语原声"
        ]
    },
    {
        "title": "假如我是武松",
        "url": "./movies/movie-619.html",
        "cover": "./19.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/喜剧",
        "category": "悬疑犯罪",
        "summary": "演了一辈子武松的龙套演员穿越到水浒世界，却发现自己只能演西门庆。",
        "tags": [
            "穿越",
            "水浒传",
            "戏班",
            "自我认同"
        ]
    },
    {
        "title": "欢乐今宵梅姑姑",
        "url": "./movies/movie-620.html",
        "cover": "./20.jpg",
        "year": "1985",
        "yearNumber": 1985,
        "region": "中国香港",
        "type": "喜剧、家庭、温情",
        "genre": "喜剧、家庭、温情",
        "category": "热播剧集",
        "summary": "年过四十的“老姑娘”梅姑姑，为了保住即将被拆迁的唐楼，带领街坊们上演了一场啼笑皆非的“保卫战”。",
        "tags": [
            "怀旧",
            "大龄女主",
            "邻里温情",
            "港式幽默"
        ]
    },
    {
        "title": "口水封神",
        "url": "./movies/movie-621.html",
        "cover": "./21.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧、奇幻、动作",
        "category": "亚洲精选",
        "summary": "姜子牙的就业指导老师转世成互联网大厂HR，用“巧舌如簧”管理闹事的仙界打工人。",
        "tags": [
            "恶搞",
            "职场",
            "封神榜",
            "黑色幽默"
        ]
    },
    {
        "title": "真理面具",
        "url": "./movies/movie-622.html",
        "cover": "./22.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "Movie",
        "genre": "Horror, Mystery, Thriller",
        "category": "经典回看",
        "summary": "六个为了流量参加“24小时鬼屋挑战”的网红，发现他们戴上的面具不仅能通灵，还能让彼此看到对方最想隐藏的秘密。",
        "tags": [
            "邪教",
            "网红",
            "直播",
            "面具",
            "献祭"
        ]
    },
    {
        "title": "骠骑兵之歌",
        "url": "./movies/movie-623.html",
        "cover": "./23.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争，歌舞",
        "category": "亚洲精选",
        "summary": "拿破仑大军压境之际，一名贵族小姐女扮男装混入骠骑兵团，却爱上了自己的长官。",
        "tags": [
            "拿破仑战争",
            "骑兵",
            "爱情",
            "沙俄",
            "史诗"
        ]
    },
    {
        "title": "送报女孩",
        "url": "./movies/movie-624.html",
        "cover": "./24.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻， 冒险， 悬疑",
        "category": "环球片库",
        "summary": "四个1988年的送报女孩在凌晨送报时，意外踏上了穿越时空的送报之路。",
        "tags": [
            "时间旅行",
            "女性",
            "80年代",
            "成长",
            "悬疑"
        ]
    },
    {
        "title": "斗罗大陆2绝世唐门第三季",
        "url": "./movies/movie-625.html",
        "cover": "./25.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "动漫",
        "genre": "奇幻 / 热血",
        "category": "家庭剧情",
        "summary": "霍雨浩携全新魂环归来，史莱克七怪决战日月帝国魂导器先锋，王冬的真实身份惊现反转。",
        "tags": [
            "武魂",
            "史莱克七怪",
            "魂师大赛",
            "王冬身份"
        ]
    },
    {
        "title": "军火厂",
        "url": "./movies/movie-626.html",
        "cover": "./26.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 犯罪",
        "category": "家庭剧情",
        "summary": "一个国际军火贩子被迫退休后，发现儿子偷偷用家族网络做毒品生意，父子开战。",
        "tags": [
            "军火走私",
            "家族企业",
            "卧底"
        ]
    },
    {
        "title": "群鸟",
        "url": "./movies/movie-627.html",
        "cover": "./27.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "category": "家庭剧情",
        "summary": "一所废弃小学里，曾遭受校园霸凌的亡灵化作乌鸦群，开始按当年的欺凌顺序逐一复仇。",
        "tags": [
            "校园",
            "霸凌",
            "鸟群",
            "复仇",
            "超自然"
        ]
    },
    {
        "title": "桃色大厦",
        "url": "./movies/movie-628.html",
        "cover": "./28.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情， 爱情， 犯罪",
        "category": "亚洲精选",
        "summary": "一栋破旧大厦里住着女学生、舞女和黑帮情妇，她们在大厦即将拆迁之际，命运交织在一起。",
        "tags": [
            "三级片",
            "经典",
            "写实",
            "情欲",
            "黑帮"
        ]
    },
    {
        "title": "夏日的庭院",
        "url": "./movies/movie-629.html",
        "cover": "./29.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电影",
        "genre": "剧情、悬疑、文艺",
        "category": "爱情喜剧",
        "summary": "三个孩子为了偷摘邻居家的桃子，却意外发现独居老奶奶的地下室里藏着一整个夏天的星空。",
        "tags": [
            "庭院",
            "秘密",
            "夏日",
            "邻里关系",
            "温情"
        ]
    },
    {
        "title": "夏日大作战",
        "url": "./movies/movie-630.html",
        "cover": "./30.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电影",
        "genre": "动画，科幻，家庭",
        "category": "热播剧集",
        "summary": "暑假最后一天，内向高中生被迫与一个骗子家族联手，在虚拟世界里阻止失控AI毁灭现实。",
        "tags": [
            "虚拟现实",
            "家族羁绊",
            "人工智能"
        ]
    },
    {
        "title": "爱情马戏团",
        "url": "./movies/movie-631.html",
        "cover": "./31.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "热播剧集",
        "summary": "1930 年代京城府，马戏团的空中飞人女演员爱上了一个装在玻璃瓶里的“怪胎”，他们的爱情表演成了上流社会最爱的猎奇秀。",
        "tags": [
            "杂技",
            "畸形秀",
            "复古美学",
            "禁忌之恋"
        ]
    },
    {
        "title": "两个夏天 第一季",
        "url": "./movies/movie-632.html",
        "cover": "./32.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "青春群像",
        "category": "亚洲精选",
        "summary": "两个不同时空的夏天同时展开，一个属于高考前夜，一个属于十年后的重逢，所有未说出口的话都在季风里回响。",
        "tags": [
            "双线叙事",
            "成长",
            "友情",
            "家庭",
            "校园"
        ]
    },
    {
        "title": "上帝眷顾乌干达",
        "url": "./movies/movie-633.html",
        "cover": "./33.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国 / 乌干达",
        "type": "电影",
        "genre": "剧情、同性",
        "category": "环球片库",
        "summary": "在反同法案通过的乌干达，一对女同恋人必须在一周内凑够钱，偷渡到肯尼亚。",
        "tags": [
            "非洲",
            "宗教压迫",
            "同性恋",
            "现实主义"
        ]
    },
    {
        "title": "恋爱好烦，不如结婚吧！",
        "url": "./movies/movie-634.html",
        "cover": "./34.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "浪漫喜剧",
        "category": "高清电影",
        "summary": "金牌离婚律师和恐婚婚礼策划师，为了一档真人秀被迫闪婚，却发现自己成了对方最难搞的客户。",
        "tags": [
            "先婚后爱",
            "职场",
            "契约婚姻"
        ]
    },
    {
        "title": "朝云散",
        "url": "./movies/movie-635.html",
        "cover": "./35.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "古装, 悬疑, 动作",
        "category": "环球片库",
        "summary": "前御前侍卫被贬边陲，却在小镇命案中发现了朝堂惊天叛乱的线索。",
        "tags": [
            "武侠",
            "朝堂权谋",
            "刺客",
            "易容术"
        ]
    },
    {
        "title": "刀马旦",
        "url": "./movies/movie-636.html",
        "cover": "./36.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "香港",
        "type": "电影",
        "genre": "动作, 剧情",
        "category": "亚洲精选",
        "summary": "民国乱世，三个女人一台戏，戏台上的刀马旦下了台照样抄刀杀军阀。",
        "tags": [
            "京剧",
            "女性",
            "乱世"
        ]
    },
    {
        "title": "教室里的一头牦牛",
        "url": "./movies/movie-637.html",
        "cover": "./37.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "不丹",
        "type": "电影",
        "genre": "剧情, 喜剧",
        "category": "最新电视剧",
        "summary": "世界上海拔最高的村庄小学，新来的支教老师发现他的学生只有一头牦牛，而那头牛比他聪明。",
        "tags": [
            "乡村教育",
            "牦牛",
            "师生",
            "文化冲突"
        ]
    },
    {
        "title": "围城电影版",
        "url": "./movies/movie-638.html",
        "cover": "./38.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情伦理",
        "category": "高清电影",
        "summary": "方鸿渐的孙子陷入数字时代的婚姻困局，发现爷爷那句“外面的人想进去”从未过时。",
        "tags": [
            "婚姻围城",
            "知识分子",
            "黑色幽默",
            "经典改编"
        ]
    },
    {
        "title": "女儿们的恋爱第一季",
        "url": "./movies/movie-639.html",
        "cover": "./39.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺/剧集",
        "genre": "真人秀, 爱情, 剧情, 纪录片",
        "category": "最新电视剧",
        "summary": "一档打着“明星女儿恋爱观察”旗号的综艺，拍到第三期发现，所有男嘉宾都是节目组雇的演员。",
        "tags": [
            "观察",
            "代际",
            "情感",
            "伪纪录片"
        ]
    },
    {
        "title": "难民湾风暴",
        "url": "./movies/movie-640.html",
        "cover": "./40.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "欧洲",
        "type": "电影",
        "genre": "惊悚, 剧情",
        "category": "悬疑犯罪",
        "summary": "偷渡船在风暴中搁浅，幸存者们躲进废弃码头，却发现那里是人口贩卖组织的屠宰场。",
        "tags": [
            "难民",
            "黑帮",
            "生存"
        ]
    },
    {
        "title": "濠河边上的女人",
        "url": "./movies/movie-641.html",
        "cover": "./41.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 文艺",
        "category": "经典回看",
        "summary": "濠河上最后一代船娘的悲欢离合，她们摆渡过客，却摆渡不了自己的一生。",
        "tags": [
            "女性群像",
            "南通",
            "年代",
            "乡土"
        ]
    },
    {
        "title": "阴阳镇怪谈2024",
        "url": "./movies/movie-642.html",
        "cover": "./42.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "悬疑，惊悚，民俗",
        "category": "动作奇幻",
        "summary": "民国阴阳镇每夜都有“借寿鬼”敲门，只有遵循古怪规矩的人才能活到天亮。",
        "tags": [
            "民国",
            "小镇",
            "怪谈",
            "因果",
            "民俗恐怖"
        ]
    },
    {
        "title": "维洛妮卡佛斯的欲望",
        "url": "./movies/movie-643.html",
        "cover": "./43.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电影",
        "genre": "剧情/情色",
        "category": "动作奇幻",
        "summary": "一对中产夫妇玩换妻游戏，却发现对方选的正是自己当年的初恋。",
        "tags": [
            "欲望",
            "摄影",
            "交换伴侣",
            "婚姻"
        ]
    },
    {
        "title": "城市24小时",
        "url": "./movies/movie-644.html",
        "cover": "./44.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "category": "最新电视剧",
        "summary": "四个不同阶层的陌生人，在除夕夜被困于同一部电梯里，爆发出荒诞又真实的生存百态。",
        "tags": [
            "群像",
            "都市",
            "黑色幽默",
            "一夜",
            "生存"
        ]
    },
    {
        "title": "天下太平",
        "url": "./movies/movie-645.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史 / 战争",
        "category": "动作奇幻",
        "summary": "1949年国共内战末期，一个国民党逃兵和一个解放军逃兵同时躲进了同一口棺材。",
        "tags": [
            "内战",
            "士兵",
            "停战",
            "荒诞",
            "黑色幽默"
        ]
    },
    {
        "title": "不速之约粤语",
        "url": "./movies/movie-646.html",
        "cover": "./46.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑 / 奇幻 / 爱情",
        "category": "爱情喜剧",
        "summary": "医生与魔鬼订立契约：只要他杀死一名坏人，魔鬼就复活他死去的爱人。",
        "tags": [
            "魔鬼",
            "契约",
            "心理战",
            "三角"
        ]
    },
    {
        "title": "我是歌手 谁来踢馆",
        "url": "./movies/movie-647.html",
        "cover": "./47.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "综艺 / 电影",
        "genre": "音乐, 竞技, 剧情",
        "category": "悬疑犯罪",
        "summary": "十八线歌手梁一木收到神秘踢馆短信，当他站上舞台才发现，这场比赛根本没有观众。",
        "tags": [
            "歌手",
            "直播",
            "逆袭",
            "梦想",
            "暗箱"
        ]
    },
    {
        "title": "盖博的生日派对",
        "url": "./movies/movie-648.html",
        "cover": "./48.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧， 剧情",
        "category": "悬疑犯罪",
        "summary": "固执老头盖博不想过80岁生日，全家却非给他过，结果一场派对炸出了一家人的所有破事。",
        "tags": [
            "家庭",
            "荒诞",
            "人生百态"
        ]
    },
    {
        "title": "动物尖叫",
        "url": "./movies/movie-649.html",
        "cover": "./49.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "恐怖, 科幻",
        "category": "家庭剧情",
        "summary": "一种让动物发出人类尖叫的病毒爆发后，动物园里的“人声”成了最恐怖的声音。",
        "tags": [
            "动物",
            "末日",
            "病毒"
        ]
    },
    {
        "title": "小袋鼠历险记",
        "url": "./movies/movie-650.html",
        "cover": "./50.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "澳大利亚",
        "type": "动画电影",
        "genre": "家庭 / 冒险",
        "category": "动作奇幻",
        "summary": "一只四个月大的袋鼠孤儿迷路后，必须穿越1300公里的内陆荒漠，找到野袋鼠群。",
        "tags": [
            "动物",
            "成长",
            "自然奇观"
        ]
    },
    {
        "title": "秋天的童话",
        "url": "./movies/movie-651.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情, 奇幻",
        "category": "高清电影",
        "summary": "一个只能在秋天存活24小时的“落叶精灵”，爱上了一个每天都在书店等死的老妇人。",
        "tags": [
            "落叶",
            "死亡",
            "书店"
        ]
    },
    {
        "title": "情不自禁2001",
        "url": "./movies/movie-652.html",
        "cover": "./52.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、剧情",
        "category": "经典回看",
        "summary": "一个卖盗版碟的小混混爱上了一个女警察，为了证明自己，他卷入了一场警方卧底行动，却最终不得不选择告别。",
        "tags": [
            "潘粤明",
            "地下通道",
            "小混混",
            "纯爱"
        ]
    },
    {
        "title": "大酱园国语",
        "url": "./movies/movie-653.html",
        "cover": "./53.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "年代, 家族, 商战",
        "category": "亚洲精选",
        "summary": "一座百年酱园表面酿的是豆酱，暗地里酿的却是几代人都拆不散的恩怨、守业和爱情。",
        "tags": [
            "酱园秘方",
            "家族争产",
            "旧城手艺",
            "婚姻纠葛",
            "商号兴衰"
        ]
    },
    {
        "title": "漂亮女人1990",
        "url": "./movies/movie-654.html",
        "cover": "./54.jpg",
        "year": "1990",
        "yearNumber": 1990,
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 剧情",
        "category": "环球片库",
        "summary": "一场看似临时的城市交易，把一位精明商人和一个拒绝被定义的女孩卷进了彼此都没预料到的情感失衡。",
        "tags": [
            "都市邂逅",
            "身份反转",
            "契约关系",
            "霓虹浪漫",
            "成年童话"
        ]
    },
    {
        "title": "火舞丽人",
        "url": "./movies/movie-655.html",
        "cover": "./55.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情犯罪",
        "category": "家庭剧情",
        "summary": "1997前夕，四位夜总会舞女联手做局，让贪污警长和黑帮老大互咬身亡。",
        "tags": [
            "夜总会",
            "女性群像",
            "复仇",
            "90年代怀旧"
        ]
    },
    {
        "title": "广东十虎苏灿之潜龙出世",
        "url": "./movies/movie-656.html",
        "cover": "./56.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作 / 武侠",
        "category": "家庭剧情",
        "summary": "沦为乞丐的苏灿被追杀时意外发现自己流着前朝皇族的血，醉拳的最后一式叫“龙抬头”。",
        "tags": [
            "苏乞儿",
            "醉拳",
            "身世之谜"
        ]
    },
    {
        "title": "法律上的演员",
        "url": "./movies/movie-657.html",
        "cover": "./57.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪 / 悬疑 / 律政",
        "category": "爱情喜剧",
        "summary": "一名三流演员被黑帮雇用在法庭上扮演被告的真凶，却发现自己拿到的剧本竟是根据真实案件“量身定制”的。",
        "tags": [
            "法庭",
            "替身",
            "诈骗",
            "多重反转"
        ]
    },
    {
        "title": "狂野之曲",
        "url": "./movies/movie-658.html",
        "cover": "./58.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "音乐， 剧情， 传记",
        "category": "环球片库",
        "summary": "讲述一支虚构的70年代英国朋克乐队“疯马”，从伦敦地下酒吧到麦迪逊广场花园的热血、混乱与坠落。",
        "tags": [
            "摇滚",
            "70年代",
            "原型人物",
            "叛逆",
            "英伦风"
        ]
    },
    {
        "title": "爱是永恒",
        "url": "./movies/movie-659.html",
        "cover": "./59.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 科幻 / 爱情",
        "category": "热播剧集",
        "summary": "绝症妻子选择冷冻自己等待未来治愈，丈夫苦等五十年后也选择了冷冻，醒来时已是三百年后，她早已解冻离去。",
        "tags": [
            "冷冻",
            "永生",
            "伦理",
            "孤独"
        ]
    },
    {
        "title": "火荆棘",
        "url": "./movies/movie-660.html",
        "cover": "./60.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 年代",
        "category": "悬疑犯罪",
        "summary": "1999年到2019年，东北一座工业城市发生多起手法诡异的纵火案，烧的都是废弃工厂。",
        "tags": [
            "东北工业衰落",
            "连环纵火案",
            "复仇者联盟",
            "多线叙事"
        ]
    },
    {
        "title": "我是阿拉伯人",
        "url": "./movies/movie-661.html",
        "cover": "./61.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "以色列 / 巴勒斯坦",
        "type": "电影",
        "genre": "剧情 / 战争",
        "category": "热播剧集",
        "summary": "一位说希伯来语的阿拉伯律师，带着女儿穿越边境去参加哥哥的婚礼，却发现哥哥成了人肉炸弹。",
        "tags": [
            "身份认同",
            "以巴冲突",
            "公路",
            "父女"
        ]
    },
    {
        "title": "看得见看不见",
        "url": "./movies/movie-662.html",
        "cover": "./62.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 剧情 / 温情",
        "category": "亚洲精选",
        "summary": "一位天生看不见却能“看见”幽灵的盲人按摩师，在为活人解除病痛的同时，也为亡魂完成未了的心愿。",
        "tags": [
            "阴阳眼盲人",
            "通灵按摩师",
            "双向治愈",
            "城市怪谈"
        ]
    },
    {
        "title": "武林外外传",
        "url": "./movies/movie-663.html",
        "cover": "./63.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "中国内地",
        "type": "剧集",
        "genre": "喜剧, 古装",
        "category": "最新电视剧",
        "summary": "同福客栈面临拆迁，佟湘玉带领伙计们穿越到现代综艺节目赚钱还贷。",
        "tags": [
            "恶搞武侠",
            "同福客栈",
            "破次元"
        ]
    },
    {
        "title": "果尔达",
        "url": "./movies/movie-664.html",
        "cover": "./64.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "以色列",
        "type": "电影",
        "genre": "传记 / 历史 / 政治",
        "category": "亚洲精选",
        "summary": "1973年赎罪日战争期间，患有白血病和幽闭恐惧症的以色列女总理，在地堡里度过了人生最漫长的十九天。",
        "tags": [
            "女领袖",
            "赎罪日战争",
            "中年危机"
        ]
    },
    {
        "title": "请问总统先生",
        "url": "./movies/movie-665.html",
        "cover": "./65.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "剧情，传记，政治",
        "category": "热播剧集",
        "summary": "退休总统准备出版回忆录洗白历史，却被一名犀利记者挖出了他当年掩盖在“伟大决策”下的私人录音带。",
        "tags": [
            "政治斗争",
            "采访",
            "录音带",
            "人性博弈",
            "黑料"
        ]
    },
    {
        "title": "在我死后",
        "url": "./movies/movie-666.html",
        "cover": "./66.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑 / 奇幻 / 惊悚",
        "category": "热播剧集",
        "summary": "被霸凌致死的女高中生变成幽灵，通过手机直播让全国网友帮她找出凶手。",
        "tags": [
            "死后直播",
            "灵魂直播",
            "悬疑破案",
            "全民陪审",
            "复仇"
        ]
    },
    {
        "title": "每个人的生活",
        "url": "./movies/movie-667.html",
        "cover": "./67.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电视剧",
        "genre": "剧情，都市",
        "category": "环球片库",
        "summary": "柏林一栋老公寓的十二户人家，每集用一个固定道具串起不同人生，却在季终发现所有人共用一根断掉的水管。",
        "tags": [
            "群像",
            "公寓楼",
            "平行叙事",
            "陌生人"
        ]
    },
    {
        "title": "戏梦空间",
        "url": "./movies/movie-668.html",
        "cover": "./68.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "category": "爱情喜剧",
        "summary": "一名电影放映员发现自己生活的小镇，其实是某部被遗忘胶片里的虚构场景。",
        "tags": [
            "元宇宙",
            "电影史",
            "人生如梦",
            "虚幻与现实"
        ]
    },
    {
        "title": "别担心，他不会走远的",
        "url": "./movies/movie-669.html",
        "cover": "./69.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 传记",
        "category": "爱情喜剧",
        "summary": "一场车祸让漫画家李恩失去了双腿，却教会了他用手去“走”完人生的后半程。",
        "tags": [
            "励志",
            "残疾",
            "康复",
            "治愈"
        ]
    },
    {
        "title": "黑帮追杀行动",
        "url": "./movies/movie-670.html",
        "cover": "./70.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "亚洲精选",
        "summary": "一名卧底警察身份暴露后，被整个东南亚黑帮联合追杀，只有前黑帮大佬能救他。",
        "tags": [
            "卧底",
            "追车",
            "枪战",
            "江湖义气"
        ]
    },
    {
        "title": "达拉斯玩偶",
        "url": "./movies/movie-671.html",
        "cover": "./71.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "category": "悬疑犯罪",
        "summary": "一个废弃娃娃博物馆里，六个孩子发现每个玩偶都对应着一种死法。",
        "tags": [
            "诅咒玩偶",
            "德州",
            "密室",
            "民俗恐怖"
        ]
    },
    {
        "title": "未完戏",
        "url": "./movies/movie-672.html",
        "cover": "./72.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 历史",
        "category": "高清电影",
        "summary": "一个即将被拆除的老戏院，在最后一夜上演了一出从未完结的粤剧，竟引来半个世纪前的戏魂。",
        "tags": [
            "粤剧",
            "戏班",
            "香港变迁",
            "师徒传承"
        ]
    },
    {
        "title": "使徒行者3",
        "url": "./movies/movie-673.html",
        "cover": "./73.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪、悬疑、动作",
        "category": "环球片库",
        "summary": "当所有卧底身份都被黑客曝光，警队与黑帮的界限彻底消失，每个人都是孤狼。",
        "tags": [
            "卧底",
            "黑帮",
            "刑讯",
            "终极背叛",
            "香港取景"
        ]
    },
    {
        "title": "女孩向前冲",
        "url": "./movies/movie-674.html",
        "cover": "./74.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 运动",
        "category": "动作奇幻",
        "summary": "患有听力障碍的女孩被母亲逼着练长跑，她只想退赛，却意外发现了自己对奔跑的原始热爱。",
        "tags": [
            "马拉松",
            "励志",
            "女性",
            "母女"
        ]
    },
    {
        "title": "真不走运",
        "url": "./movies/movie-675.html",
        "cover": "./75.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "电影",
        "genre": "黑色喜剧",
        "category": "环球片库",
        "summary": "一个倒霉到连自动售货机都和他作对的上班族，意外在一连串更离谱的事故里，撞见了自己从未敢承认的真实欲望。",
        "tags": [
            "连环霉运",
            "社畜",
            "错位人生",
            "荒诞反转"
        ]
    },
    {
        "title": "迎头重击",
        "url": "./movies/movie-676.html",
        "cover": "./76.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 运动",
        "category": "动作奇幻",
        "summary": "患上渐冻症的前拳王，请求女儿在擂台上把自己打死，这是父女俩最后的和解。",
        "tags": [
            "拳击",
            "父女",
            "绝症"
        ]
    },
    {
        "title": "龙族：救援骑士",
        "url": "./movies/movie-677.html",
        "cover": "./77.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影 / 动画",
        "genre": "动画 / 冒险",
        "category": "最新电视剧",
        "summary": "一支由年轻龙骑士组成的飞行救援队，必须穿越“永不落山之谷”拯救被困的太阳龙。",
        "tags": [
            "龙骑士",
            "救援",
            "奇幻",
            "友情"
        ]
    },
    {
        "title": "终极快递",
        "url": "./movies/movie-678.html",
        "cover": "./78.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "动作 / 喜剧 / 惊悚",
        "category": "动作奇幻",
        "summary": "一个顶尖自由潜水员被迫成为一名“终极快递员”，必须在24小时内将一个神秘的防水箱送到深海沉船。",
        "tags": [
            "极限运动",
            "跨国追杀",
            "神秘包裹",
            "速度感"
        ]
    },
    {
        "title": "极速搏杀",
        "url": "./movies/movie-679.html",
        "cover": "./79.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "动作奇幻",
        "summary": "一名为了救妹妹的街头车手，被迫在致命地下赛事中边飙车边杀人。",
        "tags": [
            "飙车",
            "反套路",
            "兄弟情",
            "黑吃黑",
            "赛博改装"
        ]
    },
    {
        "title": "替身2020",
        "url": "./movies/movie-680.html",
        "cover": "./80.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑, 科幻",
        "category": "经典回看",
        "summary": "落魄程序员买下完美AI替身代自己上班，却发现自己正被“另一个自己”全面取代。",
        "tags": [
            "克隆人",
            "身份互换",
            "伦理"
        ]
    },
    {
        "title": "救世神棍",
        "url": "./movies/movie-681.html",
        "cover": "./81.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 奇幻",
        "category": "环球片库",
        "summary": "一个靠“神仙附体”行骗的江湖神棍，被雷劈后竟然真的获得了部分神力，他却发现自己依然救不了任何人。",
        "tags": [
            "诈骗",
            "信仰",
            "神棍",
            "人性光辉"
        ]
    },
    {
        "title": "萌犬好声音",
        "url": "./movies/movie-682.html",
        "cover": "./82.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "动画",
        "category": "经典回看",
        "summary": "一只被流浪狗收养的喵星人，为了寻找家人竟戴上变声器参加了狗狗歌唱大赛。",
        "tags": [
            "音乐",
            "宠物",
            "选秀"
        ]
    },
    {
        "title": "猪头人归来",
        "url": "./movies/movie-683.html",
        "cover": "./83.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖， 惊悚",
        "category": "环球片库",
        "summary": "五年前小镇青年直播屠杀“猪头人”一夜爆红，五年后，猪头人带着更恐怖的形态回来了。",
        "tags": [
            "都市传说",
            "血腥",
            "复仇"
        ]
    },
    {
        "title": "台风逃跑计划",
        "url": "./movies/movie-684.html",
        "cover": "./84.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "菲律宾/日本",
        "type": "电影",
        "genre": "灾难， 剧情， 家庭",
        "category": "动作奇幻",
        "summary": "超级台风登陆前夕，一对贫民窟父子决定不撤离，而是逆风而行去寻找失踪的母亲。",
        "tags": [
            "台风",
            "贫民窟",
            "生存",
            "亲情"
        ]
    },
    {
        "title": "地下室惊魂",
        "url": "./movies/movie-685.html",
        "cover": "./85.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "热播剧集",
        "summary": "三个主播进入废弃小区地下室直播，却发现整栋楼的居民都在十年前的同一秒消失了。",
        "tags": [
            "密室逃生",
            "直播探险",
            "精神污染"
        ]
    },
    {
        "title": "国家命运",
        "url": "./movies/movie-686.html",
        "cover": "./86.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 传记 / 政治",
        "category": "最新电视剧",
        "summary": "从一穷二白到世界第二，这部剧不讲领导人，讲的是那些签过字的无名者。",
        "tags": [
            "建国叙事",
            "经济改革",
            "群像史诗",
            "决策幕后"
        ]
    },
    {
        "title": "反应堆",
        "url": "./movies/movie-687.html",
        "cover": "./87.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情，灾难，历史",
        "category": "动作奇幻",
        "summary": "切尔诺贝利事故后，一名苏联核物理学家与一名美国间谍，必须在熔毁的反应堆核心合作，以阻止第二次大爆炸。",
        "tags": [
            "切尔诺贝利",
            "核反应堆",
            "苏联",
            "英雄主义",
            "牺牲"
        ]
    },
    {
        "title": "马拉松梦想家",
        "url": "./movies/movie-688.html",
        "cover": "./88.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电视剧",
        "genre": "励志, 运动, 剧情",
        "category": "悬疑犯罪",
        "summary": "一名破产的中年废柴为了骗取救济金谎称备战奥运，却不得不真的跑完一场马拉松。",
        "tags": [
            "马拉松",
            "中年危机",
            "梦想",
            "社区",
            "逆袭"
        ]
    },
    {
        "title": "道莉·帕顿是我母亲那一年",
        "url": "./movies/movie-689.html",
        "cover": "./89.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "category": "热播剧集",
        "summary": "为了治愈丧母之痛，女儿用AI换脸技术，将偶像道莉·帕顿“变成”了母亲的模样。",
        "tags": [
            "追星",
            "母女",
            "乡村音乐",
            "女性成长",
            "圣诞"
        ]
    },
    {
        "title": "少年不良",
        "url": "./movies/movie-690.html",
        "cover": "./90.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪， 青春， 剧情",
        "category": "动作奇幻",
        "summary": "十八岁的街头，他以为兄弟就是天，直到一把刀捅穿了所有幻想。",
        "tags": [
            "少年犯罪",
            "帮派",
            "友情",
            "底层挣扎"
        ]
    },
    {
        "title": "青云志2",
        "url": "./movies/movie-691.html",
        "cover": "./91.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "仙侠玄幻",
        "category": "高清电影",
        "summary": "张小凡入魔后重建鬼王宗，却发现曾经的挚爱陆雪琪成了正道联盟的“活体武器”。",
        "tags": [
            "修仙",
            "正邪之辨",
            "虐恋",
            "特效大片"
        ]
    },
    {
        "title": "香农传",
        "url": "./movies/movie-692.html",
        "cover": "./92.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电视剧",
        "genre": "传记 / 剧情 / 历史",
        "category": "环球片库",
        "summary": "他奠定了信息时代，却被时代遗忘。克劳德·香农疯狂又孤独的一生，从贝尔实验室到杂耍独轮车。",
        "tags": [
            "数学家",
            "信息论",
            "天才",
            "冷战"
        ]
    },
    {
        "title": "别惹陌生人",
        "url": "./movies/movie-693.html",
        "cover": "./93.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪, 惊悚",
        "category": "家庭剧情",
        "summary": "女白领在地铁上被偷拍后反手举报，却引爆了一个暗网复仇集团。",
        "tags": [
            "复仇",
            "网络",
            "偷拍"
        ]
    },
    {
        "title": "小情书",
        "url": "./movies/movie-694.html",
        "cover": "./94.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春爱情",
        "category": "家庭剧情",
        "summary": "2003年，全班都知道他喜欢她，只有她不知道，但她其实回了一整箱从未寄出的信。",
        "tags": [
            "校园暗恋",
            "双向奔赴",
            "千禧年代"
        ]
    },
    {
        "title": "塔格特",
        "url": "./movies/movie-695.html",
        "cover": "./95.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "犯罪 / 惊悚",
        "category": "动作奇幻",
        "summary": "卧底探员成功潜伏黑帮塔格特家族十年，却发现自己竟是家主失散多年的亲生儿子。",
        "tags": [
            "卧底警察",
            "黑帮家族",
            "双重身份",
            "背叛与忠诚"
        ]
    },
    {
        "title": "我的邻居长不大",
        "url": "./movies/movie-696.html",
        "cover": "./96.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国内地",
        "type": "电视剧",
        "genre": "爱情 / 都市",
        "category": "悬疑犯罪",
        "summary": "31岁的职场女强人被迫与7岁时暗恋过的邻家弟弟合租，对方如今已是24岁的当红作曲家，且依然喜欢她。",
        "tags": [
            "姐弟恋",
            "青梅竹马",
            "都市甜剧",
            "治愈",
            "合租"
        ]
    },
    {
        "title": "圣海伦火山爆发",
        "url": "./movies/movie-697.html",
        "cover": "./97.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "电影",
        "genre": "灾难 / 纪实",
        "category": "动作奇幻",
        "summary": "1980年圣海伦火山爆发前夜，一群无视警告的人，为了金钱和执念留在了死亡禁区。",
        "tags": [
            "真实事件",
            "求生",
            "火山"
        ]
    },
    {
        "title": "玛莉骄傲",
        "url": "./movies/movie-698.html",
        "cover": "./98.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 运动",
        "category": "爱情喜剧",
        "summary": "英国首位女子职业拳击世界冠军玛莉·骄傲的真实故事，她曾被所有人嘲笑“女人不该打拳”。",
        "tags": [
            "女性",
            "拳击",
            "励志",
            "真实改编"
        ]
    },
    {
        "title": "骗骗喜欢妳",
        "url": "./movies/movie-699.html",
        "cover": "./99.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情, 犯罪",
        "category": "经典回看",
        "summary": "职业女骗子接单去“拆散”一对情侣，结果发现自己爱上了“拆散目标”中的“第三者”。",
        "tags": [
            "骗中骗",
            "港式喜剧",
            "女A男O",
            "乌龙"
        ]
    },
    {
        "title": "最佳拍档4：千里救差婆",
        "url": "./movies/movie-700.html",
        "cover": "./100.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，动作",
        "category": "环球片库",
        "summary": "光头佬和金刚接到匿名信：差婆被绑架，而绑匪要求的赎金是“一记四十年前的耳光”。",
        "tags": [
            "搞笑",
            "兄弟",
            "跨国",
            "营救",
            "怀旧"
        ]
    },
    {
        "title": "奥少年找麻烦",
        "url": "./movies/movie-701.html",
        "cover": "./101.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧, 青春, 家庭",
        "category": "环球片库",
        "summary": "一个满脑子鬼主意的中二少年为了凑钱买限量球鞋，联合死党在小镇里搞出了一连串啼笑皆非的麻烦事。",
        "tags": [
            "少年成长",
            "乌龙事件",
            "邻里关系",
            "热血搞笑"
        ]
    },
    {
        "title": "尸落沙漠",
        "url": "./movies/movie-702.html",
        "cover": "./102.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，惊悚，生存",
        "category": "悬疑犯罪",
        "summary": "丧尸病毒爆发后，最安全的地方不是地下掩体，而是死亡谷的沙漠中心。",
        "tags": [
            "丧尸末日",
            "极端环境",
            "人性实验"
        ]
    },
    {
        "title": "闭锁症",
        "url": "./movies/movie-703.html",
        "cover": "./103.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国 / 德国",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 犯罪",
        "category": "爱情喜剧",
        "summary": "瘫痪在床、只有眼睛能动的女富豪，通过眨眼向护工传递信息：凶手是她的女儿。",
        "tags": [
            "密室",
            "闭锁综合征",
            "复仇",
            "反转"
        ]
    },
    {
        "title": "那些迷人的往事",
        "url": "./movies/movie-704.html",
        "cover": "./104.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "高清电影",
        "summary": "一位患阿尔茨海默症的母亲开始只记得年轻时的情人，而非相伴四十年的丈夫，女儿决定帮母亲“圆谎”。",
        "tags": [
            "回忆杀",
            "母女矛盾",
            "旧照片",
            "阿尔茨海默",
            "南法风情"
        ]
    },
    {
        "title": "结婚进行曲",
        "url": "./movies/movie-705.html",
        "cover": "./105.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "印度",
        "type": "电影",
        "genre": "爱情, 歌舞",
        "category": "亚洲精选",
        "summary": "在妹妹的婚礼前三天，准新郎突然失踪，姐姐不得不联手暗恋自己多年的妹妹前男友，上演一场寻找新郎的大作战。",
        "tags": [
            "婚礼",
            "家庭",
            "误会",
            "华丽"
        ]
    },
    {
        "title": "嗜血兄弟",
        "url": "./movies/movie-706.html",
        "cover": "./106.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "泰国",
        "type": "电影",
        "genre": "动作, 恐怖, 奇幻",
        "category": "悬疑犯罪",
        "summary": "一对靠打黑拳为生的兄弟，其中一人被咬成吸血鬼后，两人开始在拳台上猎杀其他怪物。",
        "tags": [
            "泰拳",
            "吸血鬼",
            "兄弟情",
            "邪典"
        ]
    },
    {
        "title": "淬火年代",
        "url": "./movies/movie-707.html",
        "cover": "./107.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争",
        "category": "家庭剧情",
        "summary": "1951年，一座东北钢厂接到死命令：三个月内轧出飞机起落架专用钢，而图纸被特务烧毁了一半。",
        "tags": [
            "钢铁工业",
            "抗美援朝",
            "工人群像"
        ]
    },
    {
        "title": "纳粹女魔头之病房狂魔",
        "url": "./movies/movie-708.html",
        "cover": "./108.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "美国 / 德国",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 历史",
        "category": "家庭剧情",
        "summary": "二战结束后，一名集中营女医生逃到美国，在一家精神病院继续她的恐怖实验。",
        "tags": [
            "B级片",
            "纳粹",
            "人体实验",
            "病房",
            "血腥"
        ]
    },
    {
        "title": "拉格纳强袭天使",
        "url": "./movies/movie-709.html",
        "cover": "./109.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "日本",
        "type": "动画",
        "genre": "动作 / 科幻 / 冒险",
        "category": "最新电视剧",
        "summary": "末日之下，代号“拉格纳”的三位机械天使觉醒，却发现她们的核心动力是人类即将消亡的“希望”。",
        "tags": [
            "机娘",
            "北欧神话",
            "美少女战斗"
        ]
    },
    {
        "title": "驱魔拍档",
        "url": "./movies/movie-710.html",
        "cover": "./110.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑 / 灵异 / 喜剧",
        "category": "爱情喜剧",
        "summary": "茅山道士与心理学博士组队驱魔，一个用符咒，一个用话疗，结果发现所有“鬼”都事出有因。",
        "tags": [
            "茅山术",
            "心理学",
            "搭档",
            "单元剧"
        ]
    },
    {
        "title": "因果报应",
        "url": "./movies/movie-711.html",
        "cover": "./111.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖 / 宗教 / 悬疑",
        "category": "环球片库",
        "summary": "一个盗墓团伙挖出了一块刻有禁忌经文的佛牌，从此每个人都在承受与生前罪恶对应的离奇死法。",
        "tags": [
            "泰国佛教",
            "轮回",
            "咒术",
            "诅咒",
            "古曼童"
        ]
    },
    {
        "title": "约束的罪行",
        "url": "./movies/movie-712.html",
        "cover": "./112.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "阿根廷 / 西班牙",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "category": "经典回看",
        "summary": "一座与世隔绝的修道院里，四位修女同时承认自己杀死了院长嬷嬷，但凶手只有一个。",
        "tags": [
            "修道院血案",
            "誓言之恶",
            "双线叙事",
            "信仰犯罪"
        ]
    },
    {
        "title": "完美盗贼",
        "url": "./movies/movie-713.html",
        "cover": "./113.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪悬疑",
        "category": "经典回看",
        "summary": "一群看似各怀鬼胎的盗贼瞄准了全城最严密的金库，却不知道这场“完美计划”从一开始就有人在替他们写好结局。",
        "tags": [
            "高智商盗窃",
            "团队作案",
            "双面卧底",
            "密码破解",
            "保险库"
        ]
    },
    {
        "title": "忧国",
        "url": "./movies/movie-714.html",
        "cover": "./114.jpg",
        "year": "1966",
        "yearNumber": 1966,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 历史 / 情色",
        "category": "最新电视剧",
        "summary": "新婚夫妇在二二六事变失败的清晨，用极致仪式化的性爱与死亡完成了对天皇的效忠。",
        "tags": [
            "三岛由纪夫",
            "极端美学",
            "二二六事件",
            "切腹",
            "黑白与彩色切换"
        ]
    },
    {
        "title": "绝命记忆",
        "url": "./movies/movie-715.html",
        "cover": "./115.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 科幻",
        "category": "亚洲精选",
        "summary": "一种可以定向删除记忆的技术问世，但使用者很快发现，被删掉的记忆会以噩梦的形式加倍归来。",
        "tags": [
            "记忆删除",
            "阴谋",
            "反转再反转",
            "身份迷失"
        ]
    },
    {
        "title": "杀手没有假期",
        "url": "./movies/movie-716.html",
        "cover": "./116.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "犯罪，喜剧，黑色幽默",
        "category": "经典回看",
        "summary": "两名杀手被老板强制送去比利时度假，却发现这次假期根本就是一个处决陷阱。",
        "tags": [
            "杀手",
            "布鲁日",
            "休假",
            "背叛"
        ]
    },
    {
        "title": "福星与福将",
        "url": "./movies/movie-717.html",
        "cover": "./117.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "category": "热播剧集",
        "summary": "警队出了名的两个倒霉蛋，一个自带“衰神”体质，一个专克队友，却被派去保护首富。",
        "tags": [
            "五福星系列",
            "乌龙警探",
            "兄弟情"
        ]
    },
    {
        "title": "变形怪体",
        "url": "./movies/movie-718.html",
        "cover": "./118.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 恐怖",
        "category": "经典回看",
        "summary": "一颗坠落的陨石带来了拥有无限吞噬能力的黏液怪体，整个小镇将在几小时内被消化。",
        "tags": [
            "怪物",
            "吞噬",
            "实验室",
            "生存"
        ]
    },
    {
        "title": "销魂天师之古堡惊魂",
        "url": "./movies/movie-719.html",
        "cover": "./119.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 恐怖, 奇幻",
        "category": "环球片库",
        "summary": "一位风流天师为寻宝闯入欧洲古堡，却发现里面的鬼怪都中了销魂降头，变成欲求不满的痴缠怨灵。",
        "tags": [
            "天师",
            "古堡",
            "降头",
            "搞笑",
            "僵尸"
        ]
    },
    {
        "title": "情迷四月天",
        "url": "./movies/movie-720.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电视剧",
        "genre": "爱情, 悬疑",
        "category": "爱情喜剧",
        "summary": "富家千金假扮身份潜入仇家，却发现自己与仇人之女长得一模一样。",
        "tags": [
            "民国",
            "家族恩怨",
            "替身"
        ]
    },
    {
        "title": "金色八月天",
        "url": "./movies/movie-721.html",
        "cover": "./121.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "法国",
        "type": "电影",
        "genre": "文艺剧情",
        "category": "家庭剧情",
        "summary": "八月末的南法庄园，得了失语症的老画家与隔代不亲的孙女，在葡萄藤下找回遗失的家族记忆。",
        "tags": [
            "南法",
            "夏日",
            "记忆"
        ]
    },
    {
        "title": "魔都传奇",
        "url": "./movies/movie-722.html",
        "cover": "./122.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 奇幻",
        "category": "环球片库",
        "summary": "民国上海滩，一个街头魔术师用“戏法”挑战三大黑帮，为兄复仇。",
        "tags": [
            "上海",
            "魔术师",
            "民国",
            "仇杀",
            "幻术"
        ]
    },
    {
        "title": "布洛克岛秘音",
        "url": "./movies/movie-723.html",
        "cover": "./123.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 悬疑, 科幻",
        "category": "高清电影",
        "summary": "岛上居民夜里不断听见无法定位的低频声，随着一户人家接连失控，一段关于海底裂隙的秘密开始浮出水面。",
        "tags": [
            "海岛异响",
            "家族创伤",
            "失眠噩梦",
            "失控磁场",
            "潜伏真相"
        ]
    },
    {
        "title": "吉星报喜粤语",
        "url": "./movies/movie-724.html",
        "cover": "./124.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧、古装、家庭",
        "category": "最新电视剧",
        "summary": "一个号称“扫把星”的穷小子，意外得到“吉星”高照，从此走到哪旺到哪，但却麻烦不断。",
        "tags": [
            "粤语",
            "市井",
            "热闹",
            "好运",
            "TVB风格"
        ]
    },
    {
        "title": "紧急盯梢令",
        "url": "./movies/movie-725.html",
        "cover": "./125.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 喜剧",
        "category": "高清电影",
        "summary": "为了抓捕顶级诈骗犯，两名最不靠谱的菜鸟警察被下令24小时贴身盯梢，却把目标跟丢了两次。",
        "tags": [
            "便衣警察",
            "尾随",
            "乌龙",
            "追逃"
        ]
    },
    {
        "title": "北西北",
        "url": "./movies/movie-726.html",
        "cover": "./126.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑， 惊悚",
        "category": "热播剧集",
        "summary": "一个失忆的杀手醒来时，身边有一具尸体和一张写有“北西北”的车票，而全城警察都在追他。",
        "tags": [
            "间谍",
            "杀手",
            "逃亡",
            "公路",
            "记忆"
        ]
    },
    {
        "title": "北海道生命线",
        "url": "./movies/movie-727.html",
        "cover": "./127.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 医疗",
        "category": "环球片库",
        "summary": "东京精英医生被贬北海道，驾驶救援直升机在暴风雪中拯救偏远生命。",
        "tags": [
            "北海道",
            "急救",
            "直升机医生",
            "乡村医疗"
        ]
    },
    {
        "title": "魔道祖师 日语版",
        "url": "./movies/movie-728.html",
        "cover": "./128.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "动画",
        "genre": "奇幻，冒险，耽美",
        "category": "最新电视剧",
        "summary": "夷陵老祖魏无羡重生后，与昔日宿敌蓝忘机结伴而行，共同揭开前世的惊天阴谋。",
        "tags": [
            "配音",
            "重生",
            "修仙",
            "宿敌",
            "羁绊"
        ]
    },
    {
        "title": "镖行天下前传之烽火辽东",
        "url": "./movies/movie-729.html",
        "cover": "./129.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠 / 历史 / 动作",
        "category": "最新电视剧",
        "summary": "少年王振威初入镖行，为运送抗倭军事图穿越辽东烽火线，却遭遇师兄背叛与倭寇的死亡围猎。",
        "tags": [
            "明朝",
            "镖师",
            "倭寇",
            "兄弟阋墙",
            "烽火台"
        ]
    },
    {
        "title": "藤子海敏的时间",
        "url": "./movies/movie-730.html",
        "cover": "./130.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "传记",
        "category": "最新电视剧",
        "summary": "失聪钢琴家每次弹奏《月光》都会失去十分钟记忆，而那十分钟里他见到了未来的女儿。",
        "tags": [
            "钢琴家",
            "失聪",
            "时间穿梭",
            "音乐治愈"
        ]
    },
    {
        "title": "詹姆斯法兰科的年少时代",
        "url": "./movies/movie-731.html",
        "cover": "./131.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "传记, 喜剧",
        "category": "高清电影",
        "summary": "詹姆斯·弗兰科“自导自演”了一部关于自己如何靠拼凑童年记忆拿到名校学历的伪纪录片。",
        "tags": [
            "元叙事",
            "伪纪录片",
            "演员调侃",
            "好莱坞"
        ]
    },
    {
        "title": "斯宾塞",
        "url": "./movies/movie-732.html",
        "cover": "./132.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "英国/美国/智利",
        "type": "电影",
        "genre": "传记/心理剧",
        "category": "高清电影",
        "summary": "1991年圣诞，戴安娜王妃在桑德灵汉姆庄园度过了决定命运的三天，她必须在“王妃”和“斯宾塞”之间选一个身份活下去。",
        "tags": [
            "戴安娜王妃",
            "王室",
            "圣诞",
            "精神崩溃"
        ]
    },
    {
        "title": "带子狼 在那双小手中",
        "url": "./movies/movie-733.html",
        "cover": "./133.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 动作",
        "category": "动作奇幻",
        "summary": "一位沉默的刺客带着三岁儿子踏上复仇路，孩子的小手却握住了他持刀的手。",
        "tags": [
            "父子",
            "复仇",
            "武士",
            "温情"
        ]
    },
    {
        "title": "峰爆",
        "url": "./movies/movie-734.html",
        "cover": "./134.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难 / 动作",
        "category": "环球片库",
        "summary": "全球最大地质断裂带突发崩塌，一对常年不和的父子工程师，必须在24小时内阻止山体滑坡吞噬县城。",
        "tags": [
            "地质灾害",
            "救援英雄",
            "父子传承"
        ]
    },
    {
        "title": "极冻邪恶",
        "url": "./movies/movie-735.html",
        "cover": "./135.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "加拿大",
        "type": "电影",
        "genre": "恐怖，惊悚，科幻",
        "category": "亚洲精选",
        "summary": "北极科考站挖出一具冻僵千年的人类尸体，解冻后，它开始模仿并替换科考队员。",
        "tags": [
            "低温实验",
            "人体冷冻",
            "复活怪物",
            "极地"
        ]
    },
    {
        "title": "搏击英雄",
        "url": "./movies/movie-736.html",
        "cover": "./136.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港 / 泰国",
        "type": "电影",
        "genre": "动作 / 运动 / 励志",
        "category": "家庭剧情",
        "summary": "52岁的前拳王为给女儿治病复出，在无限制格斗赛场对决昔日徒弟。",
        "tags": [
            "泰拳",
            "高龄拳手",
            "父子",
            "擂台"
        ]
    },
    {
        "title": "歌手 当打之年",
        "url": "./movies/movie-737.html",
        "cover": "./137.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "综艺",
        "genre": "音乐 / 真人秀",
        "category": "高清电影",
        "summary": "12位处于创作巅峰期的华语歌手同台竞技，每期必须演唱未发表过的原创新歌，当打之年，只拼作品。",
        "tags": [
            "竞演",
            "歌手",
            "原创",
            "舞台"
        ]
    },
    {
        "title": "企鹅小守护",
        "url": "./movies/movie-738.html",
        "cover": "./138.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国/比利时",
        "type": "电影",
        "genre": "家庭，动画，冒险",
        "category": "最新电视剧",
        "summary": "一只因污染而长出蓝色羽毛的企鹅，为了拯救融化的家园，带着三只海豹组成了最不靠谱的救援队。",
        "tags": [
            "企鹅",
            "守护者",
            "南极",
            "环保"
        ]
    },
    {
        "title": "阴阳路4与鬼同行",
        "url": "./movies/movie-739.html",
        "cover": "./139.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "环球片库",
        "summary": "一个旅游团出发去菲律宾，游客们却发现，巴士上的导游并不是活人。",
        "tags": [
            "阴阳路",
            "经典港恐",
            "分段式",
            "同行",
            "鬼魂"
        ]
    },
    {
        "title": "冰淇淋与雨声",
        "url": "./movies/movie-740.html",
        "cover": "./140.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 青春",
        "category": "亚洲精选",
        "summary": "距离话剧公演只剩三天，排练被取消，但少年们依然穿着戏服，在现实中开始了一场盛大的演出。",
        "tags": [
            "长镜头",
            "舞台剧风格",
            "文艺青春",
            "梦想与现实"
        ]
    },
    {
        "title": "如果重来一次",
        "url": "./movies/movie-741.html",
        "cover": "./141.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情、奇幻、家庭",
        "category": "悬疑犯罪",
        "summary": "一位悔恨的母亲获得了五次回到过去的机会，只为阻止女儿的一场致命婚姻。",
        "tags": [
            "重生",
            "时间循环",
            "亲情救赎",
            "人生选择",
            "催泪"
        ]
    },
    {
        "title": "说再见前的30分钟",
        "url": "./movies/movie-742.html",
        "cover": "./142.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 爱情",
        "category": "爱情喜剧",
        "summary": "男主角捡到一盘神奇的磁带，播放后能与已故的女主灵魂互换30分钟，但每次互换，她的记忆就会消失一点。",
        "tags": [
            "磁带",
            "灵魂互换",
            "纯爱"
        ]
    },
    {
        "title": "坎卜斯：清算",
        "url": "./movies/movie-743.html",
        "cover": "./143.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 奇幻",
        "category": "环球片库",
        "summary": "圣诞老人被坎卜斯囚禁，一个不相信圣诞的小男孩必须闯入暗黑圣诞村，用最珍贵的记忆换回圣诞。",
        "tags": [
            "圣诞恐怖",
            "民间传说",
            "血腥",
            "暗黑童话",
            "宗教"
        ]
    },
    {
        "title": "完美姐妹",
        "url": "./movies/movie-744.html",
        "cover": "./144.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 惊悚 / 剧情",
        "category": "家庭剧情",
        "summary": "孪生姐妹中的妹妹突然死亡，姐姐假扮成她进入妹妹的生活，却发现妹妹一直在扮演她。",
        "tags": [
            "双胞胎",
            "身份互换",
            "家族秘密"
        ]
    },
    {
        "title": "我的砍价女王",
        "url": "./movies/movie-745.html",
        "cover": "./145.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "都市 / 职场 / 爱情",
        "category": "亚洲精选",
        "summary": "顶级砍价师被酒店并购专家步步紧逼，两人从牌桌砍到商场，最后竟要砍自己的婚姻。",
        "tags": [
            "职场爽剧",
            "砍价师",
            "欢喜冤家"
        ]
    },
    {
        "title": "守卫恶魔镇",
        "url": "./movies/movie-746.html",
        "cover": "./146.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 奇幻",
        "category": "高清电影",
        "summary": "一座被雾气包围的边境小镇，夜里只要钟声停摆，镇上每个守卫都必须面对自己守护的“恶魔”是否正在苏醒。",
        "tags": [
            "小镇秘史",
            "结界守夜人",
            "失踪案",
            "诡异传说",
            "群像博弈"
        ]
    },
    {
        "title": "铁骑金戈",
        "url": "./movies/movie-747.html",
        "cover": "./147.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装战争",
        "category": "环球片库",
        "summary": "边疆烽火再起，一支被遗忘的骑兵队以百人血肉之躯，抵挡三万敌军于关外。",
        "tags": [
            "铁血骑兵",
            "边疆烽火",
            "兄弟情义",
            "冷兵器对决"
        ]
    },
    {
        "title": "秀逗小护士4",
        "url": "./movies/movie-748.html",
        "cover": "./148.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "香港",
        "type": "医疗喜剧电视剧",
        "genre": "喜剧,职场,人情,制度观察",
        "category": "高清电影",
        "summary": "第四季里，小护士林可儿仍旧神出鬼没、总爱掉针头，她却用一连串看似失误的操作，逼着整座医院正视制度漏洞与人的脆弱。",
        "tags": [
            "医院生活",
            "轻松幽默",
            "同事关系",
            "救援现场",
            "医疗现象"
        ]
    },
    {
        "title": "沙滩美女",
        "url": "./movies/movie-749.html",
        "cover": "./149.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 青春",
        "category": "动作奇幻",
        "summary": "一场暑期海边拍摄让不擅社交的插画师撞上“沙滩美女”，却发现对方真正想逃离的，正是所有人眼里的完美人生。",
        "tags": [
            "海边民宿",
            "假期邂逅",
            "误会连环",
            "友情告白",
            "夏日成长"
        ]
    },
    {
        "title": "墨尔本周末不回家",
        "url": "./movies/movie-750.html",
        "cover": "./150.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "剧情/爱情",
        "category": "热播剧集",
        "summary": "一个即将回国结婚的中国姑娘，与一个不愿回家的澳洲华裔酒保，在墨尔本的48小时里，交换了彼此的秘密和一夜。",
        "tags": [
            "都市",
            "邂逅",
            "文艺"
        ]
    },
    {
        "title": "坐在酒吧里吃蛋糕",
        "url": "./movies/movie-751.html",
        "cover": "./1.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电影",
        "genre": "剧情，美食",
        "category": "动作奇幻",
        "summary": "一个不相信爱情的女子，在酒吧里邂逅了一块蛋糕，和四个同样孤独的女人。",
        "tags": [
            "治愈",
            "女性群像",
            "孤独"
        ]
    },
    {
        "title": "狗狗圣诞节",
        "url": "./movies/movie-752.html",
        "cover": "./2.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "家庭 / 喜剧",
        "category": "爱情喜剧",
        "summary": "一只被遗弃的金毛在圣诞夜闯入一个破碎家庭，用一晚上的时间让所有人重新学会爱。",
        "tags": [
            "宠物奇缘",
            "节日温情",
            "治愈喜剧"
        ]
    },
    {
        "title": "云深不知梦",
        "url": "./movies/movie-753.html",
        "cover": "./3.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "台湾",
        "type": "电影",
        "genre": "悬疑，奇幻，剧情",
        "category": "悬疑犯罪",
        "summary": "一家开在深山云海中的民宿，入住的客人都能梦到彼此内心深处隐藏的秘密。",
        "tags": [
            "民宿",
            "梦境",
            "平行时空"
        ]
    },
    {
        "title": "纽约女郎乡下情",
        "url": "./movies/movie-754.html",
        "cover": "./4.jpg",
        "year": "1954",
        "yearNumber": 1954,
        "region": "美国",
        "type": "电影",
        "genre": "爱情，喜剧",
        "category": "家庭剧情",
        "summary": "一位曼哈顿的时尚女编辑因车祸被困保守小镇，却用都市套路把整个镇的农夫迷得神魂颠倒。",
        "tags": [
            "黑白",
            "城乡",
            "浪漫",
            "幽默",
            "经典"
        ]
    },
    {
        "title": "巨声妈妈",
        "url": "./movies/movie-755.html",
        "cover": "./5.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭，音乐，喜剧",
        "category": "最新电视剧",
        "summary": "一位嗓门巨大的农村妈妈意外杀入全国歌唱大赛，用她的高音和质朴感动所有人。",
        "tags": [
            "母爱",
            "选秀",
            "中年梦想",
            "反差萌"
        ]
    },
    {
        "title": "土包子游巴黎",
        "url": "./movies/movie-756.html",
        "cover": "./6.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国, 中国大陆",
        "type": "电影",
        "genre": "喜剧, 冒险",
        "category": "经典回看",
        "summary": "山西煤老板被女儿骗到巴黎参加“老年旅行团”，结果错把地下杀手组织的接头暗号当成了广场舞教学。",
        "tags": [
            "文化冲突",
            "误打误撞",
            "夕阳红",
            "浪漫"
        ]
    },
    {
        "title": "劫狱惊魂",
        "url": "./movies/movie-757.html",
        "cover": "./7.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 犯罪, 悬疑",
        "category": "家庭剧情",
        "summary": "为救被诬陷入狱的弟弟，前特警队长精心策划了一场不可能的越狱。",
        "tags": [
            "越狱",
            "硬汉",
            "密室逃脱",
            "警匪对峙"
        ]
    },
    {
        "title": "嘻哈大骗徒",
        "url": "./movies/movie-758.html",
        "cover": "./8.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧, 犯罪",
        "category": "高清电影",
        "summary": "三个一事无成的落魄Rapper，假扮成美国著名嘻哈制作团队，竟然骗过了整个韩国娱乐圈。",
        "tags": [
            "骗子",
            "嘻哈",
            "逆袭"
        ]
    },
    {
        "title": "亲爱的，我要和别人结婚了",
        "url": "./movies/movie-759.html",
        "cover": "./9.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国",
        "type": "电影",
        "genre": "爱情，剧情，灾难",
        "category": "热播剧集",
        "summary": "汶川地震夺走了他的爱人，一封寄往天堂的信写了整整十年，直到他决定再次牵起另一个人的手。",
        "tags": [
            "汶川地震",
            "真实事件改编",
            "生死恋歌",
            "催泪"
        ]
    },
    {
        "title": "美国，美国",
        "url": "./movies/movie-760.html",
        "cover": "./10.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 冒险",
        "category": "高清电影",
        "summary": "一个拉美少年钻入货运火车的顶部，开始长达两千公里的偷渡之旅，却发现美国梦是他见过最大的谎言。",
        "tags": [
            "移民梦",
            "公路片",
            "残酷现实"
        ]
    },
    {
        "title": "魔幻波",
        "url": "./movies/movie-761.html",
        "cover": "./11.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "奇幻冒险",
        "category": "高清电影",
        "summary": "当海面上的每一次涨落都像在呼唤名字，少年必须学会听懂那道会发光的波浪，才能救回整座港口的记忆。",
        "tags": [
            "海洋传说",
            "少年成长",
            "声波",
            "失落港湾",
            "友谊"
        ]
    },
    {
        "title": "爱很烂",
        "url": "./movies/movie-762.html",
        "cover": "./12.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "香港",
        "type": "电影",
        "genre": "爱情, 剧情, 文艺",
        "category": "经典回看",
        "summary": "五段失败的爱情故事，唯一的共同点是——所有人都以为自己这次不一样。",
        "tags": [
            "多线叙事",
            "爱情残酷",
            "香港",
            "边缘人"
        ]
    },
    {
        "title": "斗牛犬续集",
        "url": "./movies/movie-763.html",
        "cover": "./13.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 运动",
        "category": "家庭剧情",
        "summary": "前拳王“斗牛犬”出狱后发现儿子成了地下黑拳明星，父子必须在擂台内外解决旧债新仇。",
        "tags": [
            "拳击",
            "父子和解",
            "底层翻身"
        ]
    },
    {
        "title": "侠影骑踪",
        "url": "./movies/movie-764.html",
        "cover": "./14.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠、动作、冒险",
        "category": "悬疑犯罪",
        "summary": "为报灭门之仇，孤女化身蒙面骑侠，却在追杀仇人途中发现父亲才是真正的叛国者。",
        "tags": [
            "女侠",
            "快马",
            "复仇",
            "江湖奇案"
        ]
    },
    {
        "title": "猎鹰计划",
        "url": "./movies/movie-765.html",
        "cover": "./15.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作 / 悬疑 / 军事",
        "category": "高清电影",
        "summary": "一场绝密的无人机测试演练发生爆炸，一名被开除的飞行员成为唯一嫌疑人，他必须在被国家追捕的同时，找出真正的幕后黑手。",
        "tags": [
            "特工",
            "高科技战争",
            "反恐",
            "兄弟情"
        ]
    },
    {
        "title": "血之走廊",
        "url": "./movies/movie-766.html",
        "cover": "./16.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 密室",
        "category": "环球片库",
        "summary": "十个人醒来发现自己被困在一所废弃医院，每打开一扇门，就会有人按照“罪孽”程度死去。",
        "tags": [
            "密室逃脱",
            "血腥",
            "反转",
            "生存游戏",
            "高智商"
        ]
    },
    {
        "title": "重灌叛逃",
        "url": "./movies/movie-767.html",
        "cover": "./17.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "德国",
        "type": "电影",
        "genre": "科幻，动作，惊悚",
        "category": "爱情喜剧",
        "summary": "2027年柏林墙再度竖起，东德警察穿上“重灌”机甲巡逻，一对西德兄妹试图穿越铁幕寻找失散的母亲。",
        "tags": [
            "机甲",
            "东德西德",
            "冷战",
            "人工智能"
        ]
    },
    {
        "title": "诚实的商人",
        "url": "./movies/movie-768.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭, 社会",
        "category": "动作奇幻",
        "summary": "一家濒临倒闭的小便利店，老板坚持的“无理由退货”原则，意外搅动了整个社区的冷漠人心。",
        "tags": [
            "便利店",
            "诚信",
            "邻里关系",
            "治愈",
            "老龄化"
        ]
    },
    {
        "title": "烽火铁骑",
        "url": "./movies/movie-769.html",
        "cover": "./19.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国",
        "type": "战争电影",
        "genre": "战争,军旅,历史,人文",
        "category": "爱情喜剧",
        "summary": "北境边塞一支被遗忘的铁骑在大雪封道三十日苦守驼峰口，指挥官用未寄出的家书让全军在绝望中不倒。",
        "tags": [
            "铁骑",
            "边塞",
            "雪地作战",
            "生存",
            "家国"
        ]
    },
    {
        "title": "羁绊之间",
        "url": "./movies/movie-770.html",
        "cover": "./20.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "热播剧集",
        "summary": "因遗产纠纷重聚的三兄妹，却在整理母亲遗物时发现了足以改写一生的家族秘密。",
        "tags": [
            "亲情",
            "治愈",
            "人性",
            "社会",
            "细腻"
        ]
    },
    {
        "title": "祭军魂",
        "url": "./movies/movie-771.html",
        "cover": "./21.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争 / 悬疑 / 惊悚",
        "category": "悬疑犯罪",
        "summary": "抗战老兵死后留下一份诡异遗言，七个孙子在祭奠之夜相继惨死，背后的军魂仍未安息。",
        "tags": [
            "抗日战争",
            "祭奠",
            "诅咒",
            "战友",
            "灵异"
        ]
    },
    {
        "title": "卧底巨星",
        "url": "./movies/movie-772.html",
        "cover": "./22.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆 / 香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "category": "亚洲精选",
        "summary": "一个跑龙套的替身演员被警方误认为卧底，卷入巨星与毒枭的生死局。",
        "tags": [
            "娱乐圈",
            "替身",
            "乌龙卧底",
            "功夫",
            "黑色幽默"
        ]
    },
    {
        "title": "艳惊情",
        "url": "./movies/movie-773.html",
        "cover": "./23.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 犯罪",
        "category": "环球片库",
        "summary": "八十年代的霓虹灯下，一名夜总会头牌舞女的情人尸体被发现，而她唯一的证人是一只不会说话的鹦鹉。",
        "tags": [
            "情色",
            "宿命",
            "黑色电影",
            "复仇",
            "怀旧"
        ]
    },
    {
        "title": "梦续奇缘",
        "url": "./movies/movie-774.html",
        "cover": "./24.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 奇幻 / 剧情",
        "category": "最新电视剧",
        "summary": "现代女孩每晚都梦到自己是民国粤剧花旦，当她找到梦中戏服，却引发了两世的感情纠葛。",
        "tags": [
            "穿越",
            "粤剧",
            "前世今生",
            "戏班",
            "缘分"
        ]
    },
    {
        "title": "人龙传说国语",
        "url": "./movies/movie-775.html",
        "cover": "./25.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/奇幻",
        "category": "亚洲精选",
        "summary": "屠龙勇士爱上了最后一条龙，而她每落一滴泪，人间就下一场血雨。",
        "tags": [
            "龙族",
            "复仇",
            "虐恋",
            "特效",
            "神话改编"
        ]
    },
    {
        "title": "同居人是猫",
        "url": "./movies/movie-776.html",
        "cover": "./26.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 治愈 / 日常",
        "category": "家庭剧情",
        "summary": "社恐小说家捡到一只流浪猫，人与猫各自的心理活动，在同一屋檐下交织成温暖的双线叙事。",
        "tags": [
            "猫咪",
            "社交恐惧",
            "治愈系",
            "双视角",
            "温暖"
        ]
    },
    {
        "title": "兵哥",
        "url": "./movies/movie-777.html",
        "cover": "./27.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "爱情喜剧",
        "summary": "一位参加过对越自卫反击战的老兵，骑着一辆破三轮车，跨越三千公里，只为给牺牲战友的母亲送一碗家乡的饺子。",
        "tags": [
            "退伍军人",
            "乡村",
            "父子情",
            "公路片",
            "温情"
        ]
    },
    {
        "title": "来自收容所的爱",
        "url": "./movies/movie-778.html",
        "cover": "./28.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 历史 / 治愈",
        "category": "经典回看",
        "summary": "抗战时期的上海，一位犹太难民医生和一位中国乡村寡妇，在一个废弃收容所里共同守护二十个战争孤儿。",
        "tags": [
            "抗战",
            "孤儿",
            "国际友谊",
            "温情"
        ]
    },
    {
        "title": "猛鬼屠房",
        "url": "./movies/movie-779.html",
        "cover": "./29.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "爱情喜剧",
        "summary": "七个网红闯入废弃屠房直播探险，却发现每一刀砍下去，直播间都会多一个观众。",
        "tags": [
            "港式恐怖",
            "凶宅",
            "密室",
            "怨灵",
            "cult"
        ]
    },
    {
        "title": "下一站幸福",
        "url": "./movies/movie-780.html",
        "cover": "./30.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情、都市、治愈",
        "category": "动作奇幻",
        "summary": "被裁员的都市女白领躲进深夜便利店，却发现店长是一个话痨又温暖的大男孩。",
        "tags": [
            "职场",
            "便利店",
            "深夜",
            "单元故事",
            "姐弟恋"
        ]
    },
    {
        "title": "世界大战",
        "url": "./movies/movie-781.html",
        "cover": "./31.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 科幻， 战争",
        "category": "高清电影",
        "summary": "外星舰队降落八大洋，人类最后的希望是一艘中国科考船。",
        "tags": [
            "外星入侵",
            "全球抵抗",
            "硬核战斗"
        ]
    },
    {
        "title": "邦尼杀死他",
        "url": "./movies/movie-782.html",
        "cover": "./32.jpg",
        "year": "1968",
        "yearNumber": 1968,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪, 剧情",
        "category": "动作奇幻",
        "summary": "女大学生邦尼爱上流浪汉克莱德，两人决定去杀死所有让她写不出论文的“权威”。",
        "tags": [
            "新好莱坞",
            "雌雄大盗",
            "公路电影",
            "反建制"
        ]
    },
    {
        "title": "空房禁女",
        "url": "./movies/movie-783.html",
        "cover": "./33.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑 / 惊悚",
        "category": "亚洲精选",
        "summary": "单身女性通过软件合租到了一间便宜公寓，却发现自己被囚禁在墙壁夹层里的密室中。",
        "tags": [
            "密室囚禁",
            "反转惊悚",
            "女性复仇",
            "心理压迫"
        ]
    },
    {
        "title": "格杀密令",
        "url": "./movies/movie-784.html",
        "cover": "./34.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "category": "家庭剧情",
        "summary": "一名被淘汰的老年特工发现自己名字出现在军情六处的秘密清除名单上。",
        "tags": [
            "特工",
            "阴谋",
            "追杀",
            "反转",
            "高能"
        ]
    },
    {
        "title": "野兽良民",
        "url": "./movies/movie-785.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "环球片库",
        "summary": "一个冷酷的黑帮打手在收养失明女孩后，试图金盆洗手，却发现仇家已找上门。",
        "tags": [
            "黑帮",
            "人性拷问",
            "双面人生",
            "暴力美学"
        ]
    },
    {
        "title": "感染列岛",
        "url": "./movies/movie-786.html",
        "cover": "./36.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "灾难 / 惊悚 / 剧情",
        "category": "最新电视剧",
        "summary": "未知病毒48小时席卷全岛，政府宣布放弃救援，岛上居民开始了一场残酷的生存实验。",
        "tags": [
            "病毒",
            "隔离",
            "人性",
            "求生"
        ]
    },
    {
        "title": "黑鹰追缉令",
        "url": "./movies/movie-787.html",
        "cover": "./37.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "中国香港 / 美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 警匪",
        "category": "动作奇幻",
        "summary": "代号黑鹰的顶尖杀手在完成最后一次任务时发现暗杀目标竟是自己的亲身父亲，于是反水成为警方追缉的头号目标。",
        "tags": [
            "双雄对决",
            "黑吃黑",
            "火爆枪战"
        ]
    },
    {
        "title": "太阳星辰粤语",
        "url": "./movies/movie-788.html",
        "cover": "./38.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 科幻",
        "category": "家庭剧情",
        "summary": "2046年的失意歌手带着AI耳机穿越回1997年的香港，偶遇了还没红就死去的传奇巨星。",
        "tags": [
            "穿越",
            "粤语情怀",
            "怀旧"
        ]
    },
    {
        "title": "十诫Ⅳ：父女迷情",
        "url": "./movies/movie-789.html",
        "cover": "./39.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "波兰",
        "type": "电影",
        "genre": "伦理",
        "category": "亚洲精选",
        "summary": "父亲去世后，女儿发现了一封信，信中说：她不是父亲的亲生女儿。",
        "tags": [
            "基耶斯洛夫斯基",
            "父女",
            "禁忌",
            "道德",
            "经典"
        ]
    },
    {
        "title": "吊桥上的秘密",
        "url": "./movies/movie-790.html",
        "cover": "./40.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 爱情, 剧情",
        "category": "亚洲精选",
        "summary": "女画家返乡寻找失踪的初恋，老吊桥上每晚都有个女人在刻字，而她刻的是只有女主才知道的秘密。",
        "tags": [
            "心理悬疑",
            "小镇秘事",
            "双重人格",
            "救赎"
        ]
    },
    {
        "title": "有招没招之爱情达人",
        "url": "./movies/movie-791.html",
        "cover": "./41.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧，爱情",
        "category": "家庭剧情",
        "summary": "一个自称“爱情达人”的油腻情场高手，遇到了一个完全不按套路出牌的钢铁直女。",
        "tags": [
            "恋爱技巧",
            "都市男女",
            "反向操作",
            "笑料不断"
        ]
    },
    {
        "title": "艾茵·兰德：一种生命感",
        "url": "./movies/movie-792.html",
        "cover": "./42.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "传记 / 剧情",
        "category": "环球片库",
        "summary": "影片聚焦年轻艾茵·兰德在苏联时期的觉醒时刻，以及她如何对抗集体主义对个体灵魂的碾压。",
        "tags": [
            "哲学家",
            "女性力量",
            "思想史"
        ]
    },
    {
        "title": "不割席",
        "url": "./movies/movie-793.html",
        "cover": "./43.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/家庭",
        "category": "热播剧集",
        "summary": "一场家族葬礼，让因政见分裂多年的三兄妹被迫同处一室，一触即发。",
        "tags": [
            "家庭矛盾",
            "立场冲突",
            "亲情",
            "和解"
        ]
    },
    {
        "title": "没有数学的修学旅行",
        "url": "./movies/movie-794.html",
        "cover": "./44.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "喜剧，青春，奇幻",
        "category": "亚洲精选",
        "summary": "五个数学白痴高中生被传送到一个没有数学的世界，却发现那里的一切都变得荒谬至极。",
        "tags": [
            "修学旅行",
            "数学恐惧",
            "平行世界",
            "搞笑",
            "成长"
        ]
    },
    {
        "title": "荒野心家园",
        "url": "./movies/movie-795.html",
        "cover": "./45.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "剧情 / 冒险",
        "category": "最新电视剧",
        "summary": "城市家庭买下废弃牧场，才发现上一任主人是袋鼠家族。",
        "tags": [
            "荒野",
            "生存",
            "家庭",
            "迁徙"
        ]
    },
    {
        "title": "荡妇娜娜",
        "url": "./movies/movie-796.html",
        "cover": "./46.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情，情色，历史",
        "category": "经典回看",
        "summary": "她被称为“荡妇”，却活成了那个时代最自由的女人，直到被所谓的体面社会吞噬。",
        "tags": [
            "名著改编",
            "女性悲剧",
            "红颜薄命"
        ]
    },
    {
        "title": "爱情使你盲目",
        "url": "./movies/movie-797.html",
        "cover": "./47.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情, 悬疑, 惊悚",
        "category": "环球片库",
        "summary": "一场车祸后失明的调香师，用超越常人的嗅觉和听觉，发现深爱她的完美男友竟在编织一个巨大的谎言。",
        "tags": [
            "盲人",
            "感官",
            "豪宅",
            "骗局"
        ]
    },
    {
        "title": "癫螳螂",
        "url": "./movies/movie-798.html",
        "cover": "./48.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 功夫",
        "category": "爱情喜剧",
        "summary": "一个患有狂躁症的男人，将癫狂的心智与失传的螳螂拳结合，在血腥的复仇之路上试图找回理智。",
        "tags": [
            "拳拳到肉",
            "癫狂",
            "螳螂拳",
            "复仇"
        ]
    },
    {
        "title": "宇宙的耶诞节",
        "url": "./movies/movie-799.html",
        "cover": "./49.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "瑞典 / 丹麦",
        "type": "电影",
        "genre": "科幻 / 家庭",
        "category": "高清电影",
        "summary": "一位在国际空间站独自度过圣诞节的宇航员，在无线电里收到了来自地球深处的“圣诞老人”的回话。",
        "tags": [
            "圣诞",
            "宇航员",
            "孤独",
            "无线电"
        ]
    },
    {
        "title": "白鬃野马",
        "url": "./movies/movie-800.html",
        "cover": "./50.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "蒙古",
        "type": "电影",
        "genre": "冒险 / 家庭 / 自然传奇",
        "category": "经典回看",
        "summary": "少年在暴风雪前救下一匹额头带白鬃的野马，却因此卷入草原部族与盗猎者之间的追逐，踏上一段关于信任与自由的旅程。",
        "tags": [
            "草原迁徙",
            "人马羁绊",
            "族群守护",
            "成长冒险"
        ]
    },
    {
        "title": "伊莉莎伯泰莱倾城艳",
        "url": "./movies/movie-801.html",
        "cover": "./51.jpg",
        "year": "1955",
        "yearNumber": 1955,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 传记",
        "category": "经典回看",
        "summary": "伊丽莎白·泰勒饰演一位埃及艳后式的交际花，周旋于罗马帝国三位巨头之间，用美色改写历史。",
        "tags": [
            "伊丽莎白·泰勒",
            "黄金时代",
            "倾国倾城",
            "古典",
            "爱情"
        ]
    },
    {
        "title": "爱我一下·夏",
        "url": "./movies/movie-802.html",
        "cover": "./52.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春, 爱情, 喜剧",
        "category": "爱情喜剧",
        "summary": "高考后的夏天，学渣为追学霸假扮男友，却意外卷入一场真实的三角恋游戏。",
        "tags": [
            "校园",
            "双向暗恋",
            "夏日",
            "轻喜",
            "成长"
        ]
    },
    {
        "title": "玛侬的复仇",
        "url": "./movies/movie-803.html",
        "cover": "./53.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 女性",
        "category": "环球片库",
        "summary": "牧羊女玛侬发现了二十年前父亲被村里富农迫害致死的真相，一场温柔而残忍的复仇开始了。",
        "tags": [
            "小镇恩怨",
            "女性复仇",
            "阶级冲突",
            "悲剧"
        ]
    },
    {
        "title": "赛尔号第四季之战神风云决",
        "url": "./movies/movie-804.html",
        "cover": "./54.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "动画",
        "genre": "科幻, 冒险, 机甲, 热血",
        "category": "高清电影",
        "summary": "当失控的古代战神核心在星海深处苏醒，少年船员们必须在一场注定改写宇宙秩序的风云决中，抢在毁灭前找回真正的力量。",
        "tags": [
            "宇宙远征",
            "战神试炼",
            "能源危机",
            "伙伴羁绊",
            "反派阴谋"
        ]
    },
    {
        "title": "基尼与亚当斯",
        "url": "./movies/movie-805.html",
        "cover": "./55.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "category": "亚洲精选",
        "summary": "私家侦探基尼接了一起普通的外遇调查，却发现自己追查的线索和十年前自杀的搭档亚当斯未破的悬案完全重合。",
        "tags": [
            "双男主",
            "精神分裂",
            "拼图叙事"
        ]
    },
    {
        "title": "动态漫画·圣墟",
        "url": "./movies/movie-806.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画， 玄幻， 冒险",
        "category": "高清电影",
        "summary": "地球异变，灵气复苏，楚风从普通少年觉醒荒体，在妖魔鬼怪横行的末世中杀出一条成神之路。",
        "tags": [
            "动态漫画",
            "废柴逆袭",
            "修炼",
            "地球剧变"
        ]
    },
    {
        "title": "神气威龙",
        "url": "./movies/movie-807.html",
        "cover": "./57.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 喜剧 / 冒险",
        "category": "爱情喜剧",
        "summary": "一条社恐龙、一只戏精猫和一只被迫戒赌的穿山甲，组队拯救被恶龙绑架的公主，但公主自己把恶龙暴揍了一顿。",
        "tags": [
            "魔法",
            "动物王国",
            "反套路",
            "吐槽役",
            "合家欢"
        ]
    },
    {
        "title": "比悲伤更悲伤的故事",
        "url": "./movies/movie-808.html",
        "cover": "./58.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "爱情喜剧",
        "summary": "绝症作词人亲手将深爱的女孩推给另一个男人，却不知道女孩早已得知一切，并决定用一生陪他演完这场戏。",
        "tags": [
            "绝恋",
            "催泪弹",
            "双向暗恋",
            "生死相守"
        ]
    },
    {
        "title": "莫德里斯",
        "url": "./movies/movie-809.html",
        "cover": "./59.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "挪威",
        "type": "剧集",
        "genre": "悬疑 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "挪威一座小岛上的居民每隔二十年就会集体遗忘一切，一个外来的女警探必须在记忆重置之前找到失踪的女童。",
        "tags": [
            "北欧神话",
            "小镇谜案",
            "轮回"
        ]
    },
    {
        "title": "楚留香之盗帅觉醒",
        "url": "./movies/movie-810.html",
        "cover": "./60.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "电影",
        "genre": "武侠、动作、悬疑",
        "category": "爱情喜剧",
        "summary": "年轻时的楚留香初出茅庐，本想盗取长生诀扬名立万，却因此揭开了江湖消失的十年。",
        "tags": [
            "轻功",
            "侠盗",
            "身世之谜",
            "江湖门派"
        ]
    },
    {
        "title": "哭泣女人的诅咒2019",
        "url": "./movies/movie-811.html",
        "cover": "./61.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "墨西哥 / 美国",
        "type": "电影",
        "genre": "恐怖",
        "category": "爱情喜剧",
        "summary": "一个失去孩子的女鬼，在寻找替身的过程中盯上了一位单亲妈妈的子女。",
        "tags": [
            "民俗恐怖",
            "女鬼",
            "儿童",
            "都市传说",
            "温子仁"
        ]
    },
    {
        "title": "夏末",
        "url": "./movies/movie-812.html",
        "cover": "./62.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情, 同性",
        "category": "环球片库",
        "summary": "两个年近四十的男人在故乡夏末的葬礼上重逢，发现彼此藏了二十年的秘密，原来对方也是。",
        "tags": [
            "乡村",
            "中年危机",
            "初恋重逢",
            "温情"
        ]
    },
    {
        "title": "满船春色",
        "url": "./movies/movie-813.html",
        "cover": "./63.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情 / 文艺",
        "category": "动作奇幻",
        "summary": "上世纪90年代，一艘拥挤的偷渡船上，两个各怀心事的年轻人企图用一段虚假的恋情换取船票。",
        "tags": [
            "偷渡",
            "九十年代",
            "命运",
            "船戏"
        ]
    },
    {
        "title": "蜂蜜之夏",
        "url": "./movies/movie-814.html",
        "cover": "./64.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利 / 法国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "最新电视剧",
        "summary": "一个都市少女被迫回到养蜂的祖父家过暑假，却发现蜂箱里的秘密远比城市补习班更致命。",
        "tags": [
            "田园",
            "亲子关系",
            "慢生活",
            "治愈"
        ]
    },
    {
        "title": "龙的牙医",
        "url": "./movies/movie-815.html",
        "cover": "./65.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "日本",
        "type": "电影/动画",
        "genre": "奇幻、战争",
        "category": "热播剧集",
        "summary": "少女是栖息在战场的巨龙的专属牙医，某天她从龙齿上拔出本该死的敌方士兵，打破了生死界限。",
        "tags": [
            "龙",
            "牙医",
            "生死观",
            "独特世界观"
        ]
    },
    {
        "title": "金牌贱猫：重新出击",
        "url": "./movies/movie-816.html",
        "cover": "./66.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 动作, 犯罪",
        "category": "环球片库",
        "summary": "史上最不靠谱的笨贼二人组再次出山，这次他们的队友是一只被植入芯片的特工猫。",
        "tags": [
            "英式幽默",
            "笨贼",
            "宠物猫",
            "乌龙",
            "续集"
        ]
    },
    {
        "title": "科妮莉亚",
        "url": "./movies/movie-817.html",
        "cover": "./67.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "悬疑犯罪",
        "summary": "维多利亚时代，贫穷女家庭教师科妮莉亚发现自己与庄园里一幅百年前贵妇画像长得一模一样，画中人在看她。",
        "tags": [
            "身份错位",
            "庄园",
            "画像",
            "维多利亚"
        ]
    },
    {
        "title": "一起长大的约定",
        "url": "./movies/movie-818.html",
        "cover": "./68.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 青春",
        "category": "爱情喜剧",
        "summary": "青梅竹马的三人在高考前夜许下约定，多年后重逢却发现彼此早已面目全非。",
        "tags": [
            "青梅竹马",
            "治愈",
            "高考"
        ]
    },
    {
        "title": "重影",
        "url": "./movies/movie-819.html",
        "cover": "./69.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 悬疑",
        "category": "悬疑犯罪",
        "summary": "宇航员返航后发现地球上的“自己”已替他活了三年，两个我只有一个能留存。",
        "tags": [
            "克隆人",
            "记忆移植",
            "伦理困境",
            "独角戏"
        ]
    },
    {
        "title": "女人的碎片",
        "url": "./movies/movie-820.html",
        "cover": "./70.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "匈牙利 / 法国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "爱情喜剧",
        "summary": "一场家庭分娩导致婴儿夭折，妻子将悲痛砌入一栋正在重建的老宅，每一块砖都是她无法拼回的生活碎片。",
        "tags": [
            "丧子",
            "婚姻解体",
            "自我疗愈",
            "长镜头",
            "建筑隐喻"
        ]
    },
    {
        "title": "尸控扩散",
        "url": "./movies/movie-821.html",
        "cover": "./71.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 科幻",
        "category": "环球片库",
        "summary": "一种靠5G信号传播的纳米丧尸病毒爆发，幸存者必须拔掉所有电子设备，退回原始社会求生。",
        "tags": [
            "丧尸",
            "纳米病毒",
            "实验室泄漏",
            "道德困境"
        ]
    },
    {
        "title": "爱填满空白第二季",
        "url": "./movies/movie-822.html",
        "cover": "./72.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情, 同性, 剧情",
        "category": "环球片库",
        "summary": "第一季结尾她忘了她，第二季开头她假装记得。",
        "tags": [
            "失忆",
            "重逢",
            "治愈",
            "甜虐"
        ]
    },
    {
        "title": "天才：黑色石榴石",
        "url": "./movies/movie-823.html",
        "cover": "./73.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑 / 惊悚 / 犯罪",
        "category": "家庭剧情",
        "summary": "智商168的古典文献学博士，用一颗17世纪的黑色石榴石，向杀害她父亲的财阀家族展开降维打击。",
        "tags": [
            "高智商犯罪",
            "复仇女神",
            "古董密码",
            "双面人生",
            "反转不断"
        ]
    },
    {
        "title": "变种毒蝎",
        "url": "./movies/movie-824.html",
        "cover": "./74.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "科幻动作, 生物恐怖, 犯罪",
        "category": "家庭剧情",
        "summary": "在海岸城禁闭的夜里，变异毒蝎由实验失控扩散，它们会吞噬记忆与体温，黑市资本与军火流向交织后，整座城市在恐惧中像失控仪表一样飙升。",
        "tags": [
            "生物改造",
            "海港工业",
            "冷库阴谋",
            "特警追击",
            "生态恐慌"
        ]
    },
    {
        "title": "非常公民",
        "url": "./movies/movie-825.html",
        "cover": "./75.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "category": "高清电影",
        "summary": "一个总是“多管闲事”的热心大爷，为了竞选业委会主任，意外揭开了整个小区最大的秘密。",
        "tags": [
            "黑色幽默",
            "社区治理",
            "公民意识"
        ]
    },
    {
        "title": "全美缉凶：本·拉登",
        "url": "./movies/movie-826.html",
        "cover": "./76.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪, 惊悚, 历史",
        "category": "动作奇幻",
        "summary": "十年跨境追猎，一名倔强的女分析师从废纸堆里找到了改变历史的那个代号。",
        "tags": [
            "真实事件改编",
            "猎杀行动",
            "特工",
            "高层博弈"
        ]
    },
    {
        "title": "丛林大反攻3",
        "url": "./movies/movie-827.html",
        "cover": "./77.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 喜剧 / 家庭",
        "category": "热播剧集",
        "summary": "当冬季粮仓被神秘搬空，老练的森林伙伴们必须穿越暴风雪，去找出真正的“丛林内鬼”。",
        "tags": [
            "动物冒险",
            "森林联盟",
            "搞笑",
            "旅程",
            "友情"
        ]
    },
    {
        "title": "魅惑之人",
        "url": "./movies/movie-828.html",
        "cover": "./78.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情, 悬疑, 惊悚",
        "category": "爱情喜剧",
        "summary": "豪门继承人娶了温柔新娘，却发现她是为了复仇而来的情蛊高手。",
        "tags": [
            "泰国",
            "情蛊",
            "复仇",
            "禁忌之恋",
            "豪门恩怨"
        ]
    },
    {
        "title": "从军记",
        "url": "./movies/movie-829.html",
        "cover": "./79.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "军旅 / 青春",
        "category": "经典回看",
        "summary": "一个沉迷游戏的00后女孩为了逃避高考报名参军，却被分到了荒无人烟的草原通讯连。",
        "tags": [
            "女兵",
            "通讯兵",
            "成长",
            "战友情"
        ]
    },
    {
        "title": "家有猩猩宝贝",
        "url": "./movies/movie-830.html",
        "cover": "./80.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 家庭 / 冒险",
        "category": "热播剧集",
        "summary": "一位邋遢的动物行为学家被迫收留一只会手语的猩猩宝宝，结果猩猩比他更会当“爸爸”，帮他搞定了叛逆的女儿。",
        "tags": [
            "猩猩",
            "城市丛林",
            "父女关系"
        ]
    },
    {
        "title": "里基·莱普与夜鹰",
        "url": "./movies/movie-831.html",
        "cover": "./81.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "芬兰",
        "type": "电影",
        "genre": "音乐, 剧情, 传记",
        "category": "环球片库",
        "summary": "芬兰摇滚传奇里基·莱普，在名声巅峰时选择离奇失踪。",
        "tags": [
            "芬兰摇滚",
            "传奇乐队",
            "酒精与天才",
            "北欧忧郁",
            "真实事件改编"
        ]
    },
    {
        "title": "涅槃郡主",
        "url": "./movies/movie-832.html",
        "cover": "./82.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 爱情, 重生",
        "category": "悬疑犯罪",
        "summary": "被毒死的和亲郡主重生为敌国舞姬，她要在三年后的皇家宴会上，让前世仇人全部认不出她。",
        "tags": [
            "重生",
            "权谋",
            "女强"
        ]
    },
    {
        "title": "落花时节国语",
        "url": "./movies/movie-833.html",
        "cover": "./83.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情, 家庭, 爱情",
        "category": "爱情喜剧",
        "summary": "两个因父辈血仇而被迫分离的恋人，二十年后在商场上再度狭路相逢。",
        "tags": [
            "世仇",
            "中年爱情",
            "时代变迁",
            "创业",
            "家族矛盾"
        ]
    },
    {
        "title": "尘中之物",
        "url": "./movies/movie-834.html",
        "cover": "./84.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "剧情、悬疑",
        "category": "经典回看",
        "summary": "世界被一种“记忆灰尘”笼罩，吸入者会不断闪现他人的痛苦记忆，无法区分自我。",
        "tags": [
            "哲学",
            "末世",
            "灰尘"
        ]
    },
    {
        "title": "碧芦冤孽",
        "url": "./movies/movie-835.html",
        "cover": "./85.jpg",
        "year": "1979",
        "yearNumber": 1979,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 悬疑, 剧情",
        "category": "高清电影",
        "summary": "碧芦戏班住进荒废的老宅后，当家花旦夜夜看到一身红衣的戏子对镜唱戏，而那戏子，正是三十年前死于非命的名伶。",
        "tags": [
            "邵氏风格",
            "鬼宅",
            "家族恩怨",
            "戏曲元素"
        ]
    },
    {
        "title": "先天性淫娃",
        "url": "./movies/movie-836.html",
        "cover": "./86.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情, 情色",
        "category": "动作奇幻",
        "summary": "一个出生就被诊断为“先天性多情亢进症”的女孩，用身体对抗世界的羞辱。",
        "tags": [
            "天生性瘾",
            "女性视角",
            "北欧冷感",
            "身体政治",
            "禁忌"
        ]
    },
    {
        "title": "新斩龙遇仙记",
        "url": "./movies/movie-837.html",
        "cover": "./87.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻, 古装, 动作",
        "category": "亚洲精选",
        "summary": "屠龙少年得到剑仙真传，为救被龙族掳走的恋人，他必须斩杀恶龙并完成“遇仙”的三重考验。",
        "tags": [
            "神话",
            "斩龙",
            "修仙",
            "民间传说"
        ]
    },
    {
        "title": "史黛拉·达拉斯",
        "url": "./movies/movie-838.html",
        "cover": "./88.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "剧情",
        "category": "热播剧集",
        "summary": "为了女儿能跻身上流社会，底层母亲不惜自污形象，让她恨自己一辈子。",
        "tags": [
            "翻拍",
            "母女",
            "阶级",
            "牺牲",
            "经典文学"
        ]
    },
    {
        "title": "卡门与萝拉",
        "url": "./movies/movie-839.html",
        "cover": "./89.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "西班牙",
        "type": "电影",
        "genre": "爱情，剧情，音乐",
        "category": "动作奇幻",
        "summary": "吉普赛传统家族的女儿爱上了女弗拉明戈歌手，在血誓与爱情之间撕开一道裂缝。",
        "tags": [
            "吉普赛",
            "女同",
            "弗拉明戈",
            "禁忌"
        ]
    },
    {
        "title": "巨神兵现身东京",
        "url": "./movies/movie-840.html",
        "cover": "./90.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "科幻, 灾难",
        "category": "爱情喜剧",
        "summary": "沉睡了三千年的古代巨神兵在东京湾苏醒，全日本的自卫队武器在它面前形同玩具。",
        "tags": [
            "机甲",
            "怪兽",
            "东京毁灭",
            "自卫队",
            "末世"
        ]
    },
    {
        "title": "缩小人",
        "url": "./movies/movie-841.html",
        "cover": "./91.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 喜剧 / 剧情",
        "category": "热播剧集",
        "summary": "为了解决人口危机，科学家发明了缩小技术，一个中年男人缩小后住进了富人社区，却发现微缩世界里依然有三六九等。",
        "tags": [
            "缩小技术",
            "中年危机",
            "社会阶层",
            "微型社区"
        ]
    },
    {
        "title": "泰坦尼克号",
        "url": "./movies/movie-842.html",
        "cover": "./92.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 爱情, 灾难",
        "category": "经典回看",
        "summary": "穷画家与富家女在豪华邮轮上相爱，却要面对船难带来的生死考验。",
        "tags": [
            "沉船",
            "阶级差异",
            "旷世之恋",
            "冰山"
        ]
    },
    {
        "title": "大武士与小票客",
        "url": "./movies/movie-843.html",
        "cover": "./93.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 喜剧",
        "category": "家庭剧情",
        "summary": "日本武士道的最后传人来到香港做停车管理员，用武士刀专治违停，结果惹上了黑社会。",
        "tags": [
            "功夫",
            "警匪",
            "反差",
            "经典港片"
        ]
    },
    {
        "title": "阿飞艳史",
        "url": "./movies/movie-844.html",
        "cover": "./94.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 情色",
        "category": "动作奇幻",
        "summary": "九龙城寨的舞女与浪子赌上一夜情，却赔上了彼此的后半生。",
        "tags": [
            "夜总会",
            "浪子",
            "港风"
        ]
    },
    {
        "title": "魔比斯",
        "url": "./movies/movie-845.html",
        "cover": "./95.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 恐怖",
        "category": "亚洲精选",
        "summary": "一位患罕见血液病的诺奖得主，用吸血蝙蝠DNA治疗自己，却变成了现代都市的活体瘟疫。",
        "tags": [
            "吸血鬼",
            "漫威",
            "反英雄",
            "生化"
        ]
    },
    {
        "title": "雄起！",
        "url": "./movies/movie-846.html",
        "cover": "./96.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 运动",
        "category": "爱情喜剧",
        "summary": "川渝小镇的中年废柴老爸，为了女儿不被霸凌，重拾摔跤梦杀回赛场。",
        "tags": [
            "摔跤",
            "川渝",
            "父女",
            "逆袭"
        ]
    },
    {
        "title": "寒秋",
        "url": "./movies/movie-847.html",
        "cover": "./97.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑 / 犯罪 / 年代",
        "category": "亚洲精选",
        "summary": "1997年东北小城，接二连三的少女失踪案与一本神秘日记，将三个不同身份的年轻人拖入深渊。",
        "tags": [
            "东北",
            "连环杀人",
            "刑警",
            "1990年代"
        ]
    },
    {
        "title": "屁滚尿流",
        "url": "./movies/movie-848.html",
        "cover": "./98.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作喜剧",
        "category": "经典回看",
        "summary": "一个患有严重肠胃焦虑症的顶级特工，必须在执行拯救总统任务的同时找到厕所。",
        "tags": [
            "特工",
            "厕所幽默",
            "大尺度"
        ]
    },
    {
        "title": "解救",
        "url": "./movies/movie-849.html",
        "cover": "./99.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑、惊悚、犯罪",
        "category": "环球片库",
        "summary": "女儿被绑，母亲按绑匪指令完成了一连串诡异任务，最后发现自己才是目标。",
        "tags": [
            "绑架",
            "反转",
            "母亲",
            "极限"
        ]
    },
    {
        "title": "神咒",
        "url": "./movies/movie-850.html",
        "cover": "./100.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 民俗",
        "category": "悬疑犯罪",
        "summary": "民俗学者在深山村落的废校舍发现一卷老磁带，播放后开始遗忘自己是谁。",
        "tags": [
            "言灵",
            "村落诅咒",
            "录音带",
            "集体失忆"
        ]
    },
    {
        "title": "交错效应",
        "url": "./movies/movie-851.html",
        "cover": "./101.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 伦理",
        "category": "家庭剧情",
        "summary": "一场关于时间同步的实验意外失控后，五个彼此陌生的人开始共享同一天的不同版本，直到他们发现自己正被同一个人反复重置。",
        "tags": [
            "时间分叉",
            "记忆污染",
            "实验室事故",
            "平行人生",
            "选择代价"
        ]
    },
    {
        "title": "败家仔",
        "url": "./movies/movie-852.html",
        "cover": "./102.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "亚洲精选",
        "summary": "挥霍无度的富二代一夜破产，为骗父亲遗产假装上进，却在假扮“孝子”的过程中真的长出了良心。",
        "tags": [
            "富二代",
            "败落",
            "父子"
        ]
    },
    {
        "title": "飞哥与小佛第四季",
        "url": "./movies/movie-853.html",
        "cover": "./103.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "动画, 喜剧, 冒险",
        "category": "高清电影",
        "summary": "暑假的最后一天，飞哥与小佛决定建造一个通往火星的充气城堡，而泰瑞则要阻止外星蟑螂入侵地球。",
        "tags": [
            "童年",
            "创意无限",
            "暑期"
        ]
    },
    {
        "title": "生命之诗",
        "url": "./movies/movie-854.html",
        "cover": "./104.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，奇幻",
        "category": "家庭剧情",
        "summary": "一名将死的老诗人突然获得了倒着生长的能力，每年轻一岁，就会忘记一段痛苦的往事。",
        "tags": [
            "时间循环",
            "文艺治愈",
            "代际和解",
            "诗歌"
        ]
    },
    {
        "title": "奥特曼 新世代之星",
        "url": "./movies/movie-855.html",
        "cover": "./105.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "特摄 / 科幻 / 动作",
        "category": "悬疑犯罪",
        "summary": "时空扭曲导致所有新世代奥特曼的世界线交汇，他们必须联手对抗能吞噬奥特曼光芒的终极黑暗皇帝。",
        "tags": [
            "奥特曼",
            "情怀",
            "合体"
        ]
    },
    {
        "title": "毛骨悚然1975",
        "url": "./movies/movie-856.html",
        "cover": "./106.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "高清电影",
        "summary": "一卷1975年的家庭录像带里，每次播放，背景里就会出现一个不存在的孩子。",
        "tags": [
            "录像带诅咒",
            "1970年代",
            "邪教仪式",
            "民俗恐怖"
        ]
    },
    {
        "title": "棒子老虎鸡",
        "url": "./movies/movie-857.html",
        "cover": "./107.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "category": "动作奇幻",
        "summary": "一袋错送的毒品，让棒子、老虎、鸡三组互不相识的笨贼在旺角茶餐厅上演连环火并。",
        "tags": [
            "黑吃黑",
            "多线叙事",
            "方言梗",
            "荒诞"
        ]
    },
    {
        "title": "神秘博士：逃跑新娘",
        "url": "./movies/movie-858.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电视剧特辑",
        "genre": "科幻冒险",
        "category": "环球片库",
        "summary": "神秘博士的TARDIS内凭空出现一位身穿婚纱的新娘，她的婚礼被外星蜘蛛入侵，而新郎身份成谜。",
        "tags": [
            "圣诞特辑",
            "时间旅行",
            "外星人",
            "新娘"
        ]
    },
    {
        "title": "第三双鞋印",
        "url": "./movies/movie-859.html",
        "cover": "./109.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 心理",
        "category": "动作奇幻",
        "summary": "雨夜连续杀人案中，所有被害者最后一步都只留下第三双鞋印，而前两双属于同一对已经死去一年的情侣。",
        "tags": [
            "雨夜",
            "连环案",
            "足迹学",
            "替身"
        ]
    },
    {
        "title": "各自孤独的美食家",
        "url": "./movies/movie-860.html",
        "cover": "./110.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情，美食",
        "category": "最新电视剧",
        "summary": "同一家小餐馆里，每晚来吃饭的客人彼此不认识，但每一道菜都连接着他们孤独的人生。",
        "tags": [
            "独食",
            "深夜",
            "都市",
            "温情",
            "人生百态"
        ]
    },
    {
        "title": "炊事班的故事2",
        "url": "./movies/movie-861.html",
        "cover": "./111.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "情景喜剧 / 军旅",
        "category": "经典回看",
        "summary": "新一季的炊事班迎来更严格的标准、更古怪的任务，还有一群把锅碗瓢盆玩成战术装备的兵。",
        "tags": [
            "军营日常",
            "后勤保障",
            "群像喜剧",
            "误会连连",
            "温情成长"
        ]
    },
    {
        "title": "天天向上2019",
        "url": "./movies/movie-862.html",
        "cover": "./112.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "综艺",
        "genre": "脱口秀, 文化, 娱乐",
        "category": "家庭剧情",
        "summary": "新一季天天兄弟集结，走出演播厅深入中国各地，用文化探访和美食体验讲述普通人的不凡故事。",
        "tags": [
            "文化访谈",
            "美食",
            "寓教于乐",
            "兄弟团",
            "正能量"
        ]
    },
    {
        "title": "海月姬 ~水母公主~",
        "url": "./movies/movie-863.html",
        "cover": "./113.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧 / 爱情",
        "category": "高清电影",
        "summary": "社恐水母宅女与女装大佬富二代，在一间濒临倒闭的水族馆里共同守护一只罕见水母。",
        "tags": [
            "宅女",
            "水母",
            "变装",
            "反差萌"
        ]
    },
    {
        "title": "狂宴",
        "url": "./movies/movie-864.html",
        "cover": "./114.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "意大利",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "category": "经典回看",
        "summary": "七位昔日好友受邀参加一场奢华晚宴，却发现每一道菜都对应着他们七年前犯下的一桩不可告人的罪行。",
        "tags": [
            "封闭空间",
            "晚宴",
            "反转",
            "人性"
        ]
    },
    {
        "title": "极品基老伴：完结篇",
        "url": "./movies/movie-865.html",
        "cover": "./115.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "英国",
        "type": "电影 / 剧集特别篇",
        "genre": "喜剧 / 同性 / 家庭",
        "category": "亚洲精选",
        "summary": "相守五十年的毒舌老情侣突然决定举办一场“黄昏婚礼”，亲友团被迫进入高能备战状态。",
        "tags": [
            "毒舌温情",
            "暮年爱情",
            "同志伴侣",
            "告别之作"
        ]
    },
    {
        "title": "蝙蝠侠：红头罩之下",
        "url": "./movies/movie-866.html",
        "cover": "./116.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "美国",
        "type": "动画电影",
        "genre": "动作 / 犯罪 / 超级英雄",
        "category": "最新电视剧",
        "summary": "当一个戴着红头罩的神秘复仇者回到哥谭，蝙蝠侠才发现最危险的敌人可能正是他没能挽回的过去。",
        "tags": [
            "DC宇宙",
            "复仇与救赎",
            "哥谭黑帮",
            "师徒裂痕",
            "面具身份"
        ]
    },
    {
        "title": "人性的弱点",
        "url": "./movies/movie-867.html",
        "cover": "./117.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "社会悬疑",
        "category": "悬疑犯罪",
        "summary": "一份足以毁掉整家公司的举报邮件，逼着每个看似无辜的人都露出破绽，也让最会讲道理的人先输给自己。",
        "tags": [
            "舆论",
            "职场",
            "欺瞒",
            "道德困境",
            "证据链"
        ]
    },
    {
        "title": "波兰铁人",
        "url": "./movies/movie-868.html",
        "cover": "./118.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "波兰",
        "type": "电影",
        "genre": "传记，体育",
        "category": "家庭剧情",
        "summary": "冷战时期的波兰举重冠军，为了儿子能去西德看病，故意在东德世锦赛上“输给”西方选手。",
        "tags": [
            "举重",
            "冷战",
            "父子",
            "牺牲",
            "真实改编"
        ]
    },
    {
        "title": "喜欢您粤语",
        "url": "./movies/movie-869.html",
        "cover": "./119.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "香港",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "热播剧集",
        "summary": "东北女孩为了嫁到香港而苦学粤语，却在学会后发现未婚夫爱的只是“会粤语的她”。",
        "tags": [
            "语言学习",
            "文化差异",
            "慢生活"
        ]
    },
    {
        "title": "无人能敌",
        "url": "./movies/movie-870.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 悬疑 / 惊悚",
        "category": "高清电影",
        "summary": "格斗冠军一夜之间沦为杀死女友的凶手，他越狱后必须抢在失忆彻底消失前，找出真凶。",
        "tags": [
            "格斗冠军",
            "失忆寻凶",
            "监狱风云",
            "以暴制暴"
        ]
    },
    {
        "title": "钻石诱惑",
        "url": "./movies/movie-871.html",
        "cover": "./121.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/犯罪",
        "category": "高清电影",
        "summary": "一名离职女警被神秘组织招募去偷举世闻名的蓝钻，却发现委托人正是她追捕多年的仇人。",
        "tags": [
            "偷盗",
            "高智商犯罪",
            "猫鼠游戏",
            "反转"
        ]
    },
    {
        "title": "中华英雄",
        "url": "./movies/movie-872.html",
        "cover": "./122.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、奇幻",
        "category": "最新电视剧",
        "summary": "1920年上海街头，一个失忆的苦力发现自己的拳头能击碎钢铁，也揭开了自己身为“中华英雄”的秘密。",
        "tags": [
            "民国",
            "侠客",
            "超能力",
            "家国情怀",
            "觉醒"
        ]
    },
    {
        "title": "心迷宫",
        "url": "./movies/movie-873.html",
        "cover": "./123.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪, 剧情",
        "category": "环球片库",
        "summary": "一具烧焦的尸体被三次认领，四个家庭在谎言的迷宫中各自为战。",
        "tags": [
            "非线性叙事",
            "农村罪案",
            "人性迷宫",
            "环形结构",
            "黑色幽默"
        ]
    },
    {
        "title": "驳命老公追老婆粤语",
        "url": "./movies/movie-874.html",
        "cover": "./124.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情，喜剧，爱情",
        "category": "经典回看",
        "summary": "一场意外让花花公子与沉闷会计师灵魂互换，为了不失去妻子，他必须用情敌的身体重新追回自己的婚姻。",
        "tags": [
            "港剧",
            "身份错位",
            "追妻火葬场",
            "黑色幽默"
        ]
    },
    {
        "title": "见龙卸甲",
        "url": "./movies/movie-875.html",
        "cover": "./125.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作，历史",
        "category": "环球片库",
        "summary": "年近七旬的赵云最后一次出征，卸下铠甲的那一刻，他才真正看清自己一生究竟为谁而战。",
        "tags": [
            "三国",
            "赵云",
            "老兵不死",
            "铠甲隐喻"
        ]
    },
    {
        "title": "无眼杀手",
        "url": "./movies/movie-876.html",
        "cover": "./126.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "电影",
        "genre": "惊悚, 犯罪, 动作",
        "category": "最新电视剧",
        "summary": "他是巴黎最致命的杀手，却在任务中被人为致盲，现在他必须用耳朵“看见”所有追杀他的人。",
        "tags": [
            "盲人杀手",
            "感官剥夺",
            "黑色电影",
            "高概念"
        ]
    },
    {
        "title": "心碎效应",
        "url": "./movies/movie-877.html",
        "cover": "./127.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 爱情, 剧情",
        "category": "家庭剧情",
        "summary": "失去女儿的母亲发明了“心碎删除仪”，却发现删除痛苦记忆会抹去她所有的爱与创造力。",
        "tags": [
            "记忆删除",
            "情感创伤",
            "近未来",
            "伦理困境",
            "黑色幽默"
        ]
    },
    {
        "title": "小猪佩奇过大年",
        "url": "./movies/movie-878.html",
        "cover": "./128.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "家庭动画",
        "category": "动作奇幻",
        "summary": "佩奇一家第一次在中国家庭里过春节，从贴春联到守岁放鞭炮，一连串小失误把年味变成了大笑话。",
        "tags": [
            "春节团圆",
            "低龄欢乐",
            "家庭陪伴",
            "童趣冒险",
            "节日温情"
        ]
    },
    {
        "title": "死亡轮盘",
        "url": "./movies/movie-879.html",
        "cover": "./129.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "category": "悬疑犯罪",
        "summary": "六名陌生人醒来发现被困在一间旋转房间里，每五分钟轮盘转动一次，指向谁谁就必须死。",
        "tags": [
            "密室逃生",
            "心理博弈",
            "生存游戏"
        ]
    },
    {
        "title": "绝世天劫",
        "url": "./movies/movie-880.html",
        "cover": "./130.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "美国",
        "type": "电影",
        "genre": "科幻、灾难",
        "category": "悬疑犯罪",
        "summary": "一颗德州大小的陨石即将撞毁地球，NASA找来一群深海石油钻探工，让他们在陨石上钻孔埋核弹。",
        "tags": [
            "陨石撞地球",
            "石油钻探",
            "太空救援",
            "英雄牺牲",
            "迈克尔·贝"
        ]
    },
    {
        "title": "穿越谜团",
        "url": "./movies/movie-881.html",
        "cover": "./131.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 科幻, 爱情",
        "category": "热播剧集",
        "summary": "为拯救意外身亡的未婚妻，物理天才林深误入时空缝隙，却发现每一次穿越都在制造更可怕的悲剧。",
        "tags": [
            "时间循环",
            "蝴蝶效应",
            "宿命"
        ]
    },
    {
        "title": "兰基先生的罪行",
        "url": "./movies/movie-882.html",
        "cover": "./132.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "category": "经典回看",
        "summary": "温顺的出版社编辑每周三晚都会变成另一个人，而城市刚好每周三出现一具尸体。",
        "tags": [
            "连环凶杀",
            "替身",
            "文学编辑"
        ]
    },
    {
        "title": "美国的末日",
        "url": "./movies/movie-883.html",
        "cover": "./133.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 灾难",
        "category": "经典回看",
        "summary": "丧尸病毒爆发后，美国总统与一个外卖小哥组队穿越沦陷区，发现病毒源头竟藏在总统的早餐里。",
        "tags": [
            "丧尸",
            "政治讽刺",
            "总统逃亡",
            "白宫陷落",
            "生存"
        ]
    },
    {
        "title": "杀死爱人",
        "url": "./movies/movie-884.html",
        "cover": "./134.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 科幻",
        "category": "高清电影",
        "summary": "如果你杀不死你的爱人，时间就会重置，直到你亲手终结TA的性命。",
        "tags": [
            "时间循环",
            "病娇美学",
            "暴力浪漫"
        ]
    },
    {
        "title": "迷雾追踪",
        "url": "./movies/movie-885.html",
        "cover": "./135.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 犯罪",
        "category": "热播剧集",
        "summary": "一个被浓雾常年笼罩的边境小镇，十年间发生了六起“自杀案”，两个女警在调查中发现所有死者都买过同一瓶香水。",
        "tags": [
            "连环杀人",
            "小镇",
            "迷雾",
            "双女主",
            "社会派"
        ]
    },
    {
        "title": "殊途同归",
        "url": "./movies/movie-886.html",
        "cover": "./136.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "category": "环球片库",
        "summary": "一名刑警与一名逃犯在十年追逃中逐渐发现，他们追索的是同一个真相。",
        "tags": [
            "双男主",
            "宿命",
            "罪案"
        ]
    },
    {
        "title": "狄仁杰之天神下凡",
        "url": "./movies/movie-887.html",
        "cover": "./137.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 古装 / 奇幻",
        "category": "动作奇幻",
        "summary": "武则天封禅大典上，一名和尚自称天神下凡，在万人注视下“飞升”消失，狄仁杰却看见了血。",
        "tags": [
            "狄仁杰",
            "武则天",
            "宗教悬案"
        ]
    },
    {
        "title": "黑白森林",
        "url": "./movies/movie-888.html",
        "cover": "./138.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪 / 惊悚",
        "category": "爱情喜剧",
        "summary": "黑帮老大的儿子考上了警校，他爹说“你去”，三年后他成了警队精英，他爹说“该回来了”。",
        "tags": [
            "警匪",
            "卧底",
            "无间道风",
            "心理战"
        ]
    },
    {
        "title": "落日孤影",
        "url": "./movies/movie-889.html",
        "cover": "./139.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 伦理",
        "category": "热播剧集",
        "summary": "丧子的退休老刑警，发现儿子的“遗物”里藏着一张陌生女孩的照片，他踏上寻人之旅。",
        "tags": [
            "失独",
            "亲情和解",
            "公路"
        ]
    },
    {
        "title": "蜜月岛",
        "url": "./movies/movie-890.html",
        "cover": "./140.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "泰国",
        "type": "电影",
        "genre": "爱情 / 悬疑",
        "category": "爱情喜剧",
        "summary": "新婚夫妻前往无人岛度蜜月，第二天丈夫醒来，妻子凭空消失了。",
        "tags": [
            "孤岛",
            "婚前旅行",
            "失踪",
            "反转"
        ]
    },
    {
        "title": "森浦之路",
        "url": "./movies/movie-891.html",
        "cover": "./141.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情、悬疑、神秘",
        "category": "最新电视剧",
        "summary": "在一个名为森浦的渔村，每年潮汐最低的那天，村里最老的渔民会独自划船出海，从不归来，而次年会有新生儿顶替他的名字出生。",
        "tags": [
            "世越号隐喻",
            "村庄献祭",
            "轮回路",
            "渔民",
            "集体沉默"
        ]
    },
    {
        "title": "叔比狗的惊悚假期",
        "url": "./movies/movie-892.html",
        "cover": "./142.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖悬疑, 黑色喜剧, 公路元素",
        "category": "悬疑犯罪",
        "summary": "每到假期，小镇海风都把“惊悚”递给游客，叔比狗却发现真正的恐怖不是怪物，而是人们把责任和真相都丢进潮汐里多年仍不肯捞起。",
        "tags": [
            "小镇传说",
            "假日失踪",
            "伪装真相",
            "海洋污染",
            "生存推理"
        ]
    },
    {
        "title": "犬牙交错",
        "url": "./movies/movie-893.html",
        "cover": "./143.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪，剧情，动作",
        "category": "亚洲精选",
        "summary": "两名从小一起长大的孤儿，一个成了警察，一个入了黑帮，他们的关系比犬牙更交错，比刀锋更致命。",
        "tags": [
            "黑帮",
            "卧底",
            "兄弟情",
            "背叛"
        ]
    },
    {
        "title": "隐藏人物",
        "url": "./movies/movie-894.html",
        "cover": "./144.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "category": "经典回看",
        "summary": "一栋公寓楼的住户发现，自己每天的生活都在被暗网直播，而观众可以通过打赏决定“下一个惩罚谁”。",
        "tags": [
            "偷窥",
            "暗网",
            "直播杀人",
            "公寓楼",
            "反向狩猎"
        ]
    },
    {
        "title": "爆兽猎人",
        "url": "./movies/movie-895.html",
        "cover": "./145.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "动画片",
        "genre": "热血, 科幻, 冒险, 机甲",
        "category": "动作奇幻",
        "summary": "废柴少年麦吉意外唤醒沉睡的爆兽“雷牙虎”，却被告知自己是地球最后一个爆兽猎人。",
        "tags": [
            "爆兽",
            "猎人",
            "卡牌",
            "少年",
            "异兽"
        ]
    },
    {
        "title": "碧血盐枭粤语",
        "url": "./movies/movie-896.html",
        "cover": "./146.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装/动作",
        "category": "环球片库",
        "summary": "清朝两广盐运使被灭门，幸存的小儿子隐姓埋名加入盐枭帮派，等待十年只为手刃义兄。",
        "tags": [
            "盐枭",
            "复仇",
            "江湖恩怨",
            "粤语原声",
            "兄弟反目"
        ]
    },
    {
        "title": "男人们的大和",
        "url": "./movies/movie-897.html",
        "cover": "./147.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "战争历史",
        "category": "最新电视剧",
        "summary": "这不是歌颂军国主义，而是通过一艘战舰的覆灭，讲述普通士兵作为“人”的恐惧与挣扎。",
        "tags": [
            "二战",
            "战舰",
            "悲剧",
            "反思"
        ]
    },
    {
        "title": "网军部队",
        "url": "./movies/movie-898.html",
        "cover": "./148.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 惊悚",
        "category": "动作奇幻",
        "summary": "一支神秘网军部队操控热搜制造舆论风暴，却意外挖出牵连国家高层的致命黑料。",
        "tags": [
            "网络舆论战",
            "黑客",
            "社会暗黑",
            "反转"
        ]
    },
    {
        "title": "门徒",
        "url": "./movies/movie-899.html",
        "cover": "./149.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 剧情, 动作",
        "category": "经典回看",
        "summary": "卧底警察在最接近毒品帝国的核心时，发现自己崇拜的师父竟是新一任教父。",
        "tags": [
            "卧底",
            "毒品",
            "师徒",
            "背叛",
            "人性"
        ]
    },
    {
        "title": "亲爱的她们",
        "url": "./movies/movie-900.html",
        "cover": "./150.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭 / 女性 / 生活",
        "category": "经典回看",
        "summary": "七十岁的母亲突然宣布要离婚，四十岁的女儿被迫收拾烂摊子，却发现外婆也打算再婚。",
        "tags": [
            "母女",
            "闺蜜",
            "养老",
            "代际沟通",
            "治愈"
        ]
    },
    {
        "title": "自家战争",
        "url": "./movies/movie-901.html",
        "cover": "./1.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "家庭剧情",
        "summary": "父亲去世后，三兄妹在老房子里展开了一场不动声色的“分割战”，却发现最大的遗产是彼此。",
        "tags": [
            "家庭矛盾",
            "养老",
            "亲情博弈",
            "写实主义"
        ]
    },
    {
        "title": "暴走武林学园第二季",
        "url": "./movies/movie-902.html",
        "cover": "./2.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 动作, 古装",
        "category": "经典回看",
        "summary": "期末考试居然是去刺杀皇帝？学渣们组建了史上最不靠谱的刺客小队。",
        "tags": [
            "校园",
            "无厘头",
            "群像"
        ]
    },
    {
        "title": "蔡李佛小子",
        "url": "./movies/movie-903.html",
        "cover": "./3.jpg",
        "year": "1976",
        "yearNumber": 1976,
        "region": "香港",
        "type": "电影",
        "genre": "动作， 武侠",
        "category": "经典回看",
        "summary": "街头小混混拜师蔡李佛拳传人，学拳不为打架，只为用最正宗的“抛搥”打出自己的尊严。",
        "tags": [
            "邵氏",
            "傅声",
            "真功夫",
            "惩恶",
            "师徒"
        ]
    },
    {
        "title": "王牌播音员2",
        "url": "./movies/movie-904.html",
        "cover": "./4.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 传记（伪）",
        "category": "环球片库",
        "summary": "70年代传奇主播朗·伯甘蒂带领原班人马杀入24小时新闻频道，结果把直播搞得鸡飞狗跳。",
        "tags": [
            "无厘头",
            "职场",
            "美式喜剧",
            "威尔法瑞尔"
        ]
    },
    {
        "title": "水国春浓",
        "url": "./movies/movie-905.html",
        "cover": "./5.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "热播剧集",
        "summary": "上世纪三十年代，一曲发生在烟雨江南、跨越阶级与世俗的凄美绝恋。",
        "tags": [
            "江南水乡",
            "禁忌之恋",
            "时代变迁",
            "唯美摄影"
        ]
    },
    {
        "title": "屋顶上的小飞人",
        "url": "./movies/movie-906.html",
        "cover": "./6.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "瑞典",
        "type": "剧集",
        "genre": "家庭, 奇幻",
        "category": "家庭剧情",
        "summary": "九岁男孩卡尔被发现能漂浮在空中，但他不是超级英雄，只是太孤独了，身体替他选择了逃离重力。",
        "tags": [
            "北欧童话",
            "儿童冒险",
            "治愈系",
            "成长"
        ]
    },
    {
        "title": "赴汤蹈火",
        "url": "./movies/movie-907.html",
        "cover": "./7.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 剧情 / 灾难",
        "category": "悬疑犯罪",
        "summary": "化工园区连环爆炸后，一对闹翻多年的消防员兄弟必须在地狱般的火场中背靠背作战。",
        "tags": [
            "消防员",
            "化工爆炸",
            "兄弟情",
            "真实事件改编",
            "生死救援"
        ]
    },
    {
        "title": "学园帅哥",
        "url": "./movies/movie-908.html",
        "cover": "./8.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "动画剧集",
        "genre": "校园、耽美、喜剧",
        "category": "爱情喜剧",
        "summary": "普通男生“千贺”转入超级贵族男校后，发现全校师生都长着同一张“建模脸”，只有他能区分他们。",
        "tags": [
            "男子高校",
            "多CP",
            "单元剧",
            "颜艺"
        ]
    },
    {
        "title": "听不到的说话",
        "url": "./movies/movie-909.html",
        "cover": "./9.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 音乐",
        "category": "动作奇幻",
        "summary": "聋哑少女在报纸上登交友广告，收到唯一回信后却发现对方也不说话。",
        "tags": [
            "聋哑",
            "初恋",
            "手语",
            "黄金时代"
        ]
    },
    {
        "title": "离散与恒留",
        "url": "./movies/movie-910.html",
        "cover": "./10.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 文艺",
        "category": "悬疑犯罪",
        "summary": "横跨三十年，一个巴西日裔家庭在归国与离散中挣扎，唯有祖母种下的樱花树恒留原地。",
        "tags": [
            "移民",
            "家庭",
            "时间跨度",
            "乡愁"
        ]
    },
    {
        "title": "饮料杯历险记：植物英雄",
        "url": "./movies/movie-911.html",
        "cover": "./11.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "动画剧集",
        "genre": "喜剧 / 冒险",
        "category": "最新电视剧",
        "summary": "三个被随手丢弃的饮料杯，发现自己喝剩的饮料能让植物变异成超级英雄，于是它们组建了“杯具联盟”。",
        "tags": [
            "环保",
            "拟人",
            "超级英雄",
            "搞笑",
            "低龄向"
        ]
    },
    {
        "title": "聚光灯下的圣诞节",
        "url": "./movies/movie-912.html",
        "cover": "./12.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "category": "经典回看",
        "summary": "过气女明星假扮小镇圣诞音乐剧导演，却意外找到了舞台和爱真正的温度。",
        "tags": [
            "圣诞",
            "音乐剧",
            "假戏真做",
            "小镇情缘",
            "治愈"
        ]
    },
    {
        "title": "来自缠绕深海的生物",
        "url": "./movies/movie-913.html",
        "cover": "./13.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "科幻 / 恐怖",
        "category": "最新电视剧",
        "summary": "日本深海科考队带回一块发光石像，此后全员开始梦见同一种缠绕触手的生物。",
        "tags": [
            "克苏鲁",
            "深海",
            "寄生"
        ]
    },
    {
        "title": "半把剪刀",
        "url": "./movies/movie-914.html",
        "cover": "./14.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "中国大陆",
        "type": "电视剧集",
        "genre": "剧情, 悬疑, 古装",
        "category": "爱情喜剧",
        "summary": "一把被折断的剪刀，牵出一桩尘封十八年的灭门冤案。",
        "tags": [
            "清末",
            "冤案",
            "复仇"
        ]
    },
    {
        "title": "成吉思汗",
        "url": "./movies/movie-915.html",
        "cover": "./15.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆 / 蒙古",
        "type": "电影",
        "genre": "史诗 / 传记 / 战争",
        "category": "环球片库",
        "summary": "一介奴隶之子的铁木真，如何在绝境中团结离散部落，并点燃征服世界的野心之火。",
        "tags": [
            "草原帝国",
            "铁骑",
            "统一战争",
            "权力博弈"
        ]
    },
    {
        "title": "雷神太子",
        "url": "./movies/movie-916.html",
        "cover": "./16.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻， 动作， 喜剧",
        "category": "最新电视剧",
        "summary": "被贬人间的雷神太子必须凑齐十二件失散神器，却在送外卖途中找到了比当神更有趣的活法。",
        "tags": [
            "神话改编",
            "现代都市",
            "反差萌",
            "神器争夺"
        ]
    },
    {
        "title": "致命选择",
        "url": "./movies/movie-917.html",
        "cover": "./17.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 犯罪",
        "category": "环球片库",
        "summary": "五名陌生人被困地下密室，每十分钟必须投票选出一人赴死，否则全体引爆。",
        "tags": [
            "密室",
            "人性",
            "反转"
        ]
    },
    {
        "title": "必杀4 我会消除怨恨",
        "url": "./movies/movie-918.html",
        "cover": "./18.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电视剧SP",
        "genre": "时代剧，动作，复仇",
        "category": "悬疑犯罪",
        "summary": "江户时代，一群落魄的贫民组成暗杀组织，口号是“你出钱，我消除你的怨恨，绝不留情。”",
        "tags": [
            "必杀系列",
            "江户",
            "杀手",
            "庶民",
            "暗黑"
        ]
    },
    {
        "title": "爱情真可怕",
        "url": "./movies/movie-919.html",
        "cover": "./19.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧、爱情、黑色幽默",
        "category": "热播剧集",
        "summary": "一个母胎单身的征信社职员接到人生最荒唐任务：假扮客户男友参加前女友婚礼。",
        "tags": [
            "恐婚",
            "相亲",
            "反转",
            "契约恋爱"
        ]
    },
    {
        "title": "木浦黑帮天堂",
        "url": "./movies/movie-920.html",
        "cover": "./20.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪、动作、黑色幽默",
        "category": "高清电影",
        "summary": "木浦港最后一个黑帮老大，在政府宣布拆迁重建后，带领手下转型成“金牌拆迁队”，用拳头为居民争取最大补偿金。",
        "tags": [
            "港口城市",
            "黑帮转型",
            "房地产",
            "以暴制暴",
            "荒诞"
        ]
    },
    {
        "title": "自然界的媒人",
        "url": "./movies/movie-921.html",
        "cover": "./21.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录 / 自然 / 动物行为",
        "category": "动作奇幻",
        "summary": "园丁鸟偷窃蓝色塑料瓶盖求爱，雄海马亲自生娃，自然界的相亲手段比人类还卷。",
        "tags": [
            "动物",
            "求偶",
            "共生",
            "趣味",
            "科普"
        ]
    },
    {
        "title": "信徒2",
        "url": "./movies/movie-922.html",
        "cover": "./22.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪、动作、悬疑",
        "category": "最新电视剧",
        "summary": "前集里失去一切的警察，伪装成最虔诚的毒品信徒，潜伏进了一个把制毒当圣礼的诡异教会。",
        "tags": [
            "毒品",
            "卧底",
            "双雄",
            "暴力美学"
        ]
    },
    {
        "title": "玻璃丝袜",
        "url": "./movies/movie-923.html",
        "cover": "./23.jpg",
        "year": "1957",
        "yearNumber": 1957,
        "region": "苏联 / 法国",
        "type": "电影",
        "genre": "喜剧, 歌舞, 爱情",
        "category": "动作奇幻",
        "summary": "一位信奉共产主义的刻板苏联女政委，被派往巴黎抓捕叛逃科学家，却败给了一双尼龙丝袜和香颂。",
        "tags": [
            "经典翻拍",
            "冷战",
            "时尚",
            "轻喜剧"
        ]
    },
    {
        "title": "衰鬼抓狂",
        "url": "./movies/movie-924.html",
        "cover": "./24.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、奇幻",
        "category": "热播剧集",
        "summary": "全港最倒霉的保险销售意外获得能看到衰鬼的能力，才发现自己之所以衰了三十年，是因为后背趴了七只不同星座的鬼。",
        "tags": [
            "港式无厘头",
            "倒霉蛋撞鬼",
            "风水斗法",
            "笑到头掉"
        ]
    },
    {
        "title": "大进军——席卷大西南",
        "url": "./movies/movie-925.html",
        "cover": "./25.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "中国",
        "type": "电影",
        "genre": "战争/历史",
        "category": "最新电视剧",
        "summary": "1949年秋，解放军第二野战军以“大迂回、大包围”战略向大西南挺进，与退守川黔的国民党残部展开最后的决战。",
        "tags": [
            "解放战争",
            "大西南",
            "邓小平",
            "刘伯承",
            "战略"
        ]
    },
    {
        "title": "家路",
        "url": "./movies/movie-926.html",
        "cover": "./26.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "日本",
        "type": "电影",
        "genre": "剧情，家庭",
        "category": "最新电视剧",
        "summary": "福岛核泄漏四年后，一个年轻人偷偷回到禁区的老家，只为给祖先上一次坟。",
        "tags": [
            "核灾",
            "乡愁",
            "回归",
            "治愈"
        ]
    },
    {
        "title": "玩火的女孩",
        "url": "./movies/movie-927.html",
        "cover": "./27.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "瑞典",
        "type": "电影",
        "genre": "犯罪, 悬疑, 剧情",
        "category": "高清电影",
        "summary": "天才女黑客莎兰德被指控犯下三起谋杀案，这一次她不再躲藏，而是化身复仇女神主动点燃了整个体制。",
        "tags": [
            "千禧年三部曲",
            "女黑客",
            "复仇"
        ]
    },
    {
        "title": "南洋第一邪降",
        "url": "./movies/movie-928.html",
        "cover": "./28.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "马来西亚",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "动作奇幻",
        "summary": "女记者调查失踪案时发现，当地最可怕的不是野兽，而是能在梦中杀人的古曼童。",
        "tags": [
            "降头",
            "巫术",
            "复仇",
            "丛林"
        ]
    },
    {
        "title": "萍踪侠影录国语",
        "url": "./movies/movie-929.html",
        "cover": "./29.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠， 古装， 爱情",
        "category": "爱情喜剧",
        "summary": "一桩灭门惨案让侠客后人背负罪名，他在追查真相时爱上了仇人之女。",
        "tags": [
            "江湖恩怨",
            "侠客",
            "家国情怀"
        ]
    },
    {
        "title": "东部战线",
        "url": "./movies/movie-930.html",
        "cover": "./30.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争历史",
        "category": "悬疑犯罪",
        "summary": "斯大林格勒废墟中，一位苏联女狙击手与一位德国神枪手展开长达七天的猫鼠游戏，而他们都只剩最后一颗子弹。",
        "tags": [
            "二战",
            "狙击手",
            "斯大林格勒"
        ]
    },
    {
        "title": "贼性不改",
        "url": "./movies/movie-931.html",
        "cover": "./31.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色喜剧",
        "category": "最新电视剧",
        "summary": "一对神偷师徒金盆洗手前最后一单，却发现偷来的保险箱里只有一张针对他们的追杀令。",
        "tags": [
            "盗贼",
            "师徒",
            "反转",
            "荒诞",
            "人性"
        ]
    },
    {
        "title": "翡翠窝大阴谋",
        "url": "./movies/movie-932.html",
        "cover": "./32.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 悬疑",
        "category": "高清电影",
        "summary": "一块价值连城的帝王绿翡翠失窃，引出警匪双方三股势力之间连环套式的黑吃黑。",
        "tags": [
            "港产片",
            "翡翠",
            "黑吃黑",
            "卧底",
            "枪战"
        ]
    },
    {
        "title": "芭蕾舞教室",
        "url": "./movies/movie-933.html",
        "cover": "./33.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 校园 / 励志",
        "category": "最新电视剧",
        "summary": "前俄罗斯国家芭蕾舞团首席因伤退役，回到日本老家开了一间只有三名学生的破烂舞蹈教室。",
        "tags": [
            "芭蕾",
            "社恐",
            "师生",
            "创伤",
            "治愈"
        ]
    },
    {
        "title": "青春屠宰场",
        "url": "./movies/movie-934.html",
        "cover": "./34.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 青春, 悬疑",
        "category": "环球片库",
        "summary": "一所高考工厂名校，每年都有一名学生“意外死亡”，而本届的死者突然复活，说出了屠宰场的真正含义。",
        "tags": [
            "升学压力",
            "校园霸凌",
            "集体谎言",
            "暗黑青春"
        ]
    },
    {
        "title": "我的朋友圈",
        "url": "./movies/movie-935.html",
        "cover": "./35.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市悬疑",
        "category": "环球片库",
        "summary": "一个仅限好友的私密朋友圈，却让七个老友的人生彻底失控。",
        "tags": [
            "微信圈",
            "人设崩塌",
            "网络暴力"
        ]
    },
    {
        "title": "带着婆婆嫁",
        "url": "./movies/movie-936.html",
        "cover": "./36.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭，伦理，爱情",
        "category": "高清电影",
        "summary": "新婚夜丈夫暴毙，儿媳带着瘫痪婆婆改嫁，却被卷入家族遗产风暴。",
        "tags": [
            "婆媳",
            "再婚",
            "亲情",
            "催泪",
            "乡土"
        ]
    },
    {
        "title": "机械手臂",
        "url": "./movies/movie-937.html",
        "cover": "./37.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "科幻，剧情，运动",
        "category": "最新电视剧",
        "summary": "一位失去右臂的电竞天才少年装上机械义肢，却发现这只手臂会自行进行反人类的完美操作，且背后连接着一个暗网赌局。",
        "tags": [
            "义体",
            "电竞",
            "父子",
            "网络犯罪"
        ]
    },
    {
        "title": "回家看看",
        "url": "./movies/movie-938.html",
        "cover": "./38.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭 / 剧情",
        "category": "悬疑犯罪",
        "summary": "一通来自老宅的电话，让多年疏远的一家人重新踏上回乡路，也把那些被沉默压住的误解一点点翻了出来。",
        "tags": [
            "亲情修复",
            "返乡",
            "代际冲突",
            "老屋记忆",
            "平淡温情"
        ]
    },
    {
        "title": "新啼笑姻缘",
        "url": "./movies/movie-939.html",
        "cover": "./39.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 喜剧, 戏曲",
        "category": "爱情喜剧",
        "summary": "现代婚恋APP程序员被雷劈进古代歌仔戏剧本，成了拆散男女主的恶毒女配，却意外撮合了前世姻缘。",
        "tags": [
            "歌仔戏",
            "穿越",
            "前世今生",
            "搞笑",
            "命中注定"
        ]
    },
    {
        "title": "柳川堀割物语",
        "url": "./movies/movie-940.html",
        "cover": "./40.jpg",
        "year": "1987",
        "yearNumber": 1987,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 历史",
        "category": "最新电视剧",
        "summary": "福冈柳川的运河边，一个船夫家族三代人的百年孤独，都系在一条运河水上。",
        "tags": [
            "运河",
            "家族",
            "昭和",
            "文艺"
        ]
    },
    {
        "title": "寅次郎的故事7：奋斗篇",
        "url": "./movies/movie-941.html",
        "cover": "./41.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "日本",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 家庭",
        "category": "亚洲精选",
        "summary": "游手好闲的寅次郎突然想奋斗，却把小镇所有人的生意都搞黄了。",
        "tags": [
            "寅次郎",
            "系列电影",
            "昭和",
            "流浪",
            "人情味"
        ]
    },
    {
        "title": "熟女杀人事件",
        "url": "./movies/movie-942.html",
        "cover": "./42.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 犯罪",
        "category": "亚洲精选",
        "summary": "四个四十多岁的家庭主妇，在某个平凡的下午，合伙杀死了她们共同认识的第五个女人。",
        "tags": [
            "女性群像",
            "社会派",
            "压抑爆发",
            "黑色幽默"
        ]
    },
    {
        "title": "惊世谎言尼克逊",
        "url": "./movies/movie-943.html",
        "cover": "./43.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "美国",
        "type": "犯罪悬疑电影",
        "genre": "犯罪 / 惊悚 / 传媒",
        "category": "亚洲精选",
        "summary": "一台能播放封存录音的老式音箱让新闻人卷入跨国阴谋，真相从一段录音开始层层被剪辑，最终连“真话”也成了可交易文件。",
        "tags": [
            "媒体",
            "阴谋",
            "国际法",
            "真相剪辑",
            "记者"
        ]
    },
    {
        "title": "我们现在这样",
        "url": "./movies/movie-944.html",
        "cover": "./44.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，爱情",
        "category": "热播剧集",
        "summary": "结婚十五年后，他们决定各自去爱别的人，但每晚依然会回到同一张床上。",
        "tags": [
            "中年危机",
            "开放式关系",
            "文艺",
            "情感"
        ]
    },
    {
        "title": "网红的疯狂世界",
        "url": "./movies/movie-945.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情 / 喜剧 / 悬疑",
        "category": "亚洲精选",
        "summary": "六位顶级网红被邀请到孤岛直播真人秀，导演宣布：点赞最少的直播间，主播将被淘汰出局。",
        "tags": [
            "直播",
            "流量",
            "讽刺",
            "密室"
        ]
    },
    {
        "title": "有罪2015",
        "url": "./movies/movie-946.html",
        "cover": "./46.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/律政",
        "category": "爱情喜剧",
        "summary": "一名记者翻出九年前的旧案，却发现真正的凶手正坐在主编室里。",
        "tags": [
            "冤案翻案",
            "媒体审判",
            "司法黑幕"
        ]
    },
    {
        "title": "妖天下",
        "url": "./movies/movie-947.html",
        "cover": "./47.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "奇幻 / 动作",
        "category": "悬疑犯罪",
        "summary": "唐朝末年，最后一位捉妖天师与一只善良的小妖联手，对抗企图毁灭人间的万妖之王。",
        "tags": [
            "捉妖天师",
            "古风奇幻",
            "妖兽大战"
        ]
    },
    {
        "title": "李白之御剑长安",
        "url": "./movies/movie-948.html",
        "cover": "./48.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 历史 / 奇幻",
        "category": "热播剧集",
        "summary": "长安城闹鬼，死人提灯巡街，李白被贺知章请去查案，却发现剑仙的传说背后是一个颠覆大唐的阴谋。",
        "tags": [
            "盛唐",
            "剑仙",
            "悬案",
            "诗武合一"
        ]
    },
    {
        "title": "契妈不易做",
        "url": "./movies/movie-949.html",
        "cover": "./49.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "中国香港",
        "type": "电影",
        "genre": "家庭喜剧",
        "category": "家庭剧情",
        "summary": "屋邨里五个性格迥异的“契妈”（干妈），为了争夺一个孤儿抚养权，不惜在茶餐厅大打出手。",
        "tags": [
            "市井",
            "人情味",
            "女性互助",
            "奋斗"
        ]
    },
    {
        "title": "4仔失错身",
        "url": "./movies/movie-950.html",
        "cover": "./50.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，奇幻",
        "category": "环球片库",
        "summary": "四个游手好闲的年轻人被雷电击中后，灵魂分别进入了黑帮老大、性感女警、退休神父和一只流浪狗的身体里。",
        "tags": [
            "灵魂互换",
            "港式无厘头",
            "青春"
        ]
    },
    {
        "title": "血溅黄沙",
        "url": "./movies/movie-951.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "西班牙",
        "type": "电影",
        "genre": "西部 / 动作",
        "category": "悬疑犯罪",
        "summary": "黄沙之下埋着白银，也埋着她丈夫的尸骨——寡妇化身独行枪手，单挑整个挖矿黑帮。",
        "tags": [
            "荒漠",
            "复仇",
            "帮派",
            "硬核枪战",
            "女性硬汉"
        ]
    },
    {
        "title": "蜀山·伏魔篇",
        "url": "./movies/movie-952.html",
        "cover": "./52.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "仙侠 / 动作",
        "category": "家庭剧情",
        "summary": "蜀山百年大劫将至，一个被魔气侵体的弃徒为赎罪，独自闯进锁妖塔最底层。",
        "tags": [
            "视觉奇观",
            "上古神器",
            "正邪对决"
        ]
    },
    {
        "title": "庞贝城的末日",
        "url": "./movies/movie-953.html",
        "cover": "./53.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "意大利 / 美国",
        "type": "剧集",
        "genre": "灾难 / 历史 / 爱情",
        "category": "动作奇幻",
        "summary": "维苏威火山爆发前夕，一名角斗士奴隶与贵族少女在末日倒计时中相爱。",
        "tags": [
            "火山",
            "奴隶",
            "角斗士",
            "末日",
            "逃生"
        ]
    },
    {
        "title": "色情快活谷",
        "url": "./movies/movie-954.html",
        "cover": "./54.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "香港",
        "type": "电影",
        "genre": "剧情，喜剧，情色",
        "category": "爱情喜剧",
        "summary": "九十年代香港某条被称为“快活谷”的按摩一条街，几家欢喜几家愁的日与夜。",
        "tags": [
            "市井风情",
            "漫画式表演",
            "谷中故事",
            "怀旧"
        ]
    },
    {
        "title": "昭和元禄落语心中剧版",
        "url": "./movies/movie-955.html",
        "cover": "./55.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情、年代",
        "category": "最新电视剧",
        "summary": "从昭和到元禄，一个被收留的流浪少年与师兄之间横跨半个世纪的羁绊，最终以“心中”殉道收场。",
        "tags": [
            "落语艺术",
            "师徒虐恋",
            "时代变迁"
        ]
    },
    {
        "title": "你不该杀人",
        "url": "./movies/movie-956.html",
        "cover": "./56.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪悬疑",
        "category": "爱情喜剧",
        "summary": "一名不起眼的更夫在深夜目睹凶案，却发现真正该被追捕的人，竟可能是每个相信正义的人。",
        "tags": [
            "连环疑案",
            "良知拷问",
            "都市暗夜",
            "误判真相",
            "复仇"
        ]
    },
    {
        "title": "灵异直播间",
        "url": "./movies/movie-957.html",
        "cover": "./57.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "惊悚/恐怖",
        "category": "爱情喜剧",
        "summary": "过气网红阿乐为了翻红，带队前往台湾第一鬼楼“杏林大厦”进行灵异直播，却撞上了真正的血祭仪式。",
        "tags": [
            "民俗恐怖",
            "直播",
            "伪纪录片"
        ]
    },
    {
        "title": "基宝",
        "url": "./movies/movie-958.html",
        "cover": "./58.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 科幻",
        "category": "热播剧集",
        "summary": "新手父母买了个AI育儿机器人，结果机器人把自己当成了孩子的亲爹。",
        "tags": [
            "AI育儿",
            "机器人",
            "亲子",
            "搞笑"
        ]
    },
    {
        "title": "蜜桃成熟时1997",
        "url": "./movies/movie-959.html",
        "cover": "./59.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情，情色，青春",
        "category": "家庭剧情",
        "summary": "1997年夏天，一个少女用一场旅行，把成人的禁忌撕开了一道口子。",
        "tags": [
            "暑假",
            "成长",
            "欲望",
            "自由"
        ]
    },
    {
        "title": "占的故事",
        "url": "./movies/movie-960.html",
        "cover": "./60.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 传记 / 历史",
        "category": "热播剧集",
        "summary": "一个二战中失语的犹太男孩，在阿尔卑斯山脚下的小镇，与一位同样沉默的德国退伍老兵成为邻居。",
        "tags": [
            "战后",
            "孤独",
            "友谊",
            "救赎"
        ]
    },
    {
        "title": "蝙蝠侠：披风斗士归来",
        "url": "./movies/movie-961.html",
        "cover": "./61.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "动画电影",
        "genre": "动作, 悬疑, 动画",
        "category": "悬疑犯罪",
        "summary": "年迈的布鲁斯·韦恩已经退休十年，哥谭再次笼罩在恐惧中，他必须最后一次穿上战衣，对抗继承小丑衣钵的神秘人。",
        "tags": [
            "经典回归",
            "哥特",
            "黑色电影"
        ]
    },
    {
        "title": "未来简史",
        "url": "./movies/movie-962.html",
        "cover": "./62.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "科幻 / 剧情 / 传记",
        "category": "爱情喜剧",
        "summary": "一个算法精准预测了所有灾难，却因为它的存在，每一个预测都变成了谎言。",
        "tags": [
            "人工智能伦理",
            "数据主义",
            "预言自毁",
            "社会实验"
        ]
    },
    {
        "title": "美国独立日（1983年）",
        "url": "./movies/movie-963.html",
        "cover": "./63.jpg",
        "year": "1983",
        "yearNumber": 1983,
        "region": "美国",
        "type": "电影",
        "genre": "剧情，历史",
        "category": "悬疑犯罪",
        "summary": "1983年美国独立日，一个小镇上的五组普通人，在烟花下迎来各自的人生拐点。",
        "tags": [
            "小镇",
            "群像",
            "国庆",
            "情感",
            "复古"
        ]
    },
    {
        "title": "狂覗",
        "url": "./movies/movie-964.html",
        "cover": "./64.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖，悬疑，剧情",
        "category": "高清电影",
        "summary": "一名无业青年在对面废弃大楼安装摄像头，偷窥一栋公寓楼里12户人的生活，却逐渐发现每一户都在“直播”自己的秘密，而他才是被看的那一个。",
        "tags": [
            "偷窥",
            "直播",
            "公寓",
            "诅咒"
        ]
    },
    {
        "title": "生化战士：电脑动画电影",
        "url": "./movies/movie-965.html",
        "cover": "./65.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 科幻",
        "category": "爱情喜剧",
        "summary": "一种能将人体改造成生化武器的纳米病毒失控，被感染的士兵变成了半人半机械的怪物，只有一名双腿瘫痪的程序员能救他们。",
        "tags": [
            "机甲",
            "末日",
            "病毒",
            "3D",
            "超级英雄"
        ]
    },
    {
        "title": "亲爱的爸爸",
        "url": "./movies/movie-966.html",
        "cover": "./66.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "爱情喜剧",
        "summary": "女儿车祸失忆后只剩三岁心智，六旬老父重新学习当父亲，用余生陪她长大第二次。",
        "tags": [
            "亲情",
            "失忆",
            "父女",
            "治愈"
        ]
    },
    {
        "title": "平淡生活",
        "url": "./movies/movie-967.html",
        "cover": "./67.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情， 家庭",
        "category": "亚洲精选",
        "summary": "小镇超市老板日复一日的平淡生活，被一个声称是他私生女的女孩彻底打破。",
        "tags": [
            "生活流",
            "亲情",
            "小镇",
            "中年危机",
            "治愈"
        ]
    },
    {
        "title": "今生只为遇见你",
        "url": "./movies/movie-968.html",
        "cover": "./68.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市爱情剧",
        "category": "亚洲精选",
        "summary": "一场迟到多年的重逢，让两个曾在青春里擦肩的人，在现实与旧伤之间重新确认：原来命运最狠的安排，就是让彼此终于等到彼此。",
        "tags": [
            "都市爱情",
            "宿命感",
            "误会",
            "追爱",
            "双向救赎"
        ]
    },
    {
        "title": "稻谷风云",
        "url": "./movies/movie-969.html",
        "cover": "./69.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争 / 剧情",
        "category": "亚洲精选",
        "summary": "抗战时期，一粒米就是一条命，苏州粮商们在日军和土匪的夹缝中，进行着一场无声的粮食战争。",
        "tags": [
            "粮食战争",
            "民国",
            "商战",
            "人性",
            "史诗"
        ]
    },
    {
        "title": "希伯来铁锤",
        "url": "./movies/movie-970.html",
        "cover": "./70.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "以色列",
        "type": "电影",
        "genre": "动作, 历史",
        "category": "悬疑犯罪",
        "summary": "公元前2世纪，一名犹太铁匠以一柄刻满诗篇的铁锤，独自对抗叙利亚希腊帝国的精锐骑兵。",
        "tags": [
            "传奇",
            "复仇",
            "冷兵器",
            "宗教"
        ]
    },
    {
        "title": "爱你的大自然",
        "url": "./movies/movie-971.html",
        "cover": "./71.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "加拿大",
        "type": "纪录片",
        "genre": "自然 / 环保 / 家庭",
        "category": "悬疑犯罪",
        "summary": "一位单亲父亲带着失明的女儿穿越森林与湖泊，用触摸和声音重新认识这个正在变化的世界。",
        "tags": [
            "野生生态",
            "亲子观察",
            "气候变化",
            "森林河流",
            "温柔科普"
        ]
    },
    {
        "title": "童梦大冒险",
        "url": "./movies/movie-972.html",
        "cover": "./72.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "为了寻找失踪的爸爸，小女孩跳进了自己快要消失的童年梦境里。",
        "tags": [
            "梦境世界",
            "成长治愈",
            "视觉奇观"
        ]
    },
    {
        "title": "归途列车",
        "url": "./movies/movie-973.html",
        "cover": "./73.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情， 家庭",
        "category": "亚洲精选",
        "summary": "大雪封路，一群陌生人被困在绿皮火车上，三天两夜后他们成了彼此的家人。",
        "tags": [
            "春运",
            "公路片",
            "亲情"
        ]
    },
    {
        "title": "没有丑闻",
        "url": "./movies/movie-974.html",
        "cover": "./74.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情政治",
        "category": "最新电视剧",
        "summary": "清廉总统候选人被爆“没有丑闻”才是最大的丑闻，民众开始怀疑他完美人设背后藏着更可怕的秘密。",
        "tags": [
            "政界操守",
            "媒体博弈",
            "理想与现实",
            "悬疑"
        ]
    },
    {
        "title": "非常主播",
        "url": "./movies/movie-975.html",
        "cover": "./75.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 喜剧",
        "category": "高清电影",
        "summary": "过气电台主播意外连麦杀人狂，收视率暴涨后，他决定亲自设计下一场“直播谋杀”。",
        "tags": [
            "职场",
            "媒体",
            "逆袭",
            "直播",
            "黑色幽默"
        ]
    },
    {
        "title": "这个医师超麻烦",
        "url": "./movies/movie-976.html",
        "cover": "./76.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "医疗喜剧",
        "category": "环球片库",
        "summary": "毒舌天才医师被下放到乡村诊所，竟发现这里每个病人都是隐藏的医学高手。",
        "tags": [
            "毒舌",
            "成长",
            "医患关系",
            "反转"
        ]
    },
    {
        "title": "湘西往事",
        "url": "./movies/movie-977.html",
        "cover": "./77.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 悬疑 / 年代",
        "category": "环球片库",
        "summary": "1950 年，年轻的解放军文化教员被派往湘西协助剿匪，却在弥漫着巫蛊传说的古老寨子里，遭遇了比土匪更诡异的人心。",
        "tags": [
            "湘西",
            "土匪",
            "剿匪",
            "悬疑",
            "民俗"
        ]
    },
    {
        "title": "你往何处去",
        "url": "./movies/movie-978.html",
        "cover": "./78.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "波兰 / 美国",
        "type": "电影",
        "genre": "剧情、历史、爱情",
        "category": "高清电影",
        "summary": "罗马贵族维尼裘斯狂恋基督徒女奴莉吉亚，在寻找她的过程中，见证了尼禄焚烧罗马城和早期基督徒的殉道。",
        "tags": [
            "古罗马",
            "基督教",
            "暴君尼禄",
            "史诗"
        ]
    },
    {
        "title": "怒火救援",
        "url": "./movies/movie-979.html",
        "cover": "./79.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 惊悚",
        "category": "悬疑犯罪",
        "summary": "退役特工为救被绑架的富家女，单枪匹马闯入地下人口贩卖网络，却发现这是一场针对他的致命陷阱。",
        "tags": [
            "退役特工",
            "绑架",
            "复仇",
            "极限营救",
            "孤胆英雄"
        ]
    },
    {
        "title": "无言的旅程",
        "url": "./movies/movie-980.html",
        "cover": "./80.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 公路",
        "category": "高清电影",
        "summary": "一个失语症父亲带着对声音毫无概念的聋哑儿子，骑摩托车横穿日本寻找“声音的形状”。",
        "tags": [
            "聋哑",
            "父子",
            "摩托车",
            "北海道"
        ]
    },
    {
        "title": "强棒奶娃",
        "url": "./movies/movie-981.html",
        "cover": "./81.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 家庭, 运动",
        "category": "经典回看",
        "summary": "一个能听懂动物说话且拥有怪力的天才婴儿，意外成为一支垫底棒球队的秘密王牌投手。",
        "tags": [
            "婴儿",
            "棒球",
            "超能力",
            "乌龙"
        ]
    },
    {
        "title": "绍尔和绍尔绍尔",
        "url": "./movies/movie-982.html",
        "cover": "./82.jpg",
        "year": "2029",
        "yearNumber": 2029,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "category": "最新电视剧",
        "summary": "一对长得一模一样的双胞胎兄弟，一个成富豪一个成流浪汉，两人决定互换人生。",
        "tags": [
            "双胞胎互换",
            "身份错位",
            "黑色幽默"
        ]
    },
    {
        "title": "人生七年3",
        "url": "./movies/movie-983.html",
        "cover": "./83.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录",
        "category": "动作奇幻",
        "summary": "时隔七年，再次追踪那群7岁孩子，28岁的他们正在经历婚姻、事业与理想的双重考验。",
        "tags": [
            "人生轨迹",
            "社会阶层",
            "时间跨度",
            "真实力量"
        ]
    },
    {
        "title": "可爱的人儿",
        "url": "./movies/movie-984.html",
        "cover": "./84.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、家庭、治愈",
        "category": "悬疑犯罪",
        "summary": "一个谎称爸妈在太空站的农村女孩，遇上了真正“掉下来”的宇航员。",
        "tags": [
            "亲情",
            "温暖",
            "成长",
            "留守儿童"
        ]
    },
    {
        "title": "鬼寺凶灵",
        "url": "./movies/movie-985.html",
        "cover": "./85.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖， 喜剧",
        "category": "最新电视剧",
        "summary": "三个被鬼魂纠缠的倒霉蛋，被迫躲进一座据说“鬼都不敢去”的荒废寺庙里当沙弥，却发现这里的鬼不仅敢来，还会发LINE消息。",
        "tags": [
            "寺庙",
            "还俗",
            "鬼魂",
            "驱魔"
        ]
    },
    {
        "title": "权力的游戏",
        "url": "./movies/movie-986.html",
        "cover": "./86.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情 / 奇幻 / 战争",
        "category": "高清电影",
        "summary": "七大王国为争夺铁王座血流成河，而在北方的绝境长城之外，一个古老的威胁正在苏醒。",
        "tags": [
            "史诗巨制",
            "家族纷争",
            "冰与火",
            "龙与魔法"
        ]
    },
    {
        "title": "我心唱响",
        "url": "./movies/movie-987.html",
        "cover": "./87.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐 / 剧情 / 青春",
        "category": "悬疑犯罪",
        "summary": "一所面临撤并的乡镇中学里，一群从不敢开口唱歌的孩子，在新来的音乐老师带领下，把沉默的日常唱成了属于自己的舞台。",
        "tags": [
            "合唱团",
            "乡村教育",
            "追梦舞台",
            "师生情谊",
            "自我表达"
        ]
    },
    {
        "title": "钢铁森林",
        "url": "./movies/movie-988.html",
        "cover": "./88.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑 / 刑侦 / 犯罪",
        "category": "高清电影",
        "summary": "一名热血刑警与一名被开除的落魄警察，在钢筋水泥的城市森林中，联手追查同一个贩毒集团。",
        "tags": [
            "双男主",
            "卧底",
            "黑警",
            "缉毒",
            "硬核"
        ]
    },
    {
        "title": "小羊的微笑",
        "url": "./movies/movie-989.html",
        "cover": "./89.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "家庭、成长、动画、温情",
        "category": "亚洲精选",
        "summary": "一只总爱傻笑的小羊用一次次笨拙却真诚的帮助，守住了整个山村最珍贵的秋收季，也守住了孩子们的勇气。",
        "tags": [
            "乡村",
            "羊群",
            "童年",
            "失而复得",
            "友情"
        ]
    },
    {
        "title": "爱在满格时",
        "url": "./movies/movie-990.html",
        "cover": "./90.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 都市 / 轻科幻",
        "category": "热播剧集",
        "summary": "手机信号满格那晚，她打给已故男友的电话，竟接通了五年前的他。",
        "tags": [
            "手机信号",
            "平行通话",
            "错位时空",
            "都市情感",
            "治愈"
        ]
    },
    {
        "title": "解放债务",
        "url": "./movies/movie-991.html",
        "cover": "./91.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "category": "爱情喜剧",
        "summary": "一个患有社交恐惧症的会计天才，用一套密码算法帮负债者“合法消失”，却引来了跨国黑帮的追杀。",
        "tags": [
            "高利贷",
            "复仇",
            "会计天才",
            "黑吃黑",
            "反转不断"
        ]
    },
    {
        "title": "东京奥林匹克",
        "url": "./movies/movie-992.html",
        "cover": "./92.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "纪录片",
        "genre": "运动纪录",
        "category": "热播剧集",
        "summary": "记录2020年东京奥运会在空场、争议与病毒夹缝中举行的366天，聚焦那些不被聚光灯照耀的普通人。",
        "tags": [
            "疫情",
            "幕后",
            "人性",
            "特殊时代"
        ]
    },
    {
        "title": "红猪",
        "url": "./movies/movie-993.html",
        "cover": "./93.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻 / 战争",
        "category": "热播剧集",
        "summary": "被诅咒变成猪的赏金猎人飞行员，在二战前夕的亚得里亚海上空，与王牌飞行员展开决战。",
        "tags": [
            "宫崎骏精神续作",
            "飞行员",
            "诅咒",
            "亚得里亚海",
            "反战"
        ]
    },
    {
        "title": "鬼新娘国语",
        "url": "./movies/movie-994.html",
        "cover": "./94.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 爱情, 悬疑",
        "category": "悬疑犯罪",
        "summary": "民国时期，一场给死人办的冥婚，却意外唤醒了沉睡百年的鬼新娘，引出了一段跨越生死的爱恋。",
        "tags": [
            "冥婚",
            "民国",
            "前世今生",
            "凄美"
        ]
    },
    {
        "title": "铁血警魂",
        "url": "./movies/movie-995.html",
        "cover": "./95.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "警匪 / 剧情 / 悬疑",
        "category": "最新电视剧",
        "summary": "一名从边远县城调来的刑警队长，带着一身旧伤和一腔硬气，在城市深处追查一宗牵出多年的黑网案。",
        "tags": [
            "反黑行动",
            "基层警察",
            "卧底追查",
            "城市治安",
            "师徒传承"
        ]
    },
    {
        "title": "鼻子，或异见者的阴谋",
        "url": "./movies/movie-996.html",
        "cover": "./96.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "黑色幽默， 讽刺， 剧情",
        "category": "热播剧集",
        "summary": "某小城市长的鼻子在睡梦中离家出走，变成了一位比他官阶还高的中央特派员，回来视察他自己的城市。",
        "tags": [
            "果戈理",
            "鼻子",
            "荒诞",
            "官僚",
            "异见"
        ]
    },
    {
        "title": "江上妖姬",
        "url": "./movies/movie-997.html",
        "cover": "./97.jpg",
        "year": "1962",
        "yearNumber": 1962,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻， 爱情， 戏曲",
        "category": "悬疑犯罪",
        "summary": "一个溺死在江中的戏班花旦化为厉鬼，她必须在七七四十九天内找到一个替身，却爱上了要被她害死的书生。",
        "tags": [
            "黑白片",
            "民间传说",
            "水鬼"
        ]
    },
    {
        "title": "出发吧短剧：三亚篇",
        "url": "./movies/movie-998.html",
        "cover": "./98.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集 (短剧)",
        "genre": "喜剧, 爱情, 旅行",
        "category": "环球片库",
        "summary": "为拯救濒临倒闭的旅行社，实习导游带团三亚，然而每个游客都有一段“离奇”的人生故事。",
        "tags": [
            "短视频",
            "海岛",
            "解压",
            "反转",
            "快节奏"
        ]
    },
    {
        "title": "路德维希",
        "url": "./movies/movie-999.html",
        "cover": "./99.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "剧集",
        "genre": "传记、历史",
        "category": "热播剧集",
        "summary": "童话国王路德维希二世死后，一位慕尼黑档案管理员发现了他从未公开的、关于王国存亡的终极密信。",
        "tags": [
            "巴伐利亚",
            "天鹅堡",
            "君主制",
            "古典乐"
        ]
    },
    {
        "title": "情人与陌生人",
        "url": "./movies/movie-1000.html",
        "cover": "./100.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国 / 意大利",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "爱情喜剧",
        "summary": "结婚十年的夫妻在罗马度假，妻子发现丈夫在和一个陌生女人发短信，但她不确定那个女人到底是不是自己。",
        "tags": [
            "婚外情",
            "心理博弈",
            "爱情伦理",
            "意式风情",
            "对话电影"
        ]
    },
    {
        "title": "孤堡疑云",
        "url": "./movies/movie-1001.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑 / 恐怖",
        "category": "亚洲精选",
        "summary": "为继承姨妈的海边孤堡，七位表兄妹必须在内共度七天，而每晚都会有一人离奇“消失”。",
        "tags": [
            "哥特",
            "遗产继承",
            "童年阴影",
            "双胞胎互换",
            "古堡迷踪"
        ]
    },
    {
        "title": "比基尼大屠杀",
        "url": "./movies/movie-1002.html",
        "cover": "./102.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，喜剧，血腥",
        "category": "家庭剧情",
        "summary": "一群模特在荒岛拍摄写真时，遭遇了穿着比基尼的纳粹丧尸克隆军团的血腥猎杀。",
        "tags": [
            "比基尼",
            "杀戮",
            "荒岛",
            "黑色幽默",
            "女性"
        ]
    },
    {
        "title": "双星觅宝",
        "url": "./movies/movie-1003.html",
        "cover": "./103.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "冒险 / 动作 / 喜剧",
        "category": "经典回看",
        "summary": "一个冒牌风水师和一个小偷，因为一份错分的遗产地图，被全球黑道追杀，却意外找到了成吉思汗墓。",
        "tags": [
            "夺宝搭档",
            "欢喜冤家",
            "风水玄学",
            "环球取景"
        ]
    },
    {
        "title": "每天吓你八小时",
        "url": "./movies/movie-1004.html",
        "cover": "./104.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 喜剧, 惊悚",
        "category": "热播剧集",
        "summary": "三个办公室鬼故事：凌晨的复印机印出遗书，电梯永远停在13楼，新来的实习生没有影子。",
        "tags": [
            "办公室恐怖",
            "分段式",
            "黑色幽默",
            "都市传说"
        ]
    },
    {
        "title": "德州风云之我是一条鱼",
        "url": "./movies/movie-1005.html",
        "cover": "./105.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "荒诞， 喜剧， 犯罪",
        "category": "经典回看",
        "summary": "一名破产程序员被黑帮胁迫参加死亡赌局，误喝药水后竟与一条金龙鱼互换意识。",
        "tags": [
            "德州扑克",
            "记忆互换",
            "黑色幽默",
            "赌局"
        ]
    },
    {
        "title": "亚瑟和他的迷你王国",
        "url": "./movies/movie-1006.html",
        "cover": "./106.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国 / 美国",
        "type": "电影",
        "genre": "动画 / 奇幻 / 家庭",
        "category": "高清电影",
        "summary": "中年亚瑟重返迷你王国，发现那里被塑料垃圾淹没，而敌人是一群变异了的、热爱污染的疯狂科学家。",
        "tags": [
            "微观世界",
            "经典续作",
            "全CG",
            "环保主题"
        ]
    },
    {
        "title": "怒海争锋：极地征伐",
        "url": "./movies/movie-1007.html",
        "cover": "./107.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 冒险 / 战争",
        "category": "家庭剧情",
        "summary": "拿破仑战争时期，一艘英国战舰追逐敌舰进入北极圈，却遭遇了比法国人更可怕的远古生物。",
        "tags": [
            "海战",
            "拿破仑战争",
            "北极",
            "生存",
            "勇气"
        ]
    },
    {
        "title": "军火女王第二季",
        "url": "./movies/movie-1008.html",
        "cover": "./108.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "剧集",
        "genre": "动作， 犯罪， 剧情",
        "category": "最新电视剧",
        "summary": "为了超越父亲并颠覆世界格局，最强军火商人蔻蔻踏上了布满鲜血与背叛的终极棋局。",
        "tags": [
            "军火贩",
            "复仇",
            "国际阴谋",
            "女强人"
        ]
    },
    {
        "title": "加沙，我的爱",
        "url": "./movies/movie-1009.html",
        "cover": "./109.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "巴勒斯坦 / 法国",
        "type": "电影",
        "genre": "爱情 / 战争 / 人文",
        "category": "爱情喜剧",
        "summary": "在随时会断电的加沙街巷里，两个人用一台坏掉的相机，偷偷记录下彼此与城市仍然活着的证据。",
        "tags": [
            "封锁之城",
            "乱世相遇",
            "微光爱情",
            "家园记忆",
            "生存日常"
        ]
    },
    {
        "title": "狂凶记",
        "url": "./movies/movie-1010.html",
        "cover": "./110.jpg",
        "year": "1972",
        "yearNumber": 1972,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、犯罪",
        "category": "爱情喜剧",
        "summary": "一个被误认为领带杀手的酒保，发现真正的凶手就住在自己隔壁。",
        "tags": [
            "希区柯克",
            "冤案",
            "领带",
            "伦敦"
        ]
    },
    {
        "title": "大卖空",
        "url": "./movies/movie-1011.html",
        "cover": "./111.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "category": "最新电视剧",
        "summary": "一个三流推销员在倒闭商场里搞“空手套白狼”的庞氏骗局，最后竟成了商业奇才。",
        "tags": [
            "诈骗",
            "商场",
            "黑色幽默",
            "奇葩",
            "反转"
        ]
    },
    {
        "title": "血色苍穹",
        "url": "./movies/movie-1012.html",
        "cover": "./112.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 恐怖",
        "category": "动作奇幻",
        "summary": "国际空间站宇航员带回一块火星陨石，陨石中的远古真菌将整个苍穹染成血红，并开始吞噬大气层。",
        "tags": [
            "太空",
            "变异",
            "克苏鲁",
            "密闭空间"
        ]
    },
    {
        "title": "黄土高天",
        "url": "./movies/movie-1013.html",
        "cover": "./113.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "农村 / 现实 / 家族",
        "category": "环球片库",
        "summary": "一个在黄土沟壑间长大的年轻人，把离乡、返乡与守乡三种命运拧成一股绳，去对抗土地贫瘠和人心分裂。",
        "tags": [
            "黄土高原",
            "农业改革",
            "家族伦理",
            "返乡创业",
            "时代变迁"
        ]
    },
    {
        "title": "乐队时代",
        "url": "./movies/movie-1014.html",
        "cover": "./114.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电视剧",
        "genre": "音乐， 剧情， 喜剧",
        "category": "亚洲精选",
        "summary": "四个伦敦废柴组成网红乐队，结果写的歌全被短视频算法毙了。",
        "tags": [
            "摇滚",
            "英伦",
            "成长"
        ]
    },
    {
        "title": "要敌",
        "url": "./movies/movie-1015.html",
        "cover": "./115.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "俄罗斯 / 乌克兰",
        "type": "电影",
        "genre": "剧情 / 战争",
        "category": "高清电影",
        "summary": "一个乌克兰狙击手和一个俄罗斯狙击手在废墟中对峙三天三夜，最后发现他们要杀的其实是同一个人。",
        "tags": [
            "双雄对峙",
            "狙击手对决",
            "人性拷问"
        ]
    },
    {
        "title": "大宋少年志",
        "url": "./movies/movie-1016.html",
        "cover": "./116.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装、悬疑、青春",
        "category": "高清电影",
        "summary": "四个问题少年被迫加入秘密机构，用最不靠谱的方式破解关乎北宋存亡的惊天阴谋。",
        "tags": [
            "少年热血",
            "谍战",
            "反转",
            "团队成长"
        ]
    },
    {
        "title": "反击第二季",
        "url": "./movies/movie-1017.html",
        "cover": "./117.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "动作, 悬疑, 犯罪, 军事",
        "category": "动作奇幻",
        "summary": "第一季被团灭的雇佣兵小队全员复活，但他们发现自己是克隆人，而本体正在追杀他们。",
        "tags": [
            "特工",
            "复仇",
            "雇佣兵",
            "硬核"
        ]
    },
    {
        "title": "当代孝子",
        "url": "./movies/movie-1018.html",
        "cover": "./118.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "环球片库",
        "summary": "被村里评为“不孝子”的中年男人，用一套城里的“科学养老法”让全村老人崩溃。",
        "tags": [
            "养老",
            "城乡差异",
            "亲情绑架",
            "反向教育",
            "现实主义"
        ]
    },
    {
        "title": "小白玉霜",
        "url": "./movies/movie-1019.html",
        "cover": "./119.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记, 剧情, 戏曲",
        "category": "家庭剧情",
        "summary": "评剧宗师白玉霜猝死，养女“小白玉霜”被迫顶上，在乱世中撑起一个戏班和一段被篡改的身世。",
        "tags": [
            "评剧皇后",
            "民国风云",
            "旧社会女性"
        ]
    },
    {
        "title": "逃避虽可耻但有用",
        "url": "./movies/movie-1020.html",
        "cover": "./120.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧，爱情",
        "category": "爱情喜剧",
        "summary": "心理学硕士找不到工作，与高智商程序员签订契约婚姻，住进他家当全职主妇。",
        "tags": [
            "契约婚姻",
            "宅男",
            "失业",
            "治愈"
        ]
    },
    {
        "title": "顽皮跳跳灯",
        "url": "./movies/movie-1021.html",
        "cover": "./121.jpg",
        "year": "1986",
        "yearNumber": 1986,
        "region": "美国",
        "type": "电影",
        "genre": "动画, 短片, 家庭",
        "category": "动作奇幻",
        "summary": "一盏小小的台灯，发现了一个可以无限弹跳的金属球，它在家里跳出了成人世界遗忘的单纯快乐。",
        "tags": [
            "皮克斯",
            "台灯",
            "无对白",
            "童年"
        ]
    },
    {
        "title": "百炼霸王与圣约女武神",
        "url": "./movies/movie-1022.html",
        "cover": "./122.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "日本",
        "type": "动画",
        "genre": "奇幻, 战斗, 后宫",
        "category": "动作奇幻",
        "summary": "现代军宅穿越到北欧神话世界，用孙子兵法吊打奥丁的英灵大军。",
        "tags": [
            "穿越",
            "北欧神话",
            "战旗",
            "龙傲天",
            "契约"
        ]
    },
    {
        "title": "摩斯探长第四季",
        "url": "./movies/movie-1023.html",
        "cover": "./123.jpg",
        "year": "1990",
        "yearNumber": 1990,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 犯罪",
        "category": "高清电影",
        "summary": "爱听歌剧、喝威士忌的牛津探长，又遇到了一桩藏在学院围墙里的完美谋杀。",
        "tags": [
            "英伦",
            "古典推理",
            "牛津"
        ]
    },
    {
        "title": "永远的忍者神龟",
        "url": "./movies/movie-1024.html",
        "cover": "./124.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "动画电影",
        "genre": "动作喜剧",
        "category": "悬疑犯罪",
        "summary": "垂垂老矣的忍者神龟四兄弟最后一次合体，发现自己已经记不清师傅斯普林特的完整遗言。",
        "tags": [
            "中年危机",
            "合体",
            "情怀"
        ]
    },
    {
        "title": "失控十八岁",
        "url": "./movies/movie-1025.html",
        "cover": "./125.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "剧情 / 青春 / 校园 / 悬疑",
        "category": "动作奇幻",
        "summary": "高三毕业晚会当晚，全班公认的“透明人”坠楼昏迷，而所有同学都声称：他本来就不存在。",
        "tags": [
            "成人礼",
            "心理创伤",
            "集体谎言"
        ]
    },
    {
        "title": "天竺鼠车车",
        "url": "./movies/movie-1026.html",
        "cover": "./126.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "剧集 / 动画 / 短片",
        "genre": "儿童 / 定格动画 / 喜剧",
        "category": "高清电影",
        "summary": "羊毛毡做的天竺鼠变成汽车，每天发生各种蠢萌又温暖的小意外。",
        "tags": [
            "天竺鼠",
            "羊毛毡",
            "定格",
            "呆萌",
            "无声"
        ]
    },
    {
        "title": "献祭",
        "url": "./movies/movie-1027.html",
        "cover": "./127.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 悬疑, 宗教",
        "category": "高清电影",
        "summary": "民俗学者受邀调查小镇失踪案，发现每隔七年献祭一名“外乡人”，是这个镇子繁荣至今的真正原因。",
        "tags": [
            "民俗恐怖",
            "邪教",
            "封闭空间",
            "心理惊悚"
        ]
    },
    {
        "title": "大野八条龙",
        "url": "./movies/movie-1028.html",
        "cover": "./128.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "动作 / 奇幻 / 武士",
        "category": "家庭剧情",
        "summary": "八个自称“龙”的浪人，去屠一条根本不存在的龙。",
        "tags": [
            "战国",
            "龙",
            "八武士",
            "群像",
            "史诗"
        ]
    },
    {
        "title": "酷爱电影的庞波小姐",
        "url": "./movies/movie-1029.html",
        "cover": "./129.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电影",
        "genre": "动画剧情",
        "category": "悬疑犯罪",
        "summary": "电影制片厂大佬的孙女庞波小姐，用她的热情和诡计，绑架了一个剧组来完成一部“只有高潮”的电影。",
        "tags": [
            "电影情书",
            "梦想",
            "职场"
        ]
    },
    {
        "title": "清醒梦2之疯狂快递",
        "url": "./movies/movie-1030.html",
        "cover": "./130.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作科幻",
        "category": "热播剧集",
        "summary": "一个底层快递员被植入梦境芯片，必须在三十分钟内穿越十层梦境，配送一份“绝对不能送达”的包裹。",
        "tags": [
            "梦境共享",
            "限时任务",
            "快递员",
            "脑内飙车",
            "视觉炸裂"
        ]
    },
    {
        "title": "亲爱的，我把孩子放大了",
        "url": "./movies/movie-1031.html",
        "cover": "./131.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 科幻, 家庭",
        "category": "环球片库",
        "summary": "极客父亲的重力放大枪意外走火，三岁女儿变成十五米高的巨人，在城市里哭着找妈妈。",
        "tags": [
            "变大",
            "灾难",
            "熊孩子",
            "荒诞"
        ]
    },
    {
        "title": "奇姆的十字架",
        "url": "./movies/movie-1032.html",
        "cover": "./132.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻, 冒险",
        "category": "高清电影",
        "summary": "孤儿奇姆发现脖子上的铁质十字架能连接亡者世界，为了复活养父，他踏入了神明禁地。",
        "tags": [
            "圣物",
            "成长",
            "宗教隐喻"
        ]
    },
    {
        "title": "万湖会议",
        "url": "./movies/movie-1033.html",
        "cover": "./133.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "德国",
        "type": "电影",
        "genre": "历史 / 惊悚",
        "category": "最新电视剧",
        "summary": "1942年柏林万湖别墅，十五名纳粹高官用一杯咖啡的时间，敲定了系统性大屠杀的最终方案。",
        "tags": [
            "纳粹",
            "会议",
            "政治恐怖"
        ]
    },
    {
        "title": "黑色咖啡馆",
        "url": "./movies/movie-1034.html",
        "cover": "./134.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "德国",
        "type": "电影",
        "genre": "悬疑 / 剧情",
        "category": "亚洲精选",
        "summary": "柏林一夜，一个即将关门的老咖啡馆，六个人的命运在黑色中交错。",
        "tags": [
            "柏林",
            "一夜",
            "多线叙事",
            "巧合",
            "命运"
        ]
    },
    {
        "title": "老婆我抵死",
        "url": "./movies/movie-1035.html",
        "cover": "./135.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色喜剧",
        "category": "最新电视剧",
        "summary": "一个怂包老公雇凶杀妻，结果杀错人，而妻子同时也在雇凶杀他，两人在停尸房尴尬相遇。",
        "tags": [
            "夫妻",
            "杀手",
            "阴差阳错",
            "粤语"
        ]
    },
    {
        "title": "米酒女孩",
        "url": "./movies/movie-1036.html",
        "cover": "./136.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情，音乐，青春",
        "category": "爱情喜剧",
        "summary": "为了拯救即将倒闭的家庭米酒作坊，一个五音不全的女孩决定组建一支乡村乐队来炒作“音乐米酒”。",
        "tags": [
            "乡村",
            "酿酒",
            "梦想",
            "民谣",
            "治愈"
        ]
    },
    {
        "title": "精灵粤语",
        "url": "./movies/movie-1037.html",
        "cover": "./137.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻 / 喜剧",
        "category": "爱情喜剧",
        "summary": "香港女孩发现身边有一个以“粤语俚语”为食的精灵，而粤语正在被人遗忘。",
        "tags": [
            "粤语",
            "精灵",
            "语言消失",
            "文化保卫"
        ]
    },
    {
        "title": "疯之状态",
        "url": "./movies/movie-1038.html",
        "cover": "./138.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "科幻 / 心理惊悚",
        "category": "悬疑犯罪",
        "summary": "一种强制植入的“情绪稳定芯片”开始批量故障，整个巴黎的白领在一夜间变成了狂暴的野兽。",
        "tags": [
            "大脑植入",
            "情绪失控",
            "反乌托邦",
            "集体癔症",
            "监控社会"
        ]
    },
    {
        "title": "野天鹅追杀令",
        "url": "./movies/movie-1039.html",
        "cover": "./139.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "北欧",
        "type": "剧集",
        "genre": "犯罪冒险",
        "category": "悬疑犯罪",
        "summary": "一个女杀手受雇刺杀黑帮老大，却发现目标是她失散多年的妹妹，改编自《野天鹅》。",
        "tags": [
            "北欧",
            "noir",
            "黑帮",
            "童话改编",
            "女性"
        ]
    },
    {
        "title": "阿尔塔米拉",
        "url": "./movies/movie-1040.html",
        "cover": "./140.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情, 传记, 历史",
        "category": "经典回看",
        "summary": "发现了史前洞穴壁画的贵族，被世人当作骗子，他花了毕生精力只为证明一万年前的原始人也有艺术。",
        "tags": [
            "考古",
            "洞穴壁画",
            "偏见",
            "真相"
        ]
    },
    {
        "title": "圣诞天使",
        "url": "./movies/movie-1041.html",
        "cover": "./141.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 家庭 / 喜剧",
        "category": "经典回看",
        "summary": "一个被贬下凡的天使必须帮一个毒舌女孩实现三个愿望，才能返回天堂。",
        "tags": [
            "圣诞节",
            "天使",
            "奇幻",
            "家庭",
            "治愈"
        ]
    },
    {
        "title": "天安门上太阳升",
        "url": "./movies/movie-1042.html",
        "cover": "./142.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 家庭 / 剧情",
        "category": "爱情喜剧",
        "summary": "一张1949年天安门城楼上的合影，串联起一个普通北京家庭四代人的信仰、背叛与和解。",
        "tags": [
            "建国",
            "家庭变迁",
            "时代记忆"
        ]
    },
    {
        "title": "明日赴死",
        "url": "./movies/movie-1043.html",
        "cover": "./143.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "category": "最新电视剧",
        "summary": "一名士兵在战场上反复死去又复活，他发现每一次死亡都会重置记忆，除了他。",
        "tags": [
            "时间循环",
            "战士",
            "末日",
            "记忆重置",
            "牺牲"
        ]
    },
    {
        "title": "怒海浩劫",
        "url": "./movies/movie-1044.html",
        "cover": "./144.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "灾难 / 动作",
        "category": "悬疑犯罪",
        "summary": "北海钻井平台大爆炸后，一名有创伤后应激障碍的前海军潜水员必须下潜到万米深海，关闭失控的防喷器，阻止整个北海被点燃。",
        "tags": [
            "海难救援",
            "极限潜水",
            "真实事件改编"
        ]
    },
    {
        "title": "朱德与史沫特莱",
        "url": "./movies/movie-1045.html",
        "cover": "./145.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "中国大陆 / 美国",
        "type": "电影",
        "genre": "历史 / 传记 / 战争",
        "category": "经典回看",
        "summary": "美国女记者史沫特莱深入太行山，本想写朱德传奇，最后却把自己写进了八路军的故事里。",
        "tags": [
            "抗战",
            "跨文化",
            "友情",
            "真实改编"
        ]
    },
    {
        "title": "姊妹坡国语",
        "url": "./movies/movie-1046.html",
        "cover": "./146.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国台湾/日本",
        "type": "电影",
        "genre": "剧情， 家庭， 青春",
        "category": "环球片库",
        "summary": "四姐妹在父母意外离世后，必须守住一个关于她们身世的惊天秘密才能保住老宅。",
        "tags": [
            "姐妹",
            "秘密",
            "成长",
            "国语配音"
        ]
    },
    {
        "title": "毁坏",
        "url": "./movies/movie-1047.html",
        "cover": "./147.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "德国",
        "type": "电影",
        "genre": "剧情，战争",
        "category": "亚洲精选",
        "summary": "一位纳粹首席建筑师战后隐姓埋名，却被自己设计的“完美城市”废墟认了出来。",
        "tags": [
            "二战",
            "轰炸",
            "废墟",
            "建筑师",
            "忏悔"
        ]
    },
    {
        "title": "娜娜2",
        "url": "./movies/movie-1048.html",
        "cover": "./148.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 音乐, 青春",
        "category": "热播剧集",
        "summary": "距离第一次相遇过去十年，两位娜娜在各自的音乐道路上撞得头破血流，一场绝症让她们再次站上了只有彼此能理解对方的舞台。",
        "tags": [
            "续集",
            "摇滚",
            "友情",
            "梦想",
            "成长痛"
        ]
    },
    {
        "title": "新恶魔岛",
        "url": "./movies/movie-1049.html",
        "cover": "./149.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻，悬疑，惊悚，政治",
        "category": "爱情喜剧",
        "summary": "世界上第一座由AI全权管理的监狱开狱，犯人们很快发现，AI的“改造”比死刑更可怕。",
        "tags": [
            "高科技监狱",
            "AI典狱长",
            "囚犯实验",
            "自由意志",
            "反乌托邦"
        ]
    },
    {
        "title": "情之债",
        "url": "./movies/movie-1050.html",
        "cover": "./150.jpg",
        "year": "2008",
        "yearNumber": 2008,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情， 家庭， 伦理",
        "category": "悬疑犯罪",
        "summary": "三十年前她替闺蜜顶罪入狱，出狱后闺蜜成了富商太太，而她只想要回自己的亲生女儿。",
        "tags": [
            "收养",
            "报恩",
            "虐心",
            "年代",
            "催泪"
        ]
    },
    {
        "title": "罪恶救赎",
        "url": "./movies/movie-1051.html",
        "cover": "./1.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "剧集",
        "genre": "惊悚/犯罪/宗教",
        "category": "家庭剧情",
        "summary": "老神父在告解室听到杀人犯的忏悔，却发现凶手竟是下一个受害者。",
        "tags": [
            "神父",
            "连环杀人",
            "告解室",
            "反转"
        ]
    },
    {
        "title": "苦海明灯",
        "url": "./movies/movie-1052.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 传记",
        "category": "家庭剧情",
        "summary": "一位失明女教师用手触摸学生的脸，教他们“看”见了整个世界。",
        "tags": [
            "盲人教育",
            "真人改编",
            "无私奉献"
        ]
    },
    {
        "title": "冰冻星球",
        "url": "./movies/movie-1053.html",
        "cover": "./3.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国 / 加拿大",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 冒险",
        "category": "高清电影",
        "summary": "南极科考站钻探出冰下古菌，古菌释放的病毒能瞬间冰封任何生命，包括时间。",
        "tags": [
            "末日",
            "冰冻",
            "科考站",
            "外星生命"
        ]
    },
    {
        "title": "清醒梦之马桶睡美人",
        "url": "./movies/movie-1054.html",
        "cover": "./4.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻、喜剧、悬疑",
        "category": "热播剧集",
        "summary": "女设计师一旦坐在公司马桶上就会进入童话梦境，但她发现梦里总有一具尸体。",
        "tags": [
            "清醒梦",
            "荒诞",
            "职场减压",
            "脑洞"
        ]
    },
    {
        "title": "白雪公主：恐怖故事",
        "url": "./movies/movie-1055.html",
        "cover": "./5.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "恐怖 / 奇幻 / 童话改编",
        "category": "经典回看",
        "summary": "王子吻醒白雪公主后，发现公主的身体里住着另一个嗜血的灵魂——皇后。",
        "tags": [
            "哥特",
            "身体恐怖",
            "猎奇",
            "女王",
            "镜子"
        ]
    },
    {
        "title": "摄氏32度国语",
        "url": "./movies/movie-1056.html",
        "cover": "./6.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "category": "悬疑犯罪",
        "summary": "这座城市连续7天气温超过32度，每升高一度，就多一个人离奇死亡。",
        "tags": [
            "高温",
            "连环杀人",
            "心理变态",
            "国语配音",
            "都市传说"
        ]
    },
    {
        "title": "三生三世十里桃花2017",
        "url": "./movies/movie-1057.html",
        "cover": "./7.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 奇幻, 古装",
        "category": "热播剧集",
        "summary": "青丘女帝白浅与天族太子夜华，历经三生三世的爱恨纠葛。",
        "tags": [
            "仙侠",
            "三世虐恋",
            "杨洋",
            "刘亦菲"
        ]
    },
    {
        "title": "艳后干戈",
        "url": "./movies/movie-1058.html",
        "cover": "./8.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆 / 古装架空",
        "type": "剧集",
        "genre": "历史虚构, 战争, 宫斗",
        "category": "热播剧集",
        "summary": "两位最强的女将军被迫嫁给同一个男人，却在洞房夜联手废了昏君，然后开始互夺江山。",
        "tags": [
            "女帝",
            "双女主",
            "权谋",
            "冷兵器"
        ]
    },
    {
        "title": "雀圣2自摸天后",
        "url": "./movies/movie-1059.html",
        "cover": "./9.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 运动",
        "category": "高清电影",
        "summary": "家庭主妇靠麻将绝技挑战江湖，却发现最大的对手是丈夫的尊严。",
        "tags": [
            "麻将",
            "逆袭",
            "女性",
            "喜剧"
        ]
    },
    {
        "title": "极主夫道 电影版",
        "url": "./movies/movie-1060.html",
        "cover": "./10.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "喜剧 / 动作 / 家庭",
        "category": "经典回看",
        "summary": "前最凶黑道，现全职主夫。这次他要守护的不是地盘，而是女儿幼儿园的“亲子便当日”。",
        "tags": [
            "黑道",
            "主夫",
            "反差萌",
            "家务",
            "爆笑"
        ]
    },
    {
        "title": "幻体：续命游戏",
        "url": "./movies/movie-1061.html",
        "cover": "./11.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 惊悚",
        "category": "悬疑犯罪",
        "summary": "富豪将意识移植到年轻克隆体，却发现身体原主人的记忆如寄生虫般苏醒。",
        "tags": [
            "意识转移",
            "永生",
            "伦理",
            "反转",
            "高科技"
        ]
    },
    {
        "title": "金臂小子",
        "url": "./movies/movie-1062.html",
        "cover": "./12.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 喜剧 / 运动",
        "category": "动作奇幻",
        "summary": "一名没天赋的小球员装上了失落的仿生机械臂，却把棒球打成了杀人武器。",
        "tags": [
            "棒球",
            "机械臂",
            "逆袭",
            "讽刺",
            "科幻"
        ]
    },
    {
        "title": "特命!警视厅特别会计员",
        "url": "./movies/movie-1063.html",
        "cover": "./13.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "职场 / 刑侦 / 喜剧",
        "category": "爱情喜剧",
        "summary": "警视厅派了一个只会算账的会计去最乱来的搜查一课，她用发票和预算表揪出了内鬼。",
        "tags": [
            "会计破案",
            "经费审计",
            "官僚讽刺"
        ]
    },
    {
        "title": "夏有乔木 雅望天堂",
        "url": "./movies/movie-1064.html",
        "cover": "./14.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情青春",
        "category": "经典回看",
        "summary": "舒雅望同时被青梅竹马和孤僻少年深爱，一段三角恋最终以枪声和鲜血终结。",
        "tags": [
            "虐恋",
            "校园",
            "暗黑系",
            "悲剧美学"
        ]
    },
    {
        "title": "与君别",
        "url": "./movies/movie-1065.html",
        "cover": "./15.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 爱情, 历史",
        "category": "动作奇幻",
        "summary": "一封从未寄出的信，让她在七十年的等待后，终于与记忆中的他正式告别。",
        "tags": [
            "民国",
            "诀别",
            "家国情怀",
            "替身"
        ]
    },
    {
        "title": "牙狼：魔戒战记",
        "url": "./movies/movie-1066.html",
        "cover": "./16.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "日本",
        "type": "TV系列",
        "genre": "动作，奇幻，特摄",
        "category": "动作奇幻",
        "summary": "金色骑士牙狼再次归来，这一次他要面对的不仅是在人间潜伏百年的魔兽，还有内心的黑暗。",
        "tags": [
            "暗黑英雄",
            "魔戒骑士",
            "霍拉",
            "铠甲",
            "成人向"
        ]
    },
    {
        "title": "降世神通：科拉传奇第二季",
        "url": "./movies/movie-1067.html",
        "cover": "./17.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "动画剧集 (14集)",
        "genre": "动画、奇幻、动作、冒险",
        "category": "热播剧集",
        "summary": "当南气和国的精神平衡被打破，神通科拉必须踏入危险的灵界，解开第一任神通“万”的秘密，以阻止世界陷入永恒的黑暗。",
        "tags": [
            "神鬼平衡",
            "灵界冒险",
            "神通起源",
            "史诗拓展"
        ]
    },
    {
        "title": "秘密警察",
        "url": "./movies/movie-1068.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 犯罪",
        "category": "最新电视剧",
        "summary": "1996年寒冬，一名潜伏在黑帮内部的秘密警察发现，自己最信任的线人竟是警队高层安插的另一枚棋子。",
        "tags": [
            "卧底",
            "内鬼",
            "1990年代",
            "兄弟情"
        ]
    },
    {
        "title": "海角恋人",
        "url": "./movies/movie-1069.html",
        "cover": "./19.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情, 偶像",
        "category": "爱情喜剧",
        "summary": "被家族抛弃的富二代在海角民宿当打工仔，与脾气火爆的渔村少女从互怼到相爱。",
        "tags": [
            "海岛",
            "治愈",
            "创业",
            "富二代",
            "海滨"
        ]
    },
    {
        "title": "古屋怪人",
        "url": "./movies/movie-1070.html",
        "cover": "./20.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "剧集",
        "genre": "恐怖 / 悬疑 / 哥特",
        "category": "经典回看",
        "summary": "一座与世隔绝的维多利亚式古宅里，每个房间的墙纸后面，都藏着一张前房客的脸。",
        "tags": [
            "维多利亚式恐怖",
            "家族诅咒",
            "宅邸怪谈"
        ]
    },
    {
        "title": "致命来信",
        "url": "./movies/movie-1071.html",
        "cover": "./21.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚、悬疑、犯罪",
        "category": "家庭剧情",
        "summary": "一名过气女记者收到一封已死连环杀手寄来的信，信上说：“我选你当我的下一任继承人。”",
        "tags": [
            "信件",
            "连环杀手",
            "复仇",
            "模仿犯",
            "双胞胎"
        ]
    },
    {
        "title": "只有勇敢的人知道地狱",
        "url": "./movies/movie-1072.html",
        "cover": "./22.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 冒险",
        "category": "爱情喜剧",
        "summary": "八名洞穴探险者被困在地下两千米处，唯一的出路需要潜水通过一条从未被完整测绘的水下通道。",
        "tags": [
            "洞穴探险",
            "真实事件改编",
            "生存",
            "幽闭恐惧"
        ]
    },
    {
        "title": "毕卡索之谜",
        "url": "./movies/movie-1073.html",
        "cover": "./23.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "悬疑 / 剧情",
        "category": "经典回看",
        "summary": "一幅遗失的毕卡索画作重见天日，却牵引出一场跨越半个世纪的艺术界谋杀骗局。",
        "tags": [
            "艺术犯罪",
            "天才侦探",
            "画作谜题"
        ]
    },
    {
        "title": "猴掌",
        "url": "./movies/movie-1074.html",
        "cover": "./24.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "category": "亚洲精选",
        "summary": "一位贫穷的父亲得到了能实现三个愿望的猴掌，但每一次愿望的实现，都以更残酷的死亡为代价。",
        "tags": [
            "经典改编",
            "愿望代价",
            "家庭悲剧",
            "心理恐惧",
            "超自然"
        ]
    },
    {
        "title": "行动代号拿破仑",
        "url": "./movies/movie-1075.html",
        "cover": "./25.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "冰岛",
        "type": "电影",
        "genre": "动作，悬疑，冒险",
        "category": "亚洲精选",
        "summary": "冰岛海岸惊现二战坠机，一名女律师和一名前军人卷入一场关乎世界新秩序的密码争夺战。",
        "tags": [
            "二战",
            "纳粹宝藏",
            "冰岛",
            "冷战后",
            "解码"
        ]
    },
    {
        "title": "犯罪辅导员",
        "url": "./movies/movie-1076.html",
        "cover": "./26.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑，犯罪",
        "category": "悬疑犯罪",
        "summary": "一个失意律师伪装成高中生课外辅导员，潜入校园调查一桩离奇的学生坠楼案。",
        "tags": [
            "辅导",
            "犯罪",
            "伪装",
            "心理"
        ]
    },
    {
        "title": "凤凰号",
        "url": "./movies/movie-1077.html",
        "cover": "./27.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "美国 / 澳大利亚",
        "type": "电影",
        "genre": "冒险 / 灾难",
        "category": "亚洲精选",
        "summary": "一架货运飞机坠毁在戈壁滩，幸存者用残骸拼凑出一艘“沙漠船”，却发现唯一能修好它的人是个骗子。",
        "tags": [
            "空难",
            "沙漠",
            "团队",
            "求生"
        ]
    },
    {
        "title": "威普：我的超人兄弟",
        "url": "./movies/movie-1078.html",
        "cover": "./28.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 剧情 / 动作",
        "category": "经典回看",
        "summary": "当拥有神力的弟弟成为全球焦点，平凡的哥哥决定亲手揭开“超人”背后残酷的军方实验真相。",
        "tags": [
            "兄弟情",
            "超能力",
            "伦理抉择",
            "社会压迫"
        ]
    },
    {
        "title": "拜托了！别宠我第五季",
        "url": "./movies/movie-1079.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情, 喜剧, 古装",
        "category": "最新电视剧",
        "summary": "颜一一回到现实世界后，发现段王爷竟然也跟着穿越了，但他变成了她的顶头上司。",
        "tags": [
            "甜宠",
            "穿书",
            "反套路",
            "完结季"
        ]
    },
    {
        "title": "自由如夜",
        "url": "./movies/movie-1080.html",
        "cover": "./30.jpg",
        "year": "1968",
        "yearNumber": 1968,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "家庭剧情",
        "summary": "1968年“五月风暴”前夜，一个富家女和一个印刷工在巴黎街头因一本禁书相遇，燃起如黑夜般自由的爱情。",
        "tags": [
            "五月风暴",
            "存在主义",
            "黑白片"
        ]
    },
    {
        "title": "亡者之妻第二季",
        "url": "./movies/movie-1081.html",
        "cover": "./31.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑惊悚",
        "category": "经典回看",
        "summary": "上一季假死的丈夫真的复活归来，却发现妻子已经继承了家族企业，并正在用他的方式对付那些仇人。",
        "tags": [
            "反转",
            "复仇",
            "心理战",
            "高能",
            "女性"
        ]
    },
    {
        "title": "好莱坞妈妈的奥秘",
        "url": "./movies/movie-1082.html",
        "cover": "./32.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集/纪录片",
        "genre": "剧情 / 悬疑 / 家庭",
        "category": "动作奇幻",
        "summary": "过气童星调查母亲失踪案，意外发现好莱坞“明星妈妈”背后的地下代孕与身份买卖链条。",
        "tags": [
            "童星",
            "代孕",
            "娱乐圈黑幕",
            "母女关系",
            "名利场"
        ]
    },
    {
        "title": "境界线上的地平线第二季",
        "url": "./movies/movie-1083.html",
        "cover": "./33.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "TV动画剧集",
        "genre": "科幻 / 奇幻 / 战斗 / 后宫",
        "category": "经典回看",
        "summary": "在重现了中世纪欧洲的空中都市“武藏”，各势力为争夺“前地球文明遗产”展开全面战争。",
        "tags": [
            "中世纪重现",
            "空中都市",
            "政治博弈",
            "群像剧",
            "轻改"
        ]
    },
    {
        "title": "喵有卵用第三季",
        "url": "./movies/movie-1084.html",
        "cover": "./34.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "动画",
        "genre": "搞笑，日常",
        "category": "悬疑犯罪",
        "summary": "社畜肥猫“大橘”为了拿到年终奖“无限小鱼干”，被迫在总裁布偶猫的压榨下穿越时空去孵恐龙蛋。",
        "tags": [
            "拟人",
            "职场",
            "猫奴",
            "吐槽"
        ]
    },
    {
        "title": "重阳奇妙游2022",
        "url": "./movies/movie-1085.html",
        "cover": "./35.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "综艺/特别节目",
        "genre": "文化，舞台艺术",
        "category": "热播剧集",
        "summary": "一场没有主持人的重阳晚会，用七个节目串起登高、赏菊、敬老、思乡四重意境，全网泪目。",
        "tags": [
            "传统节日",
            "国风",
            "实景演出",
            "敬老"
        ]
    },
    {
        "title": "梅林与龙之战",
        "url": "./movies/movie-1086.html",
        "cover": "./36.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "category": "热播剧集",
        "summary": "在成为伟大魔法师之前，年轻的梅林必须打败他曾经最亲密的挚友——一条被黑暗侵蚀的巨龙。",
        "tags": [
            "史诗特效",
            "魔法对决",
            "暗黑美学"
        ]
    },
    {
        "title": "天眼浩劫",
        "url": "./movies/movie-1087.html",
        "cover": "./37.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "剧集",
        "genre": "科幻/惊悚",
        "category": "家庭剧情",
        "summary": "能预测犯罪的“天眼”系统突然开始诬陷无辜平民，而发明者早已死亡十年。",
        "tags": [
            "监控社会",
            "AI",
            "预言",
            "反抗军"
        ]
    },
    {
        "title": "失忆十分钟",
        "url": "./movies/movie-1088.html",
        "cover": "./38.jpg",
        "year": "2029",
        "yearNumber": 2029,
        "region": "美国",
        "type": "电影",
        "genre": "动作、悬疑",
        "category": "动作奇幻",
        "summary": "每十分钟重启一次记忆的特工，必须在下一个“清醒”周期里，杀死昨天的自己。",
        "tags": [
            "逆行叙事",
            "特工",
            "记忆芯片"
        ]
    },
    {
        "title": "天上掉下来的礼物",
        "url": "./movies/movie-1089.html",
        "cover": "./39.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 家庭",
        "category": "家庭剧情",
        "summary": "一名冷漠的上班族在圣诞夜捡到一个自称是他“未来女儿”的天使，被迫学习如何当爸爸。",
        "tags": [
            "催泪",
            "亲子",
            "圣诞节",
            "天使",
            "温情"
        ]
    },
    {
        "title": "军妓爱茜",
        "url": "./movies/movie-1090.html",
        "cover": "./40.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "历史 / 战争",
        "category": "动作奇幻",
        "summary": "1944年缅甸战场，一名朝鲜慰安妇在日军败退后，独自追击逃跑的施暴者三百公里。",
        "tags": [
            "慰安妇",
            "女性",
            "复仇",
            "真实改编"
        ]
    },
    {
        "title": "花花万物第二季",
        "url": "./movies/movie-1091.html",
        "cover": "./41.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "台湾",
        "type": "综艺",
        "genre": "脱口秀 / 访谈 / 娱乐",
        "category": "热播剧集",
        "summary": "明星带来闲置物品进行断舍离，每一件私物背后都是一段不想让人知道的八卦。",
        "tags": [
            "断舍离",
            "明星私物",
            "犀利主持",
            "二手拍卖"
        ]
    },
    {
        "title": "巨轮2粤语",
        "url": "./movies/movie-1092.html",
        "cover": "./42.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "家族商战",
        "category": "环球片库",
        "summary": "新一代赌王在公海巨轮上重振家业，却发现自己最信任的弟弟是仇家的卧底。",
        "tags": [
            "粤语原声",
            "赌船",
            "豪门恩怨",
            "兄弟反目"
        ]
    },
    {
        "title": "一位站立的人",
        "url": "./movies/movie-1093.html",
        "cover": "./43.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "印度",
        "type": "电影",
        "genre": "剧情，励志",
        "category": "动作奇幻",
        "summary": "一场事故夺走他的双腿，他用双手在法庭上“站立”十年，只为讨回一个道歉。",
        "tags": [
            "真实改编",
            "残疾",
            "抗争"
        ]
    },
    {
        "title": "戏杀",
        "url": "./movies/movie-1094.html",
        "cover": "./44.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑犯罪",
        "category": "最新电视剧",
        "summary": "大雪封门，名伶死在舞台上，戏班子里每个人都是演员，每个人也都是侦探。",
        "tags": [
            "民国",
            "京剧",
            "密室"
        ]
    },
    {
        "title": "一起露营吧",
        "url": "./movies/movie-1095.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚, 冒险",
        "category": "动作奇幻",
        "summary": "六位网红去无人区露营直播，却发现营地周围总多出一顶帐篷，而且直播间的观众数始终是“404”。",
        "tags": [
            "荒野",
            "直播",
            "网络暴力"
        ]
    },
    {
        "title": "我跟总统的女儿约会",
        "url": "./movies/movie-1096.html",
        "cover": "./46.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧, 爱情, 剧情",
        "category": "最新电视剧",
        "summary": "一名普通的大学生被选中假扮总统女儿的男友，却意外卷入了一场颠覆国家的政治阴谋。",
        "tags": [
            "政治喜剧",
            "身份错位",
            "青瓦台"
        ]
    },
    {
        "title": "莉莉与凯特",
        "url": "./movies/movie-1097.html",
        "cover": "./47.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "爱情， 同性",
        "category": "爱情喜剧",
        "summary": "两个同名的女孩在各自婚礼前夜落跑，拼车踏上寻找“理想自我”的逃亡之旅。",
        "tags": [
            "公路",
            "成长",
            "救赎",
            "青春"
        ]
    },
    {
        "title": "瓦尼塔斯的笔记第二季",
        "url": "./movies/movie-1098.html",
        "cover": "./48.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "动画",
        "genre": "奇幻 / 吸血鬼 / 冒险 / 悬疑",
        "category": "经典回看",
        "summary": "当“诅咒之名”开始吞噬无辜吸血鬼，瓦尼塔斯与诺埃必须追到禁忌之书的最深处，才能阻止一场以爱情和记忆为代价的灾厄。",
        "tags": [
            "蒸汽巴黎",
            "血之咒印",
            "人偶师",
            "双主角",
            "黑暗浪漫"
        ]
    },
    {
        "title": "挚爱男行",
        "url": "./movies/movie-1099.html",
        "cover": "./49.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "category": "高清电影",
        "summary": "钢铁直男为追女神报名“男友速成班”，却发现自己的教官是一位男同性恋。",
        "tags": [
            "直男改造",
            "反差萌",
            "假戏真做"
        ]
    },
    {
        "title": "将来的事",
        "url": "./movies/movie-1100.html",
        "cover": "./50.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 哲学",
        "category": "热播剧集",
        "summary": "一名哲学女教授在一年内同时遭遇母亲去世、丈夫出轨和出版社解约，她开始重新审视自由。",
        "tags": [
            "中年危机",
            "哲学教授",
            "出轨",
            "存在主义"
        ]
    },
    {
        "title": "报告班长4拂晓出击",
        "url": "./movies/movie-1101.html",
        "cover": "./51.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "category": "热播剧集",
        "summary": "菜鸟班长遇上刺头新兵，眼看就要退伍，却在最后一次演习中遭遇真实恐怖分子袭击。",
        "tags": [
            "军教片",
            "搞笑",
            "热血",
            "兄弟情"
        ]
    },
    {
        "title": "筋肉人完美超人始祖篇",
        "url": "./movies/movie-1102.html",
        "cover": "./52.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "动漫",
        "genre": "热血 / 动作 / 科幻 / 运动",
        "category": "经典回看",
        "summary": "为了拯救被邪恶超人侵袭的地球，废柴超人筋肉人踏上了寻找传说中的“完美超人始祖”的征途。",
        "tags": [
            "重制版",
            "摔跤",
            "超级英雄",
            "王道热血"
        ]
    },
    {
        "title": "末日之果",
        "url": "./movies/movie-1103.html",
        "cover": "./53.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 剧情, 悬疑",
        "category": "环球片库",
        "summary": "丧尸病毒爆发十年后，人类建立避难所，却发现丧尸开始进化出智慧、语言和社会，它们要求谈判，瓜分地球。",
        "tags": [
            "末世",
            "宗教寓言",
            "丧尸变种",
            "哲学",
            "反套路"
        ]
    },
    {
        "title": "小麦的囤积",
        "url": "./movies/movie-1104.html",
        "cover": "./54.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 心理",
        "category": "动作奇幻",
        "summary": "母亲死后，女儿发现谷仓里囤积的不是小麦，而是三十年的秘密。",
        "tags": [
            "囤积症",
            "母女关系",
            "乡村",
            "农业危机"
        ]
    },
    {
        "title": "三个老婆",
        "url": "./movies/movie-1105.html",
        "cover": "./55.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "印度",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "悬疑犯罪",
        "summary": "穷光蛋突然继承遗产，条件是他必须同时供养三位互不知情的老婆，且住在同一栋楼里。",
        "tags": [
            "一夫多妻",
            "遗产",
            "荒诞"
        ]
    },
    {
        "title": "椭圆形盘旋",
        "url": "./movies/movie-1106.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情, 科幻, 悬疑",
        "category": "动作奇幻",
        "summary": "一位女宇航员在空间站独自执行任务时，发现空间站的椭圆轨道每天都在向她展示地球上一个越来越大的陌生裂痕。",
        "tags": [
            "空间站",
            "心理惊悚",
            "记忆",
            "孤独"
        ]
    },
    {
        "title": "有夫之妇",
        "url": "./movies/movie-1107.html",
        "cover": "./57.jpg",
        "year": "1987",
        "yearNumber": 1987,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 爱情, 伦理",
        "category": "亚洲精选",
        "summary": "已婚女子陷入昔日恋人的温柔陷阱，在责任与欲望之间撕扯出无法回头的深渊。",
        "tags": [
            "禁忌恋",
            "女性觉醒",
            "婚姻困境",
            "三角关系"
        ]
    },
    {
        "title": "无主之花",
        "url": "./movies/movie-1108.html",
        "cover": "./58.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "古装, 爱情, 悬疑",
        "category": "经典回看",
        "summary": "被囚禁的废妃死而复生，以新身份回宫后，每个旧人都收到一朵枯萎的花。",
        "tags": [
            "宫廷",
            "替身",
            "权谋",
            "秘密书信"
        ]
    },
    {
        "title": "巴兰吉加：咆啸的荒野",
        "url": "./movies/movie-1109.html",
        "cover": "./59.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "菲律宾",
        "type": "电影",
        "genre": "战争， 动作",
        "category": "悬疑犯罪",
        "summary": "二战太平洋战场最血腥的32天，500名菲律宾游击队对抗两万日军，弹尽粮绝，但他们选择咆啸。",
        "tags": [
            "丛林战",
            "游击抵抗",
            "真实事件改编"
        ]
    },
    {
        "title": "疯狂电视台疯电影",
        "url": "./movies/movie-1110.html",
        "cover": "./60.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧, 讽刺",
        "category": "爱情喜剧",
        "summary": "濒临倒闭的电视台为了骗最后一笔广告费，决定直播一场“意外死亡”，结果所有意外都成真了。",
        "tags": [
            "电视圈",
            "荒诞",
            "直播事故",
            "职场",
            "黑色幽默"
        ]
    },
    {
        "title": "光阴的传说",
        "url": "./movies/movie-1111.html",
        "cover": "./61.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "奇幻、家庭",
        "category": "家庭剧情",
        "summary": "一座老宅里的挂钟，能让敲钟者回到过去任何一天，但每次回去都会加速衰老一年。",
        "tags": [
            "时间",
            "祖孙",
            "老宅",
            "治愈",
            "慢节奏"
        ]
    },
    {
        "title": "盛夏汁爱",
        "url": "./movies/movie-1112.html",
        "cover": "./62.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "泰国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "亚洲精选",
        "summary": "两个失意的男孩在山竹果园打工，一个负责采摘，一个负责酿造果汁，他们决定酿出一种代表“离别”的味道。",
        "tags": [
            "夏日",
            "水果",
            "同性"
        ]
    },
    {
        "title": "外交风云2019",
        "url": "./movies/movie-1113.html",
        "cover": "./63.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 历史, 政治",
        "category": "热播剧集",
        "summary": "一场改变世界格局的贸易谈判前夕，年轻译员发现自己手中的文件暗藏致命陷阱。",
        "tags": [
            "外交",
            "博弈",
            "真实事件改编",
            "群像"
        ]
    },
    {
        "title": "宝石商人理查德的谜鉴定",
        "url": "./movies/movie-1114.html",
        "cover": "./64.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑，日常",
        "category": "悬疑犯罪",
        "summary": "美貌的宝石商人与正义感爆棚的大学生，透过每颗宝石背后隐藏的故事，揭示人心。",
        "tags": [
            "宝石",
            "推理",
            "人情冷暖",
            "美型"
        ]
    },
    {
        "title": "嗝嗝老师国语",
        "url": "./movies/movie-1115.html",
        "cover": "./65.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 教育",
        "category": "热播剧集",
        "summary": "她无法控制自己发出怪声，却成为了全校最差班级的最后希望。",
        "tags": [
            "妥瑞症",
            "励志",
            "师生",
            "翻拍"
        ]
    },
    {
        "title": "爱在心中",
        "url": "./movies/movie-1116.html",
        "cover": "./66.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "爱情 / 歌舞 / 剧情",
        "category": "爱情喜剧",
        "summary": "一个失聪的富家女和一个小儿麻痹症的街头舞者，用身体完成了一场无声的对唱。",
        "tags": [
            "聋哑",
            "舞蹈",
            "阶级",
            "治愈"
        ]
    },
    {
        "title": "高墙天堂",
        "url": "./movies/movie-1117.html",
        "cover": "./67.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "德国",
        "type": "电影",
        "genre": "剧情, 同性, 监狱",
        "category": "爱情喜剧",
        "summary": "重刑犯与狱医在监狱高墙内相爱，他们策划了一场不可能的越狱，却发现外面的世界才是真正的地狱。",
        "tags": [
            "监狱",
            "爱情",
            "救赎",
            "越狱",
            "禁忌"
        ]
    },
    {
        "title": "婚前21天 备婚日记",
        "url": "./movies/movie-1118.html",
        "cover": "./68.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 爱情",
        "category": "经典回看",
        "summary": "婚礼倒计时21天，新娘突然失踪，新郎翻出一本日记，才发现完美未婚妻背后藏着一地鸡毛。",
        "tags": [
            "婚前焦虑",
            "成长",
            "家庭",
            "写实"
        ]
    },
    {
        "title": "本末测评",
        "url": "./movies/movie-1119.html",
        "cover": "./69.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "综艺",
        "genre": "脱口秀/测评",
        "category": "家庭剧情",
        "summary": "一个试图测评万物本质的节目，最终却亲手模糊了真与假的边界。",
        "tags": [
            "网络综艺",
            "犀利吐槽",
            "社会实验",
            "消费主义",
            "黑色幽默"
        ]
    },
    {
        "title": "蓝色吉祥物",
        "url": "./movies/movie-1120.html",
        "cover": "./70.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "高清电影",
        "summary": "一个社恐年轻人穿上蓝色吉祥物服装在路边发传单，却意外成为小镇居民的情绪垃圾桶和英雄。",
        "tags": [
            "打工奇遇",
            "蓝色怪物",
            "温暖治愈"
        ]
    },
    {
        "title": "穿梭三千年",
        "url": "./movies/movie-1121.html",
        "cover": "./71.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "科幻、爱情",
        "category": "最新电视剧",
        "summary": "考古学家在三千年古墓中发现一具骸骨，DNA检测显示那是她的前世。",
        "tags": [
            "穿越",
            "考古",
            "商周",
            "虐恋"
        ]
    },
    {
        "title": "美色杀人狂",
        "url": "./movies/movie-1122.html",
        "cover": "./72.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 犯罪, 剧情",
        "category": "亚洲精选",
        "summary": "一名美艳不可方物的女杀手利用容貌诱捕猎物，却栽在唯一免疫她美貌的盲人侦探手上。",
        "tags": [
            "连环杀手",
            "心理战",
            "高智商犯罪",
            "性别反转"
        ]
    },
    {
        "title": "公主恋人",
        "url": "./movies/movie-1123.html",
        "cover": "./73.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "日本",
        "type": "动画",
        "genre": "爱情, 后宫",
        "category": "最新电视剧",
        "summary": "意外失去平民生活，成为顶级财阀继承人的少年，在贵族学院里开始了与大小姐们的恋爱日常。",
        "tags": [
            "贵族",
            "恋爱喜剧",
            "逆袭"
        ]
    },
    {
        "title": "大明嫔妃之反攻",
        "url": "./movies/movie-1124.html",
        "cover": "./74.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/宫斗",
        "category": "悬疑犯罪",
        "summary": "被打入冷宫的废妃重生归来，这一次她要让所有仇人跪在脚下求饶。",
        "tags": [
            "重生复仇",
            "姐妹反目",
            "权谋"
        ]
    },
    {
        "title": "情路急转弯",
        "url": "./movies/movie-1125.html",
        "cover": "./75.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "法国",
        "type": "电影",
        "genre": "爱情，喜剧",
        "category": "高清电影",
        "summary": "准新娘为了在婚礼前拿到离婚证明，不得不搭上极其讨厌的前男友的顺风车，穿越整个法国。",
        "tags": [
            "公路电影",
            "欢喜冤家",
            "婚前焦虑"
        ]
    },
    {
        "title": "在咖啡冷掉之前",
        "url": "./movies/movie-1126.html",
        "cover": "./76.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 剧情",
        "category": "亚洲精选",
        "summary": "一家可以回到过去的咖啡馆，但必须在咖啡冷掉之前回来。",
        "tags": [
            "咖啡馆",
            "时间旅行",
            "治愈",
            "座位规则"
        ]
    },
    {
        "title": "穿过黑云杉",
        "url": "./movies/movie-1127.html",
        "cover": "./77.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "加拿大",
        "type": "电影",
        "genre": "剧情, 冒险, 生存",
        "category": "动作奇幻",
        "summary": "叛逆的城市少女被送去与住在极寒森林里的原住民外婆生活，一场暴风雪后，她们必须徒步走出死亡黑云杉林。",
        "tags": [
            "荒野求生",
            "原住民文化",
            "母女和解"
        ]
    },
    {
        "title": "用九柑仔店",
        "url": "./movies/movie-1128.html",
        "cover": "./78.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情 / 治愈 / 家庭",
        "category": "爱情喜剧",
        "summary": "都市失意青年回乡接管快倒闭的柑仔店，发现店里的老物件都会“说话”。",
        "tags": [
            "怀旧",
            "杂货店",
            "返乡青年",
            "社区温情"
        ]
    },
    {
        "title": "画江湖之不良人",
        "url": "./movies/movie-1129.html",
        "cover": "./79.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "动画",
        "genre": "武侠/奇幻",
        "category": "高清电影",
        "summary": "第五季大结局，李星云终于坐上龙椅，但代价是解散不良人，亲手烧掉了不良旗。",
        "tags": [
            "第五季",
            "李星云称帝",
            "不良人解散",
            "终极一战",
            "国漫巅峰"
        ]
    },
    {
        "title": "忘忧铃",
        "url": "./movies/movie-1130.html",
        "cover": "./80.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "奇幻/爱情",
        "category": "爱情喜剧",
        "summary": "她发明了能删除痛苦记忆的“忘忧铃”，直到铃声响起，自己变成了未婚夫的陌生人。",
        "tags": [
            "失忆",
            "铃铛",
            "选择",
            "疗愈"
        ]
    },
    {
        "title": "超级乐8点",
        "url": "./movies/movie-1131.html",
        "cover": "./81.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "综艺节目",
        "genre": "真人秀、喜剧、音乐",
        "category": "爱情喜剧",
        "summary": "一档让过气歌手在深夜便利店为真实顾客即兴live的治愈综艺，但每期结尾都藏着一个惊天爆料。",
        "tags": [
            "音综",
            "整蛊",
            "怀旧",
            "即兴",
            "高能"
        ]
    },
    {
        "title": "人生胜利组",
        "url": "./movies/movie-1132.html",
        "cover": "./82.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "巴西",
        "type": "剧集",
        "genre": "剧情， 喜剧",
        "category": "动作奇幻",
        "summary": "里约贫民窟里，一对双胞胎兄弟因为一场意外交换了人生：一个成了足球明星，一个成了阶下囚。",
        "tags": [
            "贫民窟",
            "逆袭",
            "足球",
            "家庭"
        ]
    },
    {
        "title": "最爱出现了",
        "url": "./movies/movie-1133.html",
        "cover": "./83.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情、喜剧、奇幻",
        "category": "爱情喜剧",
        "summary": "三对即将分手的素人情侣参加恋爱综艺企图修复关系，谁知节目组请来的占卜师一语成谶，所有人的“最爱”都凭空出现了第四者。",
        "tags": [
            "恋爱综艺",
            "预言",
            "修罗场",
            "假戏真做"
        ]
    },
    {
        "title": "婚礼兄弟",
        "url": "./movies/movie-1134.html",
        "cover": "./84.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "category": "经典回看",
        "summary": "在哥哥的豪华婚礼前夜，吊儿郎当的弟弟不慎弄丢了祖传婚戒，必须在太阳升起前和死党找回戒指，否则家族秘密将曝光。",
        "tags": [
            "塑料兄弟情",
            "婚礼闹剧",
            "伴郎任务"
        ]
    },
    {
        "title": "超级情报员麦汉第二集",
        "url": "./movies/movie-1135.html",
        "cover": "./85.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 喜剧， 科幻",
        "category": "爱情喜剧",
        "summary": "情报员麦汉再次出击，这次他要阻止疯子科学家利用北极融冰释放古代病毒。",
        "tags": [
            "特工",
            "复古",
            "gadgets",
            "恶搞"
        ]
    },
    {
        "title": "抗颜为师",
        "url": "./movies/movie-1136.html",
        "cover": "./86.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "剧情教育",
        "category": "环球片库",
        "summary": "只有小学学历的老农被当成骗子赶出学校，二十年后，他带回一箱录取通知书重返故地。",
        "tags": [
            "乡村教师",
            "师生",
            "逆袭",
            "真实改编",
            "感人"
        ]
    },
    {
        "title": "小鹬初登场",
        "url": "./movies/movie-1137.html",
        "cover": "./87.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影 / 动画短片",
        "genre": "动画 / 家庭 / 冒险",
        "category": "动作奇幻",
        "summary": "一只害怕海浪的小鹬，在寄居蟹朋友的帮助下，发现了海底世界不可思议的美。",
        "tags": [
            "成长",
            "克服恐惧",
            "自然奇观",
            "无对白"
        ]
    },
    {
        "title": "废柴同盟",
        "url": "./movies/movie-1138.html",
        "cover": "./88.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 励志",
        "category": "家庭剧情",
        "summary": "一家即将倒闭的公司里，四个被全行笑话的“废柴”决定自己当老板，反杀整栋写字楼。",
        "tags": [
            "职场",
            "小人物",
            "港式无厘头",
            "团队合作"
        ]
    },
    {
        "title": "夏天的烦恼",
        "url": "./movies/movie-1139.html",
        "cover": "./89.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国",
        "type": "电影",
        "genre": "青春/家庭",
        "category": "动作奇幻",
        "summary": "高考前夕，优等生林夏意外发现母亲隐藏了二十年的秘密，她必须在真相与家庭的完整之间做出选择。",
        "tags": [
            "成长",
            "毕业季",
            "代际沟通"
        ]
    },
    {
        "title": "时空使徒 国语版",
        "url": "./movies/movie-1140.html",
        "cover": "./90.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "科幻, 悬疑, 冒险",
        "category": "环球片库",
        "summary": "未来世界，一群“使徒”专门修正时间线错误，却发现自己也是错误的一部分。",
        "tags": [
            "时空穿越",
            "使徒",
            "烧脑",
            "国漫崛起"
        ]
    },
    {
        "title": "完全疯了",
        "url": "./movies/movie-1141.html",
        "cover": "./91.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、惊悚、恐怖",
        "category": "经典回看",
        "summary": "一群为了流量不择手段的网红闯进废弃精神病院直播，却唤醒了真正的“院长”，他将网红们关进综艺游戏。",
        "tags": [
            "讽刺",
            "短视频",
            "网红",
            "血浆"
        ]
    },
    {
        "title": "之后4",
        "url": "./movies/movie-1142.html",
        "cover": "./92.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "爱情喜剧",
        "summary": "经历了背叛与分离，哈丁与泰莎在五年后意外重逢，却发现彼此早已面目全非。",
        "tags": [
            "虐恋",
            "成长",
            "分手",
            "重逢"
        ]
    },
    {
        "title": "站直啰！别趴下",
        "url": "./movies/movie-1143.html",
        "cover": "./93.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 励志",
        "category": "最新电视剧",
        "summary": "42岁的外卖大叔为给女儿筹医药费，报名参加职业拳击赛，第一轮对手是冠军。",
        "tags": [
            "民间拳手",
            "逆袭",
            "现实主义"
        ]
    },
    {
        "title": "边境风云",
        "url": "./movies/movie-1144.html",
        "cover": "./94.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 悬疑",
        "category": "热播剧集",
        "summary": "云南边境，一起绑架案牵出两代缉毒警与毒枭之间长达十年的恩怨，每个人都在命运的边境线上行走。",
        "tags": [
            "边境",
            "贩毒",
            "绑架",
            "宿命",
            "非线性"
        ]
    },
    {
        "title": "情如物证",
        "url": "./movies/movie-1145.html",
        "cover": "./95.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港 / 台湾",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 文艺",
        "category": "动作奇幻",
        "summary": "失明三十年的摄影师突然恢复部分视力，他看到的第一张照片，竟揭穿了女友虚构了一整年的甜蜜谎言。",
        "tags": [
            "盲人摄影师",
            "信任",
            "胶片",
            "旧情书"
        ]
    },
    {
        "title": "公主小马",
        "url": "./movies/movie-1146.html",
        "cover": "./96.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻 / 儿童 / 冒险",
        "category": "高清电影",
        "summary": "平凡女孩意外继承一匹能穿越时空的魔法小马，却要面对全校最严教导主任的围追堵截。",
        "tags": [
            "逆袭",
            "治愈",
            "动物变身",
            "校园",
            "成长"
        ]
    },
    {
        "title": "她嫁了个警察",
        "url": "./movies/movie-1147.html",
        "cover": "./97.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，爱情",
        "category": "动作奇幻",
        "summary": "新娘刚进婚礼教堂，新郎就被紧急调去卧底，三年后再次出现时已是黑帮二把手。",
        "tags": [
            "警嫂",
            "卧底",
            "绝地反击"
        ]
    },
    {
        "title": "宠物顽皮豹鹅卵石",
        "url": "./movies/movie-1148.html",
        "cover": "./98.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "动画",
        "genre": "动画， 儿童， 喜剧",
        "category": "热播剧集",
        "summary": "如果顽皮豹有一颗像鹅卵石一样的宠物石头，会发生怎样安静又抓狂的日常？",
        "tags": [
            "呆萌",
            "默片风格",
            "益智",
            "短篇集"
        ]
    },
    {
        "title": "一夜成名",
        "url": "./movies/movie-1149.html",
        "cover": "./99.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 音乐",
        "category": "最新电视剧",
        "summary": "五音不全的河北农民老赵，因为一段被恶意剪辑的“魔音贯耳”视频意外爆红，却在一夜顶流后陷入了全网围剿的荒诞闹剧。",
        "tags": [
            "网红",
            "小镇青年",
            "抄袭",
            "反向营销"
        ]
    },
    {
        "title": "顽皮豹：2有恶豹",
        "url": "./movies/movie-1150.html",
        "cover": "./100.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "动画电影",
        "genre": "喜剧 / 动作 / 冒险",
        "category": "高清电影",
        "summary": "一只自称“正经英雄”的顽皮豹卷入城市宝藏争夺战，却发现真正的恶豹竟藏在自己最信任的队伍里。",
        "tags": [
            "反英雄",
            "动物拟人",
            "城市追逐",
            "寻宝",
            "兄弟对抗"
        ]
    },
    {
        "title": "沙漠驼影",
        "url": "./movies/movie-1151.html",
        "cover": "./101.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "冒险 / 剧情",
        "category": "环球片库",
        "summary": "一名女子带着四只骆驼和一条狗，挑战穿越澳大利亚严酷的纳拉伯平原，只为寻找内心的平静。",
        "tags": [
            "传记",
            "女性",
            "沙漠",
            "自由"
        ]
    },
    {
        "title": "病毒2025",
        "url": "./movies/movie-1152.html",
        "cover": "./102.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "科幻 / 惊悚 / 灾难",
        "category": "最新电视剧",
        "summary": "一种通过Wi-Fi信号传播的听觉病毒爆发，感染者狂舞至死，聋哑人成了拯救人类的最后希望。",
        "tags": [
            "变异",
            "隔离",
            "阴谋",
            "跑酷"
        ]
    },
    {
        "title": "狙魔女杰 第二季",
        "url": "./movies/movie-1153.html",
        "cover": "./103.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "剧集",
        "genre": "动作，奇幻，恐怖",
        "category": "亚洲精选",
        "summary": "当天堂与地狱的停战协议被撕毁，这位身披圣痕的女枪手必须在七天内阻止末世审判。",
        "tags": [
            "恶魔猎人",
            "女性英雄",
            "宗教神话",
            "枪战",
            "血腥美学"
        ]
    },
    {
        "title": "羊魔杀",
        "url": "./movies/movie-1154.html",
        "cover": "./104.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，惊悚",
        "category": "爱情喜剧",
        "summary": "一群大学生到偏远牧场露营，惊动了当地村民信奉的“羊头神”，一场血腥祭典拉开帷幕。",
        "tags": [
            "邪教",
            "农村",
            "血腥",
            "复仇",
            "怪物"
        ]
    },
    {
        "title": "恶魔的尾巴",
        "url": "./movies/movie-1155.html",
        "cover": "./105.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "西班牙 / 墨西哥",
        "type": "电影",
        "genre": "恐怖 / 民俗 / 悬疑",
        "category": "热播剧集",
        "summary": "墨西哥乡村流传：新生儿长尾巴是恶魔转世，但一个母亲发现所有“长尾巴”的孩子都活不过七岁。",
        "tags": [
            "拉丁",
            "巫术",
            "诅咒",
            "尾巴"
        ]
    },
    {
        "title": "黑上帝白魔鬼",
        "url": "./movies/movie-1156.html",
        "cover": "./106.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "巴西",
        "type": "电影",
        "genre": "剧情 / 西部",
        "category": "经典回看",
        "summary": "巴西干旱腹地，一个黑奴解放者自称“上帝”，一个逃兵被当作“魔鬼”，两人联手对抗庄园主。",
        "tags": [
            "巴西腹地",
            "宗教狂热",
            "阶级对立",
            "史诗"
        ]
    },
    {
        "title": "狄小肆之幽冥飞狼",
        "url": "./movies/movie-1157.html",
        "cover": "./107.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国内地",
        "type": "电影",
        "genre": "悬疑 / 古装 / 动作",
        "category": "动作奇幻",
        "summary": "少年狄小肆初出茅庐，就遇上了专咬贪官喉咙的“幽冥飞狼”连环命案，这是妖术还是人心？",
        "tags": [
            "狄仁杰宇宙",
            "少年狄小肆",
            "狼人传说",
            "本格推理",
            "特效大片"
        ]
    },
    {
        "title": "忍者宝宝",
        "url": "./movies/movie-1158.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "挪威",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "category": "环球片库",
        "summary": "一个不想当妈的狂野少女，发现自己的子宫里住着一个“忍者宝宝”——一个无论如何都甩不掉的宿敌。",
        "tags": [
            "青春",
            "意外怀孕",
            "手绘动画",
            "成长"
        ]
    },
    {
        "title": "德州七勇士",
        "url": "./movies/movie-1159.html",
        "cover": "./109.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 西部， 冒险",
        "category": "经典回看",
        "summary": "七个从重刑犯监狱逃出来的亡命之徒，不是为了逃命，而是为了夺回被腐败警长抢走的镇民救命钱。",
        "tags": [
            "公路",
            "复仇",
            "枪战",
            "兄弟情",
            "边境"
        ]
    },
    {
        "title": "捉鬼有限公司",
        "url": "./movies/movie-1160.html",
        "cover": "./110.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "香港",
        "type": "网络剧",
        "genre": "喜剧, 灵异, 都市奇幻",
        "category": "悬疑犯罪",
        "summary": "一家挂在旧楼三楼的灵异公司接下第一单就红了，客户满意度却全是“差评”，因为他们不是要请公司放走魂魄，而是要公司帮他们清理账单中的不可见债务，生意与鬼门生意开始重叠成同一种账法。",
        "tags": [
            "招魂外包",
            "小企业生存",
            "家庭阴影",
            "黑市契约"
        ]
    },
    {
        "title": "似曾不相识",
        "url": "./movies/movie-1161.html",
        "cover": "./111.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 奇幻 / 悬疑",
        "category": "经典回看",
        "summary": "男人每天醒来都会忘记前一天，但一个陌生女人总在他的梦境里说：“我们明天见。”",
        "tags": [
            "失忆",
            "循环",
            "巴黎",
            "浪漫"
        ]
    },
    {
        "title": "一票混蛋",
        "url": "./movies/movie-1162.html",
        "cover": "./112.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 犯罪, 黑色幽默",
        "category": "爱情喜剧",
        "summary": "三伙素不相识的笨贼同时盯上了同一个富豪的别墅，结果富豪是个穷鬼，别墅里唯一的保险柜装着一只没中奖的彩票。",
        "tags": [
            "笨贼",
            "多线叙事",
            "疯狂",
            "荒诞",
            "方言"
        ]
    },
    {
        "title": "梁祝",
        "url": "./movies/movie-1163.html",
        "cover": "./113.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "电影",
        "genre": "爱情， 古装， 奇幻",
        "category": "家庭剧情",
        "summary": "新版梁祝中，祝英台是男扮女装进入男校的权贵之女，而梁山伯则是她眼中“最像女子”的温柔同窗。",
        "tags": [
            "民间传说",
            "性别反转",
            "书院",
            "蝴蝶"
        ]
    },
    {
        "title": "玛莉亚节",
        "url": "./movies/movie-1164.html",
        "cover": "./114.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情， 恐怖",
        "category": "爱情喜剧",
        "summary": "每年6月6日的“玛莉亚节”，岛上所有年满18岁的女孩都会失踪一晚，直到今年，有人跟着去了。",
        "tags": [
            "民俗",
            "宗教",
            "女性",
            "邪典"
        ]
    },
    {
        "title": "爱未知2017",
        "url": "./movies/movie-1165.html",
        "cover": "./115.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 科幻",
        "category": "高清电影",
        "summary": "女主接受记忆删除手术忘记渣男前男友，醒来后发现一本日记指控现在的完美丈夫就是当年那个渣男。",
        "tags": [
            "记忆删除",
            "反转爱情",
            "时间胶囊",
            "催泪"
        ]
    },
    {
        "title": "死神来了2国语",
        "url": "./movies/movie-1166.html",
        "cover": "./116.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "美国 / 中国大陆",
        "type": "电影",
        "genre": "惊悚 / 恐怖 / 灾难",
        "category": "亚洲精选",
        "summary": "一次看似侥幸逃过的高速连环车祸后，幸存者们发现“活下来”本身，才是死亡真正开始的方式。",
        "tags": [
            "死亡预兆",
            "连锁反应",
            "幸存者诅咒",
            "时间错位",
            "高压逃生"
        ]
    },
    {
        "title": "战鼓轻敲",
        "url": "./movies/movie-1167.html",
        "cover": "./117.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐 / 剧情",
        "category": "悬疑犯罪",
        "summary": "一个被学校劝退的城市问题少年，被送到西北农村跟一位老鼓手学“快要失传的鼓”，却发现老人敲的鼓点里藏着整个村庄的秘密。",
        "tags": [
            "鼓乐",
            "西北",
            "师徒",
            "非遗传承",
            "少年"
        ]
    },
    {
        "title": "生死缆车",
        "url": "./movies/movie-1168.html",
        "cover": "./118.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作，惊悚，灾难",
        "category": "最新电视剧",
        "summary": "一场突如其来的雪崩将一辆观光缆车困在千米高空，车厢内七人必须与断崖下的残暴狼群、以及即将断裂的钢缆赛跑。",
        "tags": [
            "高空",
            "密闭",
            "营救",
            "雪崩"
        ]
    },
    {
        "title": "凹凸世界第二季",
        "url": "./movies/movie-1169.html",
        "cover": "./119.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "动漫",
        "genre": "动作 / 科幻 / 冒险",
        "category": "环球片库",
        "summary": "凹凸大赛进入残酷的淘汰赛阶段，金与队友们不仅要对抗强敌，还必须揭开隐藏在赛制背后的创始者阴谋。",
        "tags": [
            "热血",
            "异能",
            "竞技",
            "战斗",
            "少年"
        ]
    },
    {
        "title": "至少是圣徒",
        "url": "./movies/movie-1170.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "西班牙 / 墨西哥",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "category": "经典回看",
        "summary": "一名被驱逐的神父回到腐败的边境小镇，他发现只有成为“圣徒”，才能惩治那些法律制裁不了的恶魔。",
        "tags": [
            "宗教",
            "罪案",
            "赎罪",
            "神秘主义"
        ]
    },
    {
        "title": "尤妮的婚途",
        "url": "./movies/movie-1171.html",
        "cover": "./121.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "category": "热播剧集",
        "summary": "小镇女孩尤妮为摆脱贫困走入婚姻，却发现这条路比想象中更孤独。",
        "tags": [
            "女性",
            "婚姻",
            "成长",
            "家庭"
        ]
    },
    {
        "title": "孤岛抗敌记",
        "url": "./movies/movie-1172.html",
        "cover": "./122.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "战争, 动作",
        "category": "动作奇幻",
        "summary": "1942年，一名落难的美军飞行员被东海孤岛上的中国渔民所救，他们必须联手对抗登岛搜捕的日军小分队。",
        "tags": [
            "太平洋战争",
            "孤岛求生",
            "抗日",
            "游击战",
            "渔民"
        ]
    },
    {
        "title": "对不起，仇家",
        "url": "./movies/movie-1173.html",
        "cover": "./123.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 犯罪",
        "category": "经典回看",
        "summary": "70岁的黑帮老大出狱后，挨家挨户找到当年被他伤害过的仇家，只为说一句“对不起”。",
        "tags": [
            "黑帮",
            "赎罪",
            "老年",
            "原谅"
        ]
    },
    {
        "title": "杀手公司2018",
        "url": "./movies/movie-1174.html",
        "cover": "./124.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 黑色喜剧",
        "category": "动作奇幻",
        "summary": "一家实行“996”和KPI考核的杀手公司，年度业绩最差者将被“降级”为客户的活靶子。",
        "tags": [
            "职场讽刺",
            "杀手社畜",
            "末位淘汰"
        ]
    },
    {
        "title": "水泥花园",
        "url": "./movies/movie-1175.html",
        "cover": "./125.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 心理",
        "category": "动作奇幻",
        "summary": "父母相继去世后，四个孩子为了不被拆散，用水泥把母亲的尸体封在了地下室，并假装一切正常。",
        "tags": [
            "哥特家庭",
            "兄妹畸恋",
            "社会隔离"
        ]
    },
    {
        "title": "第四名乘客",
        "url": "./movies/movie-1176.html",
        "cover": "./126.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑，犯罪，密室",
        "category": "最新电视剧",
        "summary": "一辆深夜出租车载着三名乘客撞死了一个人，但事后清点，车上包括司机在内只有四个人，那“第四名乘客”是谁？",
        "tags": [
            "暴风雪山庄",
            "全员恶人",
            "罗生门"
        ]
    },
    {
        "title": "傀儡生涯",
        "url": "./movies/movie-1177.html",
        "cover": "./127.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "剧集",
        "genre": "惊悚/剧情",
        "category": "环球片库",
        "summary": "一位心理学教授发现自己的记忆被植入，他过去三十年的人生可能只是一场虚构的实验。",
        "tags": [
            "洗脑",
            "心理操控",
            "悬疑",
            "人性"
        ]
    },
    {
        "title": "温柔女子1969",
        "url": "./movies/movie-1178.html",
        "cover": "./128.jpg",
        "year": "1969",
        "yearNumber": 1969,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "高清电影",
        "summary": "1968年五月风暴之后，一位看似柔弱的巴黎女子在婚姻与革命理想之间悄然崩断心弦。",
        "tags": [
            "女性",
            "心理惊悚",
            "时代悲剧"
        ]
    },
    {
        "title": "那个夏天",
        "url": "./movies/movie-1179.html",
        "cover": "./129.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "台湾",
        "type": "电影",
        "genre": "爱情 / 同性",
        "category": "经典回看",
        "summary": "中年男子回到故乡整理母亲遗物，发现一本日记揭开他“根本不存在的初恋”。",
        "tags": [
            "夏日恋情",
            "海边小镇",
            "记忆篡改"
        ]
    },
    {
        "title": "西蒙·里夫哥伦比亚之旅",
        "url": "./movies/movie-1180.html",
        "cover": "./130.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片，旅行",
        "category": "亚洲精选",
        "summary": "西蒙·里夫穿越哥伦比亚，从毒枭控制区到咖啡庄园，揭开魔幻现实背后。",
        "tags": [
            "西蒙·里夫",
            "哥伦比亚",
            "人文",
            "社会",
            "探险"
        ]
    },
    {
        "title": "制暴 印度版",
        "url": "./movies/movie-1181.html",
        "cover": "./131.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "动作，犯罪，剧情",
        "category": "悬疑犯罪",
        "summary": "一名女警长的女儿被高种姓富商虐杀，法律无法制裁罪犯，她选择用最原始的方式——以暴制暴。",
        "tags": [
            "热血警匪",
            "体制腐败",
            "女性复仇",
            "手撕反派"
        ]
    },
    {
        "title": "万有引力定律",
        "url": "./movies/movie-1182.html",
        "cover": "./132.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "科幻悬疑剧",
        "genre": "科幻,悬疑,惊悚,政治",
        "category": "悬疑犯罪",
        "summary": "一条故障公式在国际空间站里反复出现，像爱情方程式一样精准，它把三位科学家拉进比黑洞更深的政治交易。",
        "tags": [
            "引力共振",
            "国际空间站",
            "数据篡改",
            "失重救援",
            "时间悖论"
        ]
    },
    {
        "title": "致不会表达爱的人",
        "url": "./movies/movie-1183.html",
        "cover": "./133.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "经典回看",
        "summary": "儿子在整理父亲遗物时，发现了一箱从未寄出的信，收件人都是曾与父亲有过过节的人。",
        "tags": [
            "书信",
            "和解",
            "父子",
            "临终",
            "温情"
        ]
    },
    {
        "title": "埃及王子",
        "url": "./movies/movie-1184.html",
        "cover": "./134.jpg",
        "year": "1998",
        "yearNumber": 1998,
        "region": "美国",
        "type": "动画电影",
        "genre": "剧情，冒险，音乐",
        "category": "最新电视剧",
        "summary": "希伯来奴隶养大的埃及王子得知身世，必须在养育之恩与民族使命之间做出终极抉择。",
        "tags": [
            "圣经故事",
            "摩西",
            "兄弟反目",
            "梦工厂巅峰"
        ]
    },
    {
        "title": "僵尸复仇",
        "url": "./movies/movie-1185.html",
        "cover": "./135.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 动作 / 喜剧",
        "category": "亚洲精选",
        "summary": "黑帮大佬被害后，茅山师父将他炼成僵尸，但僵尸第一个要杀的竟是炼他的师父。",
        "tags": [
            "清朝僵尸",
            "黑帮复仇",
            "茅山术",
            "无厘头"
        ]
    },
    {
        "title": "简·奥斯汀毁了我的生活",
        "url": "./movies/movie-1186.html",
        "cover": "./136.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "爱情, 喜剧, 剧情",
        "category": "经典回看",
        "summary": "一位信奉“达西先生”的现代女孩，用奥斯汀恋爱法则实战，结果屡战屡败。",
        "tags": [
            "文学",
            "现代",
            "反套路",
            "女性"
        ]
    },
    {
        "title": "爱我",
        "url": "./movies/movie-1187.html",
        "cover": "./137.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "印度",
        "type": "电影",
        "genre": "爱情、科幻",
        "category": "最新电视剧",
        "summary": "低种姓女孩定制了一个完美AI男友，却发现AI比她更懂“爱”不属于特权。",
        "tags": [
            "AI恋人",
            "种姓制度",
            "虚拟现实"
        ]
    },
    {
        "title": "路柳墙花",
        "url": "./movies/movie-1188.html",
        "cover": "./138.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 文艺",
        "category": "家庭剧情",
        "summary": "两代“外卖女骑手”在送餐路上，意外交汇出一段跨越三十年的母女情仇。",
        "tags": [
            "女性",
            "公路",
            "追寻",
            "乡土",
            "命运"
        ]
    },
    {
        "title": "夏洛特时光",
        "url": "./movies/movie-1189.html",
        "cover": "./139.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "科幻， 爱情， 青春",
        "category": "爱情喜剧",
        "summary": "女孩发明了时间暂停手表，只为停在暗恋的男生身边。但每次暂停，她都会进入一个他爱着别人的平行宇宙。",
        "tags": [
            "时间循环",
            "暗恋",
            "毕业季",
            "平行时空"
        ]
    },
    {
        "title": "欲望北京之地上地下",
        "url": "./movies/movie-1190.html",
        "cover": "./140.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，爱情",
        "category": "动作奇幻",
        "summary": "三对在北京打拼的情侣，他们的爱情因一套房子而在地铁地上与地下之间发生翻天覆地的变化。",
        "tags": [
            "北漂",
            "都市情感",
            "现实",
            "挣扎"
        ]
    },
    {
        "title": "滑稽六人组",
        "url": "./movies/movie-1191.html",
        "cover": "./141.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 西部",
        "category": "动作奇幻",
        "summary": "六个性格迥异的怪胎被误认为是西部最悍的枪手，被迫假扮英雄对抗真正的悍匪。",
        "tags": [
            "群像喜剧",
            "西部恶搞",
            "草台班子"
        ]
    },
    {
        "title": "邮船谋杀案",
        "url": "./movies/movie-1192.html",
        "cover": "./142.jpg",
        "year": "1948",
        "yearNumber": 1948,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑， 犯罪， 黑色电影",
        "category": "悬疑犯罪",
        "summary": "一艘横渡大西洋的豪华邮轮上，一名富商在头等舱的密室中被杀，而所有乘客都有完美的不在场证明。",
        "tags": [
            "黑白片",
            "海上",
            "密室",
            "经典推理",
            "阿加莎风"
        ]
    },
    {
        "title": "等待幸福的每一天",
        "url": "./movies/movie-1193.html",
        "cover": "./143.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 生活",
        "category": "环球片库",
        "summary": "一个从东京逃回来的女人，在乡下开了一家“等客人自己想起来才营业”的杂货店。",
        "tags": [
            "治愈",
            "日常",
            "小镇",
            "慢节奏"
        ]
    },
    {
        "title": "神仙家庭",
        "url": "./movies/movie-1194.html",
        "cover": "./144.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "剧集",
        "genre": "奇幻 / 喜剧 / 家庭",
        "category": "悬疑犯罪",
        "summary": "天庭拆迁办小仙被贬下凡，必须让一户凡人家庭“自愿幸福”才能重返仙界。",
        "tags": [
            "神仙下凡",
            "婆媳关系",
            "法力危机"
        ]
    },
    {
        "title": "森林小丑",
        "url": "./movies/movie-1195.html",
        "cover": "./145.jpg",
        "year": "1968",
        "yearNumber": 1968,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情, 战争",
        "category": "家庭剧情",
        "summary": "原本是马戏团小丑的犹太人被抓进集中营，为了让孩子活下来，他在通往毒气室的路上表演了一年的杂耍。",
        "tags": [
            "二战",
            "马戏团",
            "童话",
            "悲伤"
        ]
    },
    {
        "title": "末代天师粤语",
        "url": "./movies/movie-1196.html",
        "cover": "./146.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "奇幻 / 恐怖",
        "category": "亚洲精选",
        "summary": "香港回归前夜，最后一代天师发现僵尸病毒爆发，而源头竟然是英国殖民时期留下的一个诅咒古董。",
        "tags": [
            "僵尸",
            "粤语",
            "师徒"
        ]
    },
    {
        "title": "决战天门",
        "url": "./movies/movie-1197.html",
        "cover": "./147.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 奇幻",
        "category": "亚洲精选",
        "summary": "1927年，一张疑似《推背图》真迹的羊皮卷现世，引得多方势力闯入西南深山中的“天门”，寻找传说中通往昆仑墟的机关。",
        "tags": [
            "民国",
            "寻宝",
            "道家",
            "机关术",
            "冒险"
        ]
    },
    {
        "title": "魔鬼赛门",
        "url": "./movies/movie-1198.html",
        "cover": "./148.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "category": "高清电影",
        "summary": "一个叫赛门的孩子每晚都会接到同一个陌生电话，而电话那头的声音，似乎在一步步把整座小镇拖进深渊。",
        "tags": [
            "邪教",
            "失踪",
            "电话",
            "诅咒",
            "双重身份"
        ]
    },
    {
        "title": "爱在高处晕眩中",
        "url": "./movies/movie-1199.html",
        "cover": "./149.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "最新电视剧",
        "summary": "患有恐高症的清洁女工，爱上了在摩天大楼外墙上作业的蜘蛛人，她每天仰头看他，直到自己也站上了顶楼。",
        "tags": [
            "高空作业",
            "恐高症",
            "治愈",
            "文艺"
        ]
    },
    {
        "title": "长江妖姬",
        "url": "./movies/movie-1200.html",
        "cover": "./150.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 动作 / 冒险",
        "category": "经典回看",
        "summary": "1927年长江禁渔令下，一个船娘、一个洋人科学家和一条百年江豚，在三峡激流中对抗贪婪的鱼膏厂。",
        "tags": [
            "民国",
            "水怪",
            "环保"
        ]
    },
    {
        "title": "血战松毛岭",
        "url": "./movies/movie-1201.html",
        "cover": "./1.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争、历史、动作",
        "category": "家庭剧情",
        "summary": "长征前夕，三千红军战士在松毛岭血战七天七夜，以几乎全员阵亡的代价，为主力转移争取到最后一小时。",
        "tags": [
            "红军",
            "长征前最后一战",
            "阵地战",
            "残酷写实",
            "基层士兵群像"
        ]
    },
    {
        "title": "宝贝老板",
        "url": "./movies/movie-1202.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电视剧",
        "genre": "动画, 喜剧, 家庭",
        "category": "最新电视剧",
        "summary": "宝贝老板升职了，这次他要去幼儿园卧底，阻止一场由仓鼠策划的零食阴谋。",
        "tags": [
            "婴儿",
            "商战",
            "宠物公司",
            "萌系"
        ]
    },
    {
        "title": "利贝拉达再一颗",
        "url": "./movies/movie-1203.html",
        "cover": "./3.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "西班牙",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "category": "高清电影",
        "summary": "在一个禁止哭泣的小镇，每吃掉一颗神秘的红色果实，就能复活一个逝去的人。",
        "tags": [
            "诅咒果实",
            "食人魔",
            "暗黑童话"
        ]
    },
    {
        "title": "烈爱双生",
        "url": "./movies/movie-1204.html",
        "cover": "./4.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情、悬疑、同性",
        "category": "热播剧集",
        "summary": "一对双胞胎姐妹爱上同一个男人，但姐姐意外死亡后，妹妹整容成姐姐的样子，却发现男人早就知道。",
        "tags": [
            "双胞胎",
            "替身",
            "豪门",
            "姐妹夺爱"
        ]
    },
    {
        "title": "非人哉第二季",
        "url": "./movies/movie-1205.html",
        "cover": "./5.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "都市奇幻 / 搞笑日常 / 群像",
        "category": "热播剧集",
        "summary": "当神仙妖怪继续挤进同一栋写字楼，他们最大的难题不再是降妖除魔，而是迟到、报销和办公室社交。",
        "tags": [
            "神仙打工",
            "妖怪邻里",
            "单元喜剧",
            "现代生活",
            "反差萌"
        ]
    },
    {
        "title": "港湾第二季",
        "url": "./movies/movie-1206.html",
        "cover": "./6.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "美国 / 加拿大",
        "type": "剧集",
        "genre": "悬疑 / 奇幻 / 犯罪",
        "category": "热播剧集",
        "summary": "拥有超能力的“异人”们在小镇港湾继续上演着童话般的犯罪，而女警探的身世秘密正式浮出水面。",
        "tags": [
            "超自然",
            "小镇迷局",
            "双生子",
            "迷雾重重",
            "经典美剧"
        ]
    },
    {
        "title": "一条狗的使命",
        "url": "./movies/movie-1207.html",
        "cover": "./7.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "热播剧集",
        "summary": "一只导盲犬死后投胎成了流浪狗，它发现前前世的盲人主人正在利用它的后代进行骗保。",
        "tags": [
            "狗狗",
            "轮回",
            "治愈"
        ]
    },
    {
        "title": "飞哥大英雄",
        "url": "./movies/movie-1208.html",
        "cover": "./8.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作，喜剧，都市",
        "category": "最新电视剧",
        "summary": "一个外卖小哥被闪电击中后力大无穷，他用超能力干的第一件事是清理小区垃圾。",
        "tags": [
            "外卖员",
            "超级英雄",
            "草根",
            "正能量"
        ]
    },
    {
        "title": "挖井人的女儿",
        "url": "./movies/movie-1209.html",
        "cover": "./9.jpg",
        "year": "2011",
        "yearNumber": 2011,
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 爱情, 家庭",
        "category": "高清电影",
        "summary": "法国乡下的挖井人之女怀上了飞行员的孩子，男人却在二战中失踪，她独自守护着等待的希望。",
        "tags": [
            "普罗旺斯",
            "乡村爱情",
            "阶级差异",
            "法式浪漫"
        ]
    },
    {
        "title": "猎人游戏",
        "url": "./movies/movie-1210.html",
        "cover": "./10.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 冒险",
        "category": "热播剧集",
        "summary": "十名精英猎人被空投到无人岛猎杀“最危险猎物”——却发现他们才是猎物，猎物是一个带着女儿的女兵。",
        "tags": [
            "狩猎",
            "孤岛",
            "反杀",
            "女性力量"
        ]
    },
    {
        "title": "石花村",
        "url": "./movies/movie-1211.html",
        "cover": "./11.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 乡村",
        "category": "最新电视剧",
        "summary": "一个寸草不生的石头村，来了一位教孩子们“让石头开花”的老师。",
        "tags": [
            "扶贫",
            "留守儿童",
            "石头开花",
            "支教"
        ]
    },
    {
        "title": "作恶的父亲",
        "url": "./movies/movie-1212.html",
        "cover": "./12.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 犯罪, 家庭",
        "category": "动作奇幻",
        "summary": "女儿发现患阿尔茨海默症的父亲曾是一起电信诈骗案的元凶，而受害者就在隔壁病房。",
        "tags": [
            "父亲",
            "诈骗",
            "女儿",
            "救赎",
            "老年痴呆"
        ]
    },
    {
        "title": "44号孩子",
        "url": "./movies/movie-1213.html",
        "cover": "./13.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "悬疑, 惊悚, 历史",
        "category": "热播剧集",
        "summary": "在“没有犯罪”的苏联理想国里，一位秘密警察追查专杀儿童的“怪物”。",
        "tags": [
            "连环杀手",
            "苏联",
            "极权",
            "孤儿"
        ]
    },
    {
        "title": "天生行大运",
        "url": "./movies/movie-1214.html",
        "cover": "./14.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "香港",
        "type": "电影",
        "genre": "喜剧 / 奇幻",
        "category": "环球片库",
        "summary": "全香港最倒霉的男人突然被财神、衰神、爱神同时选中，好运爆炸却险象环生。",
        "tags": [
            "运势",
            "搞笑",
            "神仙打架",
            "小人物翻身"
        ]
    },
    {
        "title": "美国狼人在伦敦",
        "url": "./movies/movie-1215.html",
        "cover": "./15.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "恐怖、喜剧",
        "category": "高清电影",
        "summary": "两个美国背包客在英格兰荒野被狼人袭击后，其中一人在伦敦活了过来，却发现自己每到月圆就会变成“华尔街之狼”。",
        "tags": [
            "经典翻拍",
            "狼人",
            "伦敦",
            "黑色幽默",
            "身体恐怖"
        ]
    },
    {
        "title": "银之匙第二季",
        "url": "./movies/movie-1216.html",
        "cover": "./16.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动漫",
        "genre": "校园，治愈",
        "category": "爱情喜剧",
        "summary": "八轩勇吾在酪农科的第二年，不仅要面对小猪的成长，更要面对自己对未来的迷茫。",
        "tags": [
            "农业高中",
            "青春",
            "梦想",
            "酪农",
            "成长"
        ]
    },
    {
        "title": "侏罗纪进攻",
        "url": "./movies/movie-1217.html",
        "cover": "./17.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "category": "悬疑犯罪",
        "summary": "基因复活的恐龙逃离孤岛，对现代都市发动了一场毁灭性的进攻。",
        "tags": [
            "恐龙",
            "末世",
            "军事行动",
            "基因变异"
        ]
    },
    {
        "title": "相逢在雨中",
        "url": "./movies/movie-1218.html",
        "cover": "./18.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情，剧情",
        "category": "经典回看",
        "summary": "一个雨天，两把伞，三场错过——他们总在倾盆大雨中相遇，却从未看清彼此的脸。",
        "tags": [
            "雨中邂逅",
            "怀旧",
            "命运",
            "遗憾"
        ]
    },
    {
        "title": "晕基浪",
        "url": "./movies/movie-1219.html",
        "cover": "./19.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 喜剧, 同性",
        "category": "家庭剧情",
        "summary": "一个严重晕船的都市男在游轮上遇见了让他“晕人”的帅哥，两人展开一段摇晃又甜蜜的海上情缘。",
        "tags": [
            "晕船",
            "同志爱情",
            "海岛浪漫",
            "乌龙相遇"
        ]
    },
    {
        "title": "战火黎明",
        "url": "./movies/movie-1220.html",
        "cover": "./20.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争、历史、动作",
        "category": "经典回看",
        "summary": "1944年湘西，一支由逃兵和少年组成的杂牌军，必须在黎明前把一门哑火迫击炮送到前线。",
        "tags": [
            "抗日",
            "小分队",
            "迫击炮",
            "黎明"
        ]
    },
    {
        "title": "雷神魔傀",
        "url": "./movies/movie-1221.html",
        "cover": "./21.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "日本",
        "type": "特摄",
        "genre": "动作， 科幻， 奇幻",
        "category": "悬疑犯罪",
        "summary": "三个高中生在千年一遇的雷暴中，意外获得了古代雷神与魔傀的能量，变身为守护城市的雷电战士。",
        "tags": [
            "变身英雄",
            "皮套",
            "90年代",
            "童年回忆"
        ]
    },
    {
        "title": "大耳猴",
        "url": "./movies/movie-1222.html",
        "cover": "./22.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "俄罗斯",
        "type": "动画电影",
        "genre": "家庭 / 喜剧 / 奇幻",
        "category": "亚洲精选",
        "summary": "一只来自热带丛林、大耳朵的小猴子，在冰冷的俄罗斯小镇找到了最温暖的友谊。",
        "tags": [
            "苏联经典",
            "萌系",
            "友情",
            "治愈"
        ]
    },
    {
        "title": "过境",
        "url": "./movies/movie-1223.html",
        "cover": "./23.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国 / 法国",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "category": "亚洲精选",
        "summary": "一位德国边境警察发现，每天从他面前经过的叙利亚难民中，藏着三年前炸死他妻子的袭击者。",
        "tags": [
            "难民",
            "身份错位",
            "欧洲现状"
        ]
    },
    {
        "title": "追凶五十年",
        "url": "./movies/movie-1224.html",
        "cover": "./24.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪",
        "category": "高清电影",
        "summary": "一位退休老刑警，在生命的最后三年里，独自追查一桩跨越五十年的连环杀人案。",
        "tags": [
            "悬疑",
            "年代",
            "刑警",
            "冷案",
            "执念"
        ]
    },
    {
        "title": "爱的面包魂",
        "url": "./movies/movie-1225.html",
        "cover": "./25.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "台湾",
        "type": "电影",
        "genre": "爱情，喜剧",
        "category": "环球片库",
        "summary": "台式面包师遭遇法式甜点师情敌，为了爱情和面包，展开舌尖上的对决。",
        "tags": [
            "美食",
            "三角恋",
            "乡土",
            "法式",
            "PK"
        ]
    },
    {
        "title": "虎将歼霸战",
        "url": "./movies/movie-1226.html",
        "cover": "./26.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 战争 / 历史",
        "category": "高清电影",
        "summary": "明朝末年，两名情同手足的边关虎将，因一封伪造的叛国信而在万军阵前刀兵相向。",
        "tags": [
            "冷兵器",
            "兄弟反目",
            "沙场决战",
            "慢镜头砍杀"
        ]
    },
    {
        "title": "狐狸与猎狗",
        "url": "./movies/movie-1227.html",
        "cover": "./27.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪, 动作",
        "category": "环球片库",
        "summary": "他是警方卧底，他是黑帮杀手，从小一起长大的挚友，如今必须在枪口下决定谁生谁死。",
        "tags": [
            "卧底",
            "警匪",
            "兄弟情",
            "背叛",
            "追车"
        ]
    },
    {
        "title": "黑眉蚊",
        "url": "./movies/movie-1228.html",
        "cover": "./28.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑、惊悚、剧情",
        "category": "热播剧集",
        "summary": "西南深山一座与世隔绝的村庄里，被黑眉蚊叮咬过的人，都会看见自己最深的罪恶。",
        "tags": [
            "乡村怪谈",
            "心理恐惧",
            "人性考验"
        ]
    },
    {
        "title": "元敬",
        "url": "./movies/movie-1229.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "历史, 动作, 政治",
        "category": "爱情喜剧",
        "summary": "朝鲜王朝开国君主李成桂之妻元敬王后，用一生在男人的战争中捍卫自己的家族与尊严。",
        "tags": [
            "古装",
            "权谋",
            "女性",
            "朝鲜"
        ]
    },
    {
        "title": "追鹰日记",
        "url": "./movies/movie-1230.html",
        "cover": "./30.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "奥地利",
        "type": "电影",
        "genre": "冒险 / 剧情",
        "category": "悬疑犯罪",
        "summary": "性格孤僻的少年在阿尔卑斯山上救下一只受伤的幼鹰，一人一鹰在相互陪伴中学会了飞翔与告别。",
        "tags": [
            "自然",
            "成长",
            "动物",
            "阿尔卑斯"
        ]
    },
    {
        "title": "菊花香",
        "url": "./movies/movie-1231.html",
        "cover": "./31.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情, 悲剧",
        "category": "经典回看",
        "summary": "身患胃癌的妻子在生命最后几个月，强忍病痛为盲人丈夫录制了未来十年生日所需的爱心便当语音教程。",
        "tags": [
            "绝恋",
            "绝症",
            "纯爱",
            "催泪弹"
        ]
    },
    {
        "title": "绿色春宫",
        "url": "./movies/movie-1232.html",
        "cover": "./32.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情 / 情色",
        "category": "最新电视剧",
        "summary": "为了抗议石油公司，一对环保情侣在CEO的草坪上直播做爱，宣称“让生命覆盖工业”。",
        "tags": [
            "环保",
            "激进艺术",
            "开放式关系"
        ]
    },
    {
        "title": "悍城",
        "url": "./movies/movie-1233.html",
        "cover": "./33.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作, 犯罪, 悬疑",
        "category": "环球片库",
        "summary": "为了给死去的搭档复仇，一位前特警潜入东南亚最暴力的黑市拳场。",
        "tags": [
            "卧底",
            "跨境追捕",
            "兄弟情",
            "硬汉"
        ]
    },
    {
        "title": "撞车逃逸",
        "url": "./movies/movie-1234.html",
        "cover": "./34.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪, 悬疑",
        "category": "经典回看",
        "summary": "肇事逃逸者以为神不知鬼不觉，却发现自己车上的行车记录仪正在直播给受害者家属。",
        "tags": [
            "肇事逃逸",
            "复仇",
            "追踪",
            "社会派",
            "反转"
        ]
    },
    {
        "title": "魔鬼卡车",
        "url": "./movies/movie-1235.html",
        "cover": "./35.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚，动作，公路",
        "category": "高清电影",
        "summary": "深夜公路上一辆生锈的油罐卡车开始追杀一辆私家车，而车内父子发现这卡车根本没有司机。",
        "tags": [
            "公路追杀",
            "灵异卡车",
            "复仇",
            "极端生存"
        ]
    },
    {
        "title": "私家侦探",
        "url": "./movies/movie-1236.html",
        "cover": "./36.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/黑色电影",
        "category": "环球片库",
        "summary": "1950年东京黑市，一名失忆的私家侦探每接一个案子，就在笔记本上多写一行字，直到写满自己的真实身份。",
        "tags": [
            "单元剧",
            "战后",
            "孤独",
            "爵士乐"
        ]
    },
    {
        "title": "小飞侠1953",
        "url": "./movies/movie-1237.html",
        "cover": "./37.jpg",
        "year": "1953",
        "yearNumber": 1953,
        "region": "美国",
        "type": "电影",
        "genre": "动画, 奇幻, 家庭",
        "category": "悬疑犯罪",
        "summary": "夜晚，彼得·潘飞进伦敦的窗户，带着温蒂和她的兄弟们去往永无岛，那里有海盗、美人鱼和那只鳄鱼。",
        "tags": [
            "迪士尼",
            "彼得潘",
            "温蒂",
            "经典动画"
        ]
    },
    {
        "title": "红王",
        "url": "./movies/movie-1238.html",
        "cover": "./38.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑, 奇幻",
        "category": "家庭剧情",
        "summary": "当选首相的平民领袖，身上开始显现中世纪预言中“红王”的诡异圣痕。",
        "tags": [
            "政治惊悚",
            "宗教符号",
            "神秘学"
        ]
    },
    {
        "title": "九龙冰室",
        "url": "./movies/movie-1239.html",
        "cover": "./39.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 动作",
        "category": "爱情喜剧",
        "summary": "退隐江湖的前拳手在九龙城寨旧址开冰室，直到儿子被黑帮逼着贩毒，他不得不重拾染血拳套。",
        "tags": [
            "古惑仔",
            "退隐",
            "父子情",
            "冰室"
        ]
    },
    {
        "title": "冷面虎",
        "url": "./movies/movie-1240.html",
        "cover": "./40.jpg",
        "year": "1973",
        "yearNumber": 1973,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪",
        "category": "热播剧集",
        "summary": "一个永远面无表情的哑巴厨子，用菜刀法为被黑帮杀害的盲女妹妹复仇。",
        "tags": [
            "邵氏",
            "功夫",
            "复仇"
        ]
    },
    {
        "title": "战斗",
        "url": "./movies/movie-1241.html",
        "cover": "./41.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作 / 战争",
        "category": "亚洲精选",
        "summary": "为了赎回被俘的弟弟，一名退役格斗教官重返硝烟弥漫的战场。",
        "tags": [
            "叙利亚",
            "雇佣兵",
            "硬核枪战",
            "兄弟情"
        ]
    },
    {
        "title": "双妹唛魔幻迷你圣诞",
        "url": "./movies/movie-1242.html",
        "cover": "./42.jpg",
        "year": "2002",
        "yearNumber": 2002,
        "region": "中国香港",
        "type": "电影/电视电影",
        "genre": "喜剧，奇幻，家庭",
        "category": "动作奇幻",
        "summary": "为了拿到圣诞大奖，一对姐妹在百货公司被吸入魔幻水晶球，被迫在迷你世界里和解。",
        "tags": [
            "贺岁",
            "姐妹情",
            "商场",
            "圣诞老人",
            "变小"
        ]
    },
    {
        "title": "海上焰火",
        "url": "./movies/movie-1243.html",
        "cover": "./43.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情 / 战争",
        "category": "高清电影",
        "summary": "兰佩杜萨岛上的救生员救起无数难民，却救不回自己那个偷渡失踪的弟弟，直到他在一具尸体上看到了熟悉的刺青。",
        "tags": [
            "难民危机",
            "真实事件改编",
            "黑白色调"
        ]
    },
    {
        "title": "小屁孩日记",
        "url": "./movies/movie-1244.html",
        "cover": "./44.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "剧情片",
        "genre": "剧情/悬疑/成长",
        "category": "经典回看",
        "summary": "一个孩子每天写下“今天看见什么”，却把一桩十年前失踪案重新点亮，成年人的沉默在他的童言里开始出现裂缝。",
        "tags": [
            "童年创伤",
            "失踪案件",
            "证词",
            "城市阴影"
        ]
    },
    {
        "title": "我生命中最糟糕的一周",
        "url": "./movies/movie-1245.html",
        "cover": "./45.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "意大利",
        "type": "电视剧",
        "genre": "喜剧/家庭",
        "category": "环球片库",
        "summary": "装修工马里奥为了赢回前妻，在七天内把所有人的生活都搞成了废墟。",
        "tags": [
            "黑色幽默",
            "连锁灾难",
            "家庭闹剧",
            "意式笑料"
        ]
    },
    {
        "title": "溃堤决坝999",
        "url": "./movies/movie-1246.html",
        "cover": "./46.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难",
        "category": "亚洲精选",
        "summary": "一场百年暴雨冲垮了数据模型，一名退休的爆破工成了阻止洪水吞噬百万人口城市的最后希望。",
        "tags": [
            "群像",
            "洪水",
            "小人物",
            "爆破专家",
            "24小时倒计时"
        ]
    },
    {
        "title": "法兰克与萝拉",
        "url": "./movies/movie-1247.html",
        "cover": "./47.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "电影",
        "genre": "爱情，音乐，剧情",
        "category": "热播剧集",
        "summary": "拉斯维加斯的赌场高手爱上了驻唱女歌手，但他控制欲的极端手段差点毁掉两人。",
        "tags": [
            "赌城",
            "歌手",
            "一见钟情",
            "控制欲",
            "自我救赎"
        ]
    },
    {
        "title": "绝色追缉令",
        "url": "./movies/movie-1248.html",
        "cover": "./48.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作犯罪",
        "category": "家庭剧情",
        "summary": "警方追缉的顶级女杀手每杀一人就换一张脸，而新来的女警和她长得一模一样。",
        "tags": [
            "女杀手",
            "警匪",
            "变脸"
        ]
    },
    {
        "title": "江湖客",
        "url": "./movies/movie-1249.html",
        "cover": "./49.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "动作",
        "category": "爱情喜剧",
        "summary": "一个金盆洗手的黑帮大哥，在儿子被人害死后重新踏入江湖。",
        "tags": [
            "黑帮",
            "角头",
            "父子",
            "背叛",
            "江湖道义"
        ]
    },
    {
        "title": "游戏的结局",
        "url": "./movies/movie-1250.html",
        "cover": "./50.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 科幻",
        "category": "悬疑犯罪",
        "summary": "当全球最火的VR游戏宣布“通关即死”，上亿玩家却争先恐后地按下了开始键。",
        "tags": [
            "VR陷阱",
            "社会派推理",
            "反乌托邦"
        ]
    },
    {
        "title": "隐身女人",
        "url": "./movies/movie-1251.html",
        "cover": "./51.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "category": "悬疑犯罪",
        "summary": "一名遭受家暴的女性物理学家，在自己发明的隐身衣上动了手脚，开始了一场针对施暴者的“幽灵审判”。",
        "tags": [
            "科技伦理",
            "女性复仇",
            "心理战",
            "隐形"
        ]
    },
    {
        "title": "女孩坏坏",
        "url": "./movies/movie-1252.html",
        "cover": "./52.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 青春 / 喜剧",
        "category": "亚洲精选",
        "summary": "一个自称“坏女孩”的转学生，靠一连串大胆恶作剧搅乱校园秩序，却也把每个人藏着的脆弱一起翻了出来。",
        "tags": [
            "女校",
            "叛逆",
            "闺蜜",
            "误会",
            "成长"
        ]
    },
    {
        "title": "恋爱保镖24小时第二季",
        "url": "./movies/movie-1253.html",
        "cover": "./53.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 动作 / 喜剧",
        "category": "爱情喜剧",
        "summary": "续季把“贴身保护”升级成“全天候同居调查”，当保镖和雇主都在隐藏身份时，恋爱先变成了一场危险博弈。",
        "tags": [
            "高甜守护",
            "近身护卫",
            "误会反转",
            "双强设定",
            "都市节奏"
        ]
    },
    {
        "title": "理由",
        "url": "./movies/movie-1254.html",
        "cover": "./54.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪 / 悬疑 / 心理",
        "category": "亚洲精选",
        "summary": "每个人都说自己有理由，直到一份被篡改的录音把整起命案推回到七年前那场失踪案。",
        "tags": [
            "证词",
            "记忆错位",
            "审讯",
            "多视角叙事",
            "真相拼图"
        ]
    },
    {
        "title": "十六岁之爱",
        "url": "./movies/movie-1255.html",
        "cover": "./55.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 剧情 / 青春",
        "category": "家庭剧情",
        "summary": "1980年代的南法小镇，两个十六岁男孩在暑假相遇，用一部超8毫米摄影机秘密记录下他们不敢示人的爱。",
        "tags": [
            "青春",
            "初恋",
            "成长",
            "诗意",
            "戛纳"
        ]
    },
    {
        "title": "恋爱☆迁都",
        "url": "./movies/movie-1256.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 喜剧, 奇幻",
        "category": "悬疑犯罪",
        "summary": "东京和大阪变成了美少女和帅哥，他们必须在恋爱中决定日本的新首都。",
        "tags": [
            "都市拟人化",
            "东京",
            "大阪",
            "拟人恋爱"
        ]
    },
    {
        "title": "规则改变者",
        "url": "./movies/movie-1257.html",
        "cover": "./57.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑, 惊悚, 政治",
        "category": "家庭剧情",
        "summary": "一个程序员发现社会运行规则的后门，他每改一行代码，就有一个陌生人的人生被重启。",
        "tags": [
            "高智商博弈",
            "暗网",
            "系统漏洞",
            "反乌托邦"
        ]
    },
    {
        "title": "伊莎朵拉的眼泪",
        "url": "./movies/movie-1258.html",
        "cover": "./58.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "传记，剧情，舞蹈",
        "category": "爱情喜剧",
        "summary": "聚焦现代舞之母伊莎朵拉·邓肯生命最后疯狂的三年，她的每一次起舞都在与死神的围巾共舞。",
        "tags": [
            "现代舞",
            "艺术家",
            "悲剧",
            "时尚",
            "法国"
        ]
    },
    {
        "title": "留校察看",
        "url": "./movies/movie-1259.html",
        "cover": "./59.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 惊悚, 校园",
        "category": "爱情喜剧",
        "summary": "圣诞节假期，留校的坏学生发现看守他们的老校长其实是个在逃连环杀人犯。",
        "tags": [
            "封闭空间",
            "师生博弈",
            "心理战",
            "圣诞节"
        ]
    },
    {
        "title": "与你的九次相遇",
        "url": "./movies/movie-1260.html",
        "cover": "./60.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情, 科幻, 悬疑",
        "category": "爱情喜剧",
        "summary": "为了救回在地震中死去的恋人，他九次回到过去，却每次都导致恋人死得更快。",
        "tags": [
            "时间循环",
            "拯救恋人",
            "蝴蝶效应"
        ]
    },
    {
        "title": "德古拉的女儿",
        "url": "./movies/movie-1261.html",
        "cover": "./61.jpg",
        "year": "1936",
        "yearNumber": 1936,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 剧情",
        "category": "亚洲精选",
        "summary": "德古拉死后，他的女儿试图摆脱吸血诅咒过上正常生活，却发现自己每一次恋爱都会让男友变成渴望鲜血的怪物。",
        "tags": [
            "吸血鬼",
            "黑白片",
            "环球怪物"
        ]
    },
    {
        "title": "精神食粮",
        "url": "./movies/movie-1262.html",
        "cover": "./62.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "剧情, 奇幻, 美食",
        "category": "经典回看",
        "summary": "一家能提取“情绪”并将其做成料理的神秘餐厅，吃下去的每一口，都是客人的一段人生。",
        "tags": [
            "美食",
            "情绪",
            "治愈",
            "单元剧"
        ]
    },
    {
        "title": "哈瓦那三日危情",
        "url": "./movies/movie-1263.html",
        "cover": "./63.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、动作",
        "category": "环球片库",
        "summary": "一名CIA特工在哈瓦那被栽赃杀人，她必须在飓风登陆前的72小时内洗清罪名。",
        "tags": [
            "古巴",
            "特工",
            "倒计时",
            "飓风"
        ]
    },
    {
        "title": "独身一人",
        "url": "./movies/movie-1264.html",
        "cover": "./64.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 科幻, 惊悚",
        "category": "动作奇幻",
        "summary": "作为最后一个人类，他每天醒来都要杀死昨天的自己，因为克隆体必须在24小时内更新，否则就会变异。",
        "tags": [
            "克隆人",
            "孤独",
            "伦理",
            "末世",
            "独角戏"
        ]
    },
    {
        "title": "黑豹党：革命先锋",
        "url": "./movies/movie-1265.html",
        "cover": "./65.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 历史 / 传记",
        "category": "环球片库",
        "summary": "1960年代，一群拿着法律书的黑人青年，如何在枪口下为社区争取面包与尊严。",
        "tags": [
            "真实改编",
            "民权运动",
            "暴力反抗",
            "政治黑豹"
        ]
    },
    {
        "title": "疾风劲射",
        "url": "./movies/movie-1266.html",
        "cover": "./66.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动 / 励志 / 剧情",
        "category": "最新电视剧",
        "summary": "一名退役国足因酒驾被罚担任盲人足球队教练，在黑暗中带队冲刺残奥会资格。",
        "tags": [
            "盲人足球",
            "残奥会",
            "师徒情",
            "逆袭"
        ]
    },
    {
        "title": "活动",
        "url": "./movies/movie-1267.html",
        "cover": "./67.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 社会 / 剧情",
        "category": "动作奇幻",
        "summary": "一场被包装成城市荣耀的盛大活动，在直播开场后十分钟就失控，而台前台后所有人都在努力掩盖自己真正要保住的东西。",
        "tags": [
            "年度晚会",
            "公关危机",
            "直播事故",
            "商战",
            "群像"
        ]
    },
    {
        "title": "风筝再次飞起",
        "url": "./movies/movie-1268.html",
        "cover": "./68.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭，情感，治愈",
        "category": "最新电视剧",
        "summary": "断掉的风筝线被三十年后的儿子捡起，他决定替父亲完成未竟的飞天梦。",
        "tags": [
            "父子",
            "和解",
            "传承",
            "小镇"
        ]
    },
    {
        "title": "香江花月夜粤语",
        "url": "./movies/movie-1269.html",
        "cover": "./69.jpg",
        "year": "1967",
        "yearNumber": 1967,
        "region": "中国香港",
        "type": "电影",
        "genre": "歌舞 / 剧情",
        "category": "热播剧集",
        "summary": "1960年代香港两大夜总会头牌歌女，为一个男人和一首歌决裂二十年。",
        "tags": [
            "夜总会风云",
            "姐妹反目",
            "粤语老歌",
            "时代变迁"
        ]
    },
    {
        "title": "真情收音机",
        "url": "./movies/movie-1270.html",
        "cover": "./70.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市, 情感, 家庭",
        "category": "爱情喜剧",
        "summary": "一档濒临停播的深夜电台节目，意外成为整座城市的情绪出口，主持人每接听一通电话，就离自己隐藏多年的心结更近一步。",
        "tags": [
            "深夜电台",
            "倾听治愈",
            "城市众生相",
            "秘密来电",
            "群像"
        ]
    },
    {
        "title": "独立协会的青年李承晩",
        "url": "./movies/movie-1271.html",
        "cover": "./71.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 历史, 传记",
        "category": "悬疑犯罪",
        "summary": "聚焦韩国首任总统李承晩二十出头时，在“独立协会”中激情又天真的救国实验。",
        "tags": [
            "独立运动",
            "青年时期",
            "历史重构",
            "民族记忆"
        ]
    },
    {
        "title": "圣女贞德蒙难记",
        "url": "./movies/movie-1272.html",
        "cover": "./72.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "法国",
        "type": "电影",
        "genre": "历史 / 剧情 / 宗教",
        "category": "环球片库",
        "summary": "全片聚焦贞德被审判、囚禁到火刑的最后 24 小时，只用台词和特写展现信仰的力量。",
        "tags": [
            "黑白画面",
            "法庭戏",
            "殉道",
            "极简主义"
        ]
    },
    {
        "title": "权欲第二章第四季",
        "url": "./movies/movie-1273.html",
        "cover": "./73.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情，犯罪",
        "category": "最新电视剧",
        "summary": "上一季的血腥冲突过后，新的权力真空出现，迫使昔日的盟友为了生存而彼此吞噬。",
        "tags": [
            "纽约",
            "权力游戏",
            "家族纷争"
        ]
    },
    {
        "title": "亡命驾驶2018",
        "url": "./movies/movie-1274.html",
        "cover": "./74.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "动作 / 惊悚 / 犯罪",
        "category": "爱情喜剧",
        "summary": "沉默车手为救赎唯一的朋友，夜闯巴黎地下车会与黑帮死斗。",
        "tags": [
            "飙车",
            "黑色电影",
            "复仇",
            "极简对白"
        ]
    },
    {
        "title": "黄水仙的秘密",
        "url": "./movies/movie-1275.html",
        "cover": "./75.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 犯罪 / 剧情",
        "category": "家庭剧情",
        "summary": "1980年代康沃尔郡，一位园艺师发现每户人家种植的黄水仙数量，竟与三十年前一桩未解谋杀案的线索完全吻合。",
        "tags": [
            "复古",
            "园艺师侦探",
            "家族秘史"
        ]
    },
    {
        "title": "屏住呼吸2",
        "url": "./movies/movie-1276.html",
        "cover": "./76.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 恐怖",
        "category": "家庭剧情",
        "summary": "事件八年后，失明老兵隐居的破楼上来了一伙寻找器官的暴徒。",
        "tags": [
            "密室",
            "盲人",
            "恶斗"
        ]
    },
    {
        "title": "飞渡魔鬼海",
        "url": "./movies/movie-1277.html",
        "cover": "./77.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚，冒险",
        "category": "家庭剧情",
        "summary": "科考船前往马里亚纳海沟投放探测器，却意外听到来自万米深渊的诵经声，船员开始相继跳海。",
        "tags": [
            "海洋",
            "神秘现象",
            "科考",
            "心理恐惧"
        ]
    },
    {
        "title": "梦里伊人国语",
        "url": "./movies/movie-1278.html",
        "cover": "./78.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情奇幻",
        "category": "爱情喜剧",
        "summary": "一场车祸让她失去记忆，却能在梦中化身歌女，与素未谋面的作曲家相遇。",
        "tags": [
            "梦境穿梭",
            "失忆谜团",
            "都市情缘"
        ]
    },
    {
        "title": "死魂曲",
        "url": "./movies/movie-1279.html",
        "cover": "./79.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 悬疑",
        "category": "最新电视剧",
        "summary": "小岛每到午夜便响起刺耳警报，听到的人都会赤脚走向大海，再也回不来。",
        "tags": [
            "游戏改编",
            "岛屿",
            "诅咒",
            "轮回",
            "海啸"
        ]
    },
    {
        "title": "关键复仇",
        "url": "./movies/movie-1280.html",
        "cover": "./80.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 悬疑",
        "category": "经典回看",
        "summary": "顶级密码学家的妻子因暗网骗局自杀，他向整个犯罪网络宣战，用代码作为武器。",
        "tags": [
            "密码专家",
            "暗网",
            "金融犯罪",
            "高智商复仇",
            "算法"
        ]
    },
    {
        "title": "血色罗马",
        "url": "./movies/movie-1281.html",
        "cover": "./81.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "意大利",
        "type": "剧集",
        "genre": "历史 / 动作 / 政治",
        "category": "动作奇幻",
        "summary": "公元68年，角斗士出身的皇帝与元老院的战争不在战场，而在下水道。",
        "tags": [
            "罗马帝国",
            "权力游戏",
            "角斗士政治"
        ]
    },
    {
        "title": "圣境沉沦",
        "url": "./movies/movie-1282.html",
        "cover": "./82.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 惊悚",
        "category": "高清电影",
        "summary": "当极乐圣境的AI神祇开始随机删除信徒的意识，天堂瞬间沦为活人墓地。",
        "tags": [
            "虚拟现实",
            "意识上传",
            "信仰崩塌",
            "反乌托邦"
        ]
    },
    {
        "title": "九彩霸王花1993国语",
        "url": "./movies/movie-1283.html",
        "cover": "./83.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、喜剧",
        "category": "最新电视剧",
        "summary": "九个来自不同警校的女学员组成霸王花预备队，却因为一次乌龙任务，误打误撞保护了黑帮老大的情妇。",
        "tags": [
            "女警",
            "贺岁",
            "无厘头",
            "洪金宝式打斗",
            "怀旧"
        ]
    },
    {
        "title": "冒充者",
        "url": "./movies/movie-1284.html",
        "cover": "./84.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪 / 剧情 / 心理",
        "category": "环球片库",
        "summary": "一个靠模仿名人声音维生的落魄演员，被迫顶替失踪的继承人潜入财阀家族，却在每天扮演别人的过程中，逐渐分不清自己是谁。",
        "tags": [
            "身份伪装",
            "财阀家族",
            "双重生活",
            "记者追查",
            "复仇计划"
        ]
    },
    {
        "title": "少林降魔",
        "url": "./movies/movie-1285.html",
        "cover": "./85.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 奇幻 / 古装",
        "category": "环球片库",
        "summary": "魔教教主携七十二路妖邪围攻少林，扫地老僧缓缓起身，露出了腕间的天龙纹身。",
        "tags": [
            "少林",
            "魔教",
            "禅武",
            "视觉大片"
        ]
    },
    {
        "title": "普通男孩俱乐部第二季",
        "url": "./movies/movie-1286.html",
        "cover": "./86.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 青春",
        "category": "高清电影",
        "summary": "五个被全校孤立的“普通男孩”组建俱乐部，用最笨拙的方式对抗学霸与恶霸的联合打压。",
        "tags": [
            "社恐",
            "逆袭",
            "校园"
        ]
    },
    {
        "title": "我的六个爱",
        "url": "./movies/movie-1287.html",
        "cover": "./87.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 奇幻",
        "category": "家庭剧情",
        "summary": "女主同时交往六个男朋友，结果发现他们全是同一个人格分裂的男主。",
        "tags": [
            "多重人格",
            "恋爱",
            "泰式甜剧",
            "一人六面",
            "修罗场"
        ]
    },
    {
        "title": "落笔皆是想见你",
        "url": "./movies/movie-1288.html",
        "cover": "./88.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 奇幻 / 剧情",
        "category": "动作奇幻",
        "summary": "2026年的她收到了1996年死去男友寄来的信，而回信的代价是，她会在写完最后一个字后忘记他。",
        "tags": [
            "书信",
            "穿越时空",
            "双向奔赴",
            "虐恋"
        ]
    },
    {
        "title": "忧罗娜传奇",
        "url": "./movies/movie-1289.html",
        "cover": "./89.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "墨西哥",
        "type": "电影",
        "genre": "恐怖、民俗、悬疑",
        "category": "最新电视剧",
        "summary": "传说中溺死孩子的“忧罗娜”每隔 50 年就会在河边出现，而这一次，她盯上了一群露营的大学生。",
        "tags": [
            "哭泣女",
            "都市传说",
            "母爱复仇"
        ]
    },
    {
        "title": "雷德利一族",
        "url": "./movies/movie-1290.html",
        "cover": "./90.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集 (10集)",
        "genre": "科幻家庭",
        "category": "动作奇幻",
        "summary": "雷德利家四个孩子全有超能力，但他们的外星生母突然回来要求“退货”。",
        "tags": [
            "外星混血",
            "伪装",
            "郊区",
            "青少年"
        ]
    },
    {
        "title": "星际宝贝2：史迪奇有问题",
        "url": "./movies/movie-1291.html",
        "cover": "./91.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "美国",
        "type": "动画电影",
        "genre": "科幻、喜剧、冒险",
        "category": "亚洲精选",
        "summary": "史迪奇突然开始说梦话并画诡异符号，莉萝发现他的程序中藏着一个从未触发的自毁协议。",
        "tags": [
            "外星实验品",
            "家庭危机",
            "搞笑破坏",
            "自我认同"
        ]
    },
    {
        "title": "疯狂小镇爱丁顿",
        "url": "./movies/movie-1292.html",
        "cover": "./92.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "黑色喜剧",
        "category": "高清电影",
        "summary": "为了争夺“年度最疯狂小镇”称号，爱丁顿的居民们发起了一场毫无底线的整蛊大赛。",
        "tags": [
            "小镇秘闻",
            "荒诞竞赛",
            "英式幽默"
        ]
    },
    {
        "title": "玻璃之城2024",
        "url": "./movies/movie-1293.html",
        "cover": "./93.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "爱情",
        "category": "爱情喜剧",
        "summary": "2047年的香港，一家公司能提取并售卖“完美初恋记忆”，而一个买家和卖家，恰好是彼此的初恋。",
        "tags": [
            "科幻",
            "记忆",
            "香港",
            "镜像"
        ]
    },
    {
        "title": "我老婆是老大2",
        "url": "./movies/movie-1294.html",
        "cover": "./94.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "韩国",
        "type": "电影",
        "genre": "动作/喜剧",
        "category": "环球片库",
        "summary": "曾经的黑帮女老大隐退相夫教子，却因邻居欺负她老公，被迫重出江湖。",
        "tags": [
            "女大佬",
            "黑帮",
            "婚后生活",
            "搞笑打斗"
        ]
    },
    {
        "title": "大侠霍元甲国语",
        "url": "./movies/movie-1295.html",
        "cover": "./95.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "剧集",
        "genre": "动作, 传记, 历史",
        "category": "家庭剧情",
        "summary": "清末列强环伺，霍元甲以一己之力挑战西洋力士与日本武馆，唤醒沉睡的国魂。",
        "tags": [
            "民国",
            "武术",
            "民族精神",
            "精武门",
            "热血"
        ]
    },
    {
        "title": "八月未央",
        "url": "./movies/movie-1296.html",
        "cover": "./96.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 文艺",
        "category": "高清电影",
        "summary": "两个名叫未央的女孩在上海相遇，却发现她们爱着同一个男人，也流着同样的血。",
        "tags": [
            "城市漫游",
            "双生花",
            "宿命",
            "情感纠葛"
        ]
    },
    {
        "title": "格列佛的宇宙旅行",
        "url": "./movies/movie-1297.html",
        "cover": "./97.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "科幻, 冒险",
        "category": "经典回看",
        "summary": "宇航员格列佛的飞船坠毁在未知星系，他发现这里的小人国、大人国都在一个黑洞附近打贸易战。",
        "tags": [
            "格列佛",
            "宇宙",
            "奇观",
            "黑色幽默"
        ]
    },
    {
        "title": "新美女与野兽",
        "url": "./movies/movie-1298.html",
        "cover": "./98.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "奇幻，爱情",
        "category": "热播剧集",
        "summary": "被诅咒成野兽的王子没想到，这个小镇图书管理员竟想用心理学治愈他。",
        "tags": [
            "童话新编",
            "治愈",
            "哥特",
            "女性觉醒"
        ]
    },
    {
        "title": "绞死刑",
        "url": "./movies/movie-1299.html",
        "cover": "./99.jpg",
        "year": "1968",
        "yearNumber": 1968,
        "region": "日本",
        "type": "电影",
        "genre": "剧情",
        "category": "最新电视剧",
        "summary": "一名死刑犯被绞死后复活，在梦境中不断重演自己的罪行与处刑。",
        "tags": [
            "死刑",
            "梦境",
            "战后",
            "身份",
            "实验电影"
        ]
    },
    {
        "title": "高原儿",
        "url": "./movies/movie-1300.html",
        "cover": "./100.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 儿童",
        "category": "动作奇幻",
        "summary": "青海高原上，一群藏族留守儿童用牦牛粪当足球，踢进了省城的大赛。",
        "tags": [
            "青海",
            "足球",
            "留守儿童",
            "梦想"
        ]
    },
    {
        "title": "挚爱无尽",
        "url": "./movies/movie-1301.html",
        "cover": "./101.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 剧情 / 奇幻",
        "category": "最新电视剧",
        "summary": "丈夫葬礼上，我收到了一封来自十年前的信，信的末尾写着：“如果再看你一眼，我就会消失。”",
        "tags": [
            "轮回",
            "执着",
            "悲剧"
        ]
    },
    {
        "title": "罗马尼亚绑架案",
        "url": "./movies/movie-1302.html",
        "cover": "./102.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "罗马尼亚/法国",
        "type": "电影",
        "genre": "犯罪/剧情",
        "category": "亚洲精选",
        "summary": "一个笨贼绑架了部长女儿，却因为罗马尼亚极度低效的行政系统，整整三天无人报案。",
        "tags": [
            "东欧",
            "绑架",
            "官僚主义",
            "黑色幽默",
            "社会讽刺"
        ]
    },
    {
        "title": "生死相对",
        "url": "./movies/movie-1303.html",
        "cover": "./103.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "category": "家庭剧情",
        "summary": "一对双胞胎兄弟，一个死在监狱，另一个却以他的身份活了下来。",
        "tags": [
            "双胞胎",
            "身份互换",
            "谋杀",
            "心理",
            "反转"
        ]
    },
    {
        "title": "皮胡",
        "url": "./movies/movie-1304.html",
        "cover": "./104.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "印度",
        "type": "电影",
        "genre": "剧情， 家庭， 社会",
        "category": "最新电视剧",
        "summary": "印度乡村女孩皮胡每天上学要游过一条鳄鱼出没的河流，只为拿到那张能改变全家命运的奖状。",
        "tags": [
            "儿童",
            "贫困",
            "教育",
            "女性觉醒"
        ]
    },
    {
        "title": "除魔特攻队",
        "url": "./movies/movie-1305.html",
        "cover": "./105.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "日本",
        "type": "剧集",
        "genre": "动作, 奇幻",
        "category": "经典回看",
        "summary": "失业青年加入一家专接妖怪讨债业务的黑道公司，发现老板是一只千年猫又。",
        "tags": [
            "妖怪",
            "特摄",
            "黑帮",
            "平成"
        ]
    },
    {
        "title": "掌上珠还",
        "url": "./movies/movie-1306.html",
        "cover": "./106.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国内地",
        "type": "剧集",
        "genre": "古装，悬疑，权谋",
        "category": "家庭剧情",
        "summary": "流落民间十八年的真公主回宫，却发现假公主已被养成了权倾朝野的女帝，而自己才是当年狸猫换太子的主谋。",
        "tags": [
            "真假千金",
            "宫廷",
            "失忆",
            "复仇"
        ]
    },
    {
        "title": "少年魔法师电影版",
        "url": "./movies/movie-1307.html",
        "cover": "./107.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 家庭",
        "category": "经典回看",
        "summary": "鲁斯索家族最不擅长魔法的少年，为了拯救被诅咒而消失的家人，必须进入禁忌的“镜像魔法界”找回家族的魔法本源。",
        "tags": [
            "魔法",
            "家族传承",
            "成长",
            "青少年"
        ]
    },
    {
        "title": "外科医生爱丽丝",
        "url": "./movies/movie-1308.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 医学, 悬疑",
        "category": "高清电影",
        "summary": "拥有绝对手感的天才女外科医生，发现医院的高层正在利用手术室进行非法器官交易。",
        "tags": [
            "女外科",
            "医院权力",
            "天才医生",
            "医疗事故"
        ]
    },
    {
        "title": "我们妈妈的房子",
        "url": "./movies/movie-1309.html",
        "cover": "./109.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "category": "热播剧集",
        "summary": "母亲去世后，五个孩子回到山间老宅，发现房子里住着一个“更年轻的妈妈”。",
        "tags": [
            "家族秘密",
            "遗产",
            "回乡",
            "阿尔卑斯"
        ]
    },
    {
        "title": "剑豪生死斗",
        "url": "./movies/movie-1310.html",
        "cover": "./110.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作， 剧情， 历史",
        "category": "高清电影",
        "summary": "两名被时代抛弃的剑客，在一场没有规则的生死决斗中，赌上最后的尊严与真相。",
        "tags": [
            "武士",
            "复仇",
            "宿命"
        ]
    },
    {
        "title": "高尔夫球也疯狂",
        "url": "./movies/movie-1311.html",
        "cover": "./111.jpg",
        "year": "1996",
        "yearNumber": 1996,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，运动",
        "category": "亚洲精选",
        "summary": "一名流落街头的流浪汉被高尔夫球砸中脑袋后，竟奇迹般拥有了百发百中的神技，搅乱了贵族球坛。",
        "tags": [
            "高尔夫",
            "底层逆袭",
            "蠢萌",
            "荒诞"
        ]
    },
    {
        "title": "艺术的童年",
        "url": "./movies/movie-1312.html",
        "cover": "./112.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情，儿童",
        "category": "动作奇幻",
        "summary": "一位落魄的当代艺术家，用画笔撬开了患有重度自闭症儿子的无声世界。",
        "tags": [
            "绘画",
            "自闭症",
            "沟通",
            "乡村",
            "美术教育"
        ]
    },
    {
        "title": "冰冻的闪光",
        "url": "./movies/movie-1313.html",
        "cover": "./113.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "挪威/瑞典",
        "type": "电影",
        "genre": "惊悚/灾难",
        "category": "家庭剧情",
        "summary": "南极科考站队员发现冰层深处封存着一种能让生物瞬间变成晶体的奇异物质。",
        "tags": [
            "极地",
            "科考站",
            "未知病毒"
        ]
    },
    {
        "title": "这个男人很难搞",
        "url": "./movies/movie-1314.html",
        "cover": "./114.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "category": "家庭剧情",
        "summary": "女秘书被派去“驯服”公司最难搞的天才老板，却发现他所有的“毛病”都是装的。",
        "tags": [
            "欢喜冤家",
            "职场",
            "搞笑",
            "浪漫"
        ]
    },
    {
        "title": "串烧冤家粤语",
        "url": "./movies/movie-1315.html",
        "cover": "./115.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧 / 爱情",
        "category": "高清电影",
        "summary": "庙街两家烧烤档的继承人被迫假结婚以保住摊位，却意外发现对方才是自己寻找了十年的网恋对象。",
        "tags": [
            "港剧",
            "冤家变情侣",
            "街头美食",
            "市井",
            "爆笑"
        ]
    },
    {
        "title": "天师斗僵尸续集",
        "url": "./movies/movie-1316.html",
        "cover": "./116.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，恐怖，奇幻",
        "category": "亚洲精选",
        "summary": "上一代天师退休后，他的废柴徒弟用直播带货的方式，把捉僵尸变成了互联网生意。",
        "tags": [
            "茅山",
            "僵尸",
            "师徒",
            "黑色幽默",
            "现代都市"
        ]
    },
    {
        "title": "四月四日国语",
        "url": "./movies/movie-1317.html",
        "cover": "./117.jpg",
        "year": "2000",
        "yearNumber": 2000,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "category": "亚洲精选",
        "summary": "清明节凌晨4点04分，一户人家阳台突然出现一个穿红裙的小女孩，而且只有爸爸看得见。",
        "tags": [
            "清明节",
            "鬼话连篇",
            "家庭伦理"
        ]
    },
    {
        "title": "主播",
        "url": "./movies/movie-1318.html",
        "cover": "./118.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪悬疑",
        "category": "热播剧集",
        "summary": "一位过气新闻主播在直播中接到神秘电话：对方声称要直播杀死她当年的举报人，让她全程解说这场谋杀。",
        "tags": [
            "直播",
            "勒索",
            "网络暴力"
        ]
    },
    {
        "title": "脂粉陷阱",
        "url": "./movies/movie-1319.html",
        "cover": "./119.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 情色",
        "category": "最新电视剧",
        "summary": "三个富商相继死在女人的床上，死前都说过同一句话：“她太美了，死也值。”",
        "tags": [
            "蛇蝎美人",
            "骗局",
            "港产Cult",
            "反转",
            "女性复仇"
        ]
    },
    {
        "title": "37岁",
        "url": "./movies/movie-1320.html",
        "cover": "./120.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 女性",
        "category": "悬疑犯罪",
        "summary": "37岁的单身女编辑被公司裁员，没房没车没男友，她决定用一个“假装已婚”的身份，去重新敲开这个对她充满恶意的社会的大门。",
        "tags": [
            "年龄焦虑",
            "重启人生",
            "职场",
            "不婚主义"
        ]
    },
    {
        "title": "烂赌英雄",
        "url": "./movies/movie-1321.html",
        "cover": "./121.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "前赌神为了女儿发誓戒赌十年，加入戒赌互助会，没想到女儿被澳门黑帮绑架，赌局是唯一的赎回方式。",
        "tags": [
            "戒赌互助会",
            "地下赌局",
            "千王之王",
            "女儿被绑架"
        ]
    },
    {
        "title": "血性男儿",
        "url": "./movies/movie-1322.html",
        "cover": "./122.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情",
        "category": "环球片库",
        "summary": "一个懦弱的中学老师，为了给被黑道打成植物人的弟弟报仇，拿起了粉笔和砖头，一步步变成街头战神。",
        "tags": [
            "黑帮",
            "家庭",
            "成长",
            "暴力美学"
        ]
    },
    {
        "title": "圣诞女孩",
        "url": "./movies/movie-1323.html",
        "cover": "./123.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "家庭， 奇幻， 喜剧",
        "category": "经典回看",
        "summary": "当圣诞老人意外受伤，他必须把自己的魔法雪橇托付给全世界最不信圣诞的叛逆女孩艾薇。",
        "tags": [
            "圣诞老人",
            "性别互换",
            "冒险",
            "节日"
        ]
    },
    {
        "title": "百战天龙第四季",
        "url": "./movies/movie-1324.html",
        "cover": "./124.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电视剧",
        "genre": "动作，冒险，谍战",
        "category": "悬疑犯罪",
        "summary": "当全球间谍网络被AI攻破，退休的马盖先只能用一把瑞士军刀和一堆旧家电，重建人类最后的防火墙。",
        "tags": [
            "智斗",
            "马盖先",
            "战术"
        ]
    },
    {
        "title": "血与誓",
        "url": "./movies/movie-1325.html",
        "cover": "./125.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作, 武侠, 古装",
        "category": "亚洲精选",
        "summary": "惨遭灭门的武将之女，加入秘密杀手组织“血誓”，她的目标竟是自己的师父。",
        "tags": [
            "复仇",
            "锦衣卫",
            "女性杀手",
            "暴力美学"
        ]
    },
    {
        "title": "那夜我们行向彼方",
        "url": "./movies/movie-1326.html",
        "cover": "./126.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 灾难 / 情感",
        "category": "环球片库",
        "summary": "311地震十年后，一群失去亲人的人每年在同一个夜晚结伴走向大海，只为和逝者“擦肩而过”。",
        "tags": [
            "海啸",
            "夜行",
            "错过",
            "和解"
        ]
    },
    {
        "title": "傻瓜回忆录",
        "url": "./movies/movie-1327.html",
        "cover": "./127.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 奇幻",
        "category": "家庭剧情",
        "summary": "患有严重失忆症的老头坚信自己是间谍，天天给养老院“总部”发电报，护理员决定陪他完成最后一次“任务”。",
        "tags": [
            "失忆",
            "老年",
            "诈骗",
            "治愈",
            "公路"
        ]
    },
    {
        "title": "我没有失踪",
        "url": "./movies/movie-1328.html",
        "cover": "./128.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪, 家庭",
        "category": "最新电视剧",
        "summary": "失踪十年的儿子突然回家，父亲却发现他早已不是人类。",
        "tags": [
            "寻子",
            "人口贩卖",
            "暗网",
            "父亲",
            "复仇"
        ]
    },
    {
        "title": "冬日2003",
        "url": "./movies/movie-1329.html",
        "cover": "./129.jpg",
        "year": "2003",
        "yearNumber": 2003,
        "region": "日本",
        "type": "剧情电影",
        "genre": "回忆叙事 / 青春成长 / 温柔悬疑",
        "category": "热播剧集",
        "summary": "在2003年最后一班停运列车上，雪奈用泛黄照片还原十七年前的离去，却发现自己一直生活在被人故意删改过的同一天里。",
        "tags": [
            "雪夜列车",
            "旧照片",
            "第一场雪",
            "跨年龄暗恋",
            "校园乐队"
        ]
    },
    {
        "title": "我私密的黄丝带",
        "url": "./movies/movie-1330.html",
        "cover": "./130.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "剧情，战争，心理",
        "category": "高清电影",
        "summary": "从阿富汗归来后，他在老家门口的橡树上系了365条黄丝带，每条代表一个他没能救回的战友。",
        "tags": [
            "PTSD",
            "老兵",
            "和解"
        ]
    },
    {
        "title": "剑岳～点之记",
        "url": "./movies/movie-1331.html",
        "cover": "./131.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "日本",
        "type": "电影",
        "genre": "历史、冒险、剧情",
        "category": "亚洲精选",
        "summary": "明治末期，一支测量队冒着生命危险攀登未登峰剑岳，只为在地图上为它标下一个点。",
        "tags": [
            "登山",
            "真实改编",
            "测绘",
            "武士精神"
        ]
    },
    {
        "title": "妙趣双宝",
        "url": "./movies/movie-1332.html",
        "cover": "./132.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作 / 家庭",
        "category": "爱情喜剧",
        "summary": "失散多年的双胞胎兄弟，一个是神偷，一个是警察，在一次跨国案件中互换身份，闹出连环乌龙。",
        "tags": [
            "双胞胎",
            "互换身份",
            "警匪",
            "乌龙"
        ]
    },
    {
        "title": "撤离地球",
        "url": "./movies/movie-1333.html",
        "cover": "./133.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 灾难 / 冒险",
        "category": "爱情喜剧",
        "summary": "太阳即将膨胀吞噬地球，全球联合建造的十艘“方舟”只能带走百分之一的人口，抽签？竞价？还是凭本事？",
        "tags": [
            "末日逃亡",
            "方舟计划",
            "人性抉择",
            "星际漂流"
        ]
    },
    {
        "title": "山狗1999",
        "url": "./movies/movie-1334.html",
        "cover": "./134.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "亚洲精选",
        "summary": "1999年澳门回归前夕，一名被警方开除的华探长与山贼出身的杀手，为各自女人与尊严展开最后对决。",
        "tags": [
            "警匪",
            "兄弟情",
            "末日氛围",
            "枪战",
            "遗憾"
        ]
    },
    {
        "title": "黑道警察",
        "url": "./movies/movie-1335.html",
        "cover": "./135.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 警匪",
        "category": "爱情喜剧",
        "summary": "警察阿杰出卖同僚成为黑帮红人，黑帮头目的弟弟却考入警校，两人互为卧底互相绞杀。",
        "tags": [
            "卧底",
            "无间道前",
            "黑警",
            "兄弟情",
            "暴力美学"
        ]
    },
    {
        "title": "咱们裸熊第三季",
        "url": "./movies/movie-1336.html",
        "cover": "./136.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧, 动画, 家庭",
        "category": "家庭剧情",
        "summary": "棕熊大大、熊猫胖达和白熊冰熊继续在湾区上演爆笑日常。",
        "tags": [
            "Cartoon",
            "Network",
            "三兄弟",
            "棕熊",
            "熊猫"
        ]
    },
    {
        "title": "健身世界第二季",
        "url": "./movies/movie-1337.html",
        "cover": "./137.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、体育",
        "category": "热播剧集",
        "summary": "第一季被踢出健美圈的少女，第二季转型健身网红，用流量做武器，把前教练送进监狱。",
        "tags": [
            "健身",
            "女性",
            "复仇",
            "自媒体",
            "肌肉"
        ]
    },
    {
        "title": "八重子的低音",
        "url": "./movies/movie-1338.html",
        "cover": "./138.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 音乐 / 家庭",
        "category": "最新电视剧",
        "summary": "天才大提琴手意外失聪，回到乡下与聋哑母亲同住，她却发现母亲从未听过自己演奏，却一直在“演奏”生活。",
        "tags": [
            "大提琴",
            "失聪",
            "母女和解",
            "慢节奏"
        ]
    },
    {
        "title": "七个隆咚锵咚锵",
        "url": "./movies/movie-1339.html",
        "cover": "./139.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "category": "悬疑犯罪",
        "summary": "一个在北京打拼的南方小伙带着东北女友回潮汕老家过年，七天的文化冲突和笑料让他重新理解了“家”的含义。",
        "tags": [
            "春节",
            "南北文化",
            "返乡"
        ]
    },
    {
        "title": "异冢",
        "url": "./movies/movie-1340.html",
        "cover": "./140.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 悬疑, 惊悚",
        "category": "动作奇幻",
        "summary": "雕塑家带着妻女搬到阴森的祖宅，每当午夜，地窖总会传出婴儿的哭声和敲击墙壁的声音。",
        "tags": [
            "吴镇宇",
            "密室",
            "精神分裂",
            "家庭暴力"
        ]
    },
    {
        "title": "孤独的人",
        "url": "./movies/movie-1341.html",
        "cover": "./141.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 心理",
        "category": "最新电视剧",
        "summary": "自愿独居荒岛三年的男人，却在获救前一天发现岛上还有另一个人。",
        "tags": [
            "孤独",
            "荒岛",
            "内心独白",
            "治愈",
            "极简"
        ]
    },
    {
        "title": "最大的漫游者",
        "url": "./movies/movie-1342.html",
        "cover": "./142.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "科幻，哲学，冒险",
        "category": "动作奇幻",
        "summary": "人类最后一个宇航员在前往比邻星的途中发现自己不是“最后一个”——飞船AI才是。",
        "tags": [
            "太空",
            "孤独",
            "AI",
            "朝圣",
            "信仰"
        ]
    },
    {
        "title": "黑白之间",
        "url": "./movies/movie-1343.html",
        "cover": "./143.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 剧情 / 悬疑",
        "category": "高清电影",
        "summary": "最出色的卧底警察，在任务结束后无法回到白道；最讲义气的黑帮头目，在洗白后发现自己从未离开黑色。",
        "tags": [
            "卧底",
            "灰色地带",
            "港产片",
            "双雄对决",
            "人性拷问"
        ]
    },
    {
        "title": "通往遥远过去的阶梯",
        "url": "./movies/movie-1344.html",
        "cover": "./144.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情，奇幻，悬疑",
        "category": "环球片库",
        "summary": "在一处即将被拆除的老旧公寓楼梯里，每次跌落的男主都能回到过去，但他必须阻止当年的好友自杀才能换回女儿的命。",
        "tags": [
            "日剧",
            "时间旅行",
            "考古",
            "温情"
        ]
    },
    {
        "title": "换身密谋",
        "url": "./movies/movie-1345.html",
        "cover": "./145.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 惊悚, 科幻",
        "category": "家庭剧情",
        "summary": "国务总理候选人被秘密实验“记忆移植”，醒来后发现自己活在清洁工的身体里，而清洁工成了他。",
        "tags": [
            "身体互换",
            "政商黑幕",
            "记忆移植",
            "反转",
            "阴谋论"
        ]
    },
    {
        "title": "骄傲的美国人",
        "url": "./movies/movie-1346.html",
        "cover": "./146.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 战争 / 传记",
        "category": "悬疑犯罪",
        "summary": "荣获勋章的战争英雄回国后成了流浪汉，他拒绝救助，说“我配不上这个国家”。",
        "tags": [
            "阿富汗战争",
            "老兵创伤",
            "国家骄傲",
            "真实改编",
            "反战内核"
        ]
    },
    {
        "title": "那一份纯真",
        "url": "./movies/movie-1347.html",
        "cover": "./147.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 青春",
        "category": "家庭剧情",
        "summary": "45 岁的中年男人翻出一张 1999 年的毕业照，决定去找那个暗恋了整个高中的女孩。",
        "tags": [
            "校园",
            "暗恋",
            "怀旧",
            "90年代",
            "治愈"
        ]
    },
    {
        "title": "失衡凶间之恶念之最",
        "url": "./movies/movie-1348.html",
        "cover": "./148.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 奇幻",
        "category": "热播剧集",
        "summary": "三个关于欲望与惩罚的都市传说，揭示了人性深处最原始的恶。",
        "tags": [
            "三段式",
            "都市怪谈",
            "心理恐怖",
            "因果报应"
        ]
    },
    {
        "title": "上错天堂投错胎",
        "url": "./movies/movie-1349.html",
        "cover": "./149.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 奇幻",
        "category": "悬疑犯罪",
        "summary": "一个已婚牙医和一个单身花花公子同时死亡，天使却搞乱了他们的灵魂投放身体。",
        "tags": [
            "经典喜剧",
            "天堂地狱",
            "身份互换",
            "讽刺",
            "笑料"
        ]
    },
    {
        "title": "吴越钱王",
        "url": "./movies/movie-1350.html",
        "cover": "./150.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 历史 / 古装",
        "category": "爱情喜剧",
        "summary": "从一个私盐贩子到开创“上有天堂，下有苏杭”格局的乱世明君，钱镠用一生诠释了“善事中国，保境安民”的真谛。",
        "tags": [
            "五代十国",
            "帝王",
            "治国",
            "传奇",
            "江南"
        ]
    },
    {
        "title": "第41",
        "url": "./movies/movie-1351.html",
        "cover": "./1.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争, 爱情",
        "category": "热播剧集",
        "summary": "苏德战场上，苏联女狙击手俘虏了第41个德国军官，两人在极地荒原逃亡中爱上了彼此，却必须亲手杀死对方。",
        "tags": [
            "二战",
            "禁忌之恋",
            "悲剧"
        ]
    },
    {
        "title": "迷途新娘",
        "url": "./movies/movie-1352.html",
        "cover": "./2.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "印度",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 爱情",
        "category": "亚洲精选",
        "summary": "婚礼当天，新娘搭错了车，稀里糊涂地和一位木讷的单身汉踏上了一场啼笑皆非的公路之旅。",
        "tags": [
            "公路喜剧",
            "印度风情",
            "寻找自我"
        ]
    },
    {
        "title": "浴室墙上的字",
        "url": "./movies/movie-1353.html",
        "cover": "./3.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 悬疑, 青少年",
        "category": "动作奇幻",
        "summary": "自闭症少年发现学校男厕的墙上每天都会出现新的死亡预言，而那些被点名的人真的会准时死去。",
        "tags": [
            "校园霸凌",
            "超自然",
            "密室"
        ]
    },
    {
        "title": "我杀了我妈妈",
        "url": "./movies/movie-1354.html",
        "cover": "./4.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "加拿大 / 法国",
        "type": "电影",
        "genre": "剧情 / 家庭 / 传记",
        "category": "家庭剧情",
        "summary": "16岁的少年在日记里写下一百种杀死母亲的方法，但这每一笔“谋杀”，其实都是无声的“求救”。",
        "tags": [
            "青春期",
            "母子关系",
            "自传",
            "情感暴力"
        ]
    },
    {
        "title": "变钢锁",
        "url": "./movies/movie-1355.html",
        "cover": "./5.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "category": "环球片库",
        "summary": "在成为伟大的汽车人战士之前，钢锁只是一头在赛博坦角斗场里为了生存而撕咬的机械恐龙。",
        "tags": [
            "变形金刚",
            "衍生剧",
            "赛博坦",
            "战争"
        ]
    },
    {
        "title": "黑旋风",
        "url": "./movies/movie-1356.html",
        "cover": "./6.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠 / 动作",
        "category": "热播剧集",
        "summary": "招安前夕，李逵奉命暗杀一位拒绝归顺的老将军，却发现此人竟是当年在江州救过他一命的恩人。",
        "tags": [
            "水浒",
            "李逵",
            "水墨风",
            "暴力美学",
            "忠义"
        ]
    },
    {
        "title": "猛虎之家",
        "url": "./movies/movie-1357.html",
        "cover": "./7.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "电影",
        "genre": "动作, 犯罪, 剧情",
        "category": "经典回看",
        "summary": "拳王阿虎出狱后想金盆洗手，却发现弟弟被黑帮囚禁在地下拳场，做着和自己当年一样的勾当。",
        "tags": [
            "泰拳",
            "家族恩怨",
            "复仇"
        ]
    },
    {
        "title": "双面女蝎星",
        "url": "./movies/movie-1358.html",
        "cover": "./8.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 爱情 / 惊悚",
        "category": "亚洲精选",
        "summary": "被政府处决的女杀手并没有死，她被整容换脸，任务是杀掉过去的自己，却爱上了要杀的目标。",
        "tags": [
            "杀手",
            "换脸",
            "替身",
            "经典翻拍"
        ]
    },
    {
        "title": "土京夺宝记",
        "url": "./movies/movie-1359.html",
        "cover": "./9.jpg",
        "year": "1964",
        "yearNumber": 1964,
        "region": "美国",
        "type": "电影",
        "genre": "冒险, 喜剧",
        "category": "爱情喜剧",
        "summary": "一名落魄的英国上校和一名美国赌徒在伊斯坦布尔的集市里不期而遇，联手去偷取一尊嵌满宝石的苏丹神像。",
        "tags": [
            "旧片经典",
            "夺宝",
            "贵族",
            "乌龙"
        ]
    },
    {
        "title": "万神殿第二季",
        "url": "./movies/movie-1360.html",
        "cover": "./10.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻, 动画, 剧情",
        "category": "亚洲精选",
        "summary": "UI与克隆人之间的矛盾全面爆发，现实世界沦为两大势力的战场。",
        "tags": [
            "上载智能",
            "克隆伦理",
            "虚拟战争"
        ]
    },
    {
        "title": "我主沉浮",
        "url": "./movies/movie-1361.html",
        "cover": "./11.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情，商战，职场",
        "category": "经典回看",
        "summary": "一位50岁被“优化”的集团CFO，被迫从零开始，在猎头行业开启了专门“狙击”老东家的复仇式创业。",
        "tags": [
            "金融",
            "猎头",
            "中年觉醒"
        ]
    },
    {
        "title": "不爱，爱",
        "url": "./movies/movie-1362.html",
        "cover": "./12.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "category": "家庭剧情",
        "summary": "在一场“爱情恐慌症”肆虐的未来都市，必须服下“绝情丹”才能正常生活，一对旧情人在药效失灵的那一小时重逢了。",
        "tags": [
            "都市",
            "情感",
            "错位",
            "文艺"
        ]
    },
    {
        "title": "加菲猫的幸福生活第二季",
        "url": "./movies/movie-1363.html",
        "cover": "./13.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "TV动画剧集",
        "genre": "喜剧、动画、家庭",
        "category": "爱情喜剧",
        "summary": "加菲猫继续用千层饼和沙发对抗全世界，这次它的懒癌晚期传染了整个街区。",
        "tags": [
            "加菲猫",
            "欧迪",
            "乔恩",
            "千层饼",
            "懒猫"
        ]
    },
    {
        "title": "疯狂香港富豪",
        "url": "./movies/movie-1364.html",
        "cover": "./14.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "category": "高清电影",
        "summary": "全港首富突然宣布要在三天内花光一千亿，否则就要把所有财产捐给仇家，全城陷入疯狂。",
        "tags": [
            "豪门",
            "荒诞",
            "讽刺"
        ]
    },
    {
        "title": "巴尼的人生",
        "url": "./movies/movie-1365.html",
        "cover": "./15.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧 / 生活",
        "category": "爱情喜剧",
        "summary": "52岁的超市理货员巴尼被裁员后，用全部积蓄买下一个废弃加油站，改成了全镇最不正经的酒吧。",
        "tags": [
            "中年危机",
            "废柴逆袭",
            "小镇故事"
        ]
    },
    {
        "title": "勉强无幸福",
        "url": "./movies/movie-1366.html",
        "cover": "./16.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电影",
        "genre": "都市 / 家庭 / 爱情",
        "category": "最新电视剧",
        "summary": "两个不敢结束也不敢开始的人，在一段“勉强维持”的关系里，终于被生活逼着面对真正想要的幸福。",
        "tags": [
            "将就婚姻",
            "职场压力",
            "原生家庭",
            "情感修复",
            "成年人困境"
        ]
    },
    {
        "title": "没有爱的恋人们",
        "url": "./movies/movie-1367.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 剧情",
        "category": "最新电视剧",
        "summary": "七个宣称“不需要爱情”的男女，在同一栋相亲公寓里，用最功利的方式计算心动。",
        "tags": [
            "无爱症",
            "成年人情感",
            "都市群像",
            "非典型浪漫"
        ]
    },
    {
        "title": "光之雨",
        "url": "./movies/movie-1368.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 治愈",
        "category": "热播剧集",
        "summary": "东京一个被裁员的中年男人发现，每次自己偷偷哭泣时，雨就会变成金色。",
        "tags": [
            "雨",
            "魔法",
            "孤独的人",
            "城市童话"
        ]
    },
    {
        "title": "半斤八两",
        "url": "./movies/movie-1369.html",
        "cover": "./19.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 剧情, 运动",
        "category": "高清电影",
        "summary": "天生神力的农村娃被体校开除，他和半身不遂的父亲开了一家“移动修车铺”走四方。",
        "tags": [
            "举重",
            "农村少年",
            "励志",
            "父子情"
        ]
    },
    {
        "title": "网交陷阱",
        "url": "./movies/movie-1370.html",
        "cover": "./20.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影 / 网络大电影",
        "genre": "犯罪 / 悬疑 / 惊悚",
        "category": "亚洲精选",
        "summary": "一个反诈女警假扮恋爱脑富婆，反向钓鱼一个跨国诈骗集团的头目。",
        "tags": [
            "杀猪盘",
            "反诈",
            "女性",
            "黑色幽默"
        ]
    },
    {
        "title": "抢救千金",
        "url": "./movies/movie-1371.html",
        "cover": "./21.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "category": "热播剧集",
        "summary": "首富千金遭绑，前来营救的不是飞虎队，而是她那个只会拍短视频的蠢萌闺蜜。",
        "tags": [
            "绑票",
            "女保镖",
            "富家千金",
            "反转"
        ]
    },
    {
        "title": "关开",
        "url": "./movies/movie-1372.html",
        "cover": "./22.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "爱情喜剧",
        "summary": "一对双胞胎兄弟被锁在一间只有开关的房间，每按一次开关，就会互换身份和社会关系。",
        "tags": [
            "开关",
            "双胞胎",
            "身份互换",
            "密室"
        ]
    },
    {
        "title": "不倒翁的奇幻旅程",
        "url": "./movies/movie-1373.html",
        "cover": "./23.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动画 / 冒险 / 家庭 / 奇幻",
        "category": "环球片库",
        "summary": "一个永远不会倒下的不倒翁离开旧货摊，穿越四座城市，只为把失散的主人记忆重新拼回来。",
        "tags": [
            "玩具",
            "童心",
            "旅行",
            "友情",
            "失而复得"
        ]
    },
    {
        "title": "国王和电影",
        "url": "./movies/movie-1374.html",
        "cover": "./24.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/喜剧",
        "category": "爱情喜剧",
        "summary": "一位沉迷艺术的小国独裁者，为了拿大奖绑架了一个戛纳剧组，逼他们拍自己写的传记。",
        "tags": [
            "元电影",
            "独裁者",
            "黑色幽默",
            "戏中戏"
        ]
    },
    {
        "title": "白人男孩瑞克",
        "url": "./movies/movie-1375.html",
        "cover": "./25.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 传记",
        "category": "亚洲精选",
        "summary": "80年代底特律，14岁的白人男孩成为FBI线人混入黑帮，最终却被体制抛弃沦为阶下囚。",
        "tags": [
            "真实改编",
            "青少年",
            "卧底",
            "司法黑幕"
        ]
    },
    {
        "title": "晋文公传奇国语",
        "url": "./movies/movie-1376.html",
        "cover": "./26.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史, 战争, 传记",
        "category": "亚洲精选",
        "summary": "重耳十九年流亡路，从贵公子到一方霸主，一部春秋版的“王子复仇记”。",
        "tags": [
            "春秋",
            "霸业",
            "流亡",
            "权谋"
        ]
    },
    {
        "title": "人生第一次",
        "url": "./movies/movie-1377.html",
        "cover": "./27.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 青春",
        "category": "亚洲精选",
        "summary": "从1990年到2025年，每集讲述一代人在某个年龄段的“人生第一次”——第一次上学、第一次辞职、第一次当父母、第一次离婚。",
        "tags": [
            "成长节点",
            "时代变迁",
            "群像戏"
        ]
    },
    {
        "title": "时间码",
        "url": "./movies/movie-1378.html",
        "cover": "./28.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "西班牙",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "category": "动作奇幻",
        "summary": "未来人类眼球植入时间码芯片，一桩谋杀案靠回放死者最后15分钟的记忆破案。",
        "tags": [
            "记忆回放",
            "谋杀",
            "时间跳跃",
            "监控",
            "伦理"
        ]
    },
    {
        "title": "侵入魔界",
        "url": "./movies/movie-1379.html",
        "cover": "./29.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖, 奇幻, 动作",
        "category": "家庭剧情",
        "summary": "现代都市惊现次元裂缝，一位落魄道士必须用古代符咒对抗来自异界的数码恶鬼。",
        "tags": [
            "驱魔",
            "道士",
            "平行世界",
            "血腥美学"
        ]
    },
    {
        "title": "圣洁的艾曼妞",
        "url": "./movies/movie-1380.html",
        "cover": "./30.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "情色, 剧情, 伦理",
        "category": "悬疑犯罪",
        "summary": "19世纪法国修道院，一名虔诚修女在告解室里爱上了听她忏悔的神父，她决定用身体向上帝献祭。",
        "tags": [
            "修女",
            "欲望与信仰",
            "宗教反思",
            "女性觉醒"
        ]
    },
    {
        "title": "单料铜煲心郁郁",
        "url": "./movies/movie-1381.html",
        "cover": "./31.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "category": "动作奇幻",
        "summary": "一家老字号煲仔饭店的铜锅被摔坏，老板和死对头被迫合伙。",
        "tags": [
            "港式",
            "煲仔饭",
            "欢喜冤家",
            "街坊"
        ]
    },
    {
        "title": "我的小天地",
        "url": "./movies/movie-1382.html",
        "cover": "./32.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭, 青春",
        "category": "爱情喜剧",
        "summary": "她住在一间狭小却被她画满未来的房间里，直到暴雨和一次搬迁，让她必须决定自己究竟属于哪里。",
        "tags": [
            "居所",
            "移民",
            "亲情",
            "身份",
            "城市"
        ]
    },
    {
        "title": "不死情谜粤语",
        "url": "./movies/movie-1383.html",
        "cover": "./33.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 奇幻, 悬疑",
        "category": "高清电影",
        "summary": "活了五百年的不死人一直在寻找初恋转世，当他终于找到时，对方却说：“我已经不爱你了，这次换你忘了我吧。”",
        "tags": [
            "轮回",
            "不死之身",
            "秦海璐",
            "刘德华"
        ]
    },
    {
        "title": "舞出个未来",
        "url": "./movies/movie-1384.html",
        "cover": "./34.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "励志, 歌舞, 家庭",
        "category": "最新电视剧",
        "summary": "贵州山村留守儿童，在支教老师带领下组街舞队，用舞蹈对抗命运，跳向世界舞台。",
        "tags": [
            "街舞",
            "留守儿童",
            "梦想",
            "乡村教师",
            "热血"
        ]
    },
    {
        "title": "动物的秘密生活",
        "url": "./movies/movie-1385.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片、自然、剧情式纪实",
        "category": "家庭剧情",
        "summary": "以动物第一人称视角，揭露它们在人类视线之外的“私生活”——恋爱、背叛、谋杀与友谊。",
        "tags": [
            "动物行为",
            "伪纪录片",
            "拟人化",
            "温情"
        ]
    },
    {
        "title": "自然之力",
        "url": "./movies/movie-1386.html",
        "cover": "./36.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "科幻惊悚电影",
        "genre": "科幻、悬疑、环境、伦理",
        "category": "爱情喜剧",
        "summary": "连续三个月无风无雨后，实验团队以为自然终止了循环，却发现自然只是在用沉默回应“能源合约”，而整座城正被迫在下一场雷雨前完成选择。",
        "tags": [
            "极端气候",
            "能源伦理",
            "风脉系统",
            "生态复权",
            "科学争论"
        ]
    },
    {
        "title": "烈火如歌",
        "url": "./movies/movie-1387.html",
        "cover": "./37.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装、爱情、奇幻",
        "category": "家庭剧情",
        "summary": "烈火山庄的继承人如歌，在灭门惨案中发现自己的真实身份，竟是上古火神的转世容器。",
        "tags": [
            "仙侠",
            "门派恩怨",
            "三生三世",
            "虐恋",
            "火焰魔法"
        ]
    },
    {
        "title": "胭花泪粤语",
        "url": "./movies/movie-1388.html",
        "cover": "./38.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 历史",
        "category": "最新电视剧",
        "summary": "三十年代广州，两名粤剧花旦为争夺“省港第一胭花”的名号反目成仇，却不知幕后的操纵者是同一个男人。",
        "tags": [
            "粤剧",
            "民国花魁",
            "姐妹反目"
        ]
    },
    {
        "title": "一切皆允",
        "url": "./movies/movie-1389.html",
        "cover": "./39.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "美国",
        "type": "电影",
        "genre": "动作，冒险，刺客题材",
        "category": "动作奇幻",
        "summary": "为了阻止圣殿骑士抹除自由意志，现代刺客必须穿越到法国大革命时期，刺杀一个“不该死的人”。",
        "tags": [
            "刺客信条改编",
            "宗教战争",
            "历史穿越",
            "跑酷美学"
        ]
    },
    {
        "title": "追星星的人",
        "url": "./movies/movie-1390.html",
        "cover": "./40.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧 (32集)",
        "genre": "剧情, 爱情, 科幻",
        "category": "高清电影",
        "summary": "天文台助理暗恋女科学家十年，直到她因实验事故陷入时间循环，他开始每天帮她修正错误。",
        "tags": [
            "科幻",
            "天文",
            "暗恋",
            "时间循环"
        ]
    },
    {
        "title": "逆流大叔",
        "url": "./movies/movie-1391.html",
        "cover": "./41.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 喜剧, 运动",
        "category": "动作奇幻",
        "summary": "四个中年废柴被公司强制组建龙舟队，他们只想着混日子，直到发现对手是前女友的老公。",
        "tags": [
            "龙舟",
            "中年危机",
            "励志",
            "港味",
            "小人物"
        ]
    },
    {
        "title": "绿野红颜",
        "url": "./movies/movie-1392.html",
        "cover": "./42.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代、爱情、抗战",
        "category": "动作奇幻",
        "summary": "1940年东北雪原，一位猎户女儿在抗联战士的遗物里，发现了自己失踪三年的未婚夫的名字。",
        "tags": [
            "东北抗联",
            "女猎人",
            "日军实验室",
            "雪原"
        ]
    },
    {
        "title": "爱情魔发师",
        "url": "./movies/movie-1393.html",
        "cover": "./43.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情，喜剧，剧情",
        "category": "家庭剧情",
        "summary": "毒舌发型大师意外收了死对头女儿当学徒，剪刀之下藏着二十年前的秘密。",
        "tags": [
            "发型设计",
            "欢喜冤家",
            "职场",
            "成长",
            "逆袭"
        ]
    },
    {
        "title": "魔戒",
        "url": "./movies/movie-1394.html",
        "cover": "./44.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "美国 / 新西兰",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "category": "热播剧集",
        "summary": "一名怯懦的霍比特人继承了一枚拥有奴役世界力量的戒指，整个中洲的命运都压在了他毛茸茸的脚掌上。",
        "tags": [
            "史诗",
            "黑暗魔君",
            "护戒小队"
        ]
    },
    {
        "title": "触火之恋",
        "url": "./movies/movie-1395.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 剧情",
        "category": "经典回看",
        "summary": "两个患有罕见“触火痛症”的年轻人，在彼此身上找到了唯一不痛的拥抱。",
        "tags": [
            "边缘人群",
            "疼痛美学",
            "疗愈",
            "火焰意象"
        ]
    },
    {
        "title": "龙兄虎弟国语",
        "url": "./movies/movie-1396.html",
        "cover": "./46.jpg",
        "year": "1987",
        "yearNumber": 1987,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 冒险 / 喜剧",
        "category": "经典回看",
        "summary": "亚洲飞鹰受命寻找“上帝武装”三件套，却被亲哥哥抢走了最关键的一件。",
        "tags": [
            "成龙",
            "寻宝",
            "兄弟情"
        ]
    },
    {
        "title": "邪恶力量第九季",
        "url": "./movies/movie-1397.html",
        "cover": "./47.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻 / 惊悚",
        "category": "经典回看",
        "summary": "击败上帝后，温彻斯特兄弟发现真正的“邪恶力量”源自人类集体潜意识的具象化。",
        "tags": [
            "驱魔",
            "兄弟情",
            "克苏鲁"
        ]
    },
    {
        "title": "错惹胭脂色",
        "url": "./movies/movie-1398.html",
        "cover": "./48.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 古装 / 悬疑",
        "category": "热播剧集",
        "summary": "一个被当做替身娶进门的庶女，在新婚夜发现：死去的正牌小姐其实是自己设计假死的。",
        "tags": [
            "替身",
            "宅斗",
            "反转",
            "女性互助",
            "国风"
        ]
    },
    {
        "title": "致命录像带2",
        "url": "./movies/movie-1399.html",
        "cover": "./49.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "category": "悬疑犯罪",
        "summary": "侦探在废弃房屋中找到一堆诡异的录像带，每一盘都记录着一种通往地狱维度的致命仪式。",
        "tags": [
            "伪纪录片",
            "分段式",
            "超自然",
            "邪典"
        ]
    },
    {
        "title": "中国家庭421",
        "url": "./movies/movie-1400.html",
        "cover": "./50.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "中国内地",
        "type": "电视剧",
        "genre": "家庭 / 伦理",
        "category": "悬疑犯罪",
        "summary": "四个老人、一对夫妻、一个孩子，这个“421家庭”的顶梁柱突然倒下，谁来买单？",
        "tags": [
            "独生子女",
            "养老困境",
            "现实主义"
        ]
    },
    {
        "title": "激情后的阴影",
        "url": "./movies/movie-1401.html",
        "cover": "./51.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "category": "爱情喜剧",
        "summary": "妻子车祸毁容整容归来，丈夫却发现，这个“妻子”知道他所有的秘密，唯独不知道他们是夫妻。",
        "tags": [
            "心理",
            "婚姻",
            "幻觉",
            "反转"
        ]
    },
    {
        "title": "最后一次心动",
        "url": "./movies/movie-1402.html",
        "cover": "./52.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "德国",
        "type": "电影",
        "genre": "剧情/爱情",
        "category": "亚洲精选",
        "summary": "失眠的救护员每晚在街头游荡，直到他接到一个任务：把一个心脏源送到对面医院，而那颗心脏的主人刚刚对他笑过。",
        "tags": [
            "救护员",
            "创伤",
            "相遇",
            "救赎"
        ]
    },
    {
        "title": "嗨咖上月球",
        "url": "./movies/movie-1403.html",
        "cover": "./53.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧 / 科幻 / 奇幻",
        "category": "环球片库",
        "summary": "两个生活失意的废柴在狂欢中误闯废弃航天基地，竟意外被发射上了月球。",
        "tags": [
            "嗑药",
            "奇幻漂流",
            "小人物"
        ]
    },
    {
        "title": "齐勒维国语",
        "url": "./movies/movie-1404.html",
        "cover": "./54.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "爱沙尼亚",
        "type": "电影",
        "genre": "剧情, 历史, 悬疑",
        "category": "亚洲精选",
        "summary": "语言学教授发现，一种只有三人会说的垂死语言里，藏着一个被苏联刻意抹去的小镇真相。",
        "tags": [
            "语言",
            "殖民",
            "消失的文明",
            "语言学"
        ]
    },
    {
        "title": "男神女神第一季",
        "url": "./movies/movie-1405.html",
        "cover": "./55.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺 / 真人秀",
        "genre": "恋爱 / 观察 / 社交 / 实验",
        "category": "高清电影",
        "summary": "八位“自评1分”的普通人与八位“公认9分”的男神女神互换造型团队，看皮囊改变之后，心的偏见还会存在吗？",
        "tags": [
            "逆向恋爱",
            "颜值反转",
            "素人改造",
            "心理洞察"
        ]
    },
    {
        "title": "赤壁烽烟",
        "url": "./movies/movie-1406.html",
        "cover": "./56.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史、战争、动作",
        "category": "经典回看",
        "summary": "黄盖并没有诈降，火烧赤壁的背后，是一场被史书抹去的谍中谍心理战。",
        "tags": [
            "史诗",
            "海战",
            "全新解读",
            "硬核"
        ]
    },
    {
        "title": "乌托亚，7月22日",
        "url": "./movies/movie-1407.html",
        "cover": "./57.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "挪威",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 历史",
        "category": "热播剧集",
        "summary": "夏令营的欢笑声被枪声撕碎，一名少女躲在床底，用手机记录下地狱般的七十二分钟。",
        "tags": [
            "真实事件改编",
            "第一视角",
            "青少年",
            "幸存者",
            "社会反思"
        ]
    },
    {
        "title": "沼泽地里的秘密",
        "url": "./movies/movie-1408.html",
        "cover": "./58.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑",
        "category": "动作奇幻",
        "summary": "路易斯安那沼泽深处发现17具女尸，当地警长发现所有死者都曾拨打过同一个号码。",
        "tags": [
            "犯罪",
            "南方哥特",
            "家族",
            "连环案",
            "慢热"
        ]
    },
    {
        "title": "凄灵室",
        "url": "./movies/movie-1409.html",
        "cover": "./59.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "恐怖，悬疑，民俗",
        "category": "家庭剧情",
        "summary": "六个网红为了流量进入湘西废弃的“凄灵室”，却发现每人的抖音账号都在直播他们的死亡倒计时。",
        "tags": [
            "中式恐怖",
            "湘西民俗",
            "密室逃生"
        ]
    },
    {
        "title": "油尖少爷",
        "url": "./movies/movie-1410.html",
        "cover": "./60.jpg",
        "year": "1996",
        "yearNumber": 1996,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作",
        "category": "最新电视剧",
        "summary": "英国留学归来的富二代接管夜总会，却发现自家生意不过是黑帮洗钱的傀儡，老管家被灭口。",
        "tags": [
            "江湖",
            "少爷",
            "黑帮",
            "复仇"
        ]
    },
    {
        "title": "三块石",
        "url": "./movies/movie-1411.html",
        "cover": "./61.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 战争 / 历史",
        "category": "动作奇幻",
        "summary": "三块巨石下面藏着一座伤员洞，一个猎户妇女用自己孩子的命换了八个游击队员的命。",
        "tags": [
            "东北抗联",
            "三块石密营",
            "军民鱼水",
            "真实改编"
        ]
    },
    {
        "title": "杀人影子",
        "url": "./movies/movie-1412.html",
        "cover": "./62.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪 / 悬疑 / 惊悚",
        "category": "环球片库",
        "summary": "连环杀人现场没有凶手任何影像记录，警方发现凶手可能是一个“没有影子”的人，而他的下一个目标，是追查他的女警。",
        "tags": [
            "无影杀手",
            "特殊设定",
            "连环案"
        ]
    },
    {
        "title": "高卢英雄：诸神领域",
        "url": "./movies/movie-1413.html",
        "cover": "./63.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 奇幻 / 冒险",
        "category": "热播剧集",
        "summary": "高卢村子的英雄们这次要上天——因为罗马诸神托梦说，他们欠了天上一大笔“英雄税”。",
        "tags": [
            "高卢英雄",
            "罗马诸神",
            "恶搞神话",
            "法式幽默"
        ]
    },
    {
        "title": "重神机潘多拉",
        "url": "./movies/movie-1414.html",
        "cover": "./64.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/动作",
        "category": "爱情喜剧",
        "summary": "末世中，科学家之女被迫驾驶禁忌机甲“潘多拉”，却发现机甲的核心动力是她的亲生父亲。",
        "tags": [
            "机甲",
            "基因改造",
            "末日废土",
            "硬核科幻",
            "战斗"
        ]
    },
    {
        "title": "辣椒里放卷心菜",
        "url": "./movies/movie-1415.html",
        "cover": "./65.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "悬疑犯罪",
        "summary": "一道匪夷所思的家传菜，竟成了叛逆女儿与失智父亲最后的沟通密码。",
        "tags": [
            "美食隐喻",
            "代际冲突",
            "荒诞喜剧"
        ]
    },
    {
        "title": "迷失的波西米亚",
        "url": "./movies/movie-1416.html",
        "cover": "./66.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "捷克",
        "type": "电影",
        "genre": "剧情/音乐",
        "category": "悬疑犯罪",
        "summary": "1968年，一个街头手风琴手在苏联坦克开进布拉格时，选择继续弹完他的曲子。",
        "tags": [
            "流浪艺人",
            "布拉格之春",
            "手风琴"
        ]
    },
    {
        "title": "大梦西游3女儿国奇遇记",
        "url": "./movies/movie-1417.html",
        "cover": "./67.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "奇幻 / 喜剧",
        "category": "最新电视剧",
        "summary": "唐僧喝了子母河的水怀孕了，孙悟空为了打胎，必须在三天内找到女儿国消失已久的第一滴“男人泪”。",
        "tags": [
            "西游改编",
            "女儿国",
            "爱情",
            "网大"
        ]
    },
    {
        "title": "机动战舰剧场版：暗黑王子",
        "url": "./movies/movie-1418.html",
        "cover": "./68.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻 / 机战 / 悬疑",
        "category": "环球片库",
        "summary": "失踪十年的王牌驾驶员突然回归，但他的机体里搭载的可能是毁灭人类的病毒。",
        "tags": [
            "太空歌剧",
            "失忆",
            "克隆",
            "政治阴谋",
            "燃"
        ]
    },
    {
        "title": "公主闹双包",
        "url": "./movies/movie-1419.html",
        "cover": "./69.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、家庭",
        "category": "动作奇幻",
        "summary": "平民女孩与欧洲小国公主长得一模一样，两人互换身份后，公主发现当平民比当女王还累。",
        "tags": [
            "替身",
            "王室",
            "双胞胎梗",
            "身份互换"
        ]
    },
    {
        "title": "洛城大暴动",
        "url": "./movies/movie-1420.html",
        "cover": "./70.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 历史改编",
        "category": "爱情喜剧",
        "summary": "1992年洛杉矶暴动中，五组不同种族的人在一家韩国超市里争夺最后的食物和水。",
        "tags": [
            "街头战争",
            "真实事件",
            "多线叙事"
        ]
    },
    {
        "title": "征空伟史",
        "url": "./movies/movie-1421.html",
        "cover": "./71.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "科幻历史 / 传记冒险",
        "category": "动作奇幻",
        "summary": "从第一枚试验火箭到月背信标工程，一个普通工程师用三十年把中国人的飞天梦想写进真实轨道。",
        "tags": [
            "航天工程",
            "国家记忆",
            "时间跨度",
            "试验事故",
            "团队协作"
        ]
    },
    {
        "title": "六叠间的钢琴家",
        "url": "./movies/movie-1422.html",
        "cover": "./72.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 音乐",
        "category": "动作奇幻",
        "summary": "被大厂裁员的社恐青年，躲在六叠（约10平米）的出租屋里，靠一架破旧的立式钢琴和直播演奏，拯救了无数深夜孤独的灵魂。",
        "tags": [
            "职场压力",
            "抑郁症",
            "音乐治愈",
            "内向者"
        ]
    },
    {
        "title": "赌城浪子",
        "url": "./movies/movie-1423.html",
        "cover": "./73.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "category": "高清电影",
        "summary": "澳门赌王之子流落拉斯维加斯，欠下巨债却意外赢得黑帮千金的芳心。",
        "tags": [
            "赌片",
            "浪子回头",
            "摩纳哥"
        ]
    },
    {
        "title": "美国恐怖故事集第三季",
        "url": "./movies/movie-1424.html",
        "cover": "./74.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖 / 奇幻",
        "category": "高清电影",
        "summary": "本季主题“数字幽灵”，聚焦社交网络上的怨念如何通过算法实体化复仇。",
        "tags": [
            "单元剧",
            "赛博恐怖",
            "都市怪谈",
            "政治隐喻"
        ]
    },
    {
        "title": "疯狂艺术村",
        "url": "./movies/movie-1425.html",
        "cover": "./75.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 悬疑, 职场",
        "category": "最新电视剧",
        "summary": "北京一个艺术村里十间工作室、二十二个租客，每间工作室都藏着一个秘密。",
        "tags": [
            "艺术圈",
            "荒诞",
            "群像",
            "讽刺"
        ]
    },
    {
        "title": "遗愿清单",
        "url": "./movies/movie-1426.html",
        "cover": "./76.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 治愈",
        "category": "爱情喜剧",
        "summary": "一所临终关怀医院的两位老人，偷跑出去完成对方年轻时写下的遗愿清单。",
        "tags": [
            "临终",
            "友情",
            "治愈",
            "人生感悟"
        ]
    },
    {
        "title": "惊声尖叫第三季",
        "url": "./movies/movie-1427.html",
        "cover": "./77.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖 / 悬疑",
        "category": "家庭剧情",
        "summary": "鬼脸面具三十年后重返温斯洛小镇，这一次，被杀的都是当年幸存者的孩子们。",
        "tags": [
            "鬼脸杀手",
            "小镇秘密",
            "传承"
        ]
    },
    {
        "title": "时尚之王1",
        "url": "./movies/movie-1428.html",
        "cover": "./78.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "剧集",
        "genre": "剧情 / 传记",
        "category": "亚洲精选",
        "summary": "从街头涂鸦到高定秀场，他用剪刀切开了一个帝国的崛起。",
        "tags": [
            "时尚圈",
            "商战",
            "天才",
            "纸醉金迷"
        ]
    },
    {
        "title": "黄石第四季",
        "url": "./movies/movie-1429.html",
        "cover": "./79.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电视剧",
        "genre": "西部 / 剧情 / 家族 / 犯罪",
        "category": "环球片库",
        "summary": "约翰·达顿遭遇致命袭击后，黄石牧场的每个人都被迫站队，而这场复仇比任何枪战都更接近家族崩塌的边缘。",
        "tags": [
            "农场争夺",
            "家族裂痕",
            "边境暴力",
            "权力博弈",
            "西部牧场"
        ]
    },
    {
        "title": "阳神之太上忘情",
        "url": "./movies/movie-1430.html",
        "cover": "./80.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "奇幻 / 武侠 / 玄幻",
        "category": "热播剧集",
        "summary": "修仙天才为了突破最后境界斩断情根，却发现“太上忘情”四个字里，藏着天下最大的谎言。",
        "tags": [
            "修真",
            "网文改编",
            "特效修仙",
            "太上忘情"
        ]
    },
    {
        "title": "沙海狂鲨",
        "url": "./movies/movie-1431.html",
        "cover": "./81.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "category": "热播剧集",
        "summary": "一座沙漠中的地下军事基地泄露后，凶残的变异鲨鱼开始在沙子里游动，吞噬着每一个路过的人和车。",
        "tags": [
            "鲨鱼",
            "沙漠",
            "变异",
            "公路",
            "血腥"
        ]
    },
    {
        "title": "“字”从遇见你第一季",
        "url": "./movies/movie-1432.html",
        "cover": "./82.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "纪录片",
        "genre": "历史文化",
        "category": "最新电视剧",
        "summary": "每集深挖一个汉字的前世今生，从甲骨文到表情包，字里行间全是文明。",
        "tags": [
            "汉字演变",
            "考古探秘",
            "每集一字"
        ]
    },
    {
        "title": "美国的恶作剧家",
        "url": "./movies/movie-1433.html",
        "cover": "./83.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录 / 犯罪",
        "category": "亚洲精选",
        "summary": "揭秘美国最臭名昭著的恶作剧团体，他们让CNN、NASA甚至FBI都上过当。",
        "tags": [
            "恶作剧",
            "黑客",
            "网络迷因",
            "真实事件"
        ]
    },
    {
        "title": "黑吃黑第一季",
        "url": "./movies/movie-1434.html",
        "cover": "./84.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 剧情 / 犯罪",
        "category": "爱情喜剧",
        "summary": "刚出狱的顶级大盗，阴差阳错顶替了一个小镇警长的身份，却发现这座小镇里每个人都比他更危险。",
        "tags": [
            "暴力",
            "情色",
            "复仇",
            "小镇",
            "硬汉"
        ]
    },
    {
        "title": "恶魔印记",
        "url": "./movies/movie-1435.html",
        "cover": "./85.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "category": "悬疑犯罪",
        "summary": "一种会在皮肤上自行蔓延的恶魔纹身，每蔓延一寸，宿主身边的人就会离奇惨死。",
        "tags": [
            "诅咒",
            "纹身",
            "都市传说",
            "复仇"
        ]
    },
    {
        "title": "鱿鱼游戏第二季",
        "url": "./movies/movie-1436.html",
        "cover": "./86.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "电视剧",
        "genre": "惊悚，悬疑，生存",
        "category": "家庭剧情",
        "summary": "成奇勋带着自爆项链重返游戏总部，却发现这一届的玩家全都是全球富豪自愿参加的。",
        "tags": [
            "生存游戏",
            "社会隐喻",
            "国际玩家",
            "更高赌注"
        ]
    },
    {
        "title": "山口山战记之草裙娃娃",
        "url": "./movies/movie-1437.html",
        "cover": "./87.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "动画",
        "genre": "喜剧, 冒险, 游戏",
        "category": "悬疑犯罪",
        "summary": "联盟与部落的精英们被一个草裙娃娃互换了身体，敌人变成了自己的“猪队友”。",
        "tags": [
            "魔兽同人",
            "搞笑",
            "诅咒",
            "团队"
        ]
    },
    {
        "title": "杰罗德游戏",
        "url": "./movies/movie-1438.html",
        "cover": "./88.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 心理",
        "category": "热播剧集",
        "summary": "一场情趣游戏变成死亡陷阱，她必须在幻想与现实的裂缝中杀死丈夫或被他杀死。",
        "tags": [
            "密室",
            "心理博弈",
            "反转"
        ]
    },
    {
        "title": "碧血溅长空",
        "url": "./movies/movie-1439.html",
        "cover": "./89.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争， 历史",
        "category": "家庭剧情",
        "summary": "抗战时期，一群飞行学员用落后的战机在苍穹之上筑起了第一道血肉防线。",
        "tags": [
            "空战",
            "抗日",
            "兄弟情",
            "热血"
        ]
    },
    {
        "title": "特技飞车人",
        "url": "./movies/movie-1440.html",
        "cover": "./90.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 剧情, 冒险",
        "category": "环球片库",
        "summary": "一个默默无闻的飞车特技替身，为了实现导演梦，亲自上阵设计并出演了一场史无前例的飞车戏。",
        "tags": [
            "特技演员",
            "飞车",
            "替身",
            "梦想"
        ]
    },
    {
        "title": "十二月男孩",
        "url": "./movies/movie-1441.html",
        "cover": "./91.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国 / 澳大利亚",
        "type": "电影",
        "genre": "剧情 / 青春 / 生存",
        "category": "动作奇幻",
        "summary": "四个孤儿院男孩被送到海边农场过圣诞，他们必须在一周内找到“被领养”的理由，否则将永久分离。",
        "tags": [
            "孤儿院",
            "海边",
            "友情",
            "成长",
            "压抑"
        ]
    },
    {
        "title": "日丹诺夫地铁案",
        "url": "./movies/movie-1442.html",
        "cover": "./92.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "category": "家庭剧情",
        "summary": "一列在地铁隧道中凭空消失的列车，牵引出一个来自苏联时代的惊天机密。",
        "tags": [
            "地铁",
            "失踪",
            "档案",
            "苏联"
        ]
    },
    {
        "title": "波利死后",
        "url": "./movies/movie-1443.html",
        "cover": "./93.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 悬疑, 黑色幽默",
        "category": "热播剧集",
        "summary": "波利葬礼上，四个儿女准备念悼词时，发现母亲的日记里写的全是别人家的孩子。",
        "tags": [
            "葬礼",
            "家庭秘密",
            "回忆录",
            "反转",
            "英式幽默"
        ]
    },
    {
        "title": "当生命遇上生命",
        "url": "./movies/movie-1444.html",
        "cover": "./94.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 爱情",
        "category": "热播剧集",
        "summary": "两个同时收到绝症诊断的陌生人在医院天台相遇，决定用最后的钱租一辆房车，反向环游世界。",
        "tags": [
            "绝症",
            "时空",
            "哲学",
            "治愈"
        ]
    },
    {
        "title": "三个邻居",
        "url": "./movies/movie-1445.html",
        "cover": "./95.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 悬疑",
        "category": "最新电视剧",
        "summary": "老旧小区的三户邻居，每户都在偷听另外两户的隐私，却意外拼凑出一桩二十年未破的命案。",
        "tags": [
            "老小区",
            "窃听",
            "邻里纠纷",
            "全员恶人",
            "多层反转"
        ]
    },
    {
        "title": "大内医探",
        "url": "./movies/movie-1446.html",
        "cover": "./96.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国内地",
        "type": "电影",
        "genre": "喜剧、悬疑",
        "category": "家庭剧情",
        "summary": "清朝最后一位“假太监”太医，必须在三天内查出皇宫连环杀人案的真凶，否则自己会被当作凶手处决。",
        "tags": [
            "太监",
            "太医",
            "密室",
            "皇宫",
            "连环案"
        ]
    },
    {
        "title": "赎罪",
        "url": "./movies/movie-1447.html",
        "cover": "./97.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "英国",
        "type": "电影",
        "genre": "爱情, 剧情, 战争",
        "category": "家庭剧情",
        "summary": "一个少女的一句谎言，拆散了一对恋人，她用一生书写虚构的结局来为自己赎罪。",
        "tags": [
            "悲剧",
            "误解",
            "二战",
            "赎罪"
        ]
    },
    {
        "title": "失意旅行",
        "url": "./movies/movie-1448.html",
        "cover": "./98.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧",
        "category": "热播剧集",
        "summary": "一个情场职场双失意的中年男人报名参加了“失意旅行团”，结果发现全团成员都是想在路上寻死的奇葩。",
        "tags": [
            "黑色幽默",
            "倒霉蛋",
            "旅途奇遇",
            "荒诞"
        ]
    },
    {
        "title": "窈窕老爸",
        "url": "./movies/movie-1449.html",
        "cover": "./99.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "动作奇幻",
        "summary": "一位变性为女人的父亲，隐瞒身份去见自己从未谋面的叛逆女儿，却阴差阳错成了她的知心闺蜜。",
        "tags": [
            "变性人",
            "父女重逢",
            "身份认同",
            "公路片"
        ]
    },
    {
        "title": "黑道家族 第二季",
        "url": "./movies/movie-1450.html",
        "cover": "./100.jpg",
        "year": "2000",
        "yearNumber": 2000,
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情 / 犯罪 / 黑色幽默",
        "category": "爱情喜剧",
        "summary": "焦虑的黑帮老大托尼既要应付母亲的死亡阴谋，又要处理女儿早恋，心理医生的诊所成了他最后的避难所。",
        "tags": [
            "黑帮史诗",
            "心理分析",
            "家庭伦理",
            "经典",
            "反英雄"
        ]
    },
    {
        "title": "普鲁士蓝的肖像",
        "url": "./movies/movie-1451.html",
        "cover": "./101.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "历史传记",
        "category": "家庭剧情",
        "summary": "一位为集中营军官画肖像的犹太画家，在每个颜料层里藏下了复仇的密码。",
        "tags": [
            "二战",
            "画家",
            "艺术与罪恶",
            "纳粹"
        ]
    },
    {
        "title": "东方秃鹰",
        "url": "./movies/movie-1452.html",
        "cover": "./102.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 战争",
        "category": "动作奇幻",
        "summary": "越战末期，一支由华人死刑犯组成的特种小队，被空投到北越丛林，执行必死的炸毁军火库任务。",
        "tags": [
            "越战",
            "特种小队",
            "悲情英雄"
        ]
    },
    {
        "title": "当代男儿粤语",
        "url": "./movies/movie-1453.html",
        "cover": "./103.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情",
        "category": "悬疑犯罪",
        "summary": "三个庙街长大的兄弟，一个成了警察，一个成了黑帮，一个成了大亨，黄金十年情义两难全。",
        "tags": [
            "兄弟",
            "时代",
            "创业",
            "恩仇"
        ]
    },
    {
        "title": "新鬼马神仙车",
        "url": "./movies/movie-1454.html",
        "cover": "./104.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 奇幻 / 家庭",
        "category": "悬疑犯罪",
        "summary": "一辆报废多年的古董出租车，突然被雷劈出AI意识，非要帮一个倒霉蛋司机追回前女友。",
        "tags": [
            "合家欢",
            "老爷车",
            "AI",
            "怀旧",
            "无厘头"
        ]
    },
    {
        "title": "没有具必秀",
        "url": "./movies/movie-1455.html",
        "cover": "./105.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情，家庭，喜剧",
        "category": "亚洲精选",
        "summary": "前黑帮二把手出狱后想当好人，却发现自己曾经的跟班成了检察官，天天盯着他。",
        "tags": [
            "大叔",
            "落魄",
            "师徒",
            "东山再起"
        ]
    },
    {
        "title": "南家三姐妹",
        "url": "./movies/movie-1456.html",
        "cover": "./106.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "category": "亚洲精选",
        "summary": "跨越昭和、平成、令和三代，性格迥异的三姐妹用一家理发店见证日本女性的六十年。",
        "tags": [
            "亲情",
            "治愈",
            "时代变迁"
        ]
    },
    {
        "title": "甜蜜海风",
        "url": "./movies/movie-1457.html",
        "cover": "./107.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 青春",
        "category": "热播剧集",
        "summary": "他在澎湖开了家叫“等你”的民宿，却不知道每个住进来的客人都在替他找一个人。",
        "tags": [
            "海边",
            "暗恋",
            "治愈"
        ]
    },
    {
        "title": "杀戮战警",
        "url": "./movies/movie-1458.html",
        "cover": "./108.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作、犯罪",
        "category": "爱情喜剧",
        "summary": "前海军陆战队员为寻找失踪妹妹，打进洛杉矶地下黑拳系统，发现每一场比赛的输家都会变成“商品”。",
        "tags": [
            "黑人硬汉",
            "地下拳场",
            "复仇爽片",
            "长镜头打斗"
        ]
    },
    {
        "title": "在恶魔门前",
        "url": "./movies/movie-1459.html",
        "cover": "./109.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "category": "亚洲精选",
        "summary": "神父在孤岛教堂迎接忏悔者，却发现对方正是二十年前被他诬陷为恶魔的村民。",
        "tags": [
            "心理压迫",
            "邪教",
            "孤岛",
            "倒计时"
        ]
    },
    {
        "title": "课间秘密",
        "url": "./movies/movie-1460.html",
        "cover": "./110.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国",
        "type": "电影",
        "genre": "青春悬疑",
        "category": "动作奇幻",
        "summary": "一次寻常课间，四个好友共同守护的秘密，在毕业前最后一个课间被意外引爆。",
        "tags": [
            "校园",
            "秘密",
            "友谊",
            "反转"
        ]
    },
    {
        "title": "你好，老叔",
        "url": "./movies/movie-1461.html",
        "cover": "./111.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭 / 喜剧",
        "category": "悬疑犯罪",
        "summary": "北漂失败回老家的侄子，和被全村当成傻子的亲叔叔，联手把土特产卖成了全网爆款。",
        "tags": [
            "代际冲突",
            "小镇青年",
            "直播带货",
            "反向教育"
        ]
    },
    {
        "title": "菜鸟变形记",
        "url": "./movies/movie-1462.html",
        "cover": "./112.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 职场 / 奇幻",
        "category": "高清电影",
        "summary": "史上最废柴的游戏策划，被反派CEO扔进了自家开发的硬核修仙游戏里，必须通关才能回到现实。",
        "tags": [
            "游戏开发",
            "菜鸟逆袭",
            "虚拟现实",
            "搞笑"
        ]
    },
    {
        "title": "市井小民",
        "url": "./movies/movie-1463.html",
        "cover": "./113.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情， 黑色幽默",
        "category": "悬疑犯罪",
        "summary": "一个失业的中年焊工、一个叛逆的富二代和一个失忆的老人，因为一张来路不明的藏宝图，在小城里上演了一场荒诞的追逐。",
        "tags": [
            "小人物",
            "荒诞",
            "方言",
            "底层",
            "生存"
        ]
    },
    {
        "title": "犯罪都市3",
        "url": "./movies/movie-1464.html",
        "cover": "./114.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 喜剧",
        "category": "最新电视剧",
        "summary": "“怪物刑警”马锡道调任首尔广域搜查队，这次他要面对的不仅是黑帮，还有隐藏在警局内部的内鬼。",
        "tags": [
            "马锡道",
            "以暴制暴",
            "黑帮火并",
            "续集"
        ]
    },
    {
        "title": "川流不息",
        "url": "./movies/movie-1465.html",
        "cover": "./115.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 生活 / 治愈",
        "category": "热播剧集",
        "summary": "东京下町一家百年关东煮老店，三代女掌柜在不同时代洪流中，用味道守护家庭与传承。",
        "tags": [
            "三代女性",
            "家庭餐馆",
            "时代变迁",
            "料理"
        ]
    },
    {
        "title": "北斗之拳系列: 多奇传",
        "url": "./movies/movie-1466.html",
        "cover": "./116.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影 / 动画",
        "genre": "动作 / 科幻 / 动画",
        "category": "动作奇幻",
        "summary": "北斗神拳继承人多奇，为了救弟弟健次郎，自愿成为核爆后的“活死人”。",
        "tags": [
            "热血",
            "兄弟",
            "宿命",
            "末世"
        ]
    },
    {
        "title": "茱丽叶恋习曲",
        "url": "./movies/movie-1467.html",
        "cover": "./117.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "爱情，音乐，剧情",
        "category": "高清电影",
        "summary": "一首未完成的钢琴曲，串联起两代人的爱情遗憾与救赎。",
        "tags": [
            "浪漫",
            "音乐",
            "成长",
            "错过",
            "重逢"
        ]
    },
    {
        "title": "罪之缘",
        "url": "./movies/movie-1468.html",
        "cover": "./118.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国内地",
        "type": "电视剧",
        "genre": "剧情、爱情、家庭",
        "category": "动作奇幻",
        "summary": "富二代肇事逃逸，贫穷大学生替他顶罪入狱，出狱后他发现，自己的未婚妻已经嫁给了那个富二代。",
        "tags": [
            "顶罪",
            "错爱",
            "人生换位",
            "虐心",
            "现实题材"
        ]
    },
    {
        "title": "爱，断了线",
        "url": "./movies/movie-1469.html",
        "cover": "./119.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 爱情",
        "category": "环球片库",
        "summary": "妻子捡到一部手机，里面是丈夫与情人的甜蜜短信，当她试图揭穿时，发现机主并非丈夫。",
        "tags": [
            "手机",
            "出轨",
            "心理战",
            "反转",
            "都市"
        ]
    },
    {
        "title": "我是那不勒斯人",
        "url": "./movies/movie-1470.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情, 历史",
        "category": "最新电视剧",
        "summary": "一个在那不勒斯黑手党街区长大的男孩，用十年时间拍下了一部改变整个城市的纪录片。",
        "tags": [
            "黑手党",
            "童年",
            "见证者",
            "南方"
        ]
    },
    {
        "title": "横财烧身",
        "url": "./movies/movie-1471.html",
        "cover": "./121.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，黑色",
        "category": "环球片库",
        "summary": "菜市场鱼贩捡到一袋黑钱，本想买房开店，却引来了黑帮、警察和自家老婆的情夫。",
        "tags": [
            "荒诞",
            "贪婪",
            "小市民",
            "因果报应"
        ]
    },
    {
        "title": "三六巷",
        "url": "./movies/movie-1472.html",
        "cover": "./122.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "海口最后一个城中村“三六巷”面临强拆，本地阿叔、东北租客、福建开发商和越南偷渡客，四个人为了各自的家，拿起了撬棍和砍刀。",
        "tags": [
            "城中村",
            "拆迁",
            "黑帮"
        ]
    },
    {
        "title": "花心大少",
        "url": "./movies/movie-1473.html",
        "cover": "./123.jpg",
        "year": "1989",
        "yearNumber": 1989,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧， 爱情",
        "category": "经典回看",
        "summary": "香港顶级花花公子打赌追求一个平凡女孩，却意外发现自己真的爱上了她。",
        "tags": [
            "花花公子",
            "浪子回头",
            "富豪",
            "真情"
        ]
    },
    {
        "title": "海猪仔",
        "url": "./movies/movie-1474.html",
        "cover": "./124.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 黑色幽默",
        "category": "动作奇幻",
        "summary": "被全村嘲笑的“海猪仔”阿海，意外发现一具搁浅的抹香鲸，一场围绕巨鲸的利益狂欢就此失控。",
        "tags": [
            "小人物悲喜",
            "生态冲突",
            "黑色幽默",
            "草根英雄"
        ]
    },
    {
        "title": "父亲劫",
        "url": "./movies/movie-1475.html",
        "cover": "./125.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "category": "动作奇幻",
        "summary": "父亲节当晚，四个曾杀害自己父亲的子女收到神秘邀请，迎接他们的是一场血腥审判。",
        "tags": [
            "父亲节",
            "复仇",
            "家庭秘密",
            "变态杀手"
        ]
    },
    {
        "title": "血月初现",
        "url": "./movies/movie-1476.html",
        "cover": "./126.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装 / 动作",
        "category": "亚洲精选",
        "summary": "武学世家的最后一位血脉竟是目不识丁的绣娘，她用绣花针重演了当年灭门案的每一招每一式。",
        "tags": [
            "武侠",
            "灭门",
            "替父报仇",
            "女侠"
        ]
    },
    {
        "title": "问鼎奥斯卡",
        "url": "./movies/movie-1477.html",
        "cover": "./127.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "动作奇幻",
        "summary": "为了给一部无人看好的文艺片拿到奥斯卡最佳影片，一支公关团队不惜伪造丑闻、操纵舆论，最后却发现真相更加荒诞。",
        "tags": [
            "好莱坞讽刺",
            "颁奖季公关",
            "黑色幽默",
            "行业揭秘"
        ]
    },
    {
        "title": "伟大的艺术 第二季",
        "url": "./movies/movie-1478.html",
        "cover": "./128.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情，悬疑，艺术犯罪",
        "category": "经典回看",
        "summary": "上一季的赝品画师本季成了博物馆首席顾问，而一幅“国宝级”真迹，正是他十八岁时伪造的。",
        "tags": [
            "艺术品",
            "拍卖行",
            "伪造",
            "鉴宝",
            "双面人生"
        ]
    },
    {
        "title": "爱你那天正下雨",
        "url": "./movies/movie-1479.html",
        "cover": "./129.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情，剧情",
        "category": "亚洲精选",
        "summary": "一场持续二十年的暗恋，因一封被雨水打湿的旧信，在婚礼前夜真相大白。",
        "tags": [
            "雨天",
            "重逢",
            "暗恋",
            "书信"
        ]
    },
    {
        "title": "暗战1931之白乙化",
        "url": "./movies/movie-1480.html",
        "cover": "./130.jpg",
        "year": "1931",
        "yearNumber": 1931,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 谍战 / 战争",
        "category": "高清电影",
        "summary": "在白色恐怖与日伪势力交织的1931年，一位年轻地下党员必须把身份藏进最危险的人群里，才能把情报送出包围圈。",
        "tags": [
            "抗日地下工作",
            "北平",
            "身份伪装",
            "情报传递",
            "牺牲"
        ]
    },
    {
        "title": "别离泪",
        "url": "./movies/movie-1481.html",
        "cover": "./131.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情，亲情",
        "category": "家庭剧情",
        "summary": "患阿尔茨海默症的母亲每天都在忘记女儿，女儿不得不每天重新向母亲介绍自己。",
        "tags": [
            "母女",
            "阿尔茨海默",
            "催泪",
            "时间"
        ]
    },
    {
        "title": "小锅盖当官",
        "url": "./movies/movie-1482.html",
        "cover": "./132.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧, 乡村, 剧情",
        "category": "高清电影",
        "summary": "村里最不靠谱的“小锅盖”意外当上村主任，他用各种不按套路出牌的办法，带着懒汉村发家致富。",
        "tags": [
            "农村",
            "基层干部",
            "扶贫",
            "轻喜剧"
        ]
    },
    {
        "title": "胜利之光",
        "url": "./movies/movie-1483.html",
        "cover": "./133.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "美国",
        "type": "电视剧",
        "genre": "运动剧情",
        "category": "最新电视剧",
        "summary": "一支被所有人看低的高中橄榄球队，在伤病、家庭和偏见的夹击下，靠一束从看台照下来的光，重新相信自己能赢。",
        "tags": [
            "橄榄球",
            "小镇",
            "青春",
            "团队",
            "成长"
        ]
    },
    {
        "title": "弃妇怨",
        "url": "./movies/movie-1484.html",
        "cover": "./134.jpg",
        "year": "1970",
        "yearNumber": 1970,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，爱情，家庭",
        "category": "爱情喜剧",
        "summary": "温柔妻子被豪门丈夫抛弃，三年后她以女强人身份归来，撕碎前夫的所有骄傲。",
        "tags": [
            "琼瑶式",
            "苦情",
            "弃妇",
            "渣男",
            "女性觉醒"
        ]
    },
    {
        "title": "三流之路",
        "url": "./movies/movie-1485.html",
        "cover": "./135.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "韩国",
        "type": "剧集",
        "genre": "喜剧, 爱情, 励志",
        "category": "热播剧集",
        "summary": "没有钱也没有背景的四个年轻人，在追逐跆拳道、主播、格斗等梦想的路上，狼狈又闪光的青春。",
        "tags": [
            "小人物",
            "奋斗",
            "青梅竹马",
            "现实"
        ]
    },
    {
        "title": "真实犯罪现场调查：迈阿密",
        "url": "./movies/movie-1486.html",
        "cover": "./136.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电视剧",
        "genre": "纪录片 / 犯罪",
        "category": "动作奇幻",
        "summary": "摄制组获准进入迈阿密警局物证科，每集还原一桩真实悬案的法医鉴定过程。",
        "tags": [
            "真实案件",
            "现场重建",
            "纪实"
        ]
    },
    {
        "title": "尸中罪",
        "url": "./movies/movie-1487.html",
        "cover": "./137.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑惊悚",
        "category": "热播剧集",
        "summary": "法医解剖尸体时，竟听到死者说“我是被家人活埋的”，而她已经在坟墓里活了三天。",
        "tags": [
            "法医",
            "超自然",
            "尸体诉说",
            "复仇"
        ]
    },
    {
        "title": "百老汇小姐",
        "url": "./movies/movie-1488.html",
        "cover": "./138.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧, 歌舞",
        "category": "最新电视剧",
        "summary": "一个不会跳舞的会计阴差阳错成了百老汇新剧的执行制作人，而预算只剩两周。",
        "tags": [
            "舞台剧",
            "梦想",
            "竞争",
            "职场"
        ]
    },
    {
        "title": "盗火者",
        "url": "./movies/movie-1489.html",
        "cover": "./139.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 动作",
        "category": "高清电影",
        "summary": "在人人脑后都植入“火种芯片”的未来，一个没有芯片的男人，成了全人类最后的记忆库。",
        "tags": [
            "人工智能",
            "记忆盗取",
            "反抗军",
            "近未来"
        ]
    },
    {
        "title": "神奇的旋转木马",
        "url": "./movies/movie-1490.html",
        "cover": "./140.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电影",
        "genre": "动画、奇幻、治愈",
        "category": "热播剧集",
        "summary": "一座废弃游乐园里的老旧旋转木马，每转一圈就能让坐上的人回到过去五分钟。",
        "tags": [
            "亲情",
            "时间回溯",
            "游乐园",
            "催泪"
        ]
    },
    {
        "title": "鱼缸",
        "url": "./movies/movie-1491.html",
        "cover": "./141.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "爱情喜剧",
        "summary": "一个偷窃成瘾的少女被送到开宠物店的姑姑家，在那里她发现所有鱼都在替人承受罪孽。",
        "tags": [
            "文艺",
            "少年犯罪",
            "底层",
            "救赎"
        ]
    },
    {
        "title": "史瑞克2",
        "url": "./movies/movie-1492.html",
        "cover": "./142.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 动画",
        "category": "动作奇幻",
        "summary": "史瑞克和菲奥娜回娘家，却发现岳父国王请了“杀手”驴子来除掉怪物女婿。",
        "tags": [
            "恶搞",
            "童话",
            "冒险",
            "合家欢"
        ]
    },
    {
        "title": "闯关东前传",
        "url": "./movies/movie-1493.html",
        "cover": "./143.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 家族 / 年代",
        "category": "亚洲精选",
        "summary": "1904年，山东大旱。三兄弟从济南府一路闯到黑龙江，一个成了金矿主，一个当了土匪头，一个死在了路上。",
        "tags": [
            "清末民初",
            "山东移民",
            "淘金热",
            "土匪",
            "白手起家"
        ]
    },
    {
        "title": "变形计第七季",
        "url": "./movies/movie-1494.html",
        "cover": "./144.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "综艺 / 纪录片",
        "genre": "真人秀 / 社会",
        "category": "最新电视剧",
        "summary": "第七季首次引入“互换身份”升级版——城市叛逆富二代与农村尖子生互换三个月，且全程不知互换结束时间。",
        "tags": [
            "城乡互换",
            "富二代",
            "留守儿童",
            "社会实验"
        ]
    },
    {
        "title": "咖啡与香烟",
        "url": "./movies/movie-1495.html",
        "cover": "./145.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "category": "悬疑犯罪",
        "summary": "巴黎封城之夜，一个吸烟的摇滚青年与一个只喝咖啡的哮喘女孩，通过一道墙缝分享生活，却不知彼此就住在隔壁。",
        "tags": [
            "话痨电影",
            "巴黎街头",
            "邂逅"
        ]
    },
    {
        "title": "济公新传",
        "url": "./movies/movie-1496.html",
        "cover": "./146.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻/喜剧",
        "category": "最新电视剧",
        "summary": "为点化一个冥顽不灵的现代“精致利己主义者”网红，济公被迫下凡，却发现人间已不用佛法，改用“算法”。",
        "tags": [
            "济公",
            "降妖",
            "现代社会",
            "因果"
        ]
    },
    {
        "title": "险恶人生",
        "url": "./movies/movie-1497.html",
        "cover": "./147.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑, 惊悚, 犯罪",
        "category": "悬疑犯罪",
        "summary": "一个被财阀毁掉一生的女清洁工，在某夜遇到自称“恶魔”的男人后，获得了十次“完美犯罪”的机会。",
        "tags": [
            "恶魔契约",
            "阶层固化",
            "复仇女神",
            "大尺度",
            "人性"
        ]
    },
    {
        "title": "英雄时代",
        "url": "./movies/movie-1498.html",
        "cover": "./148.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 战争",
        "category": "家庭剧情",
        "summary": "2036年，基因改造战士在执行最后一场平叛任务时，发现自己要消灭的“叛军首领”竟是自己失散多年的生父。",
        "tags": [
            "赛博朋克",
            "机甲",
            "反乌托邦",
            "道德困境"
        ]
    },
    {
        "title": "最后告解",
        "url": "./movies/movie-1499.html",
        "cover": "./149.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "意大利 / 梵蒂冈",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 宗教",
        "category": "最新电视剧",
        "summary": "一间告解室内，神父听完了连续杀人犯的完整自白，却因“告解封印”不能报警，眼睁睁看着下一个目标走进教堂。",
        "tags": [
            "梵蒂冈",
            "密室告解",
            "连环杀人",
            "信仰危机",
            "独幕剧"
        ]
    },
    {
        "title": "那一天",
        "url": "./movies/movie-1500.html",
        "cover": "./150.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "台湾",
        "type": "电影",
        "genre": "剧情，家庭，奇幻",
        "category": "悬疑犯罪",
        "summary": "婚礼当天，新娘意外获得能力，可以不断重复这一天，直到找出父亲去世的真相。",
        "tags": [
            "时间循环",
            "父女",
            "和解"
        ]
    },
    {
        "title": "卧底罗密欧",
        "url": "./movies/movie-1501.html",
        "cover": "./1.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "香港",
        "type": "剧集",
        "genre": "动作 / 爱情 / 警匪",
        "category": "亚洲精选",
        "summary": "警校最优秀的毕业生被整容成黑帮老大的模样，却爱上了仇人的女儿，而真正的老大已经苏醒。",
        "tags": [
            "卧底",
            "黑帮",
            "替身",
            "虐恋"
        ]
    },
    {
        "title": "生机勃勃的我们",
        "url": "./movies/movie-1502.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春，家庭",
        "category": "热播剧集",
        "summary": "五个都市失败青年结伴回乡，在快倒闭的农场里试图种出“能改变人生的草莓”。",
        "tags": [
            "成长",
            "乡村振兴",
            "创业"
        ]
    },
    {
        "title": "谜离药谎",
        "url": "./movies/movie-1503.html",
        "cover": "./3.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑，惊悚，犯罪",
        "category": "家庭剧情",
        "summary": "一位母亲发现儿子服用的“抗焦虑新药”能让所有服用者爱上同一个人——她的丈夫。",
        "tags": [
            "药物阴谋",
            "记忆篡改",
            "医疗黑幕"
        ]
    },
    {
        "title": "战地情鸳",
        "url": "./movies/movie-1504.html",
        "cover": "./4.jpg",
        "year": "1942",
        "yearNumber": 1942,
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 战争 / 剧情",
        "category": "高清电影",
        "summary": "珍珠港事件后，一名海军军医与护士在硝烟弥漫的战场上相爱，却被迫分离。",
        "tags": [
            "二战背景",
            "战地绝恋",
            "经典好莱坞",
            "催泪弹"
        ]
    },
    {
        "title": "壮士山河血",
        "url": "./movies/movie-1505.html",
        "cover": "./5.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争， 历史， 动作",
        "category": "经典回看",
        "summary": "1944年湘西，一支残缺的侦察班用血肉之躯拖住日军机械化联队整整三天。",
        "tags": [
            "抗日战争",
            "狙击手",
            "兄弟连",
            "山河",
            "悲壮"
        ]
    },
    {
        "title": "超级大片",
        "url": "./movies/movie-1506.html",
        "cover": "./6.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 喜剧",
        "category": "高清电影",
        "summary": "一个三流剧组在拍摄一部超级大片时，所有特效意外成真，整个城市陷入一场疯狂的乌龙灾难。",
        "tags": [
            "伪纪录片",
            "片场",
            "爆炸",
            "乌龙",
            "讽刺"
        ]
    },
    {
        "title": "艳女挑情",
        "url": "./movies/movie-1507.html",
        "cover": "./7.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "动作奇幻",
        "summary": "夜总会舞女周旋于富商与画家之间，一场情感游戏最终烧毁了三个人的人生。",
        "tags": [
            "邵氏",
            "情欲",
            "都市",
            "三角恋",
            "女性觉醒"
        ]
    },
    {
        "title": "日本沉没",
        "url": "./movies/movie-1508.html",
        "cover": "./8.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "剧集",
        "genre": "灾难, 科幻",
        "category": "热播剧集",
        "summary": "地质学家预言日本列岛将在一年内沉入海沟，一个普通家庭在末日倒计时中挣扎求生。",
        "tags": [
            "地震",
            "末世",
            "家庭",
            "求生",
            "政治"
        ]
    },
    {
        "title": "神秘博士第九季",
        "url": "./movies/movie-1509.html",
        "cover": "./9.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "英国",
        "type": "剧集",
        "genre": "科幻 / 冒险",
        "category": "爱情喜剧",
        "summary": "博士面对一个无法逃避的预言：他最好的朋友克拉拉将在一只渡鸦面前永远死去。",
        "tags": [
            "时间旅行",
            "忏悔罗盘",
            "克拉拉之死",
            "扎贡人"
        ]
    },
    {
        "title": "再领风骚",
        "url": "./movies/movie-1510.html",
        "cover": "./10.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 校园",
        "category": "亚洲精选",
        "summary": "1995届高中“最酷女王”凯伦在25周年返校日发现，如今学校里最受欢迎的是当年她欺负过的书呆子的女儿。",
        "tags": [
            "返校重聚",
            "过气风云人物",
            "代际反差"
        ]
    },
    {
        "title": "精神狂躁症",
        "url": "./movies/movie-1511.html",
        "cover": "./11.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "英国/美国",
        "type": "电影",
        "genre": "剧情, 悬疑, 心理",
        "category": "热播剧集",
        "summary": "一个被诊断为狂躁症的建筑师被控谋杀，十二人陪审团里，一个声称“我懂他”的女人，精神病史比他更严重。",
        "tags": [
            "双相情感障碍",
            "陪审团",
            "法律",
            "社会派"
        ]
    },
    {
        "title": "到也门钓鲑鱼",
        "url": "./movies/movie-1512.html",
        "cover": "./12.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 冒险",
        "category": "环球片库",
        "summary": "一位濒临破产的英国中年大叔，接到一个疯狂订单：帮也门沙漠里的土豪建造一条鲑鱼河，并教会他飞钓。",
        "tags": [
            "荒诞计划",
            "中年危机",
            "文化冲突",
            "治愈"
        ]
    },
    {
        "title": "名不虚传国语",
        "url": "./movies/movie-1513.html",
        "cover": "./13.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 奇幻",
        "category": "环球片库",
        "summary": "朝鲜时代最顶尖的针医意外穿越到现代重庆，却因只会说古韩语而被当成骗子。",
        "tags": [
            "穿越",
            "中医",
            "韩医",
            "语言梗",
            "古今碰撞"
        ]
    },
    {
        "title": "傻瓜谍报员",
        "url": "./movies/movie-1514.html",
        "cover": "./14.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧、间谍",
        "category": "最新电视剧",
        "summary": "全日本最笨的间谍被派去盗取机密，结果他用美食收买了整个敌方食堂。",
        "tags": [
            "办公室",
            "反差萌",
            "卧底",
            "美食"
        ]
    },
    {
        "title": "笑破铁幕",
        "url": "./movies/movie-1515.html",
        "cover": "./15.jpg",
        "year": "1983",
        "yearNumber": 1983,
        "region": "苏联",
        "type": "电影",
        "genre": "喜剧 / 谍战 / 讽刺",
        "category": "爱情喜剧",
        "summary": "一场本该严肃到不能出错的跨境谍战，因为一个爱讲冷笑话的翻译官，彻底笑穿了两边的铁幕。",
        "tags": [
            "冷战",
            "假情报",
            "替身行动",
            "双线身份",
            "跨国追踪"
        ]
    },
    {
        "title": "异形帝国之灵与欲",
        "url": "./movies/movie-1516.html",
        "cover": "./16.jpg",
        "year": "1999",
        "yearNumber": 1999,
        "region": "美国",
        "type": "电影",
        "genre": "科幻惊悚",
        "category": "高清电影",
        "summary": "一种以人类性欲为食的异形寄生了整个夜总会，硬汉侦探必须割舍情感才能击败它。",
        "tags": [
            "外星寄生虫",
            "精神控制",
            "欲望宿主",
            "黑色侦探风"
        ]
    },
    {
        "title": "大匠春秋之牌坊风云",
        "url": "./movies/movie-1517.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史剧情",
        "category": "动作奇幻",
        "summary": "民国乱世，为了守住一座贞节牌坊，一个石匠家族卷入了军阀与宗族的血腥斗争。",
        "tags": [
            "工匠",
            "家族",
            "传承",
            "民国"
        ]
    },
    {
        "title": "再闯魔域",
        "url": "./movies/movie-1518.html",
        "cover": "./18.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "三十年前从魔域逃出的姐姐，如今必须再次进入那个地下室，救回被引诱的弟弟。",
        "tags": [
            "邪教",
            "家庭诅咒",
            "克苏鲁",
            "血腥",
            "续集"
        ]
    },
    {
        "title": "走啊，走",
        "url": "./movies/movie-1519.html",
        "cover": "./19.jpg",
        "year": "2031",
        "yearNumber": 2031,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 公路",
        "category": "家庭剧情",
        "summary": "一对关系破裂的父子，为了完成已故家人的遗愿，徒步穿越四百公里的雪域高原。",
        "tags": [
            "徒步",
            "父子",
            "和解",
            "藏地"
        ]
    },
    {
        "title": "俄罗斯蛇鲨",
        "url": "./movies/movie-1520.html",
        "cover": "./20.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "category": "环球片库",
        "summary": "一艘俄罗斯核潜艇在北极冰下失联，舱内九名官兵中混入了一个不是人类的“东西”。",
        "tags": [
            "潜艇",
            "密闭空间",
            "心理博弈"
        ]
    },
    {
        "title": "爆复",
        "url": "./movies/movie-1521.html",
        "cover": "./21.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪、动作、悬疑",
        "category": "悬疑犯罪",
        "summary": "沉默的拆弹专家发现女友失忆的真相竟是自己亲手埋下的仇恨种子。",
        "tags": [
            "复仇",
            "卧底",
            "爆炸",
            "心理博弈"
        ]
    },
    {
        "title": "全裸导演第一季",
        "url": "./movies/movie-1522.html",
        "cover": "./22.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情，传记，喜剧",
        "category": "经典回看",
        "summary": "平凡的AV推销员西村透，在泡沫经济时代的日本，用疯狂的热情和颠覆性的美学，重新定义了成人影片。",
        "tags": [
            "成人产业",
            "昭和年代",
            "创业",
            "反叛",
            "Netflix"
        ]
    },
    {
        "title": "意大利浴血战",
        "url": "./movies/movie-1523.html",
        "cover": "./23.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "意大利 / 美国",
        "type": "电影",
        "genre": "战争 / 历史 / 动作",
        "category": "最新电视剧",
        "summary": "1944年意大利深山，一群散兵游勇为了最后的尊严，必须用血肉炸毁德军坚固的碉堡。",
        "tags": [
            "二战",
            "游击战",
            "兄弟情",
            "意大利战场",
            "真实事件改编"
        ]
    },
    {
        "title": "诸神所爱之人",
        "url": "./movies/movie-1524.html",
        "cover": "./24.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻、爱情、神话",
        "category": "最新电视剧",
        "summary": "当平凡图书管理员发现自己是一枚被多位神明投注赌局的“人间棋子”，她必须在两周内找到真爱，否则世界将重归混沌。",
        "tags": [
            "古希腊神话",
            "命中注定",
            "神明游戏",
            "轮回转世",
            "宿命之恋"
        ]
    },
    {
        "title": "安乐街",
        "url": "./movies/movie-1525.html",
        "cover": "./25.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 社会",
        "category": "爱情喜剧",
        "summary": "一条即将被拆迁的老街上，站街女、古惑仔和杂货铺老板决定联手对抗地产商。",
        "tags": [
            "红灯区",
            "底层",
            "生存",
            "黑帮"
        ]
    },
    {
        "title": "麻木2015",
        "url": "./movies/movie-1526.html",
        "cover": "./26.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "亚洲精选",
        "summary": "金融风暴后，失业的中年会计师在日复一日的麻木生活中，策划了一场针对无良财阀的完美犯罪。",
        "tags": [
            "都市冷漠",
            "复仇",
            "社会写实",
            "底层挣扎"
        ]
    },
    {
        "title": "诱祸危机",
        "url": "./movies/movie-1527.html",
        "cover": "./27.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "剧集",
        "genre": "惊悚, 犯罪",
        "category": "家庭剧情",
        "summary": "一个英俊的诈骗高手同时勾引了三个女人，当他的谎言被戳穿，女人们联手设下了一场致命陷阱。",
        "tags": [
            "诈骗",
            "蛇蝎美人",
            "反转",
            "悬疑",
            "心理"
        ]
    },
    {
        "title": "灭门",
        "url": "./movies/movie-1528.html",
        "cover": "./28.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，犯罪",
        "category": "高清电影",
        "summary": "走私家族一夜之间被灭门，唯一幸存的小妹发现，凶手竟是自家最忠诚的老管家。",
        "tags": [
            "黑帮",
            "家族",
            "内鬼",
            "罗守耀"
        ]
    },
    {
        "title": "校花的贴心学霸",
        "url": "./movies/movie-1529.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情, 喜剧, 校园",
        "category": "亚洲精选",
        "summary": "高冷校花为保学生会主席之位，重金“聘用”全校第一的理工学霸假扮男友，不料学霸是她的十年铁粉。",
        "tags": [
            "学霸",
            "校花",
            "契约情侣",
            "成长",
            "反差萌"
        ]
    },
    {
        "title": "血染两山红",
        "url": "./movies/movie-1530.html",
        "cover": "./30.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "军旅 / 历史",
        "category": "经典回看",
        "summary": "1984年老山轮战，一个连队中三个来自同一村庄的兄弟，在炮火中立下血誓：活着的人要带其他人回家。",
        "tags": [
            "老山战役",
            "兄弟情",
            "牺牲"
        ]
    },
    {
        "title": "保密局的枪声",
        "url": "./movies/movie-1531.html",
        "cover": "./31.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "谍战, 动作, 悬疑",
        "category": "最新电视剧",
        "summary": "潜伏在保密局的我方特工，发现自己的亲弟弟竟是军统王牌杀手。",
        "tags": [
            "民国",
            "潜伏",
            "双面间谍",
            "兄弟反目"
        ]
    },
    {
        "title": "哭吧叔叔！",
        "url": "./movies/movie-1532.html",
        "cover": "./32.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭 / 喜剧 / 温情",
        "category": "悬疑犯罪",
        "summary": "一个总说“别哭”的失业大叔，偏偏被一群爱闹事的孩子逼着学会流泪，也学会重新做一个能被依靠的人。",
        "tags": [
            "亲情修复",
            "儿童视角",
            "误会与和解",
            "失业中年",
            "城市漂泊"
        ]
    },
    {
        "title": "哈哈农夫",
        "url": "./movies/movie-1533.html",
        "cover": "./33.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "综艺 / 电影",
        "genre": "真人秀 / 喜剧 / 治愈",
        "category": "爱情喜剧",
        "summary": "五个城市明星去农村种地，却把拖拉机开进河里，把猪喂到拉稀。",
        "tags": [
            "乡村生活",
            "明星体验",
            "种地",
            "搞笑"
        ]
    },
    {
        "title": "欢乐谷",
        "url": "./movies/movie-1534.html",
        "cover": "./34.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻 / 剧情 / 悬疑",
        "category": "高清电影",
        "summary": "一对兄妹穿越进黑白电视剧《欢乐谷》，他们带来色彩，也带来谎言、欲望和第一桩谋杀案。",
        "tags": [
            "平行世界",
            "怀旧",
            "觉醒",
            "社会批判",
            "小镇"
        ]
    },
    {
        "title": "迷与狂",
        "url": "./movies/movie-1535.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 同性",
        "category": "爱情喜剧",
        "summary": "一对同性恋人被困在布满镜子的迷宫里，每面镜子都映照出他们从未说出口的谎言。",
        "tags": [
            "密室",
            "心理",
            "反转",
            "禁忌"
        ]
    },
    {
        "title": "海盗传奇",
        "url": "./movies/movie-1536.html",
        "cover": "./36.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "英国",
        "type": "剧集",
        "genre": "冒险, 动作",
        "category": "最新电视剧",
        "summary": "黑珍珠号的遗孤长大后成了最年轻的海盗船长，但他的宿敌不是海军，而是失散多年的亲哥哥。",
        "tags": [
            "航海",
            "宝藏",
            "复仇",
            "兄弟情"
        ]
    },
    {
        "title": "婚礼钟声蓝调",
        "url": "./movies/movie-1537.html",
        "cover": "./37.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧 / 爱情 / 生活",
        "category": "经典回看",
        "summary": "婚礼倒计时48小时，新娘发现自己同时约了三个前任来当“秘密证婚人”。",
        "tags": [
            "婚前恐惧",
            "英式尴尬幽默",
            "闺蜜撕逼",
            "海边小镇",
            "倒叙插叙"
        ]
    },
    {
        "title": "寂静的山林",
        "url": "./movies/movie-1538.html",
        "cover": "./38.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "芬兰",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 生态",
        "category": "爱情喜剧",
        "summary": "一个猎人之家被禁止猎杀狼群后，离奇的死亡事件接连发生，他们分不清是野兽的报复，还是人类自己的恶意。",
        "tags": [
            "北欧",
            "极寒之地",
            "野狼",
            "家庭悲剧",
            "环保"
        ]
    },
    {
        "title": "狗也爱钻石",
        "url": "./movies/movie-1539.html",
        "cover": "./39.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "category": "经典回看",
        "summary": "一条被训练成珠宝大盗的退役警犬，必须在主人婚礼前偷回一颗价值连城的粉钻。",
        "tags": [
            "宠物大盗",
            "荒诞幽默",
            "城市冒险",
            "人狗搭档"
        ]
    },
    {
        "title": "出走的乔",
        "url": "./movies/movie-1540.html",
        "cover": "./40.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 公路",
        "category": "亚洲精选",
        "summary": "一个五十岁的家庭主妇在给丈夫做了三十年早餐后，突然开着家里的旧车离家出走了，再也没有回来。",
        "tags": [
            "女性觉醒",
            "婚姻危机",
            "公路片",
            "中年"
        ]
    },
    {
        "title": "对不起，我爱你2004",
        "url": "./movies/movie-1541.html",
        "cover": "./41.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情 / 悲剧 / 家庭",
        "category": "热播剧集",
        "summary": "被抛弃的弃儿回国寻找生母，却阴差阳错爱上了同母异父的妹妹，悲剧倒计时开始。",
        "tags": [
            "虐恋",
            "收养",
            "复仇",
            "经典"
        ]
    },
    {
        "title": "禁断动画48",
        "url": "./movies/movie-1542.html",
        "cover": "./42.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖，惊悚，伪纪录片",
        "category": "最新电视剧",
        "summary": "地下论坛流出的48段被诅咒动画，每观看一段，现实中的死亡倒计时就会缩短一小时。",
        "tags": [
            "都市传说",
            "诅咒视频",
            "单元剧",
            "互动式惊吓"
        ]
    },
    {
        "title": "他们都已死去",
        "url": "./movies/movie-1543.html",
        "cover": "./43.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "category": "高清电影",
        "summary": "五个互不相识的人在废弃医院醒来，凶手留下录音：“你们之中只有一个是活人，找出谁已经死了。”",
        "tags": [
            "密室",
            "反转",
            "记忆",
            "复仇"
        ]
    },
    {
        "title": "巴黎一妇人",
        "url": "./movies/movie-1544.html",
        "cover": "./44.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "category": "经典回看",
        "summary": "一位嫁给巴黎银行家的中国女人，在丈夫出轨后，与自己曾经的初恋——丈夫的司机——重燃旧情。",
        "tags": [
            "女性",
            "文艺",
            "情感纠葛",
            "都市"
        ]
    },
    {
        "title": "买凶杀人",
        "url": "./movies/movie-1545.html",
        "cover": "./45.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国, 德国",
        "type": "电影",
        "genre": "喜剧, 犯罪, 黑色幽默",
        "category": "环球片库",
        "summary": "一个走投无路的中年男人在网上花5000美元雇了个杀手，没想到这个杀手是个重度拖延症和失败的网红。",
        "tags": [
            "杀手",
            "荒诞",
            "巧合",
            "小人物",
            "多线叙事"
        ]
    },
    {
        "title": "伯爵夫人的耳环",
        "url": "./movies/movie-1546.html",
        "cover": "./46.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "家庭剧情",
        "summary": "一对祖传耳环流转于三个男人之手，伯爵夫人借此看清自己不过是婚姻里最昂贵的装饰品。",
        "tags": [
            "古典",
            "遗珠",
            "女性自由",
            "珠宝隐喻"
        ]
    },
    {
        "title": "逆天奇案粤语",
        "url": "./movies/movie-1547.html",
        "cover": "./47.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "香港",
        "type": "电视剧",
        "genre": "悬疑, 犯罪, 剧情",
        "category": "悬疑犯罪",
        "summary": "七个看似不可能破解的“逆天”奇案，背后都指向了同一个“已经死了”的天才犯罪顾问。",
        "tags": [
            "奇案",
            "高智商犯罪",
            "双雄对决",
            "港式刑侦"
        ]
    },
    {
        "title": "大路方圆",
        "url": "./movies/movie-1548.html",
        "cover": "./48.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "category": "亚洲精选",
        "summary": "两个性格迥异的女人，一辆破旧的面包车，一段横跨中国南北的归乡之旅。",
        "tags": [
            "公路",
            "女性",
            "成长",
            "乡村"
        ]
    },
    {
        "title": "贫富人生",
        "url": "./movies/movie-1549.html",
        "cover": "./49.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 家庭, 都市",
        "category": "动作奇幻",
        "summary": "一场车祸让贫民窟的快递员和CBD的上市公司CEO互换了身体，他们必须用对方的财富和身份活下去。",
        "tags": [
            "阶层互换",
            "人性实验",
            "原生家庭",
            "现实主义"
        ]
    },
    {
        "title": "丑娃娃大冒险",
        "url": "./movies/movie-1550.html",
        "cover": "./50.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧, 冒险, 奇幻",
        "category": "家庭剧情",
        "summary": "一群被遗弃在玩具店角落的丑娃娃意外闯入完美娃娃王国，却成了通缉犯。",
        "tags": [
            "丑萌",
            "自我接纳",
            "异世界",
            "友情",
            "治愈"
        ]
    },
    {
        "title": "老爸的秘密情人",
        "url": "./movies/movie-1551.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧, 同性, 家庭",
        "category": "高清电影",
        "summary": "儿子帮丧偶老爸找老伴，却意外发现老爸的“女友”是个穿女装的肌肉男。",
        "tags": [
            "出柜",
            "黄昏恋",
            "乌龙"
        ]
    },
    {
        "title": "落霞征雁",
        "url": "./movies/movie-1552.html",
        "cover": "./52.jpg",
        "year": "1978",
        "yearNumber": 1978,
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠 / 动作",
        "category": "高清电影",
        "summary": "独臂弓手为报灭门之仇，在大漠追踪雁门仇家，每射落一只大雁，就杀一人。",
        "tags": [
            "邵氏",
            "弓弩",
            "复仇",
            "独臂",
            "大漠"
        ]
    },
    {
        "title": "巨怪猎人第一季",
        "url": "./movies/movie-1553.html",
        "cover": "./53.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 奇幻 / 动作",
        "category": "经典回看",
        "summary": "普通高中生意外继承“巨怪猎人”的护身符，白天上课，夜晚在地下世界与巨怪搏斗。",
        "tags": [
            "巨怪",
            "青少年",
            "冒险",
            "吉尔莫·德尔·托罗"
        ]
    },
    {
        "title": "月夜风高",
        "url": "./movies/movie-1554.html",
        "cover": "./54.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 古装 / 惊悚",
        "category": "家庭剧情",
        "summary": "月夜，十人受邀登上江心孤楼，风高，楼中开始按照童谣顺序死人。",
        "tags": [
            "鬼宅",
            "孤岛",
            "暴风雪山庄",
            "本格推理"
        ]
    },
    {
        "title": "心灵哭泣",
        "url": "./movies/movie-1555.html",
        "cover": "./55.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "剧情、心理",
        "category": "热播剧集",
        "summary": "一位表面光鲜的儿童心理医生，自己的内心却早已破碎不堪，直到一个拒绝说话的男孩撕开她的伪装。",
        "tags": [
            "心理创伤",
            "心理咨询",
            "自我救赎"
        ]
    },
    {
        "title": "芭莉丝，非法国首都",
        "url": "./movies/movie-1556.html",
        "cover": "./56.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "喜剧, 犯罪",
        "category": "动作奇幻",
        "summary": "在巴黎郊区的“山寨城”芭莉丝，盗版商贩为了争夺年度最佳假货奖而展开暗斗。",
        "tags": [
            "山寨之都",
            "黑色幽默",
            "假货帝国"
        ]
    },
    {
        "title": "狩猎者：凛冬之战",
        "url": "./movies/movie-1557.html",
        "cover": "./57.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "category": "悬疑犯罪",
        "summary": "大灾变十年后，一位女狩猎者穿越冰雪荒原，追杀赏金榜上排名第一的人——她失散多年的亲生父亲。",
        "tags": [
            "末世废土",
            "女性英雄",
            "暴力美学",
            "设定控"
        ]
    },
    {
        "title": "失恋治疗所",
        "url": "./movies/movie-1558.html",
        "cover": "./58.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情 / 爱情",
        "category": "环球片库",
        "summary": "一家诡异的“失恋治疗所”规定：分手必须满七天且支付777日元，治疗师会帮你把前任彻底忘掉。",
        "tags": [
            "单元剧",
            "心理疗愈",
            "治愈系"
        ]
    },
    {
        "title": "摇尾狗",
        "url": "./movies/movie-1559.html",
        "cover": "./59.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "一个三流骗子假装能听懂狗语，被黑帮老大请去跟一条即将继承亿万遗产的柯基“谈判”。",
        "tags": [
            "黑色幽默",
            "骗局",
            "小人物",
            "反转"
        ]
    },
    {
        "title": "通灵妃",
        "url": "./movies/movie-1560.html",
        "cover": "./60.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 喜剧, 爱情",
        "category": "高清电影",
        "summary": "现代通灵少女被王爷当成破案工具人，结果她一边捉鬼一边把高冷王爷给“渡”成了恋爱脑。",
        "tags": [
            "穿越",
            "王妃",
            "玄学"
        ]
    },
    {
        "title": "纳粹特攻队",
        "url": "./movies/movie-1561.html",
        "cover": "./61.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "德国",
        "type": "电影",
        "genre": "动作 / 历史 / 科幻",
        "category": "亚洲精选",
        "summary": "二战末期，一群伪装成党卫军的犹太敢死队，驾驶着黑科技装甲潜入柏林刺杀希特勒。",
        "tags": [
            "架空历史",
            "犹太复仇",
            "硬核动作",
            "柴油朋克"
        ]
    },
    {
        "title": "救命卡特",
        "url": "./movies/movie-1562.html",
        "cover": "./62.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "韩国",
        "type": "电影",
        "genre": "动作, 惊悚, 丧尸",
        "category": "家庭剧情",
        "summary": "失去记忆的特工卡特从僵尸群中醒来，耳边只有一个指令：必须在日落前找到“解药女孩”。",
        "tags": [
            "一镜到底",
            "谍战",
            "暴力美学",
            "病毒"
        ]
    },
    {
        "title": "凭什么爱你",
        "url": "./movies/movie-1563.html",
        "cover": "./63.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情, 都市",
        "category": "高清电影",
        "summary": "穷小子遭女友抛弃后逆袭成总裁，前妻回头问凭什么，他亮出了求婚戒指。",
        "tags": [
            "职场",
            "逆袭",
            "励志",
            "争吵"
        ]
    },
    {
        "title": "鹰与枭",
        "url": "./movies/movie-1564.html",
        "cover": "./64.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "刑侦， 悬疑， 动作",
        "category": "环球片库",
        "summary": "警队王牌与犯罪天才曾是战友，如今一个在明一个在暗，生死对决即将引爆。",
        "tags": [
            "双雄",
            "警匪",
            "卧底",
            "兄弟情",
            "反转"
        ]
    },
    {
        "title": "领跑人",
        "url": "./movies/movie-1565.html",
        "cover": "./65.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情， 运动",
        "category": "亚洲精选",
        "summary": "他是一辈子的“领跑人”，为他人破风挡雨，这次他想为自己跑一次终点。",
        "tags": [
            "马拉松",
            "配速员",
            "牺牲",
            "励志"
        ]
    },
    {
        "title": "人猿泰山在曼哈顿",
        "url": "./movies/movie-1566.html",
        "cover": "./66.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 喜剧 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "丛林之王泰山被传送到现代纽约，他必须学会上班打卡，才能找到回家的魔法。",
        "tags": [
            "穿越",
            "都市",
            "反差萌",
            "丛林法则",
            "恶搞"
        ]
    },
    {
        "title": "左轮百合",
        "url": "./movies/movie-1567.html",
        "cover": "./67.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "动作、犯罪、女性",
        "category": "高清电影",
        "summary": "顶级女杀手“百合”在最后一次任务中被组织背叛，她提着两把左轮手枪，杀回东京。",
        "tags": [
            "女杀手",
            "双枪",
            "复仇",
            "黑帮",
            "百合情谊"
        ]
    },
    {
        "title": "叛变司机",
        "url": "./movies/movie-1568.html",
        "cover": "./68.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "家庭剧情",
        "summary": "运钞车司机被队友背叛中枪，为了追回女儿的手术费，他必须拖着残血之躯抢在血液流干前杀穿整座城。",
        "tags": [
            "飙车",
            "黑吃黑",
            "复仇",
            "单日叙事",
            "硬核"
        ]
    },
    {
        "title": "靶鸽",
        "url": "./movies/movie-1569.html",
        "cover": "./69.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "电视剧",
        "genre": "悬疑 / 惊悚 / 战争",
        "category": "环球片库",
        "summary": "伦敦发生连环狙击案，警方发现凶手使用的射击技巧，竟与一名患有PTSD的退伍老兵一致。",
        "tags": [
            "狙击手",
            "PTSD",
            "伦敦",
            "恐怖袭击",
            "反套路"
        ]
    },
    {
        "title": "博莱罗",
        "url": "./movies/movie-1570.html",
        "cover": "./70.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "音乐 / 传记 / 剧情",
        "category": "动作奇幻",
        "summary": "1928年，濒临崩溃的作曲家拉威尔一遍遍在钢琴上敲出那举世闻名的重复旋律，却不知自己正在创造永恒。",
        "tags": [
            "拉威尔",
            "作曲",
            "创作困境",
            "一战",
            "经典诞生"
        ]
    },
    {
        "title": "大雪怪",
        "url": "./movies/movie-1571.html",
        "cover": "./71.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作， 冒险， 灾难",
        "category": "热播剧集",
        "summary": "一支科考队在喜马拉雅山脉发现了大雪怪的巢穴，同时也唤醒了冰封万年的远古寄生虫。",
        "tags": [
            "怪兽",
            "雪山",
            "特效大片"
        ]
    },
    {
        "title": "若爱重来",
        "url": "./movies/movie-1572.html",
        "cover": "./72.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、奇幻、爱情",
        "category": "高清电影",
        "summary": "一对准备离婚的夫妻意外获得了一次时光倒流的机会，他们必须回到过去，找出导致爱情消亡的瞬间并改变它。",
        "tags": [
            "时光倒流",
            "婚姻危机",
            "救赎"
        ]
    },
    {
        "title": "剧场",
        "url": "./movies/movie-1573.html",
        "cover": "./73.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "电影",
        "genre": "剧情、爱情",
        "category": "悬疑犯罪",
        "summary": "怀才不遇的剧作家，用七年时间把一个爱他的女孩逼到了崩溃边缘。",
        "tags": [
            "剧团",
            "梦想与现实",
            "虐心",
            "漫改"
        ]
    },
    {
        "title": "残影余像",
        "url": "./movies/movie-1574.html",
        "cover": "./74.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "波兰 / 英国",
        "type": "电影",
        "genre": "悬疑 / 心理",
        "category": "热播剧集",
        "summary": "一位失忆的摄影师发现自己拍的每一张照片里，都有一个本不该存在的“朋友”。",
        "tags": [
            "艺术家",
            "记忆碎片",
            "冷战背景",
            "反转"
        ]
    },
    {
        "title": "纯属意外",
        "url": "./movies/movie-1575.html",
        "cover": "./75.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧 / 爱情 / 奇幻",
        "category": "亚洲精选",
        "summary": "一个永远倒霉的女人被困在“最糟糕的一天”里，直到她发现，每次循环都会改变一个她爱的人的命。",
        "tags": [
            "时间循环",
            "意外",
            "命运",
            "轻松",
            "反套路"
        ]
    },
    {
        "title": "风流3壮士",
        "url": "./movies/movie-1576.html",
        "cover": "./76.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 情色（轻）",
        "category": "爱情喜剧",
        "summary": "三位自称“壮士”的宅男发誓要在三十岁前谈一场真正的恋爱，结果把整座城搞得鸡飞狗跳。",
        "tags": [
            "男性友谊",
            "荒唐冒险",
            "港式咸湿",
            "成长"
        ]
    },
    {
        "title": "阴阳师·平安物语",
        "url": "./movies/movie-1577.html",
        "cover": "./77.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻，古风",
        "category": "家庭剧情",
        "summary": "平安京频发怪谈，安倍晴明与源博雅在樱花树下煮酒，听式神们讲述一夜一夜的妖异故事。",
        "tags": [
            "式神",
            "安倍晴明",
            "百鬼夜行",
            "唯美"
        ]
    },
    {
        "title": "橙衣梦想",
        "url": "./movies/movie-1578.html",
        "cover": "./78.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "荷兰",
        "type": "剧集",
        "genre": "运动 / 励志",
        "category": "最新电视剧",
        "summary": "一群来自不同文化背景的少年，为了进入阿贾克斯青年队而展开残酷且热血的竞争。",
        "tags": [
            "足球",
            "青训营",
            "少年热血",
            "团队合作"
        ]
    },
    {
        "title": "古镇迷案",
        "url": "./movies/movie-1579.html",
        "cover": "./79.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "category": "家庭剧情",
        "summary": "江南古镇的桥洞下惊现尸体，所有线索都指向一个已经死去十年的哑巴船夫。",
        "tags": [
            "小镇",
            "密室杀人",
            "民俗"
        ]
    },
    {
        "title": "冰雪友情",
        "url": "./movies/movie-1580.html",
        "cover": "./80.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动画 / 冒险 / 家庭",
        "category": "经典回看",
        "summary": "一只迷路的小雪狐和一台失控的采冰机器人在北地相遇，它们必须联手穿越冻结的湖区，才能救回被寒潮困住的整个山谷。",
        "tags": [
            "冰原",
            "伙伴",
            "传说",
            "旅程",
            "勇气"
        ]
    },
    {
        "title": "双生灵探",
        "url": "./movies/movie-1581.html",
        "cover": "./81.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑、奇幻、刑侦",
        "category": "最新电视剧",
        "summary": "一对双胞胎兄弟，一个能看见死者记忆，一个能听见死者心声，联手侦破悬案。",
        "tags": [
            "双胞胎",
            "通灵破案",
            "单元剧"
        ]
    },
    {
        "title": "我最亲爱的",
        "url": "./movies/movie-1582.html",
        "cover": "./82.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 同性, 家庭",
        "category": "悬疑犯罪",
        "summary": "失智症病房里，一个老年男人反复喊着另一个男人的名字，女儿这才发现父亲心底藏了五十年的秘密。",
        "tags": [
            "晚年出柜",
            "失智症",
            "临终关怀",
            "和解",
            "催泪"
        ]
    },
    {
        "title": "手提箱女郎",
        "url": "./movies/movie-1583.html",
        "cover": "./83.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 心理",
        "category": "悬疑犯罪",
        "summary": "东京地铁站出现一名永远拎着沉重手提箱的女子，箱子里装的到底是什么？",
        "tags": [
            "女性困境",
            "都市传说",
            "多重人格",
            "手提箱隐喻"
        ]
    },
    {
        "title": "纱",
        "url": "./movies/movie-1584.html",
        "cover": "./84.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 情色",
        "category": "高清电影",
        "summary": "一条昂贵的日本和服腰带，缠绕着三个女人与同一个男人之间跨越二十年的秘密。",
        "tags": [
            "禁忌之恋",
            "反转结局",
            "感官世界"
        ]
    },
    {
        "title": "我要回家",
        "url": "./movies/movie-1585.html",
        "cover": "./85.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "电影",
        "genre": "公路，剧情，家庭，现实",
        "category": "热播剧集",
        "summary": "一个在外地漂了十年的男人带着一张旧车票踏上回家路，却发现真正要回去的不是地理位置，而是被他逃开的关系。",
        "tags": [
            "返乡之路",
            "失散亲情",
            "边缘人物",
            "城市漂泊",
            "温情救赎"
        ]
    },
    {
        "title": "彗星美人",
        "url": "./movies/movie-1586.html",
        "cover": "./86.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑，科幻",
        "category": "家庭剧情",
        "summary": "彗星划过夜空的那个停电瞬间，在一间公寓里的八个人，被无数个平行世界的自己替换了。",
        "tags": [
            "平行宇宙",
            "彗星",
            "聚会",
            "心理惊悚",
            "烧脑"
        ]
    },
    {
        "title": "细物警探",
        "url": "./movies/movie-1587.html",
        "cover": "./87.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 惊悚",
        "category": "亚洲精选",
        "summary": "一位擅长发现细节但被开除的落魄前警探，与看不上他的年轻警长，不得不联手追捕一名完美犯罪者。",
        "tags": [
            "连环杀手",
            "细节",
            "师徒",
            "心理战"
        ]
    },
    {
        "title": "神寻求回报",
        "url": "./movies/movie-1588.html",
        "cover": "./88.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 宗教",
        "category": "最新电视剧",
        "summary": "一位无神论刑警卧底进韩国最大新兴宗教，却发现教主的每一场“神迹”都在预测真实的死亡。",
        "tags": [
            "邪教",
            "复仇",
            "神父"
        ]
    },
    {
        "title": "大足野人粉丝团",
        "url": "./movies/movie-1589.html",
        "cover": "./89.jpg",
        "year": "2010",
        "yearNumber": 2010,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧，冒险",
        "category": "热播剧集",
        "summary": "一群直播平台的主播为博流量，去重庆大足深山寻找“野人”，却意外卷入文物走私案。",
        "tags": [
            "山寨",
            "搞笑",
            "寻宝"
        ]
    },
    {
        "title": "喵喵请听好",
        "url": "./movies/movie-1590.html",
        "cover": "./90.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 奇幻 / 治愈",
        "category": "经典回看",
        "summary": "失业废柴突然能听懂猫说话，靠猫咪情报开了一家深夜电台，专解人猫之间的恩怨情仇。",
        "tags": [
            "猫语者",
            "废柴",
            "电台",
            "流浪猫",
            "邻里"
        ]
    },
    {
        "title": "天使",
        "url": "./movies/movie-1591.html",
        "cover": "./91.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚，犯罪",
        "category": "亚洲精选",
        "summary": "一个连环杀手每杀一个人就在尸体旁留下一根白色羽毛，直到有一天，羽毛上开始出现血痕。",
        "tags": [
            "连环杀手",
            "宗教",
            "反转",
            "救赎"
        ]
    },
    {
        "title": "尼斯湖怪",
        "url": "./movies/movie-1592.html",
        "cover": "./92.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻, 冒险",
        "category": "家庭剧情",
        "summary": "一群问题少年在苏格兰高地的野外拓展中，意外发现了传说中尼斯湖怪的真实巢穴及其背后的惊天秘密。",
        "tags": [
            "古生物",
            "苏格兰传说",
            "环保",
            "家庭冒险"
        ]
    },
    {
        "title": "美·男子",
        "url": "./movies/movie-1593.html",
        "cover": "./93.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情、奇幻",
        "category": "最新电视剧",
        "summary": "一位整形医生获得了一张完美无瑕的“面具”，戴上后成为绝世美男，却发现自己的原脸被另一个灵魂占领了。",
        "tags": [
            "外貌焦虑",
            "身份互换",
            "整容"
        ]
    },
    {
        "title": "刺杀希特勒计划",
        "url": "./movies/movie-1594.html",
        "cover": "./94.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "剧集",
        "genre": "历史架空",
        "category": "热播剧集",
        "summary": "1944年，狼穴爆炸成功，希特勒死亡。但新元首上台后，战争变得比原来更漫长、更残忍。",
        "tags": [
            "暗杀",
            "平行时空",
            "蝴蝶效应"
        ]
    },
    {
        "title": "绝世战魂动画版",
        "url": "./movies/movie-1595.html",
        "cover": "./95.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "玄幻，动作，冒险",
        "category": "高清电影",
        "summary": "废物少爷意外融合上古战神残魂，一夜之间觉醒十二道武魂，却也因此被整个修真界追杀。",
        "tags": [
            "穿越",
            "废材逆袭",
            "武魂",
            "学院争霸"
        ]
    },
    {
        "title": "嗜血旅馆",
        "url": "./movies/movie-1596.html",
        "cover": "./96.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "category": "亚洲精选",
        "summary": "一家只接待“有缘人”的旅馆，入住时必须签一份奇怪的协议：晚上十点后绝对不要看猫眼，因为猫眼那边也有东西在看你。",
        "tags": [
            "密室",
            "规则",
            "怪谈",
            "反转"
        ]
    },
    {
        "title": "飞出个未来第十二季",
        "url": "./movies/movie-1597.html",
        "cover": "./97.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 喜剧 / 科幻",
        "category": "热播剧集",
        "summary": "行星快递公司重启，弗莱发现他的“永生冷冻合约”因为通货膨胀，连个汉堡都买不起了。",
        "tags": [
            "成人向",
            "吐槽",
            "脑洞",
            "回归"
        ]
    },
    {
        "title": "一闪一闪亮星星2023",
        "url": "./movies/movie-1598.html",
        "cover": "./98.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情, 奇幻",
        "category": "经典回看",
        "summary": "30岁的职场精英林北星意外通过一条旧手机短信回到高三，她要拯救那个因她而放弃生命的暗恋者。",
        "tags": [
            "时间循环",
            "暗恋",
            "校园",
            "治愈"
        ]
    },
    {
        "title": "回魂唱片",
        "url": "./movies/movie-1599.html",
        "cover": "./99.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "惊悚, 悬疑",
        "category": "悬疑犯罪",
        "summary": "一张绝版黑胶唱片被播放后，听者会陆续梦见四十年前离奇烧死的女歌手。",
        "tags": [
            "灵异",
            "复古",
            "音乐",
            "轮回"
        ]
    },
    {
        "title": "浮生夜归人",
        "url": "./movies/movie-1600.html",
        "cover": "./100.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 奇幻, 民国",
        "category": "高清电影",
        "summary": "民国法医有阴阳眼，每晚死者亲自告诉他凶手是谁，但他找不到任何一个活人证据。",
        "tags": [
            "单元探案",
            "灵异",
            "民国",
            "阴阳眼"
        ]
    },
    {
        "title": "不可能的拍档",
        "url": "./movies/movie-1601.html",
        "cover": "./101.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "category": "动作奇幻",
        "summary": "一个严谨的谈判专家与一个爱吹牛的街头骗子，被迫搭档破获跨国绑架案。",
        "tags": [
            "双雄",
            "反转",
            "搭档",
            "警匪",
            "幽默"
        ]
    },
    {
        "title": "情人们",
        "url": "./movies/movie-1602.html",
        "cover": "./102.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "环球片库",
        "summary": "一次山体滑坡将婚外情人与原配丈夫困在同一辆房车里，秘密与谎言即将崩塌。",
        "tags": [
            "情感纠葛",
            "婚姻背叛",
            "旅途邂逅"
        ]
    },
    {
        "title": "绿鱼",
        "url": "./movies/movie-1603.html",
        "cover": "./103.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "动作奇幻",
        "summary": "一名出狱青年在小镇遇到神秘女子，却发现她和自己大哥都卷入一场地下交易。",
        "tags": [
            "兄弟情",
            "黑色电影",
            "社会边缘",
            "宿命"
        ]
    },
    {
        "title": "夏日时光机",
        "url": "./movies/movie-1604.html",
        "cover": "./104.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 喜剧",
        "category": "经典回看",
        "summary": "暑假前一天，一个旧空调遥控器让摄影社的同学们拥有了穿梭时空的能力，但只能用五次。",
        "tags": [
            "青春",
            "穿越",
            "蝴蝶效应",
            "校园"
        ]
    },
    {
        "title": "食神归来",
        "url": "./movies/movie-1605.html",
        "cover": "./105.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，美食，动作",
        "category": "环球片库",
        "summary": "被陷害的食神跌落神坛，为了重夺金牌，他必须学会用“黑暗料理”打败“米其林阴谋”。",
        "tags": [
            "食神",
            "功夫厨艺",
            "复仇",
            "重口味",
            "无厘头"
        ]
    },
    {
        "title": "电话惊魂",
        "url": "./movies/movie-1606.html",
        "cover": "./106.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "category": "亚洲精选",
        "summary": "女主在深夜接到陌生电话，对方说：“你床底下有人”，随后她发现这不是恶作剧，而是死亡倒计时。",
        "tags": [
            "密室",
            "限时",
            "变声器"
        ]
    },
    {
        "title": "神犬松五郎",
        "url": "./movies/movie-1607.html",
        "cover": "./107.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "家庭， 剧情",
        "category": "环球片库",
        "summary": "2011年日本3.11地震后，一只柴犬独自穿越废墟两百公里，只为回到主人身边。",
        "tags": [
            "柴犬",
            "地震",
            "忠犬",
            "治愈",
            "真实事件改编"
        ]
    },
    {
        "title": "利剑·玫瑰",
        "url": "./movies/movie-1608.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "刑侦悬疑",
        "category": "高清电影",
        "summary": "为报杀兄之仇，菜鸟女警以“玫瑰”之名潜入跨国毒巢，却发现哥哥可能还活着。",
        "tags": [
            "卧底",
            "缉毒",
            "女警",
            "兄弟情",
            "反转"
        ]
    },
    {
        "title": "女儿们的恋爱第四季",
        "url": "./movies/movie-1609.html",
        "cover": "./109.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀 / 恋爱",
        "category": "悬疑犯罪",
        "summary": "本季首次引入“AI虚拟男友”，三位女明星与AI恋爱，父亲们则在观察室与AI斗嘴。",
        "tags": [
            "父女观察",
            "虚拟男友",
            "AI恋情",
            "直播"
        ]
    },
    {
        "title": "飞盘犬",
        "url": "./movies/movie-1610.html",
        "cover": "./110.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭 / 运动 / 喜剧",
        "category": "悬疑犯罪",
        "summary": "一只被遗弃的流浪狗被一个社恐废柴捡到，没想到它居然是万里挑一的“飞盘犬天才”。",
        "tags": [
            "狗",
            "宠物",
            "治愈",
            "逆袭",
            "比赛"
        ]
    },
    {
        "title": "我的巴比伦恋人",
        "url": "./movies/movie-1611.html",
        "cover": "./111.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "网剧",
        "genre": "奇幻爱情喜剧",
        "category": "环球片库",
        "summary": "社畜少女意外召唤出古巴比伦黏土板上的完美恋人，却发现他是个会吃醋的恋爱脑战神。",
        "tags": [
            "穿越",
            "考古",
            "沙雕",
            "甜宠",
            "幻想"
        ]
    },
    {
        "title": "陌生人的旋律",
        "url": "./movies/movie-1612.html",
        "cover": "./112.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "法国",
        "type": "Movie",
        "genre": "爱情, 音乐, 剧情",
        "category": "亚洲精选",
        "summary": "一个因失忆而无法创作的钢琴家，和一个靠拾荒为生的街头艺人，在巴黎的废墟中共谱一首爱的旋律。",
        "tags": [
            "巴黎",
            "钢琴",
            "失忆",
            "浪漫",
            "重逢"
        ]
    },
    {
        "title": "冯宝宝与张楚岚",
        "url": "./movies/movie-1613.html",
        "cover": "./113.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻、动作、剧情",
        "category": "爱情喜剧",
        "summary": "为了揭开自己身世之谜，不老少女冯宝宝与“不要脸”的张楚岚结伴闯入异人世界的权力漩涡。",
        "tags": [
            "异人世界",
            "国漫改编",
            "寻根之旅",
            "宿命对决"
        ]
    },
    {
        "title": "我来自未来",
        "url": "./movies/movie-1614.html",
        "cover": "./114.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 剧情",
        "category": "高清电影",
        "summary": "2067年的最后一个人类穿越回2023年，只为告诉年轻的父亲：别生我。",
        "tags": [
            "时间移民",
            "环境崩溃",
            "父女和解",
            "低科技科幻"
        ]
    },
    {
        "title": "中国兄弟连",
        "url": "./movies/movie-1615.html",
        "cover": "./115.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电视剧",
        "genre": "战争 / 历史",
        "category": "热播剧集",
        "summary": "一支由天南海北散兵组成的连队，在抗日战争最残酷的岁月里，用血肉筑起彼此的家。",
        "tags": [
            "抗战",
            "兄弟情",
            "真实事件改编",
            "群像"
        ]
    },
    {
        "title": "运财五福星",
        "url": "./movies/movie-1616.html",
        "cover": "./116.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "五个破产中年男人捡到财神爷的印章，开始乱印钞票，结果印出了阴兵。",
        "tags": [
            "港式贺岁",
            "五福星新篇",
            "财神下凡",
            "搞笑斗法"
        ]
    },
    {
        "title": "警察猎人",
        "url": "./movies/movie-1617.html",
        "cover": "./117.jpg",
        "year": "1993",
        "yearNumber": 1993,
        "region": "香港",
        "type": "电影",
        "genre": "动作，犯罪，惊悚",
        "category": "家庭剧情",
        "summary": "为了抓捕连环杀手，一名正直警察不得不雇佣监狱里的前黑道猎头，却发现自己正变成猎物。",
        "tags": [
            "双雄对决",
            "卧底",
            "暴力美学"
        ]
    },
    {
        "title": "双星奇梦",
        "url": "./movies/movie-1618.html",
        "cover": "./118.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "奇幻, 爱情",
        "category": "最新电视剧",
        "summary": "顶流偶像与一名普通女大学生的梦境每晚都会联通，她在梦里教他做饭，他在梦里教她跳舞。",
        "tags": [
            "偶像",
            "双子",
            "平行世界",
            "梦境连接"
        ]
    },
    {
        "title": "甘草叉",
        "url": "./movies/movie-1619.html",
        "cover": "./119.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "category": "最新电视剧",
        "summary": "一座信奉古老宗教的小镇，每年收获季都要献祭一名外来者给手持甘草叉的恶魔。",
        "tags": [
            "乡村",
            "恶魔",
            "血腥",
            "宗教"
        ]
    },
    {
        "title": "赔率",
        "url": "./movies/movie-1620.html",
        "cover": "./120.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "香港",
        "type": "电影",
        "genre": "犯罪",
        "category": "高清电影",
        "summary": "精算师算出某场假球的真实赔率后，发现自己也成了赌盘上的一个“选项”。",
        "tags": [
            "赌球",
            "黑吃黑",
            "卧底",
            "反转"
        ]
    },
    {
        "title": "黑帮追杀令",
        "url": "./movies/movie-1621.html",
        "cover": "./121.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国 / 法国",
        "type": "电影",
        "genre": "喜剧、动作、犯罪",
        "category": "爱情喜剧",
        "summary": "一名法国小城的邮差意外目睹黑帮交易，为了保护他，警方将他送到了全欧洲最危险的黑帮教母家中藏匿。",
        "tags": [
            "黑帮喜剧",
            "欧洲逃亡",
            "硬核老太",
            "身份错位"
        ]
    },
    {
        "title": "残酷幽默",
        "url": "./movies/movie-1622.html",
        "cover": "./122.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "德国",
        "type": "电影",
        "genre": "剧情，黑色幽默",
        "category": "悬疑犯罪",
        "summary": "二战集中营里，一名犹太喜剧演员被迫为纳粹军官表演滑稽戏，他把每一次笑声都编成了越狱密码。",
        "tags": [
            "纳粹",
            "集中营",
            "喜剧演员",
            "生存"
        ]
    },
    {
        "title": "跑着去北京",
        "url": "./movies/movie-1623.html",
        "cover": "./123.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "剧情 / 运动 / 励志",
        "category": "悬疑犯罪",
        "summary": "为了在母亲临终前见她最后一面，一个建筑工人决定从广州跑回北京。",
        "tags": [
            "千里归乡",
            "马拉松",
            "小人物史诗"
        ]
    },
    {
        "title": "公寓",
        "url": "./movies/movie-1624.html",
        "cover": "./124.jpg",
        "year": "2007",
        "yearNumber": 2007,
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "category": "经典回看",
        "summary": "单身白领搬进低价公寓，发现整栋楼的住户都在深夜监控着她的房间。",
        "tags": [
            "凶宅",
            "都市传说",
            "邻里监控",
            "心理恐怖"
        ]
    },
    {
        "title": "许茂和他的女儿们2012",
        "url": "./movies/movie-1625.html",
        "cover": "./125.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "环球片库",
        "summary": "2012年，老农民许茂的四个女儿因拆迁款反目，他守着老宅，等一个永远不会回家的女儿。",
        "tags": [
            "农村",
            "拆迁",
            "父女",
            "时代"
        ]
    },
    {
        "title": "命运与巧合",
        "url": "./movies/movie-1626.html",
        "cover": "./126.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "德国",
        "type": "电影",
        "genre": "悬疑爱情",
        "category": "热播剧集",
        "summary": "一对分手的情侣在柏林街头反复偶遇，每一次偶遇都是另一个宇宙的选择。",
        "tags": [
            "平行宇宙",
            "选择",
            "柏林",
            "量子物理"
        ]
    },
    {
        "title": "笨蛋爱上两个你",
        "url": "./movies/movie-1627.html",
        "cover": "./127.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 喜剧",
        "category": "热播剧集",
        "summary": "职场菜鸟同时爱上了冷酷总裁和温柔实习生，殊不知这两人竟是同一个人扮演的。",
        "tags": [
            "欢喜冤家",
            "双重身份",
            "职场"
        ]
    },
    {
        "title": "平行宇宙",
        "url": "./movies/movie-1628.html",
        "cover": "./128.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 冒险",
        "category": "环球片库",
        "summary": "一个普通高中生每打开一扇门，就会进入一个“自己更优秀”的宇宙。",
        "tags": [
            "多重宇宙",
            "量子力学",
            "自我",
            "动画"
        ]
    },
    {
        "title": "至尊先生",
        "url": "./movies/movie-1629.html",
        "cover": "./129.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国香港",
        "type": "悬疑犯罪电影",
        "genre": "悬疑, 犯罪, 黑色剧情",
        "category": "环球片库",
        "summary": "所有走私命案都在午夜出现，唯一共同点竟是每具遗体都戴着同一枚刻王冠的戒指，刑警发现“至尊先生”不是一个人，而是一种被社会长期默许的处置程序。",
        "tags": [
            "高级谍战",
            "金融洗钱",
            "伪善慈善",
            "反转审判",
            "道德困境"
        ]
    },
    {
        "title": "情人、骗子、大盗",
        "url": "./movies/movie-1630.html",
        "cover": "./130.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "犯罪 / 爱情 / 惊悚",
        "category": "环球片库",
        "summary": "女警卧底接近珠宝大盗，却发现自己爱上了他，而真正的幕后黑手是她的未婚夫。",
        "tags": [
            "三角恋",
            "骗局",
            "偷窃",
            "反转",
            "危险关系"
        ]
    },
    {
        "title": "青年霍元甲之威震津门",
        "url": "./movies/movie-1631.html",
        "cover": "./131.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作 / 传记 / 历史",
        "category": "经典回看",
        "summary": "二十出头的霍元甲带着迷踪拳走入天津卫，他要打的不是擂台，而是整个江湖对“土把式”的偏见。",
        "tags": [
            "霍元甲",
            "民国",
            "武术",
            "擂台",
            "民族气节"
        ]
    },
    {
        "title": "狼雨",
        "url": "./movies/movie-1632.html",
        "cover": "./132.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑，犯罪，剧情",
        "category": "经典回看",
        "summary": "当卧底警察爱上黑帮之女，忠诚与爱情在雨中开始溃烂。",
        "tags": [
            "卧底",
            "警匪",
            "人性拷问",
            "暴力美学"
        ]
    },
    {
        "title": "德里夫人您在哪",
        "url": "./movies/movie-1633.html",
        "cover": "./133.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "印度",
        "type": "电影",
        "genre": "悬疑, 剧情, 家庭",
        "category": "高清电影",
        "summary": "失忆的贵妇认定自己是穷人家的童养媳，两个家庭因此掀起轩然大波。",
        "tags": [
            "失踪",
            "记忆碎片",
            "身份错位",
            "寻亲",
            "印度社会"
        ]
    },
    {
        "title": "最后的里尔",
        "url": "./movies/movie-1634.html",
        "cover": "./134.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "战争, 历史, 剧情",
        "category": "亚洲精选",
        "summary": "一战末期，一名哑巴信使必须穿越绞肉机般的战场，送达一份能停战的和谈信。",
        "tags": [
            "一战",
            "信使",
            "人性",
            "诗意"
        ]
    },
    {
        "title": "当男人恋爱时",
        "url": "./movies/movie-1635.html",
        "cover": "./135.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "韩国",
        "type": "电影",
        "genre": "爱情， 黑色喜剧",
        "category": "高清电影",
        "summary": "高利贷催收员爱上欠债人的女儿，为了追她，他把所有欠条折成了纸飞机。",
        "tags": [
            "高利贷",
            "催债",
            "绝症梗反转"
        ]
    },
    {
        "title": "野性大世纪",
        "url": "./movies/movie-1636.html",
        "cover": "./136.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "英国",
        "type": "自然纪录片",
        "genre": "纪录片",
        "category": "家庭剧情",
        "summary": "横跨五大洲，镜头捕捉了动物们在极端气候下令人窒息的生存智慧与家族传奇。",
        "tags": [
            "野生动物",
            "进化史诗",
            "极限环境"
        ]
    },
    {
        "title": "与玛格丽特的午后",
        "url": "./movies/movie-1637.html",
        "cover": "./137.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情, 治愈",
        "category": "爱情喜剧",
        "summary": "几乎不认字的粗糙园丁，在公园长椅上遇到了一位95岁的老奶奶，她用朗读改变了他的一生。",
        "tags": [
            "阅读",
            "老人",
            "公园长椅",
            "慢节奏"
        ]
    },
    {
        "title": "灰烬与钻石",
        "url": "./movies/movie-1638.html",
        "cover": "./138.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "剧情片",
        "genre": "家庭 / 悬疑 / 文艺",
        "category": "家庭剧情",
        "summary": "一场矿难后的废墟里，失散多年的兄妹循着一颗被烧黑的钻石，挖出了一段被全镇共同掩埋的秘密。",
        "tags": [
            "旧矿镇",
            "失踪真相",
            "兄妹重逢",
            "记忆拼图",
            "人性救赎"
        ]
    },
    {
        "title": "蓝色协奏曲",
        "url": "./movies/movie-1639.html",
        "cover": "./139.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "德国",
        "type": "电影",
        "genre": "剧情、音乐、历史",
        "category": "最新电视剧",
        "summary": "纳粹集中营里的犹太小提琴天才，他的琴声救了自己的命，却成了刽子手的精神良药。",
        "tags": [
            "二战",
            "小提琴",
            "天才",
            "赎罪",
            "古典音乐"
        ]
    },
    {
        "title": "星月谣",
        "url": "./movies/movie-1640.html",
        "cover": "./140.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "中国内地",
        "type": "电影",
        "genre": "爱情 / 历史",
        "category": "经典回看",
        "summary": "一个戏班歌女与一个军阀之子，在战火中用一首未写完的歌，等待了彼此四十年。",
        "tags": [
            "民国",
            "歌女",
            "世家",
            "命运"
        ]
    },
    {
        "title": "曼哈顿往事",
        "url": "./movies/movie-1641.html",
        "cover": "./141.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 年代",
        "category": "高清电影",
        "summary": "从小在曼哈顿小意大利区长大的华裔孤儿，如何在黑帮与华尔街之间，走出自己的教父之路。",
        "tags": [
            "黑帮",
            "家族史诗",
            "华尔街",
            "权谋"
        ]
    },
    {
        "title": "幕末美食 武士饭！",
        "url": "./movies/movie-1642.html",
        "cover": "./142.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "电视剧",
        "genre": "美食, 历史",
        "category": "最新电视剧",
        "summary": "新选组的刀光剑影背后，屯所的厨房里，一位被贬为伙夫的落魄武士正用京都最贵的怀石料理，收买着最难搞的浪人心。",
        "tags": [
            "幕末",
            "治愈",
            "料理",
            "群像"
        ]
    },
    {
        "title": "魔戒三部曲：王者再临",
        "url": "./movies/movie-1643.html",
        "cover": "./143.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "新西兰, 美国",
        "type": "电影",
        "genre": "奇幻, 史诗, 动作",
        "category": "环球片库",
        "summary": "从未公开的托尔金手稿被发现，护戒联盟迎来真正的“终极一战”。",
        "tags": [
            "重制版",
            "终极剪辑",
            "新结局",
            "经典重铸"
        ]
    },
    {
        "title": "误入神秘岛",
        "url": "./movies/movie-1644.html",
        "cover": "./144.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国 / 新西兰",
        "type": "剧集",
        "genre": "冒险, 奇幻, 悬疑",
        "category": "家庭剧情",
        "summary": "一架失事客机迫降在一座地图上没有的岛屿，这里的时间流速与外界不同，动植物都在“反向进化”。",
        "tags": [
            "荒岛求生",
            "超自然现象",
            "进化论",
            "失落文明"
        ]
    },
    {
        "title": "我心略野",
        "url": "./movies/movie-1645.html",
        "cover": "./145.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 冒险 / 女性",
        "category": "动作奇幻",
        "summary": "母亲去世后，崩溃的大学生独自徒步四千公里荒野，在路上与自己和解。",
        "tags": [
            "荒野",
            "徒步",
            "自我救赎",
            "太平洋山脊",
            "女性"
        ]
    },
    {
        "title": "眠狂四郎 圆月杀法",
        "url": "./movies/movie-1646.html",
        "cover": "./146.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "动作 / 武侠 / 剧情",
        "category": "家庭剧情",
        "summary": "孤独剑客眠狂四郎被卷入一场幕府阴谋，他用自创的“圆月杀法”连斩十三人，却发现最后一个对手是自己的亲生女儿。",
        "tags": [
            "时代剧",
            "剑客",
            "孤独",
            "宿命",
            "经典改编"
        ]
    },
    {
        "title": "裸体的孩子",
        "url": "./movies/movie-1647.html",
        "cover": "./147.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情、家庭",
        "category": "热播剧集",
        "summary": "一个十岁女孩在自然主义社区长大，当她第一次穿上衣服去上学，她发现自己成了怪物。",
        "tags": [
            "童年",
            "身体",
            "羞耻",
            "自由"
        ]
    },
    {
        "title": "风的气息",
        "url": "./movies/movie-1648.html",
        "cover": "./148.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "越南 / 法国",
        "type": "电影",
        "genre": "剧情 / 文艺",
        "category": "热播剧集",
        "summary": "在湄公河三角洲的一个水上村庄，每到季风季节，一个男孩就会沿着河道奔跑，只为追上一阵据说能带回妈妈的风。",
        "tags": [
            "乡村",
            "留守儿童",
            "候鸟",
            "诗意",
            "慢电影"
        ]
    },
    {
        "title": "灵异妙探2：莱斯归来",
        "url": "./movies/movie-1649.html",
        "cover": "./149.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "剧集（电视电影）",
        "genre": "喜剧 / 悬疑 / 犯罪",
        "category": "亚洲精选",
        "summary": "假灵媒真侦探肖恩再次出山，与老搭档格斯调查一起与已故警长莱斯有关的连环案。",
        "tags": [
            "灵异",
            "搭档",
            "破案",
            "嘴炮"
        ]
    },
    {
        "title": "人情纸风船",
        "url": "./movies/movie-1650.html",
        "cover": "./150.jpg",
        "year": "1937",
        "yearNumber": 1937,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 时代剧",
        "category": "热播剧集",
        "summary": "江户时代，一个失业浪人和一个妓女，试图用一张纸风船（纸气球）改变命运。",
        "tags": [
            "浪人",
            "江户",
            "悲剧"
        ]
    },
    {
        "title": "黄巾骑兵队",
        "url": "./movies/movie-1651.html",
        "cover": "./1.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 战争, 动作",
        "category": "环球片库",
        "summary": "东汉末年，一支由流民组成的黄巾骑兵队在绝境中成长为令诸侯闻风丧胆的传奇铁军。",
        "tags": [
            "东汉末年",
            "特种部队",
            "兄弟情",
            "冷兵器"
        ]
    },
    {
        "title": "因为爱情",
        "url": "./movies/movie-1652.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情，喜剧，奇幻",
        "category": "家庭剧情",
        "summary": "一对准备离婚的夫妻去办手续，路上遭遇车祸，醒来后发现灵魂互换了。",
        "tags": [
            "交换身体",
            "离婚",
            "破镜重圆",
            "搞笑"
        ]
    },
    {
        "title": "骸骨人",
        "url": "./movies/movie-1653.html",
        "cover": "./3.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "恐怖, 民俗",
        "category": "家庭剧情",
        "summary": "考古学家在乡下挖出一具戴银面具的骸骨，随后整个村庄开始按照某首古老童谣的顺序死亡。",
        "tags": [
            "英国传说",
            "诅咒",
            "村庄",
            "解密"
        ]
    },
    {
        "title": "生理大叔和他的女儿",
        "url": "./movies/movie-1654.html",
        "cover": "./4.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧 / 家庭 / 剧情",
        "category": "家庭剧情",
        "summary": "一个单身的中年糙汉出租车司机，在女儿初潮来临那天，决定自己学习所有妇科知识，成为全日本最懂生理期的爸爸。",
        "tags": [
            "青春期",
            "生理教育",
            "单亲爸爸",
            "尴尬",
            "温情"
        ]
    },
    {
        "title": "夏日友晴天",
        "url": "./movies/movie-1655.html",
        "cover": "./5.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "意大利 / 美国",
        "type": "电影",
        "genre": "动画 / 家庭 / 奇幻",
        "category": "高清电影",
        "summary": "意大利海滨小镇的夏天，两个男孩的秘密友谊背后，藏着他们不是人类的真相。",
        "tags": [
            "友谊",
            "暑假",
            "成长",
            "治愈"
        ]
    },
    {
        "title": "直捣火星",
        "url": "./movies/movie-1656.html",
        "cover": "./6.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 动作 / 冒险",
        "category": "动作奇幻",
        "summary": "火星殖民地的矿工们发动叛乱后，地球派出一支精英小队直捣火星核心，却发现真相远比叛变更恐怖。",
        "tags": [
            "火星殖民",
            "太空战争",
            "机甲",
            "政治阴谋",
            "硬科幻"
        ]
    },
    {
        "title": "我将来看你",
        "url": "./movies/movie-1657.html",
        "cover": "./7.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 同性",
        "category": "最新电视剧",
        "summary": "整理癌末父亲的遗物时，儿子发现了他藏了四十年的秘密：一张与男人的合影。",
        "tags": [
            "年代",
            "遗书",
            "乡愁",
            "跨越生死"
        ]
    },
    {
        "title": "黑炮事件",
        "url": "./movies/movie-1658.html",
        "cover": "./8.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 黑色悬疑 / 动作",
        "category": "悬疑犯罪",
        "summary": "一起仓库“空弹”事故让十名工人下线，记者方铭发现每只黑炮都经过同一套加密时间码，越往下查越接近一场由童年情谊和军火账本共同操控的城市清洗工程。",
        "tags": [
            "海港走私",
            "黑市武器",
            "失踪证人",
            "弟弟情深",
            "夜间追逐"
        ]
    },
    {
        "title": "四美挑情",
        "url": "./movies/movie-1659.html",
        "cover": "./9.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情 / 悬疑 / 女性",
        "category": "亚洲精选",
        "summary": "四位闺蜜同时爱上同一个男人，她们决定联手考验他，却发现这个男人有四重身份。",
        "tags": [
            "四角恋",
            "闺蜜",
            "连环反转",
            "劈腿"
        ]
    },
    {
        "title": "超星星学园",
        "url": "./movies/movie-1660.html",
        "cover": "./10.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国内地",
        "type": "电视剧",
        "genre": "喜剧 / 爱情 / 奇幻 / 校园",
        "category": "最新电视剧",
        "summary": "在一个以星座决定社会等级的学园里，狮子座女孩和双子座男孩联手打破偏见。",
        "tags": [
            "偶像剧",
            "星座",
            "超能力",
            "甜宠"
        ]
    },
    {
        "title": "洗冤录",
        "url": "./movies/movie-1661.html",
        "cover": "./11.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "古装悬疑",
        "category": "动作奇幻",
        "summary": "冷宫废妃自学验尸术，为查清皇子暴毙真相，与权倾朝野的东厂提督正面硬刚。",
        "tags": [
            "法医",
            "验尸",
            "朝堂权谋",
            "翻案"
        ]
    },
    {
        "title": "红色响尾蛇",
        "url": "./movies/movie-1662.html",
        "cover": "./12.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国",
        "type": "网络电影",
        "genre": "动作 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "卧底警察潜入边境贩毒集团，却发现失踪五年的哥哥已是毒枭的左膀右臂“红色响尾蛇”。",
        "tags": [
            "卧底",
            "缉毒",
            "枪战",
            "兄弟情",
            "反转"
        ]
    },
    {
        "title": "女人永远是对的粤语",
        "url": "./movies/movie-1663.html",
        "cover": "./13.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "香港",
        "type": "剧情电影",
        "genre": "剧情,悬疑,家庭,法庭",
        "category": "悬疑犯罪",
        "summary": "一句“女人永远是对的”在家族财产案中被重复到失真，女主角阿菊借助粤语旧电台录音把每一场“正确”变成反击证据。",
        "tags": [
            "粤语",
            "女性权利",
            "家族企业",
            "财产纠纷",
            "自我定义"
        ]
    },
    {
        "title": "绝地反击",
        "url": "./movies/movie-1664.html",
        "cover": "./14.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作, 战争",
        "category": "亚洲精选",
        "summary": "退役狙击手独闯毒窟，用一根绳子与十发子弹对抗百人武装。",
        "tags": [
            "丛林",
            "特种兵",
            "复仇",
            "爆破"
        ]
    },
    {
        "title": "抢救地球",
        "url": "./movies/movie-1665.html",
        "cover": "./15.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "科幻，灾难",
        "category": "亚洲精选",
        "summary": "科学家发现地球磁场正在快速消失，唯一的办法是在地心引爆一颗特殊炸弹，但代价是可能炸碎整个星球。",
        "tags": [
            "环保",
            "末日",
            "科学伦理",
            "极端气候",
            "人类存亡"
        ]
    },
    {
        "title": "医恋俏佳人",
        "url": "./movies/movie-1666.html",
        "cover": "./16.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情, 喜剧, 职场",
        "category": "最新电视剧",
        "summary": "实习医生撞上高冷外科男神，却发现他是自己网络游戏里天天互怼的“菜鸡队友”。",
        "tags": [
            "医生",
            "欢喜冤家",
            "甜宠",
            "行业"
        ]
    },
    {
        "title": "猩球崛起：黎明的进击",
        "url": "./movies/movie-1667.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "category": "高清电影",
        "summary": "猿族领袖凯撒之子为救族群，不得不与一名人类机械师结成绝望同盟。",
        "tags": [
            "猿族领袖",
            "人类幸存者",
            "机甲大战"
        ]
    },
    {
        "title": "如花美眷",
        "url": "./movies/movie-1668.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情，同性，家庭",
        "category": "家庭剧情",
        "summary": "相守四十年的女同伴侣，在一位去世后，另一位被对方的子女赶出了家门。",
        "tags": [
            "老年女同",
            "遗产争夺",
            "黄昏恋",
            "社会写实"
        ]
    },
    {
        "title": "荒天下之大教",
        "url": "./movies/movie-1669.html",
        "cover": "./19.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "香港",
        "type": "电影",
        "genre": "喜剧",
        "category": "经典回看",
        "summary": "一个破产的骗子被误认为是下凡的弥赛亚，为了骗吃骗喝，他居然真的创造了“奇迹”。",
        "tags": [
            "周星驰式",
            "无厘头",
            "宗教讽刺",
            "社会",
            "搞笑"
        ]
    },
    {
        "title": "军营艳事",
        "url": "./movies/movie-1670.html",
        "cover": "./20.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，剧情，战争",
        "category": "爱情喜剧",
        "summary": "抗战时期，一支全是男兵的连队突然被分配来一位女军医，军营顿时乱套。",
        "tags": [
            "抗战",
            "女兵",
            "误会",
            "乱世情缘",
            "搞笑"
        ]
    },
    {
        "title": "尼罗河希尔顿事件",
        "url": "./movies/movie-1671.html",
        "cover": "./21.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "瑞典 / 法国",
        "type": "电影",
        "genre": "犯罪, 剧情",
        "category": "亚洲精选",
        "summary": "豪华酒店门童目睹了一起客房谋杀，报警后警方却直接逮捕了他这个“目击者”。",
        "tags": [
            "政治惊悚",
            "真实事件改编",
            "酒店空间",
            "暗箱操作",
            "社会疮疤"
        ]
    },
    {
        "title": "男子水泳社",
        "url": "./movies/movie-1672.html",
        "cover": "./22.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "运动 / 青春 / 喜剧",
        "category": "亚洲精选",
        "summary": "面临废社危机的高中男子水泳社，迎来一名从未下过水的天才新人。",
        "tags": [
            "热血社团",
            "美男子",
            "夏日",
            "成长"
        ]
    },
    {
        "title": "魔蝎大帝5：灵魂之书",
        "url": "./movies/movie-1673.html",
        "cover": "./23.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 奇幻， 冒险",
        "category": "悬疑犯罪",
        "summary": "魔蝎大帝为拯救被诅咒的部族，必须潜入亡灵之城，从灵魂之书中撕下属于自己的那一页。",
        "tags": [
            "古埃及",
            "魔法",
            "怪物"
        ]
    },
    {
        "title": "最后的机器人",
        "url": "./movies/movie-1674.html",
        "cover": "./24.jpg",
        "year": "2050",
        "yearNumber": 2050,
        "region": "日本",
        "type": "电影",
        "genre": "剧情，科幻，伦理",
        "category": "热播剧集",
        "summary": "在地球最后的人类养老院里，最后一个机器人学会了哭泣。",
        "tags": [
            "末日",
            "陪伴",
            "临终关怀",
            "报废机器人"
        ]
    },
    {
        "title": "神鹰突击队",
        "url": "./movies/movie-1675.html",
        "cover": "./25.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 战争 / 冒险",
        "category": "经典回看",
        "summary": "一支中国特种小队潜入热带雨林，目标是活捉拥有神经毒素武器的生物学家。",
        "tags": [
            "反恐",
            "特种部队",
            "高科技",
            "丛林作战",
            "硬核"
        ]
    },
    {
        "title": "玩得开心，瓦夏！",
        "url": "./movies/movie-1676.html",
        "cover": "./26.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情喜剧",
        "category": "悬疑犯罪",
        "summary": "为了完成祖父遗愿，少年瓦夏开着拉达车横跨西伯利亚，沿途埋葬一枚未爆炸的核弹头。",
        "tags": [
            "荒诞",
            "苏联遗留",
            "公路",
            "黑色幽默"
        ]
    },
    {
        "title": "萝美",
        "url": "./movies/movie-1677.html",
        "cover": "./27.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 爱情, 喜剧",
        "category": "动作奇幻",
        "summary": "一位坚持不婚主义的职场女强人，为了应付催婚的母亲，租了个假男友回家过年。",
        "tags": [
            "单身女性",
            "假戏真做",
            "都市生活",
            "温情"
        ]
    },
    {
        "title": "尼克·克罗尔：小小大男孩",
        "url": "./movies/movie-1678.html",
        "cover": "./28.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "综艺",
        "genre": "喜剧",
        "category": "动作奇幻",
        "summary": "喜剧演员尼克·克罗尔用“小男孩”视角，调侃中年危机、婚姻和那个永远长不大的自己。",
        "tags": [
            "脱口秀",
            "单口喜剧",
            "成长",
            "自嘲",
            "成人"
        ]
    },
    {
        "title": "莫顿船长与蜘蛛女王",
        "url": "./movies/movie-1679.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻",
        "category": "爱情喜剧",
        "summary": "蒸汽时代的船长莫顿在南太平洋孤岛遇到一位能操控蜘蛛群的女王，而她其实是百年前失踪的植物学家。",
        "tags": [
            "航海",
            "巨型蜘蛛",
            "蒸汽朋克",
            "冒险"
        ]
    },
    {
        "title": "不夜城1980",
        "url": "./movies/movie-1680.html",
        "cover": "./30.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情， 历史， 爱情",
        "category": "亚洲精选",
        "summary": "1980年的夜市摊主阿强，为了初恋的一张出国机票，卖掉摊位后却发现她根本没走。",
        "tags": [
            "改革开放",
            "个体户",
            "时代浪潮",
            "旧城改造",
            "初恋重逢"
        ]
    },
    {
        "title": "云火锅之约",
        "url": "./movies/movie-1681.html",
        "cover": "./31.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "热播剧集",
        "summary": "疫情阻隔了回家的路，却阻隔不了一场跨越千里的“云”上火锅团圆饭。",
        "tags": [
            "疫情",
            "亲情",
            "治愈",
            "线上"
        ]
    },
    {
        "title": "老爸夏令营",
        "url": "./movies/movie-1682.html",
        "cover": "./32.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "category": "爱情喜剧",
        "summary": "五个完全不擅长带娃的硬汉老爸，在夏令营里被一群熊孩子集体“军训”。",
        "tags": [
            "父爱",
            "搞笑",
            "夏令营",
            "成长",
            "亲子"
        ]
    },
    {
        "title": "我们爱企鹅",
        "url": "./movies/movie-1683.html",
        "cover": "./33.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "日本",
        "type": "动画电影",
        "genre": "动画 / 喜剧 / 家庭",
        "category": "家庭剧情",
        "summary": "一群误打误撞闯进南极旅站的孩子和企鹅结成同盟，他们要在暴风雪来临前把一场失控的“企鹅节”办成真正的救援行动。",
        "tags": [
            "极地冒险",
            "友情成长",
            "动物乐园",
            "冬季旅行",
            "轻喜剧"
        ]
    },
    {
        "title": "重返俾斯麦战舰",
        "url": "./movies/movie-1684.html",
        "cover": "./34.jpg",
        "year": "2002",
        "yearNumber": 2002,
        "region": "美国 / 德国",
        "type": "纪录片",
        "genre": "历史, 纪录",
        "category": "动作奇幻",
        "summary": "导演詹姆斯·卡梅隆带领团队潜回深海，探秘纳粹传奇战舰“俾斯麦号”的沉没真相。",
        "tags": [
            "二战",
            "海底探秘",
            "战舰"
        ]
    },
    {
        "title": "日本大使的饕餮盛宴",
        "url": "./movies/movie-1685.html",
        "cover": "./35.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 美食, 政治",
        "category": "最新电视剧",
        "summary": "新任驻外大使发现，化解国际危机的秘诀竟藏在各国大使的私房菜谱里。",
        "tags": [
            "外交",
            "料理对决",
            "文化冲突",
            "权力博弈",
            "深夜食堂风"
        ]
    },
    {
        "title": "极地重生",
        "url": "./movies/movie-1686.html",
        "cover": "./36.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "加拿大",
        "type": "电影",
        "genre": "冒险，生存",
        "category": "环球片库",
        "summary": "科学家在北极科考站遇险，零下60度的荒原上，他只有48小时活下去。",
        "tags": [
            "极寒",
            "求生",
            "亲情",
            "真实事件改编"
        ]
    },
    {
        "title": "偷心俏冤家",
        "url": "./movies/movie-1687.html",
        "cover": "./37.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 悬疑",
        "category": "动作奇幻",
        "summary": "为了继承遗产，一个花花公子被迫与一个专偷富豪珠宝的女飞贼签订契约婚姻。",
        "tags": [
            "先婚后爱",
            "欢喜冤家",
            "珠宝大盗",
            "契约婚姻",
            "泰式甜剧"
        ]
    },
    {
        "title": "茱莉和朱丽叶",
        "url": "./movies/movie-1688.html",
        "cover": "./38.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "category": "爱情喜剧",
        "summary": "纽约美食博主茱莉与法国乡村厨师朱丽叶意外互换味觉，开启一段横跨大西洋的料理奇缘。",
        "tags": [
            "美食",
            "身份互换",
            "女性友谊",
            "跨文化",
            "温情"
        ]
    },
    {
        "title": "气球2019",
        "url": "./movies/movie-1689.html",
        "cover": "./39.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国",
        "type": "电影",
        "genre": "剧情, 家庭, 文艺",
        "category": "环球片库",
        "summary": "藏区一户普通牧民家庭，因一个从诊所带回来的避孕套气球，掀起了三代人的情感风暴。",
        "tags": [
            "藏地",
            "气球",
            "生育",
            "信仰",
            "女性"
        ]
    },
    {
        "title": "心灵与智慧",
        "url": "./movies/movie-1690.html",
        "cover": "./40.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 心理",
        "category": "家庭剧情",
        "summary": "一款能备份记忆的芯片普及后，富人区陆续出现“活死人”——他们的身体活着，但智慧和心灵被完全清空。",
        "tags": [
            "脑机接口",
            "记忆窃取",
            "双面人生",
            "哲学思辨",
            "赛博朋克"
        ]
    },
    {
        "title": "古田1929",
        "url": "./movies/movie-1691.html",
        "cover": "./41.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争 / 传记",
        "category": "环球片库",
        "summary": "1929 年寒冬，一支缺粮少弹的军队在山沟里开了一场九天会议，从此改变了中国的枪杆子。",
        "tags": [
            "革命",
            "会议",
            "建军",
            "思想建党",
            "政治"
        ]
    },
    {
        "title": "晚安，好运",
        "url": "./movies/movie-1692.html",
        "cover": "./42.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 科幻",
        "category": "爱情喜剧",
        "summary": "一艘殖民火星的飞船遭遇未知辐射，全员进入低温休眠，唯独患有幽闭恐惧症的女工程师被AI唤醒并被告知：好运是唯一的生存法则。",
        "tags": [
            "太空灾难",
            "密室逃脱",
            "人工智能",
            "心理战"
        ]
    },
    {
        "title": "三個光頭佬",
        "url": "./movies/movie-1693.html",
        "cover": "./43.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，动作，犯罪",
        "category": "高清电影",
        "summary": "三个失忆的光头杀手，误以为自己是保安，结果把整个黑帮的武器库给“清理”了。",
        "tags": [
            "光头",
            "兄弟",
            "乌龙"
        ]
    },
    {
        "title": "赌皇斗赌后",
        "url": "./movies/movie-1694.html",
        "cover": "./44.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作, 赌片",
        "category": "爱情喜剧",
        "summary": "澳门赌皇与香港赌后因老千误会结仇，被黑帮逼上赌桌生死局，却在洗牌时发现对方是自己网恋三年的“宝宝”。",
        "tags": [
            "千术",
            "冤家",
            "擂台",
            "90年代"
        ]
    },
    {
        "title": "神探南茜",
        "url": "./movies/movie-1695.html",
        "cover": "./45.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑 / 青少年",
        "category": "亚洲精选",
        "summary": "高中少女用罪案播客重启一桩二十年前的失踪案，却发现嫌疑人就在身边。",
        "tags": [
            "女侦探",
            "高中",
            "播客",
            "冷案"
        ]
    },
    {
        "title": "好莱坞庄园",
        "url": "./movies/movie-1696.html",
        "cover": "./46.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑 / 黑色幽默",
        "category": "家庭剧情",
        "summary": "在修复梦露旧宅泳池时，施工队挖出了第二具尸骨，死因与官方记录中的梦露一模一样。",
        "tags": [
            "梦露之死",
            "娱乐圈黑幕",
            "多线叙事"
        ]
    },
    {
        "title": "牌坊下的女人2009",
        "url": "./movies/movie-1697.html",
        "cover": "./47.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情、家庭、伦理",
        "category": "环球片库",
        "summary": "民国徽州，一座贞节牌坊下，三代守寡女人的爱欲与反抗，以及那个亲手为她们立牌坊的疯癫族长。",
        "tags": [
            "封建礼教",
            "女性悲剧",
            "徽州文化"
        ]
    },
    {
        "title": "急诊男女泰版",
        "url": "./movies/movie-1698.html",
        "cover": "./48.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情, 医疗",
        "category": "亚洲精选",
        "summary": "离婚六年的急诊科医生夫妇，意外在同一家医院重逢，从此抢救病人和互怼成了日常工作。",
        "tags": [
            "泰剧",
            "翻拍",
            "急诊室",
            "前任复合",
            "欢喜冤家"
        ]
    },
    {
        "title": "深宅谜影",
        "url": "./movies/movie-1699.html",
        "cover": "./49.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑",
        "category": "家庭剧情",
        "summary": "亡夫头七那夜，富商遗孀看到他的魂魄归来，掀开了家族中尘封二十年的分尸惨案。",
        "tags": [
            "民国",
            "宅斗",
            "本格推理",
            "凶宅"
        ]
    },
    {
        "title": "花自飘零",
        "url": "./movies/movie-1700.html",
        "cover": "./50.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭 / 女性",
        "category": "经典回看",
        "summary": "为了唤醒阿尔茨海默病母亲的记忆，女儿把自家公寓改造成了母亲记忆中的那座正在拆迁的眷村。",
        "tags": [
            "母女",
            "养老院",
            "阿尔茨海默",
            "花艺",
            "和解"
        ]
    },
    {
        "title": "熊出没之神奇宝物",
        "url": "./movies/movie-1701.html",
        "cover": "./51.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画 / 喜剧 / 冒险",
        "category": "经典回看",
        "summary": "熊大熊二发现了一张藏宝图，光头强也跟了上来，终点却是一个让他们沉默的地方。",
        "tags": [
            "合家欢",
            "寻宝",
            "环保",
            "友情"
        ]
    },
    {
        "title": "欢乐满江湖",
        "url": "./movies/movie-1702.html",
        "cover": "./52.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 武侠",
        "category": "动作奇幻",
        "summary": "一个相声社团被误认为武林门派，竟然靠“贯口”和“太平歌词”平息了一场江湖浩劫。",
        "tags": [
            "相声江湖",
            "门派乱斗",
            "黑色幽默"
        ]
    },
    {
        "title": "集中营狩猎",
        "url": "./movies/movie-1703.html",
        "cover": "./53.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "动作 / 惊悚 / 历史",
        "category": "爱情喜剧",
        "summary": "在一座被遗忘的战后集中营里，残存的囚犯每周末都会被当作“猎物”供前军官们娱乐狩猎。",
        "tags": [
            "反乌托邦",
            "极限生存",
            "血腥暴力",
            "政治寓言"
        ]
    },
    {
        "title": "青年的椅子",
        "url": "./movies/movie-1704.html",
        "cover": "./54.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑，剧情，校园",
        "category": "爱情喜剧",
        "summary": "学校心理咨询室里那把椅子，坐上它的人会说出内心最深处的黑暗秘密。",
        "tags": [
            "霸凌",
            "复仇",
            "日记",
            "密室"
        ]
    },
    {
        "title": "追逐珊瑚",
        "url": "./movies/movie-1705.html",
        "cover": "./55.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "美国",
        "type": "电影",
        "genre": "纪录片 / 自然 / 环保",
        "category": "经典回看",
        "summary": "一群艺术家和科学家扛着特制相机，潜入海底记录下珊瑚死亡前最后的绚烂荧光。",
        "tags": [
            "珊瑚白化",
            "海洋危机",
            "延时摄影",
            "科学家团队",
            "视觉震撼"
        ]
    },
    {
        "title": "神圣女王",
        "url": "./movies/movie-1706.html",
        "cover": "./56.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "迷你剧",
        "genre": "历史， 剧情， 传记",
        "category": "动作奇幻",
        "summary": "不直接拍女王，而是通过服务于伊丽莎白一世四十年的六位贴身女官的眼睛，见证“童贞女王”从登基到暮年的每一个秘密、脆弱与至高无上的权力瞬间。",
        "tags": [
            "伊丽莎白一世",
            "幕后",
            "女官",
            "权谋"
        ]
    },
    {
        "title": "蜜蜂酿蜜",
        "url": "./movies/movie-1707.html",
        "cover": "./57.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "电影",
        "genre": "剧情，文艺，传记",
        "category": "悬疑犯罪",
        "summary": "一位失聪的老蜂农与一个失语的孤儿，在一片即将被征收的野花田里，互相学习如何倾听世界。",
        "tags": [
            "自然隐喻",
            "匠人精神",
            "治愈",
            "孤独",
            "传承"
        ]
    },
    {
        "title": "少年女仆",
        "url": "./movies/movie-1708.html",
        "cover": "./58.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "日本",
        "type": "动画 / 剧集",
        "genre": "喜剧 / 日常 / 伪娘",
        "category": "家庭剧情",
        "summary": "全能小学生小宫千寻为了还债，穿上女仆装住进了土豪舅舅家，从此开始了爆笑的“主妇”生活。",
        "tags": [
            "女装",
            "搞笑",
            "治愈",
            "主仆"
        ]
    },
    {
        "title": "神童战魔君",
        "url": "./movies/movie-1709.html",
        "cover": "./59.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 奇幻 / 儿童",
        "category": "爱情喜剧",
        "summary": "七岁精通数学、八岁拿下空手道黑带的神童阿宝，这次要用九九乘法表对抗从地府逃出来的吸魂魔君。",
        "tags": [
            "港产片",
            "神童",
            "僵尸",
            "喜剧打斗"
        ]
    },
    {
        "title": "雪宝的从前从前",
        "url": "./movies/movie-1710.html",
        "cover": "./60.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "剧集 / 短片",
        "genre": "动画, 奇幻, 喜剧",
        "category": "经典回看",
        "summary": "在艾莎和安娜小时候，雪宝偷偷溜进阿伦黛尔城堡的图书馆，开始根据书名给雪宝宝宝们“乱编”他想象中的过去。",
        "tags": [
            "迪士尼",
            "衍生剧",
            "打破第四面墙"
        ]
    },
    {
        "title": "青铜的基督",
        "url": "./movies/movie-1711.html",
        "cover": "./61.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "意大利 / 法国",
        "type": "电影",
        "genre": "历史",
        "category": "环球片库",
        "summary": "十字军东征时期，一座神秘的青铜基督像被运往欧洲，护送的骑士一个接一个离奇死亡。",
        "tags": [
            "宗教",
            "圣像",
            "信仰",
            "中世纪",
            "悬疑"
        ]
    },
    {
        "title": "关键判决",
        "url": "./movies/movie-1712.html",
        "cover": "./62.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "法律剧情",
        "category": "动作奇幻",
        "summary": "一名年轻女律师接手推翻反堕胎法的历史性诉讼，却发现最大阻力来自自己信奉天主教的首席法官母亲。",
        "tags": [
            "法庭戏",
            "最高法院",
            "堕胎权",
            "女性觉醒"
        ]
    },
    {
        "title": "恶魔山峰",
        "url": "./movies/movie-1713.html",
        "cover": "./63.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 冒险 / 犯罪",
        "category": "家庭剧情",
        "summary": "为了一份失踪父亲留下的登山日志，兄妹两人闯入恶魔山峰，却发现山里埋着的不只是尸骨，还有一桩跨越十年的秘密买卖。",
        "tags": [
            "雪山追踪",
            "家族秘密",
            "金矿传闻",
            "生存对抗",
            "失踪真相"
        ]
    },
    {
        "title": "八月的冲绳",
        "url": "./movies/movie-1714.html",
        "cover": "./64.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭 / 战争反思",
        "category": "亚洲精选",
        "summary": "一位东京的叛逆少女被送到冲绳外婆家过暑假，却在二战遗骸挖掘中，看见了外婆少女时代的幽灵。",
        "tags": [
            "战后伤痕",
            "跨代和解",
            "琉球文化",
            "三线琴"
        ]
    },
    {
        "title": "我的爱情，我的新娘",
        "url": "./movies/movie-1715.html",
        "cover": "./65.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "category": "动作奇幻",
        "summary": "婚礼当天，新郎失踪，新娘追到机场却发现他是去拦截自己的初恋回国。",
        "tags": [
            "婚礼",
            "前任",
            "误会",
            "浪漫",
            "搞笑"
        ]
    },
    {
        "title": "摩登原始人第四季",
        "url": "./movies/movie-1716.html",
        "cover": "./66.jpg",
        "year": "1963",
        "yearNumber": 1963,
        "region": "美国",
        "type": "动画剧集",
        "genre": "喜剧、动画、家庭",
        "category": "动作奇幻",
        "summary": "石器时代的原始人弗雷德一家，继续用骨头、石头和恐龙过着“摩登”的闹剧生活。",
        "tags": [
            "石器时代",
            "恶搞现代",
            "经典",
            "情景喜剧"
        ]
    },
    {
        "title": "霹雳兵涛",
        "url": "./movies/movie-1717.html",
        "cover": "./67.jpg",
        "year": "2029",
        "yearNumber": 2029,
        "region": "台湾",
        "type": "电影",
        "genre": "动作 / 战争",
        "category": "家庭剧情",
        "summary": "一群被除名的“问题士兵”被秘密集结，执行一项不可能完成的斩首任务，背后却是政治阴谋。",
        "tags": [
            "特种兵",
            "兄弟连",
            "台海",
            "实弹"
        ]
    },
    {
        "title": "单身女班",
        "url": "./movies/movie-1718.html",
        "cover": "./68.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧，爱情，女性",
        "category": "热播剧集",
        "summary": "母胎单身的恋爱讲师开班教学员如何撩汉，结果自己先沦陷，还把课程内容全用反了。",
        "tags": [
            "补习班",
            "恋爱技巧",
            "姐妹情",
            "反套路",
            "自黑"
        ]
    },
    {
        "title": "十月的日子里",
        "url": "./movies/movie-1719.html",
        "cover": "./69.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "意大利",
        "type": "电影",
        "genre": "剧情，家庭，社会",
        "category": "高清电影",
        "summary": "2020年10月，意大利封城期间，一对离婚夫妇被迫与青春期儿子同住30天。",
        "tags": [
            "疫情",
            "封城",
            "家庭关系",
            "隔离",
            "重生"
        ]
    },
    {
        "title": "餐桌上的世说新语第二季",
        "url": "./movies/movie-1720.html",
        "cover": "./70.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史 / 喜剧 / 美食",
        "category": "高清电影",
        "summary": "每集一道魏晋名士同款菜肴，吃出竹林七贤的荒诞、风流与腹黑。",
        "tags": [
            "魏晋风骨",
            "单元剧",
            "冷知识",
            "文化脱口秀"
        ]
    },
    {
        "title": "铁人",
        "url": "./movies/movie-1721.html",
        "cover": "./71.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "日本",
        "type": "电影",
        "genre": "运动 / 传记 / 热血",
        "category": "最新电视剧",
        "summary": "一名在工厂事故后失去奔跑能力的前田工人，靠着一块废旧铁板和一群少年，重新把自己练回赛道。",
        "tags": [
            "长跑训练",
            "逆境重生",
            "工厂背景",
            "老师与学生",
            "自我超越"
        ]
    },
    {
        "title": "黑暗角落",
        "url": "./movies/movie-1722.html",
        "cover": "./72.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，惊悚",
        "category": "最新电视剧",
        "summary": "一名患有广场恐惧症的摄影师，透过窗户偷窥对面大楼的住户，却意外目睹了一场分尸凶杀案。",
        "tags": [
            "心理惊悚",
            "偷窥",
            "都市",
            "压抑"
        ]
    },
    {
        "title": "地球守护者",
        "url": "./movies/movie-1723.html",
        "cover": "./73.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "科幻, 特摄, 剧情",
        "category": "环球片库",
        "summary": "地球防卫队的日常不是打怪兽，而是写报告、拉赞助、应付环保组织，怪兽来了还要负责打扫卫生。",
        "tags": [
            "巨大英雄",
            "环保",
            "反套路",
            "社畜",
            "讽刺"
        ]
    },
    {
        "title": "沉睡的谋杀案",
        "url": "./movies/movie-1724.html",
        "cover": "./74.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "悬疑, 犯罪, 剧情",
        "category": "环球片库",
        "summary": "新婚少妇在百年庄园沉睡时，脑中不断闪现一桩60年前的谋杀案，而她发现自己竟是凶手的后代。",
        "tags": [
            "阿加莎风格",
            "庄园谋杀",
            "记忆唤醒",
            "陈年旧案"
        ]
    },
    {
        "title": "幸运钥匙",
        "url": "./movies/movie-1725.html",
        "cover": "./75.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "category": "热播剧集",
        "summary": "一个失败演员和一个冷血杀手在澡堂互换了储物柜钥匙，也互换了整个人生。",
        "tags": [
            "身份互换",
            "杀手",
            "失忆",
            "窝囊废",
            "黑色幽默"
        ]
    },
    {
        "title": "乐极生悲",
        "url": "./movies/movie-1726.html",
        "cover": "./76.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "西班牙",
        "type": "电影",
        "genre": "喜剧，悬疑，黑色幽默",
        "category": "经典回看",
        "summary": "五个合买彩票的老友中了头奖，在庆祝派对上，庆祝的香槟被证实下了剧毒，五人全部中毒，凶手是还没拿到钱的他们自己。",
        "tags": [
            "彩票",
            "中奖",
            "意外死亡",
            "朋友反目"
        ]
    },
    {
        "title": "风野郎",
        "url": "./movies/movie-1727.html",
        "cover": "./77.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电影",
        "genre": "动作 / 犯罪 / 剧情",
        "category": "亚洲精选",
        "summary": "被称为“风野郎”的杀手只想金盆洗手，但组织用他暗恋的居酒屋老板娘要挟他去执行最后一次暗杀。",
        "tags": [
            "黑帮",
            "复仇",
            "极道",
            "暴力美学",
            "孤狼"
        ]
    },
    {
        "title": "海盗城",
        "url": "./movies/movie-1728.html",
        "cover": "./78.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电视剧",
        "genre": "动作，古装，冒险",
        "category": "家庭剧情",
        "summary": "一群被流放到海岛上的朝鲜贱民，为了生存和自由，建立了一座属于自己的“海盗城”。",
        "tags": [
            "海盗",
            "朝鲜时代",
            "寻宝",
            "权谋"
        ]
    },
    {
        "title": "白象",
        "url": "./movies/movie-1729.html",
        "cover": "./79.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "泰国/美国",
        "type": "电影",
        "genre": "动作，犯罪，惊悚",
        "category": "经典回看",
        "summary": "他是一头被军方遗弃的“白象”，沉默地游走在法律之外，只为讨回一个不该死去的真相。",
        "tags": [
            "硬汉",
            "以暴制暴",
            "复仇",
            "孤胆英雄"
        ]
    },
    {
        "title": "名医话养生",
        "url": "./movies/movie-1730.html",
        "cover": "./80.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情，医疗，伦理",
        "category": "悬疑犯罪",
        "summary": "一档火爆全国的养生节目背后，隐藏着一个用安慰剂和话术操控老人心理的惊天骗局。",
        "tags": [
            "养生",
            "骗局",
            "神医",
            "新闻调查",
            "医患关系"
        ]
    },
    {
        "title": "灵书妙探第八季",
        "url": "./movies/movie-1731.html",
        "cover": "./81.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "category": "高清电影",
        "summary": "畅销小说家卡塞尔与女警长贝克特结婚后，一个模仿他们破案经历写作的杀手，开始对“角色原型”下手。",
        "tags": [
            "作家侦探",
            "连环杀手",
            "最终季"
        ]
    },
    {
        "title": "飞不起来的童年",
        "url": "./movies/movie-1732.html",
        "cover": "./82.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "古巴",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "经典回看",
        "summary": "古巴小镇少年想成为飞行员，但他唯一的老师是患有躁郁症的退役老飞行员爷爷，而爷爷只想教他开拖拉机。",
        "tags": [
            "教育",
            "贫穷",
            "梦想",
            "写实"
        ]
    },
    {
        "title": "教育向上",
        "url": "./movies/movie-1733.html",
        "cover": "./83.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情， 家庭",
        "category": "热播剧集",
        "summary": "一个全是“差生”的班级，来了一个不按常理出牌的新班主任，他要带他们逆风翻盘。",
        "tags": [
            "高考",
            "师生",
            "逆袭",
            "群像"
        ]
    },
    {
        "title": "这地球",
        "url": "./movies/movie-1734.html",
        "cover": "./84.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国 / 英国",
        "type": "剧集",
        "genre": "科幻 / 剧情",
        "category": "动作奇幻",
        "summary": "外星舰队兵临城下，全人类等待开战，语言学家却发现它们反复播放的“宣战广播”其实是一句“请帮帮我们”。",
        "tags": [
            "外星入侵",
            "逆向思维",
            "心理学",
            "非暴力抵抗"
        ]
    },
    {
        "title": "解放云南",
        "url": "./movies/movie-1735.html",
        "cover": "./85.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争",
        "category": "动作奇幻",
        "summary": "1949年冬，一支解放军侦察连深入滇南，为切断敌军逃往缅甸的最后通道而战。",
        "tags": [
            "解放战争",
            "西南战役",
            "战略大迂回"
        ]
    },
    {
        "title": "楚汉传奇",
        "url": "./movies/movie-1736.html",
        "cover": "./86.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 历史 / 战争",
        "category": "高清电影",
        "summary": "重新解读楚汉争霸，这一次，刘邦不是流氓，项羽不是英雄，他们都是被时代裹挟的普通人。",
        "tags": [
            "史诗",
            "权谋",
            "新解",
            "群像"
        ]
    },
    {
        "title": "真相至上",
        "url": "./movies/movie-1737.html",
        "cover": "./87.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 律政",
        "category": "高清电影",
        "summary": "实习记者调查一起旧案，发现十年前被枪决的杀人犯可能是替罪羊，而真凶还在警局。",
        "tags": [
            "记者",
            "反腐",
            "十年冤案",
            "媒体"
        ]
    },
    {
        "title": "左手上篮",
        "url": "./movies/movie-1738.html",
        "cover": "./88.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "体育电影",
        "genre": "运动,励志,悬疑",
        "category": "亚洲精选",
        "summary": "左手天赋成了他唯一的缺口，主角在联赛与黑幕之间做选择，终于把“替补也能赢球”写成一次不完美却足以改写命运的投篮。",
        "tags": [
            "篮球",
            "校园联赛",
            "边缘少年",
            "规则对抗",
            "群像"
        ]
    },
    {
        "title": "智取比华利山",
        "url": "./movies/movie-1739.html",
        "cover": "./89.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧犯罪",
        "category": "环球片库",
        "summary": "几个街头小混混假扮富豪混入比华利山盗取珠宝，却被真正的国际大盗团队截胡。",
        "tags": [
            "草根逆袭",
            "豪宅",
            "局中局",
            "黑色幽默"
        ]
    },
    {
        "title": "恐怖夜车",
        "url": "./movies/movie-1740.html",
        "cover": "./90.jpg",
        "year": "1988",
        "yearNumber": 1988,
        "region": "香港",
        "type": "电影",
        "genre": "恐怖",
        "category": "高清电影",
        "summary": "末班列车上，每节车厢的乘客都发现自己的死亡预告，而列车正驶向地狱。",
        "tags": [
            "悬疑",
            "灵异",
            "密闭空间"
        ]
    },
    {
        "title": "妖者为王第二季",
        "url": "./movies/movie-1741.html",
        "cover": "./91.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画, 奇幻, 战斗",
        "category": "高清电影",
        "summary": "第一季主角黑化后成为新任妖王，第二季他将面对人类与妖怪联军的正义围剿。",
        "tags": [
            "妖怪",
            "热血",
            "王座争夺",
            "黑化"
        ]
    },
    {
        "title": "科搜研之女2022",
        "url": "./movies/movie-1742.html",
        "cover": "./92.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑，犯罪，法医",
        "category": "家庭剧情",
        "summary": "科搜研女神崎真理时隔多年重返一线，面对的是一具被完美冷冻了三十年的尸体，与当年的自己有关。",
        "tags": [
            "科学搜查",
            "冷案",
            "正义",
            "女科学家"
        ]
    },
    {
        "title": "逃出求生营",
        "url": "./movies/movie-1743.html",
        "cover": "./93.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑、惊悚",
        "category": "经典回看",
        "summary": "六名问题少年被送入神秘改造营，却发现自己成了真人狩猎游戏里的猎物。",
        "tags": [
            "密室",
            "生存",
            "反转",
            "少年",
            "心理战"
        ]
    },
    {
        "title": "良言写意",
        "url": "./movies/movie-1744.html",
        "cover": "./94.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国内地",
        "type": "剧集",
        "genre": "爱情 / 悬疑 / 都市",
        "category": "动作奇幻",
        "summary": "一场蓄意车祸让商业精英厉择良失去双腿，也失去了挚爱记忆，而他的私人看护，正是当年不告而别的恋人。",
        "tags": [
            "甜虐交织",
            "霸道总裁",
            "失忆",
            "商业复仇",
            "双向守护"
        ]
    },
    {
        "title": "吾辈本如斯",
        "url": "./movies/movie-1745.html",
        "cover": "./95.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "剧情电影",
        "genre": "社会现实 / 人物群像 / 文艺片",
        "category": "动作奇幻",
        "summary": "洪水围住的矿城里，摄影师拿起生锈相机拍下每一张工人生活，他发现自己拍下的影像并非文稿，而是被封存太久的名字在慢慢苏醒。",
        "tags": [
            "矿城",
            "工人叙事",
            "纪实美学",
            "口号政治",
            "集体记忆"
        ]
    },
    {
        "title": "深牢大狱",
        "url": "./movies/movie-1746.html",
        "cover": "./96.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电视剧",
        "genre": "犯罪, 剧情",
        "category": "家庭剧情",
        "summary": "为了抓捕藏身海外的毒枭，顶级刑警“自愿”被关进世界最严密的深海监狱，却发现自己只是一枚弃子。",
        "tags": [
            "越狱",
            "卧底",
            "监狱风云",
            "高智商犯罪"
        ]
    },
    {
        "title": "阿拉德：宿命之门",
        "url": "./movies/movie-1747.html",
        "cover": "./97.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "奇幻, 冒险, 动作",
        "category": "环球片库",
        "summary": "当预言中毁灭世界的“宿命之门”即将开启，一群被选中的冒险者却发现预言本身就是谎言。",
        "tags": [
            "游戏改编",
            "异世界",
            "宿命论",
            "团队冒险"
        ]
    },
    {
        "title": "七海猎奇",
        "url": "./movies/movie-1748.html",
        "cover": "./98.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻 / 冒险",
        "category": "热播剧集",
        "summary": "海洋学家女儿获得一本古籍，每解开一个海洋谜题，就能召唤一位传说中的海神。",
        "tags": [
            "海洋",
            "神话",
            "冒险",
            "少女"
        ]
    },
    {
        "title": "皇家兄弟马戏团",
        "url": "./movies/movie-1749.html",
        "cover": "./99.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "剧集",
        "genre": "剧情, 历史, 家庭",
        "category": "经典回看",
        "summary": "维多利亚时代，一对私生子兄弟继承了父亲的贵族头衔，也继承了他的濒死马戏团。",
        "tags": [
            "马戏团",
            "兄弟",
            "维多利亚时代",
            "遗产",
            "背叛"
        ]
    },
    {
        "title": "古巴漂移者",
        "url": "./movies/movie-1750.html",
        "cover": "./100.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国 / 古巴",
        "type": "电影",
        "genre": "动作 / 犯罪 / 赛车",
        "category": "动作奇幻",
        "summary": "美国赛车手偷渡到古巴参加地下飙车赛，却发现他的对手全是开五十年代老爷车的退休特工。",
        "tags": [
            "飙车",
            "哈瓦那",
            "美古关系",
            "兄弟情"
        ]
    },
    {
        "title": "百鸟嬉春",
        "url": "./movies/movie-1751.html",
        "cover": "./101.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "动画奇幻电影",
        "genre": "动画 / 歌舞 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "少年在春祭前夜误入会唱歌的山谷，发现百鸟正在等待一个失去记忆的守林人归来，而整座山林的春天也将因为一场偷猎危机提前凋零。",
        "tags": [
            "国风山林",
            "节气传说",
            "少年成长",
            "百鸟献歌",
            "守护自然"
        ]
    },
    {
        "title": "我制服了魔鬼",
        "url": "./movies/movie-1752.html",
        "cover": "./102.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "剧集",
        "genre": "惊悚 / 奇幻",
        "category": "家庭剧情",
        "summary": "一个废柴青年用社交软件约到了魔鬼，发现对方是个毒舌少女，而且根本送不走。",
        "tags": [
            "恶魔附身",
            "萝莉",
            "黑色幽默"
        ]
    },
    {
        "title": "缔创学校",
        "url": "./movies/movie-1753.html",
        "cover": "./103.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/校园",
        "category": "经典回看",
        "summary": "一所“只收被开除的学生”的学校，用“不教标准答案”的方法，培养出改变教育制度的一代人。",
        "tags": [
            "教育",
            "改革",
            "理想主义",
            "师生",
            "社会派"
        ]
    },
    {
        "title": "来者何人",
        "url": "./movies/movie-1754.html",
        "cover": "./104.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑惊悚 / 犯罪 / 心理",
        "category": "热播剧集",
        "summary": "暴雨夜里一个自称旧友的陌生人敲开门，屋内八个互不信任的人却在同一时间开始怀疑彼此根本不认识彼此。",
        "tags": [
            "陌生访客",
            "封闭空间",
            "身份错位",
            "连环反转",
            "心理对峙"
        ]
    },
    {
        "title": "现在的你最可爱",
        "url": "./movies/movie-1755.html",
        "cover": "./105.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "剧集",
        "genre": "爱情、奇幻",
        "category": "悬疑犯罪",
        "summary": "一个80岁的老太太在临终前回到了18岁的身体里，她决定找到那个年轻时错过的初恋，却发现他变成了一个丧气的中年大叔。",
        "tags": [
            "纯爱",
            "时间旅行",
            "治愈"
        ]
    },
    {
        "title": "盐水大饭店",
        "url": "./movies/movie-1756.html",
        "cover": "./106.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 历史 / 犯罪",
        "category": "经典回看",
        "summary": "1970年代台南盐水镇，一家大饭店成为黑白两道角力场，跑堂小弟在饭店里见证了台湾帮派的最后荣光。",
        "tags": [
            "盐水镇",
            "黑帮",
            "台湾旧事",
            "兄弟情"
        ]
    },
    {
        "title": "埃丽卡",
        "url": "./movies/movie-1757.html",
        "cover": "./107.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "意大利",
        "type": "电影",
        "genre": "悬疑 / 心理 / 剧情",
        "category": "亚洲精选",
        "summary": "当埃丽卡在海边小镇醒来时，她记得自己的名字，却不记得镜子里那张脸属于谁，而镇上每个人似乎都在等她想起来。",
        "tags": [
            "双重身份",
            "记忆缺口",
            "海边小镇",
            "家族秘密",
            "失真真相"
        ]
    },
    {
        "title": "被隐匿的真相",
        "url": "./movies/movie-1758.html",
        "cover": "./108.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑，律政，犯罪",
        "category": "悬疑犯罪",
        "summary": "一场铁证如山的杀人案，辩护律师却坚信被告无罪，随着调查深入，他发现自己才是真凶。",
        "tags": [
            "法庭",
            "反转",
            "正义",
            "媒体审判",
            "冤案"
        ]
    },
    {
        "title": "启功",
        "url": "./movies/movie-1759.html",
        "cover": "./109.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国大陆",
        "type": "电影",
        "genre": "传记, 剧情",
        "category": "悬疑犯罪",
        "summary": "一代书法大师启功跨越战乱与动荡，以笔为命，用“学为人师，行为世范”守护了中国文人的最后风骨。",
        "tags": [
            "书法",
            "国学",
            "文人风骨"
        ]
    },
    {
        "title": "决战南京",
        "url": "./movies/movie-1760.html",
        "cover": "./110.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 战争",
        "category": "经典回看",
        "summary": "1949年渡江战役前夕，国共双方在南京城内展开了一场决定中国命运的情报暗战。",
        "tags": [
            "国共内战",
            "谍战",
            "渡江战役",
            "正剧"
        ]
    },
    {
        "title": "危险性游戏",
        "url": "./movies/movie-1761.html",
        "cover": "./111.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 悬疑, 犯罪",
        "category": "高清电影",
        "summary": "六个人报名参加一档密室逃脱真人秀，却发现输家不是被淘汰，而是被直播死亡。",
        "tags": [
            "暗网",
            "直播",
            "密室逃脱",
            "心理战"
        ]
    },
    {
        "title": "石狮之超能记者",
        "url": "./movies/movie-1762.html",
        "cover": "./112.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "科幻, 悬疑, 动作",
        "category": "经典回看",
        "summary": "小镇实习记者触碰镇上古石狮后，获得“看透一切谎言”的双眼，却揭开了石狮本身的秘密。",
        "tags": [
            "超能力",
            "媒体",
            "反腐"
        ]
    },
    {
        "title": "失业女王联盟",
        "url": "./movies/movie-1763.html",
        "cover": "./113.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 剧情, 女性",
        "category": "亚洲精选",
        "summary": "三个分别被裁员、被出轨、被子女嫌弃的中年女人，组成了伦敦最生猛的家政清洁队。",
        "tags": [
            "中年危机",
            "姐妹情",
            "绝地反击"
        ]
    },
    {
        "title": "阴阳爱国语",
        "url": "./movies/movie-1764.html",
        "cover": "./114.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "奇幻 / 动作",
        "category": "经典回看",
        "summary": "台语配音版阴阳师故事，落魄法师与通灵少女联手对抗都市百鬼。",
        "tags": [
            "阴阳师",
            "台语配音",
            "除妖"
        ]
    },
    {
        "title": "阿凡达",
        "url": "./movies/movie-1765.html",
        "cover": "./115.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 冒险",
        "category": "最新电视剧",
        "summary": "新一代阿凡达计划启动，人类与纳美人的混血少年发现潘多拉核心秘密。",
        "tags": [
            "潘多拉",
            "纳美人",
            "续集",
            "海洋",
            "生态"
        ]
    },
    {
        "title": "黄河在这儿转了个弯",
        "url": "./movies/movie-1766.html",
        "cover": "./116.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭, 文艺",
        "category": "最新电视剧",
        "summary": "黄河古渡口最后一个老船工，在得知村子要搬迁后，决定再造一艘传统的羊皮筏子，送自己最后一程。",
        "tags": [
            "黄河文化",
            "乡土情结",
            "拆迁变迁",
            "代际和解",
            "渡口传说"
        ]
    },
    {
        "title": "拯女记",
        "url": "./movies/movie-1767.html",
        "cover": "./117.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 动作, 犯罪",
        "category": "家庭剧情",
        "summary": "一位聋哑母亲为救出被拐女儿，徒手撕开东南亚人口贩卖帝国的黑暗网络。",
        "tags": [
            "母亲复仇",
            "人口贩卖",
            "地下世界",
            "催泪"
        ]
    },
    {
        "title": "海市蜃城",
        "url": "./movies/movie-1768.html",
        "cover": "./118.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻，爱情，灾难",
        "category": "动作奇幻",
        "summary": "因海平面上升，一座沿海城市被沙漠掩埋，15年后，有人在VR里见到了已故的亲人。",
        "tags": [
            "沙漠化",
            "虚拟现实",
            "寻找",
            "环保"
        ]
    },
    {
        "title": "西行纪之重生篇",
        "url": "./movies/movie-1769.html",
        "cover": "./119.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "奇幻, 冒险",
        "category": "高清电影",
        "summary": "唐三藏一行人回到长安，却发现大唐已灭，取而代之的是用“极乐净土”囚禁灵魂的机械佛国。",
        "tags": [
            "神话改编",
            "热血",
            "燃"
        ]
    },
    {
        "title": "白莲花",
        "url": "./movies/movie-1770.html",
        "cover": "./120.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "category": "环球片库",
        "summary": "一个被全网骂成“白莲花”的女孩死了，葬礼那天，弹幕里骂过她的人收到了她的直播邀请。",
        "tags": [
            "女性",
            "直播",
            "网暴",
            "复仇"
        ]
    },
    {
        "title": "触礁",
        "url": "./movies/movie-1771.html",
        "cover": "./121.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "惊悚电影",
        "genre": "灾难悬疑，生存，社会批判",
        "category": "高清电影",
        "summary": "一场短暂的海雾事故其实是连环警报，救援医生与退役船长在三小时内追逐真相，发现真正的触礁从来不是浪头，而是故意改写过的航线与协议。",
        "tags": [
            "海上事故",
            "船运黑幕",
            "法律博弈",
            "求生抉择",
            "伦理对抗"
        ]
    },
    {
        "title": "星际迷航",
        "url": "./movies/movie-1772.html",
        "cover": "./122.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 冒险 / 动作",
        "category": "动作奇幻",
        "summary": "年轻的柯克和史波克在瓦肯星毁灭之际，登上企业号，联手对抗来自未来的疯狂罗慕兰人。",
        "tags": [
            "太空歌剧",
            "重启",
            "平行时空",
            "舰长",
            "进取号"
        ]
    },
    {
        "title": "夺金四贱客",
        "url": "./movies/movie-1773.html",
        "cover": "./123.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "德国",
        "type": "电影",
        "genre": "犯罪喜剧",
        "category": "爱情喜剧",
        "summary": "一个过气拳手、一个穷酸演员、一个失业基金经理和一个暴躁纹身师，组队去抢那家坑了他们的银行。",
        "tags": [
            "抢银行",
            "废柴联盟",
            "黑色幽默",
            "高智商"
        ]
    },
    {
        "title": "英湘",
        "url": "./movies/movie-1774.html",
        "cover": "./124.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖, 民俗",
        "category": "亚洲精选",
        "summary": "被丈夫背叛的乡村女人，向民间巫师“英湘”求助，却变成了没有感情的复仇鬼。",
        "tags": [
            "降头",
            "复仇",
            "乡村",
            "女性"
        ]
    },
    {
        "title": "爱情二人行",
        "url": "./movies/movie-1775.html",
        "cover": "./125.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 同性",
        "category": "悬疑犯罪",
        "summary": "一对男男情侣与一对女女情侣达成“形婚互助联盟”，却因一位直男房东的入住全盘打乱。",
        "tags": [
            "三人同居",
            "形婚协议",
            "都市情感",
            "反套路"
        ]
    },
    {
        "title": "寻找薇薇安·迈尔",
        "url": "./movies/movie-1776.html",
        "cover": "./126.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "电影",
        "genre": "纪录片， 传记",
        "category": "热播剧集",
        "summary": "一个神秘保姆去世后，她留下的十万张底片震惊了世界。",
        "tags": [
            "摄影",
            "保姆",
            "天才",
            "真实事件改编"
        ]
    },
    {
        "title": "烟火人家",
        "url": "./movies/movie-1777.html",
        "cover": "./127.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "剧集",
        "genre": "家庭, 剧情, 生活",
        "category": "悬疑犯罪",
        "summary": "一栋老居民楼即将拆迁，几户普通人家在最后三个月里重拾了被遗忘的温情。",
        "tags": [
            "邻里关系",
            "烟火气",
            "治愈系",
            "群像",
            "市井生活"
        ]
    },
    {
        "title": "哦！我的皇帝陛下第一季",
        "url": "./movies/movie-1778.html",
        "cover": "./128.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧，奇幻，爱情",
        "category": "亚洲精选",
        "summary": "水逆女孩洛菲菲意外闯入一个星座能力化的奇异古国，成了皇帝陛下最头疼的“灾星”。",
        "tags": [
            "穿越",
            "古装",
            "偶像",
            "沙雕"
        ]
    },
    {
        "title": "不要靠近我",
        "url": "./movies/movie-1779.html",
        "cover": "./129.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 心理惊悚",
        "category": "最新电视剧",
        "summary": "一个社恐程序员发现，只要有人靠近他三米内，那个人就会离奇惨死。",
        "tags": [
            "社交恐惧",
            "跟踪狂",
            "反向密室",
            "都市传说"
        ]
    },
    {
        "title": "闪婚",
        "url": "./movies/movie-1780.html",
        "cover": "./130.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 喜剧",
        "category": "最新电视剧",
        "summary": "相亲三次就扯证，新婚夜才发现老公竟是网恋三年的毒舌网友。",
        "tags": [
            "闪婚",
            "契约婚姻",
            "先婚后爱",
            "反差萌"
        ]
    },
    {
        "title": "夫妻市长",
        "url": "./movies/movie-1781.html",
        "cover": "./131.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "法国",
        "type": "剧集",
        "genre": "喜剧, 剧情",
        "category": "高清电影",
        "summary": "一对闹离婚的夫妻同时竞选小镇市长，竞选口号变成了“如何气死前任”。",
        "tags": [
            "政治",
            "夫妻",
            "小镇",
            "权力游戏",
            "法式幽默"
        ]
    },
    {
        "title": "剑客与刀客",
        "url": "./movies/movie-1782.html",
        "cover": "./132.jpg",
        "year": "1977",
        "yearNumber": 1977,
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠、动作、剧情",
        "category": "亚洲精选",
        "summary": "天下第一剑客与天下第一刀客，十年后因一桩灭门案再次相遇，他们既是敌人，也是唯一理解对方的人。",
        "tags": [
            "宿命对决",
            "江湖恩怨",
            "亦敌亦友"
        ]
    },
    {
        "title": "星光继承者",
        "url": "./movies/movie-1783.html",
        "cover": "./133.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "奇幻, 冒险",
        "category": "热播剧集",
        "summary": "当星光的继承者被发现体内流淌着暗影之血，整个魔法世界的天平开始倾斜。",
        "tags": [
            "魔法学院",
            "血脉诅咒",
            "宿命对抗",
            "暗黑童话"
        ]
    },
    {
        "title": "冰上火花",
        "url": "./movies/movie-1784.html",
        "cover": "./134.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 运动",
        "category": "经典回看",
        "summary": "一名被开除的花滑选手转战冰球，用花样步伐搅动硬核赛场。",
        "tags": [
            "冰球",
            "青春",
            "热血",
            "逆袭",
            "兄弟情"
        ]
    },
    {
        "title": "森林奇旅",
        "url": "./movies/movie-1785.html",
        "cover": "./135.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "动画, 奇幻, 冒险",
        "category": "亚洲精选",
        "summary": "一个能听懂树木低语的小女孩，为了保护被工业污染吞噬的故乡森林，踏上寻找生命古种的冒险。",
        "tags": [
            "环保",
            "治愈",
            "手绘风",
            "精灵"
        ]
    },
    {
        "title": "快乐趣吹风",
        "url": "./movies/movie-1786.html",
        "cover": "./136.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 家庭",
        "category": "动作奇幻",
        "summary": "老式理发店“快乐趣”面临大型连锁店的围剿，街坊们决定用一场吹风大赛守住最后的烟火气。",
        "tags": [
            "港式喜剧",
            "理发店",
            "市井",
            "怀旧",
            "温情"
        ]
    },
    {
        "title": "老化",
        "url": "./movies/movie-1787.html",
        "cover": "./137.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 科幻 / 家庭",
        "category": "环球片库",
        "summary": "一项延缓衰老的实验失败后，原本急着变年轻的人，第一次被迫直视自己正在失去的时间与关系。",
        "tags": [
            "时间焦虑",
            "身体变化",
            "银发家庭",
            "记忆错位",
            "代际沟通"
        ]
    },
    {
        "title": "雨石",
        "url": "./movies/movie-1788.html",
        "cover": "./138.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 动画",
        "category": "家庭剧情",
        "summary": "一块会下雨的石头，一个不会笑的孩子，他们在末日洪水中寻找最后一粒干燥的种子。",
        "tags": [
            "国风",
            "上古神话",
            "冒险",
            "少年",
            "治愈"
        ]
    },
    {
        "title": "黄昏少女×失忆",
        "url": "./movies/movie-1789.html",
        "cover": "./139.jpg",
        "year": "2012",
        "yearNumber": 2012,
        "region": "日本",
        "type": "动画",
        "genre": "悬疑、恐怖、恋爱",
        "category": "经典回看",
        "summary": "旧校舍的幽灵学姐失去了生前的记忆，只有一名男生能看见她，两人开始了一场寻找死亡真相的校园冒险。",
        "tags": [
            "幽灵",
            "校园怪谈",
            "治愈",
            "学姐"
        ]
    },
    {
        "title": "有顶天家族第二季",
        "url": "./movies/movie-1790.html",
        "cover": "./140.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻，喜剧",
        "category": "家庭剧情",
        "summary": "下鸭家的笨蛋儿子矢三郎，继续在京都的天狗与人类之间，上演着荒诞又温馨的闹剧。",
        "tags": [
            "狸猫",
            "天狗",
            "日常",
            "家族"
        ]
    },
    {
        "title": "鳟鱼",
        "url": "./movies/movie-1791.html",
        "cover": "./141.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "德国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "category": "环球片库",
        "summary": "一个男人回到黑森林故乡料理父亲后事，却发现小镇所有人都在守护一条关于鳟鱼的沉默约定。",
        "tags": [
            "河流",
            "家族秘密",
            "沉默",
            "返乡"
        ]
    },
    {
        "title": "瞒骗",
        "url": "./movies/movie-1792.html",
        "cover": "./142.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 剧情",
        "category": "环球片库",
        "summary": "一场涉及百亿资金的金融骗局中，所有人都在说谎，而真正的受害者，正在策划着最后的瞒骗。",
        "tags": [
            "骗局",
            "复仇",
            "多层反转",
            "高智商犯罪",
            "金融"
        ]
    },
    {
        "title": "独立的生活",
        "url": "./movies/movie-1793.html",
        "cover": "./143.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭 / 日常",
        "category": "高清电影",
        "summary": "一对多年疏远的母女在同一屋檐下重新学习如何相处，却发现真正要独立的不是离家的人，而是放下控制欲的那一方。",
        "tags": [
            "独居老人",
            "成年归乡",
            "城市失速",
            "代际和解",
            "生活切片"
        ]
    },
    {
        "title": "乾隆与香妃",
        "url": "./movies/movie-1794.html",
        "cover": "./144.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装、爱情、历史传奇",
        "category": "家庭剧情",
        "summary": "乾隆为稳固西北而迎香妃入宫，大婚之夜才发现她竟是青梅竹马失踪多年的恋人。",
        "tags": [
            "宫廷权谋",
            "民族融合",
            "虐恋"
        ]
    },
    {
        "title": "红旗歌",
        "url": "./movies/movie-1795.html",
        "cover": "./145.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "电影",
        "genre": "历史, 音乐",
        "category": "高清电影",
        "summary": "1939年延安鲁迅艺术学院，一群来自五湖四海的热血青年，为了创作一首属于人民的战歌而燃烧青春。",
        "tags": [
            "红色题材",
            "革命",
            "合唱",
            "青春热血",
            "真实改编"
        ]
    },
    {
        "title": "精神支柱",
        "url": "./movies/movie-1796.html",
        "cover": "./146.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情，职业，医疗",
        "category": "高清电影",
        "summary": "一个患有躁郁症的天才心理咨询师，在为形形色色的来访者解开心结的同时，也在偷偷给自己治病。",
        "tags": [
            "心理咨询",
            "都市疗愈",
            "单元剧",
            "行业剧"
        ]
    },
    {
        "title": "冰雪前线",
        "url": "./movies/movie-1797.html",
        "cover": "./147.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争 / 历史",
        "category": "热播剧集",
        "summary": "1942年卡累利阿森林里，一老一少两名苏军狙击手在零下四十度的极夜中，狩猎一支德军精锐山地连。",
        "tags": [
            "二战",
            "狙击手",
            "极寒",
            "真实改编",
            "雪地"
        ]
    },
    {
        "title": "消防局",
        "url": "./movies/movie-1798.html",
        "cover": "./148.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "剧集",
        "genre": "灾难 / 职业",
        "category": "经典回看",
        "summary": "危机四伏的“消防局”里，新人们必须熬过 48 小时地狱轮班，才能获得正式徽章。",
        "tags": [
            "群像",
            "生死时速",
            "人性"
        ]
    },
    {
        "title": "二次人生",
        "url": "./movies/movie-1799.html",
        "cover": "./149.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "剧情, 科幻",
        "category": "悬疑犯罪",
        "summary": "一场车祸后，失意的程序员发现按下回车键就能回到过去，但他每次修正错误都会让现实变得更糟。",
        "tags": [
            "重生",
            "家庭",
            "温情",
            "时间循环"
        ]
    },
    {
        "title": "今晚开赞吧",
        "url": "./movies/movie-1800.html",
        "cover": "./150.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧 / 剧情 / 职场",
        "category": "悬疑犯罪",
        "summary": "一个点赞从未过百的“废柴”小编，意外获得一枚“强制百万赞”的神秘滤镜，却让生活崩塌。",
        "tags": [
            "社交媒体",
            "点赞",
            "网红",
            "数字孤独",
            "治愈"
        ]
    },
    {
        "title": "罗斯威尔第四季",
        "url": "./movies/movie-1801.html",
        "cover": "./1.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "剧集",
        "genre": "科幻，悬疑，爱情",
        "category": "家庭剧情",
        "summary": "外星混血女主角的癌症突然痊愈，代价是整个小镇开始随机坠入时空裂缝，而她必须在一周内做出选择。",
        "tags": [
            "外星人",
            "小镇阴谋",
            "绝症",
            "异能觉醒"
        ]
    },
    {
        "title": "巫山春色",
        "url": "./movies/movie-1802.html",
        "cover": "./2.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "爱情, 文艺, 悬疑",
        "category": "亚洲精选",
        "summary": "他在巫山红叶遍野的季节遇到她，却发现她的脸，和七十年前沉入江底的曾祖母一模一样。",
        "tags": [
            "重庆",
            "长江三峡",
            "时空交错",
            "替身爱情"
        ]
    },
    {
        "title": "别拿自己不当干部",
        "url": "./movies/movie-1803.html",
        "cover": "./3.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧",
        "category": "家庭剧情",
        "summary": "小区保安被误认成新来的干部，从此开启荒诞升职记。",
        "tags": [
            "讽刺",
            "小人物",
            "职场"
        ]
    },
    {
        "title": "大喜事",
        "url": "./movies/movie-1804.html",
        "cover": "./4.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭 / 喜剧 / 爱情",
        "category": "家庭剧情",
        "summary": "一场被全村当成年度盛典的婚礼，因新郎临阵失踪引爆三代人的秘密、面子和真心。",
        "tags": [
            "婚礼乌龙",
            "三代同堂",
            "认亲风波",
            "彩礼争执",
            "县城群像"
        ]
    },
    {
        "title": "砂之器2019",
        "url": "./movies/movie-1805.html",
        "cover": "./5.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "category": "家庭剧情",
        "summary": "当红钢琴家被指控四十年前一桩杀人案，他的音乐会门票成了最昂贵的不在场证明。",
        "tags": [
            "翻拍",
            "经典改编",
            "宿命",
            "古典乐",
            "社会派"
        ]
    },
    {
        "title": "鸟人大作战",
        "url": "./movies/movie-1806.html",
        "cover": "./6.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "TV动画剧集",
        "genre": "喜剧、科幻、冒险",
        "category": "环球片库",
        "summary": "三个小学生意外获得鸟人战甲，却要一边考试一边阻止反派用鸟粪毁灭城市。",
        "tags": [
            "超级英雄",
            "鸟类",
            "环保",
            "小学生",
            "变身"
        ]
    },
    {
        "title": "艳妇凸务齐欢唱",
        "url": "./movies/movie-1807.html",
        "cover": "./7.jpg",
        "year": "1995",
        "yearNumber": 1995,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作, 歌舞",
        "category": "动作奇幻",
        "summary": "三个过气女明星误打误撞成了卧底保镖，在刀光剑影中竟然唱起了卡拉OK。",
        "tags": [
            "港式无厘头",
            "乌龙特工",
            "载歌载舞",
            "女性互助"
        ]
    },
    {
        "title": "燃情密码",
        "url": "./movies/movie-1808.html",
        "cover": "./8.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑，刑侦，爱情",
        "category": "家庭剧情",
        "summary": "一场诡异的火灾烧出了二十年前的旧案，火调员林峰发现火场里留下的竟是破译罪恶的密码。",
        "tags": [
            "火灾调查",
            "悬疑推理",
            "高科技犯罪",
            "复仇",
            "消防英烈"
        ]
    },
    {
        "title": "苏联巴士站",
        "url": "./movies/movie-1809.html",
        "cover": "./9.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情, 历史",
        "category": "热播剧集",
        "summary": "苏联解体前夕，一位疯狂的建筑系学生决定为全国每一个偏远的巴士站设计独一无二的建筑。",
        "tags": [
            "苏联",
            "冷门",
            "建筑",
            "荒诞"
        ]
    },
    {
        "title": "科拉山",
        "url": "./movies/movie-1810.html",
        "cover": "./10.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 冒险 / 民俗",
        "category": "环球片库",
        "summary": "一支科考队在藏地神山失踪，搜救队在山里听到了从未见过的生物叫声。",
        "tags": [
            "藏地",
            "神山",
            "科考队失踪",
            "超自然"
        ]
    },
    {
        "title": "人造妖怪",
        "url": "./movies/movie-1811.html",
        "cover": "./11.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "category": "家庭剧情",
        "summary": "一个生物科技公司将死刑犯的大脑与动物基因融合，制造出可被远程操控的“人妖兵器”。",
        "tags": [
            "基因编辑",
            "怪物",
            "医疗伦理",
            "复仇",
            "实验"
        ]
    },
    {
        "title": "我们的队伍向太阳",
        "url": "./movies/movie-1812.html",
        "cover": "./12.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "军旅 / 年代",
        "category": "悬疑犯罪",
        "summary": "2018年军改大潮中，一支功勋坦克连面临裁撤，老兵们要用最后一场朱日和演习证明“老部队”的精神不死。",
        "tags": [
            "军改背景",
            "铁血柔情",
            "装备考究"
        ]
    },
    {
        "title": "土佬大哥系情痴",
        "url": "./movies/movie-1813.html",
        "cover": "./13.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 爱情 / 犯罪",
        "category": "家庭剧情",
        "summary": "一个从纽约回来的土气乡下大哥，为了给暗恋的茶餐厅哑女治病，重拾砍刀挑战香港四大家族。",
        "tags": [
            "乡土",
            "黑帮",
            "纯爱",
            "港产片"
        ]
    },
    {
        "title": "天使爱美丽国语",
        "url": "./movies/movie-1814.html",
        "cover": "./14.jpg",
        "year": "2001",
        "yearNumber": 2001,
        "region": "法国",
        "type": "电影",
        "genre": "浪漫喜剧",
        "category": "亚洲精选",
        "summary": "一个孤独的咖啡馆女侍者决定暗中帮助身边所有人获得幸福，却忘了自己也值得被爱。",
        "tags": [
            "蒙马特",
            "孤独",
            "小确幸",
            "法语原声已配国语"
        ]
    },
    {
        "title": "废柴联盟第四季",
        "url": "./movies/movie-1815.html",
        "cover": "./15.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧， 校园",
        "category": "家庭剧情",
        "summary": "格林德尔社区大学遭遇“校长篡位”，学习小组必须通过一场铺天盖地的彩蛋大战夺回学校。",
        "tags": [
            "彩蛋",
            "恶搞",
            "无厘头"
        ]
    },
    {
        "title": "八月三十一日，我在奥斯陆",
        "url": "./movies/movie-1816.html",
        "cover": "./16.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "挪威",
        "type": "电影",
        "genre": "悬疑 / 爱情 / 都市记录片风",
        "category": "热播剧集",
        "summary": "8月31日的午夜成了全城定时器，陆瑾失踪、好友阿洛误入追踪之网，他们必须在潮汐更替前读懂邮局遗留的回执，才有机会把一桩命运安排成可选择的结局。",
        "tags": [
            "奥斯陆",
            "跨国追凶",
            "时间锚点",
            "邮差谜案",
            "雪夜列车"
        ]
    },
    {
        "title": "欲海妖僧",
        "url": "./movies/movie-1817.html",
        "cover": "./17.jpg",
        "year": "1990",
        "yearNumber": 1990,
        "region": "中国香港",
        "type": "电影",
        "genre": "情色，奇幻，古装",
        "category": "经典回看",
        "summary": "一个修持禁术的妖僧，用邪法操控达官贵人的欲海沉浮，最终却被欲望反噬。",
        "tags": [
            "风月片",
            "降头",
            "禁忌",
            "港产邪典",
            "人性贪欲"
        ]
    },
    {
        "title": "颤栗地堡",
        "url": "./movies/movie-1818.html",
        "cover": "./18.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "德国 / 美国",
        "type": "电影",
        "genre": "恐怖 / 战争 / 悬疑",
        "category": "高清电影",
        "summary": "二战末期，八名德军士兵躲进地堡，却发现里面关着一个让他们自相残杀的“东西”。",
        "tags": [
            "二战",
            "地堡",
            "超自然",
            "密室",
            "心理"
        ]
    },
    {
        "title": "中途客栈",
        "url": "./movies/movie-1819.html",
        "cover": "./19.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑, 奇幻",
        "category": "经典回看",
        "summary": "雪山脚下的破旧客栈里，每个住客都发现自己困在同一天。",
        "tags": [
            "客栈",
            "时间循环",
            "旅客",
            "秘密"
        ]
    },
    {
        "title": "美版裂口女",
        "url": "./movies/movie-1820.html",
        "cover": "./20.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "category": "经典回看",
        "summary": "美国小镇高中里，戴口罩的校医突然露出撕裂的嘴角，开始按照旧日诅咒“挑选”学生。",
        "tags": [
            "都市传说改编",
            "口罩杀人魔",
            "校园噩梦"
        ]
    },
    {
        "title": "草原上的男孩",
        "url": "./movies/movie-1821.html",
        "cover": "./21.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "蒙古",
        "type": "电影",
        "genre": "剧情, 儿童",
        "category": "动作奇幻",
        "summary": "一个从小在城市长大的男孩被送回草原，他必须在冬天来临前与一匹野马成为朋友。",
        "tags": [
            "游牧",
            "环保",
            "成长",
            "动物"
        ]
    },
    {
        "title": "缘订来生",
        "url": "./movies/movie-1822.html",
        "cover": "./22.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 奇幻, 剧情",
        "category": "悬疑犯罪",
        "summary": "婚检时女主查出脑瘤，弥留之际遇到一位能带她“观看”七世前缘的摆渡人。",
        "tags": [
            "前世今生",
            "宿命",
            "催泪",
            "遗憾"
        ]
    },
    {
        "title": "夜游人",
        "url": "./movies/movie-1823.html",
        "cover": "./23.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑, 恐怖",
        "category": "经典回看",
        "summary": "她每晚梦游时都会被监控拍到在同一面墙前微笑站立三小时。",
        "tags": [
            "梦游",
            "都市传说",
            "心理惊悚"
        ]
    },
    {
        "title": "超时空甩尾",
        "url": "./movies/movie-1824.html",
        "cover": "./24.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻， 动作， 喜剧",
        "category": "亚洲精选",
        "summary": "一名落魄赛车手意外获得能穿越时空的改装车，必须在历史缝隙中完成史上最疯狂的甩尾赛。",
        "tags": [
            "时空穿梭",
            "飙车",
            "平行宇宙",
            "幽默"
        ]
    },
    {
        "title": "风流十六岁",
        "url": "./movies/movie-1825.html",
        "cover": "./25.jpg",
        "year": "1984",
        "yearNumber": 1984,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 青春",
        "category": "高清电影",
        "summary": "十六岁少年为了让暗恋对象参加舞会，一夜之间把宅男派对变成全校狂欢。",
        "tags": [
            "80年代",
            "高中",
            "叛逆",
            "派对",
            "经典"
        ]
    },
    {
        "title": "杰西警探：乐园谋杀事件",
        "url": "./movies/movie-1826.html",
        "cover": "./26.jpg",
        "year": "2005",
        "yearNumber": 2005,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 悬疑, 犯罪",
        "category": "热播剧集",
        "summary": "私家侦探杰西·斯通受好友所托，调查一个海边乐园的命案，却发现整个小镇都在保护一个“不该存在的人”。",
        "tags": [
            "侦探",
            "小镇疑云",
            "私家侦探",
            "电视电影"
        ]
    },
    {
        "title": "花渡",
        "url": "./movies/movie-1827.html",
        "cover": "./27.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情 / 文艺 / 历史",
        "category": "爱情喜剧",
        "summary": "长江边一个叫“花渡”的百年渡口，外婆是最后一任“花婆”，母亲是第一个女船工，孙女考上北大那天，渡口被正式关闭。",
        "tags": [
            "长江渡口",
            "三代女性",
            "花船遗俗",
            "时代变迁"
        ]
    },
    {
        "title": "杂鱼们胸怀大志！",
        "url": "./movies/movie-1828.html",
        "cover": "./28.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "电影",
        "genre": "青春励志",
        "category": "亚洲精选",
        "summary": "一所濒临废校的破烂高中里，七个平均分不到20的“杂鱼”学生，决定挑战全国最强的高中拳击联赛。",
        "tags": [
            "差生",
            "拳击",
            "教师",
            "逆袭",
            "热血"
        ]
    },
    {
        "title": "摇滚夏令营2：摇滚万岁",
        "url": "./movies/movie-1829.html",
        "cover": "./29.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "音乐， 喜剧， 家庭",
        "category": "亚洲精选",
        "summary": "老牌摇滚夏令营被流行音乐夏令营吞并，两种音乐风格上演疯狂对决。",
        "tags": [
            "夏令营",
            "乐队对抗",
            "友情",
            "成长"
        ]
    },
    {
        "title": "布雷尔",
        "url": "./movies/movie-1830.html",
        "cover": "./30.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "德国",
        "type": "剧集",
        "genre": "历史, 剧情, 传记",
        "category": "爱情喜剧",
        "summary": "1882年，年轻哲学家尼采找到名医布雷尔，说自己被一种“思想病毒”折磨，而病毒名叫瓦格纳。",
        "tags": [
            "哲学",
            "尼采",
            "弗洛伊德",
            "医患关系"
        ]
    },
    {
        "title": "调音师",
        "url": "./movies/movie-1831.html",
        "cover": "./31.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "印度",
        "type": "电影",
        "genre": "犯罪, 惊悚, 黑色幽默",
        "category": "最新电视剧",
        "summary": "一个假装失明的钢琴调音师原想借谎言避开麻烦，却在一次上门服务中被卷入连环命案与更大的伪装游戏。",
        "tags": [
            "盲人伪装",
            "谋杀谜局",
            "音乐行业",
            "反转叙事",
            "道德困境"
        ]
    },
    {
        "title": "真味小厨王",
        "url": "./movies/movie-1832.html",
        "cover": "./32.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 美食",
        "category": "经典回看",
        "summary": "十岁盲童靠绝对味觉击败米其林大厨，却发现对方是生父。",
        "tags": [
            "烹饪",
            "天才",
            "童年",
            "复仇",
            "味觉"
        ]
    },
    {
        "title": "闺密妙诗吟",
        "url": "./movies/movie-1833.html",
        "cover": "./33.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "category": "悬疑犯罪",
        "summary": "三位加在一起238岁的老闺蜜，决定用一首接一首的古典诗对抗即将被改建成夜店的社区书店。",
        "tags": [
            "老年女性",
            "诗歌疗愈",
            "书店消亡"
        ]
    },
    {
        "title": "告密者：阻止恐攻的勇气",
        "url": "./movies/movie-1834.html",
        "cover": "./34.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "惊悚， 剧情， 犯罪",
        "category": "高清电影",
        "summary": "一名军情五处的翻译发现情报漏洞，为阻止伦敦恐袭，她不惜赌上职业生涯向媒体泄密。",
        "tags": [
            "真实事件改编",
            "卧底",
            "道德困境",
            "官僚"
        ]
    },
    {
        "title": "永远一家人",
        "url": "./movies/movie-1835.html",
        "cover": "./35.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 伦理",
        "category": "高清电影",
        "summary": "1997到2023年，成都一个普通五口之家中，每次有人想离开，就会有一件意想不到的“家事”把他/她拽回来。",
        "tags": [
            "超长跨度",
            "家族史",
            "亲情",
            "和解"
        ]
    },
    {
        "title": "星际迷航3",
        "url": "./movies/movie-1836.html",
        "cover": "./36.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 冒险",
        "category": "动作奇幻",
        "summary": "企业号船员在一次外太空救援中遭遇神秘虫洞，全员被困在一个不断吞噬记忆的星球。",
        "tags": [
            "太空",
            "企业号",
            "外星人",
            "团队",
            "重启"
        ]
    },
    {
        "title": "烂头何国语",
        "url": "./movies/movie-1837.html",
        "cover": "./37.jpg",
        "year": "1979",
        "yearNumber": 1979,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作喜剧",
        "category": "最新电视剧",
        "summary": "光头混混“烂头何”为了还赌债假扮大侠，却卷入了一场真实的武林秘笈争夺战。",
        "tags": [
            "邵氏",
            "功夫",
            "刘家良",
            "国语配音",
            "市井"
        ]
    },
    {
        "title": "小亡命者",
        "url": "./movies/movie-1838.html",
        "cover": "./38.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "剧情犯罪",
        "category": "高清电影",
        "summary": "一个笨拙的银行劫匪，挟持了一个聪明的小学生，没想到这个孩子才是真正的“人质”操控者。",
        "tags": [
            "公路片",
            "忘年交",
            "法式幽默",
            "成长"
        ]
    },
    {
        "title": "鬼精灵3",
        "url": "./movies/movie-1839.html",
        "cover": "./39.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "爱尔兰",
        "type": "电影",
        "genre": "恐怖喜剧",
        "category": "经典回看",
        "summary": "一个被封印在彩票机里的鬼精灵，在头奖被一名老太太刮中后，开始了最疯狂的追杀——因为老太太用了他的“幸运币”。",
        "tags": [
            "妖精",
            "诅咒",
            "黑色幽默",
            "血xing"
        ]
    },
    {
        "title": "圣诞佳丽",
        "url": "./movies/movie-1840.html",
        "cover": "./40.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 爱情 / 节日",
        "category": "环球片库",
        "summary": "社恐程序员为了保住奶奶的房子，被迫伪装成“名媛”参加小镇圣诞选美大赛。",
        "tags": [
            "圣诞电影",
            "选美比赛",
            "灰姑娘逆袭",
            "合家欢",
            "小镇温情"
        ]
    },
    {
        "title": "断·桥",
        "url": "./movies/movie-1841.html",
        "cover": "./41.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 犯罪, 悬疑",
        "category": "动作奇幻",
        "summary": "一座大桥坍塌，露出里面埋了八年的尸骨，死者的养女决定亲手找出凶手。",
        "tags": [
            "命案",
            "复仇",
            "养女",
            "桥梁坍塌"
        ]
    },
    {
        "title": "波吉亚家族第一季",
        "url": "./movies/movie-1842.html",
        "cover": "./42.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "英国 / 意大利",
        "type": "剧集",
        "genre": "历史 / 剧情 / 犯罪",
        "category": "高清电影",
        "summary": "波吉亚家族的年轻一代在教廷权力真空中，用背叛与爱情铺就通往教皇宝座的血路。",
        "tags": [
            "权谋",
            "教廷",
            "家族斗争"
        ]
    },
    {
        "title": "囧女翻身之嗨如花第二部",
        "url": "./movies/movie-1843.html",
        "cover": "./43.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧 / 爱情 / 奇幻",
        "category": "爱情喜剧",
        "summary": "上一季结尾刚当上CEO的如花，这一季一觉醒来发现自己成了公司保洁员，谁在篡改她的人生？",
        "tags": [
            "逆袭",
            "爽剧",
            "都市童话",
            "第二季"
        ]
    },
    {
        "title": "邪恶与疯狂国语版",
        "url": "./movies/movie-1844.html",
        "cover": "./44.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国 / 中国大陆",
        "type": "剧集",
        "genre": "动作 / 悬疑 / 奇幻",
        "category": "动作奇幻",
        "summary": "配过八百集韩剧的配音演员穿越进剧中，成了疯狂警察体内的第二人格，必须用播音腔操控本体对抗腐败。",
        "tags": [
            "双人格",
            "配音梗",
            "体制内",
            "黑色幽默",
            "译制腔"
        ]
    },
    {
        "title": "异闻录之灵瞳",
        "url": "./movies/movie-1845.html",
        "cover": "./45.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 奇幻 / 惊悚",
        "category": "热播剧集",
        "summary": "天生灵瞳能见鬼魂的警察，搭档不信鬼神的法医，联手侦破阴阳两界的悬案。",
        "tags": [
            "阴阳眼",
            "单元剧",
            "民俗恐怖",
            "探案"
        ]
    },
    {
        "title": "潜伏者2016",
        "url": "./movies/movie-1846.html",
        "cover": "./46.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 传记 / 犯罪",
        "category": "爱情喜剧",
        "summary": "联邦探员罗伯特伪装成富商潜入哥伦比亚贩毒集团，成功拿下全球最大洗钱银行。",
        "tags": [
            "真实事件改编",
            "卧底",
            "洗钱",
            "缉毒局"
        ]
    },
    {
        "title": "痴情儿女粤语",
        "url": "./movies/movie-1847.html",
        "cover": "./47.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情",
        "category": "动作奇幻",
        "summary": "九十年代初的香港，四个为情所困的年轻人，在一家即将歇业的冰室里，上演了四段关于等待、欺骗、背叛与救赎的故事。",
        "tags": [
            "怀旧港风",
            "多线叙事",
            "小人物悲欢",
            "粤语原声"
        ]
    },
    {
        "title": "洪熙官之魔门妖女",
        "url": "./movies/movie-1848.html",
        "cover": "./48.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "古装奇幻剧",
        "genre": "古装, 奇幻, 推理, 爱情",
        "category": "爱情喜剧",
        "summary": "按图索骥的洪熙官第一次听见妖女的诅咒时几乎崩溃，却在调查“魔门失踪”事件时发现这不是妖术，而是皇城权门最久的隐秘协议。",
        "tags": [
            "朝堂权谋",
            "逆境修行",
            "妖门谜案",
            "乾坤镜",
            "血脉谜团"
        ]
    },
    {
        "title": "猛虎英雄传",
        "url": "./movies/movie-1849.html",
        "cover": "./49.jpg",
        "year": "2009",
        "yearNumber": 2009,
        "region": "中国大陆",
        "type": "武侠动作电影",
        "genre": "武侠、动作、历史",
        "category": "家庭剧情",
        "summary": "被放逐的少年虎拳宗弟子以一张旧卷轴为线索回到乱世江湖，面对的是“谁来守门”与“谁来做恶”之间比刀更狠的选择。",
        "tags": [
            "武林盟约",
            "义气",
            "谋略",
            "边疆乱世",
            "江湖规矩"
        ]
    },
    {
        "title": "霖渊一梦",
        "url": "./movies/movie-1850.html",
        "cover": "./50.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 爱情, 奇幻",
        "category": "环球片库",
        "summary": "一幅古画让现代少女每夜坠入民国画家梦中，她必须阻止一场百年前的谋杀。",
        "tags": [
            "穿越时空",
            "水墨画风",
            "宿命之恋",
            "民国"
        ]
    },
    {
        "title": "可怜天下父母心",
        "url": "./movies/movie-1851.html",
        "cover": "./51.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭 / 剧情",
        "category": "动作奇幻",
        "summary": "一个失智母亲在养老院失踪，三个子女在寻找中撕开了二十年的家庭伤疤。",
        "tags": [
            "养老",
            "亲子关系",
            "催泪",
            "现实题材"
        ]
    },
    {
        "title": "机器人历险记",
        "url": "./movies/movie-1852.html",
        "cover": "./52.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动画、冒险",
        "category": "经典回看",
        "summary": "在报废机器人回收厂，一个故障的清洁机器人和一个缺了腿的军用机器人决定逃往传说中的“零件天堂”。",
        "tags": [
            "科幻",
            "友情",
            "合家欢"
        ]
    },
    {
        "title": "冷燕飘零",
        "url": "./movies/movie-1853.html",
        "cover": "./53.jpg",
        "year": "1969",
        "yearNumber": 1969,
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠 / 悲剧",
        "category": "高清电影",
        "summary": "灭门案中唯一的幸存者被仇家养大，成为最冷血的杀手，却爱上仇人之子。",
        "tags": [
            "邵氏",
            "复仇",
            "女杀手",
            "背叛",
            "雪"
        ]
    },
    {
        "title": "性别为本",
        "url": "./movies/movie-1854.html",
        "cover": "./54.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 传记",
        "category": "亚洲精选",
        "summary": "年轻的女律师接手一桩“男性护工被拒绝减税”的离奇案件，企图以此为契机推翻税法中的性别歧视条款。",
        "tags": [
            "女权",
            "律政",
            "平权",
            "金斯伯格",
            "法庭对抗"
        ]
    },
    {
        "title": "耍叉",
        "url": "./movies/movie-1855.html",
        "cover": "./55.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 喜剧 / 市井",
        "category": "悬疑犯罪",
        "summary": "一个靠耍叉混饭吃的街头艺人，被迫带着一群不靠谱的伙伴闯进地下擂台，最后用最土的招式，打出了最硬的江湖名声。",
        "tags": [
            "民间绝活",
            "误打误撞",
            "师徒斗嘴",
            "江湖卖艺",
            "反套路热血"
        ]
    },
    {
        "title": "情泪情花",
        "url": "./movies/movie-1856.html",
        "cover": "./56.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情文艺",
        "category": "悬疑犯罪",
        "summary": "她每天都会收到一束匿名白玫瑰，卡片上写着“第3650天”，她不知道送花人就是十年前被她遗忘的恋人。",
        "tags": [
            "梅雨",
            "花店",
            "失忆",
            "等待"
        ]
    },
    {
        "title": "无心法师",
        "url": "./movies/movie-1857.html",
        "cover": "./57.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻 / 悬疑 / 民国 / 爱情",
        "category": "经典回看",
        "summary": "一个不老不死却失去过去记忆的游走法师，在民国乱世中一边捉妖，一边追查自己究竟是谁。",
        "tags": [
            "长生体质",
            "捉妖",
            "民间怪谈",
            "民国风情",
            "失忆"
        ]
    },
    {
        "title": "丐世英豪",
        "url": "./movies/movie-1858.html",
        "cover": "./58.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 古装 / 武侠",
        "category": "悬疑犯罪",
        "summary": "丐帮内部分裂为污衣净衣两派，一个不识字的八袋长老被迫扛起帮主大旗，却发现打狗棒法是假的。",
        "tags": [
            "丐帮",
            "污衣派净衣派",
            "打狗棒法",
            "权力斗争"
        ]
    },
    {
        "title": "搅乱档摊",
        "url": "./movies/movie-1859.html",
        "cover": "./59.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 犯罪 / 动作",
        "category": "家庭剧情",
        "summary": "两个废柴摊贩为了争夺夜市黄金档口，意外卷入黑帮洗钱案，不得不假扮大佬。",
        "tags": [
            "摊贩江湖",
            "黑色幽默",
            "草根逆袭",
            "夜市风云",
            "港味十足"
        ]
    },
    {
        "title": "越洋救援",
        "url": "./movies/movie-1860.html",
        "cover": "./60.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国 / 法国",
        "type": "剧集 / 限定剧",
        "genre": "剧情 / 战争 / 动作",
        "category": "动作奇幻",
        "summary": "二战爆发前夜，一艘游轮上的乘客与船员在大西洋上展开了一场惊心动魄的自救。",
        "tags": [
            "二战",
            "海上",
            "群像"
        ]
    },
    {
        "title": "化兽妖女传奇",
        "url": "./movies/movie-1861.html",
        "cover": "./61.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装奇幻",
        "category": "最新电视剧",
        "summary": "一个能瞬间化身为各种妖兽的神秘女子，在帮助捉妖师追捕同类的过程中，发现自己猎杀的每一个“恶妖”都是她的血亲。",
        "tags": [
            "妖兽",
            "捉妖师",
            "身份错位",
            "虐恋"
        ]
    },
    {
        "title": "塔克，嘿咻嘿咻嘿咻！",
        "url": "./movies/movie-1862.html",
        "cover": "./62.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧, 奇幻, 儿童",
        "category": "动作奇幻",
        "summary": "一只会说话、酷爱干活的蓝色小怪物塔克来到了人类小镇，他用“嘿咻嘿咻”的口号感染了所有人，让整座小镇都爱上了劳动。",
        "tags": [
            "萌系",
            "劳作教育",
            "神奇生物",
            "无厘头"
        ]
    },
    {
        "title": "炎炎消防队第一季",
        "url": "./movies/movie-1863.html",
        "cover": "./63.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动漫",
        "genre": "热血, 奇幻",
        "category": "热播剧集",
        "summary": "人类会突然自燃变成“焰人”，拥有第三世代能力的少年森罗日下部加入特殊消防队，目标是解开人体自燃之谜。",
        "tags": [
            "消防",
            "超能力",
            "战斗"
        ]
    },
    {
        "title": "巨蛛怪",
        "url": "./movies/movie-1864.html",
        "cover": "./64.jpg",
        "year": "2013",
        "yearNumber": 2013,
        "region": "美国",
        "type": "电影",
        "genre": "科幻， 恐怖",
        "category": "环球片库",
        "summary": "核废料泄露导致普通蜘蛛变异成摩天大楼般巨大的怪物，整个洛杉矶成为它捕食的蛛网。",
        "tags": [
            "B级片",
            "变种生物",
            "血腥",
            "怪物"
        ]
    },
    {
        "title": "弗林",
        "url": "./movies/movie-1865.html",
        "cover": "./65.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "加拿大 / 爱尔兰",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 悬疑",
        "category": "亚洲精选",
        "summary": "黑帮老大的女儿从法学院毕业，被她爸安排进家族企业做法务，可她其实是警方卧底。",
        "tags": [
            "黑帮",
            "家族企业",
            "女儿卧底",
            "多伦多"
        ]
    },
    {
        "title": "特工佳丽",
        "url": "./movies/movie-1866.html",
        "cover": "./66.jpg",
        "year": "2000",
        "yearNumber": 2000,
        "region": "美国",
        "type": "电影",
        "genre": "动作，喜剧",
        "category": "最新电视剧",
        "summary": "一名不修边幅的FBI女探员卧底选美比赛，既要抓炸弹狂徒，还要学会踩着高跟鞋忍住不说脏话。",
        "tags": [
            "选美",
            "FBI",
            "女汉子"
        ]
    },
    {
        "title": "心田深处",
        "url": "./movies/movie-1867.html",
        "cover": "./67.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭, 治愈",
        "category": "最新电视剧",
        "summary": "东京精英女性因过劳晕倒后，被迫回到乡下老家，却在和患有失智症祖母的相处中重新学会生活。",
        "tags": [
            "田园",
            "返乡",
            "亲子关系",
            "慢节奏"
        ]
    },
    {
        "title": "戒毒风云",
        "url": "./movies/movie-1868.html",
        "cover": "./68.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪, 剧情",
        "category": "热播剧集",
        "summary": "卧底警察潜入新型毒品网络，却发现自己的亲弟弟正是幕后毒枭。",
        "tags": [
            "卧底",
            "人性",
            "社会写实"
        ]
    },
    {
        "title": "少女杀手阿墨",
        "url": "./movies/movie-1869.html",
        "cover": "./69.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "category": "爱情喜剧",
        "summary": "一名看似普通的高中女生，实则为组织清理“垃圾”的冷血杀手，直到她接到最后一个目标。",
        "tags": [
            "杀手",
            "女高中生",
            "复仇",
            "暴力美学"
        ]
    },
    {
        "title": "双面沦陷 动态漫画",
        "url": "./movies/movie-1870.html",
        "cover": "./70.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "动态漫画",
        "genre": "悬疑犯罪",
        "category": "爱情喜剧",
        "summary": "温柔乖乖女一夜之间变身冷酷复仇者，她发现自己体内住着另一个自己。",
        "tags": [
            "双重人格",
            "复仇阴谋",
            "女性觉醒"
        ]
    },
    {
        "title": "伴谍同盟",
        "url": "./movies/movie-1871.html",
        "cover": "./71.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国 / 德国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 间谍",
        "category": "高清电影",
        "summary": "一对恩爱夫妻的真实身份分别是CIA和KGB特工，两人接到同一个暗杀任务：杀死对方。",
        "tags": [
            "夫妻",
            "双重身份",
            "冷战",
            "柏林",
            "背叛"
        ]
    },
    {
        "title": "大逃脱第五季",
        "url": "./movies/movie-1872.html",
        "cover": "./72.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "综艺",
        "genre": "真人秀, 密室逃脱, 喜剧",
        "category": "环球片库",
        "summary": "史上最强密室来袭，原班人马被困在没有出口的虚拟监狱，连制作组都失联了。",
        "tags": [
            "密室",
            "逃脱",
            "综艺",
            "解谜"
        ]
    },
    {
        "title": "地下兵团",
        "url": "./movies/movie-1873.html",
        "cover": "./73.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 奇幻",
        "category": "环球片库",
        "summary": "考古队员跌入地底裂缝，发现秦始皇的“地下兵团”并非陶俑，而是一支被封印至今的活人军队。",
        "tags": [
            "兵马俑",
            "地下世界",
            "冒险",
            "古代科技"
        ]
    },
    {
        "title": "间谍佐尔格",
        "url": "./movies/movie-1874.html",
        "cover": "./74.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "日本 / 德国",
        "type": "电影",
        "genre": "历史，惊悚，传记",
        "category": "最新电视剧",
        "summary": "二战期间，苏联间谍佐尔格以德国记者身份活动于东京，他提前警告了德国进攻苏联，却被自己的信仰出卖。",
        "tags": [
            "二战",
            "间谍",
            "理想主义",
            "牺牲"
        ]
    },
    {
        "title": "妙先生之火泽睽笑人传",
        "url": "./movies/movie-1875.html",
        "cover": "./75.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国",
        "type": "电影",
        "genre": "动画, 武侠, 奇幻",
        "category": "动作奇幻",
        "summary": "一个能用笑声驱散戾气的怪人，被江湖追杀，只因为他笑一次，就会有一个恶人变好，同时自己失去一段记忆。",
        "tags": [
            "水墨粒子",
            "善恶彼岸",
            "江湖浪子",
            "庄周梦蝶"
        ]
    },
    {
        "title": "伊沃克人：为恩多而战",
        "url": "./movies/movie-1876.html",
        "cover": "./76.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻、冒险、家庭",
        "category": "家庭剧情",
        "summary": "帝国在恩多卫星秘密建造死星防护罩，几只伊沃克人小熊必须联合所有部落，用原始武器打响卫星保卫战。",
        "tags": [
            "星球大战",
            "萌系",
            "原始科技",
            "反抗军",
            "种族团结"
        ]
    },
    {
        "title": "爸爸是条龙",
        "url": "./movies/movie-1877.html",
        "cover": "./77.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "电影",
        "genre": "奇幻",
        "category": "热播剧集",
        "summary": "小女孩发现变成植物人卧床三年的爸爸，每到夜里灵魂就会变成一条小龙，在城市的灯火间游走，守护着每一个夜归人。",
        "tags": [
            "亲情",
            "治愈",
            "动画",
            "冒险",
            "神话"
        ]
    },
    {
        "title": "温柔战役",
        "url": "./movies/movie-1878.html",
        "cover": "./78.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情，战争",
        "category": "亚洲精选",
        "summary": "一战法国战场后方，一对贵族姐妹在一所破烂战地医院里，用温柔作为对抗死亡与偏见的唯一武器。",
        "tags": [
            "一战",
            "女性",
            "医院",
            "姐妹",
            "反战"
        ]
    },
    {
        "title": "釜山行2：半岛",
        "url": "./movies/movie-1879.html",
        "cover": "./79.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "韩国",
        "type": "电影",
        "genre": "动作, 惊悚, 灾难",
        "category": "亚洲精选",
        "summary": "丧尸病毒肆虐四年后的朝鲜半岛，沦为废墟的“半岛”上，活人与更可怕的“疯子”展开了生死对决。",
        "tags": [
            "丧尸",
            "末日求生",
            "飞车追逐",
            "人性"
        ]
    },
    {
        "title": "顽皮豹之怀念探长",
        "url": "./movies/movie-1880.html",
        "cover": "./80.jpg",
        "year": "1996",
        "yearNumber": 1996,
        "region": "美国",
        "type": "电影（动画）",
        "genre": "喜剧, 动画, 悬疑",
        "category": "悬疑犯罪",
        "summary": "克劳索探长退休后，顽皮豹意外继承了侦探社，它用动物的直觉破获了惊天大案。",
        "tags": [
            "粉红豹",
            "怀旧",
            "探案",
            "默剧风格"
        ]
    },
    {
        "title": "小英雄对大刺客",
        "url": "./movies/movie-1881.html",
        "cover": "./81.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "动画 / 动作 / 冒险",
        "category": "最新电视剧",
        "summary": "一个梦想当大侠的9岁村童，用“不按套路出牌”的方式，击败了令江湖闻风丧胆的冷酷刺客。",
        "tags": [
            "国风武侠",
            "少年英雄",
            "非典型反派",
            "反转",
            "成长"
        ]
    },
    {
        "title": "大爵士乐队",
        "url": "./movies/movie-1882.html",
        "cover": "./82.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "美国",
        "type": "电影",
        "genre": "剧情、音乐",
        "category": "最新电视剧",
        "summary": "1958年，一支濒临解散的大爵士乐队，迎来了一位神秘的黑人钢琴手，搅动了整个小镇。",
        "tags": [
            "爵士乐",
            "五十年代",
            "乐队",
            "怀旧",
            "梦想"
        ]
    },
    {
        "title": "巴黎合伙人",
        "url": "./movies/movie-1883.html",
        "cover": "./83.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "法国",
        "type": "电影",
        "genre": "剧情、喜剧",
        "category": "高清电影",
        "summary": "一个巴黎老裁缝和一个非洲裔程序员，联手开了一家智能定制西装店。",
        "tags": [
            "创业",
            "跨文化",
            "友谊"
        ]
    },
    {
        "title": "诡异童谣",
        "url": "./movies/movie-1884.html",
        "cover": "./84.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑 / 惊悚",
        "category": "亚洲精选",
        "summary": "一个村子里的孩子突然开始传唱一首没人教过的童谣，每唱一句，就有一个村民按照歌词里的方式离奇死去。",
        "tags": [
            "民俗恐怖",
            "童谣杀人",
            "乡村诡事"
        ]
    },
    {
        "title": "九州海上牧云记",
        "url": "./movies/movie-1885.html",
        "cover": "./85.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻，古装，动作",
        "category": "热播剧集",
        "summary": "牧云皇族与瀚州八部之战揭开序幕，三个被命运选中的少年走向截然不同的道路。",
        "tags": [
            "九州",
            "皇权",
            "秘术",
            "多线叙事",
            "史诗"
        ]
    },
    {
        "title": "欢迎来扮家家酒",
        "url": "./movies/movie-1886.html",
        "cover": "./86.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情, 家庭, 悬疑",
        "category": "爱情喜剧",
        "summary": "一个破碎的家庭，一位奇怪的治疗师，要求全家人在废弃的别墅里玩“扮家家酒”。",
        "tags": [
            "角色扮演",
            "家庭创伤",
            "心理治疗",
            "迷你剧"
        ]
    },
    {
        "title": "透视画男孩与全景画女孩",
        "url": "./movies/movie-1887.html",
        "cover": "./87.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "category": "动作奇幻",
        "summary": "患有自闭症的天才透视画少年，遇到了画全景画的失明女孩，他们通过微缩模型找到了彼此的世界。",
        "tags": [
            "青春",
            "自闭症",
            "美术",
            "治愈"
        ]
    },
    {
        "title": "冰上奇迹",
        "url": "./movies/movie-1888.html",
        "cover": "./88.jpg",
        "year": "2004",
        "yearNumber": 2004,
        "region": "美国",
        "type": "电影",
        "genre": "运动， 历史， 剧情",
        "category": "爱情喜剧",
        "summary": "1980年冬奥会，一群美国大学生冰球队奇迹般击败称霸体坛二十年的苏联国家队，改变世界。",
        "tags": [
            "冰球",
            "冬奥会",
            "真实事件",
            "励志",
            "团队精神"
        ]
    },
    {
        "title": "邪染小镇",
        "url": "./movies/movie-1889.html",
        "cover": "./89.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "西班牙 / 墨西哥",
        "type": "电影",
        "genre": "恐怖 / 邪教",
        "category": "环球片库",
        "summary": "一名流行病学家被派往与世隔绝的高原小镇，发现全镇人得了一种“一祈祷就七窍流血”的怪病。",
        "tags": [
            "隔离",
            "集体癔症",
            "拉丁美洲",
            "宗教恐怖"
        ]
    },
    {
        "title": "原子弹怪客",
        "url": "./movies/movie-1890.html",
        "cover": "./90.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "科幻，惊悚，黑色幽默",
        "category": "家庭剧情",
        "summary": "一个患有严重妄想症的退役核工程师，偷走钚核心后宣称要“亲手按下人类最后一次按钮”。",
        "tags": [
            "核恐惧",
            "反战",
            "末日孤胆"
        ]
    },
    {
        "title": "韩半岛",
        "url": "./movies/movie-1891.html",
        "cover": "./91.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 科幻 / 惊悚",
        "category": "家庭剧情",
        "summary": "统一前夕，一颗微型黑洞被引爆在板门店，整个韩半岛即将在两小时内被撕碎。",
        "tags": [
            "朝韩统一",
            "核电站",
            "恐怖袭击",
            "近未来",
            "硬核动作"
        ]
    },
    {
        "title": "狼心",
        "url": "./movies/movie-1892.html",
        "cover": "./92.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑 / 犯罪",
        "category": "悬疑犯罪",
        "summary": "刑警队长在追查连环杀人案时发现，所有受害者的心脏都被精准挖走，而凶手留下的唯一线索是狼的爪痕。",
        "tags": [
            "刑警",
            "人狼",
            "连环案",
            "基因",
            "变异"
        ]
    },
    {
        "title": "天下同心",
        "url": "./movies/movie-1893.html",
        "cover": "./93.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史, 政治",
        "category": "热播剧集",
        "summary": "1948-1949年间，中共与各民主党派排除万难召开新政协、共建新中国的波澜壮阔。",
        "tags": [
            "建国",
            "政协",
            "统战",
            "正剧"
        ]
    },
    {
        "title": "联合研究中心",
        "url": "./movies/movie-1894.html",
        "cover": "./94.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 惊悚",
        "category": "最新电视剧",
        "summary": "七位顶尖科学家被锁在研究所内，他们发现所谓的“联合研究”其实是一场末日筛选。",
        "tags": [
            "量子物理",
            "阴谋论",
            "平行宇宙",
            "封闭空间"
        ]
    },
    {
        "title": "小鸟会走路",
        "url": "./movies/movie-1895.html",
        "cover": "./95.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭, 剧情, 儿童",
        "category": "悬疑犯罪",
        "summary": "六岁女孩相信“只要教会雏鸟走路，外出打工的妈妈就会回来”，用整个夏天做了最傻也最勇敢的事。",
        "tags": [
            "留守儿童",
            "成长诗",
            "夏日"
        ]
    },
    {
        "title": "亚瑟与梅林：圣杯骑士",
        "url": "./movies/movie-1896.html",
        "cover": "./96.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "奇幻 / 动作 / 冒险",
        "category": "悬疑犯罪",
        "summary": "在亚瑟王登基之前，年轻的亚瑟和流亡的梅林组成一对不靠谱的搭档，去寻找失落的第一块圣杯碎片。",
        "tags": [
            "亚瑟王",
            "新编",
            "圣杯",
            "骑士精神",
            "黑暗时代"
        ]
    },
    {
        "title": "凡丹戈马戏团",
        "url": "./movies/movie-1897.html",
        "cover": "./97.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情 / 歌舞 / 奇幻",
        "category": "高清电影",
        "summary": "一个只会表演失败魔术的年轻人，加入了只在午夜出现的幽灵马戏团，寻找失踪的父亲。",
        "tags": [
            "马戏团",
            "魔幻现实主义",
            "追寻",
            "记忆",
            "色彩"
        ]
    },
    {
        "title": "爱上海史密斯",
        "url": "./movies/movie-1898.html",
        "cover": "./98.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "传记/悬疑",
        "category": "悬疑犯罪",
        "summary": "悬疑大师海史密斯晚年隐居，一名研究生来访，揭开她创作《天才雷普利》时的秘密情史。",
        "tags": [
            "女同",
            "文学",
            "悬疑创作"
        ]
    },
    {
        "title": "花心梦里人",
        "url": "./movies/movie-1899.html",
        "cover": "./99.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情喜剧",
        "category": "环球片库",
        "summary": "一个花心大少同时交往两个空姐，为了维持谎言，他将隔壁空房子假扮成自己“双胞胎弟弟”的家。",
        "tags": [
            "都市",
            "三角恋",
            "港风",
            "渣男",
            "浪漫轻喜"
        ]
    },
    {
        "title": "省港一号通缉犯",
        "url": "./movies/movie-1900.html",
        "cover": "./100.jpg",
        "year": "1994",
        "yearNumber": 1994,
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "category": "经典回看",
        "summary": "内地悍匪偷渡香港连环犯案，一名老差骨与一名大陆公安组成最不可能的搭档。",
        "tags": [
            "悍匪",
            "警匪",
            "枪战",
            "双雄",
            "真实改编"
        ]
    },
    {
        "title": "幻想嘉年华第一季",
        "url": "./movies/movie-1901.html",
        "cover": "./101.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "日本",
        "type": "动画",
        "genre": "搞笑日常",
        "category": "悬疑犯罪",
        "summary": "Fate系列全员被扔进一个没钱做打斗场面的综艺世界，只能靠卖萌和吐槽赚经费。",
        "tags": [
            "大乱斗",
            "官方玩梗",
            "穿越"
        ]
    },
    {
        "title": "火之丸相扑",
        "url": "./movies/movie-1902.html",
        "cover": "./102.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "日本",
        "type": "动画剧集",
        "genre": "运动 / 热血",
        "category": "家庭剧情",
        "summary": "身高只有160cm的小个子少年，怀揣成为“横纲”的梦想，加入高中相扑部，用技巧挑战巨人。",
        "tags": [
            "相扑",
            "校园",
            "逆袭",
            "格斗"
        ]
    },
    {
        "title": "龙心战纪",
        "url": "./movies/movie-1903.html",
        "cover": "./103.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "动画",
        "genre": "奇幻，冒险",
        "category": "环球片库",
        "summary": "被选中的屠龙骑士发现，自己体内流淌着龙族的血，而他要杀的最后一头龙是亲妹妹。",
        "tags": [
            "屠龙",
            "龙族视角",
            "反转叙事",
            "史诗感"
        ]
    },
    {
        "title": "天堂之门",
        "url": "./movies/movie-1904.html",
        "cover": "./104.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "波兰",
        "type": "电影",
        "genre": "奇幻剧情",
        "category": "爱情喜剧",
        "summary": "一个无恶不作的黑帮老大死后，发现自己并非下了地狱，而是来到一扇宏伟的白门前，身后是他害死的 138 条亡魂。",
        "tags": [
            "宗教寓言",
            "赎罪",
            "极简主义",
            "道德拷问"
        ]
    },
    {
        "title": "快乐再出发",
        "url": "./movies/movie-1905.html",
        "cover": "./105.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国",
        "type": "电影",
        "genre": "都市 / 喜剧 / 悬疑",
        "category": "最新电视剧",
        "summary": "陈小乐把“快乐”写进生意账本，但一次夜行巴士失联让他卷进征地风暴，原本只想赚钱的副业，最终变成全城普通人争取尊严的集体试飞。",
        "tags": [
            "失业",
            "夜行客运",
            "老友重逢",
            "社会议题",
            "反转"
        ]
    },
    {
        "title": "婚姻困境中的米勒",
        "url": "./movies/movie-1906.html",
        "cover": "./106.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "德国",
        "type": "电影",
        "genre": "剧情, 惊悚, 心理",
        "category": "最新电视剧",
        "summary": "米勒夫妇的婚姻咨询录像意外泄露，但警方发现录像里的丈夫和现实中的丈夫，DNA 不符。",
        "tags": [
            "婚姻危机",
            "冷战",
            "家庭暴力",
            "反转"
        ]
    },
    {
        "title": "找个僵尸谈恋爱",
        "url": "./movies/movie-1907.html",
        "cover": "./107.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情, 恐怖, 喜剧",
        "category": "最新电视剧",
        "summary": "实习考古学家唤醒了一具清代僵尸，对方不仅不吸血，还要求她帮忙还房贷。",
        "tags": [
            "人尸恋",
            "泰式恐怖喜剧",
            "考古学"
        ]
    },
    {
        "title": "单骑悍盗",
        "url": "./movies/movie-1908.html",
        "cover": "./108.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "中国大陆",
        "type": "电影",
        "genre": "西部、动作、犯罪",
        "category": "最新电视剧",
        "summary": "为了追回女儿的救命钱，老实的摩托车修理工独自骑行千里，单挑整个盗油团伙。",
        "tags": [
            "公路追凶",
            "摩托车",
            "国产硬汉"
        ]
    },
    {
        "title": "蚀金风暴",
        "url": "./movies/movie-1909.html",
        "cover": "./109.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 剧情 / 动作",
        "category": "经典回看",
        "summary": "一名廉政公署调查员卧底进入香港最大的黄金黑市交易集团，却发现自己的父亲是该集团的幕后金主。",
        "tags": [
            "金融犯罪",
            "黑帮",
            "卧底",
            "黄金",
            "商战"
        ]
    },
    {
        "title": "你和你的工作室",
        "url": "./movies/movie-1910.html",
        "cover": "./110.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "综艺 / 真人秀",
        "genre": "职场 / 纪实 / 观察",
        "category": "热播剧集",
        "summary": "五组年轻的设计工作室创始人被迫同吃同住，在资源有限的情况下争夺一份足以改变命运的“天价订单”。",
        "tags": [
            "设计师",
            "创业",
            "合伙人",
            "乙方人生"
        ]
    },
    {
        "title": "恋爱中的史黛拉",
        "url": "./movies/movie-1911.html",
        "cover": "./111.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 喜剧",
        "category": "高清电影",
        "summary": "45岁的离婚律师史黛拉不相信爱情，直到她接下一起离婚案，当事人却是她的初恋男友。",
        "tags": [
            "中年恋爱",
            "法式浪漫",
            "女性",
            "第二次机会",
            "幽默"
        ]
    },
    {
        "title": "凉亭虚惊",
        "url": "./movies/movie-1912.html",
        "cover": "./112.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 喜剧",
        "category": "最新电视剧",
        "summary": "四个各怀鬼胎的人被困在公园凉亭，暴雨冲出了一具尸体，而凶手就在他们中间。",
        "tags": [
            "密室",
            "黑色幽默",
            "反转"
        ]
    },
    {
        "title": "穿越时空的思念",
        "url": "./movies/movie-1913.html",
        "cover": "./113.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 科幻 / 奇幻",
        "category": "经典回看",
        "summary": "2023年的上班族意外通过一只旧信箱与1999年的高中生通信，两人试图改变一场注定发生的悲剧。",
        "tags": [
            "时间胶囊",
            "跨时空通信",
            "遗憾救赎",
            "青春纯爱",
            "平行世界"
        ]
    },
    {
        "title": "约她去看崩世光景",
        "url": "./movies/movie-1914.html",
        "cover": "./114.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 剧情 / 音乐",
        "category": "动作奇幻",
        "summary": "乐迷男孩约暗恋的女孩去看崩世光景乐队的解散告别演唱会，女孩却在当天收到白血病晚期诊断书。",
        "tags": [
            "摇滚乐团",
            "末日恋情",
            "绝症",
            "Live现场",
            "催泪"
        ]
    },
    {
        "title": "废弃的心",
        "url": "./movies/movie-1915.html",
        "cover": "./115.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 科幻",
        "category": "动作奇幻",
        "summary": "一场心脏移植手术后，女高管开始梦见捐赠者的谋杀现场。",
        "tags": [
            "器官捐献",
            "记忆移植",
            "伦理困局"
        ]
    },
    {
        "title": "我们的生活充满阳光",
        "url": "./movies/movie-1916.html",
        "cover": "./116.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情、家庭、年代",
        "category": "动作奇幻",
        "summary": "从1980年到2000年，北方一个国营纺织厂家属院里，三户人家的酸甜苦辣。",
        "tags": [
            "怀旧",
            "改革开放",
            "工人阶级",
            "温情"
        ]
    },
    {
        "title": "评论家",
        "url": "./movies/movie-1917.html",
        "cover": "./117.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "category": "爱情喜剧",
        "summary": "毒舌剧评人收到恐吓信，他的每一篇差评都精准预言了剧院里的真实死亡。",
        "tags": [
            "影评人",
            "谋杀",
            "剧院"
        ]
    },
    {
        "title": "荒野情燄",
        "url": "./movies/movie-1918.html",
        "cover": "./118.jpg",
        "year": "1991",
        "yearNumber": 1991,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "爱情, 剧情, 西部",
        "category": "悬疑犯罪",
        "summary": "1900年澳洲内陆，一名已婚白人女子与一逃亡的土著男子在荒漠中同行千里，从敌视到相爱，最终燃起反抗殖民霸权的烈焰。",
        "tags": [
            "澳洲内陆",
            "禁忌之恋",
            "殖民史",
            "女性觉醒"
        ]
    },
    {
        "title": "肖邦的青年时代",
        "url": "./movies/movie-1919.html",
        "cover": "./119.jpg",
        "year": "1952",
        "yearNumber": 1952,
        "region": "波兰",
        "type": "电影",
        "genre": "音乐传记",
        "category": "爱情喜剧",
        "summary": "年轻的肖邦离开华沙前夕，用钢琴弹出了一个即将流血、也必将重生的波兰。",
        "tags": [
            "古典浪漫",
            "流亡者",
            "波兰民族魂",
            "玛祖卡"
        ]
    },
    {
        "title": "红色正前方",
        "url": "./movies/movie-1920.html",
        "cover": "./120.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争历史",
        "category": "爱情喜剧",
        "summary": "长征前夕，一支六人组成的侦察小队必须穿越三百里敌占区，将密码本送至渡口。",
        "tags": [
            "长征",
            "先遣队",
            "兄弟情",
            "绝境"
        ]
    },
    {
        "title": "幸福里九号",
        "url": "./movies/movie-1921.html",
        "cover": "./121.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 家庭, 年代",
        "category": "动作奇幻",
        "summary": "北京一座叫“幸福里”的大杂院里，几户人家从改革开放至今，经历了四十年的悲欢离合。",
        "tags": [
            "老北京",
            "邻里情",
            "时代变迁",
            "大院故事"
        ]
    },
    {
        "title": "圣母院大火：世纪浩劫",
        "url": "./movies/movie-1922.html",
        "cover": "./122.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 纪实, 灾难",
        "category": "热播剧集",
        "summary": "2019年4月15日，巴黎圣母院穹顶之下，数百名消防员与时间赛跑，在灰烬中争夺法兰西的灵魂。",
        "tags": [
            "巴黎圣母院",
            "消防员",
            "实时叙事",
            "文物抢救",
            "信仰"
        ]
    },
    {
        "title": "肯瑙",
        "url": "./movies/movie-1923.html",
        "cover": "./123.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "category": "动作奇幻",
        "summary": "在西南边境的雨林中，一个不会说话的哑巴“肯瑙”周旋于毒贩、偷猎者和边防警之间，只为找回一块祖传的奇石。",
        "tags": [
            "边境",
            "走私",
            "人性",
            "沉默主角",
            "黑色电影"
        ]
    },
    {
        "title": "极品老妈第三季",
        "url": "./movies/movie-1924.html",
        "cover": "./124.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧 / 家庭",
        "category": "高清电影",
        "summary": "离婚后的凯伦终于搬进了新公寓，但对门住的是她那精神导师般的极品老妈。",
        "tags": [
            "单亲妈妈",
            "生活琐事",
            "互坑互爱",
            "爆笑"
        ]
    },
    {
        "title": "琼楼密约",
        "url": "./movies/movie-1925.html",
        "cover": "./125.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国",
        "type": "剧集",
        "genre": "古装",
        "category": "动作奇幻",
        "summary": "皇后死前留下一份只有盲女能读的密约，打开后发现约的是如何杀死皇帝。",
        "tags": [
            "悬疑",
            "宫斗",
            "权谋",
            "密旨"
        ]
    },
    {
        "title": "新娘百分百",
        "url": "./movies/movie-1926.html",
        "cover": "./126.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情, 剧情",
        "category": "经典回看",
        "summary": "婚礼策划师为“新娘”提供百分百满意服务，直到自己意外成了准新娘，才明白真爱无法策划。",
        "tags": [
            "婚礼",
            "乌龙",
            "治愈",
            "假戏真做",
            "温馨"
        ]
    },
    {
        "title": "大口女配大口仔",
        "url": "./movies/movie-1927.html",
        "cover": "./127.jpg",
        "year": "1992",
        "yearNumber": 1992,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "category": "热播剧集",
        "summary": "拥有血盆大口的卖鱼妹和同病相怜的龅牙仔，在互相嫌弃中产生真爱，决定一起整牙。",
        "tags": [
            "龅牙",
            "丑角恋爱",
            "港产片"
        ]
    },
    {
        "title": "迎风的青春",
        "url": "./movies/movie-1928.html",
        "cover": "./128.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 家庭",
        "category": "悬疑犯罪",
        "summary": "2008年汶川地震后，四川小镇上一群高考生的青春被彻底改写，他们必须迎风再战。",
        "tags": [
            "高考",
            "成长",
            "时代",
            "群像"
        ]
    },
    {
        "title": "公车站(韩国电影）",
        "url": "./movies/movie-1929.html",
        "cover": "./129.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 爱情 / 文艺",
        "category": "热播剧集",
        "summary": "一个失意的中年男人每晚都会去一个废弃的公车站，坐最后一班永远等不到的公交车，因为他曾在这里错过了一个人二十年。",
        "tags": [
            "暗恋",
            "时间跨年",
            "治愈",
            "公交车站"
        ]
    },
    {
        "title": "廉政行动1998粤语",
        "url": "./movies/movie-1930.html",
        "cover": "./130.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国香港",
        "type": "剧集",
        "genre": "犯罪悬疑",
        "category": "悬疑犯罪",
        "summary": "1998年亚洲金融风暴后，廉署菜鸟与黑警联手追查百亿洗黑钱案。",
        "tags": [
            "ICAC",
            "复古",
            "双雄"
        ]
    },
    {
        "title": "恶夜追杀令3",
        "url": "./movies/movie-1931.html",
        "cover": "./131.jpg",
        "year": "2028",
        "yearNumber": 2028,
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 犯罪",
        "category": "高清电影",
        "summary": "退役杀手为救女儿重出江湖，但追杀他的不是黑帮，而是全美直播观众——每杀一人，打赏翻倍。",
        "tags": [
            "硬核动作",
            "复仇终章",
            "一刀不剪"
        ]
    },
    {
        "title": "高球大满贯",
        "url": "./movies/movie-1932.html",
        "cover": "./132.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "运动, 剧情, 喜剧",
        "category": "亚洲精选",
        "summary": "一个蹲了二十年大牢的黑帮打手，出狱后唯一的技能是监狱里对着矿泉水瓶盖练出的完美挥杆。",
        "tags": [
            "高尔夫",
            "逆袭",
            "师徒",
            "冷门运动"
        ]
    },
    {
        "title": "迟到的钢琴",
        "url": "./movies/movie-1933.html",
        "cover": "./133.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 音乐 / 家庭",
        "category": "经典回看",
        "summary": "母亲去世三年后，儿子收到一架钢琴，快递单上写着“寄出日期：1987年”。",
        "tags": [
            "钢琴",
            "母子关系",
            "时空交错",
            "遗愿"
        ]
    },
    {
        "title": "狄仁杰之龙隐迷窟",
        "url": "./movies/movie-1934.html",
        "cover": "./134.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 动作, 古装",
        "category": "亚洲精选",
        "summary": "洛阳水患引出千年龙隐迷窟，狄仁杰发现失踪漕粮与宫廷秘蛊的致命关联。",
        "tags": [
            "探案",
            "水底墓穴",
            "权力斗争"
        ]
    },
    {
        "title": "顽猫斗俏鼠",
        "url": "./movies/movie-1935.html",
        "cover": "./135.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 爱情",
        "category": "高清电影",
        "summary": "动物行为学女博士与宠物电商男总裁被迫同居，把恋爱谈成了猫鼠驯化实验。",
        "tags": [
            "都市",
            "欢喜冤家",
            "动物行为学",
            "互怼"
        ]
    },
    {
        "title": "童军",
        "url": "./movies/movie-1936.html",
        "cover": "./136.jpg",
        "year": "2022",
        "yearNumber": 2022,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 冒险 / 家庭",
        "category": "悬疑犯罪",
        "summary": "三个童子军在森林里迷路，却意外发现了一伙盗猎者的惊天阴谋。",
        "tags": [
            "童子军",
            "荒诞喜剧",
            "儿童冒险",
            "环保主题"
        ]
    },
    {
        "title": "恐怖热线之大头怪婴",
        "url": "./movies/movie-1937.html",
        "cover": "./137.jpg",
        "year": "2021",
        "yearNumber": 2021,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "category": "热播剧集",
        "summary": "深夜电台接进一通神秘电话，听众开始按照电话里的指示自相残杀，而那声音来自未出世婴灵的怨念。",
        "tags": [
            "都市传说",
            "伪纪录片",
            "电台惊魂"
        ]
    },
    {
        "title": "街角魔族 二丁目",
        "url": "./movies/movie-1938.html",
        "cover": "./138.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧 / 奇幻 / 日常",
        "category": "动作奇幻",
        "summary": "魔族少女变成了魔法少女的打工同事，两人在超市收银台边拯救世界边抢特价鸡蛋。",
        "tags": [
            "魔法少女",
            "废柴魔族",
            "打工还债",
            "四格漫改"
        ]
    },
    {
        "title": "英格兰末日",
        "url": "./movies/movie-1939.html",
        "cover": "./139.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "英国",
        "type": "电影",
        "genre": "剧情， 战争",
        "category": "家庭剧情",
        "summary": "假设英国输掉了第二次世界大战，一个平行时空中“英式法西斯”统治下的荒诞日常。",
        "tags": [
            "政治寓言",
            "历史重构",
            "黑色幽默"
        ]
    },
    {
        "title": "变身舞后",
        "url": "./movies/movie-1940.html",
        "cover": "./140.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 歌舞, 奇幻",
        "category": "亚洲精选",
        "summary": "谨小慎微的女会计意外与拉丁舞女王的灵魂互换，用算盘珠子打出狂野舞步。",
        "tags": [
            "灵魂互换",
            "都市OL",
            "拉丁舞",
            "逆袭"
        ]
    },
    {
        "title": "来不及再见",
        "url": "./movies/movie-1941.html",
        "cover": "./141.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "家庭剧情",
        "summary": "叛逆少女得知母亲只剩一个月生命，她决定伪装成乖女儿，却在扮演中发现自己从未了解过母亲。",
        "tags": [
            "绝症",
            "和解",
            "催泪弹"
        ]
    },
    {
        "title": "坏老板",
        "url": "./movies/movie-1942.html",
        "cover": "./142.jpg",
        "year": "2020",
        "yearNumber": 2020,
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 惊悚",
        "category": "悬疑犯罪",
        "summary": "完美主义老板每天对员工进行精神折磨，直到他招到了一个患有严重心理疾病的退伍兵。",
        "tags": [
            "职场",
            "黑色幽默",
            "PUA",
            "反杀"
        ]
    },
    {
        "title": "不能说的夏天",
        "url": "./movies/movie-1943.html",
        "cover": "./143.jpg",
        "year": "2014",
        "yearNumber": 2014,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，悬疑",
        "category": "环球片库",
        "summary": "沉默的高中少女在一次远足后性情大变，她肚子里那个“不能说的夏天”的秘密，即将撕裂整个小镇的平静。",
        "tags": [
            "校园",
            "霸凌",
            "秘密",
            "少女",
            "治愈"
        ]
    },
    {
        "title": "一路向南2024",
        "url": "./movies/movie-1944.html",
        "cover": "./144.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国 / 加拿大",
        "type": "剧集 / 公路",
        "genre": "剧情 / 冒险 / 悬疑",
        "category": "亚洲精选",
        "summary": "丧尸病毒爆发后，一个父亲带着女儿从阿拉斯加一路向南逃亡，目的地是墨西哥。",
        "tags": [
            "公路剧",
            "末日",
            "生存",
            "人性"
        ]
    },
    {
        "title": "哥本哈根爱的故事",
        "url": "./movies/movie-1945.html",
        "cover": "./145.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "丹麦",
        "type": "电影",
        "genre": "爱情文艺",
        "category": "经典回看",
        "summary": "一个中国交换生在哥本哈根漫长冬夜里，与一个丹麦老人在咖啡馆进行了一场关于爱的七日对谈。",
        "tags": [
            "北欧",
            "极简",
            "长镜头",
            "孤独",
            "诗意"
        ]
    },
    {
        "title": "我心里的太阳",
        "url": "./movies/movie-1946.html",
        "cover": "./146.jpg",
        "year": "2019",
        "yearNumber": 2019,
        "region": "中国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "category": "动作奇幻",
        "summary": "一个被确诊为抑郁症的少年，在照顾患有阿尔茨海默症的奶奶时，找到了彼此救赎的微光。",
        "tags": [
            "抑郁症",
            "亲情治愈",
            "小镇叙事"
        ]
    },
    {
        "title": "拖线和鬼火",
        "url": "./movies/movie-1947.html",
        "cover": "./147.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 冒险",
        "category": "亚洲精选",
        "summary": "拖车拖线误入废弃加油站，遇到一群只能在车灯下现形的鬼火赛车。",
        "tags": [
            "赛车总动员衍生",
            "公路片",
            "灵异喜剧",
            "皮克斯"
        ]
    },
    {
        "title": "爱国哭泣",
        "url": "./movies/movie-1948.html",
        "cover": "./148.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 战争 / 历史",
        "category": "亚洲精选",
        "summary": "一个替前线录音的文工团女孩，在不断听见同胞哭声的过程中，终于明白“爱国”不是口号，而是活下去的代价。",
        "tags": [
            "战地宣传",
            "家书往返",
            "牺牲与记忆",
            "小人物史诗",
            "时代洪流"
        ]
    },
    {
        "title": "情海滚滚",
        "url": "./movies/movie-1949.html",
        "cover": "./149.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "category": "悬疑犯罪",
        "summary": "上世纪八十年代，一对私奔的恋人在海上遭遇风暴，醒来后却发现彼此间隔了二十年的时间差。",
        "tags": [
            "年代爱情",
            "家庭伦理",
            "虐恋"
        ]
    },
    {
        "title": "末路奇花",
        "url": "./movies/movie-1950.html",
        "cover": "./150.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "美国",
        "type": "电影",
        "genre": "悬疑, 惊悚, 犯罪",
        "category": "热播剧集",
        "summary": "三个互不相识的女人在荒野厕所偶遇，发现各自的丈夫是同一连环杀人案的嫌疑人，她们决定先下手为强。",
        "tags": [
            "女性",
            "公路片",
            "荒野求生"
        ]
    },
    {
        "title": "女人并非天使",
        "url": "./movies/movie-1951.html",
        "cover": "./1.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "法国",
        "type": "电影",
        "genre": "剧情喜剧",
        "category": "高清电影",
        "summary": "三位不同年龄的女士，在发现丈夫共享一个情妇后，联手策划了一场优雅又致命的报复。",
        "tags": [
            "女性友谊",
            "离婚",
            "复仇",
            "法式幽默"
        ]
    },
    {
        "title": "长腿女孩们",
        "url": "./movies/movie-1952.html",
        "cover": "./2.jpg",
        "year": "2027",
        "yearNumber": 2027,
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 青春 / 运动",
        "category": "经典回看",
        "summary": "一所二流高中的女子排球队全是高个子“怪胎”，她们要打败的不仅是冠军，更是全校的嘲笑。",
        "tags": [
            "女子排球队",
            "身体羞辱",
            "友谊与竞争",
            "高中生活",
            "励志成长"
        ]
    },
    {
        "title": "刽子手",
        "url": "./movies/movie-1953.html",
        "cover": "./3.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装 / 悬疑 / 惊悚",
        "category": "高清电影",
        "summary": "清朝最后一位刽子手意外发现自己每次行刑的对象，都与他十年前遗失的记忆碎片一一对应。",
        "tags": [
            "清朝末年",
            "职业秘辛",
            "因果报应",
            "衙门风云"
        ]
    },
    {
        "title": "短暂的团聚",
        "url": "./movies/movie-1954.html",
        "cover": "./4.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 家庭",
        "category": "亚洲精选",
        "summary": "一个被判死刑的父亲获得 48 小时假释，只为与患有自闭症的女儿完成最后的告别。",
        "tags": [
            "亲情",
            "治愈",
            "催泪",
            "离别",
            "现实主义"
        ]
    },
    {
        "title": "史前大章鱼2",
        "url": "./movies/movie-1955.html",
        "cover": "./5.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "美国",
        "type": "电影",
        "genre": "动作， 怪兽",
        "category": "经典回看",
        "summary": "变异史前章鱼再次苏醒，这次它直接爬上迪拜塔，和武装直升机跳起了“触手舞”。",
        "tags": [
            "B级片",
            "巨型生物",
            "无脑爽片"
        ]
    },
    {
        "title": "叔叔的天堂",
        "url": "./movies/movie-1956.html",
        "cover": "./6.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情，家庭，奇幻",
        "category": "悬疑犯罪",
        "summary": "废青侄子意外看见去世叔叔的鬼魂，叔叔要他帮忙完成遗愿清单才能继承茶餐厅。",
        "tags": [
            "亲情",
            "生死",
            "和解",
            "市井"
        ]
    },
    {
        "title": "僵尸小子",
        "url": "./movies/movie-1957.html",
        "cover": "./7.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 恐怖",
        "category": "家庭剧情",
        "summary": "九岁男孩意外复活了一具清朝僵尸，并把它当成了自己的秘密玩伴。",
        "tags": [
            "僵尸",
            "儿童",
            "搞笑",
            "奇幻"
        ]
    },
    {
        "title": "国王排名",
        "url": "./movies/movie-1958.html",
        "cover": "./8.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "剧集",
        "genre": "动画 / 奇幻 / 冒险 / 励志",
        "category": "经典回看",
        "summary": "又聋又哑的王子波吉在继位大典上被所有臣民嘲笑，他唯一的盟友是影子刺客卡克。",
        "tags": [
            "王子",
            "弱势群体",
            "成长",
            "泪目"
        ]
    },
    {
        "title": "灰色的乐园 特典",
        "url": "./movies/movie-1959.html",
        "cover": "./9.jpg",
        "year": "2015",
        "yearNumber": 2015,
        "region": "日本",
        "type": "动画剧集",
        "genre": "剧情， 悬疑",
        "category": "家庭剧情",
        "summary": "在无人知晓的乐园深处，少女们隐藏的秘密与未说出口的告别交织成最后的礼物。",
        "tags": [
            "特典",
            "番外",
            "校园",
            "治愈"
        ]
    },
    {
        "title": "电影之爱：美国电影批评史",
        "url": "./movies/movie-1960.html",
        "cover": "./10.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录、历史",
        "category": "亚洲精选",
        "summary": "从报纸边角料到互联网时代，一部“骂电影的人”如何反过来被电影改变的百年史。",
        "tags": [
            "影评人",
            "好莱坞",
            "电影理论",
            "迷影"
        ]
    },
    {
        "title": "回忆",
        "url": "./movies/movie-1961.html",
        "cover": "./11.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "category": "悬疑犯罪",
        "summary": "一位阿尔茨海默症老人每天卖掉一段记忆换钱买药，直到他发现自己已经不认识来探望的女儿。",
        "tags": [
            "记忆交易",
            "老年",
            "情感",
            "阿根廷魔幻现实主义"
        ]
    },
    {
        "title": "帝鳄属",
        "url": "./movies/movie-1962.html",
        "cover": "./12.jpg",
        "year": "2026",
        "yearNumber": 2026,
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 惊悚, 冒险",
        "category": "爱情喜剧",
        "summary": "基因公司复活了白垩纪的超级鳄鱼“帝鳄”，一场丛林逃亡就此展开。",
        "tags": [
            "古生物",
            "克隆",
            "巨兽",
            "丛林"
        ]
    },
    {
        "title": "重返高校之风云再起",
        "url": "./movies/movie-1963.html",
        "cover": "./13.jpg",
        "year": "2018",
        "yearNumber": 2018,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 青春, 奇幻",
        "category": "经典回看",
        "summary": "35岁的卧底警察为破案扮成高中生，却发现自己的女儿也在同一所学校，还是校园黑帮的大姐头。",
        "tags": [
            "穿越",
            "卧底",
            "代沟",
            "搞笑",
            "怀旧"
        ]
    },
    {
        "title": "绝望",
        "url": "./movies/movie-1964.html",
        "cover": "./14.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "category": "亚洲精选",
        "summary": "六个人被困在一辆抛锚的大巴里，沙漠中气温升至50度，而救援永远不会来。",
        "tags": [
            "生存恐怖",
            "密闭空间",
            "心理崩溃"
        ]
    },
    {
        "title": "流沙2016",
        "url": "./movies/movie-1965.html",
        "cover": "./15.jpg",
        "year": "2016",
        "yearNumber": 2016,
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "category": "热播剧集",
        "summary": "弟弟在沙漠中发现哥哥的尸骨，却在DNA报告上看到了自己的名字。",
        "tags": [
            "沙漠",
            "双胞胎",
            "身份互换",
            "复仇",
            "局中局"
        ]
    },
    {
        "title": "丛林圣诞节",
        "url": "./movies/movie-1966.html",
        "cover": "./16.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "澳大利亚",
        "type": "电影",
        "genre": "冒险 / 喜剧 / 家庭",
        "category": "环球片库",
        "summary": "一个都市精英家庭在飞往夏威夷过圣诞时坠机亚马逊，必须在原始部落和毒蛇猛兽中过一个“硬核”圣诞。",
        "tags": [
            "圣诞",
            "荒岛",
            "求生",
            "动物",
            "反套路"
        ]
    },
    {
        "title": "良种动物",
        "url": "./movies/movie-1967.html",
        "cover": "./17.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 悬疑, 心理",
        "category": "亚洲精选",
        "summary": "两名贵族少女为了摆脱无聊的上流生活，策划了一场交换谋杀，却发现对方的目标都是自己。",
        "tags": [
            "贵族",
            "暗黑",
            "人性",
            "阶级",
            "教唆"
        ]
    },
    {
        "title": "遗嘱囧事",
        "url": "./movies/movie-1968.html",
        "cover": "./18.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧、家庭",
        "category": "爱情喜剧",
        "summary": "富豪遗嘱要求：三个子女必须带着骨灰盒坐绿皮火车去拉萨，否则一分钱拿不到。",
        "tags": [
            "遗产",
            "奇葩遗嘱",
            "公路",
            "荒诞",
            "和解"
        ]
    },
    {
        "title": "杀戮江湖粤语",
        "url": "./movies/movie-1969.html",
        "cover": "./19.jpg",
        "year": "1997",
        "yearNumber": 1997,
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装武侠",
        "category": "热播剧集",
        "summary": "失忆的刀客被渔村姑娘所救，当他的记忆随血味复苏，整个江湖都将为之颤抖。",
        "tags": [
            "复仇",
            "帮派",
            "血腥",
            "粤语原声"
        ]
    },
    {
        "title": "天之骄女",
        "url": "./movies/movie-1970.html",
        "cover": "./20.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情，家庭，复仇",
        "category": "悬疑犯罪",
        "summary": "豪门私生女被毁容后，以另一个身份嫁入仇人家族，开始了长达二十年的温柔复仇。",
        "tags": [
            "乡土剧",
            "换脸",
            "豪门恩怨",
            "励志"
        ]
    },
    {
        "title": "走到底",
        "url": "./movies/movie-1971.html",
        "cover": "./21.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪, 剧情, 公路",
        "category": "悬疑犯罪",
        "summary": "一笔天降横财让三名陌路人结成临时同盟，却在荒芜戈壁上走向信任与人性的双重绝路。",
        "tags": [
            "黑色幽默",
            "末路狂奔",
            "命运纠葛"
        ]
    },
    {
        "title": "婚礼2017",
        "url": "./movies/movie-1972.html",
        "cover": "./22.jpg",
        "year": "2017",
        "yearNumber": 2017,
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 喜剧",
        "category": "亚洲精选",
        "summary": "一场农村婚礼上，新郎父亲偷偷把彩礼钱拿去修了祠堂，而新娘那边来了二十三个前男友。",
        "tags": [
            "中式婚礼",
            "代际冲突",
            "社会群像",
            "黑色幽默"
        ]
    },
    {
        "title": "不发光的太阳",
        "url": "./movies/movie-1973.html",
        "cover": "./23.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "英国",
        "type": "电影",
        "genre": "剧情，科幻，爱情",
        "category": "动作奇幻",
        "summary": "在太阳即将熄灭的末日，一名女宇航员被送往太空执行“点火”任务，却发现自己是被全人类遗忘的祭品。",
        "tags": [
            "太空",
            "悲剧",
            "牺牲",
            "孤独",
            "末世"
        ]
    },
    {
        "title": "孤寂午后",
        "url": "./movies/movie-1974.html",
        "cover": "./24.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "法国",
        "type": "电影",
        "genre": "剧情，文艺，女性",
        "category": "热播剧集",
        "summary": "独居老妇每天下午都假装与已故丈夫打电话，直到某天电话那头传来陌生声音。",
        "tags": [
            "孤老",
            "回忆",
            "阳光",
            "缓慢"
        ]
    },
    {
        "title": "纯洁的星期六",
        "url": "./movies/movie-1975.html",
        "cover": "./25.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭 / 青春",
        "category": "悬疑犯罪",
        "summary": "每个星期六，她都要在教堂里忏悔；但这个星期六，她决定让所有人先忏悔。",
        "tags": [
            "宗教家庭",
            "少女觉醒",
            "压抑与反抗",
            "真实事件改编"
        ]
    },
    {
        "title": "超班宝宝",
        "url": "./movies/movie-1976.html",
        "cover": "./26.jpg",
        "year": "2006",
        "yearNumber": 2006,
        "region": "中国香港",
        "type": "电影",
        "genre": "家庭, 喜剧, 科幻",
        "category": "爱情喜剧",
        "summary": "一对想要孩子的科学家夫妻，自己动手组装了一个超级机器人婴儿。",
        "tags": [
            "婴儿",
            "超级英雄",
            "搞笑",
            "合家欢"
        ]
    },
    {
        "title": "失控的照护",
        "url": "./movies/movie-1977.html",
        "cover": "./27.jpg",
        "year": "2024",
        "yearNumber": 2024,
        "region": "日本",
        "type": "电影",
        "genre": "悬疑，剧情，犯罪",
        "category": "动作奇幻",
        "summary": "一位顶级护理师服务的老人接连安详离世，新人护工发现了隐藏在温柔笑容下的恐怖真相。",
        "tags": [
            "养老",
            "反转",
            "复仇",
            "社会派"
        ]
    },
    {
        "title": "戴手套的小杀手",
        "url": "./movies/movie-1978.html",
        "cover": "./28.jpg",
        "year": "1972",
        "yearNumber": 1972,
        "region": "法国",
        "type": "电影",
        "genre": "犯罪， 悬疑， 惊悚",
        "category": "高清电影",
        "summary": "连环杀手每次作案都戴着一双崭新的白色手套，而负责追捕他的警探发现手套牌子是自己裁缝店常用的。",
        "tags": [
            "白手套",
            "连环杀手",
            "巴黎",
            "心理战",
            "猫鼠游戏"
        ]
    },
    {
        "title": "榕树头讲鬼粤语",
        "url": "./movies/movie-1979.html",
        "cover": "./29.jpg",
        "year": "2025",
        "yearNumber": 2025,
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖，悬疑",
        "category": "热播剧集",
        "summary": "深夜榕树头下的说书人每讲一个鬼故事，听故事的人就会离奇死于故事中的手法。",
        "tags": [
            "都市传说",
            "港式恐怖",
            "民俗怪谈",
            "多线叙事"
        ]
    },
    {
        "title": "枝头凤",
        "url": "./movies/movie-1980.html",
        "cover": "./30.jpg",
        "year": "2023",
        "yearNumber": 2023,
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装爱情",
        "category": "经典回看",
        "summary": "前世被嫡姐害死的庶女重生归来，誓要夺回一切，却意外成了未来帝王的掌中宝。",
        "tags": [
            "重生",
            "逆袭",
            "宅斗",
            "甜宠",
            "大女主"
        ]
    }
];

function qs(selector, root) {
    return (root || document).querySelector(selector);
}

function qsa(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
}

function initMenu() {
    const toggle = qs('[data-menu-toggle]');
    const nav = qs('[data-mobile-nav]');
    if (!toggle || !nav) {
        return;
    }
    toggle.addEventListener('click', function () {
        nav.classList.toggle('is-open');
        document.body.classList.toggle('is-menu-open', nav.classList.contains('is-open'));
    });
}

function initHero() {
    const slides = qsa('[data-hero-slide]');
    const dots = qsa('[data-hero-dot]');
    if (!slides.length || !dots.length) {
        return;
    }
    let index = 0;
    let timer = null;
    function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
            slide.classList.toggle('is-active', i === index);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === index);
        });
    }
    function start() {
        timer = window.setInterval(function () {
            show(index + 1);
        }, 5200);
    }
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            if (timer) {
                window.clearInterval(timer);
            }
            show(i);
            start();
        });
    });
    show(0);
    start();
}

function initSearchPage() {
    const form = qs('[data-search-form]');
    const result = qs('[data-search-result]');
    if (!form || !result) {
        return;
    }
    const keywordInput = qs('[name="keyword"]', form);
    const regionSelect = qs('[name="region"]', form);
    const typeSelect = qs('[name="type"]', form);
    const params = new URLSearchParams(window.location.search);
    const incoming = params.get('q') || '';
    if (incoming) {
        keywordInput.value = incoming;
    }
    function card(item) {
        const tags = item.tags.slice(0, 3).map(function (tag) {
            return '<span>' + escapeHtml(tag) + '</span>';
        }).join('');
        return `
                <article class="movie-card">
                    <a class="poster-link" href="${item.url}" aria-label="${escapeHtml(item.title)}">
                        <img src="${item.cover}" alt="${escapeHtml(item.title)}" loading="lazy">
                        <span class="poster-badge">${escapeHtml(item.year)} </span>
                        <span class="poster-play">▶</span>
                    </a>
                    <div class="movie-card-body">
                        <a class="movie-title" href="${item.url}">${escapeHtml(item.title)}</a>
                        <p>${escapeHtml(item.summary)}</p>
                        <div class="movie-meta">
                            <span>${escapeHtml(item.region)}</span>
                            <span>${escapeHtml(item.type)}</span>
                        </div>
                        <div class="tag-row">${tags}</div>
                        <span class="category-pill">${escapeHtml(item.category)}</span>
                    </div>
                </article>`;
    }
    function render() {
        const keyword = keywordInput.value.trim().toLowerCase();
        const region = regionSelect.value;
        const type = typeSelect.value;
        const filtered = MOVIE_SEARCH_DATA.filter(function (item) {
            const text = [item.title, item.region, item.type, item.genre, item.category, item.summary, item.tags.join(' ')].join(' ').toLowerCase();
            const okKeyword = !keyword || text.indexOf(keyword) !== -1;
            const okRegion = !region || item.region.indexOf(region) !== -1;
            const okType = !type || item.type.indexOf(type) !== -1;
            return okKeyword && okRegion && okType;
        }).sort(function (a, b) {
            return b.yearNumber - a.yearNumber;
        }).slice(0, 80);
        if (!filtered.length) {
            result.innerHTML = '<div class="empty-result">没有找到匹配内容，可以调整关键词或筛选条件。</div>';
            return;
        }
        result.innerHTML = '<div class="movie-grid">' + filtered.map(card).join('') + '</div>';
    }
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        render();
    });
    form.addEventListener('input', render);
    form.addEventListener('change', render);
    render();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function initMoviePlayer(videoId, buttonId, maskId, sourceUrl) {
    const video = document.getElementById(videoId);
    const button = document.getElementById(buttonId);
    const mask = document.getElementById(maskId);
    if (!video || !button || !mask || !sourceUrl) {
        return;
    }
    let loaded = false;
    function load() {
        if (loaded) {
            return;
        }
        loaded = true;
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = sourceUrl;
        } else if (window.Hls && Hls.isSupported()) {
            const hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            hls.loadSource(sourceUrl);
            hls.attachMedia(video);
        } else {
            video.src = sourceUrl;
        }
    }
    function start() {
        load();
        mask.classList.add('is-hidden');
        video.setAttribute('controls', 'controls');
        const playTask = video.play();
        if (playTask && typeof playTask.catch === 'function') {
            playTask.catch(function () {});
        }
    }
    button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        start();
    });
    mask.addEventListener('click', start);
    video.addEventListener('click', function () {
        if (video.paused) {
            start();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initHero();
    initSearchPage();
});
