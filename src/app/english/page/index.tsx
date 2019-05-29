import React, {useState, useEffect} from 'react'
import {fetchAI} from '../../../utils/api';

const English = (props:any) => {
  const [word, setWord] = useState('')
  const [res, setRes] = useState('')
  if (!('webkitSpeechRecognition' in window)) {
    console.warn("You need use a Chrome for this future");
  } else {
    let final_transcript = ''
    var recognition = new (global as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.onresult = async function(event:any) {
      var interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      setWord(final_transcript)
      let data = {
        data: final_transcript
      }

      let result = await fetchAI('POST',[], data)
      
      if(result.status==200){
        setRes(result.data.hello)
        final_transcript = ""
      }
      // return result
      
      console.log("the final_transcript", final_transcript)
      console.log("the result =>", interim_transcript)
    }
    console.log(recognition)
  }

  useEffect(() => {
    recognition.start()
  }, [])

  return (
    <div>
      Speed to save Word
      <button onClick={() => recognition.start()}>
        Ghi Am
      </button>
      <p>
        {word}
      </p>
      <h1>
        Result:  {res}
      </h1>
    </div>
  )
}

export default English