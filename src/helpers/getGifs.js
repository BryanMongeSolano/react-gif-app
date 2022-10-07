export const getGifs = async ( search ) =>
{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=t2jWPz48UHnk2M8AL57Kp239NOLB1knw&limit=10&q=${search}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( { id, title, images } ) => ( {
        id,
        title,
        url: images.downsized_medium.url,
    } ) );

    return gifs;
};