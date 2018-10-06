
import { Dimensions } from 'react-native'

class MyUtility {

    static dimension() {
        let size = Dimensions.get('window')
        return size
    }
}

export default MyUtility