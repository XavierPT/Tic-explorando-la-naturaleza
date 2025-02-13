gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects3= [];
gdjs.MenuCode.GDNewSpriteObjects4= [];
gdjs.MenuCode.GDTituloObjects1= [];
gdjs.MenuCode.GDTituloObjects2= [];
gdjs.MenuCode.GDTituloObjects3= [];
gdjs.MenuCode.GDTituloObjects4= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects2= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects3= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects4= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3= [];
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects4= [];
gdjs.MenuCode.GDInstruccionObjects1= [];
gdjs.MenuCode.GDInstruccionObjects2= [];
gdjs.MenuCode.GDInstruccionObjects3= [];
gdjs.MenuCode.GDInstruccionObjects4= [];
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects4= [];


gdjs.MenuCode.asyncCallback22705564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AVideo", true);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback22705564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback22706316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "IVideo", true);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback22706316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback22707124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "IVideo", true);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback22707124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSmallGreenPlasticRoundSwitchObjects1Objects = Hashtable.newFrom({"SmallGreenPlasticRoundSwitch": gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1});
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1, gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1, gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.asyncCallback22716148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AVideo", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback22716148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback22718060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "IVideo", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback22718060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1, gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2);

gdjs.copyArray(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1, gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2, gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3);

gdjs.copyArray(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2, gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\Iniciarjuego.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\ins_01.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariableBoolean(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariableBoolean(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton2"), gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSmallGreenPlasticRoundSwitchObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5));
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].returnVariable(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(495, 95);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(495, 95);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariableNumber(gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1 */
/* Reuse gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(485, 90);
}
for(var i = 0, len = gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(485, 90);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MenuCode.GDTituloObjects1.length = 0;
gdjs.MenuCode.GDTituloObjects2.length = 0;
gdjs.MenuCode.GDTituloObjects3.length = 0;
gdjs.MenuCode.GDTituloObjects4.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects4.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects4.length = 0;
gdjs.MenuCode.GDInstruccionObjects1.length = 0;
gdjs.MenuCode.GDInstruccionObjects2.length = 0;
gdjs.MenuCode.GDInstruccionObjects3.length = 0;
gdjs.MenuCode.GDInstruccionObjects4.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects4.length = 0;

gdjs.MenuCode.eventsList10(runtimeScene);
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MenuCode.GDTituloObjects1.length = 0;
gdjs.MenuCode.GDTituloObjects2.length = 0;
gdjs.MenuCode.GDTituloObjects3.length = 0;
gdjs.MenuCode.GDTituloObjects4.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton2Objects4.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects1.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects2.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects3.length = 0;
gdjs.MenuCode.GDWhiteSquareDecoratedButton3Objects4.length = 0;
gdjs.MenuCode.GDInstruccionObjects1.length = 0;
gdjs.MenuCode.GDInstruccionObjects2.length = 0;
gdjs.MenuCode.GDInstruccionObjects3.length = 0;
gdjs.MenuCode.GDInstruccionObjects4.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.MenuCode.GDSmallGreenPlasticRoundSwitchObjects4.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
