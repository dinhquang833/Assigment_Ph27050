import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Pressable, SafeAreaView, Text, Alert } from 'react-native';

const QLShop = (props) => {
    const navigation = props.navigation;
    const {newItem} = props.route?.newItem || {};
    const {modifiedItem} = props.route?.modifiedItem || {};

    

    const [list,setList] = useState([
        {
            id: 1,
            name: 'Nguyễn Đình Quang',
            address: 'Hà Nội',
            number: '0904627875',
            status: '0',
        },
        {
            id: 2,
            name: 'Nguyễn Văn A',
            address: 'Bình Dương',
            number: '0767565712',
            status: '1',
        },
    ])

    const chuyenMH = (ten_mh) => {
        navigation.navigate(ten_mh);
    }


    return (
        <View>
            <SafeAreaView>
                <FlatList
                    data = {list}            
                    renderItem = {({item}) => (
                        
                        <View>
                            <Text style={{marginLeft: 30,marginTop:20 ,fontSize: 20, fontStyle:"italic",color:"red"}}>Thông tin khách hàng</Text>
                            <Text style={{marginLeft: 50, fontSize: 15}}>{item.id}</Text>
                            <Text style={{marginLeft: 50, fontSize: 15}}>{item.name}</Text>
                            <Text style={{marginLeft: 50, fontSize: 15}}>{item.address}</Text>
                            <Text style={{marginLeft: 50, fontSize: 15}}>{item.number}</Text>
                            <Text style={{marginLeft: 50, fontSize: 15}}>Trạng thái: {item.status}</Text>
                            
                        </View>
                    )}
                    keyExtractor = {(item) => {item.id}}
                />
            </SafeAreaView>
        </View>
    );
}

export default QLShop;

