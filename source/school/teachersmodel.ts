import { Validator } from "./validator";

// import {Validator} from  './validator';

interface email {
  email: string,
  primary: boolean
}

interface phone {
  phone: string,
  primary: boolean
}

interface subject {
  subject: string
}

interface schema {
  id?: number;
  
  name: {
    first: string,
    last: string
  },
  image: string,
  dateOfBirth: string, // format date
  emails: email[],
  phones: phone[],
  sex: string, // male or female
  subjects: subject[],
  description: string,
}


  export class TeachersModel{
    teachers: Map<number, object>;
      constructor(){
          this.teachers = new Map();
      }

  
      add(teacher: schema){
              Validator.Validation(teacher);
              let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
              teacher.id = id;
              this.teachers.set(id, teacher);
              return id;
          }

      read(teacherId: number) {
          if(this.teachers.has(teacherId)) {
              return this.teachers.get(teacherId);
          }
          else{
              throw new Error ("It wasn't founded ");
          }
        
      }  
      update(teacherId: number,updatedProfile: schema){
              if(this.teachers.has(teacherId)) {
                  this.teachers.delete(teacherId);
                  this.teachers.set(teacherId,updatedProfile);
              }
              else{
                  throw new Error ("can't update!")
              }

      } 
      
      remove(teacherId: number){
          if(this.teachers.has(teacherId)){
              this.teachers.delete(teacherId);
          }
          else{
              throw new Error ("There is not such subject");
          }
      }
    }
  