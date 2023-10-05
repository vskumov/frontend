import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getToDos = createAsyncThunk(
    "todos/getToDos",
    async (_, thunkAPI) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
            if (!response.ok) {
                throw new Error("Sever Error")
            }
            const data = await response.json();
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getSingleToDo = createAsyncThunk("todos/getSingleToDo",
    async (todoId, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

            if (!response.ok) {
                throw new Error("Error fetching todo!");
            };
            const data = await response.json();
            return data;

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [
            { id: 1, title: "to eat", done: true },
            { id: 2, title: "to run", done: false },
        ],
    },
    reducers: {
        add(state, action) {
            state.list.push({
                id: Date.now(),
                title: action.payload,
                done: false,
            });
        },
        remove(state, action) {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
        changeDone(state, action) {
            const target = state.list.find((todo) => todo.id === action.payload);
            target.done = !target.done;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getToDos.pending, (state) => {
            state.status = "loading";
        }).addCase(getToDos.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.list = action.payload.map((todo) => ({ ...todo, done: todo.completed }));
        }).addCase(getToDos.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }).addCase(getSingleToDo.pending, (state) => {
            state.toDoStatus = "loading";
        }).addCase(getSingleToDo.fulfilled, (state, action) => {
            state.toDoStatus = "fulfilled";
            state.currentToDo = action.payload;
        }).addCase(getSingleToDo.rejected, (state, action) => {
            state.toDoStatus = "rejected";
            state.toDoError = action.payload;
        });
    },
});

export const { add, remove, changeDone } = todoSlice.actions;

export default todoSlice.reducer;