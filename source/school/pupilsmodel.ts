import {Validator} from  './validator';
interface phone {
    phone: string,
    primary: boolean
}

interface schema {
    id?: number;
    name: {
        first: string,
        last: string
      },
      image: string,
      dateOfBirth: string, // format date
      phones: phone[],
      sex: string, // male OR female
      description: string
}

    export class PupilsModel{
        pupils: Map<number, schema>;
        constructor(){
            this.pupils = new Map();
        }

        add(pupil: schema){
                Validator.Validation(pupil);
                let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
                pupil.id = id;
                this.pupils.set(id, pupil);
                return this.pupils.get(id);
        }

        read(pupilid: number) {
            if(this.pupils.has(pupilid)) {
                return this.pupils.get(pupilid);
            }
            else{
                throw new Error ("It wasn't founded");
            }
        
        }
        
        update(pupilid: number,pupil: schema){
                if(this.pupils.has(pupilid)) {
                    this.pupils.delete(pupilid);
                    this.pupils.set(pupilid,pupil);
                }
                else{
                    throw new Error ("can't update!")
                }

            }
        
        remove(pupilid: number){
            if(this.pupils.has(pupilid)){
                this.pupils.delete(pupilid);
            }
            else{
                throw new Error ("There is not such subject");
            }
        }

    }
