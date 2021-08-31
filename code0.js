gdjs.New_32scene4Code = {};
gdjs.New_32scene4Code.GDNewObjectObjects1= [];
gdjs.New_32scene4Code.GDNewObjectObjects2= [];

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene4Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObjectObjects1[i].setOpacity(gdjs.New_32scene4Code.GDNewObjectObjects1[i].getOpacity() - (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene4Code.GDNewObjectObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObjectObjects1[i].getOpacity() == 0 ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObjectObjects1[k] = gdjs.New_32scene4Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObjectObjects1.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene4Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects2.length = 0;

gdjs.New_32scene4Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
