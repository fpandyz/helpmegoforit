import { FooterMobile } from '@/components/FooterMobile/FooterMobile';
import { Buzzword } from '@/components/Buzzword/Buzzword';
import { Conditions } from '../components/Conditions/Conditions';
import { Footer } from '../components/Footer/Footer';
import { ResultMobile } from '../components/ResultMobile/ResultMobile';
import { Result } from '../components/Result/Result';
import { Learn } from '../components/Learn/Learn';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout/Layout';
import { About } from '../components/About/About';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Learn />
      <ResultMobile />
      <Result />
      <Buzzword />
      <Conditions />
      <Footer />
      <FooterMobile />
    </Layout>
  );
}
