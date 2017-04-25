window.onload = function()
{
		
		var num1 = document.getElementsByClassName('n1')[0];
		var num2 = document.getElementsByClassName('n2')[0];
		var oper = document.getElementsByClassName('op')[0];
		function calc(num1,num2)
			{
				var oper1 = oper.toString();	
				sum = num1+num2;
				mult = num1*num2;
				del = num1/num2;
				diff = num1-num2;
				switch(oper1)
					{
						case '+': alert(sum);
						break;
						case '-': alert(diff);
						break;
						case '/': alert(del);
						break;
						case '*': alert(mult);
						break;
						default : alert("Не то");
					}
				return;	
					
			}	
		calc(num1,num2);
}		