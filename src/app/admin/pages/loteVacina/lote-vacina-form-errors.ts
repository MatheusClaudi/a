export class LoteVacinaFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],
        
        'idPosto': [
            { type: 'required', message: this.requiredMessage },
        ],
        'idVacina': [
            { type: 'required', message: this.requiredMessage },
        ],

        'doses': [
            { type: 'required', message: this.requiredMessage },
        ],
        'validade': [
            { type: 'required', message: this.requiredMessage },
        ],

        'quantidadeTotal': [
            { type: 'required', message: this.requiredMessage },
        ],
        
        'quantidadeUsada': [
            { type: 'required', message: this.requiredMessage },
        ],

        'quantidadeDisponivel': [
            { type: 'required', message: this.requiredMessage },
        ],

        'quantidadeLiberada': [
            { type: 'required', message: this.requiredMessage },
        ],
    }
}