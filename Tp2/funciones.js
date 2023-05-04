//function funcion() {
//    const jugador={
//            nombre:"Barrios",
//            edad:24,
//            activo:true,
//            apodo:"perrito",
//            saludar: function (){return "hola"}
//                    }
//                console.log(jugador.nombre);
//}
function funciones() {
  const id_personaje1=document.getElementById('la_id');
  const resul=document.getElementById("resultado");
  const fotos=document.getElementById("fotos");

  const id_personaje2= id_personaje1.value;
  const url= `https://rickandmortyapi.com/api/character/${id_personaje2}`;

 
  fetch(url)
      .then(response => response.json())
      .then (data =>{
        const nombre=data.name;
        const episodios=data.episode;
        const especie=data.species;
        const fotoo=data.image;
        let contador=0;

        episodios.forEach(function(aux,i){
          contador=i;
        })
        const resul_datos= `Nombre:${nombre}<br> Total de episodios:${contador}<br> Especie:${especie}<br> <img src=${fotoo} alt="Avatar">`;
        resul.innerHTML=resul_datos;
      })

}