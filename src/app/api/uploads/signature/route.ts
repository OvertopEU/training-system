import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createUploadSignature } from "@/lib/cloudinary";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { folder } = await request.json().catch(() => ({ folder: "light-glory-studio" }));
  return NextResponse.json(createUploadSignature(folder));
}
