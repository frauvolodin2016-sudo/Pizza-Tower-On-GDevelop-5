gdjs.Jonh_32GutterCode = {};
gdjs.Jonh_32GutterCode.localVariables = [];
gdjs.Jonh_32GutterCode.idToCallbackMap = new Map();
gdjs.Jonh_32GutterCode.GDPlayerObjects1= [];
gdjs.Jonh_32GutterCode.GDPlayerObjects2= [];
gdjs.Jonh_32GutterCode.GDBlockObjects1= [];
gdjs.Jonh_32GutterCode.GDBlockObjects2= [];
gdjs.Jonh_32GutterCode.GDPeppironiObjects1= [];
gdjs.Jonh_32GutterCode.GDPeppironiObjects2= [];
gdjs.Jonh_32GutterCode.GDLogoObjects1= [];
gdjs.Jonh_32GutterCode.GDLogoObjects2= [];
gdjs.Jonh_32GutterCode.GDNewTileMapObjects1= [];
gdjs.Jonh_32GutterCode.GDNewTileMapObjects2= [];
gdjs.Jonh_32GutterCode.GDTutorialObjects1= [];
gdjs.Jonh_32GutterCode.GDTutorialObjects2= [];
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects1= [];
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects2= [];
gdjs.Jonh_32GutterCode.GDSpikeObjects1= [];
gdjs.Jonh_32GutterCode.GDSpikeObjects2= [];
gdjs.Jonh_32GutterCode.GDbgObjects1= [];
gdjs.Jonh_32GutterCode.GDbgObjects2= [];
gdjs.Jonh_32GutterCode.GDNewSpriteObjects1= [];
gdjs.Jonh_32GutterCode.GDNewSpriteObjects2= [];
gdjs.Jonh_32GutterCode.GDNewSprite2Objects1= [];
gdjs.Jonh_32GutterCode.GDNewSprite2Objects2= [];
gdjs.Jonh_32GutterCode.GDNewTextObjects1= [];
gdjs.Jonh_32GutterCode.GDNewTextObjects2= [];
gdjs.Jonh_32GutterCode.GDSlimeObjects1= [];
gdjs.Jonh_32GutterCode.GDSlimeObjects2= [];
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1= [];
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects2= [];
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1= [];
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects2= [];


gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Jonh_32GutterCode.GDPlayerObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Jonh_32GutterCode.GDSpikeObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Jonh_32GutterCode.GDPlayerObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPeppironiObjects1Objects = Hashtable.newFrom({"Peppironi": gdjs.Jonh_32GutterCode.GDPeppironiObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Jonh_32GutterCode.GDPlayerObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Jonh_32GutterCode.GDNewSprite2Objects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Jonh_32GutterCode.GDSlimeObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDLeft_95959595HitBoxObjects1Objects = Hashtable.newFrom({"Left_HitBox": gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Jonh_32GutterCode.GDSlimeObjects1});
gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDRigt_95959595HitBoxObjects1Objects = Hashtable.newFrom({"Rigt_HitBox": gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1});
gdjs.Jonh_32GutterCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Jonh_32GutterCode.GDPlayerObjects1[k] = gdjs.Jonh_32GutterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Jonh_32GutterCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Jonh_32GutterCode.GDPlayerObjects1[k] = gdjs.Jonh_32GutterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Jonh_32GutterCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_jump.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Jonh_32GutterCode.GDPlayerObjects1.length !== 0 ? gdjs.Jonh_32GutterCode.GDPlayerObjects1[0] : null), true, "", 0);
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Jonh_32GutterCode.GDSpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects, gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSpikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].setPosition(128,523);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(1250);
}
}
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Mach 3");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_mach3.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(400);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Peppironi"), gdjs.Jonh_32GutterCode.GDPeppironiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects, gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPeppironiObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "The End");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Jonh_32GutterCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Jonh_32GutterCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDPlayerObjects1Objects, gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Jonh_32GutterCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_collect.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Jonh_32GutterCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariableString(gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.Jonh_32GutterCode.GDSlimeObjects1[k] = gdjs.Jonh_32GutterCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Jonh_32GutterCode.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Left_HitBox"), gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1);
/* Reuse gdjs.Jonh_32GutterCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].addForceTowardObject((gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1.length !== 0 ? gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1[0] : null), 100, 0);
}
}
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_HitBox"), gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Jonh_32GutterCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSlimeObjects1Objects, gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDLeft_95959595HitBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].returnVariable(gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Jonh_32GutterCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariableString(gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.Jonh_32GutterCode.GDSlimeObjects1[k] = gdjs.Jonh_32GutterCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Jonh_32GutterCode.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rigt_HitBox"), gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1);
/* Reuse gdjs.Jonh_32GutterCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].addForceTowardObject((gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1.length !== 0 ? gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1[0] : null), 100, 0);
}
}
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rigt_HitBox"), gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Jonh_32GutterCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDSlimeObjects1Objects, gdjs.Jonh_32GutterCode.mapOfGDgdjs_9546Jonh_959532GutterCode_9546GDRigt_95959595HitBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Jonh_32GutterCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Jonh_32GutterCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].returnVariable(gdjs.Jonh_32GutterCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Pizza_Tower_-_Entrance_Secret_V1.wav", true, 50, 1);
}
}

}


};

gdjs.Jonh_32GutterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Jonh_32GutterCode.GDPlayerObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDPlayerObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDBlockObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDBlockObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDPeppironiObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDPeppironiObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDLogoObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDLogoObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewTileMapObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewTileMapObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDTutorialObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDTutorialObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects1.length = 0;
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects2.length = 0;
gdjs.Jonh_32GutterCode.GDSpikeObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDSpikeObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDbgObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDbgObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewSpriteObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewSpriteObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewSprite2Objects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewSprite2Objects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewTextObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewTextObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDSlimeObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDSlimeObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects2.length = 0;

gdjs.Jonh_32GutterCode.eventsList0(runtimeScene);
gdjs.Jonh_32GutterCode.GDPlayerObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDPlayerObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDBlockObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDBlockObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDPeppironiObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDPeppironiObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDLogoObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDLogoObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewTileMapObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewTileMapObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDTutorialObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDTutorialObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects1.length = 0;
gdjs.Jonh_32GutterCode.GDTutorial_95952Objects2.length = 0;
gdjs.Jonh_32GutterCode.GDSpikeObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDSpikeObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDbgObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDbgObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewSpriteObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewSpriteObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewSprite2Objects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewSprite2Objects2.length = 0;
gdjs.Jonh_32GutterCode.GDNewTextObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDNewTextObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDSlimeObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDSlimeObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDLeft_9595HitBoxObjects2.length = 0;
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects1.length = 0;
gdjs.Jonh_32GutterCode.GDRigt_9595HitBoxObjects2.length = 0;


return;

}

gdjs['Jonh_32GutterCode'] = gdjs.Jonh_32GutterCode;
