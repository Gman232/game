gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject32Objects1= [];
gdjs.New_32sceneCode.GDNewObject32Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDscoreObjects1= [];
gdjs.New_32sceneCode.GDscoreObjects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject42Objects1= [];
gdjs.New_32sceneCode.GDNewObject42Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "NewFile.wav", 0, false, 100, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject42Objects1Objects = Hashtable.newFrom({"NewObject42": gdjs.New_32sceneCode.GDNewObject42Objects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject42"), gdjs.New_32sceneCode.GDNewObject42Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject42Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.New_32sceneCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + (" ") + ("sec"));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


{
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDscoreObjects1.length = 0;
gdjs.New_32sceneCode.GDscoreObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject42Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject42Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;

gdjs.New_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
