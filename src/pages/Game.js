import React, { useEffect } from 'react';
import { CHANNEL_NAME, URL_GAME_SITE } from '../utils/constants';

const channel = new BroadcastChannel(CHANNEL_NAME);

export default function Game() {
  useEffect(() => {
    console.log('Game page');
    // channel.postMessage('Hey, Mr.New');
    return () => {
      const iframeOfGame = document.getElementById('kingpac-game');
      console.log('# iframeOfGame => ', iframeOfGame);
      if (iframeOfGame) {
        iframeOfGame.contentWindow.postMessage('hello', '*');
      }
    };
  }, []);
  return (
    <iframe
      id="kingpac-game"
      src={URL_GAME_SITE}
      title="Kingpac game"
      style={{ width: '100%', height: '99%', border: 'none' }}
    ></iframe>
  );
}