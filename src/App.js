import logo from './avatar.jpg';
import './App.css';
import { QRCode } from 'react-qrcode-logo';
import { saveAs } from 'file-saver'
import React, { useRef, useState } from "react";
import {Helmet} from "react-helmet";
function App() {
  const [statebtn, setstatebtn]= useState("")
  const refButton = useRef(null)
  const inputEl = document.getElementById('qr');
  const reset = () => {
    refButton.current.value= "";
  }
  const creatQr = () => {
    setstatebtn( refButton.current.value)
  }
  const dowloadqrcode = () => {
    inputEl.toBlob(function(blob) {
      saveAs(blob, "qrcode.png");
  });
    
  }
  return (
    <div>
      <Helmet>
        <title>Tạo mã QR miễn phí</title>
        <link rel="icon" type="image/jpg" href={logo}  />
      </Helmet>
    <input placeholder='enter your text'     ref={refButton} />
    <button onClick={reset}>Reset</button>
    <button onClick={creatQr}>Creat QR</button>
    <QRCode value={statebtn}
    logoImage = {logo}
    eyeRadius={5}
    id="qr"
    />
    <button onClick={dowloadqrcode} >Dowload</button>
    </div>
  );
}

export default App;
