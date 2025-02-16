import Link from 'next/link';
import Hero from './components/hero'

export default function Home() {
  return (
  <div>
    <Hero/>
    <Link href={'/contact'}>CONTACT</Link>
    <Link href={'/category'}>category</Link>
  </div>
  );
}
