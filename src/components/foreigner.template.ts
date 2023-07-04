export const foreignerTemplate = () =>  `
        <label for="dni">DNI: </label>
        <input type="text" id"dni" name="dni">
        
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name">
        
        <label for="surnames">Apellidos: </label>
        <input type="text" id="surname" name="surname">
        
        <label for="birthdate">Fecha de Nacimiento: </label>
        <input type="text" id="birthdate" name="birthdate">
        
        <label for="agreement">Acuerdo: </label>
        <input type="radio" id="agreement" name="agreement" value="true">Si</input>
        <input type="radio" id="agreement" name="agreement" value="false">No</input>

        
        <label for="support">Porcentaje de Ayuda (0-10): </label>
        <input type="number" name="support" id="support">
        

        <input type="submit" id="submitButton" class="buttons" value="Insertar">`;