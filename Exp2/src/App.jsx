import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css'; 

const Homepage = () => (
  <div>
    <h1> Homepage</h1>
    <nav>
      <Link to="/about">About Us</Link> | <Link to="/product/123">Product 123</Link>
    </nav>
  </div>
);

const About = () => (
  <div>
    <h1> About Us</h1>
    <Link to="/">Back Home</Link>
  </div>
);

const ProductPage = () => {
  const { id } = useParams(); 
  return (
    <div>
      <h1> Product Page</h1>
      <h2>ID: {id}</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};

const NotFound = () => (
  <div style={{color: 'red'}}>
    <h1>404 Page Not Found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;