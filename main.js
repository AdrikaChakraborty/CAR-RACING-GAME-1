canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="pink.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="green_car.png";
car2_x=10;
car2_y=100;

background_image="race_track.jpg";

function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    
    car1_imgTag= new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0,canvas.width, canvas.height );
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown" ,my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log("keyPressed");

    if(keyPressed == '38') {
        car1_up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down");
    }
     
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left");
    }

    if(keyPressed == '93')
    {
        car1_right();
        console.log("right");
    }
      
    if(keyPressed == '87')
    {
        car2_up();
        console.log("w");
    }
    
    if(keyPressed == '83')
    {
        car2_down();
        console.log("s");
    }
     
    if(keyPressed == '65')
    {
        car2_left();
        console.log("a");
    }

    if(keyPressed == '68')
    {
        car2_right();
        console.log("d");
    }
    

}

function car1_up()
{
//start//
}

function car1_down()
{
   //start// 
}

function car1_left()
{
    //start//
}

function car1_rigth()
{
    //start//
}

function car2_up()
{
    //start//
}

function car2_down()
{
    //start//
}

function car2_left()
{
    //start//
}

function car2_right()
{
    //start//
}






