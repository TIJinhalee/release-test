import { useState } from "react";

export const useModal =(initialValue)=>{
    const [text, setText] = useState(initialValue);
    const [isOpen, setIsOpen] = useState(false);

    return { text, setText }
}