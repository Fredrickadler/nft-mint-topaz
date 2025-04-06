import '../public/styles.css';
import Script from 'next/script';

export default function Home() {
 return (
   <div id="app">
     <div className="skeleton"></div>
     <div id="content" style={{ display: 'none' }}>
       <h1>Mint Your NFT</h1>
       <button id="mintButton">Confirm Mint</button>
     </div>
     <Script src="/script.js" strategy="afterInteractive" />
   </div>
 );
}

