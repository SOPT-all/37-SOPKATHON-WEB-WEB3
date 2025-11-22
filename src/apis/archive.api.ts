import { api } from './instance';
import type { GetDiariesParams, DiariesResponse } from '@/types/archive';

export const getDiaries = async (
  params?: GetDiariesParams
): Promise<DiariesResponse> => {
  const response = await api.get<DiariesResponse>('/diaries', { params });
  return response.data;
};
