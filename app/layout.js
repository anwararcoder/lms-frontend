import "./../styles/globals.css";
import { ContextSettingProvider } from "@/context/ContextSetting";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Frontend LMS",
  description:
    "You are tasked with developing a frontend UI for a course module in a Learning Management System (LMS). The UI should enable students to view course content (videos), navigate between lessons, and access additional information such as notes, announcements, and FAQs. The page should be fully responsive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextSettingProvider>{children}</ContextSettingProvider>
      </body>
    </html>
  );
}
