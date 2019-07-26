var text = function() {/*

[Script Info]
;SrtEdit 6.3.2012.1001
;Copyright(C) 2005-2012 Yuan Weiguo

Title: 
Original Script: 
Original Translation: 
Original Timing: 
Original Editing: 
Script Updated By: 
Update Details: 
ScriptType: v4.00+
Collisions: Reverse
PlayResX: 384
PlayResY: 288
Timer: 100.0000
Synch Point: 
WrapStyle: 0
ScaledBorderAndShadow: no

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: 歌词,WenQuanYi Micro Hei,12,&H0000EAFF,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,7,10,10,8,1
Style: 注释2,FZHei-B01,15,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,8,10,10,4,1
Style: 注释1,FZHei-B01,14,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,8,10,10,10,1
Style: 组别,hwKaiTi,17,&H00000000,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,2,10,10,10,1
Style: 字幕组LOGO,hwKaiTi,90,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,2,10,10,10,1
Style: 人员,hwKaiTi,15,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,2,10,10,10,1
Style: 名单LOGO,hwKaiTi,20,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,2,10,10,10,1
Style: 特效,FZHei-B01,16,&H00FFFFFF,&HF0000000,&H00000000,&H32000000,0,0,0,0,100,100,0,0,1,1,1,2,5,5,2,134
Style: 对白,WenQuanYi Micro Hei,68,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,1,1,2,10,10,10,1
Style: Default,FZHei-B01,20,&H00FFFFFF,&HF000FFFF,&H00000000,&H32000000,0,0,0,0,100,100,0,0,1,1,1,2,10,10,2,134

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:10.99,0:00:20.66,Default,,0,0,0,,远鉴字幕组制作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}[Visionary] 0day-sub{\r}
Dialogue: 0,0:00:12.99,0:00:15.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}翻译         {\c&HFFFFFF&}DexRoot 波伏瓦瓦  Diana.E 八荒殿 橙子
Dialogue: 0,0:00:12.99,0:00:33.99,Default,,0,0,0,,{\an9\bord0\shad0\fscx130\fscy170\frz180\p1\alpha&90\c&H000000&\b1\fad(800,500)\pos(115,242.9)}{\clip(94.4,219.2,95.6,246.4)\t(0,300,\clip(94.4,219.2,339.2,246.4)}m 200 -1 l 200 13 l 19 13 b 14 12 14 6 14 6 b 14 6 14 0 19 -1{\p0}
Dialogue: 0,0:00:12.99,0:00:33.99,Default,,0,0,0,,{\fad(200,500)\bord0\shad0\fscx150\fscy170\p1\c&H0091EC&\b1\pos(66,246.4)}m 38 -1 l 44 6 l 38 13 l 19 13 b 14 12 14 6 14 6 b 14 6 14 0 19 -1{\p0}
Dialogue: 0,0:00:15.99,0:00:18.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}翻译         {\c&HFFFFFF&}人木水 Shadow 布布 Rosaline 阿碧 帅帅
Dialogue: 0,0:00:18.99,0:00:21.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}翻译         {\c&HFFFFFF&}Tina 阿奇德菲哥哥 彤 杂食季 Jettatore
Dialogue: 0,0:00:21.99,0:00:24.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}翻译         {\c&HFFFFFF&}吭哧 quiz chupachups真的很好吃 拥楫
Dialogue: 0,0:00:24.99,0:00:27.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}校对         {\c&HFFFFFF&}DexRoot和他滴小可爱Luciana
Dialogue: 0,0:00:27.99,0:00:30.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}后期         {\c&HFFFFFF&}DexRoot
Dialogue: 0,0:00:30.99,0:00:33.99,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑 Light\c&HEAC2A3&\pos(68,232)\b0}总监         {\c&HFFFFFF&}DexRoot
Dialogue: 0,0:00:33.99,0:00:36.99,Default,,0,0,0,,{\fad(500,500)\fnFZHei-B01\c&H00A8FF&\fs16}{\fad(500,500)\an9\fs12\fnFZHei-B01\b1}热门电影字幕欢迎关注微博 @远鉴字幕组v\N远鉴字幕组招新群 483552098\N若想施展您的翻译才华\N让自己的名字出现在电影片头\N远鉴字幕组诚邀您的加入\N远鉴字幕组粉丝群 522218128
Dialogue: 0,0:01:18.90,0:01:21.36,Default,,0,0,0,,{\an8\fn宋体\fs16\pos(199.6,121.067)}新账户
Dialogue: 0,0:01:21.60,0:01:23.70,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs16\pos(122.8,130.666)}命名新账户
Dialogue: 0,0:01:25.40,0:01:28.13,Default,,0,0,0,,{\k300\an8\fn宋体\fs12\c&H000000&\pos(176,163.066)}玛戈
Dialogue: 0,0:01:32.26,0:01:34.80,Default,,0,0,0,,{\\fn宋体\fs16\c&H000000&\pos(97.6,38.267)}想要拷贝哪张照片?
Dialogue: 0,0:01:34.76,0:01:36.65,Default,,0,0,0,,不不 看那边\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh. No, look over there.{\r}
Dialogue: 0,0:01:36.71,0:01:38.11,Default,,0,0,0,,-看那边  -看\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Look over there. - Look.{\r}
Dialogue: 0,0:01:38.18,0:01:39.20,Default,,0,0,0,,好了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right.{\r}
Dialogue: 0,0:01:40.84,0:01:42.35,Default,,0,0,0,,我们拍张照片 一\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's take a picture, one...{\r}
Dialogue: 0,0:01:43.05,0:01:44.60,Default,,0,0,0,,说"茄子"吧 好了 一\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You say "cheese", okay, one...{\r}
Dialogue: 0,0:01:44.75,0:01:45.87,Default,,0,0,0,,-说"茄子"  -二\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Say "cheese". - Two...{\r}
Dialogue: 0,0:01:45.92,0:01:47.73,Default,,0,0,0,,-茄子  -三\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Cheese! - Three.{\r}
Dialogue: 0,0:02:03.60,0:02:08.73,Default,,0,0,0,,{\fad(642,474)\an8\fn方正黑体_GBK\fs20\pos(316.8,150.266)}网络迷踪
Dialogue: 0,0:02:10.40,0:02:12.13,Default,,0,0,0,,{\an8\fn宋体\fs10\pos(191.6,112.4)}潘姆
Dialogue: 0,0:02:15.76,0:02:18.46,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs16\pos(224.4,200.399)}日程 幼儿园第一天
Dialogue: 0,0:02:21.80,0:02:23.63,Default,,0,0,0,,{\an8\c&H000000&\pos(140.4,185.467)}开学第一天
Dialogue: 0,0:02:27.43,0:02:29.26,Default,,0,0,0,,{\fn方正黑体_GBK}{\an8\c&H000000&\pos(130.8,107.599)}第一次钢琴课
Dialogue: 0,0:02:29.43,0:02:30.70,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs32\pos(174,77.733)}上 传 视 频
Dialogue: 0,0:02:31.24,0:02:33.49,Default,,0,0,0,,用四指和大拇指 这是二指\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The four and the one. That's your two.{\r}
Dialogue: 0,0:02:33.65,0:02:34.75,Default,,0,0,0,,就是这样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}There you go.{\r}
Dialogue: 0,0:02:34.86,0:02:36.65,Default,,0,0,0,,四指 大拇指 四指 大拇指\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Four, one, four, one...{\r}
Dialogue: 0,0:02:36.73,0:02:38.24,Default,,0,0,0,,四指 大拇指 然后五指\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}four one, and then five.{\r}
Dialogue: 0,0:02:38.32,0:02:40.17,Default,,0,0,0,,准备好之后就可以换成五指\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}When you're ready, you can switch to five.{\r}
Dialogue: 0,0:02:39.80,0:02:41.03,Default,,0,0,0,,{\an8\c&H000000&\pos(178.4,169.467)}日程 一年级的第一天
Dialogue: 0,0:02:41.70,0:02:43.13,Default,,0,0,0,,{\an8\fn微软雅黑\c&H000000&\pos(160,243.601)}玛戈
Dialogue: 0,0:02:45.80,0:02:47.93,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(165.2,96.933)}大卫·金来电
Dialogue: 0,0:02:45.80,0:02:47.93,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\pos(272.8,160.933)}视频接通
Dialogue: 0,0:02:48.19,0:02:49.36,Default,,0,0,0,,看看我买了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Look what I got.{\r}
Dialogue: 0,0:02:49.91,0:02:51.28,Default,,0,0,0,,那是什么呀\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What is that?{\r}
Dialogue: 0,0:02:51.32,0:02:53.01,Default,,0,0,0,,你居然不知道《精灵宝可梦》\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What, you don't know Pokémon?{\r}
Dialogue: 0,0:02:53.63,0:02:55.00,Default,,0,0,0,,{\fn方正黑体_GBK\an8\move(175.6,183.333,174.8,102.8,600,100)}玛戈
Dialogue: 0,0:02:56.40,0:02:58.23,Default,,0,0,0,,{\an8\pos(202.4,54.267)\fn楷体\\3c&H432E14&\4c&H5A4423&}成瘾游戏
Dialogue: 0,0:03:02.13,0:03:03.13,Default,,0,0,0,,{\fn方正黑体_GBK\an8)\move(208,74,206.8,159.333,27,293)}大卫 正在加载个人设置
Dialogue: 0,0:03:03.30,0:03:04.86,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(94.8,191.867)}小型立式钢琴
Dialogue: 0,0:03:03.30,0:03:04.86,Default,,0,0,0,,{\an8\c&H0000FF&\pos(237.2,44.134)}易{\c&HFF0000&}趣{\c&H2DB6E3&}购{\c&H00FF00&}物
Dialogue: 0,0:03:03.30,0:03:04.86,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(93.2,111.867)}你想购买什么?
Dialogue: 0,0:03:05.03,0:03:06.13,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(276.4,130.533)}查找
Dialogue: 0,0:03:11.74,0:03:12.81,Default,,0,0,0,,快一点 快一点\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Faster, faster.{\r}
Dialogue: 0,0:03:12.84,0:03:13.91,Default,,0,0,0,,笑一个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Smile.{\r}
Dialogue: 0,0:03:13.96,0:03:15.00,Default,,0,0,0,,我想拍个视频看看\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I wanna try it as a video.{\r}
Dialogue: 0,0:03:15.03,0:03:16.10,Default,,0,0,0,,滑一下就行了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Just slide the thing.{\r}
Dialogue: 0,0:03:16.50,0:03:17.96,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(148.8,93.733)}潘姆
Dialogue: 0,0:03:19.13,0:03:21.66,Default,,0,0,0,,{\an8\c&H000000&\pos(185.6,166.8)}日程 艾索拉医生的邮件
Dialogue: 0,0:03:22.50,0:03:24.50,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(130.4,109.734)}艾索拉医生                 初检报告
Dialogue: 0,0:03:25.03,0:03:29.16,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(184.8,163.6)}血小板计数偏低
Dialogue: 0,0:03:30.26,0:03:33.10,Default,,0,0,0,,{\an8\c&HE54510&\pos(263.2,63.867)}谷{\c&H0000FF&}歌
Dialogue: 0,0:03:30.26,0:03:33.10,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(103.2,183.333)}如何对抗淋巴瘤
Dialogue: 0,0:03:33.40,0:03:35.80,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(128,179.599)}如何全家一起对抗淋巴瘤
Dialogue: 0,0:03:36.33,0:03:38.30,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&HF52808&\pos(69.2,66.534)}癌症锻炼计划
Dialogue: 0,0:03:38.30,0:03:40.11,Default,,0,0,0,,视频博客 三月七日\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Video log 3.7.{\r}
Dialogue: 0,0:03:40.68,0:03:42.70,Default,,0,0,0,,我真心觉得我老婆就是个机器人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I have reason to believe my wife's a robot.{\r}
Dialogue: 0,0:03:43.17,0:03:44.70,Default,,0,0,0,,看起来她能跑上个一整天\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Seems she could run for miles.{\r}
Dialogue: 0,0:03:45.10,0:03:46.20,Default,,0,0,0,,等等我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wait up.{\r}
Dialogue: 0,0:03:49.10,0:03:50.16,Default,,0,0,0,,{\an8\c&H000000&\pos(154,157.2)}日程 四年级第一天
Dialogue: 0,0:03:50.33,0:03:52.16,Default,,0,0,0,,{\an8\c&HD62385&\fn汉仪瘦金书简\pos(224.4,11.066)}欢迎\N{\c&H00FF00&}你\N{\c&HFF0000&}踏入\N{\c&HFF00FF&}四年级
Dialogue: 0,0:03:52.33,0:03:53.36,Default,,0,0,0,,{\fn方正黑体_GBK\an8\move(205.6,173.733,206,82,000,300)}玛戈
Dialogue: 0,0:03:54.40,0:03:57.76,Default,,0,0,0,,{\an8\c&H000000&\move(253.6,122.533,253.2,95.333,200,990)\fn宋体}天 你们猜怎么着
Dialogue: 0,0:03:55.19,0:03:57.76,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\pos(188,149.2)}艾比告诉了我小孩是怎么生出来的
Dialogue: 0,0:03:57.99,0:04:01.03,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(103.2,121.467)}姓交是什么
Dialogue: 0,0:03:57.99,0:04:01.03,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H0091EC&\fs14}性交本是"intercourse" 年少的玛戈不会拼 拼成了"entercourse"
Dialogue: 0,0:04:01.30,0:04:03.43,Default,,0,0,0,,{\an8\pos(178,154)\c&H000000&}日程 艾索拉医生的邮件
Dialogue: 0,0:04:03.60,0:04:06.26,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(184.8,102.8)}有好转 宝贝诶诶诶诶诶
Dialogue: 0,0:04:08.70,0:04:10.26,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H502018&\pos(123.6,10.533)}注册
Dialogue: 0,0:04:08.70,0:04:10.26,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(270,105.466)}玛戈
Dialogue: 0,0:04:10.43,0:04:11.93,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(306,212.667)}注册
Dialogue: 0,0:04:13.43,0:04:14.80,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(189.6,256.933)}和妈妈一起弹钢琴
Dialogue: 0,0:04:14.96,0:04:16.13,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(128.8,62.8)}{\c&HB12716&}潘蜜拉·金赞了这个视频
Dialogue: 0,0:04:18.39,0:04:19.67,Default,,0,0,0,,别拍\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Stop!{\r}
Dialogue: 0,0:04:22.92,0:04:24.24,Default,,0,0,0,,你们都被禁足了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Everybody's grounded.{\r}
Dialogue: 0,0:04:24.30,0:04:26.06,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs16\pos(182.8,147.6)}和妈妈一起弹钢琴 创建日程
Dialogue: 0,0:04:28.23,0:04:29.90,Default,,0,0,0,,{\an8\pos(125.2,157.2)\c&H000000&\fn方正黑体_GBK\fs16}和妈妈一起弹钢琴
Dialogue: 0,0:04:30.06,0:04:31.56,Default,,0,0,0,,{\an8\c&H0000FF&\fn方正黑体_GBK\fs16\pos(287.2,154.001)}才艺表演
Dialogue: 0,0:04:33.45,0:04:35.20,Default,,0,0,0,,太棒了 玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes! Margot!{\r}
Dialogue: 0,0:04:37.26,0:04:39.06,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(150.4,91.067)}潘姆
Dialogue: 0,0:04:39.80,0:04:41.80,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(143.2,101.2)\c&H000000&}跟进结果
Dialogue: 0,0:04:42.26,0:04:43.63,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs32\c&H000000&\pos(196.4,195.6)}复发
Dialogue: 0,0:04:43.92,0:04:45.79,Default,,0,0,0,,视频博客 六月七日\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Video log 6.7.{\r}
Dialogue: 0,0:04:45.94,0:04:48.45,Default,,0,0,0,,我觉得我们可以 我们可以 我们...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I think we can, I think we can, I think we...{\r}
Dialogue: 0,0:04:49.68,0:04:50.71,Default,,0,0,0,,潘姆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pam?{\r}
Dialogue: 0,0:04:52.10,0:04:53.14,Default,,0,0,0,,潘姆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pam?{\r}
Dialogue: 0,0:04:53.30,0:04:54.83,Default,,0,0,0,,{\an8\pos(160.533,153.467)\c&H000000&}日程 八年级第一天
Dialogue: 0,0:04:59.56,0:05:01.26,Default,,0,0,0,,{\an8\c&H000000&\pos(138.667,150.623)}妈妈回家
Dialogue: 0,0:05:01.43,0:05:02.43,Default,,0,0,0,,{\an8\pos(138.667,149.911)\c&H000000&}创建日程
Dialogue: 0,0:05:02.57,0:05:04.80,Default,,0,0,0,,{\fn方正黑体_GBK\c&H000000&\pos(155.733,241.2)}妈妈回家
Dialogue: 0,0:05:10.00,0:05:11.83,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(145.6,149.2)}妈妈回家
Dialogue: 0,0:05:17.30,0:05:18.93,Default,,0,0,0,,{\fn方正黑体_GBK\an8\move(184,183.333,183.467,91.6,23,690)}玛戈
Dialogue: 0,0:05:19.10,0:05:21.30,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\move(119.467,198.267,118.934,238.089,23,2190)\b0}暑假!!!!!!!!!!!
Dialogue: 0,0:05:21.46,0:05:24.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\move(142.4,120.044,141.867,160.577,30,3297)\b0}桑伍德中学的挚友们 难说再见
Dialogue: 0,0:05:24.93,0:05:28.26,Default,,0,0,0,,{\fn等线 Light\an8\c&HD8C2B4&\1a&H12&\b0\pos(148.4,66.889)}想说些什么?
Dialogue: 0,0:05:30.76,0:05:31.80,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(85.333,146.355)}妈妈回家
Dialogue: 0,0:05:33.43,0:05:35.33,Default,,0,0,0,,{\an8\move(252.267,162,251.734,138.533,27,1827)}删除
Dialogue: 0,0:06:06.30,0:06:10.56,Default,,0,0,0,,{\fn楷体\an8\c&H000000&\pos(118,8.223)}深爱铭记
Dialogue: 0,0:06:06.30,0:06:10.56,Default,,0,0,0,,{\fn楷体\an8\c&H000000&\pos(116.8,176.933)}潘蜜拉·金
Dialogue: 0,0:06:10.83,0:06:12.50,Default,,0,0,0,,{\an8\c&H000000&\pos(248,206.089)}日程 高中第一天
Dialogue: 0,0:06:32.60,0:06:36.40,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(190.933,61.022)}{\c&H000000&}是不是忘了什么?
Dialogue: 0,0:06:43.76,0:06:44.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\c&HF7AF5B&\pos(215.466,146)}是不是忘了什么?
Dialogue: 0,0:06:46.36,0:06:49.00,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\c&H000000&\pos(231.067,205.911)}给你点提示...
Dialogue: 0,0:07:00.36,0:07:02.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(265.734,12.488)}玛戈·金 视频电话
Dialogue: 0,0:07:04.75,0:07:06.17,Default,,0,0,0,,嘿 老爸\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, Dad!{\r}
Dialogue: 0,0:07:06.27,0:07:07.28,Default,,0,0,0,,嘿 宝贝儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, sweetheart.{\r}
Dialogue: 0,0:07:07.63,0:07:08.66,Default,,0,0,0,,过得怎样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How's it going?{\r}
Dialogue: 0,0:07:08.82,0:07:10.61,Default,,0,0,0,,挺好的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, good!{\r}
Dialogue: 0,0:07:11.41,0:07:12.68,Default,,0,0,0,,打视频电话干嘛\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's up with the FaceTime?{\r}
Dialogue: 0,0:07:12.74,0:07:13.88,Default,,0,0,0,,噢 很高兴你问起这个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, I'm glad you asked.{\r}
Dialogue: 0,0:07:13.97,0:07:15.55,Default,,0,0,0,,这到底是怎么回事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What is wrong with this picture?{\r}
Dialogue: 0,0:07:15.90,0:07:17.67,Default,,0,0,0,,你要批评我了 对吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm about to be in trouble, aren't I?{\r}
Dialogue: 0,0:07:17.74,0:07:18.67,Default,,0,0,0,,当然\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:07:21.75,0:07:22.64,Default,,0,0,0,,好叭\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yup.{\r}
Dialogue: 0,0:07:22.66,0:07:25.07,Default,,0,0,0,,也许我们得把垃圾桶放你房间里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Maybe we should keep the trash in your room? Huh?{\r}
Dialogue: 0,0:07:25.20,0:07:27.46,Default,,0,0,0,,然后臭味才能提醒你去倒垃圾\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Maybe the smell will remind you.{\r}
Dialogue: 0,0:07:28.30,0:07:31.24,Default,,0,0,0,,我错啦 老爸 我不会再忘了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry, Dad. It won't happen again.{\r}
Dialogue: 0,0:07:32.29,0:07:33.34,Default,,0,0,0,,好吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:07:33.40,0:07:34.54,Default,,0,0,0,,对了 你现在在哪\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where are you, by the way?{\r}
Dialogue: 0,0:07:34.65,0:07:35.54,Default,,0,0,0,,学习小组\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Study group.{\r}
Dialogue: 0,0:07:35.59,0:07:37.29,Default,,0,0,0,,在谁家\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ah. Whose house are you at?{\r}
Dialogue: 0,0:07:37.39,0:07:39.89,Default,,0,0,0,,我一个学生物的朋友 你还没见过她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, one of my friends in bio, you haven't met her yet.{\r}
Dialogue: 0,0:07:39.95,0:07:42.09,Default,,0,0,0,,噢 交际花小姐 你多久能回家\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, Miss Popular. When are you gonna be home?{\r}
Dialogue: 0,0:07:42.16,0:07:44.26,Default,,0,0,0,,我...我觉得我们会搞到很晚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I... think we're gonna go late.{\r}
Dialogue: 0,0:07:44.33,0:07:45.78,Default,,0,0,0,,"很晚"是九点的意思吗 还是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Late, like-like, nine-ish or...?{\r}
Dialogue: 0,0:07:45.81,0:07:48.04,Default,,0,0,0,,也许通宵吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Late, like, all night probably.{\r}
Dialogue: 0,0:07:48.06,0:07:49.74,Default,,0,0,0,,我还以为我们要一起吃晚饭\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I thought we were gonna eat dinner together?{\r}
Dialogue: 0,0:07:49.82,0:07:51.29,Default,,0,0,0,,我们周一才一起吃过\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We ate together on Monday.{\r}
Dialogue: 0,0:07:52.72,0:07:54.50,Default,,0,0,0,,我还不知道你数着日子呢\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Didn't know you were counting.{\r}
Dialogue: 0,0:07:56.33,0:07:58.23,Default,,0,0,0,,恩...我该回去了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Right... I should get back.{\r}
Dialogue: 0,0:07:58.29,0:07:59.33,Default,,0,0,0,,还有一件事 我想了解下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, one more thing, I wanna know about{\r}
Dialogue: 0,0:07:59.36,0:08:01.05,Default,,0,0,0,,-拜 老爸  -你今天...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Bye, Dad! - the final you...{\r}
Dialogue: 0,0:08:01.64,0:08:02.67,Default,,0,0,0,,的期末考试\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}took today.{\r}
Dialogue: 0,0:08:05.50,0:08:07.53,Default,,0,0,0,,{\fn方正黑体_GBK\an8\}{\c&H000000&}玛戈·金\N抱歉 他们在等我
Dialogue: 0,0:08:12.00,0:08:13.86,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(76.133,197.2)}没事 就是想问问
Dialogue: 0,0:08:14.76,0:08:16.36,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(81.867,192.934)}今天期末考怎么样
Dialogue: 0,0:08:19.60,0:08:21.00,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\move(46.4,157.734,46.4,157.734,23,-10)}挺好
Dialogue: 0,0:08:21.16,0:08:22.96,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(173.6,168.932)}就算我考炸了
Dialogue: 0,0:08:23.13,0:08:24.40,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(238.4,175.511)}李先生也不会挂我的
Dialogue: 0,0:08:24.56,0:08:26.40,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(113.333,197.2)}我不信你会考砸哦 你这么努力
Dialogue: 0,0:08:27.36,0:08:29.46,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(61.867,194.178)}我为你骄傲
Dialogue: 0,0:08:33.56,0:08:37.30,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(74,110.8)}妈妈也会的
Dialogue: 0,0:08:53.73,0:08:56.40,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs7\pos(189.12,146.213)}平和而放松的四小时演奏会
Dialogue: 0,0:09:00.30,0:09:03.70,Default,,0,0,0,,{\an8\c&H7E280B&\fn方正黑体_GBK\fs12\pos(93.867,232.4)}山中受困九天驴友生还
Dialogue: 0,0:09:11.86,0:09:14.10,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(252.8,43.244)}皮特·金 视频电话
Dialogue: 0,0:09:23.35,0:09:25.10,Default,,0,0,0,,唷 这是什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, yo, what am I lookin' at?{\r}
Dialogue: 0,0:09:25.38,0:09:27.06,Default,,0,0,0,,完全...没错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}E...xactly.{\r}
Dialogue: 0,0:09:27.38,0:09:30.29,Default,,0,0,0,,我也不记得这菜叫什么了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I cannot remember the name of this thing...{\r}
Dialogue: 0,0:09:30.36,0:09:32.47,Default,,0,0,0,,有点像掺了朝鲜泡菜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}uh, it was like a kimchi,{\r}
Dialogue: 0,0:09:32.56,0:09:34.72,Default,,0,0,0,,黄秋葵和贻贝的炖菜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}okra, mussels stew?{\r}
Dialogue: 0,0:09:35.13,0:09:36.42,Default,,0,0,0,,潘姆以前经常做的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pam used to make it?{\r}
Dialogue: 0,0:09:37.20,0:09:39.81,Default,,0,0,0,,噢 泡菜秋葵汤\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, the kimchi gumbo.{\r}
Dialogue: 0,0:09:39.91,0:09:41.49,Default,,0,0,0,,-泡菜秋葵汤 就是这个  -没错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Gumbo. Gumbo, that's it. - Yup.{\r}
Dialogue: 0,0:09:41.61,0:09:43.11,Default,,0,0,0,,你有菜谱吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you have the recipe?{\r}
Dialogue: 0,0:09:43.14,0:09:45.39,Default,,0,0,0,,因为这绝对少了点什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}'Cause I'm definitely forgetting something.{\r}
Dialogue: 0,0:09:45.43,0:09:46.53,Default,,0,0,0,,我也许...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, I might...{\r}
Dialogue: 0,0:09:46.69,0:09:48.91,Default,,0,0,0,,但我绝对相信菜谱里没有大麻\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but I can definitely tell you there's no pot in it.{\r}
Dialogue: 0,0:09:50.51,0:09:52.67,Default,,0,0,0,,哦 你说这个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh. This?{\r}
Dialogue: 0,0:09:53.05,0:09:57.34,Default,,0,0,0,,一罐健康有机的牛至\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Healthy and organic jar of... oregano?{\r}
Dialogue: 0,0:09:58.27,0:09:59.70,Default,,0,0,0,,你吸了多少\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How much are you smokin'?{\r}
Dialogue: 0,0:10:00.52,0:10:01.79,Default,,0,0,0,,每天都吸吗 还是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You doin' everyday or?{\r}
Dialogue: 0,0:10:02.03,0:10:03.53,Default,,0,0,0,,-工作时候抽  -老兄\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- You do it at work? - Dude.{\r}
Dialogue: 0,0:10:03.74,0:10:06.01,Default,,0,0,0,,我们现在能别说这件事吗 拜托\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Can we not do this right now? Please?{\r}
Dialogue: 0,0:10:06.24,0:10:07.44,Default,,0,0,0,,我今天很累\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's been a long day.{\r}
Dialogue: 0,0:10:11.10,0:10:13.20,Default,,0,0,0,,毛豆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ah, edamame.{\r}
Dialogue: 0,0:10:14.80,0:10:16.72,Default,,0,0,0,,你没加毛豆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm pretty sure there's edamame in it.{\r}
Dialogue: 0,0:10:17.40,0:10:20.11,Default,,0,0,0,,让我找找菜谱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let me find the actual thing.{\r}
Dialogue: 0,0:10:20.76,0:10:22.18,Default,,0,0,0,,那个...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's uh...{\r}
Dialogue: 0,0:10:22.38,0:10:24.23,Default,,0,0,0,,玛戈今天在干嘛呢\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's Margot up to tonight?{\r}
Dialogue: 0,0:10:25.15,0:10:27.13,Default,,0,0,0,,她跟她的学习小组要通宵学习\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's at a study group all night.{\r}
Dialogue: 0,0:10:25.27,0:10:27.34,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs8\b0\pos(156.4,175.467)}泡菜秋葵汤菜谱
Dialogue: 0,0:10:28.86,0:10:30.46,Default,,0,0,0,,通宵吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wait, all night tonight?{\r}
Dialogue: 0,0:10:30.49,0:10:31.86,Default,,0,0,0,,嗯 我刚跟她通过电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, I just got off the phone with her.{\r}
Dialogue: 0,0:10:31.89,0:10:33.68,Default,,0,0,0,,她下周有生物期末考试\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's got a bio final next week.{\r}
Dialogue: 0,0:10:33.78,0:10:34.83,Default,,0,0,0,,怎么了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why?{\r}
Dialogue: 0,0:10:34.87,0:10:36.24,Default,,0,0,0,,哦 没事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, nothin'.{\r}
Dialogue: 0,0:10:36.58,0:10:37.88,Default,,0,0,0,,她最近还好吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's good, though?{\r}
Dialogue: 0,0:10:38.14,0:10:39.92,Default,,0,0,0,,挺好的 问这个干吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah. Why do you ask?{\r}
Dialogue: 0,0:10:40.03,0:10:41.76,Default,,0,0,0,,我要确保一下你们俩还和对方说话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Making sure you guys are both talking to each other.{\r}
Dialogue: 0,0:10:41.04,0:10:44.20,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\b0\pos(106.4,171.733)}别忘倒垃圾
Dialogue: 0,0:10:41.79,0:10:44.33,Default,,0,0,0,,过得开心什么的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Both happy, etcetera, etcetera.{\r}
Dialogue: 0,0:10:46.19,0:10:48.25,Default,,0,0,0,,一切都很好 皮特 谢谢你的关心\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Everything's fine, Peter. Thanks for askin'.{\r}
Dialogue: 0,0:10:51.03,0:10:53.22,Default,,0,0,0,,嘿 大卫 听我说\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, look, Davey...{\r}
Dialogue: 0,0:10:54.33,0:10:55.55,Default,,0,0,0,,你觉不觉得你应该...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you think that maybe you should just...{\r}
Dialogue: 0,0:10:55.58,0:10:57.21,Default,,0,0,0,,兄弟 我们一切安好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Dude, everything's fine.{\r}
Dialogue: 0,0:11:04.05,0:11:05.84,Default,,0,0,0,,嘿 呃 我得挂电话了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, uh, I gotta go{\r}
Dialogue: 0,0:11:05.92,0:11:08.43,Default,,0,0,0,,你一定要把那份食谱发给我 求你了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but send me that recipe, please?{\r}
Dialogue: 0,0:11:08.48,0:11:09.62,Default,,0,0,0,,-谢谢哦  -没事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Thank you. - Yeah.{\r}
Dialogue: 0,0:11:09.65,0:11:10.83,Default,,0,0,0,,爱你哦\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Love you.{\r}
Dialogue: 0,0:11:10.94,0:11:12.69,Default,,0,0,0,,-拜拜  -拜拜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Byeee. - Byeee.{\r}
Dialogue: 0,0:11:30.70,0:11:34.07,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs8\b0\move(208,139.2,199.2,129.6,23,3323)}泡菜秋葵汤
Dialogue: 0,0:11:38.90,0:11:40.94,Default,,0,0,0,,-一定要确认把水倒干净  -那些做好了吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Make sure you get all the water out. - Are these ready?{\r}
Dialogue: 0,0:11:40.98,0:11:42.87,Default,,0,0,0,,好了 做好了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, they're ready...{\r}
Dialogue: 0,0:11:49.65,0:11:51.01,Default,,0,0,0,,对 把水挤干\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, drain all the water.{\r}
Dialogue: 0,0:11:52.40,0:11:53.95,Default,,0,0,0,,别录了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Turn it off.{\r}
Dialogue: 0,0:11:59.23,0:12:01.90,Default,,0,0,0,,咱们把它放进去 放之前要先搅拌一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's stir it in. We gotta mix those up first.{\r}
Dialogue: 0,0:12:03.77,0:12:05.87,Default,,0,0,0,,-你想自己试试吗 -想\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- You wanna try mixing it? - Yeah.{\r}
Dialogue: 0,0:12:05.94,0:12:07.30,Default,,0,0,0,,好的 给你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, here.{\r}
Dialogue: 0,0:12:08.04,0:12:08.94,Default,,0,0,0,,很好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good.{\r}
Dialogue: 0,0:12:10.53,0:12:12.11,Default,,0,0,0,,很好 轻一点 慢慢的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good. Gently, do it slowly.{\r}
Dialogue: 0,0:12:14.12,0:12:15.73,Default,,0,0,0,,知道怎么做了吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you see how those are all done?{\r}
Dialogue: 0,0:12:16.01,0:12:17.70,Default,,0,0,0,,-看见了  -好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Yeah. - Yeah.{\r}
Dialogue: 0,0:12:35.30,0:12:37.93,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs11\pos(312.533,115.778)}从搜索记录中隐藏
Dialogue: 0,0:12:58.63,0:13:00.90,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs10\pos(352.4,1.467)}玛戈·金来电
Dialogue: 0,0:13:17.26,0:13:19.50,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs10\pos(352.4,1.467)}玛戈·金来电
Dialogue: 0,0:13:29.80,0:13:31.23,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs10\pos(352.4,1.467)}玛戈·金视频通话
Dialogue: 0,0:13:52.60,0:13:54.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs14\pos(218.4,92.934)}玛戈·金
Dialogue: 0,0:13:52.60,0:13:54.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs14\pos(268.4,110)}未接视频电话
Dialogue: 0,0:13:52.60,0:13:54.83,Default,,0,0,0,,{\c&H000000\fn方正黑体_GBK\fs14\pos(218,182)}玛戈·金
Dialogue: 0,0:13:52.60,0:13:54.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs14\pos(239.2,200.667)}两个未接电话
Dialogue: 0,0:14:02.60,0:14:04.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\pos(284.4,35.6)}玛戈·金\N视频通话
Dialogue: 0,0:14:20.63,0:14:23.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(246,4.133)}玛戈·金
Dialogue: 0,0:14:20.63,0:14:23.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(247.2,41.467)}现在无法接听
Dialogue: 0,0:14:29.44,0:14:30.91,Default,,0,0,0,,嗨 这是玛戈的电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, you're reached Margot's phone.{\r}
Dialogue: 0,0:14:30.99,0:14:32.80,Default,,0,0,0,,给我留言或是发短信吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Leave me a message or text me back.{\r}
Dialogue: 0,0:14:33.02,0:14:36.08,Default,,0,0,0,,嗨 亲爱的 抱歉我没接电话 我睡着了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, sweetheart, sorry I missed your call. I was asleep.{\r}
Dialogue: 0,0:14:36.28,0:14:38.13,Default,,0,0,0,,我就打电话问候你一下 因为看起来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, just checkin' in 'cause it looks like{\r}
Dialogue: 0,0:14:38.16,0:14:39.97,Default,,0,0,0,,你今早已经去学校了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you already left for school this morning.{\r}
Dialogue: 0,0:14:40.04,0:14:42.55,Default,,0,0,0,,还有一件事 你昨晚几点回来的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, also, what time did you get in last night?{\r}
Dialogue: 0,0:14:43.17,0:14:44.94,Default,,0,0,0,,好了 你收到消息的时候回复我一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right, give me text when you get this.{\r}
Dialogue: 0,0:14:44.96,0:14:47.73,Default,,0,0,0,,不用打电话 我们都知道你平时...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No need to call. We both know you usually...{\r}
Dialogue: 0,0:14:49.60,0:14:50.87,Default,,0,0,0,,比较健忘\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}forget.{\r}
Dialogue: 0,0:15:02.70,0:15:04.33,Default,,0,0,0,,{\fn方正黑体_GBK\an8\move(241.6,254.8,241.6,228.667,23,557)}我跟你说了多少回了
Dialogue: 0,0:15:07.90,0:15:09.33,Default,,0,0,0,,{\an8\c&H979595&\fn方正黑体_GBK\fs20\pos(95.6,67.6)}2017年       上午7:01
Dialogue: 0,0:15:13.36,0:15:14.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK}下午3:27
Dialogue: 0,0:15:13.37,0:15:14.80,Default,,0,0,0,,{\c&H0F10BD&\fn方正黑体_GBK\fs16\pos(52.8,199.066)}硬盘存储
Dialogue: 0,0:15:13.37,0:15:14.80,Default,,0,0,0,,{\c&H0F10BD&\fn方正黑体_GBK\fs16\pos(219.6,199.066)}剩余内存
Dialogue: 0,0:15:17.23,0:15:19.13,Default,,0,0,0,,{\an8\pos(94.933,105.822)\fn方正黑体_GBK}我跟你说了多少回了?
Dialogue: 0,0:15:21.06,0:15:23.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\move(200.533,207.512,192,53.912,30,2197)}在吗吗吗吗吗吗吗
Dialogue: 0,0:15:23.43,0:15:25.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\move(254.4,207.511,246.933,99.422,27,1593)}玛戈?
Dialogue: 0,0:15:26.26,0:15:28.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\move(198.4,209.644,196.8,196.844,30,730)}你不开心吗?
Dialogue: 0,0:15:29.23,0:15:34.40,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(203.467,162)}从什么时候开始你在学校不发消息给我了? 哈哈
Dialogue: 0,0:15:34.60,0:15:35.86,Default,,0,0,0,,大卫 你在听吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}David, you with us?{\r}
Dialogue: 0,0:15:36.12,0:15:37.43,Default,,0,0,0,,是的 抱歉\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah. Sorry.{\r}
Dialogue: 0,0:15:37.47,0:15:38.37,Default,,0,0,0,,我在听\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm here.{\r}
Dialogue: 0,0:15:38.52,0:15:41.04,Default,,0,0,0,,你现在有贝林顿系统的综合报告了吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you have the integration report on the Bellington system?{\r}
Dialogue: 0,0:15:41.19,0:15:44.17,Default,,0,0,0,,呃 工程部还在做检测\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, Engineering is still running tests{\r}
Dialogue: 0,0:15:44.19,0:15:46.39,Default,,0,0,0,,但是 我应该能在周一的时候整理出来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but uh, I should be able to integrate by Monday.{\r}
Dialogue: 0,0:15:46.41,0:15:48.03,Default,,0,0,0,,给他们点压力 听见没\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Put some pressure on 'em, all right?{\r}
Dialogue: 0,0:15:48.98,0:15:50.26,Default,,0,0,0,,好的 施压\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, pressure.{\r}
Dialogue: 0,0:15:50.63,0:15:52.77,Default,,0,0,0,,好了 大伙们 有什么需要补充的吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, team, anything we forgot?{\r}
Dialogue: 0,0:15:52.83,0:15:54.87,Default,,0,0,0,,-我觉得没有了  -好的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- I think that's it. - All right.{\r}
Dialogue: 0,0:15:55.17,0:15:56.75,Default,,0,0,0,,-好好度过周末吧  -谢谢\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Have a good weekend. - Thank you.{\r}
Dialogue: 0,0:15:56.78,0:15:58.05,Default,,0,0,0,,好的 回见\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right, see ya.{\r}
Dialogue: 0,0:16:15.90,0:16:19.13,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(140.8,173.022)}为什么把笔记本留在家里?
Dialogue: 0,0:16:28.45,0:16:29.89,Default,,0,0,0,,嘿 这是玛戈的电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, you've reached Margot's phone.{\r}
Dialogue: 0,0:16:29.92,0:16:31.47,Default,,0,0,0,,给我留言或是发短信吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Leave me a message or text me back.{\r}
Dialogue: 0,0:16:32.85,0:16:34.73,Default,,0,0,0,,嘿 玛戈 还是爸爸\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, Margot, Dad again.{\r}
Dialogue: 0,0:16:34.83,0:16:38.20,Default,,0,0,0,,我不确定你有没有听我的留言 但是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm not sure if you've been checking your messages, but um,{\r}
Dialogue: 0,0:16:38.23,0:16:40.02,Default,,0,0,0,,我现在有点...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm starting to get a little...{\r}
Dialogue: 0,0:16:40.09,0:16:42.62,Default,,0,0,0,,你为什么把笔记本放在家里了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why did you leave your laptop at home?{\r}
Dialogue: 0,0:16:44.73,0:16:47.98,Default,,0,0,0,,现在是三点半 你已经放学一个小时了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, uh, it is 3:30, one hour after school ended{\r}
Dialogue: 0,0:16:48.01,0:16:50.13,Default,,0,0,0,,今天是周五 五月十二号\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}on Friday, May 12th...{\r}
Dialogue: 0,0:16:53.27,0:16:55.89,Default,,0,0,0,,算了 没关系 今天是周五\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Duh, okay. It's Friday.{\r}
Dialogue: 0,0:16:56.44,0:16:58.52,Default,,0,0,0,,我知道你在哪儿 没事了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know where you are. All right.{\r}
Dialogue: 0,0:16:59.34,0:17:01.45,Default,,0,0,0,,别理会我这条留言了 我爱你 拜拜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ignore this message. I love you. Bye.{\r}
Dialogue: 0,0:17:01.66,0:17:03.63,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs13\pos(288,78.089)}通话结束
Dialogue: 0,0:17:06.76,0:17:07.67,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(155.2,69.556)\c&H000000&}谷歌邮箱
Dialogue: 0,0:17:10.80,0:17:11.96,Default,,0,0,0,,{\an8\pos(105.6,44.667)}{\c&H000000&\fn方正黑体_GBK\fs10}钢琴
Dialogue: 0,0:17:17.03,0:17:19.20,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(121.6,74.533)\c&H000000&}钢琴老师联系方式
Dialogue: 0,0:17:19.57,0:17:22.00,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(103.867,44.134)}潘蜜拉·金
Dialogue: 0,0:17:19.57,0:17:22.00,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(152.267,109.556)\b0}钢琴老师联系方式 告诉你一下 嘻嘻
Dialogue: 0,0:17:22.16,0:17:26.00,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H0000FF&\move(189.2,146,189.2,26.533,767,3797)}钢琴课 老师 瓦托利·沙希尼安 世界级钢琴家
Dialogue: 0,0:17:26.16,0:17:27.70,Default,,0,0,0,,{\an8\fn印品雅圆体\fs10\pos(195.2,91.422)}电话
Dialogue: 0,0:17:27.86,0:17:30.83,Default,,0,0,0,,{\fn等线\an8\pos(253.334,165.556)\b0\i0}半小时60美元\N一小时100美元
Dialogue: 0,0:17:32.09,0:17:35.14,Default,,0,0,0,,{\fn方正黑体_GBK\an8\fs16\pos(157.066,99.956)}拨号中
Dialogue: 0,0:17:35.80,0:17:36.91,Default,,0,0,0,,你好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hello?{\r}
Dialogue: 0,0:17:36.98,0:17:38.43,Default,,0,0,0,,你好 是沙希尼安女士吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, uh, Mrs. Shahinian?{\r}
Dialogue: 0,0:17:38.45,0:17:39.17,Default,,0,0,0,,是的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:17:39.20,0:17:41.63,Default,,0,0,0,,我是大卫·金 玛戈的爸爸\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is David Kim, Margot's father.{\r}
Dialogue: 0,0:17:41.66,0:17:44.46,Default,,0,0,0,,好的 我现在正在上课 我可以下课后打给你吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes, I'm in the middle of a lesson. May I call you back afterwards?{\r}
Dialogue: 0,0:17:44.53,0:17:46.67,Default,,0,0,0,,好吧 不行 我就耽误你几秒钟\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Right, no, this is just, take a second...{\r}
Dialogue: 0,0:17:46.70,0:17:49.86,Default,,0,0,0,,你可以让我女儿接一下电话吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Can you put my daughter on the phone just for a second?{\r}
Dialogue: 0,0:17:49.99,0:17:52.74,Default,,0,0,0,,对不起 金先生 我不明白你为什么要打电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry, Mr. Kim, I'm confused what you're calling about.{\r}
Dialogue: 0,0:17:52.81,0:17:57.03,Default,,0,0,0,,我..我的女儿 玛戈·金现在在和你上课吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}M-My daughter, Margot Kim is in a lesson with you right now?{\r}
Dialogue: 0,0:17:58.81,0:18:02.33,Default,,0,0,0,,玛戈·金在六个月前就把她的课取消了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot Kim canceled her classes six months ago.{\r}
Dialogue: 0,0:18:04.57,0:18:05.68,Default,,0,0,0,,什么..\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What...?{\r}
Dialogue: 0,0:18:06.63,0:18:08.94,Default,,0,0,0,,她是想重新上课吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Is she looking to restart lessons?{\r}
Dialogue: 0,0:18:11.24,0:18:12.74,Default,,0,0,0,,等一下 这...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hold on, that...{\r}
Dialogue: 0,0:18:12.84,0:18:15.47,Default,,0,0,0,,这不可能啊 她最爱钢琴了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}doesn't make any sense. She loves piano.{\r}
Dialogue: 0,0:18:18.23,0:18:20.06,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\pos(199.6,206.622)}钢琴课上得怎么样
Dialogue: 0,0:18:19.86,0:18:22.70,Default,,0,0,0,,金先生 一切还好吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mr. Kim, is everything okay?{\r}
Dialogue: 0,0:18:21.40,0:18:27.64,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\pos(94.8,161.777)}上的很好
Dialogue: 0,0:18:23.40,0:18:24.85,Default,,0,0,0,,是的 呃...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes, um...{\r}
Dialogue: 0,0:18:24.91,0:18:25.85,Default,,0,0,0,,一切都好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}everything's fine.{\r}
Dialogue: 0,0:18:25.92,0:18:27.89,Default,,0,0,0,,谢谢 谢谢你 沙希尼安女士\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Thank you. Thank you, Mrs. Shahinian.{\r}
Dialogue: 0,0:18:34.87,0:18:36.94,Default,,0,0,0,,{\fn方正黑体_GBK\c&H000000&\pos(287.467,143.067)}埃弗克里克中学
Dialogue: 0,0:18:46.00,0:18:49.10,Default,,0,0,0,,{\fn方正黑体_GBK\pos(134.933,166.533)\c&H000000&}她今天没去上课
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H7DC001&\pos(121.067,17.911)}不 我没有
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H7DC001&\pos(106.133,39.956)}怎么了
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\pos(188.267,61.289)}{\fs10\c&H979595&}我也没有她的消息
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H979595&\pos(94.399,82.621)}她手机关机了 而且一个小时前就下课了
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H979595&\pos(166.4,105.378)}我知道了 她今天还有钢琴课
Dialogue: 0,0:18:49.24,0:18:52.20,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H7DC001&\pos(200,131.689)}哇哦 忘了个精光 哈哈
Dialogue: 0,0:18:50.76,0:18:52.10,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(75.733,213.2)}我该报警吗?
Dialogue: 0,0:18:52.26,0:18:54.13,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H7DC001&\pos(140.4,215.422)}是吗 奇怪了
Dialogue: 0,0:18:54.43,0:18:55.66,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(96,171.245)}我要报警了
Dialogue: 0,0:18:55.83,0:18:58.76,Default,,0,0,0,,{\fn方正黑体_GBK\an8\fs16\c&H7DC001&\pos(259.2,117.911)}她以前没翘过课吧?
Dialogue: 0,0:18:59.43,0:19:00.07,Default,,0,0,0,,{\fn方正黑体_GBK\an8\pos(70.4,179.067)\c&H000000&}没有
Dialogue: 0,0:19:01.90,0:19:02.90,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(95.467,214.622)}你有一种不祥的预感吗?
Dialogue: 0,0:19:03.06,0:19:04.80,Default,,0,0,0,,{\fn方正黑体_GBK\an8\fs10\c&H7DC001&\pos(93.867,191.867)}记不记得我曾经自驾到洛杉矶
Dialogue: 0,0:19:04.90,0:19:07.04,Default,,0,0,0,,{\fn方正黑体_GBK\an8\fs10\c&H7DC001&\pos(209.6,208.223)}去看飞鳍冰球队打决胜场?
Dialogue: 0,0:19:07.03,0:19:09.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(100.267,222.445)}飞鳍冰球队和这事儿有什么关系
Dialogue: 0,0:19:10.96,0:19:12.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(171.733,212.489)}我没告诉爸妈
Dialogue: 0,0:19:12.60,0:19:14.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(143.466,213.2)}他们气得发疯
Dialogue: 0,0:19:14.50,0:19:15.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(226.666,210.356)}我"失踪"了大约24个小时
Dialogue: 0,0:19:16.10,0:19:17.46,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(64,225.289)}但那是在暑假
Dialogue: 0,0:19:19.36,0:19:21.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(184.533,213.912)}下周不就放暑假了吗?
Dialogue: 0,0:19:21.43,0:19:22.27,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(58.667,226.711)}你想说什么?
Dialogue: 0,0:19:23.96,0:19:25.63,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(218.133,209.645)}也许她正在外边鬼混呢...
Dialogue: 0,0:19:25.80,0:19:27.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(219.733,210.356)}你联系过她的朋友了吗
Dialogue: 0,0:19:28.16,0:19:29.76,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(131.2,177.645)}我不认识任何她的
Dialogue: 0,0:19:30.76,0:19:32.43,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(89.6,179.778)}自从
Dialogue: 0,0:19:34.93,0:19:37.33,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(161.067,101.556)}圣何塞市 玛戈·金的社交媒体
Dialogue: 0,0:19:37.66,0:19:40.00,Default,,0,0,0,,{\an8\pos(168.667,71.155)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}玛戈·金                                                图享账号
Dialogue: 0,0:19:40.30,0:19:41.44,Default,,0,0,0,,{\an8\pos(188.266,184.045)}{\c&H000000&\fn方正黑体_GBK\fs14}私密账号
Dialogue: 0,0:19:40.30,0:19:41.44,Default,,0,0,0,,{\an8\pos(190.4,208.223)}{\c&H000000&\fn方正黑体_GBK\fs14}已经关注她了? 登录以查看照片和视频
Dialogue: 0,0:19:45.50,0:19:46.96,Default,,0,0,0,,{\an8\pos(142.533,99.599)}{\c&HF52808&&\s0\fn方正黑体_GBK\fs12}玛戈·金                                                     推特账号
Dialogue: 0,0:19:47.33,0:19:49.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\c&H979595&\pos(197.734,103.512)}此账户的推文设有查看权限
Dialogue: 0,0:19:50.83,0:19:52.36,Default,,0,0,0,,{\an8\pos(117.466,157.199)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}玛戈·金            脸书账号
Dialogue: 0,0:19:52.60,0:19:54.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\pos(170.8,146.178)}玛戈·金
Dialogue: 0,0:19:54.46,0:19:57.00,Default,,0,0,0,,{\fn方正黑体_GBK\an8\c&H000000&\pos(92.8,134.8)}私人账号
Dialogue: 0,0:19:58.66,0:20:02.36,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs16\c&H000000&\pos(102,215.866)}她从没给过我她朋友们的电话
Dialogue: 0,0:20:05.36,0:20:07.96,Default,,0,0,0,,{\fn方正黑体_GBK\an8\fs10\c&H7DC001&\move(89.2,211.245,89.2,197.378,30,97)}那如果你都不认识她的朋友们
Dialogue: 0,0:20:08.13,0:20:11.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H7DC001&\pos(118.666,213.733)}谁还认识呢?
Dialogue: 0,0:20:11.16,0:20:14.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs30\c&H7DC001&\pos(326.266,152.933)}谁还认识呢?
Dialogue: 0,0:20:15.10,0:20:17.06,Default,,0,0,0,,{\fad(133,000)\an8\fn方正黑体_GBK\fs28\pos(218,47.867)}潘姆
Dialogue: 0,0:20:28.84,0:20:33.23,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs14\pos(192.4,134.266)}警告
Dialogue: 0,0:20:28.84,0:20:33.23,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs14\pos(227.2,186.533)}您已经694天没有运行诺顿杀毒软件
Dialogue: 0,0:20:37.43,0:20:38.43,Default,,0,0,0,,{\an8\fn宋体\fs9\pos(62.4,78.8)}通讯簿
Dialogue: 0,0:20:40.90,0:20:42.73,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs12\move(262.4,59.067,262.8,44.134,23,1823)}潘姆的联系人
Dialogue: 0,0:20:44.10,0:20:45.30,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs14\pos(253.6,214.8)}桑伍德中学
Dialogue: 0,0:20:49.26,0:20:50.26,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(141.6,113.466)}阿丽·阿卜杜尔
Dialogue: 0,0:20:50.43,0:20:51.40,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs7\pos(293.2,108.134)}备注 四年级学习搭档 对贝类过敏 妈宝
Dialogue: 0,0:20:53.96,0:20:54.96,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(192.8,108.133)}罗比·阿博特
Dialogue: 0,0:20:55.13,0:20:57.70,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(302,105.467)}备注 父母之一在蹲局子 离异家庭 暗恋玛戈
Dialogue: 0,0:20:58.26,0:20:59.26,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(245.6,108.133)}希瓦伊·艾索拉
Dialogue: 0,0:20:59.43,0:21:00.93,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(308,104.934)}备注 一起拼车的同学 会吹单簧管 比玛戈大一岁
Dialogue: 0,0:21:01.30,0:21:02.30,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs6\pos(302.4,107.066)}艾萨克·布兰肯斯密斯
Dialogue: 0,0:21:03.93,0:21:06.54,Default,,0,0,0,,{\an8\c&H000000&\fn宋体\fs14\pos(158.4,82.534)}备注 玛戈成长过程中最好的朋友
Dialogue: 0,0:21:11.61,0:21:14.43,Default,,0,0,0,,快接啊 快接啊 快接啊\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pick up, pick up, pick up...{\r}
Dialogue: 0,0:21:15.86,0:21:16.71,Default,,0,0,0,,你好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hello?{\r}
Dialogue: 0,0:21:16.73,0:21:19.22,Default,,0,0,0,,嗨 你好 我是大卫·金 我是玛戈的...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, um, I'm David Kim, I'm Margot Kim's...{\r}
Dialogue: 0,0:21:19.25,0:21:21.60,Default,,0,0,0,,潘姆的丈夫 哦 我当然记得你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pam's husband, oh, of course I remember.{\r}
Dialogue: 0,0:21:21.64,0:21:23.13,Default,,0,0,0,,你最近怎么样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How are you doing?{\r}
Dialogue: 0,0:21:23.15,0:21:24.58,Default,,0,0,0,,我很好 我很好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm good, I'm good.{\r}
Dialogue: 0,0:21:24.65,0:21:27.19,Default,,0,0,0,,是这样 我打给你是因为...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Listen, the reason I'm calling is that um...{\r}
Dialogue: 0,0:21:27.39,0:21:29.03,Default,,0,0,0,,我一直无法联系上玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I haven't been able to reach Margot{\r}
Dialogue: 0,0:21:29.07,0:21:30.73,Default,,0,0,0,,已经有一阵子了 我觉得她的手机没电了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for a little bit and I'm sure her phone is dead{\r}
Dialogue: 0,0:21:30.75,0:21:33.00,Default,,0,0,0,,我在想我能不能和艾萨克说一下然后...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but I was just wondering if I could speak to Isaac and see...{\r}
Dialogue: 0,0:21:33.03,0:21:35.77,Default,,0,0,0,,那看来这就是接待处的问题了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Well, it's gotta be more of a reception problem, right?{\r}
Dialogue: 0,0:21:36.33,0:21:38.11,Default,,0,0,0,,呃 你说的什么意思\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, what do you mean?{\r}
Dialogue: 0,0:21:38.14,0:21:39.91,Default,,0,0,0,,你知道啊 如果他们在山上...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, if they're on the mountains...{\r}
Dialogue: 0,0:21:40.66,0:21:42.35,Default,,0,0,0,,不好意思 什..什么山\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sorry, w-what mountains?{\r}
Dialogue: 0,0:21:42.70,0:21:46.09,Default,,0,0,0,,野营 艾萨克在和他的朋友野营\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Camping. Isaac is camping with his friends.{\r}
Dialogue: 0,0:21:46.33,0:21:48.03,Default,,0,0,0,,玛戈绝对被邀请了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot was definitely invited.{\r}
Dialogue: 0,0:21:48.58,0:21:49.97,Default,,0,0,0,,是吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She was?{\r}
Dialogue: 0,0:21:49.99,0:21:52.28,Default,,0,0,0,,她肯定也去了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm pretty positive she's there, too.{\r}
Dialogue: 0,0:21:52.30,0:21:54.87,Default,,0,0,0,,她没有...告诉你吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did she... not tell you?{\r}
Dialogue: 0,0:21:55.32,0:21:59.11,Default,,0,0,0,,呃...她说过 我...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Shh...she did. I'm uh...{\r}
Dialogue: 0,0:21:59.45,0:22:00.56,Default,,0,0,0,,我现在在翻看她发的信息\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, I'm looking at her texts now.{\r}
Dialogue: 0,0:22:00.58,0:22:03.01,Default,,0,0,0,,她没提要去山里 所以我不太清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She didn't mention mountains, that's why, yeah.{\r}
Dialogue: 0,0:22:03.03,0:22:04.87,Default,,0,0,0,,好吧 他们已经计划了一段时间了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, they've been planning this for a while.{\r}
Dialogue: 0,0:22:04.89,0:22:06.05,Default,,0,0,0,,我真不敢相信她居然不…\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I can't imagine she just couldn't...{\r}
Dialogue: 0,0:22:06.07,0:22:07.42,Default,,0,0,0,,你知道他们什么时候出发的吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you happen to know when they left?{\r}
Dialogue: 0,0:22:07.44,0:22:09.27,Default,,0,0,0,,我之所以要问是因为\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The reason I'm asking is that{\r}
Dialogue: 0,0:22:09.34,0:22:11.22,Default,,0,0,0,,学校那边说她今天缺席\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}school has her marked as absent today.{\r}
Dialogue: 0,0:22:11.25,0:22:12.70,Default,,0,0,0,,他们都逃学了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did they all ditch school?{\r}
Dialogue: 0,0:22:12.73,0:22:14.80,Default,,0,0,0,,如果他们敢这么做 你猜怎么着\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'll tell you something, if that's what they did,{\r}
Dialogue: 0,0:22:14.82,0:22:16.43,Default,,0,0,0,,艾萨克有大麻烦了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Isaac is in big trouble!{\r}
Dialogue: 0,0:22:17.70,0:22:20.39,Default,,0,0,0,,但是他们真的逃课了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's-that's definitely what happened.{\r}
Dialogue: 0,0:22:20.58,0:22:22.01,Default,,0,0,0,,-好吧 这可真是...  -我能告诉你的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Okay, this is... - Tell you what,{\r}
Dialogue: 0,0:22:22.07,0:22:24.34,Default,,0,0,0,,他们计划明早回来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}They're planning on heading back tomorrow morning, anyway.{\r}
Dialogue: 0,0:22:24.36,0:22:26.56,Default,,0,0,0,,他们一到接待处 我就立马让艾萨克\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Once they get reception, I will let Isaac know{\r}
Dialogue: 0,0:22:26.58,0:22:27.93,Default,,0,0,0,,叫玛戈给你回电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to have Margot give you a call.{\r}
Dialogue: 0,0:22:27.95,0:22:29.31,Default,,0,0,0,,那就太好了 谢谢你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Perfect, that is perfect. Thank you.{\r}
Dialogue: 0,0:22:29.43,0:22:30.94,Default,,0,0,0,,你们两个都还好吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Is everything okay with you two?{\r}
Dialogue: 0,0:22:30.97,0:22:31.87,Default,,0,0,0,,什么意思?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What do you mean?{\r}
Dialogue: 0,0:22:31.89,0:22:34.39,Default,,0,0,0,,呃 很久没有跟你说话了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Well, I just haven't spoken to you since...{\r}
Dialogue: 0,0:22:34.41,0:22:35.66,Default,,0,0,0,,自从潘姆...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Pam's, uh...{\r}
Dialogue: 0,0:22:35.76,0:22:37.75,Default,,0,0,0,,噢 噢 谢了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, oh, thank you.{\r}
Dialogue: 0,0:22:37.77,0:22:38.96,Default,,0,0,0,,一切都很好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Everything is great.{\r}
Dialogue: 0,0:22:39.00,0:22:40.94,Default,,0,0,0,,玛戈和我都很好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot and I are great.{\r}
Dialogue: 0,0:22:41.50,0:22:43.50,Default,,0,0,0,,{\an8\pos(89.6,181.2)}{\an8\fn方正黑体_GBK\fs28\c&H000000&}你xxxxx逗我玩呢?
Dialogue: 0,0:22:43.65,0:22:54.10,Default,,0,0,0,,{\an8\c&H0091EC&\fn方正黑体_GBK\fs10\pos(334.8,109.734)}你把钱拿去干嘛了?\N你以为我的钱\N你能大手大脚地拿去花?\N你又没有工作\N从我这每周拿100美元\N只要你能想出法子花钱\N你撒谎就那么心安理得?\N难道我没有教过你\N不能乱花钱以及要尊重他人吗\N你以为可以随便逃课不告诉我\N不告诉我你通宵去野营?\N可以把这个家当成一个旅馆\N想住就住想走就走?\N无论如何\N在山上剩下的时间好好玩吧\N因为这个夏天不会再让你出门了\N早上见
Dialogue: 0,0:22:54.40,0:22:57.30,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs28\pos(188.4,155.066)}早上!
Dialogue: 0,0:22:57.30,0:22:58.47,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs28\pos(188.4,155.066)}早上
Dialogue: 0,0:22:58.50,0:23:01.34,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs28\pos(188.4,155.066)}早上。
Dialogue: 0,0:23:06.60,0:23:08.74,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(75.2,198)}和艾萨克的妈妈联系了
Dialogue: 0,0:23:10.47,0:23:12.37,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(65.6,196.4)}到了接待处打给我
Dialogue: 0,0:23:26.00,0:23:27.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\c&H000000&\pos(370,4.666)}来电
Dialogue: 0,0:23:28.35,0:23:29.44,Default,,0,0,0,,你好?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hello?{\r}
Dialogue: 0,0:23:29.57,0:23:30.82,Default,,0,0,0,,嘿 金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, Mr. Kim?{\r}
Dialogue: 0,0:23:30.96,0:23:32.41,Default,,0,0,0,,我是艾萨克 我妈妈说...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is Isaac. My mom told me to...{\r}
Dialogue: 0,0:23:32.44,0:23:34.18,Default,,0,0,0,,艾萨克 嗨\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Isaac! Yes, hi.{\r}
Dialogue: 0,0:23:34.25,0:23:35.70,Default,,0,0,0,,很抱歉让你这么早打给我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sorry to have you call me so early.{\r}
Dialogue: 0,0:23:35.72,0:23:36.68,Default,,0,0,0,,没事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's okay.{\r}
Dialogue: 0,0:23:36.71,0:23:38.90,Default,,0,0,0,,我只是想说我很抱歉没帮上您\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Just wanna say I'm sorry I couldn't be of more help.{\r}
Dialogue: 0,0:23:39.04,0:23:41.99,Default,,0,0,0,,噢 让我女儿接电话 好吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, can you put my daughter on the phone, please?{\r}
Dialogue: 0,0:23:43.20,0:23:44.92,Default,,0,0,0,,我妈妈没有告诉您吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did my mom not tell you?{\r}
Dialogue: 0,0:23:45.35,0:23:46.77,Default,,0,0,0,,什么? 你什么意思?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What, what do you mean?{\r}
Dialogue: 0,0:23:48.27,0:23:50.32,Default,,0,0,0,,她没去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She never came.{\r}
Dialogue: 0,0:23:51.17,0:23:52.46,Default,,0,0,0,,什么? 你说什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What? What do you...?{\r}
Dialogue: 0,0:23:52.96,0:23:54.22,Default,,0,0,0,,艾萨克 你什么意思?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Isaac, what do you mean?{\r}
Dialogue: 0,0:23:54.25,0:23:55.33,Default,,0,0,0,,我是说 她没去露营\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I mean, she never came.{\r}
Dialogue: 0,0:23:55.36,0:23:57.08,Default,,0,0,0,,周五晚上放学后我去接她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I even reached out to her after school on Friday{\r}
Dialogue: 0,0:23:57.11,0:23:58.21,Default,,0,0,0,,当时我们所有人都在我车里集合准备启程\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}when we were all heading out{\r}
Dialogue: 0,0:23:58.24,0:23:59.70,Default,,0,0,0,,所以我想她能看到我们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}in my car so I'd know she'll see.{\r}
Dialogue: 0,0:24:00.04,0:24:01.36,Default,,0,0,0,,她说什么了?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did she say?{\r}
Dialogue: 0,0:24:03.69,0:24:06.34,Default,,0,0,0,,她没有理我们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She didn't respond.{\r}
Dialogue: 0,0:24:11.54,0:24:18.50,Default,,0,0,0,,{\fn方正黑体_GBK\fs20\c&H000000&\pos(106.4,97.733)}圣何塞失踪人口
Dialogue: 0,0:24:12.12,0:24:13.93,Default,,0,0,0,,这里是911 你的紧急情况是?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}911, what's your emergency?{\r}
Dialogue: 0,0:24:14.06,0:24:16.65,Default,,0,0,0,,嗨 我这边有可能...我...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, I'm calling about a possible... I...{\r}
Dialogue: 0,0:24:16.73,0:24:18.62,Default,,0,0,0,,我要报告一起失踪事件\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm calling to report a missing person.{\r}
Dialogue: 0,0:24:18.73,0:24:20.14,Default,,0,0,0,,好的 谁失踪了?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, who is this regarding?{\r}
Dialogue: 0,0:24:18.90,0:24:22.80,Default,,0,0,0,,{\an8\pos(86.4,101.334)}{\c&HF52808&\s0\fn方正黑体_GBK\fs10}圣何塞失踪人口报告
Dialogue: 0,0:24:18.90,0:24:22.80,Default,,0,0,0,,{\an8\pos(99.067,140.488)}{\c&HF52808&\s0\fn方正黑体_GBK\fs10}国家失踪及不明身份人员系统
Dialogue: 0,0:24:20.18,0:24:21.43,Default,,0,0,0,,呃 我女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, my daughter.{\r}
Dialogue: 0,0:24:21.49,0:24:23.50,Default,,0,0,0,,早知道我应该早点报警的 我还以为...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know I should've called sooner. I just thought that...{\r}
Dialogue: 0,0:24:23.53,0:24:24.78,Default,,0,0,0,,-没关系 先生  -嗯\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- That's okay, sir. - Yeah.{\r}
Dialogue: 0,0:24:24.76,0:24:26.80,Default,,0,0,0,,{\an8\fn宋体\b1\i1\c&H8F430B&\fs16\pos(283.2,75.6)}失踪人口数据库
Dialogue: 0,0:24:24.85,0:24:26.77,Default,,0,0,0,,首先我们要提交一个报告\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The first thing we need to do is file a report.{\r}
Dialogue: 0,0:24:26.92,0:24:29.19,Default,,0,0,0,,然后我会联络该地区的探员\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}After that, I'll put out a call to a detective in the area{\r}
Dialogue: 0,0:24:29.22,0:24:30.85,Default,,0,0,0,,他将与你联系\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}who will be in touch with you.{\r}
Dialogue: 0,0:24:30.73,0:24:33.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\move(172.8,26.534,170.8,20.667,27,2960)}州案例分类目录
Dialogue: 0,0:24:31.07,0:24:32.04,Default,,0,0,0,,好吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right.{\r}
Dialogue: 0,0:24:32.57,0:24:33.97,Default,,0,0,0,,现在 她的名字是什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Now let's start with her name.{\r}
Dialogue: 0,0:24:33.86,0:24:38.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\c&H000000&\pos(251.6,66)}加利福尼亚州
Dialogue: 0,0:24:34.00,0:24:38.34,Default,,0,0,0,,呃 玛戈·金 王字旁的玛 干戈的戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, Margot Kim, Ma- M-A-R-G-O-T.{\r}
Dialogue: 0,0:24:38.46,0:24:39.85,Default,,0,0,0,,金 金色的金\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Kim, K-I-M.{\r}
Dialogue: 0,0:24:38.50,0:24:44.94,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\move(98.4,106.533,76.8,125.733,23,6423)}未结案率\N\N已结案率
Dialogue: 0,0:24:45.04,0:24:46.67,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&}来电
Dialogue: 0,0:24:47.66,0:24:49.69,Default,,0,0,0,,嗨 是大卫·金吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, is this David Kim?{\r}
Dialogue: 0,0:24:50.00,0:24:52.42,Default,,0,0,0,,是 呃 我是大卫·金 你应该...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes. Uh, this is David Kim. I'm assuming this is...{\r}
Dialogue: 0,0:24:52.44,0:24:55.25,Default,,0,0,0,,早上好 金先生 我是罗丝玛莉·维克\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good morning, Mr. Kim. My name is Rosemary Vick.{\r}
Dialogue: 0,0:24:55.27,0:24:57.83,Default,,0,0,0,,我被派来处理你女儿的案子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm the detective sergeant assigned to your daughter's case.{\r}
Dialogue: 0,0:24:57.89,0:24:59.88,Default,,0,0,0,,嗯 早上好 我一直在等你的电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, good morning. I've been waiting for your call.{\r}
Dialogue: 0,0:24:59.90,0:25:02.18,Default,,0,0,0,,当然 我们的工作就是尽可能的快\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Of course. We're working as fast as we can.{\r}
Dialogue: 0,0:25:02.45,0:25:04.98,Default,,0,0,0,,目前我距离你家三十五分钟的路程\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm currently 35 minutes away from your house.{\r}
Dialogue: 0,0:25:05.06,0:25:06.35,Default,,0,0,0,,在我赶过去这段时间\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But while I have you,{\r}
Dialogue: 0,0:25:06.46,0:25:08.76,Default,,0,0,0,,你愿意给我讲讲你掌握的线索吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}do you feel comfortable telling me what you know?{\r}
Dialogue: 0,0:25:08.92,0:25:10.89,Default,,0,0,0,,我一个小时前刚刚给电话里的人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just told every detail I know{\r}
Dialogue: 0,0:25:10.91,0:25:12.77,Default,,0,0,0,,讲了我知道的每一个细节\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to whoever I got off the phone with an hour ago.{\r}
Dialogue: 0,0:25:12.79,0:25:13.80,Default,,0,0,0,,真不知道你们这些人在干什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I don't know what you guys are doing.{\r}
Dialogue: 0,0:25:13.82,0:25:15.60,Default,,0,0,0,,我向你保证 金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I promise you, Mr. Kim,{\r}
Dialogue: 0,0:25:15.64,0:25:17.53,Default,,0,0,0,,我们非常重视这件事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we are taking this very seriously.{\r}
Dialogue: 0,0:25:17.57,0:25:19.83,Default,,0,0,0,,我也是一个母亲 我完全理解\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And as a parent myself, I can only imagine{\r}
Dialogue: 0,0:25:19.86,0:25:21.32,Default,,0,0,0,,你的感受\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}what you must be feeling.{\r}
Dialogue: 0,0:25:21.42,0:25:22.34,Default,,0,0,0,,但是站在帮助你的立场上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But for me to help you,{\r}
Dialogue: 0,0:25:22.36,0:25:25.17,Default,,0,0,0,,我必须知道所有的事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I do need to know how everything unfolded{\r}
Dialogue: 0,0:25:25.25,0:25:26.67,Default,,0,0,0,,从你的视角是怎样的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}from your eyes.{\r}
Dialogue: 0,0:25:27.51,0:25:28.74,Default,,0,0,0,,明白了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Understood,{\r}
Dialogue: 0,0:25:28.90,0:25:31.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(124,115.067)}警探罗丝玛莉·维克
Dialogue: 0,0:25:29.67,0:25:30.81,Default,,0,0,0,,警探\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}detective.{\r}
Dialogue: 0,0:25:32.13,0:25:33.44,Default,,0,0,0,,{\an8\pos(107.467,90.888)}{\c&HF52808&\s0\fn方正黑体_GBK\fs10}杰出警务奖获得者罗丝玛莉·维克
Dialogue: 0,0:25:32.13,0:25:33.44,Default,,0,0,0,,{\an8\pos(97.067,135.688)}{\c&HF52808&\s0\fn方正黑体_GBK\fs10}罗丝玛莉·维克的脸书主页
Dialogue: 0,0:25:32.13,0:25:33.44,Default,,0,0,0,,{\an8\pos(97.067,169.822)}{\c&HF52808&\s0\fn方正黑体_GBK\fs10}警探-国家公仆 硅谷先驱报
Dialogue: 0,0:25:35.08,0:25:37.33,Default,,0,0,0,,好的 你来听听我说的对不对\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, let's see if I got this right.{\r}
Dialogue: 0,0:25:39.07,0:25:41.23,Default,,0,0,0,,一 一次学习小组学习后\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}One: after a group study session,{\r}
Dialogue: 0,0:25:39.87,0:25:44.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs6\c&H000000&\pos(138.4,205.733)}杰出警务奖获得者罗丝玛莉·维克
Dialogue: 0,0:25:41.27,0:25:44.74,Default,,0,0,0,,玛戈还有她的车在星期四晚上都失踪了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot, with her car, didn't return home Thursday evening.{\r}
Dialogue: 0,0:25:46.76,0:25:47.80,Default,,0,0,0,,二\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Two:{\r}
Dialogue: 0,0:25:47.87,0:25:50.39,Default,,0,0,0,,她在午夜十一点打过三次电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she called three times at 11:00 p.m.{\r}
Dialogue: 0,0:25:48.70,0:25:52.97,Default,,0,0,0,,{\an8\fn微软雅黑\pos(105.6,31.334)}脸书
Dialogue: 0,0:25:52.58,0:25:53.53,Default,,0,0,0,,三\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Three:{\r}
Dialogue: 0,0:25:53.55,0:25:55.69,Default,,0,0,0,,星期五她没有上学\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she didn't attend school on Friday.{\r}
Dialogue: 0,0:25:56.62,0:25:57.66,Default,,0,0,0,,四\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And four:{\r}
Dialogue: 0,0:25:57.69,0:25:59.39,Default,,0,0,0,,她已经六个月\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she's been skipping piano classes{\r}
Dialogue: 0,0:25:57.87,0:26:01.47,Default,,0,0,0,,{\an8\c&H000000&\fn楷体\fs16\pos(131.6,59.599)\b1}警探——国家公仆
Dialogue: 0,0:25:57.87,0:26:01.47,Default,,0,0,0,,{\an8\c&H000000&\fn楷体\fs10\pos(163.2,97.999)}警探罗丝玛莉·维克同前科犯一起建造康复诊所
Dialogue: 0,0:25:59.41,0:26:00.91,Default,,0,0,0,,都没去上钢琴课了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for the last six months.{\r}
Dialogue: 0,0:26:01.34,0:26:02.44,Default,,0,0,0,,这些都正确吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Was all of that correct?{\r}
Dialogue: 0,0:26:02.49,0:26:03.38,Default,,0,0,0,,对\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:26:03.43,0:26:05.05,Default,,0,0,0,,好的 金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay. Mr. Kim,{\r}
Dialogue: 0,0:26:05.12,0:26:07.36,Default,,0,0,0,,我会挖掘出你女儿失踪的真相的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am going to find out what happened to your daughter.{\r}
Dialogue: 0,0:26:07.66,0:26:10.13,Default,,0,0,0,,但我需要知道更多关于她的资讯 好吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But I'll need to know a lot more about her, okay?{\r}
Dialogue: 0,0:26:10.22,0:26:11.58,Default,,0,0,0,,好 好 嗯\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes, yes, uh...{\r}
Dialogue: 0,0:26:11.62,0:26:14.47,Default,,0,0,0,,你要我帮你什么?  我可以去和邻居问一问\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What do you want me to do? I-I-I'll go talk to neighbors,{\r}
Dialogue: 0,0:26:14.49,0:26:16.66,Default,,0,0,0,,我们会负责询问 金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We'll handle the ground investigation, Mr. Kim.{\r}
Dialogue: 0,0:26:16.68,0:26:17.75,Default,,0,0,0,,这是我们的工作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's our job.{\r}
Dialogue: 0,0:26:18.01,0:26:19.92,Default,,0,0,0,,作为家长能帮到忙的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But if there's something a parent can do,{\r}
Dialogue: 0,0:26:19.98,0:26:23.03,Default,,0,0,0,,就是告诉我们你所了解的女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}it's shedding light for us on who your daughter is{\r}
Dialogue: 0,0:26:23.29,0:26:24.93,Default,,0,0,0,,还有她所接触的人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and the people she talks to.{\r}
Dialogue: 0,0:26:29.86,0:26:31.62,Default,,0,0,0,,你能帮助我们吧?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Is that something you can help us with?{\r}
Dialogue: 0,0:26:33.30,0:26:34.28,Default,,0,0,0,,可以\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:26:37.02,0:26:38.59,Default,,0,0,0,,我可以做到\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I can help with that.{\r}
Dialogue: 0,0:27:04.87,0:27:07.44,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs8\pos(340.4,13.733)}关闭通知
Dialogue: 0,0:27:17.44,0:27:22.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HEFB998&\pos(246.4,141.2)}忘记密码
Dialogue: 0,0:27:24.33,0:27:25.87,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs8\c&H000000&\pos(202,120.934)}我们将把验证码发送到以下邮箱
Dialogue: 0,0:27:28.26,0:27:28.90,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\c&H000000&\pos(132.8,41.467)}谷歌邮箱
Dialogue: 0,0:27:32.50,0:27:33.76,Default,,0,0,0,,{\an8\c&HFD8941&\fn方正黑体_GBK\fs10\pos(179.2,190.799)}找回密码
Dialogue: 0,0:27:36.80,0:27:38.46,Default,,0,0,0,,{\an8\c&HFD8941&\fn方正黑体_GBK\fs12\pos(192.4,191.867)}换一个问题
Dialogue: 0,0:27:40.30,0:27:45.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(195.6,109.734)}重置邮箱-谷歌将发送一次性验证码到以下邮箱
Dialogue: 0,0:27:45.36,0:27:46.46,Default,,0,0,0,,{\fn方正黑体_GBK\fs8\pos(193.2,161.733)}发送
Dialogue: 0,0:27:46.86,0:27:49.43,Default,,0,0,0,,{\fn方正黑体_GBK\fs8\c&HD3BBAA&\pos(164.8,155.867)}输入六位验证码
Dialogue: 0,0:28:19.40,0:28:20.56,Default,,0,0,0,,{\fn方正黑体_GBK\fs8\c&HD3BBAA&\pos(210.4,164.934)}创建新密码
Dialogue: 0,0:28:19.40,0:28:20.56,Default,,0,0,0,,{\fn方正黑体_GBK\fs8\c&HD3BBAA&\pos(210.4,194.267)}确认新密码
Dialogue: 0,0:28:29.94,0:28:30.83,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs9\pos(146.4,195.066)}你可以通过以下验证码重设密码
Dialogue: 0,0:28:40.73,0:28:42.86,Default,,0,0,0,,{\an8\fn方正黑体_GBK\pos(192.8,156.667)}继续
Dialogue: 0,0:28:47.13,0:28:48.19,Default,,0,0,0,,好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:28:48.42,0:28:51.62,Default,,0,0,0,,自从上次玛戈打给你已经三十六个小时了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's already been 36 hours since Margot's last call.{\r}
Dialogue: 0,0:28:49.30,0:28:50.77,Default,,0,0,0,,{\an8\c&HB15A34&\fn方正黑体_GBK\pos(145.2,91.6)}好友数量
Dialogue: 0,0:28:51.91,0:28:53.66,Default,,0,0,0,,所以我们动作要快点\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So we've gotta move a little quickly.{\r}
Dialogue: 0,0:28:55.53,0:28:57.13,Default,,0,0,0,,{\an8\c&HB15A34&\fn方正黑体_GBK\an8}乔纳·艾米-图像另存为
Dialogue: 0,0:28:56.95,0:29:00.14,Default,,0,0,0,,我们会拷贝玛戈的硬盘交给鉴证科\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We'll be taking a copy of Margot's hard drive to forensics.{\r}
Dialogue: 0,0:29:01.02,0:29:02.57,Default,,0,0,0,,在这同时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But in the meantime,{\r}
Dialogue: 0,0:29:01.06,0:29:05.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&}建立档案-照片-姓名-联系方式
Dialogue: 0,0:29:03.09,0:29:05.59,Default,,0,0,0,,任何你所知道关于她的讯息\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}any information you can give me about her{\r}
Dialogue: 0,0:29:05.68,0:29:08.74,Default,,0,0,0,,或她所熟识的人会对我们有帮助\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}or the people around her will help.{\r}
Dialogue: 0,0:29:09.03,0:29:10.06,Default,,0,0,0,,{\an8\c&HF58D5C&\fn方正黑体_GBK\an8\fs10\pos(286.4,133.2)}拨打电话
Dialogue: 0,0:29:09.03,0:29:10.06,Default,,0,0,0,,{\c&HF58D5C&\an8\fn方正黑体_GBK\fs10\pos(200.4,132.667)}视频通话
Dialogue: 0,0:29:10.98,0:29:12.63,Default,,0,0,0,,等等 你找不到玛戈吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wait, you can't find Margot?{\r}
Dialogue: 0,0:29:12.66,0:29:13.99,Default,,0,0,0,,是 嗯 我找不到\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No, uh, I can't.{\r}
Dialogue: 0,0:29:14.02,0:29:15.80,Default,,0,0,0,,你介意回答一些问题来帮助我吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you mind answering some questions for me to help?{\r}
Dialogue: 0,0:29:15.84,0:29:16.91,Default,,0,0,0,,好 没问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, sure.{\r}
Dialogue: 0,0:29:16.94,0:29:18.77,Default,,0,0,0,,好的 上次你看到她是什么时候\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, when was the last time you saw her?{\r}
Dialogue: 0,0:29:16.96,0:29:21.64,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(193.6,26.533)}建立档案-最后一次见-周二
Dialogue: 0,0:29:18.84,0:29:21.77,Default,,0,0,0,,呃 周二 她的柜子在我隔壁\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, Tuesday. Her locker's near me.{\r}
Dialogue: 0,0:29:21.76,0:29:29.20,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(193.6,29.733)}建立档案-学习小组-预修生物课
Dialogue: 0,0:29:21.84,0:29:24.21,Default,,0,0,0,,好的 礼拜四晚上 她参加了生物课的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right, on Thursday evening, she attended a study group{\r}
Dialogue: 0,0:29:24.24,0:29:25.40,Default,,0,0,0,,学习小组\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for her biology class.{\r}
Dialogue: 0,0:29:25.42,0:29:26.63,Default,,0,0,0,,你知道吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you know anything about that?{\r}
Dialogue: 0,0:29:26.70,0:29:28.24,Default,,0,0,0,,她应该是在预修生物的班 对吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's probably in AP Bio, right?{\r}
Dialogue: 0,0:29:28.27,0:29:29.86,Default,,0,0,0,,对 她是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes, she is.{\r}
Dialogue: 0,0:29:29.89,0:29:31.66,Default,,0,0,0,,嗯 我在上普通生物\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, no, I'm in regular.{\r}
Dialogue: 0,0:29:30.84,0:29:33.50,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(192,15.333)}建立档案-学习小组--不知道...普通生物课
Dialogue: 0,0:29:32.02,0:29:33.72,Default,,0,0,0,,好吧 那你周四晚上都在做些什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, what were you doing Thursday night?{\r}
Dialogue: 0,0:29:33.63,0:29:36.83,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(192,15.333)}周四晚
Dialogue: 0,0:29:33.85,0:29:37.27,Default,,0,0,0,,周四晚上 我在我爸屋里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Thursday night, I was at my dad's house.{\r}
Dialogue: 0,0:29:36.96,0:29:40.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\c&H000000&\pos(192,15.333)}在爸爸家-期末考后接放学
Dialogue: 0,0:29:37.29,0:29:39.35,Default,,0,0,0,,对 那天期末我爸来载我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, he picked me up after finals that day.{\r}
Dialogue: 0,0:29:39.38,0:29:41.13,Default,,0,0,0,,好 谢谢你 Jonah\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All right, thank you, Jonah.{\r}
Dialogue: 0,0:29:40.23,0:29:41.43,Default,,0,0,0,,{\an8\pos(226.4,121.467)\c&H595EFE&\fn方正黑体_GBK}结束通话
Dialogue: 0,0:29:42.66,0:29:44.65,Default,,0,0,0,,这些 呃 这些看起来如何\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How does uh, how does this look?{\r}
Dialogue: 0,0:29:48.97,0:29:50.00,Default,,0,0,0,,完美\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Perfect.{\r}
Dialogue: 0,0:29:50.41,0:29:52.91,Default,,0,0,0,,嘿 有什么新消息就告诉我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, update me whenever you learn something.{\r}
Dialogue: 0,0:29:52.93,0:29:54.20,Default,,0,0,0,,-不管大小事  -好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Big or small. - Okay.{\r}
Dialogue: 0,0:29:54.25,0:29:55.51,Default,,0,0,0,,你要去哪里?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where are you going?{\r}
Dialogue: 0,0:29:55.57,0:29:57.84,Default,,0,0,0,,找出剩下的人礼拜四都在干嘛\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Find out what the rest of her Thursday looked like.{\r}
Dialogue: 0,0:29:58.48,0:30:01.25,Default,,0,0,0,,哦 哦 那些表格也要分享给我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, oh, and share that with me too.{\r}
Dialogue: 0,0:30:06.70,0:30:09.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\pos(234,91.6)}分享
Dialogue: 0,0:30:10.34,0:30:11.70,Default,,0,0,0,,那礼拜四晚上你都在做什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And what about Thursday night?{\r}
Dialogue: 0,0:30:12.14,0:30:15.50,Default,,0,0,0,,礼拜四晚上 我在写我英文课的期末论文\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Thursday night, I was finishing up my final paper for English.{\r}
Dialogue: 0,0:30:15.57,0:30:18.75,Default,,0,0,0,,我不知道 玩游戏 吃晚饭 看剧?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I dunno, Xbox, dinner, some Netflix?{\r}
Dialogue: 0,0:30:18.83,0:30:20.71,Default,,0,0,0,,哦 我刚考完期末 也就是说\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, I just finished my last final which means{\r}
Dialogue: 0,0:30:20.75,0:30:22.96,Default,,0,0,0,,我会在卡门家里玩乓\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I was at Carmen's house playing pong.{\r}
Dialogue: 0,0:30:24.01,0:30:25.39,Default,,0,0,0,,乒 乒乓\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}P-Ping-pong.{\r}
Dialogue: 0,0:30:25.60,0:30:28.57,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(317.6,67.6)}维克警探:县医院:0匹配
Dialogue: 0,0:30:30.33,0:30:32.45,Default,,0,0,0,,那学习小组呢? 你知道在谁家办的吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What about study group? Do you know who hosted that?{\r}
Dialogue: 0,0:30:32.53,0:30:34.21,Default,,0,0,0,,我去年就选生物课了 所以 我不知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I took bio last year, so, no.{\r}
Dialogue: 0,0:30:34.23,0:30:35.11,Default,,0,0,0,,不清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No idea.{\r}
Dialogue: 0,0:30:35.13,0:30:36.58,Default,,0,0,0,,我跟她选了不同的预修课\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She and I were on different AP paths,{\r}
Dialogue: 0,0:30:36.61,0:30:37.84,Default,,0,0,0,,所以很难一直关注她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}so it was kinda hard to keep tabs.{\r}
Dialogue: 0,0:30:37.89,0:30:39.14,Default,,0,0,0,,但你们是朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But you guys were friends.{\r}
Dialogue: 0,0:30:40.76,0:30:41.74,Default,,0,0,0,,算是吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Kind of.{\r}
Dialogue: 0,0:30:41.76,0:30:42.64,Default,,0,0,0,,你在说什么啊?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What are you talking about?{\r}
Dialogue: 0,0:30:42.67,0:30:44.48,Default,,0,0,0,,你邀她参加露营\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You invited her on that camping trip.{\r}
Dialogue: 0,0:30:44.64,0:30:47.22,Default,,0,0,0,,嗯 对 我的意思是 你知道我妈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Well, yeah, I mean, you know my mom.{\r}
Dialogue: 0,0:30:47.25,0:30:48.43,Default,,0,0,0,,嗯 所以?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes, so?{\r}
Dialogue: 0,0:30:49.32,0:30:51.40,Default,,0,0,0,,她和玛戈的妈妈是很好的朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She was really good friends with Margot's mom.{\r}
Dialogue: 0,0:30:51.75,0:30:52.83,Default,,0,0,0,,对 所以?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, so?{\r}
Dialogue: 0,0:30:54.33,0:30:55.50,Default,,0,0,0,,关于这些发生在你们身上的事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She felt bad{\r}
Dialogue: 0,0:30:55.93,0:30:58.34,Default,,0,0,0,,她觉得很心痛\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}about everything that happened to you guys.{\r}
Dialogue: 0,0:30:59.94,0:31:02.05,Default,,0,0,0,,但她有朋友的 是吧?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But she h-has friends, right?{\r}
Dialogue: 0,0:31:02.52,0:31:04.48,Default,,0,0,0,,定义下怎样算朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Define friends.{\r}
Dialogue: 0,0:31:04.51,0:31:06.06,Default,,0,0,0,,同学们有邀请她参加什么活动吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do people invite her to things?{\r}
Dialogue: 0,0:31:06.09,0:31:07.96,Default,,0,0,0,,我想他们偶尔会邀她参加\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I think people occasionally invited her to things.{\r}
Dialogue: 0,0:31:07.98,0:31:08.89,Default,,0,0,0,,但她从未去过\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She just never comes.{\r}
Dialogue: 0,0:31:08.92,0:31:10.14,Default,,0,0,0,,她常常自己一个人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She keeps to herself a lot.{\r}
Dialogue: 0,0:31:10.21,0:31:11.30,Default,,0,0,0,,她很安静\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's quiet.{\r}
Dialogue: 0,0:31:11.32,0:31:13.11,Default,,0,0,0,,我看到她一个人独自吃午餐\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I did see her eat lunch alone.{\r}
Dialogue: 0,0:31:13.13,0:31:14.53,Default,,0,0,0,,在礼拜四?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}On Thursday?{\r}
Dialogue: 0,0:31:15.23,0:31:16.38,Default,,0,0,0,,每一天\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Every day.{\r}
Dialogue: 0,0:31:19.03,0:31:23.37,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(308.4,68.133)}维克警探:监狱也一无所获
Dialogue: 0,0:31:20.39,0:31:21.33,Default,,0,0,0,,大卫 听着\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Davey, look,{\r}
Dialogue: 0,0:31:21.36,0:31:23.26,Default,,0,0,0,,我知道你现在不想听我说这些\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know you don't wanna hear this from me right now.{\r}
Dialogue: 0,0:31:23.32,0:31:24.90,Default,,0,0,0,,但你先别那么紧张\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But you've gotta take it easy.{\r}
Dialogue: 0,0:31:25.24,0:31:27.61,Default,,0,0,0,,我 我可以帮你一起查出所有你要查的事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I-I can help with everything that you're looking through.{\r}
Dialogue: 0,0:31:27.77,0:31:29.95,Default,,0,0,0,,还有其他你还没聊过的脸书好友吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Are there any Facebook friends you haven't talked to yet?{\r}
Dialogue: 0,0:31:30.00,0:31:32.35,Default,,0,0,0,,有 九十四个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yes. 94.{\r}
Dialogue: 0,0:31:32.57,0:31:34.63,Default,,0,0,0,,没有任何一个是她真正的朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And apparently, since nobody was actually her friend,{\r}
Dialogue: 0,0:31:34.65,0:31:36.24,Default,,0,0,0,,很显然 如果不和线上的这些人谈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I don't know who to talk to without calling{\r}
Dialogue: 0,0:31:36.26,0:31:38.35,Default,,0,0,0,,我都不知道要和谁谈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}every name I read online.{\r}
Dialogue: 0,0:31:40.43,0:31:41.82,Default,,0,0,0,,那电脑上的资料呢?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What about offline?{\r}
Dialogue: 0,0:31:44.53,0:31:45.40,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(139.6,54.8)}我的电脑
Dialogue: 0,0:31:50.40,0:31:51.43,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(144.4,84.133)}学校
Dialogue: 0,0:31:52.13,0:31:53.20,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(154.4,108.133)}高二
Dialogue: 0,0:31:54.96,0:31:56.03,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(175.2,74.533)}预修生物
Dialogue: 0,0:31:57.30,0:31:58.93,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs9\pos(161.6,52.133)}生物课实验小组04_尼尔森和金.doc
Dialogue: 0,0:32:03.53,0:32:04.90,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(194,59.066)}玛戈·金
Dialogue: 0,0:32:03.53,0:32:04.90,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(247.2,98.533)}阿比盖尔·尼尔森
Dialogue: 0,0:32:03.53,0:32:04.90,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(322.8,139.066)}预修生物 第二节课
Dialogue: 0,0:32:03.53,0:32:04.90,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(207.2,179.6)}威金斯女士
Dialogue: 0,0:32:05.17,0:32:06.43,Default,,0,0,0,,对 学习小组在我家办的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, that was at my place.{\r}
Dialogue: 0,0:32:06.79,0:32:07.97,Default,,0,0,0,,在你家?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That was your place?{\r}
Dialogue: 0,0:32:08.00,0:32:10.78,Default,,0,0,0,,星期四晚上的生物学习小组是你组织的吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You hosted the study group on Thursday night for bio?{\r}
Dialogue: 0,0:32:10.81,0:32:11.60,Default,,0,0,0,,是的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah.{\r}
Dialogue: 0,0:32:11.62,0:32:13.85,Default,,0,0,0,,所以那天晚上玛戈几乎都和你在一起?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So you were with Margot for the majority of the night?{\r}
Dialogue: 0,0:32:13.88,0:32:16.38,Default,,0,0,0,,呃 晚上九点就结束了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Well, the study group only went till 9:00.{\r}
Dialogue: 0,0:32:16.47,0:32:18.59,Default,,0,0,0,,不 不 她说的是整个晚上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No, no, she said it was going all night.{\r}
Dialogue: 0,0:32:18.82,0:32:20.65,Default,,0,0,0,,不 她晚上九点肯定走了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No, she definitely left at 9:00.{\r}
Dialogue: 0,0:32:20.75,0:32:22.25,Default,,0,0,0,,说不定更早\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Maybe even earlier.{\r}
Dialogue: 0,0:32:24.30,0:32:25.85,Default,,0,0,0,,她有说过她要去哪里吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did she say where she was going?{\r}
Dialogue: 0,0:32:26.43,0:32:27.39,Default,,0,0,0,,不太清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Not really.{\r}
Dialogue: 0,0:32:27.46,0:32:28.88,Default,,0,0,0,,她看起来怎么样? 有没有焦虑害怕什么的?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How'd she look? Was she worried?{\r}
Dialogue: 0,0:32:28.90,0:32:30.36,Default,,0,0,0,,她看起来有没有受到惊吓? 她有说过什么吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did she look scared? Was she talking?{\r}
Dialogue: 0,0:32:30.38,0:32:31.92,Default,,0,0,0,,说实话 我不清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Honestly, I don't know.{\r}
Dialogue: 0,0:32:31.94,0:32:33.09,Default,,0,0,0,,我们的关系没有那么亲密\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We're not really that close.{\r}
Dialogue: 0,0:32:33.11,0:32:35.09,Default,,0,0,0,,那你为什么邀请她去学习小组?!\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why did you invite her to study group?!{\r}
Dialogue: 0,0:32:37.54,0:32:39.64,Default,,0,0,0,,我想明年去伯克利大学\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm trying to get into Berkeley next year.{\r}
Dialogue: 0,0:32:41.22,0:32:42.78,Default,,0,0,0,,好吧 那你...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, you were...{\r}
Dialogue: 0,0:32:42.88,0:32:45.14,Default,,0,0,0,,但是 你和她是一个班的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You were in her class, though. Did she{\r}
Dialogue: 0,0:32:45.20,0:32:47.30,Default,,0,0,0,,或许 她有没有提到过任何不寻常的事情?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}mention anything unusual going on, maybe?{\r}
Dialogue: 0,0:32:47.36,0:32:48.86,Default,,0,0,0,,她有没有表现出奇怪的地方?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Was she acting strange?{\r}
Dialogue: 0,0:32:50.68,0:32:53.02,Default,,0,0,0,,你应该知道 她经常逛汤不热\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, she did go on Tumblr a lot.{\r}
Dialogue: 0,0:32:53.69,0:32:55.26,Default,,0,0,0,,什么? 什么是汤不热?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What? What is a tumbler?{\r}
Dialogue: 0,0:33:00.93,0:33:05.07,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(188.8,125.2)}照片
Dialogue: 0,0:33:05.33,0:33:06.66,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\move(141.2,211.6,143.2,208.933,27,1327)}宁静
Dialogue: 0,0:33:07.03,0:33:07.93,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\move(179.2,251.6,179.2,251.6,27,-7)}巴博萨惬意时刻
Dialogue: 0,0:33:12.30,0:33:13.93,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(153.2,224.933)}决定...
Dialogue: 0,0:33:15.30,0:33:18.76,Default,,0,0,0,,{\an8\c&HBFBFBF&\fn宋体\i1\fs14\pos(180.8,172.667)}没有更多照片显示
Dialogue: 0,0:33:26.70,0:33:29.76,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(297.2,55.333)}维克警探 转发:交通监控录像
Dialogue: 0,0:33:32.70,0:33:34.85,Default,,0,0,0,,第一步 她加满了油\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}First, she fills up for gas.{\r}
Dialogue: 0,0:33:38.75,0:33:40.91,Default,,0,0,0,,然后在101公路离开\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Then exits off the 101.{\r}
Dialogue: 0,0:33:43.22,0:33:46.28,Default,,0,0,0,,再转到152公路向东驶去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And then turns onto the 152 east.{\r}
Dialogue: 0,0:33:46.39,0:33:47.93,Default,,0,0,0,,时间是当晚22点2分\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}10:02 p.m.{\r}
Dialogue: 0,0:33:50.29,0:33:52.04,Default,,0,0,0,,152公路向东方向?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}152 east?{\r}
Dialogue: 0,0:33:54.10,0:33:57.26,Default,,0,0,0,,{\an8\pos(184.267,97.822)}{\c&H000000&\s0\fn方正黑体_GBK\fs12}玛戈最后出现的地方
Dialogue: 0,0:33:58.33,0:34:00.03,Default,,0,0,0,,{\an8\c&HE77735&\fn方正黑体_GBK\fs10\move(63.6,258,68,189.2,27,800)}保存
Dialogue: 0,0:34:00.76,0:34:01.84,Default,,0,0,0,,{\an8\pos(240.667,203.422)}{\c&H000000&\s0\fn方正黑体_GBK\fs12\3c&HFFFFFF&\b1\4c&HFFFFFF&}玛戈最后出现的地方
Dialogue: 0,0:34:03.61,0:34:05.45,Default,,0,0,0,,那个方向是离开小镇的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That exits leads outta town.{\r}
Dialogue: 0,0:34:05.89,0:34:07.13,Default,,0,0,0,,她是一个人去的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She took it alone.{\r}
Dialogue: 0,0:34:07.15,0:34:08.54,Default,,0,0,0,,这根本没道理\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That doesn't make sense.{\r}
Dialogue: 0,0:34:08.56,0:34:10.11,Default,,0,0,0,,这不像我女儿会做的事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This does not sound like my daughter.{\r}
Dialogue: 0,0:34:10.14,0:34:11.76,Default,,0,0,0,,这感觉就像换了个人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's acting like a totally different person.{\r}
Dialogue: 0,0:34:11.79,0:34:13.79,Default,,0,0,0,,好的 等下 不要挂电话 你刚让我产生了一个想法\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, hold on, hold on. You just gave me an idea.{\r}
Dialogue: 0,0:34:15.43,0:34:16.69,Default,,0,0,0,,这期间\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}In the meantime,{\r}
Dialogue: 0,0:34:16.88,0:34:20.26,Default,,0,0,0,,扩大调查范围 不仅仅局限在跟她有过联系的人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}start expanding from only the people she communicated with.{\r}
Dialogue: 0,0:34:20.54,0:34:22.78,Default,,0,0,0,,她的行为表现也要调查一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Look into her behavior also.{\r}
Dialogue: 0,0:34:27.63,0:34:28.70,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(201.2,68.667)}信息
Dialogue: 0,0:34:29.93,0:34:31.13,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs8\pos(98,56.399)}爸爸
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(288,26)}宝贝儿 早安 今天我要很早出门
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(300.4,44.134)}钢琴课的学费放在桌上了
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(291.6,181.733)}谢谢啦!
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(226.4,196.133)}你什么时候回来啊?
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(205.6,222.799)}嘿 我把钱包放在家里了\N介意汇我点零钱吗?
Dialogue: 0,0:34:32.57,0:34:37.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs10\c&H000000&\pos(229.2,248.934)}我会介意吗?
Dialogue: 0,0:34:37.10,0:34:39.03,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(125.2,48.933)}美国银行
Dialogue: 0,0:34:41.36,0:34:42.56,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs20\pos(62.4,155.6)}忘记密码
Dialogue: 0,0:34:42.70,0:34:44.23,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(105.6,36.133)}设置新的登陆密码
Dialogue: 0,0:34:44.56,0:34:45.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(169.2,90)}你好 玛戈
Dialogue: 0,0:34:45.70,0:34:48.06,Default,,0,0,0,,{\an8\c&HBF8A5C&\fn方正黑体_GBK\fs9\pos(160.8,85.733)}余额 $1033.99
Dialogue: 0,0:34:49.30,0:34:52.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\move(145.2,119.867,140,124.134,23,2957)}{\c&HBF8A5C&\fs8}正在处理 {\c&H000000&}     借记卡 05/11 雪佛龙     加油站                                       -37.67
Dialogue: 0,0:34:52.39,0:34:57.04,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(63.2,39.334)}所有转账记录
Dialogue: 0,0:34:58.84,0:34:59.96,Default,,0,0,0,,哦 天呐\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, my God.{\r}
Dialogue: 0,0:35:00.14,0:35:01.17,Default,,0,0,0,,什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,0:35:01.21,0:35:03.35,Default,,0,0,0,,我每周给她的钢琴课的钱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's been depositing her piano cash{\r}
Dialogue: 0,0:35:03.42,0:35:05.26,Default,,0,0,0,,她都存在了账户里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}into her checking account every week.{\r}
Dialogue: 0,0:35:05.42,0:35:07.12,Default,,0,0,0,,她存着这些钱到底要用来干什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The hell was she doing with all that money?{\r}
Dialogue: 0,0:35:10.37,0:35:12.94,Default,,0,0,0,,六天前 她向外转了一笔钱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Six days ago, she made an outgoing transaction{\r}
Dialogue: 0,0:35:12.99,0:35:14.84,Default,,0,0,0,,金额是2500美元\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}of $2,500{\r}
Dialogue: 0,0:35:15.00,0:35:16.33,Default,,0,0,0,,给Venmo\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to Venmo.{\r}
Dialogue: 0,0:35:17.41,0:35:18.69,Default,,0,0,0,,小额转账?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The payment service?{\r}
Dialogue: 0,0:35:21.05,0:35:23.21,Default,,0,0,0,,在这里 2500美元\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}There it is. $2,500.{\r}
Dialogue: 0,0:35:23.62,0:35:25.04,Default,,0,0,0,,六天前\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Six days ago.{\r}
Dialogue: 0,0:35:25.28,0:35:26.78,Default,,0,0,0,,有说是用来干什么的吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Does it say what it was for?{\r}
Dialogue: 0,0:35:26.82,0:35:28.21,Default,,0,0,0,,没有 只有一个转账完成的手势符号\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Nothing but a peace sign.{\r}
Dialogue: 0,0:35:28.27,0:35:29.56,Default,,0,0,0,,她给谁转的钱?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Who did she send it to?{\r}
Dialogue: 0,0:35:33.10,0:35:37.47,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs26\pos(200.4,98.533)}该账号已被注销
Dialogue: 0,0:35:35.31,0:35:36.45,Default,,0,0,0,,没有说明\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It doesn't say.{\r}
Dialogue: 0,0:35:36.54,0:35:37.55,Default,,0,0,0,,好吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:35:37.69,0:35:38.80,Default,,0,0,0,,这很奇怪\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's weird.{\r}
Dialogue: 0,0:35:38.94,0:35:40.27,Default,,0,0,0,,这真的很奇怪\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's really weird.{\r}
Dialogue: 0,0:35:42.12,0:35:45.50,Default,,0,0,0,,你不会认为她卷入了什么不好的事情 对吧?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You don't think she's involved with anything serious, right?{\r}
Dialogue: 0,0:35:47.70,0:35:48.71,Default,,0,0,0,,大卫?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Davey?{\r}
Dialogue: 0,0:35:48.73,0:35:50.50,Default,,0,0,0,,我不知道 我得挂了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I don't know. I gotta go.{\r}
Dialogue: 0,0:35:50.80,0:35:52.33,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs14\pos(141.6,63.866)}图享
Dialogue: 0,0:35:59.83,0:36:01.96,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(278.8,114.8)}心情
Dialogue: 0,0:35:59.83,0:36:01.96,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(214.8,106.267)}玛·金
Dialogue: 0,0:35:59.83,0:36:01.96,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(325.2,131.867)}这是在哪儿?
Dialogue: 0,0:35:59.83,0:36:01.96,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(217.6,122.8)}苏·安娜
Dialogue: 0,0:36:02.10,0:36:03.46,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(306,113.2)}买哪个?
Dialogue: 0,0:36:02.10,0:36:03.46,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(214,104.667)}玛·金
Dialogue: 0,0:36:02.10,0:36:03.46,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(299.2,131.867)}嗨 玛戈
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs8\pos(341.2,113.733)\b0}期末把我折磨成这鬼样了
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\move(212.4,105.733,208.8,108.933,23,2223)}玛·金
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(338,131.866)}你好呀漂亮小妞
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\move(224,123.333,220.8,126,23,2223)}德瑞克·艾利斯
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(347.2,149.467)}为啥这么紧张 哈哈
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\move(218,140.934,214.8,143.601,23,2223)}贝茨·纽曼
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(310,167.6)}加了胶片滤镜吗?
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\move(221.6,158.533,217.6,162.266,23,2223)}威尔·梅里克
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs8\pos(348.8,185.2)}你看起来不错 玛戈!
Dialogue: 0,0:36:03.60,0:36:05.83,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\move(220.8,176.667,217.6,182,23,2223)}茱莉亚·班德
Dialogue: 0,0:36:05.96,0:36:07.13,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(286,119.067)}宁静
Dialogue: 0,0:36:05.96,0:36:07.13,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(208.4,110.534)}玛·金
Dialogue: 0,0:36:05.96,0:36:07.13,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(300.4,138.267)}太漂亮了
Dialogue: 0,0:36:05.96,0:36:07.13,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(216.8,127.6)}瑞克·多布森
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(312.8,122.267)}星期五快乐
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(206.4,112.666)}玛·金
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs10\pos(321.2,147.867)}你知道你想要我
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(218,130.8)}德瑞克·艾利斯
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs10\pos(309.6,158)}哇哦 德瑞克
Dialogue: 0,0:36:07.23,0:36:08.24,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(215.2,149.467)}艾比·尼尔森
Dialogue: 0,0:36:11.13,0:36:12.86,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(290,91.334)}周天
Dialogue: 0,0:36:11.13,0:36:12.86,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(145.6,76.934)}玛·金
Dialogue: 0,0:36:11.13,0:36:12.86,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(266,108.934)}看起来不错
Dialogue: 0,0:36:11.13,0:36:12.86,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(161.6,107.867)}德瑞克·艾利斯
Dialogue: 0,0:36:13.00,0:36:14.63,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(161.6,107.867)}德瑞克·艾利斯
Dialogue: 0,0:36:13.00,0:36:14.63,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(145.6,76.934)}玛·金
Dialogue: 0,0:36:13.00,0:36:14.63,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(241.6,75.334)}又直播啦
Dialogue: 0,0:36:13.00,0:36:14.63,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(282.8,110.001)}超牛逼噢噢噢噢
Dialogue: 0,0:36:13.00,0:36:14.63,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(281.6,147.334)}咱俩外边现金交易
Dialogue: 0,0:36:14.80,0:36:17.27,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(145.6,76.934)}玛·金
Dialogue: 0,0:36:14.80,0:36:17.27,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs16\pos(241.6,75.334)}下雨天
Dialogue: 0,0:36:14.80,0:36:17.27,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs12\pos(160.4,112.134)}德瑞克·艾利斯
Dialogue: 0,0:36:18.70,0:36:20.20,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs9\pos(188.8,58.801)}德瑞克·艾利斯6969
Dialogue: 0,0:36:26.83,0:36:29.06,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\fs7\pos(260,102.534)}我妈总是问我\N干嘛在房间里喷那么多\N空气清新剂 哈哈
Dialogue: 0,0:36:32.16,0:36:33.20,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(197.6,144.934)}联系人
Dialogue: 0,0:36:34.63,0:36:36.33,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(147.2,74.8)}德瑞克 无搜索结果
Dialogue: 0,0:36:38.70,0:36:40.56,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(81.6,122.8)}查找电话号码
Dialogue: 0,0:36:42.50,0:36:43.96,Default,,0,0,0,,{\pos(131.867,78.088)} {\an8\pos(168.667,71.155)}{\c&HF52808&\s0\fn方正黑体_GBK\fs16}人肉搜索                    查找任何电话号码
Dialogue: 0,0:36:45.33,0:36:46.20,Default,,0,0,0,,{\an8\pos(108.8,125.733)\fn方正黑体_GBK\c&H6C6159&}查找
Dialogue: 0,0:36:46.33,0:36:47.80,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(158,142)}德瑞克·艾利斯
Dialogue: 0,0:36:48.53,0:36:49.36,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\move(316.8,146.533,267.2,146,27,260)}搜索
Dialogue: 0,0:36:49.63,0:36:52.06,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H6C6159&\fs11\pos(118,116.667)}正在查找中:\N德瑞克·艾利斯
Dialogue: 0,0:36:52.53,0:36:53.64,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(193.2,47.867)}{\fs10}点击选择查看电话号码的购买套餐
Dialogue: 0,0:36:57.60,0:36:58.50,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\pos(212,113.467)}提交订单
Dialogue: 0,0:36:58.60,0:37:00.26,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H000000&\pos(152.4,50.8)}德瑞克·艾利斯
Dialogue: 0,0:37:00.40,0:37:02.50,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs9\c&H90928D&\pos(155.6,95.866)}当前号码
Dialogue: 0,0:37:02.72,0:37:04.65,Default,,0,0,0,,先生 我没有义务告诉你任何事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sir, I don't have to tell you anything.{\r}
Dialogue: 0,0:37:04.73,0:37:06.34,Default,,0,0,0,,我只想知道我女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just want to know where you were{\r}
Dialogue: 0,0:37:06.37,0:37:07.95,Default,,0,0,0,,失踪的那个晚上你在哪里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the night my daughter went missing.{\r}
Dialogue: 0,0:37:07.97,0:37:10.82,Default,,0,0,0,,我已经跟你说过了 我当时在约会\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Like I said, I had a prior engagement.{\r}
Dialogue: 0,0:37:10.87,0:37:12.09,Default,,0,0,0,,-你想要隐瞒什么?  -我当时很忙\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- What are you hiding? - I was busy.{\r}
Dialogue: 0,0:37:12.34,0:37:13.67,Default,,0,0,0,,-你想要隐瞒什么?  -我没有什么要隐瞒的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- What are you hiding? - Nothing!{\r}
Dialogue: 0,0:37:13.73,0:37:15.06,Default,,0,0,0,,那就回答我的问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Then answer the damn question{\r}
Dialogue: 0,0:37:15.09,0:37:16.70,Default,,0,0,0,,在警察上门之前\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}before there's a cop knocking on your door.{\r}
Dialogue: 0,0:37:16.76,0:37:19.28,Default,,0,0,0,,我女儿失踪的那个晚上你到底在哪里?!\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where were you the night my daughter went missing?!{\r}
Dialogue: 0,0:37:19.56,0:37:21.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\pos(192.4,5.2)}周四晚上
Dialogue: 0,0:37:21.36,0:37:23.73,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H000000&\pos(198,71.067)}比伯演唱会
Dialogue: 0,0:37:25.50,0:37:27.26,Default,,0,0,0,,{\fn方正黑体_GBK\fs16\c&H000000&\pos(194.8,131.333)}（已证实）
Dialogue: 0,0:37:49.01,0:37:49.92,Default,,0,0,0,,喂?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hello?{\r}
Dialogue: 0,0:37:50.01,0:37:52.09,Default,,0,0,0,,瑞秋·裘恩这个名字你熟悉吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Does the name Rachel Jeun ring a bell?{\r}
Dialogue: 0,0:37:53.46,0:37:54.97,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(247.2,129.2)}维克警探
Dialogue: 0,0:37:56.14,0:37:58.54,Default,,0,0,0,,{\fn方正黑体_GBK\fs14\c&H000000&\pos(114,105.2)}转发:瑞秋·裘恩车牌号
Dialogue: 0,0:37:56.43,0:37:57.78,Default,,0,0,0,,不 怎么了?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No. Why?{\r}
Dialogue: 0,0:38:02.66,0:38:03.63,Default,,0,0,0,,这是玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's Margot.{\r}
Dialogue: 0,0:38:03.73,0:38:06.16,Default,,0,0,0,,你之前提到过她像换了个人一样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You mentioned earlier she was acting like a different person.{\r}
Dialogue: 0,0:38:06.18,0:38:09.30,Default,,0,0,0,,所以我让鉴证组彻底调查了已删除的联系人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So I had our forensics team look through any deleted contacts{\r}
Dialogue: 0,0:38:09.33,0:38:11.36,Default,,0,0,0,,在硬盘的拷贝件里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}on the copy of her hard drive.{\r}
Dialogue: 0,0:38:11.84,0:38:14.83,Default,,0,0,0,,其中有一个是本地做假证件的人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}One of those contacts was a local forger.{\r}
Dialogue: 0,0:38:14.87,0:38:17.51,Default,,0,0,0,,他说玛戈几天前取走了一张假证件\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He said Margot picked up an ID a few days ago.{\r}
Dialogue: 0,0:38:17.55,0:38:20.68,Default,,0,0,0,,差不多的时间 她提现了全部的钱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Around the same time, she withdrew all that money.{\r}
Dialogue: 0,0:38:21.40,0:38:22.67,Default,,0,0,0,,提现?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Withdrew?{\r}
Dialogue: 0,0:38:23.95,0:38:25.60,Default,,0,0,0,,什么? 提现什么钱?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What? Withdrew what money?{\r}
Dialogue: 0,0:38:25.65,0:38:28.59,Default,,0,0,0,,大卫 我和Venmo小额转账的安保人员也谈过了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}David, I also spoke to security at Venmo.{\r}
Dialogue: 0,0:38:28.66,0:38:30.35,Default,,0,0,0,,想了解更多有关玛戈转账的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}To find out more about the account{\r}
Dialogue: 0,0:38:30.38,0:38:32.44,Default,,0,0,0,,账户的详细资料\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot sent the $2,500 to.{\r}
Dialogue: 0,0:38:32.51,0:38:34.10,Default,,0,0,0,,他们知道这个账户是谁的了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do they know who it belonged to?{\r}
Dialogue: 0,0:38:34.43,0:38:35.98,Default,,0,0,0,,这个账户属于玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It belonged to Margot.{\r}
Dialogue: 0,0:38:41.02,0:38:42.99,Default,,0,0,0,,她把这笔钱转给自己?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She sent the money to herself?{\r}
Dialogue: 0,0:38:43.16,0:38:45.37,Default,,0,0,0,,她在做什么? 洗钱?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What was she doing? Running a- a laundering scheme?{\r}
Dialogue: 0,0:38:45.40,0:38:46.80,Default,,0,0,0,,看起来是这样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's what it looks like.{\r}
Dialogue: 0,0:38:48.09,0:38:50.15,Default,,0,0,0,,我在调查毒品案件的时候看过很多类似的事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'd see this a lot in narcotics.{\r}
Dialogue: 0,0:38:50.32,0:38:52.20,Default,,0,0,0,,人们知道自己的钱一直被监管着\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}People who know their money's being watched{\r}
Dialogue: 0,0:38:52.23,0:38:55.11,Default,,0,0,0,,就把他们的资金转到缺少监管的地方\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}just transfer their funds to somewhere much less monitored.{\r}
Dialogue: 0,0:38:55.15,0:38:56.71,Default,,0,0,0,,缺少监管的地方 哪里?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Less monitored. Like where?{\r}
Dialogue: 0,0:38:57.66,0:38:59.76,Default,,0,0,0,,{\fn方正黑体_GBK\fs10\c&H000000&\pos(225.6,89.733)}此账号已被注销
Dialogue: 0,0:38:58.38,0:38:59.55,Default,,0,0,0,,网络\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The Internet.{\r}
Dialogue: 0,0:39:07.26,0:39:09.85,Default,,0,0,0,,她制造假身份 给自己汇钱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She gets a fake ID, she sends money to herself.{\r}
Dialogue: 0,0:39:09.89,0:39:11.18,Default,,0,0,0,,这是什么意思\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What does this mean?{\r}
Dialogue: 0,0:39:12.04,0:39:15.38,Default,,0,0,0,,这意味着有很大可能\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That it's time to start considering the possibility{\r}
Dialogue: 0,0:39:16.59,0:39:18.46,Default,,0,0,0,,玛戈是离家出走\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that Margot ran away.{\r}
Dialogue: 0,0:39:22.20,0:39:23.51,Default,,0,0,0,,她为什么要这样做\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why would she do that?{\r}
Dialogue: 0,0:39:23.93,0:39:25.52,Default,,0,0,0,,这正是我们所不明白的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's what we don't know.{\r}
Dialogue: 0,0:39:26.08,0:39:27.32,Default,,0,0,0,,她为什么要这样做\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why would she do that?{\r}
Dialogue: 0,0:39:27.34,0:39:29.54,Default,,0,0,0,,她在半夜给我打了三次电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She called me three times in the middle of the night.{\r}
Dialogue: 0,0:39:29.57,0:39:31.06,Default,,0,0,0,,打给我三次 为什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Three times she called me, why?{\r}
Dialogue: 0,0:39:31.09,0:39:32.50,Default,,0,0,0,,我们会查明原因的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We're going to figure out why.{\r}
Dialogue: 0,0:39:32.58,0:39:33.76,Default,,0,0,0,,所以 我现在想查找的是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, what I want to look for now...{\r}
Dialogue: 0,0:39:33.79,0:39:36.46,Default,,0,0,0,,不 不 不 不 不\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No, no, no, no, no.{\r}
Dialogue: 0,0:39:36.89,0:39:38.13,Default,,0,0,0,,我了解我女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know my daughter.{\r}
Dialogue: 0,0:39:38.32,0:39:39.82,Default,,0,0,0,,她不会逃走的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She did not run away.{\r}
Dialogue: 0,0:39:51.60,0:39:53.20,Default,,0,0,0,,{\an8\fn方正黑体_GBK\pos(190,51.6)}排序
Dialogue: 0,0:39:56.10,0:39:57.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H6C6159&\pos(137.2,203.6)}最常访问历史
Dialogue: 0,0:40:00.50,0:40:02.10,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}汤不热
Dialogue: 0,0:40:02.23,0:40:03.83,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}美国银行
Dialogue: 0,0:40:03.93,0:40:05.20,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}埃弗克里克高中
Dialogue: 0,0:40:05.33,0:40:06.93,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}换你了-直播平台
Dialogue: 0,0:40:07.06,0:40:08.66,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}音乐学校
Dialogue: 0,0:40:08.76,0:40:11.23,Default,,0,0,0,,{\an8}{\fn方正黑体_GBK\c&H000000&}换你了-直播平台
Dialogue: 0,0:40:10.99,0:40:13.99,Default,,0,0,0,,{\fad(500,500)\an9\fs12\fnFZHei-B01\b1}观众您好\N如果给您分发的资源的人未明确指出是远鉴字幕组作品\N或是裁剪\去除掉了片头的字幕组制作人信息\N说明您可能获取的是二手资源
Dialogue: 0,0:40:13.99,0:40:16.99,Default,,0,0,0,,{\fad(500,500)\an9\fs12\fnFZHei-B01\b1}获取一手资源 拒绝二手资源 从您做起\N更多精彩内容 敬请关注微博 @远鉴字幕组v
Dialogue: 0,0:40:16.99,0:40:19.99,Default,,0,0,0,,{\fad(500,500)\an9\fs12\fnFZHei-B01\b1}热门电影字幕欢迎关注微博 @远鉴字幕组v\N远鉴字幕组招新群 483552098\N若想施展您的翻译才华\N让自己的名字出现在电影片头\N远鉴字幕组诚邀您的加入\N远鉴字幕组粉丝群 522218128
Dialogue: 0,0:40:20.70,0:40:25.20,Default,,0,0,0,,{{\an8}{\fn方正黑体_GBK\c&H000000&}欢迎回来
Dialogue: 0,0:40:38.99,0:40:41.81,Default,,0,0,0,,老兄 这是个好角度\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Dude. This is a good angle.{\r}
Dialogue: 0,0:40:42.28,0:40:43.71,Default,,0,0,0,,同时 我的粉丝们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Also, to all my fans,{\r}
Dialogue: 0,0:40:43.76,0:40:45.15,Default,,0,0,0,,我知道这条视频博客发得有点晚了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know this vlog is a little late.{\r}
Dialogue: 0,0:40:46.55,0:40:48.39,Default,,0,0,0,,去年最爱的演唱会?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Favorite concert in the last year?{\r}
Dialogue: 0,0:40:48.42,0:40:49.91,Default,,0,0,0,,那绝对是 21 Pilots的演唱会\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Definitely Twenty One Pilots.{\r}
Dialogue: 0,0:40:50.40,0:40:51.43,Default,,0,0,0,,{\an8\pos(288.4,212.666)}{\fn方正黑体_GBK\fs14}我喜欢你的房间
Dialogue: 0,0:40:51.29,0:40:53.41,Default,,0,0,0,,喔 谢谢你夸我 露西\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Well, thank you for the compliment, Lucy.{\r}
Dialogue: 0,0:40:53.73,0:40:55.23,Default,,0,0,0,,{\an8\move(296,203.066,302.8,158.266,27,1460)}{\fn方正黑体_GBK\fs14}你从哪儿买的那件衬衫?
Dialogue: 0,0:40:55.09,0:40:57.41,Default,,0,0,0,,噢 这身可是Fearless的衬衫\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, this is a Fearless core shirt,{\r}
Dialogue: 0,0:40:55.50,0:40:59.57,Default,,0,0,0,,{\an8\pos(215.2,208.933)}{\fn方正黑体_GBK\fs14\c&H000000&}你能看到我吗
Dialogue: 0,0:40:57.43,0:40:59.03,Default,,0,0,0,,花了我差不多四十刀\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}cost me like 40 bucks.{\r}
Dialogue: 0,0:41:01.24,0:41:02.18,Default,,0,0,0,,呃...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um...{\r}
Dialogue: 0,0:41:02.37,0:41:04.36,Default,,0,0,0,,我怎样才能看到你?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}H-How would I be able to see you?{\r}
Dialogue: 0,0:41:07.74,0:41:09.20,Default,,0,0,0,,好吧 嗯 你知道吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, well, you know what?{\r}
Dialogue: 0,0:41:08.76,0:41:11.56,Default,,0,0,0,,{\an8\pos(191.6,83.6)\fn方正黑体_GBK\i1}现在直播
Dialogue: 0,0:41:09.24,0:41:11.74,Default,,0,0,0,,你们一直评论 但说实话 如果这有些...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You guys keep commenting, but honestly, if it's kinda...{\r}
Dialogue: 0,0:41:18.16,0:41:20.46,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10}fish_n_chips\N进入你的直播间
Dialogue: 0,0:41:23.20,0:41:25.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10}fish_n_chips\N退出你的直播间
Dialogue: 0,0:41:30.76,0:41:32.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(329.2,265.466)}结束直播
Dialogue: 0,0:41:36.87,0:41:39.97,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\pos(204.4,125.733)\i1}已保存的直播
Dialogue: 0,0:41:47.83,0:41:49.50,Default,,0,0,0,,{\an8\fn仿宋\c&H000000&\fs16\pos(134.4,259.6)}上周
Dialogue: 0,0:41:50.33,0:41:52.40,Default,,0,0,0,,{\an8\fn仿宋\c&H000000&\fs16\pos(138,259.6)}3周前
Dialogue: 0,0:42:03.94,0:42:07.14,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs14\i1\pos(153.6,66)}播放全部
Dialogue: 0,0:42:28.06,0:42:29.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}XxX5753\N{\c&H00FF00&}加入你的直播间
Dialogue: 0,0:42:30.76,0:42:32.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}XxX5753\N{}露奶子 谢谢
Dialogue: 0,0:42:37.36,0:42:39.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}XxX5753\N{\c&H0000FF&}被禁言
Dialogue: 0,0:42:49.10,0:42:51.44,Default,,0,0,0,,{\c&H0000FF&\fn方正黑体_GBK\b1\pos(284.4,56.133)}被禁言
Dialogue: 0,0:42:49.10,0:42:51.44,Default,,0,0,0,,{\fn方正黑体_GBK\c&H00FF00&\pos(292.8,136.134)}加入了直播间
Dialogue: 0,0:42:49.10,0:42:51.44,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(267.6,196.399)}最爱的口袋妖怪是什么 为什么
Dialogue: 0,0:42:53.29,0:42:54.31,Default,,0,0,0,,等一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hold on.{\r}
Dialogue: 0,0:42:56.43,0:42:58.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}ablemaybel36\N{\c&H00FF00&}加入你的直播间
Dialogue: 0,0:43:04.46,0:43:06.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}ablemaybel36\N{}喜欢这个
Dialogue: 0,0:43:06.90,0:43:09.40,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(265.6,233.199)}你还没回答我的问题
Dialogue: 0,0:43:10.16,0:43:11.54,Default,,0,0,0,,这是由克希\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's Uxie.{\r}
Dialogue: 0,0:43:12.39,0:43:14.13,Default,,0,0,0,,它可以消除记忆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It can wipe out memories.{\r}
Dialogue: 0,0:43:14.45,0:43:15.74,Default,,0,0,0,,它挺可爱的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's kinda cute.{\r}
Dialogue: 0,0:43:16.04,0:43:17.74,Default,,0,0,0,,你怎么知道我喜欢《精灵宝可梦》\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How'd you know I like Pokémon?{\r}
Dialogue: 0,0:43:18.46,0:43:20.53,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(260.8,227.333)}谁不喜欢呢
Dialogue: 0,0:43:21.04,0:43:22.66,Default,,0,0,0,,很多人 实际上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A lot of people, actually.{\r}
Dialogue: 0,0:43:23.08,0:43:24.78,Default,,0,0,0,,我是说 甚至从他们开始...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I mean, ever since they started...{\r}
Dialogue: 0,0:43:24.40,0:43:26.36,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(318.4,216.132)}话说回来 还有变隐龙
Dialogue: 0,0:43:26.46,0:43:27.90,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(300,237.999)}我最爱的口袋妖怪...
Dialogue: 0,0:43:28.03,0:43:29.76,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(305.2,220.932)}谢谢你问我 哈哈
Dialogue: 0,0:43:34.04,0:43:35.44,Default,,0,0,0,,这张是我在湖边拍的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This one I took at a lake.{\r}
Dialogue: 0,0:43:38.62,0:43:41.28,Default,,0,0,0,,这张是在森林里拍的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This one I took at a forest.{\r}
Dialogue: 0,0:43:38.73,0:43:40.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}thisjenlewis\N你的照片太好看了\N你该多拍点<3
Dialogue: 0,0:43:43.39,0:43:44.16,Default,,0,0,0,,那...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That...{\r}
Dialogue: 0,0:43:51.06,0:43:52.41,Default,,0,0,0,,我是玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm Margot.{\r}
Dialogue: 0,0:43:53.46,0:43:55.10,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(258.8,228.932)}汉娜
Dialogue: 0,0:43:55.87,0:43:58.73,Default,,0,0,0,,我十五岁 快十六了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm 15. Almost 16.{\r}
Dialogue: 0,0:44:01.90,0:44:03.07,Default,,0,0,0,,学生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Student.{\r}
Dialogue: 0,0:44:03.10,0:44:04.13,Default,,0,0,0,,{\an8\c&H90928D&\fn方正黑体_GBK\fs14\pos(187.6,181.733)}汉娜 20岁 服务员\N美国 匹兹堡
Dialogue: 0,0:44:06.02,0:44:07.30,Default,,0,0,0,,圣何塞\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}San Jose.{\r}
Dialogue: 0,0:44:09.91,0:44:11.17,Default,,0,0,0,,上班感觉如何?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's that like?{\r}
Dialogue: 0,0:44:18.55,0:44:20.49,Default,,0,0,0,,相信我 也许要比上学好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Trust me, it's probably better than this.{\r}
Dialogue: 0,0:44:24.16,0:44:25.26,Default,,0,0,0,,就是这儿了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is it.{\r}
Dialogue: 0,0:44:27.40,0:44:29.37,Default,,0,0,0,,世界上虚度时光最佳的地方\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Best place in the world to do nothing.{\r}
Dialogue: 0,0:44:35.23,0:44:37.98,Default,,0,0,0,,你在上学期间还工作二十五个小时?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You work 25 hours on top of school?{\r}
Dialogue: 0,0:44:42.16,0:44:48.84,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(324.8,173.999)}我得一直工作到我妈离开医院
Dialogue: 0,0:44:48.86,0:44:50.50,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(301.2,213.465)}该死的癌症
Dialogue: 0,0:45:05.17,0:45:15.60,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(301.2,213.465)}我爸说今天我就要辍学了\N省钱付医院账单\N他甚至都不先问问我
Dialogue: 0,0:45:16.60,0:45:20.00,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(275.6,154.799)}我希望我能跟我爸爸多亲近点
Dialogue: 0,0:45:20.10,0:45:21.73,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(269.6,127.065)}就像你跟你爸爸一样
Dialogue: 0,0:45:26.09,0:45:28.80,Default,,0,0,0,,我爸不知道我不再去上钢琴课了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}My dad doesn't know I stopped going to piano.{\r}
Dialogue: 0,0:45:31.87,0:45:34.17,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(300,205.465)}你为什么不告度他
Dialogue: 0,0:45:34.20,0:45:35.10,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(237.2,221.998)}*诉
Dialogue: 0,0:45:37.70,0:45:39.08,Default,,0,0,0,,他不会理解的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He wouldn't get it.{\r}
Dialogue: 0,0:45:44.37,0:45:45.45,Default,,0,0,0,,不管怎样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Anyway.{\r}
Dialogue: 0,0:45:45.59,0:45:46.70,Default,,0,0,0,,你们没有...?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Don't you guys have...?{\r}
Dialogue: 0,0:45:55.90,0:45:58.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\b1}fish_n_chips\N{}玛戈 发生什么了
Dialogue: 0,0:45:58.92,0:45:59.98,Default,,0,0,0,,所以...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So...{\r}
Dialogue: 0,0:46:00.75,0:46:03.69,Default,,0,0,0,,今天是这个大宝贝的生日\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Today is this megababe's birthday.{\r}
Dialogue: 0,0:46:08.21,0:46:09.74,Default,,0,0,0,,生日快乐\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Happy birthday.{\r}
Dialogue: 0,0:46:12.81,0:46:13.92,Default,,0,0,0,,你知道的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know,{\r}
Dialogue: 0,0:46:14.61,0:46:16.77,Default,,0,0,0,,如果她今天还在的话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}if she were still here today,{\r}
Dialogue: 0,0:46:16.84,0:46:19.54,Default,,0,0,0,,她绝对会让我们都...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}a hundred percent, she'd be making us all her...{\r}
Dialogue: 0,0:46:24.18,0:46:25.45,Default,,0,0,0,,请进\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Come in!{\r}
Dialogue: 0,0:46:29.08,0:46:30.67,Default,,0,0,0,,嘿 甜心 嗯...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, sweetheart, um...{\r}
Dialogue: 0,0:46:33.84,0:46:35.90,Default,,0,0,0,,我...我...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I... I...{\r}
Dialogue: 0,0:46:36.81,0:46:38.34,Default,,0,0,0,,忘了提前说...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}forgot to say earlier...{\r}
Dialogue: 0,0:46:39.51,0:46:40.72,Default,,0,0,0,,呃...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}um...{\r}
Dialogue: 0,0:46:45.24,0:46:46.38,Default,,0,0,0,,这...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's uh...{\r}
Dialogue: 0,0:46:46.52,0:46:47.70,Default,,0,0,0,,嗯 今天是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, it's...{\r}
Dialogue: 0,0:46:47.80,0:46:48.93,Default,,0,0,0,,星期二\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Tuesday.{\r}
Dialogue: 0,0:46:49.91,0:46:52.41,Default,,0,0,0,,所以 美国之声 呃...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, The Voice, um...{\r}
Dialogue: 0,0:46:53.33,0:46:54.83,Default,,0,0,0,,淘汰赛\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}elimination round.{\r}
Dialogue: 0,0:46:57.66,0:46:59.05,Default,,0,0,0,,是的 当然\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, of course.{\r}
Dialogue: 0,0:46:59.12,0:47:00.06,Default,,0,0,0,,我们接着看?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We're still on?{\r}
Dialogue: 0,0:47:00.18,0:47:01.04,Default,,0,0,0,,是的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah.{\r}
Dialogue: 0,0:47:01.07,0:47:02.43,Default,,0,0,0,,梅根会被淘汰的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Meghan's gonna get cut.{\r}
Dialogue: 0,0:47:03.18,0:47:05.13,Default,,0,0,0,,是 她会的 那一会...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, she is. I'll see you...{\r}
Dialogue: 0,0:47:05.36,0:47:06.19,Default,,0,0,0,,再见\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Bye.{\r}
Dialogue: 0,0:47:06.24,0:47:07.14,Default,,0,0,0,,楼下见\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}downstairs.{\r}
Dialogue: 0,0:47:29.93,0:47:32.00,Default,,0,0,0,,抱歉 大卫 又一个死胡同\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry, David, it's another dead end.{\r}
Dialogue: 0,0:47:34.14,0:47:36.00,Default,,0,0,0,,你确定每个人你都调查了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You sure you looked into every one of them?{\r}
Dialogue: 0,0:47:36.10,0:47:37.14,Default,,0,0,0,,对 每个人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Every one.{\r}
Dialogue: 0,0:47:37.31,0:47:39.55,Default,,0,0,0,,玛戈接触过的"换你了"直播网站用户中\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}None of the YouCast users Margot interacted with{\r}
Dialogue: 0,0:47:39.58,0:47:41.47,Default,,0,0,0,,没有人与她的失踪有联系\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}have a connection to her disappearance.{\r}
Dialogue: 0,0:47:41.50,0:47:43.40,Default,,0,0,0,,-甚至f...  -甚至fish_n_chips也没有\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Even f... - Even fish_n_chips.{\r}
Dialogue: 0,0:47:43.67,0:47:45.87,Default,,0,0,0,,通过她账户中的信息\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Using the information on her account,{\r}
Dialogue: 0,0:47:45.91,0:47:48.24,Default,,0,0,0,,我们追踪到一家叫科奇克的餐馆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we traced her to a Kerchick's Diner{\r}
Dialogue: 0,0:47:48.32,0:47:50.38,Default,,0,0,0,,位于距匹兹堡十英里外\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}10 miles outside Pittsburgh.{\r}
Dialogue: 0,0:47:50.68,0:47:52.86,Default,,0,0,0,,我和她以及她的经理谈过话了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I spoke to her and her manager{\r}
Dialogue: 0,0:47:52.99,0:47:56.68,Default,,0,0,0,,经理看过监控确认了她当时在上班\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}who confirmed with CCTV that she was on a shift.{\r}
Dialogue: 0,0:47:57.76,0:47:58.77,Default,,0,0,0,,不在场证明对得上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Checks out.{\r}
Dialogue: 0,0:48:06.48,0:48:07.81,Default,,0,0,0,,我不了解她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I didn't know her.{\r}
Dialogue: 0,0:48:10.79,0:48:12.46,Default,,0,0,0,,我不了解我的女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I didn't know my daughter.{\r}
Dialogue: 0,0:48:21.73,0:48:23.15,Default,,0,0,0,,几年前\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Couple of years ago,{\r}
Dialogue: 0,0:48:24.33,0:48:26.76,Default,,0,0,0,,一个邻居气势汹汹地敲我家门\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}an angry neighbor starts banging on my door.{\r}
Dialogue: 0,0:48:27.21,0:48:29.52,Default,,0,0,0,,我问她有什么事情的时候 她说\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}When I asked her what the trouble was, she said,{\r}
Dialogue: 0,0:48:29.65,0:48:31.62,Default,,0,0,0,,她要二十五美元\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she wanted the $25{\r}
Dialogue: 0,0:48:31.68,0:48:33.53,Default,,0,0,0,,我儿子从她那偷的二十五美元\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that my son had stolen from her.{\r}
Dialogue: 0,0:48:33.97,0:48:35.82,Default,,0,0,0,,我不知道她在说什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Now, I didn't know what she was talkin' about.{\r}
Dialogue: 0,0:48:36.33,0:48:37.69,Default,,0,0,0,,我了解我的儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know my son.{\r}
Dialogue: 0,0:48:38.02,0:48:40.40,Default,,0,0,0,,她口中说的人一点都不像我的儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And that did not sound like the Robert I raised.{\r}
Dialogue: 0,0:48:41.54,0:48:43.32,Default,,0,0,0,,但事实证明\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But as it turned out,{\r}
Dialogue: 0,0:48:43.44,0:48:44.63,Default,,0,0,0,,她说的是对的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}it was true.{\r}
Dialogue: 0,0:48:45.41,0:48:47.61,Default,,0,0,0,,我的儿子真的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}My son had{\r}
Dialogue: 0,0:48:47.73,0:48:50.27,Default,,0,0,0,,两个星期挨家挨户的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}gone house to house in the neighborhood{\r}
Dialogue: 0,0:48:50.38,0:48:53.60,Default,,0,0,0,,告诉邻居们他是我儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for two weeks telling people that he was my son.{\r}
Dialogue: 0,0:48:54.07,0:48:57.26,Default,,0,0,0,,他正在筹款 为一个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And that he was raising money for a{\r}
Dialogue: 0,0:48:57.82,0:48:59.13,Default,,0,0,0,,虚构的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}fictional{\r}
Dialogue: 0,0:48:59.46,0:49:00.85,Default,,0,0,0,,名叫\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}police charity called{\r}
Dialogue: 0,0:49:00.88,0:49:02.40,Default,,0,0,0,,警察父母慈善机构\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Moms and Dads in Blue.{\r}
Dialogue: 0,0:49:05.32,0:49:06.98,Default,,0,0,0,,重点是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Point is...{\r}
Dialogue: 0,0:49:08.54,0:49:10.79,Default,,0,0,0,,你不会一直都了解你的孩子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you don't always know your kid.{\r}
Dialogue: 0,0:49:13.29,0:49:16.14,Default,,0,0,0,,那并不是你的错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And that is never your fault.{\r}
Dialogue: 0,0:49:19.44,0:49:22.86,Default,,0,0,0,,我已让NCIC在十六个州中搜索这辆车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I have NCIC searching for the vehicle in 16 states.{\r}
Dialogue: 0,0:49:19.44,0:49:22.86,Default,,0,0,0,,{\an8\c&H0091EC&\fnMicrosoft YaHei\fs14}NCIC:国家犯罪信息中心
Dialogue: 0,0:49:22.94,0:49:25.01,Default,,0,0,0,,我们今晚都休息一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's both try and catch up on some sleep tonight.{\r}
Dialogue: 0,0:49:25.09,0:49:26.36,Default,,0,0,0,,明早再联络\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Talk in the a.m.{\r}
Dialogue: 0,0:49:26.73,0:49:28.02,Default,,0,0,0,,接着你怎么处理的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What'd you do after?{\r}
Dialogue: 0,0:49:29.87,0:49:31.62,Default,,0,0,0,,你之后怎么和你的儿子处理这件事情的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}With your son, once you found out?{\r}
Dialogue: 0,0:49:34.26,0:49:37.72,Default,,0,0,0,,呃 我告诉我的邻居\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, I told my neighbor that{\r}
Dialogue: 0,0:49:38.29,0:49:40.32,Default,,0,0,0,,我确实\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I had, in fact,{\r}
Dialogue: 0,0:49:40.49,0:49:42.96,Default,,0,0,0,,创立了这个慈善机构并感谢她的捐助\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}founded the charity and I thanked her for the money.{\r}
Dialogue: 0,0:49:45.35,0:49:48.48,Default,,0,0,0,,但如果你再提起这件事我不会承认的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But I will deny it if you ever bring that up.{\r}
Dialogue: 0,0:49:48.74,0:49:49.94,Default,,0,0,0,,好吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:49:53.16,0:49:54.94,Default,,0,0,0,,听着 我希望你知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Look, I hope you know how thankful I am{\r}
Dialogue: 0,0:49:54.96,0:49:56.68,Default,,0,0,0,,我非常感激你能来帮我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that you were assigned to us.{\r}
Dialogue: 0,0:49:58.77,0:50:01.72,Default,,0,0,0,,我只是不希望有有待处理的案件\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just wish there wasn't a case to be assigned to.{\r}
Dialogue: 0,0:50:05.63,0:50:06.91,Default,,0,0,0,,好的 关了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Alright, shutting down.{\r}
Dialogue: 0,0:50:07.04,0:50:08.35,Default,,0,0,0,,-好  -有事再联系\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Yeah. - Talk soon.{\r}
Dialogue: 0,0:50:33.53,0:50:35.46,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs12\pos(250,170.533)}关机
Dialogue: 0,0:50:50.76,0:50:51.83,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs12\pos(169.2,143.866)}取消
Dialogue: 0,0:50:56.62,0:50:57.81,Default,,0,0,0,,就是这里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is it.{\r}
Dialogue: 0,0:51:00.98,0:51:02.60,Default,,0,0,0,,世界上虚度时光最佳的地方\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Best place in the world to do nothing.{\r}
Dialogue: 0,0:51:05.31,0:51:06.36,Default,,0,0,0,,就是这里了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is it.{\r}
Dialogue: 0,0:51:19.10,0:51:20.93,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\move(272,215.333,272,219.6,23,1823)}巴博萨惬意时刻
Dialogue: 0,0:51:30.53,0:51:32.20,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs20\pos(137.2,141.733)}巴博萨惬意时刻
Dialogue: 0,0:51:44.13,0:51:45.30,Default,,0,0,0,,{\an8\pos(68.267,48.755)}{\c&HF52808&\s0\fn方正黑体_GBK\fs18}巴博萨湖
Dialogue: 0,0:51:46.56,0:51:47.76,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(232,72.4)}地图
Dialogue: 0,0:51:49.76,0:51:50.60,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs11\pos(222,86.267)}导航
Dialogue: 0,0:51:52.56,0:51:53.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\pos(166.8,128.4)}巴博萨湖
Dialogue: 0,0:51:54.10,0:51:55.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\pos(127.6,90)}玛戈
Dialogue: 0,0:51:56.73,0:51:59.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs12\c&H000000&\move(97.2,160.4,108.8,116.667,27,1727)}最后一次{}见到玛戈
Dialogue: 0,0:52:06.73,0:52:10.70,Default,,0,0,0,,{\an8\pos(230,131.6)}{\c&H0CC783&\fn微软雅黑}5分钟
Dialogue: 0,0:52:06.73,0:52:10.70,Default,,0,0,0,,{\c&H64606B&\fn微软雅黑 Light\fs14\pos(247.6,186.267)}4.1英里
Dialogue: 0,0:52:19.55,0:52:21.79,Default,,0,0,0,,我是警探罗丝玛莉·维克\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You've reached Detective Sergeant Rosemary Vick.{\r}
Dialogue: 0,0:52:21.81,0:52:23.29,Default,,0,0,0,,请留下你的讯息 稍后我将回复\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Leave a message. I'll get back to you.{\r}
Dialogue: 0,0:52:23.35,0:52:25.25,Default,,0,0,0,,维克 醒醒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Vick! Wake up.{\r}
Dialogue: 0,0:52:25.57,0:52:27.34,Default,,0,0,0,,我知道她为什么出现在那个交叉口了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know why she was at that intersection.{\r}
Dialogue: 0,0:52:27.41,0:52:28.76,Default,,0,0,0,,她不是要离开\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She wasn't leaving town,{\r}
Dialogue: 0,0:52:28.79,0:52:30.98,Default,,0,0,0,,她是要开车到她最近五个月\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she was driving to the spot she's been visiting{\r}
Dialogue: 0,0:52:31.04,0:52:32.26,Default,,0,0,0,,一直去的那个地方\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for the past five months.{\r}
Dialogue: 0,0:52:32.86,0:52:34.40,Default,,0,0,0,,现在是凌晨3点45分\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's 3:45 a.m.{\r}
Dialogue: 0,0:52:34.49,0:52:35.75,Default,,0,0,0,,我现在开车去那里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm headed there now.{\r}
Dialogue: 0,0:52:37.33,0:52:39.86,Default,,0,0,0,,{\an8}{\fn微软雅黑\fs28}凌晨 4时22分
Dialogue: 0,0:52:40.00,0:52:44.04,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs28\pos(192,45.2)}警探维克\N{}视频通话
Dialogue: 0,0:52:44.03,0:52:45.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs24\pos(186,144.4)}连接中
Dialogue: 0,0:52:45.07,0:52:46.10,Default,,0,0,0,,嘿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey!{\r}
Dialogue: 0,0:52:46.66,0:52:47.91,Default,,0,0,0,,你在哪里?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where are you?{\r}
Dialogue: 0,0:52:49.57,0:52:51.13,Default,,0,0,0,,你说她离家出走了 维克\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You told me she ran away, Vick.{\r}
Dialogue: 0,0:52:51.16,0:52:52.13,Default,,0,0,0,,你是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Are...{\r}
Dialogue: 0,0:52:52.45,0:52:53.89,Default,,0,0,0,,你是在湖边吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Are you at the lake?{\r}
Dialogue: 0,0:52:54.48,0:52:55.73,Default,,0,0,0,,你说的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You told me{\r}
Dialogue: 0,0:52:56.20,0:52:57.54,Default,,0,0,0,,她离家出走了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she ran away.{\r}
Dialogue: 0,0:52:57.66,0:52:59.30,Default,,0,0,0,,好的 我立刻去那里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, I'm heading there right now.{\r}
Dialogue: 0,0:53:00.07,0:53:01.23,Default,,0,0,0,,罗伯特 亲爱的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Robert, honey,{\r}
Dialogue: 0,0:53:01.34,0:53:02.89,Default,,0,0,0,,回去睡觉 好吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}just go back to sleep, okay?{\r}
Dialogue: 0,0:53:03.08,0:53:05.79,Default,,0,0,0,,好的 我希望你保持冷静 可以吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay. I need you to stay calm, all right?{\r}
Dialogue: 0,0:53:05.87,0:53:08.03,Default,,0,0,0,,我们一起解决这件事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We're gonna figure this out together.{\r}
Dialogue: 0,0:53:11.40,0:53:12.72,Default,,0,0,0,,你给我看的是什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What are you showing me?{\r}
Dialogue: 0,0:53:14.65,0:53:16.10,Default,,0,0,0,,这是她的钥匙链\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is her keychain.{\r}
Dialogue: 0,0:53:17.88,0:53:18.91,Default,,0,0,0,,天呐\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, my God.{\r}
Dialogue: 0,0:53:22.32,0:53:23.81,Default,,0,0,0,,你报警了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did you call the cops?{\r}
Dialogue: 0,0:53:25.11,0:53:27.20,Default,,0,0,0,,我来了 我...我赶过来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm heading, I'm-I'm on my way.{\r}
Dialogue: 0,0:53:28.42,0:53:30.61,Default,,0,0,0,,是你说她离家出走的 维克\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You told me she ran away, Vick!{\r}
Dialogue: 0,0:53:33.93,0:53:36.53,Default,,0,0,0,,早上好 湾区 我是娜塔莉·博伊德\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good morning, Bay Area. I'm Natalie Boyd.{\r}
Dialogue: 0,0:53:36.72,0:53:38.50,Default,,0,0,0,,今天事情有了不好的进展\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A terrifying development today{\r}
Dialogue: 0,0:53:38.53,0:53:42.00,Default,,0,0,0,,与一名来自圣何塞的青少年匹配的车辆\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}as a vehicle matching that of a missing San Jose teenager{\r}
Dialogue: 0,0:53:42.02,0:53:45.73,Default,,0,0,0,,昨夜发现沉于圣克鲁斯湖底\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}was discovered late last night underneath a Santa Cruz lake.{\r}
Dialogue: 0,0:53:46.13,0:53:48.10,Default,,0,0,0,,正在进行\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}An operation is currently underway{\r}
Dialogue: 0,0:53:48.12,0:53:50.71,Default,,0,0,0,,玛戈·金驾驶的丰田凯美瑞打捞工作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to recover Margot Kim's Toyota Camry.{\r}
Dialogue: 0,0:53:51.06,0:53:52.99,Default,,0,0,0,,但目前 仍不清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But at this moment, we still don't know{\r}
Dialogue: 0,0:53:53.02,0:53:54.95,Default,,0,0,0,,是否这位埃弗克里克高二学生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}whether the Evercreek High sophomore{\r}
Dialogue: 0,0:53:54.97,0:53:56.70,Default,,0,0,0,,在车中\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is actually inside the vehicle.{\r}
Dialogue: 0,0:54:14.63,0:54:16.45,Default,,0,0,0,,看上去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay. It doesn't look like{\r}
Dialogue: 0,0:54:16.47,0:54:19.10,Default,,0,0,0,,前座并没有人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}there's anyone at the front seat.{\r}
Dialogue: 0,0:54:23.15,0:54:25.52,Default,,0,0,0,,啊 啊 他们好像\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, and uh, now it looks like they're...{\r}
Dialogue: 0,0:54:25.59,0:54:27.00,Default,,0,0,0,,嗯 他们正在检查后备箱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}okay, they're checking the trunk.{\r}
Dialogue: 0,0:54:43.46,0:54:44.47,Default,,0,0,0,,早上好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good morning.{\r}
Dialogue: 0,0:54:44.51,0:54:46.12,Default,,0,0,0,,感谢你们迅速赶来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Thank you for being here on such short notice.{\r}
Dialogue: 0,0:54:46.20,0:54:48.40,Default,,0,0,0,,我是罗丝玛莉·维克警探\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am Detective Sergeant Rosemary Vick,{\r}
Dialogue: 0,0:54:48.43,0:54:50.04,Default,,0,0,0,,是这起案件的调查负责人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}lead investigator on this case.{\r}
Dialogue: 0,0:54:50.06,0:54:52.06,Default,,0,0,0,,我身边这位是大卫\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am joined by David Kim.{\r}
Dialogue: 0,0:54:52.33,0:54:53.62,Default,,0,0,0,,玛戈的父亲\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot's father.{\r}
Dialogue: 0,0:54:54.03,0:54:56.60,Default,,0,0,0,,我们现提供事件的时间线\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We've provided you all with a timeline of events,{\r}
Dialogue: 0,0:54:56.67,0:54:59.44,Default,,0,0,0,,上周四 五月十一号\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}starting with last Thursday, May 11th,{\r}
Dialogue: 0,0:54:59.47,0:55:01.47,Default,,0,0,0,,是玛戈失踪的日子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}when Margot first went missing.{\r}
Dialogue: 0,0:55:01.54,0:55:03.01,Default,,0,0,0,,这是你们都知道的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That is yours to circulate.{\r}
Dialogue: 0,0:55:03.58,0:55:05.80,Default,,0,0,0,,重点在今天早上发生的事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But focusing on the events of this morning,{\r}
Dialogue: 0,0:55:05.95,0:55:09.20,Default,,0,0,0,,硅谷的警察局打捞上了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The Silicon Valley Police Department was able to recover{\r}
Dialogue: 0,0:55:09.23,0:55:10.44,Default,,0,0,0,,金女士的车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ms. Kim's vehicle.{\r}
Dialogue: 0,0:55:10.46,0:55:12.12,Default,,0,0,0,,回答目前最急切的问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And to answer the most pressing question,{\r}
Dialogue: 0,0:55:12.19,0:55:15.05,Default,,0,0,0,,玛戈·金不在车里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot Kim was not inside.{\r}
Dialogue: 0,0:55:16.17,0:55:17.20,Default,,0,0,0,,然而\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}However,{\r}
Dialogue: 0,0:55:17.55,0:55:19.79,Default,,0,0,0,,我们检查了车辆并且\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}our examination of the vehicle did reveal{\r}
Dialogue: 0,0:55:19.81,0:55:23.87,Default,,0,0,0,,在副驾驶仪表盘上发现了少量血液\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}a small amount of blood on the passenger side dashboard.{\r}
Dialogue: 0,0:55:23.96,0:55:27.62,Default,,0,0,0,,血液表明现场曾发生过肢体冲突\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Blood that points to a physical altercation.{\r}
Dialogue: 0,0:55:27.89,0:55:33.50,Default,,0,0,0,,意味着这起案件被正式定性为绑架案\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Meaning that this case is now officially being considered an abduction.{\r}
Dialogue: 0,0:55:34.03,0:55:36.67,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(274.8,76.133)}安珀警报\N加利福尼亚州 圣何塞 16岁亚洲女性
Dialogue: 0,0:55:34.03,0:55:36.67,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H0091EC&&\fs12}安珀警报:发生绑架事件后 执法机构和广播业人士自愿\N启动的紧急通报系统 以动员社会人士协助寻找\N失踪人员 其名称来源于1996年的"安珀事件"
Dialogue: 0,0:55:35.47,0:55:36.51,Default,,0,0,0,,下午好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good afternoon.{\r}
Dialogue: 0,0:55:36.53,0:55:38.60,Default,,0,0,0,,警方正在圣克鲁斯森林中展开搜救\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A search through the Santa Cruz forest{\r}
Dialogue: 0,0:55:38.62,0:55:40.52,Default,,0,0,0,,寻找一个当地青少年\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is now underway for a local teen{\r}
Dialogue: 0,0:55:40.64,0:55:42.96,Default,,0,0,0,,她的汽车被发现沉在湖底\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}whose car was found dumped in a lake.{\r}
Dialogue: 0,0:55:42.98,0:55:45.52,Default,,0,0,0,,当局请求任何知情人士\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Authorities are asking anyone with information{\r}
Dialogue: 0,0:55:45.58,0:55:48.65,Default,,0,0,0,,立即拨打热线电话或911\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to please call the hotline or 911 immediately.{\r}
Dialogue: 0,0:55:48.67,0:55:50.23,Default,,0,0,0,,从下午一点开始\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Starting at 1:00 p.m.,{\r}
Dialogue: 0,0:55:50.31,0:55:53.30,Default,,0,0,0,,我们把志愿者分成若干小组\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we'll be assigning every volunteer to a search team{\r}
Dialogue: 0,0:55:53.41,0:55:56.10,Default,,0,0,0,,每个小组负责一块区域\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Each team is in charge of a single section{\r}
Dialogue: 0,0:55:56.13,0:55:58.48,Default,,0,0,0,,在方圆十二平方英里内展开搜索\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}of the critical 12-square-mile radius.{\r}
Dialogue: 0,0:55:59.15,0:56:02.54,Default,,0,0,0,,受制于陡峭的峡谷和其他不安全的地形因素\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Because of the steep ravines and otherwise unsafe topography{\r}
Dialogue: 0,0:56:02.59,0:56:07.34,Default,,0,0,0,,我们已经消除了玛戈在湖西这些区域的可能性\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}on the west side of the lake, we have already cleared the following zones.{\r}
Dialogue: 0,0:56:08.14,0:56:11.17,Default,,0,0,0,,但是 还有很多区域要搜索\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But still, there's a lot of ground to cover.{\r}
Dialogue: 0,0:56:11.73,0:56:13.56,Default,,0,0,0,,{\an8\fn黑体\fs16\pos(138.8,207.867)}寻找失踪少女行动开始
Dialogue: 0,0:56:13.96,0:56:15.37,Default,,0,0,0,,玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot!{\r}
Dialogue: 0,0:56:18.31,0:56:19.51,Default,,0,0,0,,玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot!{\r}
Dialogue: 0,0:56:21.97,0:56:24.38,Default,,0,0,0,,离玛戈·金失踪已经四天之久了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's been four days since Margot Kim was last seen.{\r}
Dialogue: 0,0:56:24.49,0:56:26.70,Default,,0,0,0,,到目前为止 除了令人痛苦的湖中神秘沉车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And so far, nothing to show for it{\r}
Dialogue: 0,0:56:26.76,0:56:29.96,Default,,0,0,0,,没有再发现任何有价值的线索\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}except for the torturous mystery at its center.{\r}
Dialogue: 0,0:56:31.03,0:56:37.89,Default,,0,0,0,,在玛戈的座位底下发现了装着2500美元的信封\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}$2,500 in cash was found in a Manila envelope on Margot's passenger seat.{\r}
Dialogue: 0,0:56:38.73,0:56:40.10,Default,,0,0,0,,这是出逃资金吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Was it a runaway fund?{\r}
Dialogue: 0,0:56:40.23,0:56:42.28,Default,,0,0,0,,就像警探暗示的一样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Like the lead detective is suggesting,{\r}
Dialogue: 0,0:56:42.74,0:56:44.48,Default,,0,0,0,,还是另有隐情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}or was it something more?{\r}
Dialogue: 0,0:56:44.73,0:56:46.03,Default,,0,0,0,,{\an8\fn黑体\fs16\pos(146.8,192.934)}搜寻结束第一天
Dialogue: 0,0:56:46.18,0:56:50.07,Default,,0,0,0,,我们大约已经搜索了一半区域\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We covered about um... half the search zone already.{\r}
Dialogue: 0,0:56:50.74,0:56:54.11,Default,,0,0,0,,明天还有一整天的搜救工作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And um, tomorrow is a full day.{\r}
Dialogue: 0,0:56:54.21,0:56:57.62,Default,,0,0,0,,来的人越多 工作开展得越快\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And the more people came, the, the faster it went.{\r}
Dialogue: 0,0:56:58.23,0:57:00.94,Default,,0,0,0,,我能...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, could I...{\r}
Dialogue: 0,0:57:01.52,0:57:03.53,Default,,0,0,0,,如果你明天有时间的话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, if you have some time tomorrow,{\r}
Dialogue: 0,0:57:03.69,0:57:06.91,Default,,0,0,0,,我们会很感谢你的帮助\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}uh, we would...  love the help.{\r}
Dialogue: 0,0:57:12.56,0:57:13.90,Default,,0,0,0,,{\an8\fn黑体\fs16\pos(148.4,204.134)}夏季风暴延迟搜寻
Dialogue: 0,0:57:14.32,0:57:16.73,Default,,0,0,0,,显然这不是我们想要的结果\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is obviously not the outcome we wanted.{\r}
Dialogue: 0,0:57:16.81,0:57:18.83,Default,,0,0,0,,当能安全进入森林时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But we will resume the search{\r}
Dialogue: 0,0:57:18.85,0:57:21.70,Default,,0,0,0,,我们会继续搜索的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the moment it is safe to walk through the forest again.{\r}
Dialogue: 0,0:57:22.38,0:57:24.02,Default,,0,0,0,,同时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}In the meantime, however,{\r}
Dialogue: 0,0:57:24.07,0:57:26.81,Default,,0,0,0,,调查不会停止\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the investigation will not stop{\r}
Dialogue: 0,0:57:27.51,0:57:29.07,Default,,0,0,0,,直到我们找到玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}until we find Margot.{\r}
Dialogue: 0,0:57:29.33,0:57:30.20,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs28\pos(40,49.466)}本地热搜
Dialogue: 0,0:57:29.33,0:57:30.20,Default,,0,0,0,,{\an8\pos(123.2,86.266)}{\c&H000000&\i1}# {\i0\fn方正黑体_GBK\fs28}找到玛戈
Dialogue: 0,0:57:29.33,0:57:30.20,Default,,0,0,0,,{\an8\pos(203.2,175.467)}{\c&HA39383&\fn方正黑体_GBK\fs20}推文
Dialogue: 0,0:57:35.44,0:57:36.33,Default,,0,0,0,,{\an8\pos(109.6,23.333)}{\c&HD28D11&\i1}# {\i0\fn方正黑体_GBK\fs28}找到玛戈
Dialogue: 0,0:57:36.50,0:57:37.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(90.4,202.533)}发现沉没的...
Dialogue: 0,0:57:39.04,0:57:40.24,Default,,0,0,0,,{\an8\c&H000000&\pos(221.2,126.8)}{\fn方正黑体_GBK\fs14} 这就是在浪费纳税人的钱 她就在湖底
Dialogue: 0,0:57:41.10,0:57:42.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs14\pos(257.067,6.445)}我们采访了当地市民对玛戈失踪的看法
Dialogue: 0,0:57:42.43,0:57:43.42,Default,,0,0,0,,我想说 听着\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I mean, listen,{\r}
Dialogue: 0,0:57:43.44,0:57:45.85,Default,,0,0,0,,我知道我没有权利对此评头论足\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I do not think it is my place to say anything,{\r}
Dialogue: 0,0:57:45.92,0:57:47.03,Default,,0,0,0,,我只是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just...{\r}
Dialogue: 0,0:57:47.07,0:57:50.59,Default,,0,0,0,,我认为这种问题的祸源一般都在家庭内部\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I feel that these problems usually start in the household.{\r}
Dialogue: 0,0:57:51.36,0:57:52.60,Default,,0,0,0,,{\an8\pos(194.4,65.289)}{\c&HECB001&\i1}# {\i0\fn方正黑体_GBK\fs28}家长的失败
Dialogue: 0,0:57:52.76,0:57:54.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(190.667,109.378)}我们都知道这种事情的真相             {\an8\pos(194.4,65.289)}{\c&HECB001&\i1}# {\i0\fn方正黑体_GBK\fs22\c&HECB001&}是亲爸干的
Dialogue: 0,0:57:54.10,0:57:55.87,Default,,0,0,0,,{\an8\pos(185.6,171.956)}{\c&HECB001&\i1}# {\i0\fn方正黑体_GBK\fs22\c&HECB001&}是亲爸干的
Dialogue: 0,0:57:55.93,0:57:57.13,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(79.467,139.956)}奖项颁发给...
Dialogue: 0,0:57:58.13,0:58:00.13,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs36\pos(323.2,50.355)}年度\N\N\N\N\N\N\N\N\N父亲
Dialogue: 0,0:58:03.96,0:58:05.16,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(60.267,79.511)}本地热门视频
Dialogue: 0,0:58:06.47,0:58:08.37,Default,,0,0,0,,{\an8\pos(121.333,134.977)}{\c&HD28D11&\i0\fn微软雅黑\fs16}#{\i0\fn方正黑体_GBK\fs16}找到玛戈
Dialogue: 0,0:58:06.95,0:58:08.05,Default,,0,0,0,,她是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She was...{\r}
Dialogue: 0,0:58:08.33,0:58:09.47,Default,,0,0,0,,对不起\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry.{\r}
Dialogue: 0,0:58:13.47,0:58:15.07,Default,,0,0,0,,她是我最好的朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She was my best friend.{\r}
Dialogue: 0,0:58:15.66,0:58:17.24,Default,,0,0,0,,{\an8\pos(261.333,75.912)}{\c&H827F87&\fn方正黑体_GBK\fs20}浏览
Dialogue: 0,0:58:19.13,0:58:20.10,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs26\pos(234.666,81.644)}情感至深                 {\fs26} {\c&HB97358&}#啜泣
Dialogue: 0,0:58:21.46,0:58:22.56,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs9\move(168.534,68.134,168.534,30.445,30,197)}约翰·沃森 玛戈的同学\N我出名啦 看下面的采访
Dialogue: 0,0:58:21.91,0:58:24.57,Default,,0,0,0,,我非常愿意参加社区志愿者活动\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm just a big believer in community service.{\r}
Dialogue: 0,0:58:24.79,0:58:27.04,Default,,0,0,0,,审视着玛戈遭遇的一切\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Looking at all the things that happened to Margot,{\r}
Dialogue: 0,0:58:27.12,0:58:28.55,Default,,0,0,0,,我对自己说\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just thought to myself,{\r}
Dialogue: 0,0:58:28.67,0:58:30.26,Default,,0,0,0,,我觉得我能帮到他们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"I think they could use my help."{\r}
Dialogue: 0,0:58:30.40,0:58:31.56,Default,,0,0,0,,{\an8\pos(241.067,107.956)\c&H000000&\fn方正黑体_GBK}为你骄傲 - 奶奶
Dialogue: 0,0:58:33.00,0:58:35.00,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(200.533,34)}我不常在脸书上发文 我也对此没有兴趣
Dialogue: 0,0:58:35.16,0:58:36.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(200.533,7.689)}她是一位很棒的朋友
Dialogue: 0,0:58:36.46,0:58:38.56,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(200.533,7.689)}现在很难过 为玛戈祈祷
Dialogue: 0,0:58:38.73,0:58:39.63,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(220.8,84.489)}听到我的好友玛戈·金失踪 我太伤心了
Dialogue: 0,0:58:40.33,0:58:41.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(205.333,57.467)}反思与祈祷
Dialogue: 0,0:58:41.50,0:58:42.64,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(205.333,68.134)}玛戈 无论你在哪儿 我们都爱你 想念你
Dialogue: 0,0:58:42.64,0:58:43.84,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(205.333,68.134)}这几天非常情绪化 希望社区团结一致
Dialogue: 0,0:58:43.96,0:58:44.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HAFA7A3&\pos(205.333,57.467)}感到担心
Dialogue: 0,0:58:45.13,0:58:50.67,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(205.333,68.134)}她和我在一起
Dialogue: 0,0:58:50.73,0:58:55.73,Default,,0,0,0,,{\an8\c&HB0593A&\fn方正黑体_GBK\fs16\pos(141.866,43.955)}德瑞克·艾利斯
Dialogue: 0,0:58:50.73,0:58:55.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(212.266,106.533)}{\fs16}大家别大惊小怪了 她和我在一起\N那些钱是给拉皮条的 你们知道她喜欢做鸡
Dialogue: 0,0:58:50.73,0:58:55.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(169.067,264.534)}{\fs16}哇哦 猛料啊兄弟
Dialogue: 0,0:58:50.73,0:58:55.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(269.334,222.578)}{\fs16}你在开玩笑呢?
Dialogue: 0,0:59:04.40,0:59:06.86,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(259.734,188.445)}{\fs9}午后看两场电影
Dialogue: 0,0:59:07.03,0:59:11.04,Default,,0,0,0,,{\an8\c&HB0593A&\fn方正黑体_GBK\fs16\pos(228.799,46.799)}奥克菲尔剧院
Dialogue: 0,0:59:11.83,0:59:17.94,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HAFA7A3&\pos(259.2,109.378)}7分钟前
Dialogue: 0,0:59:24.88,0:59:25.98,Default,,0,0,0,,别对我撒谎\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Don't lie to me.{\r}
Dialogue: 0,0:59:27.82,0:59:30.36,Default,,0,0,0,,你不能再参加调查工作了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You can't assist an investigation anymore.{\r}
Dialogue: 0,0:59:31.97,0:59:32.95,Default,,0,0,0,,什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,0:59:33.19,0:59:34.51,Default,,0,0,0,,这什么 这什么意思\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What does that- what does that mean?{\r}
Dialogue: 0,0:59:34.56,0:59:39.02,Default,,0,0,0,,意味着我们不允许一个与案件密切相关的人参与调查\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It means that we can't have someone this close to the case helping investigate it.{\r}
Dialogue: 0,0:59:39.20,0:59:40.21,Default,,0,0,0,,是我的错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's my fault{\r}
Dialogue: 0,0:59:40.23,0:59:42.33,Default,,0,0,0,,让你卷入整个案件\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for getting you involved in the first place.{\r}
Dialogue: 0,0:59:42.61,0:59:45.74,Default,,0,0,0,,我这么做是因为我们已经错失了太多时机\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I did it because we had already lost so much time.{\r}
Dialogue: 0,0:59:45.77,0:59:46.67,Default,,0,0,0,,你现在要把我踢出去?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You're cutting me off?{\r}
Dialogue: 0,0:59:46.73,0:59:52.64,Default,,0,0,0,,每个相关的专业人士都已经参与其中\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Every professional who should be working on this case is working on this case.{\r}
Dialogue: 0,0:59:52.66,0:59:55.32,Default,,0,0,0,,我想做的只是帮你找到我的女儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All I'm trying to do is to help you find my daughter!{\r}
Dialogue: 0,0:59:55.38,0:59:58.14,Default,,0,0,0,,我知道 但是当局者迷\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know, but you can't see things clearly.{\r}
Dialogue: 0,0:59:59.49,1:00:01.36,Default,,0,0,0,,谁帮你找到了沉车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Who's the one who brought you to the car?{\r}
Dialogue: 0,1:00:01.64,1:00:03.55,Default,,0,0,0,,谁发现了那片湖\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Who's the one who found the lake{\r}
Dialogue: 0,1:00:03.57,1:00:04.84,Default,,0,0,0,,然后带你找到了沉车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and brought you to the car?{\r}
Dialogue: 0,1:00:04.92,1:00:07.53,Default,,0,0,0,,如果不是我 别说是你了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}If it wasn't for me, not you,{\r}
Dialogue: 0,1:00:07.55,1:00:09.93,Default,,0,0,0,,我们俩现在都还在琢磨为什么玛戈要出走\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you and I would be thinking that my Margot ran away.{\r}
Dialogue: 0,1:00:09.95,1:00:10.97,Default,,0,0,0,,就是因为我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But because of me...{\r}
Dialogue: 0,1:00:10.99,1:00:12.55,Default,,0,0,0,,我们也不能断言玛戈不是离家出走\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We don't know that she didn't run away.{\r}
Dialogue: 0,1:00:12.66,1:00:15.57,Default,,0,0,0,,她把钱带上了车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She had cash in her car.{\r}
Dialogue: 0,1:00:15.83,1:00:17.33,Default,,0,0,0,,但我们能确定的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But what we do know{\r}
Dialogue: 0,1:00:17.36,1:00:20.41,Default,,0,0,0,,一个十七岁的男孩现在正在医院治疗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is that a 17-year-old boy is in the hospital...{\r}
Dialogue: 0,1:00:20.48,1:00:22.41,Default,,0,0,0,,-他会没事的  -你把他下巴打碎了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- He's gonna be fine. - You broke his jaw!{\r}
Dialogue: 0,1:00:22.44,1:00:24.01,Default,,0,0,0,,-妈  -罗伯特 你怎么...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Mom? - Robert! What...?{\r}
Dialogue: 0,1:00:27.03,1:00:29.45,Default,,0,0,0,,亲爱的 让我来说就行\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sweetheart, let me take care of this, please.{\r}
Dialogue: 0,1:00:40.55,1:00:43.22,Default,,0,0,0,,如果你怀疑某人 没问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}If you have a suspicion about someone, that's fine.{\r}
Dialogue: 0,1:00:43.99,1:00:46.52,Default,,0,0,0,,但接下来 是警方的工作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But then, it is the police's job{\r}
Dialogue: 0,1:00:47.10,1:00:48.50,Default,,0,0,0,,来寻找证据\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to look for proof.{\r}
Dialogue: 0,1:00:48.58,1:00:49.89,Default,,0,0,0,,而不是你的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Not yours{\r}
Dialogue: 0,1:00:49.95,1:00:52.41,Default,,0,0,0,,去对一点碎片般的证据采取行动\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to act on flakes of evidence.{\r}
Dialogue: 0,1:00:57.30,1:00:58.80,Default,,0,0,0,,好吧 我不应该打他的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay, I shouldn't have done that.{\r}
Dialogue: 0,1:01:00.81,1:01:02.93,Default,,0,0,0,,从现在起 告诉我你们需要什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}From now on, just tell me what you need.{\r}
Dialogue: 0,1:01:03.11,1:01:04.89,Default,,0,0,0,,我们不需要任何你的帮助\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We need nothing from you.{\r}
Dialogue: 0,1:01:07.01,1:01:08.29,Default,,0,0,0,,我要工作了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm going back to the field.{\r}
Dialogue: 0,1:01:08.36,1:01:11.10,Default,,0,0,0,,不要打电话给我 除非我打给你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do not call me until I call you.{\r}
Dialogue: 0,1:01:11.28,1:01:13.37,Default,,0,0,0,,-维克 不要这样...维克  -去睡觉吧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Vick, please... Vick? - Get some sleep,{\r}
Dialogue: 0,1:01:13.50,1:01:14.57,Default,,0,0,0,,金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mr. Kim.{\r}
Dialogue: 0,1:01:25.34,1:01:27.53,Default,,0,0,0,,不要对我撒谎 不要走\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Don't lie to me. Don't walk away from me.{\r}
Dialogue: 0,1:01:32.67,1:01:33.57,Default,,0,0,0,,{\fn方正黑体_GBK\c&H000000&\move(224.533,284.578,224,72.667,20,420)}疯狂老爸剧院打人
Dialogue: 0,1:01:33.80,1:01:35.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\move(213.867,215.467,214.4,157.867,23,1890)}{\fs16}现实版《制造谋杀犯》...
Dialogue: 0,1:01:33.80,1:01:35.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H0091EC&&\fs12}《制造谋杀犯》:网飞的纪录片 现已播出两季
Dialogue: 0,1:01:38.96,1:01:42.24,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(240.001,223.289)}{\fs9}如果我的孩子也被这种朋克混子绑架了 我也会揍他的
Dialogue: 0,1:01:43.63,1:01:45.66,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(230.401,182.756)}{\fs9}虽然很遗憾但必须承认 她不可能还活着
Dialogue: 0,1:01:44.74,1:01:45.92,Default,,0,0,0,,该死的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, shit.{\r}
Dialogue: 0,1:01:47.84,1:01:49.14,Default,,0,0,0,,你们 停下来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Guys, stop!{\r}
Dialogue: 0,1:01:47.90,1:01:49.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\move(203.734,152.178,203.734,145.778,23,190)}{\fs9}他这是发出了什么声音呀哈哈哈
Dialogue: 0,1:01:49.27,1:01:50.77,Default,,0,0,0,,嘿 嘿 别打了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey! Hey, stop!{\r}
Dialogue: 0,1:01:51.11,1:01:52.17,Default,,0,0,0,,该死的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Shit!{\r}
Dialogue: 0,1:01:53.95,1:01:54.98,Default,,0,0,0,,滚开\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Get off!{\r}
Dialogue: 0,1:02:15.20,1:02:17.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(53.868,93.156)}{\fs12}同悼葬礼直播公司
Dialogue: 0,1:02:15.20,1:02:17.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(190.934,91.734)}{\fs12}致以我们最深切的同情
Dialogue: 0,1:02:19.70,1:02:27.70,Default,,0,0,0,,{\an8\c&H000000&\fn仿宋\fs9\pos(310.533,5.378)\b0}金先生您好 很遗憾在这样一个不幸的时刻联系您\N但我们想简短介绍一下我们的葬礼直播服务\N在我们都希冀玛戈安全归来的同时\N我们邀请您免费登陆我们平台\N您可以选择任意一种葬礼主持形式\N鉴于玛戈失踪事件持续发酵\N数以百计的好心人也许会申请参加\N而我们平台非常欢迎他们
Dialogue: 0,1:02:29.63,1:02:32.53,Default,,0,0,0,,{\an8\pos(85.867,171.956)\fn方正黑体_GBK\c&H000000&}她没有死
Dialogue: 0,1:02:35.96,1:02:39.56,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(246.934,119.334)}玛戈·金调查
Dialogue: 0,1:02:41.93,1:02:43.40,Default,,0,0,0,,{\an8\pos(88.134,103.866)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}玛戈·金的失踪
Dialogue: 0,1:02:46.36,1:02:48.30,Default,,0,0,0,,{\an8\pos(106.8,142.977)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}Reddit论坛:玛戈·金谜案
Dialogue: 0,1:02:50.10,1:02:51.70,Default,,0,0,0,,{\an8\c&HAFA7A3&\fn方正黑体_GBK\fs9\move(87.467,174.089,92.267,117.911,23,1590)}发布于14天前
Dialogue: 0,1:02:51.74,1:02:54.60,Default,,0,0,0,,{\an8}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}大卫·金杀了杀了玛戈的21个原因\N\N玛戈·金像《消失的女孩》里的女主那样疯了么?
Dialogue: 0,1:02:54.76,1:02:57.46,Default,,0,0,0,,{\an8\pos(241.067,144.222)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}面对现实:她被变态拐走了
Dialogue: 0,1:02:57.63,1:02:58.76,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs18\pos(238.4,32.578)}玛戈·金究竟怎么了
Dialogue: 0,1:02:58.77,1:03:01.25,Default,,0,0,0,,有没有人想过有这样一种可能\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Has anyone even considered the possibility{\r}
Dialogue: 0,1:03:01.28,1:03:03.46,Default,,0,0,0,,就是有一个陌生人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that it was an absolute stranger?{\r}
Dialogue: 0,1:03:03.56,1:03:05.64,Default,,0,0,0,,某个精神反常的变态\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Some sick perv{\r}
Dialogue: 0,1:03:05.70,1:03:08.04,Default,,0,0,0,,在森林里 看见了这个小女孩\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}in the middle of the woods, sees a little girl...{\r}
Dialogue: 0,1:03:13.10,1:03:15.26,Default,,0,0,0,,{\an8\move(198.4,192.578,206.933,152.045,23,2123)}{\c&HF52808&\s0\fn方正黑体_GBK\fs12}查看沉车照片
Dialogue: 0,1:03:15.60,1:03:16.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(158.934,109.378)}玛戈·金 沉车照片
Dialogue: 0,1:03:18.16,1:03:22.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\fs11\i1\pos(121.6,257.289)}点击查看
Dialogue: 0,1:03:23.50,1:03:26.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\move(283.201,72.4,283.201,78.089,23,1923)}{\fs9}玛戈·金出事车辆照片
Dialogue: 0,1:03:51.36,1:03:53.53,Default,,0,0,0,,{\an8\pos(241.067,87.334)\frz52.89\fn黑体\fs16\c&HFFFFFF&}飞鳍\N冰球队
Dialogue: 0,1:04:04.93,1:04:06.13,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(114.134,121.601)}{\fs9}皮特·金
Dialogue: 0,1:04:09.63,1:04:12.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&}飞鳍冰球队
Dialogue: 0,1:04:20.33,1:04:23.16,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(111.999,107.956)}你的生物书落在我这儿了
Dialogue: 0,1:04:23.90,1:04:27.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(290.666,159.867)}此外 昨晚聊得很愉快
Dialogue: 0,1:04:30.06,1:04:33.66,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(228.266,145.645)}昨晚很开心
Dialogue: 0,1:04:34.90,1:04:37.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(63.999,105.823)}这样做我觉得很奇怪
Dialogue: 0,1:04:38.46,1:04:41.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\move(253.332,45.378,253.865,78.8,30,1463)}不要告诉我爸爸
Dialogue: 0,1:04:38.46,1:04:41.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\move(110.399,86.622,110.932,128.578,30,1797)}不然我们俩都会死定了
Dialogue: 0,1:04:42.50,1:04:43.77,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(225.599,135.689)}如果被他发现
Dialogue: 0,1:04:42.50,1:04:43.77,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(211.732,179.067)}一定会杀了我的
Dialogue: 0,1:04:47.53,1:04:49.36,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(224.532,103.689)}今晚?
Dialogue: 0,1:04:49.53,1:04:50.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(100.266,107.956)}昨天真的太浪了
Dialogue: 0,1:04:50.93,1:04:51.93,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(230.932,182.623)}这样可以吗?
Dialogue: 0,1:04:53.57,1:04:54.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(221.866,94.445)}没问题 蛮好笑的
Dialogue: 0,1:04:53.57,1:04:54.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(201.066,136.4)}别紧张
Dialogue: 0,1:04:53.57,1:04:54.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(142.399,176.934)}讲真
Dialogue: 0,1:04:53.57,1:04:54.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(301.866,216.045)}你肯定马上就能见着我了
Dialogue: 0,1:04:56.13,1:04:57.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(302.932,186.178)}今晚?
Dialogue: 0,1:05:01.00,1:05:04.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(184.532,186.889)}到时候见
Dialogue: 0,1:05:07.53,1:05:08.90,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(253.332,107.956)}收件人:罗丝玛莉·维克
Dialogue: 0,1:05:10.36,1:05:13.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(113.066,125.023)}我认为我的弟弟...
Dialogue: 0,1:05:26.66,1:05:30.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(106.132,93.023)}附近的电器商店
Dialogue: 0,1:05:51.90,1:05:53.30,Default,,0,0,0,,在找喝的吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Looking for somethin' to drink?{\r}
Dialogue: 0,1:05:53.43,1:05:55.02,Default,,0,0,0,,-是的  -咖啡可以吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Yeah. - Coffee?{\r}
Dialogue: 0,1:05:55.22,1:05:56.93,Default,,0,0,0,,好啊 咖啡不错 谢了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, coffee would be awesome, thanks.{\r}
Dialogue: 0,1:06:00.85,1:06:02.47,Default,,0,0,0,,不行 你知道吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No. You know what?{\r}
Dialogue: 0,1:06:02.53,1:06:03.76,Default,,0,0,0,,你已经在过去的三天里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You've been probably straight chuggin'{\r}
Dialogue: 0,1:06:03.78,1:06:05.08,Default,,0,0,0,,喝了很多咖啡了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}caffeine the last three days.{\r}
Dialogue: 0,1:06:05.70,1:06:08.83,Default,,0,0,0,,我要给你泡点茶\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am going to make you some tea.{\r}
Dialogue: 0,1:06:09.92,1:06:10.98,Default,,0,0,0,,草药\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Herbal.{\r}
Dialogue: 0,1:06:11.48,1:06:14.43,Default,,0,0,0,,嗯 我要去看下我的车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Um, I-I gotta go to my car for a minute.{\r}
Dialogue: 0,1:06:14.48,1:06:15.97,Default,,0,0,0,,我马上就回来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'll be right back, man.{\r}
Dialogue: 0,1:06:39.26,1:06:41.00,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(175.999,67.423)}未命名
Dialogue: 0,1:06:41.16,1:06:43.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(175.999,67.423)}证据
Dialogue: 0,1:07:12.68,1:07:13.94,Default,,0,0,0,,警探那边调查得怎么样了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}How's the detective?{\r}
Dialogue: 0,1:07:16.23,1:07:17.79,Default,,0,0,0,,她在调查什么新线索吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She working on any new leads?{\r}
Dialogue: 0,1:07:20.01,1:07:20.99,Default,,0,0,0,,没有\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,1:07:21.26,1:07:22.49,Default,,0,0,0,,她没有\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's not.{\r}
Dialogue: 0,1:07:34.42,1:07:36.71,Default,,0,0,0,,你和玛戈的关系怎么样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What was your relationship like with Margot?{\r}
Dialogue: 0,1:07:39.02,1:07:40.06,Default,,0,0,0,,你是什么意思\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What do you mean?{\r}
Dialogue: 0,1:07:40.41,1:07:41.81,Default,,0,0,0,,你们在一起待过 对吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You guys hung out, right?{\r}
Dialogue: 0,1:07:44.24,1:07:45.26,Default,,0,0,0,,当然\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sure.{\r}
Dialogue: 0,1:07:47.55,1:07:49.10,Default,,0,0,0,,你知道的 我们...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, it was uh...{\r}
Dialogue: 0,1:07:52.01,1:07:53.88,Default,,0,0,0,,你知道 我们没有一起出去过很多次 但是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, we didn't hang out a bunch but{\r}
Dialogue: 0,1:07:56.12,1:07:57.32,Default,,0,0,0,,我们只是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, it's just...{\r}
Dialogue: 0,1:07:57.47,1:07:59.24,Default,,0,0,0,,顺便问一句 你最后一次见到她是什么时候\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}When's the last time you saw her, by the way?{\r}
Dialogue: 0,1:08:05.26,1:08:06.82,Default,,0,0,0,,你知道的 我必须得好好想想...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You know, I'd have to think...{\r}
Dialogue: 0,1:08:09.42,1:08:10.63,Default,,0,0,0,,我想我需要加点蜂蜜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I think this needs some honey.{\r}
Dialogue: 0,1:08:17.70,1:08:19.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(329.066,2.712)}维克警探来电
Dialogue: 0,1:08:21.66,1:08:22.95,Default,,0,0,0,,是谁啊\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Who was that?{\r}
Dialogue: 0,1:08:24.52,1:08:25.59,Default,,0,0,0,,工作\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Work.{\r}
Dialogue: 0,1:08:26.59,1:08:28.45,Default,,0,0,0,,哦 是啊 嗯...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, yeah, uh...{\r}
Dialogue: 0,1:08:29.27,1:08:30.88,Default,,0,0,0,,过了这么久他们跟你说了什么没\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What have they been saying to you this whole time?{\r}
Dialogue: 0,1:08:30.90,1:08:32.16,Default,,0,0,0,,回到之前的问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Going back to the previous question,{\r}
Dialogue: 0,1:08:32.20,1:08:33.71,Default,,0,0,0,,你最后一次见到她是什么时候\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}when's the last time you saw her?{\r}
Dialogue: 0,1:08:35.60,1:08:37.04,Default,,0,0,0,,兄弟...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Dude...{\r}
Dialogue: 0,1:08:37.56,1:08:39.21,Default,,0,0,0,,我记不清了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I can barely remember.{\r}
Dialogue: 0,1:08:40.18,1:08:41.72,Default,,0,0,0,,但是你知道吗 让我们...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But you know what? L-Let's...{\r}
Dialogue: 0,1:08:41.77,1:08:43.98,Default,,0,0,0,,让我们先别管这件事 好吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's get our minds off this for a sec, huh?{\r}
Dialogue: 0,1:08:44.51,1:08:45.85,Default,,0,0,0,,我感觉...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I feel like...{\r}
Dialogue: 0,1:08:45.91,1:08:48.34,Default,,0,0,0,,谈论这件事情快要把我们都逼疯了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we're just gonna drive each other crazy talking about it.{\r}
Dialogue: 0,1:08:48.98,1:08:50.43,Default,,0,0,0,,嘿 你的茶还可以吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, is your tea okay?{\r}
Dialogue: 0,1:08:50.99,1:08:52.41,Default,,0,0,0,,还是想喝咖啡吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Still want that coffee?{\r}
Dialogue: 0,1:08:52.66,1:08:54.26,Default,,0,0,0,,"昨晚很有趣"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"Last night was fun."{\r}
Dialogue: 0,1:08:54.33,1:08:55.43,Default,,0,0,0,,什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's that?{\r}
Dialogue: 0,1:09:01.56,1:09:03.70,Default,,0,0,0,,"我觉得这么做太奇怪了"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"I feel so weird doing this."{\r}
Dialogue: 0,1:09:06.19,1:09:07.95,Default,,0,0,0,,"别告诉你爸爸"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"Don't tell your father."{\r}
Dialogue: 0,1:09:10.31,1:09:11.74,Default,,0,0,0,,"他会杀了我的"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"He'd kill me."{\r}
Dialogue: 0,1:09:12.74,1:09:14.60,Default,,0,0,0,,"真的 他会杀了我的"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"Seriously, he'd murder me."{\r}
Dialogue: 0,1:09:16.53,1:09:18.61,Default,,0,0,0,,还有七次不同的时间\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And at seven different times...{\r}
Dialogue: 0,1:09:19.24,1:09:20.74,Default,,0,0,0,,"今晚见"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"See you tonight."{\r}
Dialogue: 0,1:09:22.36,1:09:24.31,Default,,0,0,0,,你对我女儿做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What'd you do to my daughter?{\r}
Dialogue: 0,1:09:27.83,1:09:29.92,Default,,0,0,0,,你对我女儿做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What'd you do to my daughter?{\r}
Dialogue: 0,1:09:32.89,1:09:34.78,Default,,0,0,0,,我可以解释 好吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I can explain, all right?{\r}
Dialogue: 0,1:09:36.44,1:09:37.48,Default,,0,0,0,,但是你知道吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But you know what?{\r}
Dialogue: 0,1:09:37.54,1:09:39.70,Default,,0,0,0,,让我们冷静下来 让我们坐下来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's calm down. Let's grab a seat.{\r}
Dialogue: 0,1:09:40.98,1:09:41.88,Default,,0,0,0,,别...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Please...{\r}
Dialogue: 0,1:09:42.31,1:09:43.37,Default,,0,0,0,,住手\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Stop.{\r}
Dialogue: 0,1:09:45.91,1:09:47.06,Default,,0,0,0,,你对她做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What'd you do to her?!{\r}
Dialogue: 0,1:09:47.08,1:09:48.61,Default,,0,0,0,,-别这样  -你对她做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Please! - What'd you do to her?!{\r}
Dialogue: 0,1:09:48.85,1:09:50.17,Default,,0,0,0,,你对她做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What'd you do to her?!{\r}
Dialogue: 0,1:09:50.53,1:09:52.35,Default,,0,0,0,,你和她一起做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What were you doing with her?!{\r}
Dialogue: 0,1:09:53.83,1:09:55.17,Default,,0,0,0,,大麻\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Weed!{\r}
Dialogue: 0,1:10:04.08,1:10:05.06,Default,,0,0,0,,什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,1:10:05.11,1:10:06.34,Default,,0,0,0,,大麻\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Weed!{\r}
Dialogue: 0,1:10:09.07,1:10:11.22,Default,,0,0,0,,我让她吸毒了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I was smoking her out.{\r}
Dialogue: 0,1:10:13.20,1:10:16.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(299.732,4.134)}维克警探:回电  紧急情况
Dialogue: 0,1:10:28.22,1:10:30.67,Default,,0,0,0,,当你们都从新年聚会回来时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}When you guys all came back from New Year's.{\r}
Dialogue: 0,1:10:31.40,1:10:33.29,Default,,0,0,0,,她发现了我的东西\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She found my piece.{\r}
Dialogue: 0,1:10:34.64,1:10:36.92,Default,,0,0,0,,她想试试 然后...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She wanted to try it and...{\r}
Dialogue: 0,1:10:37.47,1:10:38.98,Default,,0,0,0,,事情就一直这样发展下去了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It just kept happening.{\r}
Dialogue: 0,1:10:39.00,1:10:41.34,Default,,0,0,0,,你让我女儿吸毒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You gave drugs to my daughter?{\r}
Dialogue: 0,1:10:42.75,1:10:44.36,Default,,0,0,0,,我向她保证我不会说出去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I promised her I wouldn't tell.{\r}
Dialogue: 0,1:10:44.38,1:10:46.31,Default,,0,0,0,,所以她会半夜去找你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So she would come to you in the middle of the night{\r}
Dialogue: 0,1:10:46.33,1:10:48.60,Default,,0,0,0,,你除了给她大麻 鬼知道还发生了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and you would give her weed and do God knows what else?!{\r}
Dialogue: 0,1:10:48.64,1:10:50.04,Default,,0,0,0,,没别的了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's it.{\r}
Dialogue: 0,1:10:51.13,1:10:53.68,Default,,0,0,0,,我们只是爽一下 聊聊天 我发誓\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We'd get high and talk. I swear!{\r}
Dialogue: 0,1:10:53.13,1:10:56.13,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(277.332,3.423)}维克警探:我们抓到他了  打给我
Dialogue: 0,1:10:55.01,1:10:56.15,Default,,0,0,0,,是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,1:10:56.49,1:10:58.36,Default,,0,0,0,,我知道这听起来很糟糕\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know how wrong all this sounds.{\r}
Dialogue: 0,1:10:58.39,1:11:00.91,Default,,0,0,0,,我也知道我应该早点告诉你 但是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I know I should've told you sooner, but...{\r}
Dialogue: 0,1:11:01.57,1:11:04.54,Default,,0,0,0,,听着 我不觉得这和玛戈的失踪有任何关系\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Look, I-I didn't think it had anything to do with this.{\r}
Dialogue: 0,1:11:06.00,1:11:08.10,Default,,0,0,0,,你配得上当我弟弟吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What kind of a brother are you?{\r}
Dialogue: 0,1:11:10.79,1:11:12.36,Default,,0,0,0,,你问我?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You're asking me?{\r}
Dialogue: 0,1:11:12.63,1:11:14.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(355.199,-0.132)}{\fs14}维克警探来电
Dialogue: 0,1:11:14.81,1:11:16.36,Default,,0,0,0,,你闯进来\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You come in here,{\r}
Dialogue: 0,1:11:16.39,1:11:18.69,Default,,0,0,0,,用莫名其妙的话质问我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and accuse me of something un-fucking-speakable{\r}
Dialogue: 0,1:11:18.72,1:11:20.97,Default,,0,0,0,,你为什么不反思你自己呢?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and you're wondering what kind of family I am?!{\r}
Dialogue: 0,1:11:23.27,1:11:24.85,Default,,0,0,0,,你想知道为什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You wanna know why{\r}
Dialogue: 0,1:11:24.96,1:11:27.13,Default,,0,0,0,,她讨厌那些钢琴课吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she hated all those piano lessons?{\r}
Dialogue: 0,1:11:28.72,1:11:30.75,Default,,0,0,0,,因为每次她进去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It's because every time she would walk in,{\r}
Dialogue: 0,1:11:30.83,1:11:32.30,Default,,0,0,0,,她都会看到那架钢琴\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she would see that thing{\r}
Dialogue: 0,1:11:32.33,1:11:34.10,Default,,0,0,0,,她就会想念她的妈妈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and she would think about her mother.{\r}
Dialogue: 0,1:11:35.79,1:11:37.13,Default,,0,0,0,,她居然会跟你说这个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She told you that.{\r}
Dialogue: 0,1:11:39.95,1:11:42.15,Default,,0,0,0,,她告诉你却不告诉我 为什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She told you that and not me. Why?{\r}
Dialogue: 0,1:11:42.29,1:11:45.54,Default,,0,0,0,,因为你从来不问\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Because you never asked.{\r}
Dialogue: 0,1:11:46.21,1:11:47.99,Default,,0,0,0,,自从潘姆过世之后\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ever since Pam,{\r}
Dialogue: 0,1:11:48.05,1:11:50.21,Default,,0,0,0,,你再也没跟玛戈交流过\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you stopped talking to Margot about the only thing{\r}
Dialogue: 0,1:11:50.24,1:11:52.99,Default,,0,0,0,,这两年来一直萦绕在她心头的想念\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that's been on her mind the last two years.{\r}
Dialogue: 0,1:11:55.29,1:11:57.47,Default,,0,0,0,,她需要你跟她交流\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She needed you to talk to her.{\r}
Dialogue: 0,1:11:58.92,1:12:00.50,Default,,0,0,0,,而不是她来找你交流\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Not the other way around.{\r}
Dialogue: 0,1:12:15.24,1:12:17.51,Default,,0,0,0,,我只是以为时间会抚平这一切\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I just thought it would fix itself.{\r}
Dialogue: 0,1:12:19.20,1:12:21.50,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(338.666,5.557)}{\fs14}维克警探  语音信箱
Dialogue: 0,1:12:56.46,1:12:57.54,Default,,0,0,0,,大卫?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Davey?{\r}
Dialogue: 0,1:13:00.93,1:13:01.93,Default,,0,0,0,,大卫?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}David?{\r}
Dialogue: 0,1:13:01.97,1:13:03.53,Default,,0,0,0,,噢 天啊\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, God...{\r}
Dialogue: 0,1:13:08.45,1:13:11.04,Default,,0,0,0,,这里是"目击者"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is Eyewitness News.{\r}
Dialogue: 0,1:13:09.64,1:13:11.64,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(135.999,86.624)}{\fs14\c&HFFFFFF&}‘目击者’  新闻  最新消息
Dialogue: 0,1:13:11.27,1:13:13.62,Default,,0,0,0,,我们带来新鲜爆炸的新闻\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}With live breaking news.{\r}
Dialogue: 0,1:13:12.00,1:13:13.64,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(173.866,77.38)}{\fs14\c&HFFFFFF&}最新消息
Dialogue: 0,1:13:14.51,1:13:16.29,Default,,0,0,0,,早上好 我是福斯汀·利\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Good morning, I'm Faustine Rhee.{\r}
Dialogue: 0,1:13:14.56,1:13:16.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(145.599,188.313)}{\fs14\c&HFFFFFF&}最新消息  嫌疑人发布视频承认罪行
Dialogue: 0,1:13:16.32,1:13:17.66,Default,,0,0,0,,今天早上 作为一位父亲\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A parent's worst nightmare{\r}
Dialogue: 0,1:13:17.68,1:13:20.02,Default,,0,0,0,,大卫·金的最害怕的事情还是发生了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}comes true this morning for David Kim.{\r}
Dialogue: 0,1:13:20.13,1:13:21.89,Default,,0,0,0,,这件轰动了湾区的案件\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}In a shocking and thoroughly mind-boggling{\r}
Dialogue: 0,1:13:21.92,1:13:24.70,Default,,0,0,0,,有了令人震惊和让人完全不能接受的定论\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}conclusion to a story that's captivated the Bay Area,{\r}
Dialogue: 0,1:13:24.77,1:13:27.73,Default,,0,0,0,,失踪了五天的玛戈·金\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot Kim, missing now for five days,{\r}
Dialogue: 0,1:13:27.78,1:13:30.96,Default,,0,0,0,,在不久前不幸地被宣告死亡\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}has just been tragically declared dead.{\r}
Dialogue: 0,1:13:31.03,1:13:32.02,Default,,0,0,0,,为什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why?{\r}
Dialogue: 0,1:13:32.09,1:13:33.71,Default,,0,0,0,,线索来自于一份录制的认罪视频\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A taped confession.{\r}
Dialogue: 0,1:13:33.80,1:13:36.60,Default,,0,0,0,,兰迪·卡托夫六年前被释放\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Randy Cartoff, released just six years ago{\r}
Dialogue: 0,1:13:36.63,1:13:39.50,Default,,0,0,0,,罪名是藏毒以及性侵\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for felony drug possession and sexual assault{\r}
Dialogue: 0,1:13:39.56,1:13:41.64,Default,,0,0,0,,在网络上传了这段认罪视频\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}uploaded the confession online{\r}
Dialogue: 0,1:13:41.67,1:13:43.75,Default,,0,0,0,,在自杀前\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}before taking his own life.{\r}
Dialogue: 0,1:13:44.24,1:13:45.34,Default,,0,0,0,,我们会向你们展示\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We're going to show you{\r}
Dialogue: 0,1:13:45.41,1:13:47.58,Default,,0,0,0,,三分钟视频里的一段\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}a segment of the three-minute video now,{\r}
Dialogue: 0,1:13:47.63,1:13:49.10,Default,,0,0,0,,要提醒各位的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but please be warned,{\r}
Dialogue: 0,1:13:49.16,1:13:51.32,Default,,0,0,0,,接下来的视频包含着露骨的叙述\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the following contains graphic descriptions{\r}
Dialogue: 0,1:13:51.37,1:13:53.17,Default,,0,0,0,,以及可能令人不安的部分\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and disturbing content.{\r}
Dialogue: 0,1:13:53.24,1:13:55.62,Default,,0,0,0,,请观众酌情观看\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Viewer discretion is advised.{\r}
Dialogue: 0,1:13:57.03,1:13:58.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&、}{\fs14\c&HFFFFFF&}最新消息  嫌疑人承认罪行  而后自杀
Dialogue: 0,1:13:58.95,1:14:01.00,Default,,0,0,0,,绿色车里那个甜妞儿\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Dear girl in the green car,{\r}
Dialogue: 0,1:14:01.54,1:14:03.30,Default,,0,0,0,,我很抱歉对你做了那些事情\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry for what I did to you.{\r}
Dialogue: 0,1:14:04.19,1:14:07.35,Default,,0,0,0,,我很抱歉当你乞求我停下时 我没有听你的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry for not listening to you when you begged me to stop.{\r}
Dialogue: 0,1:14:09.74,1:14:11.26,Default,,0,0,0,,我很抱歉打了你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm sorry for beating you.{\r}
Dialogue: 0,1:14:12.06,1:14:13.43,Default,,0,0,0,,折磨你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And crushing you.{\r}
Dialogue: 0,1:14:14.00,1:14:15.81,Default,,0,0,0,,再把你和的手提箱一起扔进湖里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And tossing you with your suitcases{\r}
Dialogue: 0,1:14:15.90,1:14:17.49,Default,,0,0,0,,这样就没有人可以找到你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}so no one would ever find you.{\r}
Dialogue: 0,1:14:20.41,1:14:23.01,Default,,0,0,0,,我以为藏尸是很简单的事情 事实证明我错了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I thought this would be easy but it isn't.{\r}
Dialogue: 0,1:14:27.39,1:14:29.44,Default,,0,0,0,,当我们到达他在摩根山的住处时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}When we arrived at his Morgan Hill residence,{\r}
Dialogue: 0,1:14:27.63,1:14:31.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(93.332,194.002)}{\fs14\c&HFFFFFF&}早些时候  青少年疑似死亡
Dialogue: 0,1:14:29.46,1:14:31.20,Default,,0,0,0,,卡托夫先生已经死了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mr. Cartoff was deceased.{\r}
Dialogue: 0,1:14:31.28,1:14:33.77,Default,,0,0,0,,看起来是用枪自杀\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Seemingly by a self-inflicted gun wound.{\r}
Dialogue: 0,1:14:34.52,1:14:36.55,Default,,0,0,0,,有时候 这些认罪行为是恶作剧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sometimes, these confessions are hoaxes{\r}
Dialogue: 0,1:14:36.57,1:14:39.25,Default,,0,0,0,,但是根据他的描述 我们回到\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}but based on his story, we were able to return{\r}
Dialogue: 0,1:14:39.30,1:14:42.25,Default,,0,0,0,,我们发现微量DNA的湖的位置\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}to the lake site where we discovered trace DNA{\r}
Dialogue: 0,1:14:42.29,1:14:44.75,Default,,0,0,0,,这些DNA被证实与卡托夫先生的相吻合\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}matching that of Mr. Cartoff{\r}
Dialogue: 0,1:14:44.84,1:14:48.16,Default,,0,0,0,,同时这个湖是在搜寻区的关键位置\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}in critical areas of the search zone.{\r}
Dialogue: 0,1:14:49.30,1:14:51.81,Default,,0,0,0,,我已经通知过她的父亲\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I've already spoken to her father.{\r}
Dialogue: 0,1:14:52.51,1:14:54.26,Default,,0,0,0,,调查到这里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But at this point in the investigation,{\r}
Dialogue: 0,1:14:54.37,1:14:56.54,Default,,0,0,0,,我们可以确信的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we are very confident{\r}
Dialogue: 0,1:14:57.57,1:15:00.36,Default,,0,0,0,,金女士已经遇难\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that Ms. Kim's life was taken{\r}
Dialogue: 0,1:15:00.67,1:15:02.70,Default,,0,0,0,,在她出城的路上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}on her way out of town.{\r}
Dialogue: 0,1:15:02.80,1:15:04.71,Default,,0,0,0,,这周在圣何塞的市中心\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A private vigil will be held for Ms. Kim{\r}
Dialogue: 0,1:15:04.81,1:15:07.28,Default,,0,0,0,,会为金女士举办一个私人性质的悼念会\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}in downtown San Jose this week...{\r}
Dialogue: 0,1:15:14.59,1:15:16.44,Default,,0,0,0,,这依然说不通\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Still doesn't make sense.{\r}
Dialogue: 0,1:15:19.14,1:15:20.64,Default,,0,0,0,,他用来绑架她的车在哪里?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where's the car that he took her in?{\r}
Dialogue: 0,1:15:20.67,1:15:23.26,Default,,0,0,0,,那些手提箱在哪?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where's the... suitcases?{\r}
Dialogue: 0,1:15:23.96,1:15:25.86,Default,,0,0,0,,他把血迹都清理干净了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did-Did he clean up the blood?{\r}
Dialogue: 0,1:15:27.10,1:15:28.50,Default,,0,0,0,,维克 这个人是谁?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Vick, who is this guy?{\r}
Dialogue: 0,1:15:29.14,1:15:30.28,Default,,0,0,0,,我不知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I don't know.{\r}
Dialogue: 0,1:15:30.42,1:15:32.19,Default,,0,0,0,,我也希望我知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I wish I had an answer.{\r}
Dialogue: 0,1:15:33.71,1:15:34.89,Default,,0,0,0,,我知道的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}All I know{\r}
Dialogue: 0,1:15:35.05,1:15:36.64,Default,,0,0,0,,以及你需要知道的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and all you need to know{\r}
Dialogue: 0,1:15:36.71,1:15:40.15,Default,,0,0,0,,玛戈的死和你没有关系\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is that this had nothing to do with you.{\r}
Dialogue: 0,1:15:44.43,1:15:45.90,Default,,0,0,0,,我猜也是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I guess it don't.{\r}
Dialogue: 0,1:15:55.38,1:15:58.61,Default,,0,0,0,,对于你女儿所遭遇的和你所经历的一切\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am so sorry for everything that happened to your daughter.{\r}
Dialogue: 0,1:15:59.12,1:16:02.05,Default,,0,0,0,,我都感到非常痛心和抱歉\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And I'm so sorry for everything that happened to you.{\r}
Dialogue: 0,1:16:03.97,1:16:06.14,Default,,0,0,0,,如果有什么我可以帮你的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And if there's anything I can do for you,{\r}
Dialogue: 0,1:16:06.37,1:16:09.28,Default,,0,0,0,,尽管打给我\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}please do not hesitate to call.{\r}
Dialogue: 0,1:16:15.13,1:16:16.65,Default,,0,0,0,,-好的  -好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Okay. - Okay.{\r}
Dialogue: 0,1:16:28.20,1:16:32.10,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(313.067,70.978)}性侵犯者承认谋杀  而后自杀
Dialogue: 0,1:16:36.86,1:16:37.86,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(95.468,109.512)}{\fs12}同悼葬礼直播公司
Dialogue: 0,1:16:36.86,1:16:37.86,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(196.8,108.8)}{\fs12}今日守夜的视频
Dialogue: 0,1:16:38.54,1:16:49.30,Default,,0,0,0,,{\an8\c&H000000&\fn仿宋\fs9\pos(317.2,7.511)}金先生 感谢您选择同悼葬礼直播公司\N我们衷心地希望今天的报道能够给您\N在爱女逝去的这段时间带来些许的安慰\N您可以在守夜期间上传一些\N有关于您爱女的照片或视频\N只需简单地将文件通过下面的链接上传\N剩下的就交给我们
Dialogue: 0,1:16:49.46,1:16:51.33,Default,,0,0,0,,{\fn方正黑体_GBK\c&HFFAA0F&\u1\fs14\pos(103.6,190.177)}点击这里{\c&H6A6A6B&\u0}上传照片和视频
Dialogue: 0,1:16:52.73,1:16:57.16,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs9\pos(207.6,192.578)}将文件拖拽至此区域完成上传  或选择文件上传
Dialogue: 0,1:16:58.13,1:17:00.96,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\pos(127.6,164.667)}金_家庭_视频
Dialogue: 0,1:17:04.90,1:17:05.96,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(141.6,120.4)}玛戈
Dialogue: 0,1:17:08.16,1:17:09.50,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(201.2,63.867)}演奏会前夕_2015.mp4
Dialogue: 0,1:17:18.00,1:17:19.00,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(116.4,114.533)}泡菜秋葵汤.2010.avi
Dialogue: 0,1:17:20.07,1:17:21.67,Default,,0,0,0,,-把这些水倒了  -可以了吗?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Get all the water out. - Are these ready?{\r}
Dialogue: 0,1:17:31.26,1:17:32.50,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs16\pos(316.8,127.867)}玛戈_父亲节.mp4
Dialogue: 0,1:17:33.11,1:17:34.65,Default,,0,0,0,,爸爸快醒醒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Go wake up Daddy.{\r}
Dialogue: 0,1:17:38.15,1:17:40.15,Default,,0,0,0,,醒醒 爸爸 醒醒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wake up, Daddy! Wake up!{\r}
Dialogue: 0,1:17:40.65,1:17:41.76,Default,,0,0,0,,醒醒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wake up!{\r}
Dialogue: 0,1:17:43.44,1:17:44.54,Default,,0,0,0,,醒醒\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Wake up!{\r}
Dialogue: 0,1:17:44.61,1:17:46.91,Default,,0,0,0,,玛戈 给爸爸看看你今天在学校做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot, show Daddy what you made in school.{\r}
Dialogue: 0,1:17:55.90,1:18:04.44,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs16\c&H000000&\pos(233.2,114.534)}最棒的\N{\c&H000000&}爸爸
Dialogue: 0,1:17:56.63,1:17:57.91,Default,,0,0,0,,那是我的...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That's my...{\r}
Dialogue: 0,1:18:08.30,1:18:09.70,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs18\pos(277.6,134.8)}移入废纸篓
Dialogue: 0,1:18:13.23,1:18:15.46,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs12\pos(302.4,162.533)}清除废纸篓
Dialogue: 0,1:18:26.60,1:18:27.86,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs10\pos(216.4,240.934)}上传
Dialogue: 0,1:18:29.93,1:18:33.03,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs10\pos(213.6,216.934)}感谢上传  有问题请联系我们
Dialogue: 0,1:18:52.86,1:18:54.06,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(150.8,212.133)}照片
Dialogue: 0,1:19:05.03,1:19:06.06,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(155.2,20.133)}脸书
Dialogue: 0,1:19:08.76,1:19:09.96,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs10\pos(231.2,101.2)}相册
Dialogue: 0,1:19:19.06,1:19:21.26,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(262.8,93.734)}汤不热
Dialogue: 0,1:19:21.96,1:19:24.46,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16\pos(321.6,93.2)}换你了-历史直播记录
Dialogue: 0,1:19:29.37,1:19:30.79,Default,,0,0,0,,我是玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm Margot.{\r}
Dialogue: 0,1:19:31.76,1:19:34.06,Default,,0,0,0,,{\fn方正黑体_GBK\fs12\pos(261.2,233.199)}汉娜
Dialogue: 0,1:19:35.10,1:19:37.17,Default,,0,0,0,,{\an8\c&H90928D&\fn方正黑体_GBK\fs14\pos(201.6,158.266)}汉娜 20岁 服务员\N美国 匹兹堡
Dialogue: 0,1:20:02.83,1:20:05.43,Default,,0,0,0,,{\an8\c&H000000&\fn方正黑体_GBK\fs16}图片搜索 尝试拖拽一张图片至此
Dialogue: 0,1:20:11.30,1:20:12.76,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs12\pos(238.8,99.067)}空乘安全手册
Dialogue: 0,1:20:14.50,1:20:15.37,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs12\move(235.2,107.067,234.4,80.4,23,190)}健身照片图库
Dialogue: 0,1:20:16.83,1:20:18.33,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs12\pos(242.4,69.734)}学生用便携笔记本
Dialogue: 0,1:20:18.50,1:20:20.36,Default,,0,0,0,,{\an8\c&HFFFFFF&\fn方正黑体_GBK\fs12\pos(247.2,69.734)}汉娜·帕迪 图库模特
Dialogue: 0,1:20:18.50,1:20:20.36,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H0091EC&&\fs12\pos(192,22.622)}图库模特:一般为非职业模特\N其他公司可免费用其拍摄的照片做广告
Dialogue: 0,1:20:20.53,1:20:23.76,Default,,0,0,0,,{\an8\c&H827F87&\fn方正黑体_GBK\fs12\pos(216.267,142.978)}作为图库模特界识别度最高的面孔之一  汉娜·帕迪获得的第一份工作便是拍摄沙拉广告...
Dialogue: 0,1:20:23.91,1:20:24.77,Default,,0,0,0,,喂?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hello?{\r}
Dialogue: 0,1:20:24.79,1:20:26.58,Default,,0,0,0,,喂 我想请你帮我接通汉娜\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, I'm wondering if I could speak to Hannah?{\r}
Dialogue: 0,1:20:25.94,1:20:27.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(288,126.445)}人肉搜索
Dialogue: 0,1:20:26.63,1:20:27.61,Default,,0,0,0,,我就是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Speaking.{\r}
Dialogue: 0,1:20:27.68,1:20:30.57,Default,,0,0,0,,嗨 我想问问你关于我女儿的事 玛戈·金\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, I'm calling in regards to my daughter, Margot Kim.{\r}
Dialogue: 0,1:20:30.60,1:20:32.89,Default,,0,0,0,,你和她聊过 她的网名是"mkmania"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You spoke to her online as 'mkmania'.{\r}
Dialogue: 0,1:20:31.30,1:20:33.04,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(204.8,172.667)}汉娜·帕迪
Dialogue: 0,1:20:32.93,1:20:35.12,Default,,0,0,0,,哦 呃 你肯定打错了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, um, you must have the wrong number.{\r}
Dialogue: 0,1:20:35.15,1:20:37.09,Default,,0,0,0,,我只是模特之一 不发表任何言论\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I'm talent, not representation.{\r}
Dialogue: 0,1:20:37.12,1:20:38.90,Default,,0,0,0,,但如果你愿意我可以帮你联系我的经纪人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But I can connect you to my agent, if you like.{\r}
Dialogue: 0,1:20:38.93,1:20:41.36,Default,,0,0,0,,你那时是在演兼职的服务员吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, you work as a waitress part time then?{\r}
Dialogue: 0,1:20:41.40,1:20:44.20,Default,,0,0,0,,因为警探打电话给你的时候 你说你在上班\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Because you told the detective you were on a shift when she called.{\r}
Dialogue: 0,1:20:44.30,1:20:46.08,Default,,0,0,0,,呃 什么警探\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, what detective?{\r}
Dialogue: 0,1:20:46.27,1:20:47.24,Default,,0,0,0,,我不明白\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I don't understand.{\r}
Dialogue: 0,1:20:47.31,1:20:50.02,Default,,0,0,0,,维克警探 她四天前打了电话给你的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Detective Vick, she called you four days ago,{\r}
Dialogue: 0,1:20:50.05,1:20:51.38,Default,,0,0,0,,然后你告诉她你正...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and you told her you were on a shift...{\r}
Dialogue: 0,1:20:50.10,1:20:51.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\pos(298.667,132.845)}就是这个
Dialogue: 0,1:20:51.40,1:20:53.79,Default,,0,0,0,,先生 我没有接到警局的任何电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sir, I never got a call from the police.{\r}
Dialogue: 0,1:20:53.81,1:20:55.11,Default,,0,0,0,,你在说什么啊\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What are you talking about?{\r}
Dialogue: 0,1:20:55.29,1:20:56.97,Default,,0,0,0,,可能我没有表达清楚\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Maybe I'm not being clear.{\r}
Dialogue: 0,1:20:55.46,1:20:56.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&}汉娜·帕迪\N年龄 二十出头\N出生于3月9日
Dialogue: 0,1:20:57.06,1:20:58.39,Default,,0,0,0,,这几个月\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}On YouCast,{\r}
Dialogue: 0,1:20:58.42,1:21:00.46,Default,,0,0,0,,你一直在"换你了"直播网站上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you've been chatting with my daughter{\r}
Dialogue: 0,1:21:00.49,1:21:01.50,Default,,0,0,0,,和我女儿聊天\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for months.{\r}
Dialogue: 0,1:21:01.54,1:21:03.95,Default,,0,0,0,,你的网名是"fish_n_chips"\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Your user name is 'fish_n_chips'.{\r}
Dialogue: 0,1:21:04.01,1:21:06.11,Default,,0,0,0,,你妈妈生病住院\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Your mother was in the hospital.{\r}
Dialogue: 0,1:21:06.77,1:21:07.99,Default,,0,0,0,,对吧?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Right?{\r}
Dialogue: 0,1:21:10.54,1:21:12.34,Default,,0,0,0,,什么是"换你了"?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What's youcast?{\r}
Dialogue: 0,1:21:18.21,1:21:20.25,Default,,0,0,0,,我是罗丝玛莉·维克警探\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You've reached Detective Sergeant Rosemary Vick.{\r}
Dialogue: 0,1:21:20.28,1:21:21.98,Default,,0,0,0,,请留言 稍后回复您\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Leave a message. I'll get back to you.{\r}
Dialogue: 0,1:21:22.33,1:21:23.55,Default,,0,0,0,,维克...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Vick...{\r}
Dialogue: 0,1:21:23.64,1:21:25.56,Default,,0,0,0,,我是大卫·金 我发现一些奇怪的线索\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is David Kim. Something doesn't add up.{\r}
Dialogue: 0,1:21:25.58,1:21:27.43,Default,,0,0,0,,你收到了就给我回电话 好吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Call me back as soon as you get this, okay?{\r}
Dialogue: 0,1:21:28.00,1:21:33.03,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs14\pos(265.6,38.979)}皮特·金:嘿 给你本人联系好多次了 试试联系玛戈...
Dialogue: 0,1:21:34.06,1:21:35.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs14\pos(338.667,25.468)}守夜马上开始了...
Dialogue: 0,1:21:35.54,1:21:36.56,Default,,0,0,0,,硅谷警局\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}SVPD.{\r}
Dialogue: 0,1:21:36.59,1:21:39.25,Default,,0,0,0,,喂 我有急事 我必须要和\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hi, yes, this is an emergency. I need to speak to{\r}
Dialogue: 0,1:21:39.31,1:21:41.66,Default,,0,0,0,,罗丝玛莉·维克警探讲话 请帮我接通一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Detective Rosemary Vick. Can you connect me, please?{\r}
Dialogue: 0,1:21:41.69,1:21:43.76,Default,,0,0,0,,-先生 我很抱歉 这恐怕不行  -不行\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- I'm sorry, sir, that's not possible. - No.{\r}
Dialogue: 0,1:21:43.78,1:21:45.21,Default,,0,0,0,,-呃 是有什么事吗  -呃...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Uh, what is this regarding? - Um...{\r}
Dialogue: 0,1:21:45.35,1:21:48.37,Default,,0,0,0,,我是大卫·金 我需要和罗丝玛莉·维克说话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This is David Kim, I need to speak to Detective Rosemary Vick.{\r}
Dialogue: 0,1:21:48.39,1:21:50.06,Default,,0,0,0,,哦 金先生\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Oh, Mr. Kim.{\r}
Dialogue: 0,1:21:50.13,1:21:52.69,Default,,0,0,0,,玛戈的事我很抱歉\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I am so sorry to hear about Margot.{\r}
Dialogue: 0,1:21:52.74,1:21:55.00,Default,,0,0,0,,我们已经在全力侦破了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We are all so torn up about it here.{\r}
Dialogue: 0,1:21:55.05,1:21:56.01,Default,,0,0,0,,是 感谢你们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, thank you.{\r}
Dialogue: 0,1:21:56.03,1:21:57.24,Default,,0,0,0,,尤其是罗丝玛莉\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Especially Rosemary.{\r}
Dialogue: 0,1:21:57.26,1:21:59.41,Default,,0,0,0,,我还从来没见过谁这么投入一个案子中\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I have never seen someone so invested in a case.{\r}
Dialogue: 0,1:21:59.45,1:22:00.38,Default,,0,0,0,,是的 我知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Yeah, I know.{\r}
Dialogue: 0,1:22:00.41,1:22:02.00,Default,,0,0,0,,从她自愿接手这个案子那一刻开始\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}From the moment she volunteered to lead it,{\r}
Dialogue: 0,1:22:02.03,1:22:03.09,Default,,0,0,0,,-案件的处理  -等等\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- to the way she handled - Wait.{\r}
Dialogue: 0,1:22:03.11,1:22:04.13,Default,,0,0,0,,调查\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the investigation.{\r}
Dialogue: 0,1:22:04.15,1:22:05.82,Default,,0,0,0,,以及应对媒体\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And really dealt with the media.{\r}
Dialogue: 0,1:22:05.89,1:22:08.79,Default,,0,0,0,,喂 等等 她是...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Hey, w-w-wait, she did...{\r}
Dialogue: 0,1:22:09.66,1:22:11.46,Default,,0,0,0,,你说她是自愿接手?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did you say volunteered?{\r}
Dialogue: 0,1:22:11.77,1:22:12.85,Default,,0,0,0,,怎么了?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Sorry?{\r}
Dialogue: 0,1:22:13.02,1:22:15.56,Default,,0,0,0,,你刚说她是自愿接手的?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Y-Y-You said she volunteered.{\r}
Dialogue: 0,1:22:15.67,1:22:18.30,Default,,0,0,0,,那是不是 不 我一直以为\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Did, no, I-I was led to believe that she...{\r}
Dialogue: 0,1:22:18.39,1:22:21.17,Default,,0,0,0,,她是被分配到这起案件的 不是吗? 被派来的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she was assigned to the case, right? She was assigned?{\r}
Dialogue: 0,1:22:21.50,1:22:24.27,Default,,0,0,0,,不 她就是自愿申请的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No. She definitely volunteered.{\r}
Dialogue: 0,1:22:28.90,1:22:30.51,Default,,0,0,0,,真的很不巧\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Unfortunately though, I,{\r}
Dialogue: 0,1:22:30.70,1:22:32.93,Default,,0,0,0,,通过调度中心也不能帮你接通\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I still can't patch you through dispatch.{\r}
Dialogue: 0,1:22:33.10,1:22:36.51,Default,,0,0,0,,她也许正在去玛戈的守夜礼上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She's probably on her way to Margot's vigil, though.{\r}
Dialogue: 0,1:22:34.00,1:22:36.66,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(127.467,36.134)}罗丝玛莉·维克警探
Dialogue: 0,1:22:39.19,1:22:42.79,Default,,0,0,0,,你愿意的话 我可以帮你接通她的语音邮箱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}If you'd like, I can connect you to her work voicemail instead.{\r}
Dialogue: 0,1:22:43.40,1:22:48.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(142.933,58.89)}警探-人民的公仆 罗丝玛莉·维克警探与罪犯一起修建康复治疗诊所
Dialogue: 0,1:22:53.07,1:22:54.32,Default,,0,0,0,,金先生?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mr. Kim?{\r}
Dialogue: 0,1:23:08.21,1:23:09.42,Default,,0,0,0,,金先生?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mr. Kim?{\r}
Dialogue: 0,1:23:19.39,1:23:21.21,Default,,0,0,0,,这样的话 你可不可以...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Actually, can you...{\r}
Dialogue: 0,1:23:21.71,1:23:23.77,Default,,0,0,0,,帮我连线一下副警长呢\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}connect me to the deputy sheriff, please?{\r}
Dialogue: 0,1:23:29.33,1:23:33.57,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HD5AE87&\fs10\pos(166.08,99.566)}输入私人直播密码
Dialogue: 0,1:26:00.36,1:26:04.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\pos(206.4,137.113)}出现了一点问题\N致以最真诚歉意
Dialogue: 0,1:26:00.36,1:26:04.70,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\pos(130.8,145.113)}同悼葬礼直播公司
Dialogue: 0,1:26:26.63,1:26:29.26,Default,,0,0,0,,维克女士 已经通知了你的律师\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Ms. Vick, as your counsel was informed,{\r}
Dialogue: 0,1:26:29.38,1:26:31.88,Default,,0,0,0,,来签署这份文件 你在这将确认\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}by signing this document, you hereby verify{\r}
Dialogue: 0,1:26:31.91,1:26:33.52,Default,,0,0,0,,一周前被逮捕归案后\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the confession you provide today{\r}
Dialogue: 0,1:26:33.54,1:26:35.43,Default,,0,0,0,,你所提供的有关你被指控的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}pertaining to the crimes you're accused of{\r}
Dialogue: 0,1:26:35.46,1:26:37.80,Default,,0,0,0,,罪行的供诉\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}after your arrest one week ago.{\r}
Dialogue: 0,1:26:38.31,1:26:39.89,Default,,0,0,0,,之后地检署会根据你的指控\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The DA's office will then consider{\r}
Dialogue: 0,1:26:39.92,1:26:42.56,Default,,0,0,0,,酌情考虑宽大处理的可能\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}leniency in any charges related to the case.{\r}
Dialogue: 0,1:26:43.46,1:26:45.60,Default,,0,0,0,,包括一级谋杀的指控\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Including first-degree murder.{\r}
Dialogue: 0,1:26:47.15,1:26:50.67,Default,,0,0,0,,各位观众 现在我们将画面转到加利福尼亚圣何塞\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Excuse us, we're taking you now to San Jose, California,{\r}
Dialogue: 0,1:26:50.69,1:26:52.23,Default,,0,0,0,,在那儿将报道的是\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}where we're getting word now that{\r}
Dialogue: 0,1:26:50.70,1:27:07.27,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs14}警探在玛戈·金的守夜上被捕\N正在被遣往硅谷警察局的路上
Dialogue: 0,1:26:52.31,1:26:56.17,Default,,0,0,0,,一名警探在当地一名青少年的守夜上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}a law enforcement officer has just been taken into custody{\r}
Dialogue: 0,1:26:56.22,1:26:57.86,Default,,0,0,0,,被逮捕归案\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}at the vigil for a local teen{\r}
Dialogue: 0,1:26:57.88,1:26:59.81,Default,,0,0,0,,该青少年于上周四失踪\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}who's been missing since last Thursday.{\r}
Dialogue: 0,1:27:03.67,1:27:05.54,Default,,0,0,0,,我们从五月十一日的周四\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Let's start with Thursday, May 11th,{\r}
Dialogue: 0,1:27:05.71,1:27:07.46,Default,,0,0,0,,玛戈失踪那天说起\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}when Margot Kim went missing.{\r}
Dialogue: 0,1:27:08.04,1:27:09.46,Default,,0,0,0,,那晚发生了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What happened that night?{\r}
Dialogue: 0,1:27:10.33,1:27:11.61,Default,,0,0,0,,我接了一个电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I got a phone call.{\r}
Dialogue: 0,1:27:11.63,1:27:13.20,Default,,0,0,0,,谁打来的?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And who was calling?{\r}
Dialogue: 0,1:27:15.41,1:27:16.61,Default,,0,0,0,,我儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}My son.{\r}
Dialogue: 0,1:27:19.63,1:27:20.74,Default,,0,0,0,,妈妈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mom...{\r}
Dialogue: 0,1:27:20.97,1:27:22.76,Default,,0,0,0,,我犯了一个大错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I made a big mistake.{\r}
Dialogue: 0,1:27:22.92,1:27:25.23,Default,,0,0,0,,我想我要报警\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I think I, I need to call 911.{\r}
Dialogue: 0,1:27:25.29,1:27:26.88,Default,,0,0,0,,你接到电话后做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did you do after hearing the call?{\r}
Dialogue: 0,1:27:26.93,1:27:28.19,Default,,0,0,0,,我去找他了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I met him.{\r}
Dialogue: 0,1:27:27.70,1:27:29.17,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(138.667,74.001)}玛戈最后出现的地方
Dialogue: 0,1:27:28.82,1:27:29.81,Default,,0,0,0,,在哪\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Where?{\r}
Dialogue: 0,1:27:29.99,1:27:31.28,Default,,0,0,0,,在巴博萨湖附近\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Near Barbosa Lake.{\r}
Dialogue: 0,1:27:31.36,1:27:33.10,Default,,0,0,0,,他站在峡谷边上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He was standing on the edge of a ravine.{\r}
Dialogue: 0,1:27:34.06,1:27:36.25,Default,,0,0,0,,你到之后罗伯特跟你说了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did Robert tell you when you got there?{\r}
Dialogue: 0,1:27:34.36,1:27:37.14,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(177.067,126.801)}巴博萨峡谷
Dialogue: 0,1:27:36.78,1:27:38.51,Default,,0,0,0,,他说 有一个女孩在下面\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He said, "There's a girl down there."{\r}
Dialogue: 0,1:27:38.56,1:27:40.77,Default,,0,0,0,,我不小心把她推了下去\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}"I accidentally pushed a girl down there."{\r}
Dialogue: 0,1:27:41.30,1:27:42.45,Default,,0,0,0,,我问他为什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I asked him why.{\r}
Dialogue: 0,1:27:42.52,1:27:43.78,Default,,0,0,0,,他说了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did he say?{\r}
Dialogue: 0,1:27:43.98,1:27:45.01,Default,,0,0,0,,你要知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You need to understand{\r}
Dialogue: 0,1:27:45.03,1:27:46.89,Default,,0,0,0,,我儿子与其他人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that my son is not like other kids.{\r}
Dialogue: 0,1:27:46.94,1:27:48.69,Default,,0,0,0,,不一样 他会受伤\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He's different. He can be hurt...{\r}
Dialogue: 0,1:27:48.71,1:27:50.90,Default,,0,0,0,,他说了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did he say?{\r}
Dialogue: 0,1:27:53.81,1:27:56.20,Default,,0,0,0,,六个月前罗伯特在一个\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Six months ago, Robert recognized Margot{\r}
Dialogue: 0,1:27:56.22,1:27:58.15,Default,,0,0,0,,直播网站上发现了玛戈\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}on a live blogging website.{\r}
Dialogue: 0,1:28:01.76,1:28:03.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(204.267,128.401)}欢迎回来 @fish_n_chips 您的脸书好友@mkmania首次直播
Dialogue: 0,1:28:01.76,1:28:03.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(165.867,180.135)}进入
Dialogue: 0,1:28:01.76,1:28:03.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs10\pos(243.067,180.135)}不进入
Dialogue: 0,1:28:03.03,1:28:05.10,Default,,0,0,0,,他从小学就开始喜欢她了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He'd liked her since grade school.{\r}
Dialogue: 0,1:28:06.93,1:28:08.33,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs14}XxX5753 {\c&H0000FF&}被屏蔽\N{\c&HFFFFFF&}fish_n_chips {\c&H00FF00&}加入群聊
Dialogue: 0,1:28:09.67,1:28:10.90,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16}嘿 玛戈
Dialogue: 0,1:28:10.07,1:28:11.76,Default,,0,0,0,,他很了解她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Knew all about her life.{\r}
Dialogue: 0,1:28:12.37,1:28:14.77,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16}好奇怪 我们俩都在这里啦
Dialogue: 0,1:28:16.21,1:28:17.46,Default,,0,0,0,,包括她的爱好\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Her interests.{\r}
Dialogue: 0,1:28:17.50,1:28:19.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16}最喜欢的口袋妖怪是哪个 为什么
Dialogue: 0,1:28:20.92,1:28:22.26,Default,,0,0,0,,他做了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, what did he do?{\r}
Dialogue: 0,1:28:22.40,1:28:24.17,Default,,0,0,0,,{\c&H000000&\fn方正黑体_GBK\pos(222,123.867)}美女图片
Dialogue: 0,1:28:24.68,1:28:26.10,Default,,0,0,0,,他编了一个故事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Made up a story.{\r}
Dialogue: 0,1:28:27.83,1:28:29.39,Default,,0,0,0,,一个新身份\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}A new identity.{\r}
Dialogue: 0,1:28:29.49,1:28:31.72,Default,,0,0,0,,这张 是我在森林里照的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}This one, I took at a forest.{\r}
Dialogue: 0,1:28:32.10,1:28:33.53,Default,,0,0,0,,那六个月里 他们是朋友\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}For six months, they were friends.{\r}
Dialogue: 0,1:28:33.66,1:28:36.62,Default,,0,0,0,,你放学后要打二十五个小时的工?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}You work 25 hours on top of school?{\r}
Dialogue: 0,1:28:37.07,1:28:40.86,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16\pos(221.6,88.933)}工作到我妈离开医院 该死的癌症
Dialogue: 0,1:28:38.15,1:28:40.73,Default,,0,0,0,,那只是角色扮演 无伤大雅\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was just role-playing. It was harmless.{\r}
Dialogue: 0,1:28:40.87,1:28:44.77,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16\move(194,59.067,194,85.734,20,287)}我爸今天叫我辍学 交医疗费
Dialogue: 0,1:28:43.04,1:28:44.40,Default,,0,0,0,,直到那笔钱\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Until the money.{\r}
Dialogue: 0,1:28:45.14,1:28:49.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(277.6,97.466)}玛戈·金向您支付了2500美元
Dialogue: 0,1:28:45.85,1:28:48.20,Default,,0,0,0,,她在Venmo小额转账上找到了他的账号\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She found his user name on Venmo.{\r}
Dialogue: 0,1:28:49.02,1:28:52.77,Default,,0,0,0,,给他转了2500美金的住院费\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She sent $2,500 to cover hospital expenses.{\r}
Dialogue: 0,1:28:53.46,1:28:55.60,Default,,0,0,0,,但那住院费不存在\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Expenses that didn't exist.{\r}
Dialogue: 0,1:28:56.42,1:28:58.09,Default,,0,0,0,,她是个好女孩\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She was a good kid.{\r}
Dialogue: 0,1:28:58.47,1:29:00.78,Default,,0,0,0,,所以他决定把钱还给她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So he decided to give her money back.{\r}
Dialogue: 0,1:29:01.84,1:29:04.03,Default,,0,0,0,,他得坦白 这一切都结束了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He had to come clean. It was over.{\r}
Dialogue: 0,1:29:04.88,1:29:06.75,Default,,0,0,0,,他为什么不在学校给她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why didn't he just give it to her in school?{\r}
Dialogue: 0,1:29:07.46,1:29:10.78,Default,,0,0,0,,玛戈可能会在公众场合做出过激的反应\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot could have reacted the wrong way in public.{\r}
Dialogue: 0,1:29:11.37,1:29:13.81,Default,,0,0,0,,罗伯特不想这样\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Robert does not like that kind of attention.{\r}
Dialogue: 0,1:29:16.82,1:29:18.19,Default,,0,0,0,,所以他跟踪她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So he followed her.{\r}
Dialogue: 0,1:29:19.56,1:29:20.88,Default,,0,0,0,,他跟踪她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He followed her.{\r}
Dialogue: 0,1:29:21.63,1:29:23.53,Default,,0,0,0,,当你儿子到了湖边\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And what was Margot doing{\r}
Dialogue: 0,1:29:23.56,1:29:25.11,Default,,0,0,0,,玛戈在做什么?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}when your son arrived at the lake?{\r}
Dialogue: 0,1:29:25.22,1:29:27.05,Default,,0,0,0,,她在车里嗑嗨了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Getting high in her car.{\r}
Dialogue: 0,1:29:27.17,1:29:28.28,Default,,0,0,0,,然后呢\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Then what happened?{\r}
Dialogue: 0,1:29:28.34,1:29:29.60,Default,,0,0,0,,他进到车里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He got in.{\r}
Dialogue: 0,1:29:29.68,1:29:31.75,Default,,0,0,0,,她尖叫着打他\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She screamed. She hit him.{\r}
Dialogue: 0,1:29:31.87,1:29:33.50,Default,,0,0,0,,当时他还没意识到他在流血\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Before he could even realize that he was bleeding,{\r}
Dialogue: 0,1:29:33.59,1:29:35.40,Default,,0,0,0,,她逃走了 打电话求助\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}she was running, calling for help.{\r}
Dialogue: 0,1:29:35.43,1:29:36.44,Default,,0,0,0,,他去追她了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But he ran after her.{\r}
Dialogue: 0,1:29:36.49,1:29:37.80,Default,,0,0,0,,那里漆黑一片\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was pitch black.{\r}
Dialogue: 0,1:29:42.25,1:29:43.80,Default,,0,0,0,,他没有想过伤害她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He was not trying to hurt her.{\r}
Dialogue: 0,1:29:43.88,1:29:45.61,Default,,0,0,0,,他试着解释\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He was trying to explain.{\r}
Dialogue: 0,1:29:45.77,1:29:48.87,Default,,0,0,0,,但她在打他 尖叫着 然后他\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But she was punching him and screaming, and he...{\r}
Dialogue: 0,1:29:48.99,1:29:50.46,Default,,0,0,0,,他就还手了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He just, he reacted.{\r}
Dialogue: 0,1:29:50.53,1:29:52.30,Default,,0,0,0,,他 他推了一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He-He pushed back.{\r}
Dialogue: 0,1:29:53.56,1:29:55.10,Default,,0,0,0,,她就掉下去了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And she fell.{\r}
Dialogue: 0,1:29:56.42,1:29:57.45,Default,,0,0,0,,就\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Just...{\r}
Dialogue: 0,1:29:58.59,1:29:59.99,Default,,0,0,0,,就不见了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Just disappeared.{\r}
Dialogue: 0,1:30:02.67,1:30:04.30,Default,,0,0,0,,然后你儿子给你打电话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, your son calls you.{\r}
Dialogue: 0,1:30:04.54,1:30:06.51,Default,,0,0,0,,问你怎么掩盖一场谋杀\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Asked you to help cover up a murder.{\r}
Dialogue: 0,1:30:06.59,1:30:08.11,Default,,0,0,0,,不 不\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}No. No.{\r}
Dialogue: 0,1:30:08.99,1:30:10.45,Default,,0,0,0,,是我决定的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was my decision.{\r}
Dialogue: 0,1:30:10.56,1:30:12.72,Default,,0,0,0,,宝贝 你不要打给任何人\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Baby, I don't want you calling anyone.{\r}
Dialogue: 0,1:30:12.92,1:30:14.74,Default,,0,0,0,,妈妈会解决一切的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Mommy's gonna take care of everything.{\r}
Dialogue: 0,1:30:14.91,1:30:16.52,Default,,0,0,0,,是我的决定\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was my decision.{\r}
Dialogue: 0,1:30:16.63,1:30:19.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16\pos(149.2,192.4)}最新消息 玛戈·金一案嫌疑人被捕
Dialogue: 0,1:30:17.92,1:30:19.25,Default,,0,0,0,,不是他的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Not his.{\r}
Dialogue: 0,1:30:20.25,1:30:22.24,Default,,0,0,0,,你向峡谷下方看\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, now, you're looking down a ravine.{\r}
Dialogue: 0,1:30:22.57,1:30:24.57,Default,,0,0,0,,-你下去了吗  -我尝试了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}- Did you go down? - I tried.{\r}
Dialogue: 0,1:30:24.63,1:30:27.50,Default,,0,0,0,,但峡谷又窄又崎岖 没有搜救队是下不去的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But it was narrow, jagged, impossible without SAR.{\r}
Dialogue: 0,1:30:27.53,1:30:28.87,Default,,0,0,0,,那你怎么知道\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, how did you figure that...{\r}
Dialogue: 0,1:30:28.96,1:30:30.19,Default,,0,0,0,,她已经死了?\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}That she was dead?{\r}
Dialogue: 0,1:30:30.26,1:30:31.89,Default,,0,0,0,,峡谷又窄又崎岖\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was narrow, jagged,{\r}
Dialogue: 0,1:30:31.92,1:30:34.57,Default,,0,0,0,,至少有五十尺深\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and at least 50 feet to rock bottom.{\r}
Dialogue: 0,1:30:35.39,1:30:37.23,Default,,0,0,0,,而且一片死寂\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And it was dead quiet.{\r}
Dialogue: 0,1:30:38.03,1:30:39.60,Default,,0,0,0,,所以你帮了你的儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, you helped your son.{\r}
Dialogue: 0,1:30:41.45,1:30:43.18,Default,,0,0,0,,我把车丢到湖里\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I dumped the car in the lake.{\r}
Dialogue: 0,1:30:43.35,1:30:45.38,Default,,0,0,0,,然后接手了这次案件的调查权\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And took charge of the investigation.{\r}
Dialogue: 0,1:30:46.24,1:30:48.51,Default,,0,0,0,,我让大卫相信他的女儿逃走了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I convinced David his daughter ran away.{\r}
Dialogue: 0,1:30:49.65,1:30:52.09,Default,,0,0,0,,骗他说鉴证科有玛戈的硬盘\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Said forensics had Margot's hard drive.{\r}
Dialogue: 0,1:30:49.80,1:30:51.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H1819E4&\fs16\move(121.2,243.6,120.8,162.534,23,23)}注销账号
Dialogue: 0,1:30:51.60,1:30:53.96,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(201.2,129.999)}这个账号已经注销
Dialogue: 0,1:30:53.80,1:30:55.28,Default,,0,0,0,,然后告诉执法队\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And told the law enforcement team{\r}
Dialogue: 0,1:30:55.30,1:30:58.07,Default,,0,0,0,,我们排除了那片有她尸体的区域的嫌疑\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we'd already cleared the zone I knew her body was in.{\r}
Dialogue: 0,1:30:58.56,1:31:00.11,Default,,0,0,0,,但找到她\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But still, it was only a matter of time{\r}
Dialogue: 0,1:31:00.14,1:31:01.80,Default,,0,0,0,,只是时间问题\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}before they'd found the spot.{\r}
Dialogue: 0,1:31:03.05,1:31:05.26,Default,,0,0,0,,这就是为什么我需要一个人来坦白\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Which is why I needed a confession.{\r}
Dialogue: 0,1:31:07.40,1:31:09.99,Default,,0,0,0,,这是唯一能让调查终止的东西\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}It was the only thing that would make it stop.{\r}
Dialogue: 0,1:31:10.76,1:31:13.20,Default,,0,0,0,,所以你用毒品收买了你认识的一个前科犯\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So you drugged up an ex-con you knew,{\r}
Dialogue: 0,1:31:13.30,1:31:14.64,Default,,0,0,0,,让他演一个剧本\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}fed him a script.{\r}
Dialogue: 0,1:31:17.24,1:31:19.20,Default,,0,0,0,,他真的自杀了吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Was it really a suicide?{\r}
Dialogue: 0,1:31:24.95,1:31:26.51,Default,,0,0,0,,他是我儿子\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He's my son.{\r}
Dialogue: 0,1:31:29.40,1:31:38.07,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs16\pos(192.4,11.6)}加州警探全力保护儿子免受重罪指控\N圣何塞市前警探罗丝玛莉·维克签署"法律协议"\N愿意全部坦白 来减轻对她儿子的指控\N"没有其他选择"
Dialogue: 0,1:31:30.91,1:31:34.02,Default,,0,0,0,,你知道监狱会对他有多大的影响吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Do you know what prison would do to someone like him?{\r}
Dialogue: 0,1:31:40.17,1:31:41.67,Default,,0,0,0,,他犯了一个错\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He made a mistake.{\r}
Dialogue: 0,1:31:48.43,1:31:50.07,Default,,0,0,0,,那些刚刚坐下的观众听好了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}For those of you just joining,{\r}
Dialogue: 0,1:31:50.11,1:31:53.67,Default,,0,0,0,,我们现在正跟随着转移维克警探的警车\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we are now following the police SUV transporting Detective Vick{\r}
Dialogue: 0,1:31:53.76,1:31:55.26,Default,,0,0,0,,而金女士的爸爸...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}and the father of Ms. Kim...{\r}
Dialogue: 0,1:31:55.34,1:31:57.70,Default,,0,0,0,,所以在你被捕后  在去警局的路上\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}So, after your arrest, on your way to the station,{\r}
Dialogue: 0,1:31:57.78,1:31:59.45,Default,,0,0,0,,你没有跟任何人说话\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}you didn't say a word to anyone{\r}
Dialogue: 0,1:31:59.48,1:32:01.00,Default,,0,0,0,,直到金先生问你\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}until Mr. Kim asked you,{\r}
Dialogue: 0,1:32:01.09,1:32:03.13,Default,,0,0,0,,他的女儿是不是真的死了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}was his daughter actually dead.{\r}
Dialogue: 0,1:32:03.46,1:32:04.80,Default,,0,0,0,,你对他说了什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}What did you tell him?{\r}
Dialogue: 0,1:32:04.91,1:32:07.29,Default,,0,0,0,,我说即使玛戈在摔下去之后没有死\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}I said even if Margot had survived the fall she took,{\r}
Dialogue: 0,1:32:07.38,1:32:08.62,Default,,0,0,0,,也无济于事\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}it wouldn't have mattered.{\r}
Dialogue: 0,1:32:08.82,1:32:11.74,Default,,0,0,0,,她仍然需要在没有水的情况下活五天\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She still would've had to live five days without water.{\r}
Dialogue: 0,1:32:12.43,1:32:13.93,Default,,0,0,0,,大卫是什么反应\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And how did David respond?{\r}
Dialogue: 0,1:32:14.53,1:32:15.92,Default,,0,0,0,,车队现在正到达...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The procession is now approaching...{\r}
Dialogue: 0,1:32:15.98,1:32:17.84,Default,,0,0,0,,他让他们调头\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He told them to turn the car around.{\r}
Dialogue: 0,1:32:19.68,1:32:21.03,Default,,0,0,0,,为什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Why?{\r}
Dialogue: 0,1:32:22.93,1:32:24.87,Default,,0,0,0,,他说已经过去两天了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}He said it had been two days.{\r}
Dialogue: 0,1:32:25.00,1:32:27.52,Default,,0,0,0,,而且  等一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And uh, hold on a second...{\r}
Dialogue: 0,1:32:27.66,1:32:30.62,Default,,0,0,0,,她只需要在没有水的情况下活两天\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}She'd only have to live without water for two days.{\r}
Dialogue: 0,1:32:31.23,1:32:33.83,Default,,0,0,0,,他们似乎调头了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And it looks as though they're making a u-turn...{\r}
Dialogue: 0,1:32:34.06,1:32:36.21,Default,,0,0,0,,周一的时候下了一场暴雨\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}There was a storm on Monday.{\r}
Dialogue: 0,1:32:46.08,1:32:48.30,Default,,0,0,0,,我们现在正在收看\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We are currently watching live footage{\r}
Dialogue: 0,1:32:48.33,1:32:49.96,Default,,0,0,0,,由湾区的第二现场发来的\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}from our affiliates in the Bay Area{\r}
Dialogue: 0,1:32:50.00,1:32:53.19,Default,,0,0,0,,对失踪青少年玛戈·金的实时营救画面\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}of a recovery operation for missing teen, Margot Kim{\r}
Dialogue: 0,1:32:53.21,1:32:54.71,Default,,0,0,0,,警方现确认其方位\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}who authorities now believe{\r}
Dialogue: 0,1:32:54.74,1:32:57.27,Default,,0,0,0,,在这个北加州峡谷的谷底\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is at the bottom of this Northern California ravine.{\r}
Dialogue: 0,1:32:57.30,1:32:59.17,Default,,0,0,0,,被疑死亡仅几个小时\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Presumed dead only hours ago,{\r}
Dialogue: 0,1:32:59.23,1:33:02.48,Default,,0,0,0,,对玛戈·金的搜救在今天晚上重新启动\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}the search for Margot Kim is revitalized this evening.{\r}
Dialogue: 0,1:33:02.53,1:33:05.59,Default,,0,0,0,,嫌疑犯落网后提供给了警方\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}After a suspect in custody has provided authorities{\r}
Dialogue: 0,1:33:05.61,1:33:08.05,Default,,0,0,0,,金女士的确切方位\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}with Ms. Kim's exact location.{\r}
Dialogue: 0,1:33:08.11,1:33:12.19,Default,,0,0,0,,现在唯一的疑问就是  玛戈还活着吗\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}The only question that remains: Is Margot still alive?{\r}
Dialogue: 0,1:33:12.30,1:33:14.59,Default,,0,0,0,,还是说已经太迟了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Or is it already too late?{\r}
Dialogue: 0,1:33:14.67,1:33:16.87,Default,,0,0,0,,我们持续关注地面情况\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}We are continuing to monitor the ground{\r}
Dialogue: 0,1:33:16.90,1:33:19.91,Default,,0,0,0,,大家似乎仍在等待\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}as it appears that everyone is still just waiting{\r}
Dialogue: 0,1:33:19.93,1:33:22.01,Default,,0,0,0,,下方营救队的最新消息\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}for any update on the operation below.{\r}
Dialogue: 0,1:33:22.03,1:33:23.86,Default,,0,0,0,,但  等等  等一下\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But hold on, hold on...{\r}
Dialogue: 0,1:33:23.90,1:33:25.18,Default,,0,0,0,,我们刚刚收到消息\NWe‘re just getting word now
Dialogue: 0,1:33:25.22,1:33:27.30,Default,,0,0,0,,救援人员开始爬坡\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that rescue responders are beginning an ascent.{\r}
Dialogue: 0,1:33:27.38,1:33:28.73,Default,,0,0,0,,重申一遍  各位观众\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Uh, again, for our viewers,{\r}
Dialogue: 0,1:33:28.78,1:33:30.21,Default,,0,0,0,,我们不知道接下来会看到什么\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}we do not know what we're about to see{\r}
Dialogue: 0,1:33:30.24,1:33:31.78,Default,,0,0,0,,我们看到了一点\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}here as we get a peek around...{\r}
Dialogue: 0,1:33:31.88,1:33:34.53,Default,,0,0,0,,她在那  我们现在得到了一个更近的视野\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And there she is. We are getting a closer look now{\r}
Dialogue: 0,1:33:34.60,1:33:37.49,Default,,0,0,0,,两名救援人员正在将包着玛戈·金的救援袋\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}as two rescue responders are pulling up what appears to be{\r}
Dialogue: 0,1:33:37.57,1:33:41.57,Default,,0,0,0,,向山谷的顶部拉起\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Margot Kim in-in a body basket to the top of this ravine here...{\r}
Dialogue: 0,1:33:41.65,1:33:43.18,Default,,0,0,0,,再一次提醒我们的观众们\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Again, we just want to warn our viewers{\r}
Dialogue: 0,1:33:43.22,1:33:46.12,Default,,0,0,0,,我们并不知道她现在的情况\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}that we do not know what state she's in.{\r}
Dialogue: 0,1:33:46.19,1:33:48.37,Default,,0,0,0,,我们的镜头来到玛戈爸爸那边\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}As we get a look at Margot's father there...{\r}
Dialogue: 0,1:33:48.41,1:33:50.69,Default,,0,0,0,,他们正在向顶部攀升\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}But they are making their way up to the top.{\r}
Dialogue: 0,1:33:50.72,1:33:52.91,Default,,0,0,0,,看起来救援人员已经把她拉上来了\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And it looks like responders have gotten her up.{\r}
Dialogue: 0,1:33:53.01,1:33:55.32,Default,,0,0,0,,再次重申 还没有关于她状况的任何消息\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Again, no word yet as to her status...{\r}
Dialogue: 0,1:33:55.39,1:33:56.71,Default,,0,0,0,,可以看到她的爸爸\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}And there, you can see her father{\r}
Dialogue: 0,1:33:56.73,1:33:58.54,Default,,0,0,0,,搜救队似乎正在准备\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}as it appears that Search and Rescue{\r}
Dialogue: 0,1:33:58.56,1:34:01.13,Default,,0,0,0,,将玛戈·金的救援袋\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is now preparing to lift Margot's body basket{\r}
Dialogue: 0,1:34:01.15,1:34:03.06,Default,,0,0,0,,抬上他们事先准备好的担架\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}onto a stretcher they've just prepared.{\r}
Dialogue: 0,1:34:03.09,1:34:05.06,Default,,0,0,0,,重申  这里是实时画面\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}Again, this is live footage here{\r}
Dialogue: 0,1:34:05.09,1:34:08.47,Default,,0,0,0,,于上周失踪的玛戈·金\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}as Margot Kim, who has been missing for the last week{\r}
Dialogue: 0,1:34:08.51,1:34:11.87,Default,,0,0,0,,正在被抬上...\N{\c&H0091EC&\fnMicrosoft YaHei\fs14}is now being lifted onto...{\r}
Dialogue: 0,1:34:40.86,1:34:45.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(186.4,9.466)}有什么消息吗
Dialogue: 0,1:34:52.03,1:34:54.16,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(218,182.266)}没 我刚查过邮箱
Dialogue: 0,1:35:00.20,1:35:02.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs9\pos(220,21.199)}帕洛阿尔托大学音乐学院
Dialogue: 0,1:35:03.13,1:35:04.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HC4C864&\fs16\pos(226.8,106.533)}申请状态
Dialogue: 0,1:35:04.53,1:35:07.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(190.8,70.266)}您{\c&HC4C864&\b1}钢琴{\c&H000000&}课的申请
Dialogue: 0,1:35:07.90,1:35:10.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(190.8,164.133)}正在审核中
Dialogue: 0,1:35:11.43,1:35:13.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(117.2,197.199)}对了
Dialogue: 0,1:35:13.90,1:35:16.23,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(236.8,200.399)}那张照片我还没发给你呢
Dialogue: 0,1:35:16.40,1:35:17.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(136.8,228.666)}什么照片
Dialogue: 0,1:35:17.60,1:35:19.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs14\frz30.62\frx10\fry322\pos(220.4,15.332)}欢迎回来
Dialogue: 0,1:35:17.60,1:35:19.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs10\frz7.831\pos(226.4,65.465)\frx6\fry314}埃弗克里克中学
Dialogue: 0,1:35:20.36,1:35:22.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(191.467,227.421)}哦爸爸 我看上去好丑
Dialogue: 0,1:35:24.53,1:35:25.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(136,196.132)}开玩笑吧!!
Dialogue: 0,1:35:25.50,1:35:27.00,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(150.933,228.843)}不聊了
Dialogue: 0,1:35:27.93,1:35:35.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(190.8,105.11)}您{\c&HC4C864&\b1}钢琴{\c&H000000&}课的申请
Dialogue: 0,1:35:27.93,1:35:35.40,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(190.8,184.755)}正在审核中
Dialogue: 0,1:35:35.50,1:35:37.10,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(195.067,199.688)}完全理解
Dialogue: 0,1:35:37.26,1:35:38.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(295.333,204.666)}不要一直刷新申请网页啦
Dialogue: 0,1:35:38.90,1:35:40.50,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(240.933,230.977)}我没有
Dialogue: 0,1:35:43.30,1:35:44.80,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(135.333,201.822)}好吧
Dialogue: 0,1:35:46.40,1:35:47.60,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(109.2,201.111)}对了
Dialogue: 0,1:35:48.30,1:35:50.53,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(204.667,199.688)}我为你感到骄傲
Dialogue: 0,1:35:59.23,1:36:03.06,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs29\pos(187.067,131.421)}妈妈也是
Dialogue: 0,1:36:07.76,1:36:11.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs20\pos(120.934,128.577)}谢谢你 老爸
Dialogue: 0,1:36:12.70,1:36:14.26,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(123.6,216.755)}好啦 真的不和你聊了
Dialogue: 0,1:36:16.66,1:36:18.46,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\pos(171.6,208.933)}今晚见
Dialogue: 0,1:36:20.73,1:36:21.73,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&HFFFFFF&\fs15\pos(82.533,164.133)}关机
Dialogue: 0,1:36:25.76,1:36:26.76,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs9\pos(173.733,152.755)}取消关机
Dialogue: 0,1:36:30.90,1:36:32.30,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs16\move(303.867,241.644,303.334,125.733,23,823)}将图片设为桌面
Dialogue: 0,1:36:34.83,1:36:35.83,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs18\pos(192.4,150.622)}关机
Dialogue: 0,1:36:36.23,1:36:39.43,Default,,0,0,0,,{\an8\fn方正黑体_GBK\c&H000000&\fs20\pos(180.667,90.888)}确认关机
Dialogue: 0,1:37:41.80,1:37:45.83,Default,,0,0,0,,{\fad(000,933)\an8\fn方正黑体_GBK\fs19\pos(317.2,151.866)}网络迷踪


*/};