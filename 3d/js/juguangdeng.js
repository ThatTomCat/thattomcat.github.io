//聚光灯延时
var getID=document.getElementById("geci");
var afterStyle=window.getComputedStyle(getID,":after");

setTimeout(juguangdeng,7300);
setTimeout(flashing,7300);

function juguangdeng(){
	document.getElementById("juguangdeng").style="display:inline-block;";
	setTimeout(juguangdeng_1,1950);
}
function flashing(){
	document.getElementById("flashing").style="display:inline-block;";
	setTimeout(flashing_2,300);
}

//屏幕闪烁1~4
function flashing_1(){
	document.getElementById("flashing").style="background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);";
	setTimeout(flashing_2,300);
}

function flashing_2(){
	document.getElementById("flashing").style="background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);";
	setTimeout(flashing_3,300);
}

function flashing_3(){
	document.getElementById("flashing").style="background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);";
	setTimeout(flashing_4,300);
}

function flashing_4(){
	document.getElementById("flashing").style="background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);";
	setTimeout(flashing_1,300);
}

//歌词
/*
function juguangdeng_1(){
	document.getElementById("juguangdeng").style="left:29%;";
    getID.setAttribute("data-spotlight","你已经不在身边");
	document.getElementById("geci").innerHTML="你已经不在身边";
	setTimeout(juguangdeng_2,1950);
}

function juguangdeng_2(){
	document.getElementById("juguangdeng").style="left:32%;";
    getID.setAttribute("data-spotlight","我却彻夜想念");
	document.getElementById("geci").innerHTML="我却彻夜想念";
	setTimeout(juguangdeng_3,3500);
}

function juguangdeng_3(){
    document.getElementById("juguangdeng").style="left:29%;";
    getID.setAttribute("data-spotlight","走不出自责空间");
	document.getElementById("geci").innerHTML="走不出自责空间";
	setTimeout(juguangdeng_4,2000);
}

function juguangdeng_4(){
	document.getElementById("juguangdeng").style="left:29%;";
    getID.setAttribute("data-spotlight","沉溺于我们昨天");
	document.getElementById("geci").innerHTML="沉溺于我们昨天";
	setTimeout(juguangdeng_5,1950);
}

function juguangdeng_5(){
	document.getElementById("juguangdeng").style="left:29%;";
    getID.setAttribute("data-spotlight","还能不能相见~");
	document.getElementById("geci").innerHTML="还能不能相见~";
	setTimeout(juguangdeng_6,3000);
}



function juguangdeng_6(){
	afterStyle.style="background-image: url(../img/渐变.png);";
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","（￣～￣）____________");
	document.getElementById("geci").innerHTML="（￣～￣）____________";
	 
	setTimeout(juguangdeng_7,500);
}

function juguangdeng_7(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_（￣～￣）___________");
	document.getElementById("geci").innerHTML="_（￣～￣）___________";
	setTimeout(juguangdeng_8,100);
}

function juguangdeng_8(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","__（￣～￣）__________");
	document.getElementById("geci").innerHTML="__（￣～￣）__________";
	setTimeout(juguangdeng_9,100);
}

function juguangdeng_9(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","___（￣～￣）_________");
	document.getElementById("geci").innerHTML="___（￣～￣）_________";
	setTimeout(juguangdeng_10,100);
}

function juguangdeng_10(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","____（￣～￣）________");
	document.getElementById("geci").innerHTML="____（￣～￣）________";
	setTimeout(juguangdeng_11,100);
}

function juguangdeng_11(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_____（￣～￣）_______");
	document.getElementById("geci").innerHTML="_____（￣～￣）_______";
	setTimeout(juguangdeng_12,100);
}

function juguangdeng_12(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","______（￣～￣）______");
	document.getElementById("geci").innerHTML="______（￣～￣）______";
	setTimeout(juguangdeng_13,100);
}

function juguangdeng_13(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_______（￣～￣）_____");
	document.getElementById("geci").innerHTML="_______（￣～￣）_____";
	setTimeout(juguangdeng_14,100);
}

function juguangdeng_14(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","________（￣～￣）____");
	document.getElementById("geci").innerHTML="________（￣～￣）____";
	setTimeout(juguangdeng_15,100);
}

function juguangdeng_15(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_________（￣～￣）___");
	document.getElementById("geci").innerHTML="_________（￣～￣）___";
	setTimeout(juguangdeng_16,100);
}

function juguangdeng_16(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","__________（￣～￣）__");
	document.getElementById("geci").innerHTML="__________（￣～￣）__";
	setTimeout(juguangdeng_17,100);
}

function juguangdeng_17(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","___________（￣～￣）_");
	document.getElementById("geci").innerHTML="___________（￣～￣）_";
	setTimeout(juguangdeng_18,100);
}

function juguangdeng_18(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","____________（￣～￣）");
	document.getElementById("geci").innerHTML="____________（￣～￣）";
	setTimeout(juguangdeng_19,100);
}

function juguangdeng_19(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_____________（￣～￣）_");
	document.getElementById("geci").innerHTML="_____________（￣～￣）_";
	setTimeout(juguangdeng_20,100);
}

function juguangdeng_20(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","______________（￣～￣）");
	document.getElementById("geci").innerHTML="______________（￣～￣）";
	setTimeout(juguangdeng_21,1000);
}

function juguangdeng_35(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","（￣～￣）____________");
	document.getElementById("geci").innerHTML="（￣～￣）____________";
	 
	setTimeout(juguangdeng_6,500);
}

function juguangdeng_34(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_（￣～￣）___________");
	document.getElementById("geci").innerHTML="_（￣～￣）___________";
	setTimeout(juguangdeng_35,100);
}

function juguangdeng_33(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","__（￣～￣）__________");
	document.getElementById("geci").innerHTML="__（￣～￣）__________";
	setTimeout(juguangdeng_34,100);
}

function juguangdeng_32(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","___（￣～￣）_________");
	document.getElementById("geci").innerHTML="___（￣～￣）_________";
	setTimeout(juguangdeng_33,100);
}

function juguangdeng_31(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","____（￣～￣）________");
	document.getElementById("geci").innerHTML="____（￣～￣）________";
	setTimeout(juguangdeng_32,100);
}

function juguangdeng_30(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_____（￣～￣）_______");
	document.getElementById("geci").innerHTML="_____（￣～￣）_______";
	setTimeout(juguangdeng_31,100);
}

function juguangdeng_29(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","______（￣～￣）______");
	document.getElementById("geci").innerHTML="______（￣～￣）______";
	setTimeout(juguangdeng_30,100);
}

function juguangdeng_28(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_______（￣～￣）_____");
	document.getElementById("geci").innerHTML="_______（￣～￣）_____";
	setTimeout(juguangdeng_29,100);
}

function juguangdeng_27(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","________（￣～￣）____");
	document.getElementById("geci").innerHTML="________（￣～￣）____";
	setTimeout(juguangdeng_28,100);
}

function juguangdeng_26(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_________（￣～￣）___");
	document.getElementById("geci").innerHTML="_________（￣～￣）___";
	setTimeout(juguangdeng_27,100);
}

function juguangdeng_25(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","__________（￣～￣）__");
	document.getElementById("geci").innerHTML="__________（￣～￣）__";
	setTimeout(juguangdeng_26,100);
}

function juguangdeng_24(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","___________（￣～￣）_");
	document.getElementById("geci").innerHTML="___________（￣～￣）_";
	setTimeout(juguangdeng_25,100);
}

function juguangdeng_23(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","____________（￣～￣）");
	document.getElementById("geci").innerHTML="____________（￣～￣）";
	setTimeout(juguangdeng_24,100);
}

function juguangdeng_22(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","_____________（￣～￣）_");
	document.getElementById("geci").innerHTML="_____________（￣～￣）_";
	setTimeout(juguangdeng_23,100);
}

function juguangdeng_21(){
	document.getElementById("juguangdeng").style="left:15%;";
    getID.setAttribute("data-spotlight","______________（￣～￣）");
	document.getElementById("geci").innerHTML="______________（￣～￣）";
	setTimeout(juguangdeng_22,1000);
}

*/
