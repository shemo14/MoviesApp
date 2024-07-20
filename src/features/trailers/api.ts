import {buildPath, client} from '../../app/ClientConnection.ts';

const apiType = 'youtube';
const apiGetMovieTrailer = async (title: string) =>
  client(apiType).get(
    buildPath(
      `search?part=snippet&q=/${encodeURIComponent(title + ' trailer')}`,
      apiType,
    ),
  );

export {apiGetMovieTrailer};
