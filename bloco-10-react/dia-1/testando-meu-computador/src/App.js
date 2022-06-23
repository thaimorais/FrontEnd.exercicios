import './App.css';
import Footer from './componentes/Footer/footer';
import Greeting from './componentes/Greeting/greeting';
import Header from './componentes/Header';
import Content from './componentes/Main/content';
import Trybe from './componentes/Div/trybe';

function App() {
  return (
    <>
      <Header />
      <Trybe />
      <Content />
      <Greeting name='Ahri' />
      <Greeting name='Vinicius' lastName='Eduardo' />
      <Footer />
    </>
  );
}

export default App;
