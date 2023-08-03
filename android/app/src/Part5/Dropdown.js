import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import DropDownPicker from "react-native-dropdown-picker";
import { Fonts } from '../../../../source/Constant/Font';
import { Colors } from '../../../../source/Constant/Colors';

const Dropdown = () => {
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState();
    const [gender, setGender] = useState([
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Prefer Not to Say", value: "neutral" },
    ]);
    const onGenderOpen = useCallback(() => {
        //setCompanyOpen(false);
    }, []);
    return (
        <View>
            <DropDownPicker
                style={styles.holder}
                textStyle={styles.txtPass2}
                labelStyle={styles.txtPass2}
                placeholderStyle={styles.txtPass}
                listItemContainerStyle={[styles.holder, {borderRadius: 0}]}
                dropDownContainerStyle={{borderWidth:0}}

                open={genderOpen}
                value={genderValue} //genderValue        
                items={gender}
                setOpen={setGenderOpen}
                setValue={setGenderValue}
                setItems={setGender}
                placeholder="Select Gender"
                onOpen={onGenderOpen}
                zIndex={3000}
                zIndexInverse={1000}
                ArrowDownIconComponent={() => {
                    return (
                      <Image style={{width: 12, height: 7}} 
                      source={require('../../../../assets/images/ic_arrowDown.png')}></Image>
                    );
                }}
                ArrowUpIconComponent={() => {
                    return (
                      <Image style={{width: 12, height: 7}} 
                      source={require('../../../../assets/images/ic_arrowDown.png')}></Image>
                    );
                }}
            />
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    txtPass: {
        fontSize: 16,
        fontFamily: Fonts.font_400,
        color: Colors.placeholder,
    },
    txtPass2: {
        fontSize: 16,
        fontFamily: Fonts.font_400,
        color: Colors.brown_bodyText,
    },
    holder:{
        backgroundColor: Colors.fillTextInput,
        paddingLeft: 27,
        paddingRight: 21,
        borderRadius: 5,
        borderWidth: 0,
    }
})