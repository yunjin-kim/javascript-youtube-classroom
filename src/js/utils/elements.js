import { $ } from "./dom.js";
import { DOM_CONSTANTS } from "./constants.js";

const elements = {
  $body: $(DOM_CONSTANTS.ELEMENT.BODY),
  $snackbarContainer: $(DOM_CONSTANTS.ID_SELECTOR.SNACKBAR_CONTAINER),

  $watchLaterViewButton: $(DOM_CONSTANTS.ID_SELECTOR.WATCHED_LATER_VIEW_BUTTON),
  $watchedViewButton: $(DOM_CONSTANTS.ID_SELECTOR.WATCHED_VIEW_BUTTON),
  $notSaved: $(DOM_CONSTANTS.ID_SELECTOR.NOT_SAVED),
  $notWatched: $(DOM_CONSTANTS.ID_SELECTOR.NOT_WATCHED),
  $watchLaterVideos: $(DOM_CONSTANTS.ID_SELECTOR.WATCH_LATER_VIDEOS),
  $watchedVideos: $(DOM_CONSTANTS.ID_SELECTOR.WATCHED_VIDEOS),

  $searchButton: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_BUTTON),
  $searchModal: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_MODAL),
  $searchModalClose: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_MODAL_CLOSE),
  $searchForm: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_FORM),
  $searchResults: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_RESULTS),
  $searchResultsInner: $(DOM_CONSTANTS.ID_SELECTOR.SEARCH_RESULTS_INNER),
  $hiddenTarget: $(DOM_CONSTANTS.ID_SELECTOR.HIDDEN_TARGET),
  $skeletonSearchResults: $(DOM_CONSTANTS.ID_SELECTOR.SKELETON_SEARCH_RESULTS),
  $skeletonUIContainer: $(DOM_CONSTANTS.ID_SELECTOR.SKELETON_UI_CONTAINER),
  $notFound: $(DOM_CONSTANTS.ID_SELECTOR.NOT_FOUND),
  $keywordHistory: $(DOM_CONSTANTS.ID_SELECTOR.KEYWORD_HISTORY),
  $savedVideoCount: $(DOM_CONSTANTS.ID_SELECTOR.SAVED_VIDEO_COUNT),
};

export default elements;