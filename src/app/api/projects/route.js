import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { getSessionCookieConfig, verifySessionToken } from "@/lib/admin-auth";
import { createProject, getAllProjects } from "@/lib/projects";
import { defaultProjects } from "@/lib/default-projects";

function isAuthorized(token) {
  return verifySessionToken(token);
}

export async function GET() {
  try {
    const projects = await getAllProjects();
    return NextResponse.json({ projects, source: "database" });
  } catch (error) {
    console.error("Failed to load projects:", error);
    return NextResponse.json({ projects: defaultProjects, source: "fallback" });
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(getSessionCookieConfig().name)?.value;

    if (!isAuthorized(session)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = await request.json();
    const project = await createProject(payload);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to create project." },
      { status: 400 }
    );
  }
}
