import { Injectable } from '@angular/core';
import {HttpClient,HttpRequest,HttpHeaders}from '@angular/common/http';
@Injectable()

export class UserService {

  constructor(private http:HttpClient) { }
searchByName(countryName){
  const headers=new HttpHeaders();
  headers.append('content-Type','application/json');
  const data=new HttpRequest('get',`https://restcountries.eu/rest/v2/name/${countryName}`,{headers:headers,reportProgress:true});
  return this.http.request(data);
}
searchAllCountry(){
const headers=new HttpHeaders();
  headers.append('content-Type','application/json');
  const data=new HttpRequest('get',`https://restcountries.eu/rest/v2/all`,{headers:headers,reportProgress:true});
  return this.http.request(data);

}
}