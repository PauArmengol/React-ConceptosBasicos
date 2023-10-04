//EJEMPLO EN CLASE DE COMO TIPAR UN OBJETO SIN USAR TYPESCRIPT
// esto permite acceso dinamico en caso de cambios a futuro
//(contexto de formularios controlados)


const CLAVES = {
//  del objeto persona me quiero quedar con las claves:
//  NAME y LASTNAME es como se van a llamar siempre esas claves en mi codigo (por ejemplo)
//  y sus valores son las claves del objeto persona del cual quiero sacar esa data
// el valor de mis claves NAME y LASTNAME va a ser dinamico dependiendo los valores que vayan tomando a lo largo del programa
    NAME: 'nombre',
    LASTNAME: 'apellido',
};


const persona = {
//  [de CLAVES, la propiedad NAME] vale nombre --> entonces es lo mismo que poner nombre
    [CLAVES.NAME]: 'Paula',
//  [de CLAVES, la propiedad LASTNAME] vale apellido --> entonces es lo mismo que poner apellido
    [CLAVES.LASTNAME]: 'Armengol'
};