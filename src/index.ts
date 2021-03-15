import { Kontakt } from "./kontakt";


import 'jquery/src/jquery';


import 'bootstrap/dist/css/bootstrap.css'
import { Kontakti } from "./Kontakti";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import  "./css/stil.css";





console.log("Hello world!");

const kontakti=[];
kontakti.push(new Kontakt("Dusko","Jankovic","060756467","j.jankovic@gmail.com"));
kontakti.push(new Kontakt("Marko","Simjanovic","645558886","marko.sim@gmail.com"));
kontakti.push(new Kontakt("Andjela","Petrovic","064522244","andjela999@gmail.com"));
kontakti.push(new Kontakt("Petra","Marinkov","061078344","petra.mar@outlook.com"));
kontakti.push(new Kontakt("Jelena","Vidovic","06764468","jelenav@outlook.com"));


console.log(kontakti);

const gl=new Kontakti(kontakti);
gl.Crtaj(document.body);







