'use strict';

import {StyleSheet, Dimensions} from 'react-native';

const { width} = Dimensions.get('window');

export default StyleSheet.create({
    cancelStyle: {
        elevation:10,
        backgroundColor: '#00000000',
        alignItems:'center',
        alignContent:'center',
        padding:20,
        marginLeft: 30
    },
    acceptStyle: {
        elevation:10,
        backgroundColor: '#00000000',
        alignItems:'center',
        alignContent:'center',
        padding:20,
        marginRight: 30
    },
});