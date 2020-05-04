import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 25px 0 25px;
  width: 100%;
`;

const Logo = styled.Image`
  width: 20px;
  height: 40px;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.1px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require('../assets/logonetflix.png')}
      />
      <Button>
        <Text>TV Shows</Text>
      </Button>
      <Button>
        <Text>Movies</Text>
      </Button>
      <Button>
        <Text>My List</Text>
      </Button>
    </Container>
  );
};

export default Header;
