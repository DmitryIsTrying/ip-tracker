// import { Dispatch } from "@reduxjs/toolkit";
// import App from "./App";
// import { Theme } from "./model/appSlice";
// import { renderWithRedux } from "./testing";

// vi.mock("./model/appSlice", async (importOriginal) => {
//   const actual = await importOriginal<typeof import("./model/appSlice")>();
//   return {
//     ...actual,
//     fetchCurrentLocation: vi.fn(() => {
//       return async (dispatch: Dispatch) => {
//         dispatch({
//           type: "app/fetchCurrentLocation/fulfilled",
//           payload: {
//             ip: "94.140.145.135",
//             location: {
//               country: "RU",
//               region: "Sverdlovsk Oblast",
//               city: "Posëlok Krasnaya Zvezda",
//               lat: 56.83333,
//               lng: 60.58333,
//               postalCode: "",
//               timezone: "+05:00",
//               geonameId: 1494347,
//             },
//             as: {
//               asn: 25086,
//               name: "URALTC-AS",
//               route: "94.140.145.0/24",
//               domain: "",
//               type: "",
//             },
//             isp: "Mobile TeleSystems PJSC",
//           },
//         });
//       };
//     }),
//   };
// });

// describe("App component test", () => {
//   test("show loader if initialized", async () => {
//     const { getByTestId, queryByTestId, findByTestId } = renderWithRedux(<App />, {
//       app: {
//         theme: Theme.DARK,
//         status: "FAILED",
//         location: {
//           coords: { lat: 1, lng: 2 },
//           place: { ip: "1.1.1.1", isp: "TEST ISP", region: "New York", timezone: "+05:00" },
//         },
//         isInit: false,
//         error: "error is defined",
//       },
//     });

//     // Проверяем, что loader отображается
//     expect(getByTestId("init-loader")).toBeInTheDocument();
//     expect(queryByTestId("main-content")).not.toBeInTheDocument();

//     // Ждем, пока loader исчезнет
//     await expect(findByTestId("init-loader")).rejects.toThrow();

//     // Проверяем, что основной контент отображается
//     expect(getByTestId("main-content")).toBeInTheDocument();
//   });
// });
