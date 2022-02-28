import { useState, useCallback } from 'react';
import axios from 'axios';

function useHttpRequest() {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      const method = requestConfig.method ? requestConfig.method : 'GET';
      const body = requestConfig.body ? requestConfig.body : null;
      let response;

      try {
         switch (method) {
            case 'GET':
               response = await axios.get(requestConfig.url);
               break;
            case 'POST':
               response = await axios.post(requestConfig.url, body);
               break;
            case 'PUT':
               response = await axios.put(requestConfig.url, body);
               break;
            default:
               break;
         }

         if (response.status !== 200) {
            throw new Error('Request failed!');
         }

         if (applyData) applyData(response.data);
      } catch (err) {
         setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
   }, []);

   return { isLoading, error, sendRequest };
};

export default useHttpRequest;
