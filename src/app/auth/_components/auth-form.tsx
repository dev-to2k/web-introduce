"use client";

import Button from "@/components/shared/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AuthMode = "login" | "register";

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Animation when switching tabs
  useEffect(() => {
    if (formRef.current) {
      // Sử dụng API DOM trực tiếp thay vì animate từ motion
      const element = formRef.current;
      element.style.opacity = "0";
      element.style.transform = "translateY(10px)";

      setTimeout(() => {
        element.style.transition =
          "opacity 0.3s ease-out, transform 0.3s ease-out";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 10);
    }
  }, [mode]);

  // Animation for initial render
  useEffect(() => {
    if (tabsRef.current) {
      // Sử dụng API DOM trực tiếp thay vì animate từ motion
      const element = tabsRef.current;
      element.style.opacity = "0";
      element.style.transform = "translateY(-10px)";

      setTimeout(() => {
        element.style.transition =
          "opacity 0.5s ease-out, transform 0.5s ease-out";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 200); // delay 0.2s
    }
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex flex-col md:flex-row min-h-[600px]">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/lienminh-58win-mockup.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/40 to-indigo-500/40 dark:from-brand/60 dark:to-indigo-500/60 flex items-center justify-center">
          <div className="text-center p-6">
            <Image
              src="/images/logo-atq.png"
              alt="Logo"
              width={180}
              height={60}
              className="h-16 w-auto mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
              Chào mừng đến với ATQ
            </h2>
            <p className="text-white/90 max-w-xs mx-auto drop-shadow-sm">
              Đăng nhập hoặc đăng ký để trải nghiệm dịch vụ tốt nhất của chúng
              tôi
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative w-full md:w-1/2 p-6 md:p-8 bg-white dark:bg-neutral-800">
        {/* Title */}
        <div className="mb-6 text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {mode === "login" ? "Đăng nhập tài khoản" : "Đăng ký tài khoản mới"}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {mode === "login"
              ? "Đăng nhập để truy cập tài khoản của bạn"
              : "Tạo tài khoản mới để bắt đầu"}
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="mb-6 flex rounded-lg bg-slate-100 dark:bg-neutral-700/50 p-1"
        >
          <button
            className={cn(
              "flex-1 rounded-md py-2 text-center font-medium transition-all duration-200",
              mode === "login"
                ? "bg-brand text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            )}
            onClick={() => setMode("login")}
          >
            Đăng nhập
          </button>
          <button
            className={cn(
              "flex-1 rounded-md py-2 text-center font-medium transition-all duration-200",
              mode === "register"
                ? "bg-brand text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            )}
            onClick={() => setMode("register")}
          >
            Đăng ký
          </button>
        </div>

        {/* Form */}
        <div ref={formRef} key={mode} className="space-y-4">
          {mode === "login" ? (
            <>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Tài khoản
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Hãy nhập tài khoản"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      required
                      className="block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Hãy nhập mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      {isPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                          <line x1="2" x2="22" y1="2" y2="22"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="captcha"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Mã xác nhận
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="captcha"
                      name="captcha"
                      type="text"
                      required
                      className="block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Hãy nhập mã xác nhận"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <Image
                        src="/images/ATQ-CSKH.png"
                        alt="Captcha"
                        width={80}
                        height={30}
                        className="h-8 w-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-sm font-medium text-brand hover:text-indigo-500"
                >
                  Quên Mật Khẩu?
                </a>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full py-2.5"
                >
                  Đăng nhập
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
                Hãy Lưu Thông Tin Tài Khoản Của Bạn Để Bảo Đảm An Toàn Cho Tài
                Khoản Của Bạn
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Tài khoản
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Hãy nhập tài khoản"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      required
                      className="block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Hãy nhập mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      {isPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                          <line x1="2" x2="22" y1="2" y2="22"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={isPasswordVisible ? "text" : "password"}
                      required
                      className="block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Hãy nhập lại mật khẩu"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="captcha"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Mã xác nhận
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="captcha"
                      name="captcha"
                      type="text"
                      required
                      className="block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Hãy nhập mã xác nhận"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <Image
                        src="/images/ATQ-CSKH.png"
                        alt="Captcha"
                        width={80}
                        height={30}
                        className="h-8 w-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full py-2.5"
                >
                  Đăng ký
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
                Hãy Lưu Thông Tin Tài Khoản Của Bạn Để Bảo Đảm An Toàn Cho Tài
                Khoản Của Bạn
              </div>
            </>
          )}
        </div>

        {/* Brand logos */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <Image
              src="/images/58win.png"
              alt="58WIN"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/images/8xx.png"
              alt="8XX"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/images/ax88.png"
              alt="AX88"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
