import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../containers/Home';
import Setting from '../containers/Setting';



import {
    HOME_SCREEN,
    SETTING_SCREEN
} from '../constants/Screens';



const Stack = createStackNavigator();

export const DashboardNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={HOME_SCREEN} component={Home} />
            <Stack.Screen name={SETTING_SCREEN} component={Setting} />
        </Stack.Navigator>
    );
};
