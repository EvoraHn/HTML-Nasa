/**
 * Registro de una estrella
 */

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
        <textarea style="width: 46vw; height: 8vw;"  rows="10" cols="4" placeholder="Escribenos..." id="Mensaje" type="text" name="Mensaje" id="Mensaje"></textarea>
        <p>
        
            <P>Mapa Estelar: </p>
            <input style="left: 2vw;"  value="si" type="radio" name="MapaEstelar" id="si"> <span class="radioButton" > Si </span> 
            <input style="left: 2vw;"  value="no" type="radio" name="MapaEstelar" id="no"> <span class="radioButton" > No </span> 
        </p>
        
    </form>
</div>
            

<input onclick="alertEstrella()" class="button" type="submit" value="Enviar Datos">
<input class="button" onClick="limpiarDatosDeRegistroDeEstrella()" type="reset" value="Limpiar datos">`;


    principal.innerHTML=principal.innerHTML + formulario;
   
}

function alertEstrella()
{
    const estrella =
    [
        {
            constelacion: document.getElementsByName("Constelacion")[0].value,
            copias: document.getElementsByName("Copias")[0].value,
            fecha: document.getElementsByName("Fecha")[0].value,
            entrega: document.getElementsByName("Entrega")[0].value,
            mensaje: document.getElementsByName("Mensaje")[0].value,
            mapaEstelar: document.getElementsByName("MapaEstelar")[0].value,
        }
    ];
    

    alert(`${estrella[0].constelacion} \n ${estrella[0].copias} \n ${estrella[0].fecha} \n ${estrella[0].entrega} \n ${estrella[0].mensaje} \n ${estrella[0].mapaEstelar} `);
};

function limpiarDatosDeRegistroDeEstrella()
{
    document.getElementById('Constelacion').value = '';
    document.getElementById('Copias').value = '';
    document.getElementById('Fecha').value = '';
    document.getElementById('Mensaje').value = '';
    document.getElementById('Entrega').value = '';
  
    
    document.querySelectorAll('[name=MapaEstelar]').forEach((x) => x.checked = false);
};

/*
    Contactos
*/
function Contactanos()
{
    
    let principal=document.getElementById("ccl");
    let formulario = `<div class="ContenedorDeContacto">
    
    
    
    <div class="Datos1">
    <form>
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
        <input onclick="alertDeContacto()" class="button" type="submit" value="Enviar Datos">
        
        <input class="button" onClick="limpiarDatosDeContacto()" type="reset" value="Limpiar datos">
    </span>
    </div>
    
    </form>
    
    
    
    <!--Contenedor-->
</div>`;


    principal.innerHTML=principal.innerHTML + formulario;
   
};

function alertDeContacto()
{
    const infromacionDeContacto=
    [
        {
            nombre: document.getElementsByName("Nombre")[0].value,
            telefono: document.getElementsByName("Telefono")[0].value,
            correo: document.getElementsByName("Email")[0].value,
            mensaje: document.getElementsByName("Mensaje")[0].value,
        }
    ];
    alert(` ${infromacionDeContacto[0].nombre} \n ${infromacionDeContacto[0].telefono} \n ${infromacionDeContacto[0].correo} \n ${infromacionDeContacto[0].mensaje}`);
};

function limpiarDatosDeContacto()
{
    document.getElementById('Nombre').value = '';
    document.getElementById('Telefono').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Mensaje').value = '';
    

};
