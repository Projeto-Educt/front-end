### Estrutura de pastas
```sh
mocks
public
│   ├── images
│   └── icons
src
│   ├── app
│   ├── components
│   ├── context
│   ├── hooks
│   ├── layout
│   ├── providers
│   ├── services
│   ├── styles
│   └── types

```

- **mocks:** Provavelmente usado para dados de teste ou simulações (mocks).
- **public:** Contém arquivos estáticos, como imagens e ícones.
  - **images:** Pasta para armazenar imagens.
  - **icons:** Pasta para armazenar ícones.

- **src:** Diretório principal de código-fonte.
  - **app:** Romo rotas e a inicialização principal.
  - **components:** Contém os componentes reutilizáveis da interface.
  - **context:** Para gerenciamento de estado usando o Context API.
  - **hooks:** Contém hooks personalizados do React.
  - **layout:** Layouts comuns da aplicação, como cabeçalhos, rodapés ou estruturas de páginas.
  - **providers:** Geralmente para contextos ou provedores de dados que envolvem a aplicação.
  - **services:** Requisições e interações com APIs ou outras fontes de dados.
  - **styles:** Arquivos de estilização, `scss`.
  - **types:** Definições de tipos TypeScript usados na aplicação.