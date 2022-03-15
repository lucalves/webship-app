import React, { Component } from 'react'
import { View, Modal, Text, TextInput, TouchableHighlight, Image } from 'react-native'
import Styles from './styles'

const SearchIcon = require('./../../assets/search.png')
const CancelIcon = require('./../../assets/cancel-icon.png')

class PromotionFormSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: false }
  }
  
  render() {
    return(
      <View>
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ this.state.modalVisible }
          onRequestClose={() => {
            this.setState({ modalVisible: false })
          }}
        >
          <View style={ Styles.centeredView }>
            <View style={ Styles.modalView }>
              <TextInput
                style={ Styles.searchInput }
                onChangeText={ () => { return false } }
                placeholder='Procurar'
              />
              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: false })
                }}
              >
                <Image source={ CancelIcon } style={ Styles.cancelIcon } />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setState({ modalVisible: true })
          }}
        >
          <Image source={ SearchIcon } style={ Styles.searchIcon } />
        </TouchableHighlight>
      </View>
    )
  }
}

export default PromotionFormSearch