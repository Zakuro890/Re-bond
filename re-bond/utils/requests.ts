import { DocumentData, Query, query, where } from "firebase/firestore"
import { collectionRef } from "../firebase/firebase"

type QueryType = Query<DocumentData, DocumentData>

const requests: {
  level1: QueryType
  level2: QueryType
  level3: QueryType
  level4: QueryType
  level5: QueryType
} = {
  level1: query(collectionRef,where('level','==',1)),
  level2: query(collectionRef,where('level','==',2)),
  level3: query(collectionRef,where('level','==',3)),
  level4: query(collectionRef,where('level','==',4)),
  level5: query(collectionRef,where('level','==',5)),

}

export default requests