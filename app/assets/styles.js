import { StyleSheet } from "react-native";
const HomeContent = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, backgroundColor: '#000' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'space-around', alignItems: 'center' },
  header: { alignItems: 'center', marginTop: 40 },
  gameTitle: { fontSize: 48, fontWeight: 'bold', color: '#FFD700', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10 },
  subtitle: { color: 'white', letterSpacing: 2, marginTop: 5 },
  menu: { width: '100%', alignItems: 'center', marginBottom: 100 },
  button: { backgroundColor: '#00cc66', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, marginVertical: 10, width: 250, alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, borderBottomWidth: 4, borderBottomColor: '#008044' },
  secondaryButton: { backgroundColor: '#444', borderBottomColor: '#222' },
  dangerButton: { backgroundColor: '#cc3300', borderBottomColor: '#881100' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase' },
  smallText: { color: '#aaa', marginTop: 20, textDecorationLine: 'underline' },
  
  // Settings Panel Styles
  settingsPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,
    backgroundColor: '#1a1a1a',
    zIndex: 1000,
  },
  settingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#0a0a0a',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  settingsTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsContent: {
    padding: 20,
  },
  settingSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#555',
  },
  settingItemActive: {
    borderLeftColor: '#FFD700',
    backgroundColor: '#333',
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  checkmark: {
    color: '#00cc66',
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  // Slider Styles
  sliderContainer: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  sliderValue: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  sliderLabelText: {
    color: '#888',
    fontSize: 16,
  },
});
export {
    HomeContent
}