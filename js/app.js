import { Timer } from './timer.js';
import { loadTheme, toggleTheme } from './theme.js';

/**
 * Função principal de inicialização da aplicação.
 *
 * TODO: Orquestrar regras de negócio do pomodoro aqui.
 */
function initApp() {
  loadTheme();

  const timer = new Timer({
    displayElement: document.getElementById('timer-display'),
  });

  // TODO: Conectar eventos do timer aos botões.
  document.getElementById('start-btn')?.addEventListener('click', () => timer.start());
  document.getElementById('pause-btn')?.addEventListener('click', () => timer.pause());
  document.getElementById('reset-btn')?.addEventListener('click', () => timer.reset());

  // Tema claro/escuro.
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // TODO: Registrar service worker, notificações e persistência futura.
}

window.addEventListener('DOMContentLoaded', initApp);
