'use client';

import React from 'react';

// No props → always identical render; React.memo prevents unnecessary re-renders.
const MapFrameInner = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3272846897644!2d73.1130787!3d19.005294600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9b1ff064199%3A0x49345fe2dbe3676!2sAmar%20Niwas!5e0!3m2!1sen!2sin!4v1764222633468!5m2!1sen!2sin"
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
