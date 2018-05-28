import { 
  AppRegistry,
  YellowBox 
} from 'react-native';

import Main from './App/main';

// 阻止isMounted 被废弃的报警
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('app', () => Main);
