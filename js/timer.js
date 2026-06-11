/**
 * Classe base do timer Pomodoro.
 *
 * Esta estrutura serve como ponto de partida para implementar:
 * - controle de estado (foco/pausa)
 * - contagem regressiva
 * - integração com notificações/som
 */
export class Timer {
  constructor(options = {}) {
    // TODO: Receber tempos de foco/pausa e referências de elementos da UI.
    this.options = options;
  }

  start() {
    // TODO: Iniciar ou retomar a contagem regressiva.
  }

  pause() {
    // TODO: Pausar a contagem sem resetar o tempo atual.
  }

  reset() {
    // TODO: Restaurar estado inicial do timer e atualizar interface.
  }

  updateDisplay() {
    // TODO: Formatar o tempo (mm:ss) e atualizar o elemento de exibição.
  }
}
