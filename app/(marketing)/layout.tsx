import { MarketingHeader } from "@/components/layout/marketing-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingHeader />
      {/* pt-16 offsets the fixed header height */}
      <main className="pt-16">{children}</main>
    </>
  );
}
