import "./globals.css";
export const metadata = { title: "Morgan Service | Machine Maintenance", description: "Morgan machine service tracking dashboard" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }