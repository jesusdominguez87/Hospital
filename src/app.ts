import { HospitalService } from "./services/hospital.service";
import { HospitalView } from "./views/hospital.view";
import { HospitalController } from "./controllers/hospital.controller";
import { HttpService } from "./services/http.service";

const httpService = new HttpService();
const hospitalService = new HospitalService(httpService);
    
hospitalService.loadData();
const hospitalView = new HospitalView();

new HospitalController(hospitalService, hospitalView);