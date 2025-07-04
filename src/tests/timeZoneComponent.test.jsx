// src/tests/timeZoneComponent.test.jsx
//
// Scope: This file contents include: 1) Necessary imports for React, testing-library methods, jest-dom extensions, and mock-service-worker utilities. 2) The mock service worker setup for API responses. 3) The 'setup' function to render the TimeZoneListComponent with given props for testing. 4) Test declarations using describe and test blocks to check the initial component render, successful data fetching and rendering, and error handling on fetch failure. Each test aims to ensure that the TimeZoneListComponent behaves as expected under different scenarios.

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setupWorker, rest } from 'msw';
import { TimeZoneListComponent } from '../components/TimeZoneListComponent';
const server = setupWorker(
  rest.get('/timezones', (req, res, ctx) => res(ctx.json([{ timezone_id: 'tz1', label: 'GMT' }]))),
  rest.post('/timezones', (req, res, ctx) => res(ctx.status(200), ctx.json({ message: 'Timezone added' }))));
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
describe('TimeZoneListComponent tests', () => {
  test('renders without crashing', async () => {
    const { getByText } = render(<TimeZoneListComponent />);
    await waitFor(() => expect(getByText('GMT')).toBeInTheDocument());
  });
  test('handles server error', async () => {
    server.use(
      rest.get('/timezones', (req, res, ctx) => res(ctx.status(500)))
    );
    const { getByText } = render(<TimeZoneListComponent />);
    await waitFor(() => expect(getByText('Error loading time zones')).toBeInTheDocument());
  });
});