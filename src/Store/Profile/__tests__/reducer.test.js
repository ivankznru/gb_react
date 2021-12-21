import { changeName } from "../actions";
import reducer from "../reducer";

describe("test profile reducer", () => {
  it("test changeName", () => {
    const received = reducer(undefined, changeName());

    expect(received).toMatchSnapshot();
  });
});
