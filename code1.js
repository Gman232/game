gdjs.Rope_32ExampleCode = {};
gdjs.Rope_32ExampleCode.GDSwingBoxObjects1= [];
gdjs.Rope_32ExampleCode.GDSwingBoxObjects2= [];
gdjs.Rope_32ExampleCode.GDSwingBoxObjects3= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects1= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects2= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects3= [];
gdjs.Rope_32ExampleCode.GDRopeObjects1= [];
gdjs.Rope_32ExampleCode.GDRopeObjects2= [];
gdjs.Rope_32ExampleCode.GDRopeObjects3= [];
gdjs.Rope_32ExampleCode.GDFollowObjects1= [];
gdjs.Rope_32ExampleCode.GDFollowObjects2= [];
gdjs.Rope_32ExampleCode.GDFollowObjects3= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects1= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects2= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects3= [];
gdjs.Rope_32ExampleCode.GDFinishObjects1= [];
gdjs.Rope_32ExampleCode.GDFinishObjects2= [];
gdjs.Rope_32ExampleCode.GDFinishObjects3= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects1= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects2= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects3= [];
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1= [];
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects2= [];
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects3= [];
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects1= [];
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects2= [];
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects3= [];
gdjs.Rope_32ExampleCode.GDNewObjectObjects1= [];
gdjs.Rope_32ExampleCode.GDNewObjectObjects2= [];
gdjs.Rope_32ExampleCode.GDNewObjectObjects3= [];
gdjs.Rope_32ExampleCode.GDcreatorObjects1= [];
gdjs.Rope_32ExampleCode.GDcreatorObjects2= [];
gdjs.Rope_32ExampleCode.GDcreatorObjects3= [];
gdjs.Rope_32ExampleCode.GDwaterObjects1= [];
gdjs.Rope_32ExampleCode.GDwaterObjects2= [];
gdjs.Rope_32ExampleCode.GDwaterObjects3= [];

gdjs.Rope_32ExampleCode.conditionTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition0IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition1IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition2IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.conditionTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition0IsTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition1IsTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition2IsTrue_1 = {val:false};


