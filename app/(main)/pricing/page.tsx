import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Page',
  creator: 'Ruben',
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
}
