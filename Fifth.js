import React,{useState} from 'react';
function Abc(){
    const[name,setName] = useState('Ammu');
    return(
        <div>
            <h1>
                Welcome{name}
            </h1>
            <button onclick={()=>setName('IT-B')}>
            Click me!!</button>
        </div>
    );
}
export default Abc; 