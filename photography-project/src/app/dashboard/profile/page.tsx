import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Section } from "@/components/section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");
  return (
    <Section eyebrow="dashboard" title="Profile Settings">
      <form className="max-w-xl space-y-4 rounded-lg border border-gold-200/20 bg-black/45 p-5">
        <Input defaultValue={session.user.name ?? ""} placeholder="Name" />
        <Input defaultValue={session.user.email ?? ""} placeholder="Email" disabled />
        <Button type="button">Save Profile</Button>
      </form>
    </Section>
  );
}
