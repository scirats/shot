export interface UploadRequest {
  file: File;
  tags: string[];
}

export interface UploadResponse {
  secure_url: string;
}

export interface UploadError {
  error: string;
}
