/**
 * @format
 */

import {AppRegistry} from 'react-native';
import listadoDatosContainer from './src/containers/listadoDatosContainer'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => listadoDatosContainer);
