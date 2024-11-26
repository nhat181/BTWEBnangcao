import React, { useState } from 'react';

const Ptbac2 = () =>{
    const [a, setA] =useState(0);
    const [b, setB] =useState(0);
    const [c, setC] =useState(0);
    const [kq, setketqua] = useState('');

    const handleinputchange = (e,setter) =>
    {
        setter(Number( e.target.value));
    };

    const giaiptbac2 = ()=>
    {
        const delta = b*b - 4*a*c;
        if (delta < 0){
            setketqua('phuong trinh vo nghiem')}
        else if (delta === 0)
        {
            const x=-b/(2*a);
            setketqua(`Phuong trinh co nghiem: x=${x}`);

        }
        else
        {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            setketqua(`phuong trinh co 2 nghiem phan biet: x1=${x1}, x2=${x2}`);
        }
        };


    return(
        <div style ={{padding:'20px',maxWidth:'400px',margin:'auto'}}>
            <h1>Giai Phuong Trinh Bac 2</h1>
            <div>
                <label>Nhap he so a:</label>
                <input
                type="number"
                value={a}
                onChange={(e)=>handleinputchange(e,setA)}
                placeholder="Nhap He So A"
                />
            </div>
            <div>
                <label>Nhap he so b:</label>
                <input
                type="number"
                value={b}
                onChange={(e) => handleinputchange (e,setB)}
                placeholder="Nhap he so b"
                />
            </div>
            <div>
                <label>Nhap he so C</label>
                <input
                type="number"
                value={c}
                onChange={(e)=> handleinputchange(e,setC)}
                placeholder='Nhap he so C'
                />
                <button onClick={giaiptbac2}>Giai Phuong Trinh</button>
                {kq &&<p>Ket Qua: {kq}</p>}
            </div>
        </div>
    );
};

export default Ptbac2;



