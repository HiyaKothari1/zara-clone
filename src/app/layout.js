import '@fortawesome/fontawesome-free/css/all.min.css';
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}