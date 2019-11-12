import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchCriteriaService {

  
  constructor(private http: HttpClient) { }

  fetchData(subName) { 
    
  console.log(subName)

  return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c5f5e747de4ed4d4e94401b73a5737ac&language=en-US&page=1&include_adult=false&query=${subName}`);
}

fetchGenre(subGenre) {
  
  console.log(subGenre)

  return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c5f5e747de4ed4d4e94401b73a5737ac&language=en-US&page=1&include_adult=false&query=${subGenre}`);
}

// fetchYear(subYear) {

// console.log(subYear) 

// return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c5f5e747de4ed4d4e94401b73a5737ac&language=en-USquery=${subYear}`)
// }
}