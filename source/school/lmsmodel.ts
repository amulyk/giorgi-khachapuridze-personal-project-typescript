
    export class LMSModel{
        subjects: Map<number, object>;
        constructor(){
            this.subjects = new Map();
        }

        add(subject: { id: number; }){
    
            this.subjects.set(subject.id, subject);
       
        }

        remove(subject: { id: number; }){
            if(this.subjects.has(subject.id)){
                this.subjects.delete(subject.id);
            }
            else{
                throw new Error ("There is not such subject");
            }
        }

        verify(subject: { id: number; }){
            if(this.subjects.has(subject.id)){
                return true;
            }
            else{
                return false;
            }
        }

        readAll(){
            return Array.from(this.subjects).map(([key]) => {
                return {
                    subjectId: key
                }
            });
        }
    }
