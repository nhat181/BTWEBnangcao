import React from 'react';
import './App.css';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import MainContent from './Components/maincontent';
import Footer from './Components/footer';

function App() {
return (
<div className="App">
<Header />
<div className="layout">
<Sidebar />
<MainContent />
</div>
<Footer />
</div>
);
}

export default App;
