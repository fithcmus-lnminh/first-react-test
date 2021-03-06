import './App.css';
import Content from "./Content/Content.js"
import TopMenu from './TopMenu/TopMenu.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
        <TopMenu/>
        <Header/>
        <div className="container">
          <div className="row">
            <Content title="test props" imageFile="01.jpg" content="This is content1"/>
            <Content title="test props2" imageFile="02.jpg"content="This is content2"/>
            <Content title="test props3" imageFile="03.jpg" content="This is content3"/>
            <Content title="test props" imageFile="01.jpg" content="This is content1"/>
            <Content title="test props2" imageFile="02.jpg"content="This is content2"/>
            <Content title="test props3" imageFile="03.jpg" content="This is content3"/>
            <Content title="test props" imageFile="01.jpg" content="This is content1"/>
            <Content title="test props2" imageFile="02.jpg"content="This is content2"/>
            <Content title="test props3" imageFile="03.jpg" content="This is content3"/>        
          </div>
        </div>
        <Footer content="Copyright &copy; by Lê Nhật Minh VNU-HCMUS"/>
    </div>
  );
}

export default App;
