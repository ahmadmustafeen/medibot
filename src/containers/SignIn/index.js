import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './style'

const SignIn = props => {
    return (
        <ImageBackground
            style={styles.bgImage}
            resizeMode="stretch"
            source={require('../../assets/images/backgroundimage.jpeg')}>
            <View style={styles.signTopContainer}>
                <View style={styles.signInLogo}>
                    <Text style={styles.logoText}>
                        MediBot
                    </Text>
                    {/* <Image style={{ width: "100%", height: "100%" }} source={require("../../assets/images/logo.png")} /> */}
                </View>

            </View>
            <View style={styles.signInButtonContainer}>
                <TouchableOpacity style={styles.signInButton}>
                    <View style={styles.iconContainer}>
                        <Image style={{ width: "100%", height: "100%" }} source={require("../../assets/images/google.png")} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ color: 'white', fontSize: 16, }}>
                            Sign in with Google
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton}>
                    <View style={styles.iconContainer}>
                        <Image style={{ width: "100%", height: "100%" }} source={require("../../assets/images/facebook.png")} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ color: 'white', fontSize: 16, }}>
                            Sign in with Facebook
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton}>
                    <View style={styles.iconContainer}>
                        <Image style={{ width: "100%", height: "100%" }} source={require("../../assets/images/guest.png")} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ color: 'white', fontSize: 16, }}>
                            Continue as guest
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default SignIn