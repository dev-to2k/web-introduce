import type { Metadata } from "next";
import AlliancePage from "./_components/alliance-page";

export const metadata: Metadata = {
  title: "Liên Minh | ATQ Alliance",
  description: "Thông tin về các đối tác chiến lược của ATQ Alliance",
};

export default function AlliancePageRoute() {
  return <AlliancePage />;
}
