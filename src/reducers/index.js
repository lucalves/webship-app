import { combineReducers } from 'redux'
import promotions from './promotions'
import promotionPage from './promotionPage'
import promotionsRefresh from './promotionsRefresh'

// utilizamos a função combineReducers para fazer a combinação
// de nossos três Reducers e exportar como um único Reducer.

export default combineReducers({
  promotions,
  promotionPage,
  promotionsRefresh
})
