import Providers from "../components/Providers";


export const metadata = {
  title: "Next-Auth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <Providers>
      <body>
          {children}
      </body>
    </Providers>
    </html>
  );
}