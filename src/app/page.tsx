import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import FAQ from "@/components/Home/Faq/Faq";
import Marquee from "@/components/Home/Marquee/Marquee";
import Location from "@/components/Home/Location/Location";


export default function Home() {
  return (
   <>
<Hero/>
<WhyUs/>
<Services/>
<Marquee/>
<FAQ/>
<Location/>
   </>
  );
}
