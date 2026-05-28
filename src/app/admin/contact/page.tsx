import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const [messages,unread]=await Promise.all([prisma.contactMessage.count(),prisma.contactMessage.count({where:{read:false}})]);return <AdminModule title="Manage Contact Messages" stats={[{label:"Messages",value:messages},{label:"Unread",value:unread},{label:"Admin notifications",value:"Email"},{label:"Rate limited",value:"Yes"}]} />;}
