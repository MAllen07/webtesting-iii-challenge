// Test away!
import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

console.log(Display);
describe("<Display />", () => {
  it("displays if gate is open with green-led, if it is unlocked with green-led", () => {
    const { queryByText } = render(<Display />);

    const lockedStatus = queryByText(/Unlocked/i);
    const closedStatus = queryByText(/Open/i);

    expect(lockedStatus).toBeTruthy();
    expect(lockedStatus.classList).toContain("green-led");
    expect(closedStatus).toBeTruthy();
    expect(closedStatus.classList).toContain("green-led");
  });
  it('displays "Closed" if the closed prop is true with red-led', () => {
    const { queryByText } = render(<Display closed={true} />);

    const closedStatus = queryByText(/Closed/i);

    expect(closedStatus).toBeTruthy();
    expect(closedStatus.classList).toContain("red-led");
  });
    it.todo('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
    const { queryByText } = render(<Display locked={true} />); 
        const lockedStatus = queryByText(/Locked/i)
        
        expect(lockedStatus).toBeTruthy
        expect(lockedStatus.classList).toContact('red-led')

  });
  // it.todo('when locked or closed use the red-led class', () => {

  // });
  // it.todo('when unlocked or open use the green-led class', () => {

  // });
});
