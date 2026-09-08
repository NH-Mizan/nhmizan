"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2, LogOut, Database, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

const emptyForm = {
  projectName: "",
  projectImage: "",
  projectImages: "",
  slogan: "",
  description: "",
  liveLink: "",
  clientLink: "",
  serverLink: "",
  features: "",
  technologies: "",
};

function toFormState(project) {
  if (!project) {
    return emptyForm;
  }

  return {
    projectName: project.projectName || "",
    projectImage: project.projectImage || "",
    projectImages: Array.isArray(project.projectImages) ? project.projectImages.join("\n") : project.projectImage || "",
    slogan: project.slogan || "",
    description: project.description || "",
    liveLink: project.liveLink || "",
    clientLink: project.clientLink || "",
    serverLink: project.serverLink || "",
    features: Array.isArray(project.features) ? project.features.join("\n") : "",
    technologies: Array.isArray(project.technologies)
      ? project.technologies.join("\n")
      : "",
  };
}

function parseLines(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function AdminDashboard({
  initialProjects,
  databaseReady,
  databaseMessage,
}) {
  const router = useRouter();
  const [projects, setProjects] = useState(initialProjects);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const editingProject = useMemo(
    () => projects.find((project) => project._id === selectedId) || null,
    [projects, selectedId]
  );

  function resetForm() {
    setSelectedId("");
    setForm(emptyForm);
  }

  function handleEdit(project) {
    setSelectedId(project._id);
    setForm(toFormState(project));
    setMessage("");
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const payload = {
      ...form,
      projectImages: parseLines(form.projectImages || form.projectImage),
      features: parseLines(form.features),
      technologies: parseLines(form.technologies),
    };

    const isEditing = Boolean(selectedId);
    const endpoint = isEditing ? `/api/projects/${selectedId}` : "/api/projects";
    const method = isEditing ? "PUT" : "POST";

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Request failed.");
      setLoading(false);
      return;
    }

    if (isEditing) {
      setProjects((current) =>
        current.map((project) =>
          project._id === data.project._id ? data.project : project
        )
      );
      setMessage("Project updated successfully.");
    } else {
      setProjects((current) => [data.project, ...current]);
      setMessage("Project created successfully.");
    }

    resetForm();
    setLoading(false);
    router.refresh();
  }

  async function handleDelete(id) {
    const confirmed = window.confirm("Ei project ta delete korte chaccho?");
    if (!confirmed) {
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Delete failed.");
      setLoading(false);
      return;
    }

    setProjects((current) => current.filter((project) => project._id !== id));
    if (selectedId === id) {
      resetForm();
    }
    setMessage("Project deleted successfully.");
    setLoading(false);
    router.refresh();
  }

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
            Website Manager
          </p>
          <h1 className="font-section-title mt-3 text-4xl text-pry">
            Admin Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Ekhan theke project add, update, delete korte parbe. Public website
            automatically latest project data dekhabe.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-violet-400"
          >
            <RefreshCcw size={16} />
            Refresh
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-400"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      <div
        className={`rounded-3xl border p-5 ${
          databaseReady
            ? "border-emerald-500/20 bg-emerald-500/10"
            : "border-amber-500/20 bg-amber-500/10"
        }`}
      >
        <div className="flex items-center gap-3">
          <Database className={databaseReady ? "text-emerald-300" : "text-amber-300"} />
          <div>
            <p className="font-medium text-white">
              {databaseReady ? "Database connected" : "Database setup required"}
            </p>
            <p className="text-sm text-slate-200">
              {databaseReady
                ? "MongoDB active ache. Dashboard data database e save hobe."
                : databaseMessage}
            </p>
          </div>
        </div>
      </div>

      {message ? (
        <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-violet-300">
                {editingProject ? "Update mode" : "Create mode"}
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h2>
            </div>

            {editingProject ? (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white transition hover:border-violet-400"
              >
                Cancel edit
              </button>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Project name"
              value={form.projectName}
              onChange={(value) => setForm((current) => ({ ...current, projectName: value }))}
              placeholder="Portfolio CMS"
            />
            <TextareaField
              label="Gallery images (one URL per line)"
              value={form.projectImages}
              onChange={(value) => setForm((current) => ({ ...current, projectImages: value }))}
              placeholder="https://image-1.jpg\nhttps://image-2.jpg"
            />
            <InputField
              label="Image URL"
              value={form.projectImage}
              onChange={(value) => setForm((current) => ({ ...current, projectImage: value }))}
              placeholder="https://..."
            />
          </div>

          <InputField
            label="Short slogan"
            value={form.slogan}
            onChange={(value) => setForm((current) => ({ ...current, slogan: value }))}
            placeholder="Short one-line summary"
          />

          <TextareaField
            label="Description"
            value={form.description}
            onChange={(value) => setForm((current) => ({ ...current, description: value }))}
            placeholder="Full project details"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <InputField
              label="Live link"
              value={form.liveLink}
              onChange={(value) => setForm((current) => ({ ...current, liveLink: value }))}
              placeholder="https://live-site.com"
            />
            <InputField
              label="Client repo"
              value={form.clientLink}
              onChange={(value) => setForm((current) => ({ ...current, clientLink: value }))}
              placeholder="https://github.com/..."
            />
            <InputField
              label="Server repo"
              value={form.serverLink}
              onChange={(value) => setForm((current) => ({ ...current, serverLink: value }))}
              placeholder="https://github.com/..."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextareaField
              label="Features"
              value={form.features}
              onChange={(value) => setForm((current) => ({ ...current, features: value }))}
              placeholder={"One feature per line"}
            />
            <TextareaField
              label="Technologies"
              value={form.technologies}
              onChange={(value) =>
                setForm((current) => ({ ...current, technologies: value }))
              }
              placeholder={"One technology per line"}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !databaseReady}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={18} />
            {loading
              ? "Saving..."
              : editingProject
              ? "Update project"
              : "Create project"}
          </button>
        </form>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-violet-300">Saved projects</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                {projects.length} Project{projects.length === 1 ? "" : "s"}
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <article
                key={project._id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.projectName}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{project.slogan}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(project)}
                      className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-violet-400 hover:text-violet-300"
                      aria-label={`Edit ${project.projectName}`}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(project._id)}
                      className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-red-400 hover:text-red-300"
                      aria-label={`Delete ${project.projectName}`}
                      disabled={!databaseReady || loading}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {projects.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-slate-400">
                Database connect hole ekhane saved project list dekhabe.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-slate-300">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-violet-400"
        placeholder={placeholder}
      />
    </label>
  );
}

function TextareaField({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-slate-300">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-violet-400"
        placeholder={placeholder}
      />
    </label>
  );
}
