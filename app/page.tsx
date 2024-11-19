"use client";
import { RefObject, createRef, useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import "./style.css";

export default function Home() {
  const iframeRef = createRef<any>();

  const [mainText, setMainText] = useState('Branding & Consulting');

  return (
    <>
      <meta charSet="utf-8" />
      <title>Jupiter House</title>
      <meta name="description" content="Jupiter House " />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta
        name="keywords"
        content="multimedia production company, photography, videography"
      />
      {/* <link rel="stylesheet" href="style.css" type="text/css" /> */}
      <body>
      <header>
        <div className="navbar">
          <div className="navburger" id="navBurger">
            <div className="lines" id="lines">
              <span className="" id=""></span>
              <span className="" id=""></span>
              <span className="" id=""></span>
            </div>

            <span className="ajupiter" id="aJupiter"></span>
          </div>

          <ul className="menu" id="menu">
            <li>
              <a href="index.html">
                <h4>home</h4>
              </a>
            </li>
            <li>
              <a href="designs.html">
                <h4>designs</h4>
              </a>
            </li>
            <li>
              <a href="services.html">
                <h4>services</h4>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <h4>contact</h4>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className="indexbanner" style={{ background: `url('img/banners/jupiter.jpg')`}}>
        <img className="jupiterhouse self-center" src="img/jupiterhouse.png" alt="" />

        <div className="bannercopy">
          <input value={mainText} onChange={(e) => setMainText(e.target.value)} className="text-2xl bg-transparent max-w-screen w-[320px] p-2 m-2"></input>
        </div>
      </section>

      <section
        className="designsbanner"
        style={{
          backgroundPosition: "left",
          borderRadius: 0,
          height: "auto",
        }}
      >
        <article className="">
          <div className="body">
            <h1>Turn your business aspirations into orbits of success!</h1>
            <textarea value="At Jupiter House, we understand your brand is more than a just a
              logo - it’s a unique identity that sets you apart in a crowded
              marketplace.
              We are dedicated and committed to crafting compelling brand
              experiences and providing expert cons ulting advice to propel your
              business to new heights." contentEditable></textarea>
          </div>
        </article>

        <div className="flexer">
          <div className="points">
            <h3>Branding Solutions</h3>
            <h4>Discover your Cosmic Identity</h4>
            <p>
              Craft your vision powerfully with our tailor-made branding
              solutions and leave an unforgettable mark in your market. From
              brand identity developmet to creating a cohesive brand universe
              our team is here to make your makr stand out in a crowded galaxy.
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>

          <div className="points">
            <h3>Business Consultation</h3>
            <h4>Galactic Consulting Wisdom</h4>
            <p>
              Navigate the vast expanse of business challenges with confidence.
              Our seasones consultands offer insughtful advice through the
              gravitational pulls of entreperneurship, ensuring, you stay the
              course to success.
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="flexer">
          <div className="points">
            <h3>Website Creation</h3>
            <h4>The Intergalactic Nexus</h4>
            <p>
              Your online presence is crucial. Forge your digital space with
              skilled web developers, who can blend form and function, creating
              websites that not only look stunning but also function seamlessly,
              designed to propel your brand into the online cosmos.
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>

          <div className="points">
            <h3>Logo Creation</h3>
            <h4>Your Celestial Signature</h4>
            <p>
              As the face of your business, your logo must carry the essence of
              your business and laeve a lasting impression on your audience. Let
              us design a unique identity for your brand, that not only will be
              visually appealing but will grasp alls attention.
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="flexer">
          <div className="points">
            <h3>Logo Animation</h3>
            <h4>Stellar Motion</h4>
            <p>
              Breathe life into your brand with our logo animation services. Our
              animators infuse your vision with motion and passion, adding a
              dynamic dimension that leave your audience engaged. Be it logos or
              motion graphics, we love playing being creatinist.
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>

          <div className="points">
            <h3>Infographics</h3>
            <h4>Cosmic Storytelling</h4>
            <p>
              Communicate complex ideas with the simplicity and elegance of a
              well-designed infographic. Just as constellations tell stories in
              the night sky, our infographics narrate your data in a visually
              compelling manner. Illuminate your audience with captivating
              visuals that guide them through the cosmic narrative of your
              business
            </p>
            <button type="button" name="button" className="btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="space3"></div>

        <div className="slider-container">
          <div className="slide">
            <img
              src="img/logos/phasevintage/obwlogos/whitephase.png"
              alt="Phase Vintage"
            />
          </div>
          <div className="greatwolflogo">
            <img
              src="img/logos/greatwolf/obwlogos/whitegreatwolf.png"
              alt="Great Wolf"
            />
          </div>
          <div className="slide">
            <img
              src="img/logos/giantspictures/obwlogos/whitegiants.png"
              alt="The Giant's Pictures"
            />
          </div>
          <div className="slide">
            <img
              src="img/logos/azpdesign/obwlogos/whiteazp.png"
              alt="AZP Design"
            />
          </div>
          <div className="miraclelogo">
            <img
              src="img/logos/miraclepaving/obwlogos/whitemiracle.png"
              alt="Medrano Construction"
            />
          </div>
          <div className="medranologo">
            <img
              src="img/logos/medranoconstruction/obwlogos/medranowhitelogo.png"
              alt="Medrano Construction"
            />
          </div>
          <div className="alphalogo">
            <img
              src="img/logos/alpha/obwlogos/alphawhitelogo.png"
              alt="Alpha Development"
            />
          </div>
          <div className="tieselogo">
            <img
              src="img/logos/tiesestreetz/obwlogos/whitetiesestreetz.png"
              alt="Tiese Streetz"
            />
          </div>
        </div>
      </section>

      <div className="space3"></div>

      <section className="indexbanner">
        <article className="">
          <div className="body">
            <h1>Turn your business aspirations into orbits of success! 🚀</h1>
            <p>
              At Jupiter House, we understand your brand is more than a just a
              logo - it’s a unique identity that sets you apart in a crowded
              marketplace.{" "}
            </p>
            <p>
              We are dedicated and committed to crafting compelling brand
              experiences and providing expert consulting advice to propel your
              business to new heights.
            </p>
          </div>
        </article>
      </section>

      <footer>
        <h1>Be a Part of our Universe </h1>
        <div className="slider-container">
          <div className="phase">
            <img
              src="img/logos/phasevintage/obwlogos/whitephaseletter.png"
              alt="Phase Vintage"
            />
          </div>
          <div className="greatwolf" id="gwolf">
            <img
              src="img/logos/greatwolf/obwlogos/whitegreatwolfletter.png"
              alt="Great Wolf"
            />
          </div>
          <div className="slide">
            <img
              src="img/logos/giantspictures/obwlogos/whitegiantsletter.png"
              alt="The Giant's Pictures"
            />
          </div>
          <div className="azpdesign" id="azpd">
            <img
              src="img/logos/azpdesign/obwlogos/whiteazpletter.png"
              alt="AZP Design"
            />
          </div>
          <div className="slide">
            <img
              src="img/logos/miraclepaving/obwlogos/whitemiracleletter.png"
              alt="Medrano Construction"
            />
          </div>
          <div className="medrano">
            <img
              src="img/logos/medranoconstruction/obwlogos/medranowhiteletterlogo.png"
              alt="Medrano Construction"
            />
          </div>
          <div className="slide">
            <img
              src="img/logos/alpha/obwlogos/alphawhiteletterlogo.png"
              alt="Alpha Development"
            />
          </div>
          <div className="tiese">
            <img
              src="img/logos/tiesestreetz/obwlogos/whitetiesestreetz.png"
              alt="Tiese Streetz"
            />
          </div>
        </div>

        <h1>Take the Leap</h1>

        <button type="button" name="button">
          Schedule
        </button>
        <nav>
          <ul className="footermenu" id="menu">
            <h3>Services</h3>
            <li>
              <a href="index.html">
                <h4>home</h4>
              </a>
            </li>
            <li>
              <a href="designs.html">
                <h4>designs</h4>
              </a>
            </li>
            <li>
              <a href="services.html">
                <h4>services</h4>
              </a>
            </li>
          </ul>
          <ul className="footermenu" id="menu">
            <li>
              <h3>About</h3>{" "}
            </li>

            <li>
              <a href="crew.html">
                <h4>crew</h4>
              </a>
            </li>
            <li>
              <a href="credits.html">
                <h4>credits</h4>
              </a>
            </li>
            <li>
              <a href="careers.html">
                <h4>careers</h4>
              </a>
            </li>
          </ul>
          <ul className="footermenu" id="menu">
            <h3>Resources</h3>
            <li>
              <a href="coder.html">
                <h4>coder</h4>
              </a>
            </li>
            <li>
              <a href="credits.html">
                <h4>credits</h4>
              </a>
            </li>
            <li>
              <a href="careers.html">
                <h4>careers</h4>
              </a>
            </li>
          </ul>
        </nav>

        <h4>
          It takes a consultation to realize, we're who you've been searching
          for
        </h4>

        <img className="jupiterhouse" src="img/jupiterhouse.png" alt="" />
      </footer>
      <p>All Rights Reserved Jupiter House. 2024</p>
      </body>
    </>
  );
}
