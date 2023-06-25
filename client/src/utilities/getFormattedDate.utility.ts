const getFormattedDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-US')

export default getFormattedDate
