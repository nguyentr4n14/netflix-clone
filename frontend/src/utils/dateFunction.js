export const formatReleaseDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export const formatHistoryDate = (dateString) => {
    const date = new Date(dateString)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const month = monthNames[date.getUTCMonth()]
    const day = date.getUTCDate()
    const year = date.getUTCFullYear()

    return `${month} ${day}, ${year}`
}