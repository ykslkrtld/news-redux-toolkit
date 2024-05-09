import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardMedia } from "@mui/material"
import { useEffect } from "react"
import { clearNewsData, getNews } from "../features/newsSlice"
import { useDispatch, useSelector } from "react-redux"
import loadingGif from "../assets/loading.gif"

const News = () => {
  const dispatch = useDispatch()

  const {newsData, loading, error} = useSelector((state) => state.news)

  useEffect(() => {
    dispatch(getNews())
    return () => {
    dispatch(clearNewsData())
    }
  }, [])

  return (
    <>
    <Typography textAlign="center">
      <h1>NEWS</h1>
      </Typography>
      {loading && <img src={loadingGif} alt="gif" /> }
      {error && <Typography variant="h5" color="error" component="div">
        Oops something went wrong
      </Typography> }
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {newsData.map((item, index) => (
          <Card sx={{ maxWidth: 345, m:"1rem", height: 600, position:"relative" }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{position:"absolute", bottom:"5px", left:"3rem"}}>Share</Button>
              <Button size="small" sx={{position:"absolute", bottom:"5px", right:"3rem"}} href={item?.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default News
