export function getFormattedMonth(today){
    var fMes = 'Nulo'

    switch(today){
        case 1: fMes = 'Janeiro'; break;
        case 2: fMes = 'Fevereiro'; break;
        case 3: fMes = 'Março'; break;
        case 4: fMes = 'Abril'; break;
        case 5: fMes = 'Maio'; break;
        case 6: fMes = 'Junho'; break;
        case 7: fMes = 'Julho'; break;
        case 8: fMes = 'Agosto'; break;
        case 9: fMes = 'Setembro'; break;
        case 10: fMes = 'Outubro'; break;
        case 11: fMes = 'Novembro'; break;
        case 12: fMes = 'Dezembro'; break;

        default: fMes = 'Funfo pelo menos'
    }

    return fMes
}