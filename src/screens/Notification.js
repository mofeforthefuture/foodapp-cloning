import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../reducers/lang.reducer';
import {useSelector} from 'react-redux';

export default function Notification() {
  const language = useSelector(state => state.lang.value.lang);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(language);
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'French', value: 'fr'},
    {label: 'Igbo', value: 'ib'},
    {label: 'Yoruba', value: 'yb'},
  ]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Select Language</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={() => dispatch(changeLanguage({lang: value}))}
      />
    </View>
  );
}

export const useDropdown = () => useContext(LanguageCodeContext);
//IF YOURE NOT BRAVE ENOUGH NO ONE WILL BACK YOU UP
