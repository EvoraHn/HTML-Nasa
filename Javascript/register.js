function resgistro()
{
    
    const usuario =
    [
        {
            correo: document.getElementsByName("email")[0].value,
            nombreDeUsuario: document.getElementsByName("username")[0].value,
            contraseña: document.getElementsByName("password")[0].value,
        }
    ];

    alert(`Te has registrado correctamente ${usuario[0].nombreDeUsuario}`);
    return true;
}