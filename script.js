// Obter a localização geográfica a partir do navegador

// Localização Padrão
let latitude = -25.4481398
let longitude = -49.2942932

const updateCoordinates = (pos) => {
  const coordinates = pos.coords
  latitude = coordinates.latitude
  longitude = coordinates.longitude
}

// Solicitação de localização no navegador
navigator.geolocation.getCurrentPosition(updateCoordinates)

// Construir URL de consulta com CORS Proxy
const createURLQuery = (searchText) => {
  const apiKey = '9ab4d94d9971ab7a508c99ae4a6f3fc8'
  const corsURL = 'https://shrouded-mountain-15003.herokuapp.com/'
  const query = `${corsURL}https://flickr.com/services/rest/?api_key=${apiKey}&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=${searchText}`
  return query
}

// Construir URL de fonte de imagens
const urlImageInDOM = document.querySelector('#urlImage')

const addImageToDOM = (search,index) => {
  let imageQuery = createURLQuery(search)

  fetch(imageQuery)
    .then(res => res.json())
    .then(data => { urlImageInDOM.src = constructImageURL(data.photos.photo[index])})

  function constructImageURL (photoObj) {
    return 'https://farm' + photoObj.farm +
              '.staticflickr.com/' + photoObj.server +
              '/' + photoObj.id + '_' + photoObj.secret + '.jpg'
  }
}

// Imagem Inicial
const initialSearchText = 'cena'
initialQuery = createURLQuery(initialSearchText)
addImageToDOM(initialQuery,0)

// Mudar Imagem a cada clique
let imageIndex = 0
urlImageInDOM.addEventListener('click', ()=>{
  addImageToDOM(initialSearchText,imageIndex)
  if (imageIndex < 5) imageIndex +=1
})
