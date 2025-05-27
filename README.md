README.md
markdown

# Heróis e Vilões

## Sobre o Projeto
Este é o **Trabalho 4 - Heróis e Vilões**, desenvolvido como parte de uma atividade da **FATEC** (Faculdade de Tecnologia) para a disciplina de desenvolvimento web. O objetivo do trabalho era completar um jogo em construção utilizando **React** com **Next.js**, onde um herói e um vilão se enfrentam em um sistema de turnos. O projeto foi finalizado com todas as funcionalidades solicitadas e algumas melhorias adicionais para tornar o jogo mais interessante e visualmente atrativo.

O jogo simula uma batalha entre **Batman** (herói) e **Coringa** (vilão), com ações como atacar, defender, usar cura e correr. O tema visual é inspirado em Gotham, com cores escuras e neon (verde e roxo), e o jogo inclui animações e efeitos sonoros para uma experiência mais imersiva.

## Funcionalidades
- **Ações do herói**: Batman pode atacar (causa dano aleatório entre 5 e 15), defender (reduz dano recebido), usar cura (recupera 20 de vida, com limite de 3 usos) e correr (30% de chance de sucesso).
- **Turnos**: O herói age primeiro, e o vilão (Coringa) responde automaticamente com uma ação aleatória (atacar ou defender).
- **Barras de vida animadas**: As barras de vida de Batman e Coringa são animadas, com transições suaves (verde para o herói, roxo para o vilão).
- **Histórico de ações**: Todas as ações são registradas em um histórico, que rola automaticamente para a última ação e a destaca visualmente.
- **Reiniciar jogo**: Um botão permite reiniciar o jogo, restaurando a vida, o histórico e o estado inicial.
- **Tema visual**: Estilo Gotham com cores escuras, neon verde/roxo, e fontes góticas (Oswald).
- **Efeitos extras**: Animações com `framer-motion` (ex.: barras de vida, tremida ao morrer) e efeitos sonoros com `use-sound` (ex.: ataque, cura, risada do Coringa).

## Tecnologias Utilizadas
- **Next.js** (versão 15.3.2): Framework principal para o projeto.
- **React** (versão 19.0.0): Biblioteca para construção de componentes.
- **framer-motion**: Para animações (barras de vida, tremida ao morrer).
- **use-sound**: Para efeitos sonoros.
- **CSS**: Estilização com tema Gotham (arquivo `globals.css`).

## Como Rodar o Projeto
Siga os passos abaixo para executar o jogo localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/heroes-and-villains.git
   ````
Entre na pasta do projeto:
bash

cd heroes-and-villains

Instale as dependências:
bash

npm install

Rode o projeto:
bash

npm run dev

O jogo estará disponível em http://localhost:3000. Abra o link no navegador para jogar.

Notas sobre sons:
Os efeitos sonoros (ataque, cura, fuga, risada do Coringa) estão configurados, mas os arquivos de som (attack.mp3, heal.mp3, flee.mp3, joker_laugh.mp3) não estão incluídos no repositório. Para adicionar os sons:
Crie a pasta public/sounds/.

Adicione os arquivos de som correspondentes.

Os sons podem ser encontrados em bancos de áudio livres como freesound.org.

Demonstração
Abaixo está um GIF mostrando o funcionamento do jogo, incluindo as ações, o histórico, as barras de vida animadas e o botão de reiniciar:
Demonstração do jogo
Estrutura do Projeto
app/page.js: Página principal que renderiza os componentes do jogo.

app/components/Character.js: Componente que exibe as informações de cada personagem (herói ou vilão).

app/components/ActionLog.js: Componente que mostra o histórico de ações.

app/components/ResetButton.js: Componente do botão de reiniciar.

app/hooks/gameManager.js: Hook que gerencia a lógica do jogo (turnos, ações, estado).

app/globals.css: Arquivo de estilização com o tema Gotham.

public/: Contém as imagens (batman.jpg, joker.jpg) e a pasta sounds/ (para os arquivos de som).

Observações
O projeto foi testado no Windows e funciona corretamente com as dependências listadas no package.json.

O prazo de entrega do trabalho é 1 de junho de 2025 às 23:59. Este projeto foi finalizado em 27 de maio de 2025.

Licença
Este projeto é apenas para fins educacionais e não possui uma licença específica.

---

### **Instruções para atualizar no GitHub**
Você já tem o repositório `heroes-and-villains` no GitHub e já fez o primeiro commit/push. Agora, vamos adicionar o `README.md` e atualizar o repositório.

#### **Passo 1: Criar o arquivo `README.md`**
1. Na pasta do projeto (`C:\Users\windows\Downloads\heroes-and-villains`), crie um arquivo chamado `README.md`.
2. Copie o conteúdo acima e cole no arquivo `README.md` usando um editor de texto (ex.: Bloco de Notas, VS Code).
3. **Substitua `seu-usuario`** no comando `git clone` pela sua conta real do GitHub (ex.: `git clone https://github.com/joao-silva/heroes-and-villains.git`).

#### **Passo 2: Adicionar o `README.md` ao Git**
No terminal, dentro da pasta do projeto:

1. **Adicione o arquivo ao Git**:
   ```bash
   git add README.md

Faça o commit:
bash

git commit -m "Adiciona README com instruções do projeto"

Envie para o GitHub:
bash

git push origin main

Se o branch principal for master, use:
bash

git push origin master

Passo 3: Verificar no GitHub
Acesse o repositório no GitHub (ex.: https://github.com/seu-usuario/heroes-and-villains).

Confirme que o README.md está lá e que o GIF (demo.gif) é exibido corretamente na seção "Demonstração".

Se o GIF não aparecer, verifique se o arquivo demo.gif foi enviado corretamente (caso não tenha sido, adicione-o com git add demo.gif, commit e push).
