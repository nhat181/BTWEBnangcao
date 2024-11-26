import React, { useState } from 'react';
const WelcomeMessage = () =>{
    const[name,setname]=useState(('')
);
    const[message,setMesage]=useState(('')
);

    const handleinputchange = (e) =>{
        setname(e.target.value);
    };
    const hanleClickButton =()=>
        {setMesage(`Xin chào, ${name}!`
); 
};

    return(
        <div style={{padding:'20px'}}>
            <h1>Chao mung Ung dung react</h1>
            <input
            type="text"
            placeholder="Nhập tên của bạn"
            value={name}
            onChange={handleinputchange}
            />
            <button onClick={hanleClickButton} > Chao mung</button>
            {message && <p>{message}</p>}
            
        </div>
    );
}
export default WelcomeMessage

