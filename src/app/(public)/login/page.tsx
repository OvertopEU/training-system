import { LoginForm } from "@/components/auth-forms";
import { Section } from "@/components/section";

export default function LoginPage() {
  return <Section eyebrow="client access" title="Login"><LoginForm /></Section>;
}
