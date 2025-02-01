const getRating = (rating: number) => ({
  fullRating: Math.floor(rating),
  hasHalfRating: rating % 1 !== 0,
})

export default getRating
