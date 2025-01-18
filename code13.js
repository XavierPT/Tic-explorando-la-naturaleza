gdjs.P5Code = {};
gdjs.P5Code.localVariables = [];
gdjs.P5Code.GDInstruccionObjects1= [];
gdjs.P5Code.GDInstruccionObjects2= [];
gdjs.P5Code.GDInstruccionObjects3= [];
gdjs.P5Code.GDInstruccionObjects4= [];
gdjs.P5Code.GDPuntajeObjects1= [];
gdjs.P5Code.GDPuntajeObjects2= [];
gdjs.P5Code.GDPuntajeObjects3= [];
gdjs.P5Code.GDPuntajeObjects4= [];
gdjs.P5Code.GDBotonObjects1= [];
gdjs.P5Code.GDBotonObjects2= [];
gdjs.P5Code.GDBotonObjects3= [];
gdjs.P5Code.GDBotonObjects4= [];
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1= [];
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2= [];
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3= [];
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects4= [];
gdjs.P5Code.GDTexto_9595tiempoObjects1= [];
gdjs.P5Code.GDTexto_9595tiempoObjects2= [];
gdjs.P5Code.GDTexto_9595tiempoObjects3= [];
gdjs.P5Code.GDTexto_9595tiempoObjects4= [];
gdjs.P5Code.GDFlatHeartBarObjects1= [];
gdjs.P5Code.GDFlatHeartBarObjects2= [];
gdjs.P5Code.GDFlatHeartBarObjects3= [];
gdjs.P5Code.GDFlatHeartBarObjects4= [];
gdjs.P5Code.GDTiempoObjects1= [];
gdjs.P5Code.GDTiempoObjects2= [];
gdjs.P5Code.GDTiempoObjects3= [];
gdjs.P5Code.GDTiempoObjects4= [];
gdjs.P5Code.GDTiempo2Objects1= [];
gdjs.P5Code.GDTiempo2Objects2= [];
gdjs.P5Code.GDTiempo2Objects3= [];
gdjs.P5Code.GDTiempo2Objects4= [];
gdjs.P5Code.GDFocusvarObjects1= [];
gdjs.P5Code.GDFocusvarObjects2= [];
gdjs.P5Code.GDFocusvarObjects3= [];
gdjs.P5Code.GDFocusvarObjects4= [];
gdjs.P5Code.GDFondoObjects1= [];
gdjs.P5Code.GDFondoObjects2= [];
gdjs.P5Code.GDFondoObjects3= [];
gdjs.P5Code.GDFondoObjects4= [];
gdjs.P5Code.GDNewSpriteObjects1= [];
gdjs.P5Code.GDNewSpriteObjects2= [];
gdjs.P5Code.GDNewSpriteObjects3= [];
gdjs.P5Code.GDNewSpriteObjects4= [];
gdjs.P5Code.GDInstruccion2Objects1= [];
gdjs.P5Code.GDInstruccion2Objects2= [];
gdjs.P5Code.GDInstruccion2Objects3= [];
gdjs.P5Code.GDInstruccion2Objects4= [];
gdjs.P5Code.GDNewSprite2Objects1= [];
gdjs.P5Code.GDNewSprite2Objects2= [];
gdjs.P5Code.GDNewSprite2Objects3= [];
gdjs.P5Code.GDNewSprite2Objects4= [];
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects3= [];
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects4= [];
gdjs.P5Code.GDBoton2Objects1= [];
gdjs.P5Code.GDBoton2Objects2= [];
gdjs.P5Code.GDBoton2Objects3= [];
gdjs.P5Code.GDBoton2Objects4= [];
gdjs.P5Code.GDBoton3Objects1= [];
gdjs.P5Code.GDBoton3Objects2= [];
gdjs.P5Code.GDBoton3Objects3= [];
gdjs.P5Code.GDBoton3Objects4= [];


