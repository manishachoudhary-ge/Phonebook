import React from 'react'
import TextField from '@mui/material/TextField';

function inputSearch() {
    const [searchValue, setSearchValue] = useState('');
     const handleChange = (event) => {
    setSearchValue(event.target.value); // 2. Update state on change
  };
  return (
    <div>
        <TextField id="filled-basic" label="Search" variant="filled" value={searchValue} 
        onChange={handleChange}  />
    </div>
  )
}

export default inputSearch