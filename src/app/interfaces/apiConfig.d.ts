declare module './apiConfig.json' {
    export const apiConfig: {
      baseUrl: string;
      apiKey: string;
    };
  }

  import apiConfig = require('./apiConfig.json');

  //I am fucking tired