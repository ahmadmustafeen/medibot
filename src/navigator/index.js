/* eslint-disable prettier/prettier */
import React, { forwardRef, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthNav } from './AuthNav';
import { DashboardNav } from './DashboardNav';


const RootStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        appColor: '#014488',
        primary: '#c27e12',
        secondary: '#010A2A',
        white: 'white',
        border: '#939393',
        background: 'white',
        textBlack: '#3B3B3B',
        placeholder: '#939393',
        borderColor: 'rgb(200,200,200)',
        imageLoadingColor: '#2196F3',
    },
};


const navigatorComponent = () => {


    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <RootStack.Screen name="Auth" component={AuthNav} />
            <RootStack.Screen name="Dashboard" component={DashboardNav} />

        </RootStack.Navigator>
    );


}


const Navigator = (props, ref) => {

    return (
        <NavigationContainer ref={ref} theme={MyTheme}>
            {navigatorComponent()}
        </NavigationContainer>
    );
};

export default forwardRef(Navigator);
