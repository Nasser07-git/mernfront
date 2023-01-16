import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGame] = useState([]);
 
  useEffect(() => {
    getGames();
  }, []);
 
  const getGames = async () => {
    const response = await axios.get("https://mernbackend-aq18.onrender.com/games");
    setGame(response.data);
  };
 
  const deleteGame = async (id) => {
    try {
      await axios.delete(`https://mernbackend-aq18.onrender.com/games/${id}`);
      getGames();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add Game
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Rank</th>
              <th>Title</th>
              <th>Sales</th>
              <th>Series</th>
              <th>Platform(s)</th>
              <th>Release date</th>
              <th>Developer(s)</th>
              <th>Publisher(s)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={game._id}>
                <td>{index + 1}</td>
                <td>{game.Rank}</td>
                <td>{game.Title}</td>
                <td>{game.Sales}</td>
                <td>{game.Series}</td>
                <td>{game.Platforms}</td>
                <td>{game.InitialReleaseDate}</td>
                <td>{game.Developers}</td>
                <td>{game.Publishers}</td>
                <td>
                  <Link
                    to={`edit/${game._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteGame(game._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default GameList;