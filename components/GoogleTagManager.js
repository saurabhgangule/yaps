import React, { useEffect } from 'react';

const GoogleTagManagerScript = () => {
  useEffect(() => {
    // Define the Google Analytics script URL
    const scriptUrl = 'https://www.googletagmanager.com/gtag/js?id=G-JY62XD8WSB';

    // Create a script element
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-JY62XD8WSB');
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during component mount

  return <></>; // Return an empty fragment or any other desired component
};

export default GoogleTagManagerScript;
