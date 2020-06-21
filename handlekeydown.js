function handlekeydown(e)
{
    // Q W E A S D
    if(e.keyCode==87) angleX=angleX+1.0; //W
    if(e.keyCode==83) angleX=angleX-1.0; //S
    if(e.keyCode==68) angleY=angleY+1.0;
    if(e.keyCode==65) angleY=angleY-1.0;
    if(e.keyCode==81) angleZ=angleZ+1.0;
    if(e.keyCode==69) angleZ=angleZ-1.0;

    //U I O J K L
    if(e.keyCode==76) LightPositionX=LightPositionX+0.1;
    if(e.keyCode==74) LightPositionX=LightPositionX-0.1;
    if(e.keyCode==73) LightPositionY=LightPositionY+0.1;
    if(e.keyCode==75) LightPositionY=LightPositionY-0.1;
    if(e.keyCode==85) LightPositionZ=LightPositionZ+0.1;
    if(e.keyCode==79) LightPositionZ=LightPositionZ-0.1;

    //Z X
    if(e.keyCode==88) Object1AngleZ=Object1AngleZ-0.1;
    if(e.keyCode==90) Object1AngleZ=Object1AngleZ+0.1;

    //C V
    if(e.keyCode==67) Object2AngleZ=Object2AngleZ-0.1;
    if(e.keyCode==86) Object2AngleZ=Object2AngleZ+0.1;

    //B N
    if(e.keyCode==66) Object3AngleZ=Object3AngleZ-0.1;
    if(e.keyCode==78) Object3AngleZ=Object3AngleZ+0.1;
}