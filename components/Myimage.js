import React, { PureComponent } from 'react'
import { Text, View , Image , Dimensions} from 'react-native'

const {width , height} = Dimensions.get('window')
export default class Myimage extends PureComponent {
  render() {
    return (
        // 1000 - 1080
        // width - ?
      <View>
        <Image
            style={{width : width , height : width * 1080 / 1000}}
            source={require('../image/background.jpg')}
        >
        </Image>
      </View>
    )
  }
}
