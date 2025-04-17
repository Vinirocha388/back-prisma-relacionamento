# 💻 Back-End Relacionamento
Bem-vindo ao repositório do NoteHub! Este guia irá ajudá-lo a configurar e executar o projeto localmente.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Passo a passo

1. **Clone o repositório**  
    Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/Vinirocha388/back-prisma-relacionamento.git
    cd back-prisma-relacionamento
    ```

2. **Instale as dependências**  
    Execute o comando abaixo para instalar todas as dependências do projeto:
    ```bash
    npm install
    ```

3. **Configure o Prisma**  
    Certifique-se de que o arquivo `.env` está configurado corretamente com as informações do banco de dados.

4. **Execute as migrações do Prisma**  
    Para criar as tabelas no banco de dados, execute:
    ```bash
    npx prisma migrate dev
    ```

5. **Inicie o servidor**  
    Após configurar o banco de dados, inicie o servidor:
    ```bash
    npm start
    ```

6. **Acesse o projeto**  
    Abra o navegador e acesse `http://localhost:3000` para visualizar o back-prisma-relacionamento.

## Comandos úteis

- **Sincronizar o Prisma com o banco de dados**:
  ```bash
  npx prisma db push
  ```



## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


## .gitignore

node_modules
.env

## env

DATABASE_URL="file:./dev.db"
