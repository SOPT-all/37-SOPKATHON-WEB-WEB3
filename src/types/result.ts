export type Label = 'FAITH' | 'HOPE' | 'LOVE';

export interface ResultItem {
  diaryId: number;
  leafType: Label;
  title: string;
  originalContent: string;
  sagaContent: string;
  createdAt: string;
}

export interface PostReq {
  title: string;
  createdAt: string;
  theme: Label;
  content: string;
}