gdjs.Rope_32ExampleCode.eventsList0 = function(runtimeScene) {

{


{
/* Reuse gdjs.Rope_32ExampleCode.GDFollowObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDFollowObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDFollowObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Rope_32ExampleCode.GDFollowObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDFollowObjects1[0] : null), true, "", 0);
}}

}


};gdjs.Rope_32ExampleCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Follow"), gdjs.Rope_32ExampleCode.GDFollowObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.lerp((( gdjs.Rope_32ExampleCode.GDFollowObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDFollowObjects1[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.lerp((( gdjs.Rope_32ExampleCode.GDFollowObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDFollowObjects1[0].getPointY("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
{ //Subevents
gdjs.Rope_32ExampleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Rope_32ExampleCode.eventsList2 = function(runtimeScene) {

};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects2Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects2});gdjs.Rope_32ExampleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects2);
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects2);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickNearestObject(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects2Objects, (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointY("")), false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDMainCharObjects2 */
/* Reuse gdjs.Rope_32ExampleCode.GDSwingBoxObjects2 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].setOpacity(250);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Rope_32ExampleCode.GDMainCharObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects2[0] : null), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getBehavior("Physics2Behavior").addDistanceJoint((gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getPointX("Swing")), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getPointY("Swing")), (gdjs.Rope_32ExampleCode.GDMainCharObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects2[0] : null), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointY("")), -(1), 0, 1, false, runtimeScene.getVariables().getFromIndex(5));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.eventsList4 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rope"), gdjs.Rope_32ExampleCode.GDRopeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDRopeObjects1[i].drawLine((( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")), (( gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0].getPointX("Swing")), (( gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0].getPointY("Swing")), 3);
}
}}

}


};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.eventsList5 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Rope_32ExampleCode.condition0IsTrue_0.val ) {
{
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Rope_32ExampleCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].getBehavior("Physics2Behavior").removeJoint(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}
}{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0] : null));
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}}

}


};gdjs.Rope_32ExampleCode.eventsList6 = function(runtimeScene) {

{


{
}

}


};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects = Hashtable.newFrom({"MainChar": gdjs.Rope_32ExampleCode.GDMainCharObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Rope_32ExampleCode.GDPlatformObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects = Hashtable.newFrom({"MainChar": gdjs.Rope_32ExampleCode.GDMainCharObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.Rope_32ExampleCode.GDFinishObjects1});gdjs.Rope_32ExampleCode.eventsList7 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].getBehavior("Physics2Behavior").removeJoint(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0] : null));
}}

}


};gdjs.Rope_32ExampleCode.eventsList8 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "time");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects = Hashtable.newFrom({"MainChar": gdjs.Rope_32ExampleCode.GDMainCharObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDwaterObjects1Objects = Hashtable.newFrom({"water": gdjs.Rope_32ExampleCode.GDwaterObjects1});gdjs.Rope_32ExampleCode.eventsList9 = function(runtimeScene) {

{


{
}

}


};gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Rope_32ExampleCode.GDPlatformObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Rope_32ExampleCode.GDPlatformObjects1});gdjs.Rope_32ExampleCode.eventsList10 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(0.05);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").applyImpulse(0.2, 0, (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointX("")), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointY("")));
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0.001);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "time");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time2");
}}

}


{


gdjs.Rope_32ExampleCode.eventsList1(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.eventsList2(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Rope_32ExampleCode.eventsList5(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.eventsList6(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Rope_32ExampleCode.GDPlatformObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects, "Physics2Behavior", gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects, false);
}if ( gdjs.Rope_32ExampleCode.condition0IsTrue_0.val ) {
{
{gdjs.Rope_32ExampleCode.conditionTrue_1 = gdjs.Rope_32ExampleCode.condition1IsTrue_0;
gdjs.Rope_32ExampleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8000588);
}
}}
if (gdjs.Rope_32ExampleCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDMainCharObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").applyImpulse((gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityX()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityY()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointX("")), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointY("")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length;i<l;++i) {
    if ( gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityLength() < 0.0001 ) {
        gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = true;
        gdjs.Rope_32ExampleCode.GDMainCharObjects1[k] = gdjs.Rope_32ExampleCode.GDMainCharObjects1[i];
        ++k;
    }
}
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = k;}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length;i<l;++i) {
    if ( gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getY() > 2200 ) {
        gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = true;
        gdjs.Rope_32ExampleCode.GDMainCharObjects1[k] = gdjs.Rope_32ExampleCode.GDMainCharObjects1[i];
        ++k;
    }
}
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = k;}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Rope_32ExampleCode.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDFinishObjects1Objects, false, runtimeScene, false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BasicFlame2"), gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BasicSmoke"), gdjs.Rope_32ExampleCode.GDBasicSmokeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1[i].setPosition((( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")),(( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDBasicSmokeObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDBasicSmokeObjects1[i].setPosition((( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")),(( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("creator"), gdjs.Rope_32ExampleCode.GDcreatorObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDcreatorObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDcreatorObjects1[i].setX(gdjs.Rope_32ExampleCode.GDcreatorObjects1[i].getX() + (10));
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "time1");
}}

}


{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "time1");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("creator"), gdjs.Rope_32ExampleCode.GDcreatorObjects1);
gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time1");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, (( gdjs.Rope_32ExampleCode.GDcreatorObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDcreatorObjects1[0].getPointX("")), gdjs.randomInRange(150, 1740), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.Rope_32ExampleCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDwaterObjects1[i].setOpacity(180);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.Rope_32ExampleCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDwaterObjects1[i].setX((( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")) - 3000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainChar"), gdjs.Rope_32ExampleCode.GDMainCharObjects1);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.Rope_32ExampleCode.GDwaterObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDwaterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasicFlame2"), gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1);
/* Reuse gdjs.Rope_32ExampleCode.GDMainCharObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "time2");
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").setGravity(5, 10);
}
}
{ //Subevents
gdjs.Rope_32ExampleCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "time2");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].setZOrder(10000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, false, runtimeScene, false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDSwingBoxObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].separateFromObjectsList(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Rope_32ExampleCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwingBox"), gdjs.Rope_32ExampleCode.GDSwingBoxObjects1);

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDPlatformObjects1 */
/* Reuse gdjs.Rope_32ExampleCode.GDSwingBoxObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].separateFromObjectsList(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects, false);
}
}}

}


{


{
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


};

gdjs.Rope_32ExampleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDSwingBoxObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects1.length = 0;
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects2.length = 0;
gdjs.Rope_32ExampleCode.GDBasicFlame2Objects3.length = 0;
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDBasicSmokeObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDNewObjectObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDNewObjectObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDNewObjectObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDcreatorObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDcreatorObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDcreatorObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDwaterObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDwaterObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDwaterObjects3.length = 0;

gdjs.Rope_32ExampleCode.eventsList10(runtimeScene);
return;

}

gdjs['Rope_32ExampleCode'] = gdjs.Rope_32ExampleCode;
