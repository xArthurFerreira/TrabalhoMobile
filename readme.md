# 📱 Compensação de Faltas - React Native

Aplicativo mobile feito em **React Native com Expo**, desenvolvido como trabalho individual para a disciplina de Desenvolvimento Mobile na FATEC Franca.

Este projeto simula um sistema de login e cadastro local, com listagem de personagens da série *Rick and Morty* via API pública. Os dados de login são armazenados no celular utilizando **AsyncStorage**.

---

## ✅ Funcionalidades

- Tela de **Login** com autenticação via email + CPF  
- Tela de **Cadastro de Usuário**  
- Tela de **Listagem de Cards** da API [Rick and Morty](https://rickandmortyapi.com/)  
- Botão para **ver detalhes** do personagem  
- Botão para **excluir card**  
- Armazenamento de usuário no **AsyncStorage**  

---

## 📸 Prints (adicione aqui imagens se quiser)

- Login  
- Cadastro  
- Lista de cards  
- Tela de detalhes  

---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/)  
- [React Navigation](https://reactnavigation.org/)  
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)  
- API pública: [Rick and Morty API](https://rickandmortyapi.com/)  

---

## ⚙️ Como executar o projeto

1. Clone este repositório:
```bash
git clone https://github.com/seuusuario/compensacao-faltas-react-native.git
cd compensacao-faltas-react-native

2. Instale as dependências:

bash
Copiar
Editar
npm install --legacy-peer-deps

3. Rode o app com o Expo:

bash
Copiar
Editar
npx expo start

4. Use o app Expo Go no seu celular para escanear o QR code gerado.

👤 Acesso ao sistema
Após cadastrar um usuário (com email e CPF), use essas credenciais na tela de login para acessar a área de cards.

📁 Estrutura
markdown
Copiar
Editar
CompensacaoFaltas/
├── App.js
├── screens/
│   ├── LoginScreen.js
│   ├── CadastroScreen.js
│   ├── CardsScreen.js
│   └── DetalhesScreen.js
├── components/
│   └── CardItem.js
└── utils/
    └── storage.js