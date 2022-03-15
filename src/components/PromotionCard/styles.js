import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '94%',
    minHeight: 200
  },
  promotionImage: {
    width: '50%',
    borderRadius: 16,
    borderWidth: 1,
  },
  descriptionText: {
    flex: 1
  },
  titleText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  priceText: {
    textAlign: "center",
    fontSize: 16,
    margin: 5
  },
  linkButton: {
    backgroundColor: "#311D72",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5
  },
  textLinkButton: {
    color: "#FFFFFF",
    textAlign: 'center',
  }
})