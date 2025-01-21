import React from 'react';

// import { Card, CardContent, Typography, Container, Avatar, Grid } from '@material-ui/core';
import { divIcon } from 'leaflet';

const Profile: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software developer with a passion for open source.'
    };

    // return (
    //     <Container maxWidth="sm">
    //         <Card>
    //             <CardContent>
    //                 <Grid container spacing={2} alignItems="center">
    //                     <Grid item>
    //                         <Avatar>{user.name.charAt(0)}</Avatar>
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography variant="h5">{user.name}</Typography>
    //                         <Typography color="textSecondary">{user.email}</Typography>
    //                     </Grid>
    //                 </Grid>
    //                 <Typography variant="body1" style={{ marginTop: '1em' }}>
    //                     {user.bio}
    //                 </Typography>
    //             </CardContent>
    //         </Card>
    //     </Container>
    // );
    return (<div>
        "hello"
        <p>{user.name}</p>
    </div>);
};

export default Profile;