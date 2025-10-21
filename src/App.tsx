import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Problems from "./components/Problems";
import Product from "./components/Product";
import BeforeAfter from "./components/BeforeAfter";
import Bonus from "./components/Bonus";
import CTA from "./components/CTA";
import Credibility from "./components/Credibility";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Código oficial do Pixel
    !(function (f: any, b, e, v, n?, t?, s?) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    // Inicializa Pixel com o seu ID
    fbq("init", "24626278070348209");
    fbq("track", "PageView"); // dispara evento ao carregar a página
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Problems />
      <Product />
      <BeforeAfter />
      <Bonus />
      <CTA />
      <Credibility />
      <Footer />
    </div>
  );
}

export default App;
