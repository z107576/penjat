/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
 // Definir variables
        var Letras = "";
        var Palabra = "";
        var Vidas = 7;     
 	
        
        //Arrays y conjunto de arrays
        var Palabras = ["cordes", "fetge", "forca", "jutges", "jutjat",
            "mengen", "penjat", "quinta", "setze"]; 
        var Pistas = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes",
            "Setze jutges d'un jutjat mengen fetge d'un penjat"];
        var palabraspistas = [1, 2, 0, 2, 2, 2, 1, 0, 2];
        
      
    		var seconds = 0;
    		function timer()	{
        		seconds = seconds + 1; 
        document.getElementById("counter").innerHTML =	seconds;
	}
    setInterval(timer, 1000);
        // Saber si has fallado o acertado
        function falloEncierto() {
            
            var Letra = document.getElementById("letra").value;
            document.getElementById("letra").value = "";
            
            // Cambiar a minuscula    
            Letra = Letra.toLowerCase();
            
            // Cambiar la letra especial a normal
            switch (Letra) {
                case "á":
                case "à":
                    Letra = "a";
                    break;
                case "é":
                case "è":
                    Letra = "e";
                    break;
                case "í":
                case "ì":
                case "ï":
                    Letra = "i";
                    break;
                case "ò":
                case "ó":
                    Letra = "o";
                    break;
                case "ù":
                case "ú":
                case "ü":
                    Letra = "u";
                    break;
                default:
                    break;
            }

            if (((Letra >= "a") && (Letra <= "m")) || (Letra === "ç")) {
                window.alert("Has acertado");
                concatenarLetrasCorrectas(Letra);
                document.getElementById("miau").play();
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = false;
                document.getElementById("clock").play();
                
            } else if (((Letra >= "n") && (Letra <= "z")) || (Letra === "ñ")) {
                window.alert("Has fallado");
                Vidas = Vidas - 1;
                cambiarVidas();
                concatenarLetrasIncorrectas(Letra);
                MuestraImg();
                document.getElementById("boom").play();
                document.getElementById("clock").play();
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz1").hidden = false;
                
            } else {  
                window.alert("Vuelve a intentarlo");
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = false;
                document.getElementById("clock").play();
            }

            ganarPerder();
        }

        // Concatenar letras correctas
        function concatenarLetrasCorrectas(Letra) {
            Palabra = Palabra + Letra + " ";
            document.getElementById("Palabra").innerHTML = Palabra;
        }
        
        // Concatenar letras incorrectas
        function concatenarLetrasIncorrectas(Letra) {
            Letras = Letras + Letra + " ";
            document.getElementById("Letras").innerHTML = Letras;
        }
        
        // Cambiar vidas
        function cambiarVidas() {
            document.getElementById("Vidas").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vidas;
        }    
          

       
       
        // Comprobar si ganas o pierdes
        function ganarPerder() {  
            
            if (Vidas <= 0) {
                window.alert("Has perdido"); 
                document.getElementById("letra").disabled = true;
                document.getElementById("botonComprobar").disabled = true;
                document.body.style.backgroundImage = "url('img/Jungle.png')";
                document.getElementById("rotar").hidden = false;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("catfight").play();
                bell();
                
            } else if (Palabra.length >= 14) {
                window.alert("Has ganado");
                document.getElementById("letra").disabled = true;
                document.getElementById("botonComprobar").disabled = true;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("caminar").hidden = false;
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("cheer").play();
                document.getElementById("ahorcado").hidden = false;
                escondeImg();
               
                
            }
            
        }
        
        
        function misterio() {
            
            document.getElementById("mystery").play();
        }
        
        
        //Cambiar Imagenes con switch
       function MuestraImg() {
           switch (Vidas) {
        case 6:
           document.getElementById("ahorcado_6").hidden = false;
           break;
        case 5:
           document.getElementById("ahorcado_6").hidden = true;
           document.getElementById("ahorcado_5").hidden = false;
            break;
        case 4:
           document.getElementById("ahorcado_5").hidden = true;
           document.getElementById("ahorcado_4").hidden = false;
            break;
        case 3:
           document.getElementById("ahorcado_4").hidden = true;
           document.getElementById("ahorcado_3").hidden = false;
            break; 
        case 2:
           document.getElementById("ahorcado_3").hidden = true;
           document.getElementById("ahorcado_2").hidden = false;
            break;
        case 1:
           document.getElementById("ahorcado_2").hidden = true;
           document.getElementById("ahorcado_1").hidden = false;
            break; 
        case 0:
           document.getElementById("ahorcado_1").hidden = true;
           document.getElementById("ahorcado_0").hidden = false;
            break; 
        default:
            break;
           }  
    }
    
 //funcion para esconder las imagenes cuando se inicia
    function CargarImagenes() {
        
        if (!confirm("Let's go: a la quinta forca / al quinto pino / to the boondocks?")) {
            document.body.style.backgroundImage = "url('img/fondo1.png')";
        }   
       
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        document.getElementById("ahorcado").hidden = true;
        document.getElementById("rotar").hidden = true;
        document.getElementById("disfraz1").hidden = true;
        document.getElementById("disfraz2").hidden = true;
        document.getElementById("caminar").hidden = true;
        
        
    }
    
    function escondeImg() {
    
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        
        
    }
    
    
    function bell() {
        
        window.alert("En Paz Descanse R.I.P");
        document.getElementById("belltollx3").play();
        
        
    }
        
 
    
     var aleatorio = Math.floor(Math.random() * Palabras.length);
     var palabra = Palabras[aleatorio];
     var pista = Pistas[palabraspistas[aleatorio]];



    

