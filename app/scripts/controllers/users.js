/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    var submit = document.getElementById("submit").onclick =
        function () {
            var firstname = document.getElementById("firstname").value;
            console.log(firstname);
            var lastname = document.getElementById("lastname").value;
            console.log(lastname);
            var email = document.getElementById("email").value;
            console.log(email);
            var profession = document.getElementById("profession").value;
            console.log(profession);
        };



   /* //tu código aquí.
       // obtenemos e valor por el numero de elemento
       var porElementos=document.forms["form1"].elements[0].value;
       // Obtenemos el valor por el id
       var porId=document.getElementById("nombre").value;
       // Obtenemos el valor por el Nombre
       var porNombre=document.getElementsByName("nombre")[0].value;
       // Obtenemos el valor por el tipo de tag
       var porTagName=document.getElementsByTagName("input")[0].value;
       // Obtenemos el valor por el nombre de la clase
       var porClassName=document.getElementsByClassName("formulario")[0].value;

       document.getElementById("resultado").innerHTML=" \
           Por elementos: "+porElementos+" \
           <br>Por ID: "+porId+" \
           <br>Por Nombre: "+porNombre+" \
           <br>Por TagName: "+porTagName+" \
           <br>Por ClassName: "+porClassName;*/
}