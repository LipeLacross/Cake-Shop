# Cake-Shop

A "Bolos da Dona Nilda" é um site dedicado à venda de bolos e sucos artesanais. O site apresenta uma interface amigável com uma estrutura simples para navegar pelos produtos, adicionar itens ao carrinho e visualizar o total. 

## 🔨 Funcionalidades do Projeto

- **Exibição de Produtos**: Mostra bolos e sucos disponíveis para compra com imagem, descrição e preço.
- **Carrinho de Compras**: Permite aos usuários adicionar produtos ao carrinho e visualizar o total.
- **Horas de Funcionamento**: Exibe as horas de funcionamento da loja no cabeçalho do site.
- **Responsividade**: Layout ajustado para diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktop.

### Exemplo Visual do Projeto

![image](https://github.com/user-attachments/assets/f03dd31d-ff23-4a6d-aaed-3f1515165022)

## ✔️ Técnicas e Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilização e layout do site, incluindo flexbox para o layout responsivo e ajustes de design.
- **JavaScript**: Funcionalidades interativas, como a adição de produtos ao carrinho.

## 📁 Estrutura do Projeto

- **`assets/`**: Contém arquivos de mídia e imagens utilizadas no site.
- **`node_modules/`**: Diretório que contém dependências do projeto instaladas via npm.
- **`public/`**: Diretório que pode conter arquivos públicos e estáticos, se aplicável.
- **`.gitignore`**: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- **`index.html`**: Arquivo principal que contém a estrutura HTML do site.
- **`LICENSE`**: Arquivo que descreve a licença sob a qual o projeto está distribuído.
- **`main.js`**: Arquivo JavaScript que contém as funcionalidades e interações do site, como a manipulação do carrinho de compras.
- **`package.json`**: Arquivo que contém metadados do projeto e lista de dependências.
- **`package-lock.json`**: Arquivo gerado automaticamente que garante que as instalações de dependências sejam consistentes.
- **`README.md`**: Arquivo de documentação principal do projeto.
- **`style.css`**: Arquivo de estilos CSS que define o visual e a formatação do site.

## 🛠️ Abrir e Rodar o Projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
   - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
     ```bash
     node -v
     ```
   - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
   - Copie a URL do repositório e execute o comando abaixo no terminal:
     ```bash
     git clone <URL_DO_REPOSITORIO>
     ```

3. **Navegue até o Diretório do Projeto**:
   - Entre no diretório do projeto que você acabou de clonar:
     ```bash
     cd <NOME_DO_DIRETORIO>
     ```

4. **Instale as Dependências**:
   - Execute o comando para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```

5. **Inicie o Servidor de Desenvolvimento**:
   - Inicie o servidor local para visualizar o projeto:
     ```bash
     npm start
     ```

6. **Acesse o Projeto no Navegador**:
   - Abra o navegador e acesse o endereço `http://localhost:3000` para ver o site em funcionamento.

7. **(Opcional) Build para Produção**:
   - Se você deseja criar uma versão otimizada para produção, use:
     ```bash
     npm run build
     ```

   - O build será gerado na pasta `build/`, pronta para ser implantada em um servidor de produção.

## 🌐 Deploy

O site está disponível online através do seguinte link: https://bolosdanilda.vercel.app/

