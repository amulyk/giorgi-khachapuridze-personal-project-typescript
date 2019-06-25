// import {Validator} from  './validator';
interface schema {
    title: string,
    lessons: number,
    description: string
  }

export class SubjectsModel{
    id: number;
    title: string;
    lessons: number;
    description: string;
    constructor(subjects:schema){
        this.id =  new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);    
        this.title = subjects.title;
        this.lessons = subjects.lessons;
        this.description = subjects.description;
    }
  }

