gdjs.FinaACode = {};
gdjs.FinaACode.localVariables = [];
gdjs.FinaACode.GDNewSpriteObjects1= [];
gdjs.FinaACode.GDNewSpriteObjects2= [];
gdjs.FinaACode.GDNewSpriteObjects3= [];
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1= [];
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2= [];
gdjs.FinaACode.GDWhiteDecoratedButtonObjects3= [];
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1= [];
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2= [];
gdjs.FinaACode.GDWhiteDecoratedButton2Objects3= [];
gdjs.FinaACode.GDInstruccionObjects1= [];
gdjs.FinaACode.GDInstruccionObjects2= [];
gdjs.FinaACode.GDInstruccionObjects3= [];


gdjs.FinaACode.asyncCallback23409476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaACode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
}gdjs.FinaACode.localVariables.length = 0;
}
gdjs.FinaACode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaACode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaACode.asyncCallback23409476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaACode.asyncCallback23415412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaACode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
}gdjs.FinaACode.localVariables.length = 0;
}
gdjs.FinaACode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaACode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaACode.asyncCallback23415412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaACode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1, gdjs.FinaACode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1, gdjs.FinaACode.GDWhiteDecoratedButton2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.FinaACode.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.FinaACode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}}

}


};gdjs.FinaACode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.FinaACode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButton2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\intentardenuevo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.FinaACode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaACode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaACode.GDInstruccionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaACode.GDInstruccionObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDInstruccionObjects2[k] = gdjs.FinaACode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaACode.GDInstruccionObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDInstruccionObjects2[k] = gdjs.FinaACode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaACode.GDInstruccionObjects2[i].getVariableBoolean(gdjs.FinaACode.GDInstruccionObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDInstruccionObjects2[k] = gdjs.FinaACode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaACode.GDInstruccionObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDInstruccionObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\intento1.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaACode.GDInstruccionObjects2.length ;i < len;++i) {
    gdjs.FinaACode.GDInstruccionObjects2[i].returnVariable(gdjs.FinaACode.GDInstruccionObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FinaACode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaACode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaACode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaACode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaACode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaACode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaACode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaACode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaACode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaACode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(210, 69);
}
for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(210, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaACode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaACode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaACode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(200, 66.666666666666);
}
for(var i = 0, len = gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaACode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(200, 66.666666666666);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaACode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDInstruccionObjects1.length;i<l;++i) {
    if ( gdjs.FinaACode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaACode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDInstruccionObjects1[k] = gdjs.FinaACode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaACode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1.05);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaACode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaACode.GDInstruccionObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaACode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaACode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaACode.GDInstruccionObjects1[k] = gdjs.FinaACode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaACode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaACode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaACode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaACode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinaACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinaACode.GDNewSpriteObjects1.length = 0;
gdjs.FinaACode.GDNewSpriteObjects2.length = 0;
gdjs.FinaACode.GDNewSpriteObjects3.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaACode.GDInstruccionObjects1.length = 0;
gdjs.FinaACode.GDInstruccionObjects2.length = 0;
gdjs.FinaACode.GDInstruccionObjects3.length = 0;

gdjs.FinaACode.eventsList5(runtimeScene);
gdjs.FinaACode.GDNewSpriteObjects1.length = 0;
gdjs.FinaACode.GDNewSpriteObjects2.length = 0;
gdjs.FinaACode.GDNewSpriteObjects3.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaACode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaACode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaACode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaACode.GDInstruccionObjects1.length = 0;
gdjs.FinaACode.GDInstruccionObjects2.length = 0;
gdjs.FinaACode.GDInstruccionObjects3.length = 0;


return;

}

gdjs['FinaACode'] = gdjs.FinaACode;
