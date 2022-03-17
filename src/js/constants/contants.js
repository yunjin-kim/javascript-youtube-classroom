const GET_VIDEO_COUNT = 12;
const MAX_SAVE_VIDEO_COUNT = 100;

const ALREADY_SAVED_VIDEO = '저장됨';

const VIDEO_ID_LIST_KEY = 'VIDEO_ID_LIST';

const WATCHED_ID_LIST_KEY = 'WATCHED_ID_LIST';

const REDIRECT_SERVER_HOST = 'https://youtubeclassroom.netlify.app';

const ERROR_MESSAGE = {
  CANNOT_GET_YOUTUBE_VIDEO: '[404] 개발자에게 문의하세요.',
  CANNOT_SEARCH_EMPTY: '공백은 검색할 수 없습니다.',
  CANNOT_SAVE_VIDEO_ANYMORE: `${MAX_SAVE_VIDEO_COUNT}개 이상 저장할 수 없습니다.`,
};

export {
  ERROR_MESSAGE,
  GET_VIDEO_COUNT,
  MAX_SAVE_VIDEO_COUNT,
  ALREADY_SAVED_VIDEO,
  VIDEO_ID_LIST_KEY,
  REDIRECT_SERVER_HOST,
  WATCHED_ID_LIST_KEY
};
