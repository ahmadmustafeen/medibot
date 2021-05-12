import React from 'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    bgImage: {
        width: wp(100),
        height: hp(100),
    },
    logoText: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#FF8E2B',
    },
    signTopContainer: {
        width: wp(100),
        height: hp(30),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    signInLogo: {
        // width: wp(30),
        // aspectRatio: 1
    },
    signInButtonContainer: {
        width: wp(100),
        height: hp(60),
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        width: wp(80),
        paddingHorizontal: wp(5),
        // backgroundColor: '#FF8E2B',
        backgroundColor: '#2e77ae',
        marginVertical: hp(1),
        height: hp(10),
        borderRadius: hp(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: hp(5),
        aspectRatio: 1
    },
    textContainer: {
        paddingHorizontal: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
    }

})


export default styles