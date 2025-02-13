gdjs.IVideoCode = {};
gdjs.IVideoCode.localVariables = [];
gdjs.IVideoCode.GDNewSpriteObjects1= [];
gdjs.IVideoCode.GDNewSpriteObjects2= [];
gdjs.IVideoCode.GDNewSpriteObjects3= [];
gdjs.IVideoCode.GDNewSpriteObjects4= [];
gdjs.IVideoCode.GDAnimalesVideoObjects1= [];
gdjs.IVideoCode.GDAnimalesVideoObjects2= [];
gdjs.IVideoCode.GDAnimalesVideoObjects3= [];
gdjs.IVideoCode.GDAnimalesVideoObjects4= [];
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects4= [];
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects4= [];
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects4= [];
gdjs.IVideoCode.GDInstruccionObjects1= [];
gdjs.IVideoCode.GDInstruccionObjects2= [];
gdjs.IVideoCode.GDInstruccionObjects3= [];
gdjs.IVideoCode.GDInstruccionObjects4= [];


gdjs.IVideoCode.asyncCallback23003156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IVideoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}gdjs.IVideoCode.localVariables.length = 0;
}
gdjs.IVideoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IVideoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.IVideoCode.asyncCallback23003156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IVideoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AVideo", false);
}}

}


{

/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.IVideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.IVideoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\Iniciarjuego.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\FIN\\Volver al menú_01.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.IVideoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IVideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.IVideoCode.GDInstruccionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.IVideoCode.GDInstruccionObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDInstruccionObjects2[k] = gdjs.IVideoCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDInstruccionObjects2[i].getVariableNumber(gdjs.IVideoCode.GDInstruccionObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDInstruccionObjects2[k] = gdjs.IVideoCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDInstruccionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDInstruccionObjects2[i].getVariableBoolean(gdjs.IVideoCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDInstruccionObjects2[k] = gdjs.IVideoCode.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.IVideoCode.GDInstruccionObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IVideoCode.GDInstruccionObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\instrucciones.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.IVideoCode.GDInstruccionObjects2.length ;i < len;++i) {
    gdjs.IVideoCode.GDInstruccionObjects2[i].returnVariable(gdjs.IVideoCode.GDInstruccionObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.IVideoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.IVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.IVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDAnimalesVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AVideo", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IVideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IVideoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.IVideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.IVideoCode.GDInstruccionObjects1.length = 0;
gdjs.IVideoCode.GDInstruccionObjects2.length = 0;
gdjs.IVideoCode.GDInstruccionObjects3.length = 0;
gdjs.IVideoCode.GDInstruccionObjects4.length = 0;

gdjs.IVideoCode.eventsList4(runtimeScene);
gdjs.IVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.IVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.IVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.IVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.IVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.IVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.IVideoCode.GDInstruccionObjects1.length = 0;
gdjs.IVideoCode.GDInstruccionObjects2.length = 0;
gdjs.IVideoCode.GDInstruccionObjects3.length = 0;
gdjs.IVideoCode.GDInstruccionObjects4.length = 0;


return;

}

gdjs['IVideoCode'] = gdjs.IVideoCode;
