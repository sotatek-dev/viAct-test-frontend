import { makeStyles, Theme, createStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    coverImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  })
);
