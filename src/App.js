import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
    //  text: 'La vida no es un problema a ser resuelto, sino una realidad a ser experimentada.',
    //  author: 'Soren Kierkegaard'
    //};

  }
  render() {
    return (
      <div className='main-container'>
        <div id='quote-box' className='quote-box'>
          <div className='quote-text'>
            <p id='text'>La vida no es un problema a ser resuelto, sino una realidad a ser experimentada.</p>
          </div>
          <div className='quote-author'>
            <p id='author'>Soren Kierkegaard</p>
          </div>
          <div className='quote-footer'>
            <a 
              href='https://twitter.com/intent/tweet'
              id='tweet-quote'
              >
              <i class="fa fa-twitter"></i>
              twitter</a>
            <button id='new-quote'>New quote</button>
          </div>
        </div>
      </div>
    );
  };
}

export default App();

//Lógica de programación
/*
== Objetivos:

- Tener un ¿objeto/arreglo? que contenga las citas y sus autores.
- Al cargar la página por primera vez deberá mostrarse una cita aleatoria.
- Cuando se de click en el botón de 'New quote' deberá mostrar una nueva cita.
- Con cada cambio de cita, deberá cambiar el color del 'background', el texto y los elementos (esto no lo solicita pero en el ejemplo viene así).
- Cuando se haga 'click' en el enlace de twitter, deberá dirigir al sitio 'twitter.com/intent/tweet'.
- El elemento contenedor con id=quote-box deberá estar centrado horizontalmente

== Lógica:

- En el index.html se tendrá un elemento <div> con id = 'root' a donde dereccionará el código JSX desde el archivo index.js
- El archivo index.js importará el componente App.js para obtener los distintos componenetes
-- Para el caso de su ejecución en 'codepen.io' todo el código de App.js deberá estar en la ventana del javaScript (babel).
- El formato gráfico se dará por medio del archivo App.css que se importará en App.js
-- De igual forma para ejecución en 'codepen.io' todo el código de App.css deberá estar el la ventana de css (no se usara precompilador)
- Inicialmente crearé un objeto con algunas citas dentro del archivo App.js (De ser posible pretendo hacer conectividad con un .josn)
- Deberá existir una función que randomice la selección de la cita
- la cita elegida deberá modificar un estado de la aplicación con la cita (inicial o nueva)
- Se renderizará la cita mediante el código JSX a partir del estado
- Al hacer click en el boton 'New-quote' se deberá actualizar el estado con una nueva cita elegida al azar del objeto (si, deberá ser objeto).
- Al hacer click en el enlace a twitter, deberá dirigir al sitio determinado (no lo hare 'funcional')

=== Observaciones respecto al ejecticio terminado:
- Se utilizó un elemento de clase (de React) para poder utilizar los estados (state).
- Como no lograba renderizar medinate el empledo del index.js y App.js traspasé todo el código a index.js (para la presentación de todas formas lo iba a hacer así puesto que en codepen.io sólo tienes un área de trabajo para jS).
- De forma similar, no se utilizó el archivo index.css, solamente el App.css (en codepen.io no afectará esto.)
- Con lo anterior se omitó la importación y exportación
- Para las fuentes se utilizó la importación desde css.
- font-awesome en las versión 6 ya no utiliza cnd, por ello se empleó una versión anterior (4.3.0).
- Las citas se estructuraron en un archivo .json, el cual se carga en una constante y se asigna sólo en arrego en otra constate.
- Para la presentacion en codepen.io no se utilizará el archivo .json la constate del arreglo se agregará pero sólo con 10 citas.
- Dado que no es un requisito, no se realizó el cambio de color del fondo y los textos, como se observa en el ejemplo.

*/