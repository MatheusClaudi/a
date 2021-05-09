

export class SlotHorario {

    horaInicio: string;
    horaFim: string;
    quantidadePessoas: number;

    public SlotHorario(horaInicio: string, horaFim: string, quantidadePessoas: number) {
        this.horaFim = horaFim;
        this.horaInicio = horaInicio;
        this.quantidadePessoas = quantidadePessoas;
    }
}