import User from "../models/user.model.js"
import { fetchFromTMDB } from "../services/tmdb.service.js"

export const searchPerson = async (req, res) => {
    const { query } = req.params

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)

        if (response.results.length === 0) {
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title: response.results[0].name,
                    searchType: "person",
                    createdAt: new Date()
                }
            }
        })

        res.status(200).json({ success: true, content: response.results })
    } catch (error) {
        console.log(`Error in searchPerson controller: ${error.message}`)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const searchMovie = async (req, res) => {
    const { query } = req.params

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)

        if (response.results.length === 0) {
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].title,
                    searchType: "movie",
                    createdAt: new Date()
                }
            }
        })

        res.status(200).json({ success: true, content: response.results })
    } catch (error) {
        console.log(`Error in searchMovie controller: ${error.message}`)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const searchTv = async (req, res) => {
    const { query } = req.params

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)

        if (response.results.length === 0) {
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].name,
                    searchType: "tv",
                    createdAt: new Date()
                }
            }
        })

        res.status(200).json({ success: true, content: response.results })
    } catch (error) {
        console.log(`Error in searchTv controller: ${error.message}`)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const getSearchHistory = async (req, res) => {
    try {
        res.status(200).json({ success: true, content: req.user.searchHistory })
    } catch (error) {
        console.log(`Error in getSearchHistory controller: ${error.message}`)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const removeItemFromSearchHistory = async (req, res) => {
    let { id } = req.params
    id = parseInt(id) // What we get from params is always type of string, so in this case we convert it to int

    try {
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                searchHistory: { id }
            }
        })

        res.status(200).json({ success: true, message: "Item removed from search history" })
    } catch (error) {
        console.log(`Error in removeItemFromSearchHistory controller: ${error.message}`)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}
