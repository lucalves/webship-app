// Os Reducers são funções que utilizam o estado 
// atual e a Action para retornar um novo estado.

const promotionPage = (state = {page: 1}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { page: state.page + 1 }
    case 'BACK_TO_START':
      return { page: 1 }
    default:
      return state
  }
}

export default promotionPage