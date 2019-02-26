import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component{
    render(){

        const { onLocationSelected } = this.props;

        return <GooglePlacesAutocomplete
            placeholder="Para onde?"
            placeholderTextColor = "#333"
            onPress= {onLocationSelected}
            query = {{
                key: 'AIzaSyDTgx2jLkQxe5uotKfK4BsqVPwwQ8gd7C8',
                language: 'pt'
            }}
            textInputProps={{
                autoCapitalize: 'none',
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContaine= {false}
            styles={{
                container:{
                    position: 'absolute',
                    top: Platform.select({ios:60, android:15}),
                    width: "100%"
                },
                textInputContainer:{
                    flex: 1,
                    backgroundColor: "transparent",
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput:{
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5, // android
                    shadowColor: '#000', //ios
                    shadowOpacity: 0.1, //ios
                    shadowOffset: {x:0, y:0}, //ios
                    shadowRadius: 15, //ios
                    borderWidth: 1,
                    borderColor: '#DDD', 
                    fontSize: 18, 
                },
                listView:{
                    borderWidth: 1,
                    borderColor: "#DDD",
                    backgroundColor: "#FFF",
                    marginHorizontal: 20,
                    elevation: 5, 
                    shadowColor: '#000', //ios
                    shadowOpacity: 0.1, //ios
                    shadowOffset: {x:0, y:0}, //ios
                    shadowRadius: 15, //ios
                    marginTop: 10

                },
                description:{
                    fontSize: 20,
                },
                row: {
                    padding: 20,
                    height: 58
                }
            }}
        />;
    }
}