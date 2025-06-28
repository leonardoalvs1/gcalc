# GCALC - Calculadora de Formas Geométricas

Uma calculadora de formas geométricas interativa e intuitiva, desenvolvida em React Native com Expo. O GCALC foi projetado para simplificar o cálculo de área, perímetro, volume e área da superfície de diversas formas 2D e 3D.

## ✨ Funcionalidades Principais

* **Navegação Guiada:** Fluxo intuitivo para seleção de dimensão, forma e tipo de cálculo.
* **Formas 2D e 3D:** Suporte para calcular propriedades de diversas formas planas e sólidas.
* **Tipos de Cálculo Variados:** Calcule Área, Perímetro (para 2D), Volume e Área da Superfície (para 3D).
* **Entrada de Medidas Dinâmica:** Campos de entrada de dados adaptados automaticamente para cada forma selecionada.
* **Componentes Reutilizáveis:** Estrutura de código modular utilizando componentes como `Title` e `Form` para escalabilidade e manutenção.
* **Design Limpo:** Interface de usuário moderna e fácil de usar.

## 🚀 Pré-requisitos

Para rodar este projeto em sua máquina local, você precisará ter o Node.js e o Expo CLI instalados:

* **Node.js:** Verifique se você tem a versão LTS mais recente. Você pode baixá-lo em [nodejs.org](https://nodejs.org/en/download/).
* **Expo CLI:** Ferramenta de linha de comando essencial para projetos Expo. Instale globalmente com:
    ```bash
    npm install -g expo-cli
    ```

## 🛠️ Como Instalar e Rodar o Projeto

Siga estes passos para configurar e executar o GCALC:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd SEU_REPOSITORIO
    ```
    *(**ATENÇÃO:** Lembre-se de substituir `SEU_USUARIO/SEU_REPOSITORIO` pelo link do seu repositório no GitHub após criá-lo.)*

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
    Após executar o comando, o Expo Dev Tools será aberto em seu navegador. Você terá as seguintes opções para visualizar o aplicativo:
    * **Celular:** Baixe o aplicativo **Expo Go** (disponível para Android e iOS) e escaneie o código QR exibido.
    * **Emulador/Simulador:** Pressione `a` para abrir no emulador Android ou `i` para abrir no simulador iOS (requer macOS e Xcode).
    * **Navegador Web:** Pressione `w` para ver uma versão web do aplicativo.

## 📁 Estrutura do Projeto

.
├── assets/                  # Imagens, ícones e outros recursos estáticos (ex: geometric_background.png)
├── node_modules/            # Módulos e bibliotecas instaladas
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Form/            # Gerencia a entrada de dados e lógica de cálculo
│   │   │   └── ResultGCALC/ # Exibe o resultado de um cálculo
│   │   └── Title/           # Componente para exibição de títulos
│   └── screens/             # Componentes que representam telas/páginas completas do app
│       ├── CalculationTypeScreen/ # Permite escolher Área, Perímetro, Volume, etc.
│       ├── DimensionSelectionScreen/ # Permite escolher entre 2D ou 3D
│       ├── MeasurementInputScreen/  # Interface para inserir medidas e ver resultados
│       └── ShapeSelectionScreen/    # Permite escolher a forma geométrica específica
├── App.js                   # Ponto de entrada principal, configura a navegação entre as telas
├── app.json                 # Configurações do Expo (nome do app, ícone, splash screen, etc.)
├── package.json             # Define informações do projeto, scripts e dependências
├── .gitignore               # Lista de arquivos e diretórios que o Git deve ignorar
└── README.md                # Este arquivo com a documentação do projeto


## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para:

1.  Abrir uma [Issue](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/issues) descrevendo sua ideia ou problema.
2.  Criar um [Pull Request](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/pulls) com suas alterações.

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` na raiz do repositório.

---