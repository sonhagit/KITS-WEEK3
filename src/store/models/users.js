// const data = [];
// for (let i = 0; i < 5; i++) {
//     data.push({
//       key: i,
//       name: `Edward King ${i}`,
//       age: 20 + i,
//       address: `London, Park Lane no. ${i}`,
//       tags: i % 2 === 0 ? ["nice", "developer"] : ["tester"],
//     });
//   }

export const users = {
  state: {
    listUser: [],
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListUser(state, listUser) {
      return {
        ...state,
        listUser,
      };
    },
    setCount(state, count) {
      return {
        ...state,
        count,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async incrementAsync(payload, rootState) {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   dispatch.count.increment(payload);
    // },
    async fetchUsers(payload, rootState) {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
      console.log(data);
      this.setListUser(data);
    }
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice(state => state.count);
    },
  }),
};