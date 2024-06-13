// src/components/Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const history = useNavigate();
    console.log("Callback");
  useEffect(() => {
    const fetchToken = async (code) => {
      const clientId = process.env.REACT_APP_FITBIT_CLIENT_ID;
      const clientSecret = ''; // You might want to handle this securely
      const redirectUri = process.env.REACT_APP_FITBIT_REDIRECT_URI;

      const response = await axios.post('https://api.fitbit.com/oauth2/token', null, {
        params: {
          client_id: clientId,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
          code,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
      });
      console.log(response.data);
      const { access_token } = response.data;
      localStorage.setItem('fitbit_token', access_token);
      history('/');
    };

    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    if (code) {
      fetchToken(code);
    }
  }, [history]);

  return <div>Loading...</div>;
};

export default Callback;
