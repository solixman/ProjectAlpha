import { useState } from 'react';

function Proptesting(props){
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index + 1);
      }
    return (
        <>
        <button onClick={handleClick}>
        Next
      </button>

        <p>My name is {props.name} , {index}</p>

        

        </>
    )


}

export default Proptesting