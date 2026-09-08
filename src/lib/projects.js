import { ObjectId } from "mongodb";

import { defaultProjects } from "./default-projects";
import { getDatabase } from "./mongodb";

const PROJECT_COLLECTION = "projects";

function ensureArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export function normalizeProjectPayload(payload = {}) {
  const images = ensureArray(payload.projectImages);
  const projectImage = String(payload.projectImage || images[0] || "").trim();
  return {
    projectName: String(payload.projectName || "").trim(),
    projectImage,
    projectImages: images.length ? images : projectImage ? [projectImage] : [],
    slogan: String(payload.slogan || "").trim(),
    description: String(payload.description || "").trim(),
    liveLink: String(payload.liveLink || "").trim(),
    clientLink: String(payload.clientLink || "").trim(),
    serverLink: String(payload.serverLink || "").trim(),
    features: ensureArray(payload.features),
    technologies: ensureArray(payload.technologies),
    updatedAt: new Date(),
  };
}

export function validateProjectPayload(project) {
  if (!project.projectName) {
    return "Project name is required.";
  }

  if (!project.projectImage) {
    return "Project image URL is required.";
  }

  if (!project.slogan) {
    return "Project slogan is required.";
  }

  if (!project.description) {
    return "Project description is required.";
  }

  return null;
}

export function serializeProject(project) {
  return {
    ...project,
    _id: String(project._id),
  };
}

async function getProjectsCollection() {
  const db = await getDatabase();
  return db.collection(PROJECT_COLLECTION);
}

let seedPromise;

export async function seedProjectsIfNeeded() {
  if (!seedPromise) {
    seedPromise = (async () => {
      const collection = await getProjectsCollection();
      const total = await collection.countDocuments();

      if (total === 0) {
        const now = new Date();
        await collection.insertMany(
          defaultProjects.map(({ _id, ...project }) => ({
            ...project,
            createdAt: now,
            updatedAt: now,
          }))
        );
      }
    })();
  }

  return seedPromise;
}

export async function getAllProjects() {
  await seedProjectsIfNeeded();
  const collection = await getProjectsCollection();
  const projects = await collection
    .find({})
    .sort({ updatedAt: -1, createdAt: -1 })
    .toArray();

  return projects.map(serializeProject);
}

export async function createProject(payload) {
  const collection = await getProjectsCollection();
  const project = normalizeProjectPayload(payload);
  const error = validateProjectPayload(project);

  if (error) {
    throw new Error(error);
  }

  project.createdAt = new Date();

  const result = await collection.insertOne(project);
  return serializeProject({ ...project, _id: result.insertedId });
}

export async function updateProject(id, payload) {
  const collection = await getProjectsCollection();
  const project = normalizeProjectPayload(payload);
  const error = validateProjectPayload(project);

  if (error) {
    throw new Error(error);
  }

  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: project },
    { returnDocument: "after" }
  );

  if (!result) {
    throw new Error("Project not found.");
  }

  return serializeProject(result);
}

export async function deleteProject(id) {
  const collection = await getProjectsCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  if (!result.deletedCount) {
    throw new Error("Project not found.");
  }
}
