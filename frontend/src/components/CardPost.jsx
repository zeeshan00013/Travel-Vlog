// PostCard.js
import { useState } from 'react';
import axios from 'axios';

const PostCard = () => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  // Function to handle form submission using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      img,
      title,
      price,
      location,
      rating,
    };

    try {
      const response = await axios.post('http://localhost:3000/cards/card-post', cardData);
      
      if (response.status === 201) {
        console.log('Card successfully added:', response.data);
        // Reset form fields
        setImg('');
        setTitle('');
        setPrice('');
        setLocation('');
        setRating('');
      } else {
        console.error('Failed to add card:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting card:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-purpple1">Add a New Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>   
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-purpple1 focus:border-purpple1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-purpple1 focus:border-purpple1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-purpple1 focus:border-purpple1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-purpple1 focus:border-purpple1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="0"
            max="5"
            step="0.1"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-purpple1 focus:border-purpple1"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purpple1 text-white font-semibold rounded-md shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purpple1 focus:ring-opacity-50"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default PostCard;
