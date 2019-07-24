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
Collisions: Normal
PlayResX: 384
PlayResY: 288
Timer: 100.0000
Synch Point: 
WrapStyle: 0
ScaledBorderAndShadow: no

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,FZHei-B01,20,&H00FFFFFF,&H0000FFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,1,2,5,5,2,134

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.00,0:00:09.00,Default,,0,0,0,,远鉴字幕组制作\N{\fs14}[Visionary] 0day-sub{\r}
Dialogue: 0,0:00:02.00,0:00:06.00,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑\c&H000000&\b0\3c&H000000&\3a&HFF&\4c&H000000&\4a&HFF&\pos(77.92,231.28)}翻译        {\c&HFFFFFF&}ImperialW
Dialogue: 0,0:00:02.00,0:00:17.00,Default,,0,0,0,,{\an9\bord0\shad0\fscx130\fscy170\frz180\p1\alpha&90\c&H000000&\b1\fad(800,500)\pos(115,242.9)}{\clip(94.4,219.2,95.6,246.4)\t(0,300,\clip(94.4,219.2,339.2,246.4)}m 200 -1 l 200 13 l 19 13 b 14 12 14 6 14 6 b 14 6 14 0 19 -1{\p0}
Dialogue: 0,0:00:02.00,0:00:17.00,Default,,0,0,0,,{\fad(200,500)\bord0\shad0\fscx150\fscy170\p1\c&H0091EC&\b1\pos(66,246.4)}m 38 -1 l 44 6 l 38 13 l 19 13 b 14 12 14 6 14 6 b 14 6 14 0 19 -1{\p0}
Dialogue: 0,0:00:06.00,0:00:10.00,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑\c&H000000&\b0\3c&H000000&\3a&HFF&\4c&H000000&\4a&HFF&\pos(77.92,231.28)}时间轴        {\c&HFFFFFF&}BIN 可乐要加冰
Dialogue: 0,0:00:10.00,0:00:14.00,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑\c&H000000&\b0\3c&H000000&\3a&HFF&\4c&H000000&\4a&HFF&\pos(77.92,231.28)}校对        {\c&HFFFFFF&}ImperialW
Dialogue: 0,0:00:14.00,0:00:17.00,Default,,0,0,0,,{\an4\fad(500,500)\fn微软雅黑\c&H000000&\b0\3c&H000000&\3a&HFF&\4c&H000000&\4a&HFF&\pos(77.92,231.28)}总监        {\c&HFFFFFF&}ImperialW
Dialogue: 0,0:00:34.00,0:00:37.00,Default,,0,0,0,,{\fad(500,500)\an7\fs10}热门电影字幕欢迎关注微博 @远鉴字幕组v\N字幕组官方公众号：禾写电影\N若是想施展您的翻译才华 让自己的名字出现在字幕开头\N远鉴字幕组欢迎您加入\N远鉴字幕组招新群 483552098\N招募英翻 校对与特效人员 诚邀您的加入
Dialogue: 0,0:00:36.25,0:00:39.56,Default,,0000,0000,0000,,{\an8\fs16}俄亥俄州 蒙哥马利县
Dialogue: 0,0:02:11.56,0:02:13.09,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No!{\r}
Dialogue: 0,0:02:13.10,0:02:14.43,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No!{\r}
Dialogue: 0,0:02:39.82,0:02:41.96,Default,,0000,0000,0000,,他砍掉了我的手\N{\fnMicrosoft YaHei\fs14}He took my hand.{\r}
Dialogue: 0,0:02:44.03,0:02:45.59,Default,,0000,0000,0000,,他砍掉了我的手\N{\fnMicrosoft YaHei\fs14}He took my hand!{\r}
Dialogue: 0,0:02:54.87,0:02:57.01,Default,,0000,0000,0000,,塔卢拉 别吵了\N{\fnMicrosoft YaHei\fs14}Talulah, stop.{\r}
Dialogue: 0,0:03:03.88,0:03:05.18,Default,,0000,0000,0000,,亲爱的\N{\fnMicrosoft YaHei\fs14}Honey?{\r}
Dialogue: 0,0:03:16.99,0:03:18.66,Default,,0000,0000,0000,,是不是早产\N{\fnMicrosoft YaHei\fs14}Is he early?{\r}
Dialogue: 0,0:03:21.80,0:03:23.03,Default,,0000,0000,0000,,对\N{\fnMicrosoft YaHei\fs14}Yeah.{\r}
Dialogue: 0,0:03:23.03,0:03:24.70,Default,,0000,0000,0000,,今天才22号啊\N{\fnMicrosoft YaHei\fs14}It's only the 22nd.{\r}
Dialogue: 0,0:03:26.57,0:03:28.34,Default,,0000,0000,0000,,约翰 他已经迫不及待了\N{\fnMicrosoft YaHei\fs14}He couldn't wait, John.{\r}
Dialogue: 0,0:03:36.35,0:03:38.71,Default,,0000,0000,0000,,亲爱的\N{\fnMicrosoft YaHei\fs14}- Honey. - Huh?{\r}
Dialogue: 0,0:03:38.72,0:03:40.55,Default,,0000,0000,0000,,我觉得可能你需要这个\N{\fnMicrosoft YaHei\fs14}I think you might need these.{\r}
Dialogue: 0,0:03:43.32,0:03:44.39,Default,,0000,0000,0000,,你没事吧\N{\fnMicrosoft YaHei\fs14}You okay?{\r}
Dialogue: 0,0:03:44.39,0:03:46.02,Default,,0000,0000,0000,,- 我么 - 对\N{\fnMicrosoft YaHei\fs14}- Me? - Yeah.{\r}
Dialogue: 0,0:03:46.02,0:03:49.09,Default,,0000,0000,0000,,对 完全没问题\N{\fnMicrosoft YaHei\fs14}Good, yeah. Yeah, seriously.{\r}
Dialogue: 0,0:03:49.76,0:03:50.89,Default,,0000,0000,0000,,我没事\N{\fnMicrosoft YaHei\fs14}I'm good.{\r}
Dialogue: 0,0:03:58.34,0:04:00.27,Default,,0000,0000,0000,,告诉你一个天大的好消息\N{\fnMicrosoft YaHei\fs14}You'll never believe it.{\r}
Dialogue: 0,0:04:00.27,0:04:02.41,Default,,0000,0000,0000,,我们要给你带一个小弟弟回来了\N{\fnMicrosoft YaHei\fs14}We're gonna bring you home a little brother.{\r}
Dialogue: 0,0:04:03.24,0:04:04.67,Default,,0000,0000,0000,,他终于要来啦\N{\fnMicrosoft YaHei\fs14}Finally.{\r}
Dialogue: 0,0:04:50.29,0:04:52.09,Default,,0000,0000,0000,,要不要再联系一下李医生\N{\fnMicrosoft YaHei\fs14}You want to try Dr. Lee again?{\r}
Dialogue: 0,0:04:52.09,0:04:54.66,Default,,0000,0000,0000,,- 好的 - 速去速回\N{\fnMicrosoft YaHei\fs14}- Mmm-hmm. - Okay. Just a sec, okay?{\r}
Dialogue: 0,0:04:54.66,0:04:56.73,Default,,0000,0000,0000,,一切都正常 对吧\N{\fnMicrosoft YaHei\fs14}Looks good, right? Everything looks good?{\r}
Dialogue: 0,0:05:02.60,0:05:03.67,Default,,0000,0000,0000,,你没事吧\N{\fnMicrosoft YaHei\fs14}You okay?{\r}
Dialogue: 0,0:05:03.67,0:05:05.07,Default,,0000,0000,0000,,好的\N{\fnMicrosoft YaHei\fs14}- Mmm. - Good.{\r}
Dialogue: 0,0:05:08.67,0:05:10.07,Default,,0000,0000,0000,,好的\N{\fnMicrosoft YaHei\fs14}Okay?{\r}
Dialogue: 0,0:05:16.81,0:05:17.95,Default,,0000,0000,0000,,你听\N{\fnMicrosoft YaHei\fs14}Listen.{\r}
Dialogue: 0,0:06:17.04,0:06:18.51,Default,,0000,0000,0000,,- 好的 - 深呼吸 亲爱的\N{\fnMicrosoft YaHei\fs14}- Good. - Breathe, baby, breathe.{\r}
Dialogue: 0,0:06:18.51,0:06:19.84,Default,,0000,0000,0000,,好的 冷静\N{\fnMicrosoft YaHei\fs14}Good, good.{\r}
Dialogue: 0,0:06:19.85,0:06:21.38,Default,,0000,0000,0000,,- 冷静 - 深呼吸\N{\fnMicrosoft YaHei\fs14}- Good. - Breathe.{\r}
Dialogue: 0,0:06:23.51,0:06:26.42,Default,,0000,0000,0000,,深呼吸 准备好了么 用力\N{\fnMicrosoft YaHei\fs14}Take a breath. Ready? Push.{\r}
Dialogue: 0,0:06:26.42,0:06:29.15,Default,,0000,0000,0000,,用力 用力\N{\fnMicrosoft YaHei\fs14}Push, push, push.{\r}
Dialogue: 0,0:06:29.15,0:06:30.69,Default,,0000,0000,0000,,- 好的 用力 - 用力 深呼吸\N{\fnMicrosoft YaHei\fs14}- Good. Push. - Push, breathe, breathe.{\r}
Dialogue: 0,0:06:32.06,0:06:34.66,Default,,0000,0000,0000,,- 好的 好的 - 好的\N{\fnMicrosoft YaHei\fs14}Great, good, good. Okay...{\r}
Dialogue: 0,0:06:34.66,0:06:36.06,Default,,0000,0000,0000,,他出来了\N{\fnMicrosoft YaHei\fs14}Here he comes!{\r}
Dialogue: 0,0:06:36.06,0:06:37.49,Default,,0000,0000,0000,,我们是警察 跪在地上\N{\fnMicrosoft YaHei\fs14}Police! Get down on your knees!{\r}
Dialogue: 0,0:06:37.50,0:06:38.66,Default,,0000,0000,0000,,老实点 跪下\N{\fnMicrosoft YaHei\fs14}You heard him! Get down!{\r}
Dialogue: 0,0:06:38.66,0:06:39.73,Default,,0000,0000,0000,,站住别动\N{\fnMicrosoft YaHei\fs14}Stay where you are!{\r}
Dialogue: 0,0:06:39.73,0:06:41.77,Default,,0000,0000,0000,,跪下\N{\fnMicrosoft YaHei\fs14}Get down on your knees!{\r}
Dialogue: 0,0:06:41.77,0:06:43.00,Default,,0000,0000,0000,,他背后有东西\N{\fnMicrosoft YaHei\fs14}He's got something behind his back!{\r}
Dialogue: 0,0:06:47.07,0:06:48.74,Default,,0000,0000,0000,,- 那是什么东西 - 用手电筒照一照\N{\fnMicrosoft YaHei\fs14}- What the hell was that? - Get a light on him.{\r}
Dialogue: 0,0:06:51.61,0:06:52.74,Default,,0000,0000,0000,,搜一下房子\N{\fnMicrosoft YaHei\fs14}Go through the house.{\r}
Dialogue: 0,0:06:52.74,0:06:53.88,Default,,0000,0000,0000,,保证里面没有别人\N{\fnMicrosoft YaHei\fs14}Make sure nobody's inside.{\r}
Dialogue: 0,0:06:53.88,0:06:55.55,Default,,0000,0000,0000,,B组 进去搜查\N{\fnMicrosoft YaHei\fs14}Bravo team, let's go inside.{\r}
Dialogue: 0,0:07:33.55,0:07:35.42,Default,,0000,0000,0000,,你真棒\N{\fnMicrosoft YaHei\fs14}Oh, you're perfect.{\r}
Dialogue: 0,0:07:38.06,0:07:39.39,Default,,0000,0000,0000,,他真棒\N{\fnMicrosoft YaHei\fs14}He's perfect.{\r}
Dialogue: 0,0:07:42.19,0:07:44.69,Default,,0000,0000,0000,,{\an8\fs16}神童
Dialogue: 0,0:07:55.67,0:07:57.78,Default,,0000,0000,0000,,他两只眼睛颜色不同么\N{\fnMicrosoft YaHei\fs14}Are his eyes different colors?{\r}
Dialogue: 0,0:07:57.78,0:08:00.75,Default,,0000,0000,0000,,对 这是虹膜异色性\N{\fnMicrosoft YaHei\fs14}Yeah, it's called heterochromia.{\r}
Dialogue: 0,0:08:00.75,0:08:03.48,Default,,0000,0000,0000,,是一种基因特征\N{\fnMicrosoft YaHei\fs14}- Mmm-hmm. - It's a genetic trait.{\r}
Dialogue: 0,0:08:05.92,0:08:08.62,Default,,0000,0000,0000,,他长得像大卫·鲍威\N{\fnMicrosoft YaHei\fs14}Oh, whoa. He's like David Bowie.{\r}
Dialogue: 0,0:08:08.62,0:08:10.42,Default,,0000,0000,0000,,是啊\N{\fnMicrosoft YaHei\fs14}He is.{\r}
Dialogue: 0,0:08:10.42,0:08:12.96,Default,,0000,0000,0000,,在我眼里他就是位小摇滚青年\N{\fnMicrosoft YaHei\fs14}He is my little glam rocker.{\r}
Dialogue: 0,0:08:12.96,0:08:15.16,Default,,0000,0000,0000,,我好不容易才怀上你\N{\fnMicrosoft YaHei\fs14}We tried so long to have you.{\r}
Dialogue: 0,0:08:15.16,0:08:16.83,Default,,0000,0000,0000,,我们之前都不知道能不能顺利产下你\N{\fnMicrosoft YaHei\fs14}We weren't sure you'd ever come.{\r}
Dialogue: 0,0:08:20.93,0:08:22.64,Default,,0000,0000,0000,,会很...\N{\fnMicrosoft YaHei\fs14}It's gonna be...{\r}
Dialogue: 0,0:08:24.44,0:08:25.54,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:08:25.54,0:08:26.97,Default,,0000,0000,0000,,马上就好\N{\fnMicrosoft YaHei\fs14}There we go.{\r}
Dialogue: 0,0:08:26.97,0:08:29.37,Default,,0000,0000,0000,,他是不是应该哭的\N{\fnMicrosoft YaHei\fs14}Isn't he supposed to cry?{\r}
Dialogue: 0,0:08:29.38,0:08:31.61,Default,,0000,0000,0000,,大部分宝宝都会哭 但不是必须哭\N{\fnMicrosoft YaHei\fs14}Well, most do, but it's not required.{\r}
Dialogue: 0,0:08:31.61,0:08:32.88,Default,,0000,0000,0000,,一切都正常吧\N{\fnMicrosoft YaHei\fs14}Is everything all right?{\r}
Dialogue: 0,0:08:32.88,0:08:35.21,Default,,0000,0000,0000,,宝宝没问题\N{\fnMicrosoft YaHei\fs14}Nothing wrong with this little guy.{\r}
Dialogue: 0,0:08:35.21,0:08:37.32,Default,,0000,0000,0000,,- 宝宝很机敏的 - 是啊\N{\fnMicrosoft YaHei\fs14}- He is very aware. - Yes.{\r}
Dialogue: 0,0:08:38.49,0:08:39.95,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mama.{\r}
Dialogue: 0,0:08:39.95,0:08:41.85,Default,,0000,0000,0000,,他刚刚是喊妈妈了么\N{\fnMicrosoft YaHei\fs14}Did he really just say that?{\r}
Dialogue: 0,0:08:41.85,0:08:44.16,Default,,0000,0000,0000,,他已经会说一些简单的词了\N{\fnMicrosoft YaHei\fs14}You know, he's even been using some words.{\r}
Dialogue: 0,0:08:45.36,0:08:46.96,Default,,0000,0000,0000,,这是有点早啊\N{\fnMicrosoft YaHei\fs14}That's quite early.{\r}
Dialogue: 0,0:08:46.96,0:08:48.49,Default,,0000,0000,0000,,通过 孩子要经过\N{\fnMicrosoft YaHei\fs14}Usually, language doesn't come on{\r}
Dialogue: 0,0:08:48.50,0:08:50.30,Default,,0000,0000,0000,,一年才能掌握语言\N{\fnMicrosoft YaHei\fs14}for about a year or so.{\r}
Dialogue: 0,0:08:50.30,0:08:52.83,Default,,0000,0000,0000,,但这没什么不对\N{\fnMicrosoft YaHei\fs14}There's nothing wrong.{\r}
Dialogue: 0,0:08:52.83,0:08:54.50,Default,,0000,0000,0000,,你的孩子只是发育的很早而已\N{\fnMicrosoft YaHei\fs14}Your son's just developing early.{\r}
Dialogue: 0,0:08:54.50,0:08:57.03,Default,,0000,0000,0000,,我们叫这种孩子 小神童\N{\fnMicrosoft YaHei\fs14}He's what we call a smarty-pants.{\r}
Dialogue: 0,0:08:57.04,0:08:58.54,Default,,0000,0000,0000,,小神童\N{\fnMicrosoft YaHei\fs14}Smarty-pants.{\r}
Dialogue: 0,0:09:00.50,0:09:04.52,Default,,0000,0000,0000,,{\an8\fs16}26个月 零两周
Dialogue: 0,0:09:00.81,0:09:03.94,Default,,0000,0000,0000,,真棒啊 宝宝 能不能再来一次\N{\fnMicrosoft YaHei\fs14}Good job, honey. Can you show me again?{\r}
Dialogue: 0,0:09:05.91,0:09:07.75,Default,,0000,0000,0000,,把他放进城堡\N{\fnMicrosoft YaHei\fs14}Put him inside the castle?{\r}
Dialogue: 0,0:09:10.65,0:09:12.02,Default,,0000,0000,0000,,你在读什么呢\N{\fnMicrosoft YaHei\fs14}What are you reading?{\r}
Dialogue: 0,0:09:12.99,0:09:15.95,Default,,0000,0000,0000,,培养神童\N{\fnMicrosoft YaHei\fs14}Oh. Nurturing Genius.{\r}
Dialogue: 0,0:09:15.96,0:09:17.12,Default,,0000,0000,0000,,是啊\N{\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:09:17.12,0:09:19.43,Default,,0000,0000,0000,,有天赋的孩子\N{\fnMicrosoft YaHei\fs14}A Gifted Life.{\r}
Dialogue: 0,0:09:20.59,0:09:22.49,Default,,0000,0000,0000,,我在做准备\N{\fnMicrosoft YaHei\fs14}I'm preparing.{\r}
Dialogue: 0,0:09:22.50,0:09:24.73,Default,,0000,0000,0000,,准备什么\N{\fnMicrosoft YaHei\fs14}For what?{\r}
Dialogue: 0,0:09:24.73,0:09:27.07,Default,,0000,0000,0000,,迈尔斯的脑子和普通孩子不一样\N{\fnMicrosoft YaHei\fs14}Miles' brain isn't wired like other kids.{\r}
Dialogue: 0,0:09:27.07,0:09:29.10,Default,,0000,0000,0000,,真棒\N{\fnMicrosoft YaHei\fs14}Oh, oh, oh! Yes!{\r}
Dialogue: 0,0:09:29.10,0:09:30.24,Default,,0000,0000,0000,,他很特别\N{\fnMicrosoft YaHei\fs14}He's special.{\r}
Dialogue: 0,0:09:30.24,0:09:31.60,Default,,0000,0000,0000,,真棒\N{\fnMicrosoft YaHei\fs14}Good job!{\r}
Dialogue: 0,0:09:31.60,0:09:33.60,Default,,0000,0000,0000,,我在想 我们真的应该开始考虑\N{\fnMicrosoft YaHei\fs14}And I was thinking, we should really start thinking{\r}
Dialogue: 0,0:09:33.61,0:09:35.17,Default,,0000,0000,0000,,送他去上幼儿园了\N{\fnMicrosoft YaHei\fs14}about preschool, seriously.{\r}
Dialogue: 0,0:09:35.18,0:09:37.51,Default,,0000,0000,0000,,上幼儿园 他才两岁\N{\fnMicrosoft YaHei\fs14}Preschools? He's two.{\r}
Dialogue: 0,0:09:37.51,0:09:38.81,Default,,0000,0000,0000,,是不是太早了\N{\fnMicrosoft YaHei\fs14}Isn't that a bit early?{\r}
Dialogue: 0,0:09:38.81,0:09:40.91,Default,,0000,0000,0000,,不是去普通的幼儿园 去特别的那种\N{\fnMicrosoft YaHei\fs14}These aren't regular preschools. They're special.{\r}
Dialogue: 0,0:09:41.52,0:09:42.91,Default,,0000,0000,0000,,但去上幼儿园\N{\fnMicrosoft YaHei\fs14}It's a preschool.{\r}
Dialogue: 0,0:09:42.92,0:09:45.05,Default,,0000,0000,0000,,我们得找人写一封推荐信吧\N{\fnMicrosoft YaHei\fs14}We need a letter of recommendation?{\r}
Dialogue: 0,0:09:45.05,0:09:49.22,Default,,0000,0000,0000,,亲爱的 那幼儿园很不错的\N{\fnMicrosoft YaHei\fs14}Honey, it's a very good preschool.{\r}
Dialogue: 0,0:10:12.30,0:10:16.02,Default,,0000,0000,0000,,{\an8\fs16}5年 零五月
Dialogue: 0,0:10:16.58,0:10:18.85,Default,,0000,0000,0000,,我们是去见柯林斯医生么\N{\fnMicrosoft YaHei\fs14}Are we going to Dr. Collins?{\r}
Dialogue: 0,0:10:18.85,0:10:21.09,Default,,0000,0000,0000,,不 妈妈带你去见另外一位医生\N{\fnMicrosoft YaHei\fs14}No, Mom's taking you to see a different doctor.{\r}
Dialogue: 0,0:10:21.09,0:10:22.52,Default,,0000,0000,0000,,开始\N{\fnMicrosoft YaHei\fs14}Go.{\r}
Dialogue: 0,0:10:24.89,0:10:26.99,Default,,0000,0000,0000,,很好 动作很快\N{\fnMicrosoft YaHei\fs14}Good. Very fast.{\r}
Dialogue: 0,0:10:27.96,0:10:29.33,Default,,0000,0000,0000,,开始\N{\fnMicrosoft YaHei\fs14}Go.{\r}
Dialogue: 0,0:10:29.33,0:10:30.60,Default,,0000,0000,0000,,你带他来是对的\N{\fnMicrosoft YaHei\fs14}You were right to bring him in.{\r}
Dialogue: 0,0:10:30.60,0:10:32.83,Default,,0000,0000,0000,,迈尔斯的智商破纪录了\N{\fnMicrosoft YaHei\fs14}Miles' intelligence is off the charts.{\r}
Dialogue: 0,0:10:32.83,0:10:35.67,Default,,0000,0000,0000,,我测不出准确值 但是肯定相当之高\N{\fnMicrosoft YaHei\fs14}I don't have an exact score, but it'll be very high.{\r}
Dialogue: 0,0:10:35.67,0:10:36.97,Default,,0000,0000,0000,,他的行为呢\N{\fnMicrosoft YaHei\fs14}How about his behavior?{\r}
Dialogue: 0,0:10:36.97,0:10:39.34,Default,,0000,0000,0000,,他适应幼儿园生活么\N{\fnMicrosoft YaHei\fs14}Is he adjusting well to preschool?{\r}
Dialogue: 0,0:10:39.34,0:10:42.48,Default,,0000,0000,0000,,他不太容易交朋友\N{\fnMicrosoft YaHei\fs14}He's been having a very difficult time making friends.{\r}
Dialogue: 0,0:10:42.48,0:10:43.84,Default,,0000,0000,0000,,迈尔斯大脑的\N{\fnMicrosoft YaHei\fs14}Well, Miles' brain is{\r}
Dialogue: 0,0:10:43.84,0:10:45.94,Default,,0000,0000,0000,,某些区域发育的非常好\N{\fnMicrosoft YaHei\fs14}extremely well-developed in certain regions,{\r}
Dialogue: 0,0:10:45.95,0:10:48.45,Default,,0000,0000,0000,,另外一些区域则有些发育迟缓\N{\fnMicrosoft YaHei\fs14}but there are other areas that appear to be delayed.{\r}
Dialogue: 0,0:10:48.45,0:10:50.45,Default,,0000,0000,0000,,我不确定是什么原因导致\N{\fnMicrosoft YaHei\fs14}I'm not sure why he wouldn't be as developed{\r}
Dialogue: 0,0:10:50.45,0:10:53.32,Default,,0000,0000,0000,,这样的情况 但我们需要进一步观察\N{\fnMicrosoft YaHei\fs14}in those areas, but we need to watch it.{\r}
Dialogue: 0,0:10:53.32,0:10:54.99,Default,,0000,0000,0000,,你和你的丈夫应该考虑\N{\fnMicrosoft YaHei\fs14}And you and your husband should really consider{\r}
Dialogue: 0,0:10:54.99,0:10:56.62,Default,,0000,0000,0000,,制订有针对性的教育计划\N{\fnMicrosoft YaHei\fs14}a dedicated education plan.{\r}
Dialogue: 0,0:10:56.62,0:10:59.06,Default,,0000,0000,0000,,有一所很好的学校 叫潘马克\N{\fnMicrosoft YaHei\fs14}There's this excellent school, it's called Penmark.{\r}
Dialogue: 0,0:10:59.06,0:11:00.46,Default,,0000,0000,0000,,那座学校的学费\N{\fnMicrosoft YaHei\fs14}It's a little bit more expensive{\r}
Dialogue: 0,0:11:00.46,0:11:01.76,Default,,0000,0000,0000,,比你现在所在的这座学校略贵一些\N{\fnMicrosoft YaHei\fs14}than the school you have him at now,{\r}
Dialogue: 0,0:11:01.76,0:11:03.00,Default,,0000,0000,0000,,但是这个潘马克学校\N{\fnMicrosoft YaHei\fs14}but they're just outstanding{\r}
Dialogue: 0,0:11:03.00,0:11:05.16,Default,,0000,0000,0000,,在应对有特殊需要的孩子方面极其出色\N{\fnMicrosoft YaHei\fs14}with kids with specialized needs,{\r}
Dialogue: 0,0:11:05.17,0:11:07.17,Default,,0000,0000,0000,,迈尔斯去很合适\N{\fnMicrosoft YaHei\fs14}just like Miles.{\r}
Dialogue: 0,0:11:07.17,0:11:08.80,Default,,0000,0000,0000,,我可以帮你打个招呼 如果你需要的话\N{\fnMicrosoft YaHei\fs14}I can call ahead for you, if you like.{\r}
Dialogue: 0,0:11:17.61,0:11:20.28,Default,,0000,0000,0000,,来 吃完再写作业\N{\fnMicrosoft YaHei\fs14}Here. Finish your homework after you eat.{\r}
Dialogue: 0,0:11:21.82,0:11:23.85,Default,,0000,0000,0000,,对了 其实那个不是作业\N{\fnMicrosoft YaHei\fs14}That's not homework, by the way.{\r}
Dialogue: 0,0:11:23.85,0:11:25.69,Default,,0000,0000,0000,,学校不布置作业的\N{\fnMicrosoft YaHei\fs14}We don't have homework.{\r}
Dialogue: 0,0:11:25.69,0:11:27.95,Default,,0000,0000,0000,,是么 我小时候都有作业要写的\N{\fnMicrosoft YaHei\fs14}Yeah? How come I had homework when I was a kid?{\r}
Dialogue: 0,0:11:27.96,0:11:29.89,Default,,0000,0000,0000,,因为你没我那么聪明\N{\fnMicrosoft YaHei\fs14}Because you're not as smart as me.{\r}
Dialogue: 0,0:11:30.83,0:11:31.89,Default,,0000,0000,0000,,你说什么\N{\fnMicrosoft YaHei\fs14}Excuse me?{\r}
Dialogue: 0,0:11:31.89,0:11:32.99,Default,,0000,0000,0000,,嗯\N{\fnMicrosoft YaHei\fs14}Yeah?{\r}
Dialogue: 0,0:11:32.99,0:11:35.03,Default,,0000,0000,0000,,家里有没有红辣椒粉\N{\fnMicrosoft YaHei\fs14}Do you have any paprika?{\r}
Dialogue: 0,0:11:35.03,0:11:37.13,Default,,0000,0000,0000,,红辣椒粉 你现在都认识这个词了\N{\fnMicrosoft YaHei\fs14}Paprika? How do you even know what that is?{\r}
Dialogue: 0,0:11:37.13,0:11:39.20,Default,,0000,0000,0000,,我也不知道是怎么认识的 我突然想来一点\N{\fnMicrosoft YaHei\fs14}I don't know. Just want some.{\r}
Dialogue: 0,0:11:39.20,0:11:41.57,Default,,0000,0000,0000,,我今晚很想出门走走\N{\fnMicrosoft YaHei\fs14}I am so ready to go out tonight.{\r}
Dialogue: 0,0:11:41.57,0:11:44.17,Default,,0000,0000,0000,,来 自己倒一点吧\N{\fnMicrosoft YaHei\fs14}Here. Knock yourself out.{\r}
Dialogue: 0,0:11:46.68,0:11:48.01,Default,,0000,0000,0000,,我问你\N{\fnMicrosoft YaHei\fs14}Excuse me.{\r}
Dialogue: 0,0:11:49.31,0:11:51.58,Default,,0000,0000,0000,,你什么时候开始这么吃的\N{\fnMicrosoft YaHei\fs14}When did you start using that?{\r}
Dialogue: 0,0:11:51.58,0:11:53.65,Default,,0000,0000,0000,,- 我也不知道 - 嘿\N{\fnMicrosoft YaHei\fs14}- I don't know. - Hey.{\r}
Dialogue: 0,0:11:55.22,0:11:57.49,Default,,0000,0000,0000,,能不能给我表演一下眼睛的那个\N{\fnMicrosoft YaHei\fs14}Can you please do that eye thing for me?{\r}
Dialogue: 0,0:12:01.39,0:12:02.99,Default,,0000,0000,0000,,就是这个\N{\fnMicrosoft YaHei\fs14}There it is!{\r}
Dialogue: 0,0:12:04.23,0:12:06.23,Default,,0000,0000,0000,,你想不想来玩瞪眼游戏\N{\fnMicrosoft YaHei\fs14}Do you wanna do a staring contest?{\r}
Dialogue: 0,0:12:06.23,0:12:07.70,Default,,0000,0000,0000,,先不玩了 你得先吃晚饭\N{\fnMicrosoft YaHei\fs14}No, you have to finish your dinner.{\r}
Dialogue: 0,0:12:09.23,0:12:10.80,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}Okay, all right.{\r}
Dialogue: 0,0:12:16.61,0:12:18.34,Default,,0000,0000,0000,,你准备好了么\N{\fnMicrosoft YaHei\fs14}Are you ready?{\r}
Dialogue: 0,0:12:18.34,0:12:19.48,Default,,0000,0000,0000,,我准备好了\N{\fnMicrosoft YaHei\fs14}Oh, I'm ready.{\r}
Dialogue: 0,0:12:21.38,0:12:22.38,Default,,0000,0000,0000,,一\N{\fnMicrosoft YaHei\fs14}One,{\r}
Dialogue: 0,0:12:23.51,0:12:24.48,Default,,0000,0000,0000,,二\N{\fnMicrosoft YaHei\fs14}two,{\r}
Dialogue: 0,0:12:25.55,0:12:26.55,Default,,0000,0000,0000,,三\N{\fnMicrosoft YaHei\fs14}three.{\r}
Dialogue: 0,0:12:32.85,0:12:33.95,Default,,0000,0000,0000,,- 你眨眼了 - 我眨眼了\N{\fnMicrosoft YaHei\fs14}- You just blinked! - I did!{\r}
Dialogue: 0,0:12:33.96,0:12:35.12,Default,,0000,0000,0000,,我眨眼了 你赢了\N{\fnMicrosoft YaHei\fs14}I did, I did, I did! You win.{\r}
Dialogue: 0,0:12:35.12,0:12:37.06,Default,,0000,0000,0000,,- 你赢了 你赢了\N{\fnMicrosoft YaHei\fs14}- You win! You win! - Yes!{\r}
Dialogue: 0,0:12:37.06,0:12:38.23,Default,,0000,0000,0000,,- 结束了 - 不\N{\fnMicrosoft YaHei\fs14}- Finish. - No.{\r}
Dialogue: 0,0:12:38.23,0:12:39.36,Default,,0000,0000,0000,,- 结束了 - 那我就要\N{\fnMicrosoft YaHei\fs14}- Yes. - Because that means{\r}
Dialogue: 0,0:12:39.36,0:12:41.06,Default,,0000,0000,0000,,和佐伊在一起一段时间了\N{\fnMicrosoft YaHei\fs14}you guys are gonna leave me with Zoe.{\r}
Dialogue: 0,0:12:41.06,0:12:42.60,Default,,0000,0000,0000,,你很喜欢佐伊呀\N{\fnMicrosoft YaHei\fs14}But you love Zoe.{\r}
Dialogue: 0,0:12:42.60,0:12:43.63,Default,,0000,0000,0000,,我知道\N{\fnMicrosoft YaHei\fs14}I know.{\r}
Dialogue: 0,0:12:44.40,0:12:45.40,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Hey.{\r}
Dialogue: 0,0:12:46.80,0:12:49.04,Default,,0000,0000,0000,,要是你想让妈妈吻你的话\N{\fnMicrosoft YaHei\fs14}Anytime you need a kiss from me...{\r}
Dialogue: 0,0:12:51.94,0:12:52.98,Default,,0000,0000,0000,,就是这样\N{\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:12:57.08,0:12:59.72,Default,,0000,0000,0000,,你想喝普通的啤酒还是特别点的\N{\fnMicrosoft YaHei\fs14}You want a regular beer or a fancy beer?{\r}
Dialogue: 0,0:13:00.78,0:13:01.92,Default,,0000,0000,0000,,特别点的吧\N{\fnMicrosoft YaHei\fs14}Fancy.{\r}
Dialogue: 0,0:13:03.82,0:13:05.29,Default,,0000,0000,0000,,来吧 喝\N{\fnMicrosoft YaHei\fs14}All right, drink up.{\r}
Dialogue: 0,0:13:05.29,0:13:07.29,Default,,0000,0000,0000,,喝完再走\N{\fnMicrosoft YaHei\fs14}We're not leaving till these are gone.{\r}
Dialogue: 0,0:13:12.49,0:13:13.63,Default,,0000,0000,0000,,我们还住在郊区\N{\fnMicrosoft YaHei\fs14}I still can't believe{\r}
Dialogue: 0,0:13:13.63,0:13:15.93,Default,,0000,0000,0000,,简直难以置信\N{\fnMicrosoft YaHei\fs14}we actually live in the suburbs.{\r}
Dialogue: 0,0:13:17.13,0:13:18.27,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}Really?{\r}
Dialogue: 0,0:13:19.64,0:13:23.67,Default,,0000,0000,0000,,你有没有觉得我们不用带孩子的时光 仿佛就在昨天\N{\fnMicrosoft YaHei\fs14}Doesn't it seem like yesterday that we were kid-free?{\r}
Dialogue: 0,0:13:23.67,0:13:27.01,Default,,0000,0000,0000,,我们可以喝的烂醉 享受生活\N{\fnMicrosoft YaHei\fs14}We were drunk all the time and everything was so fun.{\r}
Dialogue: 0,0:13:30.08,0:13:32.18,Default,,0000,0000,0000,,现在我们都过的很拘束了\N{\fnMicrosoft YaHei\fs14}Baby, now we're totally normal.{\r}
Dialogue: 0,0:13:32.18,0:13:33.98,Default,,0000,0000,0000,,但我们还可以想喝就喝啊\N{\fnMicrosoft YaHei\fs14}But we're still drunk all the time.{\r}
Dialogue: 0,0:13:36.85,0:13:38.02,Default,,0000,0000,0000,,忘了跟你说了\N{\fnMicrosoft YaHei\fs14}Oh, I forgot to tell you.{\r}
Dialogue: 0,0:13:38.02,0:13:39.52,Default,,0000,0000,0000,,我今天去接迈尔斯下课的时候\N{\fnMicrosoft YaHei\fs14}When I picked up Miles from school today,{\r}
Dialogue: 0,0:13:39.52,0:13:41.96,Default,,0000,0000,0000,,舒布老师跟我说 他不想加入学校的科学俱乐部\N{\fnMicrosoft YaHei\fs14}Mr. Schub said that he didn't wanna join the science club.{\r}
Dialogue: 0,0:13:41.96,0:13:44.26,Default,,0000,0000,0000,,为什么他不想跟别的孩子来往\N{\fnMicrosoft YaHei\fs14}Why doesn't he ever wanna do activities with other kids?{\r}
Dialogue: 0,0:13:44.26,0:13:46.03,Default,,0000,0000,0000,,定个新规矩吧\N{\fnMicrosoft YaHei\fs14}You know what? New rule.{\r}
Dialogue: 0,0:13:46.86,0:13:48.67,Default,,0000,0000,0000,,约会晚上别聊孩子\N{\fnMicrosoft YaHei\fs14}No kid talk on date night.{\r}
Dialogue: 0,0:13:49.80,0:13:52.13,Default,,0000,0000,0000,,- 好 - 我这么跟你说\N{\fnMicrosoft YaHei\fs14}- Okay. - Seriously.{\r}
Dialogue: 0,0:13:52.13,0:13:54.24,Default,,0000,0000,0000,,我们的孩子很聪明\N{\fnMicrosoft YaHei\fs14}- We have a super smart kid. - Mmm-hmm.{\r}
Dialogue: 0,0:13:54.24,0:13:55.47,Default,,0000,0000,0000,,- 那是坏事吗 - 不是\N{\fnMicrosoft YaHei\fs14}- Is that a bad thing? - Mmm-mmm.{\r}
Dialogue: 0,0:13:55.47,0:13:56.54,Default,,0000,0000,0000,,你想让他跟\N{\fnMicrosoft YaHei\fs14}You want him{\r}
Dialogue: 0,0:13:56.54,0:13:57.67,Default,,0000,0000,0000,,- 普通人一样吗 - 不\N{\fnMicrosoft YaHei\fs14}- to be like everyone else? - Mmm-mmm.{\r}
Dialogue: 0,0:13:57.67,0:13:59.01,Default,,0000,0000,0000,,- 我们是平凡的父母吗 - 不是\N{\fnMicrosoft YaHei\fs14}- Are we like everyone else? - No.{\r}
Dialogue: 0,0:13:59.01,0:14:00.11,Default,,0000,0000,0000,,你说得对\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,0:14:00.11,0:14:01.64,Default,,0000,0000,0000,,听我说\N{\fnMicrosoft YaHei\fs14}I mean, look,{\r}
Dialogue: 0,0:14:01.64,0:14:03.28,Default,,0000,0000,0000,,现在可是咱们的约会之夜\N{\fnMicrosoft YaHei\fs14}this is our date night.{\r}
Dialogue: 0,0:14:03.28,0:14:05.28,Default,,0000,0000,0000,,我们多恩爱呀\N{\fnMicrosoft YaHei\fs14}Yeah, because we're cool.{\r}
Dialogue: 0,0:14:13.62,0:14:15.89,Default,,0000,0000,0000,,你妈妈说你只能看两集\N{\fnMicrosoft YaHei\fs14}Your mom said only two episodes.{\r}
Dialogue: 0,0:14:19.00,0:14:20.23,Default,,0000,0000,0000,,听我说\N{\fnMicrosoft YaHei\fs14}Tell you what.{\r}
Dialogue: 0,0:14:20.23,0:14:24.07,Default,,0000,0000,0000,,我们要不睡前玩个游戏吧\N{\fnMicrosoft YaHei\fs14}What if we play one game before bedtime?{\r}
Dialogue: 0,0:14:24.97,0:14:26.07,Default,,0000,0000,0000,,就玩一个\N{\fnMicrosoft YaHei\fs14}Just one.{\r}
Dialogue: 0,0:14:26.87,0:14:29.17,Default,,0000,0000,0000,,玩捉迷藏吧\N{\fnMicrosoft YaHei\fs14}Hide-and-seek.{\r}
Dialogue: 0,0:14:29.17,0:14:31.21,Default,,0000,0000,0000,,你是想让我藏还是你藏\N{\fnMicrosoft YaHei\fs14}Okay. You want me to count or hide?{\r}
Dialogue: 0,0:14:31.21,0:14:32.88,Default,,0000,0000,0000,,我藏\N{\fnMicrosoft YaHei\fs14}You count.{\r}
Dialogue: 0,0:14:32.88,0:14:34.08,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}Cool.{\r}
Dialogue: 0,0:14:39.98,0:14:44.55,Default,,0000,0000,0000,,一 二 三 四\N{\fnMicrosoft YaHei\fs14}One, two, three, four,{\r}
Dialogue: 0,0:14:45.26,0:14:50.29,Default,,0000,0000,0000,,五 六 七 八\N{\fnMicrosoft YaHei\fs14}five, six, seven, eight,{\r}
Dialogue: 0,0:14:50.90,0:14:54.26,Default,,0000,0000,0000,,九 十\N{\fnMicrosoft YaHei\fs14}nine, ten!{\r}
Dialogue: 0,0:14:54.26,0:14:56.27,Default,,0000,0000,0000,,准备好了么 我来了\N{\fnMicrosoft YaHei\fs14}Ready or not, here I come!{\r}
Dialogue: 0,0:15:03.21,0:15:05.24,Default,,0000,0000,0000,,你干什么呢 玩捉迷藏你应该躲起来啊\N{\fnMicrosoft YaHei\fs14}What're you doing? You're supposed to hide.{\r}
Dialogue: 0,0:15:09.48,0:15:10.78,Default,,0000,0000,0000,,迈尔斯 你没事吧\N{\fnMicrosoft YaHei\fs14}Miles, are you okay?{\r}
Dialogue: 0,0:15:13.98,0:15:15.45,Default,,0000,0000,0000,,你想我多给你一些时间是么\N{\fnMicrosoft YaHei\fs14}You want more time?{\r}
Dialogue: 0,0:15:19.06,0:15:20.96,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}Okay, cool.{\r}
Dialogue: 0,0:15:23.73,0:15:28.60,Default,,0000,0000,0000,,一 二 三 四\N{\fnMicrosoft YaHei\fs14}One, two, three, four,{\r}
Dialogue: 0,0:15:28.60,0:15:33.80,Default,,0000,0000,0000,,五 六 七 八\N{\fnMicrosoft YaHei\fs14}five, six, seven, eight,{\r}
Dialogue: 0,0:15:33.80,0:15:36.21,Default,,0000,0000,0000,,九 十\N{\fnMicrosoft YaHei\fs14}nine, ten...{\r}
Dialogue: 0,0:15:36.21,0:15:41.48,Default,,0000,0000,0000,,11, 12, 13, 14...\N{\fnMicrosoft YaHei\fs14}11, 12, 13, 14...{\r}
Dialogue: 0,0:15:42.08,0:15:43.48,Default,,0000,0000,0000,,15...\N{\fnMicrosoft YaHei\fs14}15...{\r}
Dialogue: 0,0:15:46.98,0:15:49.12,Default,,0000,0000,0000,,...17, 18...\N{\fnMicrosoft YaHei\fs14}...17, 18...{\r}
Dialogue: 0,0:15:49.65,0:15:51.05,Default,,0000,0000,0000,,19...\N{\fnMicrosoft YaHei\fs14}19...{\r}
Dialogue: 0,0:15:51.06,0:15:52.16,Default,,0000,0000,0000,,20.\N{\fnMicrosoft YaHei\fs14}20.{\r}
Dialogue: 0,0:15:58.26,0:16:00.97,Default,,0000,0000,0000,,不管你有没有准备好 我来了\N{\fnMicrosoft YaHei\fs14}Okay. Ready or not, here I come!{\r}
Dialogue: 0,0:16:35.83,0:16:37.23,Default,,0000,0000,0000,,我抓到你了\N{\fnMicrosoft YaHei\fs14}Okay, I got you.{\r}
Dialogue: 0,0:16:41.31,0:16:43.14,Default,,0000,0000,0000,,我放弃了 你可以出来了\N{\fnMicrosoft YaHei\fs14}Okay, I give up. You can come up now.{\r}
Dialogue: 0,0:16:46.11,0:16:47.44,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,0:17:00.29,0:17:01.26,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles?{\r}
Dialogue: 0,0:17:38.66,0:17:39.80,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,0:17:41.60,0:17:43.10,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,0:17:44.57,0:17:47.11,Default,,0000,0000,0000,,你记得多少 都告诉我\N{\fnMicrosoft YaHei\fs14}I want you to tell me everything that you remember.{\r}
Dialogue: 0,0:17:51.28,0:17:54.38,Default,,0000,0000,0000,,我和佐伊在看电视\N{\fnMicrosoft YaHei\fs14}Um, me and Zoe were watching TV,{\r}
Dialogue: 0,0:17:54.38,0:17:56.08,Default,,0000,0000,0000,,然后她受伤了\N{\fnMicrosoft YaHei\fs14}then she was hurt.{\r}
Dialogue: 0,0:17:57.58,0:18:00.42,Default,,0000,0000,0000,,然后 然后她开始尖叫\N{\fnMicrosoft YaHei\fs14}Then... Then she started screaming.{\r}
Dialogue: 0,0:18:01.79,0:18:03.69,Default,,0000,0000,0000,,然后我看到血了\N{\fnMicrosoft YaHei\fs14}And then I saw blood.{\r}
Dialogue: 0,0:18:03.69,0:18:06.56,Default,,0000,0000,0000,,迈尔斯 你肯定记得些什么\N{\fnMicrosoft YaHei\fs14}Miles, you must remember something else.{\r}
Dialogue: 0,0:18:07.73,0:18:10.10,Default,,0000,0000,0000,,佐伊什么时候去地下室的\N{\fnMicrosoft YaHei\fs14}When did Zoe go into the basement?{\r}
Dialogue: 0,0:18:11.86,0:18:13.80,Default,,0000,0000,0000,,我不知道\N{\fnMicrosoft YaHei\fs14}I don't know.{\r}
Dialogue: 0,0:18:15.40,0:18:17.50,Default,,0000,0000,0000,,她在数数 然后她就受伤了\N{\fnMicrosoft YaHei\fs14}She was counting and then she was hurt.{\r}
Dialogue: 0,0:18:17.50,0:18:19.30,Default,,0000,0000,0000,,到处都是血\N{\fnMicrosoft YaHei\fs14}There was blood everywhere{\r}
Dialogue: 0,0:18:19.30,0:18:20.47,Default,,0000,0000,0000,,- 我也不知道怎么办 - 没事\N{\fnMicrosoft YaHei\fs14}- and I didn't know what to do. - Okay.{\r}
Dialogue: 0,0:18:20.47,0:18:22.41,Default,,0000,0000,0000,,没事了 亲爱的\N{\fnMicrosoft YaHei\fs14}It's okay, sweetie.{\r}
Dialogue: 0,0:18:22.41,0:18:24.71,Default,,0000,0000,0000,,我什么都不记得了\N{\fnMicrosoft YaHei\fs14}I don't remember anything.{\r}
Dialogue: 0,0:18:24.71,0:18:27.01,Default,,0000,0000,0000,,没事 只是意外\N{\fnMicrosoft YaHei\fs14}It's okay. It was an accident.{\r}
Dialogue: 0,0:18:28.48,0:18:30.82,Default,,0000,0000,0000,,只是意外\N{\fnMicrosoft YaHei\fs14}It was just an accident{\r}
Dialogue: 0,0:19:32.28,0:19:33.71,Default,,0000,0000,0000,,塔卢拉\N{\fnMicrosoft YaHei\fs14}Talulah.{\r}
Dialogue: 0,0:19:35.48,0:19:36.82,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What's up?{\r}
Dialogue: 0,0:19:38.82,0:19:39.85,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Hey!{\r}
Dialogue: 0,0:20:50.22,0:20:52.92,Default,,0000,0000,0000,,你来这干什么\N{\fnMicrosoft YaHei\fs14}What are you doing here?{\r}
Dialogue: 0,0:20:52.93,0:20:54.86,Default,,0000,0000,0000,,我听见你在说梦话\N{\fnMicrosoft YaHei\fs14}I heard you talking in your sleep.{\r}
Dialogue: 0,0:20:56.10,0:20:57.86,Default,,0000,0000,0000,,你做噩梦了吧\N{\fnMicrosoft YaHei\fs14}You were having a bad dream.{\r}
Dialogue: 0,0:21:00.03,0:21:01.24,Default,,0000,0000,0000,,我没有\N{\fnMicrosoft YaHei\fs14}No, I wasn't.{\r}
Dialogue: 0,0:21:04.44,0:21:07.61,Default,,0000,0000,0000,,我是说 我没有做噩梦 这梦是很不错的\N{\fnMicrosoft YaHei\fs14}I mean, it wasn't a bad dream, it was a good dream.{\r}
Dialogue: 0,0:21:41.08,0:21:43.41,Default,,0000,0000,0000,,我想跟海莉合作\N{\fnMicrosoft YaHei\fs14}I wanna work with Hailey.{\r}
Dialogue: 0,0:21:43.41,0:21:45.68,Default,,0000,0000,0000,,抱歉 我们已经定好了\N{\fnMicrosoft YaHei\fs14}Sorry, we already made our plan.{\r}
Dialogue: 0,0:21:53.45,0:21:55.09,Default,,0000,0000,0000,,去上洗手间吧 迈尔斯\N{\fnMicrosoft YaHei\fs14}Yeah, go ahead and use the bathroom, Miles.{\r}
Dialogue: 0,0:22:17.48,0:22:18.78,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Dash.{\r}
Dialogue: 0,0:22:19.88,0:22:20.95,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Dash!{\r}
Dialogue: 0,0:22:24.35,0:22:25.85,Default,,0000,0000,0000,,救救他\N{\fnMicrosoft YaHei\fs14}Help him!{\r}
Dialogue: 0,0:22:31.03,0:22:32.73,Default,,0000,0000,0000,,你在这幅画中看到了什么\N{\fnMicrosoft YaHei\fs14}What do you see in this one?{\r}
Dialogue: 0,0:22:35.16,0:22:36.56,Default,,0000,0000,0000,,一张脸\N{\fnMicrosoft YaHei\fs14}A face.{\r}
Dialogue: 0,0:22:38.23,0:22:39.67,Default,,0000,0000,0000,,谁的脸\N{\fnMicrosoft YaHei\fs14}Whose face?{\r}
Dialogue: 0,0:22:40.80,0:22:42.17,Default,,0000,0000,0000,,我不认识\N{\fnMicrosoft YaHei\fs14}I don't know.{\r}
Dialogue: 0,0:22:45.81,0:22:47.08,Default,,0000,0000,0000,,这幅画呢\N{\fnMicrosoft YaHei\fs14}And what do you see in that one?{\r}
Dialogue: 0,0:22:48.88,0:22:50.15,Default,,0000,0000,0000,,手\N{\fnMicrosoft YaHei\fs14}Hands.{\r}
Dialogue: 0,0:22:52.92,0:22:54.05,Default,,0000,0000,0000,,谁的手\N{\fnMicrosoft YaHei\fs14}Whose hands?{\r}
Dialogue: 0,0:22:56.35,0:22:58.05,Default,,0000,0000,0000,,一位漂亮女士的手\N{\fnMicrosoft YaHei\fs14}The hands of a nice lady.{\r}
Dialogue: 0,0:23:02.26,0:23:04.82,Default,,0000,0000,0000,,你今天在学校揍那孩子的时候\N{\fnMicrosoft YaHei\fs14}When you hit that boy at school,{\r}
Dialogue: 0,0:23:04.83,0:23:06.86,Default,,0000,0000,0000,,你还记得你当时的感受么\N{\fnMicrosoft YaHei\fs14}can you remember what you were feeling?{\r}
Dialogue: 0,0:23:11.37,0:23:13.67,Default,,0000,0000,0000,,你可以跟我谈谈你的感受\N{\fnMicrosoft YaHei\fs14}You can tell me how you felt.{\r}
Dialogue: 0,0:23:15.10,0:23:19.51,Default,,0000,0000,0000,,我觉得如果我揍了他的话 我就不会受伤了\N{\fnMicrosoft YaHei\fs14}I thought if I did it, I wouldn't get hurt anymore.{\r}
Dialogue: 0,0:23:21.04,0:23:22.24,Default,,0000,0000,0000,,受伤\N{\fnMicrosoft YaHei\fs14}Get hurt?{\r}
Dialogue: 0,0:23:23.08,0:23:25.05,Default,,0000,0000,0000,,有人伤害过你么\N{\fnMicrosoft YaHei\fs14}Has someone hurt you?{\r}
Dialogue: 0,0:23:27.35,0:23:29.02,Default,,0000,0000,0000,,我不敢告诉你\N{\fnMicrosoft YaHei\fs14}I'm afraid to tell you.{\r}
Dialogue: 0,0:23:29.02,0:23:30.95,Default,,0000,0000,0000,,我不想让别人惹上麻烦\N{\fnMicrosoft YaHei\fs14}I don't want anyone to get in trouble.{\r}
Dialogue: 0,0:23:32.45,0:23:34.16,Default,,0000,0000,0000,,你说谁 让谁惹上麻烦\N{\fnMicrosoft YaHei\fs14}Who? Get who in trouble?{\r}
Dialogue: 0,0:23:36.56,0:23:38.76,Default,,0000,0000,0000,,就是那个一直伤害我的人\N{\fnMicrosoft YaHei\fs14}The person who's been hurting me.{\r}
Dialogue: 0,0:23:40.66,0:23:41.76,Default,,0000,0000,0000,,我这里考虑\N{\fnMicrosoft YaHei\fs14}I want to consider{\r}
Dialogue: 0,0:23:41.76,0:23:43.70,Default,,0000,0000,0000,,对迈尔斯进行一个疗程的药物治疗\N{\fnMicrosoft YaHei\fs14}a course of medication for Miles{\r}
Dialogue: 0,0:23:43.70,0:23:45.77,Default,,0000,0000,0000,,而且他可能需要一位心理专家\N{\fnMicrosoft YaHei\fs14}and he may need a specialist.{\r}
Dialogue: 0,0:23:45.77,0:23:48.37,Default,,0000,0000,0000,,对他的行为进行干预 帮他解决\N{\fnMicrosoft YaHei\fs14}A behavioral interventionist, someone who can help him{\r}
Dialogue: 0,0:23:48.37,0:23:49.94,Default,,0000,0000,0000,,- 易怒的问题 - 好的\N{\fnMicrosoft YaHei\fs14}- with his anger issues. - Okay.{\r}
Dialogue: 0,0:23:51.04,0:23:52.31,Default,,0000,0000,0000,,他是怎么回事\N{\fnMicrosoft YaHei\fs14}What's wrong with him?{\r}
Dialogue: 0,0:23:52.31,0:23:54.04,Default,,0000,0000,0000,,最初 我以为是他的道德认知\N{\fnMicrosoft YaHei\fs14}At first, I thought it might be a deficit{\r}
Dialogue: 0,0:23:54.04,0:23:56.88,Default,,0000,0000,0000,,存在缺陷 或者是患了ODD\N{\fnMicrosoft YaHei\fs14}in his cognitive morality or maybe ODD...{\r}
Dialogue: 0,0:23:56.88,0:23:59.22,Default,,0000,0000,0000,,也就是对立违抗性障碍 但实话实说\N{\fnMicrosoft YaHei\fs14}Oppositional defiance disorder, but honestly...{\r}
Dialogue: 0,0:24:00.58,0:24:02.38,Default,,0000,0000,0000,,我现在也不太确定\N{\fnMicrosoft YaHei\fs14}I'm not sure.{\r}
Dialogue: 0,0:24:02.39,0:24:04.45,Default,,0000,0000,0000,,可能你需要再听一下这个录音\N{\fnMicrosoft YaHei\fs14}Maybe you should listen to this.{\r}
Dialogue: 0,0:24:04.45,0:24:06.42,Default,,0000,0000,0000,,他睡觉时说的梦话我记录下来了\N{\fnMicrosoft YaHei\fs14}I recorded this while he was sleeping.{\r}
Dialogue: 0,0:24:07.32,0:24:08.49,Default,,0000,0000,0000,,好的\N{\fnMicrosoft YaHei\fs14}Yeah, okay.{\r}
Dialogue: 0,0:24:09.62,0:24:11.16,Default,,0000,0000,0000,,莎拉 我也不太好开口问这个\N{\fnMicrosoft YaHei\fs14}Sarah, I hate to ask this.{\r}
Dialogue: 0,0:24:11.89,0:24:13.59,Default,,0000,0000,0000,,是不是有可能\N{\fnMicrosoft YaHei\fs14}Is there any possibility{\r}
Dialogue: 0,0:24:13.60,0:24:16.33,Default,,0000,0000,0000,,迈尔斯受到你们家里\N{\fnMicrosoft YaHei\fs14}that Miles has suffered some kind of abuse{\r}
Dialogue: 0,0:24:16.33,0:24:18.03,Default,,0000,0000,0000,,哪位家庭成员的虐待\N{\fnMicrosoft YaHei\fs14}from someone in your family?{\r}
Dialogue: 0,0:24:19.80,0:24:21.50,Default,,0000,0000,0000,,你这是在控诉我虐待了我们的孩子吗\N{\fnMicrosoft YaHei\fs14}What the hell are you accusing me of?{\r}
Dialogue: 0,0:24:21.50,0:24:23.47,Default,,0000,0000,0000,,我不是在控诉你 约翰\N{\fnMicrosoft YaHei\fs14}I am not accusing you of anything, John.{\r}
Dialogue: 0,0:24:23.47,0:24:24.90,Default,,0000,0000,0000,,我只是转述她的原话\N{\fnMicrosoft YaHei\fs14}I'm telling you what she said.{\r}
Dialogue: 0,0:24:24.91,0:24:26.58,Default,,0000,0000,0000,,我没打过我们的孩子\N{\fnMicrosoft YaHei\fs14}I never touched our son.{\r}
Dialogue: 0,0:24:27.28,0:24:28.74,Default,,0000,0000,0000,,是不是因为我爸的事\N{\fnMicrosoft YaHei\fs14}Is this about my dad?{\r}
Dialogue: 0,0:24:31.45,0:24:33.95,Default,,0000,0000,0000,,我爸是个混蛋\N{\fnMicrosoft YaHei\fs14}My dad was a piece of shit.{\r}
Dialogue: 0,0:24:33.95,0:24:36.68,Default,,0000,0000,0000,,我已经把那些抛在脑后了 你清楚这点的\N{\fnMicrosoft YaHei\fs14}I have processed all of that. You know that.{\r}
Dialogue: 0,0:24:36.69,0:24:39.25,Default,,0000,0000,0000,,我们当时决定要孩子的时候就说清楚了\N{\fnMicrosoft YaHei\fs14}That was part of us deciding to have kids.{\r}
Dialogue: 0,0:24:39.26,0:24:41.62,Default,,0000,0000,0000,,我从没打过迈尔斯 我爱我们的孩子\N{\fnMicrosoft YaHei\fs14}I would never hit Miles. I love that kid.{\r}
Dialogue: 0,0:24:42.49,0:24:44.46,Default,,0000,0000,0000,,也许斯特拉瑟诊断有误呢\N{\fnMicrosoft YaHei\fs14}Maybe Strasser's wrong.{\r}
Dialogue: 0,0:24:44.46,0:24:45.99,Default,,0000,0000,0000,,你一直说咱们儿子的大脑情况不太一样\N{\fnMicrosoft YaHei\fs14}You've always said he's wired differently.{\r}
Dialogue: 0,0:24:46.00,0:24:47.33,Default,,0000,0000,0000,,也许他就是这样的人呢\N{\fnMicrosoft YaHei\fs14}What if this is just the way he is?{\r}
Dialogue: 0,0:24:47.33,0:24:48.53,Default,,0000,0000,0000,,他不是这样的人\N{\fnMicrosoft YaHei\fs14}This is not the way that he is.{\r}
Dialogue: 0,0:24:48.53,0:24:49.83,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}All right.{\r}
Dialogue: 0,0:24:49.83,0:24:52.13,Default,,0000,0000,0000,,我不知道究竟是怎么回事 约翰\N{\fnMicrosoft YaHei\fs14}I don't understand what's happening, John.{\r}
Dialogue: 0,0:24:52.14,0:24:54.20,Default,,0000,0000,0000,,我不知道究竟是怎么回事\N{\fnMicrosoft YaHei\fs14}I don't understand what's going on.{\r}
Dialogue: 0,0:25:04.05,0:25:05.88,Default,,0000,0000,0000,,我刚刚去看了他的情况\N{\fnMicrosoft YaHei\fs14}I just checked on him.{\r}
Dialogue: 0,0:25:05.88,0:25:07.98,Default,,0000,0000,0000,,他服了药之后已经睡下了\N{\fnMicrosoft YaHei\fs14}That medication really knocked him out.{\r}
Dialogue: 0,0:25:10.39,0:25:11.72,Default,,0000,0000,0000,,你没事吧\N{\fnMicrosoft YaHei\fs14}You okay?{\r}
Dialogue: 0,0:25:22.70,0:25:23.83,Default,,0000,0000,0000,,我很难过\N{\fnMicrosoft YaHei\fs14}I'm sorry.{\r}
Dialogue: 0,0:25:26.04,0:25:28.24,Default,,0000,0000,0000,,我们会搞清楚是什么情况的\N{\fnMicrosoft YaHei\fs14}We're gonna figure this out, all right?{\r}
Dialogue: 0,0:25:36.01,0:25:37.31,Default,,0000,0000,0000,,嗯\N{\fnMicrosoft YaHei\fs14}Yeah.{\r}
Dialogue: 0,0:25:42.52,0:25:45.22,Default,,0000,0000,0000,,我也很担心你\N{\fnMicrosoft YaHei\fs14}Hey, I'm worried about you, too.{\r}
Dialogue: 0,0:25:46.32,0:25:48.89,Default,,0000,0000,0000,,我觉得我要疯了\N{\fnMicrosoft YaHei\fs14}I feel like I'm going crazy.{\r}
Dialogue: 0,0:25:48.89,0:25:50.19,Default,,0000,0000,0000,,会没事的\N{\fnMicrosoft YaHei\fs14}It's gonna be okay.{\r}
Dialogue: 0,0:25:51.40,0:25:53.06,Default,,0000,0000,0000,,我们要坚强\N{\fnMicrosoft YaHei\fs14}We just have to keep strong.{\r}
Dialogue: 0,0:25:54.66,0:25:55.77,Default,,0000,0000,0000,,好么\N{\fnMicrosoft YaHei\fs14}Okay?{\r}
Dialogue: 0,0:25:58.57,0:25:59.70,Default,,0000,0000,0000,,好\N{\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:27:05.30,0:27:07.17,Default,,0000,0000,0000,,去你妈的\N{\fnMicrosoft YaHei\fs14}Go fuck yourself.{\r}
Dialogue: 0,0:27:30.09,0:27:31.79,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What is it?{\r}
Dialogue: 0,0:27:31.80,0:27:33.30,Default,,0000,0000,0000,,怎么了 怎么了\N{\fnMicrosoft YaHei\fs14}What happened? What happened?{\r}
Dialogue: 0,0:27:33.30,0:27:34.46,Default,,0000,0000,0000,,这里有人\N{\fnMicrosoft YaHei\fs14}There's someone in here.{\r}
Dialogue: 0,0:27:34.47,0:27:35.63,Default,,0000,0000,0000,,哪里\N{\fnMicrosoft YaHei\fs14}Where?{\r}
Dialogue: 0,0:27:35.63,0:27:36.93,Default,,0000,0000,0000,,他在这里\N{\fnMicrosoft YaHei\fs14}He's in here.{\r}
Dialogue: 0,0:27:36.93,0:27:38.60,Default,,0000,0000,0000,,亲爱的 你应该是做了噩梦\N{\fnMicrosoft YaHei\fs14}Honey, it sounds like you were having a bad dream.{\r}
Dialogue: 0,0:27:38.60,0:27:40.30,Default,,0000,0000,0000,,- 不是 - 房间里没有别人\N{\fnMicrosoft YaHei\fs14}- No. No. - There's no one in here.{\r}
Dialogue: 0,0:27:40.31,0:27:43.51,Default,,0000,0000,0000,,不是 他在这里\N{\fnMicrosoft YaHei\fs14}No. He's in here.{\r}
Dialogue: 0,0:27:44.18,0:27:46.98,Default,,0000,0000,0000,,他在这里面\N{\fnMicrosoft YaHei\fs14}He's inside here.{\r}
Dialogue: 0,0:27:46.98,0:27:49.68,Default,,0000,0000,0000,,- 他在这里面 - 来抱一抱 孩子\N{\fnMicrosoft YaHei\fs14}- He's inside here. - Okay, come here. Oh, baby.{\r}
Dialogue: 0,0:28:18.38,0:28:21.38,Default,,0000,0000,0000,,亚瑟 你好 我是埃琳娜·斯特拉瑟\N{\fnMicrosoft YaHei\fs14}Arthur, hi. Elaine Strasser.{\r}
Dialogue: 0,0:28:23.72,0:28:26.05,Default,,0000,0000,0000,,你..你有空么\N{\fnMicrosoft YaHei\fs14}Yeah, do you... Do you have a minute?{\r}
Dialogue: 0,0:28:34.49,0:28:36.33,Default,,0000,0000,0000,,- 你好 莎拉 - 你好\N{\fnMicrosoft YaHei\fs14}- Hi, Sarah. - Hi.{\r}
Dialogue: 0,0:28:36.33,0:28:37.73,Default,,0000,0000,0000,,周末他们把大门都锁上了\N{\fnMicrosoft YaHei\fs14}They lock it up on the weekends.{\r}
Dialogue: 0,0:28:39.10,0:28:42.07,Default,,0000,0000,0000,,感谢你接到通知就这么快赶过来了\N{\fnMicrosoft YaHei\fs14}Thanks for coming in on such short notice.{\r}
Dialogue: 0,0:28:45.84,0:28:48.41,Default,,0000,0000,0000,,我是亚瑟·雅各布森 很高兴见到你\N{\fnMicrosoft YaHei\fs14}Arthur Jacobson. It's a pleasure to meet you.{\r}
Dialogue: 0,0:28:48.41,0:28:49.61,Default,,0000,0000,0000,,你好\N{\fnMicrosoft YaHei\fs14}Hello.{\r}
Dialogue: 0,0:28:52.91,0:28:54.71,Default,,0000,0000,0000,,埃琳娜有没有给你讲过\N{\fnMicrosoft YaHei\fs14}Has Elaine explained anything{\r}
Dialogue: 0,0:28:54.71,0:28:56.18,Default,,0000,0000,0000,,我所做的研究\N{\fnMicrosoft YaHei\fs14}about the type of research I do?{\r}
Dialogue: 0,0:28:57.58,0:28:59.05,Default,,0000,0000,0000,,好的\N{\fnMicrosoft YaHei\fs14}Good.{\r}
Dialogue: 0,0:28:59.05,0:29:00.38,Default,,0000,0000,0000,,在我开始介绍之前\N{\fnMicrosoft YaHei\fs14}I'd like to start with a few questions{\r}
Dialogue: 0,0:29:00.39,0:29:01.72,Default,,0000,0000,0000,,我想先问你几个问题\N{\fnMicrosoft YaHei\fs14}before we get into that.{\r}
Dialogue: 0,0:29:02.92,0:29:04.05,Default,,0000,0000,0000,,好的\N{\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:29:04.06,0:29:05.29,Default,,0000,0000,0000,,你家中有没有人\N{\fnMicrosoft YaHei\fs14}Does anyone in your family{\r}
Dialogue: 0,0:29:05.29,0:29:06.56,Default,,0000,0000,0000,,会说外语的 莎拉\N{\fnMicrosoft YaHei\fs14}speak a foreign language, Sarah?{\r}
Dialogue: 0,0:29:07.53,0:29:09.13,Default,,0000,0000,0000,,约翰和我上高中的时候\N{\fnMicrosoft YaHei\fs14}John and I both took Spanish{\r}
Dialogue: 0,0:29:09.13,0:29:10.53,Default,,0000,0000,0000,,都学过西班牙语 但我们\N{\fnMicrosoft YaHei\fs14}in high school but neither of us{\r}
Dialogue: 0,0:29:10.53,0:29:11.96,Default,,0000,0000,0000,,都只记得几个词而已\N{\fnMicrosoft YaHei\fs14}remember more than a few words.{\r}
Dialogue: 0,0:29:11.96,0:29:14.16,Default,,0000,0000,0000,,那你儿子的爷爷奶奶呢\N{\fnMicrosoft YaHei\fs14}And what about the boy's grandparents?{\r}
Dialogue: 0,0:29:14.17,0:29:16.27,Default,,0000,0000,0000,,你家里有没有人是移民\N{\fnMicrosoft YaHei\fs14}Any recent immigrants in your family?{\r}
Dialogue: 0,0:29:16.27,0:29:17.80,Default,,0000,0000,0000,,不好意思 我不明白你为什么问这些\N{\fnMicrosoft YaHei\fs14}I'm sorry, I'm confused.{\r}
Dialogue: 0,0:29:19.77,0:29:20.77,Default,,0000,0000,0000,,这是你儿子的声音么\N{\fnMicrosoft YaHei\fs14}Is this your son's voice?{\r}
Dialogue: 0,0:29:35.55,0:29:37.65,Default,,0000,0000,0000,,是 这是迈尔斯的声音\N{\fnMicrosoft YaHei\fs14}Yes. Yes, that's Miles.{\r}
Dialogue: 0,0:29:37.66,0:29:41.06,Default,,0000,0000,0000,,也许是做梦的时候 说的一些胡话罢了\N{\fnMicrosoft YaHei\fs14}It's just some gibberish from a dream.{\r}
Dialogue: 0,0:29:41.06,0:29:43.63,Default,,0000,0000,0000,,其实这不是什么胡话\N{\fnMicrosoft YaHei\fs14}Actually, it's not gibberish.{\r}
Dialogue: 0,0:29:43.63,0:29:46.10,Default,,0000,0000,0000,,我找我的一个同事 翻译了他说的这段话\N{\fnMicrosoft YaHei\fs14}I had the words translated by a colleague of mine.{\r}
Dialogue: 0,0:29:46.63,0:29:47.63,Default,,0000,0000,0000,,他说的是什么\N{\fnMicrosoft YaHei\fs14}What is it?{\r}
Dialogue: 0,0:29:48.17,0:29:49.83,Default,,0000,0000,0000,,匈牙利语\N{\fnMicrosoft YaHei\fs14}Hungarian.{\r}
Dialogue: 0,0:29:49.84,0:29:52.44,Default,,0000,0000,0000,,而且是 一种罕见的匈牙利语方言\N{\fnMicrosoft YaHei\fs14}Specifically, a rare dialect of Hungarian{\r}
Dialogue: 0,0:29:52.44,0:29:54.47,Default,,0000,0000,0000,,住在罗马尼亚语匈牙利边界附近的人才会说这种方言\N{\fnMicrosoft YaHei\fs14}only spoken near the Romanian border.{\r}
Dialogue: 0,0:29:55.87,0:29:57.57,Default,,0000,0000,0000,,莎拉 继续听接下来所说的这些\N{\fnMicrosoft YaHei\fs14}Listen to what happens next, Sarah.{\r}
Dialogue: 0,0:29:57.58,0:29:58.98,Default,,0000,0000,0000,,这些也很关键\N{\fnMicrosoft YaHei\fs14}This is equally important.{\r}
Dialogue: 0,0:29:58.98,0:30:01.15,Default,,0000,0000,0000,,我听到你说梦话了\N{\fnMicrosoft YaHei\fs14}I heard you talking in your sleep.{\r}
Dialogue: 0,0:30:02.31,0:30:04.02,Default,,0000,0000,0000,,你做噩梦了吧\N{\fnMicrosoft YaHei\fs14}You were having a bad dream.{\r}
Dialogue: 0,0:30:05.95,0:30:07.32,Default,,0000,0000,0000,,我没有\N{\fnMicrosoft YaHei\fs14}No, I wasn't.{\r}
Dialogue: 0,0:30:10.92,0:30:14.79,Default,,0000,0000,0000,,我是说 我没有做噩梦 这梦是很不错的\N{\fnMicrosoft YaHei\fs14}I mean, it wasn't a bad dream, it was a good dream.{\r}
Dialogue: 0,0:30:15.86,0:30:17.43,Default,,0000,0000,0000,,迈尔斯说他做的梦不错\N{\fnMicrosoft YaHei\fs14}Miles says it was a good dream.{\r}
Dialogue: 0,0:30:17.43,0:30:18.80,Default,,0000,0000,0000,,这怎么就关键了\N{\fnMicrosoft YaHei\fs14}Why is that important?{\r}
Dialogue: 0,0:30:18.80,0:30:21.50,Default,,0000,0000,0000,,莎拉 关键是莎拉说的那些话\N{\fnMicrosoft YaHei\fs14}The words, Sarah. What Miles said.{\r}
Dialogue: 0,0:30:24.54,0:30:26.44,Default,,0000,0000,0000,,闭嘴 你这婊子\N{\fnMicrosoft YaHei\fs14}"Shut up, you filthy whore.{\r}
Dialogue: 0,0:30:26.44,0:30:28.87,Default,,0000,0000,0000,,不准哭 要不然我就把你眼睛挖出来\N{\fnMicrosoft YaHei\fs14}"Stop crying or I'll cut your eyes out.{\r}
Dialogue: 0,0:30:28.87,0:30:30.44,Default,,0000,0000,0000,,我要看着你慢慢死去\N{\fnMicrosoft YaHei\fs14}"I'm going to watch you die."{\r}
Dialogue: 0,0:30:30.44,0:30:32.31,Default,,0000,0000,0000,,不 迈尔斯不可能说出这些话\N{\fnMicrosoft YaHei\fs14}No. No, Miles did not say that.{\r}
Dialogue: 0,0:30:32.31,0:30:34.04,Default,,0000,0000,0000,,但确实他说出来了\N{\fnMicrosoft YaHei\fs14}But he did.{\r}
Dialogue: 0,0:30:34.05,0:30:35.71,Default,,0000,0000,0000,,还是用的一种全世界\N{\fnMicrosoft YaHei\fs14}And he did it in a dialect{\r}
Dialogue: 0,0:30:35.72,0:30:39.68,Default,,0000,0000,0000,,只有不到40万人会的方言\N{\fnMicrosoft YaHei\fs14}spoken by less than 400,000 people in the world.{\r}
Dialogue: 0,0:30:39.69,0:30:41.39,Default,,0000,0000,0000,,迈尔斯和他的同龄人相处的好么\N{\fnMicrosoft YaHei\fs14}Does Miles get along well with children his age?{\r}
Dialogue: 0,0:30:43.02,0:30:46.19,Default,,0000,0000,0000,,他有没有提过他情绪波动的事\N{\fnMicrosoft YaHei\fs14}Has he ever mentioned feeling displaced in his body?{\r}
Dialogue: 0,0:30:47.79,0:30:48.96,Default,,0000,0000,0000,,提过\N{\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:30:48.96,0:30:51.16,Default,,0000,0000,0000,,他对食物的喜好呢\N{\fnMicrosoft YaHei\fs14}What about his taste in food?{\r}
Dialogue: 0,0:30:51.16,0:30:52.53,Default,,0000,0000,0000,,你有没有注意到他味觉方面有没有什么变化\N{\fnMicrosoft YaHei\fs14}Have you noticed any change in his palate?{\r}
Dialogue: 0,0:30:54.53,0:30:55.97,Default,,0000,0000,0000,,这些都是判定的指标\N{\fnMicrosoft YaHei\fs14}These are indicators.{\r}
Dialogue: 0,0:30:55.97,0:30:57.37,Default,,0000,0000,0000,,判定什么的指标\N{\fnMicrosoft YaHei\fs14}Indicators of what?{\r}
Dialogue: 0,0:31:02.01,0:31:05.24,Default,,0000,0000,0000,,全世界50%的人 总共有几十亿人\N{\fnMicrosoft YaHei\fs14}Half the people on earth, billions of them,{\r}
Dialogue: 0,0:31:05.25,0:31:07.91,Default,,0000,0000,0000,,相信人的意识和能量\N{\fnMicrosoft YaHei\fs14}believe that consciousness and energy,{\r}
Dialogue: 0,0:31:07.91,0:31:10.52,Default,,0000,0000,0000,,也就是我们所熟知的 灵魂\N{\fnMicrosoft YaHei\fs14}what we often refer to as our souls,{\r}
Dialogue: 0,0:31:10.52,0:31:12.42,Default,,0000,0000,0000,,能返回\N{\fnMicrosoft YaHei\fs14}are capable of returning{\r}
Dialogue: 0,0:31:12.42,0:31:15.05,Default,,0000,0000,0000,,人世间 重新开始一段人生\N{\fnMicrosoft YaHei\fs14}to this physical realm to live new lives.{\r}
Dialogue: 0,0:31:15.05,0:31:17.72,Default,,0000,0000,0000,,这样的概念在我们西方比较新鲜\N{\fnMicrosoft YaHei\fs14}It's only foreign to Western minds.{\r}
Dialogue: 0,0:31:17.72,0:31:19.86,Default,,0000,0000,0000,,但在世界上大多数地方\N{\fnMicrosoft YaHei\fs14}In most of the world,{\r}
Dialogue: 0,0:31:19.86,0:31:22.56,Default,,0000,0000,0000,,人们已经接受了转世这么一种概念\N{\fnMicrosoft YaHei\fs14}reincarnation is an accepted part of life.{\r}
Dialogue: 0,0:31:24.10,0:31:25.50,Default,,0000,0000,0000,,转世\N{\fnMicrosoft YaHei\fs14}Reincarnation?{\r}
Dialogue: 0,0:31:30.70,0:31:33.37,Default,,0000,0000,0000,,我们这是在讨论什么情况\N{\fnMicrosoft YaHei\fs14}What are we talking about?{\r}
Dialogue: 0,0:31:33.37,0:31:36.41,Default,,0000,0000,0000,,我跟你讲讲我在印度时遇上的一个男孩\N{\fnMicrosoft YaHei\fs14}Let me tell you about a boy I met when I was in India.{\r}
Dialogue: 0,0:31:36.41,0:31:39.04,Default,,0000,0000,0000,,他叫帕德曼 大约六岁\N{\fnMicrosoft YaHei\fs14}His name was Padman, around six years old.{\r}
Dialogue: 0,0:31:39.05,0:31:41.68,Default,,0000,0000,0000,,但他的家人都说 他不止六岁\N{\fnMicrosoft YaHei\fs14}But his family claimed he was much older.{\r}
Dialogue: 0,0:31:41.68,0:31:45.45,Default,,0000,0000,0000,,他前世的所有细节 他都记得住\N{\fnMicrosoft YaHei\fs14}He could remember every detail from a previous life.{\r}
Dialogue: 0,0:31:45.45,0:31:47.89,Default,,0000,0000,0000,,他开的面包店 他的兄弟姐妹\N{\fnMicrosoft YaHei\fs14}The bakery he owned, his siblings,{\r}
Dialogue: 0,0:31:47.89,0:31:50.69,Default,,0000,0000,0000,,他母亲最喜欢听的曲子\N{\fnMicrosoft YaHei\fs14}his mother's favorite song.{\r}
Dialogue: 0,0:31:50.69,0:31:52.46,Default,,0000,0000,0000,,他甚至能描述出他去世时的具体情况\N{\fnMicrosoft YaHei\fs14}He even described his death in detail,{\r}
Dialogue: 0,0:31:52.46,0:31:54.86,Default,,0000,0000,0000,,快要淹死时的感受\N{\fnMicrosoft YaHei\fs14}what it felt like when he was drowning.{\r}
Dialogue: 0,0:31:54.86,0:31:57.03,Default,,0000,0000,0000,,我发现他所描述的那座城市\N{\fnMicrosoft YaHei\fs14}I found the town he described{\r}
Dialogue: 0,0:31:57.03,0:31:58.53,Default,,0000,0000,0000,,离他所住的村庄有100英里\N{\fnMicrosoft YaHei\fs14}about 100 miles from his village,{\r}
Dialogue: 0,0:31:58.53,0:32:00.60,Default,,0000,0000,0000,,我带帕德曼过去看看\N{\fnMicrosoft YaHei\fs14}and I took Padman there.{\r}
Dialogue: 0,0:32:00.60,0:32:03.60,Default,,0000,0000,0000,,他直接带我去了他前世出生的房子\N{\fnMicrosoft YaHei\fs14}He showed me directly to the house where he was born.{\r}
Dialogue: 0,0:32:03.60,0:32:05.64,Default,,0000,0000,0000,,把我介绍给他的兄弟姐妹\N{\fnMicrosoft YaHei\fs14}Introduced me to his brothers and sisters{\r}
Dialogue: 0,0:32:05.64,0:32:08.31,Default,,0000,0000,0000,,他们那时都已经50多岁了\N{\fnMicrosoft YaHei\fs14}who were by now over 50 years old.{\r}
Dialogue: 0,0:32:08.31,0:32:11.11,Default,,0000,0000,0000,,我们在那里待了3周\N{\fnMicrosoft YaHei\fs14}We stayed there for three weeks{\r}
Dialogue: 0,0:32:11.11,0:32:13.41,Default,,0000,0000,0000,,陪着一位老妇人 帕德曼声称这是他的母亲\N{\fnMicrosoft YaHei\fs14}with an old woman he claimed to be his mother,{\r}
Dialogue: 0,0:32:13.41,0:32:15.95,Default,,0000,0000,0000,,为她唱歌 送她离开人世\N{\fnMicrosoft YaHei\fs14}singing to her as she passed away.{\r}
Dialogue: 0,0:32:18.29,0:32:19.95,Default,,0000,0000,0000,,现在 我觉得\N{\fnMicrosoft YaHei\fs14}Now, I believe{\r}
Dialogue: 0,0:32:19.95,0:32:22.59,Default,,0000,0000,0000,,帕德曼前世的灵魂没有散去\N{\fnMicrosoft YaHei\fs14}that the soul inside Padman{\r}
Dialogue: 0,0:32:22.59,0:32:26.36,Default,,0000,0000,0000,,是因为他还没来得和他的母亲告别\N{\fnMicrosoft YaHei\fs14}drowned before he had a chance to say goodbye to his mother.{\r}
Dialogue: 0,0:32:27.80,0:32:29.63,Default,,0000,0000,0000,,我们让他的灵魂\N{\fnMicrosoft YaHei\fs14}And when we allowed this entity{\r}
Dialogue: 0,0:32:29.63,0:32:32.00,Default,,0000,0000,0000,,完成了未竟之事\N{\fnMicrosoft YaHei\fs14}to finish what it had left undone,{\r}
Dialogue: 0,0:32:32.00,0:32:33.67,Default,,0000,0000,0000,,帕德曼又恢复成了正常的六岁孩童\N{\fnMicrosoft YaHei\fs14}Padman returned to being a little boy.{\r}
Dialogue: 0,0:32:33.67,0:32:35.83,Default,,0000,0000,0000,,刹那间 他就恢复正常了\N{\fnMicrosoft YaHei\fs14}In an instant, he was back,{\r}
Dialogue: 0,0:32:35.84,0:32:38.47,Default,,0000,0000,0000,,都不记得发生什么了\N{\fnMicrosoft YaHei\fs14}with very little memory of what had happened.{\r}
Dialogue: 0,0:32:38.47,0:32:40.77,Default,,0000,0000,0000,,如果是这样的话 很多事就说的通了\N{\fnMicrosoft YaHei\fs14}This would explain so much.{\r}
Dialogue: 0,0:32:40.77,0:32:42.77,Default,,0000,0000,0000,,最关键的一点是\N{\fnMicrosoft YaHei\fs14}The crucial thing to understand here{\r}
Dialogue: 0,0:32:42.78,0:32:45.98,Default,,0000,0000,0000,,灵魂转世是有原因的\N{\fnMicrosoft YaHei\fs14}is that these souls return for a reason.{\r}
Dialogue: 0,0:32:45.98,0:32:48.08,Default,,0000,0000,0000,,完成那些未完之事\N{\fnMicrosoft YaHei\fs14}To complete something left unfinished,{\r}
Dialogue: 0,0:32:48.08,0:32:49.65,Default,,0000,0000,0000,,为了画上句号\N{\fnMicrosoft YaHei\fs14}to find closure.{\r}
Dialogue: 0,0:32:49.65,0:32:51.15,Default,,0000,0000,0000,,你是说 有东西附体在我儿子身上了么\N{\fnMicrosoft YaHei\fs14}So, you're saying that my son is possessed?{\r}
Dialogue: 0,0:32:51.15,0:32:53.79,Default,,0000,0000,0000,,不是 附体是指 非人类的物质\N{\fnMicrosoft YaHei\fs14}No. Possession refers to a non-human entity{\r}
Dialogue: 0,0:32:53.79,0:32:56.12,Default,,0000,0000,0000,,寄生在人类宿主上\N{\fnMicrosoft YaHei\fs14}taking control of a human host.{\r}
Dialogue: 0,0:32:56.12,0:32:58.76,Default,,0000,0000,0000,,所以你是说 在我儿子身上的这个灵魂\N{\fnMicrosoft YaHei\fs14}So the invading soul in my son{\r}
Dialogue: 0,0:32:59.90,0:33:01.16,Default,,0000,0000,0000,,其实是另一个人\N{\fnMicrosoft YaHei\fs14}was another human?{\r}
Dialogue: 0,0:33:01.16,0:33:03.97,Default,,0000,0000,0000,,是的 根据我从那磁带上听到的内容\N{\fnMicrosoft YaHei\fs14}Yes. And from what I heard on that tape,{\r}
Dialogue: 0,0:33:05.50,0:33:06.87,Default,,0000,0000,0000,,这还是位危险人物\N{\fnMicrosoft YaHei\fs14}that person is dangerous.{\r}
Dialogue: 0,0:33:08.97,0:33:12.77,Default,,0000,0000,0000,,莎拉 你儿子的体内正在进行一场激烈的对抗\N{\fnMicrosoft YaHei\fs14}Sarah, there's a battle being waged inside your son.{\r}
Dialogue: 0,0:33:12.77,0:33:17.98,Default,,0000,0000,0000,,你儿子的灵魂 与外来的灵魂之间发生对抗\N{\fnMicrosoft YaHei\fs14}A war between his natural soul and this older one.{\r}
Dialogue: 0,0:33:19.68,0:33:21.21,Default,,0000,0000,0000,,这两个灵魂\N{\fnMicrosoft YaHei\fs14}These two entities cannot exist{\r}
Dialogue: 0,0:33:21.22,0:33:23.12,Default,,0000,0000,0000,,无法永远共存下去\N{\fnMicrosoft YaHei\fs14}in the same body forever.{\r}
Dialogue: 0,0:33:23.12,0:33:25.85,Default,,0000,0000,0000,,一个灵魂会成为主导\N{\fnMicrosoft YaHei\fs14}One will become dominant{\r}
Dialogue: 0,0:33:25.85,0:33:27.72,Default,,0000,0000,0000,,另一个会被吸收\N{\fnMicrosoft YaHei\fs14}and the other will be absorbed.{\r}
Dialogue: 0,0:33:28.79,0:33:31.06,Default,,0000,0000,0000,,我们是想尽力避免发生这种情况的\N{\fnMicrosoft YaHei\fs14}This is what we're trying to avoid.{\r}
Dialogue: 0,0:33:31.06,0:33:32.53,Default,,0000,0000,0000,,抱歉 我听不下去了\N{\fnMicrosoft YaHei\fs14}I'm sorry, I can't do this.{\r}
Dialogue: 0,0:33:34.36,0:33:36.36,Default,,0000,0000,0000,,莎拉 莎拉 慢着\N{\fnMicrosoft YaHei\fs14}Sarah. Sarah, wait.{\r}
Dialogue: 0,0:33:36.36,0:33:39.06,Default,,0000,0000,0000,,听我说 看一下这个\N{\fnMicrosoft YaHei\fs14}Just, please... Just watch this.{\r}
Dialogue: 0,0:33:39.07,0:33:41.57,Default,,0000,0000,0000,,我知道你可能一时很难接受我们所说的这些\N{\fnMicrosoft YaHei\fs14}I know how hard this is for you.{\r}
Dialogue: 0,0:33:41.57,0:33:43.57,Default,,0000,0000,0000,,我以为你是想帮助我的孩子\N{\fnMicrosoft YaHei\fs14}I thought that you were gonna help my son.{\r}
Dialogue: 0,0:33:44.74,0:33:46.88,Default,,0000,0000,0000,,迈尔斯可能心智发展有些问题\N{\fnMicrosoft YaHei\fs14}Miles may have developmental issues,{\r}
Dialogue: 0,0:33:47.74,0:33:49.64,Default,,0000,0000,0000,,但他毕竟是我的孩子\N{\fnMicrosoft YaHei\fs14}but he is still my son.{\r}
Dialogue: 0,0:33:51.18,0:33:53.55,Default,,0000,0000,0000,,我可不会让你们在他身上做什么实验\N{\fnMicrosoft YaHei\fs14}And I am not going to subject him to this.{\r}
Dialogue: 0,0:34:19.61,0:34:22.11,Default,,0000,0000,0000,,妈妈 你想不想来玩瞪眼游戏\N{\fnMicrosoft YaHei\fs14}Hey, Mom, wanna do a staring contest?{\r}
Dialogue: 0,0:34:24.81,0:34:26.72,Default,,0000,0000,0000,,迈尔斯 我现在心情不太好\N{\fnMicrosoft YaHei\fs14}I'm not in the mood right now, Miles.{\r}
Dialogue: 0,0:34:32.92,0:34:34.29,Default,,0000,0000,0000,,好吧\N{\fnMicrosoft YaHei\fs14}Okay.{\r}
Dialogue: 0,0:34:41.90,0:34:43.50,Default,,0000,0000,0000,,一 二\N{\fnMicrosoft YaHei\fs14}One, two,{\r}
Dialogue: 0,0:34:44.07,0:34:45.23,Default,,0000,0000,0000,,三\N{\fnMicrosoft YaHei\fs14}three.{\r}
Dialogue: 0,0:35:20.47,0:35:23.14,Default,,0000,0000,0000,,迈尔斯 我不喜欢你这么碰妈妈的手\N{\fnMicrosoft YaHei\fs14}I don't like it when you touch me like that, Miles.{\r}
Dialogue: 0,0:35:26.81,0:35:28.08,Default,,0000,0000,0000,,这首歌是什么\N{\fnMicrosoft YaHei\fs14}What is that song?{\r}
Dialogue: 0,0:35:29.61,0:35:30.68,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,0:35:31.95,0:35:33.92,Default,,0000,0000,0000,,你刚刚哼的这首歌\N{\fnMicrosoft YaHei\fs14}That song you were just humming.{\r}
Dialogue: 0,0:35:35.35,0:35:36.82,Default,,0000,0000,0000,,我之前听你唱过\N{\fnMicrosoft YaHei\fs14}I've heard you singing it before.{\r}
Dialogue: 0,0:35:36.82,0:35:38.12,Default,,0000,0000,0000,,你从哪学来的\N{\fnMicrosoft YaHei\fs14}Where did you learn it?{\r}
Dialogue: 0,0:35:38.12,0:35:40.02,Default,,0000,0000,0000,,- 你教我的啊 - 不是我教的\N{\fnMicrosoft YaHei\fs14}- From you. - No, you didn't.{\r}
Dialogue: 0,0:35:40.02,0:35:41.42,Default,,0000,0000,0000,,要不然我会记得的\N{\fnMicrosoft YaHei\fs14}I would've remembered.{\r}
Dialogue: 0,0:35:42.69,0:35:45.63,Default,,0000,0000,0000,,我小时候 你经常唱这首歌给我听\N{\fnMicrosoft YaHei\fs14}You used to sing it to me when I was a baby.{\r}
Dialogue: 0,0:35:45.63,0:35:47.10,Default,,0000,0000,0000,,我听着就睡着了\N{\fnMicrosoft YaHei\fs14}While I was sleeping.{\r}
Dialogue: 0,0:35:50.43,0:35:51.43,Default,,0000,0000,0000,,我没有\N{\fnMicrosoft YaHei\fs14}No, I didn't.{\r}
Dialogue: 0,0:35:55.97,0:35:57.34,Default,,0000,0000,0000,,抱歉\N{\fnMicrosoft YaHei\fs14}Excuse me.{\r}
Dialogue: 0,0:35:57.34,0:35:58.61,Default,,0000,0000,0000,,我离开一会儿\N{\fnMicrosoft YaHei\fs14}I'm sorry.{\r}
Dialogue: 0,0:36:09.62,0:36:10.89,Default,,0000,0000,0000,,安德雷娅和布鲁斯夫妇\N{\fnMicrosoft YaHei\fs14}Andrea and Bruce{\r}
Dialogue: 0,0:36:10.89,0:36:12.12,Default,,0000,0000,0000,,住在路易斯安那州 拉斐特市\N{\fnMicrosoft YaHei\fs14}of Lafayette, Louisiana,{\r}
Dialogue: 0,0:36:12.12,0:36:14.22,Default,,0000,0000,0000,,均接受过良好教育\N{\fnMicrosoft YaHei\fs14}are a highly educated modern couple.{\r}
Dialogue: 0,0:36:14.22,0:36:17.22,Default,,0000,0000,0000,,他们的孩子詹姆斯 表现出\N{\fnMicrosoft YaHei\fs14}To them, the possibility that their little son, James,{\r}
Dialogue: 0,0:36:17.23,0:36:19.79,Default,,0000,0000,0000,,一些灵魂转世的迹象\N{\fnMicrosoft YaHei\fs14}was manifesting signs of a former life{\r}
Dialogue: 0,0:36:19.80,0:36:22.20,Default,,0000,0000,0000,,这让他们有点意外\N{\fnMicrosoft YaHei\fs14}was, well, a little out there.{\r}
Dialogue: 0,0:36:22.20,0:36:24.03,Default,,0000,0000,0000,,大约在詹姆斯2-4岁的时候\N{\fnMicrosoft YaHei\fs14}Between the ages of two and four,{\r}
Dialogue: 0,0:36:24.03,0:36:26.40,Default,,0000,0000,0000,,詹姆斯可以讲述他前世的诸多细节\N{\fnMicrosoft YaHei\fs14}James would reveal extraordinary details{\r}
Dialogue: 0,0:36:26.40,0:36:28.87,Default,,0000,0000,0000,,他前世是一位战斗机飞行员\N{\fnMicrosoft YaHei\fs14}about the life of a former fighter pilot.{\r}
Dialogue: 0,0:36:28.87,0:36:30.50,Default,,0000,0000,0000,,我觉得他有前世\N{\fnMicrosoft YaHei\fs14}I believe that he had a past life{\r}
Dialogue: 0,0:36:30.51,0:36:32.41,Default,,0000,0000,0000,,现在转生了\N{\fnMicrosoft YaHei\fs14}and he came back{\r}
Dialogue: 0,0:36:32.41,0:36:34.48,Default,,0000,0000,0000,,因为他前世还有事情没完成\N{\fnMicrosoft YaHei\fs14}because he wasn't finished with something.{\r}
Dialogue: 0,0:36:34.48,0:36:35.54,Default,,0000,0000,0000,,我们在很小的时候...\N{\fnMicrosoft YaHei\fs14}We are taught at a very early age...{\r}
Dialogue: 0,0:36:35.54,0:36:37.24,Default,,0000,0000,0000,,这是什么\N{\fnMicrosoft YaHei\fs14}What is that?{\r}
Dialogue: 0,0:36:37.25,0:36:39.38,Default,,0000,0000,0000,,转世是不存在的\N{\fnMicrosoft YaHei\fs14}...that reincarnation doesn't exist.{\r}
Dialogue: 0,0:36:39.38,0:36:40.82,Default,,0000,0000,0000,,斯特拉瑟医生的一个同事\N{\fnMicrosoft YaHei\fs14}A colleague of Dr. Strasser's{\r}
Dialogue: 0,0:36:40.82,0:36:42.45,Default,,0000,0000,0000,,给我的光盘\N{\fnMicrosoft YaHei\fs14}gave it to me.{\r}
Dialogue: 0,0:36:42.45,0:36:44.25,Default,,0000,0000,0000,,你想换一位医生再试试么\N{\fnMicrosoft YaHei\fs14}You went to see another doctor?{\r}
Dialogue: 0,0:36:44.25,0:36:46.99,Default,,0000,0000,0000,,她同事叫亚瑟·雅各布森\N{\fnMicrosoft YaHei\fs14}His name is Arthur Jacobson{\r}
Dialogue: 0,0:36:46.99,0:36:49.16,Default,,0000,0000,0000,,他研究的是人们转世的情况\N{\fnMicrosoft YaHei\fs14}and he studies reincarnation.{\r}
Dialogue: 0,0:36:51.73,0:36:52.83,Default,,0000,0000,0000,,转世\N{\fnMicrosoft YaHei\fs14}Reincarnation?{\r}
Dialogue: 0,0:36:54.03,0:36:55.23,Default,,0000,0000,0000,,- 前世的那些事么 - 是\N{\fnMicrosoft YaHei\fs14}- Past lives? - Yes.{\r}
Dialogue: 0,0:36:55.23,0:36:57.26,Default,,0000,0000,0000,,不是吧 莎拉\N{\fnMicrosoft YaHei\fs14}Oh, come on, Sarah.{\r}
Dialogue: 0,0:36:57.27,0:36:58.70,Default,,0000,0000,0000,,那些都是书上骗人的把戏了\N{\fnMicrosoft YaHei\fs14}This is the oldest trick in the book.{\r}
Dialogue: 0,0:36:58.70,0:36:59.77,Default,,0000,0000,0000,,肯定是斯特拉瑟告诉他\N{\fnMicrosoft YaHei\fs14}He knows from Strasser{\r}
Dialogue: 0,0:36:59.77,0:37:01.10,Default,,0000,0000,0000,,迈尔斯的事了\N{\fnMicrosoft YaHei\fs14}that we're having trouble with Miles.{\r}
Dialogue: 0,0:37:01.10,0:37:03.14,Default,,0000,0000,0000,,你看看这个\N{\fnMicrosoft YaHei\fs14}Just look at this.{\r}
Dialogue: 0,0:37:03.14,0:37:05.71,Default,,0000,0000,0000,,你看看这视频里的孩子\N{\fnMicrosoft YaHei\fs14}Just look at this little boy. He...{\r}
Dialogue: 0,0:37:05.71,0:37:07.54,Default,,0000,0000,0000,,太神奇了\N{\fnMicrosoft YaHei\fs14}It's incredible.{\r}
Dialogue: 0,0:37:07.54,0:37:10.08,Default,,0000,0000,0000,,别吧\N{\fnMicrosoft YaHei\fs14}Please. Hey.{\r}
Dialogue: 0,0:37:10.08,0:37:12.38,Default,,0000,0000,0000,,别跟我说你不是信了他们的话吧\N{\fnMicrosoft YaHei\fs14}Please don't tell me you believe in any of this.{\r}
Dialogue: 0,0:37:13.95,0:37:17.22,Default,,0000,0000,0000,,我不知道该信什么\N{\fnMicrosoft YaHei\fs14}I don't know what I believe.{\r}
Dialogue: 0,0:37:17.22,0:37:19.12,Default,,0000,0000,0000,,迈尔斯身体出问题了\N{\fnMicrosoft YaHei\fs14}Miles is sick.{\r}
Dialogue: 0,0:37:19.12,0:37:20.69,Default,,0000,0000,0000,,跟什么前世没有关系\N{\fnMicrosoft YaHei\fs14}This isn't about past lives.{\r}
Dialogue: 0,0:37:23.29,0:37:24.53,Default,,0000,0000,0000,,我知道日子很不容易\N{\fnMicrosoft YaHei\fs14}This is hard.{\r}
Dialogue: 0,0:37:26.20,0:37:27.73,Default,,0000,0000,0000,,但我们能挺过去的\N{\fnMicrosoft YaHei\fs14}But we can get through this.{\r}
Dialogue: 0,0:37:27.73,0:37:29.43,Default,,0000,0000,0000,,我们有办法治疗迈尔斯的\N{\fnMicrosoft YaHei\fs14}We can help Miles.{\r}
Dialogue: 0,0:37:29.43,0:37:31.60,Default,,0000,0000,0000,,不可能是通过这些疯狂的办法\N{\fnMicrosoft YaHei\fs14}Just not with this kind of craziness.{\r}
Dialogue: 0,0:37:34.37,0:37:36.37,Default,,0000,0000,0000,,- 好的 - 好的\N{\fnMicrosoft YaHei\fs14}- Yeah. - Yeah.{\r}
Dialogue: 0,0:37:36.37,0:37:37.47,Default,,0000,0000,0000,,你说得对\N{\fnMicrosoft YaHei\fs14}You're right.{\r}
Dialogue: 0,0:37:38.71,0:37:39.81,Default,,0000,0000,0000,,不可能是通过这些疯狂的办法\N{\fnMicrosoft YaHei\fs14}Not with this.{\r}
Dialogue: 0,0:37:41.48,0:37:43.41,Default,,0000,0000,0000,,这些都是鬼扯\N{\fnMicrosoft YaHei\fs14}This is nuts.{\r}
Dialogue: 0,0:37:54.86,0:37:56.16,Default,,0000,0000,0000,,嘿 迈尔斯\N{\fnMicrosoft YaHei\fs14}Hey, Miles?{\r}
Dialogue: 0,0:37:57.26,0:37:59.33,Default,,0000,0000,0000,,再玩五分钟就睡觉 好么\N{\fnMicrosoft YaHei\fs14}Five minutes, then PJs, okay?{\r}
Dialogue: 0,0:38:00.66,0:38:03.03,Default,,0000,0000,0000,,塔卢拉 别叫\N{\fnMicrosoft YaHei\fs14}Talulah! Get!{\r}
Dialogue: 0,0:38:03.03,0:38:04.14,Default,,0000,0000,0000,,你刚刚说什么 妈妈\N{\fnMicrosoft YaHei\fs14}What did you say, Mommy?{\r}
Dialogue: 0,0:38:26.49,0:38:27.76,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,0:38:36.97,0:38:38.53,Default,,0000,0000,0000,,谁能告诉我\N{\fnMicrosoft YaHei\fs14}Who can tell me the difference between{\r}
Dialogue: 0,0:38:38.54,0:38:41.17,Default,,0000,0000,0000,,分子和分母有什么区别\N{\fnMicrosoft YaHei\fs14}the denominator and the numerator?{\r}
Dialogue: 0,0:38:42.97,0:38:44.18,Default,,0000,0000,0000,,有谁知道么\N{\fnMicrosoft YaHei\fs14}Anyone?{\r}
Dialogue: 0,0:38:45.54,0:38:47.98,Default,,0000,0000,0000,,好吧 我有个更不错的问题\N{\fnMicrosoft YaHei\fs14}Okay, I have a better question.{\r}
Dialogue: 0,0:38:47.98,0:38:49.21,Default,,0000,0000,0000,,谁喜欢吃披萨\N{\fnMicrosoft YaHei\fs14}Who likes pizza?{\r}
Dialogue: 0,0:38:49.21,0:38:50.55,Default,,0000,0000,0000,,我 我 我\N{\fnMicrosoft YaHei\fs14}Me! Me! Me!{\r}
Dialogue: 0,0:38:50.55,0:38:53.22,Default,,0000,0000,0000,,这个披萨要分成几份\N{\fnMicrosoft YaHei\fs14}Oh, yes. So, how many slices on a pizza?{\r}
Dialogue: 0,0:39:24.58,0:39:25.98,Default,,0000,0000,0000,,杀掉他 抢他武器\N{\fnMicrosoft YaHei\fs14}Kill him, take his weapon!{\r}
Dialogue: 0,0:39:27.12,0:39:28.52,Default,,0000,0000,0000,,干的漂亮 士兵\N{\fnMicrosoft YaHei\fs14}Good job, soldier!{\r}
Dialogue: 0,0:39:32.42,0:39:33.62,Default,,0000,0000,0000,,需要医疗兵帮助\N{\fnMicrosoft YaHei\fs14}I need a medic!{\r}
Dialogue: 0,0:39:33.62,0:39:35.03,Default,,0000,0000,0000,,隐蔽 隐蔽\N{\fnMicrosoft YaHei\fs14}Take cover! Take cover!{\r}
Dialogue: 0,0:39:37.20,0:39:38.56,Default,,0000,0000,0000,,塔卢拉\N{\fnMicrosoft YaHei\fs14}Talulah!{\r}
Dialogue: 0,0:39:45.50,0:39:47.44,Default,,0000,0000,0000,,莎拉\N{\fnMicrosoft YaHei\fs14}Sarah?{\r}
Dialogue: 0,0:39:47.44,0:39:49.51,Default,,0000,0000,0000,,你看到塔卢拉了么\N{\fnMicrosoft YaHei\fs14}You seen Talulah?{\r}
Dialogue: 0,0:39:49.51,0:39:50.51,Default,,0000,0000,0000,,没呢\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,0:39:51.61,0:39:53.04,Default,,0000,0000,0000,,后门打开了\N{\fnMicrosoft YaHei\fs14}The back gate's open.{\r}
Dialogue: 0,0:39:53.05,0:39:55.05,Default,,0000,0000,0000,,我要出门去找它\N{\fnMicrosoft YaHei\fs14}I'm gonna go look for her.{\r}
Dialogue: 0,0:39:55.05,0:39:57.28,Default,,0000,0000,0000,,- 干掉他 - 迈尔斯\N{\fnMicrosoft YaHei\fs14}- Take him down! - Miles.{\r}
Dialogue: 0,0:39:57.28,0:40:00.12,Default,,0000,0000,0000,,亲爱的 跟你爸爸一起去找狗吧\N{\fnMicrosoft YaHei\fs14}Honey, go help your dad look for the dog.{\r}
Dialogue: 0,0:40:00.12,0:40:01.38,Default,,0000,0000,0000,,双杀\N{\fnMicrosoft YaHei\fs14}Double kill!{\r}
Dialogue: 0,0:40:01.39,0:40:02.75,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles?{\r}
Dialogue: 0,0:40:02.75,0:40:05.52,Default,,0000,0000,0000,,干掉他 士兵\N{\fnMicrosoft YaHei\fs14}Finish him off, soldier!{\r}
Dialogue: 0,0:40:05.52,0:40:06.79,Default,,0000,0000,0000,,爆头\N{\fnMicrosoft YaHei\fs14}Head shot!{\r}
Dialogue: 0,0:40:09.09,0:40:10.80,Default,,0000,0000,0000,,干掉他\N{\fnMicrosoft YaHei\fs14}Kill him! Now!{\r}
Dialogue: 0,0:40:12.26,0:40:14.13,Default,,0000,0000,0000,,上上上 士兵\N{\fnMicrosoft YaHei\fs14}Move, move, soldier! Move!{\r}
Dialogue: 0,0:40:16.57,0:40:17.74,Default,,0000,0000,0000,,我们走\N{\fnMicrosoft YaHei\fs14}Let's go.{\r}
Dialogue: 0,0:40:34.15,0:40:36.15,Default,,0000,0000,0000,,她从来没自己离家这么远过\N{\fnMicrosoft YaHei\fs14}She never goes this far away from the house.{\r}
Dialogue: 0,0:40:37.29,0:40:39.39,Default,,0000,0000,0000,,也许她是被车撞了\N{\fnMicrosoft YaHei\fs14}Maybe she got hit by a car.{\r}
Dialogue: 0,0:40:41.29,0:40:42.30,Default,,0000,0000,0000,,你为什么这么说\N{\fnMicrosoft YaHei\fs14}Why would you say that?{\r}
Dialogue: 0,0:40:43.33,0:40:45.60,Default,,0000,0000,0000,,如果一条狗知道它马上要死了\N{\fnMicrosoft YaHei\fs14}When a dog knows it's gonna die,{\r}
Dialogue: 0,0:40:45.60,0:40:47.66,Default,,0000,0000,0000,,它就不会回家了\N{\fnMicrosoft YaHei\fs14}it doesn't come home.{\r}
Dialogue: 0,0:40:47.67,0:40:50.17,Default,,0000,0000,0000,,它们会自己找个地方\N{\fnMicrosoft YaHei\fs14}They drag themselves under a house.{\r}
Dialogue: 0,0:40:50.17,0:40:51.74,Default,,0000,0000,0000,,独自死去\N{\fnMicrosoft YaHei\fs14}They like to die alone.{\r}
Dialogue: 0,0:40:53.47,0:40:55.48,Default,,0000,0000,0000,,我们总有一天都会死去\N{\fnMicrosoft YaHei\fs14}We all have to go sometime.{\r}
Dialogue: 0,0:40:56.48,0:40:57.51,Default,,0000,0000,0000,,你也是如此\N{\fnMicrosoft YaHei\fs14}Even you.{\r}
Dialogue: 0,0:40:59.18,0:41:00.35,Default,,0000,0000,0000,,你也总有一天会死的\N{\fnMicrosoft YaHei\fs14}You're gonna die.{\r}
Dialogue: 0,0:41:03.58,0:41:04.65,Default,,0000,0000,0000,,我是你爸 迈尔斯\N{\fnMicrosoft YaHei\fs14}I'm your father, Miles,{\r}
Dialogue: 0,0:41:04.65,0:41:06.68,Default,,0000,0000,0000,,你可不准这么对我说话\N{\fnMicrosoft YaHei\fs14}you do not talk to me like that.{\r}
Dialogue: 0,0:41:06.69,0:41:08.35,Default,,0000,0000,0000,,要不然呢\N{\fnMicrosoft YaHei\fs14}Or what?{\r}
Dialogue: 0,0:41:08.35,0:41:10.29,Default,,0000,0000,0000,,你要揍我么\N{\fnMicrosoft YaHei\fs14}Are you gonna hit me?{\r}
Dialogue: 0,0:41:10.29,0:41:12.66,Default,,0000,0000,0000,,就像你父亲以前揍你那样么\N{\fnMicrosoft YaHei\fs14}Like your father used to do to you?{\r}
Dialogue: 0,0:41:13.83,0:41:15.09,Default,,0000,0000,0000,,你在说什么呢\N{\fnMicrosoft YaHei\fs14}What are you talking about?{\r}
Dialogue: 0,0:41:16.13,0:41:18.33,Default,,0000,0000,0000,,他就是个混蛋\N{\fnMicrosoft YaHei\fs14}He was such a piece of shit.{\r}
Dialogue: 0,0:41:18.33,0:41:21.67,Default,,0000,0000,0000,,现在你可是个称职的父亲啊\N{\fnMicrosoft YaHei\fs14}And now, you're such a great dad to me.{\r}
Dialogue: 0,0:41:23.04,0:41:25.67,Default,,0000,0000,0000,,你从来没跟他说过我爸的事吧\N{\fnMicrosoft YaHei\fs14}You never told him anything about my dad?{\r}
Dialogue: 0,0:41:25.67,0:41:28.07,Default,,0000,0000,0000,,没有说过 亲爱的 一个字都没对他提过\N{\fnMicrosoft YaHei\fs14}Never, honey, I've never said anything to him.{\r}
Dialogue: 0,0:41:28.07,0:41:29.64,Default,,0000,0000,0000,,他刚才说的那些让我浑身直打哆嗦\N{\fnMicrosoft YaHei\fs14}He was saying all this creepy shit.{\r}
Dialogue: 0,0:41:29.64,0:41:31.18,Default,,0000,0000,0000,,他说什么了 约翰\N{\fnMicrosoft YaHei\fs14}Like what? John, what was he saying?{\r}
Dialogue: 0,0:41:31.18,0:41:32.71,Default,,0000,0000,0000,,他怎么可能知道\N{\fnMicrosoft YaHei\fs14}How would he know?{\r}
Dialogue: 0,0:41:32.71,0:41:34.18,Default,,0000,0000,0000,,知道什么\N{\fnMicrosoft YaHei\fs14}Know what?{\r}
Dialogue: 0,0:41:36.05,0:41:37.28,Default,,0000,0000,0000,,那是什么东西\N{\fnMicrosoft YaHei\fs14}What the hell is that?{\r}
Dialogue: 0,0:41:42.82,0:41:44.22,Default,,0000,0000,0000,,是一台摄像机\N{\fnMicrosoft YaHei\fs14}It's a camera.{\r}
Dialogue: 0,0:41:44.22,0:41:45.53,Default,,0000,0000,0000,,什么\N{\fnMicrosoft YaHei\fs14}What?{\r}
Dialogue: 0,0:41:46.53,0:41:47.79,Default,,0000,0000,0000,,我的天\N{\fnMicrosoft YaHei\fs14}Oh, my God.{\r}
Dialogue: 0,0:41:47.79,0:41:49.70,Default,,0000,0000,0000,,他改装了之前那台婴儿监控仪\N{\fnMicrosoft YaHei\fs14}He used the baby monitor.{\r}
Dialogue: 0,0:41:50.90,0:41:52.50,Default,,0000,0000,0000,,他在监视我们\N{\fnMicrosoft YaHei\fs14}He's been spying on us.{\r}
Dialogue: 0,0:41:56.54,0:41:58.00,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Hey!{\r}
Dialogue: 0,0:41:58.00,0:42:00.37,Default,,0000,0000,0000,,你监视我们多久了\N{\fnMicrosoft YaHei\fs14}How long have you been watching us? Hmm?{\r}
Dialogue: 0,0:42:00.37,0:42:02.01,Default,,0000,0000,0000,,- 别装蒜 塔卢拉在哪 - 我不知道\N{\fnMicrosoft YaHei\fs14}- Look at me. Where's Talulah? - I don't know.{\r}
Dialogue: 0,0:42:02.01,0:42:03.11,Default,,0000,0000,0000,,- 它在哪 - 我不知道\N{\fnMicrosoft YaHei\fs14}- Where is she? - I don't know!{\r}
Dialogue: 0,0:42:03.11,0:42:04.18,Default,,0000,0000,0000,,- 它在哪  - 约翰 别\N{\fnMicrosoft YaHei\fs14}- Where is she? - John, stop it!{\r}
Dialogue: 0,0:42:04.18,0:42:05.18,Default,,0000,0000,0000,,你他妈到底是有什么毛病\N{\fnMicrosoft YaHei\fs14}What the hell's wrong with you?{\r}
Dialogue: 0,0:42:12.39,0:42:15.22,Default,,0000,0000,0000,,爸爸去哪了\N{\fnMicrosoft YaHei\fs14}Where's Daddy?{\r}
Dialogue: 0,0:42:15.22,0:42:17.72,Default,,0000,0000,0000,,爸爸需要找个地方\N{\fnMicrosoft YaHei\fs14}Daddy needed a little bit of space.{\r}
Dialogue: 0,0:42:19.26,0:42:21.59,Default,,0000,0000,0000,,他在汤姆叔叔家\N{\fnMicrosoft YaHei\fs14}He's at Uncle Tommy's house.{\r}
Dialogue: 0,0:42:21.59,0:42:24.00,Default,,0000,0000,0000,,在那边冷静一下\N{\fnMicrosoft YaHei\fs14}Just until he cools down a little bit.{\r}
Dialogue: 0,0:42:26.23,0:42:27.40,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mommy?{\r}
Dialogue: 0,0:42:32.24,0:42:34.24,Default,,0000,0000,0000,,我是怎么了\N{\fnMicrosoft YaHei\fs14}What's wrong with me?{\r}
Dialogue: 0,0:42:40.71,0:42:41.95,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles,{\r}
Dialogue: 0,0:42:43.75,0:42:44.95,Default,,0000,0000,0000,,你病了\N{\fnMicrosoft YaHei\fs14}you're sick.{\r}
Dialogue: 0,0:42:47.09,0:42:48.69,Default,,0000,0000,0000,,只是病了而已 亲爱的\N{\fnMicrosoft YaHei\fs14}You're just sick, honey.{\r}
Dialogue: 0,0:42:54.69,0:42:58.10,Default,,0000,0000,0000,,有时候我躺在床上 感觉自己飘出了身体\N{\fnMicrosoft YaHei\fs14}Sometimes I leave my body when I'm lying in bed.{\r}
Dialogue: 0,0:43:04.20,0:43:07.47,Default,,0000,0000,0000,,有时候做的那些梦 太真实了\N{\fnMicrosoft YaHei\fs14}Sometimes dreams can feel real.{\r}
Dialogue: 0,0:43:07.47,0:43:10.31,Default,,0000,0000,0000,,其实那也不算做梦 我醒着的时候会神游\N{\fnMicrosoft YaHei\fs14}They're not dreams, I do it when I'm awake.{\r}
Dialogue: 0,0:43:13.95,0:43:15.65,Default,,0000,0000,0000,,我那样是为了腾出空间\N{\fnMicrosoft YaHei\fs14}I do it to make room.{\r}
Dialogue: 0,0:43:20.15,0:43:21.66,Default,,0000,0000,0000,,为什么东西腾出空间\N{\fnMicrosoft YaHei\fs14}Make room for what?{\r}
Dialogue: 0,0:43:22.49,0:43:23.79,Default,,0000,0000,0000,,就是那些东西\N{\fnMicrosoft YaHei\fs14}Things.{\r}
Dialogue: 0,0:43:27.96,0:43:29.93,Default,,0000,0000,0000,,这种情况发生的频率如何\N{\fnMicrosoft YaHei\fs14}How often does this happen?{\r}
Dialogue: 0,0:43:32.80,0:43:34.30,Default,,0000,0000,0000,,每天晚上都会\N{\fnMicrosoft YaHei\fs14}Every night.{\r}
Dialogue: 0,0:44:20.05,0:44:21.22,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles?{\r}
Dialogue: 0,0:44:26.05,0:44:27.69,Default,,0000,0000,0000,,迈尔斯 怎么了\N{\fnMicrosoft YaHei\fs14}Miles, what's wrong?{\r}
Dialogue: 0,0:44:30.39,0:44:32.33,Default,,0000,0000,0000,,妈妈 我很害怕\N{\fnMicrosoft YaHei\fs14}Mommy, I'm scared.{\r}
Dialogue: 0,0:44:36.06,0:44:37.33,Default,,0000,0000,0000,,过来 宝贝\N{\fnMicrosoft YaHei\fs14}Come here, baby.{\r}
Dialogue: 0,0:44:38.70,0:44:40.33,Default,,0000,0000,0000,,- 过来 - 妈妈\N{\fnMicrosoft YaHei\fs14}- Come here. - Mommy!{\r}
Dialogue: 0,0:44:48.54,0:44:50.14,Default,,0000,0000,0000,,你做过噩梦么\N{\fnMicrosoft YaHei\fs14}Were you having a dream?{\r}
Dialogue: 0,0:44:55.48,0:44:57.02,Default,,0000,0000,0000,,做过\N{\fnMicrosoft YaHei\fs14}Yes.{\r}
Dialogue: 0,0:45:02.99,0:45:05.49,Default,,0000,0000,0000,,我今晚能跟你一起睡么\N{\fnMicrosoft YaHei\fs14}Can I sleep with you tonight?{\r}
Dialogue: 0,0:45:42.73,0:45:43.93,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mommy?{\r}
Dialogue: 0,0:45:50.74,0:45:52.14,Default,,0000,0000,0000,,怎么了 宝贝\N{\fnMicrosoft YaHei\fs14}Yes, baby?{\r}
Dialogue: 0,0:45:54.64,0:45:57.48,Default,,0000,0000,0000,,不管我做什么\N{\fnMicrosoft YaHei\fs14}Will you always love me{\r}
Dialogue: 0,0:45:58.91,0:46:01.08,Default,,0000,0000,0000,,你都会一直爱我么\N{\fnMicrosoft YaHei\fs14}no matter what I do?{\r}
Dialogue: 0,0:46:06.66,0:46:08.16,Default,,0000,0000,0000,,会的 迈尔斯\N{\fnMicrosoft YaHei\fs14}Yes, Miles.{\r}
Dialogue: 0,0:46:11.59,0:46:13.23,Default,,0000,0000,0000,,我会一直爱你\N{\fnMicrosoft YaHei\fs14}I will always love you.{\r}
Dialogue: 0,0:46:17.93,0:46:19.40,Default,,0000,0000,0000,,我是你的母亲\N{\fnMicrosoft YaHei\fs14}I'm your mother.{\r}
Dialogue: 0,0:46:48.93,0:46:50.43,Default,,0000,0000,0000,,什么情况\N{\fnMicrosoft YaHei\fs14}What... What is it?{\r}
Dialogue: 0,0:48:35.44,0:48:36.77,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mommy?{\r}
Dialogue: 0,0:48:39.54,0:48:40.78,Default,,0000,0000,0000,,用这个\N{\fnMicrosoft YaHei\fs14}Use this.{\r}
Dialogue: 0,0:48:45.82,0:48:46.98,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles,{\r}
Dialogue: 0,0:48:47.95,0:48:49.29,Default,,0000,0000,0000,,你做了什么\N{\fnMicrosoft YaHei\fs14}what did you do?{\r}
Dialogue: 0,0:48:51.56,0:48:53.76,Default,,0000,0000,0000,,有时候我离开我的身体\N{\fnMicrosoft YaHei\fs14}Sometimes when I leave my body,{\r}
Dialogue: 0,0:48:53.76,0:48:55.06,Default,,0000,0000,0000,,就会做一些很糟糕的事\N{\fnMicrosoft YaHei\fs14}bad things happen.{\r}
Dialogue: 0,0:49:14.01,0:49:15.08,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mommy!{\r}
Dialogue: 0,0:49:15.75,0:49:16.85,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles,{\r}
Dialogue: 0,0:49:17.98,0:49:19.35,Default,,0000,0000,0000,,安静\N{\fnMicrosoft YaHei\fs14}be quiet.{\r}
Dialogue: 0,0:49:44.54,0:49:46.18,Default,,0000,0000,0000,,是我的错\N{\fnMicrosoft YaHei\fs14}It was my fault.{\r}
Dialogue: 0,0:49:47.18,0:49:48.31,Default,,0000,0000,0000,,是我干的\N{\fnMicrosoft YaHei\fs14}It was me.{\r}
Dialogue: 0,0:50:03.83,0:50:06.23,Default,,0000,0000,0000,,听我说\N{\fnMicrosoft YaHei\fs14}Listen to me.{\r}
Dialogue: 0,0:50:08.90,0:50:12.37,Default,,0000,0000,0000,,我要带你去找能帮到你的人\N{\fnMicrosoft YaHei\fs14}I'm gonna take you to somebody who can help you get better.{\r}
Dialogue: 0,0:50:17.91,0:50:20.68,Default,,0000,0000,0000,,莎拉 你联系我了 我很欣慰\N{\fnMicrosoft YaHei\fs14}Sarah. I was so relieved when you called.{\r}
Dialogue: 0,0:50:21.51,0:50:23.28,Default,,0000,0000,0000,,你就是迈尔斯吧\N{\fnMicrosoft YaHei\fs14}So you must be Miles.{\r}
Dialogue: 0,0:50:25.55,0:50:27.42,Default,,0000,0000,0000,,看那银色的钟摆球\N{\fnMicrosoft YaHei\fs14}Watch the silver eye.{\r}
Dialogue: 0,0:50:29.42,0:50:31.05,Default,,0000,0000,0000,,盯着看就好\N{\fnMicrosoft YaHei\fs14}Just watch.{\r}
Dialogue: 0,0:50:31.06,0:50:34.09,Default,,0000,0000,0000,,你在场的话 我就无法驱除侵入的灵魂\N{\fnMicrosoft YaHei\fs14}The regression won't work if you're in the room.{\r}
Dialogue: 0,0:50:34.09,0:50:35.39,Default,,0000,0000,0000,,这会对他的身体有影响么\N{\fnMicrosoft YaHei\fs14}Is this going to hurt him?{\r}
Dialogue: 0,0:50:36.06,0:50:38.39,Default,,0000,0000,0000,,不会 只是催眠而已\N{\fnMicrosoft YaHei\fs14}No. It's hypnosis.{\r}
Dialogue: 0,0:50:38.40,0:50:41.16,Default,,0000,0000,0000,,如果侵入的灵魂现身 迈尔斯的本体就会暂时离开\N{\fnMicrosoft YaHei\fs14}Miles goes out of body when the invading soul is present.{\r}
Dialogue: 0,0:50:41.17,0:50:43.23,Default,,0000,0000,0000,,他甚至不会记得发生了什么\N{\fnMicrosoft YaHei\fs14}He won't even remember the experience.{\r}
Dialogue: 0,0:50:43.23,0:50:46.70,Default,,0000,0000,0000,,目的是为了搞清楚 是谁的灵魂回来了\N{\fnMicrosoft YaHei\fs14}The goal here is to identify the person who has returned{\r}
Dialogue: 0,0:50:46.71,0:50:48.37,Default,,0000,0000,0000,,重要的是\N{\fnMicrosoft YaHei\fs14}and, this is important...{\r}
Dialogue: 0,0:50:48.37,0:50:50.77,Default,,0000,0000,0000,,搞明白他们想干什么\N{\fnMicrosoft YaHei\fs14}Find out what they want.{\r}
Dialogue: 0,0:50:50.78,0:50:52.74,Default,,0000,0000,0000,,莎拉 我跟你说实话\N{\fnMicrosoft YaHei\fs14}I'm going to be candid with you, Sarah.{\r}
Dialogue: 0,0:50:54.28,0:50:56.61,Default,,0000,0000,0000,,这可能是我们的最后一次机会了\N{\fnMicrosoft YaHei\fs14}This may be your last chance.{\r}
Dialogue: 0,0:50:56.62,0:50:59.05,Default,,0000,0000,0000,,迈尔斯已经八岁了\N{\fnMicrosoft YaHei\fs14}Miles is eight now.{\r}
Dialogue: 0,0:50:59.05,0:51:01.85,Default,,0000,0000,0000,,马上侵入的灵魂就要占据主导\N{\fnMicrosoft YaHei\fs14}Soon the invading soul will have control{\r}
Dialogue: 0,0:51:02.75,0:51:04.42,Default,,0000,0000,0000,,迈尔斯的本体就彻底消失了\N{\fnMicrosoft YaHei\fs14}and Miles will be gone.{\r}
Dialogue: 0,0:51:07.26,0:51:09.69,Default,,0000,0000,0000,,盯着钟摆球看\N{\fnMicrosoft YaHei\fs14}Watch the silver eye on top of the arm.{\r}
Dialogue: 0,0:51:10.50,0:51:12.76,Default,,0000,0000,0000,,它每摆动一次\N{\fnMicrosoft YaHei\fs14}Every time it swings,{\r}
Dialogue: 0,0:51:12.76,0:51:16.30,Default,,0000,0000,0000,,就好像一个一点点\N{\fnMicrosoft YaHei\fs14}let's pretend we're unraveling a piece of string{\r}
Dialogue: 0,0:51:16.30,0:51:17.74,Default,,0000,0000,0000,,解开线团的过程\N{\fnMicrosoft YaHei\fs14}little by little.{\r}
Dialogue: 0,0:51:20.27,0:51:22.87,Default,,0000,0000,0000,,我们想象 这线团\N{\fnMicrosoft YaHei\fs14}Let's pretend that piece of string{\r}
Dialogue: 0,0:51:22.88,0:51:24.54,Default,,0000,0000,0000,,就是时间\N{\fnMicrosoft YaHei\fs14}is time.{\r}
Dialogue: 0,0:51:24.54,0:51:27.48,Default,,0000,0000,0000,,一分一分\N{\fnMicrosoft YaHei\fs14}Unraveling minute by minute,{\r}
Dialogue: 0,0:51:27.48,0:51:29.31,Default,,0000,0000,0000,,一秒一秒\N{\fnMicrosoft YaHei\fs14}second by second,{\r}
Dialogue: 0,0:51:29.31,0:51:30.95,Default,,0000,0000,0000,,向前倒转\N{\fnMicrosoft YaHei\fs14}going backwards.{\r}
Dialogue: 0,0:51:31.72,0:51:34.45,Default,,0000,0000,0000,,时间流逝\N{\fnMicrosoft YaHei\fs14}Time slipping away.{\r}
Dialogue: 0,0:51:35.29,0:51:36.82,Default,,0000,0000,0000,,你周围的一切\N{\fnMicrosoft YaHei\fs14}Everything around you...{\r}
Dialogue: 0,0:51:37.79,0:51:39.82,Default,,0000,0000,0000,,这栋房子\N{\fnMicrosoft YaHei\fs14}This house,{\r}
Dialogue: 0,0:51:39.83,0:51:41.73,Default,,0000,0000,0000,,我的声音\N{\fnMicrosoft YaHei\fs14}my voice,{\r}
Dialogue: 0,0:51:41.73,0:51:43.83,Default,,0000,0000,0000,,你的母亲\N{\fnMicrosoft YaHei\fs14}your mother...{\r}
Dialogue: 0,0:51:43.83,0:51:47.83,Default,,0000,0000,0000,,这一切都正在消逝\N{\fnMicrosoft YaHei\fs14}All these things are getting further away.{\r}
Dialogue: 0,0:51:47.83,0:51:50.30,Default,,0000,0000,0000,,我们回顾你的一生\N{\fnMicrosoft YaHei\fs14}We're going back through your life,{\r}
Dialogue: 0,0:51:52.17,0:51:54.34,Default,,0000,0000,0000,,你开始上学的时候\N{\fnMicrosoft YaHei\fs14}back to when you started school,{\r}
Dialogue: 0,0:51:56.01,0:51:58.48,Default,,0000,0000,0000,,你学会走路的时候\N{\fnMicrosoft YaHei\fs14}when you first learned to walk,{\r}
Dialogue: 0,0:52:00.18,0:52:02.58,Default,,0000,0000,0000,,你还只是一个婴儿的时候\N{\fnMicrosoft YaHei\fs14}when you were just a baby.{\r}
Dialogue: 0,0:52:04.48,0:52:07.99,Default,,0000,0000,0000,,回到你出生的那一天\N{\fnMicrosoft YaHei\fs14}Back to the day you were born.{\r}
Dialogue: 0,0:52:13.76,0:52:16.26,Default,,0000,0000,0000,,回到你的前世\N{\fnMicrosoft YaHei\fs14}Back to the time before this body.{\r}
Dialogue: 0,0:52:23.10,0:52:25.97,Default,,0000,0000,0000,,我现在不是在和迈尔斯说话\N{\fnMicrosoft YaHei\fs14}I'm no longer speaking to Miles.{\r}
Dialogue: 0,0:52:25.97,0:52:27.34,Default,,0000,0000,0000,,我要与入侵迈尔斯\N{\fnMicrosoft YaHei\fs14}I'm speaking to the person{\r}
Dialogue: 0,0:52:27.34,0:52:29.94,Default,,0000,0000,0000,,身体的灵魂交谈\N{\fnMicrosoft YaHei\fs14}who has taken residence inside his body.{\r}
Dialogue: 0,0:52:30.68,0:52:33.38,Default,,0000,0000,0000,,你这不速之客\N{\fnMicrosoft YaHei\fs14}You came uninvited.{\r}
Dialogue: 0,0:52:33.38,0:52:35.95,Default,,0000,0000,0000,,如果能听到我的声音请回答\N{\fnMicrosoft YaHei\fs14}Tell me if you can hear my voice.{\r}
Dialogue: 0,0:52:46.56,0:52:48.83,Default,,0000,0000,0000,,你会说匈牙利语\N{\fnMicrosoft YaHei\fs14}You speak Hungarian.{\r}
Dialogue: 0,0:52:51.36,0:52:52.73,Default,,0000,0000,0000,,我为了我们可能的会晤\N{\fnMicrosoft YaHei\fs14}I learned a few words{\r}
Dialogue: 0,0:52:52.73,0:52:54.80,Default,,0000,0000,0000,,学了几句匈牙利语\N{\fnMicrosoft YaHei\fs14}in anticipation of meeting you.{\r}
Dialogue: 0,0:52:56.24,0:52:58.00,Default,,0000,0000,0000,,我还是倾向用英语交谈\N{\fnMicrosoft YaHei\fs14}I prefer English.{\r}
Dialogue: 0,0:52:59.31,0:53:01.21,Default,,0000,0000,0000,,但你应该是在匈牙利出生的吧\N{\fnMicrosoft YaHei\fs14}But you were born in Hungary?{\r}
Dialogue: 0,0:53:02.51,0:53:05.14,Default,,0000,0000,0000,,我的父母是匈牙利的农民\N{\fnMicrosoft YaHei\fs14}My parents were Hungarian farmers{\r}
Dialogue: 0,0:53:05.15,0:53:06.75,Default,,0000,0000,0000,,后来搬到俄亥俄州\N{\fnMicrosoft YaHei\fs14}that moved to Ohio.{\r}
Dialogue: 0,0:53:08.82,0:53:10.22,Default,,0000,0000,0000,,他们都是平凡人\N{\fnMicrosoft YaHei\fs14}Simple people.{\r}
Dialogue: 0,0:53:11.92,0:53:14.42,Default,,0000,0000,0000,,他们能有自己的土地就很开心了\N{\fnMicrosoft YaHei\fs14}Just happy to own the piece of land.{\r}
Dialogue: 0,0:53:16.72,0:53:18.86,Default,,0000,0000,0000,,我是想\N{\fnMicrosoft YaHei\fs14}I was driven to more{\r}
Dialogue: 0,0:53:21.13,0:53:22.76,Default,,0000,0000,0000,,做一些更有意思的事\N{\fnMicrosoft YaHei\fs14}creative things.{\r}
Dialogue: 0,0:53:26.23,0:53:28.73,Default,,0000,0000,0000,,我希望你能告诉我你的名字\N{\fnMicrosoft YaHei\fs14}I would like you to tell me your name{\r}
Dialogue: 0,0:53:28.74,0:53:30.70,Default,,0000,0000,0000,,还有你为什么重返人间\N{\fnMicrosoft YaHei\fs14}and why you've come back here.{\r}
Dialogue: 0,0:53:33.47,0:53:34.91,Default,,0000,0000,0000,,你叫什么名字\N{\fnMicrosoft YaHei\fs14}What is your name?{\r}
Dialogue: 0,0:53:37.38,0:53:39.11,Default,,0000,0000,0000,,我现在叫迈尔斯\N{\fnMicrosoft YaHei\fs14}I am Miles now.{\r}
Dialogue: 0,0:53:40.55,0:53:44.38,Default,,0000,0000,0000,,迈尔斯 如果你能听到我的声音\N{\fnMicrosoft YaHei\fs14}Miles, if you can hear my voice,{\r}
Dialogue: 0,0:53:44.38,0:53:46.95,Default,,0000,0000,0000,,告诉我你体内的那个人叫什么\N{\fnMicrosoft YaHei\fs14}tell me the name of the person inside you.{\r}
Dialogue: 0,0:53:49.56,0:53:51.02,Default,,0000,0000,0000,,告诉我你体内的那个人叫什么\N{\fnMicrosoft YaHei\fs14}Tell me the name.{\r}
Dialogue: 0,0:53:54.76,0:53:56.10,Default,,0000,0000,0000,,告诉我你体内的那个人叫什么\N{\fnMicrosoft YaHei\fs14}Tell me the name.{\r}
Dialogue: 0,0:53:59.43,0:54:00.47,Default,,0000,0000,0000,,告诉我你体内的那个人叫什么\N{\fnMicrosoft YaHei\fs14}Tell me the name.{\r}
Dialogue: 0,0:54:01.97,0:54:04.10,Default,,0000,0000,0000,,迈尔斯 告诉我你体内的那个人叫什么\N{\fnMicrosoft YaHei\fs14}Miles, tell me the name.{\r}
Dialogue: 0,0:54:06.61,0:54:07.77,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No!{\r}
Dialogue: 0,0:54:22.12,0:54:24.62,Default,,0000,0000,0000,,你浴室里的药物\N{\fnMicrosoft YaHei\fs14}You have quite a collection of medication{\r}
Dialogue: 0,0:54:24.62,0:54:25.93,Default,,0000,0000,0000,,很齐全啊\N{\fnMicrosoft YaHei\fs14}in your bathroom.{\r}
Dialogue: 0,0:54:27.76,0:54:30.30,Default,,0000,0000,0000,,这里的药物都是合法购买的\N{\fnMicrosoft YaHei\fs14}Everything there is legal.{\r}
Dialogue: 0,0:54:30.30,0:54:33.47,Default,,0000,0000,0000,,如果你逼未成年人服用那些药物就不太合法了吧\N{\fnMicrosoft YaHei\fs14}Not if you give it to a minor against his will.{\r}
Dialogue: 0,0:54:35.84,0:54:37.64,Default,,0000,0000,0000,,你服用了我的药物\N{\fnMicrosoft YaHei\fs14}Did you take my pills?{\r}
Dialogue: 0,0:54:39.74,0:54:41.47,Default,,0000,0000,0000,,如果我告诉莎拉\N{\fnMicrosoft YaHei\fs14}What would Sarah think{\r}
Dialogue: 0,0:54:41.47,0:54:44.64,Default,,0000,0000,0000,,我在这里睡着了 等我醒来的时候\N{\fnMicrosoft YaHei\fs14}if I told her I fell asleep in here{\r}
Dialogue: 0,0:54:44.64,0:54:47.48,Default,,0000,0000,0000,,发现你把你的鸡巴塞在我的嘴里\N{\fnMicrosoft YaHei\fs14}and woke up with your cock in my mouth?{\r}
Dialogue: 0,0:54:49.15,0:54:52.79,Default,,0000,0000,0000,,然后警方会发现我的血液中有药物残留\N{\fnMicrosoft YaHei\fs14}Then the police find drugs in my blood.{\r}
Dialogue: 0,0:54:52.79,0:54:56.36,Default,,0000,0000,0000,,在你药箱中也搜出那些药\N{\fnMicrosoft YaHei\fs14}The same drugs from your medicine cabinet.{\r}
Dialogue: 0,0:54:57.86,0:55:00.83,Default,,0000,0000,0000,,还有那些带有你DNA的阴毛\N{\fnMicrosoft YaHei\fs14}Not to mention the pubic hairs with your DNA{\r}
Dialogue: 0,0:55:00.83,0:55:03.03,Default,,0000,0000,0000,,我是在你这的厕所找到的\N{\fnMicrosoft YaHei\fs14}that I found on the rim of your toilet{\r}
Dialogue: 0,0:55:03.03,0:55:05.10,Default,,0000,0000,0000,,我在牙缝中间卡了几根\N{\fnMicrosoft YaHei\fs14}and placed in my teeth.{\r}
Dialogue: 0,0:55:08.04,0:55:09.27,Default,,0000,0000,0000,,你真是疯了\N{\fnMicrosoft YaHei\fs14}You're insane.{\r}
Dialogue: 0,0:55:13.21,0:55:15.34,Default,,0000,0000,0000,,你觉得警察会相信谁呢\N{\fnMicrosoft YaHei\fs14}Who will they believe?{\r}
Dialogue: 0,0:55:15.34,0:55:18.61,Default,,0000,0000,0000,,是一个挥霍家庭财富的老头子\N{\fnMicrosoft YaHei\fs14}An aging hippie living off his family's fortune?{\r}
Dialogue: 0,0:55:20.05,0:55:22.18,Default,,0000,0000,0000,,还是一位天真无邪的小男孩\N{\fnMicrosoft YaHei\fs14}Or an innocent little boy?{\r}
Dialogue: 0,0:55:25.65,0:55:28.19,Default,,0000,0000,0000,,我待会打个响指\N{\fnMicrosoft YaHei\fs14}When I snap my fingers,{\r}
Dialogue: 0,0:55:28.19,0:55:30.52,Default,,0000,0000,0000,,迈尔斯就会回来\N{\fnMicrosoft YaHei\fs14}Miles will return{\r}
Dialogue: 0,0:55:30.52,0:55:35.39,Default,,0000,0000,0000,,然后你告诉莎拉 你无法驱除他体内的灵魂\N{\fnMicrosoft YaHei\fs14}and you will tell Sarah that you have failed to regress him{\r}
Dialogue: 0,0:55:35.40,0:55:38.07,Default,,0000,0000,0000,,因为她儿子体内没有外人的灵魂\N{\fnMicrosoft YaHei\fs14}because there isn't anyone inside her son.{\r}
Dialogue: 0,0:55:39.23,0:55:41.33,Default,,0000,0000,0000,,然后你就滚的远远的\N{\fnMicrosoft YaHei\fs14}Then you will leave{\r}
Dialogue: 0,0:55:41.34,0:55:45.21,Default,,0000,0000,0000,,这辈子不要再见到我们了\N{\fnMicrosoft YaHei\fs14}and that will be the last time you will ever see us.{\r}
Dialogue: 0,0:55:46.91,0:55:49.14,Default,,0000,0000,0000,,一\N{\fnMicrosoft YaHei\fs14}One,{\r}
Dialogue: 0,0:55:49.14,0:55:51.24,Default,,0000,0000,0000,,二\N{\fnMicrosoft YaHei\fs14}two,{\r}
Dialogue: 0,0:55:51.25,0:55:52.65,Default,,0000,0000,0000,,三\N{\fnMicrosoft YaHei\fs14}three.{\r}
Dialogue: 0,0:55:59.35,0:56:00.92,Default,,0000,0000,0000,,情况如何\N{\fnMicrosoft YaHei\fs14}How did it go?{\r}
Dialogue: 0,0:56:00.92,0:56:03.49,Default,,0000,0000,0000,,没什么特别的 很抱歉 我之前判断有误\N{\fnMicrosoft YaHei\fs14}It didn't. I'm sorry, I was wrong.{\r}
Dialogue: 0,0:56:03.49,0:56:05.86,Default,,0000,0000,0000,,之前判断有误 不该让你过来的\N{\fnMicrosoft YaHei\fs14}It was a mistake to ask you to come here.{\r}
Dialogue: 0,0:56:06.59,0:56:07.93,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What happened?{\r}
Dialogue: 0,0:56:07.93,0:56:09.93,Default,,0000,0000,0000,,没什么 无法驱除\N{\fnMicrosoft YaHei\fs14}Nothing. The regression didn't work.{\r}
Dialogue: 0,0:56:09.93,0:56:11.26,Default,,0000,0000,0000,,- 你说什么 - 很抱歉\N{\fnMicrosoft YaHei\fs14}- What? - I'm sorry.{\r}
Dialogue: 0,0:56:11.27,0:56:13.20,Default,,0000,0000,0000,,- 什么 - 克里斯托弗会送你出去\N{\fnMicrosoft YaHei\fs14}- What? - Christopher will see you out.{\r}
Dialogue: 0,0:56:14.44,0:56:16.17,Default,,0000,0000,0000,,走这边\N{\fnMicrosoft YaHei\fs14}This way, please.{\r}
Dialogue: 0,0:57:09.99,0:57:11.33,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles.{\r}
Dialogue: 0,0:57:11.89,0:57:13.33,Default,,0000,0000,0000,,进屋\N{\fnMicrosoft YaHei\fs14}Go inside.{\r}
Dialogue: 0,0:57:13.33,0:57:15.83,Default,,0000,0000,0000,,我要去找你父亲谈谈\N{\fnMicrosoft YaHei\fs14}I need to talk to your father.{\r}
Dialogue: 0,0:57:32.45,0:57:35.15,Default,,0000,0000,0000,,我觉得让他待在家不太安全\N{\fnMicrosoft YaHei\fs14}I don't feel safe with him in the house.{\r}
Dialogue: 0,0:57:37.82,0:57:39.86,Default,,0000,0000,0000,,我在汤米家的时候 联系了一些人\N{\fnMicrosoft YaHei\fs14}I made some calls while I was at Tommy's.{\r}
Dialogue: 0,0:57:42.19,0:57:44.19,Default,,0000,0000,0000,,有一个叫萨米特希尔的护理院\N{\fnMicrosoft YaHei\fs14}There's a place called Summit Hill.{\r}
Dialogue: 0,0:57:45.86,0:57:47.60,Default,,0000,0000,0000,,我觉得送迈尔斯去那边很合适\N{\fnMicrosoft YaHei\fs14}I think Miles would be a good fit.{\r}
Dialogue: 0,0:57:49.50,0:57:51.80,Default,,0000,0000,0000,,会有人24小时监管他\N{\fnMicrosoft YaHei\fs14}He would have round-the-clock supervision.{\r}
Dialogue: 0,0:57:53.00,0:57:54.87,Default,,0000,0000,0000,,从这开车去那边只需要花一个小时不到的时间\N{\fnMicrosoft YaHei\fs14}It's less than an hour from here.{\r}
Dialogue: 0,0:58:00.88,0:58:03.11,Default,,0000,0000,0000,,我们这是要把我们儿子关起来么\N{\fnMicrosoft YaHei\fs14}We're talking about locking up our son?{\r}
Dialogue: 0,0:58:05.88,0:58:07.22,Default,,0000,0000,0000,,还能怎么办\N{\fnMicrosoft YaHei\fs14}What else can we do?{\r}
Dialogue: 0,0:58:08.18,0:58:10.19,Default,,0000,0000,0000,,他会把我们搞崩溃的\N{\fnMicrosoft YaHei\fs14}This is tearing us apart, Sarah.{\r}
Dialogue: 0,0:58:28.34,0:58:29.54,Default,,0000,0000,0000,,- 你好 - 莎拉\N{\fnMicrosoft YaHei\fs14}- Hello? - Sarah.{\r}
Dialogue: 0,0:58:29.54,0:58:31.74,Default,,0000,0000,0000,,我是亚瑟·雅各布森\N{\fnMicrosoft YaHei\fs14}It's Arthur Jacobson.{\r}
Dialogue: 0,0:58:31.74,0:58:33.34,Default,,0000,0000,0000,,亚瑟 现在时半夜两点啊\N{\fnMicrosoft YaHei\fs14}Arthur, it's 2:00 a.m.{\r}
Dialogue: 0,0:58:33.34,0:58:35.08,Default,,0000,0000,0000,,我知道 我很抱歉 但事不宜迟\N{\fnMicrosoft YaHei\fs14}I know. I'm sorry, this can't wait.{\r}
Dialogue: 0,0:58:35.08,0:58:36.48,Default,,0000,0000,0000,,迈尔斯在你附近么\N{\fnMicrosoft YaHei\fs14}Is Miles near you?{\r}
Dialogue: 0,0:58:38.08,0:58:39.81,Default,,0000,0000,0000,,他在他房间里\N{\fnMicrosoft YaHei\fs14}Yes, he's in his room.{\r}
Dialogue: 0,0:58:39.82,0:58:41.35,Default,,0000,0000,0000,,莎拉\N{\fnMicrosoft YaHei\fs14}Sarah,{\r}
Dialogue: 0,0:58:41.35,0:58:43.35,Default,,0000,0000,0000,,去找一台电脑\N{\fnMicrosoft YaHei\fs14}go to your computer.{\r}
Dialogue: 0,0:58:43.35,0:58:45.49,Default,,0000,0000,0000,,亚瑟 我要挂电话了\N{\fnMicrosoft YaHei\fs14}Arthur, I'm gonna hang up the phone.{\r}
Dialogue: 0,0:58:45.49,0:58:46.89,Default,,0000,0000,0000,,莎拉 慢着\N{\fnMicrosoft YaHei\fs14}Sarah, wait.{\r}
Dialogue: 0,0:58:46.89,0:58:48.22,Default,,0000,0000,0000,,你的家人很危险\N{\fnMicrosoft YaHei\fs14}Your family's in danger.{\r}
Dialogue: 0,0:58:48.22,0:58:50.49,Default,,0000,0000,0000,,去找一台电脑 不能让迈尔斯看到你\N{\fnMicrosoft YaHei\fs14}Go to a computer where Miles won't be able to see you.{\r}
Dialogue: 0,0:58:51.69,0:58:53.03,Default,,0000,0000,0000,,等一下\N{\fnMicrosoft YaHei\fs14}Hang on.{\r}
Dialogue: 0,0:58:53.03,0:58:54.43,Default,,0000,0000,0000,,听我说\N{\fnMicrosoft YaHei\fs14}Listen to me.{\r}
Dialogue: 0,0:58:54.43,0:58:58.17,Default,,0000,0000,0000,,你儿子体内的那个人骗术惊人\N{\fnMicrosoft YaHei\fs14}The person inside your son is an exceptional liar.{\r}
Dialogue: 0,0:58:58.17,0:59:01.24,Default,,0000,0000,0000,,他平时假装睡着了实际上没有 他假装成他还是正常人 是你的儿子\N{\fnMicrosoft YaHei\fs14}He'll pretend he's sleeping, he'll pretend he's your son.{\r}
Dialogue: 0,0:59:01.24,0:59:04.27,Default,,0000,0000,0000,,迈尔斯说的话 你都不能信\N{\fnMicrosoft YaHei\fs14}You can't trust anything Miles says.{\r}
Dialogue: 0,0:59:07.08,0:59:09.84,Default,,0000,0000,0000,,之前是因为迈尔斯在场 所以我不能告诉你真相\N{\fnMicrosoft YaHei\fs14}I couldn't talk when Miles was here.{\r}
Dialogue: 0,0:59:09.85,0:59:11.68,Default,,0000,0000,0000,,之前在治疗的时候 他体内的灵魂发生争斗\N{\fnMicrosoft YaHei\fs14}During our session, there was a struggle,{\r}
Dialogue: 0,0:59:11.68,0:59:13.22,Default,,0000,0000,0000,,但我觉得你儿子听到了我说的话\N{\fnMicrosoft YaHei\fs14}but I think your son heard me.{\r}
Dialogue: 0,0:59:13.22,0:59:15.28,Default,,0000,0000,0000,,我花了一会才明白\N{\fnMicrosoft YaHei\fs14}It just took a moment to figure it out.{\r}
Dialogue: 0,0:59:15.29,0:59:19.92,Default,,0000,0000,0000,,他用指甲抓出一条信息传达给我 也就是那个侵入者的名字\N{\fnMicrosoft YaHei\fs14}He scratched what I realized was a message, the name.{\r}
Dialogue: 0,0:59:19.92,0:59:22.12,Default,,0000,0000,0000,,莎拉 你儿子告诉了我侵入者的名字\N{\fnMicrosoft YaHei\fs14}He gave me the name, Sarah.{\r}
Dialogue: 0,0:59:22.13,0:59:25.03,Default,,0000,0000,0000,,在电脑上输入 爱德华·撒卡\N{\fnMicrosoft YaHei\fs14}Type "Edward Scarka" into your computer.{\r}
Dialogue: 0,0:59:25.03,0:59:28.93,Default,,0000,0000,0000,,撒卡\N{\fnMicrosoft YaHei\fs14}S-C-A-R-K-A.{\r}
Dialogue: 0,0:59:31.97,0:59:33.73,Default,,0000,0000,0000,,克里克杀手\N{\fnMicrosoft YaHei\fs14}The Thrush Creek Killer.{\r}
Dialogue: 0,0:59:33.74,0:59:36.27,Default,,0000,0000,0000,,就是他 你看他眼睛的颜色\N{\fnMicrosoft YaHei\fs14}That's him. Look at the eyes.{\r}
Dialogue: 0,0:59:38.48,0:59:41.94,Default,,0000,0000,0000,,两只眼睛颜色不一样 跟迈尔斯特征一样\N{\fnMicrosoft YaHei\fs14}They're two different colors, just like Miles.{\r}
Dialogue: 0,0:59:41.95,0:59:43.58,Default,,0000,0000,0000,,迈尔斯的生日是什么时候\N{\fnMicrosoft YaHei\fs14}When's Miles' birthday?{\r}
Dialogue: 0,0:59:43.58,0:59:45.71,Default,,0000,0000,0000,,2010年8月22日\N{\fnMicrosoft YaHei\fs14}August 22nd, 2010.{\r}
Dialogue: 0,0:59:45.72,0:59:48.39,Default,,0000,0000,0000,,同一天 爱德华·撒卡在警方抓捕的过程中遭到击毙\N{\fnMicrosoft YaHei\fs14}That's the day Edward Scarka was killed in a police raid.{\r}
Dialogue: 0,0:59:49.55,0:59:51.39,Default,,0000,0000,0000,,他死的时候是凌晨四点\N{\fnMicrosoft YaHei\fs14}He died just after 4:00 a.m.{\r}
Dialogue: 0,0:59:52.32,0:59:56.16,Default,,0000,0000,0000,,迈尔斯4点15分出生\N{\fnMicrosoft YaHei\fs14}Miles was born at 4:15 a.m.{\r}
Dialogue: 0,0:59:56.16,0:59:59.59,Default,,0000,0000,0000,,他在五年间杀死了九位女性\N{\fnMicrosoft YaHei\fs14}He killed nine women over a span of five years.{\r}
Dialogue: 0,0:59:59.60,1:00:01.50,Default,,0000,0000,0000,,最后一位受害者 也就是第十位\N{\fnMicrosoft YaHei\fs14}The last victim, the tenth one,{\r}
Dialogue: 0,1:00:01.50,1:00:04.27,Default,,0000,0000,0000,,活了下来 但她的手被砍掉了\N{\fnMicrosoft YaHei\fs14}managed to get away, but not before he cut off her hand.{\r}
Dialogue: 0,1:00:04.27,1:00:06.23,Default,,0000,0000,0000,,他的作案特征就是\N{\fnMicrosoft YaHei\fs14}They all had their hands removed.{\r}
Dialogue: 0,1:00:06.24,1:00:07.57,Default,,0000,0000,0000,,把受害者的手砍掉\N{\fnMicrosoft YaHei\fs14}That was his trademark.{\r}
Dialogue: 0,1:00:07.57,1:00:09.80,Default,,0000,0000,0000,,他先砍掉受害者的手 再杀掉她们\N{\fnMicrosoft YaHei\fs14}He would cut off their hands, then kill them.{\r}
Dialogue: 0,1:00:09.81,1:00:12.41,Default,,0000,0000,0000,,先砍掉受害者的手 再杀掉她们\N{\fnMicrosoft YaHei\fs14}Cut off their hands, then kill them.{\r}
Dialogue: 0,1:00:12.41,1:00:13.74,Default,,0000,0000,0000,,那位幸存者\N{\fnMicrosoft YaHei\fs14}The survivor,{\r}
Dialogue: 0,1:00:13.74,1:00:16.78,Default,,0000,0000,0000,,叫玛格丽特·詹姆斯 以她遭受的劫难为主题 写了一本书\N{\fnMicrosoft YaHei\fs14}Margaret St. James, wrote a book about her ordeal.{\r}
Dialogue: 0,1:00:16.78,1:00:20.18,Default,,0000,0000,0000,,就是她报了警 警察赶来击毙了他\N{\fnMicrosoft YaHei\fs14}She led the police to him, where they gunned him down.{\r}
Dialogue: 0,1:00:21.08,1:00:22.49,Default,,0000,0000,0000,,所以现在是搞清楚了\N{\fnMicrosoft YaHei\fs14}So now we know.{\r}
Dialogue: 0,1:00:23.52,1:00:24.92,Default,,0000,0000,0000,,对吧\N{\fnMicrosoft YaHei\fs14}Right?{\r}
Dialogue: 0,1:00:24.92,1:00:28.29,Default,,0000,0000,0000,,是的 但我们还是要搞清楚 他回来到底是想要干什么\N{\fnMicrosoft YaHei\fs14}Yes, but we still need to know the reason why he's come back.{\r}
Dialogue: 0,1:00:28.29,1:00:29.66,Default,,0000,0000,0000,,撒卡到底想干什么\N{\fnMicrosoft YaHei\fs14}What Scarka wants.{\r}
Dialogue: 0,1:00:29.66,1:00:31.93,Default,,0000,0000,0000,,这才能让你的儿子解放出来\N{\fnMicrosoft YaHei\fs14}That's what will free your son.{\r}
Dialogue: 0,1:00:34.00,1:00:37.00,Default,,0,0,0,,{\fad(500,500)\an7\fs10}热门电影字幕欢迎关注微博 @远鉴字幕组v\N字幕组官方公众号：禾写电影\N若是想施展您的翻译才华 让自己的名字出现在字幕开头\N远鉴字幕组欢迎您加入\N远鉴字幕组招新群 483552098\N招募英翻 校对与特效人员 诚邀您的加入
Dialogue: 0,1:00:35.87,1:00:37.20,Default,,0000,0000,0000,,等等\N{\fnMicrosoft YaHei\fs14}Wait.{\r}
Dialogue: 0,1:01:12.37,1:01:14.17,Default,,0000,0000,0000,,亚瑟 我现在要挂电话了\N{\fnMicrosoft YaHei\fs14}Arthur, I have to go now.{\r}
Dialogue: 0,1:01:15.74,1:01:16.91,Default,,0000,0000,0000,,约翰\N{\fnMicrosoft YaHei\fs14}John.{\r}
Dialogue: 0,1:01:16.91,1:01:17.98,Default,,0000,0000,0000,,怎么了\N{\fnMicrosoft YaHei\fs14}What's going on?{\r}
Dialogue: 0,1:01:25.35,1:01:27.72,Default,,0000,0000,0000,,迈尔斯的事 我们要想点办法\N{\fnMicrosoft YaHei\fs14}We have to do something about Miles.{\r}
Dialogue: 0,1:01:30.36,1:01:33.32,Default,,0000,0000,0000,,我们现在要马上想办法\N{\fnMicrosoft YaHei\fs14}We have to do something about Miles right away.{\r}
Dialogue: 0,1:01:33.32,1:01:35.43,Default,,0000,0000,0000,,但是绝对不能让他知道\N{\fnMicrosoft YaHei\fs14}But he absolutely cannot know.{\r}
Dialogue: 0,1:02:17.74,1:02:19.04,Default,,0000,0000,0000,,等我一个小时\N{\fnMicrosoft YaHei\fs14}Wait an hour.{\r}
Dialogue: 0,1:02:20.97,1:02:23.54,Default,,0000,0000,0000,,我打包一些衣服 去那里见你\N{\fnMicrosoft YaHei\fs14}I'll pack some of his clothes and meet you there.{\r}
Dialogue: 0,1:02:40.29,1:02:43.23,Default,,0000,0000,0000,,跟八分之二相等的分数是\N{\fnMicrosoft YaHei\fs14}Is there another fraction that is equal to two-eighths?{\r}
Dialogue: 0,1:02:44.16,1:02:45.90,Default,,0000,0000,0000,,所以我们可以约分\N{\fnMicrosoft YaHei\fs14}So can we simplify to...{\r}
Dialogue: 0,1:02:47.07,1:02:49.63,Default,,0000,0000,0000,,布鲁姆先生 有什么事么\N{\fnMicrosoft YaHei\fs14}Mr. Blume. Is everything okay?{\r}
Dialogue: 0,1:02:49.64,1:02:52.67,Default,,0000,0000,0000,,我是来接迈尔斯的\N{\fnMicrosoft YaHei\fs14}Uh, yeah. I'm here to pick up Miles.{\r}
Dialogue: 0,1:02:52.67,1:02:53.84,Default,,0000,0000,0000,,我们马上就下课了\N{\fnMicrosoft YaHei\fs14}Well, we're almost finished our lesson,{\r}
Dialogue: 0,1:02:53.84,1:02:55.27,Default,,0000,0000,0000,,我一会儿就送他出去了\N{\fnMicrosoft YaHei\fs14}I can bring him out in just a second.{\r}
Dialogue: 0,1:02:55.27,1:02:57.61,Default,,0000,0000,0000,,抱歉 我现在就得出发了\N{\fnMicrosoft YaHei\fs14}No, I'm sorry, we gotta go now.{\r}
Dialogue: 0,1:02:57.61,1:02:59.45,Default,,0000,0000,0000,,家里出了一点紧急情况\N{\fnMicrosoft YaHei\fs14}It's a family emergency.{\r}
Dialogue: 0,1:03:00.91,1:03:03.78,Default,,0000,0000,0000,,好吧 要不要在办公室签退\N{\fnMicrosoft YaHei\fs14}Right. Do you need to sign out in the office?{\r}
Dialogue: 0,1:03:03.78,1:03:05.98,Default,,0000,0000,0000,,不用了 莎拉刚刚打了电话\N{\fnMicrosoft YaHei\fs14}No, Sarah just called over.{\r}
Dialogue: 0,1:03:05.98,1:03:07.25,Default,,0000,0000,0000,,跟那些人打了招呼\N{\fnMicrosoft YaHei\fs14}Spoke with them.{\r}
Dialogue: 0,1:03:08.62,1:03:10.55,Default,,0000,0000,0000,,嘿 迈尔斯\N{\fnMicrosoft YaHei\fs14}Hey, Miles, come on.{\r}
Dialogue: 0,1:03:10.56,1:03:11.79,Default,,0000,0000,0000,,我们走\N{\fnMicrosoft YaHei\fs14}Let's go.{\r}
Dialogue: 0,1:03:18.00,1:03:19.26,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles?{\r}
Dialogue: 0,1:03:24.67,1:03:25.94,Default,,0000,0000,0000,,我们走\N{\fnMicrosoft YaHei\fs14}Let's go, buddy.{\r}
Dialogue: 0,1:03:29.17,1:03:30.54,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:04:22.60,1:04:29.21,Default,,0000,0000,0000,,{\an8\fs16}逃出魔掌 生存与坚强的记述 玛格丽特·圣詹姆斯
Dialogue: 0,1:04:39.48,1:04:42.13,Default,,0000,0000,0000,,{\an8\fs16}幸存者辨认出克里克杀手身份 坚强与希望
Dialogue: 0,1:04:42.92,1:04:44.35,Default,,0000,0000,0000,,我的天\N{\fnMicrosoft YaHei\fs14}Oh, my God.{\r}
Dialogue: 0,1:04:50.26,1:04:52.91,Default,,0000,0000,0000,,{\an8\fs16}克里克杀手手下最后一位受害者已脱出魔爪
Dialogue: 0,1:04:54.82,1:04:57.56,Default,,0000,0000,0000,,{\an8\fs16}当地一位女性奇迹般逃出生天
Dialogue: 0,1:05:06.07,1:05:07.94,Default,,0000,0000,0000,,他是回来找你的\N{\fnMicrosoft YaHei\fs14}He came back for you.{\r}
Dialogue: 0,1:05:11.91,1:05:13.88,Default,,0000,0000,0000,,他想要你死\N{\fnMicrosoft YaHei\fs14}He wants you dead.{\r}
Dialogue: 0,1:05:24.79,1:05:27.23,Default,,0000,0000,0000,,迈尔斯 你母亲跟我做了个决定\N{\fnMicrosoft YaHei\fs14}Miles, your mother and I had to make a decision.{\r}
Dialogue: 0,1:05:30.33,1:05:32.63,Default,,0000,0000,0000,,我们要送你去别的地方住一段时间\N{\fnMicrosoft YaHei\fs14}You're gonna go and live somewhere for a while.{\r}
Dialogue: 0,1:05:34.50,1:05:35.50,Default,,0000,0000,0000,,然后\N{\fnMicrosoft YaHei\fs14}And, uh...{\r}
Dialogue: 0,1:05:37.30,1:05:38.47,Default,,0000,0000,0000,,你去的那个地方\N{\fnMicrosoft YaHei\fs14}The place where we're going{\r}
Dialogue: 0,1:05:38.47,1:05:40.41,Default,,0000,0000,0000,,会有很多人帮你慢慢好转\N{\fnMicrosoft YaHei\fs14}has people who can help you get better.{\r}
Dialogue: 0,1:05:41.94,1:05:43.41,Default,,0000,0000,0000,,他们都是很好的医生\N{\fnMicrosoft YaHei\fs14}Really good doctors.{\r}
Dialogue: 0,1:05:46.58,1:05:48.91,Default,,0000,0000,0000,,一开始可能你有点难以接受\N{\fnMicrosoft YaHei\fs14}It's gonna be tough for a while, but I think{\r}
Dialogue: 0,1:05:48.92,1:05:50.65,Default,,0000,0000,0000,,但我觉得你长大了 你会明白的\N{\fnMicrosoft YaHei\fs14}as you get older, you'll understand{\r}
Dialogue: 0,1:05:50.65,1:05:52.35,Default,,0000,0000,0000,,有些时候\N{\fnMicrosoft YaHei\fs14}that sometimes...{\r}
Dialogue: 0,1:05:52.35,1:05:53.52,Default,,0000,0000,0000,,有些时候良药\N{\fnMicrosoft YaHei\fs14}Sometimes what's best for us{\r}
Dialogue: 0,1:05:53.52,1:05:55.42,Default,,0000,0000,0000,,苦口\N{\fnMicrosoft YaHei\fs14}is the hardest thing for us to do.{\r}
Dialogue: 0,1:06:01.46,1:06:04.16,Default,,0000,0000,0000,,我只想告诉你我们很爱你\N{\fnMicrosoft YaHei\fs14}We just want you to know that we love you very much.{\r}
Dialogue: 0,1:06:05.80,1:06:07.00,Default,,0000,0000,0000,,爱你胜过一切\N{\fnMicrosoft YaHei\fs14}More than anything in the world.{\r}
Dialogue: 0,1:06:11.87,1:06:12.97,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles...{\r}
Dialogue: 0,1:06:12.97,1:06:13.98,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:06:53.15,1:06:56.15,Default,,0000,0000,0000,,他现在情况不容乐观\N{\fnMicrosoft YaHei\fs14}He's fighting very hard right now.{\r}
Dialogue: 0,1:06:56.15,1:06:57.88,Default,,0000,0000,0000,,我们只能让他进入\N{\fnMicrosoft YaHei\fs14}We'll have to keep him unconscious{\r}
Dialogue: 0,1:06:57.89,1:06:59.42,Default,,0000,0000,0000,,三到四周的昏迷状态\N{\fnMicrosoft YaHei\fs14}for three or four weeks.{\r}
Dialogue: 0,1:06:59.42,1:07:01.05,Default,,0000,0000,0000,,待他脑部的肿胀消退\N{\fnMicrosoft YaHei\fs14}When the swelling in his brain goes down,{\r}
Dialogue: 0,1:07:01.06,1:07:03.26,Default,,0000,0000,0000,,我们再诊断他的伤情\N{\fnMicrosoft YaHei\fs14}we'll determine the extent of his injury.{\r}
Dialogue: 0,1:07:04.73,1:07:06.23,Default,,0000,0000,0000,,你的丈夫体质很不错\N{\fnMicrosoft YaHei\fs14}Your husband's strong.{\r}
Dialogue: 0,1:07:08.60,1:07:10.40,Default,,0000,0000,0000,,他需要时间休养\N{\fnMicrosoft YaHei\fs14}What he needs is time.{\r}
Dialogue: 0,1:07:13.27,1:07:14.77,Default,,0000,0000,0000,,我的儿子在哪\N{\fnMicrosoft YaHei\fs14}Where is my son?{\r}
Dialogue: 0,1:07:17.57,1:07:18.84,Default,,0000,0000,0000,,他在走廊那头\N{\fnMicrosoft YaHei\fs14}He's across the hall.{\r}
Dialogue: 0,1:07:29.52,1:07:30.72,Default,,0000,0000,0000,,很抱歉\N{\fnMicrosoft YaHei\fs14}I'm so sorry.{\r}
Dialogue: 0,1:07:40.10,1:07:41.40,Default,,0000,0000,0000,,我爱你\N{\fnMicrosoft YaHei\fs14}I love you.{\r}
Dialogue: 0,1:07:46.40,1:07:48.27,Default,,0000,0000,0000,,我爱你 我很抱歉\N{\fnMicrosoft YaHei\fs14}I love you. I'm so sorry.{\r}
Dialogue: 0,1:07:49.97,1:07:51.71,Default,,0000,0000,0000,,我很抱歉\N{\fnMicrosoft YaHei\fs14}I'm so sorry.{\r}
Dialogue: 0,1:08:08.26,1:08:10.83,Default,,0000,0000,0000,,我觉得我知道如何终结这一切了\N{\fnMicrosoft YaHei\fs14}I think I know how to stop this.{\r}
Dialogue: 0,1:08:14.80,1:08:16.80,Default,,0000,0000,0000,,我觉得我能救我们的儿子\N{\fnMicrosoft YaHei\fs14}I think I can save him.{\r}
Dialogue: 0,1:08:19.14,1:08:20.67,Default,,0000,0000,0000,,如果我们这么做\N{\fnMicrosoft YaHei\fs14}If I do this,{\r}
Dialogue: 0,1:08:22.27,1:08:23.61,Default,,0000,0000,0000,,也许\N{\fnMicrosoft YaHei\fs14}maybe...{\r}
Dialogue: 0,1:08:27.01,1:08:29.98,Default,,0000,0000,0000,,也许我们一家人就能团聚了\N{\fnMicrosoft YaHei\fs14}Maybe we could all be back together again.{\r}
Dialogue: 0,1:08:41.99,1:08:43.49,Default,,0000,0000,0000,,我先走 你们两个好好谈谈\N{\fnMicrosoft YaHei\fs14}I'll leave you two alone.{\r}
Dialogue: 0,1:09:09.79,1:09:11.95,Default,,0000,0000,0000,,迈尔斯 车里是怎么回事\N{\fnMicrosoft YaHei\fs14}Miles, what happened in the car?{\r}
Dialogue: 0,1:09:13.16,1:09:15.56,Default,,0000,0000,0000,,我不知道\N{\fnMicrosoft YaHei\fs14}I don't know.{\r}
Dialogue: 0,1:09:15.56,1:09:18.03,Default,,0000,0000,0000,,我什么都不记得了\N{\fnMicrosoft YaHei\fs14}I don't remember anything.{\r}
Dialogue: 0,1:09:27.70,1:09:29.54,Default,,0000,0000,0000,,我知道要怎么帮你了\N{\fnMicrosoft YaHei\fs14}I know how I can help you.{\r}
Dialogue: 0,1:09:33.01,1:09:34.74,Default,,0000,0000,0000,,但我需要你相信我\N{\fnMicrosoft YaHei\fs14}But I need you to trust me.{\r}
Dialogue: 0,1:09:37.75,1:09:40.08,Default,,0000,0000,0000,,不管我怎么做 你都要相信我\N{\fnMicrosoft YaHei\fs14}I need you to trust me, whatever I do.{\r}
Dialogue: 0,1:09:42.15,1:09:43.55,Default,,0000,0000,0000,,你能做到么\N{\fnMicrosoft YaHei\fs14}Can you do that?{\r}
Dialogue: 0,1:10:44.28,1:10:45.95,Default,,0000,0000,0000,,你还记得我给你的那些\N{\fnMicrosoft YaHei\fs14}Do you remember those pills{\r}
Dialogue: 0,1:10:45.95,1:10:48.25,Default,,0000,0000,0000,,让你不晕车的药片么\N{\fnMicrosoft YaHei\fs14}I gave you so you didn't get car sick?{\r}
Dialogue: 0,1:10:49.39,1:10:51.45,Default,,0000,0000,0000,,你还记得吃了药片之后你就昏昏欲睡了么\N{\fnMicrosoft YaHei\fs14}You remember how it made you sleepy?{\r}
Dialogue: 0,1:10:52.22,1:10:53.22,Default,,0000,0000,0000,,记得\N{\fnMicrosoft YaHei\fs14}Yeah.{\r}
Dialogue: 0,1:10:59.36,1:11:01.10,Default,,0000,0000,0000,,我现在需要你睡着\N{\fnMicrosoft YaHei\fs14}I need you to sleep.{\r}
Dialogue: 0,1:11:02.13,1:11:04.53,Default,,0000,0000,0000,,但是为什么\N{\fnMicrosoft YaHei\fs14}But why?{\r}
Dialogue: 0,1:11:05.90,1:11:08.80,Default,,0000,0000,0000,,因为只有在你的情况好转起来之前\N{\fnMicrosoft YaHei\fs14}Because I can't trust you{\r}
Dialogue: 0,1:11:08.81,1:11:10.91,Default,,0000,0000,0000,,我不敢相信你\N{\fnMicrosoft YaHei\fs14}until you're all better.{\r}
Dialogue: 0,1:11:10.91,1:11:13.18,Default,,0000,0000,0000,,我要看着你把药吃下去\N{\fnMicrosoft YaHei\fs14}I want to see you take it, Miles.{\r}
Dialogue: 0,1:11:26.26,1:11:28.03,Default,,0000,0000,0000,,我们要去哪\N{\fnMicrosoft YaHei\fs14}Where are we going?{\r}
Dialogue: 0,1:11:31.13,1:11:32.83,Default,,0000,0000,0000,,闭上眼睛\N{\fnMicrosoft YaHei\fs14}Shut your eyes.{\r}
Dialogue: 0,1:12:01.33,1:12:04.53,Default,,0000,0000,0000,,我来帮你把你未竟的事情做完\N{\fnMicrosoft YaHei\fs14}I'm gonna take care of what you came back for.{\r}
Dialogue: 0,1:14:00.31,1:14:02.15,Default,,0000,0000,0000,,你找哪位\N{\fnMicrosoft YaHei\fs14}Can I help you?{\r}
Dialogue: 0,1:14:02.15,1:14:03.95,Default,,0000,0000,0000,,你是玛格丽特·詹姆斯么\N{\fnMicrosoft YaHei\fs14}Are you Margaret St. James?{\r}
Dialogue: 0,1:14:05.65,1:14:06.92,Default,,0000,0000,0000,,你想干什么\N{\fnMicrosoft YaHei\fs14}What do you want?{\r}
Dialogue: 0,1:14:08.02,1:14:09.99,Default,,0000,0000,0000,,我叫莎拉·布鲁姆\N{\fnMicrosoft YaHei\fs14}My name is Sarah Blume.{\r}
Dialogue: 0,1:14:11.49,1:14:14.99,Default,,0000,0000,0000,,我最近有过一次类似经历 你的书\N{\fnMicrosoft YaHei\fs14}I recently had an experience, and your book, it...{\r}
Dialogue: 0,1:14:16.83,1:14:18.20,Default,,0000,0000,0000,,对我很有帮助\N{\fnMicrosoft YaHei\fs14}It helped me.{\r}
Dialogue: 0,1:14:20.77,1:14:23.70,Default,,0000,0000,0000,,我想问问你没有时间聊聊\N{\fnMicrosoft YaHei\fs14}I was wondering if you had a moment.{\r}
Dialogue: 0,1:14:26.51,1:14:29.31,Default,,0000,0000,0000,,我从不在家里见外人\N{\fnMicrosoft YaHei\fs14}I have a rule of not seeing people in my home.{\r}
Dialogue: 0,1:14:30.81,1:14:33.01,Default,,0000,0000,0000,,只见五分钟\N{\fnMicrosoft YaHei\fs14}Just five minutes.{\r}
Dialogue: 0,1:14:33.01,1:14:35.81,Default,,0000,0000,0000,,求求你 我已经无路可走了\N{\fnMicrosoft YaHei\fs14}Please? I have nowhere else to go.{\r}
Dialogue: 0,1:14:46.29,1:14:48.06,Default,,0000,0000,0000,,我去煮茶\N{\fnMicrosoft YaHei\fs14}I'll make some tea.{\r}
Dialogue: 0,1:14:48.06,1:14:49.80,Default,,0000,0000,0000,,你可以坐一会\N{\fnMicrosoft YaHei\fs14}You can grab a seat.{\r}
Dialogue: 0,1:14:59.87,1:15:02.04,Default,,0000,0000,0000,,小猫 如果觉得冷\N{\fnMicrosoft YaHei\fs14}Oh, Pickles, you're just gonna wanna come back inside{\r}
Dialogue: 0,1:15:02.04,1:15:04.34,Default,,0000,0000,0000,,你就回来吧\N{\fnMicrosoft YaHei\fs14}as soon as you see how cold it is.{\r}
Dialogue: 0,1:15:04.34,1:15:05.88,Default,,0000,0000,0000,,真棒\N{\fnMicrosoft YaHei\fs14}Yeah, okay.{\r}
Dialogue: 0,1:15:06.91,1:15:09.02,Default,,0000,0000,0000,,走吧\N{\fnMicrosoft YaHei\fs14}Here you go. Go on.{\r}
Dialogue: 0,1:15:21.09,1:15:22.16,Default,,0000,0000,0000,,加薄荷还是柠檬\N{\fnMicrosoft YaHei\fs14}Peppermint or lemon?{\r}
Dialogue: 0,1:15:24.03,1:15:25.57,Default,,0000,0000,0000,,都可以\N{\fnMicrosoft YaHei\fs14}Either one.{\r}
Dialogue: 0,1:16:05.97,1:16:07.54,Default,,0000,0000,0000,,这玩意虽然看起来不太美观\N{\fnMicrosoft YaHei\fs14}This thing's not pretty,{\r}
Dialogue: 0,1:16:08.77,1:16:10.78,Default,,0000,0000,0000,,但用这玩意撕一张厕纸没问题\N{\fnMicrosoft YaHei\fs14}but it can tear a piece of toilet paper.{\r}
Dialogue: 0,1:16:12.38,1:16:13.91,Default,,0000,0000,0000,,对你的遭遇我感到很难过\N{\fnMicrosoft YaHei\fs14}I'm so sorry.{\r}
Dialogue: 0,1:16:16.32,1:16:19.52,Default,,0000,0000,0000,,你说的类似的情况 是最近发生的么\N{\fnMicrosoft YaHei\fs14}Was it recent, what happened to you?{\r}
Dialogue: 0,1:16:21.75,1:16:23.79,Default,,0000,0000,0000,,发生了有一段时间了\N{\fnMicrosoft YaHei\fs14}It's been going on for a while.{\r}
Dialogue: 0,1:16:25.06,1:16:26.36,Default,,0000,0000,0000,,其实是我儿子\N{\fnMicrosoft YaHei\fs14}It's my son.{\r}
Dialogue: 0,1:16:29.96,1:16:31.40,Default,,0000,0000,0000,,你是说你儿子遇上一些情况么\N{\fnMicrosoft YaHei\fs14}This is about your son?{\r}
Dialogue: 0,1:16:31.40,1:16:33.17,Default,,0000,0000,0000,,是的 他叫迈尔斯\N{\fnMicrosoft YaHei\fs14}Mmm. Yes, Miles.{\r}
Dialogue: 0,1:16:35.10,1:16:36.40,Default,,0000,0000,0000,,他几岁了\N{\fnMicrosoft YaHei\fs14}How old is he?{\r}
Dialogue: 0,1:16:38.84,1:16:40.24,Default,,0000,0000,0000,,他八岁\N{\fnMicrosoft YaHei\fs14}He's eight.{\r}
Dialogue: 0,1:16:42.14,1:16:43.98,Default,,0000,0000,0000,,八岁的孩子真可爱呢\N{\fnMicrosoft YaHei\fs14}That's a wonderful age.{\r}
Dialogue: 0,1:16:45.48,1:16:48.68,Default,,0000,0000,0000,,我的儿子大卫那么大的时候 也很可爱的\N{\fnMicrosoft YaHei\fs14}My David was so sweet at that age.{\r}
Dialogue: 0,1:16:50.12,1:16:51.92,Default,,0000,0000,0000,,我都不知道你还有孩子呢\N{\fnMicrosoft YaHei\fs14}I didn't know that you had children.{\r}
Dialogue: 0,1:16:53.12,1:16:57.52,Default,,0000,0000,0000,,我之前选择保护我家人的隐私\N{\fnMicrosoft YaHei\fs14}I've made a choice to keep my family private.{\r}
Dialogue: 0,1:16:57.53,1:17:01.16,Default,,0000,0000,0000,,出了连环杀手那事之前 我和大卫的父亲离婚了\N{\fnMicrosoft YaHei\fs14}David's father and I got divorced before I met Scarka.{\r}
Dialogue: 0,1:17:02.66,1:17:06.16,Default,,0000,0000,0000,,我觉得再把他们牵扯进我所遭受的痛苦与憎恨\N{\fnMicrosoft YaHei\fs14}But I didn't feel it was fair to link them{\r}
Dialogue: 0,1:17:06.17,1:17:08.17,Default,,0000,0000,0000,,是不公平的\N{\fnMicrosoft YaHei\fs14}to all that pain and hate.{\r}
Dialogue: 0,1:17:11.54,1:17:13.47,Default,,0000,0000,0000,,你的儿子现在在哪\N{\fnMicrosoft YaHei\fs14}Where is your son now?{\r}
Dialogue: 0,1:17:14.81,1:17:18.01,Default,,0000,0000,0000,,在密歇根州立大学 大二了\N{\fnMicrosoft YaHei\fs14}Starting sophomore year at Michigan State.{\r}
Dialogue: 0,1:17:19.65,1:17:22.82,Default,,0000,0000,0000,,我听说他都有女朋友了\N{\fnMicrosoft YaHei\fs14}And from what I hear, he has a new girlfriend, too.{\r}
Dialogue: 0,1:17:28.92,1:17:30.23,Default,,0000,0000,0000,,没事的\N{\fnMicrosoft YaHei\fs14}It's okay.{\r}
Dialogue: 0,1:17:31.06,1:17:32.66,Default,,0000,0000,0000,,遇上困难你能挺过去的\N{\fnMicrosoft YaHei\fs14}You'll get through this.{\r}
Dialogue: 0,1:17:32.66,1:17:34.33,Default,,0000,0000,0000,,我不应该来这的\N{\fnMicrosoft YaHei\fs14}I shouldn't have come here.{\r}
Dialogue: 0,1:17:38.57,1:17:40.83,Default,,0000,0000,0000,,我能去一趟厕所么\N{\fnMicrosoft YaHei\fs14}May I use your restroom?{\r}
Dialogue: 0,1:17:40.83,1:17:42.47,Default,,0000,0000,0000,,好的 在走廊那头\N{\fnMicrosoft YaHei\fs14}Yeah, it's just down the hall.{\r}
Dialogue: 0,1:17:45.81,1:17:47.87,Default,,0000,0000,0000,,我会给你沏好茶\N{\fnMicrosoft YaHei\fs14}I'll make you that cup of tea.{\r}
Dialogue: 0,1:18:08.30,1:18:09.56,Default,,0000,0000,0000,,我很抱歉\N{\fnMicrosoft YaHei\fs14}I'm sorry.{\r}
Dialogue: 0,1:18:10.73,1:18:12.03,Default,,0000,0000,0000,,我很抱歉\N{\fnMicrosoft YaHei\fs14}I'm so sorry.{\r}
Dialogue: 0,1:18:49.24,1:18:50.44,Default,,0000,0000,0000,,小猫\N{\fnMicrosoft YaHei\fs14}Pickles.{\r}
Dialogue: 0,1:18:51.54,1:18:53.41,Default,,0000,0000,0000,,你是怎么进来的\N{\fnMicrosoft YaHei\fs14}How'd you get back inside?{\r}
Dialogue: 0,1:18:59.65,1:19:01.12,Default,,0000,0000,0000,,你要干什么\N{\fnMicrosoft YaHei\fs14}What are you doing?{\r}
Dialogue: 0,1:19:02.62,1:19:04.45,Default,,0000,0000,0000,,你要干什么 住手\N{\fnMicrosoft YaHei\fs14}What are you doing? Stop.{\r}
Dialogue: 0,1:19:05.42,1:19:06.59,Default,,0000,0000,0000,,不要\N{\fnMicrosoft YaHei\fs14}Stop.{\r}
Dialogue: 0,1:19:08.46,1:19:09.99,Default,,0000,0000,0000,,求求你不要杀我\N{\fnMicrosoft YaHei\fs14}Please don't...{\r}
Dialogue: 0,1:19:13.46,1:19:14.80,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,1:19:17.13,1:19:18.47,Default,,0000,0000,0000,,我下不了手\N{\fnMicrosoft YaHei\fs14}I can't.{\r}
Dialogue: 0,1:19:21.47,1:19:23.44,Default,,0000,0000,0000,,我下不了手\N{\fnMicrosoft YaHei\fs14}I can't.{\r}
Dialogue: 0,1:19:23.44,1:19:25.67,Default,,0000,0000,0000,,我很抱歉\N{\fnMicrosoft YaHei\fs14}I'm so sorry.{\r}
Dialogue: 0,1:19:25.67,1:19:26.68,Default,,0000,0000,0000,,嘿\N{\fnMicrosoft YaHei\fs14}Hey!{\r}
Dialogue: 0,1:19:29.51,1:19:31.08,Default,,0000,0000,0000,,我眼睛的颜色 你喜欢哪一种\N{\fnMicrosoft YaHei\fs14}Which one you like better?{\r}
Dialogue: 0,1:19:32.48,1:19:33.65,Default,,0000,0000,0000,,蓝色\N{\fnMicrosoft YaHei\fs14}Blue{\r}
Dialogue: 0,1:19:34.48,1:19:35.82,Default,,0000,0000,0000,,还是 淡绿褐色\N{\fnMicrosoft YaHei\fs14}or hazel?{\r}
Dialogue: 0,1:19:36.29,1:19:38.02,Default,,0000,0000,0000,,蓝色\N{\fnMicrosoft YaHei\fs14}Blue{\r}
Dialogue: 0,1:19:38.02,1:19:39.29,Default,,0000,0000,0000,,还是 淡绿褐色\N{\fnMicrosoft YaHei\fs14}or hazel?{\r}
Dialogue: 0,1:19:40.16,1:19:41.42,Default,,0000,0000,0000,,蓝色\N{\fnMicrosoft YaHei\fs14}Blue{\r}
Dialogue: 0,1:19:41.42,1:19:42.66,Default,,0000,0000,0000,,还是 淡绿褐色\N{\fnMicrosoft YaHei\fs14}or hazel?{\r}
Dialogue: 0,1:19:42.66,1:19:43.93,Default,,0000,0000,0000,,你怎么会\N{\fnMicrosoft YaHei\fs14}How do you...{\r}
Dialogue: 0,1:19:45.66,1:19:47.53,Default,,0000,0000,0000,,那天晚上我遇上他的时候 他就是这么说的\N{\fnMicrosoft YaHei\fs14}That's what he said the night I met him.{\r}
Dialogue: 0,1:19:52.70,1:19:53.70,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:19:56.47,1:19:58.54,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No, don't!{\r}
Dialogue: 0,1:19:58.54,1:20:00.47,Default,,0000,0000,0000,,迈尔斯 不\N{\fnMicrosoft YaHei\fs14}Miles, no!{\r}
Dialogue: 0,1:20:04.95,1:20:06.45,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,1:20:21.36,1:20:23.50,Default,,0000,0000,0000,,你不应该离开我的\N{\fnMicrosoft YaHei\fs14}You should never have left me,{\r}
Dialogue: 0,1:20:23.50,1:20:24.90,Default,,0000,0000,0000,,玛格丽特\N{\fnMicrosoft YaHei\fs14}Margaret.{\r}
Dialogue: 0,1:21:31.27,1:21:32.57,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:21:38.91,1:21:40.78,Default,,0000,0000,0000,,迈尔斯 都结束了\N{\fnMicrosoft YaHei\fs14}Miles, it's over!{\r}
Dialogue: 0,1:21:45.38,1:21:47.28,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:21:51.72,1:21:52.92,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:21:55.99,1:21:57.63,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:22:02.90,1:22:04.00,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles!{\r}
Dialogue: 0,1:22:16.35,1:22:17.65,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles.{\r}
Dialogue: 0,1:22:23.45,1:22:24.89,Default,,0000,0000,0000,,宝贝\N{\fnMicrosoft YaHei\fs14}Baby...{\r}
Dialogue: 0,1:22:31.33,1:22:32.46,Default,,0000,0000,0000,,迈尔斯\N{\fnMicrosoft YaHei\fs14}Miles...{\r}
Dialogue: 0,1:22:37.77,1:22:39.30,Default,,0000,0000,0000,,已经太晚了\N{\fnMicrosoft YaHei\fs14}It's too late.{\r}
Dialogue: 0,1:22:54.15,1:22:55.95,Default,,0000,0000,0000,,你已经达成了你的目的\N{\fnMicrosoft YaHei\fs14}You got what you came for.{\r}
Dialogue: 0,1:22:58.72,1:23:01.29,Default,,0000,0000,0000,,把我的儿子还给我\N{\fnMicrosoft YaHei\fs14}Let me have my son.{\r}
Dialogue: 0,1:23:01.29,1:23:04.70,Default,,0000,0000,0000,,你觉得迈尔斯还活着么\N{\fnMicrosoft YaHei\fs14}You still believe Miles is alive?{\r}
Dialogue: 0,1:23:06.97,1:23:09.70,Default,,0000,0000,0000,,他说话听起来跟我一样么\N{\fnMicrosoft YaHei\fs14}Did he sound like this?{\r}
Dialogue: 0,1:23:09.70,1:23:11.20,Default,,0000,0000,0000,,妈妈\N{\fnMicrosoft YaHei\fs14}Mommy?{\r}
Dialogue: 0,1:23:13.47,1:23:16.34,Default,,0000,0000,0000,,不管我做什么\N{\fnMicrosoft YaHei\fs14}Will you always love me{\r}
Dialogue: 0,1:23:16.34,1:23:18.21,Default,,0000,0000,0000,,你都会爱我么\N{\fnMicrosoft YaHei\fs14}no matter what I do?{\r}
Dialogue: 0,1:23:19.88,1:23:22.08,Default,,0000,0000,0000,,你可真好骗\N{\fnMicrosoft YaHei\fs14}You were easy.{\r}
Dialogue: 0,1:23:22.08,1:23:24.98,Default,,0000,0000,0000,,我知道你会带我找到她\N{\fnMicrosoft YaHei\fs14}I knew you would bring me to her.{\r}
Dialogue: 0,1:23:26.22,1:23:27.85,Default,,0000,0000,0000,,他已经走了多久了\N{\fnMicrosoft YaHei\fs14}How long has he been gone?{\r}
Dialogue: 0,1:23:30.02,1:23:32.86,Default,,0000,0000,0000,,你答应你会永远爱他的那天晚上\N{\fnMicrosoft YaHei\fs14}The night you promised you would always love him...{\r}
Dialogue: 0,1:23:34.09,1:23:36.70,Default,,0000,0000,0000,,就是他最后一次跟你说话了\N{\fnMicrosoft YaHei\fs14}...that was the last time he ever spoke to you.{\r}
Dialogue: 0,1:23:39.20,1:23:40.57,Default,,0000,0000,0000,,他已经走了\N{\fnMicrosoft YaHei\fs14}He's gone now.{\r}
Dialogue: 0,1:23:41.73,1:23:43.00,Default,,0000,0000,0000,,你\N{\fnMicrosoft YaHei\fs14}You{\r}
Dialogue: 0,1:23:44.60,1:23:47.74,Default,,0000,0000,0000,,这个怪物\N{\fnMicrosoft YaHei\fs14}are a monster.{\r}
Dialogue: 0,1:23:48.57,1:23:50.87,Default,,0000,0000,0000,,你夺走了我儿子的灵魂\N{\fnMicrosoft YaHei\fs14}You took my son's soul?{\r}
Dialogue: 0,1:23:50.88,1:23:53.08,Default,,0000,0000,0000,,你不能\N{\fnMicrosoft YaHei\fs14}You will not...{\r}
Dialogue: 0,1:23:56.05,1:23:57.88,Default,,0000,0000,0000,,不可能让你占据他的身体\N{\fnMicrosoft YaHei\fs14}You cannot have his body!{\r}
Dialogue: 0,1:24:26.41,1:24:27.61,Default,,0000,0000,0000,,我的天\N{\fnMicrosoft YaHei\fs14}Jesus!{\r}
Dialogue: 0,1:24:46.43,1:24:48.80,Default,,0000,0000,0000,,她刚刚想杀我\N{\fnMicrosoft YaHei\fs14}She was trying to kill me.{\r}
Dialogue: 0,1:24:53.81,1:24:55.11,Default,,0000,0000,0000,,你安全了\N{\fnMicrosoft YaHei\fs14}You're safe now.{\r}
Dialogue: 0,1:24:57.44,1:24:59.61,Default,,0000,0000,0000,,你安全了\N{\fnMicrosoft YaHei\fs14}You're safe.{\r}
Dialogue: 0,1:25:02.08,1:25:03.25,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,1:25:06.45,1:25:07.62,Default,,0000,0000,0000,,不\N{\fnMicrosoft YaHei\fs14}No.{\r}
Dialogue: 0,1:25:33.71,1:25:34.71,Default,,0000,0000,0000,,抱歉 手表走慢了\N{\fnMicrosoft YaHei\fs14}Sorry, we're running behind.{\r}
Dialogue: 0,1:25:35.31,1:25:36.52,Default,,0000,0000,0000,,没事的\N{\fnMicrosoft YaHei\fs14}It's fine.{\r}
Dialogue: 0,1:25:48.69,1:25:51.50,Default,,0000,0000,0000,,很高兴再次见到你 迈尔斯\N{\fnMicrosoft YaHei\fs14}It's great to see you again, Miles.{\r}
Dialogue: 0,1:25:51.50,1:25:53.13,Default,,0000,0000,0000,,你会和我们住在一起\N{\fnMicrosoft YaHei\fs14}We're excited you'll be staying with us{\r}
Dialogue: 0,1:25:53.13,1:25:54.47,Default,,0000,0000,0000,,直到你父亲病情好转 我们都很高兴\N{\fnMicrosoft YaHei\fs14}while your dad gets better.{\r}
Dialogue: 0,1:25:56.24,1:25:57.84,Default,,0000,0000,0000,,想进你的房间看看么\N{\fnMicrosoft YaHei\fs14}Wanna see your room?{\r}
Dialogue: 0,1:26:46.45,1:26:49.57,Default,,0000,0000,0000,,{\an8\fs16}神童

*/};