import React, { useState } from 'react';
import SockJsClient from 'react-stomp';
import './App.css';

const SOCKET_URL = 'http://localhost:8080/chat';

const App = () => {
  const [perBlack, setPerBlack] = useState('');
  const [perWhite, setPerWhite] = useState('');
  const [perRed, setPerRed] = useState('');

  let onConnected = () => {
    //console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    setPerBlack(msg.perblack);
    setPerWhite(msg.perwhite);
    setPerRed(msg.perred);
  }

  return (
    <div>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/messages']}
        onConnect={onConnected}
        onMessage={msg => onMessageReceived(msg)}
        debug={false}    
      />
      <div></div>
      <div className="App">
      <header className="App-header">       
      <div className="input side">
        <span>Percentuais atuais</span>
        <div className="input-wrapper select">
            <div className="red">
                <div>{perRed}</div>
            </div>
            <div className="white">
                <div>{perWhite}</div>
            </div>
            <div className="black">
                <div>{perBlack}</div>
            </div>
        </div>
    </div>

    <div className="last-results">
        <div className="input-wrapper select">
            <div className="red-result"><div class="box-result">2</div></div>
            <div className="white-result"><div class="box-result"><img src="https://blaze.com/static/media/logo-icon.75d9365f.svg"/></div></div>
            <div className="black-result"><div class="box-result"></div></div>
            <div className="red-result"><div class="box-result"></div></div>
            <div className="white-result"><div class="box-result"><img src="https://blaze.com/static/media/logo-icon.75d9365f.svg"/></div></div>
            <div className="black-result"><div class="box-result"></div></div>
            <div className="red-result"><div class="box-result"></div></div>
            <div className="black-result"><div class="box-result"></div></div>
            <div className="red-result"><div class="box-result"></div></div>
            <div className="white-result"><div class="box-result"><img src="https://blaze.com/static/media/logo-icon.75d9365f.svg"/></div></div>
            <div className="white-result"><div class="box-result"><img src="https://blaze.com/static/media/logo-icon.75d9365f.svg"/></div></div>
            <div className="red-result"><div class="box-result"></div></div>
            <div className="black-result"><div class="box-result"></div></div>
        </div>
    </div>
          </header>
    </div>
    </div>
  );
}

export default App;