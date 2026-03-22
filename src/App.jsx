import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProposalVideos from './components/ProposalVideos';
import ArtisticVideos from './components/ArtisticVideos';
import Gallery from './components/Gallery';
import ProposalPhotos from './components/ProposalPhotos';
import ArtisticPhotos from './components/ArtisticPhotos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <ProposalVideos />
      <ArtisticVideos />
      <Gallery />
      <ProposalPhotos />
      <ArtisticPhotos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
