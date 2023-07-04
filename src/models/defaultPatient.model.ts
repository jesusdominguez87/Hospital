import { Patient } from "./patient.model";
import { Patient as IPatient } from "../interfaces/patient.interface";

export class DefaultPatient extends Patient{
    
    constructor(patient: IPatient) {
        super(patient);
    }

}