import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'Your Entry into the Big World of Robotics.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '//cloud.us4you.de/apps/files_sharing/publicpreview/yeDrHAKfJxCgQ6p?file=/&fileId=456&x=1920&y=1080&a=true',
        width: 800,
        height: 600,
      }
    ]
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
