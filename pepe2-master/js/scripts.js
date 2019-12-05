var x = document.getElementsByClassName("clicable")
let z
let elementoclicado
var memoriatemporal=0
let pantallaarriba = document.getElementById("pantallaarriba")
let pantallaabajo  = document.getElementById("pantallaabajo")
let bandeja = document.getElementById("bandejar")
let pliegue = document.getElementById("plegar")
let cerrando = document.getElementById("cerrar")
let historico=[]
let ultimo
let texto =""
let operaciones=""
let numeroactual="0"
let oldnumero=""
let operacionespecial=false
// ESTA VARIABLE LA UTILIZO PARA QUE EL NUMERO EN PANTALLA SE QUEDE COMO OPERANDO TRAS UNA OPERACION ESPECIAL
pliegue.addEventListener("click", plegar)
bandeja.addEventListener("click", bandejar)
cerrando.addEventListener("click", cerrar)

setTimeout(plegar, 1288); 
// despliega al cargar

function ocult(){
  // oculta clases que se pueden meter por parametro
let selectos=document.getElementsByClassName("botonera")
for (i = 0; i < selectos.length; i++){
selectos[i].classList.toggle("oculta")
}
}
// setInterval(ocult,1000)

function bandejar(){
     let reducir = document.getElementById("calculadora")
    if (parseInt(reducir.style.top) >520){  reducir.style.top="0px"}
      else {
        let lastposition=reducir.style.top
        reducir.style.top=screen.height-115+"px"}
        // "525px"};
        document.getElementById("bandejar").classList.toggle("girado")
    }
function plegar (){
    let reducir = document.getElementById("calculadora")
    reducir.classList.toggle("plegada")
}
function cerrar(){let cerrar = document.getElementById("calculadora")
cerrar.classList.toggle("cerrada");
}
    for (i=0;i<x.length;i++){
    x[i].addEventListener("click", clicado)
    }
   document.onkeypress = function(event){
   teclapulsada=event.key; pulsado()}
       
          
    function pulsado(){
    console.log("se ha pulsado" + teclapulsada)
        elementoclicado=teclapulsada
        tipodelemento="clicable"
        analizarentrada(tipodelemento)
}

 function clicado (){
     
    elementoclicado = event.target.innerHTML
    let tipodelemento = event.target.className
    console.log("se hizo click en " +  elementoclicado + "que es del tipo" + tipodelemento)
    valor = parseInt(elementoclicado)
    analizarentrada(tipodelemento)}

