var text = function() {/*

[Script Info]
;SrtEdit 6.3.2012.1001
;Copyright(C) 2005-2012 Yuan Weiguo

Title: 漫游字幕
Original Script: 漫游字幕组
Original Translation: 
Original Timing: 
Original Editing: 
Script Updated By: 
Update Details: 
ScriptType: v4.00+
Collisions: Normal
PlayResX: 640
PlayResY: 360
Timer: 100.0000
Synch Point: 0
WrapStyle: 0
ScaledBorderAndShadow: no

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: *Default,Arial,18,&H00FFFFFF,&H0000FFFF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,0,2,3,2,20,20,20,0
Style: Default,verdana,25,&H00FFFFFF,&HF0000000,&H00000000,&HF0000000,-1,0,0,0,100,100,0,0,1,1,0,2,30,30,10,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.09,0:00:01.89,Default,,0000,0000,0000,,{\fad(0,1500)\fn楷体_GB2312\b6\bord0\shad1\fs24\pos(310,200)\K40}☆独家制作☆\N\N{\fn楷体_GB2312\b8\fs26\shad2\4a&H50&\1c&HFFFFFF&\3c&HFF8080&\4c&HFF8000&\K30}喜马拉雅主播:美国青少年英语\N\N{\c&H26F4FF&\fn楷体_GB2312\K30}{\fs22\K30}仅供交流学习  禁止商用盈利{\c&H26F4FF&\fnKaiTi\K30}
Dialogue: 0,0:00:00.42,0:00:05.25,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}The One Where Monica Gets A New Roommate{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}六人行 第1季 第01集 莫妮卡的新室友{\r}
Dialogue: 0,0:00:06.70,0:00:11.23,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ So no one told you life was gonna be this way ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 没有人告诉你活着有多累 ♪{\r}
Dialogue: 0,0:00:11.77,0:00:15.94,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ Your job's a joke, you're broke, your love life's D.O.A. ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 上班受罪  口袋空空  爱情变累赘 ♪{\r}
Dialogue: 0,0:00:14.79,0:00:16.24,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：詹妮弗·安妮斯顿）{\r}
Dialogue: 0,0:00:16.85,0:00:20.66,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ It's like you're always stuck in second gear ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 寂寞又潦倒  受气又受累 ♪{\r}
Dialogue: 0,0:00:17.66,0:00:19.03,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：柯特妮·考克斯）{\r}
Dialogue: 0,0:00:21.12,0:00:23.22,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ When it hasn't been your day, ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 日复一日  年复一年 ♪{\r}
Dialogue: 0,0:00:21.38,0:00:23.04,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：丽莎·库卓）{\r}
Dialogue: 0,0:00:23.22,0:00:26.22,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ your week, your month, or even your year ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 时运不济  活着受罪 ♪{\r}
Dialogue: 0,0:00:26.22,0:00:30.18,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ but I'll be there for you ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 你我永不离弃 ♪{\r}
Dialogue: 0,0:00:26.84,0:00:28.33,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：马特·勒布朗）{\r}
Dialogue: 0,0:00:30.18,0:00:32.01,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ When the rain starts to pour ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 纵有狂风暴雨 ♪{\r}
Dialogue: 0,0:00:31.14,0:00:32.84,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：马修·派瑞）{\r}
Dialogue: 0,0:00:32.01,0:00:35.13,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ I'll be there for you ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 你我永不离弃 ♪{\r}
Dialogue: 0,0:00:35.10,0:00:36.68,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（主演：大卫·修蒙）{\r}
Dialogue: 0,0:00:35.13,0:00:36.97,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ Like I've been there before ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 支持一如往昔 ♪{\r}
Dialogue: 0,0:00:36.97,0:00:39.98,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}♪ I'll be there for you ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 你我永不离弃 ♪{\r}
Dialogue: 0,0:00:39.98,0:00:43.64,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&} ♪ 'Cause you're there for me too ♪{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}♪ 你我相偎相依 ♪{\r}
Dialogue: 0,0:00:51.63,0:00:54.69,Default,,0000,0000,0000,,{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}（中央咖啡厅）{\r}
Dialogue: 0,0:00:55.42,0:00:59.25,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}There's nothing to tell. It's just some guy I work with.{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}没什么好说的！ 他不过是我的同事！{\r}
Dialogue: 0,0:00:59.45,0:01:01.58,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}You're going out with the guy.{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}少来了，你和那个人一起出去！{\r}
Dialogue: 0,0:01:01.79,0:01:04.38,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}There has to be something wrong with him.{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}和你交往的男人一定有问题！{\r}
Dialogue: 0,0:01:04.59,0:01:06.65,Default,,0000,0000,0000,,{\fs22\bord2\3c&HFF8000&}All right,Joey. Be nice.{\r}\N{\fn楷体_GB2312\fs18\bord1\3c&HFF8000&}打住，乔伊，嘴下留德{\r}

*/};