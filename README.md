# News Aggregator App

A React-based news aggregator website that pulls articles from various sources.

## Features

- Article search and filtering
- Personalized news feed

## Technologies Used

- React.js
- APIs: [NewsAPI, The Guardian]

## Running Locally

1. Clone the repository:

git clone https://github.com/bumblebro/newsapp.git

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open `http://localhost:3000` in your browser.

## Running with Docker

1. Build the Docker image:

docker build -t news-aggregator .

2. Run the container:

docker run -p 5173:5173 news-aggregator

3. Open `http://localhost:5173` in your browser.

## Additional Notes
- Used only two APIs, as the other news API providers in the list were not available on Google.
- Added the API directly to simplify its usage within Docker.
