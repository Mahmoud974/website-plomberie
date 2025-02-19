import Banner from "@/components/Banner";
import Footer from "../components/Footer";
import Informations from "../components/Informations";
import Menu from "../components/Menu";
import TrackingSection from "../components/TrackingSection";

export default function Navbar() {
  return (
    <div>
      <Menu />
      <Banner />
      <TrackingSection />
      <Informations />

      <Footer />
    </div>
  );
}
