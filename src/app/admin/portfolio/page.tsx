import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [items,featured,videos]=await Promise.all([prisma.portfolioItem.count(),prisma.portfolioItem.count({where:{featured:true}}),prisma.portfolioItem.count({where:{type:"VIDEO"}})]);return <AdminModule title="Manage Portfolio" stats={[{label:"Media items",value:items},{label:"Featured",value:featured},{label:"Videos",value:videos},{label:"Upload API",value:"Cloudinary"}]} />;}
