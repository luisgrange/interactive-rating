import React, { useState } from "react";
import { Numbers } from "./Numbers";

export function WidgetRating(){


    return(
        <>
            <header>
                <div className="bg-Blue-700 rounded-full h-10 w-10 flex justify-center items-center">
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
                </div>
            </header>
            <div>
                <h1 className="text-white font-semibold text-2xl my-5">How did we do?</h1>
                <span className="text-Grey-400">
                    Please let us know how we did with your support <br />
                    request. All feedback is appreciated to help us <br />
                    improve our offering
                </span>
            </div>
            <form>
                <div className="flex gap-7 my-6">
                    <Numbers number={1}/>
                    <Numbers number={2}/>
                    <Numbers number={3}/>
                    <Numbers number={4}/>
                    <Numbers number={5}/>
                </div>
                <button 
                type='submit'
                className="w-full h-10 text-white font-semibold text-lg bg-Orange-400 rounded-full hover:bg-white hover:text-Orange-400 transition-colors">
                    Submit
                </button>
            </form>
        </>
    );
}