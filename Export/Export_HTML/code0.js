gdjs.scene1Code = {};
gdjs.scene1Code.localVariables = [];
gdjs.scene1Code.forEachIndex2 = 0;

gdjs.scene1Code.forEachObjects2 = [];

gdjs.scene1Code.forEachTemporary2 = null;

gdjs.scene1Code.forEachTotalCount2 = 0;

gdjs.scene1Code.GDperso_9595principalObjects1= [];
gdjs.scene1Code.GDperso_9595principalObjects2= [];
gdjs.scene1Code.GDperso_9595principalObjects3= [];
gdjs.scene1Code.GDplateforme_9595herbe1Objects1= [];
gdjs.scene1Code.GDplateforme_9595herbe1Objects2= [];
gdjs.scene1Code.GDplateforme_9595herbe1Objects3= [];
gdjs.scene1Code.GDSmallBridgeObjects1= [];
gdjs.scene1Code.GDSmallBridgeObjects2= [];
gdjs.scene1Code.GDSmallBridgeObjects3= [];
gdjs.scene1Code.GDBushObjects1= [];
gdjs.scene1Code.GDBushObjects2= [];
gdjs.scene1Code.GDBushObjects3= [];
gdjs.scene1Code.GDCloudObjects1= [];
gdjs.scene1Code.GDCloudObjects2= [];
gdjs.scene1Code.GDCloudObjects3= [];
gdjs.scene1Code.GDCoinObjects1= [];
gdjs.scene1Code.GDCoinObjects2= [];
gdjs.scene1Code.GDCoinObjects3= [];
gdjs.scene1Code.GDScoreObjects1= [];
gdjs.scene1Code.GDScoreObjects2= [];
gdjs.scene1Code.GDScoreObjects3= [];
gdjs.scene1Code.GDSlimeObjects1= [];
gdjs.scene1Code.GDSlimeObjects2= [];
gdjs.scene1Code.GDSlimeObjects3= [];
gdjs.scene1Code.GDleftObjects1= [];
gdjs.scene1Code.GDleftObjects2= [];
gdjs.scene1Code.GDleftObjects3= [];
gdjs.scene1Code.GDrightObjects1= [];
gdjs.scene1Code.GDrightObjects2= [];
gdjs.scene1Code.GDrightObjects3= [];
gdjs.scene1Code.GDcheckpointObjects1= [];
gdjs.scene1Code.GDcheckpointObjects2= [];
gdjs.scene1Code.GDcheckpointObjects3= [];
gdjs.scene1Code.GDMoucheObjects1= [];
gdjs.scene1Code.GDMoucheObjects2= [];
gdjs.scene1Code.GDMoucheObjects3= [];
gdjs.scene1Code.GDTrampolineObjects1= [];
gdjs.scene1Code.GDTrampolineObjects2= [];
gdjs.scene1Code.GDTrampolineObjects3= [];
gdjs.scene1Code.GDSpringObjects1= [];
gdjs.scene1Code.GDSpringObjects2= [];
gdjs.scene1Code.GDSpringObjects3= [];
gdjs.scene1Code.GDDownObjects1= [];
gdjs.scene1Code.GDDownObjects2= [];
gdjs.scene1Code.GDDownObjects3= [];
gdjs.scene1Code.GDArrowObjects1= [];
gdjs.scene1Code.GDArrowObjects2= [];
gdjs.scene1Code.GDArrowObjects3= [];


gdjs.scene1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.scene1Code.GDperso_9595principalObjects1, gdjs.scene1Code.GDperso_9595principalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects2.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects2[k] = gdjs.scene1Code.GDperso_9595principalObjects2[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects2 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects2.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects2[i].getBehavior("Animation").setAnimationName("Running");
}
}}

}


