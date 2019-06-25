import { Validator } from "./validator";
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
interface groupsSchema {
    id : string,
    room: number,
    pupils: schema[]
}


    export class GroupsModel{
        groups: Map<string, groupsSchema>;
        constructor(){
            this.groups = new Map();

        }

        add(room: number){
                let id =Math.random().toString(36).substr(2, 8);
                // return this.groups.get("id");
                this.groups.set(id, {id,room,pupils: [] });
                return id;
        
        }

        addPupil(groupId: string, pupil: schema){
                Validator.Validation(pupil);
                if(this.groups.has(groupId)){
                    let gr = this.groups.get(groupId);
                    gr.pupils.push(pupil)
                    return pupil;
                }
                else{
                    throw new Error ("404 no such group");
                }


        }

        removePupil(groupId: string, pupilid: number){
                if(this.groups.has(groupId)){
                    this.groups.delete(groupId);
                }
                else{
                    throw new Error ("Not founded")
                }
        }

        update(groupId: string, obj: { room: number }){
                if(this.groups.has(groupId)) {
                    const group = this.groups.get(groupId);
                    group.room = obj.room;
                }
                else{
                    throw new Error ("oops!");
                }

        }

        read(groupId: string){
                if(this.groups.has(groupId)){
                    return this.groups;
                }
                else{
                    throw new Error ("there's no group")
                }

        }
        readAll(arg: void ){
                return Array.from(this.groups);
            
        }
    }