function analizarentrada(parametro){

        switch (parametro){
             
         case "clicable operador":
         console.log ("switch operador" , numeroactual.toString().length)
         numeroactual=numeroactual.toString()
         if (numeroactual.length>0 || operaciones.length>0) 
         especial()
         break
         case "clicable":
         console.log ("switch clicable normal")
         oldnumero=numeroactual

        if (numeroactual!="0") numeroactual=numeroactual + elementoclicado
        if (operacionespecial == true || numeroactual == "0") numeroactual = elementoclicado
         operacionespecial = false
         ultimo ="digito"
         mostrarenpantalla()
         console.log ("en pantalla hay"+ numeroactual)
         break
         case "clicable memoria":
         memorias()
         break
         }
            
       }  

            function especial (){
            console.log ("entramos en especial")
            
            switch (elementoclicado){
               
                case "C":
                console.log ("borrarC")
                numeroactual="0"
                operaciones=""
                mostrarenpantalla()
                ultimo="operador"
                break
                case "CE":
                console.log ("borrarCE")
                numeroactual="0"
                mostrarenpantalla()
                ultimo="operador"
                break
                case "=":
                console.log ("igual")
                elementoclicado=""
                if (ultimo=="digito") operaciones=operaciones+numeroactual
                else operaciones=operaciones+pantallaabajo.innerHTML
                // logica : si la expresion acaba en numero , lo coge, si acaba de otra manera, coge el ultimo numero mostrado
                resultado()
                break
                case "+":
                case "-":
                case "/":
                case "*":

                console.log ("entrar operador")
                operador()
                break
                case"√":
                numeroactual=Math.sqrt(pantallaabajo.innerHTML).toString(); 
                if (isNaN(numeroactual)) {numeroactual="RAIZ de NEGATIVO, SO BORRIC@"
                historico.push("OPERACIÓN FALLIDA , LOS NEGATIVOS NO TIENEN RAÍZ")
                mostrarenpantalla()
                reset()}
                // LO PASO A STRING PORQUE ME INTERESA y cojo el numero en pantalla actual por si he puesto  operadores entremedias
                mostrarenpantalla()
                operacionespecial = true
                break
                case"+-":
                numeroactual=0-numeroactual.toString(); 
                oldnumero=numeroactual
                mostrarenpantalla()
                operacionespecial = true

                break
                case"1/x":
                numeroactual=1/numeroactual.toString(); 
                oldnumero=numeroactual
                mostrarenpantalla()
                break
                case ".":
                let decimal=parseFloat(numeroactual+"0") //TRUCO PARA VER SI ES DECIMAL
                console.log (numeroactual +  "decimal" , Number.isInteger(decimal))
                if (Number.isInteger(decimal)){
                numeroactual=numeroactual + ".";
                mostrarenpantalla()
                }
                // SE COMPRUEBA SI EL NUMERO ACTUAL ES YA UN DECIMAL PARA AÑADIRLE LA COMA O NO
                break
                case "%":
                console.log ("entramos en %" + "numeroactual=" + numeroactual + operaciones )

                numeroactual=numeroactual/100*eval(operaciones.slice(0,operaciones.length-1))

                if (isNaN(numeroactual)) {numeroactual="ERROR -%-(VER AYUDA)"  
                historico.push("OPERACIÓN % FALLIDA ")}
                

                 mostrarenpantalla()
                 numeroactual=numeroactual.toString
                 oldnumero=numeroactual

                 ultimo="digito"
                 reset()
                       //QUE PUÑETERO ES EL % de WINDOWS , le CALCULA el X porciento del resultado parcial y lo deja en la pantalla
                break

              }
            }
        function memorias (){
                operacionespecial=true
                ultimo="digito"
                switch (elementoclicado){
                case "MC":
                memoriatemporal=0
                break
                case "MR":
                numeroactual=memoriatemporal
                memoriatemporal=memoriatemporal.toString()
                mostrarenpantalla()
                
                // if (numeroactual==0) numeroactual=""
                break
                case "MS":
                console.log("merorySet")
                memoriatemporal=numeroactual.toString()
                break
                case "M+":
                memoriatemporal= parseFloat(memoriatemporal)+parseFloat(numeroactual)
                memoriatemporal=memoriatemporal.toString()
                break
                case "M-":
                memoriatemporal= parseFloat(memoriatemporal)-parseFloat(numeroactual)
                memoriatemporal=memoriatemporal.toString()
                break
                }
        }

 function mostrarenpantalla(){
     console.log ("mostraporpantalla")
     pantallaarriba.innerHTML=operaciones
     pantallaabajo.innerHTML=numeroactual
  
       }

 function operador(){
     console.log ("operador funcion" )
     
     anularduplicados()
     ultimo ="operador"
     operaciones = operaciones + numeroactual + elementoclicado
     oldnumero=numeroactual
     numeroactual=""
     mostrarenpantalla()
     parcial=operaciones.slice(0,operaciones.length-1)
     pantallaabajo.innerHTML=eval(parcial)
     numero=eval(parcial)
 }

  function resultado (){
      console.log ("resultado funcion" + operaciones)
      final=eval(operaciones)
      let test="operaciones + numeroactual"
      // AL FINAL ES MUCHO MAS FACIL EVALUAR LO QUE HAS SACADO POR PANTALLA QUE IR DEJANDO VARIABLES POR EL CAMINO COMO PULGARCITO
      final=eval(pantallaarriba.innerHTML + pantallaabajo.innerHTML)
      pantallaarriba.innerHTML=""
      pantallaabajo.innerHTML=final
      numeroactual=final.toString()
      let texta=""
      if (operaciones != final) {texta = " = " + final} //PARA QUE NO SAQUE 0 = 0 etc
      historico.push(operaciones + texta)

      console.log (historico)
      operacionespecial=true
      ultimo="resultado"
      operaciones=""
      oldnumero=final
      }
  
function anularduplicados(){
    // SI YA HEMOS METIDO UN OPERADOR, SE PONE SOLO EL ULTIMO
    console.log ("anular duplicados")
    
    if (ultimo=="operador")  borraranterior()
}
   function borraranterior()
   {
   console.log ("borramos") 
   operaciones=pantallaarriba.innerHTML
   let lt=operaciones.length
   operaciones=operaciones.slice(0,lt-1)
   pantallaarriba.innerHTML=operaciones
   }

   function reset()
   {numeroactual="0"
   operaciones=""}

  
function modal()
{
  let elemento = document.getElementById("modalid");
  let anotaciones = document.getElementById("operaciones");
  anotaciones.innerHTML=""
   elemento.classList.toggle("activa");
   console.log("entramos");
     if (historico.length<1) {
     anotaciones.innerHTML ="Aún no hay resultados"
     return
    }
     historico.forEach(recorrer);
     function recorrer(value, index, array) {
     anotaciones.innerHTML = anotaciones.innerHTML +  "<li>" + value + "</li>";
}
}


// CODIGO FUSILADO DE W3 A PARTIR DE AQUÍ


dragElement(document.getElementById("calculadora"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    if (elmnt.offsetTop - pos2>0 && elmnt.offsetTop - pos2 <4400)  elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
   // Aqui le pongo limites para que no se vaya de pantalla
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}