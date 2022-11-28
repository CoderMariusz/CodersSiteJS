import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../../styles/fotter/footer.css';

function Footer() {
  return (
    <section className='footer'>
        <h2>Coders JS</h2>
        <div className="footer-nav">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </div>
    <address className='footer-address'>
    <p>87 Park Green</p>
    <p>WF6 1AN Normanton</p>
    <p>Great Britain</p>
    </address>
    <div className="social-icons">
        <Image src="/assets/icon-instagram.svg" width={24} height={24}alt="instagram"/>
    </div>
    </section>
  );
}

export default Footer;
