const ejemplo = async ()=>{
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    const body = await resp.json();    
    console.log(body);
}

export default ejemplo;