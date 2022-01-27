import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Concert from '../components/Concert';

const testConcertWithValues = {
    "index":"1", 
    "date":"2022-01-02", 
    "time":"9:00", 
    "venueName":"Test Venue", 
    "minPrice":"10", 
    "maxPrice":"20", 
    "detailUrl":"http://www.details.com", 
    "ticketUrl":"http://www.tickets.com", 
    "headliners":["Headliner1"], 
    "openers":["Opener1","Opener2"]
}
const testConcertWithNoValues = {
    "index":"1", 
    "date":"", 
    "time":"", 
    "venueName":"", 
    "minPrice":"", 
    "maxPrice":"", 
    "detailUrl":"", 
    "ticketUrl":"", 
    "headliners":[], 
    "openers":[]
}

let container = null;

afterEach(() => {
  container.remove();
  container = null;
  jest.clearAllMocks();
});


test('show values', () => {
    container = render(<Concert concert={testConcertWithValues} previewedListingIndex="1" previewedArtistIndex="0" />).container;

    const headliners = container.querySelectorAll('.headliner .artist');
    expect(headliners.length).toBe(1); 
    expect(headliners[0].innerHTML).toBe("Headliner1"); 
    
    const openers = container.querySelectorAll('.opener .artist');
    expect(openers.length).toBe(2); 
    expect(openers[0].innerHTML).toBe("Opener1"); 
    expect(openers[1].innerHTML).toBe("Opener2"); 

    const time = container.querySelector('.time');
    expect(time).not.toBeNull(); 

    const price = container.querySelector('.price');
    expect(price).not.toBeNull(); 
    
    const infoLink = container.querySelector('.infoLink');
    expect(infoLink).not.toBeNull(); 
    
    const ticketLink = container.querySelector('.ticketLink');
    expect(ticketLink).not.toBeNull(); 
}); 

test('show no values', () => {
    container = render(<Concert concert={testConcertWithNoValues} previewedListingIndex="1" previewedArtistIndex="0" />).container;

    const headliners = container.querySelectorAll('.headliner .artist');
    expect(headliners.length).toBe(0); 

    const openers = container.querySelectorAll('.opener .artist');
    expect(openers.length).toBe(0); 

    const time = container.querySelector('.time');
    expect(time).toBeNull(); 

    const price = container.querySelector('.price');
    expect(price).toBeNull(); 
    
    const infoLink = container.querySelector('.infoLink');
    expect(infoLink).toBeNull(); 
    
    const ticketLink = container.querySelector('.ticketLink');
    expect(ticketLink).toBeNull(); 
}); 
