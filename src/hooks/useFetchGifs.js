import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( search ) =>
{
    const [ gifs, setGifs ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async () =>
    {
        const newGifs = await getGifs( search );
        setGifs( newGifs );
        setIsLoading( false );
    };

    useEffect( () => getImages, [] );

    return {
        gifs,
        isLoading
    };
};
