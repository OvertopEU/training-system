import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";

export const dynamic = "force-dynamic";

export default async function Page(){const settings=await prisma.adminSetting.count();return <AdminModule title="Site Settings" stats={[{label:"Settings",value:settings},{label:"Brand",value:"Light & Glory"},{label:"Currency",value:"GBP"},{label:"Dark theme",value:"Only"}]} />;}
