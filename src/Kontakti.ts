import { Kontakt } from "./kontakt";



export class Kontakti
{
    private lista:Kontakt[];
    private kontejner:HTMLElement;
    constructor(listaKontakata:Kontakt[])
    {
        this.lista=listaKontakata;

    }

    DodajUListu(novi:Kontakt)
    {
        this.lista.push(novi);

    }

    Crtaj(host:HTMLElement)
    {
        this.kontejner=document.createElement("div");
        host.appendChild(this.kontejner);

        const naslov=document.createElement("h1");
        naslov.innerHTML="Imenik";
        naslov.classList.add("text-dark","text-center","font-bold");
        this.kontejner.appendChild(naslov);
        const ostalo=document.createElement("div");
        this.kontejner.appendChild(ostalo);
        this.crtajFormu(ostalo);
        this.crtajListu(ostalo);
        host.className="container-fluid";
        ostalo.classList.add("row");


            
    }

    crtajFormu(host:HTMLElement)
    {
        const formaKont=document.createElement("div");
        host.appendChild(formaKont);

        const naslov=document.createElement("h3");
        naslov.innerHTML="Unesite novi kontakt";
        formaKont.appendChild(naslov);

        const niz=["Ime","Prezime","Broj telefona","E-mail"];
        const plcHld=["John","Doe","060000000","john.doe@outlook.com"];
        const klase=["ime","prezime","tel","mail"];
        formaKont.className="col-2.5";
        formaKont.classList.add("forma");

        niz.forEach((el,indeks)=>{
            const minKont=document.createElement("div");
            formaKont.appendChild(minKont);
            minKont.className="form-group";

            const labela=document.createElement("label");
            labela.innerHTML=el;
            minKont.appendChild(labela);

            const polje=document.createElement("input");
            polje.type="text";
            polje.placeholder=plcHld[indeks];
            
            minKont.appendChild(polje);
            polje.className="form-control";
            polje.classList.add(klase[indeks]);
        

        })
        const divDugme=document.createElement("div");
        formaKont.appendChild(divDugme);

        const dugme=document.createElement("button");
        dugme.classList.add("btn","btn-primary","btn-block");
        dugme.innerHTML="Dodaj";
        divDugme.appendChild(dugme);

        dugme.onclick=(ev)=>{

            const ime=(<HTMLInputElement>this.kontejner.querySelector(".ime")).value;
            const prezime=(<HTMLInputElement>this.kontejner.querySelector(".prezime")).value;
            const telefon=(<HTMLInputElement>this.kontejner.querySelector(".tel")).value;
            const mejl=(<HTMLInputElement>this.kontejner.querySelector(".mail")).value;

            if(!ime || !prezime || !telefon || !mejl)
            {
               alert("Morate popuniti sva polja!")
               return;
            }
            const novi=new Kontakt(ime,prezime,telefon,mejl);

           

                console.log(novi);

                this.lista.push(novi);
                this.OsveziListu();
        }


    

    }

    crtajListu(host:HTMLElement)
    {
        const kontListe=document.createElement("div");

        const tabela=document.createElement("table");
        tabela.classList.add("table","table-striped");
        host.appendChild(kontListe);
        kontListe.className="col-9";
        kontListe.classList.add("kontListe");

        const naziv=document.createElement("h3");
        naziv.innerHTML="Lista kontakata";
        kontListe.appendChild(naziv);
        kontListe.appendChild(tabela);

        const naslovi=["Ime","Prezime","Broj telefona","E-mail"];
        const ikonice=["fa-user","fa-user","fa-phone","fa-envelope"];

        const heder=document.createElement("thead");
        heder.classList.add("bg-dark","thead","text-white");
        tabela.appendChild(heder);
        naslovi.forEach((el,indeks)=>{
            const thh=document.createElement("th");
            heder.appendChild(thh);
            thh.innerHTML=el;
            const ikonica=document.createElement("i");
            ikonica.classList.add("fa",ikonice[indeks],"moja");
            thh.appendChild(ikonica);
        })
        const telo=document.createElement("tbody");
        tabela.appendChild(telo);

       this.OsveziListu();

    }



    OsveziListu()
    {
        const teloTab=this.kontejner.querySelector("tbody");
        if(teloTab)
        {

        while(teloTab.firstChild)
        {
            teloTab.removeChild(teloTab.firstChild);
        }
    }

        this.lista.sort(function(a,b){
            if(a.ime<b.ime)
            return -1;
            else if(a.ime>b.ime)
            return 1;
            else return 0;
            
        })

        this.lista.forEach(el=>{
            el.crtajKontakt(teloTab);
        })
    }

}