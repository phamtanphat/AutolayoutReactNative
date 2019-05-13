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
            style={{width : 100 , height : 100}}    
            source={{uri : 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        >
        </Image>
      </View>
    )
  }
}
