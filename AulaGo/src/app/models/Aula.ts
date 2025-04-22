export interface Aula {
    id: number;
    dataInicio: Date;
    dataFim: Date;
    aluno: string;
    modalidade: 'Presencial' | 'Online';
    idioma: string;
}