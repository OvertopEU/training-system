import { prisma } from "@/lib/prisma";
import { AdminModule } from "@/components/admin-module";
export default async function Page(){const [galleries,photos,downloads,secure]=await Promise.all([prisma.clientGallery.count(),prisma.clientGalleryPhoto.count(),prisma.download.count(),prisma.clientGallery.count({where:{passwordHash:{not:null}}})]);return <AdminModule title="Manage Galleries" stats={[{label:"Galleries",value:galleries},{label:"Photos",value:photos},{label:"Downloads",value:downloads},{label:"Password protected",value:secure}]} />;}
