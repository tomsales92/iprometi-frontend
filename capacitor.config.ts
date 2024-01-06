import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iprometi.app',
  appName: 'iprometi-app',
  webDir: 'dist/iprometi-app/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
