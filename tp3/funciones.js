
function funciones() {
    const resul=document.getElementById("resultado");
    const resul2=document.getElementById("resultado2"); 
    const resulMatch=document.getElementById("resultado3");
    var aux="";
    
    let numeroAle=Math.floor(Math.random() * 826) + 1;
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then (data =>{
            let nombre=data.results[0].name.first;
            let apellido=data.results[0].name.last;
            let Dni=data.results[0].id.value;
            let foto=data.results[0].picture.large;
            let genero=data.results[0].gender;
            let coordenadasLAT=data.results[0].location.coordinates.latitude;
            let coordenadasLON=data.results[0].location.coordinates.longitude;
            console.log(genero);

            let hombre="male";
            let mujer="female";
            let color="";
            aux=genero;
            if (genero==hombre) {
              color=`background-color: yellow;`
            } else {
                if (genero==mujer) {
                  color=`background-color: green;`  
                }
            }
            
            let resul_datos=`<div style="${color}">
                            Nombre:${nombre}
                            <br> Apellido:${apellido}
                            <br>DNI:${Dni}
                            <p><br><img src="${foto}" alt="La fotito"></p>
                            <br> Genero:${genero}
                            <br> Latitud:${coordenadasLAT}
                            <br> Longitud:${coordenadasLON}
                            </div> `             
            resul.innerHTML=resul_datos;
            
      
            fetch(`https://rickandmortyapi.com/api/character/${numeroAle}`)
            .then(response => response.json())
              .then (character =>{
                let nombre=character.name;
                let episodios=character.episode;
                let especie=character.species;
                let foto=character.image;
                let generoo=character.gender;
                let color="";
                if (generoo=="unknown"){
                  color="background-color: red;"
                } else {
                  color="background-color: darkorchid;"
                }

                const resul_datos=`<div style="${color}">
                                  Nombre:${nombre}
                                  <br> Total de episodios:${episodios.length}
                                  <br> Especie:${especie}
                                  <br> Genero:${generoo}
                                  <br> <img src=${foto} alt="Avatar2">
                                  </div>`;
                resul2.innerHTML=resul_datos;
                if (generoo=="Female"&& aux=="female"|| generoo=="Male" && aux=="male") {
                  let img="https://img.freepik.com/vector-premium/verificacion-marca-verificacion-circulo-azul-estrella-vector-icono-aislado-sobre-fondo-blanco_261737-745.jpg?w=740";
                  var results=`<img src=${img} alt="Avatar3"style="height: 100px;width: 100px;">`
                }
                else{
                  let img="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png";
                  var results=`<img src=${img} alt="Avatar3"style="height: 100px;width: 100px;">`;
                }
                
                resulMatch.innerHTML=results;                
              })
      })
}