gdjs.PS_32Room_322Code = {};
gdjs.PS_32Room_322Code.localVariables = [];
gdjs.PS_32Room_322Code.idToCallbackMap = new Map();
gdjs.PS_32Room_322Code.GDNewTileMapObjects1= [];
gdjs.PS_32Room_322Code.GDNewTileMapObjects2= [];
gdjs.PS_32Room_322Code.GDPlayerObjects1= [];
gdjs.PS_32Room_322Code.GDPlayerObjects2= [];
gdjs.PS_32Room_322Code.GDNewSprite2Objects1= [];
gdjs.PS_32Room_322Code.GDNewSprite2Objects2= [];
gdjs.PS_32Room_322Code.GDNewTextObjects1= [];
gdjs.PS_32Room_322Code.GDNewTextObjects2= [];


gdjs.PS_32Room_322Code.mapOfGDgdjs_9546PS_959532Room_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PS_32Room_322Code.GDPlayerObjects1});
gdjs.PS_32Room_322Code.mapOfGDgdjs_9546PS_959532Room_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.PS_32Room_322Code.GDNewSprite2Objects1});
gdjs.PS_32Room_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PS_32Room_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.PS_32Room_322Code.GDPlayerObjects1[k] = gdjs.PS_32Room_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PS_32Room_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PS_32Room_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PS_32Room_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.PS_32Room_322Code.GDPlayerObjects1[k] = gdjs.PS_32Room_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PS_32Room_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PS_32Room_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PS_32Room_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.PS_32Room_322Code.GDPlayerObjects1[k] = gdjs.PS_32Room_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PS_32Room_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PS_32Room_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.PS_32Room_322Code.GDPlayerObjects1.length !== 0 ? gdjs.PS_32Room_322Code.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -1000, 10000, 700, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(1250);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(400);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.PS_32Room_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PS_32Room_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PS_32Room_322Code.mapOfGDgdjs_9546PS_959532Room_9595322Code_9546GDPlayerObjects1Objects, gdjs.PS_32Room_322Code.mapOfGDgdjs_9546PS_959532Room_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PS_32Room_322Code.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.PS_32Room_322Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.PS_32Room_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.PS_32Room_322Code.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};

gdjs.PS_32Room_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PS_32Room_322Code.GDNewTileMapObjects1.length = 0;
gdjs.PS_32Room_322Code.GDNewTileMapObjects2.length = 0;
gdjs.PS_32Room_322Code.GDPlayerObjects1.length = 0;
gdjs.PS_32Room_322Code.GDPlayerObjects2.length = 0;
gdjs.PS_32Room_322Code.GDNewSprite2Objects1.length = 0;
gdjs.PS_32Room_322Code.GDNewSprite2Objects2.length = 0;
gdjs.PS_32Room_322Code.GDNewTextObjects1.length = 0;
gdjs.PS_32Room_322Code.GDNewTextObjects2.length = 0;

gdjs.PS_32Room_322Code.eventsList0(runtimeScene);
gdjs.PS_32Room_322Code.GDNewTileMapObjects1.length = 0;
gdjs.PS_32Room_322Code.GDNewTileMapObjects2.length = 0;
gdjs.PS_32Room_322Code.GDPlayerObjects1.length = 0;
gdjs.PS_32Room_322Code.GDPlayerObjects2.length = 0;
gdjs.PS_32Room_322Code.GDNewSprite2Objects1.length = 0;
gdjs.PS_32Room_322Code.GDNewSprite2Objects2.length = 0;
gdjs.PS_32Room_322Code.GDNewTextObjects1.length = 0;
gdjs.PS_32Room_322Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['PS_32Room_322Code'] = gdjs.PS_32Room_322Code;
