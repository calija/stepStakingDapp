import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import WalletContextProvider from './wallet-provider';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

// Uvezi lokalni Space Mono font
const spaceMono = localFont({
  src: [
    {
      path: '../fonts/SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SpaceMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/SpaceMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/SpaceMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Step',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${spaceMono.variable} antialiased`}
      >
        <WalletContextProvider>{children}</WalletContextProvider>
        <Toaster
          expand
          visibleToasts={5}
          position="bottom-left"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                'flex items-center w-96 rounded-xl px-5 py-3 bg-card border border-red-500',
              title: 'font-extrabold pr-4',
              description: 'text-sm text-gray1',
              icon: 'flex items-center justify-center size-10',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
