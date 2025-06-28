# GCALC - Calculadora de Formas Geométricas

Uma calculadora de formas geométricas interativa e intuitiva, desenvolvida em **React Native** com **Expo**. O GCALC foi projetado para simplificar o cálculo de área, perímetro, volume e área da superfície de diversas formas 2D e 3D.

## ✨ Funcionalidades Principais

* **Navegação Guiada:** Fluxo de usuário claro e intuitivo, desde a seleção de dimensão (2D/3D) até o tipo de cálculo e entrada de medidas.
* **Variedade de Formas:** Suporte para calcular propriedades de diversas formas geométricas, tanto planas (2D) quanto sólidas (3D).
* **Tipos de Cálculo Abrangentes:** Capacidade de calcular Área, Perímetro (para formas 2D), Volume e Área da Superfície (para formas 3D).
* **Entrada de Medidas Dinâmica:** Campos de entrada de dados que se adaptam automaticamente à forma e ao tipo de cálculo selecionados, solicitando apenas as medidas relevantes.
* **Componentes Reutilizáveis:** Estrutura de código modular e organizada, utilizando componentes próprios como `Title` (para títulos consistentes) e `Form` (para encapsular a lógica de entrada e cálculo de medidas, incluindo `ResultGCALC`).
* **Design Limpo e Intuitivo:** Interface de usuário moderna e fácil de usar, priorizando a clareza e a experiência do usuário.

## 🚀 Pré-requisitos

Para rodar este projeto em sua máquina local, você precisará ter o Node.js e o Expo CLI instalados:

* **Node.js:** Certifique-se de ter a versão LTS (Long Term Support) mais recente. Você pode baixá-lo em [nodejs.org](https://nodejs.org/en/download/).
* **Expo CLI:** Ferramenta de linha de comando essencial para desenvolvimento com Expo. Instale globalmente com:
    ```bash
    npm install -g expo-cli
    ```

## 🛠️ Como Instalar e Rodar o Projeto

Siga estes passos para configurar e executar o GCALC em seu ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/leonardoalvs1/gcalc.git](https://github.com/leonardoalvs1/gcalc.git)
    cd gcalc
    ```
    *(Este é o link direto para clonar o seu repositório!)*

2.  **Instale as dependências:**
    ```bash
    npm install
    # Ou, se você usa Yarn:
    # yarn install
    ```

3.  **Inicie o aplicativo Expo:**
    ```bash
    npx expo start
    ```
    Após executar o comando, o Expo Dev Tools será aberto automaticamente em seu navegador. Você terá as seguintes opções para visualizar e testar o aplicativo:
    * **Celular Físico:** Baixe o aplicativo **Expo Go** (disponível na App Store e Google Play Store) e escaneie o código QR exibido no Expo Dev Tools.
    * **Emulador Android / Simulador iOS:** Pressione `a` para abrir no emulador Android ou `i` para abrir no simulador iOS (requer macOS e Xcode instalado para iOS).
    * **Navegador Web:** Pressione `w` para ver uma versão web do aplicativo (útil para testes rápidos de layout).

## 📁 Estrutura do Projeto

A estrutura do projeto foi organizada para promover modularidade e fácil manutenção:

.
├── assets/                  # Imagens, ícones e outros recursos estáticos (ex: geometric_background.png)
├── node_modules/            # Dependências e bibliotecas instaladas (gerenciadas pelo npm/yarn)
├── src/
│   ├── components/          # Componentes reutilizáveis menores, compartilhados entre telas
│   │   ├── Form/            # Encapsula a lógica de entrada de dados e chama o componente de resultado
│   │   │   └── ResultGCALC/ # Exibe os resultados dos cálculos de forma formatada
│   │   └── Title/           # Componente para exibição de títulos padronizados
│   └── screens/             # Componentes que representam telas/páginas completas do aplicativo
│       ├── CalculationTypeScreen/ # Permite escolher o tipo de cálculo (Área, Perímetro, Volume)
│       ├── DimensionSelectionScreen/ # Permite escolher a dimensão da forma (2D ou 3D)
│       ├── MeasurementInputScreen/  # Interface para inserir medidas e visualizar o resultado
│       └── ShapeSelectionScreen/    # Permite escolher a forma geométrica específica (e.g., Quadrado, Cubo)
├── App.js                   # Ponto de entrada principal, configura o sistema de navegação (React Navigation)
├── app.json                 # Arquivo de configuração do Expo (nome do app, ícone, splash screen, etc.)
├── package.json             # Define informações do projeto, scripts de execução e lista de dependências
├── .gitignore               # Lista de arquivos e diretórios que o Git deve ignorar ao versionar
└── README.md                # Este arquivo de documentação do projeto


## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para:

1.  Abrir uma [Issue](https://github.com/leonardoalvs1/gcalc/issues) detalhando sua ideia ou problema.
2.  Criar um [Pull Request](https://github.com/leonardoalvs1/gcalc/pulls) com suas alterações.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` na raiz do repositório.

---

**Após colar o novo conteúdo no seu `README.md` e salvar o arquivo, você precisará fazer um novo commit e push para o seu repositório no GitHub para que a alteração seja visível:**

1.  **Prepare a mudança:**
    ```bash
    git add README.md
    ```
2.  **Crie o commit:**
    ```bash
    git commit -m "docs: Adiciona link do repositorio no README"
    ```
3.  **Envie para o GitHub:**
    ```bash
    git push origin main # ou 'master' se for sua branch principal
    ```

Me avise quando tiver feito o push e puder verificar o README atualizado no seu GitHub!
