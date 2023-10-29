import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, filter, map, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly api = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com';
  private readonly api2 = 'http://localhost:3000';
  private readonly api3 = 'http://localhost:3000';

  private readonly http = inject(HttpClient);

  request1Http(): Observable<any> {
    return this.http.get<any>(`${this.api}/getMLBScoresOnly`, {
      headers: {
        'X-RapidAPI-Key': '',//estas se deben reemplazar por las que aparecen a lahora de ingresar a la cuenta.
        'X-RapidAPI-Host': ''
      },
      params: {
        gameDate: 20230410,
        topPerformers: true
      }
    })
    .pipe(
      // catchError(e => e ));
      catchError(e => { throw e }));
  }

  // request2Http(): Observable<any> {
  //   return this.http.get<any>(`${this.api2}/teams`)
  //   .pipe(
  //     map(res => Object.entries(res.list[0]).filter(v => (
  //       v[0] === '20230410_NYY@CLE' ||
  //       v[0] === '20230410_STL@COL' ||
  //       v[0] === '20230410_WAS@LAA'))),
  //     map(res => Object.fromEntries(new Map(res))),
  //     catchError(e => { throw e }));
  // }

  // request2Http(): Observable<any> {
  //   // const isValid: Function = (v: unknown[]) => (
  //   const isValid: Function = (v: [string, object]) => (
  //     v[0] === '20230410_NYY@CLE' ||
  //     v[0] === '20230410_STL@COL' ||
  //     v[0] === '20230410_WAS@LAA');

  //   return this.http.get<any>(`${this.api2}/teams`)
  //   .pipe(
  //     map(res => Object.entries(res.list[0]).filter(v => isValid(v))),
  //     map(ress => Object.fromEntries(new Map(ress))),
  //     catchError(e => { throw e }));
  // }

  request2Http(): Observable<any> {
    // const isValid: Function = (v: unknown[]) => (
    const isValid: Function = (v: [string, object]) => (
      v[0] === '20230410_NYY@CLE' ||
      v[0] === '20230410_STL@COL' ||
      v[0] === '20230410_WAS@LAA');

    const obj: Function = (res:any) => {
      return new Map(Object.entries(res.list[0]).filter(v => isValid(v)));
    };

    return this.http.get<any>(`${this.api2}/teams`)
    .pipe(
      map(res => Object.fromEntries(obj(res))),
      catchError(e => { throw e }));
  }

  request3Http(): Observable<any> {
    return this.http.get<any>(`${this.api3}/fullStackOpenData`)
    .pipe(
      catchError(e => { throw e }));
  }

}
