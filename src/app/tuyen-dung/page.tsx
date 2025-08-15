import { Metadata } from "next";
import RecruitmentPage from "./_components/recruitment-page";

export const metadata: Metadata = {
  title: "Tuyển dụng - ATQ Alliance",
  description:
    "Cơ hội nghề nghiệp tại ATQ Alliance - Nơi phát triển tài năng và sáng tạo",
};

export default function Recruitment() {
  return <RecruitmentPage />;
}
