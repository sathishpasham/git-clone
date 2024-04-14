async function createFetch(){
    try{
    const result=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const response=await result.json()
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
createFetch()