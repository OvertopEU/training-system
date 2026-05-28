import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [addons,active,selected]=await Promise.all([prisma.addOn.count(),prisma.addOn.count({where:{active:true}}),prisma.bookingAddOn.count()]);return <AdminModule title="Manage Add-ons" stats={[{label:"Add-ons",value:addons},{label:"Active",value:active},{label:"Selected",value:selected},{label:"API",value:"Ready"}]} />;}
