# POMOTasks

POMOTasks é uma base inicial para um aplicativo de produtividade com técnica Pomodoro, pensado para evoluir em fases e com foco em experiência PWA.

## Objetivo do projeto

Entregar uma estrutura profissional e limpa para desenvolvimento incremental de um app Pomodoro completo, começando pelo MVP e evoluindo para recursos avançados.

## Roadmap (4 fases)

### Fase 1 — MVP
- Timer pomodoro básico (foco + pausa)
- Controles de iniciar, pausar e resetar
- Display principal de tempo
- Tema claro/escuro

### Fase 2 — Recursos de produtividade
- Customização de tempos de foco/pausa
- Notificações do navegador
- Som de alerta

### Fase 3 — PWA completo
- Cache offline com Service Worker
- Manifesto refinado e instalação
- Histórico de sessões
- Estatísticas iniciais

### Fase 4 — Evolução do produto
- Melhorias de UX e acessibilidade
- Recursos adicionais de produtividade
- Integrações e otimizações

## Estrutura de pastas

```text
.
├── assets/
│   └── icons/
│       └── README.md
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── theme.js
│   └── timer.js
├── public/
│   ├── manifest.json
│   └── service-worker.js
├── .gitignore
├── LICENSE
├── README.md
└── index.html
```

## Como rodar localmente

Como este projeto é estático nesta fase inicial, você pode abrir o `index.html` diretamente no navegador ou usar um servidor local simples.

Exemplo com Python:

```bash
python -m http.server 5500
```

Depois, acesse `http://localhost:5500`.

## Como contribuir

1. Faça um fork do repositório
2. Crie uma branch com sua feature ou correção
3. Faça commits pequenos e descritivos
4. Abra um Pull Request explicando as mudanças

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
