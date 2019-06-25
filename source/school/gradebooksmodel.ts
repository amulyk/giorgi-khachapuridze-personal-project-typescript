import { Validator } from './Validator';
import { GroupsModel } from './groupsmodel';
import { TeachersModel } from './teachersmodel';
import { LMSModel } from './lmsmodel';

interface grades {
   level: number;
   id: string;
   records: record[];
}

interface record {
   pupilId: number,
   teacherId: number,
   subjectId: number,
   lesson: number,
   mark: number
}

export class GradeBooksModel {
   grades: Map<string, grades>;
   groups: GroupsModel;
   teachers: TeachersModel;
   lms: LMSModel;
   constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
       this.grades = new Map();
       this.groups = groups;
       this.teachers = teachers;
       this.lms = lms;
   }

   add(level: number, Id: string) {
        let id =Math.random().toString(36).substr(2, 8);
       this.grades.set(Id, { level, id, records: [] })
       return id;
   }

   clear(arg: void) {
           this.grades.clear();
   }

   addRecord(gradebookId: string, record: record) {
       let store = this.grades.get(gradebookId);
       if (store) {
           store.records.push(record);
       } else {
           throw new Error("ooppss!");
       }
   }

   read(gradebookId: string, pupilId: number) {
       let grade = this.grades.get(gradebookId);
       
   }

    readAll(gradebookId: string){
        return Array.from(this.grades);
    }
}
