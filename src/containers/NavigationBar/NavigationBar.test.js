import { NavigationBar, mapStateToProps, mapDispatchToProps } from './NavigationBar';
import { loginUser } from '../../actions';
import { shallow } from 'enzyme';
import React from 'react';


describe('NavigationBar', () => {
  let wrapper;
  describe('NavigationBar component', () => {
    const mockLoginUser = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<NavigationBar
        isSignedIn={false}
        name='Pol'
        loginUser={mockLoginUser}
      />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with name and isSignedIn', () => {
      // Setup
      const mockState = {
        favorites: [{
          title: 'Wicked',
          release_date: '2017',
          average_rating: 6.5,
          popularity: 55.55,
          movie_id: 5
        },
        {
          title: 'Joker',
          release_date: '2019',
          average_rating: 7.5,
          popularity: 68.55,
          movie_id: 6
        }],
        user: {
          name: 'Pol',
          id: 2,
          isSignedIn: true
        }
      };
      const expected = {
        name: 'Pol',
        isSignedIn: true
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with an loginUser action when button is clicked', () => {
      // Setup
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser({ name: '', id: '', isSignedIn: false })

      // Execution
      // const mappedProps = mapDispatchToProps(mockDispatch);
      wrapper.find('button').at(0).simulate('click');

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

})