var pacMan,ghost= [];

var imPacMan= [],imGhost =[[],[],[],[]],imGhostScared = [],imPacManDeath,tmPacMan,
tmGhost,tmGhostScared,tmGodMode,tmDeath,imPoint,imBigPoint,lab,ctx,score=0,godMode=false,gameOver=false,
eated=false,life=3,imLife,start=true,tmStart,auDot,auGhostE,auGame,auPower,auSiren,auDeath,imGameOver,imWinner,win=false;

const Direction= {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
    UP_LEFT: 4,
    UP_RIGHT: 5,
    DOWN_LEFT: 6,
    DOWN_RIGHT: 7,
};

var labirinto= [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,4,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,4,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,3,3,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,3,3,3,3,3,3,0,2,0,0,1,0,0,0,0,0,0],//13      11      16
    [2,2,2,2,2,2,1,2,2,2,0,3,3,3,3,3,3,0,2,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,0,1,0,0,2,0,3,3,3,3,3,3,0,2,0,0,1,0,0,0,0,0,0],//15
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,4,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,4,0],
    [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

function init() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // Crea un oggetto immagine
    lab = new Image();

    auDot=document.getElementById("dot");
    auGhostE=document.getElementById("eat_ghost");
    auGame=document.getElementById("game_start");
    auPower=document.getElementById("power_up");
    auSiren=document.getElementById("siren");
    auDeath=document.getElementById("death");

    pacMan= new PacMan(13,17, Direction.RIGHT,Direction.RIGHT,0,0.1);

    ghost[0]= new Ghost(13,11,Direction.LEFT,0,0.1,false)//blinky
    ghost[1]= new Ghost(11,13,Direction.DOWN,0,0.1,false)//clyde
    ghost[2]= new Ghost(13,15,Direction.UP,0,0.1,false)//inky
    ghost[3]= new Ghost(15,13,Direction.DOWN,0,0.1,false)//pinky

    imPacMan[0]=new Image();//up
    imPacMan[1]=new Image();//down
    imPacMan[2]=new Image();//left
    imPacMan[3]=new Image();//right
    imPacManDeath=new Image();
    for(var y=0;y<4;y++){
        for(var x=0;x<4;x++){
            imGhost[y][x]=new Image();
        }
    }
    imPoint=new Image();
    imBigPoint=new Image();
    imGhostScared[0]=new Image();
    imGhostScared[1]=new Image();
    imLife= new Image();
    imGameOver= new Image();
    imWinner= new Image();

    // Definisci il percorso dell'immagine
    imPacMan[0].src = 'source/image/pacman/pacman_up.png';
    imPacMan[1].src = 'source/image/pacman/pacman_down.png';
    imPacMan[2].src = 'source/image/pacman/pacman_left.png';
    imPacMan[3].src = 'source/image/pacman/pacman_right.png';
    imPacManDeath.src= 'source/image/pacman/pacman_death.png';

    imGhost[0][0].src = 'source/image/ghost/blinky/blinky_up.png';
    imGhost[0][1].src = 'source/image/ghost/blinky/blinky_down.png';
    imGhost[0][2].src = 'source/image/ghost/blinky/blinky_left.png';
    imGhost[0][3].src = 'source/image/ghost/blinky/blinky_right.png';

    imGhost[1][0].src = 'source/image/ghost/clyde/clyde_up.png';
    imGhost[1][1].src = 'source/image/ghost/clyde/clyde_down.png';
    imGhost[1][2].src = 'source/image/ghost/clyde/clyde_left.png';
    imGhost[1][3].src = 'source/image/ghost/clyde/clyde_right.png';
    
    imGhost[2][0].src = 'source/image/ghost/inky/inky_up.png';
    imGhost[2][1].src = 'source/image/ghost/inky/inky_down.png';
    imGhost[2][2].src = 'source/image/ghost/inky/inky_left.png';
    imGhost[2][3].src = 'source/image/ghost/inky/inky_right.png';

    imGhost[3][0].src = 'source/image/ghost/pinky/pinky_up.png';
    imGhost[3][1].src = 'source/image/ghost/pinky/pinky_down.png';
    imGhost[3][2].src = 'source/image/ghost/pinky/pinky_left.png';
    imGhost[3][3].src = 'source/image/ghost/pinky/pinky_right.png';
    
    imGhostScared[0].src = 'source/image/ghost/scared_blue.png';
    imGhostScared[1].src = 'source/image/ghost/scared_white.png';

    imPoint.src= 'source/image/point.png';
    imBigPoint.src= 'source/image/bigPoint.png';
    imLife.src= 'source/image/life.png';
    imGameOver.src= 'source/image/game_over.png';
    imWinner.src= 'source/image/winner.png';
    lab.src = 'source/image/labirinto.jpg';
    
    // Aspetta il caricamento completo dell'immagine
    lab.onload = function() {
        tmStart=new Date().getTime();
        tmPacMan=tmGhost=new Date().getTime();
        game();
    };

    document.addEventListener('keydown', function(event) {
        switch (event.key) {                
            case "ArrowUp":
                pacMan.directionDes = Direction.UP;
                break;
            case "ArrowDown":
                pacMan.directionDes = Direction.DOWN;
                break;
            case "ArrowLeft":
                pacMan.directionDes = Direction.LEFT;
                break;
            case "ArrowRight":
                pacMan.directionDes = Direction.RIGHT;
                break;
            default:
                // Altro tasto premuto
                break;
            }
    });
}

