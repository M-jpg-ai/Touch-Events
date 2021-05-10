var touch_event="";
var last_position_of_x,last_position_of_y;

var width=screen.width;
var new_width=screen.width-70;
var new_height= screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color= "black";
width_of_line=1;

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("Width_line").value;
    touch_event="touchstart";
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

// canvas.addEventListener("mouseup",my_mouseup);
// function my_mouseup(e){
//     mouse_event="mouseup";
// }

// canvas.addEventListener("mouseleave",my_mouseleave);
// function my_mouseleave(e){
//     mouse_event="mouseleave"
// }

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_postion_of_mouse_X=e.touches[0].clientX-canvas.offsetLeft;
    current_postion_of_mouse_Y=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y = ");
        console.log("x="+last_position_of_x+" y="+last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current postion of mouse X and y = ");
        console.log("x="+current_postion_of_mouse_X+" y="+current_postion_of_mouse_Y);

        ctx.lineTo(current_postion_of_mouse_X,current_postion_of_mouse_Y);
        ctx.stroke();
    
    last_position_of_x=current_postion_of_mouse_X;
    last_position_of_x=current_postion_of_mouse_Y;


}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}