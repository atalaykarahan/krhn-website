import {
    CardSubtitle,
    CardBody,
    Button,
    Card,
    CardTitle,
    CardText,
  } from "reactstrap";

const About = () => {
    return ( <>
    
    
    <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
    
    
    
    
    
    </> );
}
 
export default About;