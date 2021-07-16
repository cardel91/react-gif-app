export const getGifs = async (category) => {

        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en&api_key=8O1cAR9ZSUCqDDKLJB8i0UOs3NfVnfnp`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    // console.log(data);

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);
    return gifs;
}