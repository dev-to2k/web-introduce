import type { Metadata } from "next";
import AgencyPage from "./_components/agency-page";

export const metadata: Metadata = {
  title: "Đại Lý | ATQ Alliance",
  description: "Thông tin về các đại lý của ATQ Alliance",
};

export default function AgencyPageRoute() {
  return <AgencyPage />;
}
