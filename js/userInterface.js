// Header Sticky Effect
const header = document.querySelector('#header');

const stickyHeader = () => {
  const scry = window.screenY;
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickyHeader);

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-btn');

toggleMobileBtn = (e) => {
  const target = e.currentTarget; // 2. 함수가 실행 되면 현재 클릭한 지점의 요소를 target 변수에 저장
  // console.log(target); // 3. target 변수 출력
  target.classList.toggle('active');

  if (target.classList.contains('active') /*active가 있다면*/) {
    target.classList.remove('not-active'); /*not-active를 없애준다*/
  } else {
    target.classList.add('not-active'); /*not-active를 추가해준다*/
  }
};

mobileBtn.addEventListener('click', toggleMobileBtn); // 1.클릭했을 때 toggleMobileBtn 함수 실행
