import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [all,paid,pending,refunded]=await Promise.all([prisma.payment.count(),prisma.payment.findMany({where:{status:"PAID"}}),prisma.payment.count({where:{status:"PENDING"}}),prisma.payment.count({where:{status:"REFUNDED"}})]);return <AdminModule title="Manage Payments" stats={[{label:"Transactions",value:all},{label:"Revenue",value:money(paid.reduce((s,p)=>s+p.amountCents,0))},{label:"Pending",value:pending},{label:"Refunded",value:refunded}]} />;}
