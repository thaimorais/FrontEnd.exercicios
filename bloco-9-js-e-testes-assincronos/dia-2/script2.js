const getCrypto = async () => {
  const urlCrypto = 'https://api.coincap.io/v2/assets';
  
  const cryp = await fetch(urlCrypto)
    .then(response => response.json())
    .then(data => data.data);

  return cryp;
};

const listaMoedas = async () => {
  const moedas = await getCrypto();
  const ulLista = document.getElementById('cryptoContainer');

  moedas.filter(({ rank }) => rank <= 10)
    .forEach((elemento) => {
    const criaLi = document.createElement('li');
    const usdPrice = Number(elemento.priceUsd)

    criaLi.innerText = `${elemento.id} (${elemento.symbol}): ${usdPrice.toFixed(2)}`

    ulLista.appendChild(criaLi)
  });
};


window.onload = () => listaMoedas()