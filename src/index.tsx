import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/md-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { addLocale } from 'primereact/api';
import { store } from './store'
import { Provider } from 'react-redux'

addLocale('pl', {
  firstDayOfWeek: 1,
  dayNames: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  dayNamesShort: ['nie', 'pon', 'wt', 'śr', 'czw', 'pi', 'sob'],
  dayNamesMin: ['ND', 'PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO'],
  monthNames: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  monthNamesShort: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  today: 'Dziś',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
