import { RenderDesktop, RenderMobile } from "@/components/responsive/RenderAt";
import type { Metadata } from "next";
import AlliancePage from "./_components/alliance-page";
import MemberPage from "./_components/member-page";

export const metadata: Metadata = {
  title: "Liên Minh | ATQ Alliance",
  description: "Thông tin về các đối tác chiến lược của ATQ Alliance",
};

export default function AlliancePageRoute() {
  return (
    <>
      <RenderDesktop>
        <AlliancePage />
      </RenderDesktop>
      <RenderMobile>
        <MemberPage />
      </RenderMobile>
    </>
  );
}
