# Plano de melhoria do repositório

## Alta prioridade

- [x] Proteger a leitura do carrinho no `localStorage`, com validação e recuperação para estado vazio.
- [x] Ajustar o formulário de contato para comunicar corretamente o fluxo `mailto:`, sem limpar dados antes do envio confirmado pelo visitante.
- [x] Criar README com visão do projeto, requisitos, comandos, arquitetura e publicação no GitHub Pages.

## Média prioridade

- [x] Padronizar o projeto em npm e remover o lockfile do Bun, que não é utilizado.
- [x] Adicionar o comando de verificação de tipos ao projeto e registrar a adoção gradual de `strict`.
- [ ] Hospedar localmente os recursos de compartilhamento e favicon; o compartilhamento e o favicon foram internalizados, mas as capturas dos projetos continuam externas até que suas imagens sejam disponibilizadas. Há fallback local para falhas de carregamento.
- [x] Criar workflow do GitHub Actions para lint, tipos e build em push e pull request, além de publicação manual na `gh-pages`.
- [x] Remover código de template que não é necessário em produção e corrigir metadados do pacote.

## Pendências que exigem uma decisão externa

- [ ] Integrar o formulário a um serviço de envio (por exemplo, Formspree, Resend ou backend próprio), caso seja necessário receber mensagens sem depender do cliente de e-mail do visitante.
- [ ] Fornecer ou aprovar capturas locais dos projetos exibidos no portfólio para retirar a dependência do Microlink.
