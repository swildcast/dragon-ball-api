import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const getCharacter = async (id) => {
  try {
    const characters = [];
    const url = `${API_BASE_URL}characters/${id}`;
    const response = await axios.get(url);
    characters.push(response.data);
    return characters;
  } catch (err) {
    throw new Error(`Failed to fetch characters: ${err.message}`);
  }
};

export const getPlanet = async (id) => {
  try {
    const planets = [];
    const url = `${API_BASE_URL}planets/${id}`;
    const response = await axios.get(url);
    planets.push(response.data);
    return planets;
  } catch (err) {
    throw new Error(`Failed to fetch planets: ${err.message}`);
  }
};

export const getAllCharacters = async (page) => {
  const response = await axios.get(`${API_BASE_URL}characters?page=${page}`);
  const data = await response.data;
  return data;
}

export const getAllPlanets = async (page) => {
  const response = await axios.get(`${API_BASE_URL}planets?page=${page}`);
  const data = await response.data;
  return data;
}

