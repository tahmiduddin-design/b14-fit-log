import "./globals.css";
import { FitlogProvider } from "@/context/FitlogContext";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">

   <body className="bg-[#090b0f]">


  <FitlogProvider>

    {children}

    <Toaster
      position="top-right"
      toastOptions={{
        duration:2000,
        style:{
          background:"#15181e",
          color:"#fff",
          border:"1px solid #ccff00"
        }
      }}
    />

  </FitlogProvider>


      </body>

    </html>

  );

}