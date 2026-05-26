import { auth } from "@/app/(auth)/auth";
import { getUserSettings, getUserStats } from "@/lib/db/queries";
import { BillingForm } from "./billing-form";

export default async function BillingPage() {
  const session = await auth();
  const settings = await getUserSettings({ userId: session?.user?.id ?? "" });
  const stats = await getUserStats({ userId: session?.user?.id ?? "" });

  return (
    <BillingForm
      initialPreferences={settings?.preferences ?? {}}
      stats={stats}
    />
  );
}
