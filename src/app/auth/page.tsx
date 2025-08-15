"use client";

import { useEffect, useState } from "react";
import AuthForm from "./_components/auth-form";

export default function AuthPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-xl">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
