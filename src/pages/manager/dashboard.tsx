import { navigate } from 'gatsby';
import React, { useState } from 'react'
import { Box, Button, Image, Text } from 'theme-ui'
import Card5 from '../../components/Cards/Card5'
import "../../components/css/main.css";
const Dashboard = () => {
  // const  [color,setColor] = useState("black");
  const styles = {
    mainBox: {
      width: '80%',
      margin:"auto",
      display: "flex",
      justifyContent: "center",
      '@media (max-width:633px)': {
        width:"100%"
      }
    },
    partationBox: {
      display: "flex",
      justifyContent: "center",
      margin:"auto",
      '@media (max-width:633px)': {
        display:"block"
      }
    },
    HotelNameBox: {
      margin: "10px 10px",
      padding: "20px 20px",
      display: "flex"
    },
    imageBox: {
      width: "60px",
      height: "40px",
      borderRadius: "5px",
      marginRight: "30px",
      display: "flex",
      justifyContext: "center",
      marginTop: "auto",
      marginBottom: "auto"
    },
    HotelName: {
      paddingTop: "7px",
      fontSize: "18px",
      fontWeight: "400px"
    },
    TypeHeadings: {
      textAlign: "center",
      margin: "20px 0px",
      fontWeight: "bolder",
      backgroundColor: "green",
      color: "white",
      fontSize: "20px",
      display: "block",
      width:"850px",
      '@media (max-width: 1330px)': {
        width:"750px"
      },
      '@media (max-width: 1217px)': {
        width:"700px"
      },
      '@media (max-width: 1140px)': {
        width:"600px"
      },
      '@media (max-width: 1030px)': {
        width:"500px"
      },
      '@media (max-width: 910px)': {
        width:"400px"
      },
      '@media (max-width: 400px)': {
        width:"100vw"
      }
      
    },
    leftPartation: {
      width: "370px",
      '@media (max-width:633px)': {
        width:"100%",
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        justifyContent:"center"
      }
    },

    rightPartation: {
      marginTop: "50px"
    },
    NoResultsTextBox:{
      display:"flex",
      justifyContent:"center",
      margin:"20px auto",
      width:"850px",
      textAlign:"center",
      '@media (max-width: 1330px)': {
        width:"750px"
      },
      '@media (max-width: 1217px)': {
        width:"700px"
      },
      '@media (max-width: 1140px)': {
        width:"600px"
      },
      '@media (max-width: 1030px)': {
        width:"500px"
      },
      '@media (max-width: 910px)': {
        width:"400px"
      },
      '@media (max-width: 400px)': {
        width:"100vw"
      }
    }
  }
  const hotelData = [{
    hotelName:"Gulsahn-e-jabeer",
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxsvtY9F5yhNy3Ypawu0OUueWBTA4n4AkwA&usqp=CAU"],
    rooms:[{
      roomName:"Ayasya Chyab,Studio Apartment",
      guests:4,
      beds:2,
      totalEarnings:5000,
      status:"BOOKED",
      baths:2,
      price:4780
    },
    {
      roomName:"Gasau Ahaks,Studio Apartment",
      guests:4,
      beds:2,
      totalEarnings:5000,
      status:"BOOKED",
      baths:2,
      price:4780
    },
    {
      roomName:"Aajaduh dajhgdak,Studio Apartment",
      guests:4,
      beds:2,
      totalEarnings:5000,
      status:"BOOKED",
      baths:2,
      price:4780
    }]
    },
    {
      hotelName:"Regency",
      images:["https://pix10.agoda.net/hotelImages/691/6919179/6919179_19032219230073193648.jpg?ca=8&ce=1&s=1024x768"],
      rooms:[{
        roomName:"Ayasya Chyab,Studio Apartment",
        guests:4,
        beds:2,
        totalEarnings:5000,
        status:"BOOKED",
        baths:2,
        price:4780
      },
      {
        roomName:"Gasau Ahaks,Studio Apartment",
        guests:4,
        beds:2,
        totalEarnings:5000,
        status:"BOOKED",
        baths:2,
        price:4780
      },
      {
        roomName:"Aajaduh dajhgdak,Studio Apartment",
        guests:4,
        beds:2,
        totalEarnings:5000,
        status:"BOOKED",
        baths:2,
        price:4780
      }]
      },{
        hotelName:"Tulip",
        images:["https://st.depositphotos.com/2288675/2455/i/600/depositphotos_24553989-stock-photo-hotel.jpg"],
        rooms:[{
          roomName:"Ayasya Chyab,Studio Apartment",
          guests:4,
          beds:2,
          totalEarnings:5000,
          status:"BOOKED",
          baths:2,
          price:4780
        },
        {
          roomName:"Gasau Ahaks,Studio Apartment",
          guests:4,
          beds:2,
          totalEarnings:5000,
          status:"BOOKED",
          baths:2,
          price:4780
        },
        {
          roomName:"Aajaduh dajhgdak,Studio Apartment",
          guests:4,
          beds:2,
          totalEarnings:5000,
          status:"OPEN",
          baths:2,
          price:4780
        }]
        },{
          hotelName:"Monal",
          images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxsvtY9F5yhNy3Ypawu0OUueWBTA4n4AkwA&usqp=CAU"],
          rooms:[{
            roomName:"Ayasya Chyab,Studio Apartment",
            guests:4,
            beds:2,
            totalEarnings:5000,
            status:"BOOKED",
            baths:2,
            price:4780
          },
          {
            roomName:"Gasau Ahaks,Studio Apartment",
            guests:4,
            beds:2,
            totalEarnings:5000,
            status:"BOOKED",
            baths:2,
            price:4780
          },
          {
            roomName:"Aajaduh dajhgdak,Studio Apartment",
            guests:4,
            beds:2,
            totalEarnings:5000,
            status:"ADVANCEBOOKED",
            baths:2,
            price:4780
          }]
          },{
            hotelName:"Ever Green",
        images:["https://st.depositphotos.com/2288675/2455/i/600/depositphotos_24553989-stock-photo-hotel.jpg"],
            rooms:[{
              roomName:"Ayasya Chyab,Studio Apartment",
              guests:4,
              beds:2,
              totalEarnings:5000,
              status:"BOOKED",
              baths:2,
              price:4780
            },
            {
              roomName:"Gasau Ahaks,Studio Apartment",
              guests:4,
              beds:2,
              totalEarnings:5000,
              status:"ADVANCEBOOKED",
              baths:2,
              price:4780
            },
            {
              roomName:"Aajaduh dajhgdak,Studio Apartment",
              guests:4,
              beds:2,
              totalEarnings:5000,
              status:"OPEN",
              baths:2,
              price:4780
            }]
            }
  ]
  const boolStatus = {
    open:false,
    booked:false,
    advanceBooked:false
  }
  const [hotalNumber, sethotalNumber] = useState(0);
  const listOfHotels = ["Gulsahn-e-jabeer", "Regency", "Tulip"]
  const listOfHotelPics = ["", "", ""]
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.partationBox}>
        {/* left */}
        <Box sx={styles.leftPartation}>
          <Text sx={{ fontSize: "20px", fontWeight: "bold" }}>List of Hotels<span style={{ display: "block", fontSize: "0.8rem", fontWeight: "normal" }}>(Listed by this account)</span></Text>

          {
            hotelData.map(({hotelName,images}, i) => {
            console.log("da",images)
              return(
              <Box key={i}>
                <Box sx={styles.HotelNameBox}>
                  <Image sx={styles.imageBox} src={images[0]} />
                  <Text sx={styles.HotelName}>
                    {hotelName}
                  </Text>
                </Box>
                <Box sx={{ display: "flex", width: "80%", margin: "-20px auto 3px", justifyContent: "space-around" }}>
                  <Button sx={{ color: "black", fontSize: "12px" }} onClick={()=>{sethotalNumber(i)}} >{("View Rooms").toUpperCase()}</Button>
                  <Button sx={{ color: "black", fontSize: "12px" }} onClick={()=>{navigate("/manager/property_details")}}>{("Edit Hotel").toUpperCase()}</Button>
                </Box>
                <hr style={{ width: "80%", margin: "0px auto" }} />
              </Box>
            )})
          }
        </Box>
        {/* Right */}
        <Box sx={styles.rightPartation}>
          {/* Booked */}

          <Text sx={styles.TypeHeadings}> BOOKED </Text>
          {
            hotelData[hotalNumber].rooms.map((data,i)=>{
              if(data.status === "BOOKED"){
                boolStatus.booked = true;
                return(<Box>
            <Card5 hotelName={hotelData[hotalNumber].hotelName} RoomName={data.roomName} Price={data.price} totalEarning={data.totalEarnings} NoOfBath={data.baths} NoOfBeds={data.beds} NoOfGuests={data.guests} /> 
          </Box>)
              }
              else{
                if((hotelData[hotalNumber].rooms.length === i+1) && !boolStatus.booked){
                  return(<Text sx={styles.NoResultsTextBox}>No Bookings Available</Text>)
                }
              }
            })
          }
          {/* Open */}
          <Text sx={styles.TypeHeadings}> OPEN </Text>
          {
            hotelData[hotalNumber].rooms.map((data,i)=>{
              if(data.status === "OPEN"){
                boolStatus.open = true;
                return(<Box>
            <Card5 hotelName={hotelData[hotalNumber].hotelName} RoomName={data.roomName} Price={data.price} totalEarning={data.totalEarnings} NoOfBath={data.baths} NoOfBeds={data.beds} NoOfGuests={data.guests} /> 
          </Box>)
              }
              else{
                if((hotelData[hotalNumber].rooms.length === i+1) && !boolStatus.open){
                  return(<Text sx={styles.NoResultsTextBox}>No Open Rooms Available</Text>)
                }
              }
            })
          }
          {/* Advance booked */}

          <Text sx={styles.TypeHeadings}> ADVANCE BOOKED </Text>
          {
            hotelData[hotalNumber].rooms.map((data,i)=>{
              if(data.status === "ADVANCEBOOKED"){
                boolStatus.advanceBooked = true;
                return(<Box>
            <Card5 hotelName={hotelData[hotalNumber].hotelName} RoomName={data.roomName} Price={data.price} totalEarning={data.totalEarnings} NoOfBath={data.baths} NoOfBeds={data.beds} NoOfGuests={data.guests} /> 
          </Box>)
              }
              else{
                if((hotelData[hotalNumber].rooms.length === i+1) && !boolStatus.advanceBooked){
                  return(<Text sx={styles.NoResultsTextBox}>No Advance Bookings</Text>)
                }
              }
            })
          }
        </Box>
      </Box>

    </Box>
  )
}

export default Dashboard