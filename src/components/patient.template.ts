export const patientTemplate = () =>  `
        <label for="dni">DNI: </label>
        <input type="text" id"dni" name="dni"></p>

        <label for="name">Nombre</label>
        <input type="text" id="name" name="name"></p>

        <label for="surnames">Apellidos: </label>
        <input type="text" id="surname" name="surname"></p>

        <label for="birthdate">Fecha de Nacimiento: </label>
        <input type="text" id="birthdate" name="birthdate"></p>

        <input type="submit" id="submitButton" class="buttons" value="Insertar">`;