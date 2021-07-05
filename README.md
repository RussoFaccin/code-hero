## Code Hero

**atividade técnica para Desenvolvedores Web.**

Repositório:
https://github.com/RussoFaccin/code-hero.git

Demonstração:
https://russofaccin-code-hero.netlify.app/

![Cinejump!](/docs/images/code-hero.png)

**Instalação**

- Clone o repositório

```
$: git clone https://github.com/RussoFaccin/code-hero.git
```

- Instale as dependências

```
$: cd code-hero
$: npm install
```

**Variáveis de ambiente**

- Crie os arquivos .env e .env.development

```
touch .env .env.development
```

- Preencha nos arquivos criados anteriormente com as seguintes informações e alterando onde necessário:

```
REACT_APP_IS_PRODUCTION=false
REACT_APP_API_URL=https://gateway.marvel.com:443/v1/public/
REACT_APP_API_KEY=<API_PUBLIC_KEY>
REACT_APP_ITEMS_PER_PAGE=10
BROWSER=none
```

- Acesse o endereço https://developer.marvel.com/account e adicione a url **localhost** na lista de domínios permitidos.

**Execução**

```
$: npm run dev
```

**Publicação**

```
npm run build
```
