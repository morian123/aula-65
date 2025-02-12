# Aula 3: Trabalhando com Módulos e Organizando o Código

## 1. Introdução

Nesta aula, abordamos a organização de código em projetos TypeScript e React, enfatizando a separação de responsabilidades e a modularização do código. Isso melhora a manutenibilidade e reutilização.

## 2. Importação e Exportação de Módulos no TypeScript

No TypeScript, podemos dividir o código em módulos para melhor organização. Exemplo:

**Exportando um módulo:**
```ts
export function saudacao(nome: string) {
  return `Olá, ${nome}!`;
}
```

**Importando um módulo:**
```ts
import { saudacao } from "./utils";

console.log(saudacao("João"));
```

## 3. Separação de Código em Arquivos Distintos

Organizar o código em arquivos distintos ajuda a manter a estrutura do projeto limpa e fácil de entender.

Exemplo de estrutura recomendada:
```
/src
  /components
    Button.tsx
  /services
    api.ts
  /types
    user.ts
  App.tsx
  index.tsx
```

## 4. Criando um Sistema de Tipos Reutilizáveis

O TypeScript permite a criação de tipos reutilizáveis para facilitar o desenvolvimento.

**Definição de tipo para usuários:**

```ts
export interface Usuario {
  id: number;
  nome: string;
  email: string;
}
```

**Uso do tipo em outro arquivo:**

```ts
import { Usuario } from "../types/user";

const usuario: Usuario = {
  id: 1,
  nome: "Maria",
  email: "maria@email.com"
};
```

## 5. Configuração do Projeto React com TypeScript

Para iniciar um projeto React com TypeScript:

```sh
npx create-react-app meu-projeto --template typescript
```

### Configuração de ESLint e Prettier

Instalar dependências:

```sh
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

Criar `.eslintrc.json`:

```json
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  }
}
```

Criar `.prettierrc`:

```json
{
  "singleQuote": true,
  "semi": true
}
```

### Estruturando Pastas no Projeto

```
/src
  /components    # Componentes reutilizáveis
  /pages         # Páginas da aplicação
  /services      # Requisições e lógica de negócio
  /types         # Definições de tipos TypeScript
  App.tsx        # Componente principal
  index.tsx      # Ponto de entrada do React
```

## 6. Conclusão

Com a separação correta do código, melhoramos a organização, reutilização e manutenção do projeto. Além disso, configurar ESLint e Prettier garante um código padronizado e limpo.
