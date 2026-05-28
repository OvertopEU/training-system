import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [all,pending,approved,cancelled]=await Promise.all([prisma.booking.count(),prisma.booking.count({where:{status:"PENDING"}}),prisma.booking.count({where:{status:"APPROVED"}}),prisma.booking.count({where:{status:"CANCELLED"}})]);return <AdminModule title="Manage Bookings" stats={[{label:"All",value:all},{label:"Pending",value:pending},{label:"Approved",value:approved},{label:"Cancelled",value:cancelled}]} />;}
