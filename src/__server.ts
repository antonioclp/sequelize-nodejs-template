import app from './__app'
import dotenv from 'dotenv'

dotenv.config()

const PORT = 3060

const server = app.listen(3060, () => console.log(
  `Server is running on PORT: ${PORT}`,
))

export default server
