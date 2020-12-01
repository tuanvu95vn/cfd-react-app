import './App.css';
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
                <main className="mainwrapper">
                    <Home />
                </main>
            <Footer />
            
        </>
    );
}

export default App;
