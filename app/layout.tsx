"use client";
import "./output.css";

interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }:RootLayout) {
    return (
      <html lang="es">
        <head />
        <body className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-black">{children}</body>
      </html>
    );
  }