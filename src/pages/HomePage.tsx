import { useEffect, useState } from 'react';

// Define the structure of a news article
interface Article {
  title: string; // The title of the news article
  url: string;  // The link to the full news article
}

export default function HomePage() {
  // State to store the list of news articles
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    // Function to fetch the top 10 news articles for the day
    async function fetchNews() {
      try {
        // Fetch news from the API
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=6686708e48664ea888e44fae452da5e0');
        const data = await response.json();
        setNews(data.articles); // Save the articles in the state
      } catch (error) {
        console.error('Error fetching news:', error); // Log any errors
      }
    }

    fetchNews(); // Call the function to fetch news when the component loads
  }, []);

  return (
    <div className="flex">
      {/* News Box: Displays the top 10 news headlines */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4 w-1/4 max-h-[500px] overflow-y-auto" style={{ backgroundImage: 'url(/path-to-cowboy-hat-image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-xl font-bold mb-2">Today's Top News</h2>
        <ul className="space-y-2">
          {news.map((article, index) => (
            <li key={index} className="text-sm text-gray-700">
              {/* Link to the full news article */}
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area for the homepage */}
      <div className="flex-1">
        {/* New design for the homepage will go here */}
      </div>
    </div>
  );
}