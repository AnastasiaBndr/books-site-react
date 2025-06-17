import axios from 'axios';

export default class booksAPIComponent{
    static readonly BOOKSKEY = import.meta.env.VITE_API_KEY;
  static readonly BOOKSURL = "https://www.googleapis.com/books/v1";

  static limit = 20;
  page = 1;

  static links = {
    trendingURL: 'https://api.themoviedb.org/3/trending/all/week?',
    searchUrl: booksAPIComponent.BOOKSURL+'/volumes/',
    credits: 'https://api.themoviedb.org/3/credit/credit_id',
    reviews: 'https://api.themoviedb.org/3/movie/reviews',
    details: 'https://api.themoviedb.org/3/movie/',
    seriesDetails: 'https://api.themoviedb.org/3/tv/',
  };

  public getMOVIEKEY() {
    return booksAPIComponent.BOOKSKEY;
  }

  baseSearchParams = {
    key: booksAPIComponent.BOOKSKEY,
  };

  public async fetchBooksbyName(url:string,query:string):Promise<any> {
    const options = {
      method: 'GET',
      url: url,
      params: {
        q: query,
          startIndex: this.page,
          maxResults:booksAPIComponent.limit,
        key:booksAPIComponent.BOOKSKEY
      }
      
    };

    try {
        const resp = await axios.request(options);
      return resp.data;
    } catch(e) {}
  }

  async fetchMoviesById(id:number, url:string, param:string):Promise<any> {
    const options = {
      method: 'GET',
      url: url + id,
      params: {
        page: this.page,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRiNWJkN2U5YWExY2M0MzBhZjAwYzVhMDU2ZDAxMCIsInN1YiI6IjY1MTJjM2YyOGUyYmE2MDEwMTlmZjg5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7zJPhqUXyDij87cKqpJpgtQnm376t0iMEdo8YRFnUG4',
      },
    };

    try {
      const resp = await axios.request(options);
      return resp.data;
    } catch(e) {}
  }
}