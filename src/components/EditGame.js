import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditGame = () => {
  const [Rank, setRank] = useState("");
  const [Title, setTitle] = useState("");
  const [Sales, setSales] = useState("");
  const [Series, setSeries] = useState("");
  const [Platforms, setPlatforms] = useState("");
  const [InitialReleaseDate, setInitialReleaseDate] = useState("");
  const [Developers, setDevelopers] = useState("");
  const [Publishers, setPublishers] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getGameById();
  }, );
 
  const getGameById = async () => {
    const response = await axios.get(`https://mernbackend-aq18.onrender.com/games/${id}`);
    setRank(response.data.Rank);
    setTitle(response.data.Title);
    setSales(response.data.Sales);
    setSeries(response.data.Series);
    setPlatforms(response.data.Platforms);
    setInitialReleaseDate(response.data.InitialReleaseDate);
    setDevelopers(response.data.Developers);
    setPublishers(response.data.Publishers);
  };
 
  const updateGame = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://mernbackend-aq18.onrender.com/games/${id}`, {
        Rank,
        Title,
        Sales,
        Series,
        Platforms,
        InitialReleaseDate,
        Developers,
        Publishers
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateGame}>
          <div className="field">
            <label className="label">Rank</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Rank}
                onChange={(e) => setRank(e.target.value)}
                placeholder="Rank"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Sales</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Sales}
                onChange={(e) => setSales(e.target.value)}
                placeholder="Sales"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Series</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Series}
                onChange={(e) => setSeries(e.target.value)}
                placeholder="Series"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Platforms</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Platforms}
                onChange={(e) => setPlatforms(e.target.value)}
                placeholder="Platforms"
              />
            </div>
          </div> 
          <div className="field">
            <label className="label">InitialReleaseDate</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={InitialReleaseDate}
                onChange={(e) => setInitialReleaseDate(e.target.value)}
                placeholder="InitialReleaseDate"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Developers</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Developers}
                onChange={(e) => setDevelopers(e.target.value)}
                placeholder="Developers"
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Publishers</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Publishers}
                onChange={(e) => setPublishers(e.target.value)}
                placeholder="Publishers"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditGame;