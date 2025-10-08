import React, { useState } from 'react';
import type { NavLink } from './types';

// --- CONSTANTS ---

// All image paths now point to a local /images/ directory for easier management.
// The user needs to create a public/images folder and place the assets there.

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Chi Siamo', href: '#about' },
  { name: 'Catalogo', href: '#products' },
  { name: 'Ordina', href: '#order' },
  { name: 'Contatti', href: '#contact' },
  { name: 'Galleria', href: '#gallery' },
];

const GALLERY_IMAGES: string[] = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  //'/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
  '/images/gallery-12.jpg',
  //'/images/gallery-13.jpg',
  '/images/gallery-14.jpg',
  '/images/gallery-15.jpg',
  '/images/gallery-16.jpg',
  '/images/gallery-17.jpg',
];

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
    <svg className={className} fill="url(#instagram-gradient)" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id="instagram-gradient" cx="0.3" cy="1" r="1">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="25%" stopColor="#DD2A7B" />
          <stop offset="50%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </radialGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.442c-3.117 0-3.483.011-4.71.069-2.776.127-3.951.848-4.085 3.295-.057 1.22-.068 1.58-.068 4.634s.011 3.413.068 4.634c.134 2.447 1.309 3.168 4.085 3.295 1.227.058 1.593.069 4.71.069 3.117 0 3.482-.011 4.71-.069 2.777-.127 3.952-.848 4.086-3.295.057-1.22.068-1.58.068-4.634s-.011-3.413-.068-4.634c-.134-2.447-1.309-3.168-4.086-3.295-1.227-.058-1.593-.069-4.71-.069zM12 6.873c-2.849 0-5.152 2.304-5.152 5.152s2.303 5.152 5.152 5.152 5.152-2.304 5.152-5.152-2.303-5.152-5.152-5.152zm0 8.442c-1.815 0-3.29-1.475-3.29-3.29s1.475-3.29 3.29-3.29 3.29 1.475 3.29 3.29-1.475 3.29-3.29 3.29zm4.965-8.127c-.838 0-1.517.68-1.517 1.518s.68 1.518 1.517 1.518 1.518-.68 1.518-1.518-.68-1.518-1.518-1.518z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
    <svg className={className} fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const SOCIAL_LINKS = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/alewailin/',
        icon: InstagramIcon,
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/fattoriailtasso',
        icon: FacebookIcon,
    },
];


// --- HELPER COMPONENTS ---

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-yellow-400">{title}</h2>
      {children}
    </div>
  </section>
);


// --- MAIN SECTIONS COMPONENTS ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <img className="h-14 w-14 rounded-full" src="/images/logo.png" alt="IL TASSO Logo" />
              <span className="text-white text-3xl font-display tracking-wide">IL TASSO</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-zinc-300 hover:bg-yellow-400 hover:text-zinc-900 px-3 py-2 rounded-md text-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="ml-6 flex items-center space-x-4">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:opacity-80 transition-opacity">
                        <span className="sr-only">{link.name}</span>
                        <link.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-zinc-300 hover:bg-yellow-400 hover:text-zinc-900 block px-3 py-2 rounded-md text-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-zinc-700">
            <div className="flex justify-center items-center space-x-6">
                 {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:opacity-80 transition-opacity">
                        <span className="sr-only">{link.name}</span>
                        <link.icon className="h-7 w-7" />
                    </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


const Hero: React.FC = () => (
    <section id="home" className="relative h-[60vh] md:h-[80vh] min-h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{backgroundImage: "url('/images/farmers.jpg')" , backgroundPosition: "center 25%" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-yellow-400 drop-shadow-lg">Il Tasso</h1>
            <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto text-zinc-200">Piccolo fattoria ecologica familiare.</p>
            <div className="mt-8">
                <a href="#order" className="bg-yellow-400 text-zinc-900 font-bold py-3 px-8 rounded-full text-xl hover:bg-yellow-300 transition-colors duration-300 shadow-lg transform hover:scale-105 inline-block">
                    Ordina Ora
                </a>
            </div>
        </div>
    </section>
);


const About: React.FC = () => (
    <Section id="about" title="Chi Siamo">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2">
                <img src="/images/farmers2.jpg" alt="I contadini de Il Tasso" className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto border-4 border-yellow-400 shadow-xl" />
            </div>
            <div className="md:w-1/2 text-lg text-zinc-300 space-y-4 text-center md:text-left">
                <p>
                   ALEX and GAIA! L'Azienda Agricola "Il Tasso" nasce dalla passione per la natura e dal desiderio di riscoprire i sapori autentici della nostra terra. Situata tra le colline lussureggianti, la nostra fattoria è un'oasi di tranquillità dove coltiviamo con metodi naturali e sostenibili.
                </p>
                <p>
                    Ogni prodotto che offriamo è il frutto del nostro lavoro quotidiano, un impegno che portiamo avanti con dedizione per garantire freschezza e qualità. Crediamo in un'agricoltura che rispetta i cicli della natura e valorizza le tradizioni locali.
                </p>
                <p>
                    Venite a trovarci per scoprire il vero gusto dei prodotti fatti con amore.
                </p>
            </div>
        </div>
    </Section>
);

const Gallery: React.FC = () => (
    <Section id="gallery" title="Galleria" className="bg-zinc-800/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                    <img src={src} alt={`Veduta della fattoria ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
            ))}
        </div>
    </Section>
);

