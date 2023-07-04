export const pensionerTemplate = () =>  `
        <label for="dni">DNI: </label>
        <input type="text" id"dni" name="dni">
        
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name">
        
        <label for="surnames">Apellidos: </label>
        <input type="text" id="surname" name="surname">
        
        <label for="birthdate">Fecha de Nacimiento: </label>
        <input type="text" id="birthdate" name="birthdate">
        
        <label for="pensionerCode">Código de pensionista: </label>
        <input type="text" id="pensionerCode" name="pensionerCode">
        
        <label for="pensionerType">Tipo de pensión: </label>
        <input type="radio" id="agreement" name="agreement" value="true">Completa</input>
        <input type="radio" id="agreement" name="agreement" value="false">Parcial</input>

        <input type="submit" id="submitButton" class="buttons" value="Insertar">`;