function checkForm(){

		var uname=document.getElementById("uname").value;
		var pwd=document.getElementById("pwd").value;
		if(uname==null||uname==""){
			alert("帐号不能为空！");
			return false;
		}
		if(pwd==null||pwd==""){		
			alert("密码不能为空！");
			return false;
		}
		if(uname!="pym1203"||pwd!="123456"){		
			alert("账号或密码错误！");
			return false;
		}
		return true;
}