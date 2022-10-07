import { useState } from "react";

export const NewSearch = ({ onNewSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        setInputValue("");

        onNewSearch(newInputValue);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}
            ></input>
        </form>
    );
};
