// Actions são eventos que ocorrem no aplicativo e 
// disparam atualizações no estado do aplicativo.

// Elas descrevem os eventos que podem acontecer no aplicativo.

export const addPromotion = data => ({
  type: 'ADD_PROMOTION', // A chave type é uma descrição do que a ação realiza
  data
})

export const clearPromotions = {
  type: 'CLEAR_PROMOTIONS'
}

export const pageIncrement = {
  type: 'INCREMENT'
}

export const pageBackToStart = {
  type: 'BACK_TO_START'
}

export const setRefreshTrue = {
  type: 'SET_REFRESH_TRUE'
}

export const setRefreshFalse = {
  type: 'SET_REFRESH_FALSE'
}