import { cookies } from "next/headers";

import AdminDashboard from "@/app/components/admin-dashboard";
import AdminLogin from "@/app/components/admin-login";
import { getSessionCookieConfig, verifySessionToken } from "@/lib/admin-auth";
import { getAllProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(getSessionCookieConfig().name)?.value;
  const isAuthenticated = verifySessionToken(session);

  let initialProjects = [];
  let databaseReady = true;
  let databaseMessage = "";

  if (isAuthenticated) {
    try {
      initialProjects = await getAllProjects();
    } catch (error) {
      databaseReady = false;
      databaseMessage = error.message || "Database connection failed.";
    }
  }

  return (
    <main className="min-h-screen bg-color text-white px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {isAuthenticated ? (
          <AdminDashboard
            initialProjects={initialProjects}
            databaseReady={databaseReady}
            databaseMessage={databaseMessage}
          />
        ) : (
          <AdminLogin />
        )}
      </div>
    </main>
  );
}
