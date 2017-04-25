var 
/*Локация корабля*/
randomLoc = Math.floor(Math.random()*5),
l1 = randomLoc,
l2 = l1+1,
l3 = l2+1,
/*Локация удара пользователя*/
adress,
/*Общее количество выстрелов*/
num = 0,
/*Количество попаданий*/
hits = 0,
/*Потоплен*/
inSunk = false;
while (inSunk==false)
{
	adress=+prompt("Куда будем бить? Введи цифру от 0 до 6","0");
	if (adress>=0&&adress<=6)
	{
		if (adress==l1||adress==l2||adress==l3)
		{
			alert("Попал!");
			hits++;
			num++;
		}
		else
		{
			alert("Мимо!")
			num++;
		}
	if (hits==3)
		{
			inSunk=true;
			alert("Та-дам! Корабль потоплен, ты победил!!!");
		}	
	}
	else
	{
		alert("УПС! Бомба упала где-то за пределами поля... Введи цифру от 0 до 6!");
		
	}
	if (hits==1)
	{
		alert("Осталось еще две клетки");
	} else
		if (hits==2)
		{
			alert("Осталась всего одна!!");
		}
}
alert("Молодец! Ты выиграл с "+num+" из 3 выстрелов");