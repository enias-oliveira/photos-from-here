# photos-from-here

"Photos From Here" é uma aplicação web simples que exibe fotos que foram tiradas próximas da localização geográfica do usuário.

[Clique aqui pra acessar o projeto em "produção"](https://enias-c137.gitlab.io/photos-from-here/)

## Visão Geral
O app irá usar a API de geolocalização para determinar a localização do usuário (latitude e longitude), e em seguida irá usar a API do Flickr para obter uma lista de fotos que foram tiradas perto deste local.


## Atividades feitas no desenvolvimento dessa aplicação: 

- Obter a localização geográfica a partir do navegador
- Construir a URL de consulta
- Usar o fetch para enviar a solicitação ao Flickr
- Processar os dados de resposta em um objeto
- Usar os valores do objeto de resposta para construir uma URL de fonte de imagens
- Exibir a primeira imagem na página
- Em resposta a algum evento (por exemplo, um clique ou um setInterval), exibir a próxima imagem da coleção
