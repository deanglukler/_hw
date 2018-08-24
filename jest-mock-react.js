// simply mock a component within a jest test..
jest.mock('components/common/Button', () => 'Button');

// --- or..
// create a __mocks__ folder

// .
// |- /ComponentToMock.js
// └- /__mocks__/ComponentToMock.js <-- create this folder/file!

// This code would live in ./__mocks__/ComponentToMock.js
import React from 'react';
const ComponentToMock = ({ testProp }) => <div>A mock with '{testProp}' passed!</div>;
export default ComponentToMock;

// Then in the test file, change the Jest mock statement to: jest.mock('./ComponentToMock');
// .mock() without the second function parameter, it automatically looks for a __mocks__ folder