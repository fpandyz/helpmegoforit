import { Conditions } from '@/components/Conditions/Conditions';
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
      <Conditions />
    </Layout>
  );
}
