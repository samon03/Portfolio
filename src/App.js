import './App.css';
import MyNavbar from './components/myNavbar/myNavbar.component';
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';

const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
    </div>
  );
}

export default App;
