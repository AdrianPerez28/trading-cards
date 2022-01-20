import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
function Stats({
    name,
    rarity,
    type,
    image,
    alt_text,
    abilities
})
{
    
    return(
        <Card className='background'>
            <CardHeader title=<h2>{name}</h2> />
            <CardMedia
                component='img'
                height='350'
                image={image}
                alt={alt_text}
            /> 
            <CardContent>
                 <h2>
                     {type}
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