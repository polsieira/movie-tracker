import { MovieInfo, mapStateToProps } from './MovieInfo';
import { shallow } from 'enzyme';
import React from 'react';


describe('MovieInfo', () => {
  describe('MovieInfo component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<MovieInfo
        id={({ id: '5' })}
        movies={
          [{
            title: 'Wicked',
            release_date: '2017',
            vote_average: 6.5,
            popularity: 55.55,
            overview: 'Blah',
            backdrop_path: 'http://pic.pic',
            id: 5
          },
          {
            title: 'Joker',
            release_date: '2019',
            average_rating: 7.5,
            popularity: 68.55,
            id: 6
          }]}
      />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  });

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // Setup
      const mockState = {
        movies: [{
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
        movies: [{
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
        }]
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });

});