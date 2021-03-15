

export class Kontakt{

    public ime:string;
    public prezime:string;
    public brTel:string;
    public mejl:string;

    constructor(ime:string, prezime:string, brTel:string,mejl:string)
    {
        this.ime=ime;
        this.prezime=prezime;
        this.brTel=brTel;
        this.mejl=mejl;
    }


   

    crtajKontakt(host:HTMLElement)
    {
        const red=document.createElement("tr");
        host.appendChild(red);
        
        const niz=[this.ime,this.prezime,this.brTel,this.mejl];

        niz.forEach(el=>{
            const polje=document.createElement("td");
            red.appendChild(polje);
            polje.innerHTML=el;
        })
    }
}