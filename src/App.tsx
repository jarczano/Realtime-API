import { useEffect, useState } from 'react';
import { VoiceChat } from './pages/VoiceChat';
import './App.scss';


function App() {
  const [scrapedContent, setScrapedContent] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/content.txt');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        setScrapedContent(text);
      } catch (error) {
        console.error('Error fetching the content:', error);
      }
    };

    fetchContent();
  }, []); 

  return (
    <div className="app-container">
      {scrapedContent ? (
        <VoiceChat scrapedContent={scrapedContent} />
      ) : (
        <p>Load ...</p> 
      )}
    </div>
  );
}

export default App;
