# História do HTML

Criado por Tim Berners-lee (1991) para melhorar a comunicação entre ele seus colegas de trabalho se tornando a base da web.

## Estrutura básica

```><!DOCTYPE html>
<html>
  <read>
    <meta>
    <tittle></tittle>
  </read>
  <body>
  </body>
</html>
</!doctype>
```

### Semântica

```
<section> 		<aside>  

<header> 		<footer>

<article> 		<h1>-<h6>
```

### Textos e Links

```
<h1>Título da página</h1>

<h2>Título de seção</h2>

<h3>Título de artigo</h3>

<p>Conteúdo do artigo</p>

<a>Link</a>

Atributos:

<a href="linkedin.com/in/usuario">LinkedIn</a>
<a href="usuario@hotmail.com">E-mail</a>

<a target="_blank">Link</a>

```

### Imagens

```
<img>

<img src="img/avatar.jpg">

<img alt="Foto de Usuario">
```

### Listas

```
<ul>
Item 1 
Item 2

<ol> -- existem ordem entre os itens
1. Item 1
2. Item 3

<li>
```

# Definição de CSS 3

Criada em 1996 apresentando uma sintaxe bem simples.
Formada por um seletor ou grupo de seletores.

### ID x Classe

```
<header id="header" class="header"></header>

<header class="header"></header>
```

## Conceitos básicos

***Box Model***

- As margens(margin) são espaçamentos entre elementos;
- As bordas(border);
- O padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele;
- O conteúdo(content) é o que seu bloco representa, um texto, uma imagem, um vídeo;
