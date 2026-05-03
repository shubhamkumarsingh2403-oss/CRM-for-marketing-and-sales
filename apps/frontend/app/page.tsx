"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/api";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        // Check if any user exists at all
        const { setupRequired } = await auth.checkSetup();
        if (setupRequired) {
          router.replace("/setup");
          return;
        }

        // Users exist, check if current user is authenticated
        try {
          await auth.me();
          router.replace("/dashboard");
        } catch {
          router.replace("/signin");
        }
      } catch (error) {
        // If API is down, go to signin
        router.replace("/signin");
      }
    }

    checkAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900" />
    </div>
  );
}