gdjs.AVideoCode = {};
gdjs.AVideoCode.localVariables = [];
gdjs.AVideoCode.GDNewSpriteObjects1= [];
gdjs.AVideoCode.GDNewSpriteObjects2= [];
gdjs.AVideoCode.GDNewSpriteObjects3= [];
gdjs.AVideoCode.GDNewSpriteObjects4= [];
gdjs.AVideoCode.GDAnimalesVideoObjects1= [];
gdjs.AVideoCode.GDAnimalesVideoObjects2= [];
gdjs.AVideoCode.GDAnimalesVideoObjects3= [];
gdjs.AVideoCode.GDAnimalesVideoObjects4= [];
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects4= [];
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3= [];
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects4= [];
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3= [];
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects4= [];
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1= [];
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2= [];
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3= [];
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects4= [];
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1= [];
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2= [];
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3= [];
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects4= [];


gdjs.AVideoCode.asyncCallback23051420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AVideoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}gdjs.AVideoCode.localVariables.length = 0;
}
gdjs.AVideoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AVideoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.AVideoCode.asyncCallback23051420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AVideoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.AVideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects2[i].setCurrentTime(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects2);
gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDAnimalesVideoObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDAnimalesVideoObjects2[i].getVariableBoolean(gdjs.AVideoCode.GDAnimalesVideoObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDAnimalesVideoObjects2[k] = gdjs.AVideoCode.GDAnimalesVideoObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDAnimalesVideoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDAnimalesVideoObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 25, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects2[i].pause();
}
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects2[i].returnVariable(gdjs.AVideoCode.GDAnimalesVideoObjects2[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects1);
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDAnimalesVideoObjects1[k] = gdjs.AVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDAnimalesVideoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 25, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


};gdjs.AVideoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\Iniciarjuego.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\repetirvideo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2, gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3);

gdjs.copyArray(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2, gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\pausar.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("Sonido")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\Menu\\reproducir.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.AVideoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariableBoolean(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariableBoolean(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariableBoolean(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariableBoolean(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AVideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.AVideoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects1);
{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].setCurrentTime(0.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDAnimalesVideoObjects1[k] = gdjs.AVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDAnimalesVideoObjects1 */
{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnimalesVideo"), gdjs.AVideoCode.GDAnimalesVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDAnimalesVideoObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariableBoolean(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDAnimalesVideoObjects1[k] = gdjs.AVideoCode.GDAnimalesVideoObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDAnimalesVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDAnimalesVideoObjects1 */
{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.AVideoCode.GDAnimalesVideoObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDAnimalesVideoObjects1[i].returnVariable(gdjs.AVideoCode.GDAnimalesVideoObjects1[i].getVariables().getFromIndex(0)).toggle();
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].returnVariable(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AVideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AVideoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1 */
{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getBehavior("Resizable").setSize(202, 69);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( !(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( !(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariableNumber(gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1 */
/* Reuse gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1 */
{for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.AVideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects4.length = 0;

gdjs.AVideoCode.eventsList4(runtimeScene);
gdjs.AVideoCode.GDNewSpriteObjects1.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects2.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects3.length = 0;
gdjs.AVideoCode.GDNewSpriteObjects4.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects1.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects2.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects3.length = 0;
gdjs.AVideoCode.GDAnimalesVideoObjects4.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.AVideoCode.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButtonObjects4.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.AVideoCode.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton2Objects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton3Objects4.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects2.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects3.length = 0;
gdjs.AVideoCode.GDWhiteDecoratedButton4Objects4.length = 0;


return;

}

gdjs['AVideoCode'] = gdjs.AVideoCode;
