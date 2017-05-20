function ready(){
	var view = {
		displayMsg: function(msg){
			var message = document.getElementById("info");
			message.innerHTML=msg;
		},
		displayMiss: function(location){
			var miss = document.getElementById(location)
			miss.setAttribute("class", "miss");
		},
		displayBoom: function(location){
			var hit = document.getElementById(location)
			hit.setAttribute("class", "boom");

		}/*,
		displaySheep: function(location){
			var random = Math.floor(Math.random()*111);
		}*/
	};/*end of view*/
	var model = {
		boardSize: 10,
		shipLength :3,
		shipNum: 3,
		shipSunk: 0,
		ships: [{ locations:["А1","Б1","В1"], hits:["","",""]},
				  { locations:["А4","А5","А6"], hits:["","",""]},
				  { locations:["К1","К2","К3"], hits:["","",""]}],
		fire: function(guess/*аргумент, означающий попадание*/) {
			for (var i = 0;i<this.shipNum; i++) {
				var ship = this.ships[i];
				var index = ship.locations.indexOf(guess);
				if (index!=-1)
				{
					ship.hits[index]="hit";
					view.displayBoom(guess);
					view.displayMsg("Попал!");
					if (this.isSunk(ship))
					{
						this.shipSunk++
						view.displayMsg("Корабль потоплен!");
					}
					return true;

				}
			}
				view.displayMiss(guess);
				view.displayMsg("Мимо!");
				return false;
			
		},/*end of Fire*/	
		isSunk: function(ship){/*метод, получающий объект корабля, и проверяющий, потоплен он или нет*/		
			for (var i=0;i<this.shipLength; i++)
			{
				if(ship.hits[i]!=="hit"){
					return false;
				}
				
			}
			return true;
		}/*end of isSunk*/		  
	};/*end of model*/
	
	model.fire("В3");
	model.fire("Г1");
	model.fire("К2");
	model.fire("К3");
	model.fire("К1");
	model.fire("А4");
	model.fire("А1");
	};/*end of ready*/
	window.onload=ready;