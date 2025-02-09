import localFont from "next/font/local";
// import "./globals.css";


export const metadata = {
  title: "Azki Next App",
  description: "powered by create next app - developed by Amir mohammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={``}>{children}</body>
    </html>
  );
}