gdjs.P5Code.asyncCallback23909028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FinaP", false);
}gdjs.P5Code.localVariables.length = 0;
}
gdjs.P5Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.P5Code.asyncCallback23909028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P5Code.asyncCallback23921740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P6", false);
}gdjs.P5Code.localVariables.length = 0;
}
gdjs.P5Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.P5Code.asyncCallback23921740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P5Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.P5Code.GDBoton2Objects1, gdjs.P5Code.GDBoton2Objects2);

gdjs.copyArray(gdjs.P5Code.GDBoton3Objects1, gdjs.P5Code.GDBoton3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects2[k] = gdjs.P5Code.GDBoton3Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects2[k] = gdjs.P5Code.GDBoton2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("Verificar")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects2[k] = gdjs.P5Code.GDBoton3Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("Verificar")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects2[k] = gdjs.P5Code.GDBoton2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects2 */
/* Reuse gdjs.P5Code.GDBoton3Objects2 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.P5Code.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Puntaje"), gdjs.P5Code.GDPuntajeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(+(1));
}{for(var i = 0, len = gdjs.P5Code.GDPuntajeObjects2.length ;i < len;++i) {
    gdjs.P5Code.GDPuntajeObjects2[i].getBehavior("Text").setText("Puntaje: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects2.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects2[i].returnVariable(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("Verificar")).setNumber(1);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects2.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects2[i].returnVariable(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("Verificar")).setNumber(1);
}
}{for(var i = 0, len = gdjs.P5Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.P5Code.GDNewSpriteObjects2[i].getBehavior("Animation").setAnimationName("2");
}
}
{ //Subevents
gdjs.P5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.P5Code.GDBoton2Objects1 */
/* Reuse gdjs.P5Code.GDBoton3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("Verificar")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("Verificar")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects1 */
/* Reuse gdjs.P5Code.GDBoton3Objects1 */
{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].returnVariable(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("Verificar")).setNumber(1);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].returnVariable(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("Verificar")).setNumber(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "incorrecto.mp3", false, 65, 1);
}}

}


};gdjs.P5Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.P5Code.GDInstruccionObjects2, gdjs.P5Code.GDInstruccionObjects3);

gdjs.copyArray(gdjs.P5Code.GDInstruccion2Objects2, gdjs.P5Code.GDInstruccion2Objects3);