{

/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( !(gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.scene1Code.GDCoinObjects1});
gdjs.scene1Code.eventsList1 = function(runtimeScene) {

};gdjs.scene1Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.scene1Code.GDCoinObjects1 */

for (gdjs.scene1Code.forEachIndex2 = 0;gdjs.scene1Code.forEachIndex2 < gdjs.scene1Code.GDCoinObjects1.length;++gdjs.scene1Code.forEachIndex2) {
gdjs.scene1Code.GDCoinObjects2.length = 0;


gdjs.scene1Code.forEachTemporary2 = gdjs.scene1Code.GDCoinObjects1[gdjs.scene1Code.forEachIndex2];
gdjs.scene1Code.GDCoinObjects2.push(gdjs.scene1Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.scene1Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs.scene1Code.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


};gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.scene1Code.GDSlimeObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.scene1Code.GDrightObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.scene1Code.GDSlimeObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.scene1Code.GDleftObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.scene1Code.GDSlimeObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.scene1Code.GDSlimeObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects = Hashtable.newFrom({"Mouche": gdjs.scene1Code.GDMoucheObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.scene1Code.GDrightObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects = Hashtable.newFrom({"Mouche": gdjs.scene1Code.GDMoucheObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.scene1Code.GDleftObjects1});
gdjs.scene1Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getY() > ((( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointY("")) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects = Hashtable.newFrom({"Mouche": gdjs.scene1Code.GDMoucheObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects = Hashtable.newFrom({"Mouche": gdjs.scene1Code.GDMoucheObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.scene1Code.GDcheckpointObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDTrampolineObjects1Objects = Hashtable.newFrom({"Trampoline": gdjs.scene1Code.GDTrampolineObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.scene1Code.GDSpringObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDplateforme_95959595herbe1Objects1Objects = Hashtable.newFrom({"plateforme_herbe1": gdjs.scene1Code.GDplateforme_9595herbe1Objects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.scene1Code.GDSpringObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.scene1Code.GDDownObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects = Hashtable.newFrom({"perso_principal": gdjs.scene1Code.GDperso_9595principalObjects1});
gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.scene1Code.GDSpringObjects1});
gdjs.scene1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointY("")), 0.05), "", 0);
}
{ //Subevents
gdjs.scene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointX("")), 0.05), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.scene1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.scene1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.scene1Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDScoreObjects1[i].getBehavior("Text").setText("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.scene1Code.GDDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.scene1Code.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.scene1Code.GDrightObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.scene1Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.scene1Code.GDDownObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDDownObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("checkpointX").setNumber((( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().get("checkpointY").setNumber((( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.scene1Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDrightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].returnVariable(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.scene1Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDleftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].returnVariable(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSlimeObjects1[i].getVariableString(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSlimeObjects1[k] = gdjs.scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSlimeObjects1[i].getVariableString(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSlimeObjects1[k] = gdjs.scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSlimeObjects1[i].getVariableString(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSlimeObjects1[k] = gdjs.scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSlimeObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSlimeObjects1 */
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(200);
}{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSlimeObjects1[i].returnVariable(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("none");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.scene1Code.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSlimeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSlimeObjects1[i].getVariableString(gdjs.scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSlimeObjects1[k] = gdjs.scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSlimeObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.scene1Code.GDcheckpointObjects1);
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointY")) - ((gdjs.scene1Code.GDperso_9595principalObjects1[i].getHeight()) - (( gdjs.scene1Code.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDcheckpointObjects1[0].getHeight())));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.scene1Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDrightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].returnVariable(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.scene1Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDleftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].returnVariable(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) == "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].addPolarForce(90, 100, 0);
}
}
{ //Subevents
gdjs.scene1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDMoucheObjects1 */
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.scene1Code.GDMoucheObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDMoucheObjects1[i].returnVariable(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)).setString("none");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouche"), gdjs.scene1Code.GDMoucheObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDMoucheObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDMoucheObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDMoucheObjects1[i].getVariableString(gdjs.scene1Code.GDMoucheObjects1[i].getVariables().getFromIndex(0)) != "none" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDMoucheObjects1[k] = gdjs.scene1Code.GDMoucheObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDMoucheObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.scene1Code.GDcheckpointObjects1);
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointY")) - ((gdjs.scene1Code.GDperso_9595principalObjects1[i].getHeight()) - (( gdjs.scene1Code.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDcheckpointObjects1[0].getHeight())));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.scene1Code.GDcheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDcheckpointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDcheckpointObjects1 */
{runtimeScene.getScene().getVariables().get("checkpointX").setNumber((( gdjs.scene1Code.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDcheckpointObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().get("checkpointY").setNumber((( gdjs.scene1Code.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDcheckpointObjects1[0].getPointY("")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getY() > gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * 0.75 ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.scene1Code.GDperso_9595principalObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDperso_9595principalObjects1[0].getPointY("")), 0.05), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trampoline"), gdjs.scene1Code.GDTrampolineObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDTrampolineObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.scene1Code.GDSpringObjects1);
gdjs.copyArray(runtimeScene.getObjects("plateforme_herbe1"), gdjs.scene1Code.GDplateforme_9595herbe1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDplateforme_95959595herbe1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSpringObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSpringObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSpringObjects1[i].returnVariable(gdjs.scene1Code.GDSpringObjects1[i].getVariables().getFromIndex(0)).setString("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.scene1Code.GDDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.scene1Code.GDSpringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDDownObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSpringObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSpringObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSpringObjects1[i].returnVariable(gdjs.scene1Code.GDSpringObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.scene1Code.GDSpringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSpringObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSpringObjects1[i].getVariableString(gdjs.scene1Code.GDSpringObjects1[i].getVariables().getFromIndex(0)) == "up" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSpringObjects1[k] = gdjs.scene1Code.GDSpringObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSpringObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSpringObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSpringObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSpringObjects1[i].addPolarForce(270, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.scene1Code.GDSpringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDSpringObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSpringObjects1[i].getVariableString(gdjs.scene1Code.GDSpringObjects1[i].getVariables().getFromIndex(0)) == "down" ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDSpringObjects1[k] = gdjs.scene1Code.GDSpringObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSpringObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDSpringObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDSpringObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSpringObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.scene1Code.GDSpringObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDperso_95959595principalObjects1Objects, gdjs.scene1Code.mapOfGDgdjs_9546scene1Code_9546GDSpringObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.scene1Code.GDperso_9595principalObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene1Code.GDperso_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDperso_9595principalObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.scene1Code.GDperso_9595principalObjects1[k] = gdjs.scene1Code.GDperso_9595principalObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDperso_9595principalObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 240;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.scene1Code.GDcheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("perso_principal"), gdjs.scene1Code.GDperso_9595principalObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDperso_9595principalObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDperso_9595principalObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("checkpointY")) - ((gdjs.scene1Code.GDperso_9595principalObjects1[i].getHeight()) - (( gdjs.scene1Code.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.scene1Code.GDcheckpointObjects1[0].getHeight())));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(100);
}}

}


};

gdjs.scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene1Code.GDperso_9595principalObjects1.length = 0;
gdjs.scene1Code.GDperso_9595principalObjects2.length = 0;
gdjs.scene1Code.GDperso_9595principalObjects3.length = 0;
gdjs.scene1Code.GDplateforme_9595herbe1Objects1.length = 0;
gdjs.scene1Code.GDplateforme_9595herbe1Objects2.length = 0;
gdjs.scene1Code.GDplateforme_9595herbe1Objects3.length = 0;
gdjs.scene1Code.GDSmallBridgeObjects1.length = 0;
gdjs.scene1Code.GDSmallBridgeObjects2.length = 0;
gdjs.scene1Code.GDSmallBridgeObjects3.length = 0;
gdjs.scene1Code.GDBushObjects1.length = 0;
gdjs.scene1Code.GDBushObjects2.length = 0;
gdjs.scene1Code.GDBushObjects3.length = 0;
gdjs.scene1Code.GDCloudObjects1.length = 0;
gdjs.scene1Code.GDCloudObjects2.length = 0;
gdjs.scene1Code.GDCloudObjects3.length = 0;
gdjs.scene1Code.GDCoinObjects1.length = 0;
gdjs.scene1Code.GDCoinObjects2.length = 0;
gdjs.scene1Code.GDCoinObjects3.length = 0;
gdjs.scene1Code.GDScoreObjects1.length = 0;
gdjs.scene1Code.GDScoreObjects2.length = 0;
gdjs.scene1Code.GDScoreObjects3.length = 0;
gdjs.scene1Code.GDSlimeObjects1.length = 0;
gdjs.scene1Code.GDSlimeObjects2.length = 0;
gdjs.scene1Code.GDSlimeObjects3.length = 0;
gdjs.scene1Code.GDleftObjects1.length = 0;
gdjs.scene1Code.GDleftObjects2.length = 0;
gdjs.scene1Code.GDleftObjects3.length = 0;
gdjs.scene1Code.GDrightObjects1.length = 0;
gdjs.scene1Code.GDrightObjects2.length = 0;
gdjs.scene1Code.GDrightObjects3.length = 0;
gdjs.scene1Code.GDcheckpointObjects1.length = 0;
gdjs.scene1Code.GDcheckpointObjects2.length = 0;
gdjs.scene1Code.GDcheckpointObjects3.length = 0;
gdjs.scene1Code.GDMoucheObjects1.length = 0;
gdjs.scene1Code.GDMoucheObjects2.length = 0;
gdjs.scene1Code.GDMoucheObjects3.length = 0;
gdjs.scene1Code.GDTrampolineObjects1.length = 0;
gdjs.scene1Code.GDTrampolineObjects2.length = 0;
gdjs.scene1Code.GDTrampolineObjects3.length = 0;
gdjs.scene1Code.GDSpringObjects1.length = 0;
gdjs.scene1Code.GDSpringObjects2.length = 0;
gdjs.scene1Code.GDSpringObjects3.length = 0;
gdjs.scene1Code.GDDownObjects1.length = 0;
gdjs.scene1Code.GDDownObjects2.length = 0;
gdjs.scene1Code.GDDownObjects3.length = 0;
gdjs.scene1Code.GDArrowObjects1.length = 0;
gdjs.scene1Code.GDArrowObjects2.length = 0;
gdjs.scene1Code.GDArrowObjects3.length = 0;

gdjs.scene1Code.eventsList4(runtimeScene);

return;

}

gdjs['scene1Code'] = gdjs.scene1Code;
