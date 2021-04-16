    import React from 'react';
    import {makeStyles} from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import InputBase from '@material-ui/core/InputBase';
    import IconButton from '@material-ui/core/IconButton';
    import SearchIcon from '@material-ui/icons/Search';

const URLInput = ({ onClick }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: "100%",
        },
        input: {
            width: 400,
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }));

    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Enter URL"
                inputProps={{'aria-label': 'enter url'}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon onClick={onClick}/>
            </IconButton>
        </Paper>
    );
}

export default URLInput;
