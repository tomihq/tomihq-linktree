import "./output.css";

interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }:RootLayout) {
    return (
      <html lang="es">
        <head />
        <body>{children}</body>
      </html>
    );
  }