function game(){
    //blocco ha 30 righe e 28 colonne-> ogni spirte ha width= 500/28 = 18  height= 560/30= 19
    //cancello
    ctx.clearRect(0, 0, 540,600);
    
    isInGodMode();
    
    //se viene mangiato non disegno più nulla, solo il labirinto e i frame della sua morte
    //se ha altre vite rimetto tutti al loro posto e si continua altrimenti esce scritto hai perso comba!
    
    ctx.drawImage(lab, 20, 0, 500,560);
    if(gameOver)
        ctx.drawImage(imGameOver, 0, 0, 80, 16, 190, 300, 160, 40);
    else if(win)
        ctx.drawImage(imWinner, 0, 0, 80, 16, 190, 300, 160, 40);
    else{
        if(start){
            if(auGame.paused)
                auGame.play();
            drawPoint();
            drawPacman();
            drawGhost();
            if(new Date().getTime()-tmStart>=4000){
                start=false;
            }
        }
        else{
            if(!eated){ //se pacman non è stato mangiato
            
                if(auSiren.paused && !godMode)
                    auSiren.play();
                else if(auPower.paused && godMode)
                    auPower.play();

                movePacman();
                moveGhost(); 
                checkPacManEated();
                checkPacManEat();
                drawPoint();//dopo i fantasmi implementare bigpoint
                drawPacman();
                drawGhost();
            }
            else//se è stato mangiato
                pacmanDeath();
        }
        drawPacmanLife();
    }
    requestAnimationFrame(game);
}

function drawPacmanLife(){ //500-540x
    for(var i=0;i<life;i++){
        ctx.drawImage(imLife, 0, 0, 16, 16, 20 + (i*40), 560, 40, 40);
    }
}

function pacmanDeath(){
    ctx.drawImage(imPacManDeath, 16*pacMan.sprite, 0, 16, 16, converCoordObj(pacMan)[0] + 5, converCoordObj(pacMan)[1] + 5, 24, 21);
    if(new Date().getTime()-tmDeath>=150){
        tmDeath=new Date().getTime();
        pacMan.sprite++;
        if(pacMan.sprite==12){
            //togli la vita, rimetti a posto tutti i pezzi
            life--;
            if(life==0)
                gameOver=true;

            pacMan.posx=13;
            pacMan.posy=17;
            
            ghost[0].posx=13;
            ghost[0].posy=11;
            
            ghost[1].posx=11;
            ghost[1].posy=13;
            
            ghost[2].posx=13;
            ghost[2].posy=15;
            
            ghost[3].posx=15;
            ghost[3].posy=13;
            
            pacMan.sprite=0;
            eated=false;

            //start deve aspettare un tot prima di iniziare il gioco, il tempo dell'audio start_game 4sec
            start=true;
            tmStart=new Date().getTime();
        }
    }
}

function checkPacManEated(){
    if(!godMode){
        for(var gh=0;gh<4;gh++){
            if(pacMan.posx+1>=ghost[gh].posx && pacMan.posx-1<=ghost[gh].posx && pacMan.posy+1>=ghost[gh].posy && pacMan.posy-1<=ghost[gh].posy){
                auDeath.play();
                eated=true;
                tmDeath=new Date().getTime();
                pacMan.sprite=0;
            }
        }
    }
}

function isInGodMode(){
    if(godMode){
        if(new Date().getTime() - tmGodMode >= 10000) //la godMode dura 8 secondi
            godMode=false;
    }
}

function moveGhost(){
    var crRoad,posPacManG,dirSplitted;
    for(var gh=0;gh<4;gh++){
        
        if(ghost[gh].eaten==true && godMode==false)
            ghost[gh].eaten=false;

        if(ghost[gh].posy % 1 ==0 && ghost[gh].posx % 1 ==0){
            //limite sinistro
            if(ghost[gh].posx==0 && ghost[gh].posy==14 && ghost[gh].direction==Direction.LEFT){
                ghost[gh].posx=27;
            }
            //limite destro
            else if(ghost[gh].posx==27 && ghost[gh].posy==14 && ghost[gh].direction==Direction.RIGHT){
                ghost[gh].posx=0;
            }
            
            if(!(ghost[gh].posx==pacMan.posx && ghost[gh].posy==pacMan.posy)){
                //controllo se sto rinchiuso
                if(labirinto[ghost[gh].posy][ghost[gh].posx] ==3){ //13,14x 11y per libertà 
                    //implemento logica per uscire dal labirinto se non sto in godmode
                    if(ghost[gh].posx<13)
                        ghost[gh].direction=Direction.RIGHT;
                    else if(ghost[gh].posx>14)
                        ghost[gh].direction=Direction.LEFT;
                    else//stesso livello
                        ghost[gh].direction=Direction.UP;
                }
                else{
                    crRoad=crossRoad(ghost[gh]);
                    if(calculateDistanceObj(ghost[gh],pacMan)<=15){
                        //killer_mode solo ad una certa distanza
                        posPacManG= godMode==false ? whereIsPacMan(ghost[gh]): invertDirection(whereIsPacMan(ghost[gh]));
                        if(posPacManG!= Direction.DOWN_LEFT && posPacManG!= Direction.DOWN_RIGHT &&
                            posPacManG!= Direction.UP_LEFT && posPacManG!= Direction.UP_RIGHT){
                            //se posPacManG è in crRoad tutt'apposto
                            //altrimenti scegli una direzione disponibile che non sia quella inversa a quella che sta facendo
                            if(crRoad.includes(posPacManG))
                                ghost[gh].direction=posPacManG;
                            else{
                                ghost[gh].direction=crRoad[getRandomNumber(crRoad.length)];
                            }
                        }
                        else{
                            dirSplitted=splitDirection(posPacManG);
                            if(crRoad.includes(dirSplitted[0]))
                                ghost[gh].direction=dirSplitted[0];
                            else if(crRoad.includes(dirSplitted[1]))
                                ghost[gh].direction=dirSplitted[1];
                            else{
                                ghost[gh].direction=crRoad[getRandomNumber(crRoad.length)];
                            }
                        }
                    }
                    //non in killer mode, decidi casualmente
                    else{
                        ghost[gh].direction=crRoad[getRandomNumber(crRoad.length)];
                    }
                }
            }
        }

        //deve muoverlo solo se non è stato mangiato
        if(!ghost[gh].eaten){
            switch(ghost[gh].direction){
                case Direction.UP:
                    if(posGoodG(labirinto[Math.ceil(ghost[gh].posy-1)][ghost[gh].posx]))
                        ghost[gh].posy= parseFloat((ghost[gh].posy-ghost[gh].vel).toFixed(1));
                    break;
                case Direction.DOWN:
                    if(posGoodG(labirinto[Math.floor(ghost[gh].posy+1)][ghost[gh].posx]))
                        ghost[gh].posy= parseFloat((ghost[gh].posy+ghost[gh].vel).toFixed(1));
                    break;
                case Direction.LEFT:
                    if(posGoodG(labirinto[ghost[gh].posy][Math.ceil(ghost[gh].posx-1)]))
                        ghost[gh].posx= parseFloat((ghost[gh].posx-ghost[gh].vel).toFixed(1));
                    break;
                case Direction.RIGHT:
                    if(posGoodG(labirinto[ghost[gh].posy][Math.floor(ghost[gh].posx+1)]))
                        ghost[gh].posx= parseFloat((ghost[gh].posx+ghost[gh].vel).toFixed(1));
                    break;
            }
        }
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function calculateDistanceObj(oggetto1, oggetto2){
    //calcolare distanza tra (x1​,y1​) e (x2,y2)(x2​,y2​)
    //distanza= ((x2-x1)^2 + (y2-y1)^2 )^1/2
    return Math.sqrt(Math.pow( (oggetto1.posx-oggetto2.posx) ,2) + Math.pow( (oggetto1.posy-oggetto2.posy) ,2));
}

function splitDirection(direction){
    switch (direction){
        case Direction.UP_LEFT:
            return [Direction.UP, Direction.LEFT];
        case Direction.UP_RIGHT:
            return [Direction.UP, Direction.RIGHT];
        case Direction.DOWN_LEFT:
            return [Direction.DOWN, Direction.LEFT];
        case Direction.DOWN_RIGHT:
            return [Direction.DOWN, Direction.RIGHT];
    }
}

function invertDirection(direction){
    switch (direction){
        case Direction.UP:
            return Direction.DOWN;
        case Direction.DOWN:
            return Direction.UP;
        case Direction.LEFT:
            return Direction.RIGHT;
        case Direction.RIGHT:
            return Direction.LEFT;
        case Direction.DOWN_LEFT:
            return Direction.UP_RIGHT;
        case Direction.DOWN_RIGHT:
            return Direction.UP_LEFT;
        case Direction.UP_LEFT:
            return Direction.DOWN_RIGHT;
        case Direction.UP_RIGHT:
            return Direction.DOWN_LEFT;
    }
}

/*restituisce la posizione di pacman rispetto al fantsma, possibili direzioni:
-up      -up/right    -right   -down/right   -down    -down/left     -left      -right/left*/
function whereIsPacMan(oggetto){
    //sopra
    if(oggetto.posy>pacMan.posy)
        if(oggetto.posx==pacMan.posx)
            return Direction.UP;
        else if(oggetto.posx>pacMan.posx)
            return Direction.UP_LEFT;
        else
            return Direction.UP_RIGHT;
    //stesso_livello
    else if(oggetto.posy==pacMan.posy)
        if(oggetto.posx>pacMan.posx)
            return Direction.LEFT;
        else
            return Direction.RIGHT;
    //sotto
    else
        if(oggetto.posx==pacMan.posx)
            return Direction.DOWN;
        else if(oggetto.posx>pacMan.posx)
            return Direction.DOWN_LEFT;
        else
            return Direction.DOWN_RIGHT;
}

function crossRoad(oggetto){
    var inCrossRoad= [];
    if(posGoodP(labirinto[oggetto.posy-1][oggetto.posx]) && invertDirection(oggetto.direction)!=Direction.UP)
        inCrossRoad.push(Direction.UP);

    if(posGoodP(labirinto[oggetto.posy+1][oggetto.posx])&& invertDirection(oggetto.direction)!=Direction.DOWN)
        inCrossRoad.push(Direction.DOWN);
    
    if(posGoodP(labirinto[oggetto.posy][oggetto.posx-1])&& invertDirection(oggetto.direction)!=Direction.LEFT)
        inCrossRoad.push(Direction.LEFT);
    
    if(posGoodP(labirinto[oggetto.posy][oggetto.posx+1])&& invertDirection(oggetto.direction)!=Direction.RIGHT)
        inCrossRoad.push(Direction.RIGHT);
    
    return inCrossRoad;
}

function posGoodG(position){
    return (position ==1 || position ==2 || position == 4 || position == 3);
}

var scared=0;

function drawGhost(){
    //qui poi ci vorra un controllo se pacman è in god mod
    for(var gh=0;gh<4;gh++){
        if(!godMode)
            ctx.drawImage(imGhost[gh][ghost[gh].direction], 16*ghost[gh].sprite, 0, 16, 16, converCoordObj(ghost[gh])[0] + 5, converCoordObj(ghost[gh])[1] + 5, 24, 24);
        else
            ctx.drawImage(imGhostScared[scared], 16*ghost[gh].sprite, 0, 16, 16, converCoordObj(ghost[gh])[0] + 5, converCoordObj(ghost[gh])[1] + 5, 24, 24);
    }
    if(new Date().getTime()-tmGhost>=200){ //ogni 100 ms viene modificato lo sprite di pacman
        tmGhost=new Date().getTime();
        for(var gh=0;gh<4;gh++){
            ghost[gh].sprite=(ghost[gh].sprite + 1)%2; //deve alternarsi tra 0 e 1
        }
    }
    if(godMode)
        if(new Date().getTime()-tmGhostScared>=400){
            tmGhostScared=new Date().getTime();
            scared=(scared+1)%2;
        }
}

function checkPacManEat(){
    if(pacMan.posx % 1 ==0 && pacMan.posy % 1 ==0){
        //se dove sta pacman sta il punto lo mangia ed aggiorna lo score
        if(labirinto[pacMan.posy][pacMan.posx] == 1){
            labirinto[pacMan.posy][pacMan.posx]=2; //2 uguale spazio senza punto ma percorribile
            score+=10;
            
            let scoreElement = document.getElementById("score");
            scoreElement.innerHTML = "SCORE:" + score;

            if(auDot.paused)
                auDot.play();
        }
        else if(labirinto[pacMan.posy][pacMan.posx] == 4){
            labirinto[pacMan.posy][pacMan.posx]=2; //2 uguale spazio senza punto ma percorribile
            score+=30;
            godMode=true;
            tmGodMode=new Date().getTime();
            tmGhostScared=new Date().getTime();
            
            let scoreElement = document.getElementById("score");
            scoreElement.innerHTML = "SCORE:" + score;

            auDot.play();
        }

        //se in godMode devo controllare se ha mangiato qualcuno
        if(godMode){
            for(var gh=0; gh<4;gh++){//13 15y   11 16x
                if(pacMan.posx+1>=ghost[gh].posx && pacMan.posx-1<=ghost[gh].posx && pacMan.posy+1>=ghost[gh].posy && pacMan.posy-1<=ghost[gh].posy){
                    ghost[gh].posy=13+getRandomNumber(3);
                    ghost[gh].posx=11+getRandomNumber(6);
                    ghost[gh].eaten=true;
                    
                    if(auGhostE.paused)
                        auGhostE.play();
                }
            }
        }
    }
}

function drawPoint(){
    var noPoint=true;
    for(var y=0;y<30;y++){
        for(var x=0;x<28;x++){
            if(labirinto[y][x]==1){
                ctx.drawImage(imPoint,20+ (x * 17.4) +12.5, (y * 17.5)+12.5, 6,6);
                noPoint=false;
            }
            else if(labirinto[y][x]==4){
                ctx.drawImage(imBigPoint,20+ (x * 17.4) +9, (y * 17.5)+9, 12,12);
                noPoint=false;
            }
        }
    }
    console.log(noPoint);
    if(noPoint)
        win=true;
}

var opPacMan= true; //si sta aprendo la bocca di pacman? all'inizio si

function drawPacman(){
    // sprite 0 =0,0 - 15,13      sprite 1 =15,0 - 30,13    sprite 2 =30,0 - 45,13
    ctx.drawImage(imPacMan[pacMan.direction], 15*pacMan.sprite, 0, 15, 13, converCoordObj(pacMan)[0] + 5, converCoordObj(pacMan)[1] + 5, 24, 21);
    
    if(new Date().getTime()-tmPacMan>=100){ //ogni 1000 ms viene modificato lo sprite di pacman
        tmPacMan=new Date().getTime();
        //deve variare tra 0,1,2,2,1,0
        if(opPacMan){
            pacMan.sprite++;
            if(pacMan.sprite>2){
                opPacMan=false;
                pacMan.sprite--;
            }
        }
        else{
            pacMan.sprite--;
            if(pacMan.sprite<0){
                opPacMan=true;
                pacMan.sprite++;
            }
        }
    }
}

function movePacman(){
    if(pacMan.posy % 1 ==0 && pacMan.posx % 1 ==0 && pacMan.direction!=pacMan.directionDes){
        switch(pacMan.directionDes){
            case Direction.UP:
                if(posGoodP(labirinto[pacMan.posy-1][pacMan.posx]))
                    pacMan.direction=pacMan.directionDes;
                break;
            case Direction.DOWN:
                if(posGoodP(labirinto[pacMan.posy+1][pacMan.posx]))
                    pacMan.direction=pacMan.directionDes;
                break;
            case Direction.LEFT:
                if(posGoodP(labirinto[pacMan.posy][pacMan.posx-1]))
                    pacMan.direction=pacMan.directionDes;
                break;
            case Direction.RIGHT:
                if(posGoodP(labirinto[pacMan.posy][pacMan.posx+1]))
                    pacMan.direction=pacMan.directionDes;
                break;
        }    
    }
    if(pacMan.posy % 1 ==0 && pacMan.posx % 1 ==0){
        //0,14 estremo sinistro         27,14 estremo destro
        if(pacMan.posx==0 && pacMan.posy==14 && pacMan.direction==Direction.LEFT){
            pacMan.posx=27;
        }

        else if(pacMan.posx==27 && pacMan.posy==14 && pacMan.direction==Direction.RIGHT){
            pacMan.posx=0;
        }
    }
    switch(pacMan.direction){
        case Direction.UP:
            if(posGoodP(labirinto[Math.ceil(pacMan.posy-1)][pacMan.posx]))
                pacMan.posy= parseFloat((pacMan.posy-pacMan.vel).toFixed(1));
            break;
        case Direction.DOWN:
            if(posGoodP(labirinto[Math.floor(pacMan.posy+1)][pacMan.posx]))
                pacMan.posy= parseFloat((pacMan.posy+pacMan.vel).toFixed(1));
            break;
        case Direction.LEFT:
            if(posGoodP(labirinto[pacMan.posy][Math.ceil(pacMan.posx-1)]))
                pacMan.posx= parseFloat((pacMan.posx-pacMan.vel).toFixed(1));
            break;
        case Direction.RIGHT:
            if(posGoodP(labirinto[pacMan.posy][Math.floor(pacMan.posx+1)]))
                pacMan.posx= parseFloat((pacMan.posx+pacMan.vel).toFixed(1));
            break;
    }
}

//funzione che restituisce true se la poszione nel labirinto è uguale a 1 o 2 o 4
function posGoodP(position){
    return (position ==1 || position ==2 || position == 4);
}

function converCoordObj(oggetto){
    return [20+ (oggetto.posx * 17.4), (oggetto.posy * 17.5)]
}

class Oggetto{
    constructor(posx, posy){
        this.posx=posx;
        this.posy=posy;
    }
}

class Ghost extends Oggetto{
    constructor(posx, posy, direction,sprite, vel,eaten){
        super(posx, posy);
        this.direction=direction;
        this.sprite=sprite;
        this.vel=vel;
        this.eaten=eaten;
    }
}

class PacMan extends Oggetto{
    constructor(posx,posy , direction,directionDes,sprite,vel){
        super(posx, posy);
        this.direction=direction;
        this.directionDes=directionDes;
        this.sprite=sprite;
        this.vel=vel;
    }
}