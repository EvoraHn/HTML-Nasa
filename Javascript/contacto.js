function RegistroDeUnaEstrella()
{
    
    let principal=document.getElementById("Estrella");
    let formulario = `<div class="ContenedorDeEstrella">
    

<div class="DatosSimples">
    <div class="Datos1">
        <form  >
            <p>Constelacion:</p>
            <input type="text" name="Constelacion" id="Constelacion">
            <p>
            Fecha Memorable: </p>
            <input placeholder="dia/mes/año" type="text" name="Fecha" id="Fecha">
        </form>
    </div>

    <div class="Datos2">
        <form>
            
            <p >Copias del certificado: </p>
            <input class="dat2" placeholder="1-10" type="text" name="Copias" id="Copias">
            <p >
            Entrega: </p>
            <input class="dat2" type="text" name="Entrega" id="Entrega">
        </form>
    </div>
</div>
    
<div class="DatosDePie" >
    <form >
        <p>Mensaje personalizado:</p>
        <textarea style="width: 46vw; height: 8vw;"  rows="10" cols="4" placeholder="Escribenos..." id="CajaDeMensajePersonalizado" type="text" name="Mensaje" id="Mensaje"></textarea>
        <p>
        
            <P>Mapa Estelar: </p>
            <input style="left: 2vw;" value="si" type="radio" name="MapaEstelar" id="MapaEstelar"> <span> Si </span> 
            <input style="left: 2vw;" value="no" type="radio" name="MapaEstelar" id="MapaEstelar"> <span> No </span> 
        </p>
        
    </form>
</div>
            

<input onclick="alertEstrella()" class="button" type="submit" value="Enviar Datos">
<input class="button" type="reset" value="Limpiar datos">`;


    principal.innerHTML=principal.innerHTML + formulario;
   
}

function alertEstrella()
{
    let constelacion = null;
    let copias = null;
    let fecha = null;
    let entrega= null;
    let mensaje = null;
    let mapaEstelar = null;

    constelacion = document.getElementsByName("Constelacion")[0].value;
    copias = document.getElementsByName("Copias")[0].value;
    fecha = document.getElementsByName("Fecha")[0].value;
    entrega = document.getElementsByName("Entrega")[0].value;
    mensaje = document.getElementsByName("Mensaje")[0].value;
    mapaEstelar = document.getElementsByName("MapaEstelar")[0].value;
    alert(constelacion+"\n"+copias+"\n"+fecha+"\n"+entrega+"\n"+mensaje+"\n"+mapaEstelar);
};


function Contactanos()
{
    
    let principal=document.getElementById("ccl");
    let formulario = `<div class="ContenedorDeContacto">
    
    
    
    <div class="Datos1">
        <form  >
            <p>Nombre:</p>
            
            <input placeholder="Nombre Apellido"  type="text" name="Nombre" id="Nombre"/>
            
            <p >Telefono:</p>
            
            <input placeholder="+(Codigo) Numero" type="text" name="Telefono" id="Telefono"/>
            
            <p>Correo Electronico: </p>
            <input type="Email" name="Email" id="Email">
            
        </form>
    </div>
    
    <div class="Datos2">
        <form  action="">
            <P>Mensaje: </P>
            <textarea style="width: 19vw; height: 8vw;" placeholder="Escribenos" cols="10" rows="10" style="height: 14.6em; width: 98%;" type="Mensaje" name="Mensaje" id="Mensaje"></textarea>
        </form>
    <span>
        <input class="button" type="submit" value="Enviar Datos">
    <input class="button" type="reset" value="Limpiar datos">
    </span>
    </div>
    
    
    
    
    <!--Contenedor-->
</div>`;


    principal.innerHTML=principal.innerHTML + formulario;
   
}


