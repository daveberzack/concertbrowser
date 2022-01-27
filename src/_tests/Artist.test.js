import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Artist from '../components/Artist';

const mockOnPreview = jest.fn();
const mockOnStop = jest.fn();
const mockOnNext = jest.fn();
const testArtist = "Test Artist Name";
let container;

beforeEach(() => {
    container = render(<Artist artist={testArtist} onPreview={mockOnPreview} onStop={mockOnStop} onNext={mockOnNext} />).container;
});
afterEach(() => {
    container.remove();
    container = null;
    jest.clearAllMocks();
});

test('show artist name', () => {
    const testArtistElement = container.querySelector('.artist');
    expect(testArtistElement.innerHTML).toBe("Test Artist Name"); 
});

test('preview button calls play', () => {
    const button = container.querySelector('.icon-play');
    expect(button).not.toBe(null);
    button.click();
    expect(mockOnPreview).toBeCalledTimes(1);
});

test('pause button calls stop', () => {
    const button = container.querySelector('.icon-pause');
    expect(button).not.toBe(null);
    button.click();
    expect(mockOnStop).toBeCalledTimes(1);
});

test('next button calls next', () => {
    const button = container.querySelector('.icon-next');
    expect(button).not.toBe(null);
    button.click();
    expect(mockOnNext).toBeCalledTimes(1);
});