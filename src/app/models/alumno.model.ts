export class alumno {
    id: number;
    name: string;
    surname: string;
    sex: boolean;
    age: number;
    constructor(
        id: number,
        name: string,
        sex: boolean,
        surname: string,
        age: number,
    ){
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.surname = surname;
        this.age = age; 
    }
}