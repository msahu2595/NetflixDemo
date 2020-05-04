import React from 'react';

import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px 0px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 6px 10px;
`;

const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

const MovieCard = styled.View`
  padding-right: 9px;
`;

const MoviePoster = styled.Image`
  width: ${(Dimensions.get('window').width * 25) / 100}px;
  height: 160px;
`;

const Movies = ({label, item}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {item.map((movie, i) => {
          return (
            <MovieCard key={String(i)}>
              <MoviePoster resizeMode="cover" source={movie} />
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

export default Movies;
