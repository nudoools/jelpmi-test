confirmados = [
  {
    "id":"0001",
    "city":"CDMX",
    "customer":"Román López",
    "addres_street": "Zamora 177, Int 101",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "30 feb",
    "hour": "7:00 AM",
    "length": "4",
    "lat_service": "19.412901",
    "long_service": "-99.180274"
  },
  {
    "id":"0002",
    "city":"CDMX",
    "customer":"Mauricio Morales",
    "addres_street": "Amatlán 18",
    "addres_neighborhood": "Condesa",
    "service_type": "Express",
    "date": "30 feb",
    "hour": "12:00 AM",
    "length": "3",
    "lat_service": "19.413958",
    "long_service": "-99.174357"
  },
  {
    "id":"0003",
    "city":"CDMX",
    "customer":"Roberto Salgado",
    "addres_street": "Atlixco 5",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "30 feb",
    "hour": "4:00 PM",
    "length": "3",
    "lat_service": "19.415771",
    "long_service": "-99.172825"
  }
];

n =  new Date();

y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

switch(m) {
    case 1:
        m = "enero";
        break;
    case 2:
        m = "febrero";
        break;
    case 3:
        m = "marzo";
        break;
    case 4:
        m = "abril";
        break;
    case 5:
        m = "mayo";
        break;
    case 6:
        m = "junio";
        break;
    case 7:
        m = "julio";
        break;
    case 8:
        m = "agosto";
        break;
    case 9:
        m = "septiembre";
        break;
    case 10:
        m = "octubre";
        break;
    case 11:
        m = "noviembre";
        break;
    case 12:
        m = "diciembre";
        break;
}

document.getElementById("date").innerHTML = "Fecha: " + d + " de " + m + " del " + y + " (Hoy).";

function servicios() {
  var content = "";

  for(var i = 0; i < confirmados.length; i++){

    content += "<div class='row servicio'>"; 

      /* Row uno */

      content += "<div class='rowUno'>";
        content += "<h4 class='cabeceraDireccion'>" + "Dirección" + "</h4>";
        content += "<h1 class='col-12 direccion'>" + confirmados[i].addres_street + ", " + confirmados[i].addres_neighborhood + ", " + confirmados[i].city + "</h1>"; //r1c1 r1c2
      content += "</div>";
   
       /* Row dos */

      content += "<div class='rowDos'>"; // Row Dos

        content += "<div class='subRowDos-1'>"
           content += "<h4 class='cabeceraFecha'>" + "Fecha" + "</h4>"; 
           content += "<h2 class='row fecha'>" + confirmados[i].date + "</h2>"; //r2c1
        content += "</div>";

        content += "<div class='subRowDos-2'>"
           content += "<h4 class='cabeceraHora'>" + "Hora" + "</h4>"; 
           content += "<h2 class='row hora'>" + confirmados[i].hour + "</h2>"; //r2c2
        content += "</div>";

      content += "</div>";

       /* Row tres */

      content += "<div class='rowTres'>"; 

         content += "<div class='subRowTres-1'>"
           content += "<h4 class='cabeceraFecha'>" + "Duración" + "</h4>"; 
           content += "<h2 class='row duracion'>" + confirmados[i].length + "</h2>"; //r3c1
         content += "</div>"; 

          content += "<div class='subRowTres-2'>"
            content += "<h4 class='row tipoDeServicio'>" + confirmados[i].service_type + "</h4>"; //r3c2
          content += "</div>"; 

      content += "</div>";

       /* Row cuatro */

      content += "<div class='rowCuatro'>";

        content += "<div class='subRowCuatro'>"
          content += "<h3 class='col-12 verDetalles'>" + "Ver Detalles" + "</h3>"; //r4c1 r4c2
        content+="</div>";

      content += "</div>";

    content += "</div>";

  }

  document.getElementById("confirmados").innerHTML = content;
}
