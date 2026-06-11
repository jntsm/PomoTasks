const THEME_STORAGE_KEY = 'pomotasks-theme';

/**
 * Alterna entre os temas claro e escuro.
 *
 * TODO: Integrar com botão de alternância da interface.
 */
export function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const nextTheme = current === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

/**
 * Carrega tema salvo e aplica na inicialização do app.
 *
 * TODO: Definir estratégia de fallback para preferência do sistema.
 */
export function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
    return;
  }

  const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches === true;
  document.documentElement.dataset.theme = systemPrefersDark ? 'dark' : 'light';
}
