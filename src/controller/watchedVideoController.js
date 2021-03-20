import { CONFIRM_MESSAGE, SELECTOR_CLASS, SNACKBAR_MESSAGE } from '../constants';
import { $watchedVideoWrapper } from '../elements';
import watchedVideoService from '../service/watchedVideoService.js';
import { watchedVideoModel, watchingVideoModel } from '../store';
import { layoutView, watchedVideoView, watchingVideoView } from '../view';

const watchedVideoController = {
  initEventListeners() {
    $watchedVideoWrapper.addEventListener('click', onWatchedVideoInteract);
  },
};

function onWatchedVideoInteract({ target }) {
  if (target.classList.contains(SELECTOR_CLASS.CLIP_CHECK_BUTTON)) {
    unCheckClip(target.dataset.videoId);
    return;
  }
  if (target.classList.contains(SELECTOR_CLASS.CLIP_DELETE_BUTTON)) {
    deleteWatchedVideo(target.dataset.videoId);
    return;
  }
}

function unCheckClip(videoId) {
  watchedVideoModel.sendVideoTo(watchingVideoModel, videoId);
  loadWatchedVideos();
  layoutView.showSnackbar(SNACKBAR_MESSAGE.WATCHING_VIDEO_CHECK_SUCCESS, true);
}

function deleteWatchedVideo(videoId) {
  if (!layoutView.confirm(CONFIRM_MESSAGE.WATCHED_VIDEO_DELETE)) {
    return;
  }
  watchedVideoModel.popVideoByVideoId(videoId);
  loadWatchedVideos();
  layoutView.showSnackbar(SNACKBAR_MESSAGE.WATCHED_VIDEO_DELETE_SUCCESS, true);
}

function loadWatchedVideos() {
  const watchedVideos = watchedVideoModel.getItem();
  if (watchedVideoService.isVideosEmpty()) {
    watchedVideoView.showEmptyVideoImage();
    watchingVideoView.hideEmptyVideoImage();
  }
  watchedVideoView.renderVideos(watchedVideos);
}

export default watchedVideoController;