import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { Car } from '../car';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  cars: Car[];

  constructor(private db: AngularFireDatabase) { }

  getItemsByUID(uid: string): Observable<Car[]> {
    // Query the Realtime Database to filter items where "uid" field matches the provided UID 

    return this.db.list<Car>('cars', (ref) => ref.orderByChild('uid').equalTo(uid)).snapshotChanges()
    .pipe(
      map(snapshotActions => snapshotActions.map(action => ({ $key: action.key, ...action.payload.val() })))
    );
  }
}



/* snapshotChanges():
This method is used to listen to changes in data within a database collection or document and receive updates 
in the form of snapshots. 
It returns an observable that emits these snapshots whenever there are changes in the data.*/