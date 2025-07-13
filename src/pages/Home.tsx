import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Work from "../components/Work";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <About />
        <Work
          text="Apex Architecture"
          onClick={() => null}
          sectionImage="bg-img-1.webp"
        />
        <Work
          text="Dionysos Resorts"
          onClick={() => null}
          sectionImage="bg-img-3.webp"
        />
        <Work
          text="Argus Eyewear"
          onClick={() => null}
          sectionImage="bg-img-2.webp"
        />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default Home;
