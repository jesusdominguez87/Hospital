import { patientTemplate } from "../components/patient.template";
import { pensionerTemplate } from "../components/pensioner.template";
import { foreignerTemplate } from "../components/foreigner.template";
import { showPatientTemplate } from "../components/showPatient.template";

export class HospitalView {
    private insertButton = document.getElementById("insertButton");
    private searchButton = document.getElementById("searchPatientButton");
    private formArea = document.getElementById("formArea");
    private formResults = document.getElementById("formResults");
    private patientTypeSelect = document.getElementById("patientTypeSelect");
    private showAllButton = document.getElementById("showAllPatientsButton");
    private showPensionersButton = document.getElementById("showPensionersButton");
    private showForeignersButton = document.getElementById("showForeignersButton");
    private template = {
        default: patientTemplate(),
        foreign: foreignerTemplate(),
        pensioner: pensionerTemplate()
    }

    constructor() {}

    private showAll() {}

    private getPatientByDNI(){
        this.searchButton.addEventListener("click", () => {})
    }

    bindInsert() {
        this.insertButton.addEventListener("click", () => {
            const selectArea = document.getElementById("selectPatientTypeArea");
            selectArea.classList.remove("hidden");

            this.patientTypeSelect.addEventListener("change", (e) => {
                const patientType = (e.target as HTMLSelectElement).value;
                this.formArea.innerHTML = this.template[patientType];
            });
        });
    }

    bindShowAll(patients) {
        this.showAllButton.addEventListener("click", () => {
            this.renderPatients(patients);
        })
    }

    bindShowPensioner(patients) {
        this.showPensionersButton.addEventListener("click", () => {
            this.renderPatients(patients);
        })
    }

    bindShowForeigner(patients) {
        this.showForeignersButton.addEventListener("click", () => {
            this.renderPatients(patients);
        })
    }

    bindDelete(removePatient) {}

    public renderPatients(patients): void {
        this.formResults.innerHTML = "";
        for(const patient of patients){
            this.formResults.innerHTML += showPatientTemplate(patient);
        }      
    }
}