import { Typography } from '@material-ui/core'
import { Badge } from 'react-bootstrap'
import React from 'react'
import { Box, Image } from 'theme-ui'
import Stars from '../../components/Stars/Stars'
import Cards from '../../components/Cards/Cards'
import { CalendarTodayOutlined, CheckCircle } from '@material-ui/icons'
import Card2 from '../../components/Cards/Card2'
import Card3 from '../../components/Cards/Card3'

const hotel_detalis = () => {
  const styles = {
    container: {
      marginX: "10%"
    },
    mainHeadingDiv: {
      display: "flex",
      justifyContent: "space-between"
    },
    headerDiv: {
      color: "red"
    },
    mainHeading: {
      fontSize: "1.6rem",
      color: "#535051",
      fontWeight: "bold"
    },
    description: {
      fontSize: "1rem",
      color: "#535051"
    },
    secondBadge: {
      top: "10px",
      position: "relative"
    },
    imageDiv: {
      borderRadius: "20px",
      backgroundColor: "black"
    },
    imageCardDiv: {
      display: "flex",
      justifyContent: "space-between"
    },
    mapDiv: {
      borderRadius: "20px",
      marginTop: "10px"
    },
    packageSummaryTab: {
      color: "#bb0039",
      borderBottom: "5px solid #bb0039",
      paddingTop: "20px",
      paddingBottom: "10px",
      width: "138px"
    },
    packageSummaryHeading: {
      color: "#535051",
      paddingTop: "25px",
      paddingBottom: "10px",
      fontWeight: "bold"
    },
    packageHighlightsHeading: {
      color: "whitesmoke",
      padding: "10px 25px",
      backgroundColor: "#080130",
      borderRadius: "5px",
      width: "500px"
    },
    PrimaryHeadlightBox: {
      display: "flex",
      flexFlow: "wrap",
      width: "500px",
      marginTop: "20px"
    },
    OffersBox: {
      display: "flex",
      flexFlow: "wrap",
      width: "500px",
      justifyContent: "space-between",
      marginTop: "20px"
    },
    textDiv: {
      width: "200px",
      margin: "20px"
    },
    textDivExtended: {
      width: "250px",
      margin: "40px"
    },
    packageSummaryDetailsHeading: {
      color: "whitesmoke",
      padding: "10px 25px",
      backgroundColor: "#080130",
      borderRadius: "5px"
    },
  }

  const highlights = ["Highligh flexible schedules ", "Isn’t that the dream now", "schedules and elite team members", "High flexible schedules", "flexible schedules", "High elite team members"]
  const offers = ["Highligh flexible schedules ", "Isn’t that the dream now", "schedules and elite team members", "High flexible schedules", "flexible schedules", "High elite team members"]
  const mealPlans = ["I that the dream now", "schedules and elite team members"]

  return (
    <Box sx={styles.container}>

      {/* heading */}
      <Box sx={styles.mainHeadingDiv}>
        <Box>
          <Stars rating={4} />
          <Box style={{ display: "flex" }}>
            <Typography style={styles.mainHeading}  >{"GRAND MARQUEE TOWN"}</Typography>
            <Box style={{ top: "7px", position: "relative" }}>
              <Badge bg="danger">Badge</Badge>
            </Box>
          </Box>
          <Typography style={styles.description}  >{"video ki jo link share ki thi wo / will take + care of adding accessibility / attributes. design dekhy th"}</Typography>
        </Box>
        <Box sx={styles.secondBadge}>
          <Badge bg="danger">
            <br />
            User Reads
            <br />
            4.5/s
            <br />
            &nbsp;
          </Badge>
        </Box>
      </Box>

      {/* image */}

      <Box sx={styles.imageCardDiv}>

        <Box sx={styles.imageDiv}>
          <Image sx={styles.imageDiv} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-n4Cm3TtWnWizRo2U5wJkpr3kaaSSaYU4gA&usqp=CAU' width="750px" />
        </Box>
        <Box>
          <Box>
            <Cards />
          </Box>

          <Box sx={styles.mapDiv}>
            <Image sx={styles.mapDiv} width="300px" src="https://image.shutterstock.com/image-vector/town-streets-on-plan-vector-260nw-184657850.jpg" />
          </Box>

        </Box>
      </Box>

      <Box>
        <Typography variant='body1' style={styles.packageSummaryTab}>
          Package Summary
        </Typography>
      </Box>


      <Box>
        <Typography variant='h5' style={styles.packageSummaryHeading}>
          PACKAGE SUMMARY
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>

          <Box>
            <Typography variant='body1' style={styles.packageHighlightsHeading}>
              Package Highlights
            </Typography>

            <Box sx={styles.PrimaryHeadlightBox}>
              {highlights.map((highlight, i) => (
                <Typography style={styles.textDiv} key={i} variant='body2'>
                  <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <CheckCircle />
                    <Box style={{ width: "160px" }}>
                      {highlight}
                    </Box>
                  </Box>
                </Typography>
              ))
              }
            </Box>

          </Box>

          <Box>
            <Typography variant='body1' style={styles.packageHighlightsHeading}>
              Package Offers
            </Typography>

            <Box sx={styles.OffersBox}>

              <Typography style={styles.textDiv} variant='body2'>
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                  <CheckCircle />
                  <Box style={{ width: "160px" }}>
                    flexible schedules and elite team members! (Isnt that the dream now?)
                  </Box>
                </Box>
              </Typography>

              <Typography style={styles.textDiv} variant='body2'>
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                  <CalendarTodayOutlined />
                  <Box style={{ width: "160px" }}>
                    {Date()}
                  </Box>
                </Box>
              </Typography>

              <Typography style={styles.textDivExtended} variant='body2'>
                * valid till 30 April 2022
              </Typography>

            </Box>

          </Box>

        </Box>
        <Box>

          <Typography style={styles.packageSummaryDetailsHeading}>
            Primary Summary Details
          </Typography>

        </Box>
        <Box>
          <Typography style={{ color: "#bb0039", margin: "20px" }}>
            Perchase Includes
          </Typography>
        </Box>
        {
          offers.map((offer) => (<Typography style={{ margin: "20px" }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px" }}>
                {offer}
              </Box>
            </Box>
          </Typography>
          ))}

      </Box>
      <Box>
        <Typography style={{ color: "#bb0039", margin: "20px", marginTop: "50px" }}>
          Meal plans available
        </Typography>
      </Box>
      {
        mealPlans.map((meal) => (
          <Typography style={{ margin: "20px" }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px" }}>
                {meal}
              </Box>
            </Box>
          </Typography>
        ))
      }

<Box>
        <Typography style={{marginBottom:"50px",marginTop:"50px",textAlign:"center"}} variant="h5">
          OTHER PACKAGES
        </Typography>
      </Box>
      <Box style={{display:"flex",justifyContent:"space-between",flexFlow:"wrap"}}>
      <Card2/>
      <Card3/>
      <Card3/>
      <Card3/>
      <Card3/>

      </Box>


    </Box>
  )
}

export default hotel_detalis
