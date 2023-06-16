import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CardRPG from '../../components/CardRPG';

export default function RPGPage(){

    const items = [
        {
          nome: 'Terra Blade',
          descricao: 'É uma espada de projétil Hardmode. Quando usado, dispara um projétil de onda verde.',
          imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b05eb4a-e3bf-4a96-a20e-695887f7fe24/ddm7dmh-cf8c14d6-528c-4aef-ad37-4574427818e9.png/v1/fill/w_876,h_912,q_70,strp/terra_blade_by_jiangosaur_ddm7dmh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcLzBiMDVlYjRhLWUzYmYtNGE5Ni1hMjBlLTY5NTg4N2Y3ZmUyNFwvZGRtN2RtaC1jZjhjMTRkNi01MjhjLTRhZWYtYWQzNy00NTc0NDI3ODE4ZTkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8NKqEPMUJbLpQjfHfZ3OLN5f2Nte2M-RPuMjM3N_6jA"
        },
        {
          nome: 'Zenith',
          descricao: 'É uma arma corpo-a-corpo Hardmode, pós- Moon Lord, criada usando uma variedade de espadas obtidas ao longo da progressão do jogo.',
          imgUrl: "https://i.pinimg.com/originals/0f/8e/90/0f8e9082a97717b53085fa60cfdd07fd.png"
        },
        {
          nome: 'Influx Waver',
          descricao: 'É uma espada larga Hardmode pós-golem. Ele dispara um projétil de espada em linha reta em direção ao cursor enquanto é girado',
          imgUrl: "https://lh3.googleusercontent.com/aXSZccsx0D19Ou5-v1xVoLFKYA_R-RUODbyRcVGZ8LXs3PkoVYtYizrQts7PHOmO6Cfg03jV6ywqcQTrbNJMiA"
        }
      ]

    return(
        <SafeAreaView style={styles.container}>
            {items.map(item => <CardRPG card={item}/>)}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });