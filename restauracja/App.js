import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen' ;
import DummyComponent from './DummyComponent' ;

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
      <Drawer.Screen name="Dummy" component={DummyComponent} />
    
    </Drawer.Navigator>
  )
}



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              contentStyle: {backgroundColor: "#3f2f5"},
              headerStyle: {backgroundColor:"#991410"},
              headerTintColor: "white"
            }}
        >
            <Stack.Screen name="DrawerScreen" 
                          component={DrawerNavigator}
                          options={{
                            title: "To jest mój tytuł"
                          }} />

            <Stack.Screen name="MealsOverview" 
                          component={MealsOverviewScreen}
                          options={{
                            title: "Twoje dania"
                          }}
                          />
            <Stack.Screen name="MealDetails"
                          component={MealDetailScreen}
                          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// name="MealsCategories" 
// component={CategoriesScreen}