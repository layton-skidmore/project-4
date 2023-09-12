import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewGameForm.css'; // Import a CSS file for styling

export default function NewGameForm({ addGame }) {
  const [newGame, setNewGame] = useState({
    name: '',
    gameStudio: '',
    esrbRating: '',
  });
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    addGame(newGame);
    setNewGame({
      name: '',
      gameStudio: '',
      esrbRating: '',
    });
    navigate('/');
  }

  function handleChange(evt) {
    setNewGame({ ...newGame, [evt.target.name]: evt.target.value });
  }

  return (
    <div className="new-game-form">
      <h2>Add a New Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newGame.name}
          onChange={handleChange}
          placeholder="Game Name"
          required
        />
        <input
          type="text"
          name="gameStudio"
          value={newGame.gameStudio}
          onChange={handleChange}
          placeholder="Game Studio"
          required
        />
        <select
          name="esrbRating"
          value={newGame.esrbRating}
          onChange={handleChange}
          required
        >
          <option value="">Select ESRB Rating</option>
          <option value="E">E</option>
          <option value="T">T</option>
          <option value="M">M</option>
        </select>
        <button type="submit" className="add-game-button">
          Add Game
        </button>
      </form>
      <img
        src="https://cdn.pixabay.com/photo/2016/06/29/14/12/joystick-1486898_1280.png"
        alt="Game Controller"
        className="game-controller-image"
      />
      
    </div> 

  );
}