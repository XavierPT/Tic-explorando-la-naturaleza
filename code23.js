gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.GDNewSpriteObjects1= [];
gdjs.FinalCode.GDNewSpriteObjects2= [];
gdjs.FinalCode.GDNewSpriteObjects3= [];
gdjs.FinalCode.GDNewSpriteObjects4= [];
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects4= [];
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.FinalCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.FinalCode.GDWhiteDecoratedButtonObjects4= [];
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.FinalCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.FinalCode.GDWhiteDecoratedButton2Objects4= [];
gdjs.FinalCode.GDInstruccionObjects1= [];
gdjs.FinalCode.GDInstruccionObjects2= [];
gdjs.FinalCode.GDInstruccionObjects3= [];
gdjs.FinalCode.GDInstruccionObjects4= [];
gdjs.FinalCode.GDInstruccion2Objects1= [];
gdjs.FinalCode.GDInstruccion2Objects2= [];
gdjs.FinalCode.GDInstruccion2Objects3= [];
gdjs.FinalCode.GDInstruccion2Objects4= [];


gdjs.FinalCode.asyncCallback25045404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinalCode.asyncCallback25045404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.asyncCallback25051348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.FinalCode.asyncCallback25051348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.FinalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FinalCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinalCode.GDWhiteDecoratedButtonObjects2, gdjs.FinalCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.FinalCode.GDWhiteDecoratedButton2Objects2, gdjs.FinalCode.GDWhiteDecoratedButton2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\regresar.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\A1\\Pinguino.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.FinalCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinalCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinalCode.GDInstruccionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinalCode.GDInstruccionObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccionObjects2[k] = gdjs.FinalCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccionObjects2[i].getVariableBoolean(gdjs.FinalCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccionObjects2[k] = gdjs.FinalCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.FinalCode.GDInstruccionObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccionObjects2[k] = gdjs.FinalCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccionObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccionObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\_Felicidades por com.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccionObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccionObjects2[i].returnVariable(gdjs.FinalCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.FinalCode.GDInstruccion2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccion2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccion2Objects2[i].getVariableNumber(gdjs.FinalCode.GDInstruccion2Objects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccion2Objects2[k] = gdjs.FinalCode.GDInstruccion2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccion2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccion2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccion2Objects2[i].getVariableBoolean(gdjs.FinalCode.GDInstruccion2Objects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccion2Objects2[k] = gdjs.FinalCode.GDInstruccion2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccion2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccion2Objects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccion2Objects2[i].getVariableNumber(gdjs.FinalCode.GDInstruccion2Objects2[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccion2Objects2[k] = gdjs.FinalCode.GDInstruccion2Objects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccion2Objects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccion2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\puntaje.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccion2Objects2.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccion2Objects2[i].returnVariable(gdjs.FinalCode.GDInstruccion2Objects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FinalCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinalCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.FinalCode.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinalCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccion2Objects1[i].returnVariable(gdjs.FinalCode.GDInstruccion2Objects1[i].getVariables().getFromIndex(1)).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinalCode.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.FinalCode.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccionObjects1[i].returnVariable(gdjs.FinalCode.GDInstruccionObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.FinalCode.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccion2Objects1[i].returnVariable(gdjs.FinalCode.GDInstruccion2Objects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinalCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FinalCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.FinalCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.FinalCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.FinalCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinalCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinalCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccionObjects1[k] = gdjs.FinalCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1.05);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.FinalCode.GDInstruccionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccionObjects1.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDInstruccionObjects1[i].getVariableNumber(gdjs.FinalCode.GDInstruccionObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccionObjects1[k] = gdjs.FinalCode.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccionObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.FinalCode.GDInstruccion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccion2Objects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDInstruccion2Objects1[i].getVariableNumber(gdjs.FinalCode.GDInstruccion2Objects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccion2Objects1[k] = gdjs.FinalCode.GDInstruccion2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccion2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccion2Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccion2Objects1[i].getBehavior("Scale").setScale(1.05);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.FinalCode.GDInstruccion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDInstruccion2Objects1.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDInstruccion2Objects1[i].getVariableNumber(gdjs.FinalCode.GDInstruccion2Objects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDInstruccion2Objects1[k] = gdjs.FinalCode.GDInstruccion2Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDInstruccion2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDInstruccion2Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDInstruccion2Objects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDNewSpriteObjects4.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.FinalCode.GDInstruccionObjects1.length = 0;
gdjs.FinalCode.GDInstruccionObjects2.length = 0;
gdjs.FinalCode.GDInstruccionObjects3.length = 0;
gdjs.FinalCode.GDInstruccionObjects4.length = 0;
gdjs.FinalCode.GDInstruccion2Objects1.length = 0;
gdjs.FinalCode.GDInstruccion2Objects2.length = 0;
gdjs.FinalCode.GDInstruccion2Objects3.length = 0;
gdjs.FinalCode.GDInstruccion2Objects4.length = 0;

gdjs.FinalCode.eventsList5(runtimeScene);
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDNewSpriteObjects4.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.FinalCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.FinalCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.FinalCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.FinalCode.GDInstruccionObjects1.length = 0;
gdjs.FinalCode.GDInstruccionObjects2.length = 0;
gdjs.FinalCode.GDInstruccionObjects3.length = 0;
gdjs.FinalCode.GDInstruccionObjects4.length = 0;
gdjs.FinalCode.GDInstruccion2Objects1.length = 0;
gdjs.FinalCode.GDInstruccion2Objects2.length = 0;
gdjs.FinalCode.GDInstruccion2Objects3.length = 0;
gdjs.FinalCode.GDInstruccion2Objects4.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
