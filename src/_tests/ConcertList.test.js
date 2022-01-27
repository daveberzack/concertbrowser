import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ConcertList from '../components/ConcertList';

const testConcerts = [
    {"index":"1", "date":"2022-01-02", "time":"9:00", "venueName":"TestVenue1", "minPrice":"", "maxPrice":"", "detailUrl":"", "ticketUrl":"", "headliners":[], "openers":[]},
    {"index":"2", "date":"2022-01-02", "time":"9:00", "venueName":"TestVenue2", "minPrice":"", "maxPrice":"", "detailUrl":"", "ticketUrl":"", "headliners":[], "openers":[]},
    {"index":"3", "date":"2022-01-03", "time":"9:00", "venueName":"TestVenue3", "minPrice":"", "maxPrice":"", "detailUrl":"", "ticketUrl":"", "headliners":[], "openers":[]}
]
const testDate = new Date(2022, 0, 2);
let container;

beforeEach(() => {
    container = render(<ConcertList concerts={testConcerts} dateSelected={testDate} isLoaded={true} />).container;
});
afterEach(() => {
    container.remove();
    container = null;
    jest.clearAllMocks();
});

test('show concerts', () => {
    const listings = container.querySelectorAll('.concert-listing');
    expect(listings.length).toBe(2); 
}); 