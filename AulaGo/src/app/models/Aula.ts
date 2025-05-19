export interface Aula {
    id: number,
    dataInicio: Date,
    dataFim: Date,
    aluno: String,
    modalidade: 'Presencial' | 'Online',
    idioma: String
}