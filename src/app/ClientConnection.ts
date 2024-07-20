import {Client} from './Client';

type ApisConfigType = {
  TMDB: {
    baseUrl: string;
    apiKey: string;
  };
  youtube: {
    baseUrl: string;
    apiKey: string;
  };
};

const ApisConfig: ApisConfigType = {
  TMDB: {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'api_key=4127b96cc79318b6b63a97f8bda628b3',
  },
  youtube: {
    baseUrl: 'https://www.googleapis.com/youtube/v3/',
    apiKey: '&key=AIzaSyCzMYwhzPOVpaPNw_Oi0wfLyvcef2I15Ys&type=video',
  },
};

const buildPath = (path: string, type: 'TMDB' | 'youtube') =>
  `${path}${ApisConfig[type]?.apiKey}`;

const client = (type: 'TMDB' | 'youtube') =>
  new Client(ApisConfig[type]?.baseUrl);

const imgPath = (path: string) => `https://image.tmdb.org/t/p/original${path}`;

export {buildPath, client, imgPath};
