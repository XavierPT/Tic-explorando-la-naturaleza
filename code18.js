gdjs.SVideoCode = {};
gdjs.SVideoCode.localVariables = [];
gdjs.SVideoCode.GDNewSpriteObjects1= [];
gdjs.SVideoCode.GDNewSpriteObjects2= [];
gdjs.SVideoCode.GDNewSpriteObjects3= [];
gdjs.SVideoCode.GDNewSpriteObjects4= [];
gdjs.SVideoCode.GDAnimalesVideoObjects1= [];
gdjs.SVideoCode.GDAnimalesVideoObjects2= [];
gdjs.SVideoCode.GDAnimalesVideoObjects3= [];
gdjs.SVideoCode.GDAnimalesVideoObjects4= [];
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects4= [];
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects4= [];
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1= [];
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2= [];
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3= [];
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects4= [];
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1= [];
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2= [];
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3= [];
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects4= [];
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects4= [];


gdjs.SVideoCode.asyncCallback15268804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SVideoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S1", false);
}gdjs.SVideoCode.localVariables.length = 0;
}
gdjs.SVideoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SVideoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SVideoCode.asyncCallback15268804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SVideoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.SVideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects2[i].setCurrentTime(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects2);
gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDAnimalesVideoObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDAnimalesVideoObjects2[i].getVariableBoolean(gdjs.SVideoCode.GDAnimalesVideoObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDAnimalesVideoObjects2[k] = gdjs.SVideoCode.GDAnimalesVideoObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDAnimalesVideoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDAnimalesVideoObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 25, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects2[i].pause();
}
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects2[i].returnVariable(gdjs.SVideoCode.GDAnimalesVideoObjects2[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects1);
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDAnimalesVideoObjects1[k] = gdjs.SVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDAnimalesVideoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 25, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


};gdjs.SVideoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\Iniciarjuego.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\repetirvideo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\pausar.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\reproducir.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.SVideoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableBoolean(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableBoolean(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SVideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.SVideoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].setCurrentTime(0.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDAnimalesVideoObjects1[k] = gdjs.SVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDAnimalesVideoObjects1 */
{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.SVideoCode.GDAnimalesVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDAnimalesVideoObjects1[k] = gdjs.SVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDAnimalesVideoObjects1 */
{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.SVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.SVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].returnVariable(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SVideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SVideoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1 */
{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( !(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( !(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1 */
{for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SVideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects4.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;

gdjs.SVideoCode.eventsList4(runtimeScene);
gdjs.SVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.SVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.SVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.SVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton3Objects4.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects2.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects3.length = 0;
gdjs.SVideoCode.GDWhiteDecoratedButton4Objects4.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.SVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;


return;

}

gdjs['SVideoCode'] = gdjs.SVideoCode;
