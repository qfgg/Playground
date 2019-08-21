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
Style: Default,WenQuanYi Micro Hei,18,&H00E0E0E0,&HF0000000,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,1,2,0,0,1,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:05.00,0:00:45.00,Default,,0000,0000,0016,,{\fn文泉驿微米黑\fsp0.5\blur3\fscy110\1c&HFFFFFF&\b1}-=校对： {\1c&HFF8000&}电费喵.{\fnCronos Pro Subhead\b1}BluRay {\fn文泉驿微米黑\fsp0.5\fscy110\1c&HFFFFFF&\b1}=-\N{\fn文泉驿微米黑\fsp0.5\blur3\fscy110\1c&HFFFFFF&\b1}-=感谢字幕制作：{\fn文泉驿微米黑\fsp0.5\fs18\fscy110\1c&H3EA8DA&\fscy100\b1}Prophet{\fn文泉驿微米黑\fsp0.5\blur3\fscy110\1c&HFFFFFF&\b1}=-
Dialogue: 0,0:01:18.60,0:01:22.85,Default,,0000,0000,0050,,{\fad(0,500)\fnFZLanTingHeiS-B-GB\fs20\1c&HEAD726&\i1}疾速追杀3：备战
Dialogue: 0,1:22:42.94,1:22:47.24,Default,,0000,0000,0016,,{\fad(1000,1000)\blur3\fnSimHei\fs12\1c&HFFFFFF&\b1\i1}{\clip(55,202,55,224)\t(0,1000,1,\clip(55,202,149,224))}{\pos(101.7,221.91)}我们都是{\1c&H00ECFF&\K50}死亡{blur3\fnSimHei\fs12\1c&HFFFFFF&\b1\i1}的主宰
Dialogue: 0,0:02:21.22,0:02:23.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, Excommunicado.{\r}
Dialogue: 0,0:02:24.05,0:02:27.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}东部标准时间下午6时生效{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In effect, 6:00 p.m., Eastern Standard Time.{\r}
Dialogue: 0,0:03:18.91,0:03:20.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我真心希望威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I do hope that Mr. Wick{\r}
Dialogue: 0,0:03:20.31,0:03:22.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}能安全脱身{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}finds his way to safety.{\r}
Dialogue: 0,0:03:22.18,0:03:24.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他明知故犯{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He knew the rules, he broke them.{\r}
Dialogue: 0,0:03:24.31,0:03:26.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在大陆酒店杀了人  卡戎{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And killed a man on company grounds, Charon.{\r}
Dialogue: 0,0:03:26.58,0:03:28.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你觉得他能逃出来吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do you expect him to make it out?{\r}
Dialogue: 0,0:03:28.88,0:03:30.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}1400万的赏金悬在他头上{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}$14 million bounty on his head.{\r}
Dialogue: 0,0:03:30.55,0:03:34.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这座城市里面所有的有关人士都会想要分一杯羹{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And every interested party in this city wants a piece of it.{\r}
Dialogue: 0,0:03:34.32,0:03:37.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我觉得机会应该一半一半吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'd say the odds are about even.{\r}
Dialogue: 0,0:03:54.74,0:03:57.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你觉得医院是在帮你的吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You think the hospital's there to help, man?{\r}
Dialogue: 0,0:03:57.51,0:03:58.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}放屁!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No way!{\r}
Dialogue: 0,0:03:58.71,0:04:01.72,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们一治好你就会把你杀了!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}They'll kill you just as soon as they'll make you better!{\r}
Dialogue: 0,0:04:01.82,0:04:03.72,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是我知道更多{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But I know better, man.{\r}
Dialogue: 0,0:04:03.82,0:04:05.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道更多  我知道我是...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know better. I know what I'm...{\r}
Dialogue: 0,0:04:13.80,0:04:14.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘀嗒  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tick tock, Mr. Wick.{\r}
Dialogue: 0,0:04:15.06,0:04:16.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘀嗒{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tick tock.{\r}
Dialogue: 0,0:04:17.07,0:04:18.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘀嗒{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tick tock.{\r}
Dialogue: 0,0:04:18.83,0:04:22.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘀嗒  嘀...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tick tock. Tick...{\r}
Dialogue: 0,0:04:22.14,0:04:24.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没时间磨磨蹭蹭的了  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No time to dilly-dally, Mr. Wick!{\r}
Dialogue: 0,0:04:39.09,0:04:40.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}纽约公共图书馆{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The New York Public Library.{\r}
Dialogue: 0,0:04:41.02,0:04:42.26,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You got it.{\r}
Dialogue: 0,0:05:01.84,0:05:03.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}计划改变{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Change of plan.{\r}
Dialogue: 0,0:05:05.95,0:05:07.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}去大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}To the Continental.{\r}
Dialogue: 0,0:05:07.28,0:05:10.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你能看着看门人收下他吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Can you see that he's received by the concierge?{\r}
Dialogue: 0,0:05:10.82,0:05:12.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是的  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes, sir, Mr. Wick.{\r}
Dialogue: 0,0:05:14.12,0:05:17.63,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好狗狗  好狗狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good dog. Good dog.{\r}
Dialogue: 0,0:05:27.27,0:05:29.34,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, Excommunicado.{\r}
Dialogue: 0,0:05:29.44,0:05:31.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}距离生效  20分钟{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In effect, 20 minutes.{\r}
Dialogue: 0,0:05:52.33,0:05:53.26,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}有什么可以帮你的?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Can I help you?{\r}
Dialogue: 0,0:05:53.36,0:05:56.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}俄罗斯民间传说  亚历山大·阿法纳西耶夫著{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Russian Folktale. Alexander Afanasyev.{\r}
Dialogue: 0,0:05:59.53,0:06:00.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}1864年版{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}1864.{\r}
Dialogue: 0,0:06:10.75,0:06:12.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 二楼  - 谢谢{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Level two. Thank you.{\r}
Dialogue: 0,0:07:07.67,0:07:09.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}"想想上帝为什么创造你吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}"Consider your origins.{\r}
Dialogue: 0,0:07:09.77,0:07:12.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}"他不是为了让你像畜生一样地活着{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}"You were not made to live as brutes,{\r}
Dialogue: 0,0:07:12.71,0:07:15.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}"而是要追求美德和知识"{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}"but to follow virtue and knowledge."{\r}
Dialogue: 0,0:07:18.18,0:07:19.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但丁{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Dante.{\r}
Dialogue: 0,0:07:21.68,0:07:24.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看起来状态不怎么样啊  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Looking a little run down there, John.{\r}
Dialogue: 0,0:07:24.32,0:07:26.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}欧内斯特  时间还没到{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Ernest. I still have time.{\r}
Dialogue: 0,0:07:26.96,0:07:30.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也差不多了  谁会知道差别呢?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It's almost up. Who's gonna know the difference?{\r}
Dialogue: 0,0:07:30.46,0:07:32.49,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你确定你想这样?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You sure this is what you wanna do?{\r}
Dialogue: 0,0:07:32.59,0:07:34.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}1400万  那可是一大笔钱{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Fourteen million. It's a lot of money.{\r}
Dialogue: 0,0:07:34.46,0:07:35.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那你也得有命花{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Not if you can't spend it.{\r}
Dialogue: 0,0:08:12.33,0:08:13.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}操{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, shit.{\r}
Dialogue: 0,0:09:06.22,0:09:07.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}推回去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Push it back.{\r}
Dialogue: 0,0:09:22.64,0:09:24.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, Excommunicado.{\r}
Dialogue: 0,0:09:24.37,0:09:26.74,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}距离生效  10分钟{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In effect, 10 minutes.{\r}
Dialogue: 0,0:09:37.09,0:09:41.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}让大家知道鲍里街会遵守逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let it be known the Bowery will honor the Excommunicado.{\r}
Dialogue: 0,0:09:41.16,0:09:44.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不提供任何帮助  任何服务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No help, no services of any kind.{\r}
Dialogue: 0,0:09:56.10,0:09:59.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}医生!  医生  我是威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Doc! Doc, it's Wick!{\r}
Dialogue: 0,0:10:01.11,0:10:02.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick.{\r}
Dialogue: 0,0:10:02.14,0:10:04.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  不  你不该来这儿  时间快到了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, no. You shouldn't be here. Hour's almost up.{\r}
Dialogue: 0,0:10:04.68,0:10:06.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道  拜托了  医生  还有点时间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know, Doc, please. There's still time.{\r}
Dialogue: 0,0:10:06.48,0:10:07.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不!  我不行{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No! I can't.{\r}
Dialogue: 0,0:10:08.08,0:10:09.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我还有5分钟{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I still have five minutes!{\r}
Dialogue: 0,0:10:10.99,0:10:12.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}拜托{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Please.{\r}
Dialogue: 0,0:10:19.13,0:10:20.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}快点进来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Come on. Come on.{\r}
Dialogue: 0,0:10:26.63,0:10:28.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}来  坐在那里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}All right, sit there.{\r}
Dialogue: 0,0:10:33.44,0:10:35.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好的  让我看看  让我看看{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}All right, let me see. Let me see.{\r}
Dialogue: 0,0:10:35.81,0:10:37.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}呃{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Uh-huh.{\r}
Dialogue: 0,0:10:38.31,0:10:40.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}穿刺伤{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Puncture wound.{\r}
Dialogue: 0,0:10:40.68,0:10:43.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很深  伤及动脉{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Went deep. Nicked the artery.{\r}
Dialogue: 0,0:10:45.79,0:10:47.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}上点药{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Here you go.{\r}
Dialogue: 0,0:10:48.66,0:10:49.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}忍着点{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}All right.{\r}
Dialogue: 0,0:10:52.73,0:10:55.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, Excommunicado.{\r}
Dialogue: 0,0:10:55.46,0:10:57.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}距离生效  1分钟{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In effect, one minute.{\r}
Dialogue: 0,0:11:10.81,0:11:11.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}医生?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Doc?{\r}
Dialogue: 0,0:11:16.35,0:11:17.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}医生?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Doc?{\r}
Dialogue: 0,0:11:17.45,0:11:19.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嗯  弄好一半了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah. We're halfway there.{\r}
Dialogue: 0,0:11:22.26,0:11:23.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 五秒  - 嗯{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Five seconds. Yeah.{\r}
Dialogue: 0,0:11:23.62,0:11:26.03,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, Excommunicado.{\r}
Dialogue: 0,0:11:26.13,0:11:30.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}生效倒计时  5  4...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In effect, in five, four...{\r}
Dialogue: 0,0:11:30.77,0:11:33.53,Default,,0000,0000,0000,,{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}\N3  2...\NThree, two...{\r}
Dialogue: 0,0:11:33.87,0:11:35.57,Default,,0000,0000,0000,,{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}\N1\NOne.{\r}
Dialogue: 0,0:11:44.28,0:11:46.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对不起  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sorry, Mr. Wick.{\r}
Dialogue: 0,0:11:46.41,0:11:48.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道  规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know. Rules.{\r}
Dialogue: 0,0:11:48.12,0:11:49.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哎  规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Ah, rules.{\r}
Dialogue: 0,0:11:56.02,0:11:57.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  1400万{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, 14 million.{\r}
Dialogue: 0,0:11:57.79,0:12:00.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}开放合约  现在生效{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Open contract is now in effect.{\r}
Dialogue: 0,0:12:00.23,0:12:02.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所有服务暂时停止{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}All services are suspended.{\r}
Dialogue: 0,0:12:33.13,0:12:35.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好戏开始了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And away we go.{\r}
Dialogue: 0,0:12:59.89,0:13:02.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}架子顶层  右边{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Top shelf. On the right.{\r}
Dialogue: 0,0:13:02.39,0:13:04.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对  吃四片{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah. Take four.{\r}
Dialogue: 0,0:13:04.63,0:13:07.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}它会给你能量  帮助止痛{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It will give you energy. Help with the pain.{\r}
Dialogue: 0,0:13:16.70,0:13:18.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick?{\r}
Dialogue: 0,0:13:20.14,0:13:22.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们不会相信我准时停止的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}They'll never believe I stopped on the hour.{\r}
Dialogue: 0,0:13:23.01,0:13:24.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但事实如此{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But you did.{\r}
Dialogue: 0,0:13:24.21,0:13:25.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们会知道的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}They'll know.{\r}
Dialogue: 0,0:13:25.61,0:13:26.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}知道什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Know what?{\r}
Dialogue: 0,0:13:26.88,0:13:29.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我告诉你药在哪里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I told you where the medicine was.{\r}
Dialogue: 0,0:13:45.73,0:13:47.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 哪里?  - 这里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where? Here.{\r}
Dialogue: 0,0:13:47.87,0:13:48.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在我浮肋下面{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Just below my floating rib.{\r}
Dialogue: 0,0:13:49.04,0:13:50.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}小心别打到我的大肠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Be sure not to hit my large intestine.{\r}
Dialogue: 0,0:13:53.07,0:13:54.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  等等!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, wait!{\r}
Dialogue: 0,0:13:54.88,0:13:56.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}一个可能还不够{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}One may not be enough.{\r}
Dialogue: 0,0:14:00.72,0:14:02.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好  来吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah. All right.{\r}
Dialogue: 0,0:14:04.22,0:14:05.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}注意别擦伤我的...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Be sure not to graze my...{\r}
Dialogue: 0,0:14:05.55,0:14:07.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}啊!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh!{\r}
Dialogue: 0,0:14:14.73,0:14:16.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}祝你好运  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good luck, Mr. Wick.{\r}
Dialogue: 0,0:14:19.43,0:14:21.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谢了  医生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Thanks, Doc.{\r}
Dialogue: 0,0:20:38.69,0:20:39.70,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}就是他{\r}
Dialogue: 0,0:20:39.82,0:20:40.65,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}对{\r}
Dialogue: 0,0:20:41.36,0:20:44.57,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}告诉他们他到拐角处了{\r}
Dialogue: 0,0:23:58.68,0:24:01.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克  开放合约{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick. Open contract.{\r}
Dialogue: 0,0:24:01.28,0:24:03.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}增加到1500万{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Increase, 15 million.{\r}
Dialogue: 0,0:24:05.69,0:24:08.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你会去哪呢  乔纳森?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where are you going, Jonathan?{\r}
Dialogue: 0,0:24:17.90,0:24:19.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们打烊了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We are closed.{\r}
Dialogue: 0,0:24:45.35,0:24:47.01,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}好久不见了{\r}
Dialogue: 0,0:24:57.19,0:24:58.86,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}腰带也要{\r}
Dialogue: 0,0:25:09.33,0:25:10.83,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}给他带路{\r}
Dialogue: 0,0:25:15.54,0:25:16.75,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}回头见{\r}
Dialogue: 0,0:25:17.21,0:25:18.34,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}回头见{\r}
Dialogue: 0,0:25:40.53,0:25:42.07,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}重来!{\r}
Dialogue: 0,0:26:16.15,0:26:20.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}雅达尼  你为何回家?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Jardani. Why have you come home?{\r}
Dialogue: 0,0:26:26.36,0:26:28.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你拿这个给我看  好像它就是答案一样{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You present this to me like an answer.{\r}
Dialogue: 0,0:26:28.96,0:26:31.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我还有门票{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I still have my ticket.{\r}
Dialogue: 0,0:26:32.63,0:26:35.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}过去几周你造成了那么大的混乱{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}After all the chaos you've caused for the last few weeks,{\r}
Dialogue: 0,0:26:35.67,0:26:38.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你觉得你的门票还有效?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you think your ticket is valid?{\r}
Dialogue: 0,0:26:38.14,0:26:40.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你难道忘记了  俄罗斯吉普赛人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You forget that the Ruska Roma{\r}
Dialogue: 0,0:26:40.27,0:26:42.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}受高台桌约束{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}is bound by the High Table,{\r}
Dialogue: 0,0:26:42.24,0:26:45.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而高台桌高于一切?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and the High Table stands above all?{\r}
Dialogue: 0,0:26:45.55,0:26:47.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们可能会因为我和你说话而杀了我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}They could kill me just for talking to you.{\r}
Dialogue: 0,0:26:49.38,0:26:54.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}把死亡带到我的门前  你就是这么尊敬我的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You honor me by bringing death to my front door.{\r}
Dialogue: 0,0:26:56.02,0:27:00.63,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  雅达尼  你怎么了?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, Jardani, what has become of you?{\r}
Dialogue: 0,0:27:02.74,0:27:06.45,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}我是雅达尼·乔沃诺维奇{\r}
Dialogue: 0,0:27:07.91,0:27:11.08,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}我是白俄罗斯的孩子{\r}
Dialogue: 0,0:27:11.12,0:27:15.00,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}你部族的一个孤儿...{\r}
Dialogue: 0,0:27:15.04,0:27:18.17,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}你有义务帮助我...{\r}
Dialogue: 0,0:27:18.58,0:27:20.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你有义务...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You are bound...{\r}
Dialogue: 0,0:27:20.85,0:27:23.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我有权利{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I am owed.{\r}
Dialogue: 0,0:27:27.65,0:27:29.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}鲁妮  够了!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Rooney, enough!{\r}
Dialogue: 0,0:27:38.40,0:27:39.66,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}跟我来{\r}
Dialogue: 0,0:28:00.69,0:28:03.62,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}"你有权利"  你什么都没有  雅达尼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}"You are owed." You are owed nothing, Jardani.{\r}
Dialogue: 0,0:28:03.72,0:28:05.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你知道  当我的学生第一次来这里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You know, when my pupils first come here,{\r}
Dialogue: 0,0:28:06.09,0:28:07.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们只想要一件事{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}they wish for one thing.{\r}
Dialogue: 0,0:28:07.63,0:28:09.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没有苦痛的生活{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A life free of suffering.{\r}
Dialogue: 0,0:28:10.06,0:28:12.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我试着劝阻他们放弃这些幼稚的想法{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I try to dissuade them from these childish notions,{\r}
Dialogue: 0,0:28:13.07,0:28:15.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是你知道的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}but as you know,{\r}
Dialogue: 0,0:28:16.14,0:28:17.60,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}艺术是痛苦的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}art is pain.{\r}
Dialogue: 0,0:28:20.97,0:28:23.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}生活就是苦难{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Life is suffering.{\r}
Dialogue: 0,0:28:27.78,0:28:30.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你用某种方式脱离了苦难{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Somehow, you managed to get out.{\r}
Dialogue: 0,0:28:31.12,0:28:33.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但现在你来了  回到了你开始的地方{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But here you are, back where you began.{\r}
Dialogue: 0,0:28:34.55,0:28:36.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这一切  都是为了什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}All of this, for what?{\r}
Dialogue: 0,0:28:36.67,0:28:40.38,Default,,0000,0000,0016,,{\fad(1000,1000)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}就因为一只狗?{\r}
Dialogue: 0,0:28:41.34,0:28:45.67,Default,,0000,0000,0016,,{\fad(1000,1000)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}它不只是一只{\1c&H0000FF&}狗{\r}
Dialogue: 0,0:28:57.52,0:29:00.81,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}想起美好的回忆了吗?{\r}
Dialogue: 0,0:29:13.49,0:29:14.66,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}单脚尖旋转{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Pirouette.{\r}
Dialogue: 0,0:29:16.46,0:29:18.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}单脚尖旋转  单脚尖旋转{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Pirouette, pirouette.{\r}
Dialogue: 0,0:29:21.70,0:29:23.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}坐{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sit.{\r}
Dialogue: 0,0:29:36.35,0:29:41.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}即使我想  我也没办法帮你  雅达尼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Even if I wanted to, I can't help you, Jardani.{\r}
Dialogue: 0,0:29:42.36,0:29:44.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌想要你的命{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The High Table wants your life.{\r}
Dialogue: 0,0:29:45.39,0:29:48.03,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你如何能对抗狂风?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How can you fight the wind?{\r}
Dialogue: 0,0:29:48.13,0:29:49.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你如何能击碎高山?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How can you smash the mountains?{\r}
Dialogue: 0,0:29:49.90,0:29:52.40,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你如何能掩埋大海?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How can you bury the ocean?{\r}
Dialogue: 0,0:29:52.50,0:29:54.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你如何能逃离光芒?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How can you escape from the light?{\r}
Dialogue: 0,0:29:55.04,0:29:57.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然  你可以去往黑暗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Of course, you can go to the dark.{\r}
Dialogue: 0,0:29:57.80,0:30:00.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但他们也在黑暗中{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But they're in the dark, too.{\r}
Dialogue: 0,0:30:02.28,0:30:07.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以告诉我  雅达尼  你真正想要的是什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So tell me, Jardani. What do you really want?{\r}
Dialogue: 0,0:30:10.18,0:30:11.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}通道{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Passage.{\r}
Dialogue: 0,0:30:12.75,0:30:14.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想去哪里?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where did you want to go?{\r}
Dialogue: 0,0:30:16.12,0:30:18.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}卡萨布兰卡{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Casablanca.{\r}
Dialogue: 0,0:30:19.76,0:30:23.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}天堂之路始于地狱{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The path to paradise begins in hell.{\r}
Dialogue: 0,0:30:28.34,0:30:29.64,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那就这样吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So be it.{\r}
Dialogue: 0,0:30:29.74,0:30:33.74,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你把门票给我  我来撕破它{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You hand me your ticket, I will tear it.{\r}
Dialogue: 0,0:30:34.64,0:30:37.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果那真的是你所欲的话{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If that's what you really desire.{\r}
Dialogue: 0,0:31:16.18,0:31:19.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这样一来  雅达尼  你的门票已经撕毁{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}With this, Jardani, your ticket is torn.{\r}
Dialogue: 0,0:31:29.50,0:31:31.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你再也不能回家了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You can never come home again.{\r}
Dialogue: 0,0:31:33.67,0:31:35.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}带他去救生艇{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Take him to the lifeboat.{\r}
Dialogue: 0,0:31:36.77,0:31:38.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}再会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do svidanya.{\r}
Dialogue: 0,0:31:40.87,0:31:42.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}再会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do svidanya.{\r}
Dialogue: 0,0:32:13.41,0:32:16.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}欢迎来到大陆酒店  有什么可以帮您吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Welcome to the Continental. How may I help you?{\r}
Dialogue: 0,0:32:35.06,0:32:40.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}先生  这里有一个审裁员要见您{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sir. There is an Adjudicator here to see you.{\r}
Dialogue: 0,0:32:41.60,0:32:42.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}非常乐意  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well, sir.{\r}
Dialogue: 0,0:32:45.84,0:32:48.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}管理人在休息室{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The manager is in the lounge.{\r}
Dialogue: 0,0:32:52.61,0:32:56.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我猜你是来谈论约翰·威克的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I presume you're here to discuss John Wick.{\r}
Dialogue: 0,0:32:56.75,0:32:59.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}若是如此  我们可以快点结束{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If that's so, we can make this short.{\r}
Dialogue: 0,0:32:59.19,0:33:02.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我叫他走开  他拒绝了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I told him to walk away, he declined to do so.{\r}
Dialogue: 0,0:33:02.86,0:33:04.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}然后就这样了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And that's the all of it.{\r}
Dialogue: 0,0:33:05.43,0:33:06.63,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生破坏了规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick broke the rules.{\r}
Dialogue: 0,0:33:06.73,0:33:08.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, yes.{\r}
Dialogue: 0,0:33:09.00,0:33:11.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而我对于他的所在地一点头绪都没有...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I haven't got the slightest idea where he is...{\r}
Dialogue: 0,0:33:11.33,0:33:12.40,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你错了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You're mistaken.{\r}
Dialogue: 0,0:33:12.50,0:33:14.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不是为了威克先生而到此{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm not here for Mr. Wick.{\r}
Dialogue: 0,0:33:14.23,0:33:16.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我来此是因为威克先生在这个酒店打破了规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm here because Mr. Wick broke the rules in this hotel.{\r}
Dialogue: 0,0:33:16.87,0:33:18.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 嗯  - 血是洒在了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hmm. The blood was spilt{\r}
Dialogue: 0,0:33:18.24,0:33:20.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}大陆酒店的地上  不是吗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}on the grounds of the Continental. Was it not?{\r}
Dialogue: 0,0:33:20.71,0:33:21.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, yes.{\r}
Dialogue: 0,0:33:21.78,0:33:23.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}事实上  尸体正在变凉{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}As a matter of fact, the body gets colder{\r}
Dialogue: 0,0:33:24.08,0:33:25.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}就在这墙壁之内{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}within these very walls.{\r}
Dialogue: 0,0:33:26.05,0:33:28.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我要看看它{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'd like to see it.{\r}
Dialogue: 0,0:33:56.31,0:33:59.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}圣蒂诺·丹东尼奥{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Santino D'Antonio.{\r}
Dialogue: 0,0:33:59.11,0:34:01.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}一个新任职的高台桌成员{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A newly instated member of the High Table,{\r}
Dialogue: 0,0:34:01.45,0:34:02.32,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}被威克先生所杀害{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}slain by Mr. Wick{\r}
Dialogue: 0,0:34:02.42,0:34:05.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当他在大陆酒店寻求庇护的时候{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}while seeking sanctuary in the Continental.{\r}
Dialogue: 0,0:34:09.56,0:34:12.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看起来是.45英寸柯尔特自动手枪{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}With a .45 ACP, it appears.{\r}
Dialogue: 0,0:34:13.09,0:34:16.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我无法控制威克先生的行动{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I had no control over Mr. Wick's actions.{\r}
Dialogue: 0,0:34:16.10,0:34:19.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是  他还活着是因为你  不是吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And yet, he lives because you deemed it so, yes?{\r}
Dialogue: 0,0:34:19.77,0:34:20.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes.{\r}
Dialogue: 0,0:34:20.93,0:34:23.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你认识威克先生非常多年了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have known Mr. Wick for a great many years.{\r}
Dialogue: 0,0:34:23.10,0:34:25.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}说你们是朋友也不为过吧  对吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It might even be fair to call you friends, yes?{\r}
Dialogue: 0,0:34:26.57,0:34:28.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你没有制止他  杀死他{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Instead of stopping him, instead of killing him,{\r}
Dialogue: 0,0:34:28.88,0:34:30.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你袖手旁观让他离开{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you stood by and let him walk away{\r}
Dialogue: 0,0:34:30.58,0:34:33.05,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而他刚刚在你面前杀了圣蒂诺·丹东尼奥{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}after he shot Santino D'Antonio in front of you.{\r}
Dialogue: 0,0:34:33.15,0:34:35.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我判处他逐出教会了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I made him Excommunicado.{\r}
Dialogue: 0,0:34:35.22,0:34:38.05,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在你给了他一小时的逃离时间之后{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But not before you gave him an hour to escape.{\r}
Dialogue: 0,0:34:38.15,0:34:39.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他在我的酒店打破了规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He broke the rules in my hotel.{\r}
Dialogue: 0,0:34:39.92,0:34:42.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是问题所在了  你的酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This is exactly the problem, your hotel.{\r}
Dialogue: 0,0:34:42.52,0:34:44.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的忠诚在哪里?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where is your fealty?{\r}
Dialogue: 0,0:34:44.89,0:34:46.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我已经服务了40多年{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I've been of service for over 40 years.{\r}
Dialogue: 0,0:34:47.06,0:34:49.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在高台桌之下  服务于高台桌{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Under the Table. Serving the Table.{\r}
Dialogue: 0,0:34:49.26,0:34:50.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}一切都在高台桌之下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Everything is under the Table.{\r}
Dialogue: 0,0:34:51.03,0:34:52.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道你很忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I understand that you have your loyalties,{\r}
Dialogue: 0,0:34:52.80,0:34:54.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但这一点不容忽视{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}but this cannot be overlooked.{\r}
Dialogue: 0,0:34:54.17,0:34:57.50,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我把话说清楚  我是来审裁你的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let me be clear. I am here to adjudge you.{\r}
Dialogue: 0,0:34:57.60,0:34:59.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}给你一周处理事务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have one week to get your affairs in order.{\r}
Dialogue: 0,0:35:01.01,0:35:02.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Excuse me?{\r}
Dialogue: 0,0:35:02.18,0:35:05.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}届时您的继任者将被提名{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}At such time, your successor will be named.{\r}
Dialogue: 0,0:35:06.81,0:35:08.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}There are rules,{\r}
Dialogue: 0,0:35:08.35,0:35:09.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是唯一使我们有别于{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}they are the only things that separate us...{\r}
Dialogue: 0,0:35:10.08,0:35:12.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 有别于动物的事物  - 是的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}From the animals. Yes.{\r}
Dialogue: 0,0:35:12.65,0:35:14.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你有七天时间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have seven days.{\r}
Dialogue: 0,0:35:17.86,0:35:21.26,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}同时  如果你在过渡期间需要任何帮助{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In the meantime, if you need any assistance with your transition,{\r}
Dialogue: 0,0:35:21.36,0:35:24.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}可以到217房间找我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you may look for me in room 217.{\r}
Dialogue: 0,0:35:24.23,0:35:27.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请享受您在大陆酒店的入住{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Enjoy your stay at the Continental.{\r}
Dialogue: 0,0:35:40.31,0:35:43.12,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}有一个审裁员要见您{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}There's an Adjudicator here to see you.{\r}
Dialogue: 0,0:35:56.86,0:36:00.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}欢迎来到我的任务控制中心{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Welcome to my Mission Control.{\r}
Dialogue: 0,0:36:00.17,0:36:03.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我的行动的主脑  信息的超级通道{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Brain stem of my operation. The information super flyway.{\r}
Dialogue: 0,0:36:03.54,0:36:05.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我在这里掌控街头的话语{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}From whence I control the word on the street,{\r}
Dialogue: 0,0:36:06.01,0:36:07.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}世界的道路{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}the way of the world.{\r}
Dialogue: 0,0:36:07.37,0:36:08.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}用一些鸽子{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}With pigeons.{\r}
Dialogue: 0,0:36:08.51,0:36:12.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对  你看到的是带翅膀的老鼠  而我看到了互联网{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes. You see rats with wings, but I see the Internet.{\r}
Dialogue: 0,0:36:13.95,0:36:17.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没有IP地址  没有电子足迹{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No IP addresses. No digital footprint.{\r}
Dialogue: 0,0:36:17.65,0:36:21.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}无法追踪  无法入侵  无法跟踪{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Can't track it, can't hack it, can't trace it.{\r}
Dialogue: 0,0:36:21.69,0:36:24.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}它会让你生病吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Can you get disease from it?{\r}
Dialogue: 0,0:36:24.26,0:36:26.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不建议你吃它们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well, I wouldn't recommend that you eat one.{\r}
Dialogue: 0,0:36:27.73,0:36:29.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你到底想要什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What the hell do you want?{\r}
Dialogue: 0,0:36:29.90,0:36:31.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想看那件事没有发生的地方{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I wanted to see where it didn't happen.{\r}
Dialogue: 0,0:36:31.86,0:36:33.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}什么事没有发生的地方?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where what didn't happen?{\r}
Dialogue: 0,0:36:33.43,0:36:35.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你没有杀死约翰·威克的地方{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Where you didn't kill John Wick.{\r}
Dialogue: 0,0:36:36.34,0:36:37.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我一直有个印象{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I've always been under the impression{\r}
Dialogue: 0,0:36:37.47,0:36:40.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}合约与执行是可选项{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}that contracts and executing them was optional.{\r}
Dialogue: 0,0:36:40.81,0:36:43.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我对约翰·威克的做法没有问题{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have no problem with John Wick.{\r}
Dialogue: 0,0:36:49.05,0:36:52.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是  你给了约翰一支七发子弹的1911{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And yet, you gave John a seven-round Kimber 1911,{\r}
Dialogue: 0,0:36:52.45,0:36:54.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在明知道他计划用它来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}knowing that he intended to use it{\r}
Dialogue: 0,0:36:54.19,0:36:56.26,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对抗高台桌的情况下  对吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}to stand against the Table. Yes?{\r}
Dialogue: 0,0:37:00.43,0:37:03.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}就是这支1911  准确地说{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This Kimber 1911, to be exact.{\r}
Dialogue: 0,0:37:10.80,0:37:12.34,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你给了约翰·威克七发子弹{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You gave John Wick seven bullets,{\r}
Dialogue: 0,0:37:12.44,0:37:15.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌给你七天时间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}the High Table is giving you seven days.{\r}
Dialogue: 0,0:37:15.21,0:37:17.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}说清楚点  什么七天{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Seven days for what, exactly?{\r}
Dialogue: 0,0:37:17.78,0:37:18.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}用来安排好你的事情{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}To settle your affairs{\r}
Dialogue: 0,0:37:19.01,0:37:21.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}和为你的鸟找个新家{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and find a new home for your birds.{\r}
Dialogue: 0,0:37:21.35,0:37:24.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}七天之后  你将退位{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In seven days, you abdicate your throne.{\r}
Dialogue: 0,0:37:36.20,0:37:37.40,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  亲爱的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, my dear.{\r}
Dialogue: 0,0:37:37.50,0:37:40.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}告诉我  你知道鲍里街是什么地方吗  审裁员?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tell me, do you know what the Bowery is, Adjudicator?{\r}
Dialogue: 0,0:37:40.23,0:37:42.64,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你知道我只要挥一下手就会发生什么吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do you know what happens when I wave my hand?{\r}
Dialogue: 0,0:37:42.74,0:37:46.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  没人可以替我坐上王座{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, there will be no replacement for me on the throne.{\r}
Dialogue: 0,0:37:46.34,0:37:48.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}因为我就是王座  宝贝{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Because I am the throne, baby.{\r}
Dialogue: 0,0:37:48.98,0:37:51.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我就是鲍里街!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am the Bowery!{\r}
Dialogue: 0,0:37:52.35,0:37:54.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我是当你行走在夜晚的大街时{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am all that you deign not to look at{\r}
Dialogue: 0,0:37:54.51,0:37:56.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你所不愿意看到的一切{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}when you walk down the street at night.{\r}
Dialogue: 0,0:37:56.12,0:38:00.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}鲍里街是我的  我一个人的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Bowery is mine. Mine alone.{\r}
Dialogue: 0,0:38:01.05,0:38:02.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请不要错误地认为{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do not make the mistake of thinking{\r}
Dialogue: 0,0:38:02.66,0:38:06.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你存在于规则之外  没有人可以{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you exist outside the rules, no men do.{\r}
Dialogue: 0,0:38:06.23,0:38:08.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你有七天时间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have seven days.{\r}
Dialogue: 0,0:39:48.06,0:39:49.66,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}够了!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Enough!{\r}
Dialogue: 0,0:39:54.87,0:39:57.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们的朋友有点失控了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm afraid our friend here is off limits.{\r}
Dialogue: 0,0:39:58.07,0:40:00.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是他被逐出教会了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But he's Excommunicado.{\r}
Dialogue: 0,0:40:00.77,0:40:03.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看来管理人已经赦免了他{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It seems the manager has granted him amnesty.{\r}
Dialogue: 0,0:40:05.11,0:40:06.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}乔纳森先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Jonathan,{\r}
Dialogue: 0,0:40:06.48,0:40:09.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}能否请您友好地随我来呢{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}would you be so kind as to come with me?{\r}
Dialogue: 0,0:40:29.37,0:40:32.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}欢迎来到卡萨布兰卡  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Welcome to Casablanca, Mr. Wick.{\r}
Dialogue: 0,0:40:32.54,0:40:34.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谢了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Thanks.{\r}
Dialogue: 0,0:40:39.38,0:40:40.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}乔纳森先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Jonathan,{\r}
Dialogue: 0,0:40:40.68,0:40:42.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们这座美丽的城市{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}it has been a long time since our fine city{\r}
Dialogue: 0,0:40:42.55,0:40:44.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很久没有承蒙您的光临了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}has been graced with your presence.{\r}
Dialogue: 0,0:40:45.02,0:40:46.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想找...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I need to talk to...{\r}
Dialogue: 0,0:40:46.29,0:40:48.32,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是的  艾兹瓦尔女士  她已经在等您了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes, Ms. Al-Azwar, she's expecting you.{\r}
Dialogue: 0,0:40:55.53,0:40:59.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}欢迎来到摩洛哥大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}My, my, welcome to the Moroccan Continental.{\r}
Dialogue: 0,0:40:59.30,0:41:01.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}希望您会觉得喜欢它{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I hope you'll find it to your taste.{\r}
Dialogue: 0,0:41:03.14,0:41:04.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这边请{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Right this way.{\r}
Dialogue: 0,0:41:04.37,0:41:07.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}艾兹瓦尔女士  她从不等男人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Ms. Al-Azwar, she waits for no man.{\r}
Dialogue: 0,0:41:10.98,0:41:16.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}祝你好运  乔纳森先生  祝你好运{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Best of luck, Mr. Jonathan. Best of luck.{\r}
Dialogue: 0,0:41:50.72,0:41:52.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}听说你喜欢狗  约翰?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You a dog person, John?{\r}
Dialogue: 0,0:41:52.52,0:41:54.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}索菲亚?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sofia?{\r}
Dialogue: 0,0:41:59.33,0:42:01.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}索菲亚!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sofia!{\r}
Dialogue: 0,0:42:01.79,0:42:04.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你不能杀死你的徽记持有者{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You can't kill the bearer of your marker.{\r}
Dialogue: 0,0:42:04.46,0:42:07.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我没有杀你  我只是开枪打了你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I didn't kill you. I just shot you.{\r}
Dialogue: 0,0:42:08.70,0:42:09.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}西装不错{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Nice suit.{\r}
Dialogue: 0,0:42:12.34,0:42:13.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我也很高兴见到你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good to see you, too.{\r}
Dialogue: 0,0:42:13.87,0:42:16.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我真该现在就打爆你的头{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I should shoot you in the head right now.{\r}
Dialogue: 0,0:42:16.64,0:42:17.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know.{\r}
Dialogue: 0,0:42:23.22,0:42:25.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不要这么做{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Don't you do it.{\r}
Dialogue: 0,0:42:26.45,0:42:28.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你被逐出教会了  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You're Excommunicado, John.{\r}
Dialogue: 0,0:42:28.89,0:42:33.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那个徽记已经什么都不算了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And that marker doesn't mean shit.{\r}
Dialogue: 0,0:42:38.86,0:42:40.87,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这是你的血{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This is your blood.{\r}
Dialogue: 0,0:42:41.93,0:42:43.74,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你欠的债{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Your bond.{\r}
Dialogue: 0,0:42:43.84,0:42:48.87,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}曾经你需要帮助  我帮了你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}When you needed help, I was there.{\r}
Dialogue: 0,0:42:56.85,0:42:57.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}坐下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sit.{\r}
Dialogue: 0,0:43:01.65,0:43:04.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我是在对你说  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I was talking to you, John.{\r}
Dialogue: 0,0:43:08.53,0:43:13.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你意识到我现在是管理层了  对吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You do realize that I'm management now, right?{\r}
Dialogue: 0,0:43:13.27,0:43:14.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不做那种服务了  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm not service anymore, John.{\r}
Dialogue: 0,0:43:15.03,0:43:18.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以我不会走出去对人脑袋上开枪{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So I don't go around shooting people in the head.{\r}
Dialogue: 0,0:43:18.80,0:43:21.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不是要请求你杀人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm not asking you to kill anyone.{\r}
Dialogue: 0,0:43:21.41,0:43:23.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我只想要你带我去见他{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I just need you to get me to him.{\r}
Dialogue: 0,0:43:23.78,0:43:26.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 见谁  - 你的老上司{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}To who? Your old boss.{\r}
Dialogue: 0,0:43:28.55,0:43:29.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想杀了贝拉达{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You want to kill Berrada.{\r}
Dialogue: 0,0:43:29.92,0:43:31.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不会杀了他  我只是需要和他谈谈{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm not gonna kill him. I just need to talk.{\r}
Dialogue: 0,0:43:31.98,0:43:34.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他又能给你什么呢{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What could he possibly give to you?{\r}
Dialogue: 0,0:43:37.22,0:43:38.62,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}指引{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Guidance.{\r}
Dialogue: 0,0:43:38.72,0:43:43.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}听好了  我同意运营这家酒店的时候做了约定{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Look, I made a deal when I agreed to run this hotel.{\r}
Dialogue: 0,0:43:43.56,0:43:44.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约定内容是{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And that deal said{\r}
Dialogue: 0,0:43:44.80,0:43:47.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我必须服从高台桌的规则{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}that I had to follow the rules of the Table.{\r}
Dialogue: 0,0:43:47.67,0:43:50.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果你不是要杀了他  他就会杀了你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If you're not gonna kill him, he is gonna kill you,{\r}
Dialogue: 0,0:43:50.90,0:43:54.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}接下来很可能就是我  因为我让你走进来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and then probably me, too, for walking you up in there.{\r}
Dialogue: 0,0:43:54.64,0:43:58.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果我犯了一个错误  树了一个敌人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If I make one mistake, one enemy...{\r}
Dialogue: 0,0:43:59.71,0:44:03.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也许就会有人找我女儿的麻烦{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Maybe somebody goes looking for my daughter.{\r}
Dialogue: 0,0:44:04.72,0:44:07.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道你做了什么  约翰  让她脱离这一切{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I know what you did, John, to get her out.{\r}
Dialogue: 0,0:44:08.92,0:44:13.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但这不是我能承受的条件  抱歉{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But that's not a chance I can take. Sorry.{\r}
Dialogue: 0,0:44:15.36,0:44:17.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想知道她在哪里吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do you wanna know where she is?{\r}
Dialogue: 0,0:44:18.50,0:44:21.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  我从来就不想知道{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No. I don't ever wanna know.{\r}
Dialogue: 0,0:44:21.63,0:44:24.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}因为我不能信任我自己不会去找她{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Because I don't trust that I won't go find her.{\r}
Dialogue: 0,0:44:25.77,0:44:29.74,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}有一部分我渴望见她{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A part of me longs for her.{\r}
Dialogue: 0,0:44:29.84,0:44:33.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而我不得不每天都将那一部分我扼杀{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I have to kill that part of myself every day,{\r}
Dialogue: 0,0:44:34.08,0:44:35.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}只为保她周全{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}just to keep her safe.{\r}
Dialogue: 0,0:44:38.78,0:44:45.32,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}因为有时候你必须杀死你所爱{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Because sometimes you have to kill what you love.{\r}
Dialogue: 0,0:44:45.89,0:44:48.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是我一开始给你那个徽记的原因{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}That's why I gave you that marker in the first place.{\r}
Dialogue: 0,0:44:48.66,0:44:50.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也是我现在坐在这里的原因{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}That's why I'm sitting here right now{\r}
Dialogue: 0,0:44:50.63,0:44:53.00,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也是我现在一团糟的原因!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and that's why I'm fucked!{\r}
Dialogue: 0,0:44:58.40,0:45:00.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 自食其果  - 是啊{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Consequences. Yeah.{\r}
Dialogue: 0,0:45:02.44,0:45:04.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}自食其果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Consequences.{\r}
Dialogue: 0,0:45:06.41,0:45:08.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我只是请你尝试一下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm just asking you to try.{\r}
Dialogue: 0,0:45:09.55,0:45:11.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不管结果如何  你我之间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Either way, you and me,{\r}
Dialogue: 0,0:45:11.98,0:45:13.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}就算扯平了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}we'll be even.{\r}
Dialogue: 0,0:45:24.43,0:45:25.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No.{\r}
Dialogue: 0,0:45:26.83,0:45:32.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这件事过后  我们就再无瓜葛{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}After this, we are less than even.{\r}
Dialogue: 0,0:45:36.58,0:45:38.64,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们十分钟内离开{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We leave in 10 minutes.{\r}
Dialogue: 0,0:46:35.13,0:46:36.84,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}有什么可以帮到您的?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How can I help you?{\r}
Dialogue: 0,0:46:48.98,0:46:51.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没想到高台桌这么快就来了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I wasn't expecting the High Table so soon.{\r}
Dialogue: 0,0:46:53.85,0:46:55.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}有个任务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}There is a task.{\r}
Dialogue: 0,0:46:55.89,0:46:58.12,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}牵扯到某个破坏了规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It involves someone who broke the rules{\r}
Dialogue: 0,0:46:58.22,0:46:59.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}又站在了高台桌的对立面的人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and stood against the Table.{\r}
Dialogue: 0,0:47:01.23,0:47:03.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你是说约翰·威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick, you mean.{\r}
Dialogue: 0,0:47:03.56,0:47:05.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我没有空闲的学生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}My students have not been idle.{\r}
Dialogue: 0,0:47:05.53,0:47:08.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克和所有曾帮助过他的人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John Wick and all who've helped him.{\r}
Dialogue: 0,0:47:08.80,0:47:10.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你听说过他的事迹了  当然{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You've heard the stories about him, of course.{\r}
Dialogue: 0,0:47:10.90,0:47:13.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在过去的一周里只身杀了几十个人  只是为了...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Killed scores of men this past week alone because of...{\r}
Dialogue: 0,0:47:13.64,0:47:16.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}一条狗  一辆车{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A dog, a car.{\r}
Dialogue: 0,0:47:17.08,0:47:18.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很了解{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm familiar.{\r}
Dialogue: 0,0:47:21.51,0:47:23.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而且很感兴趣{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I'm interested.{\r}
Dialogue: 0,0:47:24.45,0:47:25.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}非常{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very.{\r}
Dialogue: 0,0:47:32.26,0:47:35.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}河豚  非常致命{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Blowfish. Very fatal.{\r}
Dialogue: 0,0:47:40.10,0:47:41.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不含大豆{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No soy.{\r}
Dialogue: 0,0:47:49.71,0:47:53.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我曾服务于高台桌  如今我将继续效忠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have served, I will be of service.{\r}
Dialogue: 0,0:49:34.55,0:49:36.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}停!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Stop!{\r}
Dialogue: 0,0:49:42.69,0:49:44.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}出去!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Out!{\r}
Dialogue: 0,0:49:50.33,0:49:53.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌和俄罗斯吉普赛人之间存有共识{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The High Table and the Ruska Roma have an understanding.{\r}
Dialogue: 0,0:49:53.83,0:49:56.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没错  而你帮助了约翰·威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes, and you helped John Wick.{\r}
Dialogue: 0,0:49:56.90,0:49:57.87,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他持有门票{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He had a ticket.{\r}
Dialogue: 0,0:49:57.97,0:50:00.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是门票并不高于高台桌{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But a ticket does not stand above the Table.{\r}
Dialogue: 0,0:50:00.71,0:50:03.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的罪将以血来偿还{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Your penance will be paid in blood.{\r}
Dialogue: 0,0:50:04.28,0:50:05.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}现在...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Now...{\r}
Dialogue: 0,0:50:07.98,0:50:12.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}伸出你的援助之手  承诺你的忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hold out your helping hands and pledge your fealty.{\r}
Dialogue: 0,0:50:20.73,0:50:26.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我曾服务于高台桌  如今我将继续效忠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have served, I will be of service.{\r}
Dialogue: 0,0:50:48.89,0:50:51.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们不会用老方法进去的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We're not going in like the old days.{\r}
Dialogue: 0,0:50:51.86,0:50:54.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}只是谈个话而已{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It's just a conversation.{\r}
Dialogue: 0,0:50:54.26,0:50:58.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}从来就不只是和你谈话的问题  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Nothing's ever just a conversation with you, John.{\r}
Dialogue: 0,0:51:02.17,0:51:03.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}走吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let's go.{\r}
Dialogue: 0,0:51:27.69,0:51:29.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}索菲亚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sofia.{\r}
Dialogue: 0,0:51:29.56,0:51:32.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}见到你总是很高兴{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Always so nice to see you.{\r}
Dialogue: 0,0:51:32.16,0:51:36.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然  还有狗狗们  多了不起啊  我可以摸摸它吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And the dogs, of course, how marvelous. May I pet one?{\r}
Dialogue: 0,0:51:36.94,0:51:37.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Certainly.{\r}
Dialogue: 0,0:51:42.14,0:51:44.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}太棒了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Fantastic.{\r}
Dialogue: 0,0:51:44.81,0:51:47.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}乔纳森·威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Jonathan Wick.{\r}
Dialogue: 0,0:51:47.41,0:51:50.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我已经听说你想办法来到了我们的海岸{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I had heard you had made your way to our shores.{\r}
Dialogue: 0,0:51:56.56,0:51:58.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}跟我来吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Come along now.{\r}
Dialogue: 0,0:51:58.19,0:52:00.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很确定我们有许多话可以谈{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am certain we have much to discuss.{\r}
Dialogue: 0,0:52:04.63,0:52:09.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我得承认  我很好奇  是什么风把你吹来?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I must admit, I am curious. What brings you to my domain?{\r}
Dialogue: 0,0:52:10.80,0:52:11.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}告诉我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tell me.{\r}
Dialogue: 0,0:52:12.04,0:52:14.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你是来这里杀我的吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Do you come here to kill me?{\r}
Dialogue: 0,0:52:16.41,0:52:17.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不是{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No.{\r}
Dialogue: 0,0:52:26.39,0:52:31.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生  你知道"刺客"这个词的起源吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick, do you know where the word "assassin" comes from?{\r}
Dialogue: 0,0:52:32.66,0:52:36.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}人们说  "刺客"{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}People argue. "Assassin."{\r}
Dialogue: 0,0:52:37.33,0:52:41.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哈沙辛  哈桑的追随者{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hashasheen, followers of Hassan-i...{\r}
Dialogue: 0,0:52:42.40,0:52:45.40,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}服用大麻的人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Eaters of hashish.{\r}
Dialogue: 0,0:52:46.74,0:52:48.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不用了  谢谢{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, thank you.{\r}
Dialogue: 0,0:52:49.41,0:52:52.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但另外的人主张它来自"阿萨辛"{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But others contend it comes from asasiyyun.{\r}
Dialogue: 0,0:52:52.98,0:52:55.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}意思是  "忠于职务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Meaning, "men who are faithful{\r}
Dialogue: 0,0:52:55.41,0:52:57.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}"恪守信仰的人"{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}"and who abide by their beliefs."{\r}
Dialogue: 0,0:52:59.18,0:53:01.39,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看到那个硬币了吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You see that coin?{\r}
Dialogue: 0,0:53:01.49,0:53:05.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这个机构里面第一个铸造出来的硬币{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The first coin ever minted in this facility.{\r}
Dialogue: 0,0:53:05.16,0:53:08.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}然后是第一个徽记{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Next to it, the first marker.{\r}
Dialogue: 0,0:53:08.53,0:53:11.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很不容易找到的  相信我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Not easy to track down, believe me.{\r}
Dialogue: 0,0:53:11.23,0:53:12.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然  这个硬币{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Now, this coin, of course,{\r}
Dialogue: 0,0:53:12.56,0:53:15.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}它并不代表金钱上的价值{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}it does not represent monetary value.{\r}
Dialogue: 0,0:53:15.90,0:53:18.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}它代表着关系的往来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It represents the commerce of relationships,{\r}
Dialogue: 0,0:53:19.04,0:53:22.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你同意参与的一个社会合约{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}a social contract in which you agree to partake.{\r}
Dialogue: 0,0:53:23.64,0:53:25.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}秩序与规则{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Order and rules.{\r}
Dialogue: 0,0:53:26.18,0:53:28.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你打破了规矩{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have broken the rules.{\r}
Dialogue: 0,0:53:28.18,0:53:31.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌标记了你的死亡{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The High Table has marked you for death.{\r}
Dialogue: 0,0:53:31.28,0:53:33.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为什么我要允许你活着离开这里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Why would I allow you to leave here alive,{\r}
Dialogue: 0,0:53:33.32,0:53:37.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}既然你的生命已经由于你自己的行为  被没收了?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}when your life has been by your own actions, forfeit?{\r}
Dialogue: 0,0:53:42.63,0:53:44.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我寻求补救的方法{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I seek to make amends.{\r}
Dialogue: 0,0:53:45.20,0:53:47.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为我的所为付出代价{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}To pay for what I've done.{\r}
Dialogue: 0,0:53:47.53,0:53:51.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我寻求与坐在高台桌之上的人的一次会面{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I seek a meeting with the one who sits above the Table.{\r}
Dialogue: 0,0:53:55.84,0:53:59.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这狗  我真是太喜欢它了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This dog, I do so love it.{\r}
Dialogue: 0,0:53:59.54,0:54:02.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}告诉我  他会掉很多毛吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tell me, does it shed a great deal?{\r}
Dialogue: 0,0:54:05.55,0:54:07.39,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}偶尔{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Occasionally.{\r}
Dialogue: 0,0:54:07.49,0:54:10.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我离开后  你可以告诉长者我要去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}When I leave, you can tell the Elder I'm coming.{\r}
Dialogue: 0,0:54:10.92,0:54:12.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}然后如果他想要我死...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And if he wants me dead...{\r}
Dialogue: 0,0:54:12.32,0:54:16.03,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他会保证你的骨头在阳光下褪色{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Then he will see to it that your bones bleach under the sun.{\r}
Dialogue: 0,0:54:16.80,0:54:18.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我懂了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I see.{\r}
Dialogue: 0,0:54:18.43,0:54:20.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我会给他一个选择{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And I would have provided him with a choice.{\r}
Dialogue: 0,0:54:28.07,0:54:29.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很抱歉  威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am sorry, Mr. Wick.{\r}
Dialogue: 0,0:54:30.94,0:54:33.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不能告诉你如何找到长者{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I cannot tell you where to find the Elder.{\r}
Dialogue: 0,0:54:36.11,0:54:38.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你没有理解{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You fail to understand.{\r}
Dialogue: 0,0:54:38.12,0:54:40.05,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}长者不是你能找的人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Elder is not a man you find.{\r}
Dialogue: 0,0:54:40.15,0:54:42.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}只能是他选择找上你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He can only choose to find you.{\r}
Dialogue: 0,0:54:42.69,0:54:44.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想和他说话?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You wish to speak with him?{\r}
Dialogue: 0,0:54:44.52,0:54:47.89,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}去到沙漠的边缘  向上看{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Go to the edge of the desert, look up.{\r}
Dialogue: 0,0:54:47.99,0:54:49.39,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}小犬座{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Canis Minor,{\r}
Dialogue: 0,0:54:49.49,0:54:52.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在天空中跟随着猎户座的狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}the dog that followed Orion through the sky.{\r}
Dialogue: 0,0:54:53.00,0:54:54.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}跟着那颗最亮的星{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You follow the brightest star.{\r}
Dialogue: 0,0:54:55.03,0:54:57.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}走到你快要死去的时候{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Walk until you are almost dead.{\r}
Dialogue: 0,0:54:57.67,0:55:00.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}然后  坚持走下去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Then, keep walking.{\r}
Dialogue: 0,0:55:00.21,0:55:02.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当你只剩最后一息的时候{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}When you are on your last breath,{\r}
Dialogue: 0,0:55:02.27,0:55:06.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他将会找到你...  又或者不会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}he will find you... Or he will not.{\r}
Dialogue: 0,0:55:08.15,0:55:09.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}感激不尽{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am grateful.{\r}
Dialogue: 0,0:55:12.28,0:55:13.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谢谢  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Thank you, sir.{\r}
Dialogue: 0,0:55:16.25,0:55:19.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也许你听得不够仔细{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Perhaps you were not listening before.{\r}
Dialogue: 0,0:55:22.63,0:55:24.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}社会合约{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The social contract.{\r}
Dialogue: 0,0:55:25.80,0:55:27.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}关系往来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The commerce of relationships.{\r}
Dialogue: 0,0:55:28.57,0:55:30.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我已经给你一份大礼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have received a great gift.{\r}
Dialogue: 0,0:55:30.87,0:55:32.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我接待了你的朋友{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have hosted your friend.{\r}
Dialogue: 0,0:55:33.27,0:55:35.34,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的回礼呢?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What do you offer in return?{\r}
Dialogue: 0,0:55:39.38,0:55:42.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如此温顺又如此凶猛{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So soft and yet so fierce.{\r}
Dialogue: 0,0:55:43.15,0:55:45.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我喜欢这狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I love it, this dog.{\r}
Dialogue: 0,0:55:46.79,0:55:47.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我会留着它{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I will keep it.{\r}
Dialogue: 0,0:55:48.02,0:55:49.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Excuse me?{\r}
Dialogue: 0,0:55:49.25,0:55:50.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是我的礼物了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This will be my gift.{\r}
Dialogue: 0,0:55:51.06,0:55:53.66,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是你对我忠诚的表现{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This will be how you show me your fealty.{\r}
Dialogue: 0,0:55:53.76,0:55:54.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No.{\r}
Dialogue: 0,0:55:55.03,0:55:57.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然这是你能做到的微不足道的事情{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Surely it's the least you can do.{\r}
Dialogue: 0,0:55:57.30,0:55:59.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  你不能留着我的狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, you cannot keep my dog.{\r}
Dialogue: 0,0:56:00.50,0:56:01.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well.{\r}
Dialogue: 0,0:56:02.97,0:56:04.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well.{\r}
Dialogue: 0,0:56:06.81,0:56:08.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那我就杀了它{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Then I will kill it.{\r}
Dialogue: 0,0:56:13.28,0:56:15.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很抱歉  索菲亚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm sorry, Sofia.{\r}
Dialogue: 0,0:56:15.25,0:56:17.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这是为了让你学会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This was for you to learn.{\r}
Dialogue: 0,0:56:26.06,0:56:27.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}别{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Don't.{\r}
Dialogue: 0,0:57:08.87,0:57:11.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}索菲亚  不要{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sofia. Don't.{\r}
Dialogue: 0,0:57:15.94,0:57:17.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他对我的狗开枪{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He shot my dog.{\r}
Dialogue: 0,0:57:19.11,0:57:20.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很能理解{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I get it.{\r}
Dialogue: 0,0:57:22.85,0:57:25.32,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们该走了  快点{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We gotta go. Now.{\r}
Dialogue: 0,1:04:00.68,1:04:02.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}来吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Here you go.{\r}
Dialogue: 0,1:04:06.68,1:04:09.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你会死的  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You're gonna die, John.{\r}
Dialogue: 0,1:04:09.52,1:04:12.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不管是在这沙漠里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Whether out here in this desert,{\r}
Dialogue: 0,1:04:12.62,1:04:15.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}或者是在哪条路上{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}or somewhere else down the road.{\r}
Dialogue: 0,1:04:16.86,1:04:18.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}总之你会死的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But you are gonna die.{\r}
Dialogue: 0,1:04:34.18,1:04:35.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}自食其果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Consequences.{\r}
Dialogue: 0,1:04:39.68,1:04:41.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}自食其果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Consequences.{\r}
Dialogue: 0,1:05:08.18,1:05:09.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}抓紧时间动身吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Better get going.{\r}
Dialogue: 0,1:05:19.09,1:05:20.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}索菲亚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sofia.{\r}
Dialogue: 0,1:08:01.49,1:08:03.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Okay.{\r}
Dialogue: 0,1:08:08.49,1:08:10.26,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你说得对{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You made your point.{\r}
Dialogue: 0,1:08:11.63,1:08:13.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你赢得了我的忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You have earned my fealty.{\r}
Dialogue: 0,1:08:14.63,1:08:15.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}事实上...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Matter of fact...{\r}
Dialogue: 0,1:08:15.90,1:08:17.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我要用忠诚灌满你的屁眼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm gonna shove so much fealty up your ass{\r}
Dialogue: 0,1:08:17.54,1:08:19.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}满到从你的嘴里溢出来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}it's gonna come spilling out of your mouth.{\r}
Dialogue: 0,1:08:19.64,1:08:21.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}给过你机会了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You had your chance.{\r}
Dialogue: 0,1:08:21.81,1:08:24.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好吧  既然你这么看{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well, since you see it that way,{\r}
Dialogue: 0,1:08:24.88,1:08:26.71,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想也是时候告诉你了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I guess it's time I told you{\r}
Dialogue: 0,1:08:26.81,1:08:30.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}从你那高台桌上爬下来然后滚你妈的蛋{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}to climb down off your High Table and go fuck yourself.{\r}
Dialogue: 0,1:08:31.05,1:08:32.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这话我收下了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Duly noted.{\r}
Dialogue: 0,1:08:33.05,1:08:34.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你给了约翰·威克七发子弹{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You gave John Wick seven bullets,{\r}
Dialogue: 0,1:08:34.79,1:08:38.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的罪将以七刀偿还{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}your penance will be paid with seven cuts.{\r}
Dialogue: 0,1:08:38.46,1:08:41.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好吧  有时候你得切个混蛋几刀{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well, sometimes you gotta cut a motherfucker.{\r}
Dialogue: 0,1:08:45.06,1:08:47.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不要看这里  甜心{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Avert your eyes, my sweet.{\r}
Dialogue: 0,1:08:48.37,1:08:51.30,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}国王死了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The king is dead.{\r}
Dialogue: 0,1:08:56.07,1:08:58.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}国王万岁{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Long live the king.{\r}
Dialogue: 0,1:09:51.93,1:09:53.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}喝下去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Drink.{\r}
Dialogue: 0,1:09:54.60,1:09:59.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}别担心  你的武器还在  请喝吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Don't worry, your weapon is still there. Please drink.{\r}
Dialogue: 0,1:10:09.21,1:10:13.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我的孩子  你为何迷路了?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}My son, how have you come to be so lost?{\r}
Dialogue: 0,1:10:13.45,1:10:14.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没有迷路{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Not lost.{\r}
Dialogue: 0,1:10:15.85,1:10:17.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在找你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Looking for you.{\r}
Dialogue: 0,1:10:17.29,1:10:20.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你以为我在说你的位置?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You think I speak of your location?{\r}
Dialogue: 0,1:10:21.29,1:10:23.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}从没见过一个人如此激烈地战斗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Never seen a man fight so hard{\r}
Dialogue: 0,1:10:23.29,1:10:25.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}最后结果是回到了他开始的地方{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}to end up back where he started.{\r}
Dialogue: 0,1:10:33.17,1:10:35.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}告诉我吧  乔纳森{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So tell me, Jonathan.{\r}
Dialogue: 0,1:10:35.21,1:10:37.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为什么你想活下去?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Why do you wish to live?{\r}
Dialogue: 0,1:10:37.88,1:10:41.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我的妻子  海伦{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}My wife, Helen.{\r}
Dialogue: 0,1:10:43.48,1:10:48.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为了记住她  记住我们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}To remember her. To remember us.{\r}
Dialogue: 0,1:10:48.55,1:10:51.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以你是为了爱的记忆而寻求生存?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So you seek to live for the memory of love?{\r}
Dialogue: 0,1:10:53.06,1:10:55.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}至少是一个挣得它的机会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}At least a chance to earn it.{\r}
Dialogue: 0,1:10:56.73,1:11:01.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我可以给你最后一个机会  挣取你的生命{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I can give you one last chance to earn a life.{\r}
Dialogue: 0,1:11:01.20,1:11:03.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}尽管  它可能不是你想要的生活{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}However, it might not be the life that you wish.{\r}
Dialogue: 0,1:11:05.04,1:11:06.60,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为我们完成一个任务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Complete a task for us,{\r}
Dialogue: 0,1:11:06.70,1:11:08.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的流放会被撤销{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and your Excommunicado will be reversed.{\r}
Dialogue: 0,1:11:09.04,1:11:11.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}开放合约会被关闭{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The open contract closed,{\r}
Dialogue: 0,1:11:11.21,1:11:13.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你将被允许继续存活{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you would be permitted to continue to live.{\r}
Dialogue: 0,1:11:13.28,1:11:16.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}并不是自由地活在高台桌之下  而是受其捆绑{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Not free under the Table, but bound to it.{\r}
Dialogue: 0,1:11:16.38,1:11:19.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在你剩下的日子里做你最拿手的事情{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Doing what you do best for the rest of your days.{\r}
Dialogue: 0,1:11:23.85,1:11:25.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}选择权在你手上{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The choice is yours.{\r}
Dialogue: 0,1:11:27.56,1:11:29.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}现在立刻去死{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Die here and now.{\r}
Dialogue: 0,1:11:29.66,1:11:32.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}或者继续生活与回忆直到死亡{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Or continue to live and remember through death.{\r}
Dialogue: 0,1:11:50.11,1:11:52.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我该做什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What must be done?{\r}
Dialogue: 0,1:11:52.18,1:11:55.12,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你生命的费用将是他人的死亡{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The cost of your life will be the death of others.{\r}
Dialogue: 0,1:11:55.22,1:11:58.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}第一个目标是被称为温斯顿的人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The first of which will be the man they call Winston.{\r}
Dialogue: 0,1:11:59.12,1:12:00.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What?{\r}
Dialogue: 0,1:12:00.26,1:12:02.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他忘记了他的忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He has forgotten his fealty.{\r}
Dialogue: 0,1:12:02.83,1:12:05.40,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}直到你完成任务之前{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Neither the open contract nor the Excommunicado{\r}
Dialogue: 0,1:12:05.50,1:12:08.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}开放合约与逐出教会都不会解除{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}will be lifted until you complete your task.{\r}
Dialogue: 0,1:12:09.03,1:12:10.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以如果你想活下去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So if you wish to live,{\r}
Dialogue: 0,1:12:10.80,1:12:13.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果你想继续回忆{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and if you wish to remember,{\r}
Dialogue: 0,1:12:13.57,1:12:15.61,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是你必须要做出的决定{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}this is the choice you must make.{\r}
Dialogue: 0,1:12:32.29,1:12:34.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我会服务{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I will serve.{\r}
Dialogue: 0,1:12:36.36,1:12:39.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我将为你效劳{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I will be of service.{\r}
Dialogue: 0,1:12:39.63,1:12:41.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好  我的孩子{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well, my son.{\r}
Dialogue: 0,1:12:41.80,1:12:43.50,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}摒弃你的弱点{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Cast aside your weakness{\r}
Dialogue: 0,1:12:43.60,1:12:46.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}重申你对高台桌的忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and reaffirm your fealty to the table.{\r}
Dialogue: 0,1:12:52.81,1:12:54.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰·威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. John Wick.{\r}
Dialogue: 0,1:12:54.95,1:12:56.57,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}我想看到{\r}
Dialogue: 0,1:12:57.03,1:12:58.57,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}来吧{\r}
Dialogue: 0,1:13:41.76,1:13:43.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谢谢你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Thank you.{\r}
Dialogue: 0,1:13:44.60,1:13:48.60,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我接受这个礼物以及你的忠诚{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I accept this offering and your fealty.{\r}
Dialogue: 0,1:14:05.65,1:14:08.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}希望你一路顺风{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I wish you good luck on your path.{\r}
Dialogue: 0,1:14:08.62,1:14:11.62,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}扎希尔会帮你准备出发{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Zahir will help you prepare for your departure.{\r}
Dialogue: 0,1:14:13.16,1:14:14.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And Mr. Wick.{\r}
Dialogue: 0,1:14:19.24,1:14:22.53,Default,,0000,0000,0016,,{\1c&HFBEE48&\fad(1000,1000)\blur3\fsp0.5\fscy110\b1\i1}欢迎回来{\r}
Dialogue: 0,1:14:53.86,1:14:57.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}JFK特快现在在九号站台到站{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}JFK Express now arriving on platform nine.{\r}
Dialogue: 0,1:14:57.30,1:15:00.50,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}JFK特快现在在九号站台到站{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}JFK Express now arriving on platform nine.{\r}
Dialogue: 0,1:16:23.19,1:16:24.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}保持队伍  孩子们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Stick together, kids.{\r}
Dialogue: 0,1:16:24.69,1:16:25.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}确保自己{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Make sure you're holding the hand{\r}
Dialogue: 0,1:16:25.96,1:16:29.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}和你前后的人手牵手{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}of the person in front and behind you.{\r}
Dialogue: 0,1:16:31.40,1:16:34.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看  这就是你特别的地方  约翰·威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You see? That's why you're special, John Wick.{\r}
Dialogue: 0,1:16:38.04,1:16:39.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果是我  我不会停下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I wouldn't have stopped.{\r}
Dialogue: 0,1:16:41.24,1:16:42.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}非常高兴你回来了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It's good to have you back.{\r}
Dialogue: 0,1:16:49.85,1:16:51.72,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}旅途如何?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How was your trip?{\r}
Dialogue: 0,1:16:54.22,1:16:56.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}要去大陆酒店吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Going to the Continental?{\r}
Dialogue: 0,1:17:02.33,1:17:04.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他和你一伙的?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He with you?{\r}
Dialogue: 0,1:17:04.19,1:17:06.60,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}曾经是{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He was.{\r}
Dialogue: 0,1:17:16.57,1:17:18.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}小把戏不错{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Nice trick.{\r}
Dialogue: 0,1:20:25.76,1:20:28.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}先生!  放下你的武器{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sir! Put your weapon down.{\r}
Dialogue: 0,1:20:29.93,1:20:32.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他被逐出教会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He's Excommunicado.{\r}
Dialogue: 0,1:20:32.67,1:20:35.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}除非你想和他一样{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Unless you wish to become the same,{\r}
Dialogue: 0,1:20:35.94,1:20:39.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}否则我建议你把枪放下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I suggest you lower your gun.{\r}
Dialogue: 0,1:20:45.38,1:20:47.62,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想见管理人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'd like to see the manager.{\r}
Dialogue: 0,1:20:49.99,1:20:51.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Of course.{\r}
Dialogue: 0,1:20:51.92,1:20:54.83,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请随我来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If you would be so kind as to follow me.{\r}
Dialogue: 0,1:21:07.70,1:21:09.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请就坐{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Please take a seat.{\r}
Dialogue: 0,1:21:09.21,1:21:11.84,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我会告知他您来了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I will let him know you have arrived.{\r}
Dialogue: 0,1:21:46.38,1:21:47.81,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我得告诉你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I gotta tell you,{\r}
Dialogue: 0,1:21:47.91,1:21:50.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我期待和你见面很久了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I've been looking forward to meeting you for a long time.{\r}
Dialogue: 0,1:21:50.98,1:21:54.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我是你的大粉丝  约翰·威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'm a huge fan. John Wick.{\r}
Dialogue: 0,1:21:56.25,1:21:59.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}到目前为止  我还没有让你失望{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And so far, you haven't disappointed.{\r}
Dialogue: 0,1:22:02.79,1:22:05.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这就是那条狗吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Is that the dog?{\r}
Dialogue: 0,1:22:05.20,1:22:07.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他很喜欢你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}He likes you.{\r}
Dialogue: 0,1:22:07.23,1:22:11.84,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而我?  我比较喜欢猫{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Me? I'm more of a cat person myself.{\r}
Dialogue: 0,1:22:12.30,1:22:13.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘿  狗狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hey, dog.{\r}
Dialogue: 0,1:22:16.57,1:22:20.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们是一样的  你知道的  我们有同样的天赋{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We're the same, you know. Both given the same gift.{\r}
Dialogue: 0,1:22:20.98,1:22:23.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们不一样{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We're not the same.{\r}
Dialogue: 0,1:22:23.35,1:22:24.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}一样的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yes, we are.{\r}
Dialogue: 0,1:22:25.52,1:22:28.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  不一样{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, we're not.{\r}
Dialogue: 0,1:22:28.19,1:22:30.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}管理人准备好见你了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The manager is ready for you now.{\r}
Dialogue: 0,1:22:30.75,1:22:32.72,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在行政休息室  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}In the administrative lounge, sir.{\r}
Dialogue: 0,1:22:47.24,1:22:48.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick.{\r}
Dialogue: 0,1:22:50.74,1:22:51.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}坐吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sit.{\r}
Dialogue: 0,1:22:53.28,1:22:54.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}待着{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Stay.{\r}
Dialogue: 0,1:22:56.08,1:22:57.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}乖狗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good dog.{\r}
Dialogue: 0,1:23:53.10,1:23:55.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请小心谨慎  乔纳森{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Tread carefully, Jonathan.{\r}
Dialogue: 0,1:24:03.88,1:24:07.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}只有在特殊场合我们才会用这个房间{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We only use this room on special occasions.{\r}
Dialogue: 0,1:24:07.38,1:24:11.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}就是当你需要看对方手上拿着什么{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}When you simply have to see what your opponent is holding{\r}
Dialogue: 0,1:24:11.62,1:24:13.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}藏在桌子底下的时候{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}under the table.{\r}
Dialogue: 0,1:24:15.03,1:24:17.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的旅行怎么样?  精彩吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How was your journey here? Eventful?{\r}
Dialogue: 0,1:24:18.46,1:24:19.63,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah.{\r}
Dialogue: 0,1:24:19.73,1:24:21.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好吧  当然了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well, of course.{\r}
Dialogue: 0,1:24:21.67,1:24:26.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们派人去杀你  现在派你来杀我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}They sent men to kill you, and now you to kill me.{\r}
Dialogue: 0,1:24:27.50,1:24:29.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这不就是你来此的原因吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Isn't that why you're here?{\r}
Dialogue: 0,1:24:29.34,1:24:34.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我曾服务于高台桌  如今我将继续效忠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have served, I will be of service.{\r}
Dialogue: 0,1:24:36.01,1:24:38.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是你在犹豫{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But you're having doubts.{\r}
Dialogue: 0,1:24:38.85,1:24:42.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不要犯下假装这是私人矛盾的错误{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Just don't make the mistake of pretending this is personal.{\r}
Dialogue: 0,1:24:42.89,1:24:45.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果你觉得有必要{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If you feel you must,{\r}
Dialogue: 0,1:24:47.19,1:24:49.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请开枪射穿我的心脏{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}put a bullet through my heart.{\r}
Dialogue: 0,1:24:56.03,1:24:58.64,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌要求我退位{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The High Table has asked me to step down.{\r}
Dialogue: 0,1:24:58.74,1:25:00.27,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那一小时?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The hour?{\r}
Dialogue: 0,1:25:00.77,1:25:01.87,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那一小时{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The hour.{\r}
Dialogue: 0,1:25:01.97,1:25:04.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你应该在大陆酒店杀了我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You should have killed me in the Continental.{\r}
Dialogue: 0,1:25:05.64,1:25:07.88,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也许是这样{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Maybe I should have.{\r}
Dialogue: 0,1:25:07.98,1:25:10.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}规矩与后果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Rules and consequences.{\r}
Dialogue: 0,1:25:10.68,1:25:12.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嗯{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hmm.{\r}
Dialogue: 0,1:25:12.12,1:25:13.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看来每个人都在承受{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It seems like everyone is suffering{\r}
Dialogue: 0,1:25:13.48,1:25:15.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}他们行动所导致的恶果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}from the consequences of their actions.{\r}
Dialogue: 0,1:25:16.09,1:25:18.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而你不准备退位{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And you're not stepping down?{\r}
Dialogue: 0,1:25:20.52,1:25:22.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No.{\r}
Dialogue: 0,1:25:22.79,1:25:24.69,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不觉得我会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I don't think I am.{\r}
Dialogue: 0,1:25:24.79,1:25:26.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以这是战争?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So it's war?{\r}
Dialogue: 0,1:25:26.80,1:25:29.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你要与高台桌开战?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You're going to war with the High Table?{\r}
Dialogue: 0,1:25:29.77,1:25:30.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}小规模战斗{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Skirmish.{\r}
Dialogue: 0,1:25:31.07,1:25:32.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}除非你决定射我{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Unless you decide to shoot me.{\r}
Dialogue: 0,1:25:32.20,1:25:36.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是  如果那样的话  我更愿意死在朋友的手里{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But, then, I'd rather die at the hand of a friend{\r}
Dialogue: 0,1:25:36.74,1:25:39.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而非敌人{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}than that of an enemy.{\r}
Dialogue: 0,1:25:39.21,1:25:42.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  我已经做出了我的选择  现在就看你如何选择了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, I've made my choice. It's up to you to make yours.{\r}
Dialogue: 0,1:25:43.78,1:25:45.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}什么选择?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What choice?{\r}
Dialogue: 0,1:25:45.95,1:25:48.52,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你射我  你出卖你的灵魂{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You shoot me, you sell your soul.{\r}
Dialogue: 0,1:25:48.62,1:25:52.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但我会活下去  我可以记住她{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But I'll be alive. And I can remember her.{\r}
Dialogue: 0,1:25:53.02,1:25:55.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}直到你以高台桌的仆从的身份死去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Until you die as a servant of the High Table.{\r}
Dialogue: 0,1:25:55.63,1:26:00.30,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}听我说  你做到了那件不可能的事  你停下了  你脱身了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Now, you did the impossible, you stopped, you got out.{\r}
Dialogue: 0,1:26:00.40,1:26:03.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你回来的唯一原因只是海伦从你身边被夺走了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You only came back because Helen was taken away from you.{\r}
Dialogue: 0,1:26:03.67,1:26:08.14,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}真正的问题是  你想以什么样的身份死去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The real question is, who do you wish to die as?{\r}
Dialogue: 0,1:26:08.51,1:26:10.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}雅加婆婆?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Baba Yaga?{\r}
Dialogue: 0,1:26:10.14,1:26:12.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}许多人死前所看见的最后之物?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The last thing many men ever see?{\r}
Dialogue: 0,1:26:12.21,1:26:17.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}或者是一个与妻子有着爱与被爱的男人?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Or as a man who loved and was loved by his wife?{\r}
Dialogue: 0,1:26:17.21,1:26:20.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想要以什么样的身份死去  乔纳森?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Who do you wish to die as, Jonathan?{\r}
Dialogue: 0,1:26:52.15,1:26:54.95,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生  见到你很高兴{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick, it's a pleasure to meet you.{\r}
Dialogue: 0,1:26:55.05,1:26:56.99,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我是一个审裁员{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I am an Adjudicator.{\r}
Dialogue: 0,1:26:58.19,1:27:00.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}您决定要退位了吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Have you decided to step down?{\r}
Dialogue: 0,1:27:02.73,1:27:05.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我不认为{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I think not.{\r}
Dialogue: 0,1:27:05.43,1:27:08.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你呢  你会用子弹射穿他的头吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And you? Will you be putting a bullet in his head?{\r}
Dialogue: 0,1:27:12.00,1:27:15.34,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  我觉得我不会{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, I don't think I will.{\r}
Dialogue: 0,1:27:22.91,1:27:24.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well.{\r}
Dialogue: 0,1:27:32.59,1:27:33.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}行政部门{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Administration.{\r}
Dialogue: 0,1:27:33.96,1:27:36.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想修改一份委任{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'd like to change a designation.{\r}
Dialogue: 0,1:27:36.99,1:27:38.09,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}身份验证?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Verification?{\r}
Dialogue: 0,1:27:38.19,1:27:41.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}审裁员 1-0-1-1-9-7-9{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Adjudication 1-0-1-1-9-7-9.{\r}
Dialogue: 0,1:27:41.43,1:27:43.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}纽约  大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Continental Hotel, New York.{\r}
Dialogue: 0,1:27:43.47,1:27:45.50,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}新委任?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}New designation?{\r}
Dialogue: 0,1:27:45.60,1:27:47.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}停运{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Deconsecrated.{\r}
Dialogue: 0,1:27:49.81,1:27:51.04,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}处理中{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Processing.{\r}
Dialogue: 0,1:27:53.21,1:27:54.54,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}行政人员{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Administrator.{\r}
Dialogue: 0,1:27:55.61,1:28:00.18,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}文件  纽约大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}File. The New York Continental Hotel.{\r}
Dialogue: 0,1:28:10.39,1:28:15.13,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}纽约大陆酒店现已停运  再见{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The New York Continental Hotel has been deconsecrated. Goodbye.{\r}
Dialogue: 0,1:28:22.17,1:28:24.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}先生们  此处机构已经停运{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Gentlemen, this institution is now deconsecrated.{\r}
Dialogue: 0,1:28:24.61,1:28:27.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}现在可以在大陆酒店办事了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Business may now be conducted on Continental grounds.{\r}
Dialogue: 0,1:28:27.48,1:28:29.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}既然你拒绝退位{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Since you are refusing to step down{\r}
Dialogue: 0,1:28:29.55,1:28:34.12,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而你拒绝了一个直接命令  你们的生命现在已被没收{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and you are refusing a direct order, your lives are now forfeit.{\r}
Dialogue: 0,1:28:34.22,1:28:36.25,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌特使现将抵达{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}High Table emissaries will be joining you presently{\r}
Dialogue: 0,1:28:36.35,1:28:39.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}检视将你们的灵魂移出肉体的过程{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}to see the removal of your souls from the property.{\r}
Dialogue: 0,1:28:40.29,1:28:42.49,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}晚上好  先生们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good evening, gentlemen.{\r}
Dialogue: 0,1:28:46.33,1:28:49.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}这个避风港不再安全了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}This haven is safe no more.{\r}
Dialogue: 0,1:28:52.44,1:28:55.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那我还是不能使用相关服务吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Are services still off limits to me?{\r}
Dialogue: 0,1:28:56.04,1:28:57.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在这种情况下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Under the circumstances,{\r}
Dialogue: 0,1:28:57.31,1:28:59.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}您的特权将即刻恢复{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}your privileges are reinstated immediately.{\r}
Dialogue: 0,1:28:59.38,1:29:00.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你需要什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What do you need?{\r}
Dialogue: 0,1:29:01.41,1:29:04.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}枪  很多枪{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Guns. Lots of guns.{\r}
Dialogue: 0,1:29:23.03,1:29:25.24,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们来提款吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let's make a withdrawal.{\r}
Dialogue: 0,1:29:49.06,1:29:50.36,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}记住了  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Remember, sir.{\r}
Dialogue: 0,1:29:50.46,1:29:52.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那将是高台桌的势力{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}These will be High Table forces.{\r}
Dialogue: 0,1:29:52.83,1:29:55.63,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们或许应该谨慎地考虑我们的选择{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We may have to consider our choices carefully.{\r}
Dialogue: 0,1:29:56.10,1:29:57.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为什么{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Why?{\r}
Dialogue: 0,1:29:57.33,1:29:59.30,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}您不在的时间里  很多事情变了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Much has changed during your time away.{\r}
Dialogue: 0,1:29:59.94,1:30:00.97,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}比如说?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Like what?{\r}
Dialogue: 0,1:30:01.07,1:30:04.17,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嗯  就是说他们做了护甲强化{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well, let us say they have made armor improvements.{\r}
Dialogue: 0,1:30:11.78,1:30:15.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我想推荐 STI 2011 战斗大师{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}May I suggest the 2011 Combat Master{\r}
Dialogue: 0,1:30:15.75,1:30:18.39,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}结合9毫米弹夹{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}in combination with the nine millimeter major.{\r}
Dialogue: 0,1:30:29.63,1:30:31.30,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所有宾客请注意{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Attention, all guests.{\r}
Dialogue: 0,1:30:31.40,1:30:34.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}大陆酒店正在关闭以便消毒{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Continental Hotel is closing for fumigation.{\r}
Dialogue: 0,1:30:34.77,1:30:36.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对您造成不便  我们深表歉意{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We apologize for the inconvenience.{\r}
Dialogue: 0,1:30:36.61,1:30:38.84,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}请前往离您最近的出口{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Please make your way to the nearest exit.{\r}
Dialogue: 0,1:30:43.48,1:30:46.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所有宾客请注意  大陆酒店...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Attention, all guests. The Continental Hotel...{\r}
Dialogue: 0,1:30:46.25,1:30:49.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看起来情况似乎朝着对你有利的方向变化了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}It seems circumstances have changed in your favor.{\r}
Dialogue: 0,1:30:50.02,1:30:51.45,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你的业务现在可以{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Your transaction may now be conducted{\r}
Dialogue: 0,1:30:51.55,1:30:53.46,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在大陆酒店进行了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}on Continental grounds.{\r}
Dialogue: 0,1:30:58.86,1:31:02.20,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们将会派出一些最好的部下提供额外支援{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We'll be sending some of our finest for additional support.{\r}
Dialogue: 0,1:31:02.30,1:31:05.44,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好  非常好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Cool. Very cool.{\r}
Dialogue: 0,1:31:10.11,1:31:14.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}8.1克 434米每秒{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}125 grain, 1,425 feet per second.{\r}
Dialogue: 0,1:31:15.01,1:31:16.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}办正事用的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Serious business.{\r}
Dialogue: 0,1:31:20.12,1:31:21.58,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谢谢你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Thank you.{\r}
Dialogue: 0,1:31:21.68,1:31:23.39,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}让我们开始吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let us begin.{\r}
Dialogue: 0,1:33:09.46,1:33:12.56,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}卡戎  你能帮我们的新客人营造一下气氛吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Charon, would you help set the mood for our new guests?{\r}
Dialogue: 0,1:33:13.23,1:33:14.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}非常乐意  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Of course, sir.{\r}
Dialogue: 0,1:33:35.95,1:33:38.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道你会是大陆酒店的骄傲{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know you'll do the Continental proud.{\r}
Dialogue: 0,1:33:39.06,1:33:40.72,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我会很快再见到您  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'll see you soon, sir.{\r}
Dialogue: 0,1:33:43.49,1:33:47.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而你  乔纳森  做你最拿手的事情{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And you, Jonathan, do what you do best.{\r}
Dialogue: 0,1:33:47.20,1:33:48.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What's that?{\r}
Dialogue: 0,1:33:49.07,1:33:50.67,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}猎杀{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hunt.{\r}
Dialogue: 0,1:34:03.92,1:34:07.21,Default,,0000,0000,0016,,{\fad(1000,1000)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}若求{\1c&HD9F049&}和平{\r}
Dialogue: 0,1:34:08.50,1:34:10.00,Default,,0000,0000,0016,,{\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}必先{\1c&HD9F049&}备战{\r}
Dialogue: 0,1:37:24.11,1:37:27.35,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}温斯顿!  温斯顿!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Winston! Winston!{\r}
Dialogue: 0,1:37:31.42,1:37:33.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我需要更多火力{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I need more firepower.{\r}
Dialogue: 0,1:37:56.58,1:37:58.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}护甲提升{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Armor improvements.{\r}
Dialogue: 0,1:37:58.58,1:38:01.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}12号钢弹  穿甲{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}12-gauge steel slugs. Armor-piercing.{\r}
Dialogue: 0,1:41:25.98,1:41:27.98,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}除了我没人能杀死你{\r}
Dialogue: 0,1:41:29.20,1:41:31.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你只能死在我的刀下  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Only by my sword, John.{\r}
Dialogue: 0,1:41:43.24,1:41:45.57,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我知道你觉得你可以继续这样下去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I know you believe you can keep this up.{\r}
Dialogue: 0,1:41:45.67,1:41:46.81,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但我保证你...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But I assure you...{\r}
Dialogue: 0,1:45:49.21,1:45:52.01,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}你好啊  威克先生{\r}
Dialogue: 1,1:45:53.80,1:45:56.16,Default,,0000,0000,0016,,{\blur3\fsp0.5\fscy110\b1}和你战斗是我的荣幸  威克先生{\r}
Dialogue: 0,1:46:27.83,1:46:29.92,Default,,0000,0000,0016,,{\fad(0,500)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}他变慢了{\r}
Dialogue: 1,1:46:29.92,1:46:33.55,Default,,0000,0000,0016,,{\fad(0,1500)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(150,250,150,282)\t(0,900,1,\clip(150,250,240,282))}曾经退休很多年{\r}
Dialogue: 0,1:46:33.55,1:46:36.90,Default,,0000,0000,0016,,{\fad(0,500)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(130,250,130,282)\t(0,900,1,\clip(130,250,260,282))}但他仍然是{\1c&HFBEE48&}约翰·威克{\r}
Dialogue: 1,1:46:36.92,1:46:38.80,Default,,0000,0000,0016,,{\fad(0,500)\blur3\fnSimHei\fs14\1c&HFFFFFF&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}我们会知道的{\r}
Dialogue: 0,1:49:20.67,1:49:24.08,Default,,0000,0000,0016,,{\fad(0,1000)\blur3\fnSimHei\fs14\1c&H330084&\b1\i1}{\clip(158,250,158,282)\t(0,900,1,\clip(158,250,240,282))}回见{\r}
Dialogue: 0,1:49:51.93,1:49:54.86,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰  你真是不可思议{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}John, you're incredible.{\r}
Dialogue: 0,1:49:55.80,1:49:56.90,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}筋疲力尽{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Exhausted,{\r}
Dialogue: 0,1:49:57.30,1:49:59.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}数量压制{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}outnumbered...{\r}
Dialogue: 0,1:49:59.17,1:50:00.70,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}显然处于痛苦之中{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Obviously in pain.{\r}
Dialogue: 0,1:50:01.64,1:50:04.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而你仍然打败了我所有的学生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And you still beat all of my students.{\r}
Dialogue: 0,1:50:04.41,1:50:06.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果我不是一定得杀了你{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}If I didn't have to kill you,{\r}
Dialogue: 0,1:50:07.01,1:50:09.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们会成为朋友的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}we'd be pals.{\r}
Dialogue: 0,1:50:10.05,1:50:11.65,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}来吧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let's do this.{\r}
Dialogue: 0,1:50:39.17,1:50:41.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}看到了?  我们是一样的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}See? We're the same.{\r}
Dialogue: 0,1:54:28.54,1:54:31.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我建议我们谈判一下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I would like to suggest a parley.{\r}
Dialogue: 0,1:54:31.31,1:54:32.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}谈判是个不错的选择{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A parley would be good.{\r}
Dialogue: 0,1:54:33.04,1:54:34.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}非常好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well.{\r}
Dialogue: 0,1:54:45.42,1:54:47.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们在演戏吗  先生?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Are we in play, sir?{\r}
Dialogue: 0,1:54:48.69,1:54:50.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  当然是了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, very much so.{\r}
Dialogue: 0,1:55:09.58,1:55:11.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嘿  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hey, John.{\r}
Dialogue: 0,1:55:13.52,1:55:16.05,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}打得很尽兴  对吧?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}That was a pretty good fight, huh?{\r}
Dialogue: 0,1:55:19.75,1:55:21.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是啊{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah.{\r}
Dialogue: 0,1:55:50.59,1:55:52.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是啊{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah.{\r}
Dialogue: 0,1:55:52.52,1:55:55.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}别担心我  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Don't worry about me, John.{\r}
Dialogue: 0,1:55:56.02,1:55:58.33,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我只是喘口气而已{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I just gotta catch my breath.{\r}
Dialogue: 0,1:56:00.03,1:56:01.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我很快就会追上你了  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I'll catch up to you, John.{\r}
Dialogue: 0,1:56:06.90,1:56:09.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不  你不行{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}No, you won't.{\r}
Dialogue: 0,1:56:19.35,1:56:20.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你  先生  当然{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You gentlemen, of course,{\r}
Dialogue: 0,1:56:20.65,1:56:22.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}意识到了这只是第一波{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}realize that was the first wave.{\r}
Dialogue: 0,1:56:22.88,1:56:25.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不过是开胃小菜{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Merely an amuse-bouche.{\r}
Dialogue: 0,1:56:25.32,1:56:26.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}只要你愿意  我们可以永远继续下去{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We can keep this up as long as you'd like,{\r}
Dialogue: 0,1:56:27.06,1:56:28.76,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但这件事只能以一个方式结束{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}but it only ends one way.{\r}
Dialogue: 0,1:56:28.86,1:56:31.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你确定持久战是最好的前进方式吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Are you sure a protracted war is the best way forward?{\r}
Dialogue: 0,1:56:31.33,1:56:33.73,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}不会有什么"持久战"的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}There won't be anything "protracted" about it.{\r}
Dialogue: 0,1:56:33.83,1:56:34.96,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  你可以拿走大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, you can take the Continental,{\r}
Dialogue: 0,1:56:35.06,1:56:36.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我对此没有意见{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have no doubt about that.{\r}
Dialogue: 0,1:56:36.20,1:56:38.43,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但保留它  这是完全不同的一件事{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But keeping it, that's a different matter entirely.{\r}
Dialogue: 0,1:56:38.53,1:56:42.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我的拥趸远远超过这栋大楼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}My allegiances run way beyond this building.{\r}
Dialogue: 0,1:56:42.77,1:56:44.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们是高台桌{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}We are High Table.{\r}
Dialogue: 0,1:56:45.17,1:56:46.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而我们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And we{\r}
Dialogue: 0,1:56:47.54,1:56:49.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}是纽约城{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}are New York City.{\r}
Dialogue: 0,1:56:50.18,1:56:52.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们这样是在谈判吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Are we negotiating?{\r}
Dialogue: 0,1:56:54.12,1:56:55.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嗯{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hmm.{\r}
Dialogue: 0,1:56:55.68,1:56:57.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我认为是这样没错{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I believe we are.{\r}
Dialogue: 0,1:57:02.82,1:57:04.03,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}和谈?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Parley?{\r}
Dialogue: 0,1:57:04.73,1:57:06.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}和谈{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Parley.{\r}
Dialogue: 0,1:57:09.43,1:57:11.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你想要我们做什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What do you propose we do?{\r}
Dialogue: 0,1:57:15.87,1:57:18.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}让我保留我的势力{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let me keep my power.{\r}
Dialogue: 0,1:57:18.51,1:57:19.81,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}在高台桌之下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Under the Table.{\r}
Dialogue: 0,1:57:22.58,1:57:24.01,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我曾经{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I have served{\r}
Dialogue: 0,1:57:24.11,1:57:26.92,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}作为秩序和稳定的灯塔{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and been a beacon of order and stability{\r}
Dialogue: 0,1:57:27.02,1:57:28.98,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为我们的行业服务了40余年{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}to our industry for over 40 years.{\r}
Dialogue: 0,1:57:29.08,1:57:31.42,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}现在  我谦虚地承认我越界了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Now, I humbly acknowledge I overstepped{\r}
Dialogue: 0,1:57:31.52,1:57:34.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}并重新宣誓我对高台桌的效忠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and re-pledge my fealty to the High Table.{\r}
Dialogue: 0,1:57:37.19,1:57:38.59,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}温斯顿{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Winston.{\r}
Dialogue: 0,1:57:44.13,1:57:45.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你只是在展示力量{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You were merely showing strength{\r}
Dialogue: 0,1:57:45.87,1:57:48.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}好使我们让你留着大陆酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}so we would let you keep the Continental.{\r}
Dialogue: 0,1:57:51.97,1:57:55.11,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌接受你的效忠{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The High Table accepts your fealty.{\r}
Dialogue: 0,1:57:56.34,1:57:57.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那么他呢?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But what about him?{\r}
Dialogue: 0,1:57:59.78,1:58:03.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}对于约翰·威克  我们应该做什么?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}What are we going to do about John Wick?{\r}
Dialogue: 0,1:58:08.76,1:58:10.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  他必须死{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, he has to die.{\r}
Dialogue: 0,1:58:11.93,1:58:13.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}- 对不起  乔纳森  - 温斯顿!{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Sorry, Jonathan.  Winston!{\r}
Dialogue: 0,1:58:13.90,1:58:15.06,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}没有别的路可走了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Don't see any other way.{\r}
Dialogue: 0,1:58:27.04,1:58:28.78,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}很好  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Very well, gentlemen.{\r}
Dialogue: 0,1:58:28.88,1:58:32.28,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}大陆酒店现在将重新开始运营{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The Continental will now be reconsecrated.{\r}
Dialogue: 0,1:58:33.08,1:58:35.15,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}祝你们二位都好{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Good day to you both.{\r}
Dialogue: 0,1:58:38.92,1:58:40.89,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}演得不错  先生{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Well played, sir.{\r}
Dialogue: 0,1:59:15.99,1:59:18.89,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你觉得我们再营业还需要多久?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How long do you estimate until we reopen?{\r}
Dialogue: 0,1:59:18.99,1:59:20.93,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  应该一点时间也不用{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, should be no time at all.{\r}
Dialogue: 0,1:59:24.73,1:59:26.53,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}威克先生已经走了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mr. Wick is gone.{\r}
Dialogue: 0,1:59:26.63,1:59:28.47,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}真正的悲剧{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}A true tragedy.{\r}
Dialogue: 0,1:59:28.57,1:59:29.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你理解错了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You misunderstand.{\r}
Dialogue: 0,1:59:29.90,1:59:32.77,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我的意思是他从街上消失了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I mean that he is no longer on the street.{\r}
Dialogue: 0,1:59:32.87,1:59:33.94,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}听起来有点荒谬{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}That seems improbable.{\r}
Dialogue: 0,1:59:34.04,1:59:35.48,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但是这是事实{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And yet, true.{\r}
Dialogue: 0,1:59:36.98,1:59:39.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我相信你理解他如果活下来的后果{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I trust you understand the repercussions if he survives.{\r}
Dialogue: 0,1:59:39.85,1:59:42.02,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}从上到下{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Both from above and below.{\r}
Dialogue: 0,1:59:42.12,1:59:43.55,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我们最不需要的{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}The last thing either one of us needs{\r}
Dialogue: 0,1:59:43.65,1:59:46.29,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}就是威克先生晚上来拜访我们{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}is Mr. Wick paying us a visit in the night.{\r}
Dialogue: 0,1:59:48.79,1:59:50.89,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}为了我们两人的安危  我希望你注意这件事{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}For both our sakes, I'll hope you see to it{\r}
Dialogue: 0,1:59:50.99,1:59:53.16,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}解决这个状况  好吗?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}that this situation is taken care of, yes?{\r}
Dialogue: 0,1:59:53.26,1:59:57.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然  他能走多远呢?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Absolutely. How far can he get?{\r}
Dialogue: 0,2:00:08.84,2:00:10.41,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}雅加婆婆{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Baba Yaga.{\r}
Dialogue: 0,2:00:22.86,2:00:24.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}唔{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Mmm.{\r}
Dialogue: 0,2:00:41.48,2:00:43.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你怎么样  约翰?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How you doing, John?{\r}
Dialogue: 0,2:00:44.01,2:00:46.75,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你看起来和我的感觉一样糟{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You look as bad as I feel.{\r}
Dialogue: 0,2:00:48.65,2:00:51.22,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}约翰尼  约翰尼  约翰尼{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Johnny, Johnny, Johnny.{\r}
Dialogue: 0,2:00:51.32,2:00:53.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果能听到我你就举个手  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Raise a hand if you can hear me, John.{\r}
Dialogue: 0,2:00:56.32,2:00:59.19,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  妈的  他们拿走了一根手指{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, shit. They took a finger.{\r}
Dialogue: 0,2:00:59.29,2:01:02.10,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}真是个婊子{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Ain't that a bitch?{\r}
Dialogue: 0,2:01:07.34,2:01:11.21,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}哦  约翰他妈的威克{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Oh, John fucking Wick.{\r}
Dialogue: 0,2:01:11.31,2:01:13.91,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}所以那老小子留下了他的酒店{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So, the old boy keeps his hotel{\r}
Dialogue: 0,2:01:14.01,2:01:15.51,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而你从楼上掉了下来{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}and you take the fall.{\r}
Dialogue: 0,2:01:15.61,2:01:16.68,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}也不能说我责怪他{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Can't say I blame him.{\r}
Dialogue: 0,2:01:16.78,2:01:19.31,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}如果我站在他的立场上  我也会做同样的事{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}I would've done the same thing if I was in his shoes.{\r}
Dialogue: 0,2:01:20.05,2:01:22.82,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}但这个狗屁高台桌...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}But this High Table shit...{\r}
Dialogue: 0,2:01:25.82,2:01:27.62,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}七刀{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Seven cuts.{\r}
Dialogue: 0,2:01:30.99,2:01:33.80,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}高台桌之下就是干这种鸟事的地方{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Under the Table is where shit gets done.{\r}
Dialogue: 0,2:01:35.46,2:01:38.37,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}而他们将会发现  如果要对一个国王动刀子{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}And they're about to find out, if you cut a king,{\r}
Dialogue: 0,2:01:38.47,2:01:41.07,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}最好对着要害切{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}you better cut him to the quick.{\r}
Dialogue: 0,2:01:45.57,2:01:47.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}那么...{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}So...{\r}
Dialogue: 0,2:01:49.38,2:01:51.38,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}我来问问你  约翰{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Let me ask you, John.{\r}
Dialogue: 0,2:01:51.85,2:01:53.08,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你感觉怎么样?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}How do you feel?{\r}
Dialogue: 0,2:01:55.38,2:01:59.85,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}因为我真的被惹火了{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}'Cause I am really pissed off.{\r}
Dialogue: 0,2:02:00.66,2:02:02.49,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}你生气吗  约翰?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}You pissed, John?{\r}
Dialogue: 0,2:02:02.59,2:02:03.79,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}嗯?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Hmm?{\r}
Dialogue: 0,2:02:03.89,2:02:05.23,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}怎样?{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Are you?{\r}
Dialogue: 0,2:02:14.87,2:02:16.64,Default,,0000,0000,0000,,{\blur3\fsp0.5\fscy110\b1}当然{\r}\N{\blur3\fnCronos Pro Subhead\fs14\1c&H3EA8DA&}Yeah.{\r}



*/};