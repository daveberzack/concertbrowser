import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import DateHeader from '../components/DateHeader';

const mockOnDateChanged = jest.fn();

const testDate = new Date(2022, 11, 25);
const testDateString = "Sunday, Dec 25";
let container;

beforeEach(() => {
    container = render(<DateHeader dateSelected={testDate} onDateChanged={mockOnDateChanged} />).container;
});
afterEach(() => {
    container.remove();
    container = null;
    jest.clearAllMocks();
});

test('show specified date', () => {
    const {container} = render(<DateHeader dateSelected={testDate} />);
    const dateText = container.querySelector('.date-text time');
    expect(dateText.innerHTML).toBe(testDateString); 
});

test('buttons call handler', () => {
    const prevButton = container.querySelector('.icon-prev-date');
    expect(prevButton).not.toBe(null);
    prevButton.click();
    expect(mockOnDateChanged).toBeCalledTimes(1);
});

test('buttons call handler', () => {
    const nextButton = container.querySelector('.icon-next-date');
    expect(nextButton).not.toBe(null);
    nextButton.click();
    expect(mockOnDateChanged).toBeCalledTimes(1)
});