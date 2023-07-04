import { Patient as IPatient } from "../interfaces/patient.interface";

export abstract class Patient {
    private _dni: string;
    private _name: string;
    private _surname: string;
    private _birthdate: Date;

    constructor(patient: IPatient){
        this._dni = patient.dni;
        this._name = patient.name;
        this._surname = patient.surname;
        this._birthdate = patient.birthdate;
    }

    get dni(): string {
        return this._dni;
    }
    
    set dni(dni: string) {
        this._dni = dni;
    }
    
    get name(): string {
        return this._name;
    }
    
    set name(name: string) {
        this._name = name;
    }

    get surname(): string {
        return this._surname;
    }
    
    set surname(surname: string) {
        this._surname = surname;
    }

    get birthdate(): Date {
        return this._birthdate;
    }
    
    set birthdate(birthdate: Date) {
        this._birthdate = birthdate;
    }
}