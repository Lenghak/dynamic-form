import { type ReactNode } from "react";

import { Toaster } from "@/common/components/ui/toaster";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="container p-6">
      {children}
      <Toaster />
    </div>
  );
}
