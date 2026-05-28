import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [videos,vertical,items]=await Promise.all([prisma.video.count(),prisma.video.count({where:{vertical:true}}),prisma.portfolioItem.count({where:{type:"VIDEO"}})]);return <AdminModule title="Manage Videos/Reels" stats={[{label:"Videos",value:videos},{label:"Vertical",value:vertical},{label:"Portfolio videos",value:items},{label:"Embeds/uploads",value:"Supported"}]} />;}
