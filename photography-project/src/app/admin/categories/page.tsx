import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [categories,booked]=await Promise.all([prisma.portfolioCategory.count(),prisma.booking.count()]);return <AdminModule title="Manage Categories" stats={[{label:"Categories",value:categories},{label:"Unlimited",value:"Yes"},{label:"Linked bookings",value:booked},{label:"API",value:"/api/categories"}]} />;}
