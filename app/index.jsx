import { ScrollView, Text, View, Image,Share,Button } from "react-native";
import { useEffect, useState } from "react";
import * as Clipborad from 'expo-clipboard'

import { styles } from '@/styles'
import { ButtonGenerate } from '@/src/components/buttons/buttonGenerate'
import { ButtonGeneric } from "@/src/components/buttons/buttonGeneric";
import { useJoke } from '@/src/hooks/useJoke'
import { usePickUpLine } from "@/src/hooks/usePickUpLine";
import { useInsult } from "@/src/hooks/useInsult";
import { RadioButton } from "@/src/components/radio/index";
import { colors } from "@/src/styles/colors";
import  kmon2 from '../assets/images/kmon2.png'
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  //hooks
  const { joke, getJoke, clearJoke } = useJoke()
  const { pickupLine, getPickupLine, clearPickupLine } = usePickUpLine()
  const { insult, getInsult, clearInsult } = useInsult()
  //useStates
  const [selected, setSelected] = useState(1)
  const [showDefault, setShowDefault] = useState(true)
  //
  const content = joke || pickupLine || insult

  function get_selectedType() {
    setShowDefault(false)
    clearJoke()
    clearPickupLine()
    clearInsult()
    if (selected === 1) {
      getJoke()
    } else if (selected === 2) {
      getPickupLine()
    } else if (selected === 3) {
      getInsult()
    }
  }

  async function shareText(text){
    try{
      await Share.share({
        message:text
      })
    } catch (err){
      console.log('Error sharing text:', err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        
      </View>

      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentMain}
      >
        <View style={styles.header}>
          <Image source={kmon2} style={styles.image} />
          <View style={styles.headerTextArea}>
            <Text style={styles.headerTitle}>Kmon</Text>
            <Text style={styles.headerSubTitle}>Seu gerador de frases divertidas!</Text>
          
          </View>
        </View>
        
        <View style={styles.outPutBox}>
          {showDefault && (
            <>
              <Text style={styles.textDefault}>
                """
              </Text>
              <Ionicons name={'happy-outline'} style={[styles.textDefault, {fontSize: 50}]}/>
              <Text style={styles.textDefault}>
                Toque no botão para gerar {selected === 1 ? 'piada' : selected === 2 ? 'cantada' : 'insulto'}!
              </Text>
              <Text style={styles.textDefault}>
                """
              </Text>
            </>
          )}
          <Text style={styles.text}>{content}</Text>
        </View>

        <RadioButton
          value={selected}
          onChange={setSelected}
        />

        <ButtonGenerate
          onPress={get_selectedType}
        />
        <View style={styles.options}>
        <ButtonGeneric
        label='Compartilhar'
        onPress={() => { if (!content) return 
          shareText(content)}
        }
        icon={{name: 'share-social-outline', color: colors.bege}}
        />
        <ButtonGeneric
        label='Copiar'
        onPress={async () => { 
          if (!content) return
          await Clipborad.setStringAsync(content)
        }}
        icon={{name: 'copy-outline', color: colors.bege}}
        />

        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
