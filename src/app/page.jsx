import Image from "next/image";
import Navbar from "./components/OrganismDesktop/Navbar";
import FooterMd from "./components/OrganismDesktop/FooterMd";
import Heading1 from "./components/OrganismDesktop/Heading1";
import Heading2 from "./components/OrganismDesktop/Heading2";
import Heading3 from "./components/OrganismDesktop/Heading3";
import Heading4 from "./components/OrganismDesktop/Heading4";
import Negotiation from "./components/OrganismDesktop/Negotiation";
import Heading5 from "./components/OrganismDesktop/Heading5";

export default function Home() {
  return (
    <main>
      <Heading1 />
      <Negotiation />
      <Heading2 />
      <Heading3 />
      <Heading4 />
      <Heading5 />
      <FooterMd />

    </main>
  );
}