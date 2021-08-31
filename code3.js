gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDBasicFlame2Objects1= [];
gdjs.New_32scene2Code.GDBasicFlame2Objects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObject32Objects1= [];
gdjs.New_32scene2Code.GDNewObject32Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene2Code.GDNewObjectObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject32Objects1Objects = Hashtable.newFrom({"NewObject32": gdjs.New_32scene2Code.GDNewObject32Objects1});gdjs.New_32scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.New_32scene2Code.GDNewObject32Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject32Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


};gdjs.New_32scene2Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BasicFlame2"), gdjs.New_32scene2Code.GDBasicFlame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDBasicFlame2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasicFlame2Objects1[i].setPosition((( gdjs.New_32scene2Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDNewObjectObjects1[0].getPointX("")),(( gdjs.New_32scene2Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDNewObjectObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObjectObjects1Objects, "Physics2", gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "timer");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "timer");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasicFlame2"), gdjs.New_32scene2Code.GDBasicFlame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].getBehavior("Physics2").setGravity(0, -(1));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasicFlame2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasicFlame2Objects1[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setY(gdjs.New_32scene2Code.GDNewObjectObjects1[i].getY() - (10));
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasicFlame2"), gdjs.New_32scene2Code.GDBasicFlame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].getBehavior("Physics2").setGravity(0, 1);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasicFlame2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasicFlame2Objects1[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setY(gdjs.New_32scene2Code.GDNewObjectObjects1[i].getY() + (10));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].hide();
}
}}

}


{


{
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDBasicFlame2Objects1.length = 0;
gdjs.New_32scene2Code.GDBasicFlame2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject32Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject32Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;

gdjs.New_32scene2Code.eventsList2(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
