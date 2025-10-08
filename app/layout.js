
  import {  Orbitron,Manrope, Exo } from "next/font/google";
  import "./globals.css";



const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});
const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>
            DaMeta1 | The Future of AI-Powered Immersive Digital World
          </title>
          <meta name="description" content="Dive into DaMeta1's immersive digital worlds - education, gaming, entertainment and business. Discover endless opportunities and connect globally."></meta>
          <link rel="canonical" href="https://dmu.dameta1.com/" />
        </head>
        <body
          className={`${orbitron.variable} ${manrope.variable} ${exo.variable}  antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
