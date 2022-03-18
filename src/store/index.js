// A Store é onde estará todo o estado do nosso aplicativo. 
// Ele é uma fonte única, onde ficará o estado que todos os 
// componentes da aplicação irão utilizar.

import { createStore } from 'redux'
import rootReducer from './../reducers/index'

// Utilizamos a função createStore que é nativa do
// Redux passando nossos Reducers, para criar nossa Store.

const store = createStore(rootReducer)

export default store