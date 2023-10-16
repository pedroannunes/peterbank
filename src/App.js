import Header from './componentes/Header';
import PrimeiraSection from './componentes/PrimeiraSection';
import SegundaSection from './componentes/SegundaSection';
import TerceiraSection from './componentes/TerceiraSection';
import QuartaSection from './componentes/QuartaSection';
import Footer from './componentes/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PrimeiraSection />
      <SegundaSection />
      <QuartaSection />
      <TerceiraSection />
      
      <Footer />
      
    </div>
  );
}

export default App;
