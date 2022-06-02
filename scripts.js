document.addEventListener('DOMContentLoaded', function() {
    
    let nombre
    let esusuario
    let respuesta1
    let nombreuser
    let passuser
    let mailuser
    let celuser

    //ARRAYS

    let animalesenadopcion = ['gatitos','perritos','conejos']


    nombre = prompt("Bienvenido a Casa Gatitos! Cual es tu nombre?")
     
    console.log(nombre)

    esusuario = prompt("Que bueno que estés acá " + nombre + ". Conoces sobre Casa Gatitos?\n'1' Sí, conozco\n'2' No, quiero conocer") 

        while (isNaN(esusuario) || esusuario<1 || esusuario>2) {

            alert("No elegiste una respuesta valida.\n Inténtalo nuevamente, o pulsa cancelar para salir")
            esusuario = prompt("Eres un usuario registrado?\n'1' Sí, estoy registrado previamente\n'2' Aún no estoy registrado")
            }

        if (esusuario == 1) {
            alert("Bienvenido a CASA GATITOS " + nombre + "! Cómo podemos ayudarte hoy?")
            respuesta1 = prompt("\n1 Quiero Adoptar!.\n2 Quiero Donar.\n3 Quiero saber los Animalitos disponibles para adoptar")
        
        } else {
            alert (nombre + ", vamos a registrar tu usuario. Por favor completa los siguientes campos:")
            nombreuser = prompt("Ingresa tu nombre y apellido")
            passuser = prompt("Ingresa una contraseña de 6 dígitos numéricos como mínimo")
                while (passuser.length < 6 || isNaN(passuser)) {
                    alert("No ingresas una contraseña válida.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                    passuser = prompt("Ingresa una contraseña de 6 dígitos numéricos como mínimo")
                    }
            mailuser = prompt("Ingresa una dirección de mail válida. Recuerda que a ese mail se enviará el correo de verificación:")
            celuser = prompt("Ingresa tu número de celular:")
            while (celuser.length < 8 || isNaN(celuser)) {
                alert("No ingresaste un número de teléfono válido.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                celuser = prompt("Ingresa tu número de celular:")
                }
            
            alert ("Felicitaciones " + nombre + "! Completamos tu registro con los siguientes datos:\nNombre: " + nombreuser + "\nE Mail: " + mailuser + "\nCelular: " + celuser +"\nA la brevedad nos pondremos en contacto!")
            }

            if (respuesta1 == 1) {
                alert ("Te llevaremos a la pagina de adopacion")
                if (window.confirm("Si cliqueas en 'OK' serás redirigido a nuestro sitio de adopcion.\nSi cliqueas 'Cancelar' permanecerás en este sitio")) {
                    window.location.href='  https://lucassor91.github.io/repositorioSASS/paginas/adoptaya.html';
                }
                    
       
            }else if (respuesta1 == 2) {
                alert ("Te llevaremos a la pagina de donacion")
                if (window.confirm("Si cliqueas en 'OK' serás redirigido a nuestro sitio de adopcion.\nSi cliqueas 'Cancelar' permanecerás en este sitio")) {
                    window.location.href='https://lucassor91.github.io/repositorioSASS/paginas/dona.html';
                }
            //DESAFIO ARRAY    
            }else if (respuesta1 == 3){
                for (let i = 0; i < animalesenadopcion.length; i++) 
                alert ( animalesenadopcion [i])
            }
        }, false);