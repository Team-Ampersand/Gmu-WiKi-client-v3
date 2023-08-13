import { AxiosError } from "axios";

export interface FetchOptionsType {
    url: string;
    method: string;
    successMessage?: string;
    errors?: string | { [key: number]: string };
    onSuccess?: (data: any) => Promise<void>;
    onFailure?: (error: AxiosError) => Promise<void>;
  }