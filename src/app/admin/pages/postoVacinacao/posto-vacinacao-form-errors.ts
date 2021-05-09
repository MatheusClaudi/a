
export class PostoVacinacaoFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],

        'nome': [
            { type: 'required', message: this.requiredMessage },
        ],
        'horarioFuncionamento': [
            { type: 'required', message: this.requiredMessage },
        ],
        'endereco': [
            { type: 'required', message: this.requiredMessage },
        ],
        'cidade': [
            { type: 'required', message: this.requiredMessage },
        ],
        'cep': [
            { type: 'required', message: this.requiredMessage },
        ],
        'rua': [
            { type: 'required', message: this.requiredMessage },
        ],
        'numero': [
            { type: 'required', message: this.requiredMessage },
        ],
        'bairro': [
            { type: 'required', message: this.requiredMessage },
        ]
    }
}