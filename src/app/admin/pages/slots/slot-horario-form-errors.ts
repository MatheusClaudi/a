export class SlotHorarioFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {
        'horaInicio': [
            { type: 'required', message: this.requiredMessage },
        ],
        'horaFim': [
            { type: 'required', message: this.requiredMessage },
        ],
        'quantidadePessoas': [
            { type: 'required', message: this.requiredMessage },
        ],
        
    }
}