var bg;
var title = "a much longer title for test purposes"
var storyCounter = 0;
var sword
var cor1
var cor2

let clickoff = false;
let rollchoice
let button

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('js/paperTexture.jpg');
  sword = loadImage('js/sword.png');
  storytext = loadStrings('js/storyoptions.txt');
  titletext = loadStrings('js/Titles.txt');
  choicestext = loadStrings('js/multiplechoices.txt');
  cor1 = loadImage('corner1.png');
  cor2 = loadImage('corner2.png');
  
  rollchoice = createSelect();
  rollchoice.option("1");
  rollchoice.option("2");
  rollchoice.option("3");
  rollchoice.option("4");
  rollchoice.option("5");
  rollchoice.option("6");
  rollchoice.option("7");
  rollchoice.option("8");
  rollchoice.option("9");
  rollchoice.option("10");
  rollchoice.option("11");
  rollchoice.option("12");
  rollchoice.option("13");
  rollchoice.option("14");
  rollchoice.option("15");
  rollchoice.option("16");
  rollchoice.option("17");
  rollchoice.option("18");
  rollchoice.option("19");
  rollchoice.option("20");
  button = createButton('enter roll');
}

function draw() {
  background(bg);
  image(cor1,-3,250,250,350)
  image(cor2,windowWidth-240,-15,250,350)
  
  if(storyCounter == 2){
    rollchoice.position((windowWidth/2)-15,200)
    button.position((windowWidth/2)-20,250)
    clickoff = true;
    button.mousePressed(rolled);
  }
  else{
    rollchoice.position(-300,100)
    button.position((-300),100)
    clickoff = false;
  }
  
  let title = titletext[storyCounter]
  let phrase = storytext[storyCounter]
  let choice1 = choicestext[storyCounter];
  let choice2 = choicestext[(storyCounter)+1];
  
  let phrases = split(phrase, "...")
  if (phrases.length < 5){
    if (phrases.length == 4){
      phrases[4] = " ";
    }
    if (phrases.length == 3){
      phrases[4] = " ";
      phrases[3] = " ";
    }
    if (phrases.length == 2){
      phrases[4] = " ";
      phrases[3] = " ";
      phrases[2] = " ";
    }
    if (phrases.length == 1){
      phrases[4] = " ";
      phrases[3] = " ";
      phrases[2] = " ";
      phrases[1] = " ";
    }
  }
  //works same as instagram stories where you go to different slides and choose your own adventure books
  
  textFont('Algerian');
  textSize(30)
  textAlign(CENTER)
  text(title, windowWidth/2, 50)
  
  textSize(20)
  textFont('Arial');
  text((phrases[0]+'\n'+phrases[1]+'\n'+phrases[2]+'\n'+phrases[3]+'\n'+phrases[4]), windowWidth/2, 130)
  
  if (storyCounter == 10){
    text(choice1,windowWidth/4,400);
    text(choice2,(windowWidth/4)+(windowWidth/2),400);
    
    image(sword,(windowWidth/2)-135,250,250,350)
  }
  
}

function touchEnded(){
  if (clickoff == false){
    if (storyCounter == 10){
      if (mouseX < windowWidth/2){
        storyCounter += 1;
      }
      if (mouseX > windowWidth/2){
        storyCounter += 8;
      }
    }
    else{
      storyCounter += 1;
    }
    if (storyCounter == 5){
      openLink();
    }
    if (storyCounter == 8){
      openLink();
  }
  }
  console.log(storyCounter)
}

function openLink(){
  if (storyCounter == 5){
    window.open("https://jmonk603.github.io/DandDARWinDragWiz/");
    window.location.href = ('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  if (storyCounter == 8){
    window.open("https://jmonk603.github.io/DandDARLoseDragWiz/");
    window.location.href = ('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}

function rolled(){
  let temp = rollchoice.selected();
  temp2 = int(temp);
  if (temp2 >= 10){
    storyCounter += 1;
    clickoff = false;
  }
  else{
    storyCounter += 4;
    clickoff = false;
  }
}
