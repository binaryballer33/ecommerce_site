const classes = {
    card: { 
        maxWidth: '100%',
        minWidth: '320px',
        height: '600px',
        display: 'grid',
    },
    cardMediaContainer: {
        display: 'grid',
        placeItems: 'center',
    },
    cardMedia: { 
        display: 'grid',
        placeItems: 'center',
        height: '320px',
        aspectRatio: '1/1',
    },
    cardContent: { 
        display: 'flex',
        justifyContent: 'space-between',
        textWrap: 'wrap',
    },
    cardActions: { 
        display: 'flex',
        justifyContent: 'flex-end' 
    }        
}

export default classes;