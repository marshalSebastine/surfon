import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectCorouselProperties = (state) => state.corouselstate;

export const selectCorouselSlide = createDraftSafeSelector(selectCorouselProperties,
    (corouselstate) => corouselstate.slide)

export const selectCorouselTotalSlide = createDraftSafeSelector(selectCorouselProperties,
    (corouselstate) => corouselstate.totalSlides)
