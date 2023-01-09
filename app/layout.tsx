import "./output.css";

interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }:RootLayout) {
    return (
      <html lang="es" title="linktree clone - tomihq">
        <head/>
        <body className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-black min-h-screen">{children}</body>
      </html>
    );
  }