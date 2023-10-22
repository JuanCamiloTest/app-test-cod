import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly http = inject(HttpClient);


  request1(): Observable<any> {
    return this.http.get<any>('https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBScoresOnly', {
      headers: {
        'X-RapidAPI-Key': '',//estas se deben reemplazar por las que aparecen a lahora de ingresar a la cuenta.
        'X-RapidAPI-Host': ''
      },
      params: {
        gameDate: 20230410,
        topPerformers: true
      }
    }).pipe(
      catchError(e => e)
      );
  }

}
