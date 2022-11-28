import '../styles/globals.css';
import '../styles/variables.css';
import Header from './components/Header';
import AnalyticsWrapper from './Analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      {' '}
      <head />
      <body>
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
