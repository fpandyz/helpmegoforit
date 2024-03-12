import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout/Layout';
import { About } from '../components/About/About';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
