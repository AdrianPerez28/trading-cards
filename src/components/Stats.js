import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function Stats({
    name,
    rarity,
    image,
    alt_text,
    abilities
})
{
    
    return(
        <Card>
            <CardMedia
                component='img'
                height='500'
                image={image}
                alt={alt_text}
            /> 
            <CardContent>
                 <h2>
                     {name}
                 </h2>
                 <p>
                     {rarity}
                 </p>
                 <ol>
                     {abilities.map(
                       (culinary) => {
                        return <li key={culinary}>{culinary}</li>;
                       } 
                    )}
                </ol>
            </CardContent>
        </Card>
        
    );
}
export default Stats;