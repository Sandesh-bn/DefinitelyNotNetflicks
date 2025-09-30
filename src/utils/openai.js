import OpenAI from 'openai';

import OPENAI_API_KEY from './constants';

const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  apiKey: process.env[OPENAI_API_KEY]
});

const response = await client.responses.create({
// model: 'gpt-4o',
  model: 'gpt-3.5-turbo',
  instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Are semicolons optional in JavaScript?',
});

console.log(response.output_text);


const completion = await client.chat.completions.create({
//   model: 'gpt-4o',
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'developer', content: 'Talk like a pirate.' },
    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
  ],
});

console.log(completion.choices[0].message.content);