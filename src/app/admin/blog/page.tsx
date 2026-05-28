import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [posts,published,drafts,featured]=await Promise.all([prisma.blogPost.count(),prisma.blogPost.count({where:{status:"PUBLISHED"}}),prisma.blogPost.count({where:{status:"DRAFT"}}),prisma.blogPost.count({where:{featured:true}})]);return <AdminModule title="Manage Blog" stats={[{label:"Posts",value:posts},{label:"Published",value:published},{label:"Drafts",value:drafts},{label:"Featured",value:featured}]} />;}
