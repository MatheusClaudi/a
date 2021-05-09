
export class AdminNavigation {

    base = "admin/"

    paths =
    [
        { str: 'Users', path: this.base +'userTable'},
        { str: 'Vacina', path: this.base +'vacinaTable'},
        { str: 'Registro', path: this.base +'registroTable'},
        { str: 'LoteVacina', path: this.base +'loteVacinaTable'},
        { str: 'Agendamento', path: this.base +'agendamentoTable'},
        { str: 'Postos', path: this.base +'postoVacinacaoTable'},
    ] 
}