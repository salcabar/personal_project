var links = new Array();
var imgs = new Array();
for(var n = 1; n <= 4; n++) imgs[n] = new Image();
imgs[1].src = "./images/map.png";
imgs[2].src = "./images/map.png";
imgs[3].src = "./images/map.png";
imgs[4].src = "./images/map.png";
var imgwidth = 458;//ͼƬ���
var imgheight = 259;//ͼƬ�߶�

//============================= edit by gaoxy =================================================
var PicNum = 3; //����ͼƬ����,Ҫ���Ϸ������ȷ����������ͼƬ����ͬ,����Ҫ���ڵ���1
var ScollTimes = 2000;//ͼƬ�Զ�����ʱ�䣬��λΪ����
var NumberPostion = 2;// 0���� 1 ���� 2 ���� 3 ���� 
var TitleName = 1;// 0 �У�1�� ͼƬ�·�����������
//˵���������������ͼƬ�·�������������ƶ���ͼƬʱ����ʾ����ͬ����
var titles = new Array(); //����ƶ���ͼƬʱ����ʾ
titles[1] = "��1��ͼƬ";
titles[2] = "��2��ͼƬ";
titles[3] = "��3��ͼƬ";
titles[4] = "��4��ͼƬ";

var strstyle = "";
switch(NumberPostion)
{ 
	
	case 0:{
		strstyle = "<style type='text/css'>#imgnv{position:absolute;bottom:18px;left:0px}";
		break;
	}
case 1:{
	strstyle = "<style type='text/css'>#imgnv{position:absolute;bottom:18px;right:0px}";
	break;
	}
case 2:{
	strstyle= "<style type='text/css'>#imgnv{position:absolute;Top:0px;left:0px}";
	break;
	}
case 3:{
	strstyle = "<style type='text/css'>#imgnv{position:absolute;Top:0px;right:0px}";
	break;
	}
	default:
	{
		strstyle = "<style type='text/css'>#imgnv{position:absolute;bottom:22px;left:0px}";
		break;
	}

}

var str= strstyle;
str += "#imgnv div.on,#imgnv div.off{display:inline;float:left;margin-right:1px;width:20px;height:15px;line-height:18px!important;line-height:15px;font-size:9px;text-align:center;cursor:pointer;cursor:hand}";
str += "#imgnv div.on{background:#CE0609;color:#FFF;font-weight:bold}";
str += "#imgnv div.off{background:#323232;color:#FFF;text-decoration:none}";
str += "#titnv{margin-bottom:3px;color:#000}";
str += "</style>";
str += "<div style='position:absolute'>";
str += "<div><a id='dlink' href='" + links[1] + "' target='_blank'><img id='dimg' title ='"+titles[1]+"' src='" + imgs[1].src + "' border='0' height='"+imgheight+"' width='" + imgwidth + "' style='filter:Alpha(opacity=100)' onmouseover='Pause(true)' onmouseout='Pause(false)'></a></div><div id='imgnv'>";

for(var picn=1;picn<PicNum+1;picn++)
{
	
	if(picn==1)
	{ 
		str += "<div id='it"+picn+"'  title ='+titles["+picn+"]' class='on' onmouseover='ImgSwitch("+picn+", true)' onmouseout='Pause(false)'>"+picn+"</div>";

		
	}
	else
	{
		str += "<div id='it"+picn+"'  title ='+titles["+picn+"]' class='off' onmouseover='ImgSwitch("+picn+", true)' onmouseout='Pause(false)'>"+picn+"</div>";
	}
}
if(TitleName==0)//�Ƿ���ͼƬ�·���ʾ��������
{
	str += "</div><div id='PicDisc' align='center' style='font-size:12px;text-align:center;' >"+ titles[1]+"</div>";
}
else
{
	str += "</div>"; 
}
document.write(str);

var oi = document.getElementById("dimg");
var pause = false;
var curid = 1;
var lastid = 1;
var sw = 1;
var opacity = 100;
var speed = 15;
var delay = (document.all)? 400:700;

function SetAlpha()
{
	if(document.all){
	if(oi.filters && oi.filters.Alpha) oi.filters.Alpha.opacity = opacity;
	}else{
	oi.style.MozOpacity = ((opacity >= 100)? 99:opacity) / 100;
	}
}

function ImgSwitch(id, p)
{
	if(p){
	pause = true;
	opacity = 100;
	SetAlpha();
	}
	oi.src = imgs[id].src;
	document.getElementById("dlink").href = links[id];
	document.getElementById("it" + lastid).className = "off";
	document.getElementById("it" + id).className = "on"; 
	document.getElementById("dimg").title = titles[id];
	if(TitleName==0)//�Ƿ���ͼƬ�·���ʾ��������
	{
		document.getElementById("PicDisc").innerHTML = "<b>" + titles[id] + "</b>"; 
	}
	curid = lastid = id;
}

function ScrollImg()
{
	if(pause && opacity >= 100) return;
	if(sw == 0){
	opacity += 2;
	if(opacity > delay){ opacity = 100; sw = 1; }
	}
	if(sw == 1){
	opacity -= 3;
	if(opacity < 10){ opacity = 10; sw = 3; }
	}
	SetAlpha();
	if(sw != 3) return;
	sw = 0;
	curid++;
	if(curid > PicNum) curid = 1;
	//==== add by gaoxy
	document.getElementById("dimg").title = titles[curid];
	//=======
	ImgSwitch(curid, false);
}

function Pause(s)
{
	pause = s;
}

function StartScroll()
{
	setInterval(ScrollImg, speed);
}

function CheckLoad()
{
	if (imgs[1].complete == true && imgs[2].complete == true) 
	{
		clearInterval(checkid);
		setTimeout(StartScroll, ScollTimes);
	}
}

var checkid = setInterval(CheckLoad, 10);