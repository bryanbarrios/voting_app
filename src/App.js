import React from 'react';
import { ErrorAlert } from './components/alerts/ErrorAlert';
import { SuccessAlert } from './components/alerts/SuccessAlert';
import { WarningAlert } from './components/alerts/WarningAlert';

function App() {
  return (
    <>
      <h1 className="m-4 text-lg font-semibold">Demo</h1>
      <SuccessAlert title="Hecho" body="Esto es un mensaje de éxito." />
      <ErrorAlert title="Error" body="Esto es un mensaje de error." />
      <WarningAlert
        title="Precaución"
        body="Esto es un mensaje de precaución."
      />
    </>
  );
}

export default App;
