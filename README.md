# BioEsthetic — site institucional

Estrutura inicial de um site responsivo para a BioEsthetic, com páginas de início, procedimentos e contato. A marca e a imagem do consultório estão como placeholders SVG para substituição posterior.

## Pré-visualização local

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173). As rotas disponíveis são `/`, `/procedimentos` e `/contato`.

Para conferir a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Publicar uma prévia

O projeto gera arquivos estáticos na pasta `dist/`. Depois de executar `npm run build`, publique o conteúdo de `dist/` em qualquer hospedagem estática compatível com Vite, como Vercel ou Netlify. Configure o fallback de rotas para `index.html` para que os caminhos `/procedimentos` e `/contato` funcionem ao abrir diretamente.

## Personalizações pendentes

- Substitua `public/images/logo-placeholder.svg` pela identidade visual final e atualize o caminho no componente `src/components/SiteLayout.tsx` se mudar o nome do arquivo.
- Substitua `public/images/consultorio-placeholder.svg` pela foto aprovada do espaço; ajuste o `src` em `src/pages/HomePage.tsx`.
- Atualize telefone/WhatsApp e endereço em `src/pages/ContactPage.tsx`.
- Revise os textos e a lista de procedimentos antes de publicar.
