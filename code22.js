gdjs.FinaSCode = {};
gdjs.FinaSCode.localVariables = [];
gdjs.FinaSCode.GDNewSpriteObjects1= [];
gdjs.FinaSCode.GDNewSpriteObjects2= [];
gdjs.FinaSCode.GDNewSpriteObjects3= [];
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.FinaSCode.GDInstruccionObjects1= [];
gdjs.FinaSCode.GDInstruccionObjects2= [];
gdjs.FinaSCode.GDInstruccionObjects3= [];


gdjs.FinaSCode.asyncCallback24696164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaSCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(27);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(15);
}gdjs.FinaSCode.localVariables.length = 0;
}
gdjs.FinaSCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaSCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaSCode.asyncCallback24696164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaSCode.asyncCallback24702100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinaSCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(27);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(15);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S1", false);
}gdjs.FinaSCode.localVariables.length = 0;
}
gdjs.FinaSCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinaSCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinaSCode.asyncCallback24702100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinaSCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.FinaSCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FinaSCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\intentardenuevo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.FinaSCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaSCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaSCode.GDInstruccionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaSCode.GDInstruccionObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDInstruccionObjects2[k] = gdjs.FinaSCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinaSCode.GDInstruccionObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDInstruccionObjects2[k] = gdjs.FinaSCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDInstruccionObjects2[i].getVariableBoolean(gdjs.FinaSCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDInstruccionObjects2[k] = gdjs.FinaSCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinaSCode.GDInstruccionObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDInstruccionObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\intento 3.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinaSCode.GDInstruccionObjects2.length ;i < len;++i) {
    gdjs.FinaSCode.GDInstruccionObjects2[i].returnVariable(gdjs.FinaSCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FinaSCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaSCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaSCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaSCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaSCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaSCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinaSCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinaSCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaSCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinaSCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(210, 69);
}
for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(210, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(200, 66.66666666);
}
for(var i = 0, len = gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(200, 66.66666666);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaSCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( !(gdjs.FinaSCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaSCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDInstruccionObjects1[k] = gdjs.FinaSCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaSCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinaSCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaSCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( gdjs.FinaSCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinaSCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaSCode.GDInstruccionObjects1[k] = gdjs.FinaSCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinaSCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinaSCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinaSCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinaSCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1.05);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinaSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinaSCode.GDNewSpriteObjects1.length = 0;
gdjs.FinaSCode.GDNewSpriteObjects2.length = 0;
gdjs.FinaSCode.GDNewSpriteObjects3.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaSCode.GDInstruccionObjects1.length = 0;
gdjs.FinaSCode.GDInstruccionObjects2.length = 0;
gdjs.FinaSCode.GDInstruccionObjects3.length = 0;

gdjs.FinaSCode.eventsList5(runtimeScene);
gdjs.FinaSCode.GDNewSpriteObjects1.length = 0;
gdjs.FinaSCode.GDNewSpriteObjects2.length = 0;
gdjs.FinaSCode.GDNewSpriteObjects3.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinaSCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinaSCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinaSCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinaSCode.GDInstruccionObjects1.length = 0;
gdjs.FinaSCode.GDInstruccionObjects2.length = 0;
gdjs.FinaSCode.GDInstruccionObjects3.length = 0;


return;

}

gdjs['FinaSCode'] = gdjs.FinaSCode;
