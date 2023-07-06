import { Text,View,Pressable,StyleSheet,Image } from "react-native";

const Home = (props) => {
    const navigation = props.navigation;

    const chuyenMH = (ten_mh) =>{
        navigation.navigate(ten_mh);
    }

    return(
        <View>
            <Image style={{height: 70, width: 170, marginLeft: 100}} source={require('../../../../assets/logo_fpt.png')} />
            <Text style={{marginLeft: 70, fontSize: 21, fontStyle:"italic"}}>Assignment môn Đa nền tảng</Text>
            <Pressable onPress={() => chuyenMH('Info', {id: 123})}>
                <Text style={{marginLeft: 30, marginTop: 20,fontSize:15}}>Màn hình Thông tin cá nhân</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('QLShop',{id: 234})}>
                <Text style={{marginLeft: 30,fontSize:15}}>Màn hình Quản lý cửa hàng</Text>
            </Pressable>
        </View>
    );
};

export default Home;