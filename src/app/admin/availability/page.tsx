import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [windows,blocked,active]=await Promise.all([prisma.availability.count(),prisma.blockedDate.count(),prisma.availability.count({where:{active:true}})]);return <AdminModule title="Manage Availability" stats={[{label:"Working windows",value:windows},{label:"Active",value:active},{label:"Blocked dates",value:blocked},{label:"Conflict checks",value:"Enabled"}]} />;}
