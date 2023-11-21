import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nba.app',
  appName: 'initiation',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
