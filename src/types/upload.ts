export interface UploadRequest {
  file: File;
  tags: string[];
}

export interface UploadResponse {
  url: string;
}

export type APIResponse =
  | {success: true; data: UploadResponse}
  | {success: false; error: string};
