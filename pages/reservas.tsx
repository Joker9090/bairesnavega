import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Página de redirección a sitio externo
const Reservas = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Redireccionar a la URL externa
    window.location.href = 'https://sites.google.com/view/kiwivelero';
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirigiendo a reservas...</p>
    </div>
  );

  /* Código original con iframe (comentado por problemas de CORS)
  return (
    <div className={usc(styles, ['main'])}>
      <Header />
      <div className={usc(styles, ['iframe-container'])}>
        <iframe 
          src="https://sites.google.com/view/kiwivelero" 
          title="Reservas Kiwi Velero"
          width="100%" 
          height="800px" 
          frameBorder="0" 
          allowFullScreen
        />
      </div>
      <FooterWaves />
      <Footer />
    </div>
  );
  */
};

export default Reservas;
