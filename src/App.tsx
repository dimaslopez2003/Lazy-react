import React, { Suspense } from 'react';

const ImagesContainer = React.lazy(() => import('./Component/ImagesContainer'));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>NASA Images Gallery</h1>
      <Suspense fallback={<div>Cargando imagenes</div>}>
        <ImagesContainer />
      </Suspense>
    </div>
  );
}

export default App;
