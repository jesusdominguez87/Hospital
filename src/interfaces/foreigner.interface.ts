import { Patient } from "../interfaces/patient.interface";

export interface Foreigner extends Patient {
    agreement: boolean;
    support: number;
}