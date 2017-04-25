// Вывод Возрастающего Треугольника (7 строк) из заданного символа (здесь #)
		/*
		console.log("Треугольник");
		var i=0;
		var j="#";
		while (i++<8)
		{
			console.log(i,j);
			j=j+"#";
		}	
		console.log("----");
		*/


		//Теперь количество строк Треугольника выбирает пользователь
		/*
		console.log("Пользовательский треугольник");
		var num = +prompt("Введите длину треугольника","8");
		var key = 0;
		var sym = "#";
		while(key++<num)
		{
			
			
			if (key>=10)
				{console.log(key," ",sym);}
			else
			{console.log(key,"  ",sym);}	
			sym=sym+"#";
		}
		*/


		// Шахматная доска
		/*
		console.log("----");
		var line1="# ",line2=" #", i1=0, j1=0;

		
		console.log("----");

		for (var param1 = 1; param1 < 9; param1++) //Основной цикл регулирует количество "строк", т.к. в конце стоит знак переноса. Он отработает столько, сколько задан цикл.
		{	
			if (param1%2==0)
			{
				for (var param2 = 1; param2 <9; param2++) //В данном случае вложенный цикл регулирует количество "столбцов"
    			{
        		document.write("#"+"*");
        	
   		 		}
				
			}
			else
			{	
    			for (var param2 = 1; param2 <9; param2++) //В данном случае вложенный цикл регулирует количество "столбцов"
    			{
        		document.write("*"+"#");
        	
   		 		}
   		 	}	
   			document.write("</br>");
		}
		*/

		
		//Шахматная доска из интернета
		/*
		document.write("----"+"</br>");	
		document.write("Код из интернета"+"</br>");	
			var result = "\n";

			for (var row = 1; row < 9; row++) 
			{
		 		for (var cell = 1; cell < 9; cell++) 
		 		{
		    	result += (row % 2 == cell % 2) ? "#" : "*"; //Можно еще побитово - (row & 1 == cell & 1)
		  		}
		  	result += "</br>";
			}

		document.write(result);
		*/


		//Вывод чисел от 1 до 100, с использованием тернарного оператора 
		/*document.write("----"+"</br>");	
		document.write("Вывод чисел от 1 до 100, с использованием тернарного оператора </br>")

		var ch1=0;
		while (ch1++<100)
		{
			document.write ((ch1%3==0&&ch1%5==0)? ch1+" и так и сяк</br>":(ch1%5==0)? ch1+" делится на 5</br>": (ch1%3==0) ? ch1+" делится на 3</br>": ch1+"</br>");
			
		}
		var user = {
		name: prompt ("Введите имя пользователя:"),
		sayHi: function()
			{
				alert("Привет, "+this.name+"!");
			}
		}
		user.sayHi();
		*/


		// Преобразование из 10 в 16 сс
		/*var dec = +prompt("Введите число от 0 до 255 для преобразования в 16сс: ","255");
		while (true)
		{
			if (dec>255)
			{
				alert("Число не должно превышать 255!");
				dec = +prompt("Введите число, НЕ ПРЕВЫШАЮЩЕЕ 255: ","255");
				continue;
			} else
			{
				alert(dec.toString(16));	
			}
			break;
		}	
		*/


		//То же самое через функцию
		/*
		function dec2 (num1, num2, num3)
		{
			num1= 255;
			num2=125;
			num3=144;
			console.log(num1.toString(16)+num2.toString(16)+num3.toString(16));
		}
		dec2();
		*/

		//Функция, которая преобразовывает число в объект
		/*
		function exit()
		{
			var dec =prompt("Введите число от 0 до 999:","100");
			while (true)
			{
				if (dec>999)
				{
					alert("Число не должно превышать 999!");
					dec = +prompt("Введите число, НЕ ПРЕВЫШАЮЩЕЕ 999: ","100");
					continue;
				} else
				{
					var newObj = {};
					var dec==dec1;
					var newArray = dec1.split('');
					newObj['Единицы:']=+ newArray[0];
					newObj['Десятки']=+ newArray[1];
					newObj['Сотни']=+ newArray[2];
					
					if (newArray.length<3)
						{	
							for (var i=0; i<newArray.length; i++)
								{
									newArray.shift(0);
									newArray.unshift(' ');
								}
						}
				}
				break;
			}
		return newObj;
		console.log(newObj);	

		}

		exit();
		*/
		/*
		document.body.style.background = 'red';
		alert("Опа! Красный фон!");
		document.body.style.background = '';
		*/