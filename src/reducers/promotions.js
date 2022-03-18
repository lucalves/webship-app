// Os Reducers são funções que utilizam o estado 
// atual e a Action para retornar um novo estado.

const promotions = (state = [], action) => {
  switch (action.type) {
    // Vai retornar o estado promotions atual acrescido de
    // mais uma promoção que foi passada por parâmetro na ação.

    case 'ADD_PROMOTION':
      return [
        ...state,
        {
          id: action.data.id,
          title: action.data.title,
          price: action.data.price,
          imageUri: action.data.imageUri,
          linkUrl: action.data.linkUrl
        }
      ]

    // Aqui ele vai retornar o estado promotions 
    // vazio que é seu estado atual.
    
    case 'CLEAR_PROMOTIONS':
      return state = []
    default:
      return state
  }
}

export default promotions