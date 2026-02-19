import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable, Alert, StatusBar, Animated, Dimensions, ScrollView, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import Slider from '@react-native-community/slider';
import RouterButton from '../../components/routers/router';
import { HomeContent } from '../../assets/styles';

const { height } = Dimensions.get('window');
import { useRouter } from 'expo-router';
export default function Home() {
  const bgImage = false; 
  const slideAnim = useRef(new Animated.Value(-height)).current;
  const [selectedQuality, setSelectedQuality] = useState('medium-quality');
  const [selectedDifficulty, setSelectedDifficulty] = useState('normal');
  const [soundFxVolume, setSoundFxVolume] = useState(0.7);
  const [musicVolume, setMusicVolume] = useState(0.5);

  // Hide navigation bar when component mounts
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('overlay-swipe');
      NavigationBar.setBackgroundColorAsync('#000000');
    }
  }, []);

  // Settings configuration
  const settingsConfig = [
    {
      name: 'General',
      type: 'select',
      functions: [
        { name: 'High Quality', value: 'high-quality' },
        { name: 'Medium Quality', value: 'medium-quality' },
        { name: 'Low Quality', value: 'low-quality' },
      ]
    },
    {
      name: 'Audio',
      type: 'slider',
      functions: [
        { name: 'Sound Effects', value: 'sound-fx', volume: soundFxVolume, setter: setSoundFxVolume },
        { name: 'Background Music', value: 'bg-music', volume: musicVolume, setter: setMusicVolume },
      ]
    },
    {
      name: 'Gameplay',
      type: 'select',
      functions: [
        { name: 'Easy Mode', value: 'easy' },
        { name: 'Normal Mode', value: 'normal' },
        { name: 'Hard Mode', value: 'hard' },
      ]
    },
  ];
  const router = useRouter()
  const handleStartGame = () => {
    Alert.alert("Game Start", "Moving to Game World...");
    router.push('/fairy-forest')
  };

  const openSettings = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  const closeSettings = () => {
    Animated.spring(slideAnim, {
      toValue: -height,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  const renderContent = () => (
    <View style={HomeContent.overlay}>
      <View style={HomeContent.header}>
        <Text style={HomeContent.gameTitle}>SWORD QUEST</Text>
        <Text style={HomeContent.subtitle}>Version 0.0.2</Text>
      </View>
      <View style={HomeContent.menu}>
        <Pressable style={HomeContent.button} onPress={handleStartGame}>
          <Text style={HomeContent.buttonText}>START GAME</Text>
        </Pressable>
        <Pressable style={[HomeContent.button, HomeContent.secondaryButton]} onPress={openSettings}>
          <Text style={HomeContent.buttonText}>SETTINGS</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={HomeContent.container}>
      <StatusBar hidden={true} />
      {bgImage ? (
        <ImageBackground source={bgImage} style={HomeContent.backgroundImage}>
          {renderContent()}
        </ImageBackground>
      ) : (
        <View style={[HomeContent.backgroundImage, { backgroundColor: '#121212' }]}>
          {renderContent()}
          <Text style={{color: '#333', position: 'absolute', bottom: 20}}>Missing: background.png</Text>
        </View>
      )}

      {/* Settings Panel - Slides down from top */}
      <Animated.View 
        style={[
          HomeContent.settingsPanel, 
          { transform: [{ translateY: slideAnim }] }
        ]}
      >
        <View style={HomeContent.settingsHeader}>
          <Text style={HomeContent.settingsTitle}>⚙️ SETTINGS</Text>
          <Pressable onPress={closeSettings} style={HomeContent.closeButton}>
            <Text style={HomeContent.closeButtonText}>✕</Text>
          </Pressable>
        </View>

        <ScrollView style={HomeContent.settingsContent}>
          {settingsConfig.map((section, sectionIndex) => (
            <View key={sectionIndex} style={HomeContent.settingSection}>
              <Text style={HomeContent.sectionTitle}>{section.name}</Text>
              
              {section.type === 'select' && section.functions.map((item, itemIndex) => (
                <Pressable 
                  key={itemIndex}
                  style={[
                    HomeContent.settingItem,
                    (section.name === 'General' ? selectedQuality : selectedDifficulty) === item.value && HomeContent.settingItemActive
                  ]}
                  onPress={() => {
                    if (section.name === 'General') {
                      setSelectedQuality(item.value);
                    } else {
                      setSelectedDifficulty(item.value);
                    }
                    Alert.alert("Setting Changed", `${item.name} selected`);
                  }}
                >
                  <Text style={HomeContent.settingText}>{item.name}</Text>
                  {(section.name === 'General' ? selectedQuality : selectedDifficulty) === item.value && (
                    <Text style={HomeContent.checkmark}>✓</Text>
                  )}
                </Pressable>
              ))}

              {section.type === 'slider' && section.functions.map((item, itemIndex) => (
                <View key={itemIndex} style={HomeContent.sliderContainer}>
                  <View style={HomeContent.sliderHeader}>
                    <Text style={HomeContent.sliderLabel}>{item.name}</Text>
                    <Text style={HomeContent.sliderValue}>{Math.round(item.volume * 100)}%</Text>
                  </View>
                  <Slider
                    style={HomeContent.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={item.volume}
                    onValueChange={item.setter}
                    minimumTrackTintColor="#FFD700"
                    maximumTrackTintColor="#444"
                    thumbTintColor="#FFD700"
                  />
                  <View style={HomeContent.sliderLabels}>
                    <Text style={HomeContent.sliderLabelText}>🔇</Text>
                    <Text style={HomeContent.sliderLabelText}>🔊</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}

          <Pressable 
            style={[HomeContent.button, HomeContent.dangerButton, {marginTop: 40, marginBottom: 20}]}
            onPress={() => Alert.alert("Reset", "Game data will be reset")}
          >
            <Text style={HomeContent.buttonText}>RESET GAME</Text>
          </Pressable>
        </ScrollView>
      </Animated.View>
    </View>
  );
}