var mouse_event = "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "green";
width_of_line = "1";

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.width - 300;

if (width<992) {
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow = "hidden";
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    
    

    mouse_event = "mouseDown";
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseUP";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";

}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;


    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;

        console.log("Last Postion of X and Y =");
        console.log("x =" + last_position_of_x +"y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("Current Postion of X and Y =");
        console.log("x =" + current_position_of_mouse_x +"y =" + current_postion_of_mouse_y);
        ctx.moveTo(current_postion_of_mouse_x , current_postion_of_mouse_y);
        ctx.stroke;
    }

    last_position_of_x = current_postion_of_mouse_x;
    last_position_of_y = current_postion_of_mouse_y;
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseUP";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";

}

canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e)
{console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    
}
canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;


   
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_postion_of_mouse_x , current_postion_of_mouse_y , radius , 0,2*Math.PI);
        ctx.stroke();

        console.log("Last Postion of X and Y =");
        console.log("x =" + last_position_of_x +"y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("Current Postion of X and Y =");
        console.log("x =" + current_position_of_mouse_x +"y =" + current_postion_of_mouse_y);
        ctx.moveTo(current_postion_of_mouse_x , current_postion_of_mouse_y);
        
    

    last_position_of_x = current_postion_of_mouse_x;
    last_position_of_y = current_postion_of_mouse_y;
}
function Clear()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}