'use client';

import React from 'react';

// No props → always identical render; React.memo prevents unnecessary re-renders.
const MapFrameInner = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886.3191967397586!2d73.1101513!3d18.9915708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9003d56d7df%3A0x6e4663374a8ab3d1!2sPitale%20chowk!5e0!3m2!1sen!2sin!4v1763384333251!5m2!1sen!2sin"
      width="100%"
      height="100%"
      loading="lazy"
      className="dark:brightness-90"
      referrerPolicy="no-referrer-when-downgrade"
      allow="fullscreen"
    />
  );
};

// Memoize to keep the iframe from re-rendering if the parent re-renders.
export const MapFrame = React.memo(MapFrameInner);
