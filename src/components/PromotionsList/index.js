import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import PromotionCard from './../PromotionCard'
import axios from 'axios'
import { connect } from 'react-redux'
import store from './../../store/'
import { 
  addPromotion, 
  pageIncrement, 
  pageBackToStart, 
  clearPromotions, 
  setRefreshTrue, 
  setRefreshFalse 
} from './../../actions'

class PromotionsList extends Component {
  constructor(props) {
    super(props)
  }

  // Nesta função utilizamos a função getState() do store que importamos.
  // Esta função é própria da Store e nos permite pegar o estado atualizado.

  request = () => {
    const page = store.getState().promotionPage.page
    axios.get('https://irias.com.br/tutorials/react-native/api.php?page=' + page).then(response => { 
      response.data.forEach(element => {
        this.props.dispatch(setRefreshFalse)
        this.props.dispatch(addPromotion(element))
      })
    })
  }

  // componentDidMount() para executar a inicialização da chamada na API
  // assim que o componente for montado  (inserido na árvore)

  componentDidMount() {
    this.request()
   }

   // Esta função é chamada toda vez que o usuário chega ao final da lista
   // de promoções na tela do aplicativo. Quando ele chega no fim esta função
   // utiliza o dispatch, para para executar a ação pageIncrement em nossa Store.

   loadNewPage() {
    // A função dispatch possibilita executar uma ação, 
    // que foi descrita na action em nossa Store.

    this.props.dispatch(pageIncrement)
    this.request()
  }

  // Esta função é chamada toda vez que o usuário puxa
  // para baixo a lista, assim atualizando ela.

  refresh() {

    // setRefreshTrue – Esta ação fala que a lista de
    // promoções está em estado de atualização.
    this.props.dispatch(setRefreshTrue)

    // clearPromotions – Esta ação limpa a lista de promoções.
    this.props.dispatch(clearPromotions)

    // pageBackToStart – Esta ação volta a API para a página 1 que é a página inicial.
    this.props.dispatch(pageBackToStart)

    // Depois disso ele chama a função request para buscar as promoções da 
    // página atual que é a página 1 e adicionar a lista de promoções que está vazia.
    this.request()
  }

  // utilização do método render() para examinar o this.setState 
  // e retornar um elemento React, no nosso caso o PromotionCard

  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.props.promotions.data }
        renderItem={ ({ item }) => (
          <PromotionCard data={ item } />
        )}
        keyExtractor={ item => item.id }
        onEndReachedThreshold={ 0.01 }
        onEndReached={ () => {
          this.loadNewPage()
        }}
        refreshing={ this.props.promotions.refreshing }
        onRefresh={ () => {
          this.refresh()
        }}
      />
    )
  }
}

// mapStateToProps – Nesta variável que recebe uma função, 
// fazemos um mapeamento do estado recebido na props para que 
// possamos utilizar o mesmo em nosso componente PromotionsList.

const mapStateToProps = (state) => {
  const  promotions = { 
    data: state.promotions,
    refreshing: state.promotionsRefresh.refreshing
  }
  return { promotions }
}

// Por último fazemos o export do componente PromotionsList e utilizamos
// o connect qual fizemos o import do React Redux, para fazer a conexão do 
// componente react com a Store Redux. Com isso nosso componente pode utilizar
//  por meio das props as funções da Store.

export default connect(mapStateToProps)(PromotionsList)