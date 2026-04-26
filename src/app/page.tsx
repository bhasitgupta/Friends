"use client";

import { useState, useEffect } from "react";

const shayeris = [
  "Muskan Ka Koi Mol Nhi Hota,\n\nKuch Rishton Ka Tol Nhi Hota,\n\nDost To Mil Jate Hai Har Raste Par\n\nLekin Har Koi Tumhari Tarah Anmol Nhi Hota",
  '"Apni nigaahon se Na dekh khudko, Hira bhi tujhe Pathhar lagega,\n\nSab kehte honge Chaand ka tukda hai tu,\n\nMeri nazar se dekh,\n\nChhand bhi tera tukda lagega..!!',
  "Kya ajuba ho tum, ye tumhein koi nahi bataega,\n\nKoi dekh le tumhein to seedha ishq mein pad jaayega.\n\nSab chaand ko sundar batate hain, Lekin\n\nChaand ka kya muqabla tumse,\n\nChaand tumhari jaisi aankhen kahan se laayega..",
  "Dekh Kar Aapki Muskurahat, Hum Hosh Gawa Baithe..!!\n\nHum Hosh Main Hi Aane Wale The, Aap Fir Se Muskura Baithe..!!",
  "Usko chaand Duniya ko falak likh diya\nmene jannat ko bss uski ek jhalak likh diya\nAur kal koi mujhe puchra tha usse mera rishta kya h\ntab mene usko khudko shayer aur usko gazal likh diya",
  "I Promise me puri zindagi tumhari hardisk me sirf achi memory store karunga\n512 Gb Ram ki kasam\ntumhe kabhi hang nahi hone dunga\npyaar toh duniya karti h mein toh tumse pair karunga\nwo bhi bluetooth ke saath\ntumhare jindagi mein jo bhi musibaat aajai\nusko mere pyaar ke antivirus ke se guzarna padega\nkya tum puri zindagi mujhe apna password banana chahati ho",
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [activeGift, setActiveGift] = useState<number | null>(null);

  // Heart drop effect
  useEffect(() => {
    if (!started) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'falling-heart';
      heart.style.left = `${e.clientX - 12}px`;
      heart.style.top = `${e.clientY - 12}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [started]);

  if (!started) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--pink-light)' }}>
        <h1 className="romantic-title" style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: 'var(--font-dancing)' }}>For My Best Friend</h1>
        <button 
          onClick={() => setStarted(true)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            background: 'var(--pink-main)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 105, 180, 0.4)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Open Your Gift 🎁
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-pulse"></div>
      {/* Invisible audio player using YouTube iframe */}
      <iframe 
        width="0" 
        height="0" 
        src="https://www.youtube.com/embed/GVizJ_jpUnw?autoplay=1&loop=1&playlist=GVizJ_jpUnw" 
        frameBorder="0" 
        allow="autoplay"
        style={{ display: 'none' }}
      ></iframe>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', padding: '2rem 1rem' }}>
        <div className="heart-container" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h1 className="romantic-title" style={{ fontSize: '4.5rem', margin: 0, fontFamily: 'var(--font-dancing)' }}>
            Caramel
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: 'var(--pink-dark)', maxWidth: '600px', margin: '1rem auto 0 auto', lineHeight: '1.6' }}>
            I am so happy everything is sorted out between us after so long. <br/> You are such an amazing friend, and here is something special just for you! 💖
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {shayeris.map((_, idx) => (
            <div 
              key={idx}
              className="gift-box glass-panel"
              onClick={(e) => {
                e.stopPropagation(); 
                setActiveGift(idx);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                borderRadius: '16px',
                cursor: 'pointer',
                minHeight: '200px'
              }}
            >
              <div style={{ fontSize: '5rem' }}>💝</div>
              <div style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--pink-dark)', fontFamily: 'var(--font-dancing)' }}>Gift {idx + 1}</div>
            </div>
          ))}
        </div>

        {activeGift !== null && (
          <div 
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(255,228,225,0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '1rem',
              boxSizing: 'border-box'
            }}
            onClick={() => setActiveGift(null)}
          >
            <div 
              className="hologram"
              style={{
                padding: '3rem 2rem',
                maxWidth: '600px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                color: 'var(--text-main)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveGift(null)}
                style={{
                  position: 'absolute',
                  top: '1rem', right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--pink-dark)',
                  zIndex: 10
                }}
              >
                ✖
              </button>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', animation: 'heartPump 1s infinite' }}>✨💖✨</div>
              <p style={{ 
                fontSize: '1.8rem', 
                lineHeight: '1.6', 
                whiteSpace: 'pre-line',
                fontFamily: 'var(--font-dancing)',
                textShadow: '1px 1px 2px rgba(255, 105, 180, 0.3)',
                color: 'var(--text-main)',
                margin: 0
              }}>
                {shayeris[activeGift]}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
