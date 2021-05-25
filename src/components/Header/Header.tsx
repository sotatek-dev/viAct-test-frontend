import * as React from 'react';
import './Header.style.ts';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Header.style';
import { useStoreActions } from '../../store/hooks';
import * as _ from 'lodash';

interface Props {
  onSearch?: (searchText: string) => void;
}

const Header = ({ onSearch }: Props) => {
  const classes = useStyles();
  const getAllNews = useStoreActions((actions) => actions.getAllNews);
  const handleChangeWithDebounce = _.debounce(async (e) => {
    getAllNews({ pageSize: 10, keyword: e.target.value });
  }, 500);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            viAct
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChangeWithDebounce}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
