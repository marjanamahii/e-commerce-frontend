import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../Utils/BaseURL";

export const ReviewsApi = createApi({
  reducerPath: "ReviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/reviews`,
    credentials: "include",
  }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    // post review
    postReview: builder.mutation({
      query: (reviewData) => ({
        url: "/post-review",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Reviews", id: postId },
      ],
    }),
    // reviews count
    getReviewsCount: builder.query({
      query: () => ({
        url: "/total-reviews",
      }),
    }),
    // reviews by user
    getReviewsByUserId: builder.query({
      query: (userId) => ({
        url: `/${userId}`,
      }),
      providesTags: (result) =>
        result ? [{ type: "Reviews", id: result[0]?.email }] : [],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetReviewsCountQuery,
  useGetReviewsByUserIdQuery,
} = ReviewsApi;

export default ReviewsApi;
