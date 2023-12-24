import { AboutUs } from './_components/about-us/about-us';
import { ClientReview } from './_components/client-review/client-review';
import { ContactUs } from './_components/contact-us/contact-us';
import { Hero } from './_components/hero/hero';
import { OurService } from './_components/our-service/our-service';
import { OurTeam } from './_components/our-team/our-team';
import { WhyChooseUs } from './_components/why-choose-us/why-choose-us';

export default function HomePage() {
  return (
    <main className=''>
      <Hero />
      <OurService />
      <AboutUs />
      <WhyChooseUs />
      <OurTeam />
      <ClientReview />
      <ContactUs />
    </main>
  );
}
