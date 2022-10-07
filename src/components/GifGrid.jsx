import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./";

export const GifGrid = ({ search }) => {
    const { gifs, isLoading } = useFetchGifs(search);

    return (
        <div>
            <h3>{search}</h3>
            {isLoading && <h2>Cargando...</h2>}

            <div className="card-grid">
                {gifs.map((gif) => (
                    <GifCard key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
};
