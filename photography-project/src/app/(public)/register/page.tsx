import { RegisterForm } from "@/components/auth-forms";
import { Section } from "@/components/section";

export default function RegisterPage() {
  return <Section eyebrow="client access" title="Register"><RegisterForm /></Section>;
}
