import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import us from '../../Assets/images/us.png';
import sp from '../../Assets/images/sp.png';
import fr from '../../Assets/images/fr.png';
import gr from '../../Assets/images/gr.png';
import ru from '../../Assets/images/ru.png';
import ch from '../../Assets/images/ch.png';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Services/store/authSlice';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 100,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Languagebtn = () => {
  const { language } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    // console.log('', language)
    if (language) {
      setSelectedLanguage(language);
      i18n.changeLanguage(language.toLowerCase());
    }
  }, [language])

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    dispatch(setLanguage(language));
    i18n.changeLanguage(language.toLowerCase());
    handleClose();
  };

  const languages = [
    { name: 'EN', value: 'en', flag: us },
    { name: 'SP', value: 'sp', flag: sp },
    { name: 'FR', value: 'fr', flag: fr },
    { name: 'GR', value: 'gr', flag: gr },
    { name: 'RU', value: 'ru', flag: ru },
    { name: 'CH', value: 'ch', flag: ch },
  ];


  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          textTransform:'uppercase',
          paddingInline: ".65rem",
          paddingBlock: ".45rem",
          borderRadius: "999px",
          fontSize: { xs: "16px", md: "14px", xl: "16px" },
          '&:hover': {
            backgroundColor: 'white',
          },
        }}
      >
        <img
          src={languages.find(lang => lang.value === selectedLanguage)?.flag}
          alt={`${selectedLanguage} flag`}
          style={{ width: '20px', marginRight: '8px' }}
        />
        {selectedLanguage}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.name}
            value={language.value}
            onClick={() => handleLanguageChange(language.value)}
            disableRipple
          >
            <img
              src={language.flag}
              alt={`${language.name} flag`}
              style={{ width: '20px', marginRight: '8px' }}
            />
            {language.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default Languagebtn;
