import { Patient } from "./patient.model";
import { Foreigner as IForeigner } from "../interfaces/foreigner.interface";

export class Foreigner extends Patient {
    private _agreement: boolean;
    private _support: number;

    constructor(patient: IForeigner) {
        super(patient);
        this._agreement = patient.agreement;
        this._support = patient.support;
    }

    public get agreement() {
        return this._agreement;
    }

    public get discount() {
        return this._support;
    }
}