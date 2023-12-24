import { ReactNode } from 'react';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
