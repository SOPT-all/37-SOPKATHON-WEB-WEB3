import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import apiClient from '@/apis/instance';
import type { CloverCount, CloverCountResponse } from '@/types/api';

export const QUERY_KEYS = {
  cloverCount: 'cloverCount',
};

const fetchCloverCount = async (): Promise<CloverCount> => {
  const FIXED_USER_ID = 1;

  const response: any = await apiClient.get<CloverCountResponse>(
    '/shamrock-count',
    {
      params: {
        userId: FIXED_USER_ID,
      },
    }
  );

  console.log('API 전체 응답 확인:', response);

  const responseData = response?.data;
  const serverData = responseData?.data;

  if (serverData) {
    return serverData;
  }

  if (responseData && typeof responseData.faithCount === 'number') {
    return responseData;
  }

  console.error('데이터 추출 실패. 응답 객체:', response);
  throw new Error('API 응답에서 데이터를 찾을 수 없습니다.');
};

export const useGetCloverCount = (): UseQueryResult<CloverCount, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.cloverCount, 1],
    queryFn: fetchCloverCount,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
