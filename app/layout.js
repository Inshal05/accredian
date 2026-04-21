import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Learning Solutions for Teams",
  description:
    "Enterprise learning landing page inspired by Accredian, built with Next.js App Router and a working enquiry flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
