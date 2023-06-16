function funcion() {
    const id_prov=document.getElementById("la_id").value;
    const id_muni=document.getElementById("la_id2").value;
    const resultado=document.getElementById("resultado");
    const url=`datosCensales.json`;
    

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data["localidades-censales"])
        var muni="";
        var id_munii="";
        var depar="";
        var provincia="";
        var id_provv="";
        var latitud="";
        var longitud="";
        var resul="";
        for (let i = 0; i < data["localidades-censales"].length; i++) {
            const objeto = data["localidades-censales"][i];

            if (id_muni==objeto.municipio.id&&id_prov==objeto.provincia.id) {
                muni=objeto.municipio.nombre;
                id_munii=objeto.municipio.id;
                provincia=objeto.provincia.nombre;
                id_provv=objeto.provincia.id;
                latitud=objeto.centroide.lat;
                longitud=objeto.centroide.lon;
                break;
            } else{
                if (id_prov==objeto.provincia.id&&objeto.municipio.id==null) {
                    depar=objeto.departamento.nombre;
                    muni=objeto.municipio.nombre;
                    id_munii=objeto.municipio.id;
                    provincia=objeto.provincia.nombre;
                    id_provv=objeto.provincia.id;
                    latitud=objeto.centroide.lat;
                    longitud=objeto.centroide.lon;
                    break;
                }
            }
        }
        if (id_muni=="") {
            alert("ingrese la id de municipalidad por favor")
        }
        if (id_prov=="") {
            alert("ingrese id de provincia")
        }
            if (muni==null) {
                 resul=` <br>Provincia:${provincia} 
                <br> Departamento: ${depar}
                <br> latitud: ${latitud}
                <br> longitud: ${longitud}`
            }else{
                resul=`<br>Provincia:${provincia} 
                <br> Municipio: ${muni}
                <br> latitud: ${latitud}
                <br> longitud: ${longitud}`
            }
            
        
        resultado.innerHTML=resul;
       
    })

}