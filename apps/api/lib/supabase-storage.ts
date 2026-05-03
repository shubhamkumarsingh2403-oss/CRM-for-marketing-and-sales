import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const BUCKET_NAME = process.env.SUPABASE_STORAGE_BUCKET || "crm-documents";
const MAX_FILE_SIZE = 10485760; // 10MB in bytes
const ALLOWED_MIME_TYPES = [
  "text/plain",
  "application/pdf",
  "image/png",
  "image/jpeg",
];

/**
 * Generate a unique storage key for uploaded file
 * @param originalFilename - Original filename
 * @param prefix - Optional prefix like 'clients/clientId' or 'documents'
 */
export function generateStorageKey(originalFilename: string, prefix?: string): string {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString("hex");
  const sanitizedFilename = originalFilename.replace(/[^a-zA-Z0-9.-]/g, "_");
  const basePath = prefix || "documents";
  return `${basePath}/${timestamp}-${randomString}-${sanitizedFilename}`;
}

/**
 * Validate file before upload
 */
export function validateFile(file: Express.Multer.File): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds 10MB limit. Uploaded: ${(file.size / 1024 / 1024).toFixed(2)}MB`,
    };
  }

  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed: txt, pdf, png, jpg, jpeg. Got: ${file.mimetype}`,
    };
  }

  return { valid: true };
}

/**
 * Upload file to Supabase Storage
 */
export async function uploadToSupabase(
  file: Express.Multer.File,
  key: string
): Promise<{ success: boolean; key?: string; error?: string }> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(key, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) throw error;

    return { success: true, key };
  } catch (error) {
    console.error("Supabase upload error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to upload file to Supabase",
    };
  }
}

/**
 * Generate presigned URL for viewing file (expires in 1 hour)
 */
export async function getPresignedViewUrl(
  key: string,
  expiresInSeconds: number = 3600
): Promise<string> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(key, expiresInSeconds);

    if (error) throw error;
    if (!data?.signedUrl) throw new Error("No URL returned");

    return data.signedUrl;
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    throw new Error("Failed to generate view URL from Supabase");
  }
}

/**
 * Delete file from Supabase Storage
 */
export async function deleteFromSupabase(key: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([key]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Supabase delete error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete file from Supabase",
    };
  }
}

/**
 * Check if file exists in Supabase Storage
 */
export async function fileExistsInSupabase(key: string): Promise<boolean> {
  try {
    // There isn't a direct head method, so we list files in the directory
    // and check if the file is in the list
    const pathParts = key.split('/');
    const fileName = pathParts.pop() || '';
    const folderPath = pathParts.join('/');
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folderPath, {
        limit: 100,
        search: fileName
      });

    if (error) return false;
    
    return data && data.some(file => file.name === fileName);
  } catch (error) {
    return false;
  }
}
