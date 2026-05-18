import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  params: {
    apikey: 'live_cPuQXIkdZN2xFBocp2vOsde1hGswMwDnTJwI18ryYsyjFxDq87qwTOQVhTCQNE77'
  }
});

export default api;