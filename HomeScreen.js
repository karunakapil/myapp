import React from 'react'
import {Icon,Button,Container,Header,Content,Left} from 'react-base'
import { StyleSheet, Text, View } from 'react-native';
export default class HomeScreen extends React.Component{
render(){
  return(
<Container>
<Header>
<Left>
<Icon name="menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
</Left>
</Header>
<Content contentContainerStyle = {{
flex:'1',
alignItem:'center',
justifyContent:'center'
}}>
        <Text>HomeScreen</Text>
        </Content>
        </Container>

	  );
	}
}