import { Modal, Pressable, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Seasons } from "./Seasons";
import { useSettings } from "@/app/SettingsContext";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

type CustomLinkProps = {
  prt: string;
  eng: string;
  ita: string;
  link: string;
};

type closeModalProps = {
  link: string;
};


const InfoMenu: React.FC<MenuProps> = ({ onClose, isVisible }) => {

  const { language } = useSettings();


  const router = useRouter();
  const closeModal = ({ link }: closeModalProps) => {
    router.push({ pathname: link as any });
    onClose();
  };

  
  function CustomLink({ prt, eng, ita, link }: CustomLinkProps) {
    return (
      <TouchableOpacity onPress={() => closeModal({ link })}>
        {language === "prt" && <Text style={styles.link}>{prt}</Text>}
        {language === "eng" && <Text style={styles.link}>{eng}</Text>}
        {language === "ita" && <Text style={styles.link}>{ita}</Text>}
      </TouchableOpacity>
    );
  }





  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <Pressable style={styles.closeBut} onPress={onClose}>
            <Ionicons name="close" color={"darkred"} size={30} />
          </Pressable>
          <View style={styles.info}>
            <View style={styles.links}>
            <CustomLink prt='O que è a Roda Medicinal?' eng='What is the Medicine Wheel' ita="Cos'è la Ruota Medicinale?" link="../pagine/aRodaMedicinal" />
            <CustomLink prt='Porque a escolha do emisferio?' eng='Why selecting the hemisphere?' ita="Perchè la scelta dell'emisfero?" link="../pagine/hemisferios" />
            <CustomLink prt='Quem Somos?' eng='Who are we?' ita='Chi siamo?' link="../pagine/quemSomos" />
            <CustomLink prt='Bibliografia' eng='Bibliography' ita='Bibliografia' link="../pagine/bibliografia" />
            <CustomLink prt='A Estrutura da Roda' eng="The Wheel's Structure" ita='La struttura della Ruota' link="../pagine/estruturaRoda" />
            <CustomLink prt='Suporte-nos!' eng='Support Us!' ita='Supportaci!' link="../pagine/suportenos" />
            <CustomLink prt='Contatos' eng='Contacts' ita='Contatti' link="../pagine/contatos" />
            <CustomLink prt='Lista Paginas' eng='Pages List' ita='Lista Pagine' link="../pagine/listaPagine" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InfoMenu;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  container: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    width: "95%",
    height: "90%",
    margin: "auto",
    overflow: "hidden",
    padding: "1%",
    borderColor: "rgb(30, 60, 80)",
    borderWidth: 2,
    borderRadius: 15,
  },
  closeBut: {
    position: "absolute",
    right: 5,
    width: 30,
    height: 30,
    zIndex: 6,
  },
  info: {
    width: "95%",
    height: "95%",
    bottom: "0%",
    flex: 1,
    justifyContent: 'center'
  },
  link: {
    
    
    textAlign: "center",
    margin: 10,
    textDecorationLine: "underline",
    color: "darkgreen",
    fontFamily: "Cochin",
    fontSize: 16,
  },
  links: {
    flex: 1,
    height: '95%',
    justifyContent: 'center',
    gap: 10
  },
});
