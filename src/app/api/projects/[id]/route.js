import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";

import { getSessionCookieConfig, verifySessionToken } from "@/lib/admin-auth";
import { deleteProject, updateProject } from "@/lib/projects";

function isAuthorized(token) {
  return verifySessionToken(token);
}

export async function PUT(request, { params }) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(getSessionCookieConfig().name)?.value;

    if (!isAuthorized(session)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid project id." }, { status: 400 });
    }

    const payload = await request.json();
    const project = await updateProject(id, payload);
    return NextResponse.json({ project });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to update project." },
      { status: 400 }
    );
  }
}

export async function DELETE(_request, { params }) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(getSessionCookieConfig().name)?.value;

    if (!isAuthorized(session)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid project id." }, { status: 400 });
    }

    await deleteProject(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to delete project." },
      { status: 400 }
    );
  }
}
