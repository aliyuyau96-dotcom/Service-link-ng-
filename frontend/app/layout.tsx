import Navigation from '@/components/layout/Navigation';
import './globals.css';

export const metadata = {
  title: 'ServiceLink NG - Find & Book Services',
  description: 'Connect with trusted service providers in Nigeria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}