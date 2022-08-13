import React from "react";
import styled from "styled-components/native";
import theme from './theme.json'

export const SafeAreaView = styled.SafeAreaView`
`;

export const Container = styled.View`
    flex: ${(props) => props.flex || '1'};
    width: 100%;
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    justify-content: ${(props) => (props.justify || 'center')};
    padding: ${(props) => props.padding || 0}px;
    padding-top: ${(props) => props.paddingtop || 0}px;
    padding-bottom: ${(props) => props.paddingbottom || 0}px;
    padding-right: ${(props) => props.paddingright || 0}px;
    padding-left: ${(props) => props.paddingleft || 0}px;
    margin-top: ${(props) => props.marginTop || 0}px;
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    align-items: ${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || '100%'};
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.zIndex || 1}px;
`;

export const Text = styled.Text`
    color: ${(props) => props.color || 'black'};
    font-size: ${props => props.size ? '15px' : '22px'};
    font-weight: ${props => props.weight || 'normal'};
    text-align: ${props => props.align || 'center'};
    padding: ${(props) => props.padding || 0}px;
    padding-right: ${(props) => props.paddingright || 0}px;
    padding-left: ${(props) => props.paddingleft || 0}px;
    padding-bottom: ${(props) => props.paddingbottom || 0}px;
    flex: ${(props) => props.flex || '1'};
    width: 100%;
`;

export const List = styled.FlatList`
    flex: 1;
    margin-bottom: 10px;
    width: 90%;
`;

export const BottomButton = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #013E39;
`;

export const ListItem = styled.TouchableOpacity`
    flex: 1;
    flex-direction: ${(props) => (props.direction ? 'row' : 'column')};
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const ListSeparator = styled.View`
    height: 2px;
    width: 100%;
    background: #B4A982;
`;

export const View = styled.View`
	background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
`;

export const FloatingButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    right: 20px;
    border-radius: 50px;
`;

export const DropdownButtonStyle = styled.TouchableOpacity`
    /* background-color: "#FFF";
    width: 80%;
    height: 40px;
    border-radius: 20px;
    margin-top: 10px; */
    
    width: 50%;
    height: 50px;
    background-color: #FFF;
    border-radius: 8px;
    border-width: 1px;
    border-color: #444;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const AnimalInfoImage = ({ imageSource, height }) => {
	return (
		<Container height={height} marginBottom={30}>
			<Image source={imageSource} />
		</Container>
	)
}

export const ScrollView = styled.ScrollView`
  flex: ${(props) => props.flex || '1'};
  width: 100%;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
`;

export const AnimalInfoTabButton = styled.TouchableOpacity`
	flex: 4;
	height: 58px;
	background-color: #F8F7F2;
	justify-content: center;
	align-items: center;
	border-bottom-width: ${props => props.selected ? 3 + 'px' : 0};
	border-bottom-color: #013E39;
`;

export const TextInput = styled.TextInput`
    background-color: #EBE6D3;
    padding: 6px 10px;
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #013E39;
`

// export const Container = styled.View`
//     flex: 1;
//     width: 100%;
//     background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
//     flex-direction: ${(props) => (props.row ? 'row' : 'column')};
//     justify-content: ${(props) => (props.justify || 'center')};
//     padding: ${(props) => props.padding || 0}px;
//     align-items: ${(props) => props.align || 'center'};
//     max-width: ${(props) => props.width || '100%'};
//     max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
//     position: ${(props) => props.position || 'relative'};
//     top: ${(props) => props.zIndex || 1};
// `;

// export const Button = styled.TouchableOpacity`
//     width: 100%;
//     padding: ${(props) => props.compact ? 5 : 15}px;
//     opacity: ${(props) => props.disabled ? 0.5 : 1};
//     background: ${props => props.type ? theme.color[props.type] : theme.colors.primary};

// `;

// export const ButtonText = styled.Text`
//     text-align: center;
//     color: ${props => props.color ? theme.colors[props.color] : '#000'}
// `;

// export const Title = styled.Text`
//     font-size: 20px;
//     color: ${theme.colors.dark};
//     font-weight: bold;
// `;

// export const SubTitle = styled.Text`
//     font-size: ${props => props.small ? '12px' : '15px'};
//     opacity: 0.7;
//     font-weight: ${props => props.bold ? 'bold' : 'normal'};
//     color: ${props => props.color ? theme.colors[props.color] : theme.colors.dark}
// `;

// export const PickerButton = styled.TouchableOpacity`
//     width: 100%;
//     height: 40%;
//     margin-top: 2.5%;
//     border-width: 3px;
//     border-style: solid;
//     justify-content: space-around;
//     align-items: center;
//     border-color: ${props => props.active ? theme.colors.primary : theme.colors.muted50};
//     background-color: ${props => props.active ? theme.colors.primary + '80' : theme.colors.muted50}
// `;

// export const Input = styled.TextInput`
//     background-color: ${theme.colors.light};
//     border: 1px solid ${theme.colors.muted};
//     width: 100%;
//     padding: 7px 15px;
// `;

// export const Spacer = styled.View`
//     width: ${props => props.width || '100%'};
//     height: ${props => props.height || 10}px;
// `;

// export const AdressList = styled.FlatList`
//     flex: 1;
//     width: 100%;
//     padding-top: 10;
//     background: #f90;
// `;

// export const AdressItem = styled.TouchableOpacity`
//     padding: 5px 0;
//     align-items: flex-start;
// `;