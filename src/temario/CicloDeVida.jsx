import React, { useState, useEffect } from 'react';

// El ciclo de vida de un componente es el conjunto de estados por los que pasa un componente desde que se crea hasta que se destruye
// Los estados por los que pasa un componente son:

// 1. Montaje: el componente se crea y se inserta en el DOM
// 2. Actualización: el componente se actualiza cuando cambia su estado o sus props
// 3. Desmontaje: el componente se destruye y se elimina del DOM

// Para cada uno de estos estados existen métodos que se ejecutan automáticamente

// 1. Montaje: se ejecuta el método constructor, el método render y el método componentDidMount

// 2. Actualización: se ejecuta el método render y el método componentDidUpdate

// 3. Desmontaje: se ejecuta el método componentWillUnmount

export class CicloDeVida extends Component {

    constructor(props) {
        super(props);

        this.state= {
            value: 0,
        };
    };

    render() {
        return (
        <div>CicloDeVida</div>
        )
    }
}

// export default CicloDeVida