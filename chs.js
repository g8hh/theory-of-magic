/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Adept': '熟练',
    'advise notables': '通知著名人士',
    'abstraction': '抽象',
    'Clean Stables': '清理马厩',
    'Clear': '清理',
    'close': '关闭',
    'combat': '战斗',
    'Craft Gem': '工艺宝石',
    'craft rune': '工艺符文',
    'dark mode': '黑暗模式',
    'Deep Pockets': '深口袋',
    'Sell Gem': '出售宝石',
    'Sell Herbs': '出售草药',
    'Sell Scroll': '出售卷轴',
    'Tomes': '著作',
    'rest': '休息',
    'reset': '重置',
    'resting': '休息中',
    'pouch': '装入袋中',
    'player': '玩家',
    'save': '保存',
    'load': '加载',
    'LOADING DATA...': '加载数据...',
    'main': '主界面',
    'max gold': '黄金上限',
    'manas': '法力',
    'get save': '下载存档',
    'event': '事件',
    '[Drop Save]': '[重置游戏]',
    'souls': '灵魂',
    'Stop All': '全部停止',
    'study': '学习',
    'stamina': '耐力',
    'gems': '宝石',
    'unlock': '解锁',
    'gold': '黄金',
    'loot': '掠夺',
    'working from home.': '在家工作。',
    'water gem': '水宝石',
    'wizard': '巫师',
    'wood pipe': '木管',
    'A tattered scroll': '一个破烂的卷轴',
    'Action Unlocked: Buy scroll': '动作已解锁：购买卷轴',
    'air gem': '空气宝石',
    'air runes': '空气符文',
    'airaffinity': '空气亲和力',
    'alchemist': '炼金术士',
    'alembic': '蒸馏器',
    'alkahest': '剧情',
    'almagest': '天文学大成',
    'fire gem': '火之宝石',
    'fire sign': '火象星座',
    'grind bones': '研磨骨头',
    'grind': '研磨',
    'name': '名字',
    'title': '头衔',
    'level': '等级',
    'life': '生命值',
    'light gem': '光之宝石',
    'mage': '法师',
    'exp': '经验值',
    'skill points': '技能点',
    'luck': '幸运值',
    'defense': '防御',
    'dodge': '闪避',
    'damage bonus': '伤害加成',
    'hit bonus': '命中加成',
    'speed': '速度',
    'weapon': '武器',
    'fists': '拳头',
    'resists': '抵抗',
    'distance': '距离',
    'mount': '镶嵌',
    'None': '无',
    'purse': '钱包',
    'prism': '棱镜',
    'Buy scroll': '购买卷轴',
    'Action Unlocked: study': '动作解锁：学习',
    'Purchase Gem': '购买宝石',
    'Read Palms': '看手相',
    'research': '研究',
    'Resource Unlocked: research': '资源解锁:研究',
    'Resource Unlocked: scrolls': '资源解锁:卷轴',
    'rune stones': '符文石',
    'Scribe Scroll': '抄写卷轴',
    'Class Unlocked: apprentice': '解锁课程：学徒',
    'You buy a strange scroll from a travelling peddlar. If you could only decipher the cryptic symbols.': '你从一个流动小贩那里买了一幅奇怪的画卷。但愿你能破译这些神秘的符号。',
    'Choose': '选择',
    'class': '课程',
    'hp': '生命',
    'scrolls': '卷轴',
    'sell': '出售',
    'shadow gem': '暗影宝石',
    'Stop': '停止',
    'studying scrolls': '学习卷轴',
    'immunities': '抵抗力',
    'pouch (': '小袋（',
    'upgrades': '升级',
    'travel': '旅行',
    'travel map': '旅行地图',
    'travel pack': '旅行包',
    'travel tent': '旅行帐篷',
    'Treat Ailments': '治疗疾病',
    'velvet bag': '绒布袋',
    'effects': '效果',
    'End Apprenticeship': '结束学徒制',
    'Energy Transfusion': '能量输入',
    'expanded cellars': '扩大酒窖',
    'Apprenticeship': '学徒制',
    'expedient retreat': '权宜之计撤退',
    'animal companion': '动物伴侣',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '\n		Roll-over Item and hold {Shift} + {Number} to assign quickslot.': '滚动物品并按住{Shift} + {数字}可以分配快速插槽。',
    '\n		Press {Number} again to use quickslot Item.\n	': '再次按{数字}以使用快速插槽物品。',
    '\n		rest': '休息',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);