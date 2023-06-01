import { useState } from 'react';
function LikeButton() {
  //la primera variable va a ser el valor continuo de nuestra variable de estado
  //la segunda variable es una funcion que nos permite actualizar nuestra variable de estado
  //useState(0) es el  valor inicial
  const colores=['purple','blue','green','yellow','orange','red'];

  const [counter, setCounter ] = useState(0);
  const [color, setColor ] = useState(colores[0]);
  const [secocndcounter, setSecocndCounter] = useState(0);
  

  //let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const addCounter = () => {
    //invocamos a la función setCounter y le pasamos el nuevo valor
    setCounter(counter + 1);
    setColor(color[+1])
    
    
 

  };
  const addSecondCounter = () => {
    //invocamos a la función setCounter y le pasamos el nuevo valor
   
    setSecocndCounter(secocndcounter + 1)

  };

  return (
    <div>
      <button style={{color: color}}
        onClick={addCounter}
        className="w-32 h-16 bg-neutral-300 m-8 rounded"
      >
        {counter}Likes
      </button>
      <button
        onClick={addSecondCounter}
        className="w-32 h-16 bg-neutral-300 m-8 rounded"
      >
        {secocndcounter}Likes
      </button>
    </div>
  );
}
export default LikeButton;
