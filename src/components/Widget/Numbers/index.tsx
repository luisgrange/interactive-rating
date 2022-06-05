import React from "react";

interface Props{
    number: number;
}

export function Numbers({number}: Props){
    return (
        <button 
        className="text-Grey-400 text-xl bg-Blue-700 rounded-full h-11 w-11 flex justify-center items-center">
            {number}
        </button>
    );
}