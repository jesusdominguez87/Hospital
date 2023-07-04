import { Patient } from "./patient.model";
import { Pensioner as IPensioner } from "../interfaces/pensioner.interface";

export class Pensioner extends Patient {
    private _retiredCode: string;
    private _fullRetired: boolean;

    constructor(patient: IPensioner) {
        super(patient);
        this._retiredCode = patient.retiredCode;
        this._fullRetired = patient.fullRetired;
    }

    public get retiredCode() {
        return this._retiredCode;
    }

    public get fullRetired() {
        return this._fullRetired;
    }
}