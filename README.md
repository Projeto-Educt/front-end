<p align="center" >
  <a href="https://github.com/Projeto-Educt" target="blank"><img src="./public/images/logo-educt.png" width="200" alt="Educt Logo" style="border-radius: 8px"/></a>
</p>


## Descrição

A [Educt](https://mudar_link_da_aplicação_em_deploy) nasce como um projeto social, onde a ideia é conectar estudantes do ensino médio com profissionais experientes ou com 
graduandos, oferecendo mentorias onde os estudantes possam tirar dúvidas relacionadas com carreiras


## Inicialização

  Declare as variaveis de ambiente necessarias de acordo com o `.env.example`. Crie arquivos parao ambiente `.env.production` ou `.env.development`  

  ```sh
  # Ambiente de desenvolvimento
  npm run dev

  # Com docker
  npm run dev:docker-build  # para construir a imagem

  npm run dev:docker-run  # para subir o container. Quando encerrado será removido automticamente

  # Ambiente de produção
  npm run build

  npm start
  ```

## Testes
  ```sh
  # Execução dos testes
  npm run test

  # Executando os testes e assistindo as mudanças
  npm run test:watch

  # Relatorio de cobertura dos testes
  npm run test:cov
  ```

## Storybook
  ```sh
  npm run storybook
  ```

## Arquitetura
  - [Documentação da arquitetura utilizada no projeto](./docs/architecture.md)