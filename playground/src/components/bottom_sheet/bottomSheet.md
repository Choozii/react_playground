<h3> bottom sheet 정리</h3>

<h4>동작 방식</h4>

- 바텀 시트를 가지고 있는 페이지 우측 하단에 항상 버튼이 떠있도록
- 페이지에서 버튼을 누르면 bottom sheet show up
- showd up된 바텀 시트의 header를 클릭하면 바텀 시트 종료, 우측 하단 버튼만 뜨도록

<h4>구현할 때 생각할 것</h4>

- title, description(react node)를 props로 전달 가능
- propTypes 명시

<h4>problems</h4>

- height : fit-content or auto로 설정할 경우 transition이 적용이 되지 않음
  - 해결법 : scrollHeight 값을 사용해서 명확한 height value를 css로 전달
