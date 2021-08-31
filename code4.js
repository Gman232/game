gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDNewObjectObjects1= [];
gdjs.New_32scene3Code.GDNewObjectObjects2= [];
gdjs.New_32scene3Code.GDNewObject3Objects1= [];
gdjs.New_32scene3Code.GDNewObject3Objects2= [];
gdjs.New_32scene3Code.GDNewObject4Objects1= [];
gdjs.New_32scene3Code.GDNewObject4Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.New_32scene3Code.GDNewObject4Objects1});gdjs.New_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene3Code.GDNewObject4Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.New_32scene3Code.eventsList1 = function(runtimeScene) {

{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects2.length = 0;

gdjs.New_32scene3Code.eventsList1(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
