export function useWindowWidth() {

  const screenWidth = ref(window.innerWidth);

  const updateWidth = () => {
      screenWidth.value = window.innerWidth;
  
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWidth);
  });

  return screenWidth;
}