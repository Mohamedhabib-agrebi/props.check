import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const PlayersCard =({el})=> {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width :'280px' ,height:'290px'}} variant="top" src={el.URL} />
        <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>
                <h6>Nationality : {el.nationality}</h6>
                <h6>Age : {el.age}</h6>
                <h6>Team : {el.team} #{el.jerseyNumber}</h6>

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    )

}


PlayersCard.defaultProps={
    el :    {
        name : "Wissem",
        team : "Club",
        nationality : "Tunisienne",
        jerseyNumber : 9,
        age : 90,
        URL : "https://www.africatopsports.com/wp-content/uploads/2017/07/Wissem-Ben-Yahia.jpg"
        

    }
}

PlayersCard.propTypes = {
    el: PropTypes.object
}
export default PlayersCard