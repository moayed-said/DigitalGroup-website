import { ref, onMounted, onUnmounted, readonly } from 'vue'

export function useWindowUtli() {
  const scrollTop = ref(0)
  const windowWidth = ref(0)

  function updateScroll(event) {
    scrollTop.value = event.target.scrollingElement.scrollTop 
  }

  function updateResize(){
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateResize);
  })
  onUnmounted(() => {
    window.addEventListener('scroll', updateScroll);
    window.removeEventListener('resize', updateResize);
  })

  return { 
    scrollTop: readonly(scrollTop),
    windowWidth: readonly(windowWidth)
  }
}