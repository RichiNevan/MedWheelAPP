import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Nord from '../pagine/direzioni/dir1Nord';
import NordEst from '../pagine/direzioni/dir2NordEst';
import Est from '../pagine/direzioni/dir3Est';
import SudEst from '../pagine/direzioni/dir4SudEst';
import Cervo from '../pagine/lune/totAnim/6cervo';


type PageStackParamList = {
  Nord: undefined;
  Cervo: undefined;
  Topic3: undefined;
};

const Stack = createStackNavigator<PageStackParamList>();

const PageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Nord"
        component={Nord}
        options={{
          headerStyle: { backgroundColor: 'lightblue' },
          headerTitle: 'Topic 1 Header',
          headerTintColor: 'darkblue',
        }}
      />
      <Stack.Screen
        name="Cervo"
        component={Cervo}
        options={{
          headerStyle: { backgroundColor: 'pink' },
          headerTitle: 'Cervo',
          headerTintColor: 'red',
        }}
      />
      <Stack.Screen
        name="Topic3"
        component={Est}
        options={{
          headerStyle: { backgroundColor: 'lightgreen' },
          headerTitle: 'Topic 3 Header',
          headerTintColor: 'green',
        }}
      />
    </Stack.Navigator>
  );
};

export default PageStack;