gdjs.copyArray(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2, gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects3[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects3[k] = gdjs.P5Code.GDInstruccionObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects3[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects3[k] = gdjs.P5Code.GDInstruccion2Objects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDInstruccionObjects3 */
/* Reuse gdjs.P5Code.GDInstruccion2Objects3 */
/* Reuse gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\p1\\titulo.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects3[i].returnVariable(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].returnVariable(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects3[i].returnVariable(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.P5Code.GDInstruccionObjects2, gdjs.P5Code.GDInstruccionObjects3);

gdjs.copyArray(gdjs.P5Code.GDInstruccion2Objects2, gdjs.P5Code.GDInstruccion2Objects3);

gdjs.copyArray(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2, gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects3[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects3[k] = gdjs.P5Code.GDInstruccionObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects3[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects3[k] = gdjs.P5Code.GDInstruccion2Objects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDInstruccionObjects3 */
/* Reuse gdjs.P5Code.GDInstruccion2Objects3 */
/* Reuse gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\p4\\instruccion.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects3[i].returnVariable(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].returnVariable(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects3[i].returnVariable(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(gdjs.P5Code.GDInstruccionObjects2, gdjs.P5Code.GDInstruccionObjects3);

gdjs.copyArray(gdjs.P5Code.GDInstruccion2Objects2, gdjs.P5Code.GDInstruccion2Objects3);

gdjs.copyArray(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2, gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects3[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects3[k] = gdjs.P5Code.GDInstruccionObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects3[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("Sonido")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects3[k] = gdjs.P5Code.GDInstruccion2Objects3[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDInstruccionObjects3 */
/* Reuse gdjs.P5Code.GDInstruccion2Objects3 */
/* Reuse gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\p4\\p1.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects3[i].returnVariable(gdjs.P5Code.GDInstruccionObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].returnVariable(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects3.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects3[i].returnVariable(gdjs.P5Code.GDInstruccion2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.P5Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.P5Code.GDBoton2Objects2, gdjs.P5Code.GDBoton2Objects3);

gdjs.copyArray(gdjs.P5Code.GDBoton3Objects2, gdjs.P5Code.GDBoton3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects3[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects3[k] = gdjs.P5Code.GDBoton3Objects3[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects3.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects3[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects3[i].getVariables().get("Sonido")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects3[k] = gdjs.P5Code.GDBoton2Objects3[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects3 */
/* Reuse gdjs.P5Code.GDBoton3Objects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\p4\\si.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects3.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects3[i].returnVariable(gdjs.P5Code.GDBoton3Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects3.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects3[i].returnVariable(gdjs.P5Code.GDBoton2Objects3[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


{

/* Reuse gdjs.P5Code.GDBoton2Objects2 */
/* Reuse gdjs.P5Code.GDBoton3Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects2[k] = gdjs.P5Code.GDBoton3Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("Sonido")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects2[k] = gdjs.P5Code.GDBoton2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects2 */
/* Reuse gdjs.P5Code.GDBoton3Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Accesibility-audio\\p4\\no.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects2.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects2[i].returnVariable(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects2.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects2[i].returnVariable(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("SonidoReproducido")).setBoolean(true);
}
}}

}


};gdjs.P5Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.P5Code.GDInstruccionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.P5Code.GDInstruccion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Titulo_del_juego"), gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects2[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects2[k] = gdjs.P5Code.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects2[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects2[k] = gdjs.P5Code.GDInstruccion2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects2[i].getVariableBoolean(gdjs.P5Code.GDInstruccionObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects2[k] = gdjs.P5Code.GDInstruccionObjects2[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i].getVariableBoolean(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects2[i].getVariableBoolean(gdjs.P5Code.GDInstruccion2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects2[k] = gdjs.P5Code.GDInstruccion2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.P5Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects2[k] = gdjs.P5Code.GDBoton3Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects2[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects2[k] = gdjs.P5Code.GDBoton2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects2[i].getVariableBoolean(gdjs.P5Code.GDBoton3Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects2[k] = gdjs.P5Code.GDBoton3Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects2.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects2[i].getVariableBoolean(gdjs.P5Code.GDBoton2Objects2[i].getVariables().get("SonidoReproducido"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects2[k] = gdjs.P5Code.GDBoton2Objects2[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.P5Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.P5Code.asyncCallback23934972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P6", false);
}gdjs.P5Code.localVariables.length = 0;
}
gdjs.P5Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.P5Code.asyncCallback23934972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P5Code.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.P5Code.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.P5Code.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDFlatHeartBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.P5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntaje"), gdjs.P5Code.GDPuntajeObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Segundos");
}{for(var i = 0, len = gdjs.P5Code.GDPuntajeObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDPuntajeObjects1[i].getBehavior("Text").setText("Puntaje: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Segundos") > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) - 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Segundos");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tiempo"), gdjs.P5Code.GDTiempoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tiempo2"), gdjs.P5Code.GDTiempo2Objects1);
{for(var i = 0, len = gdjs.P5Code.GDTiempo2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDTiempo2Objects1[i].getBehavior("Text").setText(": " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.P5Code.GDTiempoObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDTiempoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(59);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) - 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tiempo2"), gdjs.P5Code.GDTiempo2Objects1);
{for(var i = 0, len = gdjs.P5Code.GDTiempo2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDTiempo2Objects1[i].getBehavior("Text").setText(": 0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FinaP", false);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Focusvar"), gdjs.P5Code.GDFocusvarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.P5Code.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.P5Code.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo_del_juego"), gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.P5Code.GDFocusvarObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDFocusvarObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].returnVariable(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].returnVariable(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects1[i].returnVariable(gdjs.P5Code.GDInstruccionObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].returnVariable(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects1[i].returnVariable(gdjs.P5Code.GDInstruccion2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
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
gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Focusvar"), gdjs.P5Code.GDFocusvarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.P5Code.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.P5Code.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo_del_juego"), gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.P5Code.GDFocusvarObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDFocusvarObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].returnVariable(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].returnVariable(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects1[i].returnVariable(gdjs.P5Code.GDInstruccionObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].returnVariable(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects1[i].returnVariable(gdjs.P5Code.GDInstruccion2Objects1[i].getVariables().get("SonidoReproducido")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.P5Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.P5Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.P5Code.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.P5Code.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo_del_juego"), gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccionObjects1[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects1[k] = gdjs.P5Code.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDInstruccion2Objects1[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects1[k] = gdjs.P5Code.GDInstruccion2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDInstruccionObjects1 */
/* Reuse gdjs.P5Code.GDInstruccion2Objects1 */
/* Reuse gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1 */
{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1.1);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getBehavior("Scale").setScale(1.1);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects1[i].getBehavior("Scale").setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruccion"), gdjs.P5Code.GDInstruccionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruccion2"), gdjs.P5Code.GDInstruccion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo_del_juego"), gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccionObjects1.length;i<l;++i) {
    if ( !(gdjs.P5Code.GDInstruccionObjects1[i].getVariableNumber(gdjs.P5Code.GDInstruccionObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccionObjects1[k] = gdjs.P5Code.GDInstruccionObjects1[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccionObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length;i<l;++i) {
    if ( !(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariableNumber(gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[k] = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i];
        ++k;
    }
}
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDInstruccion2Objects1.length;i<l;++i) {
    if ( !(gdjs.P5Code.GDInstruccion2Objects1[i].getVariableNumber(gdjs.P5Code.GDInstruccion2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDInstruccion2Objects1[k] = gdjs.P5Code.GDInstruccion2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDInstruccion2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDInstruccionObjects1 */
/* Reuse gdjs.P5Code.GDInstruccion2Objects1 */
/* Reuse gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1 */
{for(var i = 0, len = gdjs.P5Code.GDInstruccionObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccionObjects1[i].getBehavior("Scale").setScale(1);
}
for(var i = 0, len = gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1[i].getBehavior("Scale").setScale(1);
}
for(var i = 0, len = gdjs.P5Code.GDInstruccion2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDInstruccion2Objects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.P5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Puntaje"), gdjs.P5Code.GDPuntajeObjects1);
{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].returnVariable(gdjs.P5Code.GDBoton3Objects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{for(var i = 0, len = gdjs.P5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(+(1));
}{for(var i = 0, len = gdjs.P5Code.GDPuntajeObjects1.length ;i < len;++i) {
    gdjs.P5Code.GDPuntajeObjects1[i].getBehavior("Text").setText("Puntaje: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correcto.mp3", false, 50, 1);
}
{ //Subevents
gdjs.P5Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects1 */
{for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].returnVariable(gdjs.P5Code.GDBoton2Objects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "incorrecto.mp3", false, 65, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( !(gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( !(gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects1 */
/* Reuse gdjs.P5Code.GDBoton3Objects1 */
{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].getBehavior("Resizable").setSize(192, 64);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.P5Code.GDBoton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.P5Code.GDBoton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton3Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton3Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton3Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton3Objects1[k] = gdjs.P5Code.GDBoton3Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P5Code.GDBoton2Objects1.length;i<l;++i) {
    if ( gdjs.P5Code.GDBoton2Objects1[i].getVariableNumber(gdjs.P5Code.GDBoton2Objects1[i].getVariables().get("FocusValue")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        gdjs.P5Code.GDBoton2Objects1[k] = gdjs.P5Code.GDBoton2Objects1[i];
        ++k;
    }
}
gdjs.P5Code.GDBoton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P5Code.GDBoton2Objects1 */
/* Reuse gdjs.P5Code.GDBoton3Objects1 */
{for(var i = 0, len = gdjs.P5Code.GDBoton3Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton3Objects1[i].getBehavior("Resizable").setSize(205, 68.333333333);
}
for(var i = 0, len = gdjs.P5Code.GDBoton2Objects1.length ;i < len;++i) {
    gdjs.P5Code.GDBoton2Objects1[i].getBehavior("Resizable").setSize(205, 68.333333333);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.P5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.P5Code.GDInstruccionObjects1.length = 0;
gdjs.P5Code.GDInstruccionObjects2.length = 0;
gdjs.P5Code.GDInstruccionObjects3.length = 0;
gdjs.P5Code.GDInstruccionObjects4.length = 0;
gdjs.P5Code.GDPuntajeObjects1.length = 0;
gdjs.P5Code.GDPuntajeObjects2.length = 0;
gdjs.P5Code.GDPuntajeObjects3.length = 0;
gdjs.P5Code.GDPuntajeObjects4.length = 0;
gdjs.P5Code.GDBotonObjects1.length = 0;
gdjs.P5Code.GDBotonObjects2.length = 0;
gdjs.P5Code.GDBotonObjects3.length = 0;
gdjs.P5Code.GDBotonObjects4.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects1.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects2.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects3.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects4.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects1.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects2.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects3.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects4.length = 0;
gdjs.P5Code.GDTiempoObjects1.length = 0;
gdjs.P5Code.GDTiempoObjects2.length = 0;
gdjs.P5Code.GDTiempoObjects3.length = 0;
gdjs.P5Code.GDTiempoObjects4.length = 0;
gdjs.P5Code.GDTiempo2Objects1.length = 0;
gdjs.P5Code.GDTiempo2Objects2.length = 0;
gdjs.P5Code.GDTiempo2Objects3.length = 0;
gdjs.P5Code.GDTiempo2Objects4.length = 0;
gdjs.P5Code.GDFocusvarObjects1.length = 0;
gdjs.P5Code.GDFocusvarObjects2.length = 0;
gdjs.P5Code.GDFocusvarObjects3.length = 0;
gdjs.P5Code.GDFocusvarObjects4.length = 0;
gdjs.P5Code.GDFondoObjects1.length = 0;
gdjs.P5Code.GDFondoObjects2.length = 0;
gdjs.P5Code.GDFondoObjects3.length = 0;
gdjs.P5Code.GDFondoObjects4.length = 0;
gdjs.P5Code.GDNewSpriteObjects1.length = 0;
gdjs.P5Code.GDNewSpriteObjects2.length = 0;
gdjs.P5Code.GDNewSpriteObjects3.length = 0;
gdjs.P5Code.GDNewSpriteObjects4.length = 0;
gdjs.P5Code.GDInstruccion2Objects1.length = 0;
gdjs.P5Code.GDInstruccion2Objects2.length = 0;
gdjs.P5Code.GDInstruccion2Objects3.length = 0;
gdjs.P5Code.GDInstruccion2Objects4.length = 0;
gdjs.P5Code.GDNewSprite2Objects1.length = 0;
gdjs.P5Code.GDNewSprite2Objects2.length = 0;
gdjs.P5Code.GDNewSprite2Objects3.length = 0;
gdjs.P5Code.GDNewSprite2Objects4.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.P5Code.GDBoton2Objects1.length = 0;
gdjs.P5Code.GDBoton2Objects2.length = 0;
gdjs.P5Code.GDBoton2Objects3.length = 0;
gdjs.P5Code.GDBoton2Objects4.length = 0;
gdjs.P5Code.GDBoton3Objects1.length = 0;
gdjs.P5Code.GDBoton3Objects2.length = 0;
gdjs.P5Code.GDBoton3Objects3.length = 0;
gdjs.P5Code.GDBoton3Objects4.length = 0;

gdjs.P5Code.eventsList7(runtimeScene);
gdjs.P5Code.GDInstruccionObjects1.length = 0;
gdjs.P5Code.GDInstruccionObjects2.length = 0;
gdjs.P5Code.GDInstruccionObjects3.length = 0;
gdjs.P5Code.GDInstruccionObjects4.length = 0;
gdjs.P5Code.GDPuntajeObjects1.length = 0;
gdjs.P5Code.GDPuntajeObjects2.length = 0;
gdjs.P5Code.GDPuntajeObjects3.length = 0;
gdjs.P5Code.GDPuntajeObjects4.length = 0;
gdjs.P5Code.GDBotonObjects1.length = 0;
gdjs.P5Code.GDBotonObjects2.length = 0;
gdjs.P5Code.GDBotonObjects3.length = 0;
gdjs.P5Code.GDBotonObjects4.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects1.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects2.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects3.length = 0;
gdjs.P5Code.GDTitulo_9595del_9595juegoObjects4.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects1.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects2.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects3.length = 0;
gdjs.P5Code.GDTexto_9595tiempoObjects4.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects1.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects2.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects3.length = 0;
gdjs.P5Code.GDFlatHeartBarObjects4.length = 0;
gdjs.P5Code.GDTiempoObjects1.length = 0;
gdjs.P5Code.GDTiempoObjects2.length = 0;
gdjs.P5Code.GDTiempoObjects3.length = 0;
gdjs.P5Code.GDTiempoObjects4.length = 0;
gdjs.P5Code.GDTiempo2Objects1.length = 0;
gdjs.P5Code.GDTiempo2Objects2.length = 0;
gdjs.P5Code.GDTiempo2Objects3.length = 0;
gdjs.P5Code.GDTiempo2Objects4.length = 0;
gdjs.P5Code.GDFocusvarObjects1.length = 0;
gdjs.P5Code.GDFocusvarObjects2.length = 0;
gdjs.P5Code.GDFocusvarObjects3.length = 0;
gdjs.P5Code.GDFocusvarObjects4.length = 0;
gdjs.P5Code.GDFondoObjects1.length = 0;
gdjs.P5Code.GDFondoObjects2.length = 0;
gdjs.P5Code.GDFondoObjects3.length = 0;
gdjs.P5Code.GDFondoObjects4.length = 0;
gdjs.P5Code.GDNewSpriteObjects1.length = 0;
gdjs.P5Code.GDNewSpriteObjects2.length = 0;
gdjs.P5Code.GDNewSpriteObjects3.length = 0;
gdjs.P5Code.GDNewSpriteObjects4.length = 0;
gdjs.P5Code.GDInstruccion2Objects1.length = 0;
gdjs.P5Code.GDInstruccion2Objects2.length = 0;
gdjs.P5Code.GDInstruccion2Objects3.length = 0;
gdjs.P5Code.GDInstruccion2Objects4.length = 0;
gdjs.P5Code.GDNewSprite2Objects1.length = 0;
gdjs.P5Code.GDNewSprite2Objects2.length = 0;
gdjs.P5Code.GDNewSprite2Objects3.length = 0;
gdjs.P5Code.GDNewSprite2Objects4.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects3.length = 0;
gdjs.P5Code.GDWhiteSquareDecoratedButtonObjects4.length = 0;
gdjs.P5Code.GDBoton2Objects1.length = 0;
gdjs.P5Code.GDBoton2Objects2.length = 0;
gdjs.P5Code.GDBoton2Objects3.length = 0;
gdjs.P5Code.GDBoton2Objects4.length = 0;
gdjs.P5Code.GDBoton3Objects1.length = 0;
gdjs.P5Code.GDBoton3Objects2.length = 0;
gdjs.P5Code.GDBoton3Objects3.length = 0;
gdjs.P5Code.GDBoton3Objects4.length = 0;


return;

}

gdjs['P5Code'] = gdjs.P5Code;
