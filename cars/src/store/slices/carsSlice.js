import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption:
      //action.payload === { name: "ab", cost: 140 }
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
        //Math.random() = we use nanoid to randomly add id
      });
    },
    removeCar(state, action) {
      //Assumption
      //action.payload === {id} id of the car want to remove
      const updated = state.data.filter((car) => {
        return car.id != action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
