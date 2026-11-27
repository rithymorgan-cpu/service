import type { Metadata } from "next";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morgan Service Dashboard",
  description: "Machine service tracking system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Sidebar />

          <main className="main-content">
            <header className="topbar">
              <span>Machine Service Management</span>
              <span className="user">Admin</span>
            </header>

            <div className="page-content">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
