import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../Utils/BaseURL";

const StatsApi = createApi({
  reducerPath: "StatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/stats`,
    credentials: "include",
  }),
  tagTypes: ["Stats"],
  endpoints: (builder) => ({
    getUserStats: builder.query({
      query: (email) => `/user-stats/${email}`,
      providesTags: ["Stats"],
    }),
    getAdminStats: builder.query({
      query: () => `/admin-stats`,
      providesTags: ["Stats"],
    }),
  }),
});

export const { useGetUserStatsQuery, useGetAdminStatsQuery } = StatsApi;

export default StatsApi;
