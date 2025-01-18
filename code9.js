gdjs.PVideoCode = {};
gdjs.PVideoCode.localVariables = [];
gdjs.PVideoCode.GDNewSpriteObjects1= [];
gdjs.PVideoCode.GDNewSpriteObjects2= [];
gdjs.PVideoCode.GDNewSpriteObjects3= [];
gdjs.PVideoCode.GDNewSpriteObjects4= [];
gdjs.PVideoCode.GDAnimalesVideoObjects1= [];
gdjs.PVideoCode.GDAnimalesVideoObjects2= [];
gdjs.PVideoCode.GDAnimalesVideoObjects3= [];
gdjs.PVideoCode.GDAnimalesVideoObjects4= [];
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects4= [];
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects4= [];
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects4= [];


gdjs.PVideoCode.asyncCallback23455780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PVideoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P1", false);
}gdjs.PVideoCode.localVariables.length = 0;
}
gdjs.PVideoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PVideoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.PVideoCode.asyncCallback23455780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PVideoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.PVideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.PVideoCode.GDAnimalesVideoObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.PVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDAnimalesVideoObjects1[i].setCurrentTime(0);
}
}}

}


};gdjs.PVideoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\Iniciarjuego.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\repetirvideo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.PVideoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PVideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.PVideoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.PVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.PVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDAnimalesVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.PVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.PVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDAnimalesVideoObjects1[i].setCurrentTime(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PVideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PVideoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1 */
{for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PVideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;

gdjs.PVideoCode.eventsList4(runtimeScene);
gdjs.PVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.PVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.PVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.PVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.PVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.PVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;


return;

}

gdjs['PVideoCode'] = gdjs.PVideoCode;
