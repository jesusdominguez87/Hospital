import { HospitalService } from "../services/hospital.service";
import { HospitalView } from "../views/hospital.view";

export class HospitalController {

    constructor(private readonly hospitalService: HospitalService, private readonly hospitalView: HospitalView){
        this.loadPatients();
        this.hospitalView.bindInsert(/*this.handlerAdd*/);
        this.hospitalView.bindShowAll(this.handlerShowAll());
        this.hospitalView.bindShowForeigner(this.handlerShowForeigners());

        //this.hospitalView.bindDelete(this.handlerDelete);
    }

    private handlerAdd = () => {
        return this.hospitalService.add;
    }

    private handlerDelete = () => {
        return this.hospitalService.delete;
    }

    private handlerShowAll = () => {
        return this.hospitalService.allPatients;
    }

    private handlerShowPensioners = () => {
        return this.hospitalService.pensioners;
    }

    private handlerShowForeigners = () => {
        return this.hospitalService.foreigners;
    }

    private loadPatients = () => {
        this.hospitalService.loadData().then(() => { this.render(this.hospitalService.allPatients); });
    }

    private render = (patients) => {
        this.hospitalView.renderPatients(patients);
    }
}