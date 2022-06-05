import React, { useState } from "react";
import { WidgetRating } from "./Widget/WidgetRating";


export function Card(){

    const [nnumber, setNnumber] = useState<number | null>(null);

    return (
        <div className="bg-Blue-800 w-[400px] h-[360px] rounded-3xl p-6">
            <WidgetRating/>
        </div>
    );
}