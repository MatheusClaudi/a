import { Endereco } from "../util/Endereco";

export class PostoVacinacao {
    id: number;
    nome: string;
    horarioFuncionamento: string;
    endereco: Endereco;

    public PostoVacinacao(id: number, nome: string, horarioFuncionamento: string, endereco: Endereco) {
        this.id = id;
        this.nome = nome;
        this.horarioFuncionamento = horarioFuncionamento;
        this.endereco = endereco;
    }
}