
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/vue";
import {expect, test} from "vitest";
import MainComponent from "@/Components/MainComponent.vue";


// render -> ispise neku komponentu
// screen -> ekran

test('renders the name', () => {

    render(MainComponent, {
        props: {name: "Toma"}
    })

    expect(screen.getByText(/toma/i)).toBeInTheDocument()
})


test('increments counter on click', async() => {

    render(MainComponent, {
        props: {name: "Toma"}
    })

    const resultHolder = screen.getByTestId("totalCount");
    const button = screen.getByTestId("incrementCounter");

    expect(resultHolder.textContent).toContain("Total: 0");

    await fireEvent.click(button); // Klikni na dugme
    expect(resultHolder.textContent).toContain("Total: 1");

    await fireEvent.click(button); // Klikni na dugme
    expect(resultHolder.textContent).toContain("Total: 2");

})


test('decrements counter on click', async() => {
    render(MainComponent, {
        props: {name: "Toma"}
    })

    const button = screen.getByTestId("decrementCounter"); // Decrement counter button

    const resultHolder = screen.getByTestId("totalCount");

    expect(resultHolder.textContent).toContain("Total: 0");

    await fireEvent.click(button);
    expect(resultHolder.textContent).toContain("Total: -1");
})










