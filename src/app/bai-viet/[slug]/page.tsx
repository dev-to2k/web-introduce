import NewsGrid, { type NewsItem } from "@/components/news/news-grid";
import Button from "@/components/shared/button";
import Image from "next/image";
import Link from "next/link";
import TocCollapse from "../_components/toc-collapse";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Demo content; integrate real CMS/data later
  const title = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  const subtitle =
    "Tuyển dụng Đại lý ATQ – Chính sách minh bạch, không cần vốn";
  const related: NewsItem[] = [
    {
      title: "Mẹo quản lý vốn khi chơi Casino",
      date: "08/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/1-4.webp",
      slug: "quan-ly-von-casino-an-toan",
    },
    {
      title: "Top game Slot trả thưởng cao",
      date: "03/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/7.webp",
      slug: "top-slot-tra-thuong-cao",
    },
    {
      title: "Hiểu kèo châu Á trong cá cược thể thao",
      date: "30/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/22-6.webp",
      slug: "huong-dan-keo-chau-a",
    },
  ];

  return (
    <>
      <div className="relative">
        {/* Header with compact breadcrumb */}
        <section className="bg-white border-slate-200">
          <div className="max-w-screen-xl mx-auto px-4 py-6 md:py-8">
            <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
              <ol className="inline-flex items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-brand">
                    Trang chủ
                  </Link>
                </li>
                <li className="text-slate-400">•</li>
                <li>
                  <Link href="/#news" className="hover:text-brand">
                    Tin tức
                  </Link>
                </li>
                <li className="text-slate-400">•</li>
                <li className="text-ink font-semibold truncate max-w-[60vw] md:max-w-md">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main layout: content card + right TOC */}
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          <article className="prose prose-slate prose-lg max-w-none bg-white rounded-xl border border-slate-200 shadow-card p-5 md:p-7 prose-headings:text-ink prose-h2:font-extrabold prose-h2:mt-8 prose-h2:mb-3 prose-h3:font-bold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-p:leading-[1.9] prose-p:my-4 prose-li:leading-[1.9] prose-a:text-brand hover:prose-a:underline prose-strong:text-ink prose-li:marker:text-brand">
            <div className="flex items-center justify-between mb-4">
              <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-ink">
                {title}
              </h1>
              <div className="mt-1 text-slate-500">
                Cập nhật: 10/08/2025 • 8 phút đọc
              </div>
            </div>
            <p className="mt-[-8px] mb-4 text-slate-600">{subtitle}</p>
            <div className="not-prose -mt-2 mb-4 border-l-4 border-brand/60 bg-brand/5 px-4 py-2 text-slate-600 italic">
              Bạn đang tìm kiếm cơ hội kinh doanh online với thu nhập cao, chính
              sách rõ ràng và không cần vốn đầu tư?
            </div>
            <div className="relative w-full h-60 md:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-card mb-6 bg-white">
              <Image
                src="/images/tuyển dụng đại lý atq.png"
                alt={title}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </div>
            <div className="not-prose mb-5 rounded-lg border border-brand/20 bg-brand/5 p-4 text-slate-700">
              <div className="font-semibold text-ink mb-1">Tóm tắt nhanh</div>
              <p className="text-sm leading-relaxed">
                Trở thành Đại lý ATQ để xây dựng nguồn thu nhập chủ động, bền
                vững. Hoa hồng lũy tiến đến 65%, thanh toán đúng hạn, hỗ trợ
                CSKH 24/7.
              </p>
            </div>
            <h2 id="ly-do">Lý do bạn nên trở thành đại lý ATQ ngay hôm nay</h2>
            <p>
              Không giống những mô hình cộng tác viên truyền thống, ATQ mang đến
              hệ thống phân phối độc lập cho những ai muốn tạo thu nhập chủ
              động, ổn định và lâu dài.
            </p>
            <p>
              Với mỗi hội viên hợp lệ bạn phát triển, lợi nhuận ròng sẽ được ghi
              nhận. Khi đạt ngưỡng tăng trưởng tốt, bạn sẽ nhận mức hoa hồng
              tương ứng — bắt đầu từ 40% và có thể lên tới 65%.
            </p>

            <h2 id="chinh-sach">
              Chính sách hoa hồng đại lý ATQ rõ ràng, minh bạch
            </h2>
            <h3
              id="dieu-kien"
              className="!mt-2 border-l-4 border-brand/70 pl-3 text-ink font-bold text-xl"
            >
              Điều kiện để nhận hoa hồng Đại lý ATQ – 58WIN
            </h3>
            <div className="not-prose my-3">
              <div className="relative w-full h-48 md:h-60 rounded-lg overflow-hidden border border-slate-200 shadow-card">
                <Image
                  src="/images/lienminh-58win-mockup.png"
                  alt="Liên minh ATQ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <ul>
              <li>
                <strong>Mốc 1</strong>: Khi đại lý có lợi nhuận ròng từ 1 điểm
                trở lên và có ít nhất 3 hội viên hợp lệ, mức hoa hồng 40%.
              </li>
              <li>
                <strong>Mốc 2</strong>: Lợi nhuận ròng đạt từ 100.000 điểm và có
                ít nhất 5 hội viên hợp lệ, hoa hồng 45%.
              </li>
              <li>
                <strong>Mốc 3</strong>: Lợi nhuận ròng từ 1.000.000 điểm và tối
                thiểu 10 hội viên hợp lệ, hoa hồng 50%.
              </li>
              <li>
                <strong>Mốc 4</strong>: Lợi nhuận ròng từ 5.000.000 điểm và có
                ít nhất 20 hội viên hợp lệ, hoa hồng 55%.
              </li>
              <li>
                <strong>Mốc 5</strong>: Hoa hồng tối đa 65% áp dụng khi đạt
                10.000.000 điểm lợi nhuận ròng và có ít nhất 50 hội viên hợp lệ.
              </li>
            </ul>

            <h2
              id="cach-tinh"
              className="border-l-4 border-brand/70 pl-3 font-bold text-xl"
            >
              Cách tính hoa hồng dễ hiểu – minh bạch từng bước
            </h2>
            <p>
              Ví dụ, nếu bạn có lợi nhuận ròng 2.000.000 điểm và trong tháng có
              10 hội viên hợp lệ, bạn sẽ được chia hoa hồng theo tỷ lệ 50%,
              tương đương 1.000.000 điểm lợi nhuận nhận về.
            </p>
            <p>
              Con số này sẽ tăng mạnh nếu bạn mở rộng mạng lưới và nâng tổng hội
              viên lên các mốc cao hơn. Với 50 hội viên và doanh thu tốt, bạn sẽ
              chạm ngưỡng 65% — mức thưởng cạnh tranh trên thị trường hiện nay.
            </p>

            <h2 id="dang-ky">Đăng ký đại lý ATQ đơn giản, nhanh chóng</h2>
            <p>Để trở thành đại lý, bạn chỉ cần:</p>
            <ul>
              <li>Đăng ký trực tuyến trên hệ thống chính thức của ATQ.</li>
              <li>Cung cấp đầy đủ thông tin cá nhân và tài khoản ngân hàng.</li>
              <li>
                Tham gia nhóm hướng dẫn vận hành, nhận tài liệu Marketing.
              </li>
              <li>
                Bắt đầu giới thiệu hội viên — hệ thống sẽ ghi nhận tự động.
              </li>
            </ul>
            <div className="not-prose my-4">
              <Link href="/">
                <Button size="lg">Đăng ký ngay</Button>
              </Link>
            </div>

            <h2
              id="thanh-toan"
              className="border-l-4 border-brand/70 pl-3 font-bold text-xl"
            >
              Chính sách thanh toán đúng hạn – hỗ trợ 24/7
            </h2>
            <div className="not-prose my-3">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-slate-200 shadow-card">
                <Image
                  src="/images/ATQ-CSKH.png"
                  alt="CSKH ATQ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p>
              Tiền hoa hồng được thanh toán trước ngày 06 hàng tháng, đảm bảo
              đúng hạn – minh bạch – trực tiếp vào tài khoản bạn đã đăng ký. Đội
              ngũ hỗ trợ của ATQ luôn sẵn sàng đồng hành qua Telegram, giải đáp
              mọi thắc mắc trong quá trình làm đại lý.
            </p>
            <p>
              Hàng ngàn người đã bắt đầu làm giàu, còn bạn thì sao? Liên hệ ngay
              cùng ATQ để thăng hạng thu nhập, bứt phá bản thân ngay nhé!
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Hoàn trả và khuyến mãi hấp dẫn",
                "Nạp rút nhanh qua nhiều kênh",
                "Bảo mật tài khoản đa lớp",
                "Kho game đa dạng – tỷ lệ cược cạnh tranh",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-brand shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-sm text-slate-700 leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            {/* Các mục liên quan đến cá cược được thay bằng nội dung tuyển đại lý */}

            <div className="not-prose mt-8 flex flex-wrap gap-3">
              <Link href="/#news">
                <Button size="sm">Quay lại Tin tức</Button>
              </Link>
              <Link href="/">
                <Button size="sm" variant="outline">
                  Về Trang chủ
                </Button>
              </Link>
            </div>
          </article>

          <div className="sticky top-[calc(var(--topbar-h,0px)+var(--header-h,64px)+16px)] h-fit">
            <TocCollapse
              className="p-0"
              items={[
                { id: "tong-quan", title: "Tổng quan về sàn cược" },
                { id: "uu-diem", title: "Ưu điểm nổi bật" },
                { id: "bat-dau", title: "4 bước bắt đầu" },
                { id: "tro-choi", title: "Các trò chơi phổ biến" },
                { id: "quan-ly-von", title: "Mẹo quản lý vốn" },
              ]}
            />
          </div>
        </div>
        {/* Related posts */}
        <section className="max-w-screen-xl mx-auto px-4 pb-12">
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">
            Bài viết liên quan
          </h2>
          <NewsGrid items={related} />
        </section>
      </div>
    </>
  );
}
