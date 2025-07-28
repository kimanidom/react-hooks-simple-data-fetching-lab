// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message); // The API returns the image URL under `message`
      });
  }, []);

  if (!imageUrl) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
