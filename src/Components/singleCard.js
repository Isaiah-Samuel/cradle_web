import Card from 'react-bootstrap/Card';
import '../styles/singleCard.css'

function SingleCard(props) {
    const {image,title,text} = props
  return (
    <div style={{marginTop:'15px',marginRight:'5px' }}>
        <Card style={{width:'100%',height:'100%'}} className="bg-dark text-white">
        <Card.Img style={{width:'100%',height:'100%'}} src={image} alt="Card image"/>
        <Card.ImgOverlay className='card-overlay' style={{color:'white',top:'60%', paddingLeft:'10%',textAlign:'left',}}>
            <Card.Title className='cardT' style={{fontSize:'20px',fontWeight:700}}>{title}</Card.Title>
            <Card.Text className='cardT' style={{fontSize:'12px',fontWeight:700}}> 
            {text}
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
        </Card>
    </div>
  );
}

export default SingleCard;