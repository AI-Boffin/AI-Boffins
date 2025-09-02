'use client';

import { useEffect } from 'react';

export default function HashNavigation() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      if (typeof window === 'undefined') return;
      
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on initial load
    handleHashNavigation();

    // Also listen for hash changes
    const handleHashChange = () => {
      handleHashNavigation();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null; // This component doesn't render anything
}
