import "./globals.css";
import { Providers } from "../redux/provider";
import Whatsapp from "../../components/Whatsapp";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Paraplug Store - Nike and Jordan Sneakers Store",
  description: "Para Plug",
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/para.png" type="image/x-icon" sizes="any" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />{" "}
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
        <Whatsapp />
      </body>
    </html>
  );
}
