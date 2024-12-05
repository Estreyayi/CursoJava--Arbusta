function crearGato(nombre, edad) {
  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };
  return gato;
}

function agregarPropiedad(objeto, property) {l
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  return {
    nombre: nombre,
    email: email,
    password: password,
  };
}

function tieneEmail(usuario) {
  return !!usuario.email;
}

function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(usuario, password) {
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  usuarios.forEach(usuario => {
    usuario.esPremium = true;
  });
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  return usuario.posts.reduce((totalLikes, post) => totalLikes + post.likes, 0);
}

function agregarMetodoCalculoDescuento(producto) {
  producto.calcularPrecioDescuento = function () {
    return this.precio - this.precio * this.porcentajeDeDescuento;
  };
  return producto;
}