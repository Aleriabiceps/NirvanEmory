import React from 'react';
import './App.css'; // Import the stylesheet
import { Helmet } from 'react-helmet';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <a href="#leaderboard">Leaderboard</a>
      <a href="#calendar">Calendar</a>
      <a href="#prizes">Prizes</a>
      <a href="https://instagram.com/emoryspoonassassin">Instagram</a>
    </div>
  </nav>
);
<Helmet>
<link
  href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
  rel="stylesheet"
/>
</Helmet>



const IconText = ({ src, alt, text }) => (
  <div className="icon-text">
    <img src={src} alt={alt} />
    <p>{text}</p>
  </div>
);

const Container = () => (
  <section className="container">
    <IconText src="https://emoryspoonassassin.com/spoon.png" alt="Spoon Icon" text="Get your spoon and an assigned target for the week" />
    <IconText src="https://emoryspoonassassin.com/shield.png" alt="Shield Icon" text="Keep Assassinating Targets Till You’re the Last Team Standing" />
    <IconText src="https://emoryspoonassassin.com/bullseye.png" alt="Target Icon" text="Participate in weekly challenges to win cash prizes or the grand prize of $2,000" />
  </section>
);
const Header = () => (
  <header>
    <h1>EMORY SPOON ASSASSIN</h1>
  </header>
  
);


const SignupButton = () => (
  <div className="signup-button">
    <button>Sign Up</button>
  </div>
);

const RulesSection = () => (
  <section className="info-section">
    <div className="content-box">
      <h2>Rules of The Game</h2>
      <p>Spoon Assassin operates on a clear set of rules:</p>
      <ul>
        <li><strong>Assignment of Targets:</strong> Each team of two starts with a discreet assignment of another specific team they must "eliminate".</li>
        <li><strong>Method of Elimination:</strong> Targets are eliminated by tapping them with a spoon. However, a target is immune from elimination if they are holding their spoon or participating in the daily safety challenge.</li>
        <li><strong>Cycle of Assignment:</strong> After eliminating a target, the assassin inherits their target's assignment, perpetuating the cycle.</li>
        <li><strong>Endgame:</strong> The game narrows down with each elimination, continuing until only one triumphant team remains.</li>
      </ul>
      <p>While the rules are straightforward, the game dynamics and strategies ensure a unique and thrilling experience each time.</p>
    </div>
  </section>
);
const Emory = () => (
  <header>
        <div className="badge">From the creators of Emory Marriage Pact</div>
  </header>
  
);
const SafetiesSection = () => (
  <section className="info-section">
    <div className="content-box">
      <h2>The Art of Safeties</h2>
      <p>A safety is a daily task or condition that, when performed or met, grants players temporary immunity from being "assassinated". Some examples include wearing Emory colors, carrying a stuffed animal, or carrying a purse.</p>
    </div>
  </section>
);

const PrizeSection = () => (
  <section className="info-section">
    <div className="content-box">
      <h2>The Prize at Stake</h2>
      <p>Spoon Assassin has multiple opportunities for prizes. Each partnership enters the game by contributing $40. This creates a prize pool of over $5,000.</p>
      <p>The victorious duo doesn't just win the title of supreme assassins, but also bags 60% of the total collected pool, making the stakes even higher!</p>
      <p>Each week, there will be additional challenges with monetary incentive attached. Some examples could be: Assassinate your target within 24 hours of getting them, video your assassination attempt, or get both team members in the same place. These tasks will have smaller prizes, but will ultimately ensure that it's easy to make your initial buy-in back.</p>
    </div>
  </section>
);


const EmorySpoonAssassinApp = () => (
  <div>
    <Navbar />
    <Header />
    <Container />
 
    <SignupButton />
    <main className="main-container">
    <Emory />
      <RulesSection />
      <SafetiesSection />
      <PrizeSection />
    </main>
  </div>
);

export default EmorySpoonAssassinApp;
