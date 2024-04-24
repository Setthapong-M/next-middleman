import { Inter } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'
import Navbar from "./components/OrganismDesktop/Navbar";
import NavberMd from "./components/OrganismMobile/NavberMd";

const sukhumvitText = localFont({src:'../../public/fonts/SukhumvitSet-Text.ttf', variable: '--font-sukhumvitText'})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sukhumvitText.variable} font-sans`}>
        <div className="hidden md:block sticky top-0">
          <Navbar />
        </div>
        
        {children}
        <div className="md:hidden fixed bottom-0 inset-x-0">
          {/* <NavberMd /> */}
        </div>
      </body>
    </html>
  );
}
