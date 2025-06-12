import "./globals.sass";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Logistic</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
