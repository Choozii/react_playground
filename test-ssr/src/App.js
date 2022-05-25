import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import styled from 'styled-components';
import Icon from './icon.png';

//폰 API 함수
const fetchUserName = () => {
  const usernames = ['mike', 'june', 'jamie'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
};

export default function App(props) {
  const [page, setPage] = useState(props.page);
  const [username, setUserName] = useState(null);

  useEffect(() => {
    fetchUserName().then(data => setUserName(data));
  }, []);

  useEffect(() => {
    window.onpopstate = event => {
      //뒤로가기 시 onpopstate event handler 실행
      setPage(event.state);
    };
  }, []);

  function onChangePage(e) {
    //특정 페이지로 이동하는 버튼의 이벤트 처리 함수
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setPage(newPage);
  }
  const PageComponent = page === 'home' ? Home : About;
  return (
    <Container>
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <img src={Icon} />
      <PageComponent username={username} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;
