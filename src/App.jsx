import { useState, useEffect} from 'react'
import phrases from './phrases.json'
import { randomItem } from './utils'
import PhraseCard from './components/PhraseCard'
import Button from './components/Button'
import {img1, img2, img3, img4} from './assets'
import './index.css'
import gongSound from './assets/gong.mp3'

const images = [img1, img2, img3, img4]

function App() {
  const[phrase, setPhrase] = useState(randomItem(phrases))
  const[image, setImage] = useState(randomItem(images))
  const [audio] = useState(new Audio(gongSound)); // Crea el objeto de audio

  
useEffect(() => {
  audio.load();
}, [audio]);

const playSound = () => {

  if (!audio.paused) {
    audio.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
    }
      audio.volume = 0.3; 
      audio.play(); // Reproduce el sonido
};

  const changePhrase = () => {
    setPhrase(randomItem(phrases))  
    setImage(randomItem(images))
    playSound();
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background 0.5s ease-in-out';
  }, [image]);
  return (
    
    <div className='container'>
      <h1 className='title-container'>Galleta de la Fortuna</h1>
      <PhraseCard
      phrase = {phrase.phrase} 
      author = {phrase.author}
      />
      <Button handlePhrase={changePhrase}>
        Quiero otra frase! 🥠
        </Button>
    </div>

  )
}

export default App


