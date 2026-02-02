import { useRouter } from "expo-router";
import { Pressable, ViewStyle } from "react-native";

export default function RouterButton({ href, style, children }) {
  const router = useRouter();

  return (
    <Pressable
      style={style}
      onPress={() => router.push(href)}
    >
      {children}
    </Pressable>
  );
}
