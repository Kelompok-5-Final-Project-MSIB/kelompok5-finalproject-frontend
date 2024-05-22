import { Poppins } from 'next/font/google';
import './globals.css';

const inter = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'ReTreads',
  description: 'Generated by create next app',
  icons: { apple: '/logo_retreads.png', icon: '/logo_retreads.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js'></script>
      </body>
    </html>
  );
}
