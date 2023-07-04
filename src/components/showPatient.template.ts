import { Patient } from "../models/patient.model";

export const showPatientTemplate = (patient: Patient) => `
    <div class="patient-card">
        <div class="patient-info">
            <p>Nombre: ${patient["name"]}</p>
            <p>Apellido: ${patient["surname"]}</p>
            <p>Fecha de nacimiento: ${patient["birthdate"]}</p>
            <p>DNI: ${patient["dni"]}</p>
        </div>
    </div>`;