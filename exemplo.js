let nomeVariavel = "Victor Santana";
console.log(nomeVariavel);

let cores = ["azul", "vermelho", "verde"];
cores[5] = "amarelo";
cores.forEach(function(valor){
    console.log(valor);
});

console.log("--------------------------------");

let carro = {
    marca: "Fiat",
    modelo: "147",
    cor: "Branca",
    km: 0,
    ligado: false,
    ligar: function(){
        this.ligado = true;
    }
    andar: function(distancia){
        this.ligar();
        this.km = this.km + distancia;
        return this.km;
    }
};
console.log(carro.andar(10));
console.log(carro.andar(30));
console.log(carro.andar(20));
console.log(carro.andar(60));
console.log(carro.km);

