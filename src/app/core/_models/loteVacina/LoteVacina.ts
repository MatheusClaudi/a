

export class LoteVacina {

    id: number;
    idPosto: number;
    idVacina: number;

    doses: number;
    validade: Date;

    quantidadeTotal: number;
    quantidadeUsada: number;
    quantidadeDisponivel: number;
    quantidadeLiberada: number;

    public LoteVacina(id: number, 
                      idPosto: number, 
                      idVacina: number, 
                      doses: number, 
                      validade: Date, 
                      quantidadeTotal: number,
                      quantidadeUsada: number, 
                      quantidadeDisponivel: number, 
                      quantidadeLiberada: number) {

        this.id = id;
        this.idPosto = idPosto;
        this.idVacina = idVacina;
        this.doses = doses;
        this.validade = validade;
        this.quantidadeTotal = quantidadeTotal;
        this.quantidadeUsada = quantidadeUsada;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.quantidadeLiberada = quantidadeLiberada;                        
    }
}