import React, { useState } from 'react';
import './App.css';
import { Button, ChakraProvider, defaultSystem, Input } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react';
import generateText from './text_generation';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
    // Code to call the API starts here
      const prompt = document.getElementById('prompt').value;
      const responseText = await generateText(prompt);
      setOutput(responseText);
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
