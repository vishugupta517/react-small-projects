import { useState } from 'react';
import './style.css';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function generateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className='qr-container'>
      <h1>OR Code Generator</h1>
      <div>
        <input
          type='text'
          name='qr-code'
          value={input}
          placeholder='Enter value here'
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={() => generateQrCode()}>Generate</button>
      </div>
      {qrCode.length > 0 && (
        <div
          style={{
            height: 'auto',
            margin: '0 auto',
            maxWidth: 64,
            width: '100%'
          }}
        >
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={qrCode}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </div>
  );
}
