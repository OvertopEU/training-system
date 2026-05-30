import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [packages,active,bookings]=await Promise.all([prisma.package.count(),prisma.package.count({where:{active:true}}),prisma.booking.count()]);return <AdminModule title="Manage Packages" stats={[{label:"Packages",value:packages},{label:"Active",value:active},{label:"Bookings",value:bookings},{label:"Deposits",value:"Enabled"}]} />;}
