import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const shipmentApi = createApi({
  reducerPath: "shipmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["ship"],
  endpoints(build) {
    return {
      getShipments: build.query({
        query() {
          return "shipments";
        },
        providesTags: ["ship"],
      }),
      getShipmentById: build.query({
        query(id) {
          return `shipments/${id}`;
        },
      }),
      delShipment: build.mutation({
        query(id) {
          return {
            url: `shipments/${id}`,
            method: "delete",
          };
        },
        invalidatesTags: ["ship"],
      }),
      addShipment: build.mutation({
        query(shipment) {
          return {
            url: "shipments",
            method: "post",
            body: { data: shipment },
          };
        },
        invalidatesTags: ["ship"],
      }), // addShipment close
      updateShipment: build.mutation({
        query(shipment) {
          return {
            url: `shipments/${shipment.id}`,
            method: "put",
            body: { data: shipment },
          };
        },
        invalidatesTags: ["ship"],
      }),
      register: build.mutation({
        query(user) {
          return {
            url: "auth/local/register",
            method: "post",
            body: user,
          };
        },
      }),
      login: build.mutation({
        query(user) {
          return {
            url: "auth/local",
            method: "post",
            body: user, //strapi用 identifier
          };
        },
      }),
    };
  },
});

export const {
  useGetShipmentsQuery,
  useGetShipmentByIdQuery,
  useDelShipmentMutation,
  useAddShipmentMutation,
  useUpdateShipmentMutation,
  useRegisterMutation,
  useLoginMutation,
} = shipmentApi;

export default shipmentApi;
