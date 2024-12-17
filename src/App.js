import React, { useState } from 'react';
import './App.css';
import { Button, ChakraProvider, defaultSystem, Input } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react';
import generateText from './text_generation';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState('');
  // const GOOGLE_API_KEY = 'AIzaSyA-PpxrW1W19cbtf2aoKKtoL-R6VMPPMzg';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
    // Code to call the API starts here
      const prompt = document.getElementById('prompt').value;
      const responseText = await generateText(prompt);
      setOutput(responseText);
      // const requestBody = {
      //   prompt: e.target.prompt.value
      // };
      // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + GOOGLE_API_KEY, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // 'Authorization': `Bearer ${GOOGLE_API_KEY}`
      //   },
      //   body: JSON.stringify(requestBody),
      //   // credentials: 'same-origin',
      //   // mode: 'cors',
      //   // referrerPolicy: 'strict-origin-when-cross-origin'
      // });
      // console.log(response);
      // const data = await response.json();
      // setOutput(data.text);
    }
    catch (error) {
      setOutput('Error: ' + error.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <ChakraProvider value={defaultSystem}>
      <Heading>Gemini Clone</Heading>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Enter a prompt" name="prompt" id='prompt' />
        <Button type="submit" disabled={isLoading}>Generate</Button>
      </form>
      {output && <p>{output}</p>}
    </ChakraProvider>
  );
}

export default App;
