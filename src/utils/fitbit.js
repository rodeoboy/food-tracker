// src/utils/fitbit.js
export const getFitbitAuthUrl = () => {
  const clientId = process.env.REACT_APP_FITBIT_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_FITBIT_REDIRECT_URI;
  const scope = 'nutrition';
  return `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
};
