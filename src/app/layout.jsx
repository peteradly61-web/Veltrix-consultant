import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../lib/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Veltrix Consultant | Econometric Analysis for Global Trade',
  description:
    'Decision-ready trade intelligence built on ITC TradeMap data. Market Entry Blueprints, Supply Chain Resilience Audits, and Tariff Impact Simulations for procurement directors and international sales leaders.',
  keywords:
    'trade analysis, econometrics, ITC TradeMap, supply chain, tariff simulation, market entry, global trade intelligence',
  openGraph: {
    title: 'Veltrix Consultant | Econometric Analysis for Global Trade',
    description:
      'Trade data that answers the question your board is actually asking.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AuthProvider>
          {/* Ambient background orbs */}
          <div className="ambient-bg" aria-hidden="true">
            <div className="ambient-orb ambient-orb-1" />
            <div className="ambient-orb ambient-orb-2" />
            <div className="ambient-orb ambient-orb-3" />
          </div>
          {/* Grid overlay */}
          <div className="grid-overlay" aria-hidden="true" />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
