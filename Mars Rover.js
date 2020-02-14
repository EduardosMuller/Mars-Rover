//Initial alert message with the instructions.

//alert(`Welcome to the Mars Rover project. Use the command list to move the rovers "r" for right, "l" for left , "f" for forward and "b" for backward.`)

// ========================================================================

// Obstacles objects here:

let obstacles = {
  x: [1,3,5,7,9],
  y: [0,2,4,6,8]
}

// Rover object here :
let rover1 = {
    direction:"North",
    x: 0, 
    y: 0, 
    travelLog:[],
    name: "N.A.Rover"
  }; 

let rover2 = {
    direction: "East",
    x: 6,
    y: 3,
    travelLog: [],
    name: "S.A.Rover"
};

let rovers = [rover1,rover2] ;



// Turning left command.
function turnLeft(){
  console.log("turnLeft was called!")
  for (let i = 0; i < rovers.length; i++){
     switch(rovers[i].direction){
     
      case"West":
            rovers[i].direction = "South"; 
            break;    
      case"South":
            rovers[i].direction = "East";
            break;
      case"East":
            rovers[i].direction = "North";
            break;
      case"North":
            rovers[i].direction = "West";              
            break;  
      }
       console.log(`${rovers[i].name} facing ${rovers[i].direction} direction.`)
  }
}

//  Turning right command
function turnRight(){
  console.log("turnRight was called!");
  for (let i = 0 ; i<rovers.length; i++){
      switch(rovers[i].direction){
          
      case"West":
           rovers[i].direction = "North"; 
           break;    
      case"North":
           rovers[i].direction = "East";
           break;
      case"East":
           rovers[i].direction = "South";
           break;
      case"South":
           rovers[i].direction = "West";               
          break;   
      }
         console.log(`${rovers[i].name} facing ${rovers[i].direction} direction.`)
  }
}

// ===================================================================================
// Move Rover forward or backard "N","E","W","S"

// Move forward command

function moveForward(){
   console.log("moveForward was called!");
    for (let i = 0 ; i < rovers.length; i++){
        switch(rovers[i].direction){
            
         case "West":
            if (rovers[i].x > 0)  { 
            rovers[i].x += -1;        
            rovers[i].travelLog.push(rovers[i].x, rovers[i].y );
            }
              break;
         case "East": 
            if (rovers[i].x < 9 ) { 
            rovers[i].x += 1;
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y );
            }
              break;
          case "North":
            if (rovers[i].y > 0) {
            rovers[i].y += -1; 
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y);
            }
              break;
          case "South":
            if (rovers[i].y < 9) { 
            rovers[i].y += 1; 
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y);  
            }
              break;
        }
      console.log(`${rovers[i].name} position is ${rovers[i].x} , ${rovers[i].y}.`);  
    }
}
// Move backward command
  function moveBackward(){
    console.log("moveBackward was called");
      for (let  i = 0; i <rovers.length; i++){
        switch(rovers[i].direction){
                
         case "West":
            if (rovers[i].x < 9) {
            rovers[i].x += 1; 
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y);
            }
              break;
         case "East":
            if (rovers[i].x > 0) { 
            rovers[i].x += -1 ; 
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y);  
            }
              break;
         case "North": 
            if (rovers[i].y < 9) { 
            rovers[i].y += 1;
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y);  
            }
              break;
         case "South":
            if (rovers[i].y > 0) { 
            rovers[i].y += -1;        
            rovers[i].travelLog.push(rovers[i].x,rovers[i].y); 
            }
              break;
      } 
     console.log(`${rovers[i].name} position is (${rovers[i].x}, ${rovers[i].y})`); 
  }
  }
 function commandList(str){
    for (var i = 0; i < str.length; i++){
      if (str[i] === "r"){
          turnRight();
       } else if(str[i] === "l"){
          turnLeft();
       } else if(str[i] === "f"){
          moveForward();
       } else if(str[i] === "b"){
          moveBackward(); 
       } else {
         console.log("Use only the valid inputs : 'r' for right, 'l' for left, 'f' for forward , or 'b'for backward.");
      }    
    }
  } 


function checkGrid(rovers){
for(let i=0; i<rovers.length; i++){
  if (rovers[i].x > -1 || rovers[i].x < 10 || rovers[i].y > -1 || rovers[i].y < 10){
    	console.log(`The ${rovers[i].name} is inside of the grid!`);
			return true;
  }else{
    	console.log(`${rovers[i].name} is out of the grid!`);
			return false;
  }
 }  
}



function checkObstacles(rovers,obstacles){
		for(let i = 0; i < rovers.length; i++){
			for(let j = 0; j < obstacles.length; j++){
				if(rovers[i].x === obstacles.x[j] && rovers[i].y === obstacles.y[j]){		
          console.log(`Obstacles a forward!  ${rovers[i].name}, change your direction now!`)
					return true;
    		} 
					return false;
    	}
  	}
}

function checkColisions(rovers){
	for(var i=0; i<rovers.length; i++){
		if(rovers[0].x && rovers[0].y === rovers[1].x && rovers[1].y){ 
	console.log(`Rover a forward!!! Please,${rovers[i].name}, change your direction now!`);
			return true;
    }
			return false;
		}
	}




//=============================================================
// Validation move command

commandList("rrrrllllbbff") 