export default class ChecklistEletrica {
  constructor(departamento, condutor, placaVeiculo, bateriaInicial, bateriaFinal, fotoBateriaInicial, fotoBateriaFinal, diferenca, operacao) {
    this.departamento = departamento;
    this.condutor = condutor;
    this.placaVeiculo = placaVeiculo;
    this.bateriaInicial = bateriaInicial;
    this.bateriaFinal = bateriaFinal;
    this.fotoBateriaInicial = fotoBateriaInicial;
    this.fotoBateriaFinal = fotoBateriaFinal;
    this.diferenca = diferenca;
    this.operacao = operacao;
  }
}