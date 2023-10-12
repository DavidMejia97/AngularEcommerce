import firebase from 'firebase/app';

export interface  Job{
  title: string;
  salary: number;
  create: firebase.firestore.FieldValue;
  update?: firebase.firestore.FieldValue;

}
