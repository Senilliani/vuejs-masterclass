export const usePageStore = defineStore('page-store', () => {
  const pageData = ref({
    title: '',
  })

  return {
    // devuelve nuestros global state
    pageData,
  }
})

// make sure to pass the right store definition
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
