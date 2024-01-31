import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigate } from "react-router-native";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Appbar style={{ marginTop: 'auto' }}>
      <Appbar.Action icon="information" onPress={() => navigate("/about")} />
    </Appbar>
  );
};

export default Footer;
