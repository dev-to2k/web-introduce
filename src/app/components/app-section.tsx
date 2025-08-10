import Image from "next/image";
import SectionTitle from "./section-title";

export default function AppSection() {
  return (
    <section id="app" className="py-10">
      <SectionTitle as="div" align="center" variant="badge">
        ATQ – NỀN TẢNG GIẢI TRÍ HÀNG ĐẦU
      </SectionTitle>
      <div className="grid md:grid-cols-12 gap-8 items-start mt-6">
        {/* Left: Stacked phone mockups */}
        <div className="md:col-span-6">
          <div className="relative h-[320px] md:h-[380px]">
            <div className="relative h-full w-full bg-white p-2 md:p-4">
              <Image
                src="/images/lienminh-58win-mockup.png"
                alt="Mockup ứng dụng 58WIN"
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* QR + Buttons */}
          <div className="flex items-end gap-5 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-24 aspect-square bg-white p-2 rounded-xl border border-slate-200 shadow-card grid place-items-center">
                <Image
                  src="/images/8xx-qr-code.png"
                  alt="QR 8XX"
                  width={80}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900">QR 8XX</div>
                <div>Quét để tải</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 aspect-square bg-white p-2 rounded-xl border border-slate-200 shadow-card grid place-items-center">
                <Image
                  src="/images/58win-qr-code.png"
                  alt="QR 58WIN"
                  width={80}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900">QR 58WIN</div>
                <div>Quét để tải</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 aspect-square bg-white p-2 rounded-xl border border-slate-200 shadow-card grid place-items-center">
                <Image
                  src="/images/ax88-qr-code.png"
                  alt="QR AX88"
                  width={80}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900">QR AX88</div>
                <div>Quét để tải</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:col-span-6">
          {/* Wrapper khớp chiều cao khung ảnh bên trái và đẩy CTA xuống đáy */}
          <div className="mt-16 min-h-[320px] md:min-h-[380px] grid grid-rows-[auto_1fr_auto]">
            {/* Logos + content top */}
            <div>
              <div className="flex items-center gap-6 opacity-80 space-x-6">
                <Image
                  src="/images/8xx.png"
                  alt="8XX"
                  width={64}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src="/images/58win.png"
                  alt="58WIN"
                  width={72}
                  height={32}
                  className="h-10 w-auto object-contain scale-225 translate-y-[-4px]"
                />
                <Image
                  src="/images/ax88.png"
                  alt="AX88"
                  width={64}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="mt-3 space-y-3 text-slate-600 leading-relaxed">
                <p>
                  ATQ là một trong những nhà cái trực tuyến uy tín và chuyên
                  nghiệp nhất hiện nay, cung cấp đa dạng sản phẩm cá cược chất
                  lượng cao như: Thể Thao, Casino Trực Tuyến, Game Bài, Bắn Cá,
                  Xổ Số và nhiều trò chơi hấp dẫn khác.
                </p>
                <p>
                  Với giao diện hiện đại, tốc độ nạp/rút tiền siêu nhanh cùng hệ
                  thống bảo mật tối ưu, 58WIN cam kết mang đến trải nghiệm an
                  toàn – công bằng – thú vị cho mọi người chơi. Đặc biệt, hàng
                  loạt khuyến mãi hấp dẫn dành cho cả thành viên mới và cược thủ
                  lâu năm luôn sẵn sàng nâng tầm chiến thắng của bạn.
                </p>
                <p>
                  Tải App 58WIN ngay hôm nay để khám phá thế giới giải trí đỉnh
                  cao và nhận những ưu đãi độc quyền!
                </p>
              </div>
            </div>
            {/* CTA bottom aligned */}
            <div className="mt-5 flex items-center gap-3 flex-wrap self-end">
              <button className="px-5 py-3 rounded-lg bg-brand text-white font-semibold shadow-card hover:brightness-110 transition">
                Tải cho iOS
              </button>
              <button className="px-5 py-3 rounded-lg border-2 border-brand text-brand font-semibold hover:bg-brand/5 transition">
                Tải cho Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
