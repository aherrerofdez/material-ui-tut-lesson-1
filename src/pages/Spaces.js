import Header from '../components/Header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

export default function Booking() {
  return (
    <>
      <Header />
      <Box>
        <ImageList variant="masonry" cols={3} gap={8} sx = {{marginTop: 5, marginLeft: 5, marginBottom: 2, marginRight: 5}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

const itemData = [
  {img: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Big Blue Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Plants Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Open Space Co-working Space'},
  {img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Big Meeting Room'},
  {img: 'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Meeting Room'},
];
