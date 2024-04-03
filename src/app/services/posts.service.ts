import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore:AngularFirestore) { }

  loadFeaturedPosts(){
    //applied where clause to apply filter on posts collection
    return this.firestore.collection('posts',ref=>ref.where('isFeatured','==',true)).snapshotChanges().pipe(
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
