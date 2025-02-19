import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import FAQ from "@/components/Home/Faq/Faq";
import Marquee from "@/components/Home/Marquee/Marquee";
import Location from "@/components/Home/Location/Location";
import Location1 from "@/components/Home/Location/Location1";
import HeroHealthcare from "@/components/Home/HeroHealth/HeroHealthcare";
import Location3 from "@/components/Home/Location/Location3";
import Testimonials from "@/components/Home/Testimonials/Testimonials"; 



export default function Home() {
  return (
   <>
<Hero/>
<WhyUs/>
<Services/>
<Marquee/>
<HeroHealthcare/>
<FAQ/>
<Testimonials/>
<Location/>
<Location1/>
<Location3/>

   </>
  );
}
