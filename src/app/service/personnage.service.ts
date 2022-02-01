import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnage } from '../models/personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private HttpClient : HttpClient) {}


    getAll(): Observable<Personnage[]> {
      return this.HttpClient.get<Personnage[]>(`${environment.apiBaseUrl}/personnage`);
    }

    create(personnage: Personnage):Observable<Personnage>{
      return this.HttpClient.post<Personnage>('${environment.apiBaseUrl}/personnages',personnage);
    }

    update(personnage:Personnage):Observable<Personnage>{
      return this.HttpClient.put<Personnage>('${environment.apiBaseUrl}/personnages',personnage);
    }

    delete(personnage:Personnage):Observable<Personnage>{
      return this.HttpClient.delete<Personnage>('${environment.apiBaseUrl}/personnages/${id}');
    }
}
