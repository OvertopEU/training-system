import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [all,approved,featured]=await Promise.all([prisma.testimonial.count(),prisma.testimonial.count({where:{approved:true}}),prisma.testimonial.count({where:{featured:true}})]);return <AdminModule title="Manage Testimonials" stats={[{label:"Reviews",value:all},{label:"Approved",value:approved},{label:"Featured",value:featured},{label:"Slider",value:"Live"}]} />;}
