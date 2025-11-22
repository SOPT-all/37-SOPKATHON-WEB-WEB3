export interface ApiResponse<T = unknown> {
  code: string;
  message: string;
  data: T;
}

export interface CloverCount {
  userId: number;
  faithCount: number;
  hopeCount: number;
  loveCount: number;
}
export type CloverCountResponse = ApiResponse<CloverCount>;
