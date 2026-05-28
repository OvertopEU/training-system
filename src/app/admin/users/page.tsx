import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [users,admins,clients]=await Promise.all([prisma.user.count(),prisma.user.count({where:{role:"ADMIN"}}),prisma.clientGallery.groupBy({by:["clientEmail"]})]);return <AdminModule title="Manage Users" stats={[{label:"Users",value:users},{label:"Admins",value:admins},{label:"Gallery clients",value:clients.length},{label:"RBAC",value:"Enabled"}]} />;}
