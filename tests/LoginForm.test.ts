
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/vue";
import {expect, test} from "vitest";
import LoginComponent from "@/Components/LoginComponent.vue";

test('submit login form', async() => {

    render(LoginComponent);

    const nameInput = screen.getByTestId("name-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();

    await fireEvent.update(nameInput, "Toma");
    await fireEvent.update(passwordInput, "1231414123");
    await fireEvent.click(submitButton);

    expect(screen.getByText('Hello Toma')).toBeInTheDocument();

});


test('does not submit and inputs are empty', async() => {
    render(LoginComponent);

    const submitButton = screen.getByTestId("submit-button");
    await fireEvent.click(submitButton);

    expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();
})



test('submit form and reset', async() => {

    render(LoginComponent);

    const nameInput = screen.getByTestId("name-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();

    await fireEvent.update(nameInput, "Toma");
    await fireEvent.update(passwordInput, "1231414123");
    await fireEvent.click(submitButton);

    expect(screen.getByText('Hello Toma')).toBeInTheDocument();

    const resetButton = screen.getByTestId("reset-button");
    await fireEvent.click(resetButton);

    expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();
    expect(nameInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');

})










