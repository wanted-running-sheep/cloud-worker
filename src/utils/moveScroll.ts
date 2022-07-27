const moveScroll = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

export default moveScroll;
