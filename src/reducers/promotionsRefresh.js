const promotionsRefresh = (state = {refreshing: false}, action) => {
  // Utilizamos este estado no componente de 
  // lista, na função de atualização da lista.
  
  switch (action.type) {
    case 'SET_REFRESH_TRUE':
      return { refreshing: true }
    case 'SET_REFRESH_FALSE':
      return { refreshing: false }
    default:
      return state
  }
}

export default promotionsRefresh