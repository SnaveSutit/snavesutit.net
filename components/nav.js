import Link from 'next/link';
import React from "react";
const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Nav = ({ path }) => (
  <nav>
    <ul>
      {links.map(
        ({ key, href, label }) => (
          <li key={key}
            className={href === path ? "is-selected" : ""}
          >
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        )
      )}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        background: linear-gradient(90deg, #000429 0%, #120029 0.01%, #001A28 100%), #141414;
      }
      nav {
        position:fixed;
        top:0;
        left:0;
        z-index:100;
        text-align: center;
        width:calc(100vw + 16px);
        height:64px;
        background-color:rgba(0, 0, 0, 0.69);
      }
      ul {
        padding:0;
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 64px;
      }
      li {
        display: flex;
        padding: 6px 0px;
        margin: 0px 64px;
      }
      a {
        color: #067df7;
        font-size:32px;
        text-decoration: none;
        color:white;
       }
       .is-selected{
         border-bottom:3px solid white;
       }
    `}</style>
  </nav>
);

export default Nav;
