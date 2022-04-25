document.addEventListener("load",datafectching);

function datafectching(){
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((result)=>{result.json()}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
}

datafectching()


