import React, { useEffect } from 'react';

export const Desactive = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Bloquer F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Bloquer Ctrl+Shift+I (Inspecter)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Bloquer Ctrl+Shift+C (Sélecteur d'élément)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
    };

    // Ajouter les événements
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Nettoyage des événements
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // Ou tu peux retourner un autre JSX si nécessaire
};

