import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

import Home from './screens/home';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () =>
    gestureHandlerRootHOC(Home)
  )
}