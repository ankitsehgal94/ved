import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import TutorsContactListScreen from '../screens/TutorsContactListScreen'
import TutorContactDetailScreen from '../screens/TutorContactDetailScreen'

const TutorStack = createStackNavigator()

export default function AppContainer() {
    return (
        <NavigationContainer>
            <TutorStack.Navigator>
                <TutorStack.Screen name="TutorsContactList" component={TutorsContactListScreen} options={{ header: () => { } }} />
                <TutorStack.Screen name="TutorContactDetailScreen" component={TutorContactDetailScreen} />
            </TutorStack.Navigator>
        </NavigationContainer>
    );
}