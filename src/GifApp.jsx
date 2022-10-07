import { useState } from "react";
import { GifGrid, NewSearch } from "./components";

export const GifApp = () => {
    const [history, setHistory] = useState(["Dragon ball"]);

    const onSearch = (newSearch) => {
        //validaciones
        if (!newSearch) return;
        if (
            history.find(
                (search) => search.toLowerCase() === newSearch.toLowerCase()
            )
        )
            return;
        setHistory([newSearch, ...history]);
    };

    return (
        <>
            <h1>Gif App</h1>

            <NewSearch onNewSearch={onSearch} />

            <div>
                {history.map((search) => (
                    <GifGrid key={search} search={search} />
                ))}
            </div>
        </>
    );
};
