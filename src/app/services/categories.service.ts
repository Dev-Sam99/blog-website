import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore : AngularFirestore) { }

  loadData(){
    return this.firestore.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map( entry => {
          const data = entry.payload.doc.data();
          const id = entry.payload.doc.id;
          return { id , data}
        })
      })
    )
  }
}
