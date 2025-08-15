import type { Metadata } from "next";
import MemberPage from "./_components/member-page";

export const metadata: Metadata = {
  title: "Thành Viên | ATQ Alliance",
  description: "Thông tin về các thành viên của ATQ Alliance",
};

export default function MemberPageRoute() {
  return <MemberPage />;
}
