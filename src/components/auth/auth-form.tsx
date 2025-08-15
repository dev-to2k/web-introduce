"use client";

import Button from "@/components/shared/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AuthMode = "login" | "register";

interface AuthFormProps {
  initialMode?: AuthMode;
  onClose?: () => void;
}

export default function AuthForm({
  initialMode = "login",
  onClose,
}: AuthFormProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Animation when switching tabs
  useEffect(() => {
    if (formRef.current) {
      // Sử dụng API DOM trực tiếp
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
      // Sử dụng API DOM trực tiếp
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
    <div className="relative flex flex-col md:flex-row min-h-[400px] sm:min-h-[500px] md:min-h-[600px] auth-form-mobile">
      {/* Left side - Image (Hidden on mobile) */}
      <div className="hidden md:block relative w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto">
        <Image
          src="/images/ATQ-banner2.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Form (Full width on mobile) */}
      <div className="relative w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-white dark:bg-neutral-800">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            aria-label="Đóng"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        {/* Title */}
        <div className="mb-4 sm:mb-6 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            {mode === "login" ? "Đăng nhập tài khoản" : "Đăng ký tài khoản mới"}
          </h3>
          <p className="mt-1 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
            {mode === "login"
              ? "Đăng nhập để truy cập tài khoản của bạn"
              : "Tạo tài khoản mới để bắt đầu"}
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="mb-4 sm:mb-6 flex rounded-lg bg-slate-100 dark:bg-neutral-700/50 p-1"
        >
          <button
            className={cn(
              "flex-1 rounded-md py-2 sm:py-2.5 md:py-3 text-center font-medium transition-all duration-200 text-sm sm:text-base md:text-lg",
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
              "flex-1 rounded-md py-2 sm:py-2.5 md:py-3 text-center font-medium transition-all duration-200 text-sm sm:text-base md:text-lg",
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
        <div ref={formRef} key={mode} className="space-y-3 sm:space-y-4">
          {mode === "login" ? (
            <>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm sm:text-base md:text-lg font-medium text-slate-700 dark:text-slate-300"
                  >
                    Tài khoản
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand text-sm sm:text-base md:text-lg"
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
                  className="text-sm sm:text-base md:text-lg font-medium text-brand hover:text-indigo-500"
                >
                  Quên Mật Khẩu?
                </a>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
                >
                  Đăng nhập
                </Button>
              </div>

              <div className="mt-4 text-center text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
                Hãy Lưu Thông Tin Tài Khoản Của Bạn Để Bảo Đảm An Toàn Cho Tài
                Khoản Của Bạn
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4">
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
                  className="w-full py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
                >
                  Đăng ký
                </Button>
              </div>

              <div className="mt-4 text-center text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
                Hãy Lưu Thông Tin Tài Khoản Của Bạn Để Bảo Đảm An Toàn Cho Tài
                Khoản Của Bạn
              </div>
            </>
          )}
        </div>

        {/* Brand logos */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-3 sm:space-x-4">
          <div className="flex items-center">
            <Image
              src="/images/58win.png"
              alt="58WIN"
              width={40}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto scale-250 mr-3 -translate-y-1"
            />
          </div>

          <div className="flex items-center">
            <Image
              src="/images/8xx.png"
              alt="8XX"
              width={40}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto translate-x-3"
            />
          </div>

          <div className="flex items-center">
            <Image
              src="/images/ax88.png"
              alt="AX88"
              width={40}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