const Products: React.FC = () => (
    <Section id="products" title="Il Nostro Catalogo">
        <div className="max-w-5xl mx-auto">
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-zinc-700">
                
                <div className="p-8 md:p-12 text-center">
                    <h3 className="text-3xl font-display text-yellow-400 mb-4">Freschezza Stagionale</h3>
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
                        I nostri prodotti seguono il ritmo della natura. L'assortimento completo e aggiornato è sempre disponibile sul nostro catalogo WhatsApp. Clicca qui sotto per scoprire le prelibatezze di questa settimana!
                    </p>
                    <a 
                        href="https://wa.me/c/393489986824" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-xl inline-flex items-center space-x-3 transition-colors duration-300 shadow-lg transform hover:scale-105"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
                        </svg>
                        <span>Vedi Catalogo su WhatsApp</span>
                    </a>
                </div>
                
            </div>
        </div>
    </Section>
);

const Order: React.FC = () => (
    <Section id="order" title="Ordina i Nostri Prodotti" className="bg-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center text-zinc-300">
            <p className="text-xl mb-8">
                Vuoi ricevere i nostri prodotti di stagione direttamente a casa tua? È semplicissimo! Contattaci su WhatsApp per conoscere la disponibilità della settimana e completare il tuo ordine.
            </p>
            <a 
                href="https://wa.me/393489986824"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl inline-flex items-center space-x-3 transition-colors duration-300 shadow-lg transform hover:scale-105"
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
                </svg>
                <span>Ordina su WhatsApp</span>
            </a>
        </div>
    </Section>
);

const Contact: React.FC = () => (
    <Section id="contact" title="Contatti">
        <div className="max-w-4xl mx-auto text-center text-zinc-300">
            <p className="text-xl mb-8">
                Siamo aperti per visite e acquisti diretti. Chiamaci o scrivici per qualsiasi informazione!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                    <h3 className="text-2xl font-display text-yellow-400 mb-2">Indirizzo</h3>
                    <p>Via Ventena, 4158</p>
                    <p>Montefiore Conca (RN), Italia</p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                    <h3 className="text-2xl font-display text-yellow-400 mb-2">Telefono</h3>
                    
                    <p>+39 348 998 6824 (WhatsApp)</p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                    <h3 className="text-2xl font-display text-yellow-400 mb-2">Email</h3>
                    <p>alexwlloyd@msn.com</p>
                    <p>wisforwailin@gmail.com</p>
                </div>
            </div>
        </div>
    </Section>
);

const Footer: React.FC = () => (
    <footer className="bg-zinc-900 border-t border-zinc-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-zinc-400">
            <div className="flex justify-center space-x-6 mb-4">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:opacity-80 transition-opacity">
                        <span className="sr-only">{link.name}</span>
                        <link.icon className="h-8 w-8" />
                    </a>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} IL TASSO P.iva 04691360400.</p>
        </div>
    </footer>
);

// --- APP COMPONENT ---

export default function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Order />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}