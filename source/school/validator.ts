
interface schema {
    sex: string
    dateOfBirth: string,
 }
 
 
 export class Validator {
    static Validation(arg: schema) {
        if (arg.sex !== 'femail' && arg.sex !== 'male') {
            throw new Error(" choose male or female or anothermale");
        }
        if (arg.dateOfBirth.indexOf('.') !== 2 || arg.dateOfBirth.lastIndexOf('.') !== 5 || +arg.dateOfBirth.substring(0, 2) > 31 || + arg.dateOfBirth.substring(3, 5) > 12 || + arg.dateOfBirth.substring(6, 10) > 2019 ) {
            throw new Error("data format is not right");
        }
 
    }
 }