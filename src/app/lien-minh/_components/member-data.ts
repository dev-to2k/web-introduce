export interface MemberItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  appLink?: string; // Link tải app (optional)
  tags: string[];
}

// Dữ liệu thành viên được cache và sử dụng lại
export const memberItems: MemberItem[] = [
  {
    id: "58win",
    title: "58WIN",
    description:
      "Hãy là người chiến thắng với các trò chơi đẳng cấp và khuyến mãi hấp dẫn tại 58WIN.",
    imageUrl: "/images/member/member-58win.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["Casino", "Slots", "Sports"],
  },
  {
    id: "ax88",
    title: "AX88",
    description:
      "Nơi bạn trao niềm tin - Trải nghiệm VIP đẳng cấp với nhiều ưu đãi độc quyền.",
    imageUrl: "/images/member/member-ax88.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["VIP", "Casino", "Baccarat"],
  },
  {
    id: "8xx",
    title: "8XX",
    description:
      "Cổng game đổi thưởng uy tín hàng đầu với nhiều trò chơi hấp dẫn và giao diện hiện đại.",
    imageUrl: "/images/member/member-8xx.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["Game", "Slots", "Jackpot"],
  },
  {
    id: "8xx",
    title: "8XX",
    description:
      "Trải nghiệm cá cược thể thao và casino trực tuyến với tỷ lệ cược hấp dẫn nhất.",
    imageUrl: "/images/member/member-8xx.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["Sports", "Live Casino", "Poker"],
  },
  {
    id: "ax88",
    title: "AX88",
    description:
      "Nền tảng cá cược trực tuyến với đa dạng trò chơi và khuyến mãi hấp dẫn mỗi ngày.",
    imageUrl: "/images/member/member-ax88.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["Bắn Cá", "Slots", "Baccarat"],
  },
  {
    id: "atq",
    title: "ATQ Alliance",
    description:
      "Liên minh các nhà cái uy tín hàng đầu, mang đến trải nghiệm giải trí đỉnh cao.",
    imageUrl: "/images/member/member-atq.png",
    link: "https://imvn3k4.uk.com/",
    appLink: "https://imvn3k4.uk.com/app",
    tags: ["Alliance", "Premium", "Trusted"],
  },
];
