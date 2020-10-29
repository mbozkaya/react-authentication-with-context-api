import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { MockApi } from './MockApi';
configure({ adapter: new Adapter() });

jest.mock('./MockApi', () => {
    // Works and lets you check for constructor calls:
    return {
        MockApi: jest.fn().mockImplementation(() => {
            return {
                getAllUSers: () => [],
                setUsers: () => undefined,
            };
        }),
    };
});

beforeEach(() => {
    MockApi.mockClear();
});



it('requires be an array  to get all users method result', () => {
    const mockApi = new MockApi();
    expect(mockApi.getAllUSers()).toEqual([]);
});

it('requires set users as an array', () => {
    const mockApi = new MockApi();
    expect(mockApi.setUsers()).toEqual(undefined);
});

