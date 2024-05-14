import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <AuthProvider session={session} >
        <body className="bg-gray-100">
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}