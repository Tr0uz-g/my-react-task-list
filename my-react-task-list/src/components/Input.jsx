import './index.css';
import { useState } from "react";

const Input = () => {

const [inputFunction, setInputFunction] = useState ("");
const [listContainer, setListContainer] = useState ([]);

    const searchFunction = (e) => {
        setInputFunction (e.target.value);
    };

    const functionOfInput = (e) => {
        e.preventDefault();
        if(inputFunction.trim() === ""){
            return;
        }
    setListContainer([...listContainer, inputFunction]);
    setInputFunction("")
    };
//Eliminara el elemento que tenga el indice igual a index 
    const clearElementList = (index) => {
        const elmentClear = listContainer.filter((_, i) => i !== index)
        setListContainer(elmentClear);
    }

    const eliminateAll = () => {
        setListContainer([])
    }
  return (
    <div className="list">
        
        <form onSubmit={functionOfInput}>
        <input type="text"
            value={inputFunction} 
                onChange={searchFunction}
                    placeholder="add new list..."
        />
        <button className="botton1" type="submit"><i class="ri-add-line"></i></button>
        <button className="botton2" onClick={eliminateAll}><i class="ri-delete-bin-6-line"></i></button>
    </form>
    <ul className="list">
        {listContainer.map((item, index) =>(
        <il className="clear"key={index}>{item}
        
        <button  className="button3" onClick={() => clearElementList(index)}><i class="ri-delete-back-2-line"></i></button>
        </il>
        ))}
    </ul>
    
    </div>
    
  )
}

export default Input
