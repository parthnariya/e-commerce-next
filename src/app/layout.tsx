import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ContextProviders from "@/context/providers";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid grid-cols-12 grid-rows-12 bg-slate-100 h-screen w-full text-center">
        <ContextProviders>
          <Navbar />
          <main className="row-start-2 row-end-12 col-start-2 col-end-12">
            {children}
          </main>
          <Footer />
        </ContextProviders>
      </body>
    </html>
  );
}
