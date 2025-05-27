/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
 // Definir variables
        var Letras = ["_","_","_","_","_","_","_"];
        var Palabra = [];
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
    
    
    var aleatorio = Math.floor(Math.random() * Palabras.length);
    var palabra = Palabras[aleatorio];
    var pista = Pistas[palabraspistas[aleatorio]];

    for (i = 0; i < palabra.length; i++) {
         Palabra[i] = "_";
    }   
    
   
    // Diferents idiomes per la GUI
    const Idiomes = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Estructures de Dades Joc del Penjat",
            "Versio": "Versió β Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
            "Versio": "Versión β Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Data Structures Version",
            "Versio": "Hangman Game β Version",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        },
        {
            "IdIdioma": "fr",
            "Titol": "Version avec Base de Données Jeu du Pendu",
            "Versio": "Version γ Jeu du Pendu",
            "Input": "Ecrire une lettre minuscule",
            "Pregunta": "Allons-nous aux banlieue?",
            "Comprovar": "Vérifier",
            "Paraula": "Mot:",
            "Sopes": "Tu abandonnes?",
            "Pista": "Indice",
            "Vides": "Vies:",
            "Moix": "Un chat en a sept?",
            "Lletres": "Lettres:",
            "Ets": "Êtes-vous dans les lettres?",
            "URLpistes": "URLindices:",
            "Dita": "Dit",
            "Dita1": "Aux banlieue,",
            "Dita2": "Chez un pendu, ne parle pas de cordes,",
            "Dita3": "Seize juges d'un tribunal mangent le foie d'un pendu, …",
            "Credits": "Crédits:",
            "YouTube": "Jeu Pendu sur Scratch",
            "Wikis": "Pendu",
            "Idioma": "en Français",
            "Diccionari": "Dictionnaire",
            "Teclat": "Afficher ou Masquer",
            "Incorrecte": "Caractère non valide!",
            "Repetida": "Lettre répétée!",
            "Encertat": "Vous as raison!",
            "Guanyat": "et vous avez gagné!",
            "Fallat": "Vous avez échoué!",
            "Perdut": "et vous avez perdu!",
            "Descansi": "Repose en paix - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");
    
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
            
            if ((Letra < "a") || (Letra > "z")) {  
                window.alert("Vuelve a intentarlo");
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = false;
                document.getElementById("clock").play();
            }
            else if (palabra.includes(Letra)) {
                window.alert("Has acertado");
                concatenarLetrasCorrectas(Letra);
                if (document.getElementById('off').hidden) {
                document.getElementById("miau").play();
                }
          
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = false;
                if (document.getElementById('off').hidden) {
                document.getElementById("clock").play();
            }
            } else {
                window.alert("Has fallado");
                concatenarLetrasIncorrectas(Letra);
                Vidas = Vidas - 1;
                cambiarVidas();
                MuestraImg();
                if (document.getElementById('off').hidden) {
                document.getElementById("boom").play();
            }
                if (document.getElementById('off').hidden) {
                document.getElementById("clock").play();
            }
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz1").hidden = false;                
            }

            ganarPerder();
        }

        // Concatenar letras correctas
        function concatenarLetrasCorrectas(Letra) {
            // Palabra = Palabra + Letra + " ";
            var pos = palabra.indexOf(Letra);
            Palabra[pos] = Letra;
            
            for (i = pos; i < palabra.length; i++) {
                if (palabra[i] === Letra)
            
                    Palabra[i] = Letra;
             }
            document.getElementById("Palabra").innerHTML = Palabra;
        } 
        
        
        // Concatenar letras incorrectas
        function concatenarLetrasIncorrectas(Letra) {
            //Letras = Letras + Letra + " ";
           if (Letras.indexOf(Letra) != -1) {
                 window.alert("Letra Repetida");
                 (Vidas = Vidas + 1);
                 
            }
       
            var pos = Letras.indexOf(Letra);
            Letras[pos] = Letra;
            Letras[7 - Vidas] = Letra;
            
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
                document.getElementById("Teclado").hidden = true;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = true;
                if (document.getElementById('off').hidden) {
                document.getElementById("catfight").play();
            }
                    bell();
                
            } else if (Palabra.indexOf("_")=== -1) {
                window.alert("Has ganado");
                document.getElementById("letra").disabled = true;
                document.getElementById("botonComprobar").disabled = true;
                document.getElementById("disfraz1").hidden = true;
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("disfraz3").hidden = true;
                document.getElementById("caminar").hidden = false;
                document.body.style.backgroundImage = "url('img/Party.png')";
                if (document.getElementById('off').hidden) {
                document.getElementById("cheer").play();
            }
                document.getElementById("Teclado").hidden = true;
                document.getElementById("ahorcado").hidden = false;
                escondeImg();
               
                
            }
            
        }
        
        
        function misterio() {
            if (document.getElementById('off').hidden) {
            document.getElementById("mystery").play();
        }
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
       document.getElementById("Teclado").hidden = true;
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
        document.getElementById("Palabra").value = Palabra;
        
        
    }
    
    function escondeImg() {
    
        
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        
        document.getElementById("disfraz1").hidden = true;
        document.getElementById("disfraz2").hidden = true;
        document.getElementById("disfraz3").hidden = true;
        
        document.body.style.display = "block";
    }
    
    
    function bell() {
        
        window.alert("En Paz Descanse R.I.P");
        if (document.getElementById('off').hidden) {
        document.getElementById("belltollx3").play();
    }
        
    }
        

   function randomizadorpista() {
      
       window.alert(pista);

   }
