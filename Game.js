class GameStates{
    constructor(){
    
    }
    StateSeeker(){
        var state=database.ref("GameState")
        state.on("value",function(data){
            GameState=data.val();
        })
    
    }
    update(game){
        database.ref("/").update({
            GameState:game
        })
    }
    async begin(){
        if(GameState===0){
            player=new Player();
            var count=await database.ref("PlayerCount").once("value")
            if(count.exists()){
               PlayerCount=count.val();
             
               player.getCount();
            }
            form=new Form()
            form.display()

        }
        redcar=createSprite(100,200);
        bluecar=createSprite(300,200);
        greencar=createSprite(500,200);
        silvercar=createSprite(700,200);
        allCars=[redcar,bluecar,greencar,silvercar]
    }
    play(){
        //form.hide();

        Player.playerInfo();

        if(Playersave!=undefined){
            drawSprites()
            var y=0;
            var x=200;
           // var position=100;
            var index=0
            
            for(var i in Playersave){
            //    position=position+10;
            index=index+1;
            x=x+200;
             y=Playersave[i].Distance
             console.log(Playersave[i].Distance)
            allCars[index-1].y=y
            allCars[index-1].x=x
            console.log(index,player.index)
            if(index==player.index){
                
                allCars[index-1].shapeColor="purple";
              camera.position.x=displayWidth/2
              camera.position.y=allCars[index-1].y
            }
            if(keyDown(UP_ARROW)){
                player.distance-=10;
                player.update()
            }
            
        }
        
        }

    }
}