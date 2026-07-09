gdjs.Pizza_32ScapeCode = {};
gdjs.Pizza_32ScapeCode.localVariables = [];
gdjs.Pizza_32ScapeCode.idToCallbackMap = new Map();
gdjs.Pizza_32ScapeCode.GDPlayerObjects1= [];
gdjs.Pizza_32ScapeCode.GDPlayerObjects2= [];
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects1= [];
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects2= [];
gdjs.Pizza_32ScapeCode.GDSpikeObjects1= [];
gdjs.Pizza_32ScapeCode.GDSpikeObjects2= [];
gdjs.Pizza_32ScapeCode.GDPeppironiObjects1= [];
gdjs.Pizza_32ScapeCode.GDPeppironiObjects2= [];
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1= [];
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects2= [];
gdjs.Pizza_32ScapeCode.GDNewTextObjects1= [];
gdjs.Pizza_32ScapeCode.GDNewTextObjects2= [];


gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Pizza_32ScapeCode.GDPlayerObjects1});
gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Pizza_32ScapeCode.GDSpikeObjects1});
gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Pizza_32ScapeCode.GDPlayerObjects1});
gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPeppironiObjects1Objects = Hashtable.newFrom({"Peppironi": gdjs.Pizza_32ScapeCode.GDPeppironiObjects1});
gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Pizza_32ScapeCode.GDPlayerObjects1});
gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1});
gdjs.Pizza_32ScapeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Pizza_32ScapeCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Pizza_32ScapeCode.GDPlayerObjects1[k] = gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Pizza_32ScapeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Pizza_32ScapeCode.GDPlayerObjects1[k] = gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Pizza_32ScapeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Pizza_32ScapeCode.GDPlayerObjects1[k] = gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Pizza_32ScapeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length !== 0 ? gdjs.Pizza_32ScapeCode.GDPlayerObjects1[0] : null), true, "", 0);
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Pizza_32ScapeCode.GDSpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects, gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDSpikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Pizza_32ScapeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].setPosition(100,450);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(1250);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(400);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Peppironi"), gdjs.Pizza_32ScapeCode.GDPeppironiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects, gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPeppironiObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PS Room 2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Pizza_32ScapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDPlayerObjects1Objects, gdjs.Pizza_32ScapeCode.mapOfGDgdjs_9546Pizza_959532ScapeCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Pizza_32ScapeCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.Pizza_32ScapeCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Pizza_32ScapeCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};

gdjs.Pizza_32ScapeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDPlayerObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDSpikeObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDSpikeObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDPeppironiObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDPeppironiObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTextObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTextObjects2.length = 0;

gdjs.Pizza_32ScapeCode.eventsList0(runtimeScene);
gdjs.Pizza_32ScapeCode.GDPlayerObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDPlayerObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTileMapObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDSpikeObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDSpikeObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDPeppironiObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDPeppironiObjects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewSprite2Objects2.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTextObjects1.length = 0;
gdjs.Pizza_32ScapeCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Pizza_32ScapeCode'] = gdjs.Pizza_32ScapeCode;
