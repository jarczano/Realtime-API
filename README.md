# ChatAI Consultant

A web-based chat assistant powered by OpenAI's API. This project lets you set up a custom chat assistant using data tailored to a specific website or topic.

## Prerequisites

Ensure the following components are installed:

1. **Git** - [Download Git](https://git-scm.com/downloads)
2. **Node.js** - [Download Node.js](https://nodejs.org)
3. **Yarn** - If you don't have Yarn, install it globally by running: `npm install --global yarn`
4. **OpenAI API Key** - Obtain your API key from [OpenAI](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)

## Setup Instructions

1. **Clone the Repository**: `git clone https://github.com/jarczano/Realtime-API`

2. **Prepare Content**: Add the information for your Chat Assistant to `public/content.txt`. This file should include data relevant to your website or topic. By default, it contains an example about cooking.

3. **Install Dependencies**: Open a terminal in the project directory and run: `yarn`

4. **Start the Application**: In the terminal, type: `yarn start`  
   This should open the chat assistant in your browser at `http://localhost:3000`.

5. **Set Up API Key**: When prompted, enter your OpenAI API key.

## Note
There may be issues with microphone functionality on Mozilla Firefox; for the best experience, use Google Chrome.
