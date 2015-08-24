/**
 * Created by wangxufeng on 2015/8/24.
 */
module.exports = {
    initData:
    {
        "title":"用户流失分析报告",
        "intro":"新产品的产品品质主要是由流失率、用户生命周期、单个用户消费贡献决定的。而产品的流失率的高低决定了用户的生命周期、是否会得到推广的机会、推广力度大小等等，所以新产品在测试时产品的用户流失率是产品最为关心的指标。",
        "preface":"序言",
        "preface_list":[{
            "title":"1、背景及报告内容简介",
            "content":"    新产品的产品品质主要是由流失率、用户生命周期、单个用户消费贡献决定的。而产品的流失率的高低决定了用户的生命周期、是否会得到推广的机会、推广力度大小等等，所以新产品在测试时产品的用户流失率是产品最为关心的指标。\n    新用户流失模型主要解决以下几个问题：用户流失率是多少，与行业标准相比处于什么位置；用户在哪里流失的，可能的流失原因是什么。\n    新用户流失模型的主要内容有：用户转化率、用户的留存/流失率、用户的等级流失率、各任务关卡的用户滞留数量。用户转化率主要展示从启动到进入游戏各环节的转化情况；用户留存/流失率主要是量化用户的整体流失率以及与行业标准相比，本游戏处于的位置；用户的等级流失率主要是展示哪些等级卡掉的用户较多，需要修复调整降低流失率；任务关卡主要是哪些任务关卡卡掉的用户较多，需要修复调整降低流失率。"
        }, {
            "title":"2、用户选取和基本概念定义",
            "content":"    次日流失率：首次登陆游戏且次日未登陆游戏的用户数/首次登陆游戏的用户总数(首次登陆的用户为样本，样本在首登后第二日未登陆游戏视为流失)\n    周流失率：首次登陆游戏且首次登陆后第5-7日未登陆游戏的用户数/首次登陆游戏的用户总数(首次登陆的用户为样本，样本在首登后第5-7日未登陆游戏视为流失)\n    半月流失率：首次登陆游戏且首次登陆后第11-15日未登陆游戏的用户数/首次登陆游戏的用户总数(首次登陆的用户为样本，样本在首登后第11-15日未登陆游戏视为流失)\n    月流失率：首次登陆游戏且首次登陆后第24-30日未登陆游戏的用户数/首次登陆游戏的用户总数(首次登陆的用户为样本，样本在首登后第24-30日未登陆游戏视为流失)\n    S级产品次日流失率：0-10%\n    A级产品次日流失率：10-20%\n    B级产品次日流失率：20-30%\n\n    ……"
        }],
        "result":"结论与建议",
        "result_list":[{
            "title":"1、结论"
        }, {
            "title":"2、建议"
        }],
        "menu":"目录",
        "menu_list": ["1、用户转化率", "2、流失率", "3、等级流失率", "4、任务关卡", "5、附录"],
        "content":"内容",

        "menu_1": {
            "subMenu": [{
                "title":"1.1、",
                "table": {
                    "header": ["时间","启动","加载成功","登录成功","建角成功","进入游戏"],
                    "data": ["date", "startup", "load", "login", "char", "scene"]
                }
            }, {
                "title":"1.2、",
                "p1_1":"转化率最高的5个平台：",
                "p1_2":"转化率最低的5个平台",
                "p2_1":"转化率最高的5个机型：",
                "p2_2":"转化率最低的5个机型：",
                "table": [{
                    "header": ["平台","总用户数","启动","加载成功","登录成功","建角成功","进入游戏"],
                    "data": ["platform", "totalUsers", "startup", "load", "login", "char", "scene"]
                }, {
                    "header": ["机型","总用户数","启动","加载成功","登录成功","建角成功","进入游戏"],
                    "data": ["model", "totalUsers", "startup", "load", "login", "char", "scene"]
                }]
            }]
        },
        "menu_2": {
            "subMenu": [{
                "title":"2.1、",
                "table": {
                    "header": ["流失率类型", "计算样本", "流失率水平", "S级游戏标准", "A级游戏标准", "B级游戏标准", "C级游戏标准"],
                    "data": ["type", "date", "lost", "s", "a", "b", "c"]
                }
            }, {
                "title":"2.2、",
                "table": {
                    "header": ["时间", "样本账号数", "2日留存", "3日留存", "4日留存", "5日留存", "6日留存", "7日留存", "14日留存", "21日留存", "30日留存"],
                    "data": ["date", "accounts", "d2", "d3", "d4", "d5", "d6", "d7", "d14", "d21", "d30"]
                }
            }]
        },
        "menu_3": {
            "subMenu": [{
                "title":"3.1、",
                "table": {
                    "header": ["等级", "账号数", "流失账号数", "流失率"],
                    "data": ["lv", "accounts", "lost", "lostrate"]
                }
            }, {
                "title":"3.2、",
                "table": {
                    "header": ["等级", "账号数", "流失账号数", "流失率"],
                    "data": ["lv", "accounts", "lost", "lostrate"]
                }
            }, {
                "title":"3.3、",
                "table": {
                    "header": ["等级", "账号数", "流失账号数", "流失率"],
                    "data": ["lv", "accounts", "lost", "lostrate"]
                }
            }, {
                "title":"3.4、",
                "table": {
                    "header": ["等级", "账号数", "流失账号数", "流失率"],
                    "data": ["lv", "accounts", "lost", "lostrate"]
                }
            }]
        },
        "menu_4": {
            "subMenu": [{
                "title":"4.1、",
                "table": {
                    "header": ["等级", "任务ID", "任务名称", "接取数", "滞留数"],
                    "data": ["lv", "taskid", "taskname", "lost_take", "lost_suspend"]
                }
            }]
        },

        "appendix":"附录"
    },
    data:
    {
        "gamename": "国民足球",
        "gid": 1,
        "ver": "P1",
        "duration": "2015/6/1-2015/7/1",
        "reportScore": "A",
        "annotation": "本分析报告选取了2015年6月1日至7月1日新进入游戏的用户",
        "result": [{
            "em": "次日流失率处于S/A/B级，周流失率处于S/A/B级，半月流失率处于S/A/B级，月流失率处于S/A/B级",
            "content": "    （1）用户转化率是90%，较前3个统计周期均值上升/下降5个百分点；91平台的用户加载成功率下降5个百分点\n    （2）用户次日流失率是15%，较前3个统计周期均值上升/下降2个百分点，与行业同类产品相比处于S/A/B级水平；\n            用户周流失率是20%，较前3个统计周期均值上升/下降2个百分点，与行业同类产品相比处于S/A/B级水平；\n            用户半月流失率是25%，较前3个统计周期均值上升/下降2个百分点，与行业同类产品相比处于S/A/B级水平；\n            用户周流失率是30%，较前3个统计周期均值上升/下降2个百分点，与行业同类产品相比处于S/A/B级水平；\n    （3）5级、10级、20级的等级流失率较高，可能存在卡主用户的点\n    （4）5级的XX任务、10级的YY任务、20级的ZZ任务滞留的用户数量较多，可能存在卡主用户的点。"
        }, {
            "content":"建议做以下内容的调整：\n    （1）91平台的用户加载成功率下降5个百分点，建议检查一下相关环节\n    （2）半月流失率高出前3个统计周期3个百分点，建议检查近期相关调整内容\n    （3）5级、10级、20级的等级流失率较高，检查一下该等级附近是否存在卡点\n    （4）5级的XX任务、10级的YY任务、20级的ZZ任务滞留的用户数量较多，调整一下这些的难度或其他卡点"
        }],
        "menu_1": {
            "em":"各平台相比差异20个百分点，各机型相差10个百分点",
            "score":"S",
            "subMenu": [{
                "title_annotation":"建角成功到进入游戏转化率偏低",
                "data": [
                    {"date": "2015/6/2 - 2015/6/8","startup": "90%","startup_score": "S","load": "80%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/6/9 - 2015/6/16","startup": "80%","startup_score": "S","load": "70%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/6/17 - 2015/6/23","startup": "70%","startup_score": "S","load": "67%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/6/24 - 2015/6/30","startup": "75%","startup_score": "S","load": "65%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/1","startup": "89%","startup_score": "S","load": "60%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/2","startup": "85%","startup_score": "S","load": "55%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/3","startup": "88%","startup_score": "S","load": "61%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/4","startup": "97%","startup_score": "S","load": "58%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/5","startup": "82%","startup_score": "S","load": "56%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"},
                    {"date": "2015/7/6","startup": "80%","startup_score": "S","load": "66%","load_score": "S","login": "70%","login_score": "A","char": "70%","char_score": "C","scene": "60%","scene_score": "C"}
                ],
                "summary":"建角成功到进入游戏转化率偏低，属于B级水平"
            }, {
                "title_annotation":"各平台相比差异20个百分点，各机型相差10个百分点",
                "data" :{
                    "platform": {
                        "asc" : [
                            {"platform": "平台1","totalUsers": 1000,"startup": "90%","startup_score": "","load": "80%","login": "70%","char": "70%","scene": "60%"},
                            {"platform": "平台2","totalUsers": 1000,"startup": "70%","load": "90%","load_score": "","login": "70%","char": "70%","scene": "60%"},
                            {"platform": "平台3","totalUsers": 1000,"startup": "70%","load": "80%","login": "95%","login_score": "","char": "70%","scene": "60%"},
                            {"platform": "平台4","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "96%","char_score": "","scene": "60%"},
                            {"platform": "平台5","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "70%","scene": "97%", "scene_score": ""}
                        ],
                        "desc" : [
                            {"platform": "平台1","totalUsers": 1000,"startup": "90%","startup_score": "","load": "80%","login": "70%","char": "70%","scene": "60%"},
                            {"platform": "平台2","totalUsers": 1000,"startup": "70%","load": "90%","load_score": "","login": "70%","char": "70%","scene": "60%"},
                            {"platform": "平台3","totalUsers": 1000,"startup": "70%","load": "80%","login": "95%","login_score": "","char": "70%","scene": "60%"},
                            {"platform": "平台4","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "96%","char_score": "","scene": "60%"},
                            {"platform": "平台5","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "70%","scene": "97%", "scene_score": ""}
                        ]
                    },
                    "model": {
                        "asc" : [
                            {"model": "机型1","totalUsers": 1000,"startup": "90%","startup_score": "","load": "80%","login": "70%","char": "70%","scene": "60%"},
                            {"model": "机型2","totalUsers": 1000,"startup": "70%","load": "90%","load_score": "","login": "70%","char": "70%","scene": "60%"},
                            {"model": "机型3","totalUsers": 1000,"startup": "70%","load": "80%","login": "95%","login_score": "","char": "70%","scene": "60%"},
                            {"model": "机型4","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "96%","char_score": "","scene": "60%"},
                            {"model": "机型5","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "70%","scene": "97%", "scene_score": ""}
                        ],
                        "desc" : [
                            {"model": "机型1","totalUsers": 1000,"startup": "90%","startup_score": "","load": "80%","login": "70%","char": "70%","scene": "60%"},
                            {"model": "机型2","totalUsers": 1000,"startup": "70%","load": "90%","load_score": "","login": "70%","char": "70%","scene": "60%"},
                            {"model": "机型3","totalUsers": 1000,"startup": "70%","load": "80%","login": "95%","login_score": "","char": "70%","scene": "60%"},
                            {"model": "机型4","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "96%","char_score": "","scene": "60%"},
                            {"model": "机型5","totalUsers": 1000,"startup": "70%","load": "80%","login": "70%","char": "70%","scene": "97%", "scene_score": ""}
                        ]
                    }
                },
                "summary":"转化率最高的5个平台和最低的5个平台，转化率相差20个百分点，差异巨大(差异10个百分点以上)，希望项目及时排查潜在问题，优化提升转化率\n转化率最高的5个机型和最低的5个机型，转化率相差20个百分点，差异巨大(差异10个百分点以上) ，希望项目及时排查潜在问题，优化提升转化率\n备注：差异较大：差异3-10个百分点、略有差异：差异0-3个百分点"
            }]
        },
        "menu_2": {
            "em":"半月流失率、月流失率偏高，指标处于B级水平",
            "score":"A",
            "subMenu": [{
                "title_annotation":"半月流失率、月流失率偏高，指标处于B级水平",
                "data": [
                    {"type":"次日流失率", "s": "0-10%","a": "10%-20%","b": "20%-30%","c": "30%以上", "date": "6月1日-6月7日首登","lost": "8%","lost_score": "S"},
                    {"type":"次日流失率", "s": "0-10%","a": "10%-20%","b": "20%-30%","c": "30%以上", "date": "6月8日-6月14日首登","lost": "8%","lost_score": "S"},
                    {"type":"次日流失率", "s": "0-10%","a": "10%-20%","b": "20%-30%","c": "30%以上", "date": "6月15日-6月21日首登","lost": "8%","lost_score": "S"},
                    {"type":"周日流失率", "s": "0-12%","a": "12%-22%","b": "22%-32%","c": "32%以上", "date": "6月1日-6月7日首登","lost": "15%","lost_score": "A"},
                    {"type":"周日流失率", "s": "0-12%","a": "12%-22%","b": "22%-32%","c": "32%以上", "date": "6月8日-6月14日首登","lost": "15%","lost_score": "A"},
                    {"type":"周日流失率", "s": "0-12%","a": "12%-22%","b": "22%-32%","c": "32%以上", "date": "6月15日-6月21日首登","lost": "15%","lost_score": "A"},
                    {"type":"半月流失率", "s": "0-15%","a": "15%-25%","b": "25%-35%","c": "35%以上", "date": "6月1日-6月7日首登","lost": "26%","lost_score": "B"},
                    {"type":"半月流失率", "s": "0-15%","a": "15%-25%","b": "25%-35%","c": "35%以上", "date": "6月8日-6月14日首登","lost": "26%","lost_score": "B"},
                    {"type":"半月流失率", "s": "0-15%","a": "15%-25%","b": "25%-35%","c": "35%以上", "date": "6月15日-6月21日首登","lost": "26%","lost_score": "B"},
                    {"type":"月流失率", "s": "0-17%","a": "17%-27%","b": "27%-37%","c": "37%以上", "date": "6月1日-6月7日首登","lost": "39%","lost_score": "C"},
                    {"type":"月流失率", "s": "0-17%","a": "17%-27%","b": "27%-37%","c": "37%以上", "date": "6月8日-6月14日首登","lost": "39%","lost_score": "C"},
                    {"type":"月流失率", "s": "0-17%","a": "17%-27%","b": "27%-37%","c": "37%以上", "date": "6月15日-6月21日首登","lost": "39%","lost_score": "C"}
                ],
                "summary":"次日流失利率控制的较低，指标处于\n半月流失率、月流失率偏高，指标处于B级水平"
            }, {
                "title_annotation":"月留存率30%，与行业同类产品相比处于B级水平",
                "data":[
                    {"date": "2015/6/2 - 2015/6/8","accounts": 100,"d2": "97%","d2_score": "S","d3": "96%","d3_score": "A","d4": "96%","d4_score": "A","d5": "95%","d5_score": "B","d6": "94%","d6_score": "B","d7": "94%","d7_score": "C","d14": "83%","d14_score": "C","d21": "75%","d21_score": "C","d30": "70%","d30_score": "C"},
                    {"date": "2015/6/9 - 2015/6/16","accounts": 100,"d2": "97%","d2_score": "S","d3": "96%","d3_score": "A","d4": "96%","d4_score": "A","d5": "95%","d5_score": "B","d6": "94%","d6_score": "B","d7": "94%","d7_score": "C","d14": "83%","d14_score": "C","d21": "75%","d21_score": "C","d30": "70%","d30_score": "C"},
                    {"date": "2015/6/17 - 2015/6/23","accounts": 100,"d2": "97%","d2_score": "S","d3": "96%","d3_score": "A","d4": "96%","d4_score": "A","d5": "95%","d5_score": "B","d6": "94%","d6_score": "B","d7": "94%","d7_score": "C","d14": "83%","d14_score": "C","d21": "75%","d21_score": "C","d30": "70%","d30_score": "C"},
                    {"date": "2015/6/24 - 2015/6/30","accounts": 100,"d2": "97%","d2_score": "S","d3": "96%","d3_score": "A","d4": "96%","d4_score": "A","d5": "95%","d5_score": "B","d6": "94%","d6_score": "B","d7": "94%","d7_score": "C","d14": "83%","d14_score": "C","d21": "75%","d21_score": "C","d30": "70%","d30_score": "C"},
                    {"date": "2015/7/1","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"},
                    {"date": "2015/7/2","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"},
                    {"date": "2015/7/3","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"},
                    {"date": "2015/7/4","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"},
                    {"date": "2015/7/5","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"},
                    {"date": "2015/7/6","accounts": 100,"d2": "99%","d2_score": "S","d3": "98%","d3_score": "A","d4": "97%","d4_score": "A","d5": "96%","d5_score": "B","d6": "95%","d6_score": "B","d7": "93%","d7_score": "C","d14": "90%","d14_score": "C","d21": "87%","d21_score": "C","d30": "80%","d30_score": "C"}
                ],
                "summary":"次日留存60%，与同类产品相比偏高/偏低；与行业同类产品相比处于S/A/B级水平\n7日留存50%，与同类产品相比偏高/偏低；与行业同类产品相比处于S/A/B级水平\n双周留存率45%，与同类产品相比偏高/偏低；与行业同类产品相比处于S/A/B级水平\n月留存率30%，与同类产品相比偏高/偏低；与行业同类产品相比处于S/A/B级水平"
            }]
        },
        "menu_3": {
            "em":"5级、10级、20级的等级流失率较高",
            "score":"B",
            "subMenu":[{
                "title_annotation":"5级次日流失率较高",
                "data":[{
                    "lv": 5, "accounts": 100, "lost": 20, "lostrate": "20%"
                }, {
                    "lv": 7, "accounts": 100, "lost": 15, "lostrate": "15%"
                }, {
                    "lv": 6, "accounts": 100, "lost": 10, "lostrate": "10%"
                }, {
                    "lv": 2, "accounts": 100, "lost": 5, "lostrate": "5%"
                }, {
                    "lv": 1, "accounts": 100, "lost": 2, "lostrate": "2%"
                }],
                "summary":"5级的等级流失率较高，检查一下该等级附近是否存在卡点，建议予以重点关注修复。"
            }, {
                "title_annotation":"10级周流失率较高",
                "data":[{
                    "lv": 10, "accounts": 100, "lost": 20, "lostrate": "20%"
                }, {
                    "lv": 20, "accounts": 100, "lost": 15, "lostrate": "15%"
                }, {
                    "lv": 15, "accounts": 100, "lost": 10, "lostrate": "10%"
                }, {
                    "lv": 8, "accounts": 100, "lost": 5, "lostrate": "5%"
                }, {
                    "lv": 7, "accounts": 100, "lost": 2, "lostrate": "2%"
                }],
                "summary":"10级的等级流失率较高，检查一下该等级附近是否存在卡点，建议予以重点关注修复。"
            }, {
                "title_annotation":"20级半月流失率较高",
                "data":[{
                    "lv": 20, "accounts": 100, "lost": 20, "lostrate": "20%"
                }, {
                    "lv": 30, "accounts": 100, "lost": 15, "lostrate": "15%"
                }, {
                    "lv": 25, "accounts": 100, "lost": 10, "lostrate": "10%"
                }, {
                    "lv": 15, "accounts": 100, "lost": 5, "lostrate": "5%"
                }, {
                    "lv": 10, "accounts": 100, "lost": 2, "lostrate": "2%"
                }],
                "summary":"20级的等级流失率较高，检查一下该等级附近是否存在卡点，建议予以重点关注修复。"
            }, {
                "title_annotation":"20级月流失率较高",
                "data":[{
                    "lv": 20, "accounts": 100, "lost": 20, "lostrate": "20%"
                }, {
                    "lv": 30, "accounts": 100, "lost": 15, "lostrate": "15%"
                }, {
                    "lv": 25, "accounts": 100, "lost": 10, "lostrate": "10%"
                }, {
                    "lv": 15, "accounts": 100, "lost": 5, "lostrate": "5%"
                }, {
                    "lv": 10, "accounts": 100, "lost": 2, "lostrate": "2%"
                }],
                "summary":"20级的等级流失率较高，检查一下该等级附近是否存在卡点，建议予以重点关注修复。"
            }]
        },
        "menu_4": {
            "em": "5级的XX任务、10级的YY任务、20级的ZZ任务滞留的用户数量较多",
            "score": "C",
            "subMenu": [{
                "title_annotation":"5级的XX任务、10级的YY任务、20级的ZZ任务滞留的用户数量较多",
                "data":[{
                    "lv": 50, "taskid": 10001, "taskname": "任务1", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 40, "taskid": 10002, "taskname": "任务2", "lost_take": 200, "lost_suspend": 50, "active_take": 200, "active_suspend": 60
                }, {
                    "lv": 55, "taskid": 10003, "taskname": "任务3", "lost_take": 80, "lost_suspend": 25, "active_take": 80, "active_suspend": 50
                }, {
                    "lv": 56, "taskid": 10011, "taskname": "任务4", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 57, "taskid": 10021, "taskname": "任务5", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 60, "taskid": 10031, "taskname": "任务6", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 68, "taskid": 10053, "taskname": "任务7", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 70, "taskid": 10076, "taskname": "任务8", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 72, "taskid": 10057, "taskname": "任务9", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }, {
                    "lv": 90, "taskid": 10096, "taskname": "任务10", "lost_take": 100, "lost_suspend": 30, "active_take": 100, "active_suspend": 50
                }],
                "summary":"5级的XX任务、10级的YY任务、20级的ZZ任务滞留的用户数量较多，可能存在卡主用户的点，建议予以重点关注修复。"
            }]
        },
        "download":"http://www.ztgame.com"
    }
};