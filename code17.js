gdjs.FinaPCode = {};
gdjs.FinaPCode.localVariables = [];
gdjs.FinaPCode.GDNewSpriteObjects1= [];
gdjs.FinaPCode.GDNewSpriteObjects2= [];
gdjs.FinaPCode.GDNewSpriteObjects3= [];
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.FinaPCode.GDInstruccionObjects1= [];
gdjs.FinaPCode.GDInstruccionObjects2= [];
gdjs.FinaPCode.GDInstruccionObjects3= [];


gdjs.FinaPCode.asyncCallback24237748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaPCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(13);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(20);
}gdjs.FinaPCode.localVariables.length = 0;
}
gdjs.FinaPCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaPCode.asyncCallback24237748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaPCode.asyncCallback24243684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaPCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(13);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(20);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P1", false);
}gdjs.FinaPCode.localVariables.length = 0;
}
gdjs.FinaPCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaPCode.asyncCallback24243684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaPCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.FinaPCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FinaPCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\intentardenuevo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.FinaPCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaPCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaPCode.GDInstruccionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaPCode.GDInstruccionObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDInstruccionObjects2[k] = gdjs.FinaPCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaPCode.GDInstruccionObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDInstruccionObjects2[k] = gdjs.FinaPCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDInstruccionObjects2[i].getVariableBoolean(gdjs.FinaPCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDInstruccionObjects2[k] = gdjs.FinaPCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaPCode.GDInstruccionObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDInstruccionObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\intento2.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaPCode.GDInstruccionObjects2.length ;i < len;++i) {
    gdjs.FinaPCode.GDInstruccionObjects2[i].returnVariable(gdjs.FinaPCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FinaPCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaPCode.eventsList0(runtimeScene);} //End of subevents
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaPCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaPCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaPCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaPCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaPCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaPCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaPCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaPCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(210, 69);
}
for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(210, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(200, 66.6666666666);
}
for(var i = 0, len = gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(200, 66.6666666666);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaPCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaPCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaPCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDInstruccionObjects1[k] = gdjs.FinaPCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaPCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaPCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaPCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( gdjs.FinaPCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaPCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaPCode.GDInstruccionObjects1[k] = gdjs.FinaPCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaPCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaPCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaPCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaPCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1.05);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinaPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinaPCode.GDNewSpriteObjects1.length = 0;
gdjs.FinaPCode.GDNewSpriteObjects2.length = 0;
gdjs.FinaPCode.GDNewSpriteObjects3.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaPCode.GDInstruccionObjects1.length = 0;
gdjs.FinaPCode.GDInstruccionObjects2.length = 0;
gdjs.FinaPCode.GDInstruccionObjects3.length = 0;

gdjs.FinaPCode.eventsList5(runtimeScene);
gdjs.FinaPCode.GDNewSpriteObjects1.length = 0;
gdjs.FinaPCode.GDNewSpriteObjects2.length = 0;
gdjs.FinaPCode.GDNewSpriteObjects3.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaPCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaPCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaPCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaPCode.GDInstruccionObjects1.length = 0;
gdjs.FinaPCode.GDInstruccionObjects2.length = 0;
gdjs.FinaPCode.GDInstruccionObjects3.length = 0;


return;

}

gdjs['FinaPCode'] = gdjs.FinaPCode;
