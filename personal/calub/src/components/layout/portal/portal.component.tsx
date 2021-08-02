import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalComponent: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById('portals')) : null;
};

export default PortalComponent;
