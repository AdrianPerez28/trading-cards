import Stats from './components/Stats';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './App.css';

function App() {

  const chef = [
    {
      name: 'Anthony Bourdain',
      rarity: 'Rare',
      type: 'Earth',
      image: 'https://www.papercitymag.com/wp-content/uploads/2016/02/177_e_0316.jpg',
      alt_text: 'Young Anthony Bourdain',
      abilities: [
        'Rear-naked Choke',
        'Pork Chop Slap',
        'Bodega Sandwich Slam'
      ]
    },
    {
      name: 'Julia Child',
      rarity: 'Super Rare',
      type: 'Water',
      image: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/06/portrait-of-julia-child.jpg',
      alt_text: 'Black and white Julia Child',
      abilities: [
        'Beef Stew Splash',
        'Casserole crash',
        'Gumbo Grenade'
      ]
    },
    {
      name: 'Guy Fieri',
      rarity: 'Common',
      type: 'Fire',
      image: 'https://media.gq.com/photos/59dfc6d9d61cb80476584e18/1:1/w_676,h_676,c_limit/guy-fieiri-flame.jpg',
      alt_text: 'Excited Guy Fieri',
      abilities: [
        'Street Taco Tornado',
        'Fried Fish Flamethrower',
        'Rest'
      ]
    }
  ];
  
  return (
    <Grid container spacing={2}>
      
      {
        chef.map((culinary) => {
          return (
            <Grid item xs={4}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Own" />
              
              <Stats
              name={culinary.name}
              rarity={culinary.rarity}
              type={culinary.type}
              image={culinary.image}
              alt_text={culinary.alt_text}
              abilities={culinary.abilities}
            />
            </Grid>
          )
        })
        
      }
    </Grid>
    
  );
}

export default App;
