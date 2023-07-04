import { Patient } from "../interfaces/patient.interface";

export interface Pensioner extends Patient {
    retiredCode: string;
    fullRetired: boolean;
}