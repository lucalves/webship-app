import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import PromotionCard from './../PromotionCard'
import axios from 'axios'

class PromotionsList extends Component {
  state = {
    data: []
  }

  // componentDidMount() para executar a inicialização da chamada na API
  // assim que o componente for montado  (inserido na árvore)

  componentDidMount() {
    axios.get('https://irias.com.br/tutorials/react-native/api.php').then(response => { 
        this.setState({ data: response.data })
      }).catch(() => { 
        console.log('Error retrieving data')
      })
    }

  // utilização do método render() para examinar o this.setState 
  // e retornar um elemento React, no nosso caso o PromotionCard

  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.state.data }
        renderItem={ ({ item }) => (
          <PromotionCard data={ item } />
        )}
        keyExtractor={ item => item.id } 
      />
    )
  }
}

export default PromotionsList