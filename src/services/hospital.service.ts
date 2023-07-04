import { Patient } from "../models/patient.model";
import { DefaultPatient } from "../models/defaultPatient.model";
import { Pensioner } from "../models/pensioner.model";
import { Foreigner } from "../models/foreigner.model";
import { Foreigner as IForeigner } from "../interfaces/foreigner.interface";
import { Pensioner as IPensioner } from "../interfaces/pensioner.interface";
import { HttpService } from './http.service';

type DNI = string;

export class HospitalService {
    private patients: Map<DNI, Patient> = new Map<DNI, Patient>(); 
  
  constructor(
    private httpService: HttpService,
  ) {}

  public async loadData(){
    const defaultPatients: Patient[] = await this.httpService.get('http://localhost:3000/patients');
    const retiredPatients: Patient[] = await this.httpService.get('http://localhost:3000/retired');
    const foreignPatients: Patient[] = await this.httpService.get('http://localhost:3000/foreign');

    const patients = [
      ...this.mappingDefaultPatients(defaultPatients),
      ...this.mappingRetiredPatients(retiredPatients),
      ...this.mappingForeignPatients(foreignPatients),
    ];

    for (const patient of patients){
      this.patients.set(patient.dni, patient);
    }
    
  }
    public mappingDefaultPatients(patients) {
      return patients.map(patient => new DefaultPatient(this.formatPatient(patient)));
    }
    
    public mappingForeignPatients(patients) {
      return patients.map(patient => new Foreigner(this.formatPatient(patient)));
    }

    public mappingRetiredPatients(patients) {
      return patients.map(patient => new Pensioner(this.formatPatient(patient)));
    }

    private formatPatient (patient) {
        const [name, surname] = patient.name.split(" ");
        return {
            ...patient,
            name: name,
            surname: surname,
        }
    }

    public get allPatients() {
        const patients = Array.from(this.patients.values());

        return patients;
    }

    public get pensioners() {
        const pensioners = this.allPatients.filter((patient) => patient.hasOwnProperty('_retiredCode'));

        return pensioners;
    }

    public get foreigners() {   
        const foreigners = this.allPatients.filter((patient) => patient.hasOwnProperty('_agreement'));

        return foreigners;
    }

    public add (patient: Patient) {
        if(this.patients.has(patient.dni)){
            return false;
        }
        this.patients.set(patient.dni, patient);
        return true;
    }

    public getPatientByDNI(dni: string): any {
        const patientFound: Patient = this.patients.get(dni);
        
        if(!patientFound){
            return undefined;
        }
        return patientFound;
    }

    public delete(dni: string) {
        if(!this.patients.has(dni)){
            return false;
          }
          this.patients.delete(dni);
          return true;
    }
    //public update() {}
}