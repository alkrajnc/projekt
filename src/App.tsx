import React, { useEffect, useState }  from 'react';
import './App.css';

export default function App() {
  const fetchurl = 'http://192.168.11.7:3000'


  const [setText, Text] = useState();
  const [Url, setImageUrl] = useState();

  const getImage = () => {
      fetch(`${fetchurl}/takeimage`, {
        method: 'get',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      })
      .then(response => response.json())
      .then(res => setImageUrl(res[0].file_name))
      console.log(Url);
    
  }
  
  const getAudio = () => {
    // TODO Get audio 
  };

  let cardName = 'Pikov As';
  let audioText = 'Ena'
  return (
    <div className="App h-screen">
      <div>
		<button onClick={getAudio}>Zvok</button>
        <button onClick={getImage}>Slika</button>
      </div>
      <div className='flex flex-row gap-2 p-2 justify-center'>
        
        <div className='cont'>
          <h2>Image</h2>
          <img src={`http://109.182.75.150:3000/images/${Url}`} width='600px' alt="" />
          <p>{Url}</p>
        </div>
      </div >
    </div>
  );
}

/*
<div className='cont'>
          <h2>Audio</h2>
          <p>Beseda: <span className='text-red'>{audioText}</span ></p>
        </div>
